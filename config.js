var config = {
    style: 'mapbox://styles/atlantis32/cm82gao6n011k01qu1g3fa1b9',
    accessToken: 'pk.eyJ1IjoiYXRsYW50aXMzMiIsImEiOiJjbTZyYng3b3YyMnJtMmpweXZ6em1vZnl5In0.bx7A_TQmSoReKSdHT6ua8g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: "Which Corners of HDB Singapore Are MRT-Free?",
    subtitle: "Exploring the Gaps in Singapore's Rapid Public Transport Coverage",
    byline: 'By Chen, Yifan-Atlantis',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'The story of MRT System in Singapore',
            description: "Central to the Singapore's land transportation strategy is to develop an extensive rapid transit network to provide quality public transport services and maximize accessibility for commuters to key nodes of employment, housing, leisure and other social activities.<br><br> Singapore’s total population grew from over 1.9 million in 1966 to more than 2.7 million in 1986, according to figures from the Singapore Department of Statistics.<br><br>At that time,People need to hang their bodies on that sardine-packed, moving bus, clinging to the metal pole next to the open door. <a href='https://www.straitstimes.com/featured/sg60/the-people-who-keep-singapore-mrt-system-moving/'> <strong>Read more</strong></a> <br><br><img src='images/legend1.png' style='height:100%;width:100px;'></img>",
            //description: 'An SMU study published in 2020 reveals that 10.4% of Singaporeans struggle to get sufficient, safe and nutritious food. <a href="https://www.straitstimes.com/singapore/10-of-singaporeans-struggle-to-get-sufficient-safe-and-nutritious-food-smu-study"> <strong>Read more</strong></a> <br><br> In this visualization, we are interested in understanding where this phenomenon is happening geographically. This first map shows the location of supermarkets and hawker centers.<br><br><img src="images/legend1.png" style="height:100%;width:100px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MRT-trainstationexit-7fu1eh',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-1fewz8 (1)',
                    opacity: 1               
                },
                {
                    layer: 'different-hdb-d28f8z',
                    opacity: 0                
                },
                {
                    layer: 'isochrones2-0qhp2i',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'MRT-trainstationexit-7fu1eh',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-1fewz8 (1)',
                    opacity: 1               
                },
                {
                    layer: 'different-hdb-d28f8z',
                    opacity: 0               
                },
                {
                    layer: 'isochrones2-0qhp2i',
                    opacity: 0.3
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Access from MRT',
            description: 'When calculating the 5-minute and 10-minute isochronous walking circles from each MRT station entrance, we can begin to understand where access to the bus rapid transit system from HDB flats is still limited.<br><br><img src="images/legend2.png" style="height:100%; width:250px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MRT-trainstationexit-7fu1eh',
                    opacity: 0.1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-1fewz8 (1)',
                    opacity: 0.1               
                },
                {
                    layer: 'isochrones2-0qhp2i',
                    opacity: 1                
                },
                {
                    layer: 'different-hdb-d28f8z',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'MRT-trainstationexit-7fu1eh',
                    opacity: 0.2
                },
                {
                    layer: 'resale-hdb-jan-june-2021-1fewz8 (1)',
                    opacity: 0.2               
                },
                {
                    layer: 'isochrones2-0qhp2i',
                    opacity: 1                
                },
                {
                    layer: 'different-hdb-d28f8z',
                    opacity: 0.3
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Kougang',
            description: 'Our mapping work tells us that Kougang is one of the most vulnerable areas in terms of pedestrian coverage regarding rapid transit options.<br><br><img src="images/legend3.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.88385, 1.36856],
                zoom: 14.4,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MRT-trainstationexit-7fu1eh',
                    opacity: 0.1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-1fewz8 (1)',
                    opacity: 0.1               
                },
                {
                    layer: 'isochrones2-0qhp2i',
                    opacity: 0.8                
                },
                {
                    layer: 'different-hdb-d28f8z',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'MRT-trainstationexit-7fu1eh',
                    opacity: 0.3
                },
                {
                    layer: 'resale-hdb-jan-june-2021-1fewz8 (1)',
                    opacity: 0.3               
                },
                {
                    layer: 'isochrones2-0qhp2i',
                    opacity: 0.3                
                },
                {
                    layer: 'different-hdb-d28f8z',
                    opacity: 0.8
                }
            ]  
        },
        {
            id: 'four-container',
            alignment: 'fully',
            hidden: false,
            title: 'Summary',
            description: 'This data analysis map identifies areas in Singapore that are not currently covered by the MRT network.<br><br>By visualizing the distribution of MRT stations and their surrounding coverage areas, the map highlights neighborhoods that are not within easy access to rapid transit systems. Areas that are outside these defined walking distances are considered underserved by the MRT, suggesting potential areas for future infrastructure development to improve public transport accessibility in Singapore.<br><br>This map serves as a tool to identify underserved regions, which could benefit from public transportation expansion. ',
            location: {
                center: [103.88385, 1.36856],
                zoom: 14.4,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MRT-trainstationexit-7fu1eh',
                    opacity: 0.2
                },
                {
                    layer: 'resale-hdb-jan-june-2021-1fewz8 (1)',
                    opacity: 0.2              
                },
                {
                    layer: 'isochrones2-0qhp2i',
                    opacity: 0.8                
                },
                {
                    layer: 'different-hdb-d28f8z',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'MRT-trainstationexit-7fu1eh',
                    opacity: 0.3
                },
                {
                    layer: 'resale-hdb-jan-june-2021-1fewz8 (1)',
                    opacity: 0.3               
                },
                {
                    layer: 'isochrones2-0qhp2i',
                    opacity: 0.3                
                },
                {
                    layer: 'different-hdb-d28f8z',
                    opacity: 0.8
                }
    ]
};
