import React, { Component } from 'react';
import { Card , CardBody , CardText , CardTitle,  CardImg } from 'reactstrap';

class DishDetail extends Component {
   constructor(props) {
      super(props);
      
   }

   renderSeletedDetails(dish) {
      if(dish != undefined){
         console.log(dish);
         return (
            <div className="row">
               <Card key={dish.id} className="col-12 col-md-5 m-1">

                  <CardImg src={dish.image} alt={dish.name} />

                  <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                  </CardBody>
               </Card>
               <div className="col-12 col-md-5 m-1">
                  {dish.comments.map(comment => {
                     return (
                        <CardBody key={comment.id}>
                           <h3>Comments</h3>
                           <CardText>{comment.comment}</CardText>
                           <CardText>-- {comment.author},  
                              {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                           </CardText>
                        </CardBody>
                     )
                  })}
               </div>

            </div>

         

         )
      }

   }
   render() {
      let dish = this.renderSeletedDetails(this.props.dish)


      return (
         <div className="container">
            {dish}
         </div>
            
      )
   }
}

export default DishDetail;