//BD

var posts = [
    {
        id: 1,
        usuario: {

            user: 'ABCDE',
            local: 'TJ/SC',
            imgperfil: "https://media.discordapp.net/attachments/1524197927982071922/1554630064836968459/d4ea8b923c8221a8ca3ef392de6b0e23-1.jpg?backend=b2&ex=6abd9593&is=6abc4413&hm=86cc1005f0878812194a153b9198518a23549dff4f591907dee4dbcdad91126f&=&format=webp&width=724&height=1024",
        },

        img: "https://media.discordapp.net/attachments/1524197927982071922/1554630064836968459/d4ea8b923c8221a8ca3ef392de6b0e23-1.jpg?backend=b2&ex=6abd9593&is=6abc4413&hm=86cc1005f0878812194a153b9198518a23549dff4f591907dee4dbcdad91126f&=&format=webp&width=724&height=1024",
        likes: 60,
        legend: "meu 1 personagem de rpg",
        alreadyLike: false,
        data: "2026-09-28T20:41:00",
        comments: [
            {
                id: 1,
                username: "Brok",
                text: "Meu garoto",
                data: "2026-09-28T20:46:00",
            },

            {
                id: 2,
                username: "Chester",
                text: "Salve",
                data: "2026-09-28T20:48:00",
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

function curtirPost(idPost) {

    var index = posts.findIndex(post => idPost === post.id);

    posts[index].alreadyLike = !posts[index].alreadyLike;

    if (posts[index].alreadyLike) {
        posts[index].likes++;
    } else {
        posts[index].likes--;
    }

    carregarPosts();
}

function abrirComentarios(idPost) {

    var post = posts.find(post => post.id === idPost);

    var areaComentarios = document.getElementById(`comentarios-${idPost}`);

    if (areaComentarios.innerHTML !== "") {
        areaComentarios.innerHTML = "";
        return;
    }

    var comentariosHTML = "";

    for (var i = 0; i < post.comments.length; i++) {

        comentariosHTML += `
            <p>
                <strong>${post.comments[i].username}</strong>
                ${post.comments[i].text}
            </p>
        `;
    }

    comentariosHTML += `
    <input 
        type="text" 
        id="inputComentario-${idPost}" 
        placeholder="Adicione um comentário..."
        onkeydown="if(event.key === 'Enter') adicionarComentario(${idPost})"
    >
`;

    areaComentarios.innerHTML = comentariosHTML;
}

function adicionarComentario(idPost) {

    var post = posts.find(post => post.id === idPost);

    var input = document.getElementById(`inputComentario-${idPost}`);

    var texto = input.value;

    post.comments.push({
        username: "Nico",
        text: texto
    });

    var areaComentarios = document.getElementById(`comentarios-${idPost}`);

    areaComentarios.innerHTML = "";

    abrirComentarios(idPost);
}

function alternarTema() {

    document.body.classList.toggle("dark-mode");

    var botaoTema = document.getElementById("botaoTema");

    if (document.body.classList.contains("dark-mode")) {
        botaoTema.querySelector("span").textContent = "🌙";
    } else {
        botaoTema.querySelector("span").textContent = "⏾";
    }

}


function adicionarPost() {

    var imagem = document.getElementById("imgPost").value;
    var legenda = document.getElementById("legendPost").value;

    var novoPost = {

        id: posts.length + 1,

        usuario: {
            user: "Nico",
            local: "TJ/SC",
            imgperfil: ""
        },

        img: imagem,
        legend: legenda,

        likes: 0,
        alreadyLike: false,

        data: new Date().toISOString(),

        comments: []
    };

    posts.push(novoPost);

    carregarPosts();
    modal.classList.add("hidden");
}



function carregarPosts() {
    feed.innerHTML = "";




    for (var i = 0; i < posts.length; i++) {
        var article = document.createElement("article")

        var commentsHTML = "";
        for (var j = 0; j < posts[i].comments.length; j++) {
            commentsHTML += `
    <p class="comment">
        <strong>${posts[i].comments[j].username}</strong>
        ${posts[i].comments[j].text}
    </p>
`
        }



        article.innerHTML = `

    <header class="post-header">

        <div class="post-usuario">

            <img src="${posts[i].usuario.imgperfil}">

            <div>
                <strong>${posts[i].usuario.user}</strong>
                <span>${posts[i].usuario.local}</span>
            </div>

        </div>

        <button class="more">•••</button>

    </header>


    <img
        class="post-image"
        src="${posts[i].img}"
    >


    <div class="post-actions">

        <div>

            <button
                onclick="curtirPost(${posts[i].id})"
                class="${posts[i].alreadyLike ? 'liked' : ''}"
            >
                ♥
            </button>

            <button onclick="abrirComentarios(${posts[i].id})">
                💭
            </button>

            <button>➤</button>

        </div>

        <button>✉</button>

    </div>


    <div class="comentarios" id="comentarios-${posts[i].id}">
    </div>


    <div class="post-info">

        <p>
            <strong>${posts[i].likes} curtidas</strong>
        </p>

        <div>

            <p>
                <strong>${posts[i].usuario.user}</strong>
                ${posts[i].legend}
            </p>

            <span class="post-date">
                Há 2 horas
            </span>

        </div>

    </div>

`;

        feed.appendChild(article)
    }
}



carregarPosts()

