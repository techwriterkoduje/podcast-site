import { createEpisodePages } from '../lib/blog';
import { saveAllEpisodeData } from '../lib/rss';

(async () => {
  await saveAllEpisodeData();
  createEpisodePages();
})();
