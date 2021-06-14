<template>
    <div id='EditProduct'>
        <h3>Modifica Prodotto</h3>
        <div class='row'>
        
             <form @submit.prevent="updateProduct" class="col s12">
                <div class= 'row'>
                    <div class='input-fiel col s6'>
                        <input disabled type='text' v-model="Product_Id"  Required>
                            <label>ID PRODOTTO</label>
                        </input>
                    </div>
                     <div class='input-fiel col s6'>
                        <input type='text' v-model="Name" Required>
                            <label>NOME PRODOTTO</label>
                        </input>
                    </div>
                </div>
                <div class= 'row'>
                    <div class='input-fiel col s6'>
                        <input type='text' v-model="Description" Required>
                            <label>DESCRIZIONE</label>
                        </input>
                    </div>
                     <div class='input-fiel col s6'>
                        <input type='number' v-model="Price"  Required>
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
        name: 'EditProduct',
        data () {
            return {
                productID: null,
                Name: null,
                Description: null,
                Price: null  
            }
        },
          beforeRouteEnter(to,from,next) {
            db.collection('Products').where('productID','==', to.params.Product_Id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        next(vm => {
                            vm.Product_Id = doc.data().productID
                            vm.Name = doc.data().Name
                            vm.Description = doc.data().Description
                            vm.Price = doc.data().Price
                        })
                    })
                })
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData(){
                db.collection('Products').where('productID','==', this.$route.params.Product_Id).get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            this.product_Id = doc.data().productID
                            this.name = doc.data().Name
                            this.description = doc.data().Description
                            this.price = doc.data().Price
                        })
                    })
            },
            updateProduct(){
                db.collection('Products').where('productID','==', this.$route.params.Product_Id).get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            doc.ref.update({
                                productID: this.Product_Id,
                                Name: this.Name,
                                Description: this.Description,
                                Price: this.Price
                            })
                            .then(() => {
                                this.$router.push({ name: 'ViewProduct', params: { Product_Id: this.Product_Id }})
                            })
                        })
                    })
            }
        }
    }
</script>