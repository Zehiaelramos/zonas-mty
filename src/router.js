/* eslint-disable */

import { createRouter, createWebHistory } from 'vue-router'

import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Maps from "./views/Maps.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      reload: true,
    }
  },
  {
    path: "/maps",
    name: "maps",
    component: Maps
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
