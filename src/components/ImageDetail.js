import React from 'react'
import {
	Text,
	StyleSheet,
	View,
	Image
} from 'react-native'

const ImageDetail = (props) => {
	const { title, imageSource } = props
	return (
		<View>
			<Image source={imageSource}/>
			<Text>{title}</Text>
			<Text>Image score - {imageSource}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	
})
 
export default ImageDetail