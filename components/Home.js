import { StyleSheet, Text, ImageBackground } from "react-native";
import background from "../assets/background.png";

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.container}>
      <Text style={styles.title}>Uni Finder</Text>
      <Text style={styles.subTitle} onPress={() => navigation.navigate("List")}>
        Press here to continue
      </Text>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
  },
  title: {
    flex: 3,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    fontSize: 45,
    color: "purple",
  },
  subTitle: {
    flex: 2,
    marginTop: 10,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    fontSize: 20,
    color: "black",
  },
});
