// function Saludo{} -> componente pero lo vamos a crear como funcion flecha


// const crearSaludo = () => {
//     return "Hola desde la funcion!"
// }
// 

const Saludo = (props) => {
// props.nombre = sin destructuring
//nombre = destructuring de nombre
const { nombre } = props
    return <h1> Hola {nombre} </h1>
} 
export { Saludo }