import {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {black, grey, primaryColor, white} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {ErrorMessage, ErrorMessageWithDescription} from '../utils/FlashMessage';
import {useNetwork} from '../context/NetworkContext';
import {
  JOIN_US,
  ROUTE_JOIN_US,
  ROUTE_VERIFY_OTP,
  SEND_OTP_FOR_LOGIN,
  VERIFY_OTP,
} from '../utils/Constants';
import {InputField} from '../components/InputField';
import {APIServicePOST} from '../utils/APIService';
import LinearGradient from 'react-native-linear-gradient';
import {FilledButton} from '../components/FilledButton';
import {apiCall} from '../utils/apicall';
import ActivityIndicatorComponent from '../utils/ActivityIndicator';

export default SignIn = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [tncCheck, setTncCheck] = useState(true);
  const [focus, setFocus] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  /*   useEffect(() => {}, focus); */

  /* useEffect(() => {
    console.log('data', data);
  }, data); */

  const validateSignIn = async () => {
    console.log(mobileNo.length);
    if (mobileNo.length != 10) {
      ErrorMessage('Enter 10 digit mobile number');
      return;
    }

    if (password.length < 8 || password.length > 15) {
      ErrorMessage('Must contain 8-15 characters');
      return;
    }

    try {
      setLoading(true);
      const request = {
        mobileNo: mobileNo,
        password: password,
      };
      //callPostAPI(SEND_OTP_FOR_LOGIN, undefined, navigation, request);
      /* const res = await APIServicePOST(request, SEND_OTP_FOR_LOGIN); */
      const res = await apiCall(
        'POST',
        SEND_OTP_FOR_LOGIN,
        request,
        null,
        null,
        null,
      );
      if (res.statusCode == 200) {
        setLoading(false);
        navigation.navigate(ROUTE_VERIFY_OTP, {
          from: 'SignIn',
          mobileNo: mobileNo,
        });
      } else if (res.statusCode == 400) {
        setLoading(false);
        ErrorMessage(res.message);
      }
    } catch (error) {
      console.log(error, typeof error);
    }
  };

  return (
    <KeyboardAvoidingView style={{height: '100%', marginHorizontal: 30}}>
      <ActivityIndicatorComponent visible={loading} text="Signing In..." />
      <Text
        style={{
          marginTop: '35%',
          alignSelf: 'center',
          color: black,
          fontFamily: 'Nunito-ExtraBold',
          fontSize: 30,
        }}>
        Log In
      </Text>

      <Text
        style={{
          marginTop: 10,
          alignSelf: 'center',
          color: grey,
          fontFamily: 'Nunito-Regular',
          fontSize: 15,
        }}>
        Enter your credentials to Login
      </Text>

      <InputField
        style={{marginTop: '30%'}}
        heading={'Mobile No'}
        value={mobileNo}
        maxLength={10}
        inputMode={'numeric'}
        onBlur={val => {
          setFocus(false);
        }}
        onFocus={val => {
          setFocus(true);
        }}
        onChangeText={val => setMobileNo(val)}
      />

      <InputField
        style={{marginTop: 15}}
        heading={'Password'}
        secureTextEntry={true}
        value={password}
        maxLength={16}
        onBlur={val => {
          setFocus(false);
        }}
        onFocus={val => {
          setFocus(true);
        }}
        onChangeText={val => setPassword(val)}
      />

      <Text
        style={{
          marginTop: 15,
          color: primaryColor,
          fontFamily: 'Nunito-Bold',
          fontSize: 15,
        }}>
        Forgot Password?
      </Text>

      {!focus && (
        <View style={{width: '100%', position: 'absolute', bottom: '5%'}}>
          <FilledButton lable={'Log In'} onPress={() => validateSignIn()} />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                marginStart: 10,
                color: grey,
                fontFamily: 'Nunito-Medium',
                fontSize: 15,
              }}>
              Don't have an account?
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTE_JOIN_US);
              }}>
              <Text
                style={{
                  marginStart: 5,
                  color: primaryColor,
                  fontFamily: 'Nunito-Medium',
                  fontWeight: 500,
                  fontSize: 15,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};
