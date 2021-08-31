import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, Keyboard, Vibration, Pressable } from 'react-native'
import ResultImc from './ResultImc'
import styles from './styles'

const Form = () => {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setMessage] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {
        const heightFormat = height.replace(',', '.')
        const weightFormat = weight.replace(',', '.')

        const result = (weightFormat / (heightFormat*heightFormat)).toFixed(2)
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
        <Pressable style={styles.formContext} onPress={() => Keyboard.dismiss()}>
            <View style={styles.form}>
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
            </View>
            <ResultImc message={message} value={imc} />
        </Pressable>
    )
}

export default Form