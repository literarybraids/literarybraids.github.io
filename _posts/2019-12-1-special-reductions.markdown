---
title: ":thinking: Special: What is a reduction?"
layout: post
date: 2019-12-1 10:00
image: /assets/images/markdown.jpg
headerImage: false
tag:
- specials
star: false
category: blog
author: ismael
description: About LiteraryBraids reduction
hidden: false
published: false
---

<!-- Display LaTeX -->
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        inlineMath: [['$','$']]
      }
    });
</script>
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

One of the saddest limitations of the braids is that, if the book gest too long (~ 1000 interactions), the braid becomes unreadable. Maybe if you pay a lot of attention you can follow the story and find some interesting passages, but the number of turns soon becomes a problem for keeping your focus. There is where a *reduction* can help.

## So, what is a reduction?

Given a list of *N* interactions and a reduction rate *r* between 0 and 1, a *reduction* is a sublist of size *rN* that resembles the original list. An example is given in the figure below. 

![Reduction](../assets/images/about_reduced.png)
<figcaption class="caption">At the left, the whole first chapter of <i>Rayuela </i>. At the right, its reduced version, with rate r=0.5.  </figcaption>

As you can see, some interactions have been dropped, but thanks to the fact that interactions usually get repeated a lot, the structure of the chapter is basically the same. Furthermore, the reductions are performed independently for the different chapters, so that the possible loss of information is equally distributed along the book. 

## The reduction criteria

When performing a reduction there are two basic objectives that one should fulfil. The first is that the summary of interactions (the *grid*) of the reduced history does not change much. If this is enforced, the relative relevance of each character and of each interaction stays more or less the same in the reduced braid.

On the other hand, we want to mantain some locality: if Alice and Bob only interact at the beginning of a chapter, it makes no sense that in the reduced braid they are pictured in the middle or at the end. Therefore a simultaneous objective is keeping characters interactions as close as possible to their original location, so that the story the braid tells is not altered by much.

## The math behind the reductions

The first condition is easy to implement: 

$$ a = 2$$ 