import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import { Videocam } from '@mui/icons-material';
import image from "../homeimage.png";
import logo from "../logo.png";
import '../App.css'; // Make sure to create this file and include necessary CSS
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function App() {

    const SITE = "http://localhost:8000"

    const navigate = useNavigate();
    const [orgnumber] = useState(localStorage.getItem("orgnumber"));

    useEffect(() => {
        const orgcodeverification = async () => {
            try {
                const header = {
                    "Content-Type": "application/json"
                };
                const response = await axios.post(`${process.env.SITE}/screens/findorgcodeonly`, { orgnumber }, { headers: header });
                if (response.data.success) {
                    console.log("Organization code verified:", response.data);
                } else {
                    navigate("/fail");
                }
            } catch (error) {
                console.error("Error verifying organization code:", error);
                navigate("/fail");
            }
        };


        if (orgnumber) {
            orgcodeverification();
        }
    }, [orgnumber, navigate]);

    const [screenName, setScreenName] = useState('');

    const handleScreenNameChange = (event) => {
        setScreenName(event.target.value);
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
        padding: "10px"
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
        localStorage.setItem("orgnumber", "")
        console.log(screenName)
        try {
            const header = {
                "Content-Type": "application/json"
            };
            const response = await axios.post(`${SITE}/screens/findscreenonly`, { screenName }, { headers: header });
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
                <TextField
                    type="text"
                    label="Screen name"
                    variant="outlined"
                    fullWidth
                    margin='normal'
                    value={screenName}
                    onChange={handleScreenNameChange}
                    InputProps={{
                        style: { fontFamily: 'Poppins, sans-serif', backgroundColor: "white", boxShadow: '0 7px 15px rgba(0, 0, 0, 0.2)', color: "gray" }
                    }}
                    InputLabelProps={{
                        style: { color: 'black', fontSize: "19px" }
                    }}
                />
                <Button
                    variant="contained"
                    style={screenName ? buttonStyle : { ...buttonStyle, ...buttonDisabledStyle }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    disabled={!screenName}
                    onClick={orgcodeverification}
                >
                    Send Request to admin →
                </Button>
            </div>
        </Container>
    );
}

export default App;
