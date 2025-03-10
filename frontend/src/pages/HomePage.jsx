import {
	Flex,
	VStack,
	Box,
	Text,
	HStack,
	Image,
	Button,
	Icon,
	SimpleGrid,
	Input,
	Textarea,
} from "@chakra-ui/react";
import { IoAddCircle } from "react-icons/io5";
import React, { useState } from "react";

import { image } from "../assets/images";
import { tasks } from "@/assets/tasks";

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

import TaskCard from "@/components2/TaskCard";

const HomePage = () => {
	const [Tasks, setTasks] = useState(
		{
			title: "",
			description: "",
			category: "",
			dueDate: "",
			time: "",
		}
	);

	const handleCreateTask = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setTasks((pre) => {
			return { ...pre, [name]: value };
		});
	};

	const handleAddTask = (e) => {
		e.preventDefault();
		console.log(Tasks);
	};
	return (
		<Flex
			align={"center"}
			justify={"center"}
			paddingY={"20px"}
			paddingX={"20px"}>
			<VStack gap={10}>
				<Box
					display={{ base: "none", md: "block" }}
					width={{ base: "150px", md: "500px", lg: "850px" }}
					minH={"10px"}
					border={"solid"}
					padding={"5px"}
					borderWidth={"1px"}
					rounded={"full"}
					bgColor={"#FFFFFF"}
					borderColor={"blue.50"}
					overflow={"hidden"}>
					<HStack gap={10}>
						<Box
							minW={"400px"}
							padding={"10px"}
							fontSize={"2xl"}
							color={"black"}
							fontWeight={"bold"}>
							<Text>Task Manager</Text>
						</Box>
						<Box minW={"390px"} padding={"5px"} fontSize={"lg"} color={"black"}>
							<Flex align={"flex-end"} justify={"flex-end"}>
								<HStack gap={3}>
									<span>
										<Text>@Username</Text>
									</span>
									<Image
										src={image.placeholder2}
										alt={"image"}
										boxSize={"40px"}
										rounded={"full"}
										display={{ md: "none", lg: "block" }}
									/>
								</HStack>
							</Flex>
						</Box>
					</HStack>
				</Box>
				<Box>
					<Flex align={"center"} justify={"center"}>
						<Box>
							<Flex align={"center"} justify={"center"}>
								<DialogRoot>
									<DialogTrigger asChild>
										<Button
											boxShadow='0px 5px 5px #C0C0C0'
											padding={"10px"}
											rounded={"2xl"}
											bgColor={"black"}>
											<Icon
												as={IoAddCircle}
												color={"white"}
												boxSize={"20px"}
												_hover={{ cursor: "pointer", transform: "scale(1.1)" }}
											/>
											<Text fontSize={"xl"} color={"white"} fontWeight={"bold"}>
												Create Task
											</Text>
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle fontWeight={"bold"} fontSize={"xl"}>
												Create new Todo
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
													onChange={handleCreateTask}
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
													onChange={handleCreateTask}
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
														onChange={handleCreateTask}
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
														onChange={handleCreateTask}
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
													onChange={handleCreateTask}
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
														
													</Button>
												</DialogActionTrigger>
												<Button
													color={"white"}
													bgColor={"blue.600"}
													width={["250px", "450px"]}
													border={"2px solid"}
													fontSize={"xl"}
													borderRadius={"8px"}
													onClick={handleAddTask}>
													Save
												</Button>
											</VStack>
										</DialogFooter>
										<DialogCloseTrigger />
									</DialogContent>
								</DialogRoot>
							</Flex>
						</Box>
					</Flex>
				</Box>
				<Box
					minW={"80vw"}
					border={"solid"}
					borderColor={"#f0f2f5"}
					paddingX={"10px"}
					paddingY={"15px"}
					rounded={"xl"}
					bgColor={"#f0f2f5"}>
					<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
						{tasks.map((task) => {
							return <TaskCard key={task.id} task={task} />;
						})}
					</SimpleGrid>
				</Box>
			</VStack>
		</Flex>
	);
};

export default HomePage;
