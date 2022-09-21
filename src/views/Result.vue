<template>
<v-parallax dark
        src="https://i.postimg.cc/Jnxkk9yv/Green-Orange-Ship-Desktop-Wallpaper.png"
      >
  <body>
    <v-container>

      <v-card class="vcard">
        <v-card-title class="title">
          <h1>Score Board</h1>
        </v-card-title>
        
        <table>
          <thead class="thead">
            
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Score</th>

            </tr>
          </thead>
          <tbody class="tbody">
            
            <tr v-for="quiz in quiz " :key="quiz">
              <td>{{quiz.user }}</td>
              <td>{{ quiz.scores }}</td>

            </tr>

          </tbody>

        </table>
      </v-card>
    </v-container>
  </body>
</v-parallax>
</template>


<script>
import db from '@/fb'
import { collection, getDocs } from '@firebase/firestore';
import { query, orderBy } from "firebase/firestore";

export default {
  name: "Quiz",
  // data() function stores state variables
  data() {
    return {

      quiz: [],


    };
  },


  // Custom methods of the Vue Component
  methods: {

    async fetchLeaderBoards() {

      const dbfileref = collection(db, "quiz");
      const q = query(dbfileref, orderBy("scores","desc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        this.quiz.push(doc.data());
        console.log(this.quiz);
      });

    },

  },

  // Code inside mounted() runs after the Component has mounted
  mounted() {

    this.fetchLeaderBoards();
  },
};

</script>

<style scoped>


.vcard {
  position: fixed;
  left: 33%;
  top: 25%;

  padding-right: 30px;
  padding-left: 20px;
  padding-bottom: 30px;
  text-align: justify;
  background-color:rgba(126, 68, 20, 0.75);
  color: #061837;
  font-size: 115%;
  width: 50%;
  height: auto;
  text-align: center;
}

.thead {
  background-color: rgba(253, 238, 144, 0.825);
  color: rgb(0, 0, 0);
  padding-left: 10px;
  font-family: 'Times New Roman', Times, serif;
}

.tbody {
  background-color: rgba(253, 238, 144, 0.825);
  color: rgb(0, 0, 0);
  padding-left: 10px;
  font-family: 'Times New Roman', Times, serif;
}

table {
  width: 100%;
}

.title h1 {
  color: #fff3b1;
  text-align: center;
  font-size: 130%;
  font-family: Georgia, 'Times New Roman', Times, serif
}
</style>