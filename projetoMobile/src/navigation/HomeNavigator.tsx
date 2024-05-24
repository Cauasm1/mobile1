import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "../Telas/TelaLogin.tsx";
import TelaCadUsuario from "../Telas/TelaCadUsuario.tsx";
import TelaPrincipal from "../Telas/TelaPrincipal.tsx";

type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
    TelaCadNota: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaLogin" component={TelaLogin} />
            <Stack.Screen name="TelaCadUsuario" component={TelaCadUsuario} />
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
            <Stack.Screen name="TelaCadNota" component={TelaCadNota} />
        </Stack.Navigator>
    );
}

type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'TelaCadUsuario'>;

type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;

type CadNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaCadNota'>;

export default HomeNavigator;
export type { LoginProps, CadUsuarioProps, PrincipalProps, CadNotasProps };