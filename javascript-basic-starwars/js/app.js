const PERSON = [{
    id:1,
            name:'Mestre Yoda',
            image:'images/yoda.png'
        },
    {
          id:2,
            name:'Luke',
            image:'images/luke.png'
        },
    {  id:3,
            name:'Leia',
            image:'images/leia.png'
        },
    {  id:4,
            name:'Hansolo',
            image:'images/hansolo.png'
        },
    {  id:5,
            name:'Vader',
            image:'images/vader.png'
        },
    {  id:6,
            name:'Chewbacca',
            image:'images/chewbacca.png'
        },
    {  id:7,
            name:'R2d2',
            image:'images/r2d2.png'
        },
    {  id:8,
            name:'C3po',
            image:'images/c3po.png'
        }]

const App = new Vue({
    el:'#app',
    data:{
        title:'Start Wars lego',
        userName: 'Ernesto',
        characters:PERSON
    
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like`)
        }
    }
})

