import { Box, Button, Select, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const TranslateBox = () => {

    const [q, setQ] = useState("");
    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");
    const [output, setOutput] = useState("");

    const handleInputChange = ({ target: { value } }) => {
        setQ(value);
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
            <Select onChange={(e) => { setSource(e.target.value) }} placeholder="Select Language">
                <option value={'en'}>English</option>
                <option value={'hi'}>Hindi</option>
            </Select>

            <Box w={'300px'} p={'10px'} bg={'#f2f2f2'} borderRadius={'30px'}>
                <Textarea
                    onInput={handleInputChange}
                    resize={'vertical'}
                    minH={'200px'}
                    size={'sm'}
                    placeholder='Enter your text here'
                    borderRadius={'30px'}
                    p={'20px'}
                    bg={'white'}
                    fontSize={'18px'}
                    value={q}
                />
            </Box>

            <Select onChange={(e) => { setTarget(e.target.value) }} placeholder="Select Language">
                <option value={'en'}>English</option>
                <option value={'es'}>Spanish</option>
            </Select>

            <Box>
                <Text>{output}</Text>
            </Box>

            <Button onClick={handleGetRequest}>Translate</Button>
        </>
    );
};