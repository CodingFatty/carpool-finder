import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 'fit-content',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& svg': {
        margin: theme.spacing(1.5),
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
        // <>
            <Container maxWidth="lg">
                <Grid container justify="center" alignItem="center" className={classes.root}>
                    Finding
                    <Divider orientation="vertical" />
                    Offering
                </Grid>
            </Container>
        // {/* </> */}
    );
  }