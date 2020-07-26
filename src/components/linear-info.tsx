import React, { FC } from 'react'
import { LinearProgress, Box, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';

const LinearProgressWithLabel: FC<LinearProgressWithLabelProps> = ({ value, label }) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box display="flex" alignItems="center" flexWrap={matches ? 'wrap' : 'nowrap'} mb={matches ? 3 : 1}>
            <Box width="44%" mb={matches ? 2 : 0}>
                <Typography variant="body2" align={matches ? "center" : "right"} noWrap={!matches} color="textSecondary">{label}</Typography>
            </Box>
            <Box width="8%" minWidth={35} ml={2} mb={matches ? 2 : 0}>
                <Typography variant="body2" color="textSecondary"><b>{`${Math.round(value)}%`}</b></Typography>
            </Box>
            <Box width="48%" minWidth={300} ml={1}>
                <LinearProgress variant="determinate" value={value} />
            </Box>
        </Box>
    );
}

export interface LinearProgressWithLabelProps {
    value: number,
    label: string
}

export default LinearProgressWithLabel
