	"use strict";


angular.module('bbModule', [])

// Available BB code snippets
	.value('snippets', {
		"b": "<b>$1</b>",																				// Bolded text
		"u": "<u>$1</u>",																				// Underlined text
		"i": "<i>$1</i>",																				// Italicized text
		"s": "<s>$1</s>",																				// Strikethrough text
		"img": "<img src=\"$1\" />",																	// Image without title
		"img=([^\\[\\]<>]+?)": "<img src=\"$1\" alt=\"$2\" />",											// Image with title
		"url": "<a href=\"$1\" target=\"_blank\" title=\"$1\">$1</a>",									// Simple URL
		"url=([^\\[\\]<>]+?)": "<a href=\"$1\" target=\"_blank\" title=\"$2\">$2</a>"					// URL with title
	})

// Format BB code
	.directive('ksBbCode', ['snippets', function(snippets) {
		return {
			"restrict": "A",
			"link": function(scope, element, attrs) {
				var contents = element.html().replace(/^\s+|\s+$/i, '');

				for(var i in snippets) {
					var regexp = new RegExp('\\[' + i + '\\](.+?)\\[\/' + i.replace(/[^a-z]/g, '') + '\\]', 'gi');

					if(typeof snippets[i] == 'function') {
						contents = contents.replace(regexp, snippets[i].call(this, contents));
					}
					else {
						contents = contents.replace(regexp, snippets[i]);
					}
				}

				element.html(contents);
			}
		};
	}])

// Format new lines
	.directive('ksNl2br', [function() {
		return {
			"restrict": "A",
			"link": function(scope, element, attrs) {
				var contents = element.html().replace(/^\s+|\s+$/i, '');

				contents = contents.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/gi, '$1<br>$2');

				element.html(contents);
			}
		};
	}]);
