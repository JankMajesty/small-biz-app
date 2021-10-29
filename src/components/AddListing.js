import React, { useState, useEffect, Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
    Box
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import GoogleMapReact from 'google-map-react'
import Map from './Map'

// class AddListing extends Component {
//     state = {
//         open: false,
//         name: '',
//         description: '',
//         hours: '',
//         address: '',
//     }

//     toggleDialog = () => this.setState({ open: !this.state.open })

//     handleTextChange = (e) => {
//         const newState = { ...this.state }
//         newState[e.target.id] = e.target.value
//         this.setState(newState)
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const payload = { ...this.state }
//         delete payload.open
//         console.log("THE CAR", payload)
//         // add this.props.addCar function here
//         this.props.AddListing(payload)
//         // also add this.setState to close the dialog
//         this.setState({open: false})
//     }

//     componentDidUpdate = (prevProps, prevState) => {
//         if (prevState.open !== this.state.open) {
//             this.setState({
//                 name: '',
//                 description: '',
//                 hours: '',
//                 address: ''
//             })
//         }
//     }

//     render() {
//         return (
//             <Fragment>
//                 <div style={{ textAlign: 'center' }}>
//                     <h1>Add Listing:</h1>
//                     <Button
//                         variant="contained"
//                         className="add-car"
//                         onClick={this.toggleDialog}
//                     >
//                         Add Listing
//                     </Button>
//                 </div>
//                 <div>
//                     <Dialog open={this.state.open} onClose={this.toggleDialog} >
//                         <DialogTitle>Add New Listing</DialogTitle>
//                         <DialogContent>
//                             <form 
//                                 onSubmit={this.handleSubmit}
//                                 style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
//                                 <TextField 
//                                     id="name" 
//                                     placeholder="Name" 
//                                     value={this.state.name} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <TextField 
//                                     id="mpg" 
//                                     placeholder="Miles per gallon" 
//                                     value={this.state.mpg} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <TextField 
//                                     id="cylinders" 
//                                     placeholder="Cylinders" 
//                                     value={this.state.cylinders} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <TextField 
//                                     id="horsepower" 
//                                     placeholder="Horsepower" 
//                                     value={this.state.horsepower} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <br />
//                                 <Button variant="contained" color="primary" type="submit">Submit</Button>
//                             </form>
//                         </DialogContent>
//                     </Dialog>
//                 </div>
//             </Fragment>
//         )
//     }
// }

// export default AddListing

const AddListing = (props) => {
    console.log(props)
   // local state to get the listing added
   const [listing, setListing] = useState( {
     name: '',
     address: '',
     hours: '',
     description: '',
     lat: '',
     lng: ''
 } )
 
   // input field change handler based on their id
   const handleTextChange = (e) => {
     const newListing = { ...listing }
     newListing[e.target.id] = e.target.value
     setListing(newListing)
   }
 
   // handle submit using add listing redux action
   const handleSubmit = (e) => {
     e.preventDefault()
     const payload = { ...listing }
     payload.id = props.listings.length + 1
     console.log("THE LISTING", payload)

     props.addListing(payload)
     
     // reset the form
     setListing({
       name: '',
       address: '',
       hours: '',
       description: '',
       lat: '',
    lng: ''
   } )
 }
 
 
    return (
      <div className='flex-container' >
        <div className="flex-child login-button">
         <form className="add-listing" onSubmit={handleSubmit} action="/listings">
             <TextField value={listing.name} required="true" id="name" onChange={handleTextChange} placeholder="Name" />
             <TextField value={listing.address} required="true" id="address" onChange={handleTextChange} placeholder="Address" />
             <TextField value={listing.hours} required="true" id="hours" onChange={handleTextChange} placeholder="Hours" />
             <TextField value={listing.description} required="true" id="description" onChange={handleTextChange} placeholder="Description" />
             <TextField value={listing.lat} required="true" id="lat" onChange={handleTextChange} placeholder="Latitude" />
             <TextField value={listing.lng} required="true" id="lng" onChange={handleTextChange} placeholder="Longitude" />
               <div className="margin-top-sm button-wide">
             <Box mt={4}>   
             <Button style={{width: '400px'}}
               variant="contained"
               color="primary"
               type="submit"
              >
               Save
             </Button>
             </Box>
             </div>
           </form>
           </div>
           <div className='flex-child' style={{ height: '50vh', width: '50%' }} >
           <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDjULikPHmrPzrmZbtyphQaevW2iqFUWPU'}}
          defaultCenter={{
            lat: 30.2672,
            lng: -97.7431
          }}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
     
           
       </div>
    )
  }
 
  export default AddListing