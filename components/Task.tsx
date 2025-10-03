import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

interface TaskProps {
  text: string;
  completed: boolean;
  onCheckBoxPress: () => void;
  onTaskPress: () => void;
}

export default function Task({ text, completed, onCheckBoxPress, onTaskPress }: TaskProps) {
  return (
    <TouchableOpacity style={styles.taskAppearance} activeOpacity={0.8} onPress={onTaskPress}>
      <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
        <TouchableOpacity style={[styles.taskCheckBox, completed && styles.taskCheckBoxChecked]} onPress={onCheckBoxPress}>
          {completed && <View style={styles.checkMark}/>}
        </TouchableOpacity>
        <Text style={[{color: '#fff', fontWeight: 'bold'}, completed && {textDecorationLine: 'line-through', opacity: 0.5}]}>{text}</Text>
      </View>
    </TouchableOpacity>
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
    marginRight: 15,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskCheckBoxChecked: {
    backgroundColor: '#4caf50',
    borderColor: '#388e3c',
    borderWidth: 2,
  },
  checkMark: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
});

