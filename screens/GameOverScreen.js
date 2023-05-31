import { Text, View, Image, StyleSheet} from "react-native";
import TitleTags from "../component/ui/TitleTags";
import PrimaryButtons from "../component/ui/PrimaryButtons";

function GameOverScreen({userInputNo, onStartGame}){

    return(
        <View style={styles.container}>
            <TitleTags>Congratulations!!!</TitleTags>
            <View style= {styles.imageContainer }>
                <Image style= {styles.image} source={require('../assets/images/success.jpg') } />
            </View>
            <Text style={styles.resultText}> 
                Congrats on guessing the correct number: <Text style={styles.numberText}>{userInputNo}</Text>
            </Text>
            <PrimaryButtons onPress={onStartGame} > Start New Game</PrimaryButtons>
        </View>
    )
}

export default GameOverScreen;

const styles= StyleSheet.create({
    container:{
        flex: 1,
        padding: 11,
        alignContent: 'center',
        justifyContent: 'center',
    },
    imageContainer:{
        borderRadius: 151,
        width: 301,
        height: 301,
        borderWidth: 3,
        borderColor: '#202020',
        overflow: 'hidden',
        margin:  33,
        padding: 1,
    },
    image:{
        width: '100%',
        height: '100%',
    },
    resultText:{
        fontFamily: 'open-sans',
        color: '#707070',
        fontSize: 18,
        marginBottom: 21,
        textAlign: 'center',
    },
    numberText:{
        fontFamily: 'open-sans-bold',
        color: 'white'
    }

})