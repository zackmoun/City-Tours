import React, {Component} from 'react';
import './Tour.scss';

class Tour extends Component{
    constructor(props){
        super(props)
    }
    
    state = {
        showInfo: false
    }

    hundleInfo = () => {
        this.setState({
          showInfo: !this.state.showInfo
        })
      }

    render(){
        const { id, city, img, name, info } =  this.props.tour;
        const {removeTour} = this.props;
        return(
            <article className="tour">
               <div className="img-tour">
                <img src={img} alt=""/>
               
                
                <span className="close-btn" onClick={removeTour}>
                <i className="fas fa-window-close"></i>
                </span>
                <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                    Info
                    <span onClick={this.hundleInfo}>
                <i className="fas fa-caret-down"></i>
                </span>
                </h5>
                {this.state.showInfo && <p>{info}</p> }
                </div>
                
                </div>

            </article>
        )
    }
}

export default Tour