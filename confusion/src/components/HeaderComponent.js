import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
   render() {
      return(
         <React.Fragment>
            <Navbar dark>
            <div className="container">
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            
            <div class="container-fluid jumbotron mb-4 p-5">
               <div class="container">
                  <div className="row row-header">
                     <div class="p-5 col-12 col-sm-6">
                        <h1 class="display-4 fw-bold">Ristorante con Fusion</h1>
                        
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                     </div>
                  </div>
               </div>
            </div>

         </React.Fragment>

      );
   }
}
            
            

export default Header;