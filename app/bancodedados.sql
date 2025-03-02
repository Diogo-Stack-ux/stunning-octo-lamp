-- public.alunos definição

-- Drop table

-- DROP TABLE public.alunos;

CREATE TABLE public.alunos (
	id serial4 NOT NULL,
	nome varchar(255) NULL,
	nome_do_pai varchar(255) NULL,
	nome_da_mae varchar(255) NULL,
	data_de_nascimento date NULL,
	cor_da_pele varchar(255) NULL,
	CONSTRAINT alunos_pkey PRIMARY KEY (id)
);


-- public.animais definição

-- Drop table

-- DROP TABLE public.animais;

CREATE TABLE public.animais (
	id serial4 NOT NULL,
	nome varchar(255) NULL,
	nome_cientifico varchar(255) NULL,
	especie varchar(255) NULL,
	grupo varchar(255) NULL,
	CONSTRAINT animais_pkey PRIMARY KEY (id)
);


-- public.apartamentos definição

-- Drop table

-- DROP TABLE public.apartamentos;

CREATE TABLE public.apartamentos (
	id int4 DEFAULT nextval('ape_id_seq'::regclass) NOT NULL,
	tipo varchar(255) NULL,
	condominio varchar(255) NULL,
	area_privativa varchar(255) NULL,
	area_comum varchar(255) NULL,
	quantidade_de_quartos varchar(255) NULL,
	quantidade_de_banheiros varchar(255) NULL,
	tem_churrasqueira varchar(255) NULL,
	tem_piscina varchar(255) NULL,
	valor_do_condominio varchar(255) NULL,
	preco_de_venda varchar(255) NULL,
	CONSTRAINT ape_pkey PRIMARY KEY (id)
);


-- public.carro definição

-- Drop table

-- DROP TABLE public.carro;

CREATE TABLE public.carro (
	id serial4 NOT NULL,
	fabricante varchar(255) NOT NULL,
	modelo varchar(255) NOT NULL,
	ano_de_fabricaçao varchar(10) NOT NULL,
	cor varchar(255) NOT NULL,
	quilometros_rodados varchar(255) NOT NULL,
	CONSTRAINT carro_pkey PRIMARY KEY (id)
);


-- public.casa_de_oracao definição

-- Drop table

-- DROP TABLE public.casa_de_oracao;

CREATE TABLE public.casa_de_oracao (
	id serial4 NOT NULL,
	nome varchar(255) NULL,
	endereco varchar(255) NULL,
	anciao varchar(255) NULL,
	telefone_anciao varchar(255) NULL,
	cooperador varchar(255) NULL,
	telefone_cooperador varchar(255) NULL,
	cooperador_de_jovens varchar(255) NULL,
	telefone_cooperador_de_jovens varchar(255) NULL,
	diacono varchar(255) NULL,
	telefone_diacono varchar(255) NULL,
	numero_da_ultima_santa_ceia varchar(255) NULL,
	CONSTRAINT casa_de_oracao_pkey PRIMARY KEY (id)
);


-- public.casas definição

-- Drop table

-- DROP TABLE public.casas;

CREATE TABLE public.casas (
	id serial4 NOT NULL,
	tipo varchar(255) NOT NULL,
	endereco varchar(255) NOT NULL,
	area_terreno varchar NOT NULL,
	area_construida varchar NOT NULL,
	quantidade_quartos varchar NOT NULL,
	quantidade_banheiros varchar NOT NULL,
	tem_edicula varchar NOT NULL,
	tem_churrasqueira varchar NOT NULL,
	tem_piscina varchar NOT NULL,
	valor_condominio varchar NULL,
	preco_venda varchar NOT NULL,
	CONSTRAINT casas_pkey PRIMARY KEY (id)
);


-- public.clientes definição

-- Drop table

-- DROP TABLE public.clientes;

CREATE TABLE public.clientes (
	id serial4 NOT NULL,
	primeiro_nome varchar(255) NOT NULL,
	endereco_de_email varchar(255) NOT NULL,
	data_de_nascimento date NOT NULL,
	numero_de_telefone varchar(255) NOT NULL,
	endereco varchar(255) NOT NULL,
	cpf varchar(11) NOT NULL,
	CONSTRAINT clientes_pkey PRIMARY KEY (id)
);


-- public.computadores definição

-- Drop table

-- DROP TABLE public.computadores;

CREATE TABLE public.computadores (
	id int4 DEFAULT nextval('computador_id_seq'::regclass) NOT NULL,
	descricao varchar(255) NULL,
	cpu varchar(255) NULL,
	memoria varchar(255) NULL,
	placa_video varchar(255) NULL,
	placa_mae varchar(255) NULL,
	fonte varchar(255) NULL,
	armazenamento varchar(255) NULL,
	CONSTRAINT computador_pkey PRIMARY KEY (id)
);


-- public.curriculo definição

-- Drop table

-- DROP TABLE public.curriculo;

CREATE TABLE public.curriculo (
	id serial4 NOT NULL,
	nome varchar(255) NULL,
	endereco varchar(255) NULL,
	curriculo varchar(255) NULL,
	habilidades varchar(255) NULL,
	CONSTRAINT curriculo_pkey PRIMARY KEY (id)
);


