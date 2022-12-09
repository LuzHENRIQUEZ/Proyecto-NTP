<template>
  <v-btn color="success" @click="$emit('agregar')">{{nameBoton}}</v-btn>
</template>
<script>
export default {
    props:{
        nameBoton:{
            type:String
        }
    }
}
</script>