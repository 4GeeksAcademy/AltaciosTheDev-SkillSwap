import React, { useState, useEffect, useContext } from 'react';
import { Stack, TextField } from '@mui/material'; // Import Stack from Material-UI
import { LocalizationProvider, DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Context } from "../../store/appContext";
import { format } from 'date-fns';

export default function DateTime({ tutorSkills }) {
    const { store, actions } = useContext(Context);
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedSkill, setSelectedSkill] = useState(null)
    const [sessionDetails, setSessionDetails] = useState({
        learner_id: store.profile.id,
        tutor_id: store.tutorProfile.id,
        skill_id: null,
        date: null,
        time: null,
        status: "Pending"
    });

    const minDate = new Date(); // Today's date
    // const minTime = new Date(); // Current time
    // minTime.setHours(8, 0, 0); // Example minimum time: 8:00 AM
    // const maxTime = new Date(); // Current time
    // maxTime.setHours(17, 0, 0); // Example maximum time: 5:00 PM

    useEffect(() => {
        setSessionDetails(prevSessionDetails => ({
            ...prevSessionDetails,
            skill_id: selectedSkill ? parseInt(selectedSkill) : null,
            date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null, // Format the date here
            time: selectedTime ? format(selectedTime, 'HH:mm') : null  // Format the time here
        }));
    }, [selectedSkill, selectedDate, selectedTime]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={handleSubmit}>
                <div className='schedule-container'>
                    <Stack className="choose-pickers" spacing={4} sx={{ width: "250px" }}>
                        <h5>Choose Date & Time:</h5>
                        <DatePicker
                            label="Choose Date:"
                            renderInput={(params) => <TextField {...params} />}
                            value={selectedDate}
                            minDate={minDate}
                            name="date"
                            onChange={(date) => setSelectedDate(date)}
                        />

                        <TimePicker
                            label="Choose Time:"
                            renderInput={(params) => <TextField {...params} />}
                            value={selectedTime}
                            inputFormat="HH:mm"
                            name="time"
                            ampm={false}
                            onChange={(time) => setSelectedTime(time)}
                        />
                    </Stack>
                    <Stack className="choose-skills">
                        <h5>Choose Skill:</h5>
                        <FormControl>
                            <FormLabel></FormLabel>
                            <RadioGroup
                                name="skill"
                                value={selectedSkill}
                                onChange={(event => setSelectedSkill(event.target.value))}
                            >
                                {tutorSkills.map(tutorSkill => {
                                    return (
                                        <FormControlLabel
                                            key={tutorSkill.skill_id}
                                            value={tutorSkill.skill_id} // Convert to number
                                            control={
                                                <Radio sx={{
                                                    color: "#E8E8E8",
                                                    '&.Mui-checked': {
                                                        color: "#cf1259",
                                                    },
                                                }} />
                                            }
                                            label={tutorSkill.skill}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                    <button type="submit" className="send-session-details" onClick={() => actions.scheduleSession(sessionDetails) }>Send Session Details</button>
                </div>
            </form>
        </LocalizationProvider>

    )
}