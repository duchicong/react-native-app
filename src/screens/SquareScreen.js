import React, { useReducer } from 'react'
import {
	View,
	StyleSheet
} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
	// state === { red: 0, green: 0, blue: 0 }
	// action === { colorType: 'red' || 'green' || 'blue', amount: 15 || -15 }
	switch (action.colorType) {
		case 'red':
			return {
				...state,
				red: state.red + action.amount
			}
		case 'green':
			return {
				...state,
				green: state.green + action.amount
			}
		case 'blue':
			return {
				...state,
				blue: state.blue + action.amount
			}
		default:
			return state
	}
}

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0
	})

	const setColor = (colorName, change) => {
		const setValue = (prev) => {
			const sum = prev + change
			if (sum > 255 || sum < 0) return prev
				else return sum
		} 
		switch (colorName) {
			case 'red':
				setRed(prev => (setValue(prev)))
				break
			case 'green':
				setGreen(prev => (setValue(prev)))
				break
			case 'blue':
				setBlue(prev => (setValue(prev)))
				break
		}
	}
	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => setColor('red', COLOR_INCREMENT)}
				onDecrease={() => setColor('red', -COLOR_INCREMENT)}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() => setColor('green', COLOR_INCREMENT)}
				onDecrease={() => setColor('green', -COLOR_INCREMENT)}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() => setColor('blue', COLOR_INCREMENT)}
				onDecrease={() => setColor('red', -COLOR_INCREMENT)}
			/>
			<View style={{
				...styles.viewStyle,
				backgroundColor: `rgb(${red}, ${green}, ${blue})`
			}}/>
		</View>
	)
}

const styles = StyleSheet.create({
	viewStyle: {
		height: 150,
		width: 150
	}
})
 
export default SquareScreen