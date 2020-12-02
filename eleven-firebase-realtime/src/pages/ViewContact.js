import React, { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,ListGroupItem,ListGroup
} from "reactstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactContext } from "../context/Context";
import Contact from "../components/Contact";

const ViewContact = () => {

  const { state ,dispatch } = useContext(ContactContext);
  const {contacts} = state

  const handleconsole =()=>{
    console.log(contacts.key)
    console.log(dispatch)
    // console.log({contacts});
  }

  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md="5" className="offset-md-3">
          <Card className="pt-3 pb-5">
            <CardBody className="text-center ">
              <img
                height="150"
                width="150"
                className="cardImg profile border-danger"
                src={contacts?.picture}
              />
              <CardTitle className="text-primary mt-3">
                <h1>{contacts?.name}</h1>
              </CardTitle>
              <CardSubtitle>
                <h3>
                  <FaPhone className="mr-2" />
                  {contacts?.phoneNumber}
                </h3>
              </CardSubtitle>
              <a
                className="btn btn-primary btn-block"
                target="_blank"
                href={`mailto:${contacts?.email}`}
              >
                <FaEnvelope className="icon mr-2" />
                {contacts?.email}
              </a>

              <a
                className="btn btn-primary btn-block"
                target="_blank"
                href={`https://maps.google.com/?=${contacts?.address}`}
              >
                <FaMapMarkerAlt className="icon mr-2" />
                {contacts?.address}
              </a>
            </CardBody>
          </Card>
        </Col>
        <button onClick={handleconsole}>click</button>
      </Row>

      <ListGroup>
            {Object.entries(contacts).map(([key,value]) =>(
              <ListGroupItem key={key}>
                <Contact contact={value} contactKey={key}/>
              </ListGroupItem>))}
      </ListGroup>
    </Container>


  );
};

export default ViewContact;
