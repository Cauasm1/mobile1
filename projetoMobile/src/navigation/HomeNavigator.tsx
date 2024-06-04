import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import PrimeiraTela from "../Projeto/PrimeiraTela";
import SegundaTela from "../Projeto/SegundaTela";
import TerceiraTela from "../Projeto/TerceiraTela";

import TelaCadCliente from "../Telas/TelaCadCliente";
import TelaConCliente from "../Telas/TelaConCliente";
import TelaAltCliente from "../Telas/TelaAltCliente";
import TelaCadAtendimento from "../Telas/TelaCadAtendimento";

import TelaLogin from "../Telas/TelaLogin";
import TelaCadUsuario from "../Telas/TelaCadUsuario";
import TelaPrincipal from "../Telas/TelaPrincipal";
import TelaCadNotas from "../Telas/TelaCadNotas";
import TelaConNotas from "../Telas/TelaConNotas";
import TelaAltNota from "../Telas/TelaAltNota";
import TelaMedia from "../Telas/TelaMedia";

type RootStackParamList = {
    PrimeiraTela: undefined;
    SegundaTela: undefined;
    TerceiraTela: undefined;

    TelaCadCliente: undefined;
    TelaConCliente: undefined;
    TelaAltCliente: { id: string };
    TelaCadAtendimento: undefined;

    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
    TelaCadNotas: undefined;
    TelaConNotas: undefined;
    TelaMedia: undefined;
    TelaAltNota: { id: string };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PrimeiraTela" component={PrimeiraTela} />
            <Stack.Screen name="SegundaTela" component={SegundaTela} />
            <Stack.Screen name="TerceiraTela" component={TerceiraTela} />

            <Stack.Screen name="TelaCadCliente" component={TelaCadCliente} />
            <Stack.Screen name="TelaConCliente" component={TelaConCliente} />
            <Stack.Screen name="TelaAltCliente" component={TelaAltCliente} />
            <Stack.Screen name="TelaCadAtendimento" component={TelaCadAtendimento} />

            <Stack.Screen name="TelaLogin" component={TelaLogin} />
            <Stack.Screen name="TelaCadUsuario" component={TelaCadUsuario} />
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
            <Stack.Screen name="TelaCadNotas" component={TelaCadNotas} />
            <Stack.Screen name="TelaConNotas" component={TelaConNotas} />
            <Stack.Screen name="TelaMedia" component={TelaMedia} />
            <Stack.Screen name="TelaAltNota" component={TelaAltNota} />
        </Stack.Navigator>
    );
}

type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'TelaCadUsuario'>;

type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;

type CadNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaCadNotas'>;

type ConNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaConNotas'>;

type MediaProps = NativeStackScreenProps<RootStackParamList, 'TelaMedia'>;

type AltNotaProps = NativeStackScreenProps<RootStackParamList, 'TelaAltNota'>;


type CadClienteProps = NativeStackScreenProps<RootStackParamList, 'TelaCadCliente'>;
type ConClienteProps = NativeStackScreenProps<RootStackParamList, 'TelaConCliente'>;
type AltClienteProps = NativeStackScreenProps<RootStackParamList, 'TelaAltCliente'>;
type CadAtendimentoProps = NativeStackScreenProps<RootStackParamList, 'TelaCadAtendimento'>;


type PrimeiraProps = NativeStackScreenProps<RootStackParamList, 'PrimeiraTela'>;
type SegundaProps = NativeStackScreenProps<RootStackParamList, 'SegundaTela'>;
type TerceiraProps = NativeStackScreenProps<RootStackParamList, 'TerceiraTela'>;

export default HomeNavigator;
export type { LoginProps, CadUsuarioProps, PrincipalProps, CadNotasProps, ConNotasProps, MediaProps, AltNotaProps, PrimeiraProps, SegundaProps, TerceiraProps, CadClienteProps, ConClienteProps, AltClienteProps, CadAtendimentoProps };