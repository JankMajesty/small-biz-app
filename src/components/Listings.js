import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddListing from '../containers/AddListing'
// import AddListing from './AddListing'
 
const Listing = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {props.user.username}</h4>
            <div className="flex-container">
                <AddListing carTotal={props.listings.length} />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, idx) => (
                    <TableRow key={listing.id}>
                        <TableCell component="th" scope="row">
                            {listing.name}
                        </TableCell>
                        <TableCell>{listing["name"]}</TableCell>
                        <TableCell>{listing["mpg"]}</TableCell>
                        <TableCell>{listing["cylinders"]}</TableCell>
                        <TableCell>{listing["horsepower"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
            
                                onClick={() => props.removeListing(idx)} 
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}



export default Listing