import {TextInput, View, StyleSheet, Alert, Dimensions, useWindowDimensions} from "react-native";     //Alert is an object, not a component
import PrimaryButtons from "../component/ui/PrimaryButtons";
import { useState } from "react";
import TitleTags from "../component/ui/TitleTags";
import InstructionText from "../component/ui/InstructionText";

function StartGameScreen({onUserInput}){    //this parameter is being sent across from App.js, which setting screen variable

    const [enteredNo, setEnteredNo] = useState('');
    const {width, height} = useWindowDimensions();

    function noInputHandler(enteredNoData){       //this parameter is automatically given by react native
        setEnteredNo(enteredNoData);
    }

    function resetHandler(){
        setEnteredNo('');
    }

    function submitHandler(){
        const chosenNo= parseInt(enteredNo);
        if(isNaN(chosenNo) || chosenNo <= 0 || chosenNo > 99 ){       //this return true if the conversion failed by checking if chosenNo is not a number
            Alert.alert('Invalid number!!!', 'Number has to be in the range of: 1 to 99.',
                        [{text: 'Ok', style: 'destructive', onPress: resetHandler }]    
            
            );           //Alert is an object(not a component) which has a method 'alert'
            return;
        }
        onUserInput(chosenNo);
    }

    const margintop= height < 400 ? 31 : 101; 

    return(
        <View style= {[styles.titleContainer, {marginTop: margintop} ] }>
            <TitleTags>Guess The Number</TitleTags>
                <View style={styles.cardContainer}> 
                    <InstructionText>Please Enter The Number</InstructionText>
                    <TextInput style={styles.textInput} 
                                maxLength={2} keyboardType="number-pad"
                                value= {enteredNo}
                                onChangeText={noInputHandler} >
                    </TextInput>
                    <View style= {styles.buttonContainer}>
                        <View style={styles.btnContainer}><PrimaryButtons onPress={submitHandler} > Submit </PrimaryButtons></View>
                        <View style={styles.btnContainer}><PrimaryButtons onPress= {resetHandler} > Reset </PrimaryButtons></View>
                    </View>
                </View>
        </View>
    )
    //onPress in line 37,38 is just a prop symbol, not a prop.
}

export default StartGameScreen;

const deviceWidth= Dimensions.get('window').width;
const deviceHeight= Dimensions.get('window').height;

const styles= StyleSheet.create({
    cardContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 37 : 71,
        marginHorizontal: 25,
        padding:17,
        backgroundColor: '#200020',
        borderRadius: 10,
        elevation: 10,
        
     },
    titleContainer:{
        flex: 1,
        //marginTop: deviceHeight < 401 ? 31: 101, : done using {useWindowDimesions} hook
        padding: 5,
    },
    textInput:{
        height:51,
        width:51,
        fontSize:32,
        borderBottomColor:'grey',
        borderBottomWidth: 3,
        color: 'white',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        
     },
     buttonContainer:{
        flexDirection: 'row',
     },
     btnContainer:{
        flex: 1,
     }


});

