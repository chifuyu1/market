import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import {
  DeliveryQuestion,
  orderQuestion,
  RefundQuestion,
  openSourceUrl,
  terms,
} from '../data/infomation';
import { theme } from '../config/config';

export function NoticeItem({ item, content }) {
  const [visible, setVisible] = useState(false);

  const noticeItemStyle = StyleSheet.create({
    itemContainer: {
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: theme.notice.background,
      borderWidth: 2,
      borderColor: theme.notice.border,
      borderStyle: `solid`,
      elevation: 3,
      marginVertical: 10,
      paddingHorizontal: 5,
      justifyContent: `center`,
    },
    contentContainer: {
      marginVertical: 10,
    },
  });
  return (
    <TouchableNativeFeedback onPress={() => setVisible((prev) => !prev)}>
      <View style={noticeItemStyle.itemContainer}>
        <Text>{item}</Text>
        {visible ? (
          <View style={noticeItemStyle.contentContainer}>
            <Text>{content}</Text>
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableNativeFeedback>
  );
}

export function Notice() {
  const noticeStyle = StyleSheet.create({
    container: {
      padding: 10,
    },
    categoryTitle: {
      fontSize: 24,
      fontWeight: `bold`,
      marginTop: 10,
    },
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled
      contentContainerStyle={noticeStyle.container}
    >
      <Text style={noticeStyle.categoryTitle}>주문 / 결제</Text>
      {orderQuestion.map((e, i) => (
        <NoticeItem item={e.title} content={e.content} key={i} />
      ))}
      <Text style={noticeStyle.categoryTitle}>배송</Text>
      {DeliveryQuestion.map((e, i) => (
        <NoticeItem item={e.title} content={e.content} key={i} />
      ))}
      <Text style={noticeStyle.categoryTitle}>환불</Text>
      {RefundQuestion.map((e, i) => (
        <NoticeItem item={e.title} content={e.content} key={i} />
      ))}
    </ScrollView>
  );
}

export function OpenSource() {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {openSourceUrl.map((element, index) => (
        <View key={index.toString()}>
          <Text>{element.title}</Text>
          <Text>{`${element.url}\n`}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export function ServiceTerm() {
  const serviceStyle = StyleSheet.create({
    container: {
      padding: 10,
    },
    text: {
      lineHeight: 30,
    },
  });
  return (
    <View style={serviceStyle.container}>
      {terms.map((str, idx) => (
        <Text key={idx} style={serviceStyle.text}>
          {str}
        </Text>
      ))}
    </View>
  );
}
