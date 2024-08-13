import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { black, grey, primaryColor, white } from "../theme/Colors"
import CheckBox from 'react-native-check-box'
import { useEffect, useState } from "react"
import AppleIcon from "../assets/svgs/AppleIcon"
import GoogleIcon from "../assets/svgs/GoogleIcon"
import FacebookIcon from "../assets/svgs/FacebookIcon"

export default JoinUs = () =>{
    const [tncCheck,setTncCheck] = useState(true);
    const [focus,setFocus] = useState(false);

    useEffect(()=>{},focus)

    return(<SafeAreaView style={{height:'100%',marginHorizontal:30}}>
        <Text style={{marginTop:'35%',alignSelf:'center',color:black,fontWeight:'700',fontSize:30}}> 
            Join Us
        </Text>

        <Text style={{marginTop:10,alignSelf:'center',color:grey,fontWeight:'100',fontSize:15}}> 
            Hey! Can we get your number please?
        </Text>

        <Text style={{marginTop:'30%',color:grey,fontWeight:'100',fontSize:15}}> 
            Mobile No.
        </Text>

        <TextInput style={{color:black,fontSize:16}}
        onBlur={()=>{setFocus(false)}}
        onFocus={()=>{setFocus(true)}}
        inputMode="numeric"
        maxLength={10}/>

        <View style={{height:1,width:'100%',backgroundColor:grey}}/>

        <View style={{flexDirection:'row',marginTop:10}}>
            <CheckBox
            isChecked={tncCheck}
            onClick={()=>{setTncCheck(!tncCheck)}}
            checkBoxColor={primaryColor}
            checkedCheckBoxColor={primaryColor}
            uncheckedCheckBoxColor={primaryColor}/>

            <Text style={{marginStart:10,color:grey,fontWeight:'100',fontSize:15}}> 
                I read and accept 
            </Text>

            <TouchableOpacity /* onPress={{}} */>
                <Text style={{marginStart:5,color:primaryColor,fontWeight:'100',fontSize:15}}> 
                    Terms &amp; Conditions
                </Text>
            </TouchableOpacity>
        </View>

        {!focus && <View style={{width:'100%',position:'absolute',bottom:'5%'}}>
        <TouchableOpacity style={{backgroundColor:primaryColor,height:50,borderRadius:30,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:white,fontWeight:'700',fontSize:18}}> 
                Sign Up
            </Text>
        </TouchableOpacity>

        <Text style={{marginVertical:20,color:grey,fontWeight:'100',fontSize:15,alignSelf:'center'}}> 
                or
        </Text>

        <TouchableOpacity style={{borderColor:primaryColor,flexDirection:'row',height:50,borderRadius:30,borderWidth:2,alignItems:'center',justifyContent:'center'}}>
            <Text style={{flex:1,color:primaryColor,fontWeight:'700',fontSize:18,textAlign:'right',marginEnd:5}}> 
                Sign Up with
            </Text>

            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
                <View style={{marginHorizontal:5}}><AppleIcon/></View>
                <View style={{marginHorizontal:5}}><FacebookIcon/></View>
                <View style={{marginHorizontal:5}}><GoogleIcon/></View>
            </View>
        </TouchableOpacity>

        <View style={{flexDirection:'row',marginTop:10,alignItems:'center',alignSelf:'center'}}>
            
            <Text style={{marginStart:10,color:grey,fontWeight:'100',fontSize:15}}> 
                already a member?
            </Text>

            <TouchableOpacity /* onPress={{}} */>
                <Text style={{marginStart:5,color:primaryColor,fontWeight:'100',fontSize:15}}> 
                    Log In
                </Text>
            </TouchableOpacity>
        </View>
        </View>}



        
    </SafeAreaView>)
}