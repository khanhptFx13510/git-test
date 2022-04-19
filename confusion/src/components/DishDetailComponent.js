import React, { Component } from 'react';
import { Card , CardBody , CardText , CardTitle,  CardImg , Breadcrumb , BreadcrumbItem , Button, Modal ,ModalHeader , ModalBody , Form, FormGroup, Input ,Label , FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

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
      
   function RenderComments({comments, addComment ,dishId}){
      if(comments != null){
         return(
            <div className="col-12 col-md-5 m-1">
               <h3>Comments</h3>
               <ul className="list-unstyled">
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
               </ul>

               <CommentForm dishId={dishId} addComment={addComment} />        
            </div>
         )

      }
   }   
            
   class CommentForm extends Component{            
      constructor(props) {
         super(props);
         this.state={
            author: '',
            isOpenModal: false,
            isOpenError: false
         }
   
         this.toggleModal = this.toggleModal.bind(this);
         this.handleSubmitComment = this.handleSubmitComment.bind(this);
         this.handleInputChange = this.handleInputChange.bind(this);
         this.toggleBlur = this.toggleBlur.bind(this);
      }
      
      toggleModal() {
         this.setState({
            isOpenModal: !this.state.isOpenModal,
         })
      }
   
      handleInputChange(e){
         this.setState({
            author: e.target.value
         })
      }
   
      handleSubmitComment(values){
         this.toggleModal();
         console.log(this.rating.value);
         this.props.addComment(this.props.dishId , this.rating.value , this.author.value, this.comment.value);
      }
   
      toggleBlur() {
         this.setState({
            isOpenError: !this.state.isOpenError
         })
      }
   
      validate(userName){
         const errors ={
            author: '',
         }
         if(userName.length < 3 && this.state.isOpenError){
            errors.author = 'must be greater than 2 characters';
         } else if (userName.length > 15  && this.state.isOpenError){
            errors.author = 'must be 15 characters or less';
         }
   
         return errors
      };
   
      render() {
         const errors=this.validate(this.state.author);
         return(
            <React.Fragment>
               <Button outline onClick={this.toggleModal}>
                  Submit Comment
               </Button>
               <Modal isOpen={this.state.isOpenModal}>
                  <ModalHeader toggle={this.toggleModal}>
                     <span className="fa fa-pencil fa-lg"></span>
                     Submit Comment
                  </ModalHeader>
                  <ModalBody>
                     <Form onSubmit={this.handleSubmitComment}>
                        <FormGroup>
                           <Label className="col-12" htmlFor="rating">
                              Rate
                           </Label>
                           <Input type="select" className="col-12" name="rating"
                           innerRef={(input) => {this.rating = input}}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
   
                           </Input>
                        </FormGroup>
   
                        <FormGroup>
                           <Label className="col-12" htmlFor="author">
                              Your Name
                           </Label>
                           <Input type="text" className="col-12"
                           placeholder="Your Name"
                           name="author"
                           innerRef={(input) => this.author = input}
                           invalid={errors.author !==''}
                           onChange={this.handleInputChange}
                           onBlur={this.toggleBlur}
                            />
                           <FormFeedback>
                              {errors.author}
                           </FormFeedback>
                        </FormGroup>
   
                        <FormGroup>
                           <Label className="col-12" htmlFor="comment">
                              Comment
                           </Label>
                           <Input type="textarea" rows={5} className="col-12"
                           name="comment"
                           innerRef={(input) => this.comment = input} />
                        </FormGroup>
   
                        <Button type="submit" color="primary">Submit</Button>
                     </Form>
                  </ModalBody>
               </Modal>
            </React.Fragment>
   
         )
      }
   }

   const DishDetail = (props) =>{
      if(props.isLoading){
         return(
            <div className="container">
               <div className="row">
                  <Loading />
               </div>
            </div>
         )
      }
      else if(props.errMess){
         return(
            <div className="container">
               <div className="row">
                  <h4>{props.errMess}</h4>
               </div>
            </div>
         )
      }

      if(props.dish != null ){

         return (
            <div className="container">
               <div className="row">
                  <Breadcrumb>
                     <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                     <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                     <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>

                  <div className="col-12">
                     <h3>{props.dish.name}</h3>
                     <hr />
                  </div>                
               </div>
               <div className="row">
                  <RenderDish dish={props.dish} />
                  <RenderComments comments = {props.comments}
                     addComment={props.addComment}
                     dishId={props.dish.id} />
               </div>
            </div>

               
         )
      } else{
         return <div></div>  

      }
   }

   export default DishDetail;




         

