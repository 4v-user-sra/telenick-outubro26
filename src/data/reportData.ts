export interface MetricCard {
  title: string;
  value: string;
  subtitle: string;
  highlight?: boolean;
}

export interface ChannelData {
  id: string;
  canal: string;
  investido: number;
  investidoStr: string;
  impressoes: number;
  impressoesStr: string;
  cliques: number;
  cliquesStr: string;
  ctr: number;
  ctrStr: string;
  cpc: number;
  cpcStr: string;
  contatos: number;
  contatosStr: string;
  custoContato: number;
  custoContatoStr: string;
  taxaCliqueContato: number;
  taxaCliqueContatoStr: string;
  shareInvestimento: number;
  shareInvestimentoStr: string;
  shareContatos: number;
  shareContatosStr: string;
  cor: string;
}

export interface AdCreative {
  id: string;
  anuncio: string;
  status: 'Ativo' | 'Pausado';
  investido: number;
  investidoStr: string;
  impressoes: number;
  impressoesStr: string;
  cliques: number;
  cliquesStr: string;
  ctr: number;
  ctrStr: string;
  cpc: number;
  cpcStr: string;
  cpm: number;
  cpmStr: string;
  conversas: number;
  conversasStr: string;
  custoConversa: number;
  custoConversaStr: string;
  taxaCliqueConversa: number;
  taxaCliqueConversaStr: string;
  isTopPerformer?: boolean;
  highlightNote?: string;
}

export interface AudienceAgeData {
  idade: string;
  investido: number;
  investidoStr: string;
  impressoes: number;
  impressoesStr: string;
  cliques: number;
  cliquesStr: string;
  ctr: number;
  ctrStr: string;
  cpc: number;
  cpcStr: string;
  cpm: number;
  cpmStr: string;
  conversas: number;
  conversasStr: string;
  custoConversa: number;
  custoConversaStr: string;
  taxaCliqueConversa: number;
  taxaCliqueConversaStr: string;
  isTopSegment?: boolean;
}

export interface MetaCampaignAudience {
  campanhaPublico: string;
  investido: number;
  investidoStr: string;
  impressoes: number;
  impressoesStr: string;
  cliques: number;
  cliquesStr: string;
  ctr: number;
  ctrStr: string;
  cpc: number;
  cpcStr: string;
  cpm: number;
  cpmStr: string;
  conversas: number;
  conversasStr: string;
  custoConversa: number;
  custoConversaStr: string;
  taxaCliqueConversa: number;
  taxaCliqueConversaStr: string;
}

export interface GoogleCampaign {
  campanha: string;
  orcamentoDia: number;
  orcamentoDiaStr: string;
  investido: number;
  investidoStr: string;
  impressoes: number;
  impressoesStr: string;
  cliques: number;
  cliquesStr: string;
  ctr: number;
  ctrStr: string;
  cpc: number;
  cpcStr: string;
  conversoes: number;
  conversoesStr: string;
  custoConversao: number;
  custoConversaoStr: string;
  taxaCliqueConversao: number;
  taxaCliqueConversaoStr: string;
  shareVerbaGoogle: number;
  shareVerbaGoogleStr: string;
  shareConversoesGoogle: number;
  shareConversoesGoogleStr: string;
  statusNota?: string;
}

export const REPORT_META = {
  headerKicker: "RELATÓRIO DE MÍDIA PAGA · META ADS E GOOGLE ADS",
  title: "Telenick: resultados de 01 a 31 de outubro de 2026",
  period: "01 a 31 de outubro de 2026",
  executiveSummary:
    "Em outubro investimos R$ 2.951,54 somando Meta e Google, e os anúncios geraram 482 contatos de interessados em transmissores, a R$ 6,12 em média. O Meta trouxe 389 conversas no WhatsApp e o Google trouxe 93 contatos de quem pesquisou o produto.",
  pdfPath: "/assets/aistudio/ropre-telenick-outubro-2026_00ef6de2.pdf",
};

export const TOP_KPIS: MetricCard[] = [
  {
    title: "Contatos gerados",
    value: "482",
    subtitle: "Conversas no WhatsApp (Meta) mais conversões da busca (Google)",
    highlight: true,
  },
  {
    title: "Custo médio por contato",
    value: "R$ 6,12",
    subtitle: "Investimento total dividido pelos contatos",
    highlight: true,
  },
  {
    title: "Investimento total",
    value: "R$ 2.951,54",
    subtitle: "Meta mais Google, 01 a 31/10",
  },
  {
    title: "Contatos por dia",
    value: "15,5",
    subtitle: "Média nos 31 dias do mês",
  },
  {
    title: "Cliques nos anúncios",
    value: "1.778",
    subtitle: "Pessoas que clicaram para saber mais",
  },
];

