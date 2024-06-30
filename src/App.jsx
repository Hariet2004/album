import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./styles"; // Adjust the path as necessary

const cards = [
  { id: 1, title: "Posche", description: "Cars", image: "/images/image1.jfif" },
  { id: 2, title: "Posche", description: "Cars", image: "/images/image2.jfif" },
  { id: 3, title: "Posche", description: "Cars", image: "/images/image3.jfif" },
  { id: 4, title: "Posche", description: "Cars", image: "/images/image4.jfif" },
  { id: 5, title: "Posche", description: "Cars", image: "/images/image5.jfif" },
  { id: 6, title: "Posche", description: "Cars", image: "/images/image6.jfif" },
  { id: 7, title: "Posche", description: "Cars", image: "/images/image7.jfif" },
  { id: 8, title: "Posche", description: "Cars", image: "/images/image8.jfif" },
  { id: 9, title: "Posche", description: "Cars", image: "/images/image9.jfif" },
];

const App = () => {
  const classes = useStyles();

  const handleSeePhotos = () => {
    console.log('See my photos button clicked');
    // Add your logic here
  };

  const handleSecondaryAction = () => {
    console.log('Secondary action button clicked');
    // Add your logic here
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6" style={{ marginLeft: "10px" }}>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Welcome to our website, where we bring your most cherished moments to life. Explore our extensive collection of beautifully crafted photo albums, designed to preserve your memories with elegance and style. Whether you're celebrating a special occasion or simply want to relive the joy of everyday moments, our albums are the perfect way to keep your memories alive for years to come.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleSeePhotos}>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={handleSecondaryAction}>
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={`Image ${card.id}`}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Done by Hariet!
        </Typography>
      </footer>
    </>
  );
};

export default App;
