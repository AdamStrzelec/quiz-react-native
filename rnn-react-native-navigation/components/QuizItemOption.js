import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";

export default class QuizItemOption extends Component {
  changeWindowQuiz = () => {
    Navigation.setRoot({
      root: {
        component: {
          name: "Quiz",
          passProps: {
            quiz: this.props.quizy
          }
        }
      }
    });
  };
  render() {
    return (
      <View style={styles.quiz}>
        <View>
          <TouchableOpacity
            onPress={this.changeWindowQuiz}
          >
            <Text style={styles.title}>Title: {this.props.quizy.quizNumber}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.tag}>Tag#1 Tag#2</Text>
        </View>

        <View>
          <Text>opis {this.props.quizy.quizDescription}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  tag: {
    marginBottom: 9,
    color: "blue",
    fontSize: 15
  },
  quiz: {
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
    //borderWidth: 1,
    //borderColor: "black",
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    justifyContent: "center",
    marginTop: 9,
    marginBottom: 9
  },
});