export const GLOSSARY_ITEMS = [
  {
    termo: "Conversa (Meta)",
    definicao:
      "Pessoa que clicou no anúncio do Instagram ou Facebook e iniciou uma conversa no WhatsApp da Telenick.",
    canal: "Meta",
  },
  {
    termo: "Conversão (Google)",
    definicao:
      "Contato registrado pelo Google Ads a partir de quem pesquisou por transmissor e clicou no anúncio da busca.",
    canal: "Google",
  },
  {
    termo: "Impressões",
    definicao: "Quantas vezes os anúncios apareceram na tela das pessoas.",
    canal: "Geral",
  },
  {
    termo: "CTR",
    definicao:
      "De cada 100 pessoas que viram o anúncio, quantas clicaram. Mede o quanto o anúncio chama atenção.",
    canal: "Geral",
  },
  {
    termo: "CPC",
    definicao: "Custo médio de cada clique no anúncio.",
    canal: "Geral",
  },
  {
    termo: "CPM",
    definicao:
      "Custo para o anúncio aparecer mil vezes. Sobe quando o público é pequeno ou muito disputado.",
    canal: "Geral",
  },
  {
    termo: "Custo por conversa",
    definicao:
      "Investimento dividido pelo número de conversas ou conversões. É o principal número de eficiência.",
    canal: "Geral",
  },
  {
    termo: "Clique → conversa",
    definicao:
      "De quem clicou, quantos de fato chegaram a falar com a Telenick.",
    canal: "Geral",
  },
];

export const CANAIS_DATA: ChannelData[] = [
  {
    id: "meta",
    canal: "Meta Ads",
    investido: 1242.71,
    investidoStr: "R$ 1.242,71",
    impressoes: 117643,
    impressoesStr: "117.643",
    cliques: 1202,
    cliquesStr: "1.202",
    ctr: 1.02,
    ctrStr: "1,02%",
    cpc: 1.03,
    cpcStr: "R$ 1,03",
    contatos: 389,
    contatosStr: "389",
    custoContato: 3.19,
    custoContatoStr: "R$ 3,19",
    taxaCliqueContato: 32.36,
    taxaCliqueContatoStr: "32,36%",
    shareInvestimento: 42.1,
    shareInvestimentoStr: "42,10%",
    shareContatos: 80.71,
    shareContatosStr: "80,71%",
    cor: "#0284c7",
  },
  {
    id: "google",
    canal: "Google Ads",
    investido: 1708.83,
    investidoStr: "R$ 1.708,83",
    impressoes: 6589,
    impressoesStr: "6.589",
    cliques: 576,
    cliquesStr: "576",
    ctr: 8.74,
    ctrStr: "8,74%",
    cpc: 2.97,
    cpcStr: "R$ 2,97",
    contatos: 93,
    contatosStr: "93",
    custoContato: 18.37,
    custoContatoStr: "R$ 18,37",
    taxaCliqueContato: 16.15,
    taxaCliqueContatoStr: "16,15%",
    shareInvestimento: 57.9,
    shareInvestimentoStr: "57,90%",
    shareContatos: 19.29,
    shareContatosStr: "19,29%",
    cor: "#ea580c",
  },
];

export const CANAIS_TEXT = {
  introducao:
    "Os dois canais têm papéis diferentes. O Meta mostra os transmissores para quem já visitou o site da Telenick e traz conversas baratas no WhatsApp. O Google aparece para quem está pesquisando o produto naquele momento: cada clique custa mais, mas a intenção de compra é alta.",
  destaqueVerbaContatos:
    "O Meta ficou com 42,10% da verba e entregou 80,71% dos contatos do mês.",
  destaqueCustoGoogle:
    "O contato do Google sai mais caro porque o clique na busca é disputado por concorrentes e cada pesquisa é de alguém já procurando transmissor. Por isso olhamos os dois canais juntos, e não só o mais barato.",
};

