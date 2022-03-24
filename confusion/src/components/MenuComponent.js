import React from "react";
import { Card, CardImg, CardTitle , CardImgOverlay , CardText , CardBody} from 'reactstrap';

   function RenderMenuItem ({dish , onClick}) {
      return (
         <Card key={dish.id} onClick={() => onClick(dish.id)}>
            <CardImg src={dish.image} width="100%" alt={dish.name} />
            <CardImgOverlay>
               <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
         </Card>
      );
   }
   
   const Menu = (props) => {
      const menu = props.dishes.map((dish) => {
         return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
               <RenderMenuItem dish={dish} onClick={props.onClick} />            
            </div>
         );
      });
      
      return(
         <div className="container">
            <div className="row">
               {menu}
            </div>
         </div>
      );
   }

   

export default Menu;