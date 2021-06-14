<template>
    <div id='navbar'>
        <nav>
            <div class='nav-wrapper green'>
                <div class='container'>
                    <ul>
                        <li>
                            <router-link  to='/' class='btn-floating btn-large red'>
                                <i class='fa fa-home'></i>
                            </router-link>
                        </li>
                            <li><router-link to='/Login'>Login</router-link></li>
                            <li><router-link to='/Register'>Registrazione</router-link>
                        </li>
                    </ul>
                    <button id='log' v-on:click="logout" class='btn-floating btn-large black' ><i class="fa fa-sign-out"></i></button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
       name: 'navbar',
       data(){
           return {
               isLoggedIn: false,
               currentUser: false
           }
       },
       methods: {
           logout: function(){
               firebase.auth().signOut().then(() => {
                   this.$router.push('/Login')
               });
           }
       }
    }
</script>

<style>
    #log{ 
        left : 450px;
    }
</style>