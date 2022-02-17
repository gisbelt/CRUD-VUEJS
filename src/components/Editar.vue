<template>
    <div class="container">
        <div class="card">
            <div class="card-header text-center">
                Editar Empleado
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="actualizarRegistro">
                    <div class="mb-3">
                      <label for="nombre" class="form-label">Nombre: </label>
                      <input type="text"
                        required class="form-control" v-model="empleado.nombre" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre">
                      <small id="helpId" class="form-text text-muted">Escribe el nombre del empleado</small>
                    </div>
                    <div class="mb-3">
                      <label for="correo" class="form-label">Correo: </label>
                      <input type="email"
                        required class="form-control" v-model="empleado.correo" name="correo" id="correo" aria-describedby="helpId" placeholder="Correo">
                      <small id="helpId" class="form-text text-muted">Escribe el correo del empleado</small>
                    </div>

                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Modificar</button>
                        <!-- Redireccionamos a listar  -->
                        <router-link :to="{name:'Listar'}" class="btn btn-danger">Cancelar</router-link>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            // Vamos a utilizar empleado 
            empleado:{}
        }
    },
    created:function(){
        // Consultar apenas se entre a esta interfaz 
        this.obtenerInformacionPorID();

    },
    // Creamos un método que nos permita acceder a los datos que están en la url API
    methods:{
        // Metemos la consulta a la BD
        obtenerInformacionPorID(){
            // url donde recepcionamos el id que enviamos desde listar
            fetch('http://localhost/empleados/?consultar='+this.$route.params.id)
            .then(respuesta=>respuesta.json()) 
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.empleado=datosRespuesta[0]; //cotejamos el dato
            })
            .catch(console.log) //En caso de que falle se muestre el error
        },
        actualizarRegistro(){
            // Vamos a juntar los datos en una variable para enviarlos a la API
            var datosEnviar={id:this.$route.params.id,nombre:this.empleado.nombre, correo:this.empleado.correo}
            // Vamos a recibir el id "this.$route.params.id" mediante la url
            fetch('http://localhost/empleados/?actualizar='+this.$route.params.id,{
                method:"POST", 
                body:JSON.stringify(datosEnviar)
            }) 
            .then(respuesta=>respuesta.json()) 
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='../listar' //Baja un nivel el url por el id que ya está en la misma: http://localhost:8080/editar/67
            }))
        }
    }
}
</script>