import { Box, Flex, Button, useDisclosure, IconButton, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box bg="white" px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo/Brand */}
        <Link to="/home">
          <Box fontSize="xl" fontWeight="bold" color="blue.500">
            TaskManager
          </Box>
        </Link>

        {/* Mobile Hamburger Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />

        {/* Desktop Navigation */}
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Button variant="ghost" mr={4} onClick={() => navigate('/tasks')}>
            My Tasks
          </Button>
          <Button variant="ghost" mr={4} onClick={() => navigate('/profile')}>
            Profile
          </Button>
          <Button 
            colorScheme="blue" 
            onClick={() => {
              // Add logout logic later
              navigate('/');
            }}
          >
            Logout
          </Button>
        </Flex>
      </Flex>

      {/* Mobile Navigation */}
      <Stack
        display={{ base: isOpen ? "flex" : "none", md: "none" }}
        spacing={4}
        py={4}
      >
        <Button variant="ghost" w="full" onClick={() => navigate('/tasks')}>
          My Tasks
        </Button>
        <Button variant="ghost" w="full" onClick={() => navigate('/profile')}>
          Profile
        </Button>
        <Button 
          colorScheme="blue" 
          w="full"
          onClick={() => {
            // Add logout logic later
            navigate('/');
          }}
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );
};

export default Navbar;