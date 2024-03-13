import { expect, test } from '@playwright/experimental-ct-react';

import { MyComponentTest } from './MyComponentTest';

test('should render', async ({ mount }) => {
  const component = await mount(<MyComponentTest />);

  await expect(component).toContainText('alphabet soup');
});
