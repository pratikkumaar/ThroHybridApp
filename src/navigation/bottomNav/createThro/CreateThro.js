import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import BackIcon from '../../../assets/svgs/BackIcon';
import LocationDropIcon from '../../../assets/svgs/LocationDropIcon';
import {DropDown} from '../../../components/DropDown';
import {InputField} from '../../../components/InputField';
import {SeekSlider} from '../../../components/SeekSlider';
import {TitleBarHeader} from '../../../components/TitleBarHeader';
import {black, grey} from '../../../theme/Colors';
import {FilledButton} from '../../../components/FilledButton';
import {APIServiceGET, APIServicePOST} from '../../../utils/APIService';
import {
  CREATE_THRO_COMPLETE,
  GET_INTERESTS,
  GET_SUB_INTERESTS,
  ROUTE_CREATE_THRO_COMPLETE,
} from '../../../utils/Constants';
import {ErrorMessageWithDescription} from '../../../utils/FlashMessage';
import {
  checkPermission,
  requestPermission,
} from '../../../utils/PermissionUtils';
import {PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export default CreateThro = () => {
  const navigation = useNavigation();
  const [selectedActvity, setSelectedActvity] = useState('');
  const [selectedSubActivity, setSelectedSubActivity] = useState('');
  const [eventHeading, setEventHeading] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [kms, setKms] = useState(15);
  const [catches, setCatches] = useState(5);
  const [date, setDate] = useState(new Date('2012-12-12'));
  const [activities, setActivities] = useState([]);
  const [subActivities, setSubActivities] = useState([]);
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    getInterests();
  }, []);

  useEffect(() => {
    setKms(kms);
  }, kms);

  const getInterests = async () => {
    const res = await APIServiceGET(GET_INTERESTS);
    setActivities(res.data.data);
  };

  const getSubInterests = async interestId => {
    const res = await APIServicePOST(
      {interestIds: [interestId]},
      GET_SUB_INTERESTS,
    );
    setSelectedActvity(interestId);
    setSubActivities(res.data);
  };

  const validateForm = () => {
    /*  if (selectedActvity.length == 0) {
      ErrorMessageWithDescription(
        'Select Activity',
        'Please select an activity',
      );
      return;
    }

    if (selectedSubActivity.length == 0) {
      ErrorMessageWithDescription(
        'Select SubActivity',
        'Please select an sub activity',
      );
      return;
    }

    if (eventHeading.length == 0) {
      ErrorMessageWithDescription(
        'Event Heading',
        'Enter a name that will show an event',
      );
      return;
    }

    if (eventHeading.length == 0) {
      ErrorMessageWithDescription(
        'Event Heading',
        'Enter a name that will show an event',
      );
      return;
    }
 */
    const throDetails = {
      location: {
        lat: latitude,
        long: longitude,
      },
      address: 'BMW Showroom, Noida',
      activityId: selectedActvity,
      subActivityId: selectedSubActivity,
      radius: kms,
      catchLimit: catches,
      title: eventHeading,
    };
    console.log('createThroDetails', throDetails);
    navigation.navigate(ROUTE_CREATE_THRO_COMPLETE, {throDetails: throDetails});
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
    console.log(result);
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
        //console.log(location);

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
      <TitleBarHeader
        leftIcon={<BackIcon />}
        //rightIcon={<FilterIcon/>}
        onLeftPressed={() => {
          navigation.goBack();
        }}
        //onRightPressed={()=>{}}
        elevation={10}
      />

      <Text
        style={{
          marginTop: -20,
          alignSelf: 'center',
          color: black,
          fontFamily: 'Nunito-ExtraBold',
          fontSize: 30,
        }}>
        Create a Thro
      </Text>

      <Text
        style={{
          marginTop: 10,
          alignSelf: 'center',
          color: grey,
          fontFamily: 'Nunito-Regular',
          fontSize: 15,
        }}>
        What type of Activity is it?
      </Text>

      <DropDown
        style={{marginHorizontal: 35, marginTop: '10%'}}
        heading={'Activity'}
        data={activities}
        value={selectedActvity}
        label={'name'}
        selectedValue={value => {
          getSubInterests(value._id);
        }}
      />

      <DropDown
        style={{marginHorizontal: 35, marginTop: 20}}
        heading={'Sub Activity'}
        data={subActivities}
        value={selectedSubActivity}
        label={'name'}
        selectedValue={value => {
          setSelectedSubActivity(value._id);
        }}
      />

      <InputField
        style={{marginHorizontal: 35, marginTop: 20}}
        heading={'Event Heading'}
        value={eventHeading}
        onChangeText={val => setEventHeading(val)}
        placeholder={'Event name can have 15-20 letters long'}
        inputMode={'text'}
      />

      <InputField
        style={{marginHorizontal: 35, marginTop: 20}}
        heading={'Location'}
        isEditable={false}
        onPress={() => {
          handleCheckPermission();
        }}
        value={location}
        inputMode={'numeric'}
        rightIcon={<LocationDropIcon />}
      />

      {/* <CustomDatePicker
                            isShow={showPicker}
                            label={'Select Date'}
                            initialDate={date}
                            onDateChange={(date) =>{
                            console.log("date",date)
                            setDate('date')}}/> */}

      <SeekSlider
        heading={'Radius'}
        value={kms}
        onValueChange={value => {
          setKms(value);
        }}
        minimumValue={2}
        maximumValue={20}
        subheading={'People with in ' + kms + ' kms can catch'}
        style={{marginHorizontal: 35, marginTop: 20}}
      />

      <SeekSlider
        heading={'No of Catches'}
        value={catches}
        minimumValue={0}
        maximumValue={10}
        subheading={'Maximum ' + catches + ' people can catch'}
        onValueChange={value => {
          setCatches(value);
        }}
        style={{marginHorizontal: 35}}
      />

      <FilledButton
        style={{marginHorizontal: 30, marginTop: 20, marginBottom: 20}}
        lable={'Continue'}
        onPress={() => {
          validateForm();
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 16,
  },
});
