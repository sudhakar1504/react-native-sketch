import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Circle, Defs, G, Image as Svimg, Mask, Path, Rect, Svg } from 'react-native-svg'

const Letter = () => {
  return (
    <View style={{position:'absolute',backgroundColor:'white',top:0,left:0,width:'100%',height:'100%',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
     {/* <Svg width="80%" height="80%" viewBox="0 0 49.7 72.001" xmlns="http://www.w3.org/2000/svg"><G  stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="#000" style="stroke:#000;stroke-width:0.25mm;fill:#000"><Path d="M 49.7 67.801 L 40.8 72.001 L 32.1 53.001 A 30.586 30.586 0 0 0 29.509 48.427 Q 27.003 44.823 23.8 42.901 Q 19.445 40.287 12.964 39.95 A 37.847 37.847 0 0 0 11 39.901 L 9.5 39.901 L 9.5 70.801 L 0 70.801 L 0 1.001 Q 5.3 0.501 10.15 0.251 A 187.94 187.94 0 0 1 16.466 0.036 A 226.267 226.267 0 0 1 20.5 0.001 Q 33.3 0.001 39.75 5.201 A 17.414 17.414 0 0 1 44.38 10.735 Q 46.2 14.244 46.2 18.601 A 19.88 19.88 0 0 1 45.549 23.821 A 14.672 14.672 0 0 1 41.85 30.351 Q 37.5 34.801 29.3 37.001 A 23.656 23.656 0 0 1 32.729 38.863 A 20.427 20.427 0 0 1 34.1 39.851 Q 36.069 41.397 37.905 43.911 A 29.29 29.29 0 0 1 38.15 44.251 Q 40.1 47.001 42.1 51.401 L 49.7 67.801 Z M 9.5 8.401 L 9.5 31.901 L 20.5 31.901 A 26.489 26.489 0 0 0 25.423 31.469 Q 29.352 30.726 32.2 28.701 Q 36.7 25.501 36.7 19.501 A 9.811 9.811 0 0 0 33.427 12.036 A 13.272 13.272 0 0 0 32.5 11.251 A 13.923 13.923 0 0 0 28.136 9.029 Q 26.207 8.418 23.877 8.17 A 31.944 31.944 0 0 0 20.5 8.001 Q 17.326 8.001 14.762 8.088 A 118.974 118.974 0 0 0 14.4 8.101 Q 11.7 8.201 9.5 8.401 Z" vector-effect="non-scaling-stroke"/></G></Svg> */}
     {/* <Image source={{uri:'https://img.freepik.com/premium-vector/tracing-alphabet-letter-s-uppercase-prewriting-dotted-line-element-kindergarten-preschool-kids_435942-780.jpg?w=360'}} style={{width:'100%',height:'100%'}} resizeMode='contain' /> */}
     <Image source={{uri:'https://img.freepik.com/premium-vector/tracing-alphabet-letter-uppercase-prewriting-dotted-line-element-kindergarten-preschool-kids_435942-707.jpg'}} style={{width:'50%',height:'100%'}} resizeMode='contain' />
     <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9W0B3YP8BkpH1WlTdwS-cq0xIwBwkETswtXgT6jnpTn6UcVCYF1OZtUxZ625TO3fhqa0&usqp=CAU'}} style={{width:'50%',height:'100%'}} resizeMode='contain' />
    </View>
  )
}

export default Letter

const styles = StyleSheet.create({})