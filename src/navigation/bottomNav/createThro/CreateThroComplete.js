import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TitleBarHeader} from '../../../components/TitleBarHeader';
import BackIcon from '../../../assets/svgs/BackIcon';
import {InputField} from '../../../components/InputField';
import LocationDropIcon from '../../../assets/svgs/LocationDropIcon';
import CalendarPickerIcon from '../../../assets/svgs/CalendarPickerIcon';
import {useEffect, useState} from 'react';
import {black, grey} from '../../../theme/Colors';
import {DropDown} from '../../../components/DropDown';
import {SeekSlider} from '../../../components/SeekSlider';
import {FilledButton} from '../../../components/FilledButton';
import {LargeInputField} from '../../../components/LargeInputField';
import {ROUTE_WHAT_A_THRO, WHAT_A_THRO} from '../../../utils/Constants';
import DatePicker from 'react-native-date-picker';
import {sendDateToBackend} from '../../../components/DateFormatter';
import moment from 'moment';

export default CreateThroComplete = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState('');
  const [kms, setKms] = useState(15);
  const genderList = [{name: 'Any'}, {name: 'Male'}, {name: 'Female'}];

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState();

  useEffect(() => {
    console.log('kms', kms);
    setKms(kms);
  }, kms);

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
          textAlign: 'center',
          marginHorizontal: 30,
        }}>
        What type of folks and when you want to set this event?
      </Text>

      <DropDown
        style={{marginHorizontal: 35, marginTop: '10%'}}
        heading={'Gender Prefrence'}
        data={genderList}
        value={gender}
        label={'name'}
        selectedValue={value => {
          setGender(value);
        }}
      />

      <InputField
        style={{marginHorizontal: 35, marginTop: 20}}
        heading={'Start Date & Time'}
        isEditable={false}
        onPress={() => {
          setOpen(true);
        }}
        value={startDate}
        rightIcon={<CalendarPickerIcon />}
      />

      <DatePicker
        modal
        open={open}
        date={date}
        mode="datetime"
        maximumDate={new Date()}
        minimumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setStartDate(sendDateToBackend(date));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <InputField
        style={{marginHorizontal: 35, marginTop: 20}}
        heading={'Cut-Off Date & Time'}
        isEditable={false}
        onPress={() => {
          setOpen(true);
        }}
        value={new Date().toLocaleString()}
        rightIcon={<CalendarPickerIcon />}
      />

      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        maximumDate={new Date('2005-01-01')}
        minimumDate={
          startDate == ''
            ? new Date()
            : new Date(moment(startDate).format('YYYY-MM-DD'))
        }
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setStartDate(sendDateToBackend(date));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <InputField
        style={{marginHorizontal: 35, marginTop: 20}}
        heading={'End Date & Time'}
        isEditable={false}
        value={new Date().toLocaleString()}
        rightIcon={<CalendarPickerIcon />}
      />

      <LargeInputField
        style={{marginHorizontal: 35, marginTop: 20}}
        heading={'Write a few words describing the event. (optional)'}
      />

      <FilledButton
        style={{marginHorizontal: 30, marginTop: 20, marginBottom: 20}}
        lable={'Continue'}
        onPress={() => {
          navigation.navigate(ROUTE_WHAT_A_THRO);
        }}
      />
    </ScrollView>
  );
};
