---
layout: post
title: Reusable Quiz App
categories: projects
source-thumb: '/images/logos/wh.png'
source-name: The White House
source-url: 'https://www.whitehouse.gov/blog/2014/12/09/how-much-do-you-know-about-holidays-white-house'
---

One of my projects as a White House intern was to create a reusable quiz module to make blog posts more interactive. The idea was to write a simple JavaScript application that could take structured HTML content — with pretty anything inside — and run it as a quiz. Below is an explanation of the DOM structure for the quiz, as well as the code that makes it run. Check out the [White House Blog](https://www.whitehouse.gov/blog/2014/12/09/how-much-do-you-know-about-holidays-white-house) for a working example.

## Structure
The structure of the quiz is pretty flexible, and only requires a few basic elements to work. See the table below for the CSS IDs/classes to use for each element.

- **Quiz:** A `<div>` block containing the quiz
-   **Page:** A `<section>` block containing a page for the quiz. The first page is automatically used as the title page, and the last page is automatically used as the conclusion page. All pages beside the first and last page need to include one `.question` block and at least one `.answer` block
-     **Question:** A `.question` block includes any HTML content that poses a question to users, and two or more `.choice` elements.
-       **Choice:** A `.choice` element includes any HTML content that describes a choice (usually a button). The element must also have a `data-answer` attribute set corresponding to the correct answer.
-     **Answer:** An `.answer` block includes any HTML content that provides feedback to the user based on the choice they selected. A question will usually have two or more answer elements, and each must have a `data-answer` attribute specified. When a user selects a choice, the quiz will look up that choice's `data-answer` attribute and display the answer with the matching `data-answer` attribute. The correct answer should also be given the `correct` class.
-   **Conclusion Page:** the last `<section>` block in the quiz gives users feedback and links to other content.
-     **Feedback Step:** the last page must include at least one `.feedback-step` element. After the user completes the quiz, the script determines there score (X/Y questions) and uses that score to select which feedback step to display. For example, if there is only one `.feedback-step` element, it will be shown to all users who finish the quiz. If there are three, the first will be shown to users with scores between 66% and 100%, the second to users with scores between 33% and 66%, and the third to users with scores lower than 33%.


Element:|Selector
-----|-----
Quiz:|`#quiz`
Title Page|`section:first-child`
Question Pages|`section`
Question|`section > .question`
Choice|`section > .question > .choice`
Answer|`section > .question > .answer`
Correct Answer|`section > .question > .answer.correct`
Conclusion Page|`section:last-child`
Feedback Section|`section:last-child > .feedback-step`
Button: Next Page|`.btn-next`
Button: Previous Page|`.btn-prev`
Button: First Page|`.btn-first`

## Example Question
{% highlight html %}
<section>
  <div class="question">
    <div class="image-header" style="background-image: url(/path/to/image.png)"></div>
    <p class="summary">1. QUESTION TEXT</p>
    <ul>
            <li class="choice btn" data-answer="ARBITRARY">CHOICE 1</li>
            <li class="choice btn" data-answer="TEXT">CHOICE 2</li>
            <li class="choice btn" data-answer="ARBITRARY">CHOICE 3</li>
            <li class="choice btn" data-answer="TEXT">CHOICE 4</li>
    </ul>
  </div>
  <div class="answer correct" data-answer="ARBITRARY">
    <p>RESPONSE THAT WILL BE SHOWN IF CHOICE 1 OR CHOIE 3 IS CHOSEN (because data-answer="ARBITRARY")</p>
  </div>
    <div class="answer" data-answer="TEXT">
      <p>RESPONSE THAT WILL BE SHOWN IF CHOICE 2 OR CHOICE 4 IS CHOSEN (because data-answer="TEXT")</p>
    </div>
  <button class="btn btn-next">Next Question</button>
</section>
{% endhighlight %}

## JavaScript Code
{% highlight js %}
$(document).ready(function() {
    /********* Initialization *********/
    var quizContainer = $('#quiz'),
    quizFooter = quizContainer.find('.pagination'),
    quizPages = quizContainer.find('section'),
    buttonFirst = quizContainer.find('.btn-first'),
    buttonPrev = quizContainer.find('.btn-prev'),
    buttonNext = quizContainer.find('.btn-next');

    quizPages.not(':first-child').hide();
    quizFooter.hide();

    /********* Answers *********/
    var answers = [];
    quizContainer.find('.question').find('.choice')
    .bind('click', function (evt) {
        var page = getVisiblePage(),
        choice = $(evt.currentTarget).attr('data-answer'),
        answer = page.find('.answer').filter("[data-answer='" + choice + "']");
        page.find('.question').hide();
        page.find('.btn-next').show();
        answer.fadeIn(400);
        answers[getQuestionPages().index(page)] = answer.hasClass('correct');
    });

    /********* Pagination Buttons *********/
    buttonFirst.bind('click', function () { firstPage(); });
    buttonPrev.bind('click', function () { prevPage(); });
    buttonNext.bind('click', function () { nextPage(); });

    /********* Helper Functions *********/
    var firstPage = function () {
        switchPage(getVisiblePage(), quizPages.filter(':first-child'));
        answers = [];
    };
    var nextPage = function () {
        var page = getVisiblePage();
        switchPage(page, page.next('section'));
    };
    var prevPage = function () {
        var page = getVisiblePage();
        switchPage(page, page.prev('section'));
    };


    function switchPage(fromPage, toPage) {
        if (fromPage.length !== 1 || toPage.length !== 1) return;
        fromPage.hide();
        toPage.show();
        initializePage(toPage);
    }

    function initializePage(page) {
        if (isQuestionPage(page)) {
            page.find('.question').show();
            page.find('.answer, .btn-next').hide();
            quizFooter.show();
            quizFooter.find('p').text(getQuestionPages().index(page) + 1 + '/' + getQuestionPages().length);
        } else {
            quizFooter.hide();
            finishQuiz();
        }
    }

    function finishQuiz() {
        var correct = 0,
        total = getQuestionPages().length;
        answers.forEach(function (ans) {
            if (ans) correct++;
        });
        var ratio = (correct / total),
        headers = getVisiblePage().find('div.feedback-step'),
        index = Math.ceil(ratio * headers.length) - 1;
        if (index == -1) index = 0;
        headers.hide();
        headers.eq(index).show();
        quizContainer.find('.score-container').text(correct + '/' + total);
    }

    function getQuestionPages() {return quizContainer.find('section').not(':first').not(':last');}
    function getVisiblePage() {return quizContainer.find('section').filter(':visible');}
    function isQuestionPage(page) {return !!page.find('.question').length}
})
{% endhighlight %}
