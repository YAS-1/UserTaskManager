import { Flex, VStack, Box, Text, HStack, Image, Button, Icon, SimpleGrid } from '@chakra-ui/react';
import { IoAddCircle } from "react-icons/io5";
import React from 'react';

import { image } from '../assets/images';
import { tasks } from '@/assets/tasks';

import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

import TaskCard from '@/components2/TaskCard';


const HomePage = () => {
    return (
        <Flex align={"center"} justify={"center"} paddingY={"20px"} paddingX={"20px"}>
            <VStack gap={10}>
                <Box display={{base:"none", md:"block"}} width={{base:"150px", md:"500px", lg:"850px"}}  minH={"10px"} border={"solid"} padding={"5px"} borderWidth={"1px"} rounded={"full"} bgColor={"#FFFFFF"} borderColor={"blue.50"} overflow={"hidden"}>
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
                        <Box>
                            <Flex align={"center"} justify={"center"}>
                                
                                <Button boxShadow="0px 5px 5px #C0C0C0" padding={"10px"} rounded={"2xl"} bgColor={"black"}>
                                    <Icon
                                    as={IoAddCircle}
                                    color={"white"}
                                    boxSize={"20px"}
                                    _hover={{cursor:'pointer', transform: "scale(1.1)"}}
                                    />
                                    <Text fontSize={"xl"} color={"white"} fontWeight={"bold"}>Create Task</Text>
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box minW={"80vw"} border={"solid"} borderColor={"#f0f2f5"} paddingX={"10px"} paddingY={"15px"} rounded={"xl"} bgColor={"#f0f2f5"}>
                    <SimpleGrid
                    columns={{base:1, md:2, lg:3}}
                    gap={5}
                    >
						{tasks.map((task) => {
							return <TaskCard key={task.id} task={task} />;
						})}
                    </SimpleGrid>
                </Box>
            </VStack>
        </Flex>
    );
}

export default HomePage;
