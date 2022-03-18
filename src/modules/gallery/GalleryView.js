import React from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity, Text, Platform } from 'react-native';
import Lightbox from 'react-native-lightbox';

import { colors } from '../../styles';
import { GridRow } from '../../components';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
export default function GalleryScreen(props) {
  const  url = props.route.params.url;
          if(Platform.OS === 'ios'){
            var urlios = require("../../../assets/page/index.html");
              switch(url) {
                case 'index1.html':
                  urlios = require("../../../assets/page/index1.html");
                  break;
                  case 'index2.html':
                  urlios = require("../../../assets/page/index2.html");
                  break;
                  case 'index3.html':
                  urlios = require("../../../assets/page/index3.html");
                  break;
                  case 'index4.html':
                      urlios = require("../../../assets/page/index4.html");
                  break;
                  case 'index5.html':
                      urlios = require("../../../assets/page/index5.html");
                      break;
                  case 'index6.html':
                        urlios = require("../../../assets/page/index6.html");
                        break;
                  case 'index7.html':
                          urlios = require("../../../assets/page/index7.html");
                          break;
                  case 'index8.html':
                            urlios = require("../../../assets/page/index8.html");
                            break;
                  case 'index9.html':
                              urlios = require("../../../assets/page/index9.html");
                              break;
                  case 'index10.html':
                                urlios = require("../../../assets/page/index10.html");
                                break;
                  case 'index11.html':
                  urlios = require("../../../assets/page/index11.html");
                  break;
                  case 'index12.html':
                    urlios = require("../../../assets/page/index12.html");
                    break;
                    case 'index13.html':
                      urlios = require("../../../assets/page/index13.html");
                      break;
                      case 'index14.html':
                        urlios = require("../../../assets/page/index14.html");
                        break;
                        case 'index15.html':
                          urlios = require("../../../assets/page/index15.html");
                          break;
                          case 'index16.html':
                            urlios = require("../../../assets/page/index16.html");
                            break;
                default:
                  urlios = require("../../../assets/page/index.html");
              }
           
          
            return (
              <View style={styles.videoContainer}>
                {/* <Video
                  source={{ uri: 'https://public.bl.files.1drv.com/y4mcIbanMLG0Mj28Zz5J0dA3_w3z3MLfMOqkS6ZV9ZZI6Prbhr-imnH3PXU-E055nKzs75pkSiEgDnYCkHD6HNi16KzD77mn5ovUmbYRZNUc45pnCRQyxaekYAyIcmB7px3B2OXwYfdXiFrP6ecwWWlgpq6P3Izh-ROpd3g9zkHd5ZjiikRu0RfFNLIXZ6vG36U-U3BZnCWAAfh1vjd3QwNp5MZej1o7Uq8vsfZor6Z9KY?' }}
                  ref={(ref) => {
                    this._player = ref
                  }}
                  onBuffer={this.onBuffer}
                  onEnd={this.onEnd}
                  onError={this.videoError}
                  style={styles.video}
                  resizeMode="contain"
                  controls={true} /> */}
          
                <WebView
                  style={{ flex: 1 }}
                  originWhitelist={['*']}
                  source={urlios}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                />
              </View>
            );
          }
          else{
            return (
              <View style={styles.videoContainer}>
                <WebView
                  style={{ flex: 1 }}
                  originWhitelist={['*']}
                  source={{ uri: 'file:///android_asset/' + url }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                />
              </View>
            );
          }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  topImage: {
    flex: 1,
    height: 200,
    margin: 5,
    borderRadius: 5,
  },
  imagesRow: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    padding: 5,
  },
  image: {
    flex: 1,
    height: 100,
    borderRadius: 5,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