export const META_ADS_OVERVIEW = {
  subtitulo: "Instagram e Facebook",
  descricao:
    "Duas campanhas de conversas no WhatsApp, as duas falando com quem visitou o site da Telenick (remarketing). Os anúncios mostram o NK 6000, o STR 100W e o STR 300 WB, com fotos de produto e vídeos de prova social.",
  kpis: [
    { label: "Conversas no WhatsApp", value: "389", highlight: true },
    { label: "Custo por conversa", value: "R$ 3,19", highlight: true },
    { label: "Investido", value: "R$ 1.242,71" },
    { label: "Impressões", value: "117.643" },
    { label: "CTR", value: "1,02%" },
    { label: "CPC", value: "R$ 1,03" },
    { label: "CPM", value: "R$ 10,56" },
  ],
  funil: {
    titulo: "Do anúncio à conversa no WhatsApp",
    descricao:
      "Cada etapa mostra o total do mês e, ao lado, a taxa sobre a etapa anterior. Escala logarítmica para as três etapas caberem lado a lado.",
    etapas: [
      { nome: "Impressões", total: 117643, totalStr: "117.643", taxaStr: "" },
      { nome: "Cliques no link", total: 1202, totalStr: "1.202", taxaStr: "1,02%" },
      {
        nome: "Conversas no WhatsApp",
        total: 389,
        totalStr: "389",
        taxaStr: "32,36%",
      },
    ],
    destaque:
      "Quem clica tem intenção: 32,36% dos cliques viraram conversa no WhatsApp.",
  },
  comparativoConta: {
    titulo: "Outubro comparado com a média da conta",
    descricao:
      "Média do período de 01/07 a 22/10/2026, do último raio-x da conta. Os anúncios estão chamando mais atenção (CTR maior), mas aparecer ficou mais caro (CPM maior), e isso subiu um pouco o custo por conversa. A causa principal está no público de visitantes de 30 dias, explicado logo abaixo.",
    linhas: [
      {
        indicador: "Custo por conversa",
        outubro: "R$ 3,19",
        media: "R$ 2,91",
        variacao: "+9,6%",
        tipoVariacao: "alerta",
      },
      {
        indicador: "CTR",
        outubro: "1,02%",
        media: "0,86%",
        variacao: "+18,6%",
        tipoVariacao: "positivo",
      },
      {
        indicador: "CPM",
        outubro: "R$ 10,56",
        media: "R$ 8,09",
        variacao: "+30,5%",
        tipoVariacao: "alerta",
      },
    ],
  },
};

export const META_CAMPAIGNS_PUBLICOS: MetaCampaignAudience[] = [
  {
    campanhaPublico: "Campanha JL · Visitantes do site 90 dias",
    investido: 608.29,
    investidoStr: "R$ 608,29",
    impressoes: 71299,
    impressoesStr: "71.299",
    cliques: 674,
    cliquesStr: "674",
    ctr: 0.95,
    ctrStr: "0,95%",
    cpc: 0.9,
    cpcStr: "R$ 0,90",
    cpm: 8.53,
    cpmStr: "R$ 8,53",
    conversas: 228,
    conversasStr: "228",
    custoConversa: 2.67,
    custoConversaStr: "R$ 2,67",
    taxaCliqueConversa: 33.83,
    taxaCliqueConversaStr: "33,83%",
  },
  {
    campanhaPublico: "Campanha RR (remarketing) · Visitantes do site 90 dias",
    investido: 301.18,
    investidoStr: "R$ 301,18",
    impressoes: 39240,
    impressoesStr: "39.240",
    cliques: 490,
    cliquesStr: "490",
    ctr: 1.25,
    ctrStr: "1,25%",
    cpc: 0.61,
    cpcStr: "R$ 0,61",
    cpm: 7.68,
    cpmStr: "R$ 7,68",
    conversas: 141,
    conversasStr: "141",
    custoConversa: 2.14,
    custoConversaStr: "R$ 2,14",
    taxaCliqueConversa: 28.78,
    taxaCliqueConversaStr: "28,78%",
  },
  {
    campanhaPublico: "Campanha JL · Visitantes do site 30 dias",
    investido: 333.24,
    investidoStr: "R$ 333,24",
    impressoes: 7104,
    impressoesStr: "7.104",
    cliques: 38,
    cliquesStr: "38",
    ctr: 0.53,
    ctrStr: "0,53%",
    cpc: 8.77,
    cpcStr: "R$ 8,77",
    cpm: 46.91,
    cpmStr: "R$ 46,91",
    conversas: 20,
    conversasStr: "20",
    custoConversa: 16.66,
    custoConversaStr: "R$ 16,66",
    taxaCliqueConversa: 52.63,
    taxaCliqueConversaStr: "52,63%",
  },
];

export const META_PUBLICOS_CARDS = {
  motor90dias: {
    titulo: "Visitantes de 90 dias: o motor da conta",
    conversas: "369 conversas",
    custoConversa: "R$ 2,46",
    parteConversas: "94,86%",
    parteVerba: "73,18%",
    descricao:
      "Quem visitou o site nos últimos 90 dias já conhece a Telenick e responde muito bem ao anúncio. A campanha RR, só com esse público, teve o melhor custo do mês: R$ 2,14 por conversa.",
  },
  alerta30dias: {
    titulo: "Visitantes de 30 dias: caro para o que entrega",
    custoConversa: "R$ 16,66 por conversa",
    conversas: "20",
    parteConversas: "5,14%",
    parteVerba: "26,82%",
    descricao:
      "É um público pequeno, já contido dentro do de 90 dias. O anúncio aparece muitas vezes para as mesmas pessoas e o Meta cobra caro por isso: CPM de R$ 46,91, mais de cinco vezes o do público de 90 dias.",
  },
};

