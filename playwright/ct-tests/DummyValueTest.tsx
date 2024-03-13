import type { FC } from 'react';

import { useDummyValue } from '~/hooks/useDummyValue';

export const DummyValueTest: FC = () => {
  const value = useDummyValue();

  return <div>{value}</div>;
};
