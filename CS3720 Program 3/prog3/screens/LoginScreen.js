import React from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";
//import { login } from '../api';

export default class LoginScreen extends React.Component {

  state = {
    username: '',
    password: '',
  }

  handleLogin = async () => {
      this.props.navigation.navigate("Main");
  }

  // handleLogin = async () => {
  //   try {
  //     const success = await login(this.state.username, this.state.password);
  //     this.props.navigation.navigate("Main");
  //   } catch (err) {
  //     const errMessage = err.message;
  //     this.setState({ err: errMessage });
  //   }
  // };


  handleUserName = (username) => {
    this.setState({ username: username });
  }

  handlePassword = (pwd) => {
    this.setState({ password: pwd });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please enter your username and password to login.</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={this.handleUserName}
          placeholder="userName"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={this.handlePassword}
          placeholder="password"
          secureTextEntry
        />
        <Text style={styles.text}>{this.state.err}</Text>
        <Button title="Press to Log In" onPress={this.handleLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