export const CREATIVES_BAR_CHART = [
  {
    nome: "Prova social",
    conversas: 167,
    custoStr: "R$ 2,95 cada",
    isTop: true,
  },
  {
    nome: "Foto NK 6000 (AD 02)",
    conversas: 128,
    custoStr: "R$ 2,04 cada",
    isTop: true,
  },
  {
    nome: "Vídeo prova social STR 100W",
    conversas: 57,
    custoStr: "R$ 2,60 cada",
    isTop: true,
  },
  {
    nome: "Vídeo STR 300 WB",
    conversas: 14,
    custoStr: "R$ 15,45 cada",
    isTop: false,
  },
  {
    nome: "Foto NK 6000 (AD 01)",
    conversas: 13,
    custoStr: "R$ 3,07 cada",
    isTop: false,
  },
  {
    nome: "NK 6000 dor",
    conversas: 7,
    custoStr: "R$ 1,47 cada",
    isTop: false,
  },
];

export const CREATIVE_SPOTLIGHTS = {
  fotoNk6000Ad02: {
    nome: "Foto NK 6000 (AD 02)",
    conversas: "128 conversas",
    custoConversa: "R$ 2,04",
    ctr: "1,24%",
    cpc: "R$ 0,62",
    comentario:
      "O anúncio mais eficiente do mês entre os de volume: a foto direta do produto gera o clique mais barato e a conversa mais barata.",
  },
  provaSocial: {
    nome: "Prova social",
    conversas: "167 conversas",
    custoConversa: "R$ 2,95",
    taxaCliqueConversa: "38,93%",
    investido: "R$ 492,05",
    comentario:
      "O que mais traz volume. Mostrar clientes que já usam os transmissores convence: quase 4 em cada 10 pessoas que clicam iniciam conversa.",
  },
};

