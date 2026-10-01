---
title: Using Selected Gaze Parameters To Interact With Virtual Environments - Master's Thesis
description: The goal of my thesis was to present possible use cases for gaze direction to adjust the context of the scene in a virtual reality game used for eye therapy. Two solutions of this kind were described.
tags: [Unity, C#, VR]
image: /images/transparency1.jpg
repo: https://gitfront.io/r/kmisiewicz/9bdf2b5bd79f0dce2cb1f1e5c2bd69a451da7956/eye-therapy-2/
---

{% include gallery.html images="transparency1.jpg, rotation1.jpg" %}

The first idea relies on changing the transparency of scene
elements for the weak eye depending on in-game progress. The second technique makes
use of eyetracking to help people with strabismus to correct their eye vergence. It allows
to rotate the view for one eye and to slowly guide it to correct position.

In order to demonstrate these solutions a fireman game prototype was implemented using Unity game engine. Specifically for testing purposes a simple eye movement
simulator was wrought. The goal of the thesis was accomplished through the conducted assessment of discussed methods.

### Simple Eye Simulation Demo
User can change the rotation of both or single eyeballs with a joystick.

{% include video.html vimeo="536036091" title="Simple eye simulation demo" %}

### Transparency Demo
First film shows how the transparency of fire is changed. Basically, if user looks at it but can't extinguish it, the visibility for the strong eye is increased. Otherwise it is decreased to challenge the weak eye. Effect was achieved with a shader created in Shader Graph.

{% include video.html vimeo="585315631" title="Transparency demo" %}

### Camera Rotation Demo
Second film shows how the camera can follow the eye that deviates from correct eye vergence. After initial rotation, camera tries to slowly direct the eye towards desired position. White rays show where eyes are looking. Seperate camera rotation was achieved by editing the view matrix (*Camera.SetStereoViewMatrix()*).

{% include video.html vimeo="585316231" title="Camera rotation demo" %}
