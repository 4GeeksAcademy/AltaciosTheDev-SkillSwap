import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material'; // Import Stack from Material-UI
import { LocalizationProvider, DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';



export default function DateTime() {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedTime, setSelectedTime] = React.useState(null);
    const minDate = new Date(); // Today's date
    // const minTime = new Date(); // Current time
    // minTime.setHours(8, 0, 0); // Example minimum time: 8:00 AM
    // const maxTime = new Date(); // Current time
    // maxTime.setHours(17, 0, 0); // Example maximum time: 5:00 PM

    console.log({
        selectedDate: selectedDate && selectedDate.toLocaleDateString(),
        selectedTime: selectedTime && selectedTime.toLocaleTimeString()
    })

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className='schedule-container'>
                <Stack className="choose-pickers" spacing={4} sx={{ width: "250px" }}>
                    <h5>Choose Date & Time:</h5>
                    <DatePicker
                        label="Choose Date:"
                        renderInput={(params) => <TextField {...params} />}
                        value={selectedDate}
                        minDate={minDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue)
                        }}
                    />
                    <TimePicker
                        label="Choose Time:"
                        renderInput={(params) => <TextField {...params} />}
                        value={selectedTime}
                        // minTime={minTime}
                        // maxTime={maxTime}
                        inputFormat="HH:mm"
                        // ampm={false} // Set to false for 24-hour format
                        onChange={(newValue) => {
                            setSelectedTime(newValue)
                        }}
                    />
                </Stack>
                <Stack className="choose-skills">
                    <h5>Choose Skill:</h5>
                    <FormControl>
                        <FormLabel></FormLabel>
                        <RadioGroup
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="javacript" control={<Radio sx={{
                                color: "#E8E8E8",
                                '&.Mui-checked': {
                                    color: "#cf1259",
                                },
                            }} />} label="javacript" />
                            <FormControlLabel value="python" control={<Radio sx={{
                                color: "#E8E8E8",
                                '&.Mui-checked': {
                                    color: "#cf1259",
                                },
                            }} />} label="python" />
                            <FormControlLabel value="java" control={<Radio sx={{
                                color: "#E8E8E8",
                                '&.Mui-checked': {
                                    color: "#cf1259",
                                },
                            }} />} label="java" />
                            <FormControlLabel value="react" control={<Radio sx={{
                                color: "#E8E8E8",
                                '&.Mui-checked': {
                                    color: "#cf1259",
                                },
                            }} />} label="react" />
                            <FormControlLabel value="angular" control={<Radio sx={{
                                color: "#E8E8E8",
                                '&.Mui-checked': {
                                    color: "#cf1259",
                                },
                            }} />} label="angular" />
                        </RadioGroup>
                    </FormControl>
                </Stack>
                <button className="send-session-details">Send Session Details</button>
                </div>
        </LocalizationProvider>

    )
}