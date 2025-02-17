import React from 'react';
import { useState } from 'react';
import { Box, Text, HStack, VStack, Button, CheckboxGroup, Flex, Input } from '@chakra-ui/react';
import { MdUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const TaskCard = ({task}) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckboxClick = () => {
        setIsCompleted(!isCompleted); // Toggle the completed state
      };

    return (
        <div
         className={` pb-2 pt-2 transition duration-500 hover:-translate-y-3 ${isCompleted ? "blur-sm opacity-70" : ""}`}
        >
            <VStack>
                <Box p={4} minH={"300px"} minW={"400px"} bgColor={"#ffffff"} rounded={"xl"} boxShadow="0px 5px 5px #C0C0C0">
                    <Flex align={"flex-end"} justify={"flex-end"}>
                        <span>
                            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" onClick={handleCheckboxClick}/>
                        </span>
                    </Flex>
                    <Box>
                        <Text fontSize={"xl"} fontFamily={"monospace"} color={"#333333"}>
                            {task.description}
                        </Text>
                    </Box>
                </Box>
                <Box minH={"140px"} minW={"400px"} bg={"blue.400"} rounded={"xl"} paddingX={"10px"} paddingY={"10px"} boxShadow="0px 5px 5px #C0C0C0">
                            <HStack gap={"25px"}>
                                <Box minW={"250px"}>
                                <HStack gap={"25px"}>
							<Box minW={"250px"}>
								<Text
									fontWeight={"bold"}
									fontSize={"2xl"}
									md={4}
									fontFamily={"monospace"} color={"black"}>
									#{task.title}
								</Text>
							</Box>
							<Box minW={"100px"}>
								<HStack>
                                    
									<Button bgColor={"white"} width={"10px"} height={"30px"}>
										<MdUpdate color="black" />
									</Button>
									<Button bgColor={"white"} width={"10px"} height={"30px"}>
										<MdDelete color="black"/>
									</Button>
								</HStack>
							</Box>
						</HStack>
                                </Box>
                            </HStack>
                            <Box>
                                <Text fontSize={"xl"} fontFamily={"monospace"} color={"black"}>
                                    Category: {task.category}
                                </Text>
                                <Text fontSize={"xl"} fontFamily={"monospace"} color={"black"}>
                                    Due: {task.due}
                                </Text>
                                <Text fontSize={"xl"} fontFamily={"monospace"} color={"black"}>
                                    Time: {task.time}
                                </Text>
                            </Box>
                        </Box>
            </VStack>
        </div>
    );
}

export default TaskCard;
