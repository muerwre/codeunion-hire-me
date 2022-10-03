import { first } from "lodash";
import { Restaurant } from "~/model/Restaurant";

export interface RestaurantResponseItem {
  is_favourite: boolean;
  id: number;
  title: string;
  description: string;
  schedule_id: number;
  coords_id: number;
  user_id: number;
  schedule: {
    id: number;
    opening: string;
    closing: string;
  };
  coords: {
    id: number;
    longitude: 76.88892877135433;
    latitude: 43.23672076148338;
    address_name: string;
  };
  images: {
    id: number;
    url: string;
    restaurant_id: 3;
  }[];
  user: {
    id: number;
    email: string;
    nickname: string;
  };
}

export const restaurantResponseItemToModel = (
  item: RestaurantResponseItem
): Restaurant => ({
  id: item.id,
  title: item.title,
  description: item.description,
  image: first(item.images)?.url,
  location: {
    lat: item.coords.latitude,
    lng: item.coords.longitude,
    title: item.coords.address_name,
  },
});
