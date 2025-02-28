import { Check } from "lucide-react"
import Link from "next/link"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Chip from "@mui/material/Chip"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals and small teams just getting started.",
      features: [
        "Up to 3 team members",
        "5 projects",
        "Basic analytics",
        "24-hour support response time",
        "1GB storage",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for growing teams that need more power and flexibility.",
      features: [
        "Up to 10 team members",
        "Unlimited projects",
        "Advanced analytics",
        "6-hour support response time",
        "10GB storage",
        "Custom integrations",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For organizations that need advanced features and dedicated support.",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Advanced analytics with custom reports",
        "1-hour support response time",
        "100GB storage",
        "Custom integrations",
        "Dedicated account manager",
        "SSO authentication",
        "Advanced security features",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Simple, Transparent Pricing
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", fontSize: { md: "1.25rem" } }}
          >
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.name}>
              <Card
                raised={plan.popular}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderColor: plan.popular ? "primary.main" : undefined,
                }}
              >
                {plan.popular && (
                  <Chip
                    label="Most Popular"
                    color="primary"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: -12,
                      right: 24,
                    }}
                  />
                )}
                <CardHeader
                  title={plan.name}
                  titleTypographyProps={{ variant: "h5" }}
                  subheader={
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="h3" component="div" sx={{ display: "inline" }}>
                        {plan.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: "inline", ml: 0.5 }}>
                        /month
                      </Typography>
                    </Box>
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ pt: 1, pb: 2, flexGrow: 1 }}>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {plan.description}
                  </Typography>
                  <List disablePadding>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} disablePadding disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Check size={18} color="#3861fb" />
                        </ListItemIcon>
                        <ListItemText primary={feature} primaryTypographyProps={{ variant: "body2" }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant={plan.name === "Enterprise" ? "outlined" : "contained"}
                    component={Link}
                    href="/signup"
                    fullWidth
                  >
                    {plan.cta}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Need something different?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: "auto" }}>
            We offer custom plans for larger organizations with specific requirements. Contact our sales team to discuss
            your needs.
          </Typography>
          <Button variant="outlined" component={Link} href="/contact" size="large">
            Contact Sales
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

