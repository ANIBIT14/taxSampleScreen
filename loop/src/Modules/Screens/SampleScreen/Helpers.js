/* eslint-disable react/prop-types,max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Linking} from 'react-native';
import Toast from 'react-native-simple-toast';
import GlobalStyles from '../../../CSS/GlobalStyles';

export function FormBanner({children, headingText, descriptionText, formLink}) {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.headingIconContainer}>{children}</View>
        <View style={styles.headingTextContainer}>
          <Text style={styles.headingText} numberOfLines={1}>
            {headingText}
          </Text>
        </View>
      </View>
      <Text style={styles.descriptionText}>{descriptionText}</Text>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.8}
        onPress={() => {
          if (formLink !== undefined && formLink !== null) {
            Linking.canOpenURL(formLink)
              .then((supported) => {
                if (!supported) {
                  Toast.show('Can not open the page', Toast.LONG, [
                    'RCTModalHostViewController',
                    'UIAlertController',
                  ]);
                  return null;
                }
                return Linking.openURL(formLink);
              })
              .catch((error) => console.error('An error occurred', error));
          }
        }}>
        <Text style={styles.buttonText}>{headingText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: GlobalStyles.color_white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    marginBottom: '5%',
  },
  headingContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  headingIconContainer: {
    width: '15%',
  },
  headingTextContainer: {
    width: '85%',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: GlobalStyles.text_size_l,
    fontWeight: 'bold',
    color: GlobalStyles.color_black,
  },
  descriptionText: {
    fontSize: GlobalStyles.text_size_xs,
    marginLeft: '15%',
    textAlign: 'left',
    width: '85%',
    marginBottom: '2.5%',
  },
  buttonStyle: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    backgroundColor: GlobalStyles.color_button,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2.5%',
  },
  buttonText: {
    fontSize: GlobalStyles.text_size_regular,
    fontWeight: 'bold',
    color: GlobalStyles.color_white,
  },
});
