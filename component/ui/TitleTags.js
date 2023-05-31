import {StyleSheet, Text} from 'react-native';

export default function TitleTags( {children} ){
    return(
        <Text style={styles.title}>{children}</Text>
    );

}


const styles= StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 5,
        borderColor: '#606060',
        padding: 12,
    },
})