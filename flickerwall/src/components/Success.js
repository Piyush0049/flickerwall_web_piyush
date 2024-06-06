import React from 'react';
import { Button, Container } from '@mui/material';
import { QrCodeScanner, Abc } from '@mui/icons-material';
import image from "../successimg.png";
import logo from "../logo.png";
import '../App.css';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        height: "auto",
        background: 'linear-gradient(60deg, #51FF81, #57FCF5)',
        backgroundColor: "black",
        paddingBottom: "30px",
        minWidth: "100vw",
        width: "auto"
    };

    const descriptionStyle = {
        fontSize: '26px',
        color: '#0F852F',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
        fontWeight: 'bold'
    };

    const buttonStyle = {
        marginTop: '20px',
        backgroundColor: '#007bff',
        transition: 'background-color 0.3s, transform 0.3s',
        fontFamily: 'Poppins, sans-serif',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        padding: "10px"
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = 'green';
        e.currentTarget.style.transform = 'scale(1.09)';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = '#007bff';
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
                <h2 style={descriptionStyle}>
                    Request sent to admin successfully!
                </h2>
                <Button
                    variant="contained"
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => { navigate("/scanner") }}
                >
                    Add more screens <QrCodeScanner style={{ marginLeft: "20px" }} />
                </Button>
                <Button
                    variant="contained"
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => { navigate("/") }}
                >
                    Add more screens <Abc style={{ marginLeft: "20px" }} />
                </Button>
            </div>
        </Container>
    );
}

export default App;
