import React, {Component} from 'react';

class Monday extends Component {
    render(){
        return(
            <div className="schedule__day schedule__day--monday">
                <div className="workout__header">
                    <h3 className="workout__header__text">Exercise</h3>
                    <h3 className="workout__header__text">reps</h3>
                    <h3 className="workout__header__text">sets</h3>
                </div>
                <ul>
                    {this.props.monday.map((obj) => {
                        console.log(obj.key)
                        return (
                            <li className="workout" key={obj.key}>
                                <h3 className="workout__title">{obj.currentTitleValue}</h3>
                                <p className="workout__reps">{obj.currentRepValue}</p>
                                <p className="workout__sets">{obj.currentSetValue}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Monday;