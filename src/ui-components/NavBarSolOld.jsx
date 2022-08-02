/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function NavBarSolOld(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      height="90px"
      alignItems="flex-start"
      position="relative"
      padding="25px 32px 25px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBarSolOld")}
    >
      <Flex
        gap="2px"
        width="152px"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo31672909")}
      >
        <Flex
          gap="10px"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="80px"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Logo31672907")}
        >
          <Image
            width="60px"
            height="60px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "109843619 2")}
          ></Image>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sol-Me"
          {...getOverrideProps(overrides, "Logo31672911")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="966px"
        justifyContent="center"
        alignItems="stretch"
        shrink="0"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Login/Button")}
      ></Flex>
      <Flex
        gap="32px"
        width="239px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SolanaWallet")}
      ></Flex>
    </Flex>
  );
}
