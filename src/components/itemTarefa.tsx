import { Text, View, StyleSheet} from 'react-native';
import Tags from './tags';
import { Circle } from 'lucide-react-native';

type listaDeItens ={ 
  listaDeTarefas: string
}

export default function Item({listaDeTarefas}:listaDeItens) {
  return (
    <View style={styles.container }>
      <View> 
        <Circle  size={25} color ="#67d874"/> 
      </View>
      <View>
        <Text style={styles.title}>{listaDeTarefas}</Text>
      </View>
      <View>
        <Tags />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#a4a4a4',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 30
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'

  },

  circulogreen:{
    color: '#67d874'
  },


})