export const ALL_ADS: AdCreative[] = [
  {
    id: "ad-1",
    anuncio: "Prova social",
    status: "Ativo",
    investido: 492.05,
    investidoStr: "R$ 492,05",
    impressoes: 56496,
    impressoesStr: "56.496",
    cliques: 429,
    cliquesStr: "429",
    ctr: 0.76,
    ctrStr: "0,76%",
    cpc: 1.15,
    cpcStr: "R$ 1,15",
    cpm: 8.71,
    cpmStr: "R$ 8,71",
    conversas: 167,
    conversasStr: "167",
    custoConversa: 2.95,
    custoConversaStr: "R$ 2,95",
    taxaCliqueConversa: 38.93,
    taxaCliqueConversaStr: "38,93%",
    isTopPerformer: true,
    highlightNote: "Maior volume de conversas do mês (167 conversas).",
  },
  {
    id: "ad-2",
    anuncio: "Foto NK 6000 (AD 02)",
    status: "Ativo",
    investido: 261.29,
    investidoStr: "R$ 261,29",
    impressoes: 33916,
    impressoesStr: "33.916",
    cliques: 422,
    cliquesStr: "422",
    ctr: 1.24,
    ctrStr: "1,24%",
    cpc: 0.62,
    cpcStr: "R$ 0,62",
    cpm: 7.7,
    cpmStr: "R$ 7,70",
    conversas: 128,
    conversasStr: "128",
    custoConversa: 2.04,
    custoConversaStr: "R$ 2,04",
    taxaCliqueConversa: 30.33,
    taxaCliqueConversaStr: "30,33%",
    isTopPerformer: true,
    highlightNote: "Mais eficiente em custo/conversa (R$ 2,04) com alto volume.",
  },
  {
    id: "ad-3",
    anuncio: "Vídeo prova social STR 100W",
    status: "Ativo",
    investido: 148.08,
    investidoStr: "R$ 148,08",
    impressoes: 15032,
    impressoesStr: "15.032",
    cliques: 228,
    cliquesStr: "228",
    ctr: 1.52,
    ctrStr: "1,52%",
    cpc: 0.65,
    cpcStr: "R$ 0,65",
    cpm: 9.85,
    cpmStr: "R$ 9,85",
    conversas: 57,
    conversasStr: "57",
    custoConversa: 2.6,
    custoConversaStr: "R$ 2,60",
    taxaCliqueConversa: 25.0,
    taxaCliqueConversaStr: "25,00%",
    isTopPerformer: true,
    highlightNote: "Melhor CTR entre os ativos com volume (1,52%).",
  },
  {
    id: "ad-4",
    anuncio: "Vídeo STR 300 WB",
    status: "Ativo",
    investido: 216.29,
    investidoStr: "R$ 216,29",
    impressoes: 4629,
    impressoesStr: "4.629",
    cliques: 28,
    cliquesStr: "28",
    ctr: 0.6,
    ctrStr: "0,60%",
    cpc: 7.72,
    cpcStr: "R$ 7,72",
    cpm: 46.72,
    cpmStr: "R$ 46,72",
    conversas: 14,
    conversasStr: "14",
    custoConversa: 15.45,
    custoConversaStr: "R$ 15,45",
    taxaCliqueConversa: 50.0,
    taxaCliqueConversaStr: "50,00%",
    highlightNote: "Roda no público de 30 dias; CPM elevado (R$ 46,72).",
  },
  {
    id: "ad-5",
    anuncio: "Foto NK 6000 (AD 01)",
    status: "Ativo",
    investido: 39.89,
    investidoStr: "R$ 39,89",
    impressoes: 5324,
    impressoesStr: "5.324",
    cliques: 68,
    cliquesStr: "68",
    ctr: 1.28,
    ctrStr: "1,28%",
    cpc: 0.59,
    cpcStr: "R$ 0,59",
    cpm: 7.49,
    cpmStr: "R$ 7,49",
    conversas: 13,
    conversasStr: "13",
    custoConversa: 3.07,
    custoConversaStr: "R$ 3,07",
    taxaCliqueConversa: 19.12,
    taxaCliqueConversaStr: "19,12%",
  },
  {
    id: "ad-6",
    anuncio: "NK 6000 dor",
    status: "Ativo",
    investido: 10.27,
    investidoStr: "R$ 10,27",
    impressoes: 858,
    impressoesStr: "858",
    cliques: 20,
    cliquesStr: "20",
    ctr: 2.33,
    ctrStr: "2,33%",
    cpc: 0.51,
    cpcStr: "R$ 0,51",
    cpm: 11.97,
    cpmStr: "R$ 11,97",
    conversas: 7,
    conversasStr: "7",
    custoConversa: 1.47,
    custoConversaStr: "R$ 1,47",
    taxaCliqueConversa: 35.0,
    taxaCliqueConversaStr: "35,00%",
  },
  {
    id: "ad-7",
    anuncio: "Vídeo autoridade (IA)",
    status: "Pausado",
    investido: 61.44,
    investidoStr: "R$ 61,44",
    impressoes: 1232,
    impressoesStr: "1.232",
    cliques: 3,
    cliquesStr: "3",
    ctr: 0.24,
    ctrStr: "0,24%",
    cpc: 20.48,
    cpcStr: "R$ 20,48",
    cpm: 49.87,
    cpmStr: "R$ 49,87",
    conversas: 1,
    conversasStr: "1",
    custoConversa: 61.44,
    custoConversaStr: "R$ 61,44",
    taxaCliqueConversa: 33.33,
    taxaCliqueConversaStr: "33,33%",
  },
  {
    id: "ad-8",
    anuncio: "NK 6000 custo-benefício",
    status: "Pausado",
    investido: 0.26,
    investidoStr: "R$ 0,26",
    impressoes: 26,
    impressoesStr: "26",
    cliques: 2,
    cliquesStr: "2",
    ctr: 7.69,
    ctrStr: "7,69%",
    cpc: 0.13,
    cpcStr: "R$ 0,13",
    cpm: 10.0,
    cpmStr: "R$ 10,00",
    conversas: 1,
    conversasStr: "1",
    custoConversa: 0.26,
    custoConversaStr: "R$ 0,26",
    taxaCliqueConversa: 50.0,
    taxaCliqueConversaStr: "50,00%",
  },
  {
    id: "ad-9",
    anuncio: "NK 6000 produto",
    status: "Pausado",
    investido: 0.06,
    investidoStr: "R$ 0,06",
    impressoes: 14,
    impressoesStr: "14",
    cliques: 2,
    cliquesStr: "2",
    ctr: 14.29,
    ctrStr: "14,29%",
    cpc: 0.03,
    cpcStr: "R$ 0,03",
    cpm: 4.29,
    cpmStr: "R$ 4,29",
    conversas: 1,
    conversasStr: "1",
    custoConversa: 0.06,
    custoConversaStr: "R$ 0,06",
    taxaCliqueConversa: 50.0,
    taxaCliqueConversaStr: "50,00%",
  },
  {
    id: "ad-10",
    anuncio: 'Vídeo "Você radialista"',
    status: "Pausado",
    investido: 13.08,
    investidoStr: "R$ 13,08",
    impressoes: 116,
    impressoesStr: "116",
    cliques: 0,
    cliquesStr: "0",
    ctr: 0.0,
    ctrStr: "0,00%",
    cpc: 0,
    cpcStr: "-",
    cpm: 112.76,
    cpmStr: "R$ 112,76",
    conversas: 0,
    conversasStr: "0",
    custoConversa: 0,
    custoConversaStr: "-",
    taxaCliqueConversa: 0,
    taxaCliqueConversaStr: "-",
  },
];

