import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { Text } from "react-native-paper";
import BlackButton from "../../common/Button/BlackButton";
import GreenButton from "../../common/Button/GreenButton";
import ImageContainer from "../../common/Image/ImageContainer";

const HomeScreen: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Home Screen</Text>
      <ImageContainer />
      <View style={styles.footer}>
        <GreenButton
          icon="gamepad-round-outline"
          text={"Start Game"}
          handleFunction={() => console.log("Hello Black Button")}
        />
        <Text>
          Click 'Start Game' to embark on an adventure, agreeing to our Terms
          and Conditions.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
  footer: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#000",
  },
});

export default HomeScreen;
