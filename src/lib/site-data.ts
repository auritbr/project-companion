export type ProjectSlug = "leitura-em-comunidade" | "estante-viva" | "palavras-que-transformam";

// Imagens demonstrativas (Unsplash) — substituíveis pelo painel administrativo.
const U = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImages = {
  quemSomos: U("photo-1521587760476-6c12a4b040da"),
  nossaHistoria: U("photo-1524995997946-a1c2e315a42f"),
  equipe: U("photo-1543002588-bfa74002ed7e"),
  projetos: U("photo-1512820790803-83ca734da794"),
  noticias: U("photo-1519682337058-a94d519337bc"),
  transparencia: U("photo-1481627834876-b7833e8f5570"),
  comoDoar: U("photo-1544716278-ca5e3f4abd8c"),
  contato: U("photo-1507842217343-583bb7270b66"),
  legal: U("photo-1456513080510-7bf3a84b82f8"),
};

export const projectImages: Record<ProjectSlug, string> = {
  "leitura-em-comunidade": U("photo-1519682337058-a94d519337bc"),
  "estante-viva": U("photo-1481627834876-b7833e8f5570"),
  "palavras-que-transformam": U("photo-1455390582262-044cdead277a"),
};

const newsPhotoPool = [
  "photo-1524995997946-a1c2e315a42f",
  "photo-1507842217343-583bb7270b66",
  "photo-1512820790803-83ca734da794",
  "photo-1481627834876-b7833e8f5570",
  "photo-1519682337058-a94d519337bc",
  "photo-1543002588-bfa74002ed7e",
  "photo-1495640388908-05fa85288e61",
  "photo-1521587760476-6c12a4b040da",
  "photo-1544716278-ca5e3f4abd8c",
  "photo-1456513080510-7bf3a84b82f8",
  "photo-1455390582262-044cdead277a",
  "photo-1533327325824-76bc4e62d560",
];

const teamPhotoPool = [
  "photo-1494790108377-be9c29b29330",
  "photo-1500648767791-00dcc994a43e",
  "photo-1544005313-94ddf0286df2",
  "photo-1580489944761-15a19d654956",
  "photo-1531123897727-8f129e1688ce",
  "photo-1573497019940-1c28c88b4f3e",
  "photo-1607746882042-944635dfe10e",
  "photo-1508214751196-bcfd4ca60f91",
  "photo-1519085360753-af0119f7cbe7",
  "photo-1517841905240-472988babdf9",
];

export const projects: {
  slug: ProjectSlug;
  name: string;
  category: string;
  status: string;
  period: string;
  summary: string;
  audience: string;
  accent: string;
  activities: string[];
  objectives: string[];
  methodology: string[];
  locations: string[];
}[] = [
  {
    slug: "leitura-em-comunidade",
    name: "Leitura em Comunidade",
    category: "Mediação de leitura",
    status: "Em andamento",
    period: "Ciclo atual",
    summary:
      "Rodas de leitura, contação de histórias e mediação literária em bairros, escolas e espaços públicos, aproximando pessoas de diferentes idades da experiência da leitura compartilhada.",
    audience: "Crianças, jovens, famílias e educadores da comunidade.",
    accent: "var(--brand-blue)",
    activities: [
      "Rodas de leitura semanais",
      "Contação de histórias em praças e escolas",
      "Mediação literária em pequenos grupos",
      "Circulação de livros em bairros",
      "Encontros comunitários de leitura",
    ],
    objectives: [
      "Aproximar leitores de todas as idades da biblioteca",
      "Fortalecer o hábito de leitura na comunidade",
      "Ampliar o acesso a diferentes autores e gêneros",
      "Formar mediadores locais de leitura",
    ],
    methodology: [
      "Escuta da comunidade e mapeamento de interesses",
      "Seleção do acervo por faixa etária",
      "Encontros presenciais orientados por mediadores",
      "Avaliação participativa dos resultados",
    ],
    locations: ["Sede da biblioteca", "Escolas parceiras", "Praças e espaços comunitários"],
  },
  {
    slug: "estante-viva",
    name: "Estante Viva",
    category: "Circulação de livros",
    status: "Em andamento",
    period: "Ciclo atual",
    summary:
      "Formação e cuidado do acervo comunitário: campanhas de doação, catalogação, conservação e criação de pontos de leitura acessíveis em diferentes territórios.",
    audience: "Comunidade em geral, doadores, escolas e coletivos locais.",
    accent: "var(--brand-green)",
    activities: [
      "Campanhas de arrecadação de livros",
      "Catalogação e conservação do acervo",
      "Criação de pontos comunitários de leitura",
      "Empréstimo gratuito de livros",
      "Circulação de acervos temáticos",
    ],
    objectives: [
      "Ampliar o acervo disponível para a comunidade",
      "Criar novos pontos de acesso à leitura",
      "Cuidar e preservar as obras recebidas",
      "Estimular o compartilhamento entre leitores",
    ],
    methodology: [
      "Recebimento e triagem de doações",
      "Catalogação por área e faixa etária",
      "Conservação preventiva",
      "Distribuição em pontos comunitários",
    ],
    locations: ["Sede da biblioteca", "Pontos de leitura em bairros", "Escolas parceiras"],
  },
  {
    slug: "palavras-que-transformam",
    name: "Palavras que Transformam",
    category: "Formação e criação literária",
    status: "Em andamento",
    period: "Ciclo atual",
    summary:
      "Oficinas de leitura, escrita e criação literária, encontros com autores e atividades educativas que fortalecem a expressão e a formação cultural de crianças, jovens e adultos.",
    audience: "Crianças, jovens, adultos, educadores e coletivos culturais.",
    accent: "var(--brand-orange)",
    activities: [
      "Oficinas de leitura e escrita",
      "Encontros com autores locais",
      "Criação coletiva de histórias",
      "Apresentações e compartilhamento de produções",
      "Formação de novos mediadores",
    ],
    objectives: [
      "Fortalecer a formação de leitores e escritores",
      "Ampliar o repertório cultural dos participantes",
      "Estimular a expressão oral e escrita",
      "Aproximar autores e comunidade",
    ],
    methodology: [
      "Oficinas em ciclos com temas literários",
      "Escuta ativa e produção coletiva",
      "Publicações demonstrativas dos resultados",
      "Avaliação contínua com os participantes",
    ],
    locations: ["Sede da biblioteca", "Escolas parceiras", "Espaços culturais da região"],
  },
];

