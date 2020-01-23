import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchBrewery } from '../actions';

const Brewery= props => {
  console.log(props)
  return (
    <div>
      <button onClick={props.fetchBrewery}>Find Beer</button>
      {!props.brewery && !props.isLoading && (
        <h2>Fetch a new beer!</h2>
      )}
      {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      <h3>Beer Name & Info:</h3>

       {props.brewery && !props.isLoading && <h2>{props.brewery[0].name}</h2>}
{props.brewery && !props.isLoading && <h3>{props.brewery[0].tagline}</h3>}
{props.brewery && !props.isLoading && <h3>ABV: {props.brewery[0].abv}</h3>}
{props.brewery && !props.isLoading && <h3>IBU: {props.brewery[0].ibu}</h3>}
{props.brewery && !props.isLoading && <h3>First Brewed: {props.brewery[0].first_brewed}</h3>}
{props.brewery && !props.isLoading && <p>{props.brewery[0].description}</p>}
<br/>
{props.brewery && !props.isLoading && <p>Food Pairings: {props.brewery[0].food_pairing}</p>}
    </div>


  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    brewery: state.brewery,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchBrewery }
)(Brewery);
