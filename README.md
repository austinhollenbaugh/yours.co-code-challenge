 I've logged to the console what is happening so you can keep track.

You'll need to serve these files up with live-server, and then to start the process click the button that says "Start Traffic Flow". The lights and traffic will run continuously until the page is refreshed.

When that button is clicked, it runs a function that turns the north/southbound lights green, and also runs a function that causes the cars to drive. Cars are logged at random intervals using setInterval() and Math.random(). When the light turns red, another function is run to stop the setInterval that is logging cars that are driving through that intersection. Then, the function is called that turns the left turn arrows green. This function runs in a similar fashion to that of the north/southbound lights, and when it finishes, it calls the function to turn the east/westbound lights green, and so on.

Thanks so much! 
