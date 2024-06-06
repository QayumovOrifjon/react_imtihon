import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { HiOutlineLogout } from "react-icons/hi";
    
export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        startIcon={<HiOutlineLogout />}
       
        sx={{
          backgroundColor: '#46A358',
          '&:hover': {
            backgroundColor: '#3E8C4D', 
          },
        }}
      >
        Login
      </Button>
    </Stack>
  );
}
