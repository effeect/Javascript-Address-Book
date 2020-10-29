# JavaScript Address Book!

This is a quick rundown of the Address Book which contains most of the important features and more. Only built with Bootstrap.

## Missing Feature and bugs

While the delete, addition and search working absolutely fine, the only input validation is for the phone number.
Also here are some bugs : 

 - Pushing an object to the addressStor array with incorrect object names will cause the program to break. The only way to fix this is to reset and delete the local storage data
 - FormData was not working correctly during the two hours I had, so the final version just uses a long list of inputs which isn't very nice to look at.

The object pushing bug has happened to me only once and I don't think I can trigger the bug without using the web developer console.

## What would I add?

If I had one to two weeks, I would of spent a lot more time on the UI, it's useable but doesn't scale well with a mobile aspect ratio.

I would of also built some of the elements with a JavaScript framework such as Angular or React so I could easily reuse and retool components that were created for this exercise.

I would also like to clean up the code a bit, while it works it will be hard to refactor in the future.
