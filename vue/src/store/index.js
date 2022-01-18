// Import Vue, Vuex and Axios.
import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex)

// Set the Base URL and Set the pages URL
const baseURL = "http://localhost:3000";
const pagesURL = `${baseURL}/pages`;

// Create Store module object for the application
export default new Vuex.Store({
    strict: true, //enable strict mode
    // State object that contains array of pages
    state: {
        pages: []
    },
    getters: {
        pageById: (state) => (id) => state.pages.find((page) => page._id === id)
    },
    // Mutations that sets states of all the pages (Each mutation has a string type and a handler. It is like an event)
    mutations: {
        setPages(state, pages) {
            state.pages = pages
        }
    },
    // Actions that gets the pages from DB and adds them to the State array. (actions commit mutations and can contain async ops)
    actions: {
        async setPagesAction(context) {
            context.commit("setPages", (await Axios.get(pagesURL)).data);
        },
        //Create an action – addPage passing context and page. Post the pages to Mongodb. Display the new Pages UI by committing to setPages.
        async addPage(context, page) {
            await Axios.post(pagesURL, page);
            context.commit("setPages", (await Axios.get(pagesURL)).data);
        },

        async editPage(context, page) {
            await Axios.put(`${pagesURL}/${page._id}`, page);
            context.commit("setPages", (await Axios.get(pagesURL)).data);
        },

        async deletePage(context, page) {
            await Axios.delete(`${pagesURL}/${page._id}`, page);
            context.commit("setPages", (await Axios.get(pagesURL)).data);
        }
    }
});




