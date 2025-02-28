import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import AvatarGroup from "@mui/material/AvatarGroup"
import Stack from "@mui/material/Stack"

export function HeroSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 12, lg: 16 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography variant="h1" component="h1" gutterBottom>
                Simplify Your Workflow with Three Ring
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: { md: "1.25rem" } }}>
                The all-in-one platform that helps teams collaborate, manage projects, and deliver results faster.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  component={Link}
                  href="/signup"
                  size="large"
                  endIcon={<ArrowRight size={16} />}
                >
                  Get Started
                </Button>
                <Button variant="outlined" component={Link} href="/demo" size="large">
                  Request Demo
                </Button>
              </Stack>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <AvatarGroup max={3}>
                  <Avatar sx={{ bgcolor: "grey.200", color: "text.primary" }}>JD</Avatar>
                  <Avatar sx={{ bgcolor: "grey.200", color: "text.primary" }}>SD</Avatar>
                  <Avatar sx={{ bgcolor: "grey.200", color: "text.primary" }}>TW</Avatar>
                </AvatarGroup>
                <Typography variant="body2" color="text.secondary">
                  Trusted by{" "}
                  <Box component="span" fontWeight="medium" color="text.primary">
                    2,000+
                  </Box>{" "}
                  teams worldwide
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ position: "relative", height: { xs: 350, md: 450, lg: 500 }, width: "100%" }}>
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Three Ring Dashboard"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

