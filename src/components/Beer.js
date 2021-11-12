import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { displayBeers, getBeer } from '../actions/actions';
import Beer from './BeerDisplay';

import './Beer.css';

const Beers = (props) => {

useEffect(()=> {
    props.dispatch(getBeer())
}, [])

const handleToggleBeers = () => {
    props.dispatch(displayBeers())
}

return(
    <div className= 'beer-container'>
        <h1>Welcome To Beers Around The World</h1>
        <button onClick = {handleToggleBeers}><h1>{props.displayBeers ? 'Hide' : 'Show'} Beers🍻</h1></button>
        <div className='beer-list'>
        {props.displayBeers && props.beers.map((beer, index) => (
            <Beer key={index} beer={beer} />
          ))}
        </div>
    </div>
)
}

const mapStateToProps = state => {
    return{
        beers: state.beers,
        displayBeers: state.displayBeers
    };
}
export default connect(mapStateToProps)(Beers);


