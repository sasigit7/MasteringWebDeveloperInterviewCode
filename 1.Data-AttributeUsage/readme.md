###### DATA ATTRIBUTE ######

* https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

# HTML Syntax => data-WHATEVER

* The syntax is simple. Any attribute on any element whose attribute name starts with data- is a data attribute. Say, you have an article and you want to store some extra information that doesn’t have any visual representation. Just use data attributes for that:
* Example:
* <article
* id="electric-cars"
* data-columns="3"
* data-index-number="12314"
* data-parent="cars">
* ...
* </article>

# CSS access => []

* Note that, as data attributes are plain HTML attributes, you can even access them from CSS. For example to show the parent data on the article you can use generated content in CSS with the attr() function:
* Example: 
* article::before {
* content: attr(data-parent);
* }

* You can also use the attribute selectors in CSS to change styles according to the data:
* Example:
* article[data-columns='3'] {
* width: 400px;
* }
* article[data-columns='4'] {
* width: 600px;
* }

# JavaScript access => dataset

* Reading the values of these attributes out in JavaScript is also very simple. You could use getAttribute() with their full HTML name to read them, but the standard defines a simpler way: a DOMStringMap you can read out via a dataset property.

* To get a data attribute through the dataset object, get the property by the part of the attribute name after data- (note that dashes are converted to camelCase).

* Example: 
* const article = document.querySelector('#electric-cars');
* article.dataset.columns // "3"
* article.dataset.indexNumber // "12314"
* article.dataset.parent // "cars

* Each property is a string and can be read and written. In the above case setting article.dataset.columns = 5 would change that attribute to "5".

