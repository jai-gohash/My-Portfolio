import fs from 'fs';
import https from 'https';

const sites = [
  { name: 'flutter', url: 'https://flutter.dev' },
  { name: 'dart', url: 'https://dart.dev' },
  { name: 'firebase', url: 'https://firebase.google.com' },
  { name: 'figma', url: 'https://www.figma.com' },
  { name: 'git', url: 'https://git-scm.com' },
  { name: 'github', url: 'https://github.com' },
  { name: 'androidstudio', url: 'https://developer.android.com/studio' },
  { name: 'vscode', url: 'https://code.visualstudio.com' },
  { name: 'cplusplus', url: 'https://isocpp.org' },
  { name: 'postman', url: 'https://www.postman.com' },
  { name: 'c', url: 'https://en.cppreference.com' },
  { name: 'html', url: 'https://html.spec.whatwg.org' },
  { name: 'css', url: 'https://www.w3.org/Style/CSS/' },
  { name: 'media_query', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries' },
  { name: 'layout_builder', url: 'https://api.flutter.dev/flutter/widgets/LayoutBuilder-class.html' }
];

sites.forEach(site => {
  const iconUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(site.url)}&size=256`;
  https.get(iconUrl, (res) => {
    const file = fs.createWriteStream(`./public/images/${site.name}.png`);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${site.name}.png`);
    });
  });
});
