import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BadgeButtonNavComponent({data,disabled,onclick}) {
    return (
        <Stack>
            <Button color="secondary" disabled={disabled} onClick={onclick}>{data}</Button>
        </Stack>
    );
}

