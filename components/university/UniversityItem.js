import { Text, StyleSheet } from "react-native";
import { HStack, VStack } from "native-base";
import LikeButton from "../buttons/LikeButton";
import UniversityLogo from "./UniversityLogo";

export default function UniversityItem({ uni }) {
  const domains = uni.domains.map((domain, index) => (
    <Text style={styles.url} key={index}>
      {domain}
    </Text>
  ));
  return (
    <HStack style={styles.container} space="3">
      <UniversityLogo />
      <VStack>
        <Text style={styles.name}>{uni.name}</Text>
        <HStack>{domains}</HStack>
      </VStack>
      <LikeButton uni={uni} />
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 12,
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
  },
  name: {
    width: 250,
    left: 10,
    fontSize: 16,
  },
  url: {
    width: 250,
    left: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
