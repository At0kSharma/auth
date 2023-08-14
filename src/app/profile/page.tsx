import { Box, Flex, Text } from "@chakra-ui/layout";

export default function ProfilePage() {
  return (
    <>
      <Flex direction={"column"} justify={"center"} align={"center"} mt={8}>
        <Text fontSize={"20pt"}>Profile Hub</Text>
        <Box minHeight={"500px"} maxWidth={"400px"} p={4}>
          <Text
            bg={"orange.500"}
            borderRadius={4}
            color={"white"}
            fontSize={"20pt"}
            p={4}
          >
            hello
          </Text>
        </Box>
      </Flex>
    </>
  );
}
