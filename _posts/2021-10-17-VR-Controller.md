---
layout: post
title: VR Character Controller for XR Interaction Toolkit
---

[*Unity, C#, VR*] My shot at extending Unity's own XR Interactions Toolkit capabilities.
<iframe src="https://player.vimeo.com/video/634590129" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

After finishing the project for my thesis which is aimed at people with visual impairments I wanted to create an actual game. I started with a character controller.
I decided to use Unity's XR Interaction Toolkit. I found it was lacking a lot of functionality people know from VR games.
With help of some tutorials and original source code I created this package.
It is still unfinished in a lot of aspects, but it can be imported in Package Manager via [git link](https://github.com/kmisiewicz/vr-controller-xrit.git).


##### Update [10/02/2024]
The XR Interaction Toolkit has changed a lot since this package was created. It now contains features like tunneling vignette and climbing.


### Features

1. Movement methods (Locomotion Providers) based on scripts 
[provided in XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/locomotion.html)
(which doesn't contain all functionalities I wanted).
  - Continuous Movement and Turn with vignette effect (using built-in post process) to help with motion sickness,
  - Snap Turn with blinking (fading screen to black as custom Renderer Feature),
  - Teleportation with blinking and rotation change (rotate the joystick on a controller do determine your final rotation),
  - Climbing,
  - Custom Gravity with floating collider, that allows walking on stairs.
2. Player avatar:
  - based on Rigidbody (for use with Physics) with Capsule Collider which follows player's height in playspace,
  - Sphere Collider for head (to prevent camera clipping through objects) with support for leaning - player can lean over small obstacles for a certain distance from body.


### Potential further development
- extended interactions,
- hands with poses.


### Repository
Repository for this project is available [here](https://github.com/kmisiewicz/vr-controller-xrit).
