import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import BackIcon from '../../../assets/svgs/BackIcon';
import LocationDropIcon from '../../../assets/svgs/LocationDropIcon';
import { DropDown } from '../../../components/DropDown';
import { InputField } from '../../../components/InputField';
import { SeekSlider } from '../../../components/SeekSlider';
import { TitleBarHeader } from '../../../components/TitleBarHeader';
import { black, grey } from '../../../theme/Colors';
import { FilledButton } from '../../../components/FilledButton';

export default CreateThro = () =>{

    const navigation = useNavigation();
    const [selectedActvity, setSelectedActvity] = useState('');
    const [selectedSortValue, setSelectedSortValue] = useState('');
    const [showPicker,setShowPicker] = useState(false);
    const [kms, setKms] = useState(15);
    const [catches, setCatches] = useState(5);
    const [date, setDate] = useState(new Date('2012-12-12'));
    const categories = [
        {name:'All'},
        {name:'Sports'},
        {name:'Entertainment'},
        {name:"Meet Up"},
        {name:"Outdoor"},
      ]; 

      const sortBy = [
        {name:'Cricket'},
        {name:'Football'},
        {name:'Table Tennis'},
        {name:"Badminton"},
        {name:"C hess"},
      ];

      useEffect(()=>{
        console.log("kms",kms);
        setKms(kms)
    },kms)

   
    
    return(<ScrollView>


        <TitleBarHeader 
                leftIcon={<BackIcon/>} 
                //rightIcon={<FilterIcon/>}
                onLeftPressed={()=>{navigation.goBack()}}
                //onRightPressed={()=>{}}
                elevation={10}
                />

        <Text style={{marginTop:-20,alignSelf:'center',color:black, fontFamily:'Nunito-ExtraBold',fontSize:30}}> 
            Create a Thro
        </Text>

        <Text style={{marginTop:10,alignSelf:'center',color:grey, fontFamily:'Nunito-Regular',fontSize:15}}> 
            What type of Activity is it?
        </Text>    

        <DropDown
            style={{marginHorizontal:35,marginTop:'10%'}}
            heading={'Activity'}
            data={categories}
            value={selectedActvity}
            selectedValue={(value)=>{setSelectedActvity(value)}}
            />    

        <DropDown
            style={{marginHorizontal:35,marginTop:20}}
            heading={'Subactivity'}
            data={sortBy}
            value={selectedSortValue}
            selectedValue={(value)=>{setSelectedSortValue(value)}}
            />
        
        <InputField 
            style={{marginHorizontal:35,marginTop:20}}
            heading={"Event Heading"}
            placeholder={'Event name can have 15-20 letters long'}
            inputMode={'numeric'}
            />

        <InputField 
            style={{marginHorizontal:35,marginTop:20}}
            heading={"Location"}
            isEditable={false}
            onPress={()=>{setShowPicker(!showPicker)}}
            value={'New Delhi, India'}
            inputMode={'numeric'}
            rightIcon={<LocationDropIcon/>}/>

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
           onValueChange={(value)=>{setKms(value)}}
           minimumValue={2}
           maximumValue={20}
           subheading={'People with in ' + kms +' kms can catch'}
           style={{marginHorizontal:35,marginTop:20}}/>

        <SeekSlider       
           heading={'No of Catches'}
           value={catches}
           minimumValue={0}
           maximumValue={10}
           subheading={'Maximum ' + catches +' people can catch'}
           onValueChange={(value)=>{setCatches(value)}}
           style={{marginHorizontal:35}}/>

        <FilledButton
           style={{marginHorizontal:30,marginTop:20,marginBottom:20}}
           lable={'Continue'}
           onPress={()=>{navigation.navigate('CreateThroComplete')}}/>
    

    </ScrollView>)
}

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
