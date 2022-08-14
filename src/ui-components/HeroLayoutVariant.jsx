/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function HeroLayoutVariant(props) {
  const { users, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Title: {},
        SubTitle: {},
        Body: {},
        "Main Body": {},
        ButtonFrame: {},
        "Type Lock Up": {},
        HeroLayoutVariant: {},
      },
      variantValues: { variant: "Default" },
    },
    {
      overrides: {
        Title: {
          fontSize: "40px",
          lineHeight: "40px",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        SubTitle: { fontSize: "20px", height: "90px" },
        Body: { height: "216px" },
        "Main Body": {
          padding: "78px 0px 24px 0px",
          height: "274px",
          grow: "1",
          basis: "274px",
        },
        ButtonFrame: {},
        "Type Lock Up": { height: "408px", grow: "1", basis: "408px" },
        HeroLayoutVariant: {
          width: "480px",
          height: "480px",
          padding: "36px 24px 36px 24px",
        },
      },
      variantValues: { variant: "Small" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="100%"
      height="548px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="160px 160px 160px 160px"
      backgroundColor="rgba(0,0,0,1)"
      backgroundImage="linear-gradient(#AA336A,#4bc8b4)"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayoutVariant")}
    >
      <Flex
        gap="24px"
        direction="column"
        height="360px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Wellcome to Sol Me ☀️"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Easy donations with Solana Pay"
            {...getOverrideProps(overrides, "SubTitle")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sol-Me adds an additional source of income for influencers, content creators, and open source developers. Enabling them to receive donations by using Solana Pay quickly with a 0% fee."
            {...getOverrideProps(overrides, "Body")}
          ></Text>
        </Flex>
        <View
          width="180px"
          height="46px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ButtonFrame")}
        ></View>
      </Flex>
    </Flex>
  );
}
