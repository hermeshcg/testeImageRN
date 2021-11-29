/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SliderBox} from 'react-native-image-slider-box';

let images = [
  'https://fotoprod2020.blob.core.windows.net/fotosprod/10004.JPG',
  'https://fotoprod2020.blob.core.windows.net/fotosprod/1.JPG',
  'https://fotoprod2020.blob.core.windows.net/fotosprod/10004.JPG',
  'https://fotoprod2020.blob.core.windows.net/fotosprod/1.JPG',
];

const App = () => {
  const [width, setWidth] = useState();
  function onLayout(e) {
    setWidth(e.nativeEvent.layout.width);
  }
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log('widt??', width);
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.cardContainer}>
        <View style={styles.containerImg} onLayout={onLayout}>
          <SliderBox
            images={images}
            parentWidth={width}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    width: '100%',
    height: 200,
  },
  imgProduto: {
    marginBottom: 'auto',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '45%',
    height: 400,
    marginHorizontal: 10,
    marginVertical: 16,
    paddingBottom: 4,
    backgroundColor: '#F5FCFF',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    elevation: 6,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
