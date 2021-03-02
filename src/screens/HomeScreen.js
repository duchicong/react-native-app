import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity
} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        title="Go to components Demo"
        onPress={() => props.navigation.navigate('Components')}
        style={styles.buttonComponents}
      />
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => props.navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => props.navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => props.navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => props.navigation.navigate('Square')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonComponents: {
    marginBottom: 10
  }
});

export default HomeScreen;
