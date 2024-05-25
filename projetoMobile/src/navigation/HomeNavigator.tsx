import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "../Telas/TelaLogin";
import TelaCadUsuario from "../Telas/TelaCadUsuario";
import TelaPrincipal from "../Telas/TelaPrincipal";
import TelaCadNotas from "../Telas/TelaCadNotas";
import TelaConNotas from "../Telas/TelaConNotas";

type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
    TelaCadNotas: undefined;
    TelaConNotas: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaLogin" component={TelaLogin} />
            <Stack.Screen name="TelaCadUsuario" component={TelaCadUsuario} />
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
            <Stack.Screen name="TelaCadNotas" component={TelaCadNotas} />
            <Stack.Screen name="TelaConNotas" component={TelaConNotas} />
        </Stack.Navigator>
    );
}

type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'TelaCadUsuario'>;

type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;

type CadNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaCadNotas'>;

type ConNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaConNotas'>;

export default HomeNavigator;
export type { LoginProps, CadUsuarioProps, PrincipalProps, CadNotasProps, ConNotasProps };