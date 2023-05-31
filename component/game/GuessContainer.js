import {StyleSheet, Text, View, Dimensions} from 'react-native';

function GuessContainer({children}){
    return (
        <View style= {styles.guessBox} >
            <Text style= {styles.guessText} >{children}</Text>
        </View>
    )
}
export default GuessContainer;

const deviceWidth= Dimensions.get('window').width;

const styles= StyleSheet.create({
    guessBox:{
        borderWidth: 3,
        marginTop: 5,
        borderColor: 'white',
        padding: deviceWidth < 380 ? 12 : 31,
        margin: deviceWidth < 380 ? 4 : 11,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    guessText:{
        fontSize: 35,
        fontFamily: 'open-sans',
        color: '#9E7BB5',
        fontWeight: 'bold',
    }
})