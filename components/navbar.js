import Logo from './logo'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem,
            MenuList, MenuButton, IconButton, useColorModeValue
        } from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, children}) =>{
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return(
        // <NextLink href={href}>
            <Link href={href}
                p={2} 
                bg={active ? 'glassTeal' : undefined} 
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        // </NextLink>
    )
}

const Navbar = props =>{
    const {path} = props
    return(
        <Box 
            position="fixed" 
            as="nav" 
            w="100%" 
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{backdropFilter: 'blur(10px)'}}   
            zIndex={1} 
            {...props}
        >
                <Container 
                    display="flex" 
                    p={2} 
                    maxW="container.md" 
                    wrap="wrap" 
                    align="center" 
                    justify="space-between"
                >
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo/>
                        </Heading>
                    </Flex>
                    <Stack
                        direction={{base:'column', md: 'row'}}
                        display={{base: 'none', md: 'flex'}}
                        width={{base: 'full', md: 'auto'}}
                        alignItems="center"
                        flexGrow={1}
                        mt={{base:4, nmd:0}}
                    >
                        <LinkItem href="/works" path={path}>
                            Works
                        </LinkItem>
                        <LinkItem href="/posts" path={path}>
                            Posts
                        </LinkItem>
                    </Stack>
                <Box flex={1} align="right">
                <ThemeToggleButton/>    
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon/>} 
                                variant="outline" 
                                aria-label="Options" 
                            />
                                <MenuList>
                                    <MenuItem as={Link} href="/">
                                        About
                                    </MenuItem>
                                    <MenuItem as={Link} href="/works">
                                        Works
                                    </MenuItem>
                                    <MenuItem as={Link} href="/posts">
                                        Posts
                                    </MenuItem>
                                    <MenuItem as={Link} href="https://github.com/Ernestoc14/ernestoc14-homepage">
                                        View Source
                                    </MenuItem>
                                </MenuList>
                        </Menu>
                    </Box>
                </Box>
                </Container>
            </Box>
    )
}

export default Navbar 