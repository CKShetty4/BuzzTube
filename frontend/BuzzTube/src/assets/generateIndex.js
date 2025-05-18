// Navigate to the assets directory using "cd path/to/assets" in the terminal.
// Execute the script by running "node generateIndex.js" in the terminal.

import { readdir, writeFile } from "fs/promises";
import { basename, extname, join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = __dirname; 
const indexFile = join(assetsDir, "index.js");

async function generateIndex() {
    try {
        const files = await readdir(assetsDir);
        
        const assetFiles = files.filter(file => file !== "index.js"&& file !== "generateIndex.js");

        const imports = assetFiles
            .map(file => {
                const variableName = basename(file, extname(file)).replace(/[^a-zA-Z0-9]/g, "_");
                return `import ${variableName} from './${file}';`;
            })
            .join("\n");

        const exports = `export { ${assetFiles.map(file => basename(file, extname(file)).replace(/[^a-zA-Z0-9]/g, "_")).join(", ")} };`;

        const content = `${imports}\n\n${exports}\n`;

        await writeFile(indexFile, content);
        console.log("✅ index.js generated successfully!");
    } catch (err) {
        console.error("❌ Error generating index.js:", err);
    }
}

generateIndex();
