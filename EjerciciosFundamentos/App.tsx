import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  //a) Uso de funciones y variales para el usuario con su saludo personalizado
  const username: string="Gabriela";
  
  const saludarUsuario=(nombre:string):string=>{
  return `¡Mucho gusto, ${nombre}!, bienvenid@ seas a mi aplicación jeje :3`;
};
  //b) Usar variable para definir edad con operador ternario
  const edad =19;
  const mensajeedad: string=edad>=18 ? "Es mayor de edad" : "Es menor de edad";
 
  //c) Arreglo de objetos (lista de clases)
  const materias=[
    {id:1,nombre:"Programación Móvil"},
    {id:2,nombre:"Cálculo II"},
    {id:3,nombre:"Gerencia de Recursos Humanos"},
  ];
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.negrilla}>Ejercicio a: funciones y variables</Text>
      <Text style={styles.texto}>{saludarUsuario(username)}</Text>

      <Text style={styles.negrilla}>Ejercicio b: condicionales</Text>
      <Text style={styles.texto}>Edad:{edad} // {mensajeedad}</Text>

      <Text style={styles.negrilla}>Ejercicio c: Lista de materias</Text>
      {materias.map((materia)=>(
        <Text key={materia.id} style={styles.texto} >{materia.nombre}</Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddfedb",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  negrilla: {
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 30
  },
  texto: {
    fontSize: 18,
    marginTop: 5
  },
});