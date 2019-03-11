
import React from "react";
import {Font} from 'expo';
import {StyleSheet, View, StatusBar, TouchableWithoutFeedback, Image, ImageBackground} from "react-native";
import Files from "./Files";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import GameModeScreen from "./GameMode";
import { createStackNavigator, createAppContainer } from "react-navigation"
import GeneralGameScreen from "./GeneralGame";
import InstructionScreen from "./Instruction";


class StartScreen extends React.Component {

  componentDidMount() {
    Font.loadAsync({
      Subscribe: require('./assets/fonts/Subscribe.ttf')
    });
  }

  constructor(props) {
    super(props);
  }

  goToScreen(screenName) {
      this.props.navigation.navigate(screenName);
  }

  render() {
    return (
        <View>
          <StatusBar hidden={true}/>
          <ImageBackground source={Files.statics.background} style={styles.background}>
            <View style={styles.logoContainer}>
              <Image source={Files.statics.logo} style={styles.logo}/>
            </View>
            <View>
              <Image style={styles.backgroundBlimp} source={Files.statics.backgroundBlimp}/>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableWithoutFeedback onPress={() => {this.goToScreen("Gamemode")}}>
                <Image style={styles.buttonPlay} source={Files.statics.buttonPlay}/>
              </TouchableWithoutFeedback>
            </View>
            <Image style={styles.buttonHighscore} source={Files.statics.buttonHighscore}/>
            <TouchableWithoutFeedback onPress={() => {this.goToScreen("Instruction")}}>
                <Image style={styles.buttonInstructions} source={Files.statics.buttonInstructions}/>
            </TouchableWithoutFeedback>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: wp(100),
    height: "100%",
    zIndex: -100
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    resizeMode: "stretch",
    height: hp(20),
    width: wp(60),
    marginTop: hp(5),
    marginBottom: hp(5)
  },
  backgroundBlimp: {
    resizeMode: "stretch",
    height: hp(20),
    width: wp(60),
    marginLeft: wp(40),
    marginTop: hp(3),
  },
  buttonsContainer: {
    alignItems: "center",
  },
  buttonPlay: {
    height: hp(12),
    width: wp(60),
    marginTop: hp(8),
    marginBottom: wp(15)
  },
  buttonHighscore: {
    resizeMode: "stretch",
    height: hp(10),
    width: wp(40),
    marginLeft: wp(6),
    marginTop: hp(5)
  },
  buttonInstructions: {
    resizeMode: "stretch",
    height: hp(10),
    width: wp(40),
    marginLeft: wp(55),
    marginTop: hp(-10),
  },
  debugBorder:{
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 2
  }
});

const AppNavigator = createStackNavigator(
    {
        Start: StartScreen,
        Gamemode: GameModeScreen,
        GeneralGame: GeneralGameScreen,
        Instruction: InstructionScreen
    },
    {
      initialRouteName: "Start",
      defaultNavigationOptions: {
        header: null
      }
    }
);

export default createAppContainer(AppNavigator);

