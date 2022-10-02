import * as React from 'react'

//MUI Library
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function PersonalInfo({ formData, setFormData }) {
  //Handle change of multiple inputs
  function handleChange(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      }
    })
  }

  //!Xenia: for documents
  const handleChangePicture = (event) => {
    console.log(event.target.files[0])
  }
  //Multiple selection not yet working

  //   function handleMultiSelect(e) {
  //     let value = Array.from(e.target.favBoardGames, option => option.value);
  //     setPersonalInfo(prevInfo => {
  //         return {
  //             ...prevInfo,
  //             favBoardGames: value
  //         }
  //     });
  //   }

  //Hardcoded cities - to be changed
  const city = ['Athens', 'Thessaloniki', 'Kavala'].map((city) => {
    return (
      <MenuItem key={city} value={city}>
        {city}
      </MenuItem>
    )
  })

  //Hardcoded board games - to be changed
  const boardGame = ['Monopoly', 'Munchkin', 'Scrubble'].map((boardGame) => {
    return (
      <MenuItem key={boardGame} value={boardGame}>
        {boardGame}
      </MenuItem>
    )
  })

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        {/* Select country from dropdown menu */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Country*</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='country'
              label='Country'
              onChange={handleChange}
              name='country'
              value={formData.country}
            >
              <MenuItem value='Greece'>Greece</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Select city from dropdown menu */}
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>City*</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='city'
            label='City'
            name='city'
            value={formData.city}
            onChange={handleChange}
          >
            {city}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <InputLabel>Date of Birth*</InputLabel>
        <TextField
          required
          fullWidth
          id='dateOfBirth'
          type='Date'
          name='dateOfBirth'
          value={formData.dateOfBirth}
          onChange={handleChange}
          autoComplete='dateOfBirth'
        />
      </Grid>
      <Grid item xs={12}>
        <InputLabel>Identification Document*</InputLabel>
        <TextField
          required
          fullWidth
          name='validationId'
          value={formData.validationId}
          onChange={handleChange}
          type='file'
          id='identification-doc'
          autoComplete='identification document'
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        {/* Select favourite board game from dropdown menu */}
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Favourite Board game
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='fav-board-game'
            label='Favourite Board game'
            name='favBoardGame'
            value={formData.favBoardGame}
            onChange={handleChange}
          >
            {boardGame}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  )
}
