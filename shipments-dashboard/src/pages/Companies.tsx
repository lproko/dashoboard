import { Box, Flex, Text } from "@chakra-ui/react";
import { CompaniesList } from "../components/CompaniesList";
import { fetchCompanies } from "@/api";
import { useEffect, useState } from "react";

export const Companies =  () => {
const [companies, setCompanies] =useState({}); 


useEffect(()=>{
  fetchCompanies().then(res=>setCompanies(res));
},[])

  return (
    <Flex
      paddingInline="32px"
      direction="column"
      flex="1"
      maxH="100%"
      maxW="1600px"
      overflow="auto"
      position="relative"
    >
      <Box position="sticky" top="0">
        <Flex
          justifyContent="center"
          alignContent="center"
          alignItems="left"
          h="120px"
          w="100%"
          direction="column"
        >
          <Text fontSize="20px" fontWeight="700">
            Companies
          </Text>
          <Text fontSize="12px" fontWeight="500">
            Companies List
          </Text>
        </Flex>
      </Box>
      <Flex
        direction="column"
        paddingInline="1rem"
        borderRadius="1rem"
        bg="#fff"
        height="73vh"
      >
        <CompaniesList data={companies}/>
      </Flex>
    </Flex>
  );
};
