import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function ScheduleComponent(props) {
  const [show, setShow] = useState(true);
  const progress = useSharedValue({height: 240});
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(progress.value.height),
      duration: 2000,
    };
  }, []);

  const Opening = value => {
    if (value) {
      progress.value = {height: 0};
    } else {
      progress.value = {height: 240};
    }
  };

  return (
    <View style={styles.scheduleContainer}>
      <View>
        <View style={styles.dayBox}>
          <Text style={styles.title}>{props.day}.Gün</Text>
        </View>
        <View style={styles.dottedLine} />
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
            Opening(show);
          }}>
          <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>

        <Animated.View style={[reanimatedStyle]}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scheduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'rgb(28,134,236)',
    fontSize: 17,
    fontWeight: '800',
  },
  text: {
    marginTop: 20,
    textAlign: 'left',
    color: 'gray',
    fontWeight: '600',
  },
  textContainer: {
    marginTop: 10,
    marginRight: 30,
    marginLeft: 10,
    marginBottom: 40,
    width: 280,
  },

  dayBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 65,
    width: 80,
    borderRadius: 16,
  },
  dottedLine: {
    marginTop: 10,
    marginBottom: 4,
    flex: 1,
    width: 2,
    borderWidth: 2,
    alignSelf: 'center',
    borderStyle: 'dotted',
    borderColor: 'rgb(28,134,236)',
  },
});
