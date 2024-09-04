'use client'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

interface Props {
  children: React.ReactNode
}

function PriceWrapper(props: Props ) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('blue.600', 'gray.500')}
      borderRadius={'1rem'}>
      {children}
    </Box>
  )
}

export const ThreeTierPricing=()=> {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading 
          as="h1" 
          fontSize="4xl" 
          color="blue.600">
          Mis Habilidades
        </Heading>
        
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}        
      >
          
          {/* card1 */}
        <PriceWrapper 
          
        >
          <Box py={4} px={12} borderBottomWidth="1px" borderBottomColor={useColorModeValue('blue.600', 'gray.500')}>
            <Text fontWeight="500" fontSize="2xl" color="blue.600">
              Front End Development
            </Text>
            <Text fontSize="sm">
              Me gusta codificar cosas desde cero y darle vida a las ideas en el navegador.
            </Text>
            
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.600" />
                HTML
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.600" />
                CSS
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.600" />
                JavaScript
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
                <HStack justifyContent="center">
                  <Text fontSize="sm" fontWeight="600">
                    Herramientas
                  </Text>
                
                </HStack>
            </Box>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.600" />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.600" />
                Chakra-ui
              </ListItem>             
            </List>
          </VStack>
        </PriceWrapper>
        {/* card 2 */}
        <PriceWrapper>
          {/* <Box position="relative" > */}
            
            <Box py={4} px={12} borderBottomWidth="1px" borderBottomColor={useColorModeValue('blue.600', 'gray.500')}>
              <Text fontWeight="500" fontSize="2xl" color="blue.600">
                Back End Development
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="sm" fontWeight="600">
                  Me gusta construir servidores rápidos y seguros en combinación con bases de datos robustas.
                </Text>                
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
                <Box w="80%" pt={7}>
                <HStack justifyContent="center">
                  <Text fontSize="sm" fontWeight="600">
                    Lenguajes
                  </Text>
                
                </HStack>
              </Box>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.600" />
                  JavaScript, NoSQL
                </ListItem>                            
              </List>
              <Box w="80%" pt={7}>
                <HStack justifyContent="center">
                  <Text fontSize="sm" fontWeight="600">
                    Herramientas
                  </Text>
                
                </HStack>
              </Box>
              <List spacing={3} textAlign="start" px={12}>
              
              <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.600" />
                  Node Js
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.600" />
                  Express
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.600" />
                  MongoDB
                </ListItem>   
            </List>
              
            </VStack>
          {/* </Box> */}
        </PriceWrapper>
        {/* card 3 */}
        <PriceWrapper>
          <Box py={4} px={12} borderBottomWidth="1px" borderBottomColor={useColorModeValue('blue.600', 'gray.500')}>
            <Text fontWeight="500" fontSize="2xl" color="blue.600">
            Tests
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="sm" fontWeight="600">
              La depuración y la detección de errores se pueden realizar con pruebas
              </Text>
             
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            
            <Box w="80%" pt={7}>
              <HStack justifyContent="center">
                <Text fontSize="sm" fontWeight="600">
                  Herramientas
                </Text>
              
              </HStack>
            </Box>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.600" />
                Jest
              </ListItem>              
            </List>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  )
}

export default ThreeTierPricing;
