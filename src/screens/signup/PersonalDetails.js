import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import LocationDropIcon from '../../assets/svgs/LocationDropIcon';
import {DropDown} from '../../components/DropDown';
import {FilledButton} from '../../components/FilledButton';
import {InputField} from '../../components/InputField';
import {black, grey} from '../../theme/Colors';
import {
  ErrorMessage,
  ErrorMessageWithDescription,
} from '../../utils/FlashMessage';
import {PERMISSIONS, RESULTS} from 'react-native-permissions';
import {checkPermission, requestPermission} from '../../utils/PermissionUtils';
import Geolocation from 'react-native-geolocation-service';
import {getAddressFromLatLong} from '../../utils/MapUtils';
import DatePicker from 'react-native-date-picker';
import {changeDateTimeFormat} from '../../utils/DateUtils';
import moment from 'moment';

export default PersonalDetails = () => {
  const navigation = useNavigation();
  const [gender, selectedGender] = useState('');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('Hi');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('01/01/2024');
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const categories = [{name: 'Male'}, {name: 'Female'}];

  const validateForm = () => {
    if (username.length < 8 || username.length > 15) {
      ErrorMessageWithDescription(
        'Invalid Username',
        'Must contain 8-15 characters',
      );
      return;
    }

    if (displayName.length < 3) {
      ErrorMessageWithDescription(
        'Incomplete Display Name',
        'Must contain 3 characters',
      );
      return;
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      ErrorMessageWithDescription(
        'Invalid Email Address',
        'Please input a valid email address',
      );
      return;
    }

    if (password.length < 8 || password.length > 15) {
      ErrorMessageWithDescription(
        'Invalid Password',
        'Must contain 8-15 characters',
      );
      return;
    }

    if (gender == '') {
      ErrorMessageWithDescription(
        'Select Gender',
        'Gender must not left blank',
      );
      return;
    }

    if (dateOfBirth == '') {
      ErrorMessageWithDescription(
        'Select Date of Birth',
        'Date of Birth must not left blank',
      );
      return;
    }

    if (location == '') {
      ErrorMessageWithDescription(
        'Select Location',
        'Location must not left blank',
      );
      return;
    }
  };

  const handleCheckPermission = async () => {
    const result = await checkPermission(
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ); // Use appropriate permission
    console.log('Camera Permission Status:', result);
    handleRequestPermission();
  };

  const handleRequestPermission = async () => {
    const result = await requestPermission(
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ); // Use appropriate permission
    if (result === RESULTS.GRANTED) {
      getLocation();
    } else if (result === RESULTS.DENIED) {
    } else if (result === RESULTS.BLOCKED) {
      Linking.openSettings();
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setLocation(latitude + ',' + longitude);
        console.log(location);

        // getAddressFromLatLong(28.594594594594593, 77.38470265859395);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            marginTop: '10%',
            alignSelf: 'center',
            color: black,
            fontFamily: 'Nunito-ExtraBold',
            fontSize: 30,
          }}>
          Personal Details
        </Text>

        <Text
          style={{
            marginTop: 10,
            alignSelf: 'center',
            color: grey,
            fontFamily: 'Nunito-Regular',
            fontSize: 15,
          }}>
          Tell a bit about yourself
        </Text>

        <InputField
          style={{marginHorizontal: 35, marginTop: '10%'}}
          heading={'Username'}
          value={username}
          onChangeText={value => setUsername(value)}
          placeholder={'A unique name must contain 8-15 characters'}
          inputMode={'text'}
        />

        <InputField
          style={{marginHorizontal: 35, marginTop: 20}}
          heading={'Display Name'}
          value={displayName}
          onChangeText={value => setDisplayName(value)}
          placeholder={'A name will show others'}
          inputMode={'text'}
        />

        <InputField
          style={{marginHorizontal: 35, marginTop: 20}}
          heading={'Email'}
          inputMode={'email'}
          value={email}
          onChangeText={value => setEmail(value)}
          placeholder={'email@thro.com'}
        />

        <InputField
          style={{marginHorizontal: 35, marginTop: 20}}
          heading={'Password'}
          inputMode={'password'}
          value={password}
          onChangeText={value => setPassword(value)}
          placeholder={'Set a 8-15 character stong password'}
        />

        <DropDown
          style={{marginHorizontal: 35, marginTop: 20}}
          heading={'Gender Prefrence'}
          data={categories}
          value={gender}
          selectedValue={value => {
            selectedGender(value);
          }}
        />

        <InputField
          style={{marginHorizontal: 35, marginTop: 20}}
          heading={'Date of Birth'}
          isEditable={false}
          onPress={() => {
            setOpen(true);
          }}
          value={dateOfBirth}
          rightIcon={<CalendarPickerIcon />}
        />

        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1970-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDateOfBirth(moment(date).format('DD/MM/YYYY'));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <InputField
          style={{marginHorizontal: 35, marginTop: 20}}
          heading={'Location'}
          isEditable={false}
          value={location}
          onPress={() => {
            handleCheckPermission();
          }}
          inputMode={'numeric'}
          //onChangeText={value => setLocation(value)}
          rightIcon={<LocationDropIcon />}
        />

        <FilledButton
          style={{marginVertical: '10%', marginHorizontal: 30}}
          lable={'Continue'}
          onPress={() => {
            navigation.navigate('ProfileSetup');
          }}
        />
      </View>
    </ScrollView>
  );
};