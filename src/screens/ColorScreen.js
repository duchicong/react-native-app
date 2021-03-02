import React, { useState } from 'react'
import {
	Text,
	StyleSheet,
	FlatList,
	View,
	Button
} from 'react-native'

const ColorScreen = () => {
	const [colors, setColors] = useState([])

	return (
		<View>
			<Button
				title="Add a color"
				onPress={() => setColors(prev => ([...prev, randomRgb()]))}
			/>
			<FlatList
				data={colors}
				style={styles.wrapper}
				keyExtractor={color => color}
				renderItem={({item}) => <View style={{
					...styles.box,
					backgroundColor: item
				}}/>}
			/>
		</View>
	)
}

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256)
	const green = Math.floor(Math.random() * 256)
	const blue = Math.floor(Math.random() * 256)
	return `rgb(${red}, ${green}, ${blue})`
}
 
const styles = StyleSheet.create({
	wrapper: {
		display: 'flex'
	},
	box: {
		width: 100,
		height: 100
	}
})

export default ColorScreen