import { Flex, Text, Box, HStack, Heading, Input, VStack, Button} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import SignUpPage from './SignUpPage';


function LoginPage() {
  return (
    <Flex justify={"center"} align={"center"} paddingY={"50px"}>
        <Box minW={"80vw"} overflow={"hidden"} padding={"10px"}>
            <HStack gap={"0px"}>
                <Box border={"solid"} rounded={"xl"} borderColor={"blue.50"} minW={"1/2"} minH={"550px"} bgGradient="to-b"gradientFrom={"blue.200"}gradientVia={"pink.200"}gradientTo={"blue.500"} paddingX={"50px"} paddingY={"50px"}>
                        <Box paddingY={"50px"} border={"solid"} paddingX={"20px"} borderWidth={"1px"} rounded={"xl"} bgGradient="to-r" gradientFrom={"whiteAlpha.200"}gradientTo={"blue.200"}>
                                <Heading as={"h1"} display={{base:"none",md:"none", lg:"block"}} fontSize={{base:"hidden", sm:"80px", lg:"100px"}} fontWeight={"semibold"}>
                                        Task<Text  fontSize={{base:"sm", sm:"80px", lg:"100px"}} color={"black"} fontWeight={"semibold"}>Manager.</Text>
                                </Heading>
                                <Box padding={"20px"} marginTop={"25px"}>
                                    <Text fontSize={{base:"x-small" , sm:"lg", lg:"2xl"}} fontFamily={"monospace"} color={"black"} fontWeight={"semibold"}>
                                        Your very own task assistant
                                    </Text>
                                </Box>
                        </Box>
                </Box>
                <Box border={"solid"} rounded={"xl"} minW={"1/2"} minH={"550px"} bgColor={"white"} paddingY={"50px"} borderColor={"blue.50"}>
                    <VStack gap={8}>
                        <Box>
                            <Text fontSize={{base:"x-small", md:"lg", lg:"2xl"}} fontWeight={"bold"} color={"black"} padding={"5px"}>
                                Hey, Hello 👋
                            </Text>
                            <Text fontSize={{base:"x-small", md:"lg", lg:"2xl"}} fontWeight={"bold"} color={"black"} padding={"5px"}>
                                Login
                            </Text>
                        </Box>
                        <Box>
                            <VStack gap={8}>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    fontSize={{base:"x-small", md:"lg"}}
                                    border={"solid"}
                                    borderWidth={"1px"}
                                    borderColor={"gray.600"}
                                    color={"blackAlpha.900"}
                                    width={{base:"250px", md:"300px", lg:"500px"}}
                                    padding={"10px"}
                                    rounded={"lg"}
                                    required
                                    />
                                    <Input
                                    type="password"
                                    placeholder="Password"
                                    fontSize={{base:"x-small", md:"lg"}}
                                    border={"solid"}
                                    borderWidth={"1px"}
                                    borderColor={"gray.600"}
                                    color={"blackAlpha.900"}
                                    width={{base:"250px", md:"300px", lg:"500px"}}
                                    padding={"10px"}
                                    rounded={"lg"}
                                    required
                                    />
                                <Box>
                                    <Flex justify={"center"} align={"center"} gap={10}>
                                        <VStack gap={5}>
                                            <Button paddingY={"5px"} paddingX={"10px"} rounded={"xl"} border={"solid"} borderWidth={"1px"} borderColor={"white"} width={{base:"250px", md:"300px", lg:"500px"}} fontSize={{base:"sm", md:"lg"}} bgGradient= "to-r"gradientFrom={"blue.300"}gradientVia={"blue.500"}gradientTo={"purple.300"} color={"black"} fontWeight={"semibold"}>
                                                Login
                                            </Button>
                                            <Text fontSize={{base:"x-small", md:"lg"}} color={"blackAlpha.900"}>
                                                Don't have an account?
                                            </Text>
                                            <Link to={"/signup"}>
                                                <Button paddingY={"5px"} paddingX={"10px"} rounded={"xl"} border={"solid"} borderColor={"white"} borderWidth={"1px"} bgGradient= "to-r"gradientFrom={"blue.300"}gradientVia={"blue.500"}gradientTo={"purple.300"} width={{base:"250px", md:"300px", lg:"500px"}} fontSize={{base:"sm", md:"lg"}}>
                                                    Sign Up
                                                </Button>
                                            </Link>
                                        </VStack>
                                    </Flex>
                                </Box>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    </Flex>
  );
}

export default LoginPage