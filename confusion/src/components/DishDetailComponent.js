import React, { Component } from 'react';
import { Card , CardBody , CardText , CardTitle } from 'reactstrap';

class DishDetail extends Component {
   constructor(props) {
      super(props);
      
   }
   render() {
      let comments
      if(this.props.dish != undefined){
         console.log(this.props.dish);
            comments = this.props.dish.comments.map((comment) => {
            return (
               
                  <CardBody key={comment.id}>
                     <h3>Comments</h3>
                     <CardText>{comment.comment}</CardText>
                     <CardText>-- {comment.author},  
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                     </CardText>
                  </CardBody>
            
   
            )
         });
      }


      return (
         <div className="container">
            {comments}
         </div>
            
      )
   }
}

export default DishDetail;