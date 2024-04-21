import React from 'react'
import { Box, Button } from '@mui/material'
import MyDatePickerField from './forms/myDatePickerField'
import SimpleTextField from './forms/TextField'
import MySelectField from './forms/mySelectField'
import MultilineField from './forms/MultilineField'
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
        <div>
          <h1>
            Send a new message
          </h1>
        </div>

        <div className='messageConstructor'>

          <div className='column1'>    
            <SimpleTextField
            label='Subject'
            name='name'
            control={control}
            placeholder='Provide a project name'>
            </SimpleTextField>

            <MyDatePickerField
            label='Start date'
            name='start_date'
            control={control}>
            </MyDatePickerField>

            <MyDatePickerField
            label='End date'
            name='end_date'
            control={control}>
            </MyDatePickerField>
          </div>  

          <div className='column2'>    
            <MultilineField
            label='Message content'
            name='comments'
            control={control}
            placeholder='Provide a project name'>
            </MultilineField>

            <MySelectField
            label='Status'
            name='status'
            control={control}>
            </MySelectField>

            <Button variant='contained' type='submit'>
              Submit
            </Button>

          </div>



        </div>
      </form>
    </div>
  )
}

export default Create