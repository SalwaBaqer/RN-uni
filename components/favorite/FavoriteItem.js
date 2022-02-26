import { Text, StyleSheet } from "react-native";
import { HStack, VStack } from "native-base";
import LikeButton from "../buttons/LikeButton";
import { observer } from "mobx-react-lite";
import UniversityLogo from "../university/UniversityLogo";

function FavoriteItem({ fav }) {
  const { university } = fav;
  return (
    <HStack style={styles.container}>
      <UniversityLogo />
      <Text style={styles.name}>{university.name}</Text>
      <VStack style={styles.likes}>
        <LikeButton uni={university} />
        <Text>{fav.likes} likes</Text>
      </VStack>
    </HStack>
  );
}

export default observer(FavoriteItem);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 12,
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    flex: 1,
  },
  likes: {
    alignItems: "center",
    padding: 10,
    width: 100,
  },
  name: {
    width: 220,
    left: 10,
    fontSize: 16,
  },
});
