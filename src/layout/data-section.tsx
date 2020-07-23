import React, { FC } from 'react'
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'
import LinearInfo from '../components/linear-info'
import Data from '../model/Data'

const useStyles = makeStyles({
    container: {
        marginTop: 80,
        marginBottom: 80
    },
    subtitle: {
        fontWeight: 300
    }
})

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
            <Grid item container justify="center" direction="row" alignItems="center" wrap="nowrap" spacing={6}>
                <Grid item>
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
