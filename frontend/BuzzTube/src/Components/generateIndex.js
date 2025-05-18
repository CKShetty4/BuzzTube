// Navigate to the assets directory using "cd path/to/assets" in the terminal.
// Execute the script by running "node generateIndex.js" in the terminal.
import { readdir, writeFile, stat } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pagesDir = __dirname; 
const indexFile = join(pagesDir, "index.js");

async function generatePagesIndex() {
    try {
        const files = await readdir(pagesDir);
        const pageFolders = [];

        // Check which files are directories (subfolders)
        for (const file of files) {
            const fullPath = join(pagesDir, file);
            const fileStat = await stat(fullPath);

            if (fileStat.isDirectory()) {
                pageFolders.push(file);
            }
        }

        const imports = pageFolders
            .map(folder => `import ${folder} from "./${folder}/${folder}";`)
            .join("\n");

        const exports = `export { ${pageFolders.join(", ")} };`;

        const content = `${imports}\n\n${exports}\n`;

        await writeFile(indexFile, content);
        console.log("✅ index.js for Pages generated successfully!");
    } catch (err) {
        console.error("❌ Error generating index.js for Pages:", err);
    }
}

generatePagesIndex();
