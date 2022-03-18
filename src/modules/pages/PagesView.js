import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { colors, fonts } from '../../styles';

const chartIcon = require('../../../assets/images/pages/chart.png');
const calendarIcon = require('../../../assets/images/pages/calendar.png');
const chatIcon = require('../../../assets/images/pages/chat.png');
const galleryIcon = require('../../../assets/images/pages/gallery.png');
const profileIcon = require('../../../assets/images/pages/profile.png');
const loginIcon = require('../../../assets/images/pages/login.png');
const blogIcon = require('../../../assets/images/pages/blog.png');
const D1Icon = require('../../../assets/images/D1.jpg');
const D2Icon = require('../../../assets/images/D2.jpg');
const D3Icon = require('../../../assets/images/D3.jpg');
const D4Icon = require('../../../assets/images/D4.jpg');
const D5Icon = require('../../../assets/images/D5.jpg');
const D6Icon = require('../../../assets/images/D6.jpg');
const D7Icon = require('../../../assets/images/D7.jpg');
const D8Icon = require('../../../assets/images/D8.jpg');
const D9Icon = require('../../../assets/images/D9.jpg');
const D10Icon = require('../../../assets/images/D10.jpg');
const converday = require('../../../assets/images/converday.png');
const background = require('../../../assets/images/P13.jpg');
export default function PagesScreen(props) {
  const [Numberplay, SetNumberplay] = useState('0')
  useEffect(() => {
    try {
      AsyncStorage.getItem('PlayingNumber', (err, item) => SetNumberplay(item));
    } catch (e) {
      // error reading value
    }
  }, [])
  _storeData = async (day) => {
    try {
      await AsyncStorage.setItem('PlayingNumber', day);
    } catch (error) {
      // Error saving data
    }
  };
  const handleClick = (day, url) => {
    _storeData(day);
    SetNumberplay(day);
    props.navigation.navigate('Gallery', { url: url, })
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <ImageBackground
          source={background}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleClick('1', "index1.html")}
              style={Numberplay == '1' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Fit Test</Text>
              <Text style={styles.itemText}>Day 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('2', "index2.html")}
              style={Numberplay == '2' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Plyometric Cardio Circuit</Text>
              <Text style={styles.itemText}>Day 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('3', "index3.html")}
              style={Numberplay == '3' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Cardio Power & Resistance</Text>
              <Text style={styles.itemText}>Day 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('4', "index4.html")}
              style={Numberplay == '4' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Cardio Recovery
              </Text>
              <Text style={styles.itemText}>Day 4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('5', "index5.html")}
              style={Numberplay == '5' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Pure Cardio
              </Text>
              <Text style={styles.itemText}>Day 5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('6', "index2.html")}
              style={Numberplay == '6' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Plyometric Cardio Circuit
              </Text>
              <Text style={styles.itemText}>Day 6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemOff}
            >
              <Text style={styles.itemTextIn}>Off</Text>
              <Text style={styles.itemText}>Day 7</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleClick('8', "index3.html")}
              style={Numberplay == '8' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Cardio Power & Resistance

              </Text>
              <Text style={styles.itemText}>Day 8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('9', "index5.html")}
              style={Numberplay == '9' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Pure Cardio</Text>
              <Text style={styles.itemText}>Day 9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('10', "index2.html")}
              style={Numberplay == '10' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Plyometric Cardio Circuit
              </Text>
              <Text style={styles.itemText}>Day 10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Gallery', { url: 'index4.html' })}
              style={Numberplay == '11' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Cardio Recovery
              </Text>
              <Text style={styles.itemText}>Day 11</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('12', "index3.html")}
              style={Numberplay == '12' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Cardio Power & Resistance

              </Text>
              <Text style={styles.itemText}>Day 12</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('13', "index14.html")}
              style={Numberplay == '13' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Pure Cardio & Cardio Abs
              </Text>
              <Text style={styles.itemText}>Day 13</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemOff}
            >
              <Text style={styles.itemTextIn}>Off</Text>
              <Text style={styles.itemText}>Day 14</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleClick('15', "index1.html")}
              style={Numberplay == '15' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Fit Test
              </Text>
              <Text style={styles.itemText}>Day 15</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('16', "index2.html")}
              style={Numberplay == '16' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Plyometric Cardio Circuit

              </Text>
              <Text style={styles.itemText}>Day 16</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('17', "index14.html")}
              style={Numberplay == '17' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Pure Cardio & Cardio Abs
              </Text>
              <Text style={styles.itemText}>Day 17</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('18', "index4.html")}
              style={Numberplay == '18' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Cardio Recovery
              </Text>
              <Text style={styles.itemText}>Day 18</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('19', "index3.html")}
              style={Numberplay == '19' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Cardio Power & Resistance
              </Text>
              <Text style={styles.itemText}>Day 19</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('20', "index2.html")}
              style={Numberplay == '20' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Plyometric Cardio Circuit

              </Text>
              <Text style={styles.itemText}>Day 20</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemOff}
            >
              <Text style={styles.itemTextIn}>Off</Text>
              <Text style={styles.itemText}>Day 21</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleClick('22', "index14.html")}
              style={Numberplay == '22' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Pure Cardio & Cardio Abs
              </Text>
              <Text style={styles.itemText}>Day 22</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('23', "index3.html")}
              style={Numberplay == '23' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Cardio Power & Resistance
              </Text>
              <Text style={styles.itemText}>Day 23</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('24', "index2.html")}
              style={Numberplay == '24' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Plyometric Cardio Circuit
              </Text>
              <Text style={styles.itemText}>Day 24</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('25', "index4.html")}
              style={Numberplay == '25' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Cardio Recovery</Text>
              <Text style={styles.itemText}>Day 25</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('26', "index14.html")}
              style={Numberplay == '26' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Pure Cardio & Cardio Abs

              </Text>
              <Text style={styles.itemText}>Day 26</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('27', "index2.html")}
              style={Numberplay == '27' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Plyometric Cardio Circuit

              </Text>
              <Text style={styles.itemText}>Day 27</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemOff}
            >
              <Text style={styles.itemTextIn}>Off
              </Text>
              <Text style={styles.itemText}>Day 28</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleClick('29', "index7.html")}
              style={Numberplay == '29' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Core Cardio & Balance</Text>
              <Text style={styles.itemText}>Day 29</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('30', "index7.html")}
              style={Numberplay == '30' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Core Cardio & Balance
              </Text>
              <Text style={styles.itemText}>Day 30</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('31', "index7.html")}
              style={Numberplay == '31' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Core Cardio & Balance
              </Text>
              <Text style={styles.itemText}>Day 31</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('32', "index7.html")}
              style={Numberplay == '32' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Core Cardio & Balance
              </Text>
              <Text style={styles.itemText}>Day 32</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('33', "index7.html")}
              style={Numberplay == '33' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Core Cardio & Balance</Text>
              <Text style={styles.itemText}>Day 33</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('34', "index7.html")}
              style={Numberplay == '34' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Core Cardio & Balance
              </Text>
              <Text style={styles.itemText}>Day 34</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemOff}
            >
              <Text style={styles.itemTextIn}>Off
              </Text>
              <Text style={styles.itemText}>Day 35</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleClick('36', "index15.html")}
              style={Numberplay == '36' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Fit Test & Max Interval Circuit


              </Text>
              <Text style={styles.itemText}>Day 36</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('37', "index9.html")}
              style={Numberplay == '37' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Plyo
              </Text>
              <Text style={styles.itemText}>Day 37</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('38', "index10.html")}
              style={Numberplay == '38' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Cardio Conditioning
              </Text>
              <Text style={styles.itemText}>Day 38</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('39', "index11.html")}
              style={Numberplay == '39' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Recovery
              </Text>
              <Text style={styles.itemText}>Day 39</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('40', "index8.html")}
              style={Numberplay == '40' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Circuit
              </Text>
              <Text style={styles.itemText}>Day 40</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('41', "index9.html")}
              style={Numberplay == '41' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Plyo</Text>
              <Text style={styles.itemText}>Day 41</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemOff}
            >
              <Text style={styles.itemTextIn}>Off
              </Text>
              <Text style={styles.itemText}>Day 42</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleClick('43', "index10.html")}
              style={Numberplay == '43' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Cardio Conditioning

              </Text>
              <Text style={styles.itemText}>Day 43</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('44', "index8.html")}
              style={Numberplay == '44' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Circuit

              </Text>
              <Text style={styles.itemText}>Day 44</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('45', "index9.html")}
              style={Numberplay == '45' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Plyo
              </Text>
              <Text style={styles.itemText}>45</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('46', "index11.html")}
              style={Numberplay == '46' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Recovery

              </Text>
              <Text style={styles.itemText}>Day 46</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('47', "index16.html")}
              style={Numberplay == '47' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Cardio Conditioning & Cardio Abs

              </Text>
              <Text style={styles.itemText}>Day 47</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('48', "index7.html")}
              style={Numberplay == '48' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Core Cardio & Balance
              </Text>
              <Text style={styles.itemText}>Day 48</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemOff}
            >
              <Text style={styles.itemTextIn}>Off
              </Text>
              <Text style={styles.itemText}>Day 49</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleClick('50', "index15.html")}
              style={Numberplay == '50' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Fit Test & Max Interval Circuit

              </Text>
              <Text style={styles.itemText}>Day 50</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('51', "index9.html")}
              style={Numberplay == '51' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Plyo

              </Text>
              <Text style={styles.itemText}>Day 51</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('52', "index16.html")}
              style={Numberplay == '52' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Cardio Conditioning & Cardio Abs

              </Text>
              <Text style={styles.itemText}>Day 52</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('53', "index11.html")}
              style={Numberplay == '53' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Recovery
              </Text>
              <Text style={styles.itemText}>Day 53</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('54', "index8.html")}
              style={Numberplay == '54' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Circuit

              </Text>
              <Text style={styles.itemText}>Day 54</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('55', "index7.html")}
              style={Numberplay == '55' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Core Cardio & Balance
              </Text>
              <Text style={styles.itemText}>Day 55</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemOff}
            >
              <Text style={styles.itemTextIn}>Off

              </Text>
              <Text style={styles.itemText}>Day 56</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleClick('57', "index9.html")}
              style={Numberplay == '57' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Plyo
              </Text>
              <Text style={styles.itemText}>Day 57</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('58', "index16.html")}
              style={Numberplay == '58' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Cardio Conditioning & Cardio Abs

              </Text>
              <Text style={styles.itemText}>Day 58</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('59', "index8.html")}
              style={Numberplay == '59' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Circuit
              </Text>
              <Text style={styles.itemText}>Day 59</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('60', "index7.html")}
              style={Numberplay == '60' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Core Cardio & Balance

              </Text>
              <Text style={styles.itemText}>Day 60</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('61', "index9.html")}
              style={Numberplay == '61' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Interval Plyo
              </Text>
              <Text style={styles.itemText}>Day 61</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('62', "index16.html")}
              style={Numberplay == '62' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Max Cardio Conditioning & Cardio Abs

              </Text>
              <Text style={styles.itemText}>Day 62</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClick('63', "index1.html")}
              style={Numberplay == '63' ? styles.itemActive : styles.item}
            >
              <Text style={styles.itemTextIn}>Fit Test
              </Text>
              <Text style={styles.itemText}>Day 63</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  item: {
    flex: 1,
    height: 140,
    paddingVertical: 10,
    borderColor: colors.primaryLight,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 2,
    backgroundColor: colors.primaryLight,
  },
  itemActive: {
    flex: 1,
    height: 140,
    paddingVertical: 10,
    borderColor: colors.primaryLight,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 2,
    backgroundColor: colors.yellow,
  },
  itemOff: {
    flex: 1,
    height: 140,
    paddingVertical: 10,
    borderColor: colors.primaryLight,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 2,
    backgroundColor: colors.green,
  },
  blogItem: {
    width: '31%',
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.white,
    fontFamily: fonts.primary,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  itemTextIn: {
    color: colors.white,
    fontFamily: fonts.primary,
    textAlign: 'center',
  },
  itemImage: {
    height: '90%',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
});
