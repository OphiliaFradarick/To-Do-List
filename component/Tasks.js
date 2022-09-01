import *as React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

{/*POWER FUNCTIONAL COMPONENT*/} 
const Task = (props) => {
    return(
      <View style={styles.item}>
        <View style={styles.itemLeft}>
         <View style={styles.square}></View>
         <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor:"white",
    padding:15,
    borderRadius:15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:20
  },
  itemLeft: {
    flexDirection:'row',
    alignSelf:'center',
    flexWrap: 'wrap',
  },
  square: {
    width:24,
    height:24,
    backgroundColor:"#2A2AD1",
    opacity:0.4,
    borderRadius:5,
    marginRight:15
  },
  itemText: {
    maxWidth:'80%'
  },
  circular: {
    width:12,
    height:12,
    borderColor:"#2222AA",
    borderWidth:2,
    borderRadius:5
  },
});

export default Task;

