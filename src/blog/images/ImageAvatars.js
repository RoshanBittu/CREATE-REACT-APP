import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import meghasinghavatar from './imageStore/meghasinghavatar.jpg';
export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar 
      alt="Megha Singh" 
      srcSet={meghasinghavatar}
      />
    </Stack>
  );
}