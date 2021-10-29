import React, { useState } from 'react'
import {
    Button,
    TextField,
    Box
} from '@material-ui/core'
import GoogleMapReact from 'google-map-react'


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
           <div className='flex-child' style={{ height: '50vh', width: '50%' , marginRight: '20px'}} >
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