# Make a Traffic Intersection!

We want to see code you've written. Some people don't have open source or freely available code they can share, so we have some short code challenges they can do.

Use whatever language and tech stack you're most comfortable with.

Please try not to spend more than two hours coding. This is to protect you; we don't want you to spend hours coding only for either one of us to decide later we aren't a good fit for each other.

Just like in real life, you can use the internet to help you remember some syntax or figure out a library. Unlike real life, you *should not* use someone else's solution for the coding challenge. Use good judgement. Googling how to read in a file is fine. Googling "how does a spell-checker work" to get a basic idea of an algorithm is fine. Copying and pasting a spell-checker you've found online is not fine.

The goal isn't to finish the assignment (though we won't complain if you do!). The goal is to see how you approach a problem. Can you decide on and implement an algorithm? What data structures do you use? How do you organize your code? What parts of the problem seem most important to solve?

Please contact us if anything in the instructions is confusing. We've tried to leave space for creativity and problem-solving, but we also don't want you becoming frustrated or stuck.

## The Problem

Write a program that models a traffic intersection.

The intersection is a four-way intersection. Each part of the intersection has four lanes:

* A left turn lane
* Two middle lanes that go straight
* A right turn lane

The light can either be red, yellow, or green.
The left-hand turn lane has its own dedicated light. That light can either be red, yellow, green, or flashing orange (go if no cars are coming the other way).

The UI for this is completely up to you. You could print to a console. You could write to a div. You could spin up a lambda function that runs DeepMind that composes a poem that describes how the cars flowed. Whatever you like.


## The Features
Your program should support the following features (time permitting):

* Create a traffic signal whose lights change on a timer.
* Model cars arriving at the intersection and traveling through while the light is green.
* Make the left-hand turn lights on opposite sides of the intersection turn green at the same time, letting cars safely turn left. Make sure the "straight" lights are red! You don't want any accidents!
* Some traffic lights have sensors underneath the road to detect if there are cars waiting. Make your signal smart! For example, if there are no cars waiting, keep that light red. What if cars begin to arrive? How long do you keep the light red?
* Add support for a "walk" button at each intersection. When the button is pressed, it should cause the intersection to become clear long enough for a person to walk through it.

## Instructions For Submission

Please email us a link to a GitHub repository. Include a `README.md` file with notes for us. If your code runs, please include instructions for running it.
