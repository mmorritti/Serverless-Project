<template>
    <div id='Product'>
        <ul class='collection with-header'>
            <li class='collection-header'><h3>Prodotti</h3></li>
            <li v-for = 'product in products' v-bind:key='product.id' class='collection-item'>
                {{product.productId}} -- {{product.name}} -- {{product.description}} -- € {{product.price}}
                <router-link class="secondary-content" v-bind:to="{ name: 'ViewProduct', params: { Product_Id: product.productId}}">
                    <i class='fa fa-eye'> Dettagli</i> 
                </router-link> 
               

               
            </li>
        </ul>
        <router-link to='/' class='btn grey'>Indietro</router-link>
        <div class='fixed-action-btn'>
            <router-link to='./NewProduct' class='btn-floating btn-large red'>
                <i class='fa fa-plus'></i>
            </router-link>
        </div>
    </div>
</template>

<script>
    import db from './firebaseinit'
    export default {
        name: 'products',
        data () {
            return {
                products: []
            }
        },
        created () {
            db.collection('Products').get().then
                (querySnapshot => {
                    querySnapshot.forEach(doc => {
                        console.log(doc.data());
                        const data = {
                            'id' : doc.id,
                            'productId' : doc.data().productID,
                            'name' : doc.data().Name,
                            'description' : doc.data().Description,
                            'price' : doc.data().Price
                        }
                        this.products.push(data)
                    })
            })
        }
    }
</script>