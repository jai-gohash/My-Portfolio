import fs from 'fs';
import https from 'https';
import sharp from 'sharp';

const icons = [
  { name: 'flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'dart', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
  { name: 'firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  { name: 'figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'github', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'androidstudio', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
  { name: 'vscode', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'cplusplus', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'postman', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'c', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  { name: 'html', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'css', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' }
];

icons.forEach(icon => {
  https.get(icon.url, (res) => {
    let data = [];
    res.on('data', chunk => data.push(chunk));
    res.on('end', () => {
      const buffer = Buffer.concat(data);
      sharp(buffer)
        .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .png()
        .toFile(`./public/images/${icon.name}.png`)
        .then(() => console.log(`Converted ${icon.name}.png`))
        .catch(err => console.error(`Error with ${icon.name}:`, err));
    });
  });
});

const extra = [
  { name: 'media_query', url: 'https://ui-avatars.com/api/?name=Media+Query&background=random&color=fff&size=512' },
  { name: 'layout_builder', url: 'https://ui-avatars.com/api/?name=Layout+Builder&background=random&color=fff&size=512' }
];

extra.forEach(icon => {
  https.get(icon.url, (res) => {
    const file = fs.createWriteStream(`./public/images/${icon.name}.png`);
    res.pipe(file);
    file.on('finish', () => console.log(`Downloaded ${icon.name}.png`));
  });
});
