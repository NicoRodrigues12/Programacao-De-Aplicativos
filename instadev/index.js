//BD

var posts = [
    {
        id: 1,
        usuario : {

        user: 'SedutorDeTJ',
        local: 'Bar do Bira',
        imgperfil: "https://media.discordapp.net/attachments/1190893756149420074/1552103833210200134/IMG_20260922_204544_464.jpg?ex=6abba516&is=6aba5396&hm=b1926353a8ea397c15eb58c6eb66a00c5e367461a819a915f13e4b92c9810415&=&format=webp",
        },

        img : "https://media.discordapp.net/attachments/1524197927982071922/1549215842871414784/IMG-20260715-WA0009.jpg?ex=6abbaf6f&is=6aba5def&hm=623eb751c79f0c895a0186fcffeae95a2b0c4241014840a0c13a864dbd9cc184&=&format=webp",
        likes : 69,
        legend: "TURNÊ NA CRECHE",
        alreadyLike : false,
        data : "2026-09-28T20:41:00",
        comments: [
            {
                id: 1,
                username : "abusadinho games",
                text:"PARA DE DAR EM CIMA DA MINHA IRMÂ, SEU JACK",
                data:"2026-09-28T20:46:00",
            },

             {
                id: 2,
                username : "esfolado gameplays",
                text:"PARA DE DAR EM CIMA DA MINHA IRMÂ, SEU JACK",
                data:"2026-09-28T20:48:00",
            }
        ],


    }
]

//FUNCTIONS JS
const feed = document.getElementById('feed')

function carregarPosts(){
feed.innerHTML = "";


for(var i = 0; i < posts.length ; i++){
var article = document.createElement("article")

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

                    <button>🍆</button>
                </div>

                <div class="post-info">
                    <p><strong>${posts[i].likes}</strong></p>

                    <div>
                        <p><strong>${posts[i].usuario.user}</strong>${posts[i].legend}</p>
                        <a href="#">VER COMENTARIOS</a>

                        <p class="comment">
                            <strong>${posts[i].comments[0].username}</strong>
                           ${posts[i].comments[0].text}
                        </p>

                        <span class="post-date">Há 2 horas</span>
                    </div>
                </div>`;

                feed.appendChild(article)
}
}



carregarPosts()