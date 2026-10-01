---
title: Unity Timeline as enemy waves controller
description: Proof of concept using Unity Timeline as level design tool for orchestrating enemy waves spawns.
tags: [Unity, C#]
image: /images/timeline-enemies1.png
repo: https://github.com/kmisiewicz/timeline-waves-controller
---

![Timeline with enemy wave clips](/images/timeline-enemies1.png)

I wanted to check if Unity's Timeline could be used for something more than cinematic sequences.
Inspired by Vampire Survivors and Survivor.io I decided to make a simple setup, where timeline clips could determine the sequence of enemy waves.
I created a simple test scene - player moves with WSAD keys and shoots projectiles at nearest enemy automatically.
There is an *EnemyController* that actually spawns the enemies and tries to keep the enemy count at levels defined in custom timeline clips.

{% include gallery.html images="timeline-enemies2.png, timeline-enemies3.png" %}

Timeline features could be leveraged to make balancing the waves easy without the need to replay the whole level.
Sample project can be found [here](https://github.com/kmisiewicz/timeline-waves-controller).
