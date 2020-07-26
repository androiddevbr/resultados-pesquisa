import React, { FC } from 'react'
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'
import LinearInfo from '../components/linear-info'
import Data from '../model/Data'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginTop: 80,
        marginBottom: 80
    },
    subtitle: {
        fontWeight: 300
    },
    data: {
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginTop: 4,
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap-reverse',
            maxWidth: '100vw',
            justifyContent: 'start'
        }
    }
}))

export interface DataProps {
    data: Data
}

const DataSection: FC<DataProps> = ({ data }) => {
    const classes = useStyles()

    return (
        <Grid container spacing={6} className={classes.container}>
            <Typography component="h5" variant="h5" align="center" color="textPrimary">
                {data.title}
            </Typography>
            <Grid item container className={classes.data} justify="center" direction="row" spacing={6}>
                <Grid>
                    {data.data.map((entry, index) => <LinearInfo key={index} value={entry.value} label={entry.label} />)}
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

export default DataSection
