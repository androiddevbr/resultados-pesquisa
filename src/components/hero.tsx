import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Container, Theme, Grid, Tooltip } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  container: {
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }
  }
}))

export interface HeroProps {
  title: string
  description?: string,
  icon?: any,
  featured?: boolean
}

const Hero: FC<HeroProps> = ({ title, description = '', icon, children, featured = false }) => {
  const classes = useStyles()
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          spacing={4}
          className={classes.container}>
          <Grid
            item
            container
            direction="column">
            <Typography
              component={featured ? "h2" : "h5"}
              variant={featured ? "h2" : "h5"}
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
            <Tooltip title="Ilustrações por Freepik">
              <img src={icon} width={300} />
            </Tooltip>
          }
        </Grid>
        {children}
      </Container >
    </div >
  )
}

export default Hero
