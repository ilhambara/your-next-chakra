import { Grid } from "@chakra-ui/react";
import Card from "../components/Card";
import Layout from "../components/Layout";

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
    <Layout>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
        {data.map((item) => (
          <Card
            key={item.name}
            href={item.url}
            title={item.name}
            desc={item.desc}
          />
        ))}
      </Grid>
    </Layout>
  );
}
