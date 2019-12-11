import React from "react";
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

export default class NewClassScreen extends React.Component{
    state = {
        className: '',
        students: [],
        classSize: 30,
        invalidInput: true,
        err: '',
    }
    
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add New Class',
            headerStyle:{
                backgroundColor: 'lightcoral',
            },
            headerTintColor: 'white',
        }
    }

    handleClassName = (name) => {
        this.setState({className: name}, this.validate);
    }

    handleClassSize = (size) => {
        this.setState({classSize: size}, this.validate);
    }

    validate = () => {
        if(this.state.className != '' && +this.state.classSize > 0){
            if(this.props.screenProps.classes.filter(cls => (cls.className == (this.state.className))).length != 0){
                this.setState({err: "This class already exists", invalidInput: true});
            } else {
                this.setState({invalidInput: false, err: ''});
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
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.textHeader}>Please enter the following class information.</Text>
                <Text style={styles.text}>Class name:</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.className}
                    onChangeText={this.handleClassName}
                    placeholder="Name"
                />
                <Text style={styles.text}>Class size (default 30):</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.classSize}
                    defaultValue={""+this.state.classSize}
                    onChangeText={this.handleClassSize}
                />
                <Text style={styles.text}>{this.state.err}</Text>
                <TouchableOpacity 
                    style={styles.roundButton}
                    onPress={this.handleSubmit} 
                    disabled={this.state.invalidInput}
                >
                    <Text fontSize={20}>Add Class</Text>
                </TouchableOpacity>
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
        fontSize: 15,
        textAlign: "left",
        marginLeft: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginVertical: 10,
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