import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '../config/config';
import { commonStyles } from './style/styles';

export default React.memo(function Loading() {
  return (
    <View style={commonStyles.loading}>
      <ActivityIndicator
        size='large'
        color={theme.highlight_pressable.background}
      />
    </View>
  );
});
