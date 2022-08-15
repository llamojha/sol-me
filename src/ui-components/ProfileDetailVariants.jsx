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
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileDetailVariants(props) {
  const { user, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        ProfileBanner: {},
        ProfilePicture: {},
        Username: {},
        Profile: {},
        DonationDescription: {},
        SolanaPayFrame: {},
        ProfileInfo: {},
        ProfileContent: {},
        DescriptionTitle: {},
        DescriptionText: {},
        Description: {},
        DescriptionFrame: {},
        ProfileDetail: {},
        ProfileDetailVariants: {},
      },
      variantValues: { variant: "Default" },
    },
    {
      overrides: {
        ProfileBanner: { height: "224px", shrink: "0", objectFit: "cover" },
        ProfilePicture: {},
        Username: {
          lineHeight: "50px",
          justifyContent: "flex-start",
          width: "355px",
          basis: "355px",
          height: "50px",
        },
        Profile: {
          gap: "16px",
          height: "92px",
          padding: "16px 0px 16px 20px",
          border: "1px SOLID rgba(255,255,255,1)",
        },
        DonationDescription: { alignSelf: "stretch", objectFit: "cover" },
        SolanaPayFrame: {
          height: "48px",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        ProfileInfo: {
          gap: "24px",
          padding: "16px 12px 16px 12px",
          height: "280px",
          alignItems: "center",
          shrink: "0",
          objectFit: "cover",
        },
        ProfileContent: {
          gap: "12px",
          alignItems: "center",
          direction: "column",
          overflow: "hidden",
        },
        DescriptionTitle: {},
        DescriptionText: {},
        Description: {},
        DescriptionFrame: {
          gap: "32px",
          height: "326px",
          alignItems: "center",
          shrink: "0",
        },
        ProfileDetail: {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        ProfileDetailVariants: {
          direction: "column",
          width: "480px",
          height: "834px",
          overflow: "hidden",
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
      gap="0"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      width="100%"
      backgroundImage=" linear-gradient(hsl(332, 54%, 43%), hsl(331, 41%, 66%))"
      {...rest}
      {...getOverrideProps(overrides, "ProfileDetailVariants")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="100%"
        height="834px"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "ProfileDetail")}
      >
        <Flex
          gap="32px"
          height="580px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          width="100%"
          {...getOverrideProps(overrides, "ProfileContent")}
        >
          <Image
            width="540px"
            grow="1"
            basis="540px"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            src={user?.ProfileBanner}
            {...getOverrideProps(overrides, "ProfileBanner")}
          ></Image>
          <Flex
            gap="48px"
            direction="column"
            width="540px"
            grow="1"
            basis="540px"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(255,255,255,1)"
            padding="63px 11px 63px 11px"
            backgroundColor="hsl(331, 41%, 66%)"
            {...getOverrideProps(overrides, "ProfileInfo")}
          >
            <Flex
              gap="24px"
              height="65px"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Profile")}
            >
              <Image
                width="65px"
                height="65px"
                shrink="0"
                position="relative"
                borderRadius="160px"
                padding="0px 0px 0px 0px"
                src={user?.ProfileImage}
                {...getOverrideProps(overrides, "ProfilePicture")}
              ></Image>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="center"
                letterSpacing="0.01px"
                width="427px"
                grow="1"
                basis="427px"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={user?.Username}
                {...getOverrideProps(overrides, "Username")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="371px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={user?.DonationDescription}
              {...getOverrideProps(overrides, "DonationDescription")}
            ></Text>
            <View
              width="371px"
              height="40px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SolanaPayFrame")}
            ></View>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          height="182px"
          grow="1"
          basis="182px"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          border="1px SOLID rgba(255,255,255,1)"
          padding="11px 11px 11px 11px"
          width="100%"
          backgroundColor="hsl(331, 41%, 66%)"
          {...getOverrideProps(overrides, "DescriptionFrame")}
        >
          <Flex
            gap="8px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Description")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
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
              children={user?.DonationTitle}
              {...getOverrideProps(overrides, "DescriptionTitle")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
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
              children={user?.Description}
              {...getOverrideProps(overrides, "DescriptionText")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
