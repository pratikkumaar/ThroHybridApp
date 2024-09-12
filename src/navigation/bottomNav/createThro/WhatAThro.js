import { Image, Text, View } from 'react-native';
import { primaryColor } from '../../../theme/Colors';
import { useEffect, useState } from 'react';

export default WhatAThro = () =>{

    useEffect(()=>{
        
    },[])

    return(<View style={{backgroundColor:primaryColor,width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <Image
                style={{height:120,aspectRatio:1.06}}
                source={require('../../../assets/images/success_thro.png')}/>
        
        <Text style={{color:'#FFF0D4', fontSize:50,fontFamily:'Nunito-ExtraBold',textAlign:'center',}}>{'WHAT\nA THRO !'}</Text>
    </View>)
}