export const AUDIENCE_AGE_DATA: AudienceAgeData[] = [
  {
    idade: "18-24",
    investido: 33.92,
    investidoStr: "R$ 33,92",
    impressoes: 3088,
    impressoesStr: "3.088",
    cliques: 26,
    cliquesStr: "26",
    ctr: 0.84,
    ctrStr: "0,84%",
    cpc: 1.3,
    cpcStr: "R$ 1,30",
    cpm: 10.98,
    cpmStr: "R$ 10,98",
    conversas: 7,
    conversasStr: "7",
    custoConversa: 4.85,
    custoConversaStr: "R$ 4,85",
    taxaCliqueConversa: 26.92,
    taxaCliqueConversaStr: "26,92%",
  },
  {
    idade: "25-34",
    investido: 105.62,
    investidoStr: "R$ 105,62",
    impressoes: 9784,
    impressoesStr: "9.784",
    cliques: 88,
    cliquesStr: "88",
    ctr: 0.9,
    ctrStr: "0,90%",
    cpc: 1.2,
    cpcStr: "R$ 1,20",
    cpm: 10.8,
    cpmStr: "R$ 10,80",
    conversas: 24,
    conversasStr: "24",
    custoConversa: 4.4,
    custoConversaStr: "R$ 4,40",
    taxaCliqueConversa: 27.27,
    taxaCliqueConversaStr: "27,27%",
  },
  {
    idade: "35-44",
    investido: 224.42,
    investidoStr: "R$ 224,42",
    impressoes: 20916,
    impressoesStr: "20.916",
    cliques: 157,
    cliquesStr: "157",
    ctr: 0.75,
    ctrStr: "0,75%",
    cpc: 1.43,
    cpcStr: "R$ 1,43",
    cpm: 10.73,
    cpmStr: "R$ 10,73",
    conversas: 49,
    conversasStr: "49",
    custoConversa: 4.58,
    custoConversaStr: "R$ 4,58",
    taxaCliqueConversa: 31.21,
    taxaCliqueConversaStr: "31,21%",
  },
  {
    idade: "45-54",
    investido: 371.51,
    investidoStr: "R$ 371,51",
    impressoes: 30691,
    impressoesStr: "30.691",
    cliques: 339,
    cliquesStr: "339",
    ctr: 1.1,
    ctrStr: "1,10%",
    cpc: 1.1,
    cpcStr: "R$ 1,10",
    cpm: 12.1,
    cpmStr: "R$ 12,10",
    conversas: 128,
    conversasStr: "128",
    custoConversa: 2.9,
    custoConversaStr: "R$ 2,90",
    taxaCliqueConversa: 37.76,
    taxaCliqueConversaStr: "37,76%",
    isTopSegment: true,
  },
  {
    idade: "55-64",
    investido: 348.13,
    investidoStr: "R$ 348,13",
    impressoes: 23861,
    impressoesStr: "23.861",
    cliques: 334,
    cliquesStr: "334",
    ctr: 1.4,
    ctrStr: "1,40%",
    cpc: 1.04,
    cpcStr: "R$ 1,04",
    cpm: 14.59,
    cpmStr: "R$ 14,59",
    conversas: 130,
    conversasStr: "130",
    custoConversa: 2.68,
    custoConversaStr: "R$ 2,68",
    taxaCliqueConversa: 38.92,
    taxaCliqueConversaStr: "38,92%",
    isTopSegment: true,
  },
  {
    idade: "65+",
    investido: 156.18,
    investidoStr: "R$ 156,18",
    impressoes: 8560,
    impressoesStr: "8.560",
    cliques: 152,
    cliquesStr: "152",
    ctr: 1.78,
    ctrStr: "1,78%",
    cpc: 1.03,
    cpcStr: "R$ 1,03",
    cpm: 18.25,
    cpmStr: "R$ 18,25",
    conversas: 48,
    conversasStr: "48",
    custoConversa: 3.25,
    custoConversaStr: "R$ 3,25",
    taxaCliqueConversa: 31.58,
    taxaCliqueConversaStr: "31,58%",
  },
  {
    idade: "Não informada",
    investido: 2.93,
    investidoStr: "R$ 2,93",
    impressoes: 20743,
    impressoesStr: "20.743",
    cliques: 106,
    cliquesStr: "106",
    ctr: 0.51,
    ctrStr: "0,51%",
    cpc: 0.03,
    cpcStr: "R$ 0,03",
    cpm: 0.14,
    cpmStr: "R$ 0,14",
    conversas: 3,
    conversasStr: "3",
    custoConversa: 0.98,
    custoConversaStr: "R$ 0,98",
    taxaCliqueConversa: 2.83,
    taxaCliqueConversaStr: "2,83%",
  },
];

