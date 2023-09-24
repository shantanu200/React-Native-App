import { Dimensions, Image } from "react-native";
import { ImageProp } from "../../interfaces/ImageProps";

const ImageContainer: React.FC<ImageProp> = ({ url }) => {
  return (
    <Image
      source={require("../../assets/images/screen1.jpg")}
      style={{
        width: Dimensions.get("screen").width,
        height: 320,
      }}
    />
  );
};

export default ImageContainer;
