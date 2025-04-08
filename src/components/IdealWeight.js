import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const IdealWeight = ({ min, max }) => {
    return (
        <View>
            <Text style={styles.idealweight}>Seu peso mínimo ideal é: {min}</Text>
            <Text style={styles.idealweight}>Seu peso máximo ideal é: {max}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    idealweight: {
        marginTop: 20,
        Fontsize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default IdealWeight;