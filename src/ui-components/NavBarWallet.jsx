/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBarWallet(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      height="96px"
      alignItems="flex-start"
      position="relative"
      padding="25px 32px 25px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBarWallet")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="152px"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "LogoFrame")}
      >
        <View
          width="73px"
          height="60px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "LogoInFrame")}
        >
          <Image
            width="60px"
            height="60px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            src={`${"logo"}${""}`}
            {...getOverrideProps(overrides, "LogoImage")}
          ></Image>
        </View>
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
          {...getOverrideProps(overrides, "LogoText")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="976px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="976px"
        height="48px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SearchBar")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          height="48px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Log in / Signup"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
      <View
        width="208px"
        height="45px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SolanaWallet")}
      ></View>
    </Flex>
  );
}
