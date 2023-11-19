import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';



const Splash = () => {
  const nav = useNavigation()


  useEffect(() => {
    setTimeout(()=> {
      nav.replace('Login')
    },2000);
  },[]);


   return(
    <View style={styles.sectionContainer}>
      <StatusBar style='light'/>
      <View style={styles.sectionLogo}>
        <Image 
        source={require('../../assets/img/logo.png')} 
        style={styles.logo}
        />
        <Text style={styles.slogon}>
          Some leads need to be won</Text>
      </View>

    </View>
   )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:colors.primary, 
    flex:1, 
    justifyContent:'center'
  },
  sectionLogo: {
    alignSelf:'center'
  },
  logo: {
    width:160,
    height: 75
  },
  slogon: {
    color:colors.white,
    fontFamily:'PlusJakartaSans-Bold',
    marginTop:10
  },
});

export default Splash;