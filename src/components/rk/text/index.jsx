import React from 'react';
import { Text } from 'react-native';
import { toSize } from '../../../globalStyle';

const RKText = ({
  size = 14,
  weight = '500',
  color = '#1F2024',
  lineHeight,
  letterSpacing = 0,
  style,
  children,
  ...props
}) => {
  return (
    <Text
      style={[
        {
          fontSize: toSize(size),
          fontWeight: weight,
          color: color,
        },
        style,
      ]}
      {...props}
    >
      {children && children}
    </Text>
  );
};

export default RKText;
