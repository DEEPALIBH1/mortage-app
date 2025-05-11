"use client"

import { Box, Typography, Button, Paper, Container } from "@mui/material"
import { CheckCircle, Add } from "@mui/icons-material"

function SuccessScreen({ onNewApplication }) {
  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          textAlign: "center",
          py: 8,
          px: 4,
          mt: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <CheckCircle
          sx={{
            fontSize: 80,
            color: "success.main",
            mb: 3,
          }}
        />
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          Application Submitted Successfully!
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 500, mx: "auto", mb: 4 }}>
          Your mortgage application has been submitted. Our team will review your information and contact you shortly.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Application Reference: <strong>MRT-{Math.floor(100000 + Math.random() * 900000)}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Submitted on:{" "}
            <strong>
              {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </strong>
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Add />}
          onClick={onNewApplication}
          sx={{
            mt: 6,
            px: 4,
            py: 1.5,
            borderRadius: 2,
            boxShadow: "0 4px 14px rgba(25, 118, 210, 0.3)",
          }}
        >
          Start New Application
        </Button>
      </Paper>
    </Container>
  )
}

export default SuccessScreen
