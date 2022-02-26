import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const FavoriteButton = () => {
  const navigation = useNavigation();
  return (
    <Ionicons
      style={styles.icon}
      name="heart"
      size={26}
      style={styles.icon}
      onPress={() => navigation.navigate("Favorites")}
    />
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  icon: {
    right: 15,
    color: "purple",
  },
});
