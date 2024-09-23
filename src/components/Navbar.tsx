import React from 'react'

// import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';


const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: 'about' },
  { label: 'Sample Projects', path: 'projects' },
  // {label: 'Contact', path: 'contact'}
]

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Mobile navbar
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider /> */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Main Navbar
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        backgroundImage: "none",
        backgroundColor: "transparent",
        boxShadow: 0
      }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Uncomment me to add a logo
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          hello
        </Typography> */}
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Box
                key={item.label}
                component={Button}
                sx={{ color: '#fff' }}
              >
                {/* todo: make this better, add active style that
                corresponds to theme */}
                <NavLink
                  to={item.path}
                  style={({ isActive }) => ({
                    color: isActive ? '#cc00ff' : '#fff',
                    textDecoration: 'none'
                  })}
                >
                  {item.label}
                </NavLink>

              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
        cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
        at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
        Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
        numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
        asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
        assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
        soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
        ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
        soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
        Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
        delectus quo eius exercitationem tempore. Delectus sapiente, provident
        corporis dolorum quibusdam aut beatae repellendus est labore quisquam
        praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
        deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
        fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
        recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
        debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
        praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
        voluptate iure labore, repellendus beatae quia unde est aliquid dolor
        molestias libero. Reiciendis similique exercitationem consequatur, nobis
        placeat illo laudantium! Enim perferendis nulla soluta magni error,
        provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
        iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
        Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
        reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
        cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
        consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
        Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
        dolores sunt inventore perferendis, aut sapiente modi nesciunt.
      </Typography>
    </Box> */}
    </Box>
  )
};
