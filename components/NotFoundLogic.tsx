"use client";

import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import { useEffect, useState } from 'react';
import { useCurrentRoute } from '../hooks/router'; // Assuming this hook is compatible or can be adapted
import { findMatchingEpisode, getAllEpisodeData, RssItem } from '../lib/rss';

export default function NotFoundLogic() {
  const router = useRouter();
  const { currentRoute } = useCurrentRoute(); // This hook might need an update for App Router if it relies on pages router specifics
  const [allEpisodeData, setAllEpisodeData] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDataAndRedirect() {
      try {
        const data = await getAllEpisodeData();
        setAllEpisodeData(data);
      } catch (error) {
        console.error("Failed to fetch episode data for 404 redirect logic:", error);
      }
      setLoading(false);
    }
    fetchDataAndRedirect();
  }, []);

  useEffect(() => {
    if (!loading && currentRoute && allEpisodeData.length > 0) {
      const dateMatch = currentRoute.match(
        /\/([0-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9])/
      );

      if (dateMatch) {
        const [year, month, day] = dateMatch[1].split('/');
        const matchingEpisode = findMatchingEpisode(
          year,
          month,
          day,
          allEpisodeData
        );

        if (matchingEpisode) {
          router.push(matchingEpisode.episodeLink);
        }
      }
    }
  }, [currentRoute, allEpisodeData, router, loading]);

  // This component doesn't render anything itself, it just handles logic
  return null;
}
