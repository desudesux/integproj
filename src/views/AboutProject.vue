<template>
    <v-parallax dark
    src="https://i.postimg.cc/Jnxkk9yv/Green-Orange-Ship-Desktop-Wallpaper.png"
  >
    <v-card
    class="mx-auto"
    padding-top
    width="400"
  >
    <v-img
    
    src="https://i.postimg.cc/VSxxZSSk/bgm.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      About The Application
    </v-card-title>

    <v-card-subtitle>
        CIT 510-IT41S2
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
      Simple Calculator
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
         The application calculate the Sum, Difference, Product, Qoutient, Average in just 1 button
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
      Vowel Count
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
            The Application counts the number, vowel, consonant and it conver vowels to asterisk
        </v-card-text>
      </div>
    </v-expand-transition>
    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
      About Myself
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
           This show a basic introduction about me :>
        </v-card-text>
      </div>
    </v-expand-transition>
    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
      Quiz App
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
            This application will test your knowledge about manga or anime
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
    
    
    
    