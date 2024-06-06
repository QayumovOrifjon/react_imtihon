import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useBadgeContext } from '../context/Context';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 3px',
    backgroundColor: '#46A358',
  },
}));

const CustomizedBadges = () => {
  const { badgeCount } = useBadgeContext();

  return (
    <IconButton aria-label="sotuvlar">
      <StyledBadge badgeContent={badgeCount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default CustomizedBadges;
