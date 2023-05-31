import {View,Text, Pressable,StyleSheet} from 'react-native';

function PrimaryButtons( {children, onPress} ){
    
    return(
        <View style= {styles.buttonOuterContainer} >
            <Pressable android_ripple={{color: "#630436" }} 
                       onPress={onPress}
            >
            <Text style= {styles.buttonInnerContainer} >{children}</Text>
        </Pressable>
        </View>
    )
}

export default PrimaryButtons;

const styles= StyleSheet.create({
    buttonOuterContainer:{
        backgroundColor: '#311432',
        borderRadius:  20,
        margin: 5,
        overflow: 'hidden'
        
    },
    buttonInnerContainer:{
        fontSize: 20,
        fontWeight:'bold',
        textAlign: 'center',
        elevation: 3,
        paddingVertical: 10,
        paddingHorizontal: 25,
        color:"grey"
    }
})