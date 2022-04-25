import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, Button, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>Photo Gallery</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Galleria</Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone, this is a photo album !
            </Typography>
            <div>
              <Grid container spacing={2} justify='center'>
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
      </main>
    </>
  )
}


