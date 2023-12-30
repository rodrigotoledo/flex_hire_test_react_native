import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Animated,
  Easing,
} from 'react-native';

import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import JobsButton from '../Buttons/Jobs';
import ProfileButton from '../Buttons/Profile';

const customTheme = {
  ...DefaultTheme,
  roundness: 5, // Adjust the roundness value as needed
  colors: {
    ...DefaultTheme.colors,
    primary: '#616161', // Replace 'your_choice_color' with the desired primary color
  },
  backgroundColor: 'rgb(219 234 254)',
  textInput: {
    borderWidth: 1,
  },
};

export default function SplashScreen() {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 2000, // Animation duration in milliseconds
      easing: Easing.elastic(1), // Easing for the animation (you can adjust the type)
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, []);

  const handleJobsButtonPress = () => {
    navigation.navigate('MainStack', {
      screen: 'Jobs', // Nome da tela que deseja acessar
    });
  };

  const handleProfileButtonPress = () => {
    navigation.navigate('MainStack', {
      screen: 'Profile', // Nome da tela que deseja acessar
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarVisible: false,
      tabBarButton: props => null,
    });
  }, [navigation]);

  return (
    <PaperProvider theme={customTheme}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/splash_image.png')} // Relative path to the assets folder
          style={styles.backgroundImage}>
          <View style={styles.centerContent}>
            <Animated.Text
              style={[styles.title, {transform: [{scale: scaleValue}]}]}>
              FlexHire
            </Animated.Text>
            <ProfileButton onPress={handleProfileButtonPress} />
            <JobsButton onPress={handleJobsButtonPress} />
          </View>
        </ImageBackground>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // To cover the entire background
    justifyContent: 'center', // Center content vertically
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Background color with transparency
  },
  centerContent: {
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  button: {
    borderRadius: 8,
    width: '80%',
    backgroundColor: '#036482',
    marginVertical: 6,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#67e8f9', // Custom color
    textAlign: 'center',
    marginVertical: 20, // Top margin for the "EasyGlic" text
    textShadowColor: 'rgba(0, 0, 0, 0.50)', // Shadow color
    textShadowOffset: {width: 2, height: 2}, // Shadow offset
    textShadowRadius: 10, // Shadow radius
    borderRadius: 20, // Value to make the text rounded
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  divider: {
    flex: 1,
    backgroundColor: '#036482', // Separator line color
    height: 2, // Line thickness
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 20, // Text size for "Or"
    color: '#036482', // Text color for "Or"
  },
});
