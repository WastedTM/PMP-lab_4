import {Alert, Button, ScrollView, Text, TouchableOpacity} from "react-native";
import React from "react";

class ScrollViewExample extends React.Component {
    state = {
        text1: "123",
        text2: "456",
        text3: "789",
        textForAlertButton: "Press this button",
        alertTitle: "Some text",
        alertMessage: "Congratulation, you pressed this button!"
    }

    attachAlertButton = () => {
        Alert.alert(this.state.alertTitle, this.state.alertMessage)
    }

    render() {
        const { navigation } = this.props;

        return (
            <ScrollView>
                <Button title={"Task2"} onPress={() => navigation.navigate("Task2")}/>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>

                <Text>{this.state.text1}</Text>
                <TouchableOpacity onPress={this.attachAlertButton}>
                    <Text style={{
                        borderWidth: 1
                    }}>{this.state.textForAlertButton}</Text>
                </TouchableOpacity>
                <Text>{this.state.text2}</Text>
                <Button title={this.state.textForAlertButton}></Button>
                <Text>{this.state.text3}</Text>
            </ScrollView>
        );
    }
}

export default ScrollViewExample;