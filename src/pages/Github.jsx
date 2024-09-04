import { Box,  Heading } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

function Github(){
    return(
        <Box>
            <Heading 
                display="flex" 
                justifyContent="center"
                color="blue.600"
                pb={8}
            > Dias que codifico</Heading>
            <GitHubCalendar
                username="com2pa"
                blockSize={15}
                blockMargin={5}
                colorScheme="light"
                fontSize={16}
            />
        </Box>
    )
}

export default Github;