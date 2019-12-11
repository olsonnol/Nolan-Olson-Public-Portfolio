import React from "react";
import { Text, View, Button } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

export default class ClassListScreen extends React.Component{
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
            title: 'Class List',
            headerRight: () => (
                <Button 
                    onPress={()=>navigation.push('NewClassScreen')}
                    title='New Class'
                    backgroundColor='sky-blue'
                />
            ),          
            headerStyle: {
                backgroundColor: 'lightcoral',
            },
            headerTintColor: 'white',
        };
    };

    render(){
        const { navigation } = this.props;
        return (
            <View>
                <ScrollView>
                    {this.props.screenProps.classes.map(element => 
                        //<Text>{element.name}</Text>
                        <Button 
                        title={element.className} 
                        onPress={() => navigation.push('AttendanceNav',
                        {class:element})}
                        backgroundColor='sky-blue'
                        />
                    )}
                </ScrollView>
            </View>
        ) 
    }
}