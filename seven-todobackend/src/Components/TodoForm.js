import React,{useState} from "react"
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
    Container
} from "reactstrap"
import {v4} from "uuid"

const TodoForm = ({addTodos}) =>{
    const [todoString, setTodoString] = useState("")

    const  handleSubmit = e =>{
        e.preventDefault()
        if(todoString === ""){
            return alert("please fil some value")
        }
        const todo = {
            todoString,
            id:v4()
        }
        addTodos(todo)

        setTodoString("")
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input
                name="todo"
                type="text"
                id="todo"
                placeholder="Enter a todo String"
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button color="success">Add Todo</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm