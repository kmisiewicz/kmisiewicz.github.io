---
layout: post
title: VR Character Controller for XR Interaction Toolkit
---

[*Unity, C#, VR*] My first shot at creating a custom Unity package.
<iframe src="https://player.vimeo.com/video/634590129" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

After finishing the project for my thesis which is aimed at people with visual impairments I wanted to create an actual game. I started with a character controller.
I decided to use Unity's XR Interaction Toolkit. With help of some tutorials I created this package. It is still incomplete (especially in terms of documentation), 
but it can already be imported via Package Manager with a git link.

### Current features

1. Movement methods (Locomotion Providers) based on scripts 
[provided in XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/locomotion.html)
(which doesn't contain all functionalities I wanted).
  - Continuous Movement and Turn with vignete effect (as post process) to help with motion sickness,
  - Snap Turn with blinking (fading screen to black as custom renderer feature),
  - Teleportation with blinking and rotation change (rotate the joystick on a controller do determine your final position),
  - Climbing,
  - Custom Gravity with floating collider, that allows walking on stairs.
2. Player avatar:
  - based on Rigidbody (for use with Physics) with Capsule Collider which follows player's height in playspace
  - another Sphere Collider for the head (so that camera doesn't clip through objects) with support for leaning - player can lean over small obstacles but only a certain distance from body. 

### Future plans
- extended interactions,
- hands with poses.

### Repository
Repository for this project is available [here](https://github.com/kmisiewicz/vr-controller-xrit).
