import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { CheckBox } from '@rneui/themed';
import bmrImg from './../assets/bmrlogo.png';

export default function Bmr({ navigation }: { navigation: NavigationProp<any> }) {
  const [selectedSexIndex, setSelectedSexIndex] = React.useState(0);
  const [weight, setWeight] = React.useState('0');
  const [height, setHeight] = React.useState('0');
  const [age, setAge] = React.useState('0');
  const [bmr , setBmr] = React.useState('0');

  const calBMR = () => {
    if (weight == '' || parseFloat(weight) == 0) {
        alert('กรุณาป้อนน้ำหนัก');
        return;
    } else if (height == '' || parseFloat(height) == 0) {
        alert('กรุณาป้อนส่วนสูง');
        return;
    } else if (age == '' || parseFloat(age) == 0) {
        alert('กรุณาป้อนอายุ');
        return;
    }
    console.log(selectedSexIndex);
    console.log(weight);
    console.log(height);
    console.log(age);
    setBmr(selectedSexIndex == 0 ? (66+(((13.7*parseFloat(weight))+(5*parseFloat(height)))-(6.8*parseFloat(age)))).toFixed(1).toString() : (665+(((9.6*parseFloat(weight))+(1.8*parseFloat(height)))-(4.7*parseFloat(age)))).toFixed(1).toString());
    alert('ค่า BMR ของคุณคือ ' + bmr);
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{ flex: 1, width: '100%', backgroundColor: 'white' }}>
        <View style={{ width: '100%' }}>
          <View style={styles.appbar}>
            <Text style={styles.titleAppbar}>BMR Application</Text>
          </View>
          <Image source={bmrImg} style={styles.logo}></Image>
          <View style={{ height: 30 }} />
          <Text style={styles.textStyles} >เพศ</Text>
          <View style={styles.textStyles}>
            <CheckBox
              title={'ชาย'}
              checked={selectedSexIndex === 0}
              onPress={() => setSelectedSexIndex(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor='#6851a4'
            />
            <CheckBox
              title={'หญิง'}
              checked={selectedSexIndex === 1}
              onPress={() => setSelectedSexIndex(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor='#6851a4'
            />
          </View>
          <View style={{ height: 15 }} />
          <Text style={styles.textStyles} >น้ำหนัก</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput keyboardType='numeric' style={[styles.textStyles, styles.textInputStyles]} value={weight}
              onChangeText={(text) => {
                const numericValue = text.replace(/[^0-9.]/g, '').replace(/^(\d*\.\d*)\./g, '$1');
                setWeight(numericValue);
              }} />
            <Text style={{ fontSize: 18, marginTop: 10, marginLeft: -60 }}>กิโลกรัม</Text>
          </View>
          <View style={{ height: 15 }} />
          <Text style={styles.textStyles} >ส่วนสูง</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput keyboardType='numeric' style={[styles.textStyles, styles.textInputStyles]} value={height}
              onChangeText={(text) => {
                const numericValue = text.replace(/[^0-9.]/g, '').replace(/^(\d*\.\d*)\./g, '$1');
                setHeight(numericValue);
              }}
            />
            <Text style={{ fontSize: 18, marginTop: 10, marginLeft: -75 }}>เซนติเมตร</Text>
          </View>
          <View style={{ height: 15 }} />
          <Text style={styles.textStyles} >อายุ</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput keyboardType='numeric' style={[styles.textStyles, styles.textInputStyles]} value={age}
              onChangeText={(text) => {
                const numericValue = text.replace(/[^0-9.]/g, '').replace(/^(\d*\.\d*)\./g, '$1');
                setAge(numericValue);
              }}
            />
            <Text style={{ fontSize: 18, marginTop: 10, marginLeft: -10 }}>ปี</Text>
          </View>
          <View style={{ height: 20 }} />
          <TouchableOpacity style={styles.buttonStyles} onPress={() => calBMR()}>
            <Text style={{ color: 'white', textAlign: 'center' }} >คำนวณ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    backgroundColor: "#e91e63",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  titleAppbar: {
    marginTop: 50,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
    borderRadius: 20,
    alignSelf: 'center'
  },
  textStyles: {
    fontSize: 18,
    marginLeft: 50
  },
  textInputStyles: {
    borderBottomColor: 'black',
    width: '74%',
    borderBottomWidth: 1
  },
  buttonStyles: {
    justifyContent: 'center',
    backgroundColor: '#e91e63',
    borderRadius: 10,
    width: '75%',
    height: 60,
    alignSelf: 'center',
    marginTop: 20
  }
})