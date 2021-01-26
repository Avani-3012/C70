import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppHeader from '../assets/AppHeader'
import { TextInput } from 'react-native-gesture-handler'

export default class WriteStory extends React.Component {


  constructor() {
    super();
    this.state = {
      storyName: "",
      author: "",
      story: ""
    }
  }
  render() {
    return (
      <View >
        <View>
          <AppHeader />
        </View>
        <View style={styles.container}>
          <TextInput style={styles.InfoBox}
            placeholder="Write Your Story Name"
            onChangeText={text => this.setState({ storyName: text })}
          />
          <TextInput style={styles.InfoBox}
            placeholder="Your Name"
            onChangeText={text => this.setState({ author: text })}
          />
          <TextInput style={styles.StoryBox}
            placeholder="Paste Your Story Link"
            keyboardType="link"
            onChangeText={text => this.setState({ story: text })}
          />
          <TouchableOpacity style={styles.button}>SUBMIT</TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InfoBox:
  {
    flex: 1,

    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70, width: 200,
    marginTop: 100,
    marginLeft: 50
  }
  ,
  StoryBox:
  {
    flex: 1,

    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70, width: 300,
    marginTop: 100,
    marginLeft: 50
  },
  button: { height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 7,backgroundColor:"grey",   alignItems: 'center',
  justifyContent: 'center',marginLeft:130 },
  /*container: {
   
  },*/
})