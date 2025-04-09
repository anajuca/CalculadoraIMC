//importa as funcionalidades necessárias para criar uma tela no react native
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//função que exibe o peso mínimo e máximo que o usuário deve ter para ser considerado saudável
//utilizando os padrões de estilização do conjunto ideal weight
const IdealWeight = ({ min, max }) => {
    return (
        <View>
            <Text style={styles.idealweight}>Seu peso ideal é entre {min} e {max}</Text>
        </View>
    );
};
//utilização do método stylesheet.create para criar um conjunto de estilos chamado idealweight
const styles = StyleSheet.create({
    idealweight: {
        Fontsize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default IdealWeight;