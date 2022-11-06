import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import RKText from '../text';
import { toSize } from '../../../globalStyle';

const RKButton = ({
  text,
  textSize = 16,
  textWeight = '600',
  textColor = '#fff',
  onPress,
  bgColor = '#FFCC00',
  height = 48,
  borderColor = '#FFCC00',
  radius = 12,
  disabled = false,
  style,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          height: toSize(height),
          borderRadius: toSize(radius),
        },
        borderColor && {
          borderColor,
          borderWidth: 2,
        },
        disabled && styles.disabled,
        style && style,
      ]}
      disabled={disabled}
      {...props}
    >
      {text && (
        <RKText
          size={textSize}
          weight={textWeight}
          color={disabled ? '#FFCC00' : textColor}
        >
          {text}
        </RKText>
      )}
      {children}
    </TouchableOpacity>
  );
};

export default RKButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: '#fff',
  },
});
