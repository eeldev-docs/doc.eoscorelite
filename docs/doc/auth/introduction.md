---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Information

The Epic Online Services (EOS) SDK provides a robust authentication system for integrating secure user login and identity management into games and applications. Below is a summary of its key authentication features:

## Authentication Methods
EOS SDK supports multiple authentication methods to verify user identities:
- **Epic Account**: Users log in using their Epic Games credentials via an external browser or embedded login UI.
- **Developer Authentication**: Uses a developer-provided token for custom authentication systems, suitable for integrating with third-party platforms.
- **OpenID Connect**: Supports external identity providers (e.g., Google, Apple) for single sign-on functionality.
- **Console Accounts**: Integrates with platform-specific accounts (e.g., PlayStation Network, Xbox Live) for console-based authentication.

## Authentication Process
1. **Initialize EOS SDK**: Set up the SDK with your product and client credentials.
2. **Login Request**: Use the `EOS_Auth_Login` function, specifying the authentication type and credentials (e.g., Epic Account token, Device ID).

## Key Features
- **Cross-Platform Support**: Works across PC, consoles, and mobile platforms.
- **Secure Token Handling**: Tokens are encrypted and managed securely to prevent unauthorized access.
- **Account Linking**: Users can link multiple platform accounts to a single Epic Account for seamless cross-platform play.

For detailed implementation, refer to the [EOS SDK Documentation](https://dev.epicgames.com/docs/services/en-US/api-ref/interfaces/auth/).