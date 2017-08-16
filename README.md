Introduction
============

BBCode or Bulletin Board Code is a lightweight markup language used to format posts in many message boards.
This AngularJS extension was made to do same for dynamically loaded content, e.g. asynchronous pages or posts.

See attached index.htm file for examples.


Available BB code snippets
==========================

- **Bolded** text					[b]example-text[/b]
- Underlined text					[u]example-text[/u]
- _Italized_ Text					[i]example-text[/i]
- ~~Strikethrough~~ text				[s]example-text[/s]
- Simple Image						[img]url-to-image[/img]
- Image with title					[img=url-to-image]image-title[/img]
- Simple URL						[url]http://www.example.com[/url]
- URL with Title					[url=http://www.example.com]url-title[/url]


Usage
=====

website.html

	<!DOCTYPE html>
	<html>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min.js" type="text/javascript"></script>		// Include main AngularJS-code
		<script src="angularjs-bb.js" type="text/javascript"></script>		// Include BBCode extension
		<script src="your-app.js" type="text/javascript"></script>			// Include your app code
	</head>

	<body ng-app="your-app">
		<div ks-nl2br ks-bbcode>											// Apply new line formatter with ks-nl2br and apply bb code formatter with ks-bbcode
			Dies ist [b]fetter[/b] Text.
			Dies ist [I]kursiver[/I] Text.
			Dies ist [U]unterstrichener[/U] Text.
			Dies ist [S]durchgestrichener[/S] Text.
	
			[URL]http://www.example.com[/URL]
		</div>
	</body>
	</html>



your-app.js

	angular.module('your-app', ['bbModule']);
