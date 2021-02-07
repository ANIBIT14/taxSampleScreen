/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import GlobalStyles from '../../../CSS/GlobalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDownPicker from '../../../SharedComponents/DropDownPicker';
import getStatusBarHeight from '../../../SharedComponents/StatusBarHeight';
import HandleBack from '../../../SharedComponents/HandleBack';
import IndianFlag from '../../../../Assets/flagIndia.svg';
import {FormBanner} from './Helpers';
import PurpleForm from '../../../../Assets/purpleForm.svg';
import YellowForm from '../../../../Assets/yellowForm.svg';
import SendStatementIcon from '../../../../Assets/sendAuditorIcon.png';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function SampleScreen(props) {
  const [countryOfResidenceState, setCountryOfResidence] = useState(null);
  const backAction = () => {
    Toast.show('Take to the previous screen', Toast.LONG, [
      'RCTModalHostViewController',
      'UIAlertController',
    ]);
    return true;
  };

  return (
    <>
      <HandleBack onBack={backAction}>
        {Platform.OS === 'ios' ? (
          <View
            style={{
              backgroundColor: GlobalStyles.color_white,
              height: getStatusBarHeight(),
              zIndex: 1000,
            }}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor={GlobalStyles.color_white}
              animated
            />
          </View>
        ) : null}
        <View style={styles.container}>
          {Platform.OS === 'android' ? (
            <StatusBar
              barStyle="dark-content"
              backgroundColor={GlobalStyles.color_white}
              animated
            />
          ) : null}
          <ScrollView
            bounces={Platform.OS !== 'android'}
            contentContainerStyle={styles.scrollContainer}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            scrollToOverflowEnabled>
            <View style={styles.backArrowContainer}>
              <AntDesign
                name="arrowleft"
                size={30}
                onPress={() => backAction()}
              />
            </View>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>File Taxes</Text>
            </View>
            <View style={styles.countryContainer}>
              <Text style={styles.countryText}>Country of Residence</Text>
              <View
                style={[
                  styles.countrySelector,
                  {
                    ...(Platform.OS !== 'android' && {
                      zIndex: 10,
                    }),
                  },
                ]}>
                <DropDownPicker
                  items={[
                    {
                      label: 'India',
                      value: 'india',
                      icon: () => <IndianFlag width={40} height={40} />,
                    },
                  ]}
                  dropDownMaxHeight={150}
                  style={styles.dropDownContainer}
                  defaultValue={countryOfResidenceState}
                  containerStyle={{
                    height: '90%',
                    justifyContent: 'center',
                  }}
                  dropDownStyle={[
                    styles.dropDownStyle,
                    Platform.OS === 'ios' ? {zIndex: 3000} : null,
                  ]}
                  placeholder="Choose Country of Residence"
                  arrowSize={22}
                  arrowColor="#858585"
                  labelStyle={{
                    fontSize: GlobalStyles.text_size_m,
                    fontWeight: '700',
                    alignSelf: 'center',
                  }}
                  selectedLabelStyle={{
                    fontSize: GlobalStyles.text_size_m,
                    fontWeight: '700',
                    alignSelf: 'center',
                  }}
                  onChangeItem={(item) => setCountryOfResidence(item.value)}
                />
              </View>
              <View style={styles.taxDateContainer}>
                <Text style={styles.taxDateText} numberOfLines={1}>
                  Tax Filling Date: 31/12/2020
                </Text>
              </View>
              <Text
                onPress={() =>
                  Toast.show('Take to Tax Estimation Screen', Toast.LONG, [
                    'RCTModalHostViewController',
                    'UIAlertController',
                  ])
                }
                style={styles.viewEstimateText}>
                VIEW CURRENT TAX ESTIMATE
              </Text>
            </View>
            <View style={styles.bannerContainer}>
              <FormBanner
                headingText="File Form 16A"
                descriptionText="Form 16/ 16A is the certificate of deduction
                of tax at source and issued
                on deduction of tax by the employer on behalf of the employees.
                 It is mandatory to issue these certificates to Tax Payers.
                "
                formLink="https://www.incometaxindia.gov.in/forms/income-tax%20rules/103120000000007292.pdf">
                <PurpleForm height="100%" width="65%" />
              </FormBanner>
              <FormBanner
                headingText="File ITR"
                descriptionText="Income Tax Return(ITR) is the form in which
                 assessee files information about his/her Income and tax
                 thereon to Income Tax Department."
                formLink="https://www.incometaxindia.gov.in/forms/income-tax%20rules/2020/itr1_english.pdf">
                <YellowForm
                  height="100%"
                  width="100%"
                  style={{
                    position: 'absolute',
                    left: -10,
                  }}
                />
              </FormBanner>
              <View style={styles.sendStatementContainer}>
                <View style={styles.sendStatementIconContainer}>
                  <Image
                    source={SendStatementIcon}
                    style={{
                      width: '90%',
                      height: '100%',
                      alignSelf: 'flex-start',
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.sendStatementActionContainer}>
                  <View style={styles.sendStatementSubView}>
                    <Text style={styles.sendStatementText}>
                      Send My{'\n'}Statements To Auditor
                    </Text>
                    <TouchableOpacity
                      style={styles.sendNowButton}
                      activeOpacity={0.8}
                      onPress={() => {
                        Toast.show('Send Statements To Auditor', Toast.LONG, [
                          'RCTModalHostViewController',
                          'UIAlertController',
                        ]);
                      }}>
                      <Text style={styles.sendNowText} numberOfLines={1}>
                        Send Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </HandleBack>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.color_white,
    justifyContent: 'flex-start',
  },
  scrollContainer: {
    flexGrow: 1,
    width: screenWidth,
    backgroundColor: GlobalStyles.color_white,
    paddingHorizontal: screenWidth * 0.05,
  },
  backArrowContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  headingContainer: {
    width: '100%',
    marginVertical: '5%',
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: GlobalStyles.text_size_xl,
  },
  countryContainer: {
    width: '100%',
  },
  countryText: {
    fontSize: GlobalStyles.text_size_s,
  },
  countrySelector: {
    width: '100%',
    height: 60,
    marginVertical: '2.5%',
  },
  dropDownContainer: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderColor: '#F0F0F0',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownStyle: {
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: '2.5%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  taxDateContainer: {
    width: '100%',
    height: 54,
    borderRadius: 5,
    marginBottom: '2.5%',
    backgroundColor: GlobalStyles.bg_yellow,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  taxDateText: {
    fontWeight: '700',
    fontSize: GlobalStyles.text_size_s,
    color: GlobalStyles.color_dark_red,
  },
  viewEstimateText: {
    fontSize: GlobalStyles.text_size_s,
    fontWeight: '700',
    color: GlobalStyles.color_button,
    textAlign: 'right',
    marginTop: '2.5%',
  },
  bannerContainer: {
    width: '100%',
    marginTop: '12.5%',
  },
  sendStatementContainer: {
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
    flexDirection: 'row',
  },
  sendStatementIconContainer: {
    width: '40%',
    height: 150,
  },
  sendStatementActionContainer: {
    width: '60%',
    height: 150,
  },
  sendStatementSubView: {
    height: '90%',
    justifyContent: 'center',
  },
  sendStatementText: {
    fontWeight: 'bold',
    fontSize: GlobalStyles.text_size_regular,
  },
  sendNowButton: {
    width: '70%',
    height: '40%',
    borderRadius: 5,
    backgroundColor: GlobalStyles.color_button,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2.5%',
  },
  sendNowText: {
    fontSize: GlobalStyles.text_size_m,
    fontWeight: 'bold',
    color: GlobalStyles.color_white,
  },
});
