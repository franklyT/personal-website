import {IPostData} from "./Interface/IPostData";

export const tailwindCSS: IPostData = {
    date: '10/22/20',
    time: '10:32 AM',
    title: 'The Devil\'s Advocate',
    markdown: `
# THE DEVIL'S ADVOCATE

I don't like Tailwind.css. That's right, I said it. From embracing the foibles of vanilla js (soon to expand to React and Vue, so I understand), to the general lack of a problem-domain that I am comfortable explaining beyond "you have to use it to get it", 
I don't see a huge value proposition in the technology. In fact, my experience with unwieldy vanilla html files laden with complex markup have put me off to the framework in nearly every instance I can think to use it.

As such, I'm going to write a brief post explaining why you should use it. After all, the greatest value to be gained, in my opinion, is humility as a developer, an understanding and encompassing perspective that eschews dogma in favor of exploration.

Tailwind.css is a compelling utility-first framework that proposes a mich different value-proposition than the typical CSS framework, a contribution to the Sisyphean effort to assess and improve the fundamental problems with CSS in web development. I'll assume you
know at least a little about the problem-domain, so I won't wax too poetic about it, beyond to note the hydra-esque approach developers have taken to solving it: you lop one head off of a CSS framework, and three more grow to take its place.

Tailwind sits somewhere between all-in-one solutions like the popular Bootstrap, and raw component composition using SCSS/CSS-in-js, and other modular solutions to styling. It pushes the logic for component composition directly to the markup you are styling,
allowing rapid iteration, a contextual monolith (no swapping between files), and accessible, pre-defined utility classes, such as consistent margins and padding.

Take for example the following component from the Tailwind documentation:

~~~
<ul class="space-y-4">
  <li>
    <div class="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
</ul>
~~~

The Bootstrap approach here would represent the Bootstrap problem: what if you are not satisfied with the robust defaults that they provide? Is it trivial to shim a style in place, or is there a component idiomatic Bootstrap would prefer you use?

Moreover, perhaps some degree of modularity is your taste, wherein you'd have at the very least separate markup, either in a CSS file or in-place further down the file tree. What do you name these classes? Do the classes correlate to the markup, or do the classes
feel "tacked on"? Is it trivial to refer to defaults, or do you need to create a robust mini-framework of utility classes?

Both approaches have unique problems. Tailwind.css attempts to sit between both, which it does so remarkably adroitly.

Perhaps the best explanation is the one I've seen countless developers use, "you have to try it to get it". Indeed, I don't see how this is inherently an invalid statement, as sometimes, the solution is not a mind-opening paradigm shift (like OOP, or, more recently, in my opinion, graphQL), but
doing a bunch of little things right.
`}