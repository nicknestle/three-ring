import Image from "next/image"
import { Quote } from "lucide-react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Three Ring has transformed how our team collaborates. We've reduced meeting time by 30% and increased productivity across the board.",
      author: "Sarah Johnson",
      title: "Product Manager at TechCorp",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "The automation features alone have saved us countless hours. It's like having an extra team member who never sleeps.",
      author: "Michael Chen",
      title: "CTO at StartupX",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "We evaluated several platforms, but Three Ring stood out for its intuitive interface and comprehensive feature set. Best decision we made this year.",
      author: "Emily Rodriguez",
      title: "Operations Director at GrowthCo",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            Trusted by innovative teams
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
            See what our customers have to say about Three Ring
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Quote size={32} color="#e0e0e0" />
                  <Typography variant="body1" paragraph sx={{ mt: 2, mb: 4 }}>
                    "{testimonial.quote}"
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={testimonial.avatar} alt={testimonial.author} />
                    <Box>
                      <Typography variant="subtitle2">{testimonial.author}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 4 }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box
              key={item}
              sx={{
                height: 40,
                width: 120,
                opacity: 0.5,
                transition: "opacity 0.3s",
                "&:hover": { opacity: 1 },
              }}
            >
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Company Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

