/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ProfileDetail(props) {
  const { profileId, users, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      width="100%"
      {...rest}
      {...getOverrideProps(overrides, "ProfileDetail")}
    >
      <Flex
        gap="24px"
        direction="row"
        width="100%"
        alignItems="flex-start"
        shrink="0"
        height="1098px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProfileDetail31552752")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="740px"
          grow="1"
          basis="740px"
          height="751px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileContent")}
        >
          <Image
            height="480px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            src={users?.ProfileBanner}
            {...getOverrideProps(overrides, "ProfileBanner")}
          ></Image>
          <Flex
            gap="32px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "DescriptionFrame")}
          >
            <Divider
              height="1px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider31552759")}
            ></Divider>
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
                children={users?.DescriptionTitle}
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
                children={users?.Description}
                {...getOverrideProps(overrides, "DescriptionText")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          height="260px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileInfo")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="200px"
            height="100px"
            alignItems="center"
            grow="1"
            basis="100px"
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
              src={users?.ProfileImage}
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
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={users?.Username}
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
            children={users?.DonationDescription}
            {...getOverrideProps(overrides, "DonationDescription")}
          ></Text>
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 27")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              textDecoration="underline"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="12 Sol KoPi"
              {...getOverrideProps(overrides, "XX Coffees")}
            ></Text>
          </Flex>
          <Flex
            padding="0px 0px 0px 0px"
            width="371px"
            height="40px"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 27")}
          >
            <Button
              display="flex"
              gap="0"
              position="absolute"
              top="0px"
              left="0px"
              direction="row"
              width="371px"
              justifyContent="center"
              alignItems="center"
              size="default"
              isDisabled={false}
              variation="primary"
              children="SolanaPay"
              {...getOverrideProps(overrides, "SolanaPay")}
            ></Button>
          </Flex>
        </Flex>
        <Divider
          height="1098px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider31552767")}
        ></Divider>
      </Flex>
    </Flex>
  );
}
