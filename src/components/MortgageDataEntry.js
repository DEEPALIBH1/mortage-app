"use client"

import { useState } from "react"
import { Box, Typography, TextField, Button, Grid, InputAdornment, Card, CardContent, Divider } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {
  CalendarMonth,
  Person,
  Badge,
  AttachMoney,
  Home,
  Description,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material"
import { useMortgageData } from "../context/MortgageContext"

function MortgageDataEntry({ onNext, onBack }) {
  const { mortgageData, updateMortgageData } = useMortgageData()
  const [date, setDate] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    updateMortgageData({ [name]: value })
  }

  const handleDateChange = (newDate) => {
    setDate(newDate)
    if (newDate) {
      const formattedDate = newDate.toLocaleDateString("en-US")
      updateMortgageData({ transactionDate: formattedDate })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onNext()
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" color="primary.main">
        Mortgage Data Entry
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Enter or update mortgage information
      </Typography>

      <Card
        sx={{
          mb: 4,
          borderRadius: 2,
          background: "linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)",
          color: "white",
          boxShadow: "0 4px 20px rgba(25, 118, 210, 0.25)",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Enter New Mortgage Data
          </Typography>
          <Typography variant="body2">Fill in all required fields to create a new mortgage entry</Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.main">
            Property Information
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Property Address"
                name="propertyAddress"
                value={mortgageData.propertyAddress}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Home color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Transaction Date"
                  value={date}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarMonth color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.main">
            Personal Information
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Borrower/Property Owner Name"
                name="borrowerName"
                value={mortgageData.borrowerName}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Loan Officer Name"
                name="loanOfficerName"
                value={mortgageData.loanOfficerName}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="NMLS ID"
                name="nmlsId"
                value={mortgageData.nmlsId}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Badge color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.main">
            Loan Details
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Loan Amount"
                name="loanAmount"
                type="number"
                value={mortgageData.loanAmount}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Loan Term (# Of Years)"
                name="loanTerm"
                type="number"
                value={mortgageData.loanTerm}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Description color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Down Payment"
                name="downPayment"
                type="number"
                value={mortgageData.downPayment}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="APN"
                name="apn"
                value={mortgageData.apn}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Description color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Entered By"
                name="enteredBy"
                value={mortgageData.enteredBy}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={onBack}
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<ArrowBack />}
          sx={{
            minWidth: 150,
            borderRadius: 2,
            py: 1.5,
          }}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForward />}
          sx={{
            minWidth: 150,
            borderRadius: 2,
            py: 1.5,
            boxShadow: "0 4px 14px rgba(25, 118, 210, 0.3)",
            background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  )
}

export default MortgageDataEntry
