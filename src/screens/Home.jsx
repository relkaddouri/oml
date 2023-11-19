import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../utils/colors';




const Home = () => {

   return(
    <SafeAreaView style={styles.Section}>
      <View style={styles.Search}>
       <View style={styles.SearchInput}>
          <TextInput placeholder='Search here ..'/>
          <TouchableOpacity style={styles.SearchBtn}>
            <Image source={require('../../assets/img/search.png')} />
          </TouchableOpacity>
       </View>
        <TouchableOpacity style={styles.filterBtn}>
            <Image source={require('../../assets/img/filter.png')} />
          </TouchableOpacity>
      </View>
      <ScrollView style={styles.Container}>
          <View style={styles.lead}>
            <View style={styles.leadNameStatus}>
              <View>
                <Text>Sarah Anderson</Text>
                <Text>New</Text>
                <Text>Duplicate</Text>
              </View>
              <View>
                <Text>Pending</Text>
                <Image source={require('../../assets/img/left.png')} />
              </View>
            </View>
            <View style={styles.leadSourceTime}>
              <View>
                <Image source={require('../../assets/img/fb.png')} />
                <Text>FB Form Campaign</Text>
              </View>
              <View>
                <Image source={require('../../assets/img/time.png')} />
                <Text>4 days ago</Text>
              </View>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>

   )
}

const styles = StyleSheet.create({
  Section: {
    flex:1,
    backgroundColor:colors.white,
    paddingTop:10
  },
  Search: {
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:26,
    paddingVertical:16,
  },
  SearchInput: {
      flex:7,
      flexDirection:'row',
      alignItems:'center',
      padding:5,
      borderColor:colors.grayLight,
      borderRadius:50,
      borderWidth:1,
      justifyContent:'space-between',
      height:48
  },
  SearchBtn: {
    height:40,
    width:40,
    backgroundColor:colors.primaryExtraLight,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50
  },
  filterBtn: {
    flex:1,
    backgroundColor:colors.white,
    height:45,
    width:45,
    borderColor:colors.grayLight,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:50,
    marginLeft:5
  },
  Container:{
    backgroundColor:colors.grayLight,
    paddingHorizontal:26,
    borderTopLeftRadius:26,
    borderTopRightRadius:26,
  },
  lead:{
    flexDirection:'column'
  },
  leadNameStatus:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }

})

export default Home;