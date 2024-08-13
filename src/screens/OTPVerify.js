import { useEffect, useState } from "react"
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { black, grey, primaryColor, white } from "../theme/Colors"
import { useNavigation } from "@react-navigation/native";
import OTPTextView from "react-native-otp-textinput";

export default SignIn = () =>{
    const [otp,setOtp] = useState('');
    const [focus,setFocus] = useState(false);
    const navigation = useNavigation();

    useEffect(()=>{},focus)

    return(<SafeAreaView style={{height:'100%',marginHorizontal:30}}>
        <Text style={{marginTop:'35%',alignSelf:'center',color:black,fontWeight:'700',fontSize:30}}> 
            Verification
        </Text>

        <Text style={{marginTop:10,alignSelf:'center',color:grey,fontWeight:'100',fontSize:15,textAlign:'center'}}> 
            Please enter the 6-digits OTP sent to your number: 
        </Text>

        <OTPTextView
            autoFocus={true}
            containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                marginTop: 20,
                paddingVertical: 20,
            }}
            textInputStyle={{
                borderRadius: 10,
                borderWidth: 0.5,
                color: primaryColor,
                fontSize: 15
            }}
            text={otp}
            onTextChange={() => { setOtp(otp) }}
            setValue={otp}
            inputCount={6}
            tintColor={primaryColor}
            offTintColor={grey}
        />

        <Text style={{marginTop:15,color:grey,fontWeight:'100',fontSize:15}}> 
            Resend OTP in 00:59
        </Text>

        {!focus && <View style={{width:'100%',position:'absolute',bottom:'10%'}}>
        <TouchableOpacity style={{backgroundColor:primaryColor,height:50,borderRadius:30,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:white,fontWeight:'700',fontSize:18}}> 
                Verify
            </Text>
        </TouchableOpacity>

        </View>}
    </SafeAreaView>)
}