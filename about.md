---
title: About
layout: page
---
# About the braids

We can see every book as a fabric formed by their interlacing of characters, places and events. Literary Braids arises as a way to visualize the unique framework of each novel. Each string represents a character: when a character comes into action, their line starts vibrating; when they interact with another character, their lines intertwine.

When a book is too long, though, the result may be cumbersome. For this reason, some of the braids will be posted in a *reduced* form, which roughly encodes the same history of interactions within each chapter, but reduces drastically the length of the braid. 


![Reduction](../assets/images/about_reduced.png)
<figcaption class="caption">At the left, the whole first chapter of <i>Rayuela </i>. At the right, its reduced version. A reduction by a factor of 2 is performed by searching within all the possible sub-lists of interactions the ones that best describe the dynamics in that chapter. </figcaption>

This approach has finally made feasible the braids of *Rayuela*, *Pride and Prejudice* and many more, and has persuaded me to resume this project. 

## Suggesting one

Please feel free to suggest books for new braids! I haven't read all the books in the world so surely there are interesting pieces that I have not thought about. However, consider that a braid with too many main characters wouldn't make sense (like one of *War and Peace*, *A hundred years of solitude*...), and for a *too* long work the reduction might become meaningless (like maybe for *The Lord of the Rings*). 

## Ordering a new one

Please don't hesitate to contact me at <a href="mailto:bookbraids@gmail.com">my email</a> if you are interested in ordering a braid. 

## Ordering a print

Unfortunately, right now I cannot ship prints of existing braids. However, if enough people support this idea, I may think about something. A good start is following me on <a href="https://twitter.com/literarybraids">Twitter</a> or <a href="https://instagram.com/literarybraids">Instagram</a> :smile:

Nothing would give me more pleasure than opening a shop for the braids, but I am afraid that at the moment it is impossible for me. However, if enough people support the idea, I may think about something... 

# About the code

This project is mainly written in Python, with some performance-critical functions written in Julia and a bit of Bash here and there. 

## The math (for my nerdy friends)

Several pieces of math have been essential for the development of Literary Braids. Among them, the most important ones are:

* *Arcleng parametrization*, which has made possible that the entangling looks the same all over the braid. 
* *Basic combinatorics*, which has made possible an efficient reduction.
* *Wasserstein distance*, which defines a distance between probability measures, and makes possible to compute how good a particular reduction is. 
