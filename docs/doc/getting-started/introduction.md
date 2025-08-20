---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installing the Plugin

This tutorial will guide you through installing the EOSCore Lite plugin in Unreal Engine to enable Epic Online Services functionality through Blueprints.

## Prerequisites

- Unreal Engine 5.x installed
- An Epic Games Developer account
- Basic familiarity with Unreal Engine projects

## Installation Steps

### Step 1: Open Epic Games Launcher
1. Launch the Epic Games Launcher on your computer
2. Make sure you're logged into your Epic Games account

### Step 2: Navigate to Your Library
1. Click on the **Unreal Engine** tab in the Epic Games Launcher
2. Go to your **Library** section
3. Look for **EOSCore Lite** in your owned content (since you've already purchased it)

### Step 3: Install to Engine
1. Find EOSCore Lite in your library
2. Click **Install to Engine**
3. Select your target Unreal Engine version from the dropdown menu
4. Click **Install** and wait for the installation to complete

### Step 4 (Optional): Move Plugin to Project Folder
If you prefer to have the plugin installed locally to your project rather than engine-wide:

1. Navigate to your Unreal Engine installation plugins folder:
   - Default location: `C:\Program Files\Epic Games\UE_[VERSION]\Engine\Plugins\Marketplace\EOSCore`
2. Move the entire **EOSCore** folder
3. Navigate to your project directory and create a **Plugins** folder if it doesn't exist
4. Paste the EOSCore folder into: `YourProject\Plugins\EOSCore`
5. You can now disable or uninstall the engine-level plugin if desired

> **Note:** Installing to your project folder makes the plugin specific to that project and allows for easier project sharing, but you'll need to repeat this process for each project that uses EOSCore.

### Step 5: Add to Your Project
1. Open your Unreal Engine project
2. Go to **Edit** > **Plugins**
3. In the Plugins window, search for "EOSCore"
4. Check the **Enabled** checkbox next to EOSCore Lite
5. Click **Restart Now** when prompted

> **Note:** EOSCore Lite is only available through the Unreal Engine Marketplace. Manual installation methods are not supported.

## Post-Installation Setup

### Verify Installation
1. In the Blueprint editor, create a new Blueprint
2. Try adding an EOSCore node (search for "EOS" in the node menu)
3. If EOSCore nodes appear, the installation was successful