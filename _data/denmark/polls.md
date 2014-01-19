Data Sources
------------
If you need polling from the latest Danish election to present, Wikipedia has a compiled dataset at [“Opinion Polling for the Next Danish General Election”][polls-recent].

## Importing the Data ##

### In Google Docs (Recommended) ###
Open a new Google Docs spreadsheet and enter this into a cell:

```
=ImportHtml("https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Danish_general_election", "table", 0)
```

Or, if we pretend the URL is `{{ URL }}` for a second:

```
=ImportHtml("{{ URL }}", "table", 0)
```

At this point, the imported table will show up in your spreadsheet, and you will be able to export the data in a format of your choice.

### In R  ###
To retrieve the data in R, Erik Gahner’s (Danish) [guide][gahner] is instructive.

Even if your Danish is a little rusty, you should be able to infer what goes on from the code snippets alone.


[polls-recent]: https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Danish_general_election
[gahner]: http://erikgahner.dk/2013/12/11/meningsmalinger-fra-wikipedia-til-r-med-xml-pakken/
