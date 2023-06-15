import { useState } from "react"
import arrow from "../assets/collapse-arrow.png"

function Collapse({collapseTitle, collapseContent}) {

    const [open, setOpen] = useState(false)

    return (
        <div className='collapse'>
            <div className="collapse-header">
                <p>{collapseTitle}</p>
                <button onClick={() => open ? setOpen(false) : setOpen(true)}>
                    <img src={arrow} className={open ? "open" : ""}/>
                </button>
            </div>

            <div className={open ? "collapse-body open" : "collapse-body"}>
                <p>{collapseContent}</p>
            </div>

        </div>
    )

}

export default Collapse