<!-- For Notes within the build: -->
    - TODO: Need to compress images
        - https://tinypng.com/
        - sips -Z 1080 *.jpg
    - TODO: Explore Fade in animations: https://github.com/animate-css/animate.css/blob/9319952c1017ba84bc056a8545916d68168c1d53/source/fading_entrances/fadeIn.css

    - SEO Insights: https://pagespeed.web.dev/report?url=https%3A%2F%2Fwww.tpadilla.com%2F

    - Semantic HTML: 
        Resource: { https://www.freecodecamp.org/news/semantic-html5-elements/#:~:text=Semantic%20HTML%20elements%20are%20those,content%20that%20is%20inside%20them. }


<!-- Color Ideas: -->
    - Midnight Blue background and Isabelline text work (contrast Ratio is High - 15.57:1)
    - Isabelline background and black text, or midnight blue text
    - #000000 text and #FD91C3 background have Contrast 10.01:1 ratio, between medium and high
    - Isabelline buttons with Black text are good
    - Midnight blue buttons with #FD91C3 (8.51:1 medium/minimum) or Isabelline

    Original Palette:
        /* $background-secondary: #FD55AB; */ // Wild Strawberry
        /* $text-primary: #EB2188; */ // Deep Cerise


<!-- Stack: -->
    - Frontend: SCSS, React.js

<!-- Layout Components: -->
    <!-- TODO: Carousels need to have touch controls for user's to swipe! -->

    <!-- Sidebar.jsx -->
        - ***Can tab through, but tab isn't limited to the entire overlay
    


<!-- Pages Components: -->
    Landing.js -
        TODO: General layout components
        TODO: Slide-in / fade effects on scroll
        TODO: About section on desktop needs to be split like welcome section

    Sidebar.jsx -
        <!-- TODO: Styling -->
        <!-- TODO: Onclick of links, the component does not disappear -->

    

<!-- MISC Processes: -->
    <!-- Intersection Observers with react-intersection-observer: -->
    /*  1) Import the useInView() component from react-intersection-observer

        2) Add a ref to a DOM element (e.g. ref=headingRef ) 
        - This is the equivalent to using a useRef hook

        3) Create a variable that references the Intersection Observer's 'options' argument.  You pass this in to the useInView() as -> useInView(options)

        - options comprises of:
            1) threshold
            2) root
            3) rootMargin
            4) triggerOnce: true //only fires once
    
        */

    BreakPoints:

        - 420 px - max width
        - 760 px - max width
        - 1024 px - max width
        - 1300 px ? 