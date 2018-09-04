import React, {Component} from 'react';
// const daysArray =[];

class WorkoutForm extends Component {
    constructor(){
        super();
        this.state = {
            currentTitleValue: "",
            currentRepValue: "",
            currentSetValue: "",
            userDays: [],
        }
    }


    handleChecked = (e) => {
        // console.log(e.target);
        console.log(e.target.id);
        console.log(e.target.checked);
        // if(e.target.checked){
        //     daysArray.push(e.target.id)
        // } else {
        //     daysArray.pop(e.target.id)
        // }

        this.setState({
            userDays: this.state.userDays.concat(e.target.id)
            
        })
        
        
    }

    // whent the form submits, send the string from the input to app.js

    handleChange = (e) => {
        // console.log(e.target);
        
        const name = e.target.className;

        const newName = name.replace(/ workoutForm__input/g, '');
        newName.trim();
        // console.log(newName);


        this.setState({
            [newName]: e.target.value,
        })
   

        
        
    }

    isChecked = (day) => {
        // if this day is in the userdays Array, return true
        return this.state.userDays.includes(day)
    }

    handleSubmit = (e) => {
        console.log('handle submit');
        e.preventDefault();

        console.log(e.target.checked);

        if (this.state.currentTitleValue && this.state.currentRepValue && this.state.currentSetValue && this.state.userDays.length > 0){

            this.props.addWorkoutToDataBase(this.state.currentTitleValue, this.state.currentRepValue, this.state.currentSetValue, this.state.userDays);
            //clear data
            this.setState({
                currentTitleValue: "",
                currentRepValue: "",
                currentSetValue: "",
                userDays: []
            })
        }
       


        
        
    }

    render(){
        return(
            <div className="workoutForm">
                <form onSubmit={this.handleSubmit}>
                    <p>Workout Name</p>
                    <input className="currentTitleValue workoutForm__input" type="text" maxLength="15" onChange={this.handleChange} value={this.state.currentTitleValue}/>
                    <p>Reps</p>
                    <input className="currentRepValue workoutForm__input" type="number" onChange={this.handleChange} value={this.state.currentRepValue}/>
                    <p>Sets</p>
                    <input className="currentSetValue workoutForm__input" type="number" onChange={this.handleChange} value={this.state.currentSetValue}/>
                    <input className='workoutForm__submit' type="submit" value="submit"/>
                </form>
                <form className="workoutForm__days">

                    <input checked={this.isChecked('monday')} id="monday" type="checkbox" className="workoutForm__days__checkbox" onChange={this.handleChecked}  />
                    <label htmlFor="monday" className="workoutForm__days__label">monday</label>

                    <input checked={this.isChecked('tuesday')} id="tuesday" type="checkbox" className="workoutForm__days__checkbox" onChange={this.handleChecked} />
                    <label htmlFor="tuesday" className="workoutForm__days__label">tuesday</label>

                    <input checked={this.isChecked('wednesday')} id="wednesday" type="checkbox" className="workoutForm__days__checkbox" onChange={this.handleChecked} />
                    <label htmlFor="wednesday" className="workoutForm__days__label">wednesday</label>

                    <input checked={this.isChecked('thursday')} id="thursday" type="checkbox" className="workoutForm__days__checkbox" onChange={this.handleChecked} />
                    <label htmlFor="thursday" className="workoutForm__days__label">thursday</label>

                    <input checked={this.isChecked('friday')} id="friday" type="checkbox" className="workoutForm__days__checkbox" onChange={this.handleChecked} />
                    <label htmlFor="friday" className="workoutForm__days__label">friday</label>

                    <input checked={this.isChecked('saturday')} id="saturday" type="checkbox" className="workoutForm__days__checkbox" onChange={this.handleChecked} />
                    <label htmlFor="saturday" className="workoutForm__days__label">saturday</label>

                    <input checked={this.isChecked('sunday')} id="sunday" type="checkbox" className="workoutForm__days__checkbox" onChange={this.handleChecked} />
                    <label htmlFor="sunday" className="workoutForm__days__label">sunday</label>
                </form>
            </div>
        )
    }
}

export default WorkoutForm;