import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home/Home.vue";
import Journal from "../components/Journal/Journal.vue";
import Notes from "../components/Notes/Notes.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/journal",
      name: "journal",
      component: Journal
    },
    {
      path: "/notes",
      name: "notes",
      component: Notes
    }
  ]
});
