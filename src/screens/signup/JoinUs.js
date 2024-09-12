import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import AppleIcon from '../../assets/svgs/AppleIcon';
import FacebookIcon from '../../assets/svgs/FacebookIcon';
import GoogleIcon from '../../assets/svgs/GoogleIcon';
import {FilledButton} from '../../components/FilledButton';
import {black, grey, primaryColor, red} from '../../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {
  APIServicePOST,
  APIServicePOSTWithSession,
} from '../../utils/APIService';
import {SEND_OTP_FOR_SIGNUP} from '../../utils/Constants';
import {showMessage} from 'react-native-flash-message';
import {ErrorMessage} from '../../utils/FlashMessage';

export default JoinUs = () => {
  const [tncCheck, setTncCheck] = useState(true);
  const [focus, setFocus] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  useEffect(() => {}, focus);

  useEffect(() => {}, []);

  const Submit = async () => {
    if (mobileNo.length != 10) {
      ErrorMessage('Enter 10 digit mobile number');
      return;
    }

    try {
      const request = {
        mobileNo: mobileNo,
      };
      const res = await APIServicePOST(request, SEND_OTP_FOR_SIGNUP);
      if (res.statusCode == 200) {
        navigation.navigate('OTPVerify', {from: 'JoinUs', mobileNo: mobileNo});
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
        Join Us
      </Text>

      <Text
        style={{
          marginTop: 10,
          alignSelf: 'center',
          color: grey,
          fontFamily: 'Nunito-Regular',
          fontSize: 15,
        }}>
        Hey! Can we get your number please?
      </Text>

      <Text
        style={{
          marginTop: '30%',
          color: grey,
          fontFamily: 'Nunito-Regular',
          fontSize: 15,
        }}>
        Mobile No.
      </Text>

      <TextInput
        style={{color: black, fontSize: 16, fontFamily: 'Nunito-Regular'}}
        onBlur={() => {
          setFocus(false);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        value={mobileNo}
        onChangeText={value => {
          setMobileNo(value);
        }}
        inputMode="numeric"
        maxLength={10}
      />

      <View style={{height: 1, width: '100%', backgroundColor: grey}} />

      {error && (
        <Text
          style={{
            marginTop: '10',
            color: red,
            fontFamily: 'Nunito-Regular',
            fontSize: 15,
          }}>
          {' '}
          {errorMsg}{' '}
        </Text>
      )}
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <CheckBox
          isChecked={tncCheck}
          onClick={() => {
            setTncCheck(!tncCheck);
          }}
          checkBoxColor={primaryColor}
          checkedCheckBoxColor={primaryColor}
          uncheckedCheckBoxColor={primaryColor}
        />

        <Text
          style={{
            marginStart: 10,
            color: grey,
            fontFamily: 'Nunito-Regular',
            fontSize: 15,
          }}>
          I read and accept
        </Text>

        <TouchableOpacity /* onPress={{}} */>
          <Text
            style={{
              marginStart: 5,
              color: primaryColor,
              fontFamily: 'Nunito-Regular',
              fontSize: 15,
            }}>
            Terms &amp; Conditions
          </Text>
        </TouchableOpacity>
      </View>

      {!focus && (
        <View style={{width: '100%', position: 'absolute', bottom: '5%'}}>
          <FilledButton
            onPress={() => {
              Submit();
            }}
            lable={'Sign Up'}
          />

          <Text
            style={{
              marginVertical: 20,
              color: grey,
              fontFamily: 'Nunito-Regular',
              fontSize: 15,
              alignSelf: 'center',
            }}>
            or
          </Text>

          <TouchableOpacity
            style={{
              borderColor: primaryColor,
              flexDirection: 'row',
              height: 50,
              borderRadius: 30,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                color: primaryColor,
                fontFamily: 'Nunito-ExtraBold',
                fontSize: 17,
                textAlign: 'right',
                marginEnd: 5,
              }}>
              Sign Up with
            </Text>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <View style={{marginHorizontal: 5}}>
                <AppleIcon />
              </View>
              <View style={{marginHorizontal: 5}}>
                <FacebookIcon />
              </View>
              <View style={{marginHorizontal: 5}}>
                <GoogleIcon />
              </View>
            </View>
          </TouchableOpacity>

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
                fontFamily: 'Nunito-Regular',
                fontSize: 15,
              }}>
              already a member?
            </Text>

            <TouchableOpacity /* onPress={{}} */>
              <Text
                style={{
                  marginStart: 5,
                  color: primaryColor,
                  fontFamily: 'Nunito-Regular',
                  fontSize: 15,
                }}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
