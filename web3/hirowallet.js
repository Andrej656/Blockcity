// HiroWallet.js

import { connect, ConnectionStatus } from '@stacks/connect';
import { stacksNetwork } from './stacks';

const WalletConnect = async () => {
  try {
    const authResponse = await connect({
      manifestPath: '/path-to-your/manifest.json',
      appDetails: {
        name: 'Your App Name',
        icon: window.location.origin + '/path-to-your/app-icon.png',
      },
      redirectTo: window.location.origin,
      network: stacksNetwork,
    });

    if (authResponse && authResponse.connectionStatus === ConnectionStatus.InProgress) {
      console.log('Connection in progress...');
    } else if (authResponse && authResponse.stacksAddress) {
      console.log('Signed in with address:', authResponse.stacksAddress);
      // Perform actions after successful connection, e.g., update UI
    } else {
      console.error('Failed to connect wallet.');
    }
  } catch (error) {
    console.error('Error connecting wallet:', error);
  }
};

export default WalletConnect;
