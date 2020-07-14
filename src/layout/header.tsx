import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Button, Avatar, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import logo from './../images/logo.png'

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: '#424242',
    justifyContent: 'space-between',
    color: '#fff'
  },
  link: {
    textDecoration: 'none',
  },
})

export interface HeaderProps {
  siteTitle?: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const Header: FC<HeaderProps> = ({ siteTitle = '', onToggleTheme }) => {
  const classes = useStyles()

  return (
    <AppBar component="header" position="static">
      <Toolbar className={classes.toolbar}>
        <ButtonBase
          to="/"
          component={GatsbyLink}
          className={classes.link}
        >
          <Avatar alt="Android Dev BR" src={logo} />
        </ButtonBase>
        <Button color="inherit" onClick={onToggleTheme}>
          Toggle Theme
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
