import { Box, Button, Flex, Grid, GridItem, Image, Select, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { SelectBox } from "./SelectBox";

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
                <SelectBox id={'source'} select={handleSelectChange} />
                <SelectBox id={'target'} select={handleSelectChange} />
            </div>

            <div className="mainBox">

                <div className="box">
                    <textarea onInput={handleInputChange} value={q} className="outputResult"></textarea>
                </div>

                <div className="outputResult box">
                    <p>{output}</p>
                </div>
            </div>
            <button onClick={handleGetRequest}>Click</button>
        </>
    );
};

