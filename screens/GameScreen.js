import {View, StyleSheet, Alert,Dimensions, useWindowDimensions} from 'react-native';
import TitleTags from "../component/ui/TitleTags";
import { useState, useEffect } from 'react';
import GuessContainer from '../component/game/GuessContainer';
import PrimaryButtons from '../component/ui/PrimaryButtons';
import InstructionText from '../component/ui/InstructionText';
import {Ionicons} from '@expo/vector-icons'

function generateRandomBetween(min, max, exclude){
    const rndNo= Math.floor( Math.random() * (max-min) ) + min;
    if(rndNo=== exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNo;
}   }

let minBoundary= 1;
let maxBoundary= 100;

function GameScreen( {userInput, onGameOver} ){
    
    const initialGuess= generateRandomBetween(1, 100, userInput)  // domain of function is: fun[a,b)
    
    const [currentGuess, setCurrentGuess]= useState(initialGuess);

    const {width, height}= useWindowDimensions();

    useEffect( ()=> {
        if(currentGuess=== userInput){
            onGameOver();
        }
        },[currentGuess, userInput, onGameOver]
    );

    useEffect(()=>{
        minBoundary= 1;
        maxBoundary= 100;
        },[]);

    function nextGuessHandler(direction){       //direction 'higher' and 'smaller' of the to be guessed no
        
        if( (direction=== '-' && currentGuess< userInput ) || (direction=== '+' && currentGuess> userInput) ){
            Alert.alert("Don't lie !!!", 'You know you are guiding me wrong here', 
            [{text:'Sorry', style:'cancel'}] );
            return;
        }
        
        if(direction=== '+'){
            minBoundary= currentGuess+1;
        }
        else if(direction=== '-'){
            maxBoundary= currentGuess;
        }

        const newGuess= generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newGuess);
    }

    const margintop= height < 300 ? 14: 31;

    return(
        <View style={[styles.screen, {marginTop: margintop} ]}>
            <TitleTags>Opponent's Guess</TitleTags>
            
            <View style={styles.cardContainer}>
            <GuessContainer>{currentGuess}</GuessContainer>
                <InstructionText> Higher or Lower ? </InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButtons onPress={nextGuessHandler.bind(this, '+')} > <Ionicons name= "md-add" size={21} color='grey'/> </PrimaryButtons> 
                    <PrimaryButtons onPress={nextGuessHandler.bind(this, '-')} > <Ionicons name= "md-remove" size={21} color='grey'/> </PrimaryButtons> 
                </View>
            </View>
        </View>
        
    )
}

export default GameScreen;

const deviceWidth= Dimensions.get('window').width;
const styles= StyleSheet.create({
    cardContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 9 : 30,
        marginHorizontal: 25,
        padding:10,
        backgroundColor: '#200020',
        borderRadius: 10,
        elevation: 10,
        
     },
    screen:{
        flex: 1,
        padding: 10,
        //marginTop: 50,
    },
    buttonContainer:{
        flexDirection: 'row',
     },
     
    
})