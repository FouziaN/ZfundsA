import React, {Component} from 'react';
import Colors from '../constants/Colors';
import WebView from 'react-native-webview';
import {normalize, vh, vw} from '../constants/Dimension';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

export class PortfolioScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  /**
   * @function
   * to show the Activity indicator
   */
  showSpinner() {
    console.log('Show Spinner');
    this.setState({visible: true});
  }
  /**
   * @function
   * to show the hide Activity Indicator
   */
  hideSpinner() {
    console.log('Hide Spinner');
    this.setState({visible: false});
  }
  /**
   * @function onClick
   * on Click of Zxperts in webview it will exit the webview and navigate to HomePage
   */
  onClick = e => {
    if (e.url.indexOf('https://zfunds.in/experts') > -1) {
      this.props.navigation.navigate('Home');
    } else {
      // console.error(e);
    }
  };

  render() {
    return (
      <View
        style={this.state.visible === true ? styles.styleOld : styles.styleNew}>
        {this.state.visible ? (
          <ActivityIndicator
            color={Colors.green}
            size="large"
            style={styles.ActivityIndicatorStyle}
          />
        ) : null}
        <WebView
          style={styles.WebViewStyle}
          source={{uri: 'https://zfunds.in/'}}
          onNavigationStateChange={this.onClick}
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
        />
      </View>
    );
  }
}

export default PortfolioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Image: {
    height: vh(130),
    marginLeft: normalize(20),
  },
  heading: {
    fontWeight: '600',
    fontSize: normalize(16),
    color: Colors.darkBlue,
  },
  description: {
    fontSize: normalize(14),
    marginTop: normalize(5),
    color: Colors.darkBlue,
  },
  button: {
    backgroundColor: Colors.darkBlue,
    width: vw(180),
    borderRadius: normalize(5),
    marginTop: normalize(20),
    borderColor: 'green',
    borderWidth: 1,
  },
  buttontitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: normalize(14),
  },
  styleOld: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  styleNew: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

{
  /* <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={Images.emptyPortfolio}
              resizeMode="contain"
              style={styles.Image}
            />
            <Text style={styles.heading}>{Strings.empty_portfolio}</Text>
            <Text style={styles.description}>
              {Strings.you_dont_have_any_investment}
            </Text>
            <CustomButton
              customStyles={styles.button}
              title={Strings.start_Investing}
              customText={styles.buttontitle}
            />
          </View> */
}
