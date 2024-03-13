import { expect, test } from '@playwright/experimental-ct-react';

import { DummyValueTest } from './DummyValueTest';

test('should render dummy value', async ({ mount }) => {
  const component = await mount(<DummyValueTest />);

  await expect(component).toContainText('alphabet soup');
});
