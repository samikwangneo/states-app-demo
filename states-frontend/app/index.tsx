import { useEffect, useState } from "react";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import axios from 'axios';

export default function Index() {
  const width = Dimensions.get('window').width;
  const [states, setStates] = useState([]);

  useEffect(() => {
    console.log("Calling api")
    callApi();
  }, []);

  const callApi = async () => {
    const response = await axios.get('https://8ca5-32-217-54-173.ngrok-free.app/')
    setStates(response.data);
    console.log(response.data);
    console.log('success')
  }


  return (
    <View>
      <Carousel
        loop
        width={width}
        height={width}
        autoPlay={false}
        data={states}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log(index)}
        renderItem={({index, item}) => (
          <View
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: 200,
              height: 125,
              left: '25%',
              top: '25%',

            }}
          >
            <TouchableOpacity onPress={() => alert('State selected')}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{item}</Text>
            </TouchableOpacity>

            <Text style={{textAlign: 'center', fontSize: 16, top: '80%'}}>
              Progress: {index+1}/50
            </Text>
          </View>

        )}

      />

    </View>

  );
}
