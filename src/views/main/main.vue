<template>
<div>
  <v-layout row wrap>
    <v-flex>
    <v-tabs right v-model="active" color="cyan" dark slider-color="yellow">
      <v-tab v-for="n in tabmenu" :key="n.id" ripple> {{ n.name }} </v-tab>
      <v-tab-item v-for="n in tabmenu" :key="n.id" > 
          <component :is="n.name"></component>
      </v-tab-item>
    </v-tabs>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import Cookies from 'js-cookie';
import admin from '@/views/app/admin/main';
import Menu1 from '@/views/app/menu1';
import Menu2 from '@/views/app/menu2';
import Menu3 from '@/views/app/menu3';

import {ProfileService} from '@/service/profiles';
  const profileservice  = new ProfileService();

import {AppService} from '@/service/app';
  const appservice = new AppService();

export default {
  data: () => ({
    color: 'hsl(100, 80%, 73%)',
    tabs: null,
    active: null,
    tabmenu: [],
      me: window.ME
  }),
  mounted() {
    if (!this.me) {
      this.getME();
    } else {
      appservice.getMenu(this.me.role)
        .then (resp => {
          this.tabmenu = resp.data;
          // console.log(res.data);
        })
      }
    },
    created() {},
    methods: {
      getME() {
        profileservice.me()
          .then(res => {
            this.me = res.data[0];
            window.ME = this.me;
            appservice.getMenu(this.me.role)
              .then(resp => {
                this.tabmenu = resp.data;
            })
        })
      }
    },
    watch: {
    },
    components: {
      Menu1,
      Menu2,
      Menu3
    },
  };
</script>

