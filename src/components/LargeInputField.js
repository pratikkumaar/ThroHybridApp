import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { appStyle } from '../theme/AppStyle';
import { black, grey } from '../theme/Colors';

export const LargeInputField = ({style,heading,value,onBlur,onFocus,isEditable,placeholder,inputMode,maxLength,onChangeText,rightIcon,onPress}) => {
  
  return (

  <View style={style}>
    <Text style={[appStyle.textSubHeading]}> 
        {heading}
    </Text>

    <TouchableOpacity onPress={onPress} style={{flexDirection:'row'}}>
            <TextInput style={[appStyle.textRegular,{width:'100%',marginTop:10,borderWidth:0.75,textAlign:'auto',maxHeight:150}]}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
            editable={isEditable}
            onChangeText={onChangeText}
            placeholder={placeholder}
            inputMode={inputMode}
            multiline={true}
            numberOfLines={5}
            maxLength={maxLength}/>

            {rightIcon}
    </TouchableOpacity>

    <View style={{height:1,width:'100%',backgroundColor:grey}}/>
</View>
  );
};
