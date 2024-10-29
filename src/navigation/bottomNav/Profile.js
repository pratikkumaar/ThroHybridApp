import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  AppState,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {black, grey, lightGrey, primaryColor, white} from '../../theme/Colors';
import {TitleBarHeader} from '../../components/TitleBarHeader';
import BackIcon from '../../assets/svgs/BackIcon';
import FilterIcon from '../../assets/svgs/FilterIcon';
import MoreIcon from '../../assets/svgs/MoreIcon';
import {appStyle} from '../../theme/AppStyle';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

export default Profile = () => {
  const initialLayout = {width: Dimensions.get('window').width};
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'chats', title: 'Details'},
    {key: 'status', title: 'Thro Created'},
    {key: 'calls', title: 'Thro Caught'},
  ]);

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
    chats: ChatsRoute,
    status: StatusRoute,
    calls: CallsRoute,
  });
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: white}}>
      <TitleBarHeader
        // leftIcon={<BackIcon />}
        titleBarText={'My Profile'}
        rightIcon={<MoreIcon />}
        onLeftPressed={() => {}}
        elevation={10}
      />

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
});
