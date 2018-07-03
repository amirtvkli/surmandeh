// fullpagejs
$(document).ready(function() {
  $('#fullpage').fullpage({
  //Navigation
  menu: '#menu',
  lockAnchors: false,
  anchors:['welcome', 'intro', 'thirdPage','contact'],
  navigation: false,
  navigationPosition: 'right',
  navigationTooltips: ['firstSlide', 'secondSlide'],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',
  
  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,
  bigSectionsDestination: null,
  
  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,
  
  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor : ['#fff', '#4addff','#fff'],
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  
  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',
  
  lazyLoading: false,
  
  //events
  onLeave: function(origin, destination, direction){},
  afterLoad: function(origin, destination, direction){},
  afterRender: function(){},
  afterResize: function(){width, height},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(section, origin, destination, direction){},
  onSlideLeave: function(section, origin, destination, direction){}
  });
  
  //methods
  $.fn.fullpage.setAllowScrolling(true);
});


// typewriter
$(document).ready(() => {  
    // Initialize Typewriter effect for Our Slogans
    let typewriter = new Typewriter(document.getElementById('fields'), {
      loop: true,
      typingSpeed: 50,
      deleteSpeed: 10,
      cursor: ''
    });
  
    // Typewriter Sequence
    typewriter.typeString('IoT')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Artificial Intelligence')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Machine Learning')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Big Data')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Cloud Computing')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Data Processing')
        .pauseFor(2500)
        .deleteAll()
        .start();
  });