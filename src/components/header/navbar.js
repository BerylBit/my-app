import React from "react";
import { Box } from "@chakra-ui/react";
import NavItem from "./navItem";
import NavDropDownItem from "./navDropdownItem";
import navData from "./navData";
import { useLocation } from "react-router-dom";

const Navbar = () => {
	let { pathname } = useLocation();
	return (
		<Box
			as="ul"
			marginRight="-16px"
			marginLeft="-16px"
			listStyleType="none"
			display="flex"
			fontWeight="bold"
			alignItems="center"
			width={{ lg: "auto", md: "auto", sm: "100%" }}
			whiteSpace="nowrap"
			overflow="auto"
		>
			{navData.map((row, i) => (
				<React.Fragment key={i}>
					{row.path ? (
						<NavItem pathname={pathname} path={row.path} label={row.label} />
					) : (
						<NavDropDownItem
							subMenu={row.subMenu}
							label={row.label}
							pathname={pathname}
						/>
					)}
				</React.Fragment>
			))}
		</Box>
	);
};

export default Navbar;
