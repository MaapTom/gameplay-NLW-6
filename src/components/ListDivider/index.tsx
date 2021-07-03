import React from 'react';

import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  isCentred?: boolean;
}

export function ListDivider({ isCentred }: Props) {
  return(
    <View 
      style={[
        styles.container,
        isCentred? {
          marginVertical: 12,
        } : {
          marginTop: 2,
          marginBottom: 31
        }
      ]}
    />
  )
}
