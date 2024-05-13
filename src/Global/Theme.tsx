import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



export default {
    colors: {
        primary: '#201D47',
        secondary: '#262250',
        darkBlue: '#141827',
        secondaryLight: '#6F6C99',
        greenLight: '#50E3C2',
        pink: '#FF409A',
        white: '#fff'
    },
    dimensions: {
        widthScreen: screenWidth,
        heightScreen: screenHeight,
    },
};