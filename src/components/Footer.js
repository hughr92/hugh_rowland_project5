import React, {Component} from 'react';

class Footer extends Component {

    // constructor() {
    //     super();
    //     this.state = { render: '' }
    // }
    handleShow(e) {
        console.log(e);
        
        
        // this.setState({ render: compName });
    }
    

    render(){
        return(
            <div className="footer">
                <div className="footer__container">
                    <button className="footer__button"><i className="fas fa-home"></i></button>
                    <button onClick={this.handleShow} className="footer__button"><i className="fas fa-calendar"></i></button>
                    <button className="footer__button"><i className="fas fa-dumbbell"></i></button>
                </div>
            </div>
        )
    }
}

export default Footer;