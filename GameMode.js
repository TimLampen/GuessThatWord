import React from "react"
import {View, Text, ImageBackground, Image, TouchableWithoutFeedback, StyleSheet} from "react-native";
import Files from "./Files";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class GameModeScreen extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <ImageBackground source={Files.statics.background} style={styles.background}>
                    <View style={styles.logoContainer}>
                        <Image source={Files.statics.logoGameMode} style={styles.logo}/>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableWithoutFeedback onPress={() => {this.onPlay("Easy")}}>
                            <Image style={styles.buttonGamemode} source={Files.gamemodes.easy}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => {this.onPlay("Medium")}}>
                            <Image style={styles.buttonGamemode} source={Files.gamemodes.medium}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => {this.onPlay("Hard")}}>
                            <Image style={styles.buttonGamemode} source={Files.gamemodes.hard}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => {this.onPlay("Animals")}}>
                            <Image style={styles.buttonGamemode} source={Files.gamemodes.animals}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => {this.onPlay("Verbs")}}>
                            <Image style={styles.buttonGamemode} source={Files.gamemodes.verbs}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => {this.onPlay("Timed")}}>
                            <Image style={styles.buttonGamemode} source={Files.gamemodes.timed}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <TouchableWithoutFeedback onPress={() => {this.goBack()}}>
                        <Image style={styles.buttonBack} source={Files.statics.buttonBack}/>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </View>
        );
    }

    goBack(){
        this.props.navigation.goBack();
    }

    onPlay(difficulty){
        console.log("tappeddd");
        this.props.navigation.navigate("GeneralGame",{
            difficulty: difficulty
        });
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
        height: hp(11),
        width: hp(45),
        marginTop: hp(5),
    },
    buttonsContainer: {
        alignItems: "center",
    },
    buttonBack: {
        resizeMode: "stretch",
        height: hp(10),
        width: hp(10),
        marginTop: hp(1),
        marginLeft: wp(5)
    },
    buttonGamemode: {
        resizeMode: "stretch",
        height: hp(10),
        width: hp(25),
        marginTop: hp(2),
    },
    debugBorder:{
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: 2
    }
});