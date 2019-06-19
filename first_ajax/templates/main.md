STEP 0
-------
What HTTP method did your browser use to make the request?
    GET
How many milliseconds did it take your browser to complete it?
    145
What HTTP status code did the server return? What does that mean?
    200 OK
Look at the "Initiator" and "Type". Was this an xhr/JavaScript/AJAX request or a normal browser request?
    initiator = other
    type = document
    normal browser request?


STEP 1
-------
Open the index.html file from the cloned project in your browser.
In the linked ajax.js file, build an AJAX request that:
sends a get request to the root path of the server
Ensure the request is wrapped in a document.addEventListener("DOMContentLoaded"...) function.
Ensure your network tab is open in the developer tools, and run the request by reloading your page.
What are the values of the "Method" and "Status"? Compare these values to Step 0.
    Same as step 0
What are the values of the "Type" and "Initiator"? Compare these values to Step 0.
    Same as step 0


STEP 2
-------
In your index.html file, add a <button> that says "Run AJAX Request to Root" to the Step 1 and 2 <section>
Back in ajax.js, Create a 'click' event handler for the button, and move your AJAX call inside it.
Refresh your page to load the new JavaScript.
Try clicking your button a few times! In your network tab, inspect the requests as they come in.


STEP 3
-------
Add a new <button> that says "Run AJAX Request to Ping/Pong" to the Step 3,4,5,6 <section>
Create a new AJAX request bound to the <button> that retrieves the information at the /ping url.
Open your Network tab, reload the page, and run your request.
Click on the request. This displays a detailed view of this one request. Investigate the "Response" and "Preview" sub-tabs. What was the content of the response?
    Preview shows my webpage
    Response shows my HTML
In a then callback, use console.log to write the response.data string to the console.
Also in the then callback append the response.data string to the <section> element.


STEP 4
-------
Modify your AJAX request so that it points to the /pong url. Note that it's now p-o-n-g not p-i-n-g. This will simulate a server error.
Open your Network tab, reload the page, and run your request.
What is the new HTTP status code?
    500 Internal Server Error
Add a catch callback, append a nice message to the <section> telling the user that you'll try harder next time.


STEP 5
-------
Add a second then callback after your catch callback and use console.log to output a message like "Hey the request finished!"


STEP 6
-------
Ensure that each of the then (#1), catch, and then(#2) callbacks at least applies a meaningful console.log message.
Switch back and forth between the /ping and /pong URLs, reloading the page and running your request each time. What do you see in your developer tools? What messages show up in your console?
    For PING:
        DEV TOOLS
            200 OK
        CONSOLE MESSAGES
            We did it!
            main.js:20 pingPongButton response:  Wow what a ride! I came all the way from the server!
            main.js:33 Hey the request finished!
    For PONG:
        DEV TOOLS
            500 Internal Server Erro
        CONSOLE MESSAGES
            Oops we had an error!
            main.js:27 pingPongButton error:  I'm sorry, Dave. I'm afraid I can't do that.
            main.js:33 Hey the request finished!


STEP 7
-------
Add a new <button> that says "Run AJAX Request to Count" to the Step 7 <section>
Create a new AJAX request bound to the <button> that retrieves the information at the /count url.
Run your request and investigate your Network tab. This is a shared count of the total number of Bitmakers to ever visit this URL.
In a then callback, write the response data to the Step 7 <section>. Ask your neighbour what number they got and compare. Run your request a few times and compare again!


STEP 8
-------
Add a new <button> that says "Run AJAX Request to Time" to the Step 8 <section>
Create a new AJAX request bound to the <button> that retrieves the information at the /time url.
Add a then callback and write the response data to the Step 8 <section>.
Run the request, and see the current server time get written to the page.
Modify the request to send a timezone as a request param, for example: 'Europe/Sofia'.
Try changing 'Europe/Sofia' to a different time zone and see what the time is in that part of the world! Some other valid timezones are: 'America/Mexico_City', or 'Pacific/Honolulu', or 'Asia/Kolkata'


STEP 9
-------
Add a new <button> that says "Run AJAX Request to A Car " to the Step 9 <section>
Build a new AJAX request bound to the <button> that retrieves the info at the /a_car URL. Refresh the page, click the <button>, and inspect the response.
Add an empty unordered list <ul> to the section. Give it an id attribute.
Add a then callback that writes the response data to the unordered list inside the section.
Refresh your page, and try the button a few times!


STRETCH
-------
Return to the /count request. This URL actually accepts a data parameter called amount. What are the acceptable values for it? What does it do?

Return to the /time request. Bind this request to a new <button>'s click event. Change from a hardcoded timezone parameter to accepting input from the user via a textbox. Add a catch callback that writes an error message to the <section>. Test it by entering an invalid timezone such as 'pokeroo'?