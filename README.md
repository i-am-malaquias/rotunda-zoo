# rotunda-zoo

A straightforward OOP example, no bells and whistles added, only fancy bit of sorcery is the use of RegEx

Using `...replace(/\s+/g,...` over `...replace(" "...` has some benefits and drawbacks depending on intended use

It WILL catch `"  "` (double spaces) and `  ` (tabs) but will also catch other whitespace like newline and CR and probably others I don't remember

I don't know if this is desired but for the input "Double  spaces" getting "Double rawr spaces" seems better than "Double rawr  rawr spaces"

Another edge case is if the input ends with a space it will double the space, I just left it as is since I think the main point of the
exercise was more about OOP but still worth a mention I guess.
