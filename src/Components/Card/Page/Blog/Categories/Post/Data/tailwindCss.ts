import {IPostData} from "./Interface/IPostData";

export const tailwindCSS: IPostData = {
    date: '00/00/20',
    time: '00:00 AM',
    title: 'Why You Should Use Tailwind.css (And Why I Don\'t Believe That)',
    markdown: `
tailwindcss is a compelling utility-first framework that proposes a mich different value-proposition than the typical CSS framework, a contribution to the Sisyphean effort to assess and improve the fundamental problems with CSS in web development. Briefly, CSS has historically suffered from a combination of shortcomings that have prevented it from being used effectively to produce a scalable, mature view layer for web applications, the domain of which has inspired a hydra-esque approach to problem solving: you lop one head off, and two more grow to take its place.

~~~
<ul class="space-y-4">
  <li>
    <div class="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
</ul>
~~~
In a way, standards for engineering re: CSS can be viewed as a linear evolution: from things like BEM (to shun the cascade and invent scope), to SCSS (to bring CSS towards a more imperative model), to CSS-in-js, which literally brings the flexibility and power of JS into play (/the fray).

Most CSS frameworks solve this problem in a different way: by pre-defining styles with various levels of opinionation, moving developers further away from the "metal" of CSS, and the problems that are implicit therein. In fact, I think it would be fairly trivial to argue that the popularity of Bootstrap shows the success of this approach: creating a fairly unitary, modular stylesheet from which a developer, perhaps less or more familiar with the nuances of raw CSS, can be productive.

Tailwindcss, to me, represents a way of bringing developers back into the fold of raw CSS manipulation, *while still giving them the raw power of pre-defined utility classes*. It is a happy medium between the two approaches, granting the front-end developer power, but with less of a cost of customzation, which can be palpably sensed in the sea of Bootstrap-inspired web pages.

Indeed, tailwindcss users often cite the speed of development they are able to enjoy with the bevy of utility classes provided, combined with the power of predefined rules that keep them from the usual CSS design foot-guns (uneven margins, inconsistent colors, complex semantics, etc.).

Typically, when a problem-space is identified and a solution proposed, it is fairly easy to make the case for your solution. After all, if your solution is effective, its advocates will develop naturally and proportionally to the pain it eases. Indeed, by this metric, it would seem that Tailwind has done the world a great favor, and will continue to do so as it matures. However, most adovcates for Tailwind eschew this common metric of performance, and adopt a more organic form of proseltyization: you have to try it to know how nice it is. Perhaps this could be a valid metric indeed, but it does adopt a very non-traditional stance in a market of "This is X. X solves Y problem. Here you go!" solutions.
`
}