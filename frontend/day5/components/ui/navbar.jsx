import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';

const pages = [{ name: 'Explore', link:"/joblisting" }, { name: 'Contact', link:"/contact" }];
const settings = ['Profile', 'Admin', 'Login'];

function ResponsiveAppBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenButton = (open) => {
    setAnchorElUser(null);
    if (open === 'Explore Opportunities') {
      navigate('/joblist');
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = (menuItem) => {
    setAnchorElUser(null);
    if (menuItem === 'Login' || menuItem === 'Sign In') {
      navigate('/');
    }
    if (menuItem === 'Profile') {
      navigate('/profile');
    }
    if (menuItem === 'Admin') {
      navigate('/admin');
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl" maxHeight="x2">
        <Toolbar disableGutters>
          <Avatar
            src="src\assets\images\logo.png"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: '50px', height: '50px' }}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              '&:hover' :{
                color:'red',
              },
            }}
          >
            JobLink
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {pages.map((page) => (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                key={page.name} 
                onClick={() => handleOpenButton(page.name)}
                color="inherit"
                
              >
                <MenuIcon />
              </IconButton>
            ))}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
            JobExpress
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(`${page.link}`)}
                sx={{ my: 2, color: 'white', display: 'block',
                '&:hover' :{
                  color:'red',
                }, }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://tse3.mm.bing.net/th?id=OIP.NVgDAkBBANO4lnKq3Xqg1wHaHa&pid=Api&P=0&h=180" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
