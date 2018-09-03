import React, {Component} from 'react';

class WorkoutList extends Component {
    componentDidMount(){
        console.log(this.props);
        console.log("Did mount")
    }
    render(){
    
        return(
            
            <div className="workout__outerContainer">
                <div className="workout__container">
                    <div className="workout__header">
                        <h3 className="workout__header__text">Exercise</h3>
                        <h3 className="workout__header__text">reps</h3>
                        <h3 className="workout__header__text">sets</h3>
                    </div>
                    <ul>
                        {this.props.workoutList.map((obj)=> {
                            console.log(obj.key)
                            return(
                                <li className="workout" key={obj.key}>
                                    <h3 className="workout__title">{obj.currentTitleValue}</h3>
                                    <p className="workout__reps">{obj.currentRepValue}</p>
                                    <p className="workout__sets">{obj.currentSetValue}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default WorkoutList;