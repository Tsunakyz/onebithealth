import React from 'react'
import { Text, View, TouchableOpacity, Share } from 'react-native'
import If from '../../If'
import styles from './styles'

const ResultImc = ({value, message}) => {

    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC hoje é: ${value}`
        })
    }

    return (
        <View style={styles.result}>
            <View style={styles.boxShareButton}>
                {value ?
                    <TouchableOpacity style={styles.share} onPress={onShare}>
                        <Text style={styles.shareText}>Share</Text>
                    </TouchableOpacity> : false
                }
            </View>
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