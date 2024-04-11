import React from 'react'
import { Box, Typography } from '@mui/material'
// import MyDatePickerField from './forms/myDatePickerField'
import MyTextField from './forms/myTextField'
// import MySelectField from '.forms/mySelectField'
// import MyMultilinetField from '.forms/myMultilineField'
import { useForm } from 'react-hook-form'




function Create() {
  const {handleSubmit, reset, setValue, control} = useForm()

  return (
    <div>
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
          placeholder='Provide a project name'>
          </MyTextField>
        </Box>

        <Box>
        </Box>

      </Box>

    </div>
  )
}

export default Create