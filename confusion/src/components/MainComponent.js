import React, { Component } from 'react';
import Home from './HomeComponent.js';
import Menu from './MenuComponent.js';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { DISHES } from '../shared/dishes.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments.js';
import { LEADERS } from '../shared/leaders.js';
import { PROMOTIONS } from '../shared/promotions.js';

class Main extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dishes: DISHES,
         comments: COMMENTS,
         leaders: LEADERS,
         promotions: PROMOTIONS
      } 
   };

   render() {
      const HomePage = () => {
         return(
             <Home dish= {this.state.dishes.filter((dish) => dish.featured)[0]}
               promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
               leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
             />
         );
      }
      const DishWithId = ({match}) => {
         return(
            <DishDetail 
               dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
               comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            />
         )
      }
      return (
         <div>
            <Header />
            <Switch>
               <Route path='/home' component={HomePage} />
               <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
               <Route path='/menu/:dishId' component={DishWithId} />
               <Route exact path='/contactus' component={Contact} />
               <Redirect to="/home" />
            </Switch>
            <Footer />
         </div>

      )
   }
}

export default Main;

