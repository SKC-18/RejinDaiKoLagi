import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@mui/system';
// import { hover } from '@testing-library/user-event/dist/hover';

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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  view: {
    '&:hover': {
      color:'maroon',
      cursor:'pointer',
    },
  },
 

  // product: {
  //   // maxWidth: 345, original width style
  //   maxWidth: '100%',
  //   height:'590px',
  //   border:'1px solid rgba(112, 79, 155, 1)',
  //   borderRadius:'20px',
  //   transition:'0.3s',
  //   '&:hover': {
  //     backgroundColor: 'rgba(112, 79, 155, 1)',
  //     color:'white',
  //     cursor:'pointer',
  //   },
  // }
}));