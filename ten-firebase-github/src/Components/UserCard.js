import React from 'react'
import {Card,CardBody} from "reactstrap"


const UserCard =({user})=> {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail"/>
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-primary">AVAILABLE FOR HIRE:{user.hireable ? "YES" : "NO"}</div>
                <div className="text-primary">FOLLOWERS{user.followers  ? "YES" : "NO"}</div>
            </CardBody>
        </Card>
    )
}
export default  UserCard;