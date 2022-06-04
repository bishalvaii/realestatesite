import Link from 'next/link';
import { Menu, MenuButton, extendTheme,withDefaultProps, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';


const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray'>
    <Box fontSize='5xl'  px={5}   color='black' colorScheme='teal' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Real Estate</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu  >
        <MenuButton as={IconButton}   icon={<FcMenu />} variant='outline' colorScheme='black' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;