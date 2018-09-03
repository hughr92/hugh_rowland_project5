import React, {Component} from 'react';

import Day from './Day.js';
import WorkoutList from './WorkoutList.js'


//DAYS
// import Monday from './components/days/Monday.js'
// import Tuesday from './components/days/Tuesday.js'
// import Wednesday from './components/days/Wednesday.js'
// import Thursday from './components/days/Thursday.js'
// import Friday from './components/days/Friday.js'
// import Saturday from './components/days/Saturday.js'
// import Sunday from './components/days/Sunday.js'


class Schedule extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         activeDay: null
    //     }
    // }

    showDay = (e) => {
        console.log(e.target.id);
        this.setState({
            activeDay: e.target.id
            
        })
        console.log(`show ${e.target.id} and hide schedule`);

    }


    render(){
        return(
            <div className="schedule">
                {!this.state.activeDay && (
                    <div>
                        <Day onClick={this.showDay} dayOfWeek="monday"/>
                        <Day onClick={this.showDay} dayOfWeek="tuesday"/>
                        <Day onClick={this.showDay} dayOfWeek="wednesday"/>
                        <Day onClick={this.showDay} dayOfWeek="thursday"/>
                        <Day onClick={this.showDay} dayOfWeek="friday"/>
                        <Day onClick={this.showDay} dayOfWeek="saturday"/>
                        <Day onClick={this.showDay} dayOfWeek="sunday"/>
                    </div>
                )}
                {/* {this.state.activeDay === 'Monday' && (
                    <Worklist />
                )} */}
            </div>
        )
    }
}

export default Schedule;