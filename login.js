import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login ( props ){

    const { navigation } = props;

    const gotoRegister = () => {
        navigation.navigate("Registro");
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstSecction}>
                <Image
                    source={{
                        uri:'https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg',
                    }}
                    style = {{ width: "100%", height: "120%", resizeMode: "cover"}}
                />
                <View 
                    style = {{ 
                        position: "absolute" ,}}>
                    <Text style = { styles.title}>Trevelo</Text>
                </View>
            </View>

            <View style={styles.secondSecction}>

            <View>
            <View style= {styles.spacing}>
                <Text style= {styles.label}>Email address</Text>
                    <TextInput 
                        style = {styles.TextInput}
                        underlineColorAndroid="#c34568"
                        placeholder="ejemplo@ejemplo.com"
                        keyboardType="email-address"
                        returnKeyType='next'>
                    </TextInput>
            </View>
            <View style= {styles.spacing}>
                <Text style= {styles.label}>password</Text>
                    <TextInput 
                    underlineColorAndroid="#c34568"
                    placeholder="*********" style = {styles.TextInput}
                    secureTextEntry={true}>
                </TextInput>
            </View>

            <View style= {styles.spacing}>
                 <Text style= {styles.fotgotpassword}>forgot password</Text>
            </View>            

            <View style= {styles.spacing}>
                <TouchableOpacity style = {styles.button}>
                    <Text style= {styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            </View>
            

            <View style= {[styles.spacing, styles.raw]}>
                <Text style= {styles.label}>Don't have an account?</Text>
                <TouchableOpacity onPress={gotoRegister}>
                    <Text style= {styles.signup}>Sign Up</Text>
                </TouchableOpacity>
            </View>


            </View>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstSecction: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        width: "100%"
    },
    secondSecction: {
        flex: 2,
        backgroundColor: 'white',
        width: "100%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 48,
        color: 'white'
    },
    label: {
        color: '#ccc'
    },
    TextInput: {
        color: '#000',
        padding: 8,
    },
    fotgotpassword: {
        color: 'black',
        textAlign: 'right'
    },
    button: {
        backgroundColor: '#c34568',
        padding: 15,
        borderRadius: 30,
        alignItems: "center"
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    spacing: {
        marginTop: 30
    },
    raw: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    signup: {
        color: '#c34568',
        paddingLeft: 5
    }

})