export const newsTags = [
  "Eventos",
  "Ação Social",
  "Projetos",
  "Leitura",
  "Educação",
  "Comunidade",
  "Oficinas",
  "Parcerias",
  "Institucional",
] as const;
export type NewsTag = (typeof newsTags)[number];

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: NewsTag;
  readingTime: string;
  author: string;
  body: string[];
};

const baseBody = [
  "Este é um conteúdo demonstrativo, preparado para apresentar a estrutura das notícias da biblioteca. Aqui aparecem os textos completos, com intertítulos, listas e citações, sempre relacionados às atividades de leitura, formação e ação cultural junto à comunidade.",
  "As notícias reais serão cadastradas por meio do painel administrativo, permitindo o registro contínuo das rodas de leitura, oficinas, campanhas e encontros realizados junto à comunidade atendida.",
  "A biblioteca busca registrar cada iniciativa com fotografias, depoimentos e informações que valorizem o trabalho coletivo e o papel dos livros na transformação social do território.",
];

export const news: NewsItem[] = [
  ["Roda de leitura reúne famílias em nova edição", "Eventos"],
  ["Campanha de doação amplia acervo infantil", "Ação Social"],
  ["Estante Viva chega a novo ponto comunitário", "Projetos"],
  ["Oficina de escrita criativa forma novos mediadores", "Oficinas"],
  ["Encontro com autores da região emociona participantes", "Leitura"],
  ["Parceria com escola pública fortalece mediação de leitura", "Parcerias"],
  ["Contação de histórias mobiliza comunidade em praça pública", "Comunidade"],
  ["Formação de mediadores encerra ciclo com apresentação", "Educação"],
  ["Biblioteca participa de encontro regional de Pontos de Cultura", "Institucional"],
  ["Novos livros chegam ao acervo pela campanha Estante Viva", "Projetos"],
  ["Roda de leitura para adultos estreia com boa participação", "Leitura"],
  ["Voluntários reorganizam o espaço para novas atividades", "Comunidade"],
].map(([title, tag], i) => ({
  slug: `noticia-demonstrativa-${i + 1}`,
  title: title as string,
  tag: tag as NewsTag,
  excerpt:
    "Registro demonstrativo das atividades da biblioteca comunitária. O conteúdo real desta notícia será cadastrado pelo painel administrativo.",
  date: `Data ${i + 1} — a ser cadastrada`,
  readingTime: `${3 + (i % 4)} min de leitura`,
  author: "Equipe da Biblioteca",
  body: baseBody,
}));

export const team = [
  { name: "Nome a cadastrar", role: "Coordenação Geral", area: "Coordenação", bio: "Responsável pela coordenação institucional e acompanhamento dos projetos." },
  { name: "Nome a cadastrar", role: "Coordenação Pedagógica", area: "Coordenação", bio: "Acompanha o planejamento pedagógico das atividades." },
  { name: "Nome a cadastrar", role: "Bibliotecária", area: "Administrativo", bio: "Cuida da organização e catalogação do acervo." },
  { name: "Nome a cadastrar", role: "Mediador de Leitura", area: "Mediação", bio: "Conduz rodas de leitura e contação de histórias." },
  { name: "Nome a cadastrar", role: "Mediadora de Leitura", area: "Mediação", bio: "Atua junto a crianças e famílias em atividades culturais." },
  { name: "Nome a cadastrar", role: "Educador", area: "Educadores", bio: "Desenvolve oficinas literárias e formativas." },
  { name: "Nome a cadastrar", role: "Educadora", area: "Educadores", bio: "Acompanha grupos de leitura e formação de mediadores." },
  { name: "Nome a cadastrar", role: "Comunicação", area: "Administrativo", bio: "Responsável pela comunicação institucional e divulgação." },
  { name: "Nome a cadastrar", role: "Voluntário(a)", area: "Voluntariado", bio: "Apoia a organização do acervo e as atividades comunitárias." },
  { name: "Nome a cadastrar", role: "Diretoria", area: "Diretoria", bio: "Compõe a diretoria da organização." },
];

export const documents = [
  { name: "Estatuto Social", category: "Estatuto", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Ata de Assembleia", category: "Atas", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Relatório de Atividades", category: "Relatórios de atividades", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Relatório Financeiro", category: "Relatórios financeiros", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Prestação de Contas", category: "Prestações de contas", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Termo de Parceria", category: "Termos de parceria", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Certidão Negativa", category: "Certidões", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Edital Demonstrativo", category: "Editais", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Contrato Demonstrativo", category: "Contratos", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Plano de Trabalho", category: "Planos de trabalho", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Política Interna", category: "Políticas internas", year: "Ano a informar", format: "PDF", size: "—" },
  { name: "Documento Institucional", category: "Documentos institucionais", year: "Ano a informar", format: "PDF", size: "—" },
];

export const partners = [
  "Nome do parceiro 1",
  "Nome do parceiro 2",
  "Nome do parceiro 3",
  "Nome do parceiro 4",
  "Nome do parceiro 5",
  "Nome do parceiro 6",
];