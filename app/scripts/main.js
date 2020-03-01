console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });


// Get the Sequence element
var sequenceElement = document.getElementById('sequence');

var options = {
  // Place your Sequence options here to override defaults
  // See: https://sequencejs.com/documentation/#options
  preloader: true,
  animateCanvas:true,
  keyNavigation: true,
  fadeStepWhenSkipped: true,
  reverseWhenNavigatingBackwards: true,
  autoPlay:true,
  fallback: {
    speed: 300
  }

}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);
