import axios from "axios";
import { useState } from "react";
import { SelectBox } from "./SelectBox";
import { error } from "../utils/notification";

export const TranslateBox = () => {

    const [q, setQ] = useState("");
    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");
    const [output, setOutput] = useState("");

    const handleInputChange = ({ target: { value } }) => {
        setQ(value);
    }

    const handleSelectChange = ({ target: { value, id } }) => {
        id === "source" && setSource(value);
        id === "target" && setTarget(value);
    }

    const handleGetRequest = async () => {

        if(source === "" || target === ""){
            return error("Please select language");
        }

        try {
            let res = await axios.post("", { q, source, target, format: "text" });
            res = res.data.translatedText;
            setOutput(res);

        } catch (err) {
            console.log(err);
        }
    }






    return (
        <>
            <div className="mainBox">


            </div>

            <div className="mainBox">

                <div>
                    <SelectBox id={'source'} select={handleSelectChange} />
                    <div className="box">
                        <textarea onInput={handleInputChange} value={q} className="outputResult"></textarea>
                    </div>
                </div>

                <div>
                    <SelectBox id={'target'} select={handleSelectChange} />
                    <div className="outputResult box">
                        <p>{output}</p>
                    </div>
                </div>


            </div>
            <button onClick={handleGetRequest}>Click</button>
        </>
    );
};

