---
title: Advanced Haptics Pattern Editor Window
description: An Editor Window to visually inspect and edit advanced haptic patterns.
tags: [Unity, C#, IMGUI, UI Toolkit]
image: /images/haptic-editor3.png
repo: https://github.com/kmisiewicz/ahap-editor-unity
---

![Haptics pattern editor window](/images/haptic-editor3.png)

During my work as a mobile games developer I was once assigned the task to handle vibrations.
I learned about the possibilities of enhancing gameplay with haptic feedback, especially on iPhones which have superior haptic motors compared to most Android phones.
Apple even introduced a special file format for controlling amplitude and frequency of vibrations called AHAP (which is just a fancy JSON).
Inspired by tools like Lofelt Studio (not available anymore) and Haptrix (only on macOS) I created a tool to edit these assets directly in Unity in my spare time.
The other feature I wanted to include was to draw an audio waveform so that user could easier synchronize sound and vibration.

### First version - IMGUI
First version was created using IMGUI and Handles API.

![First version built with IMGUI](/images/haptic-editor1.png)

### Second version - UI Toolkit
After completing the first version I decided to recreate everything using Unity's new UI solution.
IMGUI requires a lot of code for drawing all the controls. Now I could build out all UI in UI Builder (visual editor).
For drawing the plot I used Vector API available since Unity 2022 (final effect shown in first image).

![Second version built with UI Toolkit](/images/haptic-editor2.png)

### Generating haptic effects
To demonstrate how the tool works I added 2 algorithms using third party code to generate haptic patterns - available in the right side panel.
First uses beat detection to create transient events (clicks), the other creates a continuous event with loudness and fourier transform calculation.
These methods are rather simple but may be a good starting point.

### Demo
To check (or rather to feel) if the output makes any sense I coded a simple app that downloads sounds and AHAP files from given links and allows their playback.

![Demo app](/images/haptic-editor-demo.png)

Link to [app](https://drive.google.com/file/d/15bP5vrFZ6KeukNqaUvbdZuFFocj69RnJ/view?usp=drive_link).
Test sound and vibration files are available under QR codes below (QR code reader included in app).

{% include gallery.html images="haptic-editor-test-sound.png, haptic-editor-test-ahap.png" alt="QR code" %}
