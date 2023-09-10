import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// material imports
import { Button, Chip, Autocomplete, TextField, Stack, Box } from '@mui/material';
import ClipCard from '../ClipCard/ClipCard';

export default function Homepage() {
    const history = useHistory();

    const goToAddClip = () => {
        history.push('./addclip')
    }

    return (
        <>
            <section className="clips">
                <ClipCard xs={12} sm={6} md={4}/>
            </section>
            <Button onClick={() => goToAddClip()}>Add Clip</Button>
        </>

    )
}