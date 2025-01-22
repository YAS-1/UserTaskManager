import { Flex, VStack, Box, Text, HStack, Image, Button } from '@chakra-ui/react';
import { IoAddCircle } from "react-icons/io5";
import React from 'react';

import { image } from '../assets/images';

const HomePage = () => {
    return (
        <Flex align={"center"} justify={"center"} paddingY={"20px"} paddingX={"20px"}>
            <VStack gap={10} border={"solid"} borderColor={"red"}>
                <Box display={{base:"none", md:"block"}} width={{base:"150px", md:"500px", lg:"850px"}}  minH={"10px"} border={"solid"} padding={"5px"} borderWidth={"1px"} rounded={"full"} boxShadow="0px 5px 5px #C0C0C0" bgColor={"#F0FFFF"} borderColor={"blue.50"} overflow={"hidden"}>
                    <HStack gap={10}>
                        <Box  minW={"400px"} padding={"10px"} fontSize={"2xl"} color={"black"} fontWeight={"bold"}><Text>Task Manager</Text></Box>
                        <Box  minW={"390px"} padding={"5px"} fontSize={"lg"} color={"black"}>
                            <Flex align={"flex-end"} justify={"flex-end"}>
                                <HStack gap={3}>
                                    <span><Text>@Username</Text></span>
                                    <Image src={image.placeholder2} alt={"image"} boxSize={"40px"} rounded={"full"} display={{md:"none", lg:"block"}} />
                                </HStack>
                            </Flex>
                        </Box>
                    </HStack>
                </Box>
                <Box>
                    <Flex align={"center"} justify={"center"}>
                        <button className="bg-black size-10">
                            <Flex align={"center"} justify={"center"}>
                                <I/>
                            </Flex>
                        </button>
                    </Flex>
                </Box>
            </VStack>
        </Flex>
    );
}

export default HomePage;
