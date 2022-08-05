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
import {
  Button,
  Flex,
  Image,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function NavBarWallet(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        LogoImage: {},
        LogoInFrame: {},
        LogoText: {},
        LogoFrame: {},
        SearchField: {},
        Button: {},
        SearchBar: {},
        SolanaWallet: {},
        NavBarWallet: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        LogoImage: {},
        LogoInFrame: {},
        LogoText: {},
        LogoFrame: {},
        SearchField: {},
        Button: {},
        SearchBar: { boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" },
        SolanaWallet: {},
        NavBarWallet: {},
      },
      variantValues: { property1: "Variant2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="20px"
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
            src="logo"
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
        <SearchField
          display="flex"
          direction="column"
          width="300px"
          justifyContent="center"
          shrink="0"
          height="46px"
          position="relative"
          padding="0px 0px 0px 0px"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          height="48px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Sign Up"
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
