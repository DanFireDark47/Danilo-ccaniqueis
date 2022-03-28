import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../firebase';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function Update({ navigation }) {
    const [name, setName] = useState(null);
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [n3, setN3] = useState(null);
    const [ganhouperdeu, setGanhouPerdeu] = useState(null);
    const [countVit, setCountVit] = useState(0);
    const [alerta, setAlerta] = useState(false);

    function showAlerta() {
        setAlerta(true)
    }

    function hideAlerta() {
        setAlerta(false)
    }

    function ranking() {
        navigation.navigate("Ranking", {
        });
    }

    function contavit() {
        try {
            firebase.database().ref('/cacanickeis/' + name).on('value', (snapshot) => {
                if (snapshot.val() != null) {
                    setCountVit(snapshot.val().vitorias)
                } else {
                    setCountVit(0);
                }
            })
        } catch (error) {
            alert(error)
        }
    }

    function verificaVitoria() {
        try {
            firebase.database().ref('/cacanickeis/' + name).once('value', (snapshot) => {

                if (snapshot.val() == null) {
                    gravaVitoria(1)
                } else {
                    var vit = 0;
                    vit = snapshot.val().vitorias
                    vit += 1;
                    gravaVitoria(vit);
                }
            })
        } catch (error) {
            alert(error)
        }
    }

    function gravaVitoria(vitorias) {
        try {
            firebase.database().ref('/cacanickeis/' + name).update({
                vitorias: vitorias
            })
        } catch (error) {
            alert(error);
        }
    }

    function jogar() {
        if (!name) {
            showAlerta();
        } else {
            var n1 = Math.floor(Math.random() * 3 + 1)
            var n2 = Math.floor(Math.random() * 3 + 1)
            var n3 = Math.floor(Math.random() * 3 + 1)
            var ganhouperdeu = "";
            if (n1 === n2 && n2 === n3) {
                verificaVitoria();
                ganhouperdeu = "Ganhou";
            } else {
                ganhouperdeu = "Perdeu";
            }
            setN1(n1);
            setN2(n2);
            setN3(n3);
            setGanhouPerdeu(ganhouperdeu);
            contavit();
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>JOGO CAÇA NÍQUEIS</Text>
                <TextInput placeholder='Nome' style={styles.textInput} onChangeText={name => setName(name)} value={name} />
            </View>
            <View style={styles.viewLinha}>
                <Text style={styles.textSorteado}>{n1}</Text>
                <Text style={styles.textSorteado}>{n2}</Text>
                <Text style={styles.textSorteado}>{n3}</Text>
            </View>
            <TouchableOpacity style={styles.btnEnviar} onPress={() => { jogar() }}>
                <Text style={styles.textBt}>Jogar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnEnviar} onPress={() => { ranking() }}>
                <Text style={styles.textBt}>Ranking</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{ganhouperdeu}</Text>
            <Text style={styles.text}>{"Vitórias: " + countVit}</Text>
            <AwesomeAlert
                show={alerta}
                showProgress={false}
                title="Campo Obrigatório"
                message="Digite o Nome para Jogar"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                //showCancelButton={true}
                showConfirmButton={true}
                //cancelText="No, cancel"
                confirmText="OK"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    hideAlerta();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        backgroundColor: '#4682B4',
        alignItems: 'center',
    },
    viewLinha: {
        marginTop: 15,
        flexDirection: 'row',
    },
    textSorteado: {
        width: 80,
        height: 80,
        margin: 5,
        marginTop: 5,
        backgroundColor: '#fff',
        marginTop: 5,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 40,
        textAlignVertical: 'center',
        //para alinhar no IOS
        overflow: 'hidden',
        lineHeight: 75,
    },

    textBt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    },
    text: {
        margin: 5,
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    btnEnviar: {
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
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 5,
        fontSize: 36,
    },
});