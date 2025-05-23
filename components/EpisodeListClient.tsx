"use client";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'; // Corrected import
import EpisodePreview, {
  EpisodePreviewProps,
} from './EpisodePreview/EpisodePreview'; // Adjusted path
import PodcastCard from './PodcastCard'; // Adjusted path

type EpisodeListClientProps = {
  episodePreviews: EpisodePreviewProps[];
  numberOfPages: number;
  currentPage: number;
};

export default function EpisodeListClient({
  episodePreviews,
  numberOfPages,
  currentPage,
}: EpisodeListClientProps) {
  const router = useRouter();
  const pathname = usePathname(); // Used to reconstruct path for navigation

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    // Assuming pathname is like /episode-list/some_number
    // We want to replace the last part with the new page number.
    // Or, more simply, construct the path directly if it's always /episode-list/[page]
    router.push(`/episode-list/${value}`);
  }

  return (
    <Stack spacing={4} paddingTop={4} paddingBottom={4}>
      <Stack spacing={2}>
        {episodePreviews.map((episode) => (
          <PodcastCard key={episode.episodeLink}>
            <EpisodePreview {...episode} />
          </PodcastCard>
        ))}
      </Stack>
      <Pagination
        count={numberOfPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ alignSelf: 'center' }} // Center pagination
      />
    </Stack>
  );
}
