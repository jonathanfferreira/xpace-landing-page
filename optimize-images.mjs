import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');
const distDir = path.resolve('public/images');

const processDirectory = (dir) => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const outputName = file.replace(ext, '.webp');
                const outputPath = path.join(path.dirname(filePath), outputName);

                console.log(`Converting: ${filePath}`);

                sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(outputPath)
                    .then(() => console.log(`Saved: ${outputPath}`))
                    .catch(err => console.error(`Error converting ${filePath}:`, err));
            }
        }
    });
};

processDirectory(imagesDir);
