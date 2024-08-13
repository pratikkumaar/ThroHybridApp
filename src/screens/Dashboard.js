import { useEffect, useState } from "react"
import { SafeAreaView, Text, View,StyleSheet, FlatList } from "react-native"
import FilterIcon from "../assets/svgs/FilterIcon"
import LocationIcon from "../assets/svgs/LocationIcon"
import { TitleBarHeader } from "../components/TitleBarHeader"
import { Image } from "react-native"
import { black, grey, white } from "../theme/Colors"
import { Rating } from "react-native-ratings"

export default Dashboard = () =>{
    useEffect(()=>{})

    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 5' },
      ];

      const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={{flex:3,alignItems:'center'}}>
                <Image
                    style={{height:80,aspectRatio:1,borderRadius:40}}
                    source={require('../assets/images/user1.png')}/>
                
                <Text style={{color:black,fontSize:14}}>
                    pratik.kumaar
                </Text>

                <Rating
                    style={{elevation:10}}
                    imageSize={15}
                    ratingCount={5}
                    startingValue={3}/>
                    
            </View>
            <View style={{flex:7,backgroundColor:grey}}>

            </View>
        </View>
      );

    return(<SafeAreaView style={{height:'100%',backgroundColor:white}}>
            
            <TitleBarHeader 
                leftIcon={<LocationIcon/>} 
                titleBarText={"Thro"} 
                rightIcon={<FilterIcon/>}
                onLeftPressed={()=>{}}
                onRightPressed={()=>{}}
                elevation={10}
                />

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                // ListHeaderComponent={() => <Text style={styles.header}>Header</Text>}
                //ListFooterComponent={() => <Text style={styles.footer}>Footer</Text>}
            />

        </SafeAreaView>)
}

const styles = StyleSheet.create({
    item: {
      paddingVertical: 10,
      flexDirection:'row',
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
  });