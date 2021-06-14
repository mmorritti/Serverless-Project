import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import NewProduct from '@/components/NewProduct'
import EditProduct from '@/components/EditProduct'
import NavBar from '@/components/NavBar'
import ViewProduct from '@/components/ViewProduct'
import Review from '@/components/Review'
import ViewReview from '@/components/ViewReview'
import NewReview from '@/components/NewReview'
import Login from '@/components/Login'
import Register from '@/components/Register'
import firebase from 'firebase'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/NewProduct',
      name: 'NewProduct',
      component: NewProduct,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/EditProduct/:Product_Id',
      name: 'EditProduct',
      component: EditProduct,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ViewProduct/:Product_Id',
      name: 'ViewProduct',
      component: ViewProduct,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Review',
      name: 'Review',
      component:  Review,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ViewReview/:Review_Id',
      name: 'ViewReview',
      component: ViewReview,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/NewReview',
      name: 'NewReview',
      component: NewReview,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  }else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser){
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
       next();
    }
  }else {
    next();
  }
})

export default router
