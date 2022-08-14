/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type FeaturesVariantProps = React.PropsWithChildren<Partial<FlexProps> & {
    user1?: Users;
    user2?: Users;
    user3?: Users;
    user4?: Users;
} & {
    variant?: "Default" | "Small";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function FeaturesVariant(props: FeaturesVariantProps): React.ReactElement;
