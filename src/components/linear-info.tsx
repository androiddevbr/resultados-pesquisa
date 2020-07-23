import React, { FC } from 'react'
import { LinearProgress, Box, Typography } from '@material-ui/core'

const LinearProgressWithLabel: FC<LinearProgressWithLabelProps> = ({ value, label }) => {
    return (
        <Box display="flex" alignItems="center" mb={1}>
            <Box width="44%">
                <Typography variant="body2" align="right" style={{ whiteSpace: 'nowrap' }} color="textSecondary">{label}</Typography>
            </Box>
            <Box width="8%" minWidth={35} ml={2}>
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
