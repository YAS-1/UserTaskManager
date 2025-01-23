import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import { BorderBeam } from "../components/ui/border-beam";


const TaskCard = ({task}) => {
    return (
        <div
         className=" py-10 min-w-30 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl bg-white "
        >
            <Box p={4} minH={"250px"} minW={"100px"}>
                <Text fontSize={"xl"} fontFamily={"cursive"}>
                    {task.description}
                </Text>
            </Box>
            <Box minH={"100px"} padding={"20px"} bgColor={"red.400"}>
						<HStack gap={"25px"}>
							<Box minW={"250px"}>
								<Text
									fontWeight={"bold"}
									fontSize={"lg"}
									md={4}
									fontFamily={"cursive"}>
									{" "}
									#{task.title}{" "}
								</Text>
							</Box>
						</HStack>
						<Box>
							<Text fontSize={"md"} fontFamily={"cursive"}>
								Complete: {task.completed}
							</Text>
						</Box>
					</Box>
            <BorderBeam size={250} duration={12} delay={9} borderWidth={3}/>
        </div>
    );
}

export default TaskCard;
