import React from 'react'
import {Box, Heading} from "@chakra-ui/react";
import {
    IconButton,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
    Avatar, 
    Wrap,
    WrapItem
  } from '@chakra-ui/react'
  import {
    FiTrendingUp,
    FiMessageSquare
  } from 'react-icons/fi'

  import{
    FaUserFriends,
    FaPager
    
  }from 'react-icons/fa'
  import {
    BiSolidGroup,
    BiSolidVideos
  }from 'react-icons/bi'
import {StorageProvider} from "../../services/storage";
import {SelfService} from "../../services/selfService";
import {colors} from "../../common/colors";
  


  const LinkItems = [
    { name: 'Friends', icon: FaUserFriends },
    { name: 'Pages', icon: FaPager },
    { name: 'Groups', icon: BiSolidGroup },
    { name: 'Videos', icon: BiSolidVideos },
    { name: 'Messages', icon: FiMessageSquare },
  ]

/*const LeftSider = () => {
    return (
        <Box
            borderColor={"black"}
            border={"2px"}
            h={"100%"}
            w={"25%"}

        >
            Left Sider
        </Box>
    )
}
export default LeftSider;*/
export default function SimpleSidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Box minH="90vh">
        <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/* Content */}
        </Box>
      </Box>
    )
  }
  
  const SidebarContent = ({ onClose, ...rest }) => {
    const self = SelfService.get();
    return (
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex alignItems="center" mx="8" justifyContent="space-between">
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    )
  }
  
  
  const NavItem = ({ icon, children, ...rest }) => {
    return (
      <Box
        as="a"
        href="#"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: colors.hex.light,
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    )
  }
