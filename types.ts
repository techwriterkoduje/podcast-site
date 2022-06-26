export type Post = {
  id: string;
  date: string;
  title: string;
  episodeId: string;
};

export type AllPosts = {
  allPosts: Post[];
};
