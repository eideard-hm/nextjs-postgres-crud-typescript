import { useState } from 'react'
import { NextPage } from 'next'
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  Icon,
  Input,
  InputLabel,
  TextareaAutosize
} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const NewPage: NextPage = () => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  return (
    <Card>
      <form>
        <FormControl>
          <InputLabel htmlFor='title'>Title</InputLabel>
          <Input
            id='title'
            name='title'
            type='text'
            placeholder='Write a title...'
            aria-describedby='title'
          />
          <FormHelperText id='title'>
            Write a title for your task.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='description'>Description</InputLabel>
          <TextareaAutosize
            id='title'
            name='title'
            placeholder='Write a description...'
            aria-describedby='description'
          />
          <FormHelperText id='description'>
            Write a description for your task.
          </FormHelperText>
        </FormControl>

        <Button>
          <SaveIcon />
          Save
        </Button>
      </form>
    </Card>
  )
}

export default NewPage
