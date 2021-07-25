import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import {normalize, vh, vw} from '../constants/Dimension';

const Collection = React.memo(
  function Collection(props) {
    return (
      <TouchableOpacity style={styles.button}>
        <Image style={styles.image} source={props.image} resizeMode="contain" />
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    );
  },
  () => true,
);

export default Collection;

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.grey,
    borderWidth: 1,
    height: vh(90),
    width: vw(110),
    borderRadius: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: normalize(5),
    marginBottom: normalize(10),

    padding: normalize(10),
  },
  image: {
    height: vh(30),
    width: vw(30),
  },
  text: {
    fontSize: normalize(12),
    marginTop: normalize(10),
    color: Colors.darkBlue,
    textAlign: 'center',
  },
});
