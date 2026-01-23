var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "cover-sheet",
  "level": "1",
  "url": "cover-sheet.html",
  "type": "Chapter",
  "number": "",
  "title": "Test Page",
  "body": " Test Page   This is a test page for playing around with PreTeXt content.   "
},
{
  "id": "ch-new_section",
  "level": "1",
  "url": "ch-new_section.html",
  "type": "Chapter",
  "number": "",
  "title": "A New Section",
  "body": " A New Section    "
},
{
  "id": "sec-Author-Profile",
  "level": "1",
  "url": "sec-Author-Profile.html",
  "type": "Section",
  "number": "",
  "title": "Author Profile",
  "body": " Author Profile  Marc is a senior attending Framingham State University and is pursuing a bachelor's in computer science. His hobbies include computers and working on his Miata.  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
