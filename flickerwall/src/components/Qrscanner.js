import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Container, Box, Typography, Button, Paper } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import '../Qr.css';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState(null);
  const [sernum, setsernum] = useState("");

  useEffect(() => {
    if (scanResult !== null) {
      setsernum(scanResult.slice(-16));
    }
  }, [scanResult]);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    let isScanning = true;

    const success = (result) => {
      if (isScanning) {
        isScanning = false; // Stop scanning
        setScanResult(result);
        scanner.clear().then(() => {
          console.log("Scanner cleared.");
        }).catch(error => {
          console.error("Failed to clear scanner:", error);
        });
      }
    };

    const error = (err) => {
      console.warn(err);
    };

    scanner.render(success, error);

    return () => {
      isScanning = false;
      scanner.clear().catch(error => {
        console.error("Failed to clear scanner on unmount:", error);
      });
    };
  }, []);

  const next = () => {
    localStorage.setItem("orgnumber", sernum);
    navigate("/launch2");
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Paper elevation={3} style={{ padding: '30px', borderRadius: '15px' }}>
        <Typography variant="h4" gutterBottom>
          QR Scanning Code
        </Typography>
        {scanResult ? (
          <Box style={{ marginTop: '20px' }}>
            <CheckCircle style={{ fontSize: '48px', color: 'green' }} />
            <Typography variant="h6" style={{ marginTop: '10px' }}>
              Success
            </Typography>
            <Typography variant="body2" style={{ marginTop: '10px' }}>
              Organisation code: {scanResult.slice(-16)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={() => next()}
            >
              Proceed to screen name
            </Button>
          </Box>
        ) : (
          <Box style={{ marginTop: '20px' }}>
            <div id="reader" style={{ margin: 'auto', width: '100%' }}></div>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;
