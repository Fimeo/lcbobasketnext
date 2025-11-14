// scripts/optimize-images.ts
import fs from "fs"
import path from "path"
import sharp from "sharp"
import {glob} from "glob";

const SOURCE_DIR = path.join(process.cwd(), "assets")
const OUTPUT_DIR = path.join(process.cwd(), "assets_optimized")

async function optimizeImage(inputPath: string, outputDir: string) {
    const ext = path.extname(inputPath)
    const name = path.basename(inputPath, ext)

    const outputJpg = path.join(outputDir, `${name}.jpg`)
    const outputWebp = path.join(outputDir, `${name}.webp`)
    const outputPNG = path.join(outputDir, `${name}.png`)

   if (!fs.existsSync(path.join(outputDir, `${name}.jpg`))) {
       await sharp(inputPath)
           .resize({ width: 2000, withoutEnlargement: true }) // limite la taille max
           .jpeg({ quality: 80 })
           .toFile(outputJpg)
   }

    if (!fs.existsSync(path.join(outputDir, `${name}.web^`))) {
        await sharp(inputPath)
            .resize({ width: 2000, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outputWebp)
    }

    if (!fs.existsSync(path.join(outputDir, `${name}.png`))) {
        await sharp(inputPath)
            .resize({ width: 2000, withoutEnlargement: true })
            .png({ quality: 80 })
            .toFile(outputPNG)
    }

    console.log(`✅ Optimized: ${path.basename(inputPath)}`)
}

async function run() {
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

    const files = glob.sync(`${SOURCE_DIR}/**/*.{jpg,jpeg,png,webp,svg}`)

    console.log(`Found ${files.length} images to optimize...`)
    for (const file of files) {
        const relDir = path.dirname(path.relative(SOURCE_DIR, file))
        const outputDir = path.join(OUTPUT_DIR, relDir)
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

        await optimizeImage(file, outputDir)
    }
    console.log("🎉 All images optimized successfully!")
}

run().catch(console.error)
