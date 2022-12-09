<template>
  <div>
    <v-container>
      <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-10">
        EQUIPO DESARROLLADOR:  MEJÍA MARTÍNEZ, REINA MARIBEL MM01136283, HENRÍQUEZ DE LA CRUZ, LUZ CLARITA HD01136353, SANTOS FELIX FLORES FUENTES FF01134621, VENTURA CHICAS SERGIO ADONAY VC01136190

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Nuevas tendencias</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Home",
  data: () => ({
    tareas: [],
    items: [
          {
            src: 'https://casesa.es/wp-content/uploads/2021/12/img_2baada929681cb067161d93978a66949.jpg',
          },
          {
            src: 'https://www.diariosigloxxi.com/multimedia/images/img_253c804bac651a58815af53d0d09dde4.jpg',
          },
          {
            src: 'https://img77.uenicdn.com/image/upload/v1569550099/service_images/shutterstock_1005788164.jpg',
          },
          {
            src: 'http://www.visionsystems.com.mx/img/bg_dispositivos.jpg',
          },
        ],
        icons: [
        'mdi-account-hard-hat',
        'mdi-account-group',
        'mdi-account-check',
        'mdi-account-school',
      ],
  }),
  methods: {
  },
  components: {

  },
  computed:{
  },
  created() {
  },
  mounted(){

  },
};
</script>
