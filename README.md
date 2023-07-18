# CHALLENGE #1 - Phone password

- [ ] Add the ability to check if clicked numbers match the password. (Password is 62751)
- [ ] If the password is correct, display a success message.
- [ ] After 2 seconds, remove the message from the screen and reset the password input.
- [ ] If the password is incorrect, display a failure message.
- [ ] After 2 seconds, remove the message from the screen and reset the password input.

# CHALLENGE #2 - GROCERY STORE

### STORY

Imagine there is system online that has 5 queues each queue can have N number of customers with N items. The system will process the queue with the lowest items first. If there are two queues with the same number of items, the queue that was added first will be processed first. If there are no customers in the store, the system will display a message saying "There are no customers in the store".

### VISUALIZATION

[2] -- [-] -- [5] -- [1] -- [4]
[9] -- [-] -- [-] -- [-] -- [2]
[3] -- [-] -- [4] -- [-] -- [2]

### TODO

- [ ] Add the ability to add a customer to a queue with a number of items. The customers should be add to the queue with the lowest number of items. If there are two queues with the same number of items, the customer should be added to the first one.
- [ ] Every 1 second, the system should process the queue with the lowest number of items. If there are two queues with the same number of items, the queue that was added first should be processed first.
- [ ] If there are no customers in the store, the system should display a message saying "There are no customers in the store".
- [] The system should display the number of customers in each queue. if there are no customers in a queue, the system should display a dash (-).

#### HINTS (WE ARE USING REACT)

- [ ] Use `setInterval` to process the queue every 1 second.
- [ ] Use `setTimeout` to remove the message after 2 seconds.
- [ ] Represent the system as an array of arrays.
- [ ] Represent each queue as an array.
- [ ] Represent each customer as a number in the queue array.
- [ ] Use `useState` to store the system.
- [ ] Use `useEffect` to process the queue every 1 second.
- [ ] Use `map` to display the system.

# CHALLENGE #3

- [ ] Add the ability to click on a section of the page and have it add a blue circle thats 12 by 12 pixels.
- [ ] Add the ability to click on a undo button and have it remove the last blue circle that was added to the page.
- [ ] Add the ability to click on a redo button and have it add the last blue circle that was removed from the page.
- [ ] If the undo button is clicked and there are no more blue circles to remove, the undo button should be disabled.
- [ ] If the redo button is clicked and there are no more blue circles to add, the redo button should be disabled.

## BOSS CHALLENGE #1

- [ ] Add the ability to alternate between colors when adding a circle to the page. (Example: First click adds a blue circle, second click adds a red circle, third click adds a blue circle, etc.)
- [ ] Add the ability to click on a circle and have it change to a random color.
- [ ] When adding a circle it should randomize the size between 6 and 26 pixels.
