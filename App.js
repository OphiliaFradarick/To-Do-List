import *as React from 'react';
import {Text, View,KeyboardAvoidingView,TouchableOpacity,Platform, TextInput, StyleSheet } from 'react-native';
import Task from './component/Tasks'

export default function App() {
  return (
    <View style={styles.container}>
      {/* WELCOME SCREEN */}
      <View style={styles.tasksWrapper}>
       <Text style={styles.sectionTitle}>TODAY'S TASKS</Text>

       <View style={styles.item}>
        {/* THE TAKS WILL BE LISTED HERE */}
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
        <Task text={'Task 3'}/>
       </View>

      </View>
      
      {/*ADDING NEW TASKS */}
      <KeyboardAvoidingView
      behavior={Platform.OS ==="ios"? "padding": "height" }
      style={styles.writeTasksWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'}/>
        
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:26,
    fontWeight: 'bold'
  },
  item:{
    marginTop:30
  },
  writeTasksWrapper: {
    position:'absolute',bottom:60,
    width:"100%",
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center"
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    borderColor:"#2222AA",
    borderWidth:2,
    width:250,
    borderRadius:10
  },
  addWrapper:{},
  addText:{},
});
