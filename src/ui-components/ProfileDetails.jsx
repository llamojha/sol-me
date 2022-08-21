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
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileDetails(props) {
  const { user, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        ProfileBanner: { height: "180px" },
        ProfilePicture: { width: "85px", height: "85px" },
        Username: { width: "1px", basis: "1px" },
        Vector: {},
        Settings: {},
        Profile: { padding: "0px 0px 12px 0px" },
        DonationDescription: { alignSelf: "stretch", objectFit: "cover" },
        SolanaPayFrame: { width: "120px" },
        ProfileInfo: { gap: "24px" },
        ProfileContent: {},
        DescriptionTitle: {},
        DescriptionText: {},
        Description: {},
        DescriptionFrame: {},
        ProfileDetail: { padding: "0px 0px 0px 0px" },
        ProfileDetails: {},
      },
      variantValues: { variant: "Small" },
    },
    {
      overrides: {
        ProfileBanner: {},
        ProfilePicture: {},
        Username: {},
        Vector: {},
        Settings: {},
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
        ProfileDetails: {},
      },
      variantValues: { variant: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      width="100%"
      {...rest}
      {...getOverrideProps(overrides, "ProfileDetails")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="100%"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="24px 64px 24px 64px"
        {...getOverrideProps(overrides, "ProfileDetail")}
      >
        <Flex
          gap="0"
          direction="column"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          width="100%"
          backgroundColor="hsl(170, 53%, 63%)"
          {...getOverrideProps(overrides, "ProfileContent")}
        >
          <Image
            height="318px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            width="100%"
            src={user?.ProfileBanner}
            {...getOverrideProps(overrides, "ProfileBanner")}
          ></Image>
          <Flex
            gap="48px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            border="1px SOLID rgba(255,255,255,1)"
            padding="0px 11px 11px 11px"
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
                width="120px"
                height="120px"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="160px"
                padding="0px 0px 0px 0px"
                src={user?.ProfileImage}
                backgroundColor="hsl(170, 45%, 43%)"
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
                width="724px"
                grow="1"
                basis="724px"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={user?.Username}
                {...getOverrideProps(overrides, "Username")}
              ></Text>
              <View
                width="36px"
                height="36px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Settings")}
              >
                <Icon
                  width="24px"
                  height="24px"
                  viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                  paths={[
                    {
                      d: "M13.8933 24L10.1067 24C9.34213 24 8.72 23.3779 8.72 22.6133L8.72 22.0496C8.72 21.9619 8.66907 21.8805 8.59893 21.8563C8.20373 21.72 7.81093 21.5571 7.43227 21.372C7.36667 21.3405 7.27867 21.3597 7.2184 21.42L6.81413 21.8243C6.55253 22.0861 6.204 22.2304 5.8336 22.2304C5.4632 22.2304 5.11493 22.0861 4.85307 21.824L2.176 19.1464C1.63547 18.6059 1.63547 17.7261 2.176 17.1853L2.58027 16.7811C2.63973 16.7216 2.66 16.6317 2.62853 16.5677C2.4432 16.1883 2.28 15.7957 2.14373 15.4005C2.1192 15.3307 2.03813 15.28 1.9504 15.28L1.38667 15.28C0.622133 15.28 0 14.6579 0 13.8933L0 10.1067C0 9.34213 0.622133 8.72 1.38667 8.72L1.95067 8.72C2.0384 8.72 2.11947 8.66933 2.14373 8.59893C2.28053 8.20347 2.44347 7.81067 2.62827 7.43253C2.66027 7.36693 2.64053 7.27893 2.58 7.21867L2.176 6.81467C1.63547 6.27387 1.63547 5.39413 2.176 4.8536L4.8536 2.17573C5.11547 1.91387 5.46373 1.76987 5.83413 1.76987C6.20453 1.76987 6.5528 1.91413 6.81467 2.17573L7.21893 2.58027C7.27867 2.63973 7.368 2.66027 7.43253 2.62827C7.81067 2.44347 8.20347 2.28027 8.5992 2.14347C8.66933 2.1192 8.72 2.03813 8.72 1.9504L8.72 1.38667C8.72 0.622133 9.34213 0 10.1067 0L13.8933 0C14.6579 0 15.28 0.622133 15.28 1.38667L15.28 1.95067C15.28 2.0384 15.3307 2.11947 15.4008 2.14373C15.796 2.28027 16.1885 2.44347 16.5675 2.62853C16.6333 2.66 16.7208 2.64053 16.7813 2.58027L17.1856 2.176C17.7261 1.63547 18.6059 1.63547 19.1467 2.176L21.824 4.85333C22.3645 5.39413 22.3645 6.27387 21.824 6.8144L21.4197 7.21867C21.3592 7.2792 21.3395 7.36693 21.3715 7.43253C21.5568 7.8112 21.72 8.204 21.8563 8.59947C21.8803 8.66933 21.9616 8.72 22.0493 8.72L22.6133 8.72C23.3779 8.72 24 9.34213 24 10.1067L24 13.8933C24 14.6579 23.3779 15.28 22.6133 15.28L22.0496 15.28C21.9619 15.28 21.8805 15.3307 21.8563 15.4011C21.7203 15.7952 21.5573 16.1877 21.3723 16.5672C21.3405 16.6323 21.3605 16.7219 21.42 16.7813L21.8243 17.1856C22.3648 17.7261 22.3648 18.6059 21.8243 19.1467L19.1464 21.824C18.8845 22.0859 18.5363 22.2301 18.1659 22.2301C17.7952 22.2301 17.4469 22.0856 17.1851 21.8235L16.7813 21.42C16.7205 21.3597 16.6328 21.3395 16.5672 21.3715C16.1885 21.5568 15.7957 21.72 15.4003 21.8563C15.3304 21.8803 15.2797 21.9616 15.2797 22.0493L15.2797 22.6133C15.28 23.3779 14.6579 24 13.8933 24ZM10.5867 22.1333L13.4133 22.1333L13.4133 22.0496C13.4133 21.1637 13.9669 20.3771 14.7912 20.0923C15.1155 19.9803 15.4371 19.8467 15.748 19.6947C16.5309 19.3123 17.4763 19.4755 18.1011 20.1003L18.1659 20.1648L20.1645 18.1661L20.1 18.1013C19.4747 17.4763 19.312 16.5304 19.6949 15.748C19.8467 15.4371 19.9803 15.1152 20.0917 14.792C20.3765 13.9672 21.1635 13.4136 22.0493 13.4136L22.1333 13.4136L22.1333 10.5867L22.0496 10.5867C21.1637 10.5867 20.3771 10.0331 20.0923 9.2088C19.9803 8.88453 19.8467 8.56293 19.6947 8.252C19.3123 7.46907 19.4752 6.52347 20.1003 5.89867L20.1648 5.83387L18.1661 3.8352L18.1013 3.9C17.4763 4.52507 16.5307 4.68747 15.7483 4.30533C15.4373 4.15333 15.1155 4.01973 14.7917 3.90773C13.9675 3.6232 13.4136 2.83653 13.4136 1.9504L13.4136 1.86667L10.5867 1.86667L10.5867 1.9504C10.5867 2.83653 10.0328 3.62293 9.20853 3.90773C8.884 4.01973 8.56213 4.1536 8.252 4.30533C7.46907 4.68773 6.52373 4.5248 5.89867 3.9L5.83387 3.8352L3.8352 5.83387L3.9 5.89867C4.5248 6.52373 4.68773 7.46933 4.30533 8.252C4.15387 8.56213 4.02 8.884 3.908 9.20853C3.6232 10.0331 2.83653 10.5867 1.95067 10.5867L1.86667 10.5867L1.86667 13.4133L1.9504 13.4133C2.83653 13.4133 3.62293 13.9672 3.90773 14.7915C4.01947 15.1152 4.15333 15.4371 4.30533 15.7483C4.688 16.5304 4.52507 17.476 3.9 18.1011L3.8352 18.1659L5.83413 20.1645L5.89867 20.1C6.52373 19.4744 7.4696 19.3123 8.25227 19.6947C8.56267 19.8461 8.88427 19.98 9.20827 20.0917C10.0328 20.3765 10.5864 21.1635 10.5864 22.0493L10.5864 22.1333L10.5867 22.1333ZM12.0075 18.7739C10.2107 18.7739 8.4864 18.0667 7.20987 16.7901C5.80587 15.3861 5.09067 13.4405 5.24747 11.4525C5.50613 8.1736 8.17387 5.50587 11.4528 5.2472C13.4413 5.0904 15.3864 5.80587 16.7904 7.2096C18.1944 8.61387 18.9096 10.5592 18.7531 12.5475C18.4941 15.8267 15.8264 18.4941 12.5475 18.7528C12.3669 18.7669 12.1869 18.7739 12.0075 18.7739ZM11.9917 7.0928C11.8613 7.0928 11.7307 7.09813 11.5995 7.10827C9.2264 7.29547 7.29547 9.2264 7.10827 11.5997C6.9944 13.0424 7.51253 14.4531 8.52987 15.4704C9.5472 16.4877 10.9565 17.0067 12.4008 16.892C14.7739 16.7051 16.7051 14.7744 16.8923 12.4008C17.0061 10.9581 16.4877 9.5472 15.4707 8.52987C14.5456 7.60507 13.2952 7.0928 11.9917 7.0928Z",
                      fill: "rgba(0,0,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="16.67%"
                  bottom="16.67%"
                  left="16.67%"
                  right="16.67%"
                  {...getOverrideProps(overrides, "Vector")}
                ></Icon>
              </View>
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
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          border="1px SOLID rgba(255,255,255,1)"
          padding="11px 11px 11px 11px"
          width="100%"
          backgroundColor="hsl(170, 53%, 63%)"
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
              color="rgba(0,0,0,1)"
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
