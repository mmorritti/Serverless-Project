<template>
    <div id='NewProduct'>
        <h3>Nuovo Prodotto</h3>
        <div class='row'>
        
             <form @submit.prevent="saveProduct" class="col s12">
                <div class= 'row'>
                    <div class='input-fiel col s6'>
                        <input type='text' v-model="product_Id" Required>
                            <label>ID PRODOTTO</label>
                        </input>
                    </div>
                     <div class='input-fiel col s6'>
                        <input type='text' v-model="name" Required>
                            <label>NOME PRODOTTO</label>
                        </input>
                    </div>
                </div>
                <div class= 'row'>
                    <div class='input-fiel col s6'>
                        <input type='text' v-model="description" Required>
                            <label>DESCRIZIONE</label>
                        </input>
                    </div>
                     <div class='input-fiel col s6'>
                        <input type='number' v-model="price"  Required>
                            <label>PREZZO</label>
                        </input>
                    </div>
                </div>
                <button type="submit" class="btn">SALVA</button>
                <router-link to='../Product' class='btn grey'>ANNULLA</router-link>
            </form>
            
        </div>
    </div>
</template>

<script>
    import db from './firebaseinit'
    export default {
        name: 'NewProduct',
        data (){
            return {
                productID: null,
                Name: null,
                Description: null,
                Price: null
            }
        },
        methods: {
            saveProduct(){
                db.collection('Products').add({
                    productID: this.product_Id,
                    Name: this.name,
                    Description: this.description,
                    Price: this.price
                })
                .then(docRef => this.$router.push('../Product'))
                .cath(error => console.log(err))
            }
        }
    }
</script>