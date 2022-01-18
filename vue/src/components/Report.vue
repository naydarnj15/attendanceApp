<template>
  <div>
      <div>
        <table style="width:100%">
            <tr>
                <th >First Name</th>
                <th>Last Name</th>
                <th>Date</th>
                <th>Activty</th>
            </tr>
            <tr v-for="report in reports">
                <td>{{report.firstname}}</td>
                <td>{{report.lastname}}</td>
                <td>{{report.date}}</td>
                <td>{{report.activity}}</td>
            </tr>
        </table>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            reports: []
        }
    },
    mounted() {
        
        axios.get('http://localhost:3000/reports')
        .then((res) => {
            //console.log(res.data);
            this.reports = res.data;
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>