import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    result: {
        flex:1,
        marginTop: 20,
        paddingTop: 15,
        alignItems: "center",
        width: "100%",
    },
    information: {
        fontSize: 18,
        color: '#39A275',
        fontWeight: 'bold'
    },
    number: {
        fontSize: 48,
        color: '#39A275',
        fontWeight: 'bold'
    },
    boxShareButton: {
        width: "100%",
        alignItems: 'center',
        marginTop: 10
    },
    share: {
        backgroundColor: '#1877f2',
        borderRadius: 50,
        paddingVertical: 5
    },
    shareText: {
        color: '#fff',
        fontWeight: "bold",
        paddingHorizontal: 30
    }
})

export default styles