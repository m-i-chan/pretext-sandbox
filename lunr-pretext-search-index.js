var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "cover-sheet",
  "level": "1",
  "url": "cover-sheet.html",
  "type": "Chapter",
  "number": "",
  "title": "About",
  "body": " About  Marc is a senior at Framingham State University pursuing a degree in computer science. His hobbies include video games, hiking, and working on his Miata.  This site is a sandbox for learning PreTeXt.  "
},
{
  "id": "linear-description",
  "level": "1",
  "url": "linear-description.html",
  "type": "Section",
  "number": "",
  "title": "Lesson Description",
  "body": " Lesson Description   Objective:  Solve, graph, and give interval notation for the solution to a linear inequality. Create a sign diagram to identify those intervals where a linear expression is positive or negative.    Students will be able to:    Solve a linear inequality by isolating the variable.  Recognize the need to change the direction of an inequality when multiplying or dividing by a negative value.  Graph a linear inequality on a one-dimensional axis.  Express solutions using interval notation.      Prerequisite Knowledge:    Apply the distributive property.  Verify the accuracy of a solution to an inequality by checking.     "
},
{
  "id": "linear-lesson",
  "level": "1",
  "url": "linear-lesson.html",
  "type": "Section",
  "number": "",
  "title": "Lesson",
  "body": " Lesson   Motivating Example  Solve the linear equality.   Our solution can be expressed as follows:   Verbally:  The set of all values of that are greater than or equal to (at least) .    Inequality:       Interval:       Graphically (number line):     Note: A closed (shaded) circle at is also acceptable in place of a bracket.      "
},
{
  "id": "sec-mathematics-program-reqs",
  "level": "1",
  "url": "sec-mathematics-program-reqs.html",
  "type": "Section",
  "number": "",
  "title": "Mathematics Program Requirements",
  "body": " Mathematics Program Requirements     STAT 157  Probability and Statistics    MATH 206  Discrete Mathematics I    MATH 219  Calculus I    MATH 220  Calculus II    MATH 221  Calculus III    MATH 226  Linear Algebra    MATH 419  Abstract Algebra I    MATH 427  Real Analysis    CSCI xxx  One Computer Science Course     In addition to those courses listed above, each student must complete the major requirements described in the following sections.  "
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
