import React, { Component } from 'react';
import { Button, View, Text,Alert,TouchableOpacity,StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import db from '../config.js';

export default class HomeScreen extends React.Component {
displayNames= async()=>{
  var class_ref=await db.ref('/').on('value',data =>{
    var all_students = []
    var class_a = data.val().class_A;
    for(var i in class_a){
      all_students.push(class_a[i]);
    }
    all_students.sort(function(a,b){
      return a.roll_no - b.roll_no;
    });
    this.setState({ all_students: all_students});
  })

}


updateAttendence(roll_no,status){
  var id ='';
  if(roll_no <=9){
    id = '0' + roll_no;
  }else{
    id = roll_no;
  }


  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();
  if(dd < 10 ){
    dd = '0' + dd;
  }
  if(mm < 10 ){
    mm = '0' + mm;
  }
  today = dd + '-' + mm + '-' + yyyy;
  var ref_path = id;
  var class_ref = db.ref = db.ref(ref_path);
  class_ref.update({
    [today]: status,
  });
}
  

  render(){
    return (
      <View>
      <TouchableOpacity style={styles.button1}>
      <Text style={styles.buttonText}>Absent</Text>

      </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
      <Text style={styles.buttonText}>Present</Text>

      </TouchableOpacity>

      </View>
    );
  }
}

const styles=StyleSheet.create({
  button1: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    backgroundColor:"red"
  },
    button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    backgroundColor:"green"
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
})

