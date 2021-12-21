import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { Link as Rlink } from "react-router-dom";

const NavItem = ({ label, path, pathname }) => {
	return (
		<Box as="li">
			<Link
				padding="13px 16px"
				textTransform="capitalize"
				fontSize="14px"
				lineHeight="21px"
				
				_hover={{ color: "primary.500" }}
				sx={{
					"&.active": {
						color: "primary.500",
					},
				}}
				as={Rlink}
				to={path}
				className={pathname === path ? "active" : ""}
			>
				{label}
			</Link>
		</Box>
	);
};

export default NavItem;
