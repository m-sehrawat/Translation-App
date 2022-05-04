import { Box, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export const TranslateBox = () => {

    const [text, setText] = useState("");
    console.log('text:', text)

    const handleInputChange = ({ target: { value } }) => {
        setText(value);
    }

    return (
        <>
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
                    value={text}
                />
            </Box>
        </>
    );
};