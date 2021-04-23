<template>
  <div class="home">
    <header>
       <vc-date-picker v-model="dateRange" is-range>
      <template v-slot="{ inputValue, inputEvents }">
        <div class="flex justify-center items-center">
          <input
            :value="inputValue.start"
            v-on="inputEvents.start"
            class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
          />
        
          <input
            :value="inputValue.end"
            v-on="inputEvents.end"
            class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
          />
        </div>
      </template>
    </vc-date-picker>
     <button class="content-button status-button" v-on:click="greet">Поиск</button>
    </header>
    

     <table>
          <div v-if="loading">
            <div id="p_prldr">
              <div class="contpre"><span class="svg_anm"><svg width="70px" version="1.1" id="L6"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                    <rect fill="none" stroke="#14162b" stroke-width="4" x="25" y="25" width="50" height="50">
                      <animateTransform attributeName="transform" dur="0.5s" from="0 50 50" to="180 50 50" type="rotate"
                        id="strokeBox" attributeType="XML" begin="rectBox.end"></animateTransform>
                    </rect>
                    <rect x="27" y="27" fill="#14162b" width="46" height="50">
                      <animate attributeName="height" dur="1.3s" attributeType="XML" from="50" to="0" id="rectBox" fill="freeze"
                        begin="0s;strokeBox.end"></animate>
                    </rect>
                  </svg></span>
                </div>
            </div>
          </div>
        <tbody>
         <th>CSI</th>
         <th>Количестко оценок</th>
         <th>Сотрудники</th>
         <th>Офисы</th>
         <th>Руководитель</th>
       </tbody>
       <tr v-for="(info, index) in data" :key="index">
         <td>{{ info[1] }}</td>
         <td>{{ info[2] }}</td>
         <td>{{ info[0] }}</td>
         <td>{{ info[3] }}</td>
         <td>{{ info[4] }}</td>
       </tr>
     </table>
  </div>
</template>

<script lang="ts">

export default {
  data(){
    return{
      data: null,
      url:'http://172.28.141.23:8007/api/v2/retail/users/',
      dateRange: {
      start: new Date() ,
      end: new Date(),
    },
    loading: false
    }
  },
  methods:{
    greet: function(){
      let date = this.dateRange.start.toISOString().slice(0,10)
      let date2 = this.dateRange.end.toISOString().slice(0,10)
      console.log(this.url + date +'/'+ date2);
      this.loading = true
      fetch(this.url + date +'/'+ date2).then(
        res => res.json()
      ).then(json => {
        this.data = json
        this.loading = false
      })
    }
  }
}

</script>
