import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView} from 'react-native';
import {getLocalData} from '../utils/LocalStorage';
import {
  PERSONAL_DETAILS,
  ROUTE_BOTTOM_NAVIGATION_HOST,
  ROUTE_PERSONAL_DETAILS,
  ROUTE_SIGN_IN,
  SESSION_TOKEN,
  SIGN_IN,
  USER_SESSION_FOR_SIGNUP,
} from '../utils/Constants';
import {primaryColor} from '../theme/Colors';

export default Splash = () => {
  const navigation = useNavigation();

  const getLandingPage = async () => {
    await getLocalData(SESSION_TOKEN).then(res => {
      console.log('session', res);
      if (res == undefined) {
        navigation.navigate(ROUTE_SIGN_IN);
      } else {
        navigation.navigate(ROUTE_BOTTOM_NAVIGATION_HOST);
      }
    });
  };

  setTimeout(() => {
    getLandingPage();
    //navigation.navigate(ROUTE_SIGN_IN);
  }, 2000);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{
          height: 120,
          aspectRatio: 1.44,
          marginBottom: '20%',
          tintColor: primaryColor,
        }}
        source={require('../assets/logos/splash_logo.png')}></Image>

      <Image
        style={{
          width: 400,
          height: 260,
          position: 'absolute',
          tintColor: primaryColor,
          bottom: 10,
        }}
        source={require('../assets/images/splash_image.png')}></Image>
    </SafeAreaView>
  );
};
