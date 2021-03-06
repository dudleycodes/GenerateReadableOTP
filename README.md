# Generate Readable OTP

`Generate Human-Readable Passwords for One-Time Use`

**WARNING** Passwords generated by this library are *not*  strong or secure. They should only be used once as a temporary measure. They should *not* be relied upon for long-term utilization.

The goal of this libary is to generate passwods that are:

* Easily verbally communicated.
* Easy to read off the screen.
* Non-offensive.
* Generated phrases that can be read, spelled, and understood by english-readers at the 4th-grade level.
* Contain no punctuation or symbols.

# Return Values

All methods return an array of strings. Unless noted all values will be lower-case.

Example: `shortPhrase()` returns `["dogs", "like", "art"]`.

This is done so that a presentation-layer can easily format the output to aid readability. At first glance the above example "dogslikeart" takes effort to read - but by alternating the color of each word it becomes easy to read.

# Methods

## hexadecimal()

Generate a random hexadecimal value that will be *UPPERCASE*.

Example: `["1F", "14", "E7"]`

## shortPhrase()

Generate a 3-word phrase using words from 4th grade spelling lists.

Example: `["goldfish", "prefer", "tomatoes"]`

## shortPhraseNumber()

Generates a short pharse with a random number 2-digit number either appended or prepended.

Example: `["goats", "adore", "lunch", "42"]`

## wordNumber()

Generates a random word with a random number 2-digit number either appended or prepended.

Example: `["76", "hotsauce"]`

# Contents
* `/dist/` Contains UMD complied output
* `/lib/` Contains CommonJS complied output
