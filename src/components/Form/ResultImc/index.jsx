import React from 'react'
import { Text, View } from 'react-native'
import If from '../../If'
import styles from './styles'

const ResultImc = ({value, message}) => {

    return (
        <View style={styles.result}>
            <Text style={styles.information}>{message}</Text>
            <Text style={styles.number}>{value}</Text>
            <Text style={styles.information}>
                <If condition={value && value < 20}>Abaixo do normal</If>
                <If condition={value && value >= 20 && value < 25}>Normal</If>
                <If condition={value && value >= 25 && value < 30}>Obesidade leve</If>
                <If condition={value && value >= 30 && value < 40}>Obesidade moderada</If>
                <If condition={value && value >= 40}>Obesidade mórbida</If>
            </Text>
        </View>
    )
}

export default ResultImc