import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import {normalize, vh, vw} from '../constants/Dimension';
import Strings from '../constants/Strings';

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <Text style={styles.heading}>{Strings.your_ZF_Expert}</Text>
          <View style={styles.descriptionView}>
            <View style={styles.imageView}>
              <Image source={Images.profile} style={styles.avatar} />

              <View style={styles.headingView}>
                <Text style={styles.teamHeading}>{Strings.zFUNDS_TEAM}</Text>
                <View style={styles.greyLine} />
                <Text style={styles.details}>{Strings.planning}</Text>
              </View>
            </View>
            <View style={styles.buttonLayout}>
              <CustomButton
                customStyles={styles.button}
                title={Strings.call_advisor}
                customText={styles.titleText}
              />
              <CustomButton
                customStyles={{
                  ...styles.button,
                  backgroundColor: Colors.darkBlue,
                }}
                title={Strings.whatsapp_advisor}
                customText={{...styles.titleText, color: Colors.white}}
              />
            </View>
          </View>
          <Text style={styles.heading}>{Strings.your_acc}</Text>
          <View style={styles.rowButton}>
            <Icon name="hammer-screwdriver" size={20} color={Colors.darkBlue} />
            <Text style={styles.buttonTitle}>{Strings.help_support}</Text>
            <Icon name="chevron-right" size={22} color={Colors.darkBlue} />
          </View>
          <View style={styles.rowButton}>
            <Icons name="questioncircleo" size={20} color={Colors.darkBlue} />
            <Text style={{...styles.buttonTitle, marginRight: normalize(180)}}>
              {Strings.about_zfunds}
            </Text>
            <Icon name="chevron-right" size={22} color={Colors.darkBlue} />
          </View>
          <View style={styles.logoutButton}>
            <Icon name="logout" size={20} color={Colors.darkBlue} />
            <Text style={{...styles.buttonTitle, marginLeft: normalize(15)}}>
              {Strings.logout}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  heading: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: Colors.darkBlue,
    marginTop: normalize(15),
    marginLeft: normalize(15),
  },
  descriptionView: {
    height: vh(150),
    backgroundColor: Colors.primaryColor,
    borderRadius: normalize(10),
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '3%',
    padding: normalize(15),
  },
  avatar: {
    height: vh(50),
    width: vw(50),
    borderRadius: normalize(50 / 2),
    backgroundColor: 'black',
  },
  teamHeading: {
    fontSize: normalize(17),
    fontWeight: '700',
    color: Colors.darkBlue,
  },
  details: {
    fontSize: normalize(12),
    fontWeight: '400',
    color: Colors.darkBlue,
    textAlign: 'left',
    width: '80%',
  },
  buttonLayout: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: normalize(10),
  },
  button: {width: vw(160), borderWidth: 1, borderRadius: normalize(5)},
  rowButton: {
    height: vh(50),
    backgroundColor: Colors.primaryColor,
    borderRadius: normalize(10),
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(10),
  },
  logoutButton: {
    height: vh(50),
    backgroundColor: Colors.primaryColor,
    borderRadius: normalize(10),
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(10),
  },
  buttonTitle: {marginRight: normalize(160), color: Colors.darkBlue},
  imageView: {flexDirection: 'row'},
  headingView: {
    marginLeft: normalize(15),
    padding: 2,
  },
  greyLine: {borderWidth: 0.5, color: 'grey', width: '85%'},
  titleText: {color: Colors.darkBlue, fontWeight: '500'},
});
