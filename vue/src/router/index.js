// Create a folder “router” in src folder. Have an index.js file. Copy the contents of store  index.js.
// Import Vue, Vuex and Axios.
import Vue from "vue";
// Change vuex to vue-router. Remove axios. Import Pages Component.

import VueRouter from "vue-router";
import Pages from "../components/Pages";
import Home from "../components/Home";
import Report from "../components/Report";

// Load the router to the app.
Vue.use(VueRouter)

// Create and export the vueRouter by defining mode and routes array.
export default new VueRouter({
    mode: "history",

    routes: [
        { path: "/home", component: Home },
        { path: "/report", component: Report },
        { path: "/:slug", component: Pages }
    ]
});






