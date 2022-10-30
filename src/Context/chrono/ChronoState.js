import { useState } from "react";
import ChronoContext from "./ChronoContext";

const ChronoState = () => {

    const cc_number = 9999;
    const [initCC, setInitCC] = useState(cc_number);

    const updateCC = () => {
        setInitCC(1000)
    }

    return(
        <ChronoContext.Provider value={[initCC, updateCC]}>
        </ChronoContext.Provider>
    )
}

export default ChronoState;