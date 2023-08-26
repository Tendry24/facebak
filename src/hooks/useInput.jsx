import { useState } from "react";

function useInput (init) {
    const [Input, setInput] = useState(init);

    const modifyInput = (e) => {
        setInput(e.target.value)
    };

    const clearInput = () => {
      setInput("")
    };
    
    return [Input, setInput, modifyInput, clearInput]
};

export default useInput;