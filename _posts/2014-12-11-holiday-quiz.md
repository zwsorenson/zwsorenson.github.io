---
layout: post
title: White House Quiz Application
categories: projects
source-thumb: '/images/logos/wh.png'
source-name: The White House
source-url: 'https://www.whitehouse.gov/blog/2014/12/09/how-much-do-you-know-about-holidays-white-house'
---

One of my projects as a White House intern was to create a simple, reusable JavaScript quiz module.

Here's the first one we set up -- for the White House holiday celebration -- but if
you check out their blog, it resurfaces occasionally with new content.


<div id="quiz" style="display: block;">
    <!-------- Start Page -------->
    <section>
        <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_header.png)"></div>
        <h1>How Much Do You Know about the Holidays at the White House?</h1>
        <hr>
        <p class="summary">From snowball fights to  gingerbread houses to digital trees,  the White House is a treasure trove of holiday traditions — old and new alike. Take this quiz to test your knowledge and learn a surprising thing or two about our holiday history.</p>
        <button class="btn btn-next">Begin Quiz</button>
    </section>

    <!-------- Question Pages -------->
    <section style="display: none;">
        <div class="question">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_header.png)"></div>
            <p class="summary">1. Who was the first President to preside over the National Christmas tree lighting ceremony?</p>
            <ul>
                <li class="choice btn" data-answer="incorrect">President George Washington in 1788</li>
                <li class="choice btn" data-answer="correct">President Calvin Coolidge in 1923</li>
                <li class="choice btn" data-answer="incorrect">President Franklin D. Roosevelt in 1934</li>
                <li class="choice btn" data-answer="incorrect">President Barack Obama in 2009</li>
            </ul>
        </div>
        <div class="answer correct" data-answer="correct">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_coolidge.jpg)"></div>
            <p><b>Yup!</b> Back in 1923, a few school children in Washington, D.C. wrote to President Calvin Coolidge asking him if they could put a Christmas tree on the South Lawn. More than 90 years later, that simple request is now a holiday tradition. Check out this year’s ceremony to <a href="http://www.whitehouse.gov/blog/2014/12/04/decking-national-christmas-tree-codes-jolly">light the National Christmas Tree</a> — “a symbol of hope and holiday spirit.”  </p>
        </div>
        <div class="answer" data-answer="incorrect">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_coolidge.jpg)"></div>
            <p>Actually, the first National Christmas Tree was lit by President Calvin Coolidge. Back in 1923, a few school children in Washington, D.C. wrote to President Calvin Coolidge asking him if they could put a Christmas tree on the South Lawn. More than 90 years later, that simple request is now a holiday tradition. Check out this year’s ceremony to <a href="http://www.whitehouse.gov/blog/2014/12/04/decking-national-christmas-tree-codes-jolly">light the National Christmas Tree</a> — “a symbol of hope and holiday spirit.”</p>
        </div>
        <button class="btn btn-next">Next Question</button>
    </section>

    <section style="display: none;">
        <div class="question">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_header.png)"></div>
            <p class="summary">2. True or false: A steadfast conservationist, President Teddy Roosevelt refused to allow any trees to be cut for use in the White House.</p>
            <ul>
                <li class="choice btn" data-answer="correct">True</li>
                <li class="choice btn" data-answer="incorrect">False</li>
            </ul>
        </div>
        <div class="answer correct" data-answer="correct">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_roosevelt.jpg)"></div>
            <p><b>That’s right!</b> President Teddy Roosevelt did not approve of cutting trees for Christmas decorations. But his son Archie defied the ban and smuggled in a small tree that was decorated and then hidden in a closet a sewing room in the White House.</p>
        </div>
        <div class="answer" data-answer="incorrect">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_roosevelt.jpg)"></div>
            <p><b>It’s actually true!</b> President Teddy Roosevelt was such an avowed conservationist that he prohibited cutting a single tree for Christmas decorations at the White House. However, his son Archie defied the ban and smuggled in a small tree that was decorated and then hidden in a closet in the upstairs sewing room.</p>
        </div>
        <button class="btn btn-next">Next Question</button>
    </section>

    <section style="display: none;">
        <div class="question">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_header.png)"></div>
            <p class="summary">3. Who helped light up the National Christmas tree for the first time in history this year?</p>
            <ul>
                <li class="choice btn" data-answer="incorrect">The First Dogs, Bo &amp; Sonny</li>
                <li class="choice btn" data-answer="incorrect">Santa and his reindeer</li>
                <li class="choice btn" data-answer="correct">Girls across the country, using code</li>
                <li class="choice btn" data-answer="incorrect">Vice President Biden</li>
            </ul>
        </div>
        <div class="answer correct" data-answer="correct">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/imagecache/embedded_img_full/image/image_file/1lja2538.jpg)"></div>
            <p><b>Nailed it.</b> Young girls from across the country joined Google in using code to give the state and territory trees a digital upgrade. Decorate your own “digi-tree” using Made w/ Code’s <a href="https://holidays.madewithcode.com/project/lights">holiday lights</a> program!</p>
        </div>
        <div class="answer" data-answer="incorrect">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/imagecache/embedded_img_full/image/image_file/1lja2538.jpg)"></div>
            <p><b>Nope!</b> Neither Vice President Biden, the First Dogs, nor Rudolph the Red-Nosed Reindeer could hold a candle to the young girls who used code for the first time in history to light up the state and territory trees. Decorate your own “digi-tree” using Made w/ Code’s <a href="https://holidays.madewithcode.com/project/lights">holiday lights</a> program!</p>
        </div>
        <button class="btn btn-next">Next Question</button>
    </section>


    <section style="display: none;">
        <div class="question">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_header.png)"></div>
            <p class="summary">4. True or false: The White House once hosted an indoor snowball fight.</p>
            <ul>
                <li class="choice btn" data-answer="correct">True</li>
                <li class="choice btn" data-answer="incorrect">False</li>
            </ul>
        </div>
        <div class="answer correct" data-answer="correct">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_bo.jpg)"></div>
            <p><b>Right!</b> Snow or no-snow, President Andrew Jackson knew how to throw a party. In 1834, he threw a large party for his children and grandchildren that included games, dancing, dinner, and an indoor “snowball fight” using specially-made cotton balls for the occasion. To this day, the White House invites school groups and organizations to help decorate and participate in the holiday parties.</p>
        </div>
        <div class="answer" data-answer="incorrect">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_bo.jpg)"></div>
            <p><b>It’s true!</b>  Snow or no-snow, President Andrew Jackson knew how to throw a party. In 1834, he threw a large party for his children and grandchildren that included games, dancing, dinner, and an indoor “snowball fight” using specially-made cotton balls for the occasion. To this day, the White House invites school groups and organizations to help decorate and participate in the holiday parties.</p>
        </div>
        <button class="btn btn-next">Next Question</button>
    </section>

    <section style="display: none;">
        <div class="question">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_header.png)"></div>
            <p class="summary">5. Who was the first President to light the National Menorah?</p>
            <ul>
                <li class="choice btn" data-answer="incorrect">President Van Buren</li>
                <li class="choice btn" data-answer="correct">President Carter</li>
                <li class="choice btn" data-answer="incorrect">President Reagan</li>
                <li class="choice btn" data-answer="incorrect">President Obama</li>
            </ul>
        </div>
        <div class="answer correct" data-answer="correct">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/imagecache/embedded_img_full/image/image_file/P121609LJ-0049.jpg)"></div>
            <p><b>Correct!</b> President Jimmy Carter was the first president to recognize Hanukkah, lighting the National Menorah on the first night of the Festival of Lights in 1979. Since then, each president has commemorated Hanukkah at the White House with ceremonies ranging from small presentations in the Oval Office to large parties with the First Family, but they all have shared the tradition of a unique Hanukkah Menorah.  This year, the National Menorah will be lit on the night of December 16. Stay tuned for details of this year’s celebrations: <a href="http://www.whitehouse.gov/holidays">wh.gov/holidays</a>.</p>
        </div>
        <div class="answer" data-answer="incorrect">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/imagecache/embedded_img_full/image/image_file/P121609LJ-0049.jpg)"></div>
            <p>Actually, President Jimmy Carter was the first president to recognize Hanukkah, lighting the National Menorah on the first night of the Festival of Lights in 1979. Since then, each president has commemorated Hanukkah at the White House with ceremonies ranging from small presentations in the Oval Office to large parties with the First Family, but they all have shared the tradition of a unique Hanukkah Menorah.  This year, the National Menorah will be lit on the night of December 16. Stay tuned for details of this year’s celebrations: <a href="http://www.whitehouse.gov/holidays">wh.gov/holidays</a>.</p>
        </div>
        <button class="btn btn-next">Next Question</button>
    </section>

    <section style="display: none;">
        <div class="question">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_header.png)"></div>
            <p class="summary">6. The official White House Gingerbread House weighs approximately how much?</p>
            <ul>
                <li class="choice btn" data-answer="incorrect">8 Pounds</li>
                <li class="choice btn" data-answer="incorrect">About 50 Pounds</li>
                <li class="choice btn" data-answer="incorrect">199 Pounds</li>
                <li class="choice btn" data-answer="correct">Over 300 Pounds</li>
            </ul>
        </div>
        <div class="answer correct" data-answer="correct">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_house.jpg)"></div>
            <p><b>Correct</b> — astounding, right? This miniature White House is actually a colossal production. Everyone from White House carpenters to plumbers to electricians lend their expertise to help make this delectable decoration possible. Located in the State Dining Room, this year’s gingerbread house – complete with a skating rink and marzipan reindeer -- contains 250 pounds of pastillage, 40 pounds of marzipan, 25 pounds of gum paste, 80 pounds of gingerbread dough, 25 pounds of sugar work, and an immeasurable amount of holiday delight. You can check it out here: <a href="http://www.whitehouse.gov/holidays">wh.gov/holidays</a>.</p>
        </div>
        <div class="answer" data-answer="incorrect">
            <div class="image-header" style="background-image: url(http://www.whitehouse.gov/sites/default/files/image/holiday_quiz_house.jpg)"></div>
            <p><b>It’s actually more than 300 pounds!</b> Surprised? It’s true, this miniature White House is actually a colossal production. Everyone from White House carpenters to plumbers to electricians lend their expertise to help make this delectable decoration possible. Located in the State Dining Room, this year’s gingerbread house – complete with a skating rink and marzipan reindeer -- contains 250 pounds of pastillage, 40 pounds of marzipan, 25 pounds of gum paste, 80 pounds of gingerbread dough, 25 pounds of sugar work, and an immeasurable amount of holiday delight. You can check it out here: <a href="http://www.whitehouse.gov/holidays">wh.gov/holidays</a>.</p>
        </div>
        <button class="btn btn-next">Finish</button>
    </section>

    <!-------- Last Page -------->
    <section style="display: none;">
        <h1 class="feedback-step">
            Happy Holidays!
            <br>
            <small><small>You got <span class="score-container"></span> questions correct.</small></small>
        </h1>
        <p>Now that you know how presidents and Americans across the country have helped deck the halls here at the White House, check out the latest décor — including a few more holiday firsts from President Obama and the First Family. Head over to <a href="http://www.whitehouse.gov/holidays">wh.gov/holidays</a> to see how we’re trimming the house in this year’s theme: <span style="font-weight: bold; color: #800;">A Children’s Winter Wonderland</span>.</p>
        <button class="btn btn-first">Start Over</button>
    </section>
    <nav class="pagination" style="display: none;">
        <div class="btn-prev">back</div><div class="btn-next">skip</div>
        <p></p>
    </nav>
