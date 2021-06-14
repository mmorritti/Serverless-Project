<template>
    <div>
        <div class="container">
            <div class="row">
            <div class="col s12 m8 offset-m2">
                <div class="login card-panel grey lighten-4 black-text center">
                    <h3>Registrazione</h3>
                    <form action="index.html">
                        <div class="input-field">
                        <input type="email" id="email" v-model="email">
                        <label class="black-text" for="email">Email Address</label>
                        </div>
                        <div class="input-field">
                        <input type="password" id="password" v-model="password">
                        <label class="black-text" for="password">Password</label>
                        </div>
                        <button v-on:click="register" class="btn btn-large btn-extended grey lighten-4 black-text">Registrati</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: 'register',
        data: function(){
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            register: function(e){
                firebase.auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .then(user => {
                        alert('Registrazione effettuata con successo');
                        this.$router.push('/Login');
                    },
                    err => {
                        alert(err.message)
                    });
                e.preventDefault();
            }
        }
    }

</script>