import React from 'react';
import {  Container, Button } from '@mui/material';
import { LocalPhone, Replay } from '@mui/icons-material';
import image from "../failedimg.png";
import logo from "../logo.png";
import { useNavigate } from 'react-router-dom';
import '../App.css';

function App() {

    const navigate = useNavigate();
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        height: "auto",
        background: 'linear-gradient(200deg, red, white)',
        backgroundColor: "black",
        paddingBottom: "30px",
        minWidth: "100vw",
        width: "auto"
    };

    const descriptionStyle = {
        fontSize: '30px',
        color: 'red',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
        fontWeight: 'bold'
    };


    const buttonStyle = {
        marginTop: '20px',
        transition: 'background-color 0.3s, transform 0.3s',
        fontFamily: 'Poppins, sans-serif',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        width :"100%",
        padding : "10px"
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.backgroundColor = 'green';
        e.currentTarget.style.transform = 'scale(1.09)';
    };

    const handleMouseLeave1 = (e) => {
        
        e.currentTarget.style.backgroundColor = '#007bff';
        e.currentTarget.style.transform = 'scale(1)';
    };

    const handleMouseLeave2 = (e) => {
        e.currentTarget.style.color = '#007bff';
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.transform = 'scale(1)';
    };

    return (
        <Container style={containerStyle}>
            <div style={{ height: "230px" }}>
                <img src={logo} alt="i" className="logo" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                    src={image}
                    alt="Illustration"
                    className="illustration"
                    style={{ boxShadow: '0 7px 15px rgba(0, 0, 0, 0.4)' }}
                />
                <h1 style={descriptionStyle}>
                    Failed to send request!
                </h1>
                <Button
                    variant="contained"
                    style={{...buttonStyle, backgroundColor: '#007bff',}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave1}
                    onClick={()=>{navigate("/")}}
                >
                    Try again <Replay style={{ marginLeft: "20px" }} />
                </Button>
                <Button
                    variant="contained"
                    style={{...buttonStyle, backgroundColor: 'white', color : '#007bff' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave2}
                >
                    Contact us!<LocalPhone style={{ marginLeft: "20px" }} />
                </Button>
            </div>
        </Container>
    );
}

export default App;
