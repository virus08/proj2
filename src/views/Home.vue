<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      clipped
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{appseting.appname}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="left"
      temporary
      fixed
    ></v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="right"
      right
      temporary
      fixed
    ></v-navigation-drawer>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Fuangmali</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019-2010</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Dashboard from 'dirk';
// import color from '@/app/panel/color'
import Cookies from 'js-cookie';
import {AppService} from '../service/app';

const appservice = new AppService();

export default {
  data: () => ({
    accessToken: Cookies.get('accessToken') || null,
    appseting: {
      appname: appservice.Appname(),
    },
    drawer: false,
    drawerRight: false,
    right: false,
    left: false
  }),
    props: {
      source: String
    },
    created() {
      if (this.accessToken) {
        appservice.appSeting().then( res => {
          // console.log(res.data[0]);
          this.appseting = res.data[0];
        });
      } else {
        this.$router.push({ path: this.redirect || '/' })
      }
    },
  }
</script>