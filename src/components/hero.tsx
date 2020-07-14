import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Container, Theme, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}))

export interface HeroProps {
  title: string
  description?: string,
  icon?: any
}

const Hero: FC<HeroProps> = ({ title, description = '', icon, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-evenly"
          style={{ flexWrap: 'nowrap' }}>
          <Grid
            item
            direction="column">
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
              {description}
            </Typography>
          </Grid>
          {icon &&
            <figure style={{ textAlign: "center" }}>
              <img src={icon} width={300} />
              <figcaption>Ilustração por <a href="https://www.blackillustrations.com/">Black Illustrations</a></figcaption>
            </figure>
          }
        </Grid>
        {children}
      </Container>
    </div>
  )
}

export default Hero
