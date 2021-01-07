import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
});

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">Hey there!</Typography>
      <Typography variant="subtitle1">My name is Sam</Typography>
      <Typography variant="subtitle1">This is my website about everything I do</Typography>
      <Typography variant="subtitle1">Feel free to have a look around and explore what I get up to</Typography>
    </div>
  );
};

export default About;
