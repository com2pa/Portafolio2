import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Servicio from '../assets/servicioEnfermeria.png'
import Colegio from '../assets/casaDeNiños.png'
import Menu from "../layouts/Menu"
import Footer from "../layouts/Footer"
import { IoEyeSharp } from "react-icons/io5"


export const Project = () => {
  return (
    <>
    <Menu/>
    
        <Flex 
            justifyContent="center"
            p={{base:4,md:4,lg:4}}
            m={{base:4,md:4,lg:4}}
            
          
        >
            <Heading 
                size='lg'
                fontWeight='bold'
                color='blue.600'
                
            >Proyecto Web</Heading>
        </Flex>
        <Flex 
            flexDir='column'   
            gap={{base:4,sm:4,md:8}} 
            p={{base:4,sm:4,md:8}} 
         
        >
        <Stack 
            h="80vh"
            // justifyContent='center'
           
        >
            <Grid
             gridTemplateColumns='repeat(auto-fill, minmax(300px,1fr))'            
             gap={4}
             >
                <GridItem 
                    w='100%'
                >
                    <Card
                                               
                        _hover={{
                            boxShadow: '0 0 0 5px rgba(0, 123, 255, 0.2)',
                            transition: 'box-shadow 0.3s ease-in-out',
                            cursor: 'pointer',
                            transform: 'translateY(-3px)',
                        }}
                       
                    >
                        <CardBody                                                     
                        >
                            <Image
                                src={Servicio}
                                alt='servicio enfermeria en casa'
            
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading 
                                size='md'
                        
                            >Enfermerica en casa</Heading>
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
                 <GridItem 
                    w='100%'                   
                >
                    <Card                         
                        _hover={{
                            boxShadow: '0 0 0 5px rgba(0, 123, 255, 0.2)',
                            transition: 'box-shadow 0.3s ease-in-out',
                            cursor: 'pointer',
                            transform: 'translateY(-3px)',
                        }}
                        Height='200px'
                        >
                        <CardBody>
                            <Image
                            src={Colegio}
                            alt='colegio'
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading 
                                size='md'                        
                            >Portal web pára colegio</Heading>
                            <Text>
                                Este sitio web te permite gestionar registo de usuarios (representante , alumnos y maestros) con el fin de
                                asignar la nota a los alumnos, sus asignaciones por grado y por asignatura para este primer modulo de desarrollo.
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
                                href='https://backcolegio.onrender.com/'
                                target='_blank'                               
                                leftIcon={<IoEyeSharp />}
                            >
                                Ver en linea
                            </Button>
                            <Button
                                as="a" 
                                variant='ghost' 
                                colorScheme='blue'
                                href='https://github.com/com2pa/backColegio'
                                target='_blank'
                                leftIcon={<IoEyeSharp />}
                            >
                            code in github
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>

                 </GridItem>
                {/*<GridItem w='100%' h='10' bg='blue.500' >1</GridItem>
                <GridItem w='100%' h='10' bg='blue.500' >1</GridItem>
                <GridItem w='100%' h='10' bg='blue.500' >1</GridItem> */}                
            </Grid>
        </Stack>
    </Flex> 
    </>
  )
}

export default Project