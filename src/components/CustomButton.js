import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {vh} from '../constants/Dimension';

const CustomButton = React.memo(
  function CustomButton({onPress, title, customStyles, customText}) {
    const defaultStyles = {
      height: vh(30),
      justifyContent: 'center',
      alignItems: 'center',
    };
    return (
      <TouchableOpacity onPress={onPress} style={[defaultStyles, customStyles]}>
        <Text style={[customText]}>{title} </Text>
      </TouchableOpacity>
    );
  },
  () => true,
);

export default CustomButton;
