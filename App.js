/**
 *  React Native App By Ebe
 * Rappresenting the Famous Tic Tac Toe Game
 *
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button,} from 'react-native';
import {Icon} from "react-native-elements";

// ...


export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
            gameState:[
                  [0,0,0],
                  [0,0,0],
                  [0,0,0]
                ],
            currentPlayer:1
          }
  }

componentDidMount(){
  this.initializeGame();
}

getWinner =()=>{
  const NUM_TITLES=3;
  let arr = this.state.gameState;
  let SUM;

  //Check rows..
  for (var i=0;i < NUM_TITLES; i++) {
    sum=arr[i][0] + arr[i][1]+ arr[i][2];

    if(sum==3) {return 1}
      else if(sum==- 3) {return -1}
  }
 //Check columns...
  for (var i=0;i < NUM_TITLES; i++) {
    sum=arr[0][i] + arr[1][i]+ arr[2][i];

    if(sum==3) {return 1}
      else if(sum==- 3) {return -1}
  }

 //Check for diagonals LeftTop to Right Bottom
 sum=arr[0][0] + arr[1][1]+ arr[2][2];

    if(sum==3) {return 1}
      else if(sum==- 3) {return -1}

//Check for diagonals LeftBottom to RightTop 
 sum=arr[2][0] + arr[1][1]+ arr[0][2];

    if(sum==3) {return 1}
      else if(sum==- 3) {return -1}

 return 0;

}


/*
  PLace an icon{X or O} on a Tile based on the player
*/
onTilePress=(row,col)=>{

  let value=this.state.gameState[row][col];
  if(value!==0){return;}
 // alert("Under Construction");

 //Grab current PLayer
  let currentPlayer=this.state.currentPlayer;

 //Set Correct tile
  let arr =this.state.gameState.slice();
  arr[row][col]=currentPlayer;
  this.setState({gameState:arr});

 //Switch to other Player
  let nxP=(currentPlayer==1)?-1:1;
  this.setState({currentPlayer:nxP})

 let winner=this.getWinner();
 if(winner==1) {
  alert("Player 1 is the winner");
   this.initializeGame();
  } else if(winner==-1) {
  alert("Player 2 is the winner");
   this.initializeGame();
}

}

initializeGame=()=>{
  this.setState({
    gameState:[
                [0,0,0],
                [0,0,0],
                [0,0,0]
              ],
            currentPlayer:1,
  });
}
renderIcon=(row,col)=>{
  let value= this.state.gameState[row][col];
  switch(value)
  {
    case 1: return  <Icon
                  size = {60}
                  name='close'
                  type='material-community'
                  color='red' />;

    case -1: return  <Icon
                  size = {60}
                  name='circle-outline'
                  type='material-community'
                  color='green' />;
    default: return <View></View>

  }
}

  render() {
    return (
      <View style={styles.container}>
           <View style={{margin:10,}}>
            <Text style={{color:"blue",fontWeight:"300",fontSize:25}}>E     B      E .....</Text>
            <Text style={{color:"blue",fontWeight:"300",fontSize:25}}>TO THE GAMES!!</Text>
           </View>

           <View style={styles.wrapper}>

              <TouchableOpacity onPress={()=>this.onTilePress(0,0)} style={[styles.tiles,{borderLeftWidth:0,borderTopWidth:0,}]}>            
               {this.renderIcon(0,0)}
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.onTilePress(0,1)} style={[styles.tiles,{borderTopWidth:0,}]}>
               {this.renderIcon(0,1)}
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.onTilePress(0,2)} style={[styles.tiles,{borderRightWidth:0,borderTopWidth:0,}]}>
               {this.renderIcon(0,2)}
              </TouchableOpacity>
           </View>

           <View style={styles.wrapper}>
              <TouchableOpacity onPress={()=>this.onTilePress(1,0)} style={[styles.tiles,{borderLeftWidth:0,borderTopWidth:0,}]}>
               {this.renderIcon(1,0)}
          
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.onTilePress(1,1)} style={[styles.tiles,{borderTopWidth:0,}]}>
               {this.renderIcon(1,1)}
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onTilePress(1,2)} style={[styles.tiles,{borderRightWidth:0,borderTopWidth:0,}]}>
                {this.renderIcon(1,2)}
               </TouchableOpacity>
           </View>

           <View style={styles.wrapper}>
              <TouchableOpacity onPress={()=>this.onTilePress(2,0)} style={[styles.tiles,{borderLeftWidth:0,borderTopWidth:0,}]}>
                {this.renderIcon(2,0)}
            
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onTilePress(2,1)} style={[styles.tiles,{borderTopWidth:0,}]}>
               {this.renderIcon(2,1)}
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onTilePress(2,2)} style={[styles.tiles,{borderRightWidth:0,borderTopWidth:0,}]}>
                {this.renderIcon(2,2)}
              </TouchableOpacity>
           </View>

          <View style={{margin:10}}>
           <Button title="New Game" onPress={this.initializeGame}/>
          </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    //flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",

    backgroundColor: 'yellow',

  borderWidth:2,
  },
  tiles: {
  // flex:1,
  height:100,
  width:100,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth:2,
  },
  // token:{
  //   color:"red",
  //   fontSize:30,
  // //  flex:1,
  //   justifyContent:"center",
  //   alignItems:"center",

  // }
});

