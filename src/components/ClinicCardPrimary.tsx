import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

type PlantCardPrimaryProps = {
  name: string;
};

export function ClinicCardPrimary({ name, ...rest }: PlantCardPrimaryProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      {/* <SvgFromUri uri={data.photo} width={70} height={70} /> */}

      <Text style={styles.text}>{name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '100%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
  },

  text: {
    color: colors.blue,
    fontFamily: fonts.heading,
    fontSize: 16,
    marginVertical: 16,
  },
});
