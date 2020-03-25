import React , {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import {Navbar} from '../src/Navbar';
import {AddTodo} from '../src/AddTodo';
import {Todo} from  '../src/Todo';
import 'react-native-gesture-handler';


export const AddTask = () =>{

    const [todos, setTodos] = useState([])

    const addTodo = (title) =>{

        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }])
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }


    return (
        <View >
            <Navbar title = 'Todo App'/>
            <View style={styles.container}>
                <AddTodo  onSubmit={addTodo}></AddTodo>
                <FlatList data={todos}
                          renderItem ={ ({item}) => (
                              <Todo todo={item} onRemove={removeTodo}/>
                          )}
                          keyExtractor={(item => item.id.toString())}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        height: '90%',
    },
});
