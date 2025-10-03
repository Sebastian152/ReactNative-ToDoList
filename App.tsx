import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import { add } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.clipboard}>
        <View style={styles.clipboardClip}/>
        <View style={styles.clipboardClipHole}/>
        <View style={styles.clipboardBody}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>ToDoList</Text>

        <View style={{marginTop: 20}}>
          {/* // Task list */}
          <Task text={'Create a repo on github'}/>
          <Task text={'Study react native'}/>
        </View>
        <StatusBar style="auto" />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskTextBox}
        >
        <TextInput style={styles.input} placeholder='Write a task'></TextInput>
        <TouchableOpacity>
          <View style={styles.addTaskButton}>
            <Text style={{fontSize: 30}}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={{color: '#fff', fontWeight: 'bold', bottom: 10}}>Made by Sebastian152</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#126090d5',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  clipboard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor: '#442612ff',
    padding: 20,
    borderRadius: 10,

  },
  clipboardBody: {
    backgroundColor: '#f2f2f2ff',
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 500,
  },
  clipboardClip: {
    width: 60,
    height: 25,
    backgroundColor: '#636363ff',
    position: 'relative',
    bottom: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  clipboardClipHole: {
    width: 10,
    height: 10,
    backgroundColor: '#787878ff',
    position: 'relative',
    bottom: 45,
    borderRadius: 100,
  },
  writeTaskTextBox: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: '#c0c0c0ff',
    borderWidth: 1,
    width: 250,
    marginBottom: 30,
  },
  addTaskButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0ff',
    borderWidth: 1,
    marginBottom: 30,
  },
});
