import React from "react";
import {Text, TextInput, TouchableOpacity, View, StyleSheet, Alert} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonStyle: {
        width: 100,
        borderWidth: 1,
        fontSize: 16,
        borderColor: "gray",

        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5
    },
    textInput:{
        width: 150,

        borderWidth: 1,
        fontSize: 16,

        marginBottom: 10,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5
    }
});

class TextInputExample extends React.Component {
    state = {
        buttonText: "Send data",
        userName: '',
        passwd: ''
    }

    handleEmail = (text) => {
        this.setState({userName: text})
    }

    handlePassword = (text) =>{
        this.setState({passwd: text})
    }

    attachMainButton = () => {
        Alert.alert("Your input data:", "User name: " + this.state.userName + "\nUser password: " + this.state.passwd);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholder="User Name"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}/>


                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholder="User Password"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}/>

                <TouchableOpacity onPress={this.attachMainButton}>
                    <Text style={styles.buttonStyle}>{this.state.buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TextInputExample;