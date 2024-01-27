// wallet.js
import { connect, ConnectionStatus } from '@stacks/connect';
import { stacksNetwork } from './stacks'; // Import your Stacks.js configuration

export const handleConnectWallet = async () => {
  try {
    const authResponse = await connect({
      manifestPath: '/path-to-your/manifest.json', // Replace with your manifest.json path
      appDetails: {
        name: 'Your App Name',
        icon: window.location.origin + '/path-to-your/app-icon.png', // Replace with your app icon path
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

export const handleDisconnectWallet = () => {
  // Perform actions to disconnect wallet if needed
  console.log('Disconnecting wallet...');
};

// Additional utility function to check if the wallet is connected
export const isWalletConnected = () => {
  return window.stacks && window.stacks.userData && window.stacks.userData.profile;
};
