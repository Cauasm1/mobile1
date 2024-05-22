import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';

const Imagem = () => {
    return (
        <View>
            <ScrollView>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.imagem} />
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.imagem} />
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.imagem} />
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.imagem} />
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.imagem} />
            </ScrollView>
        </View>
    )
}

export default Imagem;


const styles = StyleSheet.create({
    imagem: {
        width: 200,
        height: 200,
        resizeMode: "center"
    }
});
