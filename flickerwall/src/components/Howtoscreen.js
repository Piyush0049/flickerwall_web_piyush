import React from 'react';
import { Button, Container} from '@mui/material';
import { QrCodeScanner, Abc } from '@mui/icons-material';
import logo from "../logo.png";
import { useNavigate } from 'react-router-dom'; 
import image from "../question.jpg"
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
        background: 'linear-gradient(60deg, #FF8338, #F6EF00)',
        backgroundColor: "black",
        paddingBottom: "30px",
        minWidth: "100vw",
        width: "auto"
    };

    const descriptionStyle = {
        fontSize: '17px',
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
        width :"100%",
        padding : "10px"
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
            <div style={{ height: "200px" }}>
                <img src={logo} alt="i" className="logo" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                    src={image}
                    alt="Illustration"
                    className="illustrationHow"
                    style={{ boxShadow: '0 7px 15px rgba(0, 0, 0, 0.4)' }}
                />
                <div style={{maxWidth : "400px", width : "auto"}}>
                <p style={descriptionStyle}><b><u>1. Add a Screen Manually:</u></b>  Enter your organization's unique code and the desired screen name in the provided fields to add a new screen.</p>
                
                <p style={descriptionStyle}><b><u>2. Add a Screen via QR Code:</u></b>  Use our QR code scanner to quickly and accurately add screens to your organization’s network. This option ensures that your information is captured with minimal effort and maximum accuracy.</p>
                </div>
                <Button
                    variant="contained"
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={()=>{navigate("/scanner")}}
                >
                    Add screens <QrCodeScanner style={{ marginLeft: "20px" }} />
                </Button>
                <Button
                    variant="contained"
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={()=>{navigate("/")}}
                >
                    Add screens <Abc style={{ marginLeft: "20px" }} />
                </Button>
            </div>
        </Container>
    );
}

export default App;
