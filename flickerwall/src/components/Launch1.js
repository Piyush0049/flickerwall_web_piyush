import React, { useState } from 'react';
import { IconButton, TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { Visibility, VisibilityOff, Videocam, QrCodeScanner } from '@mui/icons-material';
import image from "../homeimage.png";
import logo from "../logo.png";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
const dotenv = require("dotenv");

function App() {

    const SITE = "http://localhost:8000"

    const navigate = useNavigate();
    const [showOrgCode, setShowOrgCode] = useState(false);

    const toggleOrgCodeVisibility = () => {
        setShowOrgCode(!showOrgCode);
    };

    const [screenname, setscreenname] = useState('');
    const [orgcode, setorgcode] = useState('');

    const handleScreenNameChange = (event) => {
        setscreenname(event.target.value);
    };

    const handleorgcodeChange = (event) => {
        setorgcode(event.target.value);
    };


    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        height: "auto",
        background: 'linear-gradient(60deg, #BFFFFC, #57FCF5)',
        backgroundColor: "black",
        paddingBottom: "30px",
        minWidth: "100vw",
        width: "auto"
    };

    const descriptionStyle = {
        fontSize: '18px',
        color: 'black',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
    };

    const buttonStyle = {
        marginTop: '20px',
        backgroundColor: '#007bff',
        transition: 'background-color 0.3s, transform 0.3s',
        fontFamily: 'Poppins, sans-serif',
        borderRadius: "15px",
        width: "100%",
        padding: "10px",
        color: 'white'
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = 'green';
        e.target.style.transform = 'scale(1.09)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = '#007bff';
        e.target.style.transform = 'scale(1)';
    };

    const buttonDisabledStyle = {
        backgroundColor: 'gray',
        color: 'white',
    };

    const orgcodeverification = async () => {
        console.log(screenname, orgcode)
        try {
            const header = {
                "Content-Type": "application/json"
            };
            const response = await axios.post(`${SITE}/screens/findscreenorgcode`, { orgcode, screenname }, { headers: header });
            if (response.data.success) {
                console.log("Organization code verified:", response.data);
                navigate("/success");
            } else {
                navigate("/fail");
            }
        } catch (error) {
            console.error("Error verifying organization code:", error);
            navigate("/fail");
        }
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
                    className="illustration"
                    style={{ boxShadow: '0 7px 15px rgba(0, 0, 0, 0.4)', }}
                />
                <Typography variant="body1" style={descriptionStyle}>
                    Enjoy your hassle-free journey.
                </Typography>
                <Link href="/help" style={{ textDecoration: 'underline', color: '#007bff', display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    <Videocam style={{ color: "blue", marginRight: "5px" }} />
                    <p style={{ fontFamily: 'Poppins, sans-serif' }}>Learn how to add screen</p>
                </Link>

                <Box style={{ width: '100%' }}>
                    <TextField
                        type={showOrgCode ? 'text' : 'password'}
                        label="Unique organisation code"
                        variant="outlined"
                        value={orgcode}
                        onChange={handleorgcodeChange}
                        fullWidth
                        InputProps={{
                            style: { fontFamily: 'Poppins, sans-serif', backgroundColor: "white", boxShadow: '0 7px 15px rgba(0, 0, 0, 0.2)', paddingRight: '48px' },
                            endAdornment: (
                                <IconButton
                                    onClick={toggleOrgCodeVisibility}
                                    style={{ position: 'absolute', right: 0 }}
                                >
                                    {!showOrgCode ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            ),
                        }}
                        InputLabelProps={{
                            style: { color: 'black', border: "black", fontSize: "16px", fontFamily: 'Poppins, sans-serif' }
                        }}
                    />
                </Box>
                <Box style={{ width: '100%', marginTop: '16px' }}>
                    <TextField
                        type="text"
                        label="Screen name"
                        variant="outlined"
                        fullWidth
                        margin='normal'
                        value={screenname}
                        onChange={handleScreenNameChange}
                        InputProps={{
                            style: { fontFamily: 'Poppins, sans-serif', backgroundColor: "white", boxShadow: '0 7px 15px rgba(0, 0, 0, 0.2)' }
                        }}
                        InputLabelProps={{
                            style: { color: 'black', fontSize: "16px", fontFamily: 'Poppins, sans-serif' }
                        }}
                    />
                </Box>
                <Button
                    variant="contained"
                    style={screenname && orgcode ? buttonStyle : { ...buttonStyle, ...buttonDisabledStyle }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    disabled={!screenname || !orgcode}
                    onClick={orgcodeverification}
                >
                    Send Request to admin →
                </Button>
                <Button
                    variant="contained"
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => { navigate("/scanner") }}
                >
                    Add screen using QR <QrCodeScanner style={{ marginLeft: "20px", color: 'inherit' }} />
                </Button>
            </div>
        </Container>
    );
}

export default App;
