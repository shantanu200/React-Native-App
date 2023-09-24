import { Button } from "react-native-paper";
import { ButtonProps } from "../../interfaces/ButtonProps";
import { Dimensions, StyleSheet } from "react-native";

const GreenButton: React.FC<ButtonProps> = ({
  text,
  handleFunction,
  icon,
  loading,
  disabled,
}) => {
  const { width } = Dimensions.get("screen");
  return (
    <Button
      style={{
        width: width * 0.8,
        padding: 8,
      }}
      labelStyle={{
        fontSize: 16,
      }}
      textColor="#1B2E35"
      buttonColor="#59E4A8"
      icon={icon}
      loading={loading}
      onPress={handleFunction}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default GreenButton;
