import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { primaryColor, white } from '../theme/Colors';

export const FilledButton = ({style,lable,onPress}) => {
  
  return (
    <View style={style}>
        <TouchableOpacity
            onPress={onPress} 
            style={{backgroundColor:primaryColor,
                    height:50,
                    borderRadius:30,
                    alignItems:'center',
                    justifyContent:'center'}}>
            <Text style={{color:white, fontFamily:'Nunito-ExtraBold',fontSize:18}}> 
                {lable}
            </Text>
        </TouchableOpacity>
    </View>
  );
};


