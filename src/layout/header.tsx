import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Button, Avatar, ButtonBase, Tabs, Tab } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logo from './../images/logo.png'
import data from '../../static/data.json';

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: '#424242',
    justifyContent: 'space-between',
    color: '#fff'
  },
  tabs: {
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
  onChangeTab: (newValue: number) => void
}

const Header: FC<HeaderProps> = ({ siteTitle = '', onToggleTheme, onChangeTab }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    onChangeTab(newValue);
  };


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
      <Tabs orientation={matches ? 'vertical' : 'horizontal'} indicatorColor="primary" variant="scrollable" className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example">
        {data.map((section, index) => <Tab key={index} label={section.label} {...a11yProps(index)} />)}
        <Tab label={'Salários'} {...a11yProps(data.length)} />
      </Tabs>
    </AppBar>
  )
}

export default Header
