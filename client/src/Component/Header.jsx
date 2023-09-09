import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  styled,
  InputBase,
  Box,
  Switch,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import { gmailLogo } from '../constants/constants';
import { ThemeContext } from '../App';

const StyledAppbar = styled(AppBar)({
  background: '#F5F5F5',
  boxShadow: 'none',
});

const SearchWrapper = styled(Box)({
  background: '#EAF1F8',
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  '& > div': {
    width: '100%',
    padding: '0 10px',
  },
});

const OptionsWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
  '& > svg': {
    marginLeft: 20,
  },
});

const MenuButton = styled(MenuIcon)({
  cursor: 'pointer',
});

function Header({ toggleDrawer }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme(); // Call the toggleTheme function from the context to change the theme.
  };

  return (
    <StyledAppbar position='static'>
      <Toolbar>
        <MenuButton color='action' onClick={toggleDrawer} />
        <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
        <SearchWrapper>
          <Search color='action' />
          <InputBase placeholder='Search Mail' />
          <Tune color='action' />
        </SearchWrapper>
        <Switch
          checked={theme === 'dark'} // Check if the theme is 'dark' to set the switch state.
          onChange={handleToggleTheme} // Call the handleToggleTheme function to change the theme.
        />
        <OptionsWrapper>
          <HelpOutlineOutlined color='action' />
          <SettingsOutlined color='action' />
          <AppsOutlined color='action' />
          <AccountCircleOutlined color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyledAppbar>
  );
}

export default Header;
