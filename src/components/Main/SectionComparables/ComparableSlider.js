import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Slider} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = makeStyles((theme) => ({
    comparableSlider: {
    width: "90%",
    margin: "0 auto"
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '$1750',
  },
  {
    value: 30,
    label: '$1790',
  },
  {
    value: 40,
    label: '$1800',
  },
  {
    value: 60,
    label: '$1830',
  },
  {
    value: 100,
    label: '$1860',
  },
];

function valuetext(value) {
  return `${value}`;
}
function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

export default function ComparableSlider() {
  const classes = useStyles();

  return (
    <div className={classes.comparableSlider}>
      <Typography id="discrete-slider-always" gutterBottom>
        Comparables <InfoOutlinedIcon />
      </Typography>
      <Slider
        defaultValue={1860}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={null}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}