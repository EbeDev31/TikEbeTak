import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button,} from 'react-native';



export default class Child extends Component{

	constructor(props){
		super(props);
		this.state={
			txt:this.props.ptxt,
			rnd:this.props.ptxt,
		}
	}


static getDerivedStateFromProps(shaba,prevState){

	if(shaba.ptxt!==prevState.txt)
		{ 
			return{
				txt:shaba.ptxt
			}
		}
		else {return null}
	

}


	updt=()=>{

		let txt2= " Rebels"
		this.setState({
			rnd:this.state.txt +txt2
		})
	}

	render(){
		return (
			<View style={{flex:1, backgroundColor:"yellow", justifyContent:"center",alignItems:"center"}}>
				<Text style={{color:"white", fontSize:40, fontWeight:'400'}}>
				 {this.state.txt}
				</Text>
				<Text style={{color:"white", fontSize:40, fontWeight:'400'}}>
				 {this.state.rnd}
				</Text>

				<Button title="Update" onPress={this.updt}/>
			</View>
			);
	}
}