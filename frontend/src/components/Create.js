import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import MyDatePickerField from './forms/myDatePickerField'
import MyTextField from './forms/myTextField'
import MySelectField from './forms/mySelectField'
import MyMultilineField from './forms/myMultilineField'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axios';
import Dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom'

function Create() {

  const navigate = useNavigate();

  const defaultValues = {
    name:'',
    comments:'',
    status:'',
  }

  const {handleSubmit, control} = useForm({defaultValues:defaultValues})
  
  function submission(data) {
    
    const StartDate = Dayjs(data.start_date['$d']).format('YYYY-MM-DD')
    const EndDate = Dayjs(data.end_date['$d']).format('YYYY-MM-DD')
    AxiosInstance.post( 'project/',{
      name:data.name,
      comments:data.comments,
      status:data.status,
      start_date: StartDate,
      end_date: EndDate,
    }).then((res) => {
      navigate('/')
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit(submission)}>
        <Box sx={{display:'flex', width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>

          <Typography sx={{marginLeft:'20px', color:'#fff'}}>
            Create records
          </Typography>

        </Box>

        <Box sx={{display:'flex', widht:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>

          <Box>
            <MyTextField
            label='Name'
            name='name'
            control={control}
            placeholder='Provide a project name'
            width={'30%'}>
            </MyTextField>
          </Box>

          <Box>
            <MyDatePickerField
            label='Start date'
            name='start_date'
            control={control}
            width={'30%'}>
            </MyDatePickerField>
          </Box>

          <Box>
            <MyDatePickerField
            label='End date'
            name='end_date'
            control={control}
            width={'30%'}>
            </MyDatePickerField>
          </Box>

        </Box>

        <Box sx={{display:'flex', widht:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>

          <Box>
            <MyMultilineField
            label='Comments'
            name='comments'
            control={control}
            placeholder='Provide a project name'
            width={'30%'}>
            </MyMultilineField>
          </Box>

          <Box>
            <MySelectField
            label='Status'
            name='status'
            control={control}
            width={'30%'}>
            </MySelectField>
          </Box>

          <Box width={'30%'}>
            <Button variant='contained' type='submit' sx={{width: '100%'}}>
              Submit

            </Button>
          </Box>

        </Box>
      </form>
    </div>
  )
}

export default Create