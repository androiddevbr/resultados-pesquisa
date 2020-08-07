import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Button, Avatar, ButtonBase, Tabs, Tab, Modal, Typography, Slide, useScrollTrigger } from '@material-ui/core'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logo from './../images/logo.png'
import data from '../../static/data.json';

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      borderRadius: 6,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: 'none'
    },
  })
);

interface HideOnScrollProps {
  children: React.ReactElement;
}

const HideOnScroll: FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({ target: undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    onChangeTab(newValue);
  };

  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <HideOnScroll>
      <AppBar component="header" position="sticky" ref={rootRef}>
        <Toolbar className={classes.toolbar}>
          <ButtonBase
            to="/"
            component={GatsbyLink}
            className={classes.link}
          >
            <Avatar alt="Android Dev BR" src={logo} />
          </ButtonBase>
          <div style={{ display: 'flex' }}>
            <ButtonBase component='a' href="https://github.com/androiddevbr/resultados-pesquisa/data" target="_blank"  >
              <Button color="inherit">
                Dados brutos
            </Button>
            </ButtonBase>
            <Button color="inherit" onClick={handleOpen}>
              Metodologia
        </Button>
            <Button color="inherit" onClick={onToggleTheme}>
              Toggle Theme
        </Button>
          </div>

        </Toolbar>
        <Tabs orientation={matches ? 'vertical' : 'horizontal'} indicatorColor="primary" variant="scrollable" className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example">
          {data.map((section, index) => <Tab key={index} label={section.label} {...a11yProps(index)} />)}
          <Tab label={'Salários'} {...a11yProps(data.length)} />
        </Tabs>
        <Modal
          open={open}
          onClose={handleClose}
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
          <div className={classes.paper}>
            <Typography variant="h2" component="h2" >Metodologia</Typography>
            <div>
              <Typography paragraph>
                Entre os dias 1 de Junho e 15 de Julho de 2020 abrimos e divulgamos um formulário com toda a comunidade Android Dev BR que tem um foco em desenvolvimento android. Durante esse período 323 pessoas responderam este formulário que possui diversas perguntas:
          </Typography>

              <ol>
                <li>gerais sobre dados demográficos: escolaridade, faixa etária, etc.</li>
                <li>dados sobre o contexto trabalhista: regime de trabalho, tamanho da empresa, etc.</li>
                <li>dados mais específicos relacionados ao trabalho com desenvolvimento android: cargo, tamanho do time, etc.</li>
                <li>dados específicos sobre trabalho em empresas no Brasil: localização, faixa salarial, benefícios, etc.</li>
                <li>dados específicos sobre trabalho no exterior: localização, modeda, faixa salarial, etc.</li>
                <li>dados sobre trabalho como freelancer: valor por hora, tipos de projetos, etc.</li>
              </ol>

              <Typography paragraph>
                Aproveitamos a oportunidade para também buscar feedbacks sobre a atuação e impacto da comunidade na vida e carreira profissional das pessoas participantes.
            <br /><br />
            É possível ver mais informações sobre os resultados da pesquisa no <a className={classes.link} style={{ color: theme.palette.text.secondary }} target="_blank" href="https://github.com/androiddevbr/resultados-pesquisa/data">Github</a>
              </Typography>
            </div>
          </div>
        </Modal>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header
