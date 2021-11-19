import { Component, createElement, useState, useEffect } from "react";

import { FormControl, InputLabel, Select, MenuItem, List, Button, Menu } from "@material-ui/core";
import "./ui/Clock.css";
function Clock(props) {
   
    const [data, setData] = useState(props.data.value.split(","))

    const [dateNow, setDateNow] = useState(new Date().toLocaleTimeString());
    const [value, setValue] = useState("Select");
    const [tz, setTZ] = useState("");
    const [code, setCode] = useState("");
    useEffect(() => {
            var timerID = setInterval(() => tick(), 1000);
            return function cleanup() {
                clearInterval(timerID);
            };
    }, [dateNow]);
    const tick = () => {
        if (tz && code) {
            setDateNow(new Date().toLocaleTimeString(code, { timeZone: tz }));
        } else {
            setDateNow(new Date().toLocaleTimeString());
        }
    };
    const handleDropChange = e => {

        e.preventDefault();
        setValue(e.target.value);
        setTZ(e.target.value);
        setCode("en-US");
        setDateNow(new Date().toLocaleTimeString("en-US", { timeZone: e.target.value }));
    };
    return (
        <div>
            <div>{dateNow}</div>



            <FormControl className="Form">

                <Select
                    onChange={handleDropChange}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="TimeZone" >
                    {data.map((element, index) => {
                        return (
                        
                       <MenuItem key={index} value={element}>
                            {element}
                        </MenuItem>
                        )
                       
                    }) }

                </Select>
            </FormControl>
        </div>
    );
}
export default Clock;