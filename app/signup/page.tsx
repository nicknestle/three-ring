"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Stack from "@mui/material/Stack"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`signup-tabpanel-${index}`}
      aria-labelledby={`signup-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  )
}

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to authentication service in a real app
    console.log({ email, password, name, company, acceptTerms })
    alert("Sign up successful! (This is a demo)")
  }

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="sm">
        <Card>
          <CardHeader
            title="Create an account"
            titleTypographyProps={{ variant: "h4", align: "center" }}
            subheader="Enter your information to create your Three Ring account"
            subheaderTypographyProps={{ align: "center" }}
          />
          <CardContent>
            <Tabs value={tabValue} onChange={handleTabChange} centered>
              <Tab label="Email" />
              <Tab label="SSO" />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack spacing={3}>
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <FormControlLabel
                    control={
                      <Checkbox checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} required />
                    }
                    label={
                      <Typography variant="body2">
                        I agree to the{" "}
                        <Link href="/terms" style={{ color: "#3861fb" }}>
                          terms of service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" style={{ color: "#3861fb" }}>
                          privacy policy
                        </Link>
                      </Typography>
                    }
                  />

                  <Button type="submit" variant="contained" fullWidth size="large" disabled={!acceptTerms}>
                    Create Account
                  </Button>
                </Stack>
              </Box>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <Stack spacing={3}>
                <Typography variant="body2" color="text.secondary" align="center">
                  Sign in with your company's single sign-on provider
                </Typography>
                <TextField
                  label="Work Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  placeholder="john@company.com"
                />
                <Button variant="contained" fullWidth size="large">
                  Continue with SSO
                </Button>
              </Stack>
            </TabPanel>

            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{" "}
                <Link href="/login" style={{ color: "#3861fb" }}>
                  Sign in
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

