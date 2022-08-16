import './Amplify.css';

import React, { FC } from 'react';

import { HeroLayoutVariant } from '../ui-components'
import { useBreakpointValue } from '@aws-amplify/ui-react';

type Variant = "Small" | "Default";

const Page404: FC = (props) => {
  const variant = useBreakpointValue({
    base: "Small",
    small: "Small",
    medium: "Default",
  });
  return (
      <div className="Page404">
        <HeroLayoutVariant variant={variant as Variant} />
      </div>
  );
};

export default Page404;
