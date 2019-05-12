import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button,} from 'react-native';
import Child from "./child"



export default class App extends Component{

	constructor(props){
		super(props);
		this.state={
			txt:"Parent",
		}
	}


	updt=()=>{

		let txt2= "We Changed"
		this.setState({
			txt:txt2
		})
	}

	render(){
		return (
			<View style={{flex:1, backgroundColor:"green", justifyContent:"center",alignItems:"center"}}>
				<Text style={{color:"white", fontSize:60, fontWeight:'400'}}>
				 {this.state.txt}
				</Text>
				<Child ptxt={this.state.txt}/>

				<Button title="Update" onPress={this.updt}/>
			</View>
			);
	}
}