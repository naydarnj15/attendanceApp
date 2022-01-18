<!--Nadir Mohamed-->
<template>
    <div>
    <h1>Take Attendance</h1>
    
    <form>
        <label> First Name:</label>
        <input type="firstname" v-model="firstname" required>
        <div v-if="findattendee" class="error">{{findattendee}}</div>
        <div v-if="firstnameError" class="error">{{firstnameError}}</div>

        <label> Last Name:</label>
        <input type="text" v-model="lastname">
        <div v-if="lastnameError" class="error">{{lastnameError}}</div>

        <label> Date:</label>
        <input type="date" v-model="date">
        <div v-if="dateError" class="error">{{dateError}}</div>

        <label> Select Activity:</label>
        <select v-model="activity">
            <option disabled value="">Please select one</option>
            <option>Cooking</option>
            <option>Gym</option>
            <option>Homework Help</option>
            <option>Boyz II Men</option>
            <option>Where Queens Convene</option>
        </select> <br />
        <div v-if="activityError" class="error">{{activityError}}</div>

        <div class="buttons">
            <!-- Button for adding attendee-->
            <button style="margin-left: 100px;" @click.prevent="addAttendee">Add attendee</button>
            <!-- Button for removing attendee-->
            <button style="margin-left: 100px;" @click.prevent="removeAttendee(firstname)">Remove attendee</button>
            <!-- Button for searching attendee-->
            <button style="margin-left: 100px;" @click.prevent="searchAttendee">Search for attendee</button>
        </div>

    </form>

    <!-- Second form for the table -->
    <form class="secondForm">

        <table v-if="showattendees" style="width:100%">
            <tr>
                <th colspan="4" class="firstname">List of attendees</th>
            </tr>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date</th>
                <th>Activty</th>
            </tr>
            <tr v-for="attendee in attendees">
                <td>{{attendee.firstname}}</td>
                <td>{{attendee.lastname}}</td>
                <td>{{attendee.date}}</td>
                <td>{{attendee.activity}}</td>
            </tr>
        </table>

        
        <!-- Toggle button to show and hide attendees -->
        <div>
            <button @click.prevent="toggleShowAttendees">
            <span v-if="showattendees"> Hide attendees</span>
            <span v-else="showattendees"> Show attendees</span>
            </button>
        </div>

        
    </form>

    <!-- Button to add attendance to report -->
    <button class="report" @click="reportAttendees">Submit Report</button>


    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      date: '',
      activity: '',
      attendee: '',
      attendees: [],
      activityError: null,
      firstnameError: null,
      lastnameError: null,
      dateError: null,
      findattendee: null,
      showattendees: false,
    };
  },
  methods: {
    addAttendee() {
    // check to see if user entered firstname
      this.firstnameError = this.firstname.length > 0 ? '': "Please enter the firstname";
      // check to see if user entered lastname
      this.lastnameError = this.lastname.length > 0 ? '': "Please enter the lastname";
      // check to see if user entered date
      this.dateError = this.date.length > 0 ? '': "Please enter the date"; 
      // findattendee checks for duplicates 
      this.findattendee = (!this.attendees.some(attendee => attendee.firstname === this.firstname)) ? '' : "This is a duplicate firstname!"
      //make sure activity was entered
      this.activityError = this.activity.length > 0 ? '': "Please enter the activity";
      if(!this.firstnameError && !this.lastnameError && !this.dateError && !this.findattendee && !this.activityError) {
      
        var obj= {
          firstname: this.firstname,
          lastname: this.lastname,
          date: this.date,
          activity: this.activity
        }

        //add the attendee to the list of attendees
        this.attendees.push(obj);
      }
      // clear errors
      //console.log(this.attendees);
    },

    // method for removing an attendee from the list of attendees
    removeAttendee(firstname) {

      //check for input
      // check to see if user entered firstname
      this.firstnameError = this.firstname.length > 0 ? '': "Please enter the firstname";
      //finding attendee to remove
      this.findattendee = (this.attendees.some(attendee => attendee.firstname === this.firstname)) ? '' : "No matching attendee to remove";
      //console.log(this.removeError);
      if(!this.findattendee && !this.firstnameError) {
        this.attendees = this.attendees.filter((attendee) => firstname !== attendee.firstname);
      }

      //clear errors
      this.lastnameError = null;
      this.dateError = null;
      this.activityError = null;
      
      console.log(this.attendees);
    },
    // method to set and not set toggle button
    toggleShowAttendees() {
      this.showattendees = !this.showattendees;
    },

    // method for searching attendees
    searchAttendee() {
      //search for attendee to see if it can be found for the first name
      this.findattendee = (this.attendees.some(attendee => attendee.firstname === this.firstname)) ? '' : "This firstname could not be found!"

      //if we can find the attendee
      if(!this.findattendee){
        var obj = this.attendees.filter((item) => this.firstname === item.firstname)
        this.lastname = obj[0].lastname
        this.date = obj[0].date
      }

      //clear all the errors
      this.lastnameError = null;
      this.dateError = null;
      this.activityError = null;
      this.firstnameError = null;
    },

    //method to report the attendees
    reportAttendees() {
        for(let index in this.attendees) {
            axios.post('http://localhost:3000/reports', this.attendees[index]); 
        }
        alert("Report has been submitted!");
    }

  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1 {
    text-align: center;
  }
  form {
    max-width: 100%;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  form.secondForm {
    max-width: 100%;
    background: white;
    text-align: center;
    border-radius: 10px;
  }
  label {
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  .sill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }

  .buttons {
      text-align: center;
  }

  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 10px;
    display: inline-block;
  }

  .report {
    width: 100%;
  }

  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }

  li.computed {
    background: blue;
    color: white;
  }

  ul.no-bullets {
    list-style-type: none;
  }

  table, tr, td {
    border: 3px solid black;
    border-collapse: collapse;
  }

  caption {
    color: blue;
    font-weight: bold;
    font-size: 200%;
  }

  tr, td {
    padding: 15px;
  }

  tr:nth-child(even) {
    background-color: #0b6dff85;
  }

  tr:nth-child(odd) {
    background-color: #0b6dff50;
  }

  th.firstname {
    padding: 20px;
    font-size: 150%;
  }

</style>
