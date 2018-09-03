import React, {Component} from 'react';

class Day extends Component {

    // dayOfWeek = this.props.dayOfWeek;
    

    constructor(){
        super();
        this.state = {
            day: ''
        }
    }

    // showDay = (e) => {
    //     console.log(e.target.id);

    // }

    render(){
        return(
            <div onClick={this.props.onClick} id={this.props.dayOfWeek} className="day">
                <h2 id={this.props.dayOfWeek} className="day__header">{this.props.dayOfWeek}</h2>
                <button className="day__button"><i id={this.props.dayOfWeek} className="fas fa-chevron-right"></i></button>
            </div>
        )
    }
}

export default Day;