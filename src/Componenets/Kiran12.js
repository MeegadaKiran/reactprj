import React, { useState } from 'react';

import Kiran123 from './Kiran123';
 
export default function Kiran12() {
    const [state, setState] = useState([
        { Name1: 'Apple' },
        { Name1: 'Banana' },
        { Name1: 'Cherry' },
        { Name1: 'Mango' }
    ]);
 
    return (
        <div>
         
            <Kiran123 sai={state} />
        </div>
    );
}