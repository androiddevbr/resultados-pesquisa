import React, { FC } from 'react'

import { makeStyles } from '@material-ui/styles'
import { Container, Typography, Theme, Link } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}))

const Footer: FC = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="body1" color="textSecondary" align="center">
          Android Dev BR © {new Date().getFullYear()}, Construído com
          {` `}
          <Link href="https://www.gatsbyjs.org" color="inherit">
            Gatsby
          </Link>
          ,{` `}
          <Link href="https://www.typescriptlang.org" color="inherit">
            Typescript
          </Link>{' '}
          e
          {` `}
          <Link href="https://material-ui.com/" color="inherit">
            @Material-ui
          </Link>
          ,
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
