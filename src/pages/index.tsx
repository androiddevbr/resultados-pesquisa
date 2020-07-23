import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Grid, Button, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import 'fontsource-roboto';

import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

import office from '../images/colab.svg'
import CircularProgressWithLabel from '../components/circular-info'
import DataSection from '../layout/data-section';
import data from '../../static/data.json';

const useStyles = makeStyles((theme: Theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

const IndexPage: FC = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title="Mercado brasileiro de desenvolvimento Android"
        description="Este relatório apresenta os resultados da pesquisa feita pelo Android Dev BR para mapear as pessoas desenvolvedoras brasileiras dentro do mercado de trabalho desta área. Com 323 respostas, colhidas durante os meses de Junho e Julho de 2020, conseguimos perceber como o mercado tem atuado na área de Android e algumas tendências que estão ocorrendo."
        icon={office}
      >
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              {data.map((entry, index) => <DataSection key={index} data={entry} />)}

              {/* <CircularProgressWithLabel value={30} label={'Vale Alimentação'} />
              <CircularProgressWithLabel value={30} label={'Vale Alimentação'} /> */}
              {/* <Button
                component={GatsbyLink}
                to="/page-2/"
                variant="contained"
                color="primary"
              >
                Go to page 2
              </Button> */}
            </Grid>
          </Grid>
        </div>
      </Hero>
    </Layout>
  )
}

export default IndexPage
