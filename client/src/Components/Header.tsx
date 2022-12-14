import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from '../Assets/Beyond+MD+Logo+Design.png';
import '../Styles/Header.css';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        style={{ background: 'rgb(3, 34, 64)' }}>
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src={ Logo } alt="BeyondMD Logo" />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            Hello BeyondMD!
          </Typography>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};