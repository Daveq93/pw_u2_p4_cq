console.log("componente vue")
//Options API
console.log(Vue)

const app = Vue.createApp({
    /*Aqui se van a configurar las opciones (options API)*/
    //opcion 1,
    //opcion 2,
    //.
    //.
    //.
    //option n

    //una de esas opciones es el template
    // template: `
    //<h1> Hola mundo</h1>
    //<p> Desde Vue.js</p>
    //<p>{{1+1}}</p>
    //`
    data() {
        return {
            nombre: 'Dave',
            apellido: 'Quizhpe',
            mensaje: 'Hola mundo 2 desde Vue.JS'
        }
    },

    methods:{
        cambiarNombre(){
       console.log("Boton cambiar nombre");
       this.nombre = 'Cristian'
        },
        cambiarApellido(){
            console.log("Boton cambiar apellido");
            this.apellido = 'Macas'
        }

    }

})

app.mount('#myApp')