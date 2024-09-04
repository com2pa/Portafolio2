import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Servicio from '../assets/servicioEnfermeria.png'
import Menu from "../layouts/Menu"
import Footer from "../layouts/Footer"
import { IoEyeSharp } from "react-icons/io5"


export const Project = () => {
  return (
    <>
    <Menu/>
    <Flex flexDir='column'   gap={{base:4,md:8}} p={{base:4,md:8}} bg="" >
        <Flex justifyContent="center">
            <Heading 
                size='lg'
                fontWeight='bold'
                color='blue.600'
            >Proyecto Web</Heading>
        </Flex>
        <Flex h="70vh">
            <Grid
             templateColumns='repeat(3, 1fr)'
             >
                <GridItem w='100%' h='10' bg='blue.500' >
                    <Card 
                        // maxW='sm' 
                        _hover={{
                            boxShadow: '0 0 0 5px rgba(0, 123, 255, 0.2)',
                            transition: 'box-shadow 0.3s ease-in-out',
                            cursor: 'pointer',
                            transform: 'translateY(-3px)',                        
        
                        }} >
                        <CardBody>
                            <Image
                            src={Servicio}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading 
                                size='md'
                        
                            >Control de citas para Servicio enfermeria en casa</Heading>
                            <Text>
                                Este sitio web te permite gestionar tus citas con el personal de servicios enfermeria en casa. Disponible para personas con discapacidades y adultos mayores.
                            </Text>
                            
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter
                            display={'flex'}
                            justifyContent={{base:'center',md:'space-between'}}                         
                        >
                            <ButtonGroup
                                display={'flex'}
                                flexDir={{base:'column',md:'row'}}                                
                                spacing='2'>
                            <Button 
                                as="a"
                                variant='solid' 
                                colorScheme='blue'
                                href='https://backend-enfermeria.onrender.com/'
                                target='_blank'                               
                                leftIcon={<IoEyeSharp />}
                            >
                                Ver en linea
                            </Button>
                            <Button
                                as="a" 
                                variant='ghost' 
                                colorScheme='blue'
                                href='https://github.com/com2pa/frontEnd_Enfermeria'
                                target='_blank'
                                leftIcon={<IoEyeSharp />}
                            >
                            code in github
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </GridItem>
                {/* <GridItem w='100%' h='10' bg='blue.500' >1</GridItem>
                <GridItem w='100%' h='10' bg='blue.500' >1</GridItem>
                <GridItem w='100%' h='10' bg='blue.500' >1</GridItem>
                <GridItem w='100%' h='10' bg='blue.500' >1</GridItem> */}
                
            </Grid>

        </Flex>

    </Flex>
    {/* <Footer/> */}
    </>
  )
}

export default Project