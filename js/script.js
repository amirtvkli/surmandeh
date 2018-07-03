

// fullpagejs
$(document).ready(function() {
    $('#fullpage').fullpage({
    //Navigation
    lockAnchors: false,
    anchors:['welcome', 'intro', 'C','contact'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['خانه', 'معرفی', 'بیشتر','تماس با ما'],
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
    loopHorizontal: false,
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
    animateAnchor: false,
    recordHistory: false,
    
    //Design
    controlArrows: false,
    verticalCentered: false,
    sectionsColor : ['#ffffff00', '#fff','#fff'],
    paddingTop: '0em',
    paddingBottom: '0px',
    fixedElements: '#header',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    
    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.page',
    
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
  