import React, { useContext } from 'react'
import { Box, IconButton, InputBase, useTheme } from '@mui/material'

import { ColorModeContext, tokens } from '../../../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display={'flex'} justifyContent={'space-between'} p={2}> 
    {/* search bar */}
    <Box display={'flex'} backgroundColor={colors.primary[400]} borderRadius={'3px'}> 
      <InputBase sx={{}}/>
      <IconButton type='button' sx={{ml: 2, flex: 1}}> 
        <SearchOutlinedIcon/>
     </IconButton>
    </Box>

    {/* Icons */}
    <Box display={'flex'}> 
    <IconButton onClick={colorMode.toggleColorMode}> 
    { theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon/>) : 
    (<LightModeOutlinedIcon/>)}
     </IconButton>
    <IconButton> <NotificationsOutlinedIcon/></IconButton>
    <IconButton> <SettingsOutlinedIcon/></IconButton>
    <IconButton> <PersonOutlineOutlinedIcon/></IconButton>

    </Box>
    
    </Box>

  )
}

export default Topbar