<template>
    <div class="container">
        <router-link to="/crear" class="btn btn-success">Agregar nuevo empleado</router-link>
        <br><br>
        <div class="card">
            <div class="card-header text-center">
                Empleados
            </div>
            <div class="card-body">
                <!-- Mostramos con una tabla  -->
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- El tr tendrá la informacion  -->
                        <tr v-for="empleado in empleados" :key="empleado.id">
                            <!-- imprimimos  -->
                            <td>{{empleado.id}}</td>
                            <td>{{empleado.nombre}}</td>
                            <td>{{empleado.correo}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <!-- Redireccionamos a Editar y enviamos el parámetro id que viene de empleado  -->
                                    <router-link :to="{name:'Editar',params:{id:empleado.id}}" class="btn btn-info">Editar</router-link>
                                    <!-- cuando el usuario haga click va a recuperar los datos, en este caso el id del empleado para que permita hacer el borrado  -->
                                    <button type="button" v-on:click="borrarEmpleado(empleado.id)" class="btn btn-warning">Borrar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

    data(){
        // Vamos a retornar el arreglo de empleados para poder mostrarlos
        return{
            empleados:[]
        }
    },
    created:function(){
        // Crear los registros para acceder a los datos del método
        this.consultarEmpleados(); 

    },
    // Creamos un método que nos permita acceder a los datos que están en la url API
    methods:{
        // Metemos la consulta a la BD
        consultarEmpleados(){
            // url donde obtenemos la información
            fetch('http://localhost/empleados/')
            .then(respuesta=>respuesta.json()) 
            //La forma en la que vamos a desplegar esa información al navegador, creamos una variable que va a almacenar todo lo que va a regresar
            .then((datosRespuesta)=>{
                // Esos datos que van a llegar los arrojamos a la consola 
                console.log(datosRespuesta)
                
                this.empleados=[]
                // el typeof para validar, el cero para acceder a la respuesta
                // el success es propio del documento php y ese documento es undefined, 
                // almacenamos la información
                if(typeof datosRespuesta[0].success==='undefined'){
                    this.empleados=datosRespuesta;
                }
            })
            .catch(console.log) //En caso de que falle se muestre el error
        },
        // Método borrar empleado 
        // Recibimos el id que se está enviando a través del botón borrar 
        borrarEmpleado(id){
            console.log(id); 
            fetch('http://localhost/empleados/?borrar='+id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                //Agregamos un redirección que nos va a permitir refrescar los registros que veiamos antes
                window.location.href="listar"
            })
            .catch(console.log) 
        }           
    }
}
</script>