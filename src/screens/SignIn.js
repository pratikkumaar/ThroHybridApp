import { useEffect, useState } from "react"
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { black, grey, primaryColor, white } from "../theme/Colors"
import { useNavigation } from "@react-navigation/native";

export default SignIn = () =>{
    const [tncCheck,setTncCheck] = useState(true);
    const [focus,setFocus] = useState(false);
    const navigation = useNavigation();

    useEffect(()=>{},focus)

    return(<SafeAreaView style={{height:'100%',marginHorizontal:30}}>
        <Text style={{marginTop:'35%',alignSelf:'center',color:black,fontFamily:'Nunito-ExtraBold',fontSize:30}}> 
            Log In
        </Text>

        <Text style={{marginTop:10,alignSelf:'center',color:grey,fontFamily:'Nunito-Regular',fontSize:15}}> 
            Enter your credentials to Login
        </Text>

        <Text style={{marginTop:'30%',color:grey,fontFamily:'Nunito-Regular',fontSize:15}}> 
            Mobile No.
        </Text>

        <TextInput style={{color:black,fontSize:16}}
        onBlur={()=>{setFocus(false)}}
        onFocus={()=>{setFocus(true)}}
        inputMode="numeric"
        maxLength={10}/>

        <View style={{height:1,width:'100%',backgroundColor:grey}}/>

        <Text style={{marginTop:15,color:grey,fontFamily:'Nunito-Regular',fontSize:15}}> 
            Password
        </Text>

        <TextInput style={{color:black,fontSize:16}}
        onBlur={()=>{setFocus(false)}}
        onFocus={()=>{setFocus(true)}}
        inputMode="text"
        secureTextEntry={true}
        maxLength={20}/>

        <View style={{height:1,width:'100%',backgroundColor:grey}}/>

        <Text style={{marginTop:15,color:primaryColor,fontFamily:'Nunito-Bold',fontSize:15}}> 
            Forgot Password?
        </Text>

        {!focus && <View style={{width:'100%',position:'absolute',bottom:'5%'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('OTPVerify')}} style={{backgroundColor:primaryColor,height:50,borderRadius:30,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:white,fontWeight:'700',fontSize:18}}> 
                Log In
            </Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',marginTop:10,alignItems:'center',alignSelf:'center'}}>
            
            <Text style={{marginStart:10,color:grey,fontFamily:'Nunito-Medium',fontSize:15}}> 
                Don't have an account?
            </Text>

            <TouchableOpacity onPress={()=>{navigation.navigate('JoinUs')}}>
                <Text style={{marginStart:5,color:primaryColor,fontFamily:'Nunito-Medium',fontWeight:500,fontSize:15}}> 
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        </View>}



        
    </SafeAreaView>)
}