import { GetStaticProps } from 'next/types';
import { getSortedPosts } from '../lib/blog';
import { AllPosts } from '../types';
import EpisodeEmbed from './episodeEmbed';

export default function LatestEpisodeEmbed({ allPosts }: AllPosts) {
  return <EpisodeEmbed episodeId={allPosts[0].id} />;
}


