import {
  Box,
  Container,
  Heading,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Your Next Chakra ⚡️</title>
        <meta
          name="description"
          content="A starter template to get the fastest project setup for Next.js with
          Chakra UI. Created by Ilhambara."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Divider between Head and Body */}

      <VStack as={Container} maxW="container.lg" minH="100vh" spacing={[8, 16]}>
        <Box as="header" textAlign="center" pt={16}>
          <Heading as="h1" fontSize={["3xl", "5xl"]}>
            Your Next Chakra ⚡️
          </Heading>
          <Text fontSize={["md", "xl"]} pt={[6, 8]}>
            A starter template to get the fastest project setup for Next.js with
            Chakra UI.
          </Text>
        </Box>

        <Box as="main">{children}</Box>

        <Spacer />

        <Box as="footer" h="64px" alignItems="center" justifyContent="center">
          <Link href="https://github.com/ilhambara/your-next-chakra" isExternal>
            Created in full-power 🚀 by Ilhambara
          </Link>
        </Box>
      </VStack>
    </>
  );
}
