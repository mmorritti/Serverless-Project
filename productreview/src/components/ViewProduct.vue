<template>
    <div id='ViewProduct'>
        <ul class='collection with-header'>
            <li class='collection-header'><h4>Prodotto: {{Name}}</h4></li>
            <li class='collection-header'><h5>ID: {{Product_Id}}</h5></li>
            <li class='collection-header'><h5>{{Description}}</h5></li>
            <li class='collection-header'><h5>€ {{Price}}</h5></li>
        </ul>
        <router-link to='../Product' class='btn grey'>Indietro</router-link>
        <button @click="deleteProduct" class='btn red'>Elimina</button>

        <div class='fixed-action-btn'>
            <router-link v-bind:to="{ name: 'EditProduct', params: { Product_Id: Product_Id }}" class="btn-floating btn-large red">
                <i class="fa fa-pencil"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
    import db from './firebaseinit'
    export default {
        name: 'ViewProduct',
        data (){
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
                            this.Product_Id = doc.data().productID
                            this.Name = doc.data().Name
                            this.Description = doc.data().Description
                            this.Price = doc.data().Price
                        })
                    })
            },
            deleteProduct(){
                if(confirm('Sei sicuro?')){
                    db.collection('Products').where('productID','==', this.$route.params.Product_Id).get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                           doc.ref.delete()
                           this.$router.push('../Product')
                           
                        })
                    })
                }
            }

        }

    }
</script>