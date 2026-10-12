# Vitrine de Alunos

## Proposito

Site estatico para apresentar alunos e projetos da Escola Estadual Monsenhor Bicudo em uma exposicao tecnologica de 2026. A interface oferece uma forma direta de explorar trabalhos, localizar participantes e divulgar links de projetos para a comunidade escolar.

O publico inclui visitantes da exposicao, estudantes, professores e familiares.

## Tecnologias e arquitetura

O projeto nao depende de framework ou processo de compilacao:

- HTML5 para estrutura semantica;
- CSS3 com propriedades customizadas para identidade visual e temas;
- JavaScript puro para renderizacao, busca, contadores e interacao;
- `localStorage` para preservar a preferencia de tema;
- `data.js` como fonte local dos dados exibidos.

| Arquivo | Funcao |
|---|---|
| `index.html` | estrutura e pontos de montagem da pagina |
| `styles.css` | layout responsivo, temas e componentes |
| `data.js` | cadastro local de alunos e projetos |
| `app.js` | renderizacao dos cards, busca e alternancia de tema |

## Como executar

Abra `index.html` em um navegador ou sirva a pasta com um servidor estatico:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Como atualizar o conteudo

Os registros sao mantidos manualmente em `data.js`. Ao adicionar ou alterar projetos, preserve a estrutura esperada pelo script e valide os links externos no navegador. Como o site e estatico, nao ha autenticacao, banco de dados ou sincronizacao remota.

## Material para publicacao

**Texto sugerido**

> A Vitrine de Alunos foi criada para dar visibilidade aos projetos desenvolvidos na Escola Estadual Monsenhor Bicudo durante a exposicao tecnologica de 2026. A solucao privilegia simplicidade e acessibilidade: uma pagina estatica, responsiva e facil de manter, com busca por nome, cards de projetos e alternancia de tema. A decisao por tecnologias nativas permitiu concentrar o trabalho na experiencia de descoberta e na valorizacao dos estudantes, sem impor infraestrutura complexa a uma iniciativa escolar.

**Capturas recomendadas:** pagina inicial em tema escuro, busca com resultado filtrado, card de projeto e comparacao entre os dois temas.

**Prompt para imagem complementar**

```text
Ilustracao vetorial moderna de uma vitrine digital escolar: estudantes apresentando projetos de tecnologia em cards organizados, uma barra de busca e um painel responsivo ao fundo, ambiente acolhedor de exposicao cientifica, paleta azul e violeta, sem logotipos e sem textos legiveis.
```
