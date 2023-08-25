export const filterData =[{name:"Fast Food", image: require('../assets/fastfood.png, id:"0"')},
                    {name:"Rice",image:require("../assets/wali.png"),id:"1"},
                    {name:"Ugali",image:require("../assets/ugali.png"),id:"2"},
                    {name:"Chicken",image:require("../assets/kuku.png"),id:"3"},
                    {name:"Fruits",image:require("../assets/fruits.png"),id:"4"},
                    {name:"Burger",image:require("../assets/burger.png"),id:"5"},
                    {name:"Drinks",image:require("../assets/drinks.png"),id:"5"},                
                ];



export const filterData2 = [{name:"Fast food",image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBagLcygVqUDTqgPZjmbScK0hJ41nsYP2M7mfwkZdHQ&s' , id:"0"},
                {name:"Burgers",image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEBBB96pp9aN07W4J92br17Y9P47PlObqNjp5Gs-c&s',id:"1"},
                {name:"Salads",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8kKbAtpoA5T3dr1YubwfePUCDupQoF9mFA&usqp=CAU",id:"2"},
                {name:"Hotdog",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3IQox5mFzMn1O_GXNdnOtV8AgUW6JPplAA&usqp=CAU",id:"3"},
                {name:"Chinese",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeoRn19Ft6c3jipbZBupL8OikCsMtSZ7Nsg&usqp=CAU",id:"4"},
                {name:"Mexican",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEX9l1_BnVkn2cJztmpgHiiVtszA3rIa_5A&usqp=CAU",id:"5"},  
                {name:"Sea food",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwt-loupR8MZ9IedryHna7vr-X6PmUua0Uw&usqp=CAU",id:"6"},
                {name:"Chinese Food",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeoRn19Ft6c3jipbZBupL8OikCsMtSZ7Nsg&usqp=CAU",id:"7"},
                {name:"Mexican pie",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78YZo0bV7vO5aBWh7-unHlnCDQ-jGQl51Cg&usqp=CAU",id:"8"},  
                {name:"Ocean dish",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwk3xxu-0KK1AfmZDj08o8cl1k4u5wGiykwg&usqp=CAU",id:"9"},
                ];




export const restaurantsData = [
                    {restaurantName:"Cafeteria 1", farAway:"11.3",
                    businessAddress:"University Rd, Dar es Salaam", images:require("../assets/cafe1.jpg"),
                    averageReview:3.4,numberOfReview:37,coordinates:{lat:-26.1888612, lng:28.246326}, discount:10,deliveryTime:15,
                    collectTime:5,foodType:"Rice, Ugali, Drinks..." ,
                    productData:[{name:"Rice beans", price:1200.00,image:require("../assets/walibeans.jpg")},
                    {name:"Ugali Kuku", price:2500.00,image:require("../assets/ugalikuku.jpg")},
                    {name:"Ugali Samaki", price:2300.00,image:require("../assets/ugalifish.jpg")},
                        ],
                        id:0},
                    
                    {restaurantName:"Cafeteria 2", farAway:"11.3",
                    businessAddress:"University Rd, Dar es Salaam", images:require("../assets/cafe2.jpg"),
                    averageReview:4.2,numberOfReview:53,coordinates:{lat:-26.1875214, lng:28.398346}, discount:10,deliveryTime:10,
                    collectTime:5,foodType:"Rice, Ugali, Drinks..." ,
                    productData:[{name:"Rice beans", price:1200.00,image:require("../assets/walibeans.jpg")},
                    {name:"Nyama Choma", price:2000.00,image:require("../assets/nyamachoma.jpg")},
                    {name:"Supu", price:1500.00,image:require("../assets/supusupu.jpg")},
                        ],
                        id:1},

                    {restaurantName:"Hill Park", farAway:"14.3",
                    businessAddress:"University Rd, Dar es Salaam", images:require("../assets/hillpark.jpg"),
                    averageReview:4.0,numberOfReview:37,coordinates:{lat:-26.1765612, lng:28.246420}, discount:7,deliveryTime:17,
                    collectTime:5,foodType:"Rice, Ugali, Drinks..." ,
                    productData:[{name:"Nyama Choma", price:3500.00,image:require("../assets/nyamachoma.jpg")},
                    {name:"Ugali Kuku", price:3500.00,image:require("../assets/ugalikuku.jpg")},
                    {name:"Supu", price:3500.00,image:require("../assets/soupsoup.jpg")},
                        ],
                        id:2},

                    {restaurantName:"Yombo Cafeteria", farAway:"16.5",
                    businessAddress:"University Rd, Dar es Salaam", images:require("../assets/yombocafe.jpg"),
                    averageReview:3.7,numberOfReview:37,coordinates:{lat:-26.1888612, lng:28.246326}, discount:10,deliveryTime:25,
                    collectTime:7,foodType:"Rice, Ugali, Drinks..." ,
                    productData:[{name:"Rice beans", price:1200.00,image:require("../assets/walibeans.jpg")},
                    {name:"Ugali Kuku", price:2500.00,image:require("../assets/ugalikuku.jpg")},
                    {name:"Ugali Samaki", price:2000.00,image:require("../assets/ugalifish.jpg")},
                        ],
                        id:3}]


                        export const productData = [{name:"Nyama Choma", price:3500.00,image:require("../assets/nyamachoma.jpg"),
                        details:"100% fresh beef as hot and delicious",id:0},
                          {name:"Supu", price:3500.00,image:require("../assets/soupsoup.jpg"),
                          details:"Hot Hot Soup",id:1},
                          {name:"Chicken", price:2500.00,image:require("../assets/kuku.png"),details:"For chicken lovers",id:2},
                          
                          {name:"Nyama Choma", price:3500.00,image:require("../assets/nyamachoma.jpg"),
                        details:"100% fresh beef as hot and delicious",id:3},
                          {name:"Supu", price:3500.00,image:require("../assets/soupsoup.jpg"),
                          details:"Hot Hot Soup",id:4},
                          {name:"Chicken", price:2500.00,image:require("../assets/kuku.png"),details:"For chicken lovers",id:5},,
                        
                            ];


                            export const menuData = [
    
                                {title:"BEEF",special:false,key:0, },
                                {title:"CHICKEN", special:false,key:1},
                                {title:"VEGGIE BURGER",special:false ,key:2},
                                {title:"FRIES & CORN",special:false ,key:3},
                                {title:"SALADS",special:false,key:4},
                                {title:"HAPPY MEALS",special:false,key:5},
                                {title:"SHARE BOX",special:false,key:6},
                                {title:"MILKSHAKES",special:false,key:7},
                                {title:"COLD DRINKS",special:false,key:8},
                                {title:"DESSERTS",special:false,key:9},
                                {title:"HOT DRINKS",special:false,key:10},
                              
                                ] ;
                              
                              export const specialData =[
                                {title:"LIMITED OFFER",key:0},
                                {title:"GO CHILLI",key:1},
                                {title:"GO SAUCE",key:2},
                                {title:"CAF3 DELUXE PROMO",key:3},
                              ];

                              export const menu = [
                                { key: 1, title: 'BEEF' },
                                { key: 2, title: 'CHICKEN' },
                                { key: 3, title: 'VEGGIE BURGER' },
                                { key: 4, title: 'SHARE BOX' },
                                { key: 5, title: 'Happy Meals' },
                                { key: 6, title: 'Fries' },
                                { key: 7, title: 'Sides' },
                                { key: 8, title: 'Milkshakes' },
                              ]


                               export const menuDetailedData =[
            { 
              meal:"Nyama Choma",
              price:3500.00,
              image:require("../assets/nyamachoma.jpg"),
              details:"100% fresh beef as hot and delicious",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                              [{name:"Jalapeno Dip",price:1500.00,checked:false,id:10},{name:"Sweet & Sour Dip",price:1200.00,checked:false ,id:11},{name:'BBQ Dip',price:2000.00 ,checked:false,id:12},
                              ],
        
                              [{name:"Coke",price:1200.00 ,checked:false,id:13 },{name:"Fanta Orange",price:1200.00 ,checked:false,id:14},{name:'Sprite',price:1200.00,checked:false ,id:15},
                              {name:'Coke Zero',price:1200.00 ,checked:false,id:16},{name:'Novida',price:1200.00 ,checked:false,id:17},{name:'Apple Juice',price:1200.00 ,checked:false,id:18},
                              {name:'Strawberry Shake',price:2000.00 ,checked:false,id:19},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:20},
                              ],
        
                              [{name:"Coke",price:1200.00,checked:false ,id:21},{name:"Fanta Orange",price:1200.00,checked:false ,id:22},{name:'Sprite',price:1200.00,checked:false ,id:23},
                              {name:'Coke Zero',price:1200.00 ,checked:false,id:24},{name:'Novida',price:1200.00 ,checked:false,id:25},{name:'Apple Juice',price:1200.00,checked:false ,id:26},
                              {name:'Strawberry Shake',price:2000,checked:false ,id:27},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:28},{name:'Vanilla Shake',price:2000.00,checked:false,id:29},
                                ],
                                  
                              [{name:"debonairs sauce",price:1500.00 ,checked:false,id:30},{name:"BBQ Sauce",price:1000.00,checked:false ,id:31},{name:'Tikka Sauce',price:1500.00,checked:false ,id:32},
                              ],

                              [
                                {name:"Coke",price:1200.00,checked:false ,id:33},{name:"Fanta Orange",price:1200.00,checked:false ,id:34},{name:'Sprite',price:1200.00,checked:false ,id:35},
                                {name:'Coke Zero',price:1200.00 ,checked:false,id:36},{name:'Novida',price:1200.00 ,checked:false,id:37},{name:'Apple Juice',price:1200.00,checked:false ,id:38},
                                {name:'Strawberry Shake',price:2000,checked:false ,id:39},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:40},{name:'Vanilla Shake',price:2000.00,checked:false,id:41},
                                  ],
                                ],
                minimum_quatity:[2,1,1,null,null],
                counter:[0,0,0,0,0],
                required: [true,true,true,false,false],              
                id:0
              },

              { 
                meal:"Ugali Kuku", 
                price:2500.00,
                image:require("../assets/ugalikuku.jpg"),
                details:"Ugali plus Chicken fresh out of the pan",
                preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                preferenceData: [
          
                  [{name:"Jalapeno Dip",price:1500.00,checked:false,id:0},{name:"Sweet & Sour Dip",price:1200.00,checked:false ,id:1},{name:'BBQ Dip',price:2000.00 ,checked:false,id:2},
                              ],
        
                              [{name:"Coke",price:1200.00 ,checked:false,id:0 },{name:"Fanta Orange",price:1200.00 ,checked:false,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                              {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00 ,checked:false,id:5},
                              {name:'Strawberry Shake',price:2000.00 ,checked:false,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},
                              ],
        
                              [{name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                              {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                              {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                                ],
                                  
                              [{name:"debonairs sauce",price:1500.00 ,checked:false,id:0},{name:"BBQ Sauce",price:1000.00,checked:false ,id:1},{name:'Tikka Sauce',price:1500.00,checked:false ,id:2},
                              ],

                              [
                                {name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                                {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                                {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                                  ],
                    ],
                    minimum_quatity:[2,1,2,null,null],
                    counter:[0,0,0,0,0],
                    required: [true,true,true,false,false], 
                    id:1
                },

                {
                    meal:"Ugali Kuku",
                    price:2500.00,
                    image:require("../assets/ugalikuku.jpg"),
                    details:"",
                    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                    preferenceData: [
              
                        [{name:"Jalapeno Dip",price:1500.00,checked:false,id:0},{name:"Sweet & Sour Dip",price:1200.00,checked:false ,id:1},{name:'BBQ Dip',price:2000.00 ,checked:false,id:2},
                    ],

                    [{name:"Coke",price:1200.00 ,checked:false,id:0 },{name:"Fanta Orange",price:1200.00 ,checked:false,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                    {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00 ,checked:false,id:5},
                    {name:'Strawberry Shake',price:2000.00 ,checked:false,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},
                    ],

                    [{name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                    {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                    {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                      ],
                        
                    [{name:"debonairs sauce",price:1500.00 ,checked:false,id:0},{name:"BBQ Sauce",price:1000.00,checked:false ,id:1},{name:'Tikka Sauce',price:1500.00,checked:false ,id:2},
                    ],

                    [
                      {name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                      {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                      {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                        ],
                    ],
        
                    minimum_quatity:[2,1,1,null,null],
                    counter:[0,0,0,0,0],
                    required: [true,true,true,false,false],   
                  id:2
                },

                {
                    meal:"Supu",
                    price:3500.00,
                    image:require("../assets/soupsoup.jpg"),
                    details:"McFeast features two 100% fresh beef burger patties that are hot",
                    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                    preferenceData: [
              
                        [{name:"Jalapeno Dip",price:1500.00,checked:false,id:0},{name:"Sweet & Sour Dip",price:1200.00,checked:false ,id:1},{name:'BBQ Dip',price:2000.00 ,checked:false,id:2},
                    ],

                    [{name:"Coke",price:1200.00 ,checked:false,id:0 },{name:"Fanta Orange",price:1200.00 ,checked:false,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                    {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00 ,checked:false,id:5},
                    {name:'Strawberry Shake',price:2000.00 ,checked:false,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},
                    ],

                    [{name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                    {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                    {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                      ],
                        
                    [{name:"debonairs sauce",price:1500.00 ,checked:false,id:0},{name:"BBQ Sauce",price:1000.00,checked:false ,id:1},{name:'Tikka Sauce',price:1500.00,checked:false ,id:2},
                    ],

                    [
                      {name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                      {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                      {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                        ],
                    ],
              
                    minimum_quatity:[2,1,1,null,null],
                    counter:[0,0,0,0,0],
                    required: [true,true,true,false,false],    
                  id:3
                },

                { 
              
                    meal:"Burger",
                    price:4000.00,
                    image:require("../assets/burger.png"),
                    details:"Two 100% fresh beef burger patties that are hot,deliciously",
                    
                    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                    
                    preferenceData: [
              
                        [{name:"Jalapeno Dip",price:1500.00,checked:false,id:0},{name:"Sweet & Sour Dip",price:1200.00,checked:false ,id:1},{name:'BBQ Dip',price:2000.00 ,checked:false,id:2},
                    ],

                    [{name:"Coke",price:1200.00 ,checked:false,id:0 },{name:"Fanta Orange",price:1200.00 ,checked:false,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                    {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00 ,checked:false,id:5},
                    {name:'Strawberry Shake',price:2000.00 ,checked:false,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},
                    ],

                    [{name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                    {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                    {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                      ],
                        
                    [{name:"debonairs sauce",price:1500.00 ,checked:false,id:0},{name:"BBQ Sauce",price:1000.00,checked:false ,id:1},{name:'Tikka Sauce',price:1500.00,checked:false ,id:2},
                    ],

                    [
                      {name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                      {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                      {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                        ],
                        ],
                
                      minimum_quatity:[2,1,1,null,null],
                      counter:[0,0,0,0,0],
                      required: [true,true,true,false,false],     
                      id:4
                    },

                    { 
                        meal:"Chicken",
                        price:2500.00,
                        image:require("../assets/kuku.png"),
                        details:"McFeast features two 100% fresh beef burger patties that are hot",
                        preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                        preferenceData: [
                  
                            [{name:"Jalapeno Dip",price:1500.00,checked:false,id:0},{name:"Sweet & Sour Dip",price:1200.00,checked:false ,id:1},{name:'BBQ Dip',price:2000.00 ,checked:false,id:2},
                        ],
    
                        [{name:"Coke",price:1200.00 ,checked:false,id:0 },{name:"Fanta Orange",price:1200.00 ,checked:false,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                        {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00 ,checked:false,id:5},
                        {name:'Strawberry Shake',price:2000.00 ,checked:false,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},
                        ],
    
                        [{name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                        {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                        {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                          ],
                            
                        [{name:"debonairs sauce",price:1500.00 ,checked:false,id:0},{name:"BBQ Sauce",price:1000.00,checked:false ,id:1},{name:'Tikka Sauce',price:1500.00,checked:false ,id:2},
                        ],
    
                        [
                          {name:"Coke",price:1200.00,checked:false ,id:0},{name:"Fanta Orange",price:1200.00,checked:false ,id:1},{name:'Sprite',price:1200.00,checked:false ,id:2},
                          {name:'Coke Zero',price:1200.00 ,checked:false,id:3},{name:'Novida',price:1200.00 ,checked:false,id:4},{name:'Apple Juice',price:1200.00,checked:false ,id:5},
                          {name:'Strawberry Shake',price:2000,checked:false ,id:6},{name:'Chocolate Shake',price:2000.00 ,checked:false,id:7},{name:'Vanilla Shake',price:2000.00,checked:false,id:8},
                            ],
                            ],
                                    minimum_quatity:[2,1,1,null,null],
                                    counter:[0,0,0,0,0],
                                    required: [true,true,true,false,false],              
                                    id:5
                                  },
                                
                                ];
                      