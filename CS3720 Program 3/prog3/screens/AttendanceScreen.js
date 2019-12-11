import React from "react";
import { Text, View, Button, CheckBox, StyleSheet} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

const Row = props => (
    <View>
        <CheckBox value={props.student.checked} onValueChange={()=>!props.student.checked}/>
        <Button title='Remove' onPress={this.removeStudent}/>
        <Text>TEST+{JSON.stringify(props)}</Text>
    </View>
)

export default class AttendanceScreen extends React.Component{

    state={
        classes: this.props.screenProps.classes,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('class').className + ' Student List',
            headerRight: () => (
                <Button 
                    onPress={()=>navigation.push('ClassSettingsScreen', 
                            {class: navigation.getParam('class')})}
                    title='Class Settings'
                    backgroundColor='sky-blue'
                />
            ),
            headerStyle: {
                backgroundColor: 'lightcoral',
            },
            headerTintColor: 'white', 
        };
    }

    removeStudent = (student) => {

    }

    render(){
        const { navigation } = this.props;
        //alert(JSON.stringify(this.state))
        //alert(JSON.stringify(this.props.screenProps.classes))
        return (
            <View>
                <Button
                    title='Add Student'
                    backgroundColor='sky-blue'
                    onPress={()=>navigation.push('AddStudentScreen', 
                    {class: navigation.getParam('class')})}
                />
                <ScrollView>
                    { navigation.getParam('class').students.map(student =>
                        <View style={styles.row}>
                            <CheckBox 
                                checked={student.checked} 
                                onValueChange={()=>this.setState((prevState) =>
                                    ({classes: prevState.classes.map(cls => 
                                        cls.className == navigation.getParam('class').className ? (cls.students.map(stu => 
                                            stu.name == student.name ? ({...stu, checked: !student.checked}) : stu)) : cls)}))}
                            />
                            <Button title='Remove' /*onPress={this.props.screenProps.filter()}*//>
                            <Text fontSize={30}>{student.name}</Text>
                        </View>
                    )}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})