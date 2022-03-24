import React from 'react';
import { Card , CardBody , CardText , CardTitle,  CardImg } from 'reactstrap';



   function RenderDish({dish}) {
      
      return (
         <div className="col-12 col-md-5 m-1">

            <Card key={dish.id} style={{padding: "0px"}}>

               <CardImg src={dish.image} alt={dish.name} />

               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
         </div>
            
            

      );
   }
      
   function RenderComments({comments}){
      return(
         <div className="col-12 col-md-5 m-1">
            <h3>Comments</h3>
            {comments.map(comment => {
               return (
                  <CardBody key={comment.id}>
                     <CardText>{comment.comment}</CardText>
                     <CardText>-- {comment.author},  
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                     </CardText>
                  </CardBody>
               )
                     
            })}
         </div>
      )
   }   

   const DishDetail = (props) =>{
      if(props.dish != undefined){

         return (
            <div className="container">
               <div className="row">
                  <RenderDish dish={props.dish} />
                  <RenderComments comments = {props.dish.comments} />
               </div>
            </div>

               
         )
      }
      return null;  
   }





export default DishDetail;
         

