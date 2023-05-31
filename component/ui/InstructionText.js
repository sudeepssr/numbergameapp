import {Text, StyleSheet} from 'react-native';

function InstructionText({children}){
    return(
        <Text style= {styles.instructionText}> {children} </Text>
    );
}

export default InstructionText;

const styles= StyleSheet.create({
    instructionText:{
        marginTop: 10,
        fontFamily: 'open-sans',
        fontSize: 20,
        color: 'grey',
        marginBottom: 10,
    },
});