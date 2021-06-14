<template>
    <div id='Review'>
        <ul class='collection with-header'>
            <li class='collection-header'><h3>Recensioni</h3></li>
            <li v-for = 'review in reviews' v-bind:key='review.id' class='collection-item'>
                {{review.product}} -- Voto: {{review.vote}} -- {{review.user}}
                <router-link class="secondary-content" v-bind:to="{ name: 'ViewReview', params: { Review_Id: review.reviewId}}">
                    <i class='fa fa-eye'> Dettagli</i> 
                </router-link> 
            </li>
        </ul>
        <router-link to='/' class='btn grey'>Indietro</router-link>
        <div class='fixed-action-btn'>
            <router-link to='./NewReview' class='btn-floating btn-large red'>
                <i class='fa fa-plus'></i>
            </router-link>
        </div>
    </div>
</template>

<script>
    import db from './firebaseinit'
    export default {
        name: 'reviews',
        data () {
            return {
                reviews: []
            }
        },
        created () {
            db.collection('Review').get().then
                (querySnapshot => {
                    querySnapshot.forEach(doc => {
                        console.log(doc.data());
                        const data = {
                            'id' : doc.id,
                            'reviewId' : doc.data().ReviewID,
                            'product' : doc.data().Product,
                            'description' : doc.data().Description,
                            'vote' : doc.data().Vote,
                            'user' : doc.data().User
                        }
                        this.reviews.push(data)
                    })
            })
        }
    }
</script>