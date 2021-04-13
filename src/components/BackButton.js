import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../common/colors';
import ArrowUpSvg from '../../assets/svg/arrow-up.svg';

export default ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.backButtonContainer}>
    <ArrowUpSvg color={colors.BLUE} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backButtonContainer: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    marginTop: 20,
  },
  backButtonContainer: {
    marginTop: 15,
    marginLeft: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: 'rgba(38,56,124, 0.03)',
    borderColor: 'rgba(38,56,124, 0.08)',
    height: 40,
    width: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    transform: [{rotate: '270deg'}],
  },
});
