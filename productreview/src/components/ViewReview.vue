<template>
    <div id='ViewReview'>
        <ul class='collection with-header'>
            
            <li class='collection-header'><h4>Recensione N° {{Review_Id}}</h4></li>
            <li class='collection-header'><h5>Prodotto: {{Product}}</h5></li>
            <li class='collection-header'><h5>Voto: {{Vote}}</h5></li>
            <li class='collection-header'><h5>{{Description}}</h5></li>
            <li class='collection-header'><h5>Lasciata da: {{User}}</h5></li>
        </ul>
        <router-link to='../Review' class='btn grey'>Indietro</router-link>
    </div>
</template>

<script>
    import db from './firebaseinit'
    export default {
        name: 'ViewReview',
        data (){
            return {
                ReviewID: null,
                Vote: null,
                Description: null,
                User: null,
                Product: null
            }
        },
        beforeRouteEnter(to,from,next) {
            db.collection('Review').where('ReviewID','==', to.params.Review_Id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        next(vm => {
                            vm.Review_Id = doc.data().ReviewID
                            vm.User = doc.data().User
                            vm.Description = doc.data().Description
                            vm.Vote= doc.data().Vote
                            vm.Product = doc.data().Product

                        })
                    })
                })
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData(){
                db.collection('Review').where('ReviewID','==', this.$route.params.Review_Id).get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            this.Review_Id = doc.data().ReviewID
                            this.User = doc.data().Name
                            this.Description = doc.data().Description
                            this.Vote = doc.data().Vote
                            this.Product = doc.data().Product
                        })
                    })
            }
        }

    }
</script>