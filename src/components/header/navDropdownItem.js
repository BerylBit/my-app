import React from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useDisclosure,
	Link,
	useColorMode,
} from "@chakra-ui/react";
import { Link as Rlink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavDropDownItem = ({ label, subMenu }) => {
	const { colorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Menu isOpen={isOpen} onClose={onClose} onMouseLeave={onClose}>
			<MenuButton
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
				fontSize="14px"
				lineHeight="21px"
				padding="13px 16px"
				fontWeight="bold"
				textTransform="capitalize"
				_hover={{ color: "primary.500" }}
				sx={{
					"&.active": {
						color: "primary.500",
					},
				}}
			>
				{label}
				<ChevronDownIcon />
			</MenuButton>
			<MenuList
				border="none"
				borderRadius="0 0 5px 5px"
				boxShadow="none"
				fontWeight="bold"
				borderTop="3px solid"
				borderColor="primary.500"
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
				top="-10px"
				position="relative"
				backgroundColor={colorMode === "light" ? "#ffffff" : "primary.700"}
			>
				{subMenu.map((row, i) => (
					<MenuItem key={i}>
						<Link
							padding="6px 16px"
							fontSize="14px"
							lineHeight="21px"
							fontWeight="bold"
							textTransform="capitalize"
							_hover={{ color: "primary.500" }}
							sx={{
								"&.active": {
									color: "primary.500",
								},
							}}
							to={row.path}
							as={Rlink}
						>
							{row.label}
						</Link>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default NavDropDownItem;
