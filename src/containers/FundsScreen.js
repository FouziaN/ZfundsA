import React, {Component} from 'react';
import Colors from '../constants/Colors';
import Header from '../components/Header';
import Images from '../constants/Images';
import Strings from '../constants/Strings';
import {normalize} from '../constants/Dimension';
import {StyleSheet, View, FlatList, Text, Dimensions} from 'react-native';
import HeaderCards from '../components/HeaderCards';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default class FundsScreen extends Component {
  /**
   * @function
   * goBack button to navigate to home Scree
   */

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Header isButtonShow={true} onClickButton={this.goBack} />
        <Text style={styles.heading}>MUTUAL FUNDS</Text>
        <View style={styles.layout}>
          <FlatList
            pagingEnabled
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.layout}
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <HeaderCards
                CustomWidth={SCREEN_WIDTH - 35}
                title={item.title}
                type={item.type}
                raiting={item.raiting}
                first_percentage={item.first_percentage}
                second_percentage={item.second_percentage}
                third_percentage={item.third_percentage}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  heading: {
    fontSize: normalize(18),
    fontWeight: '600',
    color: Colors.darkBlue,
    marginTop: normalize(10),
    marginLeft: normalize(20),
  },
  layout: {
    alignItems: 'center',
    paddingBottom: normalize(60),
  },
});

const items = [
  {
    id: 1,
    raiting: 3,
    first_percentage: 28,
    second_percentage: 11,
    third_percentage: 11.1,
    name: Strings.taxSaving,
    images: Images.taxSavings,
    title: 'Nippon India Balanced',
    type: 'Advantage Fund-Growth Plan-G',
  },
  {
    id: 2,
    raiting: 5,
    first_percentage: 29.4,
    second_percentage: 13.2,
    third_percentage: 12.3,
    images: Images.largeCap,
    name: Strings.largeCap,
    type: 'Fund-Regular Plan-Growth',
    title: 'Edelwise Balaced Advantage',
  },
  {
    id: 3,
    raiting: 0,
    first_percentage: 45,
    second_percentage: 13.2,
    third_percentage: 12.8,
    images: Images.smallCap,
    name: Strings.smallCap,
    type: 'Fund-Growth Plan',
    title: 'HDFC Balanced Advantage',
  },
  {
    id: 4,
    raiting: 3,
    first_percentage: 46.5,
    second_percentage: 14.8,
    third_percentage: 13.3,
    images: Images.balancedFunds,
    type: 'Fund-Growth',
    name: Strings.balancedFunds,
    title: 'ICIC Prudential Equity & Debt',
  },
  {
    id: 5,
    raiting: 4,
    first_percentage: 33.9,
    second_percentage: 13.8,
    third_percentage: 12.8,
    images: Images.NFO,
    name: Strings.NFO,
    type: 'Regular Plan-Growth',
    title: 'SBI Equity Hybrid Fund-',
  },
  {
    id: 6,
    images: Images.goldFunds,
    name: Strings.goldFunds,
    first_percentage: 33.9,
    second_percentage: 13.8,
    third_percentage: 12.8,
    type: 'Fund-Regular Plan-Growth',
    title: 'Edelwise Balaced Advantage',
  },
  {
    id: 7,
    images: Images.goldFunds,
    name: Strings.goldFunds,
    first_percentage: 33.9,
    second_percentage: 13.8,
    third_percentage: 12.8,
    type: 'Fund-Regular Plan-Growth',
    title: 'Edelwise Balaced Advantage',
  },
  {
    id: 8,
    images: Images.goldFunds,
    name: Strings.goldFunds,
    first_percentage: 33.9,
    second_percentage: 13.8,
    third_percentage: 12.8,
    type: 'Fund-Regular Plan-Growth',
    title: 'Edelwise Balaced Advantage',
  },
];
