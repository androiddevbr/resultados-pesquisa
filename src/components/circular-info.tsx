import React, { FC } from 'react'
import { Box, Typography, CircularProgress, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    bottom: {
        color: theme.palette.primary.light,
        opacity: 0.5,
        position: 'absolute'
    },
}))

const CircularProgressWithLabel: FC<CircularProgressWithLabelProps> = ({ value, label }) => {
    const classes = useStyles()
    return (
        <Box display="flex" alignItems="center" flexDirection="column" mb={4} ml={2} mr={2} maxWidth={100}>
            <Box position="relative" display="inline-flex" alignItems="center" mb={1}>
                <CircularProgress variant="determinate" value={100} size={100} thickness={2} className={classes.bottom} />
                <CircularProgress variant="static" value={value} size={100} thickness={2} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h5" component="h5" color="textSecondary">
                        {`${Math.round(value,)}%`}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="body2" align="center" color="textSecondary">{label}</Typography>
            </Box>
        </Box>

    );
}

export interface CircularProgressWithLabelProps {
    value: number,
    label: string
}

export default CircularProgressWithLabel
