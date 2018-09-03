import React, { Component } from 'react';
import './App.css';

//FIREBASE
import firebase from './firebase';

// COMPONENTS
import Header from './components/Header.js';
import Home from './components/Home.js';
import Day from './components/Day.js';
// import Footer from './components/Footer.js';
// import Schedule from './components/Schedule.js';
// import Routine from './components/Routine.js';
import WorkoutForm from './components/WorkoutForm.js';
import WorkoutList from './components/WorkoutList.js';

//DAYS
// import Monday from './components/days/Monday.js'
// import Tuesday from './components/days/Tuesday.js'
// import Wednesday from './components/days/Wednesday.js'
// import Thursday from './components/days/Thursday.js'
// import Friday from './components/days/Friday.js'
// import Saturday from './components/days/Saturday.js'
// import Sunday from './components/days/Sunday.js'

const dbRef = firebase.database().ref();
// const dbRefWorkoutList = firebase.database().ref(`/workoutList`);

// const dbRefWorkoutDay = firebase.database().ref(`/${dayOfTheWeek}`);
const monday = firebase.database().ref(`/monday`);
const tuesday = firebase.database().ref(`/tuesday`);
const wednesday = firebase.database().ref(`/wednesday`);
const thursday = firebase.database().ref(`/thursday`);
const friday = firebase.database().ref(`/friday`);
const saturday = firebase.database().ref(`/satuday`);
const sunday = firebase.database().ref(`/sunday`);





class App extends Component {
  constructor(){
    super();
    this.state = {
      page: 'Home',
      ScheduleDay: '',
      workoutList: [],
      monday: [],
      tuesday: [],
      wedneday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      activeDay: null
    }
  }

  showDay = (e) => {
    console.log(e.target.id);
    this.setState({
      activeDay: e.target.id

    })
    console.log(`show ${e.target.id} and hide schedule`);

  }

  componentDidMount(){
    console.log('app comp did mount fired');
    

    dbRef.on('value', (snapshot)=>{
      console.log(snapshot.val());

      // this needs to be adjusted
      this.sortWorkout(snapshot.val())
    
      // this.setState({
      //   workoutList: snapshot.val()
      // })
      // this.sortWorkoutList(snapshot.val());
    })
    
  }

  sortWorkout(workoutObject){
    console.log(workoutObject);
    
    const workoutArray = Object.entries(workoutObject).map((object)=>{
      // console.log(object);
      const innerKey = object[0];
      // console.log(object[1]);
      
      
      const workoutArrayInner = Object.entries(object[1]).map((item)=>{
        console.log(item)
        return ({
          key: item[0],
          currentTitleValue: item[1].currentTitleValue,
          currentRepValue: item[1].currentRepValue,
          currentSetValue: item[1].currentSetValue
        })
        
      })
      console.log(workoutArrayInner);
        this.setState({
          [innerKey]: workoutArrayInner
        })
      
    })

  }

  handleShow = (e)=> {
    console.log(e.target.id);
    if(e.target.id != ""){
      this.setState({
        activeDay: null,
        page: e.target.id
      })
    }
    
  }

  


  


  addWorkoutToDataBase = (title, reps, sets, days) => {
    console.log(title, reps, sets, days);


    days.forEach(function (item) {
      console.log(item);
      // window[item].push({
      //   currentTitleValue: title,
      //   currentRepValue: reps,
      //   currentSetValue: sets,
      // })

      if (item === 'monday'){
        monday.push({
          currentTitleValue: title,
          currentRepValue: reps,
          currentSetValue: sets,
        })
      }

      if (item === 'tuesday') {
        tuesday.push({
          currentTitleValue: title,
          currentRepValue: reps,
          currentSetValue: sets,
        })
      }

      if (item === 'wednesday') {
        wednesday.push({
          currentTitleValue: title,
          currentRepValue: reps,
          currentSetValue: sets,
        })
      }

      if (item === 'thursday') {
        thursday.push({
          currentTitleValue: title,
          currentRepValue: reps,
          currentSetValue: sets,
        })
      }

      if (item === 'friday') {
        friday.push({
          currentTitleValue: title,
          currentRepValue: reps,
          currentSetValue: sets,
        })
      }

      if (item === 'saturday') {
        saturday.push({
          currentTitleValue: title,
          currentRepValue: reps,
          currentSetValue: sets,
        })
      }

      if (item === 'sunday') {
        sunday.push({
          currentTitleValue: title,
          currentRepValue: reps,
          currentSetValue: sets,
        })
      }



      
    });
    


    
  }

  // <Schedule />

  // <WorkoutForm addWorkoutToDataBase={this.addWorkoutToDataBase} />
  
  // <Monday workoutList={this.state.workoutList}/>

  
  
  // <WorkoutForm addWorkoutToDataBase={this.addWorkoutToDataBase} />
  // <WorkoutList workoutList={this.state.monday} />
  render() {
    return (
      <div className="App">
        <Header title={this.state.page}/>
        <main>
          {this.state.page == 'Home' && (
            <Home />
          )}

          {this.state.page == 'Schedule' && (
            <div className="schedule">
              {!this.state.activeDay && (
                <div>
                  <Day onClick={this.showDay} dayOfWeek="monday" />
                  <Day onClick={this.showDay} dayOfWeek="tuesday" />
                  <Day onClick={this.showDay} dayOfWeek="wednesday" />
                  <Day onClick={this.showDay} dayOfWeek="thursday" />
                  <Day onClick={this.showDay} dayOfWeek="friday" />
                  <Day onClick={this.showDay} dayOfWeek="saturday" />
                  <Day onClick={this.showDay} dayOfWeek="sunday" />
                </div>
              )}
            </div>
          )}

          {this.state.activeDay && (
            
            <WorkoutList workoutList={this.state[this.state.activeDay]} />
          )}

          {this.state.page == 'WorkoutForm' && (
            <WorkoutForm addWorkoutToDataBase={this.addWorkoutToDataBase} />
          )}
        </main>
        <div className="footer">
          <div className="footer__container">
            <button onClick={this.handleShow} className="footer__button"><i id="Home" className="fas fa-home"></i></button>
            <button onClick={this.handleShow} className="footer__button"><i id="Schedule" className="fas fa-calendar"></i></button>
            <button onClick={this.handleShow} className="footer__button"><i id="WorkoutForm" className="fas fa-dumbbell"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
