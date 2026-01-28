var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "cover-sheet",
  "level": "1",
  "url": "cover-sheet.html",
  "type": "Chapter",
  "number": "",
  "title": "Cover Sheet",
  "body": " Cover Sheet   This is a test page for playing around with PreTeXt content.   "
},
{
  "id": "linear-description",
  "level": "1",
  "url": "linear-description.html",
  "type": "Section",
  "number": "",
  "title": "Lesson Description",
  "body": " Lesson Description  This section contains a lesson from Prof. Atchison's MATH123 course. It was originally written in LaTeX and has been converted to PreTeXt as an exercise.   Objective:  Solve, graph, and give interval notation for the solution to a linear inequality. Create a sign diagram to identify those intervals where a linear expression is positive or negative.    Students will be able to:    Solve a linear inequality by isolating the variable.  Recognize the need to change the direction of an inequality when multiplying or dividing by a negative value.  Graph a linear inequality on a one-dimensional axis.  Express solutions using interval notation.      Prerequisite Knowledge:    Apply the distributive property.  Verify the accuracy of a solution to an inequality by checking     "
},
{
  "id": "sec-Author-Profile",
  "level": "1",
  "url": "sec-Author-Profile.html",
  "type": "Section",
  "number": "",
  "title": "Author Profile",
  "body": " Author Profile  Marc is a senior attending Framingham State University and is pursuing a bachelor's in computer science. His hobbies include computers and working on his Miata.  "
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
