import React from "react"
import {View, Text, ImageBackground, Image, TouchableWithoutFeedback, StyleSheet} from "react-native";
import Files from "./Files";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class InstructionScreen extends React.Component{

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
    }
});