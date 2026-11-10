import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Definimos las props que recibe para comunicarse con App.tsx
interface SelectorUIProps {
    selectedCity: string;
    onCityChange: (city: string) => void;
}

export default function SelectorUI({ selectedCity, onCityChange }: SelectorUIProps) {

    const handleChange = (event: SelectChangeEvent<string>) => {
        onCityChange(event.target.value); // Envía la ciudad seleccionada al componente App
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="city-select-label">Ciudad</InputLabel>
            <Select
                labelId="city-select-label"
                id="city-simple-select"
                label="Ciudad"
                value={selectedCity} // Recibe el valor controlado desde App
                onChange={handleChange}
            >
                <MenuItem disabled value=""><em>Seleccione una ciudad</em></MenuItem>
                <MenuItem value={'guayaquil'}>Guayaquil</MenuItem>
                <MenuItem value={'quito'}>Quito</MenuItem>
                <MenuItem value={'manta'}>Manta</MenuItem>
                <MenuItem value={'cuenca'}>Cuenca</MenuItem>
            </Select>
        </FormControl>
    );
}