</div>
<style type="text/css">
    #quiz-no-javascript {
        display: block;
    }
    #quiz {
        display: none;
    }

    /* BUTTONS */
    #quiz .btn-first::after {
        font-family: 'FontAwesome';
        margin: 0 4px;
        content: '\f112';
    }
    #quiz .btn-next::after {
        font-family: 'FontAwesome';
        margin: 0 4px;
        content: '\f054';

    }
    #quiz .btn-prev::before {
        font-family: 'FontAwesome';
        margin: 0 4px;
        content: '\f053';
    }

    /**
    * Button styling yoinked from fortyfour theme.
    */

    #quiz .btn,
    #quiz li.btn,
    #quiz a.btn,
    #quiz button.btn {
        cursor: pointer;
        background-color: #4483bd;
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #64a3e3), color-stop(100%, #4483bd));
        background-image: -webkit-linear-gradient(top, #64a3e3, #4483bd);
        background-image: -moz-linear-gradient(top, #64a3e3, #4483bd);
        background-image: -o-linear-gradient(top, #64a3e3, #4483bd);
        background-image: linear-gradient(top, #64a3e3, #4483bd);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.2);
        border: none;
        color: #FFF!important;
        display: inline-block;
        font-size: 14px!important;
        font-family: Arial, Helvetica, "Nimbus Sans L", sans-serif!important;
        font-weight: bold!important;
        line-height: 1!important;
        margin-bottom: 10px!important;
        padding: 10px 15px!important;
        text-align: center;
        text-transform: uppercase;
    }
    #quiz .btn:hover {
        background: #1e65ab;
        text-decoration: none;
        color: #fff;
    }

    #quiz .btn-facebook {
        background-color: #64a3e3;
        background: url("/sites/default/themes/fortyfour/images/social-icons/fb_btn_icon2.png"), #64a3e3;
        background: url(/sites/default/themes/fortyfour/images/social-icons/fb_btn_icon2.png), -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #64a3e3), color-stop(100%, #4483bd));
        background: url(/sites/default/themes/fortyfour/images/social-icons/fb_btn_icon2.png), -webkit-linear-gradient(top, #64a3e3, #4483bd);
        background: url(/sites/default/themes/fortyfour/images/social-icons/fb_btn_icon2.png), -moz-linear-gradient(top, #64a3e3, #4483bd);
        background: url(/sites/default/themes/fortyfour/images/social-icons/fb_btn_icon2.png), -o-linear-gradient(top, #64a3e3, #4483bd);
        background: url(/sites/default/themes/fortyfour/images/social-icons/fb_btn_icon2.png), linear-gradient(top, #64a3e3, #4483bd);
        background-repeat: no-repeat;
        padding-left: 48px;
        padding-right: 14px;
    }

    #quiz .btn-facebook:hover, #quiz .btn-blue-facebook:hover {
        background: url(/sites/default/themes/fortyfour/images/social-icons/fb_btn_icon2.png), #1e65ab;
        background-repeat: no-repeat;
    }

    #quiz .btn-twitter {
        background-color: #64a3e3;
        background: url("/sites/default/themes/fortyfour/images/social-icons/twt_btn_icon2.png"), #64a3e3;
        background: url(/sites/default/themes/fortyfour/images/social-icons/twt_btn_icon2.png), -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #64a3e3), color-stop(100%, #4483bd));
        background: url(/sites/default/themes/fortyfour/images/social-icons/twt_btn_icon2.png), -webkit-linear-gradient(top, #64a3e3, #4483bd);
        background: url(/sites/default/themes/fortyfour/images/social-icons/twt_btn_icon2.png), -moz-linear-gradient(top, #64a3e3, #4483bd);
        background: url(/sites/default/themes/fortyfour/images/social-icons/twt_btn_icon2.png), -o-linear-gradient(top, #64a3e3, #4483bd);
        background: url(/sites/default/themes/fortyfour/images/social-icons/twt_btn_icon2.png), linear-gradient(top, #64a3e3, #4483bd);
        background-repeat: no-repeat;
        padding-left: 48px;
        padding-right: 14px;
    }

    #quiz .btn-twitter:hover {
        background: url(/sites/default/themes/fortyfour/images/social-icons/twt_btn_icon2.png), #1e65ab;
        background-repeat: no-repeat;
    }

    /* higher specificity to override theme link colors */
    #quiz .btn:link {
        color: #fff;
    }
    #quiz .btn:visited {
        color: #fff;
    }
    /* TYPOGRAPHY */

    #quiz h1,
    #quiz h2,
    #quiz h3,
    #quiz h4 {
        font-family: 'Whitney SSm A','Whitney SSm B', "Helvetica Neue", Helvetica, Arial, "Nimbus Sans L", sans-serif;
        font-size: 16px;
        font-weight: normal;
        margin-bottom: .292em;
        color: #333;
    }

    #quiz h1 {
        font-family: 'Hoefler Text A', Georgia, "Times New Roman", "DejaVu Serif", serif;
        font-size: 35px!important;
        line-height: 38px!important;
        margin: 12px 0!important;
        /* Reset styles from page */
        display: inherit!important;
        height: auto!important;
        text-indent: 0!important;
        width: auto!important;
        color: #333333!important;
        background: none!important;
    }

    #quiz h2 {
        font-size: 24px;
        line-height: 27px;
    }

    #quiz h3 {
        font-size: 22px;
        line-height: 25px;
    }

    #quiz h4 {
        text-transform: uppercase;
        font-size: 17px;
        line-height: 20px;
    }

    #quiz p {
        font-size: 16px;
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Nimbus Sans L", sans-serif;
        font-weight: normal;
        line-height: 23px;
        color: #333;
    }

    #quiz p.summary {
        font-size: 20px;
        font-family: 'Hoefler Text A', Georgia, "Times New Roman", "DejaVu Serif", serif;
        font-weight: normal;
        line-height: 32px;
        color: #565656;
    }

    #quiz p a,
    #quiz p a:link, #quiz p a:visited,
    #quiz p a:hover, #quiz p a:active {
        font-weight:  700;
    }
    #quiz {
        position: relative;
        text-align: center;
        border: 3px solid #003366;
        margin: 24px 0 16px 0;
    }
    #quiz > section {
        padding: 16px;
    }
    #quiz .image-header {
        background-position: center;
        background-size: cover;
        height: 180px;
        margin: 16px auto;
    }
    /* Question Pages */
    #quiz .question ul li {
        list-style-type: none;
    }
    /* Last Page */
    #quiz .feedback-step {
        background-color: #003366;
        color: #ffffff;
        padding: 16px;
    }
    /* Footer */
    #quiz .pagination {
        position: relative;
        height: 64px;
        text-align: center;
        font-size: 11px;
        font-family: 'Helvetica', 'Arial', sans-serif;
        background-color: #003366;
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #4473a1), color-stop(1, #003366));
        background-image: -o-linear-gradient(bottom, #4473a1 0%, #003366 100%);
        background-image: -moz-linear-gradient(bottom, #4473a1 0%, #003366 100%);
        background-image: -webkit-linear-gradient(bottom, #4473a1 0%, #003366 100%);
        background-image: -ms-linear-gradient(bottom, #4473a1 0%, #003366 100%);
        background-image: linear-gradient(to bottom, #4473a1 0%, #003366 100%);
    }
    #quiz .pagination p {
        position: absolute;
        top: 15px;
        bottom: 0;
        left: 50%;
        right: 50%;
        height: 40px;
        width: 40px;
        margin: 0 0 0 -20px;
        border-radius: 40px;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        line-height: 40px;
        color: #003366;
        background-color: #7da2c1;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 11px;
    }
    #quiz .pagination div {
        display: inline-block;
        width: 50%;
        line-height: 24px;
        padding: 20px 0;
        color: #7da2c1;
        text-transform: uppercase;
        text-decoration: none;
    }
    #quiz .pagination div:hover {
        background: #003366;
    }
</style>
<script type="text/javascript">
    $(document).ready(function() {
        /********* Initialization *********/
        var quizContainer = $('#quiz'),
        quizFooter = quizContainer.find('.pagination'),
        quizPages = quizContainer.find('section'),
        buttonFirst = quizContainer.find('.btn-first'),
        buttonPrev = quizContainer.find('.btn-prev'),
        buttonNext = quizContainer.find('.btn-next');


        quizContainer.css('display', 'block');
        $('#quiz-no-javascript').css('display', 'none');


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
</script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
