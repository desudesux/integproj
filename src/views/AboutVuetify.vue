<template>
    <v-parallax dark
    src="https://i.postimg.cc/Jnxkk9yv/Green-Orange-Ship-Desktop-Wallpaper.png"
  >
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
    
     img alt="Profile" class="center" src="https://i.postimg.cc/7JVjLmK5/vue.png" width="200" height="200"
    ></v-img>

    <v-card-title>
      Vuetify
    </v-card-title>

    <v-card-subtitle>
        Material Design Framework


    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
      What is Vuetify?
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Vuetify is a complete UI framework built on top of Vue.js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences. Unlike other frameworks, Vuetify is designed from the ground up to be easy to learn and rewarding to master with hundreds of carefully crafted components from the Material Design specification.
        </v-card-text>
        <v-card-text>
Vuetify takes a mobile first approach to design which means your application just works out of the box—whether it’s on a phone, tablet, or desktop computer.
          </v-card-text>
        <v-card-text>
If you are an experienced developer and want to compare Vuetify to other libraries/frameworks, check out our Vue Framework Comparison Chart.
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
      Why Vuetify?
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            Since its initial release in 2014, Vue.js has grown to be one of the most popular JavaScript frameworks in the world. One of the reasons for this popularity is the wide use of components which enable developers to create concise modules to be used and re-used throughout their application. UI Libraries are collections of these modules that implement a specific style guideline and provide the necessary tools to build expansive web applications.
        </v-card-text>
      </div>
    </v-expand-transition>


    
    
    
    
  </v-card>
  
</v-parallax>
    </template>
    <style scoped>
    
    .vrow {
         justify-content: center;
         margin-right: 50%;
         
         height: 100%;
         width: 100%;
         font-size: 15px;
         font-weight: 600;
         
    }
    .ma-15{
         background-color: #FFFFD1;
    }
    .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      height: 100%;
    }
    </style>
    <script>
        export default {
          data: () => ({
            show: false,
          }),
        }
      </script>
    
    
    
    