import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';

const CustomDatePicker = ({ label, initialDate, onDateChange,isShow }) => {
    const [date, setDate] = useState(new Date(initialDate));

    return (
        <View>
            <DatePicker
        modal
        date={date}
        onConfirm={(value) => {
          setShow(isShow)
          setDate(va)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
        </View>
    );
};



export default CustomDatePicker;
