import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, Button, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   container:{
//     backgroundColor: theme.pallette.background.paper,
//     padding: theme.spacing(8,0,6)
//   }

// }));

const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {

  // const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera style={{ marginRight: '10px', fontSize: '2rem' }} />
          <Typography variant='h6'>BlogPost</Typography>
        </Toolbar>
      </AppBar>
      <main>

        {/* <div className={classes.container}> */}

        <div style={{ marginTop: '30px' }}>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Galleria</Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone, this is a blog-photo album!
            </Typography>
            <div>
              <Grid container spacing={2} justify='center' style={{ marginTop: '20px' }}>
                <Grid item>
                  <Button variant='contained' color='Primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='Primary'>
                    See pictures
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth='md' style={{ padding: "50px 0" }}>
          <Grid container spacing={4}>
            {Cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia image='https://source.unsplash.com/random' title='image title' style={{ paddingTop: '56.25%' }} />
                  <CardContent style={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use it to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default App;















// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// // import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// // import CardMedia from '@mui/material/CardMedia';
// // import CardContent from '@mui/material/CardContent';
// // import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// // import { Con tainer } from '@mui/material';

// const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <>


//       <Container maxWidth='md' style={{ padding: "50px 0" }}>
//         <Grid container spacing={4}>
//           {Cards.map((card) => (
//             <Grid item key={card} xs={12} sm={6} md={4}>
//               <Card sx={{ maxWidth: 345 }}>
//             <CardHeader
//               avatar={
//                 <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                   R
//                 </Avatar>
//               }
//               action={
//                 <IconButton aria-label="settings">
//                   <MoreVertIcon />
//                 </IconButton>
//               }
//               title="Shrimp and Chorizo Paella"
//               subheader="September 14, 2016"
//             />
//             <CardMedia
//               component="img"
//               height="194"
//               image="https://source.unsplash.com/random/"
//               alt="Paella dish"
//             />
//             <CardContent>
//               <Typography variant="body2" color="text.secondary">
//                 This impressive paella is a perfect party dish and a fun meal to cook
//                 together with your guests. Add 1 cup of frozen peas along with the mussels,
//                 if you like.
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <ExpandMore
//                 expand={expanded}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph>Method:</Typography>
//                 <Typography paragraph>
//                   Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//                   aside for 10 minutes.
//                 </Typography>
//                 <Typography paragraph>
//                   Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//                   medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//                   occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//                   large plate and set aside, leaving chicken and chorizo in the pan. Add
//                   pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//                   stirring often until thickened and fragrant, about 10 minutes. Add
//                   saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//                 </Typography>
//                 <Typography paragraph>
//                   Add rice and stir very gently to distribute. Top with artichokes and
//                   peppers, and cook without stirring, until most of the liquid is absorbed,
//                   15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//                   mussels, tucking them down into the rice, and cook again without
//                   stirring, until mussels have opened and rice is just tender, 5 to 7
//                   minutes more. (Discard any mussels that don&apos;t open.)
//                 </Typography>
//                 <Typography>
//                   Set aside off of the heat to let rest for 10 minutes, and then serve.
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </>
//   );
// }
