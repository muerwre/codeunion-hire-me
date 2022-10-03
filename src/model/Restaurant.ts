export interface Restaurant {
  id: number;
  title: string;
  description: string;
  image?: string;
  location: {
    lat: number;
    lng: number;
    title: string;
  };
}
