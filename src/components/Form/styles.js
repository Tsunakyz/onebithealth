import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        bottom: 0,
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 10,
        padding: 10
    },
    formLabel: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20
    },
    input: {
        width: '90%',
        borderRadius: 20,
        backgroundColor: '#F6F6F6',
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    button: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#39A275',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    textButton: {
        fontSize: 20,
        color: '#fff'
    },
    errorMessage: {
        fontSize: 12,
        color: '#a00',
        fontWeight: 'bold',
        paddingLeft: 20
    },
    exibitionResult: {
        width: '100%',
        height: '35%'
    },
    listImcs: {
        marginVertical: 30
    },
    resultImcItem: {
        fontSize: 26,
        color: "green",
        height: 50,
        width: '100%',
        paddingRight: 20
    },
    textResultItemList: {
        fontSize: 16,
        color: "green",
    }
})

export default styles