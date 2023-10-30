import React, { useEffect, useState } from 'react'

const ChangeColorBg = () => {

    const [backgroundColor, setBackgroundColor] = useState<string>('white');
    const BlackMode = 'black'
    const LightMode = 'white'
    const changeBackground = (color: string) => {
        setBackgroundColor(color)
    }



    if (backgroundColor === 'white') {
        useEffect(() => {
            document.body.style.color = BlackMode;
        }, [BlackMode]);
        useEffect(() => {
            document.body.style.backgroundColor = backgroundColor;
        }, [backgroundColor]);
    } else {
        useEffect(() => {
            document.body.style.color = LightMode;
        }, [LightMode]);
        useEffect(() => {
            document.body.style.backgroundColor = backgroundColor;
        }, [backgroundColor]);
    }

    return (
        <div>
            <button onClick={() => changeBackground('white')}>🤍 Light Mode</button>
            <button onClick={() => changeBackground('black')}>🖤 Dark Mode</button>
        </div>
    )
}

export default ChangeColorBg
