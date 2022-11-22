function getCopy(initObj) {
    let Obj = {};
    Obj = {... initObj};
    return Obj;
}

function between(x, min, max){
    return x >= min && x <= max;
}

const app = new Vue({
    el:'#app',
    data:{
        forms:{
            price:{
                one:null,
                two:null,
            },
            square:[                
            ],
            equipment:[
                1,
                2,
                3,
                4,
                5,                
            ]
        },
        cards:{
            initial:[
                {
                    sizes:'100х125х180',
                    square:'1,13',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:250,
                    view:'Комфорт',
                    imgUrl:'img/card_img2.svg',
                },
                {
                    sizes:'90х70х180',
                    square:'0,63',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:100,
                    view:'Эконом',
                    imgUrl:'img/card_img1.svg',
                },
                {
                    sizes:'90х100х180',
                    square:'0,90',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:200,
                    view:'Эконом плюс',
                    imgUrl:'img/card_img3.svg',
                },
                {
                    sizes:'125х125х180',
                    square:'1,56',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:350,
                    view:'Сьют',
                    imgUrl:'img/card_img4.svg',
                },
                {
                    sizes:'160х160х180',
                    square:'2,56',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:500,
                    view:'Люкс',
                    imgUrl:'img/card_img5.svg',
                },
                {
                    sizes:'180х160х180',
                    square:'2,88',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:600,
                    view:'Супер-Люкс',
                    imgUrl:'img/card_img6.svg',
                },
            ],
            filter:[
                {
                    sizes:'100х125х180',
                    square:'1,13',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:250,
                    view:'Комфорт',
                    imgUrl:'img/card_img2.svg',
                },
                {
                    sizes:'90х70х180',
                    square:'0,63',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:100,
                    view:'Эконом',
                    imgUrl:'img/card_img1.svg',
                },
                {
                    sizes:'90х100х180',
                    square:'0,90',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:200,
                    view:'Эконом плюс',
                    imgUrl:'img/card_img3.svg',
                },
                {
                    sizes:'125х125х180',
                    square:'1,56',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:350,
                    view:'Сьют',
                    imgUrl:'img/card_img4.svg',
                },
                {
                    sizes:'160х160х180',
                    square:'2,56',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:500,
                    view:'Люкс',
                    imgUrl:'img/card_img5.svg',
                },
                {
                    sizes:'180х160х180',
                    square:'2,88',
                    equipment:[
                        '1','2','3','4'
                    ],
                    price:600,
                    view:'Супер-Люкс',
                    imgUrl:'img/card_img6.svg',
                },
            ],
        },       
        
    },
    methods: {
        getfilter(){
            let Obj = this.cards.initial.filter(card =>this.forms.square.includes(card.square));
            this.cards.filter = Obj.filter(card =>between(card.price, this.forms.price.one, this.forms.price.two));
        }
        
    },
    
});

