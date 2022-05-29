export default interface Anime {
  id: number;
  titles: {
    original: string;
    canonical: string | null;
    translated: string | null;
  };
  categories: {
    nodes: {
      title: {
        [lang: string]: string;
      };
    }[];
  };
  description: {
    [language: string]: string;
  };
  ageRating: string;
  ageRatingGuide: string;
  posterImage: {
    original: {
      url: string;
    };
  } | null;
  bannerImage: {
    original: {
      url: string;
    };
  } | null;
  episodeCount: number;
  episodeLength: number;
  youtubeTrailerVideoId: string | null;
  streamingLinks: {
    nodes: {
      streamer: {
        siteName: string;
      };
      url: string;
    }[];
  };
}
