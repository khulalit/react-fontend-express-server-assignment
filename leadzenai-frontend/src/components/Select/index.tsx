import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOption({option, handleChange}:any) {

    return (
        <div className='select-option'>
            <FormControl fullWidth>
                <InputLabel id="select-label">Option</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={option}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={'name'}>Name</MenuItem>
                    <MenuItem value={'phone'}>Phone</MenuItem>
                    <MenuItem value={'email'}>Email</MenuItem>
                    <MenuItem value={'website'}>Website</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
