import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default {
    colors: {
        primary: ''
    },
    dimensions: {
        widthScreen: screenWidth,
        heightScreen: screenHeight,
    },
};