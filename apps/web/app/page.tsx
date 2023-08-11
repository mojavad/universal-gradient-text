"use client";

import {
  GeistProvider,
  CssBaseline,
  Grid,
  Spacer,
  Divider,
  Snippet,
  Code,
  Table,
} from "@geist-ui/core";
import Image from "next/image";
import banner from "../asset/banner.png";
import Link from "next/link";

import { GradientText } from "universal-gradient-text";

import styles from "../styles/index.module.css";
import { Button, Page, Text, Link as GeistLink } from "@geist-ui/core";
import { Github } from "@geist-ui/icons";

export default function Web() {
  const data = [
    {
      property: <Code>direction</Code>,
      description: "Direction of gradient",
      type: <Code>"ltr" | "rtl" | "up" | "down"</Code>,
      default: "ltr",
    },
    {
      property: <Code>colors</Code>,
      description: "An array of color values",
      type: <Code>string[]</Code>,
      default: "-",
    },
    {
      property: <Code>{`{...props}`}</Code>,
      description: "Props for the React Native <Text /> element.",
      type: <Code>TextProps</Code>,
      default: "-",
    },
  ];

  return (
    <Page>
      <Page.Header>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <GradientText
              // @ts-ignore
              style={{ fontWeight: "700", fontSize: "2rem" }}
              colors={["#4ebcf4", "#6b40ba"]}
              direction="down"
            >
              Universal Gradient Text
            </GradientText>
            <span style={{ fontSize: "2rem", paddingLeft: 10 }}> 🌌</span>
          </div>
          <Link href="https://github.com/mojavad/universal-gradient-text">
            <Button iconRight={<Github />} auto px={0.6} />
          </Link>
        </div>
        <Divider />
      </Page.Header>

      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <Image
          src={banner}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Banner"
        />
      </div>
      <Text h3>Installation</Text>
      <Text p>
        The library works with Expo and NextJS out of the box. To install simply
        run:
      </Text>
      <Snippet>yarn add universal-gradient-text</Snippet>
      <Text small>
        Under the hood, the library has dependencies on{" "}
        <Code>expo-linear-gradient</Code> &{" "}
        <Code>@react-native-masked-view/masked-view</Code>. As a result, you
        will need Expo Modules to be setup for bare RN projects. On web, text
        gradients are done with CSS.
      </Text>

      <Text h5 marginTop={1} marginBottom={1}>
        Expo
      </Text>
      <Text p>
        In Expo apps, you will also need to add the following dependencies:
      </Text>
      <Snippet>
        npx expo install expo-linear-gradient
        @react-native-masked-view/masked-view
      </Snippet>

      <Text h5 marginTop={1} marginBottom={1}>
        NextJS
      </Text>
      <Text p>
        On Next, you will need to follow extra steps to transpile the library.
        Your project will need to be{" "}
        <GeistLink href="https://docs.expo.dev/guides/using-nextjs/" icon color>
          setup to use Expo with React Native
        </GeistLink>
        . Update your <Code>next.config.js</Code>:
      </Text>
      <Code className="language-jsx" block my={0} mx={0}>
        {`...
transpilePackages: [
  ...
  'universal-gradient-text',
  'expo-linear-gradient',
  '@react-native-masked-view'
],
...`}
      </Code>

      <Text h3 marginTop={2}>
        Usage
      </Text>
      <Code className="language-jsx" block my={0} mx={0}>
        {`<GradientText
  style={{ fontWeight: "700", fontSize: 32 }}
  colors={["#4ebcf4", "#6b40ba"]}
  direction="rtl"
>
  Universal Gradient Text
</GradientText>`}
      </Code>

      <Text h3 marginTop={2}>
        Props
      </Text>
      <Table data={data}>
        <Table.Column prop="property" label="property" />
        <Table.Column prop="description" label="description" />
        <Table.Column prop="type" label="type" />
        <Table.Column prop="default" label="default" />
      </Table>
    </Page>
  );
}
