import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Tab, Tabs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Badge from '@mui/material/Badge';
import { RootState } from '../../store/store';

export const Header: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const counterFavoiter = useSelector((state: RootState) => state.favorite.favoriteShow).length;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'white',
    }}
    >
      <Tabs
        value={selectedTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
        aria-label="Tabs"
        centered
        sx={{
          maxWidth: '100%',
          marginBottom: '20px',
          backgroundColor: '#e1e1e1',
          '& .css-530561-MuiButtonBase-root-MuiTab-root.Mui-selected': {
            maxWidth: '50%',
          },
          '& .css-530561-MuiButtonBase-root-MuiTab-root': {
            maxWidth: '50%',
          },
        }}
      >
        <Tab
          component={NavLink}
          to="/"
          sx={{ width: '50%' }}
          icon={<HomeIcon />}
          iconPosition="end"
        />
        <Tab
          component={NavLink}
          to="/shows/favorites"
          sx={{ width: '50%' }}
          icon={(
            <Badge badgeContent={counterFavoiter} color="primary">
              <FavoriteIcon />
            </Badge>
          )}
          iconPosition="end"
        />

      </Tabs>
    </header>
  );
};
