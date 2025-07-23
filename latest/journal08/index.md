---
layout: default
title: "Journal 08"
nav_order: 15
---

# Reading / Journal 8

## Collections ✏️

## Reading

Last week we talked about keeping your data analysis meaningful. We know intuitively that diving blindly into a data analysis task is bad, but what are you supposed to actually do about it?

With that in mind, I gave you a breakdown for thinking through your data. The biiiiig focus there was keeping the "story" of your data front and center as you move from "big picture" down to "representation." It's that "representation" that the computer has to work with.

This whole unit, we take a turn from the "story" to the technical specifics that make our code work, and work well.

This week we focus on representing data, next week we focus on doing things with that data, and the week after that we focus on doing those things efficiently.

---

So to start, let's ask, what are the options for representating data in our programs?

At a basic level, strings, booleans, and numbers.

But you often want to divide your data up. You don't want to lump all your data into *one* number, like the total age of all my students. You want those numbers separated, one age per student.

This is where we get into collections: The many options Python has for (1) collecting multiple, related values together and (2) keeping them organized.

At a basic level, you have arrays/lists:

```python
ages = [18, 18, 27, 92, 19, 32]
```

This is fine for some tasks, like computing the oldest, youngest, or average age.

But it disconnects the age from who the students are.

We can use "paired lists", aka, "parallel arrays":

```python
names = ["Alice", "Bob", "Cindy", "Denise", "Eugene", "Frankie"]
ages = [18, 18, 27, 92, 19, 32]
```

The first age belongs to Alice, the second to Bob, and so on. The idea here is we have multiple lists, all the same size, all in the same order.

But it is *possible* that the lists could get out of order with each other or one has one more item than the other. If you are a careful programmer you can prevent that. But if you want to be *sure* that the names and ages stay paired, you can use a dictionary instead of a list.

```python
ages = {
  "Alice": 18,
  "Bob": 18,
  "Cindy": 27
  # etc
}
```

A dictionary is also called a "hash map."

If you want to get the first item from the list version of ages, you would do `ages[0]`. With a dictionary, you would do `ages["Alice"]`. What a hash map does is it takes the data `"Alice"`, converts it to a number, and looks up the age at that location. What number does it use? Who cares. That's the idea. What this does is ensure that, if you know the name, you can find the age.

Two issues with dictionaries though:

1. The "key" you use for the entries must be unique. I can't have two students named "Alice," not if I use first names as the "keys." (The fix: use Student ID numbers as the "key," but that might make life harder than it needs to be if a simpler array would do the trick, YMMV.)
2. What if you know the age? How do you turn that back into a list of names of students who have that age? That is a great question. Short answer: You have to search through your collection and note each time you find an age that matches what you're looking for, then collect (in a new list/etc.) the name paired with that age. Long answer: You design a set of CRUD algorithms, the topic of next week's journal.

There are more options than just these, of course, and we'll continue making good use out of `pandas` DataFrames, because it solves a lot of these questions for us.

For now, the goal is to familiarize yourself with other options Python has for collections. You don't *have to* use a DataFrame for your project. It's just versatile, so it's good from *my* perspective of needing to write notes that work for *everyone*, regardless of your project idea.

Each of Python's collection types has its strengths, weaknesses, and appropriate uses. You should pick a collection type that best (1) represents the data that you have (remember the way you thought through your project in Check-in 3) and (2) will be most helpful for the kind of questions you want your code to be able to answer.

**Now from BlackBoard** goto ***zyBooks Wk 8 assignment***

**And read "Python Lists"** from <https://www.w3schools.com/python/python_lists.asp>

**And read "Python Tuples"** from <https://www.w3schools.com/python/python_tuples.asp>

**And read "Python Sets"** from <https://www.w3schools.com/python/python_sets.asp>

**And read "Python Dictionaries"** from <https://www.w3schools.com/python/python_dictionaries.asp>

**And read "NumPy Creating Arrays"** from <https://www.w3schools.com/python/numpy_creating_arrays.asp>

(There are a good number of pages about numpy on w3schools. I'm not assigning them for today, but you should familiarize yourself with what they have, in case you end up coming back to it later.)

**And read "How do I read and write tabular data?"** from [https://pandas.pydata.org/docs/getting\_started/intro\_tutorials/02\_read\_write.html](https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html)

## Journal

Choose from one of the following two options as you best see fit:

**Option One:** Submit a brief "200+ Words" reflecting on the reading and/or the course as a whole. These 200+ words are expected to come completely from the student, ignoring words from quotes/etc. The format of these assignments is up to the student as it best helps them: bulleted point notes on the reading; questions directed at the instructor of course material; a paragraph reflecting on the Lab assignment for the week; a poem; a summary of recent technology news; anything, so long as it is turned in on time, is relevant to the course, and meets the required length. 

**Option Two:** Submit a brief "Tinker" where you have attempted to "program" something, using the tools of the course, that is not directly related to another course assignment. Include screenshots of the input work done and the output result (even if it does not work), along with a brief statement of your intentions, the approach you took in getting it to work, and your thoughts on your result so far. Make sure it is clear what code came from you and what came from online/the reading/etc.

<div class="info-box">
  <h4>❗ Short on Words?</h4>
  <p>Short a few words in your journal and don't know what else to write about?</p>
  <p>This week's "get to know you" question is:</p>
  <em>What’t the silliest thing you’ve ever done by mistake? (<a href='https://jonitrythall.com/daily-discussion-prompts-wiggle-work-way' target="_blank">Credit</a>)</em>
  <p>Feel free to write about this a little bit in your journal.</p>
</div>

## Submission

Submit your journal as a Word/PDF document to Blackboard.

## Grading

Journals are each worth 50/5000 (1%) towards your final grade. Grading is pass/fail based on meeting the requirements of the chosen option.