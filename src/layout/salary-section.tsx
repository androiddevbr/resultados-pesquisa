import React, { FC } from 'react'
import Data from '../model/Data'
import { Grid, Typography, Box, Theme, useMediaQuery } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { withStyles, useTheme } from '@material-ui/styles';

const StyledRating = withStyles((theme: Theme) => ({
    iconFilled: {
        color: theme.palette.primary.main,
    }
}))(Rating);

export interface SalaryProps {
    info: Data,
    max: number,
}

const SalarySection: FC<SalaryProps> = ({ info, max }) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container item direction="column">
            <Typography component="p" variant="h6" paragraph color="textPrimary">
                {info.title}
            </Typography>
            {info.data.map((entry, index) =>
                <Box display="flex" flexDirection={matches ? 'column-reverse' : 'row'} key={index} mb={matches ? 3 : 2} >
                    <StyledRating name="salary-rating" value={Math.ceil(entry.value / (max / 5))} readOnly icon={<AttachMoneyIcon fontSize={"small"} />} />
                    <Typography>
                        {!matches && '|'} <b> R$ {entry.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</b> | {entry.label}
                    </Typography>
                </Box>
            )}
        </Grid>
    )
}

export default SalarySection
