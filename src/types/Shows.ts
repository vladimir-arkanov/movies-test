export type Shows = {
  show: {
    id: number,
    url: string,
    name: string,
    type: string,
    genres: string[],
    schedule: {
      time: string,
      days: string[],
    },
    status: string,
    summary: string
    image?: {
      medium?: string,
      original?: string,
    }
    rating: {
      average: number,
    }
  }
};
