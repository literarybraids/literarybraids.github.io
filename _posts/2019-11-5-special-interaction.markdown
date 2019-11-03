---
title: ":thinking: Special: So what is an interaction, anyway?"
layout: post
date: 2019-11-5 9:00
image: /assets/images/markdown.jpg
headerImage: false
tag:
- specials
star: false
category: blog
author: ismael
description: Topics about the braids
hidden: False
---

I thought that it might be a good idea to write down the FAQs I get, so from time to time I will be doing these *specials* (I might also do one if some week I can't make a braid).


## What is an interaction?

Basically, each time two characters are mentioned consecutively, the program assumes they are interacting. Yes, I know, it doesn't seem very elegant. But if you think about it twice, every time one character follows another there has to be some connection: they might be talking, fighting, one thinking about the other, ignoring each other... It doesn't matter how, but if they are presented together by the author, they must be interacting in some way.

Of course this method isn't perfect, it leaves a lot of *she*'s and *us*'s along the way, but I don't believe that even the most advanced Natural Language Processing is able to distinguish which character a particular *he* refers to. First person narrators are also tricky with this method, buttt... I think for our artistic purposes is more than enough ;).

## Where did the idea come from?

The idea of the braids comes fundamentally from two very different instances. 

The conceptual idea came to me while reading Rafael Chirbes' *La larga marcha*. Throughout the first half of this book, the stories of several spanish families are narrated. I was enjoying the book very much, but I was feeling uneasy that they didn't interact at all. In a novel, I thought, there must be some connection between the characters, they must *influence* each other, in one way or another. It was in that moment that I started visualizing some kind of graph that could show these interactions. But I wouldn't have come out with the definitive shape of the graphs had I not learnt about *topological quantum computing* during my Physics studies. 

<div class="side-by-side">
    <div class="toleft">
        <p >
        To put it simply, topological quantum computing is an hypothetical realization (this is, not achieved experimentally) of quantum computing in which the computations are performed by <i>braiding</i> some special particles (called anyons). If you take an anyon and give it a trip around another anyon, when it comes back to the original position it is no longer in the original state. </p>
    </div>
    <div class="toright">
        <p style="text-align: center;"> <img class="image" src="../assets/wikipedia_anyon.gif" alt="Anyon" width="80"><figcaption class="caption"> Source: Wikipedia </figcaption> </p>
    </div>
</div>
<p style="text-align: center;"><img class="image" src="../assets/girl_confused.gif" alt="Confused girl" width="200"> </p>


Yes, very strange. This exotic property makes anyons suitable for computing things with them, and when the basis of an algorithm is turning things around others you end up with... well, a braid. This was the visual idea I needed to make everything click and start the project. 

Finally, the spiral thing... Is just for packing the braid in less space. Sorry if you thought of Fibonacci or something. 
