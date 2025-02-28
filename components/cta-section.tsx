import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

export function CTASection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 12 },
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h2" gutterBottom>
            Ready to transform your workflow?
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 4, maxWidth: 600, mx: "auto" }}>
            Join thousands of teams already using Three Ring to collaborate better and deliver faster.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mb: 2 }}>
            <Button
              variant="contained"
              component={Link}
              href="/signup"
              size="large"
              color="secondary"
              endIcon={<ArrowRight size={16} />}
            >
              Start Free Trial
            </Button>
            <Button
              variant="outlined"
              component={Link}
              href="/demo"
              size="large"
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.3)",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Request Demo
            </Button>
          </Stack>

          <Typography variant="body2" sx={{ opacity: 0.7, mt: 2 }}>
            No credit card required. 14-day free trial.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

