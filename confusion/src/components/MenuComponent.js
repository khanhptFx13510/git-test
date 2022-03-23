import React, { Component } from "react";
import { Media } from "reactstrap";
import { Card, CardImg, CardTitle , CardImgOverlay , CardText , CardBody} from 'reactstrap';

class Menu extends Component {
   
   constructor(props) {
      super(props);
      this.state={
         selectedDish: null
      }
   }
         
   onDishSelect(dish){
      this.setState({selectedDish: dish})
   };

   renderDish(dish){
      if(dish != null){
         return(
            <Card>
               <CardImg src={dish.image} width="100%" alt={dish.name} />

               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
         )
      }
   }
   render() {
      const menu = this.props.dishes.map((dish) => {
         return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
               <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                  <CardImg src={dish.image} width="100%" alt={dish.name} />
                  <CardImgOverlay>
                     <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
               </Card>
            </div>
         )
      });
      return(
         <div className="container">
            <div className="row">
               {menu}
            </div>
            <div className="row">
               {this.renderDish(this.state.selectedDish)}
            </div>
         </div>
      );
   }

}

export default Menu;