-- public.escola definição

-- Drop table

-- DROP TABLE public.escola;

CREATE TABLE public.escola (
	id serial4 NOT NULL,
	nome varchar(255) NULL,
	endereco varchar(255) NULL,
	quantidade_alunos varchar(255) NULL,
	telefone varchar(255) NULL,
	CONSTRAINT escola_pkey PRIMARY KEY (id)
);


-- public.filmes definição

-- Drop table

-- DROP TABLE public.filmes;

CREATE TABLE public.filmes (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	diretor varchar(255) NOT NULL,
	assunto varchar(255) NULL,
	classificacao_etaria varchar(10) NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT filmes_pkey PRIMARY KEY (id)
);


-- public.formulario definição

-- Drop table

-- DROP TABLE public.formulario;

CREATE TABLE public.formulario (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	endereço_de_email varchar(255) NOT NULL,
	data_de_nascimento date NOT NULL,
	numero_de_telefone numeric NOT NULL,
	endereco varchar(255) NOT NULL,
	cpf varchar(11) NOT NULL,
	CONSTRAINT formulario_cpf_key UNIQUE (cpf),
	CONSTRAINT formulario_endereço_de_email_key UNIQUE ("endereço_de_email"),
	CONSTRAINT formulario_pkey PRIMARY KEY (id)
);


-- public.hinos definição

-- Drop table

-- DROP TABLE public.hinos;

CREATE TABLE public.hinos (
	id int4 DEFAULT nextval('hino_id_seq'::regclass) NOT NULL,
	titulo varchar(255) NULL,
	numero varchar(255) NULL,
	letra varchar(255) NULL,
	CONSTRAINT hino_pkey PRIMARY KEY (id)
);


-- public.instrumentos definição

-- Drop table

-- DROP TABLE public.instrumentos;

CREATE TABLE public.instrumentos (
	id int4 DEFAULT nextval('instrumento_id_seq'::regclass) NOT NULL,
	nome varchar(255) NULL,
	tipo varchar(255) NULL,
	CONSTRAINT instrumento_pkey PRIMARY KEY (id)
);


-- public.instrutores definição

-- Drop table

-- DROP TABLE public.instrutores;

CREATE TABLE public.instrutores (
	id int4 DEFAULT nextval('instrutor_id_seq'::regclass) NOT NULL,
	nome varchar(255) NOT NULL,
	especialidade varchar(255) NOT NULL,
	data_de_nascimento varchar(255) NOT NULL,
	endereco varchar(255) NOT NULL,
	comum varchar(255) NULL,
	CONSTRAINT instrutor_pkey PRIMARY KEY (id)
);


-- public.livros definição

-- Drop table

-- DROP TABLE public.livros;

CREATE TABLE public.livros (
	id int4 DEFAULT nextval('livro_id_seq'::regclass) NOT NULL,
	nome varchar(255) NOT NULL,
	autor varchar(255) NOT NULL,
	assunto varchar(400) NOT NULL,
	resumo varchar(500) NOT NULL,
	data_de_lancamento varchar(255) NOT NULL,
	preco_sugerido varchar(255) NOT NULL,
	CONSTRAINT livro_pkey PRIMARY KEY (id)
);


-- public.materias definição

-- Drop table

-- DROP TABLE public.materias;

CREATE TABLE public.materias (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	descricao varchar(255) NOT NULL,
	ano_letivo varchar(10) NOT NULL,
	CONSTRAINT materias_pkey PRIMARY KEY (id)
);


-- public.pneus definição

-- Drop table

-- DROP TABLE public.pneus;

CREATE TABLE public.pneus (
	id int4 DEFAULT nextval('pneu_id_seq'::regclass) NOT NULL,
	marca varchar(255) NULL,
	modelo varchar(255) NULL,
	largura varchar(255) NULL,
	raio varchar(255) NULL,
	especura varchar(255) NULL,
	carga_maxima varchar(255) NULL,
	CONSTRAINT pneu_pkey PRIMARY KEY (id)
);


-- public.products definição

-- Drop table

-- DROP TABLE public.products;

CREATE TABLE public.products (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	valor_unitario numeric(10, 2) NOT NULL,
	validade date NULL,
	descricao text NULL,
	CONSTRAINT products_pkey PRIMARY KEY (id)
);


-- public.professor definição

-- Drop table

-- DROP TABLE public.professor;

CREATE TABLE public.professor (
	id serial4 NOT NULL,
	nome varchar(255) NULL,
	endereco varchar(255) NULL,
	especialidade varchar(255) NULL,
	telefone varchar(255) NULL,
	email varchar(255) NULL,
	CONSTRAINT professor_pkey PRIMARY KEY (id)
);


-- public.usuarios definição

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id int4 DEFAULT nextval('usuario_id_seq'::regclass) NOT NULL,
	nome varchar(255) NULL,
	apelido varchar(255) NULL,
	email varchar(255) NULL,
	senha varchar(255) NULL,
	CONSTRAINT usuario_pkey PRIMARY KEY (id)
);