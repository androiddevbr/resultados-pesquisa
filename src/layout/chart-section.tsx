import React, { FC } from 'react'
import { Grid, Typography, makeStyles, Theme, Box, useTheme } from '@material-ui/core'
import ChartModel from '../model/chart';
import Entry from '../model/entry';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginTop: 80,
        marginBottom: 160,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 220
        }
    },
    subtitle: {
        fontWeight: 300
    },
    data: {
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginTop: 4,
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            maxWidth: '100vw',
            justifyContent: 'start',
            height: '380px',
        }
    }
}))

export interface ChartProps {
    data: ChartModel
}

const ChartSection: FC<ChartProps> = ({ data }) => {
    const classes = useStyles()
    const theme = useTheme()
    const colors = [theme.palette.primary.main, theme.palette.primary.light, theme.palette.primary.dark, theme.palette.primary.contrastText]
    const formatter = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <Grid container spacing={6} className={classes.container}>
            <Typography component="h5" variant="h5" align="center" color="textPrimary">
                {data.title}
            </Typography>
            <Grid item container className={classes.data} justify="center" spacing={1}>
                <Grid container item direction="column" style={{ height: '100%' }}>
                    <Grid container item>
                        {Object.keys(data.data[0]).map((key, index) => key !== "label" &&
                            <Grid key={index} item style={{ marginRight: 8 }}>
                                <Box width={20} height={10} mr={1} style={{ display: 'inline-block', backgroundColor: colors[index % colors.length] }} />
                                <Typography variant="overline">{data.data[0][key].label}</Typography>
                            </Grid>)}
                    </Grid>
                    <Grid container item wrap="nowrap" style={{ minHeight: '240px' }}>
                        {data.data.map((entry, index) =>
                            <Grid key={index} container style={{ height: '100%', maxWidth: '120px', marginLeft: 4 }} direction="row" justify="center">
                                <Grid container item style={{ height: '100%' }} alignItems="flex-end" wrap="nowrap" justify="center">
                                    {Object.keys(entry).map((key, index) => {
                                        const value = entry[key] && entry[key].value ? data.type === "percentage" ? Math.round(entry[key].value) : (Math.ceil((entry[key].value / 15000) * 100)) - 25 : 0
                                        console.log(data.type, value)
                                        return (key !== "label" &&
                                            <Grid key={index} container style={{ height: '100%', minHeight: '120px', width: '30px' }} direction="column" wrap="nowrap" justify={"flex-end"}>
                                                <Typography variant="overline" align="center" style={{ marginBottom: `${data.type === "currency" ? 150 + value : 0}%`, transform: `rotate(${data.type === "currency" ? 90 : 0}deg)` }}>{data.type === "percentage" ? value > 0 && `${value}%` : formatter.format(entry[key].value)}</Typography>
                                                <Grid item style={{ backgroundColor: colors[index % colors.length], width: '26px', height: `${value}%`, marginLeft: 2, marginRight: 2 }} />
                                            </Grid>)
                                    })}
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption" paragraph align="center">{entry['label']}</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>

                <Grid container item justify="center">
                    <Typography variant="subtitle2" align="center" color="textSecondary" paragraph className={classes.subtitle}>
                        {data.description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default ChartSection
