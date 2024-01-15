// Para crear el tsconfig.json usamos tcs -init 
let mensaje: string = 'Hola Mundo'

mensaje = 'blastois contento'

mensaje = 'chao mundo cruel'

console.log(mensaje)

console.log(typeof [])

/* Tipos de JS
    number
    string
    boolean
    null
    undefined
    object
    function
*/

/* Tipos de TS
    any
    unkonwn
    never
    arrays
    tuplas
    Enums
    tipos inferidos
*/

let extincionDinosarios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos = true //Tipo inferido, al inicializar TS se va a inferir el tipo, pero si no lo infieres sera any

function chanchitoFeliz(config: any){
    return config
}

let animales: string[] = ['perrito', 'gato', 'conejo']  //un array de strings
let nums: number [] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

// nums.map(x => x.)

let tupla: [number, string] = [1, 'chanchito feliz'] // Su primer valor es number, su segundo valor es string

let tupla2: [number, string[]] = [1, ['hola', 'crayola']] // Su primer valor es number, su segundo valor es array de strings

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Grande
console.log(variable1)


const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success

type Direccion = {
        numero: number,
        calle: string,
        pais: string
}

type Persona =  { 
    readonly id: number, 
    nombre?: string,
    talla: Talla
    direccion?: Direccion
} 

const Blas: Persona = { 
    id: 1, 
    nombre: 'Blas Nunez', 
    talla: Talla.Chica
}

const arr: Persona [] = [Blas]
console.log(arr)
// objeto.id = 42 // Cnnot assign to 'id' because it is a read-only property