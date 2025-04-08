import { Text, StyleSheet } from 'react-native';
import React from 'react';

const Classification = ({ classific }) => {
    return (
        <Text style={styles.classification}>De acordo com o seu peso, você se encaixa na categoria {classific}</Text>
    );
};


const styles = StyleSheet.create({
    classification: {
        marginTop: 20,
        Fontsize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Classification;