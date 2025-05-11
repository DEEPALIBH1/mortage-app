"use client"

import { AppBar, Toolbar, Typography, Box, Button, useMediaQuery, IconButton, Menu, MenuItem } from "@mui/material"
import { Home, Menu as MenuIcon } from "@mui/icons-material"
import { useState } from "react"
import theme from "../theme/theme"

function Header({ activeStep }) {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(90deg, #1976d2 0%, #1565c0 100%)",
        borderBottom: "1px solid",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Home sx={{ mr: 1, fontSize: 28 }} />
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 700,
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            MortgageDataUI
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleClick} edge="end">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              <MenuItem onClick={handleClose}>Applications</MenuItem>
              <MenuItem onClick={handleClose}>Reports</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Dashboard
            </Button>
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Applications
            </Button>
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Reports
            </Button>
            <Button color="inherit" sx={{ fontWeight: 500 }}>
              Settings
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