export const DEMOGRAPHICS_SUMMARY = {
  destaqueIdade:
    "Quem tem de 45 a 64 anos respondeu por 258 conversas, 66,32% do total. É o perfil típico de dono ou técnico de rádio.",
  homensMulheres: {
    homens: {
      conversas: "367",
      custoConversa: "R$ 3,18",
      parteConversas: "94,34%",
    },
    mulheres: {
      conversas: "13",
      custoConversa: "R$ 5,02",
      investido: "R$ 65,24",
    },
    comentario:
      "O mercado de radiodifusão é quase todo masculino, e o Meta já entendeu isso sozinho: concentra a verba nos homens, sem precisar de restrição manual.",
  },
};

export const GOOGLE_ADS_OVERVIEW = {
  subtitulo: "Pesquisa",
  descricao:
    "Três campanhas de pesquisa ficaram no ar em outubro. Elas aparecem quando alguém digita no Google termos ligados a transmissores, como os modelos NK001 e NK 6000.",
  kpis: [
    { label: "Conversões", value: "93", highlight: true },
    { label: "Custo por conversão", value: "R$ 18,37", highlight: true },
    { label: "Investido", value: "R$ 1.708,83" },
    { label: "Cliques", value: "576" },
    { label: "CTR", value: "8,74%" },
    { label: "CPC", value: "R$ 2,97" },
  ],
  tabelaDescricao:
    "Orçamento diário configurado em cada campanha. CTR de pesquisa é naturalmente bem maior que o do Meta, porque o anúncio só aparece para quem buscou o assunto.",
};

export const GOOGLE_CAMPAIGNS: GoogleCampaign[] = [
  {
    campanha: "NK001 Leads (principal)",
    orcamentoDia: 20.0,
    orcamentoDiaStr: "R$ 20,00",
    investido: 596.02,
    investidoStr: "R$ 596,02",
    impressoes: 1644,
    impressoesStr: "1.644",
    cliques: 131,
    cliquesStr: "131",
    ctr: 7.97,
    ctrStr: "7,97%",
    cpc: 4.55,
    cpcStr: "R$ 4,55",
    conversoes: 74,
    conversoesStr: "74",
    custoConversao: 8.05,
    custoConversaoStr: "R$ 8,05",
    taxaCliqueConversao: 56.49,
    taxaCliqueConversaoStr: "56,49%",
    shareVerbaGoogle: 34.88,
    shareVerbaGoogleStr: "34,88%",
    shareConversoesGoogle: 79.57,
    shareConversoesGoogleStr: "79,57%",
    statusNota: "Limitada pelo orçamento",
  },
  {
    campanha: "NK6000",
    orcamentoDia: 30.0,
    orcamentoDiaStr: "R$ 30,00",
    investido: 912.87,
    investidoStr: "R$ 912,87",
    impressoes: 4612,
    impressoesStr: "4.612",
    cliques: 412,
    cliquesStr: "412",
    ctr: 8.93,
    ctrStr: "8,93%",
    cpc: 2.22,
    cpcStr: "R$ 2,22",
    conversoes: 17,
    conversoesStr: "17",
    custoConversao: 53.7,
    custoConversaoStr: "R$ 53,70",
    taxaCliqueConversao: 4.13,
    taxaCliqueConversaoStr: "4,13%",
    shareVerbaGoogle: 53.42,
    shareVerbaGoogleStr: "53,42%",
    shareConversoesGoogle: 18.28,
    shareConversoesGoogleStr: "18,28%",
    statusNota: "Muito clique, pouca conversão",
  },
  {
    campanha: "NK001 Leads #2",
    orcamentoDia: 20.0,
    orcamentoDiaStr: "R$ 20,00",
    investido: 199.93,
    investidoStr: "R$ 199,93",
    impressoes: 333,
    impressoesStr: "333",
    cliques: 33,
    cliquesStr: "33",
    ctr: 9.91,
    ctrStr: "9,91%",
    cpc: 6.06,
    cpcStr: "R$ 6,06",
    conversoes: 2,
    conversoesStr: "2",
    custoConversao: 99.97,
    custoConversaoStr: "R$ 99,97",
    taxaCliqueConversao: 6.06,
    taxaCliqueConversaoStr: "6,06%",
    shareVerbaGoogle: 11.7,
    shareVerbaGoogleStr: "11,70%",
    shareConversoesGoogle: 2.15,
    shareConversoesGoogleStr: "2,15%",
    statusNota: "Disputa buscas com a principal",
  },
];

export const GOOGLE_SPOTLIGHTS = {
  nk001Leads: {
    titulo: "NK001 Leads: a campanha que mais converte",
    conversoes: "74 conversões",
    custoConversao: "R$ 8,05",
    taxaCliqueConversao: "56,49%",
    parteConversoes: "79,57%",
    descricao:
      "Mais da metade de quem clica vira contato. O Google marcou a campanha como limitada pelo orçamento: havia mais buscas do que a verba diária conseguiu cobrir.",
  },
  nk6000: {
    titulo: "NK6000: muito clique, pouca conversão",
    custoConversao: "R$ 53,70 por conversão",
    investido: "R$ 912,87",
    parteVerbaGoogle: "53,42%",
    taxaCliqueConversao: "4,13%",
    descricao:
      "A campanha atrai bastante clique (412 no mês), mas poucos viram contato. Sinal de que parte das pesquisas que ativam o anúncio não é de comprador, e os termos de pesquisa precisam de filtro.",
  },
};

