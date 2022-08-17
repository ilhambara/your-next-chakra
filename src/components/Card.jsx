import { Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

export default function Card({ href, title, desc }) {
  return (
    <LinkBox
      as="article"
      maxW="sm"
      p="5"
      rounded="md"
      borderWidth="1px"
      borderColor="gray.300"
      _hover={{ borderColor: "blue.400" }}
    >
      <Heading size="md" mb="4">
        <LinkOverlay href={href} isExternal>
          {title} &rarr;
        </LinkOverlay>
      </Heading>
      <Text>{desc}</Text>
    </LinkBox>
  );
}
