import React, { Component } from 'react';
import Home from './HomeComponent.js';
import Menu from './MenuComponent.js';
import DishDetail from './DishDetailComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { DISHES } from '../shared/dishes.js';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dishes: DISHES,
         selectedDish: null,
      } 
   };

   onDishSelect(dishId){
      this.setState((selectedDish, dishId) =>{selectedDish += dishId});
   };
   render() {
      const HomePage = () => {
         return(
             <Home 
             />
         );
      }
      return (
         <div>
            <Header />
            <Switch>
               <Route path='/home' component={HomePage} />
               <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
               <Redirect to="/home" />
            </Switch>
            <Footer />
         </div>
      )
   }
}

export default Main;

