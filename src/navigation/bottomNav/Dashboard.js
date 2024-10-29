import {useNavigation} from '@react-navigation/native';
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
  FILTER_THRO,
  ROUTE_FILTER_THRO,
  ROUTE_THRO_DETAILS,
  THRO_DETAILS,
} from '../../utils/Constants';

export default Dashboard = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {});

  const data = [
    {
      image: '1',
      userName: 'Prateek',
      userAge: '28',
      userRating: 4.5,
      eventName: 'Cricket Turf Match 10 Overs',
      eventLocation: 'The Smash, Sector 12, Gurgaon',
      eventStartDate: '31 Aug, 09:30 PM',
      noOfCatches: '16',
      noOfThros: '22',
    },
    {
      image: '1',
      userName: 'John',
      userAge: '19',
      userRating: 4,
      eventName: 'Meeting Core Team',
      eventLocation: 'CCD, Sector 31, Gurgaon',
      eventStartDate: '30 Aug, 09:30 PM',
      noOfCatches: '3',
      noOfThros: '5',
    },
    {
      image: '1',
      userName: 'John',
      userAge: '19',
      userRating: 4,
      eventName: 'Dance Class Opening',
      eventLocation: 'CCD, Sector 31, Gurgaon',
      eventStartDate: '30 Aug, 09:30 PM',
      noOfCatches: '3',
      noOfThros: '5',
    },
    {
      image: '1',
      userName: 'John',
      userAge: '19',
      userRating: 4,
      eventName: 'Coffee Date',
      eventLocation: 'CCD, Sector 31, Gurgaon',
      eventStartDate: '30 Aug, 09:30 PM',
      noOfCatches: '0',
      noOfThros: '1',
    },
    {
      image: '1',
      userName: 'John',
      userAge: '19',
      userRating: 4,
      eventName: 'Meeting Core Team',
      eventLocation: 'CCD, Sector 31, Gurgaon',
      eventStartDate: '30 Aug, 09:30 PM',
      noOfCatches: '3',
      noOfThros: '5',
    },
    {
      image: '1',
      userName: 'John',
      userAge: '19',
      userRating: 4,
      eventName: 'Meeting Core Team',
      eventLocation: 'CCD, Sector 31, Gurgaon',
      eventStartDate: '30 Aug, 09:30 PM',
      noOfCatches: '3',
      noOfThros: '5',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate(ROUTE_THRO_DETAILS);
      }}>
      <View style={{flex: 3, alignItems: 'center'}}>
        <Image
          style={{height: 80, aspectRatio: 1, borderRadius: 40}}
          source={require('../../assets/images/user1.png')}
        />

        <Text
          style={{
            color: headingColor,
            fontSize: 13,
            fontFamily: 'Nunito-Medium',
          }}>
          {item.userName + "'" + item.userAge}
        </Text>

        <Rating
          readonly={true}
          ratingColor={primaryColor}
          imageSize={16}
          ratingCount={5}
          startingValue={item.userRating}
        />
      </View>
      <View style={{flex: 7, backgroundColor: white, alignSelf: 'center'}}>
        <Text style={styles.textHeading}>{item.eventName}</Text>
        <Text style={[styles.textRegular, {marginTop: 2}]}>
          {item.eventLocation}
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Text style={styles.textSubHeading}>{item.eventStartDate}</Text>
          <Text style={styles.textError}> (Expiring Soon)</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: primaryColor,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
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
          <View style={{marginEnd: 20, flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <CatchIcon />
              <Text style={[styles.textRegular]}> {item.noOfCatches}</Text>
            </View>

            <View style={{flexDirection: 'row', marginStart: 10}}>
              <ThroIcon />
              <Text style={[styles.textRegular]}>{item.noOfThros}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderActivities = ({item, index}) => {
    console.log('id', index);
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

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: white}}>
      <TitleBarHeader
        leftIcon={<LocationIcon />}
        titleBarText={'Thro'}
        rightIcon={<FilterIcon />}
        onLeftPressed={() => {}}
        onRightPressed={() => {
          navigation.navigate(ROUTE_FILTER_THRO);
        }}
        elevation={10}
      />

      <FlatList
        data={ACTIVITY}
        style={{marginHorizontal: 25, marginBottom: 10}}
        renderItem={renderActivities}
        horizontal={true}
        ItemSeparatorComponent={<View style={{margin: 5}}></View>}
        keyExtractor={(item, index) => index.toString()}
        extraData={selectedIndex}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        // ListHeaderComponent={() => <Text style={styles.header}>Header</Text>}
        //ListFooterComponent={() => <Text style={styles.footer}>Footer</Text>}
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
    fontFamily: 'Nunito-Medium',
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
