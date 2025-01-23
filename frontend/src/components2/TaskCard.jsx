import React from 'react';
import { useState } from 'react';
import { Box, Text, HStack, VStack, Button, CheckboxGroup, Flex } from '@chakra-ui/react';
import { BorderBeam } from "../components/ui/border-beam";
import { MdUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const TaskCard = ({task}) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckboxClick = () => {
        setIsCompleted(!isCompleted); // Toggle the completed state
      };

    return (
        <div
         className={`py-2 px-2 min-w-30 relative h-[470px] w-full overflow-hidden rounded-lg md:shadow-xl bg-transparent transition duration-500 hover:-translate-y-3 ${isCompleted ? "blur-sm opacity-70" : ""}`}
        >
            <VStack>
                <Box p={4} minH={"300px"} minW={"400px"} bgColor={"black"} rounded={"xl"}>
                    <Flex align={"flex-end"} justify={"flex-end"}>
                        <span>
                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" onClick={handleCheckboxClick}/>
                        </span>
                    </Flex>
                    <Text fontSize={"xl"} fontFamily={"cursive"}>
                        {task.description}
                    </Text>
                </Box>
                <Box minH={"140px"} minW={"400px"} bgColor={"red.400"} rounded={"xl"} paddingX={"10px"} paddingY={"10px"}>
                            <HStack gap={"25px"}>
                                <Box minW={"250px"}>
                                <HStack gap={"25px"}>
							<Box minW={"250px"}>
								<Text
									fontWeight={"bold"}
									fontSize={"2xl"}
									md={4}
									fontFamily={"monospace"}>
									{" "}
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
                                <Text fontSize={"xl"} fontFamily={"monospace"}>
                                    Category: {task.category}
                                </Text>
                                <Text fontSize={"xl"} fontFamily={"monospace"}>
                                    Due: {task.due}
                                </Text>
                            </Box>
                        </Box>
                <BorderBeam size={250} duration={12} delay={9} borderWidth={3}/>
            </VStack>
        </div>
    );
}

export default TaskCard;
