import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Grid, Button, Theme, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import 'fontsource-roboto';

import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

import office from '../images/colab.svg'
import DataSection from '../layout/data-section';
import data from '../../static/data.json';
import salaries from '../../static/salaries.json';
import SalarySection from '../layout/salary-section';
import ChartSection from '../layout/chart-section';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4)
  },
}))

const IndexPage: FC = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout onChangeTab={handleChange}>
      <SEO title="Home" />
      <Grid container spacing={2} justify="center">
        <Grid item>
          {data.map((section, index) =>
            <TabPanel key={index} value={value} index={index}>
              <Hero
                title={section.hero.title}
                description={section.hero.text}
                featured={index === 0}
                icon={index === 0 ? office : undefined}>
                {section.charts?.map((entry, index) => <ChartSection key={index} data={entry} />)}
                {section.content.map((entry, index) => <DataSection key={index} data={entry} />)}
              </Hero>
            </TabPanel>
          )}
          <TabPanel value={value} index={data.length}>
            <Hero
              title="Salários"
              description="Mapeamento das médias saláriais reportados em diferentes contextos"
              featured={false}>
              <Grid container direction="column-reverse" style={{ marginBottom: 12 }}>
                <Typography variant="caption" paragraph align="center">Média geral</Typography>
                <Typography component="h3" variant="h3" align="center"><b>R$ {salaries.avg.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</b></Typography>
              </Grid>
              <Grid container direction="column" justify="space-between" spacing={4}>
                {salaries.content.map((salary, index) => <SalarySection key={index} max={salaries.max} info={salary} />)}
              </Grid>
            </Hero>
          </TabPanel>
        </Grid>
      </Grid>
    </Layout >
  )
}

export default IndexPage
