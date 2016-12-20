 I've logged to the console what is happening so you can keep track.

You'll need to serve these files up with live-server, and then to start the process click the button that says "Start Traffic Flow". The lights and traffic will run continuously until the page is refreshed.

When that button is clicked, it runs a function that turns the north/southbound lights green, and also runs a function that causes the cars to drive. Cars are logged at random intervals using setInterval() and Math.random(). When the light turns red, another function is run to stop the setInterval that is logging cars that are driving through that intersection. Then, the function is called that turns the left turn arrows green. This function runs in a similar fashion to that of the north/southbound lights, and when it finishes, it calls the function to turn the east/westbound lights green, and so on.

Thanks so much!

Things I would change:

Slow the cars traveling through
make the lights last longer
add a visual representation using jquery potentially?
  or build it using directives
  pure javascript

I put the functions on an object in the service to keep my controllers thinner, and also make it more flexible in case i wanted to use those functions elsewhere (makes the app more scalable)
  -in this app it might make more sense

Have a button to have a light turn red, which also causes the other light to turn green, instead of calling the functions recursively.

Structure files more carefully for something bigger
