"use client"

// import { useState } from "react"
import { Box, Typography, Button, Grid, Paper, Divider, Card, CardContent } from "@mui/material"
import { ArrowBack, Home, Person, AttachMoney, CalendarToday, Email, Phone, Payments, Check } from "@mui/icons-material"
import { useMortgageData } from "../context/MortgageContext"
import Swal from "sweetalert2"

function DataSummary({ onBack, onSubmit }) {
  const { mortgageData } = useMortgageData()
//   const [confirmOpen, setConfirmOpen] = useState(false)

  const calculateMonthlyPayment = () => {
    const principal = Number.parseFloat(mortgageData.loanAmount) || 300000
    const interestRate = 3.5 / 100 / 12 // Monthly interest rate
    const numberOfPayments = (Number.parseInt(mortgageData.loanTerm) || 30) * 12 // Total number of payments

    const monthlyPayment =
      (principal * interestRate * Math.pow(1 + interestRate, numberOfPayments)) /
      (Math.pow(1 + interestRate, numberOfPayments) - 1)

    return Math.round(monthlyPayment)
  }

  const monthlyPayment = calculateMonthlyPayment()
  const totalPayment = monthlyPayment * (Number.parseInt(mortgageData.loanTerm) || 30) * 12

  const handleSubmitClick = () => {
    Swal.fire({
      title: "Submit Application?",
      text: "Are you sure you want to submit this mortgage application?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1976d2",
      cancelButtonColor: "#d32f2f",
      confirmButtonText: "Yes, submit it!",
      cancelButtonText: "Review again",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Processing...",
          text: "Your application is being submitted",
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
          },
        }).then(() => {
          onSubmit()
        })
      }
    })
  }

  return (
    <Box sx={{ maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" color="primary.main">
        Data Summary
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Review your mortgage information before submission
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", background:"rgba(191, 239, 255, 0.39)" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Home color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Property Details
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary">
                    Address
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {mortgageData.propertyAddress || "123 Elm Street, Springfield"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary">
                    Type
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {mortgageData.propertyType}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary">
                    Size
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {mortgageData.propertySize}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", background:"rgba(199, 224, 250, 0.39)" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Person color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Personal Information
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary">
                    Name
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {mortgageData.borrowerName || "John Smith"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Email fontSize="small" sx={{ mr: 0.5, color: "text.secondary" }} />
                    <Typography variant="body1" fontWeight="medium">
                      {mortgageData.email}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary">
                    Phone
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Phone fontSize="small" sx={{ mr: 0.5, color: "text.secondary" }} />
                    <Typography variant="body1" fontWeight="medium">
                      {mortgageData.phone}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", background:"rgba(199, 247, 250, 0.39)" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AttachMoney color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Loan Specifics
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary">
                    Loan Amount
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    ${mortgageData.loanAmount ? Number(mortgageData.loanAmount).toLocaleString() : "300,000"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary">
                    Interest Rate
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {mortgageData.interestRate}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary">
                    Term
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {mortgageData.loanTerm || "30"} years
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Transaction Date
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CalendarToday fontSize="small" sx={{ mr: 0.5, color: "text.secondary" }} />
                    <Typography variant="body1" fontWeight="medium">
                      {mortgageData.transactionDate || "Not specified"}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Loan Officer
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {mortgageData.loanOfficerName || "Not specified"}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Payments color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Payment Breakdown
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      background: "linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(25, 118, 210, 0.25)",
                    }}
                  >
                    <Typography variant="body2">Monthly Payment</Typography>
                    <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                      ${monthlyPayment.toLocaleString()}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      background: "linear-gradient(135deg, #ba68c8 0%, #9c27b0 100%)",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(156, 39, 176, 0.25)",
                    }}
                  >
                    <Typography variant="body2">Total Payment</Typography>
                    <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                      ${totalPayment.toLocaleString()}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

       <Box style={{ marginTop: 32, display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={onBack}
          variant="outlined"
          color="primary"
          size="large"
          style={{ minWidth: 150 }}
          startIcon={<ArrowBack />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ minWidth: 150 }}
          onClick={() => {
            Swal.fire({
              title: "Success!",
              text: "Mortgage application submitted successfully!",
              icon: "success",
              confirmButtonColor: "#1976d2",
            })
            // You could redirect to a success page or reset the form here
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default DataSummary
