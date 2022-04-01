import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../firebase';

export default function Update({ navigation }) {

    const [listFire, setListFire] = useState(null);

    function index() {
        navigation.navigate("Index", {
        });
    }

    function ordenarPorVitorias(a, b) {
        return b.vitorias - a.vitorias;
    }

    useEffect(() => {
        try {
            firebase.database().ref('/cacanickeis').on('value', (snapshot) => {
                const list = [];
                snapshot.forEach((childItem) => {
                    list.push({
                        name: childItem.key,
                        year: childItem.val().year,
                        vitorias: childItem.val().vitorias,
                    });
                });
                list.sort(ordenarPorVitorias);
                setListFire(list);
            })
        } catch (error) {
            alert(error);
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 20 }} >
                <Text style={styles.text}>Ranking</Text>
            </View>
            <FlatList style={styles.viewFlat} data={listFire}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) =>
                    <View style={styles.iconFlat}>
                        <Text style={styles.text}>Nome: {item.name} </Text>
                        <Text style={styles.text}> Idade: {item.year}</Text>
                        <Text style={styles.text}> Vitorias: {item.vitorias}</Text>
                    </View>
                } />
            <TouchableOpacity style={styles.btnVoltar} onPress={() => { index() }}>
                <Text style={styles.textBt}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008080',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnVoltar: {
        backgroundColor: "#2F4F4F",
        color: '#fff',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#483D8B',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    textBt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconFlat: {
        flexDirection: 'row',
        width: 350,
        height: 50,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderWidth: 4,

    },
    viewFlat: {
        marginTop: 5,
        maxHeight: 410,
    }
});