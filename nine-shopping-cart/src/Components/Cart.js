import React from "react"
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Card,
    CardHeader,
    CardBody,
    Col,
    Row,
    CardFooter
} from "reactstrap"

const Cart =({cardItem,removeItem,buyNow}) =>{

    let amount = 0.0
    cardItem.forEach(item =>{
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })

    return(
        <Container fluid>
            <h1 className="text-success"> Your Cart</h1>
            <ListGroup>
                {cardItem.map(item =>(
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                    height={80}
                                    src={item.tinyImage}
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                    </div>
                                <span>PRice : - {item.productPrice}</span>
                                <Button color="danger"onClick={()=> removeItem(item)} >REMOVE</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
                {
                    cardItem.length >= 1 ?  (
                        <Card className="text-center mt-3">
                            <CardHeader >
                                Grand Totol 
                            </CardHeader>
                            <CardBody>
                                Your amount for {cardItem.length} is {amount}
                            </CardBody>
                            <CardFooter>
                                <Button color="success" onClick={buyNow}>PAY HERE</Button>
                            </CardFooter>
                        </Card>
                    ) : (
                        <h1 className="text-warning">Cart is empty</h1>
                    )
                }
            </ListGroup>
        </Container>
    )


}

export default Cart;