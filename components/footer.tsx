import Link from "next/link"
import { CircleOff } from "lucide-react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", borderTop: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  marginBottom: 16,
                }}
              >
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
                <Typography variant="h6" component="div" fontWeight="bold">
                  Three Ring
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400 }}>
                Three Ring helps teams collaborate and manage projects with ease. Simplify your workflow and boost
                productivity.
              </Typography>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Product
              </Typography>
              <Stack spacing={1}>
                <Link href="/features" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Features
                  </Typography>
                </Link>
                <Link href="/pricing" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Pricing
                  </Typography>
                </Link>
                <Link href="/integrations" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Integrations
                  </Typography>
                </Link>
                <Link href="/changelog" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Changelog
                  </Typography>
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Resources
              </Typography>
              <Stack spacing={1}>
                <Link href="/blog" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Blog
                  </Typography>
                </Link>
                <Link href="/documentation" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Documentation
                  </Typography>
                </Link>
                <Link href="/guides" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Guides
                  </Typography>
                </Link>
                <Link href="/help" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Help Center
                  </Typography>
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Company
              </Typography>
              <Stack spacing={1}>
                <Link href="/about" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    About
                  </Typography>
                </Link>
                <Link href="/contact" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Contact
                  </Typography>
                </Link>
                <Link href="/careers" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Careers
                  </Typography>
                </Link>
                <Link href="/legal" style={{ color: "text.secondary", textDecoration: "none" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                    Legal
                  </Typography>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Divider />

        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Three Ring. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: { xs: 2, sm: 0 } }}>
            <Link href="/terms" style={{ color: "text.secondary", textDecoration: "none" }}>
              <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                Terms
              </Typography>
            </Link>
            <Link href="/privacy" style={{ color: "text.secondary", textDecoration: "none" }}>
              <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                Privacy
              </Typography>
            </Link>
            <Link href="/cookies" style={{ color: "text.secondary", textDecoration: "none" }}>
              <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                Cookies
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

