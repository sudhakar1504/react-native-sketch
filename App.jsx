import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, Button, LogBox } from 'react-native';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import {
  Canvas,
  Path,
  TouchInfo,
  useCanvasRef,
  useTouchHandler,
} from '@shopify/react-native-skia';
export default function App() {
  const canvasRef = useCanvasRef();
  // const canvasRef = useRef(null);
  LogBox.ignoreAllLogs()
  const saveCanvas = async () => {
    try {
      const result = await canvasRef.current.toBase64();
      console.log('Canvas saved to:', result);
      // You can now handle the file path of the saved image as needed
    } catch (error) {
      console.error('Error saving canvas:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={'black'}
        strokeWidth={8}
        containerStyle={styles.container}
        addPoints={[[[132.56417410714286, 374.45982142857144]], [[162.27120535714286, 370.26339285714283]]]}
      />
      <Button onPress={()=>{
        saveCanvas()
          // canvasRef.current?.undo();
console.log('====================================');
// canvasRef.current?.addPoints([[[132.56417410714286, 374.45982142857144]], [[162.27120535714286, 370.26339285714283]]])
// canvasRef.current?.addPoints([[[443.77027893066406,420.3318634033203]]])
// console.log(canvasRef.current?.toPoints());
// console.log(canvasRef.current?.toSvg(10,10,'red'));
// console.log(canvasRef.current?.toImage());
console.log('====================================');
      }} title="change" />
      <Button onPress={canvasRef.current?.reset} title="Reset" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: {flex: 1,}});
