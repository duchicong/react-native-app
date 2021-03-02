import React from 'react'
import {
	Text,
	StyleSheet,
	View,
	FlatList
} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
	const listImages = [
		{ title: 'image beach', image: require('../../assets/beach.jpg') },
		{ title: 'image forest', image: require('../../assets/forest.jpg') },
		{ title: 'image mountain', image: require("../../assets/mountain.jpg") }
	]
	return (
		<View>
			<FlatList
				keyExtractor={(image) => image.title}
				data={listImages}
				renderItem={({item}) => (
					<ImageDetail
						title={item.title}
						imageSource={item.image}
					/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default ImageScreen