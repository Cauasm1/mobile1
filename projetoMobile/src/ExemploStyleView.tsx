import { StyleSheet, View } from "react-native";

const ExemploStyleView = () => {
    return (
        <>
            <View style={styles.container_fixo}>
                <View style={[styles.fundo_azul,
                styles.tamanho_50, styles.borda]} />
                <View style={[styles.fundo_laranja,
                styles.tamanho_50, styles.borda]} />
                <View style={[styles.fundo_verde,
                styles.tamanho_50, styles.borda]} />
            </View>
            <View style={styles.container_flex}>
                <View style={[styles.fundo_azul,
                styles.flex_pequeno, styles.borda]} />
                <View style={[styles.fundo_laranja,
                styles.flex_grande, styles.borda]} />
                <View style={[styles.fundo_verde,
                styles.flex_grande, styles.borda]} />
            </View>
        </>
    );
}

export default ExemploStyleView;

const styles = StyleSheet.create({
    container_fixo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        backgroundColor: 'red',
        margin: 10,
    },
    container_flex: {
        flex: 2,
        flexDirection: 'row',

        backgroundColor: '#FFFACD',
        margin: 10,
    },
    fundo_azul: {
        backgroundColor: 'blue'
    },
    fundo_laranja: {
        backgroundColor: 'orange'
    },
    fundo_verde: {
        backgroundColor: 'green'
    },
    tamanho_50: {
        width: 50,
        height: 50,
    },
    flex_pequeno: {
        flex: 1
    },
    flex_grande: {
        flex: 2
    },
    borda: {
        borderColor: 'black',
        borderWidth: 5
    }
});