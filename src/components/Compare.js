import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import {  Form , FormControl, Button} from 'react-bootstrap';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';

function Compare() {
    const [name,setName] = useState('');
    const [userName,setUsername] = useState('');
    const [followers,setFollowers] = useState('');
    const [following,setFollowing] = useState('');
    const [repos,setRepos] = useState('');
    const [avatar,setavatar] = useState('');
    const [userInput,setUserInput] = useState('');
    // const [error,setError] = useState(null);
    const [login,setLogin] = useState("example");
    const [loginFromButtonClick, setLoginFromButtonClick] = useState("example");
  

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(data => {
                console.log("hello");
              setData(data)  

      });
    },[loginFromButtonClick])

    


    const setData = ({ name, 
        login,
        followers, 
        following, 
        avatar_url, 
        public_repos
        }) => {
            setName(name)
            setUsername(login)
            setFollowers(followers)
            setFollowing(following)
            setavatar(avatar_url)
            setRepos(public_repos)
      };

      const   handleClick = () => {      
                
                setLoginFromButtonClick(login)
    }


    

    
    return(
        <div className="compare">
            <Container>
                <Row>
                    <Col>
                        <div className="player1">
                            <h1>Player One</h1>
                            <Form>
                                <Form.Control 
                                    size="lg" 
                                    type="text" 
                                    placeholder="GitHub Username" 
                                    value={login}
                                    onChange={e => setLogin(e.target.value)} 
                                />
                                
                                    <Button variant="dark" type="button" onClick={handleClick}>Submit</Button>
                                
                            </Form>
                            <div className="card">
                                <Card className="Card">
                                    <Card.Img variant="top" src={avatar} className="image1"/>
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                        <ListGroupItem>Username: {userName}</ListGroupItem>
                                            <ListGroupItem>Followers: {followers}</ListGroupItem>
                                            <ListGroupItem>Following: {following}</ListGroupItem>
                                            <ListGroupItem>Repositories: {repos}</ListGroupItem>
                                        </ListGroup>
                                </Card>
                            </div>
                        </div>
                    </Col>
                        
                    <Col>
                    <div className="player2">
                                <h1>Player Two</h1>
                                <Form> 
                                    <Form.Control 
                                        size="lg" 
                                        type="text" 
                                        placeholder="GitHub Username"
                                        value={login}
                                        onChange={e => setLogin(e.target.value)} 
                                    />
                                    
                                        <Button variant="dark" type="button" onClick={handleClick}>Submit</Button>
                                    
                                </Form>
                                <div className="card">
                                <Card className="Card">
                                    <Card.Img variant="top" src={avatar} className="image1" />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                        <ListGroupItem>Username: {userName}</ListGroupItem>
                                            <ListGroupItem>Followers: {followers}</ListGroupItem>
                                            <ListGroupItem>Following: {following}</ListGroupItem>
                                            <ListGroupItem>Repositories: {repos}</ListGroupItem>
                                        </ListGroup>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    )

}

export default Compare