import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './styles';
import {vh, vw} from '../../../../utils';

export default function BookMarkScreen() {
  const coloring = [
    'white',
    'pink',
    'brown',
    'yellow',
    'blue',
    'green',
    'wheat',
    'brown',
    'grey',
    'cyan',
    // '#AA6A21',
    // '#AA2121',
    // '#F58B12',
    // '#50F512',
    // '#078C93',
    // '#8B279B',
    // '#E036A7',
    // '#7894D3',
    // '#002A8A',
    // '#D163E2',
  ];
  const onScrollRef = useRef();

  const post = new Animated.Value(0);

  const data = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'},
    {id: '8'},
    {id: '9'},
    {id: '10'},
    {id: '11'},
    {id: '12'},
    {id: '13'},
    {id: '14'},
    {id: '15'},
    {id: '16'},
    {id: '17'},
    {id: '18'},
    {id: '19'},
    {id: '20'},
  ];
  const position = new Animated.Value(0);

  const renderItem = ({item}) => {
    return (
      <Animated.View
        style={[
          {
            backgroundColor: post.interpolate({
              inputRange: [0, 100],
              outputRange: [
                coloring[item.id % 10],
                coloring[(item.id + 1) % 10],
              ],
            }),
          },
          styles.renderItemView,
        ]}>
        <Text>{item.id}</Text>
      </Animated.View>
    );
  };

  const animationFun = () => {
    Animated.timing(position, {
      toValue: 400,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const animationFunBack = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  // const animatedFunction = event => {
  //   // console.log('event', event);
  //   post.setValue(event.);
  //   // Animated.timing(post, {
  //   //   toValue: 10,
  //   //   duration: 100,
  //   //   useNativeDriver: false,
  //   // }).start();
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={animationFun}
        style={{backgroundColor: '#3592AB', width: vw(100)}}>
        <Text>{'Click to roll'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={animationFunBack}
        style={{backgroundColor: '#4EC6E7', width: vw(100)}}>
        <Text>{'Click to rollback'}</Text>
      </TouchableOpacity>

      {/* <Animated.View
        style={{
          backgroundColor: '#D0F3FC',
          height: vw(200),
          width: vw(200),
          borderRadius: 100,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          transform: [
            {
              translateY: position,
            },
            {
              rotate: position.interpolate({
                inputRange: [0, 50],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}>
        <Text style={{fontWeight: '600'}}>{'Interpolate : rotate'}</Text>
      </Animated.View> */}
      <View>
        <Animated.FlatList
          // bounces={false}
          // ref={onScrollRef}

          onScroll={event => {
            post.setValue(event.nativeEvent.contentOffset.y);
          }}
          data={data}
          renderItem={renderItem}
          bounces={false}
          ListHeaderComponent={() => {
            return (
              <View style={styles.flatlistHeader}>
                <Text>{'Header'}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
