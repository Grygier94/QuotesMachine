$(document).ready(function () {

    //variables
    var body = $('body');
    var authorText = $('p');
    var quoteText = $('blockquote');
    var buttons = $('.btn');
    var quoteIcon = $('.fa-quote-left');
    var quoteBoard = $('#quoteBoard');
    var link = $('.twitter');
    var quotes = [
      ["Either you run the day or the day runs you.", "Jim Rohn"],
      ["Success is nothing more than a few simple disciplines, practiced every day.", "Jim Rohn"],
      ["Discipline is the bridge between goals and accomplishment.", "Jim Rohn"],
      ["When you change, then everything will change for you!", "Jim Rohn"],
      ["We must all suffer one of two things: the pain of discipline or the pain of regret or disappointment.", "Jim Rohn"],
      ["Happiness is not something you postpone for the future&#59 it is something you design for the present.", "Jim Rohn"],
      ["If you are not willing to risk the unusual, you will have to settle for the ordinary.", "Jim Rohn"],
      ["Formal education will make you a living&#59 self-education will make you a fortune.", "Jim Rohn"],
      ["You cannot change your destination overnight, but you can change your direction overnight.", "Jim Rohn"],
      ["Time is more value than money. You can get more money, but you cannot get more time.", "Jim Rohn"],
      ["Ideas can be life-changing. Sometimes all you need to open the door is just one more good idea.", "Jim Rohn"],
      ["Failure is not a single, cataclysmic event. You don't fail overnight. Instead, failure is a few errors in judgement, repeated every day.", "Jim Rohn"],
      ["If you don't like how things are, change it! You're not a tree.", "Jim Rohn"],
      ["Work harder on yourself than you do on your job.", "Jim Rohn"],
      ["Success is doing ordinary things extraordinarily well.", "Jim Rohn"],
      ["You don't get paid for the hour. You get paid for the value you bring to the hour.", "Jim Rohn"],
      ["Don't wish it were easier, wish you were better.", "Jim Rohn"],
      ["Miss a meal if you have to, but don't miss a book.", "Jim Rohn"],
      ["Take care of your body. It's the only place you have to live.", "Jim Rohn"],
      ["Giving is better than receiving because giving starts the receiving process.", "Jim Rohn"],
      ["If you can't make it good, at least make it look good.", "Bill Gates"],
      ["Your most unhappy customers are your greatest source of learning.", "Bill Gates"],
      ["Treatment without prevention is simply unsustainable.", "Bill Gates"],
      ["Discrimination has a lot of layers that make it tough for minorities to get a leg up.", "Bill Gates"],
      ["Headlines, in a way, are what mislead you because bad news is a headline, and gradual improvement is not.", "Bill Gates"],
      ["The future of advertising is the Internet.", "Bill Gates"],
      ["Success is a lousy teacher. It seduces smart people into thinking they can't lose.", "Bill Gates"],
      ["The starting point of all achievement is desire.", "Napoleon Hill"],
      ["If you cannot do great things, do small things in a great way.", "Napoleon Hill"],
      ["There is no such thing as Something for nothing.", "Napoleon Hill"],
      ["It takes half your life before you discover life is a do-it-yourself project.", "Napoleon Hill"],
      ["The ladder of success is never crowded at the top.", "Napoleon Hill"],
      ["Effort only fully releases its reward after a person refuses to quit.", "Napoleon Hill"],
      ["If you do not conquer self, you will be conquered by self.", "Napoleon Hill"],
      ["Don't wait. The time will never be just right.", "Napoleon Hill"],
      ["Happiness is found in doing, not merely possessing.", "Napoleon Hill"],
      ["You might well remember that nothing can bring you success but yourself.", "Napoleon Hill"],
      ["You give before you get.", "Napoleon Hill"],
      ["What the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"],
      ["Think and grow rich.", "Napoleon Hill"],
      ["No man can succeed in a line of endeavor which he does not like.", "Napoleon Hill"],
      ["Successful people do whatever it takes to get the job done, whether or not they feel like it.", "Jeff Olson"],
      ["The journey starts with a single step - not with thinking about taking a step.", "Jeff Olson"],
      ["Sometimes you need to slow down to go fast.", "Jeff Olson"],
      ["The only person you are destined to become is the person you decide to be.", "Jeff Olson"],
      ["There are two kinds of habits: those that serve you, and those that don't.", "Jeff Olson"],
      ["Showing up is essential. Showing up consistently is powerful. Showing up consistently with a positive outlook is even more powerful.", "Jeff Olson"],
      ["Being productive and being busy are not necessarily the same thing. Doing things won't create your success, doing the right things will.", "Jeff Olson"],
      ["There is a natural progression to everything in life: plant, cultivate, harvest.", "Jeff Olson"],
      ["Your income tends to equal the average income of your five best friends.", "Jeff Olson"],
      ["The difficult is what takes a little time&#59 the impossible is what takes a little longer.", "Jeff Olson"],
      ["Remember: success does not lead to happiness - it's the other way around.", "Jeff Olson"],
      ["The single most important thing I can tell you about the Slight Edge is this: it's already working, right now.", "Jeff Olson"],
      ["Ah, women. They make the highs higher and the lows more frequent.", "Friedrich Nietzsche"],
      ["All truly great thoughts are conceived by walking.", "Friedrich Nietzsche"],
      ["In every real man a child is hidden that wants to play.", "Friedrich Nietzsche"],
      ["Admiration for a quality or an art can be so strong that it deters us from striving to possess it.", "Friedrich Nietzsche"],
      ["He who cannot give anything away cannot feel anything either.", "Friedrich Nietzsche"],
      ["That which does not kill us makes us stronger.", "Friedrich Nietzsche"],
      ["Necessity is not an established fact, but an interpretation.", "Friedrich Nietzsche"],
      ["There are no eternal facts, as there are no absolute truths.", "Friedrich Nietzsche"],
      ["Happiness is not the belief that we don't need to change&#59 it's the realization that we can.", "Shawn Achor"],
      ["If we study what is merely average, we will remain merely average.", "Shawn Achor"],
      ["The best leaders are the ones who show their true colors not during the banner years but during times of struggle.", "Shawn Achor"],
      ["You can study gravity forever without learning how to fly.", "Shawn Achor"],
      ["For me, happiness is the joy we feel striving after our potential.", "Shawn Achor"],
      ["The fastest way to disengage an employee is to tell him his work is meaningful only because of the paycheck.", "Shawn Achor"],
      ["Without action, knowledge is often meaningless.", "Shawn Achor"],
      ["Habits are like financial capital - forming one today is an investment that will automatically give out returns for years to come.", "Shawn Achor"],
      ["It's for this reason that, however counterintuitive it may seem, psychologists actually recommend that we fail early and often.", "Shawn Achor"],
      ["The person we have the greatest power to change is ourselves.", "Shawn Achor"],
      ["All it takes is consciously remembering that we need to include others in our reality.", "Shawn Achor"],
      ["By changing the way we perceive ourselves and our work, we can dramatically improve our results.", "Shawn Achor"],
      ["Happiness implies a positive mood in the present and a positive outlook for the future.", "Shawn Achor"],
      ["The biggest risk is not taking any risk...", "Mark Zuckerberg"],
      ["In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.", "Mark Zuckerberg"],
      ["By giving people the power to share, we're making the world more transparent.", "Mark Zuckerberg"],
      ["Our goal is not to build a platform&#59 it's to be cross all of them.", "Mark Zuckerberg"],
      ["You get a reputation for stability if you are stable for years.", "Mark Zuckerberg"],
      ["My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.", "Steve Jobs"],
      ["Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.", "Steve Jobs"],
      ["Sometimes life hits you in the head with a brick. Don't lose faith.", "Steve Jobs"],
      ["Great things in business are never done by one person. They're done by a team of people.", "Steve Jobs"],
      ["Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.", "Steve Jobs"],
      ["Everyone here has the sense that right now is one of those moments when we are influencing the future.", "Steve Jobs"],
      ["Things don't have to change the world to be important.", "Steve Jobs"],
      ["To be successful, you have to have your heart in your business and your business in your heart.", "Thomas J. Watson"],
      ["If you want to increase your success rate, double your failure rate.", "Thomas J. Watson"],
      ["Nothing so conclusively proves a man's ability to lead others as what he does from day to day to lead himself.", "Thomas J. Watson"],
      ["Whenever an individual or a business decides that success has been attained, progress stops.", "Thomas J. Watson"],
      ["You can be discouraged by failure, or you can learn from it.", "Thomas J. Watson"],
      ["Go ahead and make mistakes, make all you can. Because, remember that's where you'll find success - on the far side of failure.", "Thomas J. Watson"],
      ["Wisdom is the power to put our time and our knowledge to the proper use.", "Thomas J. Watson"],
      ["Don't make friends who are comfortable to be with. Make friends who will force you to lever yourself up.", "Thomas J. Watson"],
      ["Progress is impossible without change, and those who cannot change their minds cannot change anything.", "George Bernard Shaw"],
      ["We are made wise not by the recollection of our past, but by the responsibility for our future.", "George Bernard Shaw"],
      ["I learned long ago, never to wrestle with a pig. You get dirty, and besides, the pig likes it.", "George Bernard Shaw"],
      ["Better keep yourself clean and bright, you are the window through which you must see the world.", "George Bernard Shaw"],
      ["A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.", "George Bernard Shaw"],
      ["No question is so difficult to answer as that to which the answer is obvious.", "George Bernard Shaw"],
      ["The golden rule is that there are no golden rules.", "George Bernard Shaw"],
      ["Success does not consist in never making mistakes but in never making the same one a second time.", "George Bernard Shaw"],
      ["We don't stop playing because we grow old&#59 we grow old because we stop playing.", "George Bernard Shaw"],
      ["You cannot be a hero without being a coward.", "George Bernard Shaw"],
      ["The man with a toothache thinks everyone happy whose teeth are sound. The poverty-stricken man makes the same mistake about the rich man.", "George Bernard Shaw"],
      ["Home life is no more natural to us than a cage is natural to a cockatoo.", "George Bernard Shaw"],
      ["If you must hold yourself up to your children as an object lesson, hold yourself up as a warning and not as an example.", "George Bernard Shaw"],
      ["All great truths begin as blasphemies.", "George Bernard Shaw"],
      ["You see things&#59 and you say 'Why?' But I dream things that never were&#59 and I say 'Why not?'", "George Bernard Shaw"],
      ["A gentleman is one who puts more into the world than he takes out.", "George Bernard Shaw"],
      ["Beware of false knowledge&#59 it is more dangerous than ignorance.", "George Bernard Shaw"],
      ["People who say it cannot be done should not interrupt those who are doing it.", "George Bernard Shaw"],
      ["The possibilities are numerous once we decide to act and not react.", "George Bernard Shaw"],
      ["Beauty is all very well at first sight&#59 but who ever looks at it when it has been in the house three days?", "George Bernard Shaw"],
      ["Liberty means responsibility. That is why most men dread it.", "George Bernard Shaw"],
      ["Take care to get what you like or you will be forced to like what you get.", "George Bernard Shaw"],
      ["The minority is sometimes right&#59 the majority always wrong.", "George Bernard Shaw"],
      ["In reading the lives of great men, I found that the first victory they won was over themselves...", "Harry S. Truman"],
      ["A pessimist is one who makes difficulties of his opportunities and an optimist is one who makes opportunities of his difficulties.", "Harry S. Truman"],
      ["The only things worth learning are the things you learn after you know it all.", "Harry S. Truman"],
      ["We either make ourselves miserable or we make ourselves strong. The amount of work is the same.", "Carlos Castaneda"],
      ["A man of knowledge lives by acting, not by thinking about acting.", "Carlos Castaneda"],
      ["When you wake up every day, you have two choices. You can either be positive or negative&#59 an optimist or a pessimist.", "Harvey Mackay"],
      ["Positive thinking is more than just a tagline. It changes the way we behave.", "Harvey Mackay"],
      ["I firmly believe that when I am positive, it not only makes me better, but it also makes those around me better.", "Harvey Mackay"],
      ["A great accomplishment shouldn't be the end of the road, just the starting point for the next leap forward.", "Harvey Mackay"],
      ["Ego stops you from getting things done and getting people to work with you.", "Harvey Mackay"],
      ["Deadlines aren't bad. They help you set priorities. They make you get going when you might not feel like it.", "Harvey Mackay"],
      ["When you have a dream that you can't let go of, trust your instincts and pursue it. But remember: Real dreams take work.", "Harvey Mackay"],
      ["Real dreams take work, They take patience, and sometimes they require you to dig down very deep. Be sure you're willing to do that.", "Harvey Mackay"],
      ["Most fears of rejection rest on the desire for approval from other people. Don't base your self-esteem on their opinions.", "Harvey Mackay"],
      ["Every morning brings new potential, but if you dwell on the misfortunes of the day before, you tend to overlook tremendous opportunities.", "Harvey Mackay"],
      ["You can win more friends with your ears than with your mouth.", "Harvey Mackay"],
      ["My Golden Rule of Networking is simple: Don't keep score.", "Harvey Mackay"],
      ["Amateurs wait for inspiration. The real pros get up and go to work.", "Harvey Mackay"],
      ["Good intentions aren't enough. People have good intentions when they set a goal to do something, but then they miss a deadline.", "Harvey Mackay"],
      ["It doesn't matter whether you are pursuing success in business, sports, the arts, or life in general: The bridge between wishing and accomplishing is discipline.", "Harvey Mackay"],
      ["The cost of praising someone is nil - but every psychological study shows the payoff is huge.", "Harvey Mackay"],
      ["Learn from the past, but don't live there. Build on what you know so that you don't repeat mistakes.", "Harvey Mackay"],
      ["Resolve to learn something new every day. Because every 24 hours, you have the opportunity to have the best day...", "Harvey Mackay"],
      ["Exploring how you could make a bad situation worse can sometimes tell you what not to do.", "Harvey Mackay"],
      ["Direct your energy toward achieving a goal, and tackle the problems with an emphasis on edging closer to a successful result.", "Harvey Mackay"],
      ["You learn how to be book smart in school, but you better not forget that you also need to be street smart.", "Harvey Mackay"],
      ["An optimist understands that life can be a bumpy road, but at least it is leading somewhere.", "Harvey Mackay"],
      ["Optimists learn from mistakes and failures, and are not afraid to fail again.", "Harvey Mackay"],
      ["Expect to make some mistakes when you try new and different approaches. Sometimes colossal failures lead to spectacular successes.", "Harvey Mackay"],
      ["Remember you're not entitled to anything. You have to earn your success every day, and you will make mistakes like everyone else.", "Harvey Mackay"],
      ["You have enemies? Good. That means you've stood up for something, sometime in your life.", "Winston Churchill"],
      ["Success is not final, failure is not fatal: it is the courage to continue that counts.", "Winston Churchill"],
      ["Success consists of going from failure to failure without loss of enthusiasm.", "Winston Churchill"],
      ["Courage is what it takes to stand up and speak&#59 courage is also what it takes to sit down and listen.", "Winston Churchill"],
      ["Attitude is a little thing that makes a big difference.", "Winston Churchill"],
      ["To improve is to change&#59 to be perfect is to change often.", "Winston Churchill"],
      ["The price of greatness is responsibility.", "Winston Churchill"],
      ["Continuous effort - not strength or intelligence - is the key to unlocking our potential.", "Winston Churchill"],
      ["We make a living by what we get, but we make a life by what we give.", "Winston Churchill"],
      ["All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.", "Winston Churchill"],
      ["If you're going through hell, keep going.", "Winston Churchill"],
      ["Never, never, never give up.", "Winston Churchill"],
      ["It is a mistake to look too far ahead. Only one link of the chain of destiny can be handled at a time.", "Winston Churchill"],
      ["A pessimist sees the difficulty in every opportunity&#59 an optimist sees the opportunity in every difficulty.", "Winston Churchill"],
      ["I am always ready to learn although I do not always like being taught.", "Winston Churchill"],
      ["Great and good are seldom the same man.", "Winston Churchill"],
      ["Sure I am of this, that you have only to endure to conquer.", "Winston Churchill"],
      ["Criticism may not be agreeable, but it is necessary. It calls attention to an unhealthy state of things.", "Winston Churchill"],
      ["There is no such thing as public opinion. There is only published opinion.", "Winston Churchill"],
      ["Everyone has his day and some days last longer than others.", "Winston Churchill"],
      ["Difficulties mastered are opportunities won.", "Winston Churchill"],
      ["This is no time for ease and comfort. It is time to dare and endure.", "Winston Churchill"],
      ["If you dwell on statistics you get shortsighted, if you aim for consistency, the numbers will be there at the end.", "Tom Seaver"],
      ["There are only two places in the league - first place and no place.", "Tom Seaver"]
    ];

    window.onload = setBoard;

    $(".btn").click(function (e) {
        e.preventDefault();
    }).mouseup(function () {
        $(this).blur();
    });

    $("#right").click(function () {
        var delay = 1000;
        quoteBoard.fadeOut(delay);
        setTimeout(function () {
            setBoard();
        }, delay);
        quoteBoard.fadeIn(delay);
    });

    function setBoard() {
        setRandomColor();
        changeQuote();
    }

    function setRandomColor() {
        var color = new RColor;
        var c1 = color.get(true, 0.65, 0.99);

        quoteText.css('color', c1);
        body.css('background-color', c1);
        buttons.css('background-color', c1);
        quoteIcon.css('color', c1);
    }

    var iterator = 0;
    var lastNumbers = [];
    function changeQuote() {

        var random;

        do {
            var wasUsed = false;
            
            random = Math.floor(Math.random() * quotes.length);

            for (var i = 0; i < lastNumbers.length; i++) {
                if (lastNumbers[i] == random) {
                    wasUsed = true;
                    break;
                }
            }

            if (!wasUsed) {
                lastNumbers[iterator] = random
                iterator = iterator >= 60 ? 0 : iterator + 1;
            }

        } while (wasUsed);

        quoteText.html(quotes[random][0]);
        authorText.html(quotes[random][1]);

        var tweet = "https://twitter.com/intent/tweet?text=\"" + quotes[random][0].replaceAll("&#59", "%3B") + "\"%20-%20" + quotes[random][1] + "&hashtags=quotes";
        tweet = adjustTweet(tweet);

        link.attr('href', tweet);
    }

    function adjustTweet(t) {

        if ((t.replaceAll("%3B", ";").replaceAll("%20", " ").length - 46) > 140) {

            t = t.substr(0, t.length - 16);
            if ((t.replaceAll("%3B", ";").replaceAll("%20", " ").length - 38) > 140) {
                t = t.substr(0, 182);

                if (t[t.length - 1] != '.' && t[t.length - 1] != '%3B' && t[t.length - 1] != '"') {

                    if (t[t.length - 2] == '.' || t[t.length - 2] == '%3B' || t[t.length - 2] == '"' || t[t.length - 1] == '-') {
                        t = t.substr(0, t.length - 1);
                    }
                    else if (t[t.length - 3] == '.' || t[t.length - 3] == '%3B' || t[t.length - 3] == '"' || t[t.length - 2] == '-') {
                        t = t.substr(0, t.length - 2);
                    }
                    else if (t[t.length - 3] == '-') {
                        t = t.substr(0, t.length - 3);
                    }
                    else if (t[t.length - 4] == '-') {
                        t = t.substr(0, t.length - 4);
                    }
                    else if (t[t.length - 4] == ' ') {
                        t = t.substr(0, t.length - 4) + "...";
                    }
                    else {
                        t = t.substr(0, t.length - 3) + "...";
                    }
                }
            }
        }

        return t;
    }

    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    $('.popup').click(function (event) {
        var width = 575,
          height = 400,
          left = ($(window).width() - width) / 2,
          top = ($(window).height() - height) / 2,
          url = this.href,
          opts = 'status=1' +
          ',width=' + width +
          ',height=' + height +
          ',top=' + top +
          ',left=' + left;

        window.open(url, 'twitter', opts);

        return false;
    });
});