import Link from "next/link"
import Image from "next/image"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Streamlining Your Workflow with Three Ring",
      description: "Learn how to optimize your team's productivity with our platform.",
      date: "March 15, 2024",
      author: "Jane Smith",
      category: "Productivity",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "The Future of Remote Collaboration",
      description: "Discover how remote teams can collaborate effectively using modern tools.",
      date: "March 10, 2024",
      author: "John Doe",
      category: "Remote Work",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "5 Ways to Improve Team Communication",
      description: "Effective communication strategies for distributed teams.",
      date: "March 5, 2024",
      author: "Alex Johnson",
      category: "Communication",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Automating Repetitive Tasks with Three Ring",
      description: "How to save time by automating your workflow.",
      date: "February 28, 2024",
      author: "Sarah Williams",
      category: "Automation",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Our Blog
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto", fontSize: { md: "1.25rem" } }}
          >
            Insights, tips, and news about productivity, collaboration, and getting the most out of Three Ring.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia component="div" sx={{ position: "relative", height: 200 }}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <Chip label={post.category} size="small" />
                    <Typography variant="caption" color="text.secondary">
                      {post.date}
                    </Typography>
                  </Stack>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.description}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "auto" }}>
                    <Typography variant="caption" color="text.secondary">
                      By {post.author}
                    </Typography>
                    <Link href={`/blog/${post.id}`} style={{ color: "#3861fb", fontWeight: 500, fontSize: "0.875rem" }}>
                      Read more
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

