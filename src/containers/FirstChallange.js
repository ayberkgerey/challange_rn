import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import ScheduleComponent from '../components/ScheduleComponent';

export default function FirstChallange() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          marginLeft: 10,
          color: 'rgb(28,134,236)',
          fontSize: 17,
          fontWeight: '800',
        }}>
        Tur Programı
      </Text>
      <ScrollView style={styles.explainContainer}>
        <ScheduleComponent day={1} title={'Piazza Meydanı - Medea Heykeli'} />
        <ScheduleComponent day={2} title={'Batum Botanik Park - Şelale'} />
        <ScheduleComponent day={3} title={'Batum Meydanı - Deniz'} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(241,251,255)',
  },
  title: {},
  explainContainer: {margin: 10},
});
