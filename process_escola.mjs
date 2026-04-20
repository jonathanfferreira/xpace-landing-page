import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import heicConvert from 'heic-convert';

const inputDir = path.resolve('escola');
const outputDir = path.resolve('public/images/gallery_new');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function processImages() {
    const files = fs.readdirSync(inputDir);
    const results = [];

    for (const file of files) {
        const filePath = path.join(inputDir, file);
        const ext = path.extname(file).toLowerCase();
        
        try {
            console.log(`Processing: ${file}`);
            if (ext === '.heic') {
                const inputBuffer = fs.readFileSync(filePath);
                const outputBuffer = await heicConvert({
                    buffer: inputBuffer, // the HEIC file buffer
                    format: 'JPEG',      // output format
                    quality: 0.8         // the jpeg compression quality
                });
                
                const safeName = file.replace(ext, '').replace(/[\s\(\)]/g, '_').toLowerCase() + '.jpg';
                const outputPath = path.join(outputDir, safeName);
                fs.writeFileSync(outputPath, outputBuffer);
                results.push({ src: `/images/gallery_new/${safeName}`, category: "ESTRUTURA" });
            } else if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const safeName = file.replace(ext, '').replace(/[\s\(\)]/g, '_').toLowerCase() + '.webp';
                const outputPath = path.join(outputDir, safeName);
                await sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                results.push({ src: `/images/gallery_new/${safeName}`, category: "ESTÚDIO" });
            }
        } catch (err) {
            console.error(`Error with ${file}:`, err);
        }
    }
    
    // Write out a JSON file with the results so we can parse it for Gallery.tsx
    fs.writeFileSync(path.join(outputDir, 'images.json'), JSON.stringify(results, null, 2));
    console.log('Complete');
}

processImages();
