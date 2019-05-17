import React, {Component} from 'react';
import Tour from '../Tour/Tour';
import './ListTours.scss';
import {tourData} from '../tourData';
class ListTours extends Component{

    state = {
        tours: tourData
    }
    
    
    removeTour = id =>{
        const {tours}  = this.state;
        const sortedTour = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTour
        })

    }
    
    render(){
        const {tours} = this.state;
        return(
            <section className="tour-list">
            {
               tours.map( tour =>{
               return(<Tour key={tour.id} tour={tour} removeTour={this.removeTour.bind(this, tour.id)}/>);
               })
            }
            </section>
            
        )
    }
}

export default ListTours;