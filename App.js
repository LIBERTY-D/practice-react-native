
import { StyleSheet, Text, View ,Button, TextInput,ScrollView} from 'react-native';
import { useState } from 'react';

export default function App() {
const [text,setText] = useState("");
const [courseGoals,setCourseGoals]=useState([])
  const goalInputHandler=(value)=>{
if(value){
  setText(value)
}

}

  const addGoalHandler=()=>{
 
    setCourseGoals((prevState)=>{
      const id = new Date().getTime().toString()
      return [{id,text},...prevState]
    })
  }
  console.log(courseGoals)
  return (
    <View style={styles.container}>
      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={goalInputHandler} multiline={false}/>
        <Button title="add goal" onPress={addGoalHandler}/>
      </View>
      {/* List of Goals */}
      <View style={styles.goalsContainer}>
       <ScrollView> 
          {

            courseGoals.map((item,index)=>{
              return <View  style={styles.goalItem} key={item.id} >

                 <Text style={styles.goalText} >{item.text}</Text>
              </View>
            })
          }
       </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
   padding:50,
   paddingHorizontal:16,
  },
 inputContainer:{
   flex:1,
   flexDirection:"row",
   justifyContent:"space-between",
   marginBottom:24,
   borderBottomWidth:1,
   borderBottomColor:"#cccccc"
 },
 textInput:{
   
   borderBottomWidth:1,
   borderBottomColor:"#cccccc",
   borderColor:"#cccccc",
   width:"70%",
   marginRight:8,
   padding:8,
 },
 goalsContainer:{
   flex:4,
 },
 goalText:{
  //  backgroundColor:"#391875",
  //  margin:6,
  //  padding:6,
  //  textAlign:"center",
   color:"white",
  //  borderRadius:6,

 },
 goalItem:{
   margin:8,
   borderRadius:6,
   backgroundColor:"#5e0acc",
   padding:8,
   color:"white",
 }
});
