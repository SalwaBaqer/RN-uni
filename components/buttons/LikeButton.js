import { Ionicons } from "@expo/vector-icons";
import { useToast } from "native-base";
import favoriteStore from "../../stores/favoriteStore";

const LikeButton = ({ uni }) => {
  const toast = useToast();
  const handlePress = () => {
    favoriteStore.addFavorite(uni);
    toast.show({
      title: "💜",
      backgroundColor: "#FF00FF05",
    });
  };
  return (
    <Ionicons
      name="heart-outline"
      size={24}
      color="purple"
      onPress={handlePress}
    />
  );
};

export default LikeButton;
