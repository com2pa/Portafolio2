import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';

import { AiOutlineDownload } from 'react-icons/ai';
import Menu from '../layouts/Menu';
import Pdf from '../assets/CV_MerwilVegas.pdf';
import { Document, Page } from 'react-pdf';
import { useEffect, useState } from 'react';
import React from 'react';
import Footer from '../layouts/Footer'

// const pdfjsLib = window['pdfjs-dist/build/pdf'];

// console.log(Pdf);



export const Resumen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
    useEffect(()=>{
        setWidth(window.innerWidth)
    },[])
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
      }
    
  return (
    <>
        <Menu/>
        <Flex flexDir='column'   gap={{base:4,md:8}} p={{base:4,md:8}} bg="" >
            
            <Flex justifyContent="center">
                <ButtonGroup>
                    <Button
                        as="a" 
                        variant="primary"
                        size="md"
                        leftIcon={<AiOutlineDownload/>}
                        bg='blue.600'
                        color='white'
                        href={Pdf}
                        target="_blank"

                    >
                        &nbsp;Ver Resumen</Button>
                </ButtonGroup>
            </Flex>
            {/* contenido del resumen */}
            <Box 
                // w={width}
                w={{base:'100%'}}
                maxW="720px"
                mx="auto"
                p={8}
                bg="white"
                shadow="md"
                rounded="md"
                overflow="hidden"
                // border="1px solid #eee"
                // borderLeftWidth={width <= 240?  "4px" : "0"}
                // borderRightWidth={width <= 240? "4px" : "0"}
                // borderTopWidth={width <= 240? "4px" : "0"}
                // borderBottomWidth={width <= 240? "4px" : "0"}
                
            >
                {/* <Document
                    file={Pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document> */}
                <iframe 
                    src={Pdf}                    
                    height="650"
                    width="100%"
                   
                    
                ></iframe>
                {/* <Box mt={4}>
                    <Button
                        onClick={() => setPageNumber(prevPageNumber => prevPageNumber - 1)}
                        disabled={pageNumber <= 1}
                    >
                        Anterior
                    </Button>
                    <span>{pageNumber} de {numPages}</span>
                    <Button
                        onClick={() => setPageNumber(prevPageNumber => prevPageNumber + 1)}
                        disabled={pageNumber >= numPages}
                    >
                        Siguiente
                    </Button>
                </Box> */}
            
            </Box>            

        </Flex>
        <Footer/>
    </>
  )
}

export default Resumen;