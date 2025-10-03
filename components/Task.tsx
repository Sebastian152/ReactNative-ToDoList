import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

interface TaskProps {
  text: string;
}

export default function Task( {text} : TaskProps) {
  return (
    <View style={styles.taskAppearance}>
      <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
        <TouchableOpacity style={styles.taskCheckBox}/>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskAppearance: {
    backgroundColor: '#376ac9ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  taskCheckBox: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    marginRight: 15,
  },

});

