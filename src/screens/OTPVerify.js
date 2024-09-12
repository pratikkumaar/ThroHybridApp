import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {black, grey, primaryColor, white} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';
import {FilledButton} from '../components/FilledButton';

export default SignIn = ({route}) => {
  const {from} = route.params;
  const {mobileNo} = route.params;
  const [otp, setOtp] = useState('');
  const [focus, setFocus] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {}, focus);

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
        Please enter the 6-digits OTP sent to your number: {mobileNo}
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
        onTextChange={() => {
          setOtp(otp);
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
              if (from == 'JoinUs') {
                navigation.navigate('PersonalDetails');
              } else if (from == 'SignIn') {
                navigation.navigate('BottomNavHost');
              }
              if (from == 'ForgotPassword') {
              }
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
