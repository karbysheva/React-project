import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    label:{
        textTransform: "uppercase"
    }
  }))
const MyCheckbox = withStyles({
  root: {
    color: "black",
    '&$checked': {
      color: "black",

    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
   checkedA: true,
   checkedB: true,
   checkedC: true,
   checkedD: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();

  return (
    <FormGroup row>
      <FormControlLabel 
        className={classes.label}
        control={<MyCheckbox 
            checked={state.checkedA} 
            onChange={handleChange} 
            name="checkedA" 
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />} 
            checkedIcon={<CheckBoxOutlinedIcon fontSize="small" />}
            />}
        label="comparables"
      />
      <FormControlLabel
        className={classes.label}
        control={<MyCheckbox 
            onChange={handleChange} 
            name="checkedB" 
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />} 
            checkedIcon={<CheckBoxOutlinedIcon fontSize="small" />}
            />}
        label="zip code"
      />
      <FormControlLabel
        className={classes.label}
        control={<MyCheckbox 
            onChange={handleChange} 
            name="checkedB" 
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />} 
            checkedIcon={<CheckBoxOutlinedIcon fontSize="small" />}
            />}
        label="school district"
      />
      <FormControlLabel
        className={classes.label}
        control={<MyCheckbox 
            onChange={handleChange} 
            name="checkedB" 
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />} 
            checkedIcon={<CheckBoxOutlinedIcon fontSize="small" />}
            />}
        label="neighborhood"
      />
    </FormGroup>
  );
}