export const O_QUE_DEU_CERTO = [
  {
    titulo: "Volume constante de contatos",
    detalhe:
      "482 interessados no mês, cerca de 15,5 por dia, somando WhatsApp e busca.",
    metrica: "482 contatos (15,5/dia)",
  },
  {
    titulo: "Remarketing de 90 dias sustenta o Meta",
    detalhe:
      "369 conversas a R$ 2,46, 94,86% de todas as conversas do canal. Na campanha RR o custo caiu para R$ 2,14.",
    metrica: "369 conversas a R$ 2,46",
  },
  {
    titulo: "Foto do NK 6000 é o criativo mais eficiente",
    detalhe:
      "128 conversas a R$ 2,04, com clique a R$ 0,62.",
    metrica: "128 conversas a R$ 2,04 (CPC R$ 0,62)",
  },
  {
    titulo: "Prova social segue como o maior gerador de volume",
    detalhe:
      "167 conversas, e o vídeo de prova social do STR 100W somou mais 57 a R$ 2,60.",
    metrica: "167 + 57 conversas",
  },
  {
    titulo: "Anúncios chamando mais atenção",
    detalhe:
      "O CTR do Meta subiu para 1,02%, contra 0,86% na média da conta.",
    metrica: "+18,6% no CTR (1,02% vs 0,86%)",
  },
  {
    titulo: "Público certo",
    detalhe:
      "45 a 64 anos responde por 66,32% das conversas, com os menores custos (R$ 2,68 entre 55 e 64 anos).",
    metrica: "66,32% das conversas a R$ 2,68-2,90",
  },
  {
    titulo: "Busca do NK001 com alta intenção",
    detalhe:
      "74 conversões a R$ 8,05, e 56,49% dos cliques viraram contato.",
    metrica: "56,49% de taxa (74 conversões a R$ 8,05)",
  },
];

export const PONTOS_DE_ATENCAO = [
  {
    titulo: "Público de visitantes de 30 dias",
    detalhe:
      "Ficou com 26,82% da verba do Meta e trouxe 5,14% das conversas, a R$ 16,66 cada. Essas pessoas já estão dentro do público de 90 dias, que converte a R$ 2,46.",
    impacto: "R$ 333,24 consumidos a R$ 16,66/conversa",
    acaoSugerida: "Desativar ou pausar público de 30d e concentrar 100% no público de 90 dias",
  },
  {
    titulo: "Vídeo STR 300 WB",
    detalhe:
      "R$ 216,29 investidos para 14 conversas, R$ 15,45 cada. Ele roda justamente no público de 30 dias, o que encarece.",
    impacto: "R$ 15,45 por conversa",
    acaoSugerida: "Mover criativo para o público de 90 dias ou testar nova variação",
  },
  {
    titulo: "Campanha NK6000 no Google",
    detalhe:
      "53,42% da verba do Google para 17 conversões, a R$ 53,70 cada.",
    impacto: "R$ 912,87 investidos com taxa de apenas 4,13%",
    acaoSugerida: "Negativação rigorosa de termos de pesquisa irrelevantes",
  },
  {
    titulo: "NK001 Leads #2",
    detalhe:
      "R$ 199,93 para 2 conversões. Ela disputa as mesmas buscas da campanha principal de NK001, que converte muito melhor.",
    impacto: "R$ 99,97 por conversão (canibalização)",
    acaoSugerida: "Pausar #2 e realocar os R$ 199,93 para a campanha principal de NK001",
  },
  {
    titulo: "Custo por conversa do Meta",
    detalhe:
      "Subiu de R$ 2,91 na média para R$ 3,19 em outubro, puxado pelo público de 30 dias. O restante da conta rodou a R$ 2,46.",
    impacto: "+9,6% no custo médio mensal",
    acaoSugerida: "Ajuste de segmentação trará o custo de volta à faixa de R$ 2,46",
  },
];

export const FOOTNOTES =
  "Fontes: Gerenciador de Anúncios do Meta e relatório de campanhas do Google Ads, período de 01/10/2026 a 31/10/2026. Conversas do Meta são conversas por mensagem iniciadas no WhatsApp e atribuídas aos anúncios. Conversões do Google são as ações configuradas como conversão na conta. A média de comparação vem do raio-x da conta de 01/07 a 22/10/2026 (Meta). Campanhas pausadas no Google que não gastaram em outubro foram deixadas de fora.";
