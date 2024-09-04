import {  Flex,  Heading,    HStack,     IconButton,    Image,  Text,  } from "@chakra-ui/react";

import Saludo from '../assets/saludo.svg'
import Persona from '../assets/persona.svg'
import Type from "../layouts/Type";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Footer from '../layouts/Footer'
import Menu from '../layouts/Menu'

export const Home = () => {
  return (
    <>
            <Menu/>
        <Flex flexDir='column'   gap={{base:4,md:8}} p={{base:4,md:8}} bg="" >
            {/* seccion 1 */}
            <Flex 
                justifyContent="center" 
                height="100vh"
                w="100%"
                flexDir={{base:'column',md:'row'}}
            >            
                <Flex
                    w={{base:"100%",md:"50%"}}
                    h="100%"
                    justifyContent="center"
                    alignItems="center" 
                    flexDir={{base:'column',md:'column'}}               
                >
                    <Heading 
                        fontSize={{base:20,md:48}} 
                        fontWeight="bold"
                        textAlign={{base:'center'}}
                        color="blue.600"
                    >
                        Hola !
                    </Heading>
                    <Heading 
                        fontSize={{base:20,md:48}} 
                        fontWeight="bold"
                        textAlign={{base:'center'}}
                        color="blue.600"
                    >
                        Soy  Merwil Vegas
                    </Heading>
                    <HStack 
                        p={{base:'8',md:'12'}}
                        color={{base:'blue.600',md:'blue.600'}}
                        // fontWeight="bold"
                        textAlign={{base:'center'}}
                        fontSize={{base:'24',md:'32',lg:'50'}}
                    >
                        <Type/>
                    </HStack>
                </Flex>
                <Flex
                    w={{base:"100%",md:"50%"}}
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                    bg="white"
                    shadow="md"
                >  

                    <Image src={Saludo} alt="Enfermería" />
                
                </Flex>
            </Flex>
            {/* seccion 2 */}
            <Flex
                w="100%"
                h="100vh"
                bg="gray.100"
                justifyContent="center"
                alignItems="center"
                flexDir={{base:'column',md:'row'}}
                
            >
                <Flex
                    w={{base:"100%",md:"60%"}}
                    flexDir={{base:'column',md:'column'}}
                    justifyContent="center"
                    alignItems="center"
                    gap={{base:4,md:8}}
                    p={{base:4,md:12}}
                >
                    <Heading fontSize={{base:'1rem',md:'1.2rem'}}> DÉJAME PRESENTARME</Heading>
                    <Text fontSize={{base:'0.8rem',md:'1.2rem'}}> Me enamore de la tecnologia para serles sincero 
                        estando en la univeridad en el labaoratorio de robotica, donde pude aplicar varios temas como 
                        la programacion , mecanica y electonica 
                    </Text>
                    <Text fontSize={{base:'0.8rem',md:'1.2rem'}}>
                        Me gusta mucho JavaScript
                    </Text>
                    <Text fontSize={{base:'0.8rem',md:'1.2rem'}}>
                        Mis campos de interés son la creación de nuevas tecnologías y productos web
                    </Text>
                    <Text fontSize={{base:'0.8rem',md:'1.2rem'}}>
                        Siempre que sea posible, también aplico mi pasión por desarrollar 
                        productos con Node.js y la biblioteca y los marcos modernos de Javascript 
                        como React.js .
                    </Text>
                </Flex>
                <Flex
                w={{base:"100%",md:"40%"}}
                justifyContent="inherit"
                
                >
                    <Image
                        src={Persona}
                        alt="Persona"
                        width={{base:20,md:350}}
                    />
                </Flex>
            </Flex>
              {/* seccion 3 */}
              <Flex
                    w="100%"                    
                    bg="blue.600"
                    justifyContent={{base:'center',md:'center'}}
                    flexDir={{base:'column',md:'column'}}
                    pt={{base:4,md:8}}
                    
                    
                >
                    <Heading 
                        color="white"
                        fontSize={{base:'1rem',md:'1.2rem'}} 
                        fontWeight="bold"
                        textAlign={{base:'center',md:'center'}}
                        
                    >
                        ENCUÉNTRAME EN
                    </Heading>
                    <Text
                        textAlign={{base:'center',md:'center'}}
                        fontSize={{base:'0.8rem',md:'1.2rem'}}
                    >
                        Siéntete libre de conectarte conmigo
                    </Text>
                    <Text
                        textAlign={{base:'center',md:'center'}}
                        fontSize={{base:'0.8rem',md:'1.2rem'}}
                    >
                        com2pa@gmail.com
                    </Text>
                    <Flex 
                        p={8} 
                        gap={8}
                        justifyContent={{base:'center',md:'center'}}
                    >
                        <IconButton
                            colorScheme='blue'
                            isRound={true}                        
                            as={'a'}
                            href="https://github.com/com2pa"
                            isExternal
                            icon={<FaGithub fontSize={50} />}
                            borderRadius="50%"
                            target="_blank"
                        />
                        <IconButton
                            colorScheme='blue'
                            isRound={true}
                            as={'a'}                        
                            // w={50}
                            href="https://www.linkedin.com/in/merwilvegas/"                            
                            isExternal
                            icon={<TiSocialLinkedinCircular fontSize={70} />}
                            borderRadius="50%"
                            target="_blank"

                        />                        
                    </Flex>                    
                 </Flex>
        </Flex>
        <Footer/>

    </>
  )
}

export default Home;
