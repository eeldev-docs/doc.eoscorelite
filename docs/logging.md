---
id: logging
title: Logging and Debugging
description: Learn how to configure logging settings in Unreal Engine with EOSCore to generate detailed logs for debugging.
slug: /docfiles/eoscore/logging
sidebar_position: 3
---

# Configuring Logging for EOSCore

This guide explains how to configure logging settings in your Unreal Engine project using the **EOSCore** plugin to generate detailed logs for debugging. By enabling verbose logging, you can capture valuable information about Epic Online Services (EOS) operations, such as authentication, sessions, and online subsystem activities.

## Prerequisites
- **EOSCore Lite** plugin installed and enabled in your Unreal Engine project.
- Unreal Engine **5.6** (additional versions may be supported as the plugin develops).
- A configured `DefaultEngine.ini` file with EOS settings (refer to [EOSCore Setup Documentation](https://eoscore.dev/docs)).

## Configuring Logging Settings
To enable detailed logging for EOSCore, add specific logging categories to your `DefaultEngine.ini` file. These settings increase the verbosity of logs, which is particularly useful for debugging issues related to authentication, sessions, and the online subsystem.

### Steps
1. **Open DefaultEngine.ini**:
   - Locate your project’s `DefaultEngine.ini` file in the `Config` directory (e.g., `YourProject/Config/DefaultEngine.ini`).

2. **Add Logging Settings**:
   - Add the following lines under the `[Core.Log]` section to enable verbose logging for EOSCore and related systems:

   ```ini
   [Core.Log]
   LogEOSCore=Verbose
   LogOnline=Verbose
   LogSession=Verbose
   LogOnlineSession=Verbose
   ```

3. **Save the File**:
   - Save the `DefaultEngine.ini` file and restart the Unreal Editor or rebuild your project to apply the changes.

## Accessing Logs
Logs are generated in your project’s **Saved** directory, specifically in the `Logs` folder. The primary log file is named after your project.

### Log File Location
- **Path**: `YourProject/Saved/Logs/MyProject.log`
- **Example**: If your project is named `MyGame`, the log file will be located at `MyGame/Saved/Logs/MyGame.log`.

### Viewing Logs
- Open the log file with a text editor (e.g., Notepad++ or Visual Studio Code) to review detailed output.
- Search for entries prefixed with `LogEOSCore`, `LogOnline`, `LogSession`, or `LogOnlineSession` to find relevant debugging information.

## Notes
- **Build Types**:
  - Logs are generated only in the **Unreal Editor** and **Development Builds**.
  - **Shipping Builds** do not generate logs by default to optimize performance. To enable logging in Shipping Builds, you must explicitly configure the build settings (consult Unreal Engine documentation for details).
- **Debugging**:
  - Use verbose logs to troubleshoot issues such as authentication failures, session creation errors, or network connectivity problems.
  - Filter logs by category (e.g., `LogEOSCore`) to focus on specific areas of interest.
- **Performance**:
  - Verbose logging can generate large log files, which may impact performance during extended debugging sessions. Disable or reduce verbosity (e.g., to `Log` or `Warning`) in production environments.
- **Best Practices**:
  - Regularly check logs during development to catch issues early.
  - Archive or clear old log files to manage disk space in the `Saved/Logs` directory.