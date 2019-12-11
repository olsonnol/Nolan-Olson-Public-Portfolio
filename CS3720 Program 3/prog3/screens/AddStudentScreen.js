import React from "react";
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

export default class AddStudentScreen extends React.Component{
    state = {
        name: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        err: '',
        invalidInput: true,
    }
    
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add New Student',
            headerStyle:{
                backgroundColor: 'lightcoral',
            },
            headerTintColor: 'white',
        }
    }

    handleFirstName = (name) => {
        this.setState({firstName: name}, this.validate);
    }

    handleLastName = (name) => {
        this.setState({lastName: name}, this.validate);
    }

    handlePhoneNumber = (number) => {
        this.setState(({phoneNumber: number}), this.validate);
    }

    validate = () => {
        if(this.state.firstName != '' && this.state.lastName != '' && this.state.phoneNumber.length > 8){
            if(this.props.navigation.getParam('class').students.filter(xname => (xname.name == (this.state.firstName+' '+this.state.lastName))).length != 0){
                this.setState({err: "This student already exists", invalidInput: true});
            } else {
                this.setState({name: this.state.firstName + " " + this.state.lastName, 
                               invalidInput: false, err: ''});
            }
        } else {
            this.setState({invalidInput: true, err:''});
        }
    }

    handleSubmit = () => {
        if(!this.state.invalidInput){
            this.props.navigation.back();
        } else {
            this.setState({err: 'Please fill all required inputs'})
        }     
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
                <View>
                    <Text style={styles.textHeader}>Please enter the following information about the student.</Text>
                    <Text style={styles.text}>First Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.firstname}
                        onChangeText={this.handleFirstName}
                        placeholder="First Name"
                    />
                    <Text style={styles.text}>Last Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.lastname}
                        onChangeText={this.handleLastName}
                        placeholder="Last Name"
                    />
                    <Text style={styles.text}>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.phoneNumber}
                        onChangeText={this.handlePhoneNumber}
                        placeholder="XXX-XXXX"
                    />
                    <Text style={styles.text}>{this.state.err}</Text>
                    <TouchableOpacity 
                        style={styles.roundButton}
                        onPress={this.handleSubmit} 
                        disabled={this.state.invalidInput}
                    >
                        <Text fontSize={20}>Add Student</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
    },
    textHeader: {
        fontSize: 18,
        textAlign: "left",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    text: {
        marginTop: 10,
        fontSize: 15,
        textAlign: "left",
        marginLeft: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    roundButton: {
        marginHorizontal: 20,
        marginTop:20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
    },
})