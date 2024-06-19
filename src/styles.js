import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#f8f8f8',
    padding: '64px 0 48px',
  },
  icon: {
    marginRight: '20px',
  },
  buttons: {
    marginTop: '40px',
  },
  cardGrid: {
    padding: '20px 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: '48px',
  },
}));

export default useStyles;
