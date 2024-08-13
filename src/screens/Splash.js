import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView } from 'react-native';

export default Splash = () =>{
    const navigation = useNavigation();

    setTimeout(()=>{navigation.navigate('SignIn')},2000)

    return(<SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image
            style={{height:120,aspectRatio:1.44,marginBottom:'20%'}}
            source={require('../assets/logos/splash_logo.png')}>
        </Image> 

        <Image
            style={{width:400,height:260,position:'absolute',bottom:10}}
            source={require('../assets/images/splash_image.png')}>
        </Image>
    </SafeAreaView>)
}