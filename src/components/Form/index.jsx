import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, Keyboard, Vibration, Pressable, FlatList } from 'react-native'
import ResultImc from './ResultImc'
import styles from './styles'

const Form = () => {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setMessage] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        const heightFormat = height.replace(',', '.')
        const weightFormat = weight.replace(',', '.')

        const result = (weightFormat / (heightFormat*heightFormat)).toFixed(2)
        setImcList(arr => [...arr, {id: new Date().getTime(), imc: result}])
        setImc(result)
    }

    function verificationImc() {
        if (!imc) {
            setErrorMessage('Campo obrigatório!')
            Vibration.vibrate()
        }
    }

    function validation() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessage(`Seu imc é:`)
            setErrorMessage(null)
            setTextButton(`Calcular novamente`)
        } else {
            verificationImc()
            setImc(null)
            setTextButton(`Calcular`)
            setMessage(`Preencha o peso e a altura`)
            
        }

        Keyboard.dismiss()
    }

    return (
        <View style={styles.formContext}>
            {imc == null ? (
                <Pressable style={styles.form} onPress={() => Keyboard.dismiss()}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex.: 1.75"
                        keyboardType="numeric" />
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex.: 75.310"
                        keyboardType="numeric" />
                    <TouchableOpacity
                        onPress={validation}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            ) : (
                <View style={styles.exibitionResult}>
                    <ResultImc message={message} value={imc} />
                    <TouchableOpacity
                        onPress={validation}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            )}
            <FlatList
                style={styles.listImcs}
                data={imcList}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC: </Text>
                            <Text>{item.imc}</Text>
                        </Text>
                    )
                }}
                keyExtractor={item => `${item.id}`}
            >

            </FlatList>
        </View>
    )
}

export default Form