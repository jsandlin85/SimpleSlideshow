
//--------------------------
//
//  SlideShow.js
//
//  ©2014 Jeremy Sandlin
//
//--------------------------


/**
* Main SlideShow constructor.
*
* @param {String} Unique ID of the container where the SlideShow will go
*/

function Slideshow (container)
{

    // Variables
    this.$container = $(container);
    this.images = [];
    this.captions = [];

    // Functions

    /*
    * Call this to initialize the SlideShow 
    */
    this.init = function(){

        this.parseContainer($container);

    };

    /*
    * Parses the given container for image urls and captions
    * and stores them in the images and captions arrays respectively
    */
    this.parseContainer = function(container){

        var imageArray;
        var captionArray;

        // Parsing code goes here and fills imageArray and captionArray with
        // strings representing the image urls and caption HTML respectively.

        images = imageArray;
        captions = captionArray;

    };

}