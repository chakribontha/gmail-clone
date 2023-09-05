import React from 'react'
import {Box,Button,styled,List,ListItem} from '@mui/material';
import {CreateOutlined} from '@mui/icons-material'
import {SIDEBAR_DATA} from '../config/siderbar.config'
import ComposeMail from './ComposeMail'
const ComposeButton=styled(Button)({
  background:'#c2e7ff',
  color:'#001d35',
  padding:15,
  borderRadius:20,
  minWidth:140,
  textTransform:'none'

})
const ContainBox=styled(Box)(
    { 
     padding:20,
     '& >ul':{
         padding:'10px 0 0 5px',
         fontSize:14,
         fontWeight:500,
         cursor:'pointer',
        
     },
     '& > ul > li > svg':{
        marginRight:20
    }
    }
)
const SideBarContent=() =>{
  return (
    <ContainBox>
            <ComposeButton>
              <CreateOutlined/>Compose
            </ComposeButton>  
         
        <List>
           {
               SIDEBAR_DATA.map(data=>(
                 <ListItem>
                     <data.icon fontSize='small'/> {data.title}
                 </ListItem>
               ))
           }
        </List>
        <ComposeMail/>
        
    </ContainBox>
  )
}

export default SideBarContent