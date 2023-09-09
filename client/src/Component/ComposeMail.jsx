import {Dialog, Box , Typography,styled, InputBase, TextField, Button} from '@mui/material';
import {Close , DeleteOutline  }  from '@mui/icons-material';
import { useState } from 'react';
 const dialogStyle ={
    height:'850%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'80%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0',
    
}


const   Header = styled (Box)({
    display:'flex', justifyContent:'space-between',padding:'10px 15px',
    background:'#f2f6fc',
    '&>p':{
        fontSize:14,fontWeight:500
    }
})

const RecipientsWrapper=styled(Box)({
    display:'flex',
    flexDirection:'column', padding :'0 15px',
    '&> div':{
        fontSize:14,
        borderBottom:'1px solid green',
        marginTop:10
    }
})

const Footer = styled(Box)({
    display : "flex",
    justifyContent:"space-between",
    padding: '10 15px',
    alignItems:'center',
    position:'sticky',
    bottom:0,
    zIndex:0,
})

const SendButton =styled(Button)({
  background:"#0B57D0",
  color:'#fff',
  margin:'10px 10px',
  fontWeight:500,
  textTransform:'none',
  borderRadius:18,
  width:100
})
const CloseButton=styled(Close)({
  cursor:'pointer'
})
const DeleteButton=styled(DeleteOutline)({
  cursor:'pointer'
})

const ComposeMail = ({openDialog,setOpenDialog}) => {
  
  const [data,setData]=useState({});

  const config={
    Host : "smtp.elasticemail.com",
    Username : "bonthachakri06@gmail.com",
    Password : "B3D5BEAD58271C87E53D3E88445B863B3989",
    Port:2525,
  }

  const Closebutton=(e)=>{
    e.preventDefault();
    setOpenDialog(prevState=>!prevState)
  }

  const SendMailbutton=(e)=>{
    e.preventDefault()
    if(window.Email){
      window.Email.send({
        ...config,
        To : data.to,
        From : "chakribontha9@gmail.com",
        Subject : data.subject,
        Body : data.body
    }).then(
      message => alert(message)
    );
    }
    setOpenDialog(false)
  }

  const onInputChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data)
  }

  return (
   <Dialog
     open ={openDialog}
     PaperProps={{sx:dialogStyle}}
      
>
    <Header>
      <Typography>   NEW MESSAGE </Typography>
      <CloseButton fontSize='small' onClick={(e)=>{Closebutton(e)}}/>
    </Header>

    <RecipientsWrapper>
       <InputBase placeholder ="Recipients" name='to' onChange={(e)=>{onInputChange(e)}}/>
       <InputBase placeholder ="subject"   name='subject' onChange={(e)=>{onInputChange(e)}}/>
    </RecipientsWrapper>

    <TextField  multiline rows={20}  onChange={(e)=>{onInputChange(e)} }
    name='body' 
    sx={
      {'& .MuiOutlinedInput-notchedOutline':{
        border:'none'
      }}
     
    }/>
    
        <Footer>
          <SendButton onClick={(e)=>{SendMailbutton(e)}}>
            send
          </SendButton>

          <DeleteButton onClick={()=>setOpenDialog(false)}/>
        </Footer>
    
   </Dialog>
  )
}

export default ComposeMail