const fs = require('fs');
const path = require('path');
const blogDir = path.join(process.cwd(), 'blog');

function moveEpisodeIds() {
  const fileNames = fs.readdirSync(blogDir);
  fileNames.forEach((fileName) => {
    const fullPath = path.join(blogDir, fileName);
    const contents = fs.readFileSync(fullPath, 'utf8');
    const episodeId = contents.match(/episodeId="([^"]+)"/)[1];

    const withIdInFrontMatter = contents.replace(
      '---',
      `---\nepisodeId: "${episodeId}"`
    );

    fs.writeFileSync(fullPath, withIdInFrontMatter);
  });
}

moveEpisodeIds();
