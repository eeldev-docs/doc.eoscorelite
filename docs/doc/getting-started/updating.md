---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Updating the Plugin

This tutorial will guide you through updating the EOSCore Lite plugin to the latest version using the Epic Games Launcher.

## Prerequisites

- EOSCore Lite already installed (either engine-wide or in project)
- Epic Games Launcher with access to your purchased content
- Unreal Engine project closed (recommended during update process)

## Method 1: Updating Engine-Wide Installation

### Step 1: Check for Updates
1. Open the Epic Games Launcher
2. Navigate to the **Unreal Engine** tab
3. Go to your **Library** section
4. Look for EOSCore Lite in your owned content
5. If an update is available, you'll see an **Update** button instead of "Installed"

### Step 2: Update the Plugin
1. Click **Update** next to EOSCore Lite
2. Select your target Unreal Engine version from the dropdown menu
3. Click **Update** and wait for the process to complete
4. The launcher will download and install the latest version

### Step 3: Verify Update in Unreal Engine
1. Open your Unreal Engine project
2. Go to **Edit** > **Plugins**
3. Search for "EOSCore" and check the version number
4. The plugin should show the latest version number

## Method 2: Updating Project-Specific Installation

If you've moved the plugin to your project's plugins folder, follow these additional steps:

### Step 1: Update Engine Installation First
1. Follow **Method 1** above to update the engine-wide installation
2. This ensures you have the latest version available to copy

### Step 2: Backup Your Current Project Plugin (Recommended)
1. Navigate to your project folder: `YourProject\Plugins\EOSCore`
2. Create a backup by renaming the folder to `EOSCore_backup`
3. This allows you to rollback if needed

### Step 3: Copy Updated Plugin to Project
1. Navigate to your Unreal Engine installation plugins folder:
   - Default location: `C:\Program Files\Epic Games\UE_[VERSION]\Engine\Plugins\Marketplace\EOSCore`
2. Copy the entire updated **EOSCore** folder
3. Navigate to your project's plugins directory: `YourProject\Plugins\`
4. Paste the updated EOSCore folder (replace the existing one)

### Step 4: Verify Project Update
1. Open your Unreal Engine project
2. Go to **Edit** > **Plugins**
3. Search for "EOSCore" and verify the updated version number
4. Test basic functionality to ensure the update was successful

## Troubleshooting Update Issues

### Common Problems

**Update button not appearing:**
- Refresh the Epic Games Launcher
- Log out and back into your Epic Games account
- Check your internet connection

## Important Notes

- **Always backup your project** before updating plugins, especially newly released ones
- **Close Unreal Engine** during the update process to avoid file conflicts
- **Test thoroughly** after updating, as new versions may introduce changes or bugs
- **Check the changelog** for any breaking changes or new requirements
- If you have multiple projects using EOSCore, you may need to update each project-specific installation separately

## Next Steps

After successfully updating:
- Review the plugin documentation for new features
- Test all existing EOSCore functionality in your project
- Consider taking advantage of any new Blueprint nodes or improvements
- Update your project documentation to reflect the new plugin version