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
  // import Color from '@/views/app/panel/color';
  // import Empty from '@/views/app/panel/emp';
  // import Dashboard from '@/views/app/panel/das';
  import Menu1 from '@/views/app/menu1';
  import Menu2 from '@/views/app/menu2';
  import Menu3 from '@/views/app/menu3';

  const defaultData = {
    type: 'horizontal',
    size: 1,
    select: 'Menu1',
    children: [
      {
        type: 'panel',
        size: 0.4,
        component: 'color'
      },
    ],
  };
  export default {
    data: () => ({
      color: 'hsl(100, 80%, 73%)',
      tabs: null,
      active: null,
      tabmenu: [
        { id: 1, name: 'Menu1'},
        { id: 2, name: 'Menu2'},
        { id: 3, name: 'Menu3'}
      ],
      dashboardData: defaultData,
    }),
    mounted() {
    },
    methods: {
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

