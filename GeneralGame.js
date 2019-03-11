import React from "react"
import {View, Text, ImageBackground, Image, TextInput, TouchableWithoutFeedback, StyleSheet} from "react-native";
import Files from "./Files";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class GeneralGameScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            time: 1,
            firstWord: "alpha",
            lastWord: "zulu",
            score: 0,
            targetWord: "giraffe",
            text: null,
            output: null
        }
    }

    render() {

        const { navigation } = this.props;
        const difficulty = navigation.getParam('difficulty', 'ERROR');

        return (
            <ImageBackground source={Files.game.blurredBackground} style={styles.background}>
                <ImageBackground source={Files.game.topBar} style={styles.topBar}>
                    <View style={styles.topBarTextContainer}>
                        <Text style={[styles.topBarText, styles.score]}>{this.state.score}</Text>
                        <View style={styles.gamemodeTitleContainer}>
                            <Text style={[styles.topBarText, styles.gamemodeTitle]}>{difficulty} Mode</Text>
                        </View>
                        <Text style={[styles.topBarText, styles.time]}>{this.state.time}s</Text>
                    </View>
                </ImageBackground>

                <View style={styles.cloudContainer}>
                    <ImageBackground source={Files.game.cloud} style={styles.cloud}>
                        <View style={styles.cloudTextContainer}>
                            <Text style={styles.cloudText}>{this.state.firstWord}</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={Files.game.cloud} style={styles.cloud}>
                        <View style={styles.cloudTextContainer}>
                            <Text style={styles.cloudText}>{this.state.lastWord}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.blimpContainer}>
                    <ImageBackground source={Files.game.blimp} style={styles.blimp}>
                        <View style={styles.definitionContainer}>
                            <Text style={styles.definition}>This animal has a long neck and is commonly found in africa</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={Files.game.blimpButton} style={styles.blimpButton}>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} onChangeText={(text) => this.setState({text: text})}>Answer Here</TextInput>
                        </View>
                    </ImageBackground>
                </View>



                <View style={styles.buttonContainer}>
                    <TouchableWithoutFeedback onPress={() => this.goBack()}>
                        <Image source={Files.game.forfeit} style={styles.button}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.updateWords()}>
                        <Image source={Files.game.guessHere} style={styles.button}/>
                    </TouchableWithoutFeedback>
                </View>
            </ImageBackground>
        );
    }

    updateWords(){
        console.log("beep");

        if(this.state.text==null)
            return;

        const guess = this.state.text.toLowerCase();
        const firstWord = this.state.firstWord;
        const lastWord = this.state.lastWord;
        const answer = this.state.targetWord;

       /* if(!CheckWord.check(guess)){
            this.setState({output: "That word is not in the dictionary"});
            return;
        }*/

        if(guess === answer) {
            console.log("winner!");
            return;
        }

        if(firstWord < guess && guess < answer)
            this.setState({firstWord: guess.toLowerCase()});
        else if(guess < lastWord && answer < guess)
            this.setState({lastWord: guess.toLowerCase()});

    }

    goBack(){
        this.props.navigation.goBack();
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({
            time: this.state.time+1,
            score: this.state.time*8
        }), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}




const styles = StyleSheet.create({
    gamemodeTitleContainer: {
        position: 'absolute',
        width: wp(100),
        alignItems: 'center'

    },
    definitionContainer: {
        marginTop: hp(5),
        alignItems: 'center',
        marginRight: wp(3),
        marginLeft: wp(10),
        width: wp(65)
    },
    definition: {
        fontFamily: 'Subscribe',
        fontSize: hp(3.5),
        color: "#ae412c",
        textAlign: 'center',

    },
    inputContainer: {
        marginTop: hp(5),
        alignItems: 'center'
    },
    input: {
        fontFamily: 'Subscribe',
        fontSize: hp(3.5),
        color: "white",
    },
    cloudTextContainer: {
        marginTop: hp(4),
        alignItems: 'center'
    },
    cloudText: {
        fontFamily: 'Subscribe',
        fontSize: hp(3.5),
        color: "#2e3681",
    },
    topBarTextContainer: {
        marginTop:  hp(3),
        flexDirection: 'row',
        width: wp(100)
    },
    score: {
        marginLeft: wp(2)
    },
    gamemodeTitle: {
        alignItems: 'center'
    },
    time: {
        position: 'absolute',
        right: wp(2),
        marginRight: wp(2)
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        resizeMode: "stretch",
        height: hp(10),
        width: hp(20),
        marginLeft: wp(6),
        marginTop: hp(5)
    },
    topBarText: {
        fontFamily: 'Subscribe',
        fontSize: hp(5),
        color: "white",
    },
    topBar: {
        flexDirection: 'row',
        height: hp(10),
    },
    blimpButton: {
        resizeMode: "stretch",
        height: hp(10),
        width: hp(26),
        marginTop: hp(-4),
        marginLeft: wp(-2)
    },
    blimpContainer: {
        marginTop: hp(3),
        alignItems: 'center'
    },
    blimp: {
        zIndex: 1,
        width: wp(100),
        height: hp(21)
    },
    cloudContainer: {
        flexDirection: 'row'
    },
    cloud: {
        height: hp(11),
        width: hp(22.5),
        marginTop: hp(10),
        marginLeft: wp(5)
    },
    background: {
        width: wp(100),
        height: "100%",
        zIndex: -100,
    },
    debugBorder:{
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: 2
    }
});