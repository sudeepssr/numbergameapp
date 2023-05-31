import StartGameScreen from './screens/StartGameScreen';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font'; 
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  const [userInputNo, setUserInputNo]= useState();
  const [gameIsOver, setGameIsOver]= useState(true);  //since, game has not started initially, so initially gameOver is true.
  

  const [fontsLoaded]= useFonts({       //fontsLoaded is a boolean value obtained
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  function userInputNoHandler(userNo){
      setUserInputNo(userNo);
      setGameIsOver(false); //so that game does not get over every time user just gives an input immediately
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  function startNewGameHandler(){
    setUserInputNo(null);
  }

  //Checking if user has entered a no means now we must goto gameScreen, 
  //so, made a variable screen for that check and it will be rendered with the use of props

  
  let screen= <StartGameScreen onUserInput={userInputNoHandler} />;

  if(userInputNo){
    screen= <GameScreen userInput={userInputNo} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userInputNo){
    screen= <GameOverScreen userInputNo={userInputNo} onStartGame={startNewGameHandler}/>
  }


  return (
    
      <LinearGradient style= {styles.container} colors={['#301934','#36454F']}>
        <SafeAreaView style={styles.container}>
          <ImageBackground source={require('./assets/images/numberGame.jpg')} resizeMode='cover' imageStyle={styles.imageContainer} style={styles.container}>
            {screen}
          </ImageBackground>
        </SafeAreaView>
        
      </LinearGradient>
  );
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:'#301934',
    flex:1
  },
  imageContainer:{
    opacity:0.20,
  }
})

