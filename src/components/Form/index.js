import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import Logo from './../../img/logo.png'
export default function Form() {
  return (
    <View >
      <View>
          <Text style={styles.Title}>Login</Text>
          <Text style={styles.text}>E-MAIL:</Text>
          <TextInput
          placeholder="fernando@gontijo.com" 
          style={styles.input}/>
          <Text style={styles.text}>SENHA:</Text>
          <TextInput style={styles.input}
          placeholder="******"
          keyboardType="numeric"/>

          <Text style={styles.TextSenha}>*Esqueci minha <TextBold/></Text>

          <TouchableOpacity style={styles.TouchableOpacity}>
              <Text style={styles.TextTouchableOpacity} >Login</Text>
          </TouchableOpacity>
      </View>
      <Image style={styles.logo} source={require('./../../img/logo.png')}/>
      <Text style={styles.footer}>Developed by Zarb Solutions</Text>
    </View>
  );
}

const TextBold = (props) => <Text style={{fontWeight: 'bold'}}>senha</Text>

const styles = StyleSheet.create({
    text: {
        color: "#7d7d7d",
        fontWeight: "bold",
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#f7f7f7",
        height: 40,
        width: 280,
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 8
    },
    TouchableOpacity: {
        backgroundColor: "#484848",
        borderRadius: 10,
        height: 30,
    },
    TextSenha: {    
        fontSize:9,
        marginTop: -8,
        paddingLeft: 100,
        marginBottom: 20,
    },

    TextTouchableOpacity: {
        color: "#d0d0d0",
        fontWeight: "bold",
        fontSize: 18,
        paddingLeft: 120,
    },
    
    logo:{
        position: "absolute",
        width: 99,
        height: 37,
        left: 100,
        top: 470,
    },

    footer:{
        color: "#00000069",
        left: 104,
        top: 210,
        width: 100, 
    },

    Title: {
        color: '#dd353c',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 50,
      },
});
