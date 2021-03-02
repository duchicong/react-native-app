import React from 'react'
import {
	Text,
	StyleSheet,
    View,
    FlatList
} from 'react-native'

const ListScreen = () => {
	const friends = [
        { name: 'friend #1', age: 19 },
        { name: 'friend #2', age: 20 },
        { name: 'friend #3', age: 21 },
        { name: 'friend #5', age: 22 },
        { name: 'friend #6', age: 23 },
        { name: 'friend #7', age: 24 },
        { name: 'friend #8', age: 25 },
        { name: 'friend #9', age: 26 },
        { name: 'friend #10', age: 27 },
        { name: 'friend #3453535', age: 28 }
    ]
	return (
		<View>
			<FlatList
				showsVerticalScrollIndicator={false}
				keyExtractor={(friend) => friend.name}
				data={friends}
				renderItem={({ item })=> {
					return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
				}}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 100
	}
})

export default ListScreen