---
sidebar_position: 1
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# EOSCore Lite Plugin Summary

EOSCore Lite is a plugin that acts as a blueprint wrapper for Epic Online Services (EOS), making it easy for Unreal Engine developers to integrate EOS functionality without writing C++ code.

## What it does

The plugin allows developers to access the full EOS SDK through Unreal Engine's visual Blueprint system, enabling them to implement online multiplayer features like:

- Matchmaking
- Lobbies
- User authentication
- Friends systems
- Leaderboards
- Achievements

All of these features can be implemented directly through Blueprint nodes, removing the technical barrier of having to work with the native EOS SDK in C++.

## Key benefit

EOSCore Lite democratizes access to Epic's robust online infrastructure by translating the complex SDK into user-friendly Blueprint nodes that can be dragged and dropped into game logic workflows. This makes online services accessible to designers and Blueprint-focused developers who may not have extensive C++ programming experience.

## Important note

As this plugin was recently released, it may contain bugs and other issues that could affect stability or functionality. Users should be prepared for potential troubleshooting and may want to test thoroughly before implementing in production projects.