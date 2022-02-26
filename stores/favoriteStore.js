import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class FavoriteStore {
  favorites = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFavorite = async (uni) => {
    const foundUni = this.favorites.find(
      (fav) => fav.university.name === uni.name
    );
    if (foundUni) {
      foundUni.likes = foundUni.likes + 1;
    } else {
      const university = {
        university: uni,
        likes: 1,
      };
      this.favorites.push(university);
      await AsyncStorage.setItem("favorite", JSON.stringify(this.favorites));
    }
  };

  fetchFavorites = async () => {
    const favorites = await AsyncStorage.getItem("favorite");
    this.favorites = favorites ? JSON.parse(favorites) : [];
  };
}

const favoriteStore = new FavoriteStore();
favoriteStore.fetchFavorites();
export default favoriteStore;
