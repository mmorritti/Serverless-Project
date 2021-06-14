<template>
    <div id='Home'>
        <h3>BENVENUTO!</h3>
        <div class='form-row'>
            
             <div class='form-group col-md-4'>
                <router-link to='./Product' class='btn btn-primary'>Prodotti</router-link>
            </div>
            <br>
             <div class='form-group col-md-4'>
                <router-link to='./Review' class='btn btn-primary'>Recensioni</router-link>
            </div>
           
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data (){
            return {

            }
        }
    }
</script>