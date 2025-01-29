import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {primaryColor, white} from '../theme/Colors';
import moment from 'moment';

export const sendDateToBackend = ({date}) => {
  return moment(date).format('dddd, MMMM Do YYYY, h:mm A');
};

export const formateDate = ({date}) => {
  return moment(date).format('MMM DD, HH:mm a');
};
