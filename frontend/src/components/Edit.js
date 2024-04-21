import { React, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import MyDatePickerField from './forms/myDatePickerField'
import SimpleTextField from './forms/TextField'
import MySelectField from './forms/mySelectField'
import MultilineField from './forms/MultilineField'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axios';
import Dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

  const navigate = useNavigate();
  const MyParam = useParams();
  const MyId = MyParam.id;

  function GetData(data) {
    AxiosInstance.get(`project/${MyId}`).then((res) => {
      console.log(res.data)
      setValue('name', res.data.name)
      setValue('status', res.data.status)
      setValue('comments', res.data.comments)
      setValue('start_date', Dayjs(res.data.start_date))
      setValue('end_date', Dayjs(res.data.end_date))

    })
  }

  useEffect(() => {
    GetData();
  },[])

  const defaultValues = {
    name:'',
    comments:'',
    status:'',
  }

  const {handleSubmit, setValue, control} = useForm({defaultValues:defaultValues})
  
  function submission(data) {
    
    const StartDate = Dayjs(data.start_date['$d']).format('YYYY-MM-DD')
    const EndDate = Dayjs(data.end_date['$d']).format('YYYY-MM-DD')
    AxiosInstance.put( `project/${MyId}/`,{
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
            <SimpleTextField
            label='Name'
            name='name'
            control={control}
            placeholder='Provide a project name'
            width={'30%'}>
            </SimpleTextField>
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
            <MultilineField
            label='Comments'
            name='comments'
            control={control}
            placeholder='Provide a project name'
            width={'30%'}>
            </MultilineField>
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

export default Edit