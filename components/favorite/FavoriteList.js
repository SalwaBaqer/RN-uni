import { ScrollView } from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import favoriteStore from "../../stores/favoriteStore";
import { observer } from "mobx-react";
import FavoriteItem from "./FavoriteItem";
import background from "../../assets/background.png";

const FavoriteList = () => {
  const favoritesList = favoriteStore.favorites.map((fav, index) => (
    <FavoriteItem key={index} fav={fav} />
  ));
  return (
    <ImageBackground style={styles.container} source={background}>
      <ScrollView style={styles.container}>{favoritesList}</ScrollView>
    </ImageBackground>
  );
};

export default observer(FavoriteList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
  },
});
