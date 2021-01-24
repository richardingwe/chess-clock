import React, { useState } from 'react';

const ChessTimeInput = () => {
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    return (
        <div>
            <form>
                <input type="text" value={input} onChange={handleChange} />
            </form>
        </div>
    );
};

export default ChessTimeInput;
