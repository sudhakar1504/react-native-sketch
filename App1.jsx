// import RNFS from 'react-native-fs';
import React, { useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, Button, LogBox, Image, Text } from 'react-native';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import {
  Canvas,
  Path,
  TouchInfo,
  useCanvasRef,
  useTouchHandler,
} from '@shopify/react-native-skia';
import refimg from './scr/asset/download.png';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import RNFS from 'react-native-fs';

export default function App() {
  const canvasRef = useCanvasRef();
  const [Img, setImg] = useState(null)
  // const canvasRef = useRef(null);
  LogBox.ignoreAllLogs()
  const saveCanvas = async () => {
    try {
      const result = await canvasRef.current.toBase64();
      let base64 = `data:image/png;base64,${result}`;
      console.log(base64);
      
      const path = `${RNFS.DocumentDirectoryPath}/image_${new Date().getMilliseconds()}.png`;
      await RNFS.writeFile(path, refimg,'utf8');

        // Set the path to the state to display it later
        setImg(path);
      // You can now handle the file path of the saved image as needed
    } catch (error) {
      console.error('Error saving canvas:', error);
    }
  };

  const saveImage = async () => {
//     const bytes = await Img.encodeToBytes();
//     const path = `${RNFS.DocumentDirectoryPath}/image.png`;
//     await RNFS.writeFile(path, bytes, 'base64'); // Save the image as a file
console.log('called');

    const result = await TextRecognition.recognize(`file://${Img}`);
    // const result = await TextRecognition.recognize(refimg);
console.log('====================================');
console.log(result);
console.log('====================================');
  };
  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={'black'}
        strokeWidth={8}
        containerStyle={{
          width:'100%',
          height:200,
          borderColor:'red',
          borderWidth:2,
          backgroundColor:'white'
        }}
      />
      <Text style={{color:'green',backgroundColor:'white'}} >{`file://${Img}`}</Text>
      {/* <Image source={{ uri: `${refimg}` }} style={{width:'100%',height:300,borderColor:'red',
          borderWidth:2}} resizeMethod='auto' resizeMode='contain'/> */}
      <Image source={{ uri: `file://${Img}` }} style={{width:'100%',height:200,borderColor:'red',
          borderWidth:2}} resizeMethod='auto' resizeMode='contain'/>
      <Button onPress={()=>{
        saveCanvas()
          // canvasRef.current?.undo();
// canvasRef.current?.addPoints([[[132.56417410714286, 374.45982142857144]], [[162.27120535714286, 370.26339285714283]]])
// canvasRef.current?.addPoints([[[443.77027893066406,420.3318634033203]]])
// console.log(canvasRef.current?.toPoints());
// console.log(canvasRef.current?.toSvg(10,10,'red'));
// console.log(canvasRef.current?.toImage());
      }} title="Covert" />
      <Button onPress={saveImage} title="Check" />
      <Button onPress={canvasRef.current?.reset} title="Reset" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: {flex: 1,}});
