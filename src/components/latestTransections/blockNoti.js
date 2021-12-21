import React from "react";
import { Box, Text, Link, useColorMode } from "@chakra-ui/react";
import { Link as Rlink } from "react-router-dom";

const BlockNoti = () => {
  const {colorMode} = useColorMode();
  return (
    <Box padding="12px 0" display="flex" alignItems="center" borderBottom='1px solid' borderColor='inherit'>
      <Box
        background="rgba(119,131,143,.1)"
        height="44px"
        width="43px"
        minWidth="43px"
        borderRadius="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="14px"
        fontWeight="700"
      >
        TX
      </Box>
      <Box marginLeft="10px">
        <Link
          as={Rlink}
          fontWeight="500"
          fontSize="14px"
          to="/"
          color="primary.500"
        >
          25144438
        </Link>
        <Text color="10 secs ago" fontSize="11px">
          10 secs ago
        </Text>
      </Box>
      <Box marginLeft="auto">
        <Box display="flex">
          <Text fontSize="14px">Validated By</Text>
          <Link
            fontSize="14px"
            marginLeft="3px"
            as={Rlink}
            to="/"
            color="primary.500"
          >
            Null Address: 0x000...000
          </Link>
          <Box
            display="flex"
            position="relative"
            alignItems="center"
            fontWeight="700"
            padding="3px 8px 3px 18px"
            background="rgba(119,131,143,.1)"
            borderRadius="0 3px 3px 0"
            fontSize="10px"
            _after={{
              position: "absolute",
              left: 0,
              top: 0,
              content: "''",
              borderTop: "0.7rem solid transparent",
              borderBottom: "0.7rem solid transparent",
              borderLeft: "0.7rem solid",
              borderLeftColor:colorMode === 'light' ? '#ffffff' : 'primary.700'
            }}
            color="#77838f"
          >
            0.35672 BRB
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Link fontSize="14px" as={Rlink} to="/" color="primary.500">
            13 txns
          </Link>
          <Text marginLeft="5px" color="#77838f" fontSize="11px">
            in 1 sec
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BlockNoti;
