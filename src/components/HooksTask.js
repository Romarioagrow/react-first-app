import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

export default function HooksTask() {

    const [count, setCount] = useState(0);

    useEffect(() => {    // Обновляем заголовок документа, используя API браузера   
        if (count > 0) 
        document.title = `Вы нажали ${count} раз`;
    });

    return (
        <div>
            <p>
                Clicked times: {count}
            </p>
            <Button variant="outlined" color="secondary" onClick={() => setCount(count + 1)}>
                Click me!
            </Button>
        </div>
    );
}

//export default HooksTask;