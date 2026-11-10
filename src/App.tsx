import './App.css';
import { useState } from 'react';
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';

function App() {
    const [selectedCity, setSelectedCity] = useState<string>('');

    return (
        <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center' }}>

            {/* Encabezado */}
            <Grid size={{ xs: 12, md: 12 }}>
                <HeaderUI />
            </Grid>

            {/* Alertas */}
            <Grid size={{ xs: 12, md: 12 }}
                container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <AlertUI description="No se prevén lluvias" />
            </Grid>

            {/* Selector */}
            <Grid size={{ xs: 12, md: 3 }}>
                <SelectorUI 
                    selectedCity={selectedCity} 
                    onCityChange={setSelectedCity} 
                />
            </Grid>

            {/* Indicadores */}
            <Grid size={{ xs: 12, md: 9 }}>
                <div>Elemento: Indicadores</div>
                {selectedCity && (
                    <span style={{ fontSize: '0.85rem', textTransform: 'capitalize', opacity: 0.8 }}>
                        Ciudad: {selectedCity}
                    </span>
                )}
            </Grid>

            {/* Gráfico */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                <div>Elemento: Gráfico</div>
                {selectedCity && (
                    <span style={{ fontSize: '0.85rem', textTransform: 'capitalize', opacity: 0.8 }}>
                        Ciudad: {selectedCity}
                    </span>
                )}
            </Grid>

            {/* Tabla */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                <div>Elemento: Tabla</div>
                {selectedCity && (
                    <span style={{ fontSize: '0.85rem', textTransform: 'capitalize', opacity: 0.8 }}>
                        Ciudad: {selectedCity}
                    </span>
                )}
            </Grid>

            {/* Información adicional */}
            <Grid size={{ xs: 12, md: 12 }}>
                <div>Elemento: Información adicional</div>
                {selectedCity && (
                    <span style={{ fontSize: '0.85rem', textTransform: 'capitalize', opacity: 0.8 }}>
                        Ciudad: {selectedCity}
                    </span>
                )}
            </Grid>

        </Grid>
    );
}

export default App;