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
    }
];