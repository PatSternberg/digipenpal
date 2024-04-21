import { React, useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import AxiosInstance from './Axios';
import { useNavigate, useParams } from 'react-router-dom'

function Delete() {

  const navigate = useNavigate();
  const MyParam = useParams();
  const MyId = MyParam.id;

  const [myData, setMyData] = useState()
  const [loading, setLoading] = useState(true)

  function GetData(data) {
    AxiosInstance.get(`project/${MyId}`).then((res) => {
      setMyData(res.data)
      console.log(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    GetData();
  },[])

  function submission(data) {
    AxiosInstance.delete( `project/${MyId}/`,{
    }).then((res) => {
      navigate('/')
    })
  }

  return (
    <div>
        { loading ? <p>Loading data...</p> :
        <div>
          <Box sx={{display:'flex', width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>

            <Typography sx={{marginLeft:'20px', color:'#fff'}}>
              Delete project: {myData.name}
            </Typography>

          </Box>

          <Box sx={{display:'flex', widht:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>
            Are you sure that you want to delete project: {myData.name}
          </Box>

          <Box width={'30%'}>
            <Button variant='contained' onClick={submission} sx={{width: '100%'}}>
              Submit
            </Button>
          </Box>
        </div>
        }
    </div>
  )
}

export default Delete