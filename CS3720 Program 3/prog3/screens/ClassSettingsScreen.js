import React from "react";
import {Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

export default class ClassSettingsScreen extends React.Component {
    state={
        className: this.props.navigation.getParam('class').className,
        classSize: this.props.navigation.getParam('class').classSize,
    }
    
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('class').className + ' Settings',
            headerStyle: {
                backgroundColor: 'lightcoral',
            },
            headerTintColor: 'white',    
        };
    }
    
    handleClassName = () => {

    }

    handleClassSize = () => {
        
    }

    handleSubmit = () => {
        
    }

    render(){
        const {navigation} = this.props;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                    <Text style={styles.text}>Class name:</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.className}
                        defaultValue={this.state.className}
                        onChangeText={this.handleClassName}
                    />
                    <Text style={styles.text}>Class size:</Text>
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
                    >
                        <Text fontSize={20}>Submit changes</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        flex: 1
    },
    text: {
        fontSize: 15,
        textAlign: "left",
        marginLeft: 20,
        marginVertical: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginVertical: 5,
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