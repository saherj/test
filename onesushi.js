import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';  // import SVG

export default class FirstSushi extends React.Component {


  render() {
    return (
        <View style={styles.sushiStyle}>
        
            <Svg height="100%" width="100%" viewBox="0 0 400 400">

                <Rect
                    x="0"
                    y="0"
                    width="1000"
                    height="1000"
                    stroke="green"
                    strokeWidth="1.5"
                    fill="green"
                    borderRadius="90"
                />

            </Svg>

        </View>
    );
  }
}

// Stylesheet for rectangle
const styles = StyleSheet.create({

    sushiStyle: {
        padding: 20,
        width: 100,
        height: 100
    }
});