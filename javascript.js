const app = new Vue({
el: '#app',
data: {
 
    titulo: 'Lista de tareas',
    tareas: [
        {nombre: 'Ir al Iupermercado' },
        {nombre: 'pagar Internet' , },
        {nombre: 'pagar Netflix' ,},
     
    ],
    nuevatarea: ''

},
methods: {
    agregartarea () {
        this.tareas.push({
nombre: this.nuevatarea,
        })

    }
}

})