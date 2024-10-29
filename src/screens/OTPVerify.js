import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import {FilledButton} from '../components/FilledButton';
import {black, grey, primaryColor} from '../theme/Colors';
import {APIServicePOST} from '../utils/APIService';
import {
  ROUTE_BOTTOM_NAVIGATION_HOST,
  ROUTE_CHOOSE_INTERESTS,
  ROUTE_PERSONAL_DETAILS,
  SESSION_TOKEN,
  USER_SESSION_FOR_SIGNUP,
  VERIFY_LOGIN_OTP,
} from '../utils/Constants';
import {ErrorMessage} from '../utils/FlashMessage';
import {storeLocalData} from '../utils/LocalStorage';

export default SignIn = ({route}) => {
  const {from} = route.params;
  const {mobileNo} = route.params;
  const [otp, setOtp] = useState('');
  const [focus, setFocus] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {}, focus);

  useEffect(() => {
    console.log(otp.length);
  }, [otp]);

  const validateLoginOTP = async () => {
    if (otp.length != 6) {
      ErrorMessage('Please input 6 digit OTP');
      return;
    }
    try {
      const request = {
        mobileNo: mobileNo,
        otp: otp,
      };
      //callPostAPI(SEND_OTP_FOR_LOGIN, undefined, navigation, request);
      const res = await APIServicePOST(request, VERIFY_LOGIN_OTP);
      console.log('res----->', res);
      if (res.statusCode == 200) {
        if (from == 'JoinUs') {
          await storeLocalData(USER_SESSION_FOR_SIGNUP, res.data.authToken);
          if (res.data.interests.length == 0 && res.data.userName.length == 0) {
            navigation.navigate(ROUTE_PERSONAL_DETAILS, {
              mobileNo: mobileNo,
              authToken: res.data.authToken,
            });
          } else {
            navigation.navigate(ROUTE_CHOOSE_INTERESTS, {
              mobileNo: mobileNo,
              authToken: res.data.authToken,
            });
          }
        } else if (from == 'SignIn') {
          await storeLocalData(SESSION_TOKEN, res.data.authToken);
          navigation.navigate(ROUTE_BOTTOM_NAVIGATION_HOST);
        } else if (from == 'ForgotPassword') {
        }
      } else if (res.statusCode == 400) {
        ErrorMessage(res.message);
      }
    } catch (error) {
      console.log(error, typeof error);
    }
  };

  return (
    <SafeAreaView style={{height: '100%', marginHorizontal: 30}}>
      <Text
        style={{
          marginTop: '35%',
          alignSelf: 'center',
          color: black,
          fontFamily: 'Nunito-ExtraBold',
          fontSize: 30,
        }}>
        Verification
      </Text>

      <Text
        style={{
          marginTop: 10,
          alignSelf: 'center',
          color: grey,
          fontFamily: 'Nunito-Regular',
          fontSize: 15,
          textAlign: 'center',
        }}>
        Please enter the 6-digits OTP sent to your number: +91-{mobileNo}
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
          fontFamily: 'Nunito-Bold',
          color: primaryColor,
          fontSize: 15,
        }}
        text={otp}
        handleTextChange={val => {
          setOtp(val);
        }}
        setValue={otp}
        inputCount={6}
        tintColor={primaryColor}
        offTintColor={grey}
      />

      <Text
        style={{
          marginTop: 15,
          color: grey,
          fontFamily: 'Nunito-Regular',
          fontSize: 15,
        }}>
        Resend OTP in 00:59
      </Text>

      {!focus && (
        <View style={{width: '100%', position: 'absolute', bottom: '10%'}}>
          <FilledButton
            lable={'Verify'}
            onPress={() => {
              validateLoginOTP();
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
