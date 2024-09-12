import {useNavigation} from '@react-navigation/native';
import {useRef, useState} from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, RESULTS} from 'react-native-permissions';
import {FilledButton} from '../../components/FilledButton';
import {LargeInputField} from '../../components/LargeInputField';
import {black, grey} from '../../theme/Colors';
import {checkPermission, requestPermission} from '../../utils/PermissionUtils';

export default PersonalDetails = () => {
  const navigation = useNavigation();
  const [selectedActvity, setSelectedActvity] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const categories = [{name: 'Male'}, {name: 'Female'}];
  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand(); // Opens the bottom sheet
  };

  // Open Image Library
  const openGallery = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    });
  };

  const handleCheckPermission = async () => {
    const result = await checkPermission(PERMISSIONS.ANDROID.CAMERA); // Use appropriate permission
    console.log('Camera Permission Status:', result);
    handleRequestPermission();
  };

  const handleRequestPermission = async () => {
    const result = await requestPermission(PERMISSIONS.ANDROID.CAMERA); // Use appropriate permission
    if (result === RESULTS.GRANTED) {
      openCamera();
    } else if (result === RESULTS.DENIED) {
    } else if (result === RESULTS.BLOCKED) {
      Linking.openSettings();
    }
  };

  // Open Camera
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    });
  };

  return (
    <View>
      <Text
        style={{
          marginTop: '10%',
          alignSelf: 'center',
          color: black,
          fontFamily: 'Nunito-ExtraBold',
          fontSize: 30,
        }}>
        Profile Setup
      </Text>

      <Text
        style={{
          marginTop: 10,
          alignSelf: 'center',
          color: grey,
          fontFamily: 'Nunito-Regular',
          fontSize: 15,
        }}>
        What do you look like?
      </Text>

      <TouchableOpacity
        onPress={() => {
          handleCheckPermission();
        }}>
        {imageUri == null ? (
          <Image
            style={{
              height: 200,
              width: 200,
              borderRadius: 100,
              alignSelf: 'center',
              marginTop: '20%',
            }}
            source={require('../../assets/images/upload_image_holder.png')}
          />
        ) : (
          <Image
            style={{
              height: 200,
              width: 200,
              borderRadius: 100,
              alignSelf: 'center',
              marginTop: '20%',
            }}
            source={{uri: imageUri}}
          />
        )}
      </TouchableOpacity>

      <LargeInputField
        style={{marginHorizontal: 35, marginTop: '15%'}}
        heading={'Write a few words describing the event. (optional)'}
      />

      <FilledButton
        style={{marginVertical: '20%', marginHorizontal: 30}}
        lable={'Continue'}
        onPress={() => {
          navigation.navigate('ChooseInterests');
        }}
      />
    </View>
  );
};
