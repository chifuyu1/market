import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableNativeFeedback,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import IconEV from 'react-native-vector-icons/EvilIcons';
import IconIo from 'react-native-vector-icons/Ionicons';
import IconSL from 'react-native-vector-icons/SimpleLineIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { theme } from '../config/config';

function Information() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.infoHeaderView}>
        <Text style={styles.infoHeaderText}>정보</Text>
      </View>
      <TouchableNativeFeedback onPress={() => navigation.navigate(`Notice`)}>
        <View style={styles.infoItem}>
          <IconSL name='speech' color={`black`} size={20} />
          <Text style={styles.infoItemText}>공지사항</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate(`ServiceTermPersonalInfo`)}
      >
        <View style={styles.infoItem}>
          <IconFA name='user' color={`black`} size={24} />
          <Text style={styles.infoItemText}>서비스 이용약관 및 개인정보</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('OpenSource')}
      >
        <View style={styles.infoItem}>
          <IconIo name='code-slash-outline' color={`black`} size={20} />
          <Text style={styles.infoItemText}>오픈소스 라이선스</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {}}>
        <View style={styles.infoItem}>
          <IconEV name='refresh' color={`black`} size={20} />
          <Text style={styles.infoItemText}>버전 정보</Text>
          <Text style={{ color: theme.notice.border, marginLeft: 4 }}>
            1.0.0
          </Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  infoHeaderView: {
    paddingVertical: 10,
  },
  infoHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoItem: {
    flexDirection: 'row',
    paddingVertical: 4,
    width: Dimensions.get(`window`).width,
    height: 40,
    alignItems: 'center',
  },
  infoItemText: {
    fontSize: 15,
    marginLeft: 8,
  },
});

export default Information;
