"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  Collapse,
  IconButton,
  InputAdornment,
  Card,
  CardContent,
} from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {
  ExpandMore,
  ExpandLess,
  CalendarMonth,
  Person,
  Badge,
  AttachMoney,
  Home,
  Description,
  ArrowForward,
} from "@mui/icons-material"
import { useMortgageData } from "../context/MortgageContext"

function MortgageContract({ onNext }) {
  const { mortgageData, updateMortgageData } = useMortgageData()
  const [expanded, setExpanded] = useState(false)
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
        Mortgage Contract
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Please fill in the contract details below
      </Typography>

      <Box sx={{ mb: 4, cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "primary.light",
            color: "white",
            borderRadius: 2,
          }}
        >
          <Typography variant="subtitle1" fontWeight="medium">
            View Sample Mortgage Contract
          </Typography>
          <IconButton size="small" sx={{ color: "white" }}>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Paper>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Paper sx={{ p: 2, mt: 1, borderRadius: 2 }}>
            <Box
              component="img"
              src="/mortgage_image.png"
              alt="Sample Mortgage Contract"
              sx={{
                width: "100%",
                height: "70%",
                borderRadius: 1,
                boxShadow: 2,
              }}
            />
          </Paper>
        </Collapse>
      </Box>

      <Card sx={{ mb: 4, borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.main">
            Property Information
          </Typography>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.main">
            Loan Officer Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth required>
                <InputLabel>Loan Term (# Of Years)</InputLabel>
                <Select
                  name="loanTerm"
                  value={mortgageData.loanTerm}
                  label="Loan Term (# Of Years)"
                  onChange={handleChange}
                >
                  <MenuItem value="15">15</MenuItem>
                  <MenuItem value="20">20</MenuItem>
                  <MenuItem value="30">30</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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

      <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForward />}
          sx={{
            minWidth: 200,
            py: 1.5,
            borderRadius: 2,
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

export default MortgageContract
