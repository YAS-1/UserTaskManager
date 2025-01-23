import React from 'react';
import { Box, Text, HStack, VStack } from '@chakra-ui/react';
import { BorderBeam } from "../components/ui/border-beam";


const TaskCard = ({task}) => {
    return (
        <div
         className=" py-2 px-2 min-w-30 relative h-[470px] w-full overflow-hidden rounded-lg md:shadow-xl bg-transparent transition duration-500 hover:-translate-y-3"
        >
            <VStack>
                <Box p={4} minH={"300px"} minW={"400px"} bgColor={"black"} rounded={"xl"}>
                    <Text fontSize={"xl"} fontFamily={"cursive"}>
                        {task.description}
                    </Text>
                </Box>
                <Box minH={"140px"} minW={"400px"} bgColor={"red.400"} rounded={"xl"} paddingX={"10px"}>
                            <HStack gap={"25px"}>
                                <Box minW={"250px"}>
                                    <Text
                                        fontWeight={"bold"}
                                        fontSize={"2xl"}
                                        md={4}
                                        fontFamily={"monospace"}
                                        >
                                        #{task.title}
                                    </Text>
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
