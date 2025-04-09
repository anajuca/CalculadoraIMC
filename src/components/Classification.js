//importa as funcionalidades necessárias para criar uma tela no react native
import { Text, StyleSheet } from 'react-native';
import React from 'react';

//função que exibe a classificação na qual o usuário se encaixa
//utilizando os padrões de estilização do conjunto classification
const Classification = ({ classific }) => {
    return (
        <Text style={styles.classification}>Você se encaixa na categoria: {classific}</Text>
    );
};

//utilização do método stylesheet.create para criar um conjunto de estilos chamado classification
const styles = StyleSheet.create({
    classification: {
        FontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Classification;