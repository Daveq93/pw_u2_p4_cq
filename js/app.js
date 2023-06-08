console.log("componente vue")
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
template:`
<h1> Hola mundo</h1>
<p> Desde Vue.js</p>
`


})

app.mount('#myApp')