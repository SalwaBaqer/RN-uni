import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import UniversityList from "../university/UniversityList";
import FavoriteList from "../favorite/FavoriteList";
import FavoriteButton from "../buttons/FavoriteButton";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="List"
        component={UniversityList}
        options={{
          headerLeft: null,
          headerRight: () => <FavoriteButton />,
        }}
      />
      <Screen name="Favorites" component={FavoriteList} />
    </Navigator>
  );
};

export default RootNavigator;
