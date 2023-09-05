import React from 'react'
import {AppBar,Toolbar,styled,InputBase,Box} from '@mui/material';
import { Menu as MenuIcon,Search,Tune,HelpOutlineOutlined,SettingsOutlined,AppsOutlined,AccountCircleOutlined} from "@mui/icons-material"
import {gmailLogo} from '../constants/constants'
const StyledAppbar=styled(AppBar)({
  background:'#F5F5F5',
   boxShadow:'none'

})
const SearchWrapper=styled(Box)({
  background:'#EAF1F8',
  marginLeft:80,
  borderRadius:8,
  minWidth:690,
  maxWidth:720,
  height:48,
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  padding:'0 20px',
  '& > div':{
    width:'100%',
    padding:'0 10px',
  }
})
const OptionsWrapper=styled(Box)({
  width:'100%',
  display:'flex',
  justifyContent:'end',
  '&> svg':{
    marginLeft:20
  }
})

function Header({toggxleDrawer}) {
  return (
    
       <StyledAppbar position='static'>
         <Toolbar>
           <MenuIcon color='action' onClick={toggxleDrawer}/>
           <img src={gmailLogo} alt="logo" style={{width:110,marginLeft:15}} />
           <SearchWrapper>
             <Search color='action'/>
              <InputBase placeholder='Search Mail'/>
             <Tune color='action'/>
           </SearchWrapper>
           <OptionsWrapper>
             <HelpOutlineOutlined color='action'/>
             <SettingsOutlined color='action'/>
             <AppsOutlined color='action'/>
             <AccountCircleOutlined color="action"/>
           </OptionsWrapper>
         </Toolbar>
       </StyledAppbar>
    
  )
}

export default Header