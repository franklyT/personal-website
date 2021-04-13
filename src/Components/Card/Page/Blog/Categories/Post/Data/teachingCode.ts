import {IPostData} from "./Interface/IPostData";

export const testEntry: IPostData = {
    date: "03/10/21",
    time: "6:37 PM",
    title: "Stop Teaching Learners To Write Code",
    markdown: `
# STOP TEACHING LEARNERS TO WRITE CODE

There's an odd dichotomy to opinions about teaching programming generally; those who believe vehemently that programming can be learned by any, and those who believe equally vehemently that programming can be learned only
be the select few. Rather than accept one such simple answer, let's break a cardinal rule of engineering and complicate things a bit. 

Let's first get this out of the way: Anyone can, and probably should, learn the atomics of constructing a program - types, expressions, variables, functions, conditionals, loops - what have you. 

These aspects of software engineering are so trivial, you do yourself a real disservice to remain ignorant of them. Indeed, by an experienced instructor, these concepts can be taught effectively in a very short period of time 
(even the traditionally perceptually "hard" basics, like functions and loops).

Few instructors would mention these atomics as a stopping-block of a would-be learner. It's conceptually easy to provide at least one relevant abstraction for each of these ideas, such as are often used in didactic styles 
for a variety of established disciplines.

Most will opine of a more general, and generally very true problem: much coding instruction produces people whom can produce syntactically valid lines of code, but not a working program, or working solution to a given problem.

This is, of course, a huge failure on our end. To use the analogy of a carpenter, it becomes relatively trivial for a learner to use a hammer or screwdriver, but also relatively useless as they don't have any context for using those tools to begin with.
 
As programmers, of course, we add to our knowledge of tools on a regular basis. New tools, too, are being invented daily, it would seem (thus is the relative youth of computer science as a discipline). 

It would be easy to stop here and accept this as an inevitability of instruction. Would it not be a rather unimaginative world if everyone had equal aptitudes and interest in any given topic? Yet still, would it even be within the heart 
and mind of a software engineer to stop there? To accept a foregone conclusion, pack it in, and leave creativity on the table? To let bygones be bye-gont?

Let me share what I've personally learned on this topic, as I hope it will be even slightly illustrative. It is, obviously, not sufficient to teach merely the syntactical elements of programming. This is akin to teaching someone a language without giving them the context on how to actually use 
that language. Here are a bunch of words; hope this helps! In fact, I now focus less on the syntactical elements of programming, encouraging learners to look up syntax, use an IDE, and even give them direct aid, and more on the 
conceptual approach to problem-solving that programming necessitates and facilitates. I am less concerned even that your code actually works, as far as that goes, as I am to see that you have a valid and cohesive approach to actually solving the problem.

That is to say, I have invariably become very uninterested in syntax (some exceptions aside, such as Rust). In turn, with AI-assisted programming, I think that syntax has become very uninterested in us. But, to actually thread the needle of instruction to a machine to produce a working solution 
to a problem? That's poetry. That's what I love to teach, because it is cross-disciplinary. Problem solving without getting overwhelmed, breaking problems down, simplifying, generalizing, what have you? That is engineering; a philosophy as much as a scientific
discipline.

Let us then normalize the following: it should be considered insufficient as an education to learn to write code. The goal of instruction is to learn to create solutions to problems, and that typically involves a process that someone with even 
a few years under their belt as an engineer will intuit. It is in this niche I thrive, and love to see learners develop: the niche of combining traditional disciplines of logic, problem solving, even philosophy and personal belief, and code, to produce 
not just learners who can just use a hammer and a nail, but learners who can build a home.
`}
