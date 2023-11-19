import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import FollowUp from '../screens/FollowUp';
import Analytics from '../screens/Analytics';
import { Image, Text, View } from 'react-native';
import { colors } from '../utils/colors';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel:false,
      tabBarStyle: {
        position: 'absolute',
        height:85,
        paddingBottom:20,
        paddingTop:20,
      }
    }}>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
                <View style={{justifyContent:'center', alignItems:'center'}}>
                  <Image 
                  source={require('../../assets/img/leads.png')}
                  style={{
                    tintColor:focused ? colors.primary : colors.grayText
                  }}
                  />
                  <Text
                    style={{
                      color:focused ? colors.primary : colors.grayText,
                      fontWeight:focused ? 'bold':'normal',
                    }}
                  >Leads</Text>
                </View>
          ),
        }}
      />
      <Tab.Screen 
        name="FollowUp" 
        component={FollowUp}
        options={{
          tabBarIcon: ({focused}) => (
                <View style={{justifyContent:'center', alignItems:'center'}}>
                  <Image source={require('../../assets/img/followUp.png')}
                    style={{
                      tintColor:focused ? colors.primary : colors.grayText
                    }}  />
                  <Text
                    style={{
                      color:focused ? colors.primary : colors.grayText,
                      fontWeight:focused ? 'bold':'normal',
                    }}
                  >Follow Up</Text>
                </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Add" 
        component={Analytics}
        options={{
          tabBarIcon: ({focused}) => (
                <View 
                style={{
                  justifyContent:'center', 
                  alignItems:'center',
                  width:54,
                  height:54,
                  backgroundColor:colors.primaryExtraLight,
                  borderRadius:50
                  }}>
                  <Image source={require('../../assets/img/plus.png')}
                  />
                </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Analytics" 
        component={Analytics}
        options={{
          tabBarIcon: ({focused}) => (
                <View style={{justifyContent:'center', alignItems:'center'}}>
                  <Image source={require('../../assets/img/analytics.png')}
                    style={{
                      tintColor:focused ? colors.primary : colors.grayText
                    }}
                  />
                  <Text
                    style={{
                      color:focused ? colors.primary : colors.grayText,
                      fontWeight:focused ? 'bold':'normal',
                    }}
                  >Analytics</Text>
                </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
                <View style={{justifyContent:'center', alignItems:'center'}}>
                  <Image source={require('../../assets/img/settings.png')}
                    style={{
                      tintColor:focused ? colors.primary : colors.grayText
                    }}
                  />
                  <Text
                    style={{
                      color:focused ? colors.primary : colors.grayText,
                      fontWeight:focused ? 'bold':'normal',
                    }}
                  >Settings</Text>
                </View>
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;