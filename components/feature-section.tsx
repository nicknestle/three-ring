import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

export function FeatureSection() {
  const features = [
    {
      title: "Seamless Collaboration",
      description: "Work together in real-time with your team, no matter where they are located.",
      icon: CheckCircle2,
    },
    {
      title: "Project Management",
      description: "Track progress, assign tasks, and meet deadlines with powerful project tools.",
      icon: CheckCircle2,
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks and focus on what matters most to your business.",
      icon: CheckCircle2,
    },
    {
      title: "Insightful Analytics",
      description: "Make data-driven decisions with comprehensive reporting and analytics.",
      icon: CheckCircle2,
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security to keep your data safe and your business running.",
      icon: CheckCircle2,
    },
    {
      title: "Integrations",
      description: "Connect with the tools you already use to create a seamless workflow.",
      icon: CheckCircle2,
    },
  ]

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 12 }, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            Everything you need to succeed
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
            Three Ring combines all the tools you need into one intuitive platform.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper elevation={0} sx={{ p: 3, height: "100%", borderRadius: 2 }}>
                <feature.icon size={48} color="#3861fb" />
                <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, position: "relative", height: 400, borderRadius: 2, overflow: "hidden" }}>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Three Ring Platform"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </Box>
      </Container>
    </Box>
  )
}

