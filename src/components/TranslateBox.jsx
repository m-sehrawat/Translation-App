import axios from "axios";
import { useState } from "react";
import { SelectBox } from "./SelectBox";
import { error, success } from "../utils/notification";
import copy from "copy-to-clipboard";
import { AiFillCopy } from "react-icons/ai";
import { MdClear } from "react-icons/md";

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

        if (source === "" || target === "") {
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

    const copyToClipboard = (text) => {
        copy(text);
        success("Copied to clipboard!")
    }

    const resetText = () => {
        if (q === "" && output === "") {
            error("Textbox is already empty!")
        } else {
            success("Text removed!")
            setQ("");
            setOutput("");
        }
    }


    return (
        <>
            <div className="mainBox">

                <div>
                    <SelectBox id={'source'} select={handleSelectChange} />
                    <div className="box">
                        <textarea onInput={handleInputChange} value={q} className="outputResult"></textarea>
                    </div>
                    <div className="iconBox">
                        <p>{q.length}/250</p>
                        <AiFillCopy onClick={() => { copyToClipboard(q) }} className="icon" />
                        <MdClear onClick={resetText} className="icon" />
                    </div>
                </div>

                <div>
                    <SelectBox id={'target'} select={handleSelectChange} />
                    <div className="outputResult box">
                        <p id="output">{output}</p>
                    </div>
                    <div className="iconBox">
                        <p>{output.length}/250</p>
                        <AiFillCopy onClick={() => { copyToClipboard(output) }} className="icon" />
                    </div>
                </div>


            </div>
            <button onClick={handleGetRequest}>Click</button>

        </>
    );
};

