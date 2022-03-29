import React from "react";
//import { arrTasks } from "../utils/constants";

function Task({text, date }) {

    return (
<article id="">
    <span>
        {text}
    </span>
    <input type='date' defaultValue={date} />
</article>
    )
}

export default Task;