// stacks.js (or relevant file)

import { StacksTestnet } from '@stacks/network';
import { connect, transactions } from '@stacks/stacks.js';

const network = new StacksTestnet();
const config = {
  network,
  appDetails: {
    name: 'YourApp',
    icon: '/favicon.ico', // Update path as needed
  },
};

export const { stacksSession, transaction } = connect(config);
