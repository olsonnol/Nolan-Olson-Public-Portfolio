import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/LoginScreen';
import SettingScreen from './screens/SettingsScreen';
// import ExpoScreen from './screens/ExpoScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import NewClassScreen from './screens/NewClassScreen';
import AddStudentScreen from './screens/AddStudentScreen';
import ClassListScreen from './screens/ClassListScreen';
import ClassSettingsScreen from './screens/ClassSettingsScreen';
// import StudentDetailScreen from './screens/StudentDetailScreen';
// import students from "./students";
import {fetchStudents} from './api';

const attendanceNavigator = createStackNavigator(
  {
    'AddStudentScreen': AddStudentScreen,
    'AttendanceScreen': AttendanceScreen,
    'ClassSettingsScreen': ClassSettingsScreen,
  },
  {
    initialRouteName: 'AttendanceScreen',
    defaultNavigationOptions:{
      headerTintColor: 'sky-blue',
      headerStyle:{
        backgroundColor: 'white',
      },
    },
  },
);

const classNavigator = createStackNavigator(
  {
    'ClassListScreen': ClassListScreen,
    'NewClassScreen': NewClassScreen,
    'AttendanceNav': attendanceNavigator,
  },
  {
    initialRouteName: 'ClassListScreen',
    //stack header config
    defaultNavigationOptions: {
      headerTintColor: 'lightcoral',
      headerStyle: {
        backgroundColor: 'white',
      },
    },
  }
);

const mainNagivator = createBottomTabNavigator(
  {
    Class: classNavigator,
    SettingScreen: SettingScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Class') {
          iconName = `ios-${focused ? 'people' : 'contact'}`;
        }
        else if (routeName === 'SettingScreen') {
          iconName = `ios-${focused ? 'options' : 'hammer'}`;
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'lightcoral',
      inactiveTintColor: 'gray',
    },
  }
);

const AppNagivator = createSwitchNavigator(
  {
    Main: mainNagivator,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login' //UNCOMMENT OUT TO MAKE LOGIN SCREEN DEFAULT
    //initialRouteName: 'Main'
  }
);

const AppContainer = createAppContainer(AppNagivator);

export default class App extends React.Component {
  state = {
    classes: [{className:'CS1430', students:[{ name: 'Nolan O', checked: true}, { name: 'Eli O', checked: true}],},
              {className:'CS3720', students:[{ name: 'Max', checked: true}, { name: 'Erin', checked: true}],}],
  }

  componentDidMount(){
    this.getStudents();
  }

  getStudents = async () => {
    const results = await fetchStudents();
    this.setState({classes:[...this.state.classes, {className: 'TestClass', students: results }]});
  }

  addStudent = (std) => {
    this.setState({classes: [...this.state.classes, std]});
  }

  
  render() {
    return <AppContainer screenProps={{
      classes: this.state.classes.map(addKeys),
      onSubmit: this.addStudent
    }}/>;
  }
}

const addKeys = (val, key) => ({ key, ...val })



// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from './src/HomeScreen'
// import DetailScreen from './src/DetailScreen'

// const RootStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailScreen,
// },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: 'crimson',
//       },
//       headerTintColor: 'white',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }







// // import React from 'react';
// // import HomeScreen from './src/HomeScreen.js'
// // import DetailScreen from './src/DetailScreen.js'
// // import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

// // const RootStack = createStackNavigator(
// //   {
// //     Home:HomeScreen,
// //     Detail:DetailScreen,
// //   },
// //   {
// //     initialRouteName: 'Home',
// //     defaultNavigationOptions: {
// //       headerStyle: {
// //         backgroundColor: 'crimson',
// //       },
// //       headerTintColor: 'white',
// //       headerTitleStyle: {
// //         fontWeight: 'bold',
// //       },
// //     },
// //   }
// // )

// // const AppContainer = createAppContainer(RootStack);

// // export default class App extends React.Component {
// //   render() {
// //     return <AppContainer />;
// //   }
// // }