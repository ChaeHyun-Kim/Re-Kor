import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { styles } from './styles';
import { toSize } from '../../../globalStyle';
import { FontAwesome5 } from '@expo/vector-icons';
import RKText from '../../rk/text';

const ToastMessage = ({
  visible,
  handleFunction,
  title,
  content,
  fail,
  course,
}) => {
  const popAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    const status = course ? -200 : 165;
    if (visible) {
      Animated.timing(popAnim, {
        toValue: toSize(status),
        duration: 300,
        useNativeDriver: true,
      }).start();
      handlePopOutToast();
    }
  });

  const handlePopOutToast = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: -500,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);

    setTimeout(() => {
      handleFunction(false);
    }, 2500);
  };

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        { transform: [{ translateY: popAnim }] },
        fail ? { backgroundColor: '#FFE2E5' } : { backgroundColor: '#ECFFF2' },
      ]}
    >
      <View style={styles.flexRow}>
        <FontAwesome5
          name={fail ? 'error' : 'check-circle'}
          size={toSize(24)}
          color="#23A047"
        />
        <View style={styles.textView}>
          <RKText size={16} weight={'800'} style={{ marginBottom: toSize(4) }}>
            {title}
          </RKText>
          <RKText size={12} weight={'400'} color={'#71727A'}>
            {content}
          </RKText>
        </View>
      </View>
    </Animated.View>
  );
};

export default ToastMessage;
