import { Box, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const data = [
    {
      name: "Next.js",
      desc: "Next.js gives you the best developer experience with all the features you need for production.",
      url: "https://nextjs.org",
    },
    {
      name: "Chakra UI",
      desc: "Chakra UI is a simple, modular and accessible component library.",
      url: "https://chakra-ui.com",
    },
    {
      name: "ESLint",
      desc: "ESLint statically analyzes your code to quickly find problems.",
      url: "https://eslint.org",
    },
    {
      name: "Prettier",
      desc: "Prettier is an opinionated code formatter with support many languages.",
      url: "https://prettier.io",
    },
  ];

  return (
    <Box className={styles.container}>
      <Head>
        <title>Your Next Chakra ⚡️</title>
        <meta
          name="description"
          content="A custom boilerplate to get the fastest project setup for Next.js with Chakra
          UI. Created by Ilhambara."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" className={styles.main}>
        <Heading as="h1" fontSize="5xl">
          Your Next Chakra ⚡️
        </Heading>
        <Text fontSize="xl" py={10}>
          A custom boilerplate to get the fastest project setup for Next.js with
          Chakra UI.
        </Text>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {data.map((item) => (
            <GridItem
              as={Link}
              href={item.url}
              key={item.name}
              className={styles.card}
              isExternal
            >
              <Heading as="h2">{item.name} &rarr;</Heading>
              <Text opacity={0.75}>{item.desc}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box as="footer" className={styles.footer}>
        <Link href="https://github.com/ilhambara/your-next-chakra" isExternal>
          Created in full-power 🚀 by Ilhambara
        </Link>
      </Box>
    </Box>
  );
}
