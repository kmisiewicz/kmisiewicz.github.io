---
layout: post
title: VR Character Controller for XR Interaction Toolkit
---

[*Unity, C#, VR*] My first shot at creating a custom Unity package.
<p align="middle">
  <img src="/images/oswald1.png" width="49%" />
  <img src="/images/oswald2.png" width="49%" /> 
</p>

After finishing the project for my thesis which is aimed at people with visual impairments I decided to create an actual game. I started with a character controller.
I decided to use Unity's XR Interaction Toolkit. With help of some tutorials I created this package. It is still incomplete (especially in terms of documentation), 
but it can already be imported via Package Manager with a git link.

#### Current features

1. Artificial movement methods (Locomotion Providers) based on scripts 
[provided in XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/locomotion.html)
(which don't contain all functionalities I wanted).
  - Continuous Movement and Turn with Vignete Effect (as post process) to help with motion sickness,
  - Snap Turn with blinking (fading screen to black as custom renderer feature),
  - Teleportation with blinking and final rotation 

### Repository
Repository for this project is available [here](https://github.com/kmisiewicz/vr-controller-xrit).
