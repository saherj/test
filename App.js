import React from 'react'; // react 
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'; // import these components
import Svg, { Circle, Rect } from 'react-native-svg';

import FirstSushi from './onesushi';  // attaching onesuchi.js file



export default class App extends React.Component {

  List =(item)=>{}  // this is defeining the list (array - avocado, salmon, and shrimp)

  render() {

    var Array = [ "Avocado", "Salmon", "Shrimp" ];  // array items
    
    return (   // run the following
    
      // ScrollView
      <ScrollView contentContainerStyle={styles.container}>    

       {/* props */}
        <View> 
          <Text>Hello {this.props.name}User</Text>
        </View>

        {/* title */}
        <View>
        <Text style={styles.title}>SUSHI</Text>
        </View>
    
        {/* main Image */}
        <Image style={styles.mainImage}
          source={ require('./assets/sushiPhoto.png')}/>
      
        {/* this is from firstshushi.js */}
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>
        <FirstSushi></FirstSushi>

      <View>
        <Text style={styles.paragraph}>sushi tastes delicious. sushi tastes delicious. sushi tastes delicious. sushi tastes delicious. sushi tastes delicious. sushi tastes delicious. sushi tastes delicious. </Text>
        <Text style={styles.buttonTitle}>Top Seller </Text>
      </View>

      {/*function - array  */}
      <View style={styles.featureditems}>
        { Array.map((item, number)=>(
          <Text key={number} onPress={ this.List.bind(this, item) }> { item } </Text>)
        )}
      </View>

       
        
    </ScrollView>

    );
  }
}


// Stylesheet starts here
const styles = StyleSheet.create({
 
  container: {
    top: 50,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginRight:80,
    marginLeft:20,
    fontSize: 60,
    fontWeight: '400',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainImage: {
    top: 10,
    width: 800,
    height: 250, 
  },

  buttonTitle: {
    backgroundColor: '#333',
    color: 'white',
    fontSize: 25,
    textAlign:'center',
    padding:10,
  },

  featureditems: {
    fontFamily: 'Arial',
    fontSize: 60,
    fontWeight: '400', 
  },

  paragraph: {
    fontFamily: 'Arial',
    fontSize: 20,
    marginVertical:10,
  },



});
