import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { appStyle } from '../theme/AppStyle';
import { black, grey } from '../theme/Colors';

export const InputField = ({style,heading,value,onBlur,onFocus,isEditable,placeholder,inputMode,maxLength,onChangeText,rightIcon,onPress}) => {
  
  return (

  <View style={style}>
    <Text style={[appStyle.textSubHeading]}> 
        {heading}
    </Text>

    <TouchableOpacity onPress={onPress} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TextInput style={[appStyle.textRegular,{width:'90%'}]}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
            editable={isEditable}
            onChangeText={onChangeText}
            placeholder={placeholder}
            inputMode={inputMode}
            maxLength={maxLength}/>

            {rightIcon}
    </TouchableOpacity>

    <View style={{height:1,width:'100%',backgroundColor:grey}}/>
</View>
  );
};
