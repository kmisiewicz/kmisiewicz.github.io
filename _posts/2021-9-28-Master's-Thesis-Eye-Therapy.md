---
layout: post
title: Using Selected Gaze Parameters To Interact With Vitrual Environments - Master's Thesis
---

The goal of my thesis was to present possible use cases for gaze direction to adjust
the context of the scene in a virtual reality game used for eye therapy. Two solutions
of this kind were described.
<p align="middle">
  <img src="/images/transparency1.jpg" width="49%" />
  <img src="/images/rotation1.jpg" width="49%" /> 
</p>

The first idea relies on changing the transparency of scene
elements for the weak eye depending on in-game progress. The second technique makes
use of eyetracking to help people with strabismus to correct their eye vergence. It allows
to rotate the view for one eye and to slowly guide it to correct position.

In order to demonstrate these solutions a fireman game prototype was implemented using Unity game engine. Specifically for testing purposes a simple eye movement
simulator was wrought. The goal of the thesis was accomplished through the conducted assessment of discussed methods.

### Simple Eye Simulation Demo
User can change the rotation of both or single eyeballs with a joystick.
<iframe src="https://player.vimeo.com/video/536036091" width="640" height="370" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

### Transparency Demo
First film shows how the transparency of fire is changed. Basically, if user looks at it but can't extinguish it, the visibility for the strong eye is increased. Otherwise it is decreased to challenge the weak eye.
<iframe src="https://player.vimeo.com/video/585315631" width="640" height="370" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

### Camera Rotation Demo
Second film shows how the camera can follow the eye that deviates from correct eye vergence. After initial rotation, camera tries to slowly direct the eye towards desired position. White rays show where eyes are looking.
<iframe src="https://player.vimeo.com/video/585316231" width="640" height="370" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
