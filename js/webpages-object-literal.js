const webObjectLiteral = [
    {
        title: 'Metagenre',
        type: 'showcase',
        images: [
            'metagenre_1',
            'metagenre_2',
            'metagenre_3'
        ],
        links: [{
            title: '',
            demo: 'http://18.225.9.206/',
            github: 'https://github.com/epourgh/metagenre'
        }],
        stacks: [
            {
                title: '',
                stack: [
                    {name: 'React', color: 'stack-frontend'},
                    {name: 'Hooks', color: 'stack-frontend'},
                    {name: 'Express/Node', color: 'stack-backend'},
                    {name: 'MySQL', color: 'stack-db'},
                    {name: 'Sass', color: 'stack-css'},
                    {name: 'AWS', color: 'stack-deployment'},
                    {name: 'Nginx', color: 'stack-deployment'}
                ]
            }
        ],
        content: [{
            description: [
                'Site for choosing genres and subgenres for games, books, and other entertainment mediums.',
                'Medium genres are compared to each other. Most similar mediums are reocommended to users on individual medium page.',
                'Users can also vote on which genre umbrella a subgenre belongs to.'
            ]
        }]
    },
    {
        title: 'News Feed',
        type: 'showcase',
        images: ['newsfeed_1'],
        links: [{
            title: '',
            demo: 'https://epourgh.github.io/news-feed/',
            github: 'https://github.com/epourgh/news-feed'
        }],
        stacks: [{
                    title: '',
                    stack: [
                        {name: 'JavaScript', color: 'stack-frontend'},
                        {name: 'Intersection Observer API', color: 'stack-frontend'},
                        {name: 'JSON', color: 'stack-frontend'},
                        {name: 'CSS Grids', color: 'stack-css'},
                        {name: 'CSS3', color: 'stack-css'},
                        {name: 'HTML', color: 'stack-html'},
                        {name: 'Github Pages', color: 'stack-deployment'}
                    ]
                }
        ],
        content: [{
            description: [
                'Replaced pagination with the Intersection Observer API to load news update during Covid-19.',
                'Use JavaScript classes to set and update what\'s being rendered on the page.',
                'Style inspired by News sites such as Washington Post and New Yorks Times.'
            ]
        }]
    },
    {
        title: 'Maps',
        type: 'showcase',
        images: [
            'maps_1',
            'maps_2'
        ],
        links: [{
            title: 'v3',
            demo: '',
            github: 'https://github.com/epourgh/Neighborhood-Map/tree/master/v3'
        }, {
            title: 'v2',
            demo: 'https://epourgh.github.io/Neighborhood-Map/v2/',
            github: 'https://github.com/epourgh/Neighborhood-Map/tree/master/v2'
        }],
        stacks: [{
                    title: 'version 3 Stack',
                    stack: [
                        {name: 'React', color: 'stack-frontend'},
                        {name: 'Express/Node', color: 'stack-backend'},
                        {name: 'MongoDB', color: 'stack-db'},
                        {name: 'Google Maps API', color: 'stack-api'},
                        {name: 'Wikipedia API', color: 'stack-api'},
                        {name: 'Sass', color: 'stack-css'}                    
                    ]
                },
                {
                    title: 'version 2 Stack',
                    stack: [
                        {name: 'Vanilla JavaScript', color: 'stack-frontend'},
                        {name: 'JSON', color: 'stack-frontend'},
                        {name: 'CSS3', color: 'stack-css'}                    
                    ]
                },
                {
                    title: 'version 1 Stack',
                    stack: [
                        {name: 'Knockout.js Framework', color: 'stack-frontend'},
                        {name: 'JQuery', color: 'stack-frontend'},
                        {name: 'AJAX', color: 'stack-frontend'},
                    ]
                }
        ],
        content: [{
            description: [
                'Using Google Maps, placed map markers around the city of Houston of specific locations recommended for locals and tourists to visit.',
                'Left of map is a filter functionality of the locations, and each marker displays Wikipedia information when clicked.'
            ]
        }]
    },
    {
        title: 'USA Auto Seat Covers',
        type: 'normal',
        images: ['usa-auto'],
        links: [{
            title: '',
            demo: 'http://usaautoseatcover.com/',
            github: 'https://github.com/epourgh/Car-Seat-eBay-Catalog'
        }],
        stacks: [{
                    title: '',
                    stack: [
                        {name: 'PHP', color: 'stack-backend'},
                        {name: 'MySQL', color: 'stack-db'},
                        {name: 'Heroku', color: 'stack-deployment'},
                        {name: 'HTML5', color: 'stack-html'},
                        {name: 'CSS3', color: 'stack-css'},
                        {name: 'Bootstrap', color: 'color: stack-css'}
                    ]
                }
        ],
        content: [
            {
                description: [
                    'eBay catalog placed into MySQL workbench, displayed onto webpage.',
                    'PHP used to include building blocks of webpage, including how items are displayed without manually editing HTML.'
                ]
            }
        ]
    },
    {
        title: 'Item Catalog',
        type: 'normal',
        images: ['catalog'],
        links: [{
            title: '',
            demo: 'http://ec2-52-14-27-203.us-east-2.compute.amazonaws.com/catalog/',
            github: 'https://github.com/epourgh/Item-Catalog'
        }],
        stacks: [{
                    title: '',
                    stack: [
                        {name: 'Python', color: 'stack-backend'},
                        {name: 'Flask', color: 'stack-backend'},
                        {name: 'AWS', color: 'stack-deployment'},
                        {name: 'Apache', color: 'stack-deployment'},
                        {name: 'Google OAUTH API', color: 'stack-api'},
                        {name: 'HTML5', color: 'stack-html'},
                        {name: 'CSS3', color: 'stack-css'}
                    ]
                }
        ],
        content: [
            {
                description: [
                    'Backend catalog site with Google account login functionality. Ensures high security authentication.',
                    'User can create categories and a list of items within, with Google icons and names indicating which user created the content.'
                ]
            }
        ]
    },
    {
        title: 'Restaurant',
        type: 'normal',
        images: ['restaurant-site'],
        links: [{
            title: '',
            demo: 'https://epourgh.github.io/Restaurant/',
            github: 'https://github.com/epourgh/Restaurant'
        }],
        stacks: [{
                    title: '',
                    stack: [
                        {name: 'JavaScript', color: 'stack-frontend'},
                        {name: 'React', color: 'stack-frontend'},
                        {name: 'JQuery', color: 'stack-frontend'},
                        {name: 'HTML5', color: 'stack-html'},
                        {name: 'CSS3', color: 'stack-css'},
                        {name: 'Bootstrap', color: 'stack-css'}
                    ]
                }
        ],
        content: [
            {
                description: [
                    'Single page display for restaurant with menus for Restaurant\'s menu, operating hours, and location.',
                    'With user first approach design in mind, simple and easy to use interface.'
                ]
            }
        ]
    },
    {
        title: 'A to Z One Day',
        type: 'normal',
        images: ['a-z'],
        links: [{
            title: '',
            demo: 'http://a-to-z-one-day.com/',
            github: 'https://github.com/epourgh/Car-Seat-eBay-Catalog/tree/master/a-to-z'
        }],
        stacks: [{
                    title: '',
                    stack: [
                        {name: 'Photoshop', color: 'stack-adobe'},
                        {name: 'Illustrator', color: 'stack-adobe'},
                        {name: 'Illustrator', color: 'stack-adobe'},
                        {name: 'JQuery', color: 'stack-frontend'},
                        {name: 'HTML5', color: 'stack-html'},
                        {name: 'CSS3', color: 'stack-css'},
                        {name: 'Bootstrap', color: 'stack-css'}
                    ]
                }
        ],
        content: [
            {
                description: [
                    'Designed logo and category images with the use of Adobe Creative Suite; Photoshop and Illustrator.',
                    'Single page navigation smooth scrolling going from section to section.'
                ]
            }
        ]
    },
    {
        title: 'Calendar',
        type: 'normal',
        images: ['calendar'],
        links: [{
            title: '',
            demo: '',
            github: 'https://github.com/epourgh/Calendar'
        }],
        stacks: [{
                    title: '',
                    stack: [
                        {name: 'PHP', color: 'stack-backend'},
                        {name: 'JavaScript', color: 'stack-frontend'},
                        {name: 'CSS', color: 'stack-css'}
                    ]
                }
        ],
        content: [
            {
                description: [
                    'Calendar for typing what you have done during the day, or are able to be around for.',
                    'Design with CSS, easy to read and sleek design.',
                    'PHP used to get calendar data and loop data into the template.'
                ]
            }
        ]
    },
    {
        title: 'Houston Map Filter',
        type: 'normal',
        images: ['google-maps'],
        links: [{
            title: '',
            demo: 'https://epourgh.github.io/Neighborhood-Map/v1/',
            github: 'https://github.com/epourgh/Neighborhood-Map/v1'
        }],
        stacks: [{
                    title: '',
                    stack: [
                        {name: 'JavaScript', color: 'stack-frontend'},
                        {name: 'KnockOut.js', color: 'stack-frontend'},
                        {name: 'JQuery', color: 'stack-frontend'},
                        {name: 'Google Maps API', color: 'stack-api'},
                        {name: 'Wikipedia API', color: 'stack-api'},
                        {name: 'CSS', color: 'stack-css'},
                        {name: 'HTML', color: 'stack-html'}
                    ]
                }
        ],
        content: [
            {
                description: [
                    'Using Google Maps, placed map markers around the city of Houston of specific locations recommended for locals and tourists to visit.',
                    'Left of map is a filter functionality of the locations, and each marker displays Wikipedia information when clicked.'
                ]
            }   
        ]
    }
];