<b>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</b> <br>
<b>Ans:</b>  <i>getElementById</i> : Finds one element with using specific id and return just single element.<br>
            <i>getElementsByClassName</i>: Finds all elements which belong from specific  class and return HTMLcollenction or we can say list.<br>
            <i>querySelector</i>: Find element that matches with CSS selector and return one element which comes first.<br>
            <i>querySelectorAll</i>: Finds all elements that match with CSS selector and return HTMLCollection or list.
<br> <br>
<b>2. How do you create and insert a new element into the DOM?<br>
Ans:</b> To create a new element in the DOM and insert it into the DOM, there are a few steps must go through. First, create the element with <i>document.createElement()</i>. Then, set the content of the element using innerText or innerHTML. Finally,insert it into the page using <i>appendChild()</i>.
For example:
<i>
            let div = document.createElement("div");
            div.innerText = "Hello";
            document.body.appendChild(div);
</i>
<br><br>
<b>3. What is Event Bubbling and how does it work?<br>
Ans:</b>  When click an event on a child element, it bubbles up through its parent elements one at a time to the document. This bubbling up is referred to as bubbling, like bubbles floating upward in water.
<br><br>
<b>4. What is Event Delegation in JavaScript? Why is it useful?<br>
Ans:</b> Event Delegation means, an event listener used to one parent element instead of attaching event listeners to many child elements. The parent will use event bubbling to catch events from its childNode.
It is useful because it uses one event listener instead of many & in future if need to add new elements it can handle it easily.
<br><br>
<b>5. What is the difference between <i>preventDefault()</i> and <i>stopPropagation()</i> methods?
Ans: The difference between <i>preventDefault()</i> and <i>stopPropagation()</i>  is <i>preventDefault()</i> work for stopping default browser behaviour and <i>stopPropagation()</i> work for stop event bubbling.




