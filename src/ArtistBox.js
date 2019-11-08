import React, {Component} from 'react';
import{
    StyleSheet,
    View,
    Image
} from 'react-native';

export default class ArtistBox extends Component<Props>{
    render(){
        const {image,name}=this.props.artist
        return(
            <View style={StyleSheet.artistBox}>
            <Image style={StyleSheet.image} source={{uri:image}}></Image>
            <View style={StyleSheet.info}>
            <Text style={StyleSheet.name}>{name}></Text>
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    artistBox:{
        margin: 5,
        backgroundColor:'white',
        flexDirection: 'row',
        shadowColor:'black',
        shadowOpacity:.1,
        shadowOffset:{
            height:1,
            width:-2
        },
        elevation:2
    },
    image:{
        width:150,
        height:150
    },
    info:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    name:{
        fontSize:20,
        marginTop:10,
        color:'#333'
    },
});