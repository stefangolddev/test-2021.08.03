import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    color: '#79cea1',
    fontWeight: 100
  },
  operator: {
    textAlign: 'center',
    color: 'grey',
    fontWeight: 100
  },
  mt: {
    marginTop: 50
  },
  input: {
    width: '100%',
    marginTop: '100px'
  },
  input2: {
    width: '100%',
    marginTop: '100px'
  },
  btn: {
    width: '100%',
    backgroundColor: '#79cea1',
    paddingTop: '16px',
    marginTop: '100px',
    paddingBottom: '16px'
  },
  btnadd: {
    width: '100%',
    backgroundColor: '#79cea1',
    paddingTop: '16px',
    marginTop: '50px',
    paddingBottom: '16px'
  },
  select: {
    marginTop: 50,
    width: '100%',
    '& .MuiInputBase-input': {
      paddingTop: '16px',
      paddingBottom: '16px',
      height: 24
    }
  }
});

function App() {
  const classes = useStyles();
  const [ num1, setNum1 ] = useState(0);  // first operand
  const [ num2, setNum2 ] = useState(0);  // second operand
  const [ operator, setOperator ] = useState('+');  // operator
  const [ sum, setSum ] = useState(0); // result
  const [ show, setShow ] = useState(true); // flag for changing screen

  // function for operation
  const Add = () => {
    let num11 = Number(num1);
    let num22 = Number(num2);
    if(operator === '+'){setSum(num11+num22)}
    if(operator === '-'){setSum(num11-num22)}
    if(operator === '*'){setSum(num11*num22)}
    if(operator === '/'){setSum(num11/num22)}
  }

  return (
    <div className="App">
      <Container fixed>
        <Grid container spacing={3} className={classes.mt}>
          {/* Screen1 */}
          {show ? (
            <>
              <Grid item xs={12}>
                <header>
                  <Typography variant="h1" className={classes.title}>
                    Expression
                  </Typography>
                  <Typography variant="h1" className={classes.title}>
                    Evaluator
                  </Typography>
                </header>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={num1} onChange={(e) => setNum1(e.target.value)} className={classes.input} label='Please enter a number'/>
              </Grid>
              <Grid item md={6} xs={12}>
                <Button variant="contained" color="primary" className={classes.btn} onClick={() => {setShow(false)}}>
                  Add Number
                </Button>
              </Grid>
            </>) : null}

            {/* Screen2 */}
            {!show ? (
            <>
              <Grid item xs={4}>
                <TextField id="outlined-basic" type="number" label="" variant="outlined" value={num1} className={classes.input2} />
              </Grid>
              <Grid item xs={4}>
                <TextField id="outlined-basic" type="number" label="" variant="outlined" value={num2} onChange={(e) => setNum2(e.target.value)} className={classes.input2} />
              </Grid>
              <Grid item xs={4}>
                <TextField id="outlined-basic" label="" value={operator} variant="outlined" className={classes.input2} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h1" className={classes.operator}>
                  =
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h1" className={classes.title}>
                  {sum}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl className={classes.select} variant="outlined">
                  <InputLabel id="demo-simple-select-label">Operator</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={operator}
                    onChange={(e) => setOperator(e.target.value)}
                  >
                    <MenuItem value={'+'}>+</MenuItem>
                    <MenuItem value={'-'}>-</MenuItem>
                    <MenuItem value={'*'}>*</MenuItem>
                    <MenuItem value={'/'}>/</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField id="outlined-basic" type="number" label="" variant="outlined" value={num2} onChange={(e) => setNum2(e.target.value)} className={classes.select} label='Operendor'/>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" color="primary" className={classes.btnadd} onClick={() => Add()}>
                  Add Number
                </Button>
              </Grid>
            </>) : null}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
