import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { colors } from '../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';



const SignUp = () => {
  const nav = useNavigation();
   return(
    <SafeAreaView style={styles.Section}>
      <StatusBar/>
      <ScrollView style={styles.Container}>
      <View style={styles.ContainerLogin}>
        <Image 
            source={require('../../assets/img/logoBlack.png')} 
            style={styles.logo}
          />
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.slogon}>No credit card needed.</Text>
          <TextInput
            style={styles.input} 
            placeholder="Full Name"
          />
          <TextInput
            keyboardType='email-address'
            style={styles.input} 
            placeholder="Your work email"
          />
          <TextInput
            keyboardType='phone-pad'
            style={styles.input} 
            placeholder="Phone number"
          />
          <TextInput
            secureTextEntry={true}
            keyboardType='ascii-capable'
            style={styles.input} 
            placeholder="Password"
          />
          <TouchableOpacity >
            <View style={styles.btn}>
              <Text style={styles.textBtn}>SIgn Up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> {
              nav.navigate('Login')
            }}
          >
            <View style={styles.btnOutline}>
              <Text style={styles.textBtnOutline}>You already have an account ? Sign in</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.btnLink}>
              <Text style={styles.textBtnLinkBlack}>Need help ? Chat with us</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

   )
}

const styles = StyleSheet.create({
  Section: {
    flex:1,
    backgroundColor:colors.white,
  },
  Container: {
    flex:1,
    backgroundColor:colors.white,
    paddingTop:30
  },
  ContainerLogin: {
    paddingHorizontal:26
  },
  logo: {
    width:160,
    height: 75
  },
  title: {
    color:colors.black,
    fontSize:29,
    marginTop:30,
    fontWeight:'600'
  },
  slogon: {
    color:colors.black,
    fontSize:14,
    fontWeight:'500'
  },
  input: {
    height:54,
    fontSize:14,
    fontWeight:'normal',
    borderRadius:50,
    borderColor:colors.grayLight,
    borderWidth:1,
    paddingLeft:15,
    paddingRight:15,
    marginTop:15
  },
  btn: {
    backgroundColor:colors.primary,
    height:54,
    fontWeight:'normal',
    borderRadius:50,
    paddingVertical:14,
    paddingHorizontal:10,
    marginTop:15
  },
  textBtn: {
    color: colors.white,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center'
  },
  btnLink: {
    height:54,
    fontWeight:'normal',
    borderRadius:50,
    paddingVertical:14,
    paddingHorizontal:10,
    marginTop:15
  },
  textBtnLink: {
    color: colors.primary,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center'
  },
  textBtnLinkBlack: {
    color: colors.black,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center'
  },
  btnOutline: {
    height:54,
    fontWeight:'normal',
    borderRadius:50,
    paddingVertical:14,
    paddingHorizontal:10,
    marginTop:15,
    borderColor:colors.primary,
    borderWidth:1,
    marginTop:35,
  },
  textBtnOutline: {
    color: colors.primary,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center'
  }
});

export default SignUp;