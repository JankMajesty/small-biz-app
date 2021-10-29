import React from 'react'
import cookie from 'cookie'
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
import { Link } from 'react-router-dom'
import {checkAuth } from '../Router'
// import AddListing from './AddListing'
 
const Listing = (props) => {
    return checkAuth() ? (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {props.user.username}</h4>
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
                            <Link to={`/listing/${listing.id}`}>{listing.name}</Link>
                        </TableCell>
                        <TableCell>{listing["description"]}</TableCell>
                        <TableCell>{listing["hours"]}</TableCell>
                        <TableCell>{listing["address"]}</TableCell>
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
    ) : (
        <Container maxWidth="lg" className="car-container">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, idx) => (
                    <TableRow key={listing.id}>
                        <TableCell component="th" scope="row">
                            <Link to={`/listing/${listing.id}`}>{listing.name}</Link>
                        </TableCell>
                        <TableCell>{listing["description"]}</TableCell>
                        <TableCell>{listing["hours"]}</TableCell>
                        <TableCell>{listing["address"]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}



export default Listing