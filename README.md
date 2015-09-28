# fluidscroll
simple jQuery plugin that allows fluid scrolling between similar containers

<a href=""><b>Demo</b></a>

##Importing the file
Simply add fluidScroll.js in your HTML page. No css file is necessary.</span>

##Usage example
The body of your HTML file should look something like this
```
    <div id="main">
        <div class="entry" id="entry1">
            First entry content
        </div>
        <div class="entry" id="entry2">
            Second entry content
        </div>
        .
        .
        .
    </div>
```
> Note the 'main' div id. This is the div on which we will bind the plugin. Every sub-container (here the entry1, entry2, etc.) in the main div must be of the same class; by default the plugin binds the 'entry' class.


In the document ready section of your page, you would bind the event like this
```
    $(document).ready(function() {
        $("#main").fluidScroll();
    });
```

And that's it!
