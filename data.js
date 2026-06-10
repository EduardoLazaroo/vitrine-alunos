/**
 * BANCO DE DADOS LOCAL - LISTA DE ALUNOS E PROJETOS
 * 
 * Para atualizar as informações dos alunos, basta alterar os campos abaixo.
 * 
 * Campos disponíveis:
 * - nome: Nome completo ou como o aluno deseja ser chamado (Destaque Principal)
 * - descricao: Frase curta de descrição do aluno ou projeto (Opcional)
 * - link: URL para o projeto hospedado (ex: GitHub Pages, Vercel, Netlify) ou "#" se não houver
 * - cor: Classe de cor do card. Opções válidas: "card-blue", "card-green", "card-purple", "card-orange", "card-red"
 */

const ALUNOS_DATA = [
    {
        nome: "BEATRIZ GODOY FAGUNDES",
        descricao: ":What comes from below doesn't affect me.",
        link: "https://site-mu-rose.vercel.app/",
        cor: "card-purple"
    },
    {
        nome: "DEIVID WILLIANS RODRIGUES GARCIA",
        descricao: "Explorando o desenvolvimento backend e APIs robustas.",
        link: "#",
        cor: "card-green"
    },
    {
        nome: "EMILLY VITÓRIA BULGARELLI",
        descricao: "Crescendo em fé, vivendo no ritmo do rock e maratonando mistérios.🐴",
        link: "https://emily-eosin.vercel.app",
        cor: "card-green"
    },
    {
        nome: "ESTHER ROSSETINI CARVALHO",
        descricao: "Focada em soluções criativas e código limpo.",
        link: "#",
        cor: "card-orange"
    },
    {
        nome: "ISABELA CRISTINA GUERRA",
        descricao: "O sol, a lua e a verdade",
        link: "https://isanotess.vercel.app/",
        cor: "card-blue"
    },
    {
        nome: "ISABELY COSTA",
        descricao: "A persistência é o caminho do êxito",
        link: "https://site-isa-amber.vercel.app",
        cor: "card-blue"
    },
    {
        nome: "ISAQUE NASCIMENTO",
        descricao: "Não tenha medo de errar, tenha medo de não tentar.",
        link: "https://isaque-alpha.vercel.app/",
        cor: "card-blue"
    },
    {
        nome: "JOÃO PEDRO",
        descricao: "Atleta",
        link: "https://profile-lime-zeta.vercel.app/",
        cor: "card-purple"
    },
    {
        nome: "KAUAN SOARES",
        descricao: "Criação de jogos digitais e interatividade web.",
        link: "#",
        cor: "card-orange"
    },
    {
        nome: "LAURA RODRIGUES",
        descricao: "UI/UX Designer apaixonada por layouts inovadores.",
        link: "#",
        cor: "card-red"
    },
    {
        nome: "LAYSSA NICOLE",
        descricao: "Uma mente negativa não lhe dará uma vida positiva. Viva por você 🕉️",
        link: "https://profile-six-teal.vercel.app/",
        cor: "card-pink"
    },
    {
        nome: "LUCAS CHAVES",
        descricao: "Segurança da informação e redes de computadores.",
        link: "#",
        cor: "card-green"
    },
    {
        nome: "MARIA LUIZA",
        descricao: "A paz vem de dentro. Não a procure à sua volta",
        link: "https://profile-eta-lyart.vercel.app/",
        cor: "card-purple"
    },
    {
        nome: "MARIANA DEL VALLE",
        descricao: "Análise de sistemas e banco de dados relacional.",
        link: "#",
        cor: "card-orange"
    },
    {
        nome: "NARAYANE EDUARDA",
        descricao: "Entenda os seus medos, mas jamais deixe que eles sufoquem os seus sonhos",
        link: "https://pessoall-nara.vercel.app/",
        cor: "card-purple"
    },
    {
        nome: "NYCOLE RODRIGUES",
        descricao: "Só preciso insistir mais um pouco e conseguir e estou quase lá!",
        link: "https://site-nycole.vercel.app/",
        cor: "card-purple"
    },
    {
        nome: "SALOMÃO DYOGO",
        descricao: "Deus acima de tudo!",
        link: "https://salomao-six.vercel.app/",
        cor: "card-green"
    },
    {
        nome: "SOFIA RAFAELA",
        descricao: "A vida é bela e o código também.",
        link: "https://projetos-2-0.vercel.app/",
        cor: "card-orange"
    },
    {
        nome: "SOFIA REBLIN",
        descricao: "Sonha e serás livre de espírito, luta e serás livre na vida.",
        link: "https://sunnyboom.vercel.app",
        cor: "card-orange"
    },
    {
        nome: "VICTOR HUGO",
        descricao: "Construindo o futuro através das linhas de código.",
        link: "https://portfolio-victor-amber.vercel.app/",
        cor: "card-blue"
    },
    {
        nome: "ZION RIBEIRO",
        descricao: "Inovação tecnológica e soluções sob medida.",
        link: "#",
        cor: "card-blue"
    }
];
