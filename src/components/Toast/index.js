import React from 'react';
import { View, ViewPropTypes, Text, TouchableOpacity, Modal as ModalRN, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: 'red',
    margin: 16,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13,
    flex: 1,
  },
});

const Toast = ({ style, visible, title, onRequestClose, onDismiss, ...otherProps }) => (
  <ModalRN
    transparent
    animationType="fade"
    visible={visible}
    onRequestClose={onRequestClose}
    {...otherProps}
  >
    <TouchableOpacity activeOpacity={1} style={styles.modalContainer} onPress={onDismiss}>
      <View style={[styles.contentContainer, style]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  </ModalRN>
);

Toast.propTypes = {
  ...ModalRN.propTypes,
  style: ViewPropTypes.style,
  onDismiss: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  style: null,
};

export default Toast;
