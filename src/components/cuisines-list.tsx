import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { CuisineType } from '../constants';

import { Checkbox } from './checkbox';

type CuisinesListProps = {
  title: string;
  cuisines: CuisineType[];
  onPressItem: (id: number) => void;
};

export const CuisinesList: React.FC<CuisinesListProps> = ({
  title,
  cuisines,
  onPressItem,
}) => {
  const { top: safeTop } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeTop + 24,
          paddingLeft: 18,
        },
      ]}>
      <StatusBar style="light" />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.listContainer}>
        {cuisines.map(cuisine => (
          <Checkbox
            key={cuisine.id}
            label={cuisine.name}
            checked={cuisine.selected}
            onPress={() => onPressItem(cuisine.id)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontFamily: 'SF-Pro-Rounded-Bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginTop: 24,
    paddingRight: 12,
  },
});
