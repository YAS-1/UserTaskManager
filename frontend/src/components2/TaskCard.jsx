// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
	Box,
	Text,
	HStack,
	VStack,
	Button,
	Flex,
	Input,
	Textarea,
} from "@chakra-ui/react";
import { MdUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";

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

const TaskCard = ({ task }) => {
	const [isCompleted, setIsCompleted] = useState(false);

	const Tasks = {
		title: "task1",
		description: "Clean",
		category: "Personal",
		dueDate: "2025-01-01",
		time: "01:21",
	};

	const handleCheckboxClick = () => {
		setIsCompleted(!isCompleted); // Toggle the completed state
	};

	return (
		<div
			className={` pb-2 pt-2 transition duration-500 hover:-translate-y-3 ${
				isCompleted ? "blur-sm opacity-70" : ""
			}`}>
			<VStack>
				<Box
					p={4}
					minH={"300px"}
					minW={"400px"}
					bgColor={"#ffffff"}
					rounded={"xl"}
					boxShadow='0px 5px 5px #C0C0C0'>
					<Flex align={"flex-end"} justify={"flex-end"}>
						<span>
							<input
								type='checkbox'
								className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
								onClick={handleCheckboxClick}
							/>
						</span>
					</Flex>
					<Box>
						<Text fontSize={"xl"} fontFamily={"monospace"} color={"#333333"}>
							{task.description}
						</Text>
					</Box>
				</Box>
				<Box
					minH={"140px"}
					minW={"400px"}
					bg={"blue.400"}
					rounded={"xl"}
					paddingX={"10px"}
					paddingY={"10px"}
					boxShadow='0px 5px 5px #C0C0C0'>
					<HStack gap={"25px"}>
						<Box minW={"250px"}>
							<HStack gap={"25px"}>
								<Box minW={"250px"}>
									<Text
										fontWeight={"bold"}
										fontSize={"2xl"}
										md={4}
										fontFamily={"monospace"}
										color={"black"}>
										#{task.title}
									</Text>
								</Box>
								<Box minW={"100px"}>
									<HStack>
										<DialogRoot>
											<DialogTrigger asChild>
												<Button
													bgColor={"white"}
													width={"10px"}
													height={"30px"}>
													<MdUpdate color='black' />
												</Button>
											</DialogTrigger>
											<DialogContent>
												<DialogHeader>
													<DialogTitle fontWeight={"bold"} fontSize={"xl"}>
														Create new Task
													</DialogTitle>
												</DialogHeader>
												<DialogBody>
													<VStack gap={4}>
														<Input
															type={"text"}
															placeholder={"Task title"}
															width={["250px", "450px"]}
															padding={"10px"}
															border={"solid"}
															borderWidth={"1.5px"}
															rounded={"lg"}
															height={"50px"}
															fontSize={"lg"}
															color={"whiteAlpha.700"}
															name='title'
															value={Tasks.title}
															required
														/>
														<Textarea
															type={"text"}
															placeholder={"Task description"}
															width={["250px", "450px"]}
															padding={"10px"}
															border={"solid"}
															borderWidth={"1.5px"}
															rounded={"lg"}
															height={"200px"}
															fontSize={"lg"}
															color={"whiteAlpha.700"}
															name='description'
															value={Tasks.description}
															required
														/>
														<HStack>
															<Input
																type={"date"}
																placeholder={"Due date"}
																width={["50px", "220px"]}
																padding={"10px"}
																border={"solid"}
																borderWidth={"1.5px"}
																rounded={"lg"}
																height={"50px"}
																fontSize={"lg"}
																color={"whiteAlpha.700"}
																name='dueDate'
																value={Tasks.dueDate}
																required
															/>
															<Input
																type={"time"}
																placeholder={"Time"}
																width={["50px", "220px"]}
																padding={"10px"}
																border={"solid"}
																borderWidth={"1.5px"}
																rounded={"lg"}
																height={"50px"}
																fontSize={"lg"}
																color={"whiteAlpha.700"}
																name='time'
																value={Tasks.time}
																required
															/>
														</HStack>
														<Input
															type={"text"}
															placeholder={"Category"}
															width={["250px", "450px"]}
															padding={"10px"}
															border={"solid"}
															borderWidth={"1.5px"}
															rounded={"lg"}
															height={"50px"}
															fontSize={"lg"}
															color={"whiteAlpha.700"}
															name='category'
															value={Tasks.category}
															required
														/>
													</VStack>
												</DialogBody>
												<DialogFooter>
													<VStack gap={4}>
														<DialogActionTrigger asChild>
															<Button
																variant={"outline"}
																width={["250px", "450px"]}
																border={"2px solid"}
																fontSize={"xl"}
																borderRadius={"8px"}>
																Cancel
															</Button>
														</DialogActionTrigger>
														<Button
															color={"white"}
															bgColor={"blue.600"}
															width={["250px", "450px"]}
															border={"2px solid"}
															fontSize={"xl"}
															borderRadius={"8px"}>
															Save
														</Button>
													</VStack>
												</DialogFooter>
												<DialogCloseTrigger />
											</DialogContent>
										</DialogRoot>
										<Button bgColor={"white"} width={"10px"} height={"30px"}>
											<MdDelete color='black' />
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
};

export default TaskCard;
