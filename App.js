import React, {useState} from 'react';
import {StyleSheet, Button, View, Text, Alert, Platform} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Separator = () => <View style={styles.separator} />;

function showAlert(message) {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const changeColor = (color, message) => {
    setBackgroundColor(color);
    showAlert(message);
    if (Platform.OS === 'web') {
      document.body.style.backgroundColor = color;
    }
  };

  return (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <View>
        <Button
          title="Green"
          color="#008000"
          onPress={() => changeColor('#00FF00', 'Bạn đã bấm nút xanh lá')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Blue"
          color="#0000FF"
          onPress={() => changeColor('#0000FF', 'Bạn đã bấm nút xanh dương')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Brown"
          color="#A52A2A"
          onPress={() => changeColor('#A52A2A', 'Bạn đã bấm nút nâu')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Yellow"
          color="#FFFF00"
          onPress={() => changeColor('#FFFF00', 'Bạn đã bấm nút vàng')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Red"
          color="#FF0000"
          onPress={() => changeColor('#FF0000', 'Bạn đã bấm nút đỏ')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Black"
          color="#000000"
          onPress={() => changeColor('#000000', 'Bạn đã bấm nút đen')}
        />
      </View>
      <Separator />
    </SafeAreaView>
  </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 20,
  },
});

export default App;
