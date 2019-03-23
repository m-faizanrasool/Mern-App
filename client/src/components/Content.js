import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Slideshow from './slider';
import './Content.css';
import { Link } from 'react-router-dom'


import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getItems} from '../store/actions/customer';
// import './customers.css';


global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
global.__SERVER__ = true;

class Content extends Component {

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  }

  static defaultProps = {
    items: []
  }

  componentWillMount() {
    this.props.getItems();
  }
  

  render() {
    // const { users } = this.props
    // let names = ['9','8','7'];
    const itemsList = this.props.items.map((item, index) => {
      return <div key={item.id} className="listItem">
        <img className="images" width={250} height={200} alt ="pic" src={require("./images/9.jpg")}/>
        <div className="details">
          <ul>
            <li>Price: {item.price}</li>
            <li><Link to={"/Gallery"}>Show All</Link></li>
          </ul>
        </div>
      </div>
    })
    return (
      <div className="content">

        <Slideshow/>
        
        <h3>You Might Like</h3> 

        {itemsList}     
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  items: state.customers.itemsList
})

const dispatchToProps = (dispatch) => ({
   getItems: () => dispatch(getItems())
})

export default connect(mapStateToProps, dispatchToProps)(Content);
