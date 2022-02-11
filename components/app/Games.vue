<template>
  <v-container class="grey lighten-5">
      <v-row no-gutters align="center">
        <template v-for="n in cases">
          <v-col :key="n.num" class="col-3" align="center" >
            <v-card @click.stop="isClicked(n)">
                <v-card-title class="case" :style="{'backgroundColor' : n.num == numClickedCurrent || n.isActive ? n.color : 'blue' }"> 
                 {{ n.isActive ? (  n.color == 'green' ? '+'+ n.num  : '-' + n.num) : '' }}
                </v-card-title>
            </v-card>
          </v-col>
        </template>
      </v-row>
      <v-row align="center">
          <v-col align="center" class="col-2">
              <v-card style="height:60px">
                  <v-card-title style="height:50px" class="justify-center">
                    Score 
                  </v-card-title>
              </v-card>
          </v-col>
          <v-col align="center">
            <v-card style="height:60px"> 
                <v-card-title style="height:50px;font-size:3rem" class="justify-center">
                 {{ score }}
                </v-card-title>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import Case from '../../model/componentObjects/case'
import { mapGetters } from 'vuex'

export default {
    data : () => ({
        numClicked : null,
        colorClicked: null,
        points : 0,
    }),
    methods : {
        isClicked(c) {
            console.log('case is clicked', JSON.stringify(c))
            this.numClicked = c.num
            this.colorClicked = c.color
            if(c.color === 'green') {
                this.$store.dispatch('score/incrementScore', c.num)
            } else  {
                this.$store.dispatch('score/decrementScore', c.num)
            }
            let ind = this.cases.findIndex(t => t.num === this.numClicked)
            this.cases[ind].isActive = true 
        },

    },
    computed : {
    
         numClickedCurrent() {
             console.log('numClickedCurrent' , this.numClicked)
            return this.numClicked
        },
        colorCurrent() {
             console.log('colorCurrent' , this.colorClicked)
            return this.colorClicked
        },
        cases() {   
            let items = []
            let rands = []

            for (let i = 1; i < 17; i++) {
                let c = new Case()
                let rand = Math.floor(Math.random() * 1000) // generate random num
                if (rands.findIndex(r => r === rand) === -1) {
                    c.num = rand
                    rands.push(rand)
                } else {
                    c.num = Math.max(...rands) + 1
                }
                let rand2 = Math.floor(Math.random() * 1000) 
                c.color = (rand2 % 2 == 0) ? 'red' : 'green'
                c.isActive = false
                items.push(c)
            }
            return items
        },
        ...mapGetters('score', {
            score : 'getScore'
        }),
      
    }
}

</script>

<style>
.case {
    height: 80px;
    width: 80px;
    background-color: grey(144, 174, 201);
    justify-content: center;
    margin-bottom: 5px;
    margin-top: 5px;
}
</style>