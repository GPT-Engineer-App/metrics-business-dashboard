// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Business Dashboard
        </Text>
        <Image src="https://images.unsplash.com/photo-1590102426319-c7526718cd70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ298ZW58MHx8fHwxNzE0MTcyODk0fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" />
      </Flex>
      <SimpleGrid columns={4} spacing={10}>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaShoppingCart /> Sales
          </StatLabel>
          <StatNumber>1,897</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaDollarSign /> Revenue
          </StatLabel>
          <StatNumber>$53,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            15.89%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaUsers /> Customers
          </StatLabel>
          <StatNumber>924</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            5.12%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaChartLine /> Growth
          </StatLabel>
          <StatNumber>8.24%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            Yearly
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
