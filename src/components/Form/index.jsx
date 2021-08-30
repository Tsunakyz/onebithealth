import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native'
import ResultImc from './ResultImc'
import styles from './styles'

const Form = () => {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setMessage] = useState('Preencha o peso e a altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalculator() {
        const result = (weight / (height*height)).toFixed(2)
        setImc(result)
        return result
    }

    async function validation() {
        if (weight != null && height != null) {
            await imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessage(`Seu imc é:`)
            setTextButton(`Calcular novamente`)
            Keyboard.dismiss()
        } else {
            setImc(null)
            setTextButton(`Calcular`)
            setMessage(`Preencha o peso e a altura`)
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex.: 1.75"
                    keyboardType="numeric" />
                <Text style={styles.formLabel}>Peso</Text>
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
        </View>
    )
}

export default Form