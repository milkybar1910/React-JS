import React from 'react'
import {Card,CardBody,CardTitle,CardText} from "reactstrap"
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from "react-icons/fa"

const MyCard=({details})=> {
    const image = details.picture?.large
    const title = details.name?.title
    const first = details.name?.first
    const last = details.name?.last
    const city = details.location?.city
    return (
        <Card>
            <CardBody className="text-center">
                <img 
                height="150"
                width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={image} 
                />
                <CardTitle
                className="text-primary"
                >
                <h1>
                <span className="pr-2">{title}</span>
                <span>{first}</span>
                <span>{last}</span>
                </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt/>
                    {city}
                </CardText>

            </CardBody>
        </Card>
    )
}


export default MyCard
