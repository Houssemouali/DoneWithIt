//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableNativeFeedback,
	Alert,
	Button,
	Platform,
	StatusBar,
	Dimensions,
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
	console.log(Dimensions.get('screen'));
	console.log(useDimensions());
	const { landscape } = useDeviceOrientation();

	let x = 1;
	console.log('app executed');
	//SafeAreaView work properly only on iOs

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					width: '100%',
					height: landscape ? '100%' : '30%',
				}}
			></View>
			{/* <Button
				color="orange"
				title="click me"
				onPress={() =>
					//Alert.prompt('Title', 'Message', (text) => console.log(text)) //work only on iphone
					Alert.alert('Title', 'message', [
						{ text: 'Yes', onPress: () => console.log('Yes') },
						{ text: 'No', onPress: () => console.log('No') },
					])
				}
			/> */}
			{/* <Text>Hello from React Native !!</Text>
			<TouchableNativeFeedback onPress={() => alert('Pressed!')}>
				<View style={{ width: 200, height: 50, backgroundColor: 'dodgerblue' }}></View>
			</TouchableNativeFeedback> */}
			{/* <TouchableHighlight onPress={() => alert('Pressed!')}>
				<Image
					fadeDuration={3000}
					source={{
						width: 200,
						height: 300,
						uri: 'https://picsum.photos/id/237/200/300',
					}}
				/>
			</TouchableHighlight> */}
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
