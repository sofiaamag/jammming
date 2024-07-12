'use client'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';

const CLIENT_ID= "35c1fe1e1c14413e88e4b55f5094c869";
const CLIENT_SECRET = "20dfb10665c2450486ee480c8c033e6f";

const SearchBar =  ()  => {
    const [search, setSearch] = useState("");

    useEffect (() => {
        //API Access Token

        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + 'client_secret=' + CLIENT_SECRET
    }            
        

        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => console.log(data))
    }, [])


    return (
        <div className="topnav">
        <Container className= "mb-3" size= "lg"> 
            
            <InputGroup>
                <FormControl className= "mt-2"
            type="text"
            placeholder="What do you want to add to playlist?"
            onKeyPress= {event => {
                if( event.key === "Enter"){
                    console.log("Pressed enter");
                }
            }}
        onChange = {event => setSearch (event.target.value)}
        />
         <Button className= "mt-2" onClick= {() => { console.log("Clicked button")}} >
        Search
        </Button>
        </InputGroup>
        </Container>
        <Container>
         <Row className= "mx-2 row-cols-4">
            <Card>
                <Card.Img src="#" />
            <Card.Body>
                <Card.Title> 
                Album Name
                </Card.Title>
            </Card.Body>
           </Card>
           <Card>
                <Card.Img src="#" />
            <Card.Body>
                <Card.Title> 
                Album Name
                </Card.Title>
            </Card.Body>
           </Card>
           <Card>
                <Card.Img src="#" />
            <Card.Body>
                <Card.Title> 
                Album Name
                </Card.Title>
            </Card.Body>
           </Card>
           <Card>
                <Card.Img src="#" />
            <Card.Body>
                <Card.Title> 
                Album Name
                </Card.Title>
            </Card.Body>
           </Card>
           <Card>
                <Card.Img src="#" />
            <Card.Body>
                <Card.Title> 
                Album Name
                </Card.Title>
            </Card.Body>
           </Card>
           <Card>
                <Card.Img src="#" />
            <Card.Body>
                <Card.Title> 
                Album Name
                </Card.Title>
            </Card.Body>
           </Card>
        </Row>
           
        </Container>
    
            
        </div>
    );



}

export default SearchBar;

    

    