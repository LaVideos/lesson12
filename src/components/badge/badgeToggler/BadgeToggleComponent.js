// import * as React from 'react';
// import Switch from '@mui/material/Switch';
//
//
// const label = { inputProps: { 'aria-label': 'Switch demo' } };
//
// export default function BadgeToggleComponent({switchTheme}) {
//     return (
//         <div>
//             <Switch {...label} defaultChecked color="warning" onChange={switchTheme}/>
//         </div>
//     );
// }

import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function BadgeToggleComponent({switchTheme,checked}) {
    // const [checked, setChecked] = React.useState(true);
    //
    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };

    return (
        <Switch
            checked={checked}
            onChange={switchTheme}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}