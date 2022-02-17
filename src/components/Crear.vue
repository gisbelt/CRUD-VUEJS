<template>
    <div class="container">
        <div class="card">
            <div class="card-header text-center">
                Agregar nuevo Empleado
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="agregarRegistro">
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
                        <button type="submit" class="btn btn-success">Agregar</button>
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
    methods:{
        agregarRegistro(){
            // this.empleado ya tiene los datos (los del v-model del input)
            console.log(this.empleado);

            // Vamos a juntar los datos en una variable para enviarlos a la API
            var datosEnviar={nombre:this.empleado.nombre, correo:this.empleado.correo}
            //insertar=1 es el que va a enviarse al codigo php
            fetch('http://localhost/empleados/?insertar=1',{
                method:"POST", //Enviamos info a través del método post
                // Estamos convirtiendo el string que está en datosEnviar para que se envien a la url
                body:JSON.stringify(datosEnviar)
            }) 
            .then(respuesta=>respuesta.json()) //Para que los datos sean recepcionados necesitamos indicar tambien vamos a usar json
            .then((datosRespuesta=>{
                // Vamos a recibir esos datos de respuesta, los vamos a imprimir para mostrar qué está viniendo en esa insercion 
                console.log(datosRespuesta);
                window.location.href='listar'
            })) 
        }
    }
    
}
</script>