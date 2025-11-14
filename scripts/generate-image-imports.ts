import fs from "fs"
import path from "path"
import {glob} from "glob"

const ASSETS_DIR = path.join(process.cwd(), "assets_optimized")
const OUTPUT_FILE = path.join(ASSETS_DIR, "index.ts")

const files = glob.sync(`${ASSETS_DIR}/**/*.{jpg,jpeg,png,webp}`)

const imports: string[] = []
const exports: string[] = []

files.forEach((file) => {
    const relPath = "./" + path.relative(ASSETS_DIR, file).replace(/\\/g, "/")
    const varName = path
        .basename(file)
        .replace(/\.[^.]+$/, "")
        .replace(/[-\s]/g, "_")
    imports.push(`import ${varName}_${file.split('.').pop()} from "${relPath}";`)
    exports.push(`${varName}_${file.split('.').pop()}`)
})

const content = `${imports.join("\n")}\n\nexport { ${exports.join(", ")} };`

fs.writeFileSync(OUTPUT_FILE, content)
console.log(`✅ Generated ${OUTPUT_FILE} with ${files.length} images`)
