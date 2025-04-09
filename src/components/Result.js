//importa as funcionalidades necessárias para criar uma tela no react native
import React from "react";
import { Text, StyleSheet } from "react-native";

//função que exibe o imc do usuário
//utilizando os padrões de estilização do conjunto result
const Result = ({imc})=> {
    return(
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

//utilização do método stylesheet.create para criar um conjunto de estilos chamado result
const styles = StyleSheet.create({
    result:{
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Result;