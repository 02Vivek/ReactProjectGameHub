
import { HStack, Heading, Image } from '@chakra-ui/react'

import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: Props) => {
  return (
    <>
        <HStack padding='10px' >
            <Image src={logo} boxSize= '50px' borderRadius={10} />
            <a href="/">
              <Heading fontSize="3xl" cursor="pointer">
                GamesHub
              </Heading>
            </a>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    </>
  )
}

export default NavBar