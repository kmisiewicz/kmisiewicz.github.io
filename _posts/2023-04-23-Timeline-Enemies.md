---
layout: post
title: Unity Timeline as enemy waves controller
---

[*Unity, C#*] Proof of concept using Unity Timeline as level design tool for orchestrating enemy waves spawns.
<p align="middle">
  <img src="/images/timeline-enemies1.png" width="80%" /> 
</p>

I wanted to check if Unity's Timeline could be used for something more than cinematic sequences.
Inspired by Vampire Survivors and Survivor.io I decided to make a simple setup, where timeline clips could determine the sequence of enemy waves.
I created a simple test scene - player moves with WSAD keys and shoots projectiles at nearest enemy automatically.
There is an *EnemyController* that actually spawns the enemies and tries to keep the enemy count at levels defined in custom timeline clips.

<p align="middle">
  <img src="/images/timeline-enemies2.png" width="49%" />
  <img src="/images/timeline-enemies3.png" width="49%" /> 
</p>

Timeline features could be leveraged to make balancing the waves easy without the need to replay the whole level.
Sample project can be found [here](https://github.com/kmisiewicz/timeline-waves-controller).