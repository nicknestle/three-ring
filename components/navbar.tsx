"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { CircleOff, Menu } from "lucide-react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setIsMenuOpen(open)
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: "primary.main",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
              }}
            >
              <CircleOff className="h-5 w-5 text-white" />
            </Box>
            <Typography variant="h6" component="div" fontWeight="bold" sx={{ flexGrow: 0 }}>
              Three Ring
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {navItems.map((item) => (
              <Button key={item.label} component={Link} href={item.href} sx={{ mx: 1, color: "text.primary" }}>
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Button variant="outlined" component={Link} href="/login">
              Log in
            </Button>
            <Button variant="contained" component={Link} href="/signup">
              Sign up
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ ml: "auto", display: { md: "none" } }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={Link} href={item.href}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <Button variant="outlined" component={Link} href="/login" fullWidth>
              Log in
            </Button>
            <Button variant="contained" component={Link} href="/signup" fullWidth>
              Sign up
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  )
}

