import { Flex } from '@chakra-ui/react'
import Habilidades from './Habilidades'
import Menu from '../layouts/Menu';
import Github from './Github';
export const About = () => {
  return (
    <>    
    <Menu/>
    <Flex flexDir='column'   gap={{base:4,md:8}} p={{base:4,md:8}} bg="" >
      {/* seccion 1 */}
      <Habilidades/>
      <Github/>
    </Flex>    
    </>
  )
}

export default About;