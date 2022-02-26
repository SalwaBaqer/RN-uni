import universityStore from "../../stores/universityStore";
import { observer } from "mobx-react";
import UniversityItem from "./UniversityItem";
import { ScrollView } from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import background from "../../assets/background.png";

const UniversityList = () => {
  const universitiesList = universityStore.universities.map((uni, index) => (
    <UniversityItem key={index} uni={uni} />
  ));
  return (
    <ImageBackground style={styles.container} source={background}>
      <ScrollView style={styles.container}>{universitiesList}</ScrollView>
    </ImageBackground>
  );
};

export default observer(UniversityList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
  },
});
