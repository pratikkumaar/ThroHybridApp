import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackIcon from '../assets/svgs/BackIcon';
import {
  grey,
  headingColor,
  lightGrey,
  primaryColor,
  red,
  white,
} from '../theme/Colors';
import {TitleBarHeader} from '../components/TitleBarHeader';
import {Rating} from 'react-native-ratings';
import {appStyle} from '../theme/AppStyle';
import CatchIcon from '../assets/svgs/CatchIcon';
import ThroIcon from '../assets/svgs/ThroIcon';
import {ACTIVITY} from '../utils/Constants';
import openMap from 'react-native-open-maps';
import NavigateIcon from '../assets/svgs/NavigateIcon';

export default ThroDetails = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {});

  const renderActivities = ({item}) => {
    return (
      <TouchableOpacity
        style={{height: 40}}
        // onPress={() => setSelectedIndex(index)}
      >
        <Text
          style={{
            color: primaryColor,
            fontSize: 15,
            paddingTop: 5,
            paddingBottom: 2,
            paddingHorizontal: 12,
            fontFamily: 'Nunito-Bold',
            borderWidth: 2,
            borderColor: primaryColor,
            backgroundColor: white,
            borderRadius: 20,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: white}}>
      <TitleBarHeader
        leftIcon={<BackIcon />}
        titleBarText={'Thro Details'}
        //   rightIcon={<FilterIcon/>}
        onLeftPressed={() => {}}
        elevation={10}
      />

      <ScrollView>
        <View>
          <View
            style={{
              backgroundColor: lightGrey,
              height: 200,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Image
                style={{height: 100, aspectRatio: 1, borderRadius: 60}}
                source={require('../assets/images/user1.png')}
              />

              <Text
                style={{
                  color: headingColor,
                  fontSize: 15,
                  fontFamily: 'Nunito-Medium',
                }}>
                John'19
              </Text>

              <Rating
                readonly={true}
                ratingColor={primaryColor}
                imageSize={18}
                style={{padding: 5, backgroundColor: white}}
                ratingCount={5}
                startingValue={4}
              />
            </View>

            <View
              style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[appStyle.textHeading, {textAlign: 'center'}]}>
                Open Event Discussion for Bla Bla Event
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  width: '100%',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 4,
                    backgroundColor: primaryColor,
                    borderRadius: 30,
                    alignItems: 'center',
                    marginHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      color: white,
                      fontWeight: '500',
                      fontSize: 15,
                      paddingHorizontal: 15,
                      marginVertical: 4,
                    }}>
                    Catch
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 4,
                    backgroundColor: lightGrey,
                    borderRadius: 30,
                    alignItems: 'center',
                    marginHorizontal: 15,
                    borderColor: primaryColor,
                    borderWidth: 2,
                  }}>
                  <Text
                    style={{
                      color: primaryColor,
                      fontWeight: '500',
                      fontSize: 15,
                      paddingHorizontal: 15,
                      marginVertical: 4,
                    }}>
                    Leave
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CatchIcon />
                  <Text style={appStyle.textSubHeading}>
                    {' '}
                    No of Thros Caught: 6
                  </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <ThroIcon />
                  <Text style={appStyle.textSubHeading}>
                    {' '}
                    Total No of Thros: 10
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              openMap({
                latitude: 28.6212224,
                longitude: 77.2047677,
                zoom: 15,
                mapType: 'hybrid',
                travelType: 'drive',
                navigate: true,
              });
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              alignContent: 'center',
            }}>
            <Text
              style={[
                appStyle.textSubHeading,
                {marginStart: 20, marginEnd: 5},
              ]}>
              Location
            </Text>
            <NavigateIcon />
          </TouchableOpacity>
          <Text style={[appStyle.textRegular, {marginHorizontal: 20}]}>
            Starbucks, Noida Sector 18, India
          </Text>

          <Text
            style={[
              appStyle.textSubHeading,
              {marginHorizontal: 20, marginTop: 15},
            ]}>
            Date & Time
          </Text>
          <Text style={[appStyle.textRegular, {marginHorizontal: 20}]}>
            1st October 2024, 04:00 PM - 06:00 PM
          </Text>

          <Text
            style={[
              appStyle.textSubHeading,
              {marginHorizontal: 20, marginTop: 15},
            ]}>
            Description
          </Text>
          <Text
            style={[
              appStyle.textRegular,
              {marginHorizontal: 20, textAlign: 'justify'},
            ]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Text
            style={[
              appStyle.textSubHeading,
              {marginHorizontal: 20, marginTop: 15},
            ]}>
            Related Tags/Interests
          </Text>
          <FlatList
            data={ACTIVITY}
            style={{marginHorizontal: 20, marginTop: 10}}
            renderItem={renderActivities}
            horizontal={true}
            ItemSeparatorComponent={<View style={{margin: 2}}></View>}
            keyExtractor={(item, index) => index.toString()}
            extraData={selectedIndex}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
