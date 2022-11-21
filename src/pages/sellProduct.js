import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    height:'350px',
    border:'1px solid rgba(112, 79, 155, 1)',
    borderRadius:'20px',
    transition:'0.3s',
    '&:hover': {
      backgroundColor: 'rgba(112, 79, 155, 1)',
      color:'white',
      cursor:'pointer',
    },
  },
  place:{
    margin:'6% 0% 0% 0%',
    padding:'30px',
    border:'1px solid purple',
    borderRadius:'20px'

  }



}));