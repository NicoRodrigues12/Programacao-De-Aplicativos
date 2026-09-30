//BD

var posts = [
    {
        id: 1,
        usuario : {

        user: 'ABCDE',
        local: 'TJ/SC',
        imgperfil: "https://media.discordapp.net/attachments/1524197927982071922/1554630064836968459/d4ea8b923c8221a8ca3ef392de6b0e23-1.jpg?backend=b2&ex=6abd9593&is=6abc4413&hm=86cc1005f0878812194a153b9198518a23549dff4f591907dee4dbcdad91126f&=&format=webp&width=724&height=1024",
        },

        img : "https://media.discordapp.net/attachments/1524197927982071922/1554630064836968459/d4ea8b923c8221a8ca3ef392de6b0e23-1.jpg?backend=b2&ex=6abd9593&is=6abc4413&hm=86cc1005f0878812194a153b9198518a23549dff4f591907dee4dbcdad91126f&=&format=webp&width=724&height=1024",
        likes : 60,
        legend: "meu 1 personagem de rpg",
        alreadyLike : false,
        data : "2026-09-28T20:41:00",
        comments: [
            {
                id: 1,
                username : "Brok",
                text:"Meu garoto",
                data:"2026-09-28T20:46:00",
            },

             {
                id: 2,
                username : "Chester",
                text:"Salve",
                data:"2026-09-28T20:48:00",
            }
        ],


    },

     {
        id: 2,
        usuario: {
            user: 'pedrinha',
            local: 'Itapema - SC',
            imgperfil: 'https://media.discordapp.net/attachments/1524197947292647466/1552801308694814832/IMG_20260924_185742.jpg?ex=6abd85e9&is=6abc3469&hm=a506865eccb7d895e52a4e10c90646090dd36bd3a04c6cd38c29074e0bc1c32d&=&format=webp&width=768&height=1024'
        },
        img: 'https://media.discordapp.net/attachments/1524197947292647466/1552801308694814832/IMG_20260924_185742.jpg?ex=6abd85e9&is=6abc3469&hm=a506865eccb7d895e52a4e10c90646090dd36bd3a04c6cd38c29074e0bc1c32d&=&format=webp&width=768&height=1024',
        legend: "Lorem ipsum dolor, sit amet consectetur adipisicing eli",
        likes: 0,
        alreadyLike: false,
        data: "2026-09-29T20:12:00",
        comments: [
            {
                id: 1,
                username: "pedrinhdasilva",
                text: "Bahhh que legal!!",
                data: "2026-09-28T20:24:00"
            },
             {
                id: 2,
                username: "pedrinhdasilva",
                text: "Muito Legal!!",
                data: "2026-09-28T21:24:00"
            }
        ]
    },

]

//FUNCTIONS JS
const feed = document.getElementById('feed')
const botaoAberto = document.getElementById("botaoAberto")
const botaoFechado = document.getElementById("botaofecharmodal")
const modal = document.getElementById("modalpost")

botaoAberto.addEventListener("click", () => {
    modal.classList.remove("hidden")
})

botaoFechado.addEventListener("click", () => {
    modal.classList.add("hidden")
})

function carregarPosts(){
feed.innerHTML = "";




for(var i = 0; i < posts.length ; i++){
var article = document.createElement("article")

var commentsHTML = "";
for(var j = 0; j < posts[i].comments.length; j++){
    commentsHTML += `
    
                        <p class="comment">
                            <strong>${posts[i].comments[j].username[j]}</strong>
                           ${posts[i].comments[j].text}
                        </p>
                    </div>
    `
}

article.innerHTML = ` <header class="post-header">
                    <div class="post-usuario">
                        <img
                            src="${posts[i].usuario.imgperfil}">
                        <div>
                            <strong>${posts[i].usuario.user}</strong>
                            <span>${posts[i].usuario.local}</span>
                        </div>
                    </div>
                    <button class="more">•••</button>
                </header>
                <img
                    src="${posts[i].img}">
                    <div>
                        <button>🔥</button>
                        <button>💭</button>
                        <button>➤</button>
                    </div>

                    <button>➤</button>
                </div>

                <div class="post-info">
                    <p><strong>${posts[i].likes}</strong></p>

                    <div>
                        <p><strong>${posts[i].usuario.user}</strong>${posts[i].legend}</p>
                        <a href="#">VER COMENTARIOS</a>

                   ${commentsHTML}
<span class="post-date">Há 2 horas</span>
                       
                    </div>
                </div>`;

                feed.appendChild(article)
}
}



carregarPosts()