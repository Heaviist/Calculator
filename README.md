# Calculator
The Odin Project's calculator

# Assignment
Create a calculator using everything we've learned so far about HTML, CSS and JavaScript. This project will combine alle the knowledge and skills we have been working on so far.

# Goal
Make sure the program incorporates all the listed requirements so we end up with a working calculator. Basic steps are given, implementation is up to me.

# Expected challenges
The following are points I expect to be challenging:
- 1 clearing data entered but keeping all the data up to that point
- 2 making sure the clear all button properly clears everything without breaking the program
- 3 making sure the display is properly updated every time
- 4 stringing together operations flawlessly
- 5 making sure the screen doesn't overflow
- 6 as CSS/design never feels like my main thing, I do feel like I'm at least slightly getting the hang of it. It could probably be fun to make this kinda look nice
- 7 extra credit backspace/keyboard seem very challenging, don't see an obvious solution but will try.

# Results and evaluation
As for the above mentioned expexted challenges
- 1 A classic clear button (vs AC) ended up not being implemented, but this is partly compensated by the backspace function which ended up being quite functional, as it can also undo operator input.
- 2 A case of proper bookkeeping. Once or twice something didn't work immediately but the solution was obvious.
- 3 as the program became more complicated and the implemented functionality became more ambitious this became more challenging. Most came down to proper bookkeeping and knowing your own program
- 4 One of the issues that played a role in point 3 as well was the bookkeeping made a lot less easy by using variables and code that wasn't that easy to trace back after being written the first time. I ended up redoing the whole contents of functions and variables (keeping the function structure as I was quite pleased with that, besides some functions didn't need changing, for example clear all and so on), renaming most variables to something more descriptive. All in all this was a good experience in making sure something still makes sense after a day or a week, and especially makes sense if things need to be changed.
- 5 This was by far the hardest part. There were lazy solutions with making screen bigger or font smaller, as there is a limit to the amount of characters that can be stored for a number anyway. Or we could have gone for the simple internet fixes for rounding and limiting number with basic .toFixed functions and so on. I didn't find any functions online that did what I wanted though. After spending way too much time (inner perfectionist definitely coming out), I've learned a lot about how numbers work and especially not work. I think some backend infrastructure doing the calculations and then sending the results to JS to fill the HTML might eventually be the best way for this stuff, as there are many exceptions to deal with. In particular the floating point limitations are maddening. All in all though, my on-the-go goal was to not use the lazy functions that convert to strings. The result is something I'm quite happy with actually, as the conversion to a string (.toExponential) is only done when absolutely necessary. The if statement checking for necessity is also based on pure maths, comparing order of magnitude to a fixed value to see if conversion to exponential is needed.
- 6 I have to say it's increasingly becoming more fun to play around with CSS as it's becoming a little less black magic and a little more "hey I can make the page do things that i like and look cool". I've tried to play around with complementary colors, asking a design friend for some advice as well. Overall for colors I'd say it's not too shabby. Some of the design is inspired by the android calculator.
- 7 Some googling did the trick to solve keyboard implementation. Turns out to be not too tricky, but fun to learn and seeing it work. The "+" button still has some issues when used on the top row with shift+=. Might be something to check out later. Quite happy with the enter button working for = sign. Backspace was a matter of good bookkeeping again.

- Quite happy with the working of the sqrt button.

# Remaining issues
  - + button on keyboard not working
  - limit input to maximum number of characters (should be relatively easy)
  - making seperate screen for operator, so both operator and current value can be shown in strung together calculations
  - making a clear button (instead of AC)
  - errors when unused keyboard buttons are used. Not sure if that's okay or leads to bad performance. Maybe something we will learn later
  - Floating point rounding has its issues. Maybe there's a smart solution I haven't thought of, I might check other people's projects later, though currently I don't feel like looking at what others do too much. So I don't have too much to compare to, it's just my process, and I won't feel too inclined to copy what others do until I understand what I am doing myself

  # Odin Project assigment contents
  1 done
  2 done, also using an evaluate function and other things to call everything. This might be less efficient. Maybe there's a more obvious way to directly use the operate function, presumably using arrays/objects and reduce functionality.
  3 done
  4/5 took a full rewrite to make everything make sense for myself after a couple days off the project. If things aren't too obvious for myself in the future, that might be a good time to reconsider the variables and naming used. Though it says this was the hardest part, after naming properly this was mostly bookkeeping to my feeling. Floating point rounding and limiting characters was the hardest part for sure.
  6 a Stringing together made me realize my badly named variables.
    b obvious when everything clicked
    c well... it was a process ;-)
    d fun to work towards some funny errors and finding a way to make that different than most calculators
    e obvious
    f snarky quacks for all
  7 not hard, fun to make work and more fun to work with disable/css
  8 did my best, nothing special I feel, but more than I ever thought I'd be able to do before this course
  9 relatively easy and also works for operators
  10 fun excercise. Some open questions, but nothing that keeps the thing from working