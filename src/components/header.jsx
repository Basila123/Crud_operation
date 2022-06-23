import React from 'react'
import { Typography,Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <>

        <Card sx={{
            fontSize:"50px",
            width:'50%',
            height:'70px',
            position:'relative',
            left:'25%',
            border:'1px solid red',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'

        }}>
             <Typography sx={{fontSize:"30px"}}>Contact Details</Typography>
             <AccountCircleIcon sx={{ fontSize:'30px',
                                        position:'relative',
                                        left:10,
                                        color:'blue'
            }}></AccountCircleIcon>
             
            
             
        </Card>
       
    </>
  )
}

export default Header;