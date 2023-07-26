import  { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText  
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

const Nav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate(); 

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const logout = () =>{
    localStorage.removeItem('user');
    navigate("/")
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Namibia SUV
          </Typography>
          <div style={{display: 'flex'}}>
          <Link to="/home" className="navLink" ><ListItemText primary="Home" /></Link>
          <Link to="/productlist" className="navLink" ><ListItemText primary="Cars" /></Link>
          <Link to="/cart" className="navLink"><ListItemText primary="Cart" /></Link>
          <Link to="/order" className="navLink" ><ListItemText primary="Order" /></Link>
          <Link to="/" className="navLink"> <ListItemText primary="Login" /></Link>
          <Link to="/signup" className="navLink"><ListItemText primary="Signup" /></Link>            
          <Link to="/userinfo" className="navLink"><ListItemText primary="User Info" /></Link> 
          <ListItemText className="navLink" primary="Logout" onClick={logout} />
          </div>

        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <List>
          <ListItem  onClick={handleDrawerClose}>
            <Link to="/home" style={{textDecoration: "none"}}><ListItemText primary="Home" /></Link>
            
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link to="/order" style={{textDecoration: "none"}}><ListItemText primary="Order" /></Link>
            
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link to="/cart" style={{textDecoration: "none"}}><ListItemText primary="Cart" /></Link>
            
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link to="/" style={{textDecoration:"none"}}> <ListItemText primary="Login" /></Link>
            
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link to="/signup" style={{textDecoration: "none"}}><ListItemText primary="Signup" /></Link>            
          </ListItem>          
          <ListItem  onClick={handleDrawerClose}>
            <Link to="/userinfo"><ListItemText primary="User Info" /></Link> 
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <ListItemText primary="Logout" onClick={logout} />
          </ListItem>
        </List>
      </Drawer>     
    </div>
  );
};

export default Nav;
