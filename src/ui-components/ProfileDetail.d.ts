/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Users } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type ProfileDetailProps = React.PropsWithChildren<Partial<FlexProps> & {
    user?: Users;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ProfileDetail(props: ProfileDetailProps): React.ReactElement;
