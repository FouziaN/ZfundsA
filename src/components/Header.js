import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {normalize, vh} from '../constants/Dimension';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/Feather';
import Strings from '../constants/Strings';

const Header = ({onClickButton, isButtonShow}) => {
  return (
    <View style={styles.container}>
      {isButtonShow ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => onClickButton()}>
          <Icons name="chevron-left" size={25} />
          <Text style={styles.backTitle}>Back</Text>
        </TouchableOpacity>
      ) : null}
      <View style={styles.viewLayout}>
        <Image source={Images.logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.heading}>{Strings.funds}</Text>
      </View>
      <View style={styles.layout}>
        <Icon
          style={styles.marginView}
          name="search"
          size={25}
          color={Colors.darkBlue}
        />
        <Icon name="cart" size={25} color={Colors.darkBlue} />
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: normalize(1),
    marginTop: Platform.OS === 'ios' ? 30 : 0,
    borderBottomColor: Colors.grey,
    backgroundColor: Colors.white,
    height: vh(50),
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  viewLayout: {
    flexDirection: 'row',
    position: 'absolute',
    right: normalize(160),
  },
  heading: {
    position: 'absolute',
    right: normalize(-37),
    top: normalize(3),
    fontSize: normalize(20),
    color: Colors.darkBlue,
  },
  layout: {
    flexDirection: 'row',
    position: 'absolute',
    right: normalize(12),
  },
  marginView: {
    marginRight: normalize(16),
  },
  image: {
    height: vh(30),
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: normalize(10),
  },
  backTitle: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: Colors.darkBlue,
  },
});
