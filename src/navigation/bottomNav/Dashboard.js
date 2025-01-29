import messaging from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import CatchIcon from '../../assets/svgs/CatchIcon';
import FilterIcon from '../../assets/svgs/FilterIcon';
import LocationIcon from '../../assets/svgs/LocationIcon';
import ThroIcon from '../../assets/svgs/ThroIcon';
import CustomPopup from '../../components/CustomPopUp';
import {FilledButton} from '../../components/FilledButton';
import {TitleBarHeader} from '../../components/TitleBarHeader';
import {
  headingColor,
  primaryColor,
  red,
  subHeadingColor,
  white,
} from '../../theme/Colors';
import {
  ACTIVITY,
  BASE_URL,
  GET_THROS,
  ROUTE_FILTER_THRO,
  ROUTE_THRO_DETAILS,
  SESSION_TOKEN,
} from '../../utils/Constants';
import {getLocalData} from '../../utils/LocalStorage';
import NetworkService from '../../utils/NetworkService';
import {formateDate} from '../../components/DateFormatter';

export default Dashboard = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [throData, setThroData] = useState([]);

  const [fcmToken, setFcmToken] = useState('');

  const getSession = async () => {
    await getLocalData(SESSION_TOKEN).then(res => {
      console.log('session', res);
      setAuthToken(res);
    });

    setFcmToken(await messaging().getToken());

    console.log('Fcm-->', await messaging().getToken());
  };

  useEffect(() => {
    getThroEvents(authToken);
  }, [authToken]);

  const handleAccept = () => {
    console.log('Accepted');
    setPopupVisible(false);
  };

  const handleDecline = () => {
    console.log('Declined');
    setPopupVisible(false);
  };

  useEffect(() => {
    getSession();
  }, []);

  const queryParams = {
    page: 1,
    limit: 1,
  };

  useEffect(() => {}, [throData]);

  const renderItemThro = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate(ROUTE_THRO_DETAILS);
        }}>
        <View style={{flex: 3, alignItems: 'center'}}>
          <Image
            style={{height: 80, aspectRatio: 1, borderRadius: 40}}
            source={{uri: item.creator.profilePicture}}
          />

          <Text
            style={{
              color: headingColor,
              fontSize: 13,
              fontFamily: 'Nunito-Medium',
            }}>
            {item.creator.userName}
          </Text>

          <Rating
            readonly={true}
            ratingColor={primaryColor}
            imageSize={16}
            ratingCount={5}
            startingValue={3}
          />
        </View>
        <View style={{flex: 7, backgroundColor: white, alignSelf: 'center'}}>
          <Text style={styles.textHeading}>
            {item.activity + ' - ' + item.title}
          </Text>
          <Text numberOfLines={2} style={[styles.textRegular, {marginTop: 2}]}>
            {item.address}
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={styles.textSubHeading}>
              {formateDate(item.startTimestamp)}
            </Text>
            {/* <Text style={styles.textError}> (Expiring Soon)</Text> */}
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
              justifyContent: 'space-between',
            }}>
            <FilledButton lable={'Catch'} height={30} width={80}></FilledButton>
            <View style={{marginEnd: 20, flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <CatchIcon />
                <Text style={[styles.textRegular]}> {item.catchSentCount}</Text>
              </View>

              <View style={{flexDirection: 'row', marginStart: 10}}>
                <ThroIcon />
                <Text style={[styles.textRegular]}>
                  {item.catchAcceptedCount}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderActivities = ({item, index}) => {
    // Determine background color based on whether the item is selected
    const backgroundColor =
      index === selectedIndex
        ? {
            color: white,
            fontSize: 15,
            paddingTop: 5,
            paddingBottom: 2,
            paddingHorizontal: 12,
            fontFamily: 'Nunito-Bold',
            borderWidth: 2,
            borderColor: primaryColor,
            justifyContent: 'center',
            backgroundColor: primaryColor,
            borderRadius: 20,
          }
        : {
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
          };

    return (
      <TouchableOpacity
        style={{height: 40}}
        onPress={() => setSelectedIndex(index)}>
        <Text style={backgroundColor}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const getThroEvents = async token => {
    const data = await NetworkService.get(
      BASE_URL + GET_THROS,
      queryParams,
      token,
    );
    console.log('getThroEvents', JSON.stringify(data.data.data));
    setThroData(data.data.data);
  };

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: white}}>
      {/*   <ActivityIndicatorComponent
        visible={true}
        text="Fetching Data..."
        //  onClose={() => setLoading(false)} // Optional close handler
      /> */}
      <TitleBarHeader
        leftIcon={<LocationIcon />}
        titleBarText={'Nearby Thros'}
        rightIcon={<FilterIcon />}
        onLeftPressed={() => {}}
        onRightPressed={() => {
          navigation.navigate(ROUTE_FILTER_THRO);
        }}
        elevation={10}
      />

      <View>
        <FlatList
          data={ACTIVITY}
          style={{
            marginHorizontal: 25,
            marginBottom: 10,
          }}
          renderItem={renderActivities}
          horizontal={true}
          ItemSeparatorComponent={<View style={{margin: 5}}></View>}
          keyExtractor={(item, index) => index.toString()}
          extraData={selectedIndex}
        />
      </View>

      <CustomPopup
        visible={popupVisible}
        message="Are you sure you want to catch this thro?"
        onAccept={handleAccept}
        onDecline={handleDecline}
        acceptText="Yes"
        declineText="No"
      />

      <FlatList
        data={throData}
        renderItem={renderItemThro}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 5,
    flexDirection: 'row',
    marginVertical: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  header: {
    padding: 20,
    fontSize: 24,
    backgroundColor: '#ddd',
  },
  footer: {
    padding: 20,
    fontSize: 24,
    backgroundColor: '#ddd',
  },
  textHeading: {
    fontSize: 17,
    fontFamily: 'Nunito-ExtraBold',
    color: headingColor,
  },
  textSubHeading: {
    fontSize: 14,
    fontFamily: 'Nunito-Bold',
    color: headingColor,
  },
  textRegular: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: subHeadingColor,
  },
  textError: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    color: red,
  },
});
