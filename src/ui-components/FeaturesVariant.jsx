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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function FeaturesVariant(props) {
  const {
    user1,
    user2,
    user3,
    user4,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      overrides: {
        "Feature A": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143061":
          {},
        "Frame A": {},
        "Feature B": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143064":
          {},
        "Frame B": {},
        "Feature C": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143067":
          {},
        "Frame C": {},
        "Feature D": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143070":
          {},
        "Frame D": {},
        FeaturesFrame: {},
        FeaturesVariant: {},
      },
      variantValues: { variant: "Default" },
    },
    {
      overrides: {
        "Feature A": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143061":
          {},
        "Frame A": {
          gap: "12px",
          height: "297px",
          grow: "1",
          basis: "297px",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        "Feature B": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143064":
          {},
        "Frame B": {
          gap: "12px",
          height: "297px",
          grow: "1",
          basis: "297px",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        "Feature C": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143067":
          {},
        "Frame C": {
          gap: "12px",
          height: "297px",
          grow: "1",
          basis: "297px",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        "Feature D": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143070":
          {},
        "Frame D": {
          gap: "12px",
          height: "297px",
          grow: "1",
          basis: "297px",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        FeaturesFrame: {
          gap: "12px",
          height: "1248px",
          padding: "12px 12px 12px 12px",
          direction: "column",
          grow: "1",
          basis: "1248px",
        },
        FeaturesVariant: {
          padding: "0px 12px 0px 12px",
          direction: "column",
          height: "1248px",
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
      gap="12px"
      alignItems="center"
      position="relative"
      padding="0px 24px 0px 24px"
      backgroundImage="linear-gradient(90deg, hsl(169, 53%, 73%),hsl(170, 45%, 43%))"
      width="100%"
      height="100%"
      {...rest}
      {...getOverrideProps(overrides, "FeaturesVariant")}
    >
      <Flex
        gap="24px"
        width="100%"
        alignItems="center"
        shrink="0"
        height="209px"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "FeaturesFrame")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="318px"
          height="161px"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(255,255,255,1)"
          padding="11px 11px 11px 11px"
          {...getOverrideProps(overrides, "Frame A")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
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
            children={user1?.Username}
            {...getOverrideProps(overrides, "Feature A")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={user1?.DonationTitle}
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143061"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="318px"
          height="161px"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(255,255,255,1)"
          padding="11px 11px 11px 11px"
          {...getOverrideProps(overrides, "Frame B")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
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
            children={user2?.Username}
            {...getOverrideProps(overrides, "Feature B")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={user2?.DonationTitle}
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143064"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="318px"
          height="161px"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(255,255,255,1)"
          padding="11px 11px 11px 11px"
          {...getOverrideProps(overrides, "Frame C")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
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
            children={user3?.Username}
            {...getOverrideProps(overrides, "Feature C")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={user3?.DonationTitle}
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143067"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="318px"
          height="161px"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(255,255,255,1)"
          padding="11px 11px 11px 11px"
          {...getOverrideProps(overrides, "Frame D")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
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
            children={user4?.Username}
            {...getOverrideProps(overrides, "Feature D")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={user4?.DonationTitle}
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.32143070"
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
