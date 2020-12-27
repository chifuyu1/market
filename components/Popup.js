import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Dimensions,
  Keyboard,
  ScrollView,
} from 'react-native';
import { theme } from '../config/config';

function Popup({ visible, setVisible, Component }) {
  return (
    <Modal
      animationType='slide'
      transparent
      visible={visible}
      onDismiss={Keyboard.dismiss}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            {Component ? <Component /> : <></>}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: theme.modal.background,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: theme.modal.container,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: Dimensions.get('window').height * 0.65,
  },
  modalTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingVertical: 5,
  },
  modalTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalClose: {
    position: 'absolute',
    left: 10,
  },
});

export default Popup;
