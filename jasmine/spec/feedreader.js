
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This test suite contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined & not empty',function() {
            if (typeof allFeeds === 'undefined') {
                throw new Error('This variable is not defined')
            } else {
                for(const feed of allFeeds){
                    expect(feed.url).toBeDefined();
                    expect(feed.url.length).not.toEqual(0);
                }
            }
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name defined & not empty',function() {
            if (typeof allFeeds === 'undefined') {
                throw new Error('This variable is not defined')
            } else {
                for(const feed of allFeeds){
                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toEqual(0);
                }
            }
        });
    });


    describe('The menu',function() {
        let menuIcon = document.querySelector(".menu-icon-link")
        let menuElement = document.querySelector("body");

        /* This test ensures the menu element is hidden by default.*/
        it('element is hidden by default',function () {
            expect(menuElement.classList.contains('menu-hidden')).toBe(true);
        })

        /* This test ensures that the menu changes visibility when the menu icon is clicked.*/
         it('display when clicked',function () {
            menuIcon.click();
            expect(menuElement.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(menuElement.classList.contains('menu-hidden')).toBe(true);
        })
    })

        

         

    describe('Initial Entries',function() {
        let feedContainer = document.querySelector(".feed")
        beforeEach(function(done) {
            loadFeed(0,function() {
                done();
            })
        })
        /* This test ensures that when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.*/
        it('At least a single .entry element within the .feed container',function(done) {
            expect(document.querySelector('.feed').querySelectorAll('.entry').length).toBeGreaterThan(0);
            // expect(feedContainer.children.length).not.toBeLessThan(1);
            done();
        })
    })
        

    describe('New Feed Selection',function() {
        let feedContainer = document.querySelector(".feed")
        let currentLoadFeed = [], newLoadFeed = [];
        let minItemsLength =0, index = 1;
        beforeEach(function(done) {
            loadFeed(0,function() {                
                $('.feed').children('a').each(function () {
                    currentLoadFeed.push(this.children["0"].children["0"].innerText); 
                });
                // ensures that allfeeds[index] value is within the 'allfeeds' array boundary
                debugger;
                if (index>=allFeeds.length) {
                    throw new Error('Index value entered is out-of-bound the array access')
                }else{
                    loadFeed(index,function() {                
                        $('.feed').children('a').each(function () {
                            newLoadFeed.push(this.children["0"].children["0"].innerText); 
                        });
                        done();
                        })
                    }
            })
        })
        /* This test ensures that when a new feed is loaded by the loadFeed function, the content actually changes.*/
        it('content actually changes',function(done) {
            minItemsLength = Math.min(currentLoadFeed.length,newLoadFeed.length)
            for (i = 0; i < minItemsLength; i++) {
                expect(currentLoadFeed[i]).not.toEqual(newLoadFeed[i]); // compares every single article of the new loaded feed with the old one to ensure the page has loaded different new contents
            }
            done();
        })
    })
        
}());
