let estudiantes = [
    { nombre: 'david', apellido: 'q' },
    { nombre: 'Ros', apellido: 'p' },
    { nombre: 'Ange', apellido: 'df' },
    { nombre: 'Jess', apellido: 'lw' },
    { nombre: 'Lili', apellido: 'Males' },
    { nombre: 'Juan', apellido: 'Perez' },
    { nombre: 'Pepito', apellido: 'de los palotes' },
    { nombre: 'Roger', apellido: 'Sera' },
    { nombre: 'Mario', apellido: 'Moreno' },
    { nombre: 'Dayana', apellido: 'Cazas' }

];

console.log(estudiantes)

const app = Vue.createApp({
    data() {
        return {
            arreglo: estudiantes,
            nombre: ''
        };
    },
    methods: {
        agregarEstudiante(event) {
            console.log('Vamos a agregar');
            console.log(this.nombre);
            console.log(event)
            console.log(event.charCode)
            if (event.charCode == 13) {
                console.log('Presiono enter')
                const nuevoEstu = {
                    nombre: this.nombre,
                    
                }
                this.arreglo.unshift(nuevoEstu);
            } else {
                console.log('No es enter')
            }
        },
        agregarEstudiante2(event) {
            console.log('Vamos a agregar');
            
            const nuevoEstu = {
                nombre: this.nombre,
                
            }
            this.arreglo.unshift(nuevoEstu);
            
        }
    }

})

app.mount('#myApp2')