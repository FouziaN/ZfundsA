import React from 'react';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import Icon from 'react-native-vector-icons/Entypo';
import {normalize, vh, vw} from '../constants/Dimension';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const HeaderCards = React.memo(
  function HeaderCards({
    title,
    type,
    raiting,
    first_percentage,
    second_percentage,
    third_percentage,
    CustomWidth,
  }) {
    return (
      <View width={CustomWidth} style={styles.cardView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.heading}>{type}</Text>
          </View>
          <View style={styles.raitingView}>
            <Icon name="star" color={Colors.yellow} />
            <Text>{raiting}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.returnView}>
          <View style={styles.rv}>
            <Text style={styles.returnHeading}>{Strings.first_year}</Text>
            <Text style={styles.return}>{first_percentage}%</Text>
          </View>
          <View style={styles.rv}>
            <Text style={styles.returnHeading}>{Strings.second_year}</Text>
            <Text style={styles.return}>{second_percentage}%</Text>
          </View>
          <View style={styles.rv}>
            <Text style={styles.returnHeading}>{Strings.third_year}</Text>
            <Text style={styles.return}>{third_percentage}%</Text>
          </View>
        </View>
      </View>
    );
  },
  () => true,
);

export default HeaderCards;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: Colors.primaryColor,
    height: normalize(140),
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: normalize(10),
    marginLeft: normalize(10),
    marginTop: normalize(10),
    marginRight: normalize(5),
  },
  heading: {fontWeight: '700', color: Colors.darkBlue, fontSize: normalize(14)},
  raitingView: {
    flexDirection: 'row',
    height: vh(20),
    width: vw(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlue,
    borderRadius: normalize(5),
    position: 'absolute',
    right: 0,
  },
  line: {
    borderWidth: 0.5,
    opacity: 0.5,
    borderColor: 'grey',
  },
  returnView: {
    padding: normalize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  returnHeading: {fontSize: normalize(11), color: Colors.darkBlue},
  return: {fontSize: normalize(13), color: Colors.darkBlue, fontWeight: '700'},
  rv: {alignItems: 'center'},
  container: {flexDirection: 'row', margin: normalize(20)},
});
