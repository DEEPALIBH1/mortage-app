"use client"

import { useState } from "react"
import { Container, Box, Typography, Paper } from "@mui/material"
import MortgageContract from "./components/MortgageContract"
import MortgageDataEntry from "./components/MortgageDataEntry"
import DataSummary from "./components/DataSummary"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./theme/theme"
import { MortgageDataProvider } from "./context/MortgageContext"

function App() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const steps = [
    { label: "Mortgage Contract", component: <MortgageContract onNext={handleNext} /> },
    { label: "Mortgage Data Entry", component: <MortgageDataEntry onNext={handleNext} onBack={handleBack} /> },
    { label: "Data Summary", component: <DataSummary onBack={handleBack} /> },
  ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MortgageDataProvider>
        <Container maxWidth="lg" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Paper
            elevation={3}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              minHeight: "80vh",
            }}
          >
            <Box
              style={{
                padding: "16px",
                backgroundColor: theme.palette.primary.main,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5" component="h1" style={{ fontWeight: "bold" }}>
                Mortgage
              </Typography>
              <Box style={{ display: "flex", gap: "1px" }}>
                {steps.map((step, index) => (
                  <Box
                    key={index}
                    style={{
                      padding: "3px 10px",
                      borderRadius: "8px",
                      backgroundColor: activeStep === index ? "white" : "transparent",
                      color: activeStep === index ? theme.palette.primary.main : "white",
                      cursor: "pointer",
                      fontWeight: activeStep === index ? "bold" : "normal",
                    }}
                    onClick={() => setActiveStep(index)}
                  >
                    <Typography variant="body2">{step.label}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box style={{ padding: "32px" }}>{steps[activeStep].component}</Box>
          </Paper>
        </Container>
      </MortgageDataProvider>
    </ThemeProvider>
  )
}

export default App
