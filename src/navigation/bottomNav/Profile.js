import React, {useCallback, useEffect} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import MoreIcon from '../../assets/svgs/MoreIcon';
import {TitleBarHeader} from '../../components/TitleBarHeader';
import {appStyle} from '../../theme/AppStyle';
import {black, grey, lightGrey, primaryColor, white} from '../../theme/Colors';
import {apiCall} from '../../utils/apicall';
import {GET_PROFILE} from '../../utils/Constants';
import {useNavigation} from '@react-navigation/native';

export default Profile = () => {
  const initialLayout = {width: Dimensions.get('window').width};
  const bottomSheetRef = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();
  const [routes] = React.useState([
    {key: 'Details', title: 'Details'},
    {key: 'ThroCreated', title: 'Thro Created'},
    {key: 'ThroCaught', title: 'Thro Caught'},
  ]);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    /* if (index === 1) onClose();  */
    // Close the sheet when collapsed
  });

  const ChatsRoute = () => (
    <View style={[styles.scene]}>
      <Text>Chats Screen</Text>
    </View>
  );

  const StatusRoute = () => (
    <View style={[styles.scene]}>
      <Text>Status Screen</Text>
    </View>
  );

  const CallsRoute = () => (
    <View style={[styles.scene]}>
      <Text>Calls Screen</Text>
    </View>
  );

  const renderScene = SceneMap({
    Details: ChatsRoute,
    ThroCreated: StatusRoute,
    ThroCaught: CallsRoute,
  });

  useEffect(() => {
    getProfileData();

    // ref
  }, []);

  const getProfileData = async () => {
    const res = await apiCall(
      'GET',
      GET_PROFILE,
      null,
      null,
      true,
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllYTI1ODY2OGY5NTkyYTMzNmMzMDEiLCJtb2JpbGVObyI6IjgwMDQwMzczOTgiLCJzZXNzaW9uSWQiOiI2NzUzNTRiYjkzNTJjZDFhZGU1M2JiOGEiLCJpYXQiOjE3MzM1MTQ0Mjd9.4OHBMcPOc-gthoPgad9ECXOd30BNhfZ4-FGCGvAbw9c',
    );
  };
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: white}}>
      <TitleBarHeader
        // leftIcon={<BackIcon />}
        titleBarText={'My Profile'}
        rightIcon={<MoreIcon />}
        onLeftPressed={() => {}}
        elevation={10}
      />

      {/*    <GestureHandlerRootView style={styles.container}>
        <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
 */}
      <View
        style={{
          marginHorizontal: 25,
          backgroundColor: lightGrey,
          height: '55%',
        }}>
        <Image
          style={{
            width: '90%',
            alignSelf: 'center',
            aspectRatio: 1,
            marginTop: 20,
          }}
          source={{
            uri: 'https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg',
          }}
        />

        <View style={{flexDirection: 'row', margin: 20}}>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Text
              style={{fontFamily: 'Nunito-Bold', fontSize: 17, color: black}}>
              in.prateekgupta, 28
            </Text>
          </View>

          <View
            style={{
              width: 100,
              flex: 1.5,
              backgroundColor: primaryColor,
              height: 55,
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 10,
            }}>
            <View style={{alignItems: 'center', flex: 1}}>
              <Text style={[appStyle.textHeading, {color: white}]}>5</Text>
              <Text style={[appStyle.textSubHeading, {color: white}]}>
                Catches
              </Text>
            </View>
            <View style={{height: 40, width: 0.5, backgroundColor: white}} />

            <View style={{alignItems: 'center', flex: 1}}>
              <Text style={[appStyle.textHeading, {color: white}]}>0</Text>
              <Text style={[appStyle.textSubHeading, {color: white}]}>
                Thros
              </Text>
            </View>
          </View>
        </View>
      </View>

      <TabView
        style={{marginHorizontal: 25, elevation: 0, height: 40}}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props => (
          <TabBar
            {...props}
            tabStyle={{width: 'auto', height: 50}}
            scrollEnabled
            indicatorStyle={{backgroundColor: primaryColor}}
            activeColor={primaryColor}
            style={{backgroundColor: white, elevation: 1}} // WhatsApp green color
            labelStyle={{color: 'white', fontFamily: 'Nunito-Bold'}}
            renderLabel={({route, focused, color}) => (
              <Text
                style={[
                  {width: '100%'},
                  focused ? styles.tabActive : styles.tabInActive,
                ]}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    fontFamily: 'Nunito-Bold',
    color: primaryColor,
    fontSize: 14,
    textTransform: 'capitalize',
  },

  tabInActive: {
    fontFamily: 'Nunito-Bold',
    color: grey,
    textAlign: 'center',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});
