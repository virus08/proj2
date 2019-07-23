<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawerRight" fixed right clipped app>
      <v-layout justify-center>
        <v-flex xs12 >
            <v-img id="profiles"
              :src="dataUrl"
              height="280px"
            ></v-img>   
            <v-list>
              <v-divider inset></v-divider>
              <v-list-tile @click="bank">
                <v-list-tile-action>
                  <v-icon>mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{me.firstname}}&nbsp;{{me.lastname}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset></v-divider>
              <v-list-tile @click="bank">
                <v-list-tile-action>
                  <v-icon>work</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{me.jobtitle}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider inset></v-divider> 
        </v-flex>
      </v-layout>
      <v-list dense>
        <v-list-tile @click.stop="logOut">
          <v-list-tile-action>
            <v-icon>highlight_off</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>LogOut</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>build</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profiles Configure</v-list-tile-title>
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
      <router-view/>
    </v-content>
    <v-navigation-drawer
      v-model="right"
      right
      temporary
      fixed
    ></v-navigation-drawer>
    <v-footer color="blue-grey" class="white--text" app>
      <span>&nbsp;Fuangmali</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019-2010&nbsp;</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Dashboard from 'dirk';
// import color from '@/app/panel/color'
import Cookies from 'js-cookie';
import {AppService} from '../service/app';
import {ProfileService} from '../service/profiles';

const appservice = new AppService();
const profileservice  = new ProfileService();

export default {
  data: () => ({
    accessToken: Cookies.get('accessToken'),
    appseting: {
      appname: appservice.Appname(),
    },
    me: profileservice.xme(),
    drawer: false,
    drawerRight: false,
    right: false,
    left: false
  }),
    props: {
      source: String
    },
    created() {
      // this.$router.push({ path: this.redirect || '/login' })
      if (this.accessToken) {
        appservice.appSeting().then( res => {
          // console.log(res.data[0]);
          this.appseting = res.data[0];
        });
      } else {
        this.$router.push({ path: this.redirect || '/' })
      }
    },
    mounted() {
      profileservice.me().then( res => {
          // console.log(res.data[0]);
          this.me = res.data[0];
        });
    },
    methods: {
      logOut() {
        Cookies.remove('accessToken');
        this.$router.push({ path: this.redirect || '/login' })
      },
      bank() {

      }
    },
    computed: {
      dataUrl() {
        return 'data:image/jpg+xml;base64,' + this.me.picture}
    }
  }
</script>