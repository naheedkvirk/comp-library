import React, { useState } from 'react';

//import { Button } from '../Button/Button';
import { 
  AppBar, Avatar, Toolbar, Typography, Button, Box,
  IconButton, Drawer, List, ListItem, ListItemButton, ListItemText,
 } from '@mui/material';
 import MenuIcon from '@mui/icons-material/Menu';
import './header.css';

type User = {
  name: string;
};

export interface HeaderProps {
  title?: string;
  links?: { label: string; href: string }[];
  ctaLabel?: string;
  onCtaClick?: () => void;

  //user?: User;
  user?: { fName: string; lName: string; };

  onLogin?: () => void;
  onLogout?: () => void; 
  onCreateAccount?: () => void;
}

export const Header = ( { 
  title = 'Naheed Virk', links = [], ctaLabel,
  onCtaClick,
  user,
 }: HeaderProps) => {
    const [open, setOpen] = useState(false);

    return (
      <AppBar 
        position="sticky"
        color="default"
        elevation={1}
        >
        <Toolbar>
          {/* Logo / Name */}
          <Typography 
            variant='h6'
            sx={{
              flexGrow: 1
            }}
            >
              {title}
            </Typography>

             {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs:'none', md: 'flex' }, 
                gap: 2
              }}
            >
              {links.map((link) => (
                <Button key={link.label} color="inherit" > 
                  {link.label}
                </Button>
              ))}
              {user ? (
                <Avatar>{user.fName[0]}{user.lName[0]}</Avatar>
              ) : (
                <Button variant='contained' onClick={onCtaClick}>
                  {ctaLabel}
                </Button>
              )}
              {/* {user ? (
                <Typography variant="body1">
                  Welcom, {user.name}
                </Typography>
              ) : (
              <Button variant="contained" onClick={onCtaClick}>
                {ctaLabel}
              </Button>
              )} */}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              sx={{ 
                display: { md: 'none' }
              }}
              onClick={() => setOpen(true)}
              >
              <MenuIcon />
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
              anchor='right'
              open={open}
              onClose={() => setOpen(false)}
            >
              <Box sx={{ width: 250 }}>
                <List>
                  {links.map((link) => (
                    <ListItem key={link.label}>
                      <ListItemButton onClick={() => setOpen(false)}>
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                      
                    </ListItem>
                  ))}
                  <ListItem onClick={onCtaClick}>
                    <ListItemButton onClick={onCtaClick}>
                      <ListItemText primary={ctaLabel} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>

            </Drawer>
        </Toolbar>
      </AppBar>
    )
  }
  
/* export const Header = ( { 
  title = 'My Portfolio', links = [], ctaLabel = 'Contact',
  user, onLogin, onLogout, onCreateAccount }: HeaderProps) => 
  (
  <header>
    <div className="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
); */
