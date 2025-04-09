//importa as funcionalidades necessárias para criar uma tela no react native
import { Text, StyleSheet } from "react-native";

//função que exibe o título da aplicação utilizando os padrões de estilização do conjunto title
const Title = () => {
    return(
        <Text style={styles.title}>CalculadoraIMC</Text>
    )
};

//utilização do método stylesheet.create para criar um conjunto de estilos chamado title
const styles = StyleSheet.create({
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
})

export default Title;