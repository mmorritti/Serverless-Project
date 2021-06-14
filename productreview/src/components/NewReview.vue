<template>
    <div id='NewReview'>
        <h3>Nuova Recensione</h3>
        <div class='row'>
        
             <form @submit.prevent="saveProduct" class="col s12">
                <div class= 'row'>
                    <div class='input-fiel col s4'>
                        <input type='text' v-model="review_Id" Required>
                            <label>NUMERO RECENSIONE</label>
                        </input>
                    </div>
                     <div class='input-fiel col s4'>
                        <input type='text' v-model="product" Required>
                            <label>PRODOTTO</label>
                        </input>
                    </div>
                     <div class='input-fiel col s4'>
                        <input type='text' v-model="user" Required>
                            <label>IL TUO NOME</label>
                        </input>
                    </div>
                </div>
                <div class= 'row'>
                    <div class='input-fiel col s6'>
                        <input type='number' v-model="vote" Required>
                            <label>VOTO</label>
                        </input>
                    </div>
                     <div class='input-fiel col s6'>
                        <input type='text' v-model="description"  Required>
                            <label>LA TUA RECENSIONE</label>
                        </input>
                    </div>
                </div>
                <button type="submit" class="btn">SALVA</button>
                <router-link to='../Review' class='btn grey'>ANNULLA</router-link>
            </form>
            
        </div>
    </div>
    
</template>

<script>
   
    import db from './firebaseinit'
    export default {
        name: 'NewReview',
        data (){
            return {
                ReviewID: null,
                Vote: null,
                Description: null,
                User: null,
                Product: null
            }
        },
        methods: {
            saveProduct(){
                db.collection('Review').add({
                    ReviewID: this.review_Id,
                    Vote: this.vote,
                    Description: this.description,
                    User: this.user,
                    Product: this.product
                })
                .then(docRef => this.$router.push('../Review'))
                .cath(error => console.log(err))
            }
        }
    }
</script>