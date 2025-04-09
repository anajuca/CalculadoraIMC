//importa as funcionalidades necessárias para criar uma tela no react native e outros arquivos
import {View, TextInput, Button, StyleSheet} from 'react-native';
import Result from './Result';
import { useState } from 'react';
import Classification from './Classification';
import IdealWeight from './IdealWeight';

const FormIMC = () => {
    //estados para armazenar os dados necessários para os cálculos
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');
    const [pesomax, setPesomax] = useState('');
    const [pesomin, setPesomin] = useState('');

    //função que classifica o imc do usuário
    const classificacaoIMC = (imcCalculado) => {
        if (imcCalculado < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (imcCalculado <= 24.9) {
            setClassificacao('Peso normal');
        } else if (imcCalculado <= 29.9) {
            setClassificacao('Sobrepeso');
        } else if (imcCalculado <= 34.9) {
            setClassificacao('Obesidade grau 1');
        } else if (imcCalculado <= 39.9) {
            setClassificacao('Obesidade grau 2');
        } else {
            setClassificacao('Obesidade grau 3 (obesidade mórbida)');
        }
    };

    //função que calcula e classifica o IMC do usuário e determina sua janela de peso ideal
    const CalcularIMC = () => {
        if (peso && altura) {
            //converte a altura em metros e calcula o IMC
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);

            //chamada da função que classifica o IMC do usuário
            classificacaoIMC(parseFloat(imcCalculado));

            //determina o peso mínimo e máximo para o indivíduo ser considerado saudável com base nos dados fornecidos
            const min = (18.5 * alturaMetros * alturaMetros).toFixed(2);
            const max = (24.9 * alturaMetros * alturaMetros).toFixed(2);
            setPesomin(min);
            setPesomax(max);
        }
    };

    return (
        //campo de entrada para o peso e altura utilizando os padrões de estilização do conjunto formContainer
        <View style={styles.formContainer}>
            {/* Campo de entrada para o peso utilizando o conjunto input*/}
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            {/* Campo de entrada para a altura utilizando o conjunto input*/}
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            {/* Botão que chama a função CalcularIMC */}
            <Button title="Calcular IMC" onPress={CalcularIMC} />
            {/* Exibição dos resultados */}
            {imc && <Result imc={imc} />}
            {classificacao && <Classification classific={classificacao} />}
            {pesomax !== '' && pesomin !== '' && <IdealWeight min={pesomin} max={pesomax} />}
        </View>
    );
};

//utilização do método stylesheet.create para criar conjuntos de estilos chamados formContainer e input
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;