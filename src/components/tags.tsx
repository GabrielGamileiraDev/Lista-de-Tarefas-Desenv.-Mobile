import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Tags() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textodaTag}>Texto da tag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    backgroundColor: '#ff0000',
    borderRadius: 5,
    padding: 3
  },

  textodaTag: {
    color: '#fff',
    fontWeight: 'bold'
  }


})