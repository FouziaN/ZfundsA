import React, {Component} from 'react';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import Header from '../components/Header';
import Strings from '../constants/Strings';
import {normalize} from '../constants/Dimension';
import Collection from '../components/Collection';
import HeaderCards from '../components/HeaderCards';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export class HomeScreen extends Component {
  /**
   * @function
   * Navigate to Funds Screen
   */
  onClick = () => {
    this.props.navigation.navigate('Fund');
  };

  /**
   * @function
   * Popular Header List and Heading
   */

  headerComponent = () => (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>{Strings.popular_Funds}</Text>

      {/* For the header card of the mutal funds  */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <HeaderCards
            CustomWidth={SCREEN_WIDTH - 70}
            title={item.title}
            type={item.type}
            raiting={item.raiting}
            first_percentage={item.first_percentage}
            second_percentage={item.second_percentage}
            third_percentage={item.third_percentage}
          />
        )}
      />
      <Text
        style={{
          ...styles.heading,
          marginTop: normalize(20),
        }}>
        {Strings.collection}
      </Text>
    </View>
  );

  /**
   * @function
   * collection heading
   */

  collectionHeading = () => (
    <TouchableOpacity onPress={this.onClick} style={styles.button}>
      <Text style={styles.titleButton}>{Strings.See_all_funds}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        {/* header of the page */}
        <Header />

        {/* for the type of collection in  */}
        <FlatList
          ListHeaderComponent={this.headerComponent}
          contentContainerStyle={styles.layout}
          ListFooterComponent={this.collectionHeading}
          data={items}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Collection image={item.images} title={item.name} />
          )}
        />
        {/* Button for navigation to funds page list */}
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  heading: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: Colors.darkBlue,
    marginLeft: normalize(10),
    marginBottom: normalize(10),
  },
  layout: {margin: normalize(10)},
  titleButton: {
    fontSize: normalize(18),
    color: Colors.green,
    fontWeight: '600',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(10),
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
];
