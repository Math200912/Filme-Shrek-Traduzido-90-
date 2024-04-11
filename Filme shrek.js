async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
SHREK


Escrito por


William Steig e Ted Elliott







SHREK
Era uma vez uma linda
princesa. Mas ela tinha sobre si um encantamento de um tipo temível que só poderia ser quebrado pelo primeiro beijo de amor.
Estava fechada num castelo guardado por um terrível dragão cuspidor de fogo.
Muitos cavaleiros corajosos tentaram libertá-la desta terrível prisão, mas nenhum prevaleceu. Na fortaleza do dragão, na sala mais alta da torre mais alta, ela esperou pelo seu verdadeiro amor e pelo primeiro beijo do seu verdadeiro amor. (risos) Como se isso alguma vez fosse acontecer. Que monte de - (descarga da sanita)

Allstar - de Smashmouth começa a tocar. O Shrek faz o seu trabalho. Numa cidade próxima, os aldeões juntam-se para ir atrás do ogre.
 
NOITE - PERTO DA CASA DO SHREK
 
MAN1
Achas que está aí?


MAN2
Muito bem. Vamos a isso!


MAN1
Uau. Espera aí. Sabes o que essa coisa te pode fazer?

MAN3
Sim, ele vai moer os teus ossos para o seu pão.

O Shrek esgueira-se por trás deles e ri-se.


SHREK
Sim, bem, na verdade, isso seria uma
gigante. Agora, ogros, oh, eles são muito piores.
Vão fazer um fato com a tua pele acabada de descascar.

HOMENS
Não!


SHREK
Vão rapar-te o fígado. Espreme a gelatina dos teus olhos! Na verdade, é muito bom numa torrada.

MAN1
 
Para trás! Para trás, besta! Para trás! Eu aviso-te! (acena com a tocha para o Shrek).

Shrek lambe calmamente os dedos e apaga a tocha. O
Os homens afastam-se dele. Shrek ruge muito alto e longamente e o seu hálito apaga todas as tochas que ainda restam até que o os homens estão às escuras.

SHREK
Esta é a parte em que se foge.
(Os homens tentam fugir. Ele ri-se). E não se metam! (olha para baixo e pega num pedaço de papel. Lê.) "Procura-se.
Criaturas de contos de fadas" (suspira e atira o papel por cima do ombro).



O DIA SEGUINTE


Há uma fila de criaturas de contos de fadas. O chefe da guarda senta-se numa mesa e paga às pessoas que lhe trazem as criaturas dos contos de fadas. Há gaiolas por todo o lado.
Algumas das pessoas na fila são Peter Pan, que transporta Sininho numa gaiola, Gipetto, que transporta Pinóquio, e um agricultor que transporta os três porquinhos.

GUARDA
Muito bem. Este está cheio. Pegue nele longe! Mexam-se. Vamos lá! Levanta-te!
 
GUARDA-CABEÇA
A seguir!


GUARDA
(pegando na vassoura de bruxa) Dá-me isso!
Os teus dias de voo acabaram. (parte a vassoura ao meio)

GUARDA-CABEÇA
São 20 moedas de prata para a bruxa. A seguir!

GUARDA
Levanta-te! Vamos lá!


GUARDA-CABEÇA
Vinte peças.


URSINHO
(chorando) Esta gaiola é demasiado pequena.


DONKEY
Por favor, não me entreguem. Eu nunca voltar a ser teimoso. Eu posso mudar. Por favor! Dêem-me outra oportunidade!

MULHER VELHA
Oh, cala-te. (sacode a corda)


DONKEY
Oh!
 
GUARDA-CABEÇA
A seguir! O que é que tens?


GIPETTO
Este pequeno fantoche de madeira.


PINOCCHIO
Não sou um fantoche. Sou um rapaz a sério. (o nariz dele cresce)

GUARDA-CABEÇA
Cinco xelins pelo brinquedo possuído. Levem-no.

PINOCCHIO
Pai, por favor! Não os deixes fazer isto! Ajuda-me!

Gipetto pega no dinheiro e vai-se embora. A mulher idosa aproxima-se da mesa.

GUARDA-CABEÇA
A seguir! O que é que tens?


MULHER VELHA
Bem, eu tenho um burro que fala.


GUARDA-CABEÇA
Pois. Bem, isso vale dez xelins, se o conseguires provar.
 
MULHER VELHA
Oh, força, pequenote.


O burro olha para ela.


GUARDA-CABEÇA
E então?


MULHER VELHA
Oh, oh, ele é apenas... ele é apenas um pequeno nervoso. Ele é mesmo um tagarela.
Fala, seu idiota...


GUARDA-CABEÇA
É isso mesmo. Já ouvi o suficiente. Guardas!




MULHER VELHA
Não, não, ele fala! Ele fala. (finge ser o Burro) Eu sei falar. Adoro falar.
Sou a coisa mais falante que já viste.


GUARDA-CABEÇA
Tira-a da minha vista.


MULHER VELHA
Não, não! Eu juro! Oh! Ele pode falar!


Os guardas agarram a idosa e ela debate-se com eles. Um
 
Uma das suas pernas voa e pontapeia a Sininho das mãos do Peter Pan, e a sua gaiola cai na cabeça do Burro. Ele é polvilhado com pó de fada e consegue voar.

DONKEY
Ei! Eu consigo voar!


PETER PAN
Ele pode voar!


3 PORQUINHOS
Ele pode voar!


GUARDA-CABEÇA
Ele pode falar!


DONKEY
Ha, ha! É isso mesmo, parvo! Agora sou um burro voador e falante. Podes
já viu uma mosca doméstica, talvez até uma super mosca, mas aposto que nunca viu um burro
voar. Ha, ha! (o pó de fada começa para passar o efeito) Uh-oh. (ele começa a afundar-se no chão).

Cai no chão com um baque.


GUARDA-CABEÇA
Apanhem-no! (O burro começa a correr.) Atrás dele!
 
GUARDAS
Ele está a fugir! Apanhem-no! Por aqui! Virem-se!

O Burro continua a correr e acaba por se cruzar com o Shrek. Literalmente. O Shrek vira-se para ver quem é que chocou com ele. O Burro parece assustado por um momento e depois vê os guardas a subir o caminho.
O Burro
esconde-se rapidamente atrás do Shrek.


GUARDA-CABEÇA
Tu aí. Ogre!


SHREK
Sim?


GUARDA-CABEÇA
Por ordem de Lord Farquaad, estou autorizado a colocar-vos a ambos sob prisão e a transportá-los para uma instalação de reinstalação designada.



SHREK
Oh, a sério? Tu e que exército?


Ele olha para trás do guarda e o guarda vira-se para olhar também e vemos que os outros homens fugiram. O guarda põe a cauda de fora e foge. O Shrek ri-se e volta à sua atividade e começa a caminhar de volta para a sua cabana.

DONKEY
Posso dizer-vos uma coisa? Ouve,
 
eras realmente, realmente, realmente algo aqui atrás. Incrível!

SHREK
Estás a falar... (volta-se e o Burro desaparece) comigo? (volta-se e o Burro está mesmo à frente
dele). Epa!


DONKEY
Sim. Eu estava a falar contigo. Posso dizer-te que foste fantástico
aqui? Aqueles guardas! Eles pensavam que eram tudo isso. Depois tu apareceste,
e pimba! Estavam a tropeçar em si próprios como se fossem bebés na floresta. Isso realmente
fez-me sentir bem ao ver isso.


SHREK
Oh, isso é ótimo. A sério.


DONKEY
Meu, é bom ser livre.


SHREK
Agora, porque não vais celebrar a tua liberdade com os teus próprios amigos? Hmm?



DONKEY
Mas não tenho amigos. E
 
Eu não vou lá fora sozinho. Ei, espera aí! Tive uma óptima ideia! Eu fico contigo. És uma máquina de combate verde e má. Juntos vamos assustar qualquer um que se cruze connosco.

Shrek vira-se e olha para o Burro por um momento antes de rugir bem alto.

DONKEY
Oh, uau! Isso foi realmente assustador. Se não se importam que eu diga, se isso não
trabalho, o seu fôlego vai certamente fazer o trabalho, porque definitivamente
precisa de uns Tic Tacs ou algo do género, porque o seu hálito cheira mal! Quase te queimaste
os pêlos do meu nariz, tal como o tempo... (Shrek tapa a boca mas o Burro continua a falar, por isso Shrek retira
a sua mão).	depois comi umas
bagas podres. Nesse dia, tive gases fortes a sair-me do rabo.

SHREK
Porque é que me estão a seguir?


DONKEY
Eu digo-vos porquê. (cantando) Porque Estou sozinho, Não há ninguém aqui ao meu lado, Os meus problemas desapareceram, Não há
 
ninguém para me ridicularizar, mas é preciso ter fé...

SHREK
Pára de cantar! Não admira que não tenhas amigos.

DONKEY
Uau. Só um verdadeiro amigo seria tão cruelmente honesto.

SHREK
Ouve, pequeno burro. Olha bem para mim. O que é que eu sou?

DONKEY
(olha para o Shrek) Uh ... muito alto?


SHREK
Não! Eu sou um ogre! Tu sabes. "Peguem nas vossas tochas e forquilhas." Isso não é incomoda-o?

DONKEY
Não.


SHREK
A sério?


DONKEY
 
A sério, a sério.


SHREK
Oh.


DONKEY
Meu, gosto de ti. Qual é o teu nome?


SHREK
Uh, Shrek.


DONKEY
Shrek? Bem, sabes o que eu gosto no
tu, Shrek? Tens aquela coisa do "não me importo com o que os outros pensam de mim". Eu gosto disso. Respeito isso,
Shrek. Estás bem? (Eles aproximam-se uma colina e podes ver a casa de campo do Shrek). Uau! Olha para isto. Quem é que quereria viver num sítio destes?

SHREK
Essa seria a minha casa.


DONKEY
Oh! E é lindo! Simplesmente lindo. Sabes que és uma grande decoradora.
É espantoso o que conseguiu fazer com um orçamento tão modesto. Gosto daquela pedra.
É uma bela pedra. Suponho que não te divertes muito, pois não?
 
SHREK
Gosto da minha privacidade.


DONKEY
Sabes, eu também. É outra coisa que temos em comum. Como eu odeio quando temos alguém na nossa cara. Estamos a tentar dar-lhes uma dica, e eles
não se vai embora. Há aquele silêncio incómodo. (silêncio constrangedor) Posso ficar contigo?



SHREK
O quê?


DONKEY
Posso ficar convosco, por favor?


SHREK
(sarcasticamente) Claro!


DONKEY
A sério?


SHREK
Não.


DONKEY
Por favor! Eu não quero voltar para lá! Tu não sabes o que é ser considerado uma aberração. (pausa enquanto ele
 
olha para o Shrek) Bem, talvez tu saibas. Mas é por isso que temos de nos manter unidos. Tens de me deixar ficar! Por favor! Por favor! Por favor!



SHREK
Muito bem! Está bem! Mas só uma noite.


DONKEY
Ah! Obrigado! (ele corre para dentro da casa de campo)




SHREK
O que é que tu...? (O burro salta para uma cadeira.) Não! Não!

DONKEY
Isto vai ser divertido! Podemos ficar acordados até tarde, a trocar histórias de homens, e de manhã estou a fazer wafles.

SHREK
Oh!


DONKEY
Onde é que eu durmo?


SHREK
(irritado) Lá fora!


DONKEY
 
Oh, bem, acho que isso é fixe. Quer dizer, Eu não te conheço, e tu não me conheces, por isso acho que o melhor é ficar de fora, tu
saber. Cá vou eu. Boa noite. (Shrek bate com a porta.) (suspiro) Quer dizer, eu gosto de estar ao ar livre. Sou um burro. Nasci cá fora. Vou ficar sentado sozinho lá fora, acho eu, sabes. Sozinho, lá fora. Estou sozinho... não há ninguém aqui ao meu lado...

CASA DE CAMPO DO SHREK - NOITE


O Shrek está a preparar-se para o jantar. Senta-se e acende uma vela feita de cera de ouvido. Começa a comer quando ouve um barulho. Levanta-se com um grito.

SHREK
(para o Burro) Pensei que te tinha dito para ficares lá fora.

DONKEY
(da janela) Estou cá fora.


Ouve-se outro barulho e Shrek vira-se para encontrar a pessoa que fez o barulho. Vê várias sombras a moverem-se. Finalmente vira-se e vê 3 ratos cegos na sua mesa.

MOUSE CEGO1
Bem, meus senhores, é muito longe da quinta, mas que escolha temos?
 

MOUSE CEGO2
Não é uma casa, mas serve perfeitamente.




GORDO
(saltando sobre uma lesma) Que cama tão bonita.




SHREK
Apanhei-te. (Agarra um rato, mas este escapa-se e pousa no seu ombro).

GORDO
Encontrei um pouco de queijo. (morde a orelha do Shrek)

SHREK
Ai!


GORDO
Blah! Coisas horríveis.


MOUSE CEGO1
És tu, Gordo?


GORDO
Como é que soube?


SHREK
 
Já chega! (agarra nos 3 ratos) O que é que estão a fazer na minha casa? (é abalroado por trás e deixa cair os ratos).
Ei! (vira-se e vê os Sete Anões com a Branca de Neve em cima da mesa) Oh, não,
Não, não. A gaja morta está fora da mesa.




DWARF
Onde é que a vamos pôr? A cama está ocupada.

SHREK
O quê?


O Shrek dirige-se para o quarto e fecha a cortina.
O Lobo Mau está sentado na cama. O lobo apenas olha para ele.

LOBO MAU
O quê?


INTERVALO DE TEMPO


O Shrek tem agora o Lobo Mau pelo colarinho e está a arrastá-lo para a porta da frente.

SHREK
Vivo num pântano. Coloco sinais. Sou um ogre aterrador! O que é que tenho de fazer para ter um pouco de privacidade? (Ele abre a
 
O jovem está na porta da frente para expulsar o Lobo e vê que todas as Criaturas de Contos de Fadas recolhidas estão na sua terra). Oh, não. Não! Não!

Os 3 ursos sentam-se à volta da fogueira, o flautista toca a sua O cachimbo e os ratos correm todos para ele, alguns duendes orientam o tráfego aéreo para que as fadas e as bruxas possam aterrar... etc.



SHREK
O que estão a fazer no meu pântano? (isto ecoa e todos se calam).



Ouvem-se suspiros por todo o lado. As 3 fadas boas escondem-se dentro de uma tenda.

SHREK
Muito bem, saiam daqui. Todos vocês, mexam-se! Vamos lá! Vamos embora! Hapaya!
Hapaya! Ei! Rápido. Vamos lá! (mais anões correm para dentro da casa) Não, não! Não, não, não. Aí não. Aí não. (fecham-lhe a porta) Oh! (vira-se para
olhar para o Burro)


DONKEY
Ei, não olhes para mim. Eu não os convidei.
 
PINOCCHIO
Oh, meu Deus, ninguém nos convidou.


SHREK
O quê?


PINOCCHIO
Fomos obrigados a vir para cá.


SHREK
(atónita) Por quem?


PORQUINHO
Lord Farquaad. Ele bufou e bufou e... assinou um aviso de despejo.



SHREK
(Muito bem. Quem sabe onde está o tal Farquaad?

Todos olham em redor, mas ninguém responde.


DONKEY
Oh, eu sei. Eu sei onde ele está.


SHREK
Mais alguém sabe onde o encontrar? Alguém?

DONKEY
 
Eu! Eu!


SHREK
Alguém?


DONKEY
Oh! Oh, escolhe-me a mim! Oh, eu sei! Eu sei! Eu, eu!

SHREK
(suspiro) Pronto, está bem. Atenção, tudo coisas de contos de fadas. Não se acomodem. As vossas boas-vindas estão oficialmente esgotadas.
Na verdade, vou agora mesmo ter com esse tal Farquaad e tirar-vos todos da minha terra e voltar para o sítio de onde vieram! (Pausa.
Depois a multidão vai ao rubro). Oh! (para o Burro) Tu! Tu vens comigo.

DONKEY
Muito bem, é isso que eu gosto de ouvir, pá. O Shrek e o Burro, dois amigos fortes, partem numa aventura pela cidade grande. Adoro-o!

DONKEY
(De novo na estrada. Canta comigo, Shrek. Mal posso esperar para me fazer à estrada outra vez.

SHREK
 
O que é que eu disse sobre cantar?


DONKEY
Posso assobiar?


SHREK
Não.


DONKEY
Posso cantarolar?


SHREK
Muito bem, cantarola.


O burro começa a cantarolar "On the Road Again".


DULOC - COZINHA


Um homem mascarado está a torturar o Homem de Gengibre. Está sempre a mergulhá-lo num copo de leite. Lord Farquaad entra.

FARQUAAD
É o suficiente. Ele está pronto para falar.




O boneco de pão de especiarias é retirado do leite e atirado para cima de uma folha de biscoitos. Farquaad ri-se enquanto se aproxima do
mesa. No entanto, quando ele chega à mesa, vemos que esta lhe sobe até aos olhos. Ele limpa a garganta e a mesa é baixada.
 
FARQUAAD
(pega nas pernas do Gingerbread Man e brinca com elas) Corre, corre, corre,
o mais rápido que puderes. Não me apanham. Eu sou o homem do pão de gengibre.

HOMEM DE GENGIBRE
Tu és um monstro.


FARQUAAD
Eu não sou o monstro aqui. Tu é que és. Tu e o resto do lixo dos contos de fadas, envenenando o meu mundo perfeito.
Agora, diz-me! Onde estão os outros?


HOMEM DE GENGIBRE
Come-me! (Ele cospe leite no olho de Farquaad).

FARQUAAD
Tentei ser justo convosco, criaturas. Agora a minha paciência chegou ao fim! Diga-me ou eu... (ele faz como se fosse tirar os botões do Gingerbread Man)



HOMEM DE GENGIBRE
Não, não, os botões não. Não os meus botões de goma.

FARQUAAD
 
Muito bem, então. Quem é que os está a esconder?




HOMEM DE GENGIBRE
Está bem, eu digo-vos. Conheces o homem dos queques?

FARQUAAD
O homem dos queques?


HOMEM DE GENGIBRE
O homem dos queques.


FARQUAAD
Sim, eu conheço o homem dos queques, que vive em Drury Lane?

HOMEM DE GENGIBRE
Bem, ela é casada com o homem dos queques.




FARQUAAD
O homem dos queques?


HOMEM DE GENGIBRE
O homem dos queques!


FARQUAAD
Ela é casada com o homem dos queques.


A porta abre-se e o chefe da guarda entra.
 
GUARDA-CABEÇA
Meu senhor! Encontrámo-la.


FARQUAAD
Então, de que está à espera? Tragam-no.

Entram mais guardas com algo que está coberto por um lençol. Penduram o que quer que seja e retiram o lençol. É o Espelho Mágico.

HOMEM DE GENGIBRE
(admirada) Ohhhh...


FARQUAAD
Espelho mágico...


HOMEM DE GENGIBRE
Não lhe digas nada! (Farquaad pega nele e atira-o para um caixote do lixo com tampa).

FARQUAAD
Boa noite. Espelho, espelho na parede. Não é este o reino mais perfeito de todos?

ESPELHO
Bem, tecnicamente não és um rei.
 
FARQUAAD
Uh, Thelonius. (Thelonius segura um espelho de mão e parte-o com o punho) Estava a dizer?

ESPELHO
O que quero dizer é que ainda não és um rei. Mas podes tornar-te um. Tudo o que tens de fazer é casar com uma princesa.

FARQUAAD
Continua.


ESPELHO
(risos nervosos) Por isso, sente-se e relaxe, meu senhor, porque está na altura
para conhecer as solteiras elegíveis de hoje. E aqui estão elas! A solteira número um é uma reclusa mentalmente abusada de
um reino muito, muito distante. Gosta de sushi e de banhos quentes em qualquer altura. Os seus passatempos incluem cozinhar e limpar para ela
duas irmãs malvadas. Dêem as boas-vindas à Cinderela. (mostra a imagem da Cinderela) A solteira número dois é uma rapariga de capa de
a terra da fantasia. Apesar de viver com outros sete homens, ela não é fácil. Beija-lhe os lábios mortos e
 
gelados e descobre que ela é um fio vivo. Vem
sobre. Um aplauso para a Branca de Neve! (mostra
 
foto da Branca de Neve) E por último, mas certamente não por último, o número de solteira
três é uma ruiva ardente de um castelo guardado por dragões e rodeado de lava a ferver!
Mas não deixes que isso te arrefeça. Ela é uma pistola carregada que gosta de pina colads e de ser apanhada pela chuva. O teu
para o salvamento, Princesa Fiona! (Mostra a imagem da Princesa Fiona)
Também
ser a solteira número um, a solteira número dois ou a solteira número três?



GUARDAS
Dois! Dois! Três! Três! Dois! Dois! Três!




FARQUAAD
Três? Um? Três?


THELONIUS
Três! (levanta 2 dedos) Escolha o número três, meu senhor!

FARQUAAD
Ok, ok, uh, número três!


ESPELHO
Lord Farquaad, escolhestes a Princesa
 
Fiona.
 
FARQUAAD
Princesa Fiona. Ela é perfeita. Tudo o que tenho de fazer é encontrar alguém que possa ir...

ESPELHO
Mas provavelmente devo mencionar a pequena coisa que acontece à noite.

FARQUAAD
Eu faço-o.


ESPELHO
Sim, mas depois do pôr do sol...


FARQUAAD
Silêncio! Farei desta Princesa Fiona a minha rainha, e DuLoc terá finalmente o rei perfeito! Capitão, reúna os seus melhores homens.
Vamos fazer um torneio. (sorri maldosamente)

Parque de estacionamento DuLoc - Secção Lancelot


O Shrek e o Burro saem do campo que fica mesmo junto ao parque de estacionamento. O castelo propriamente dito tem cerca de 40 andares.

DONKEY
Mas é isso. É isso mesmo. É o DuLoc. Eu disse-te que o encontrava.
 
SHREK
Então, aquele deve ser o castelo do Lorde Farquaad.




DONKEY
Uh-huh. É esse o sítio.


SHREK
Acha que talvez ele esteja a compensar alguma coisa? (Ele ri-se, mas depois
geme porque o Burro não percebe a piada. Ele continua a caminhar pelo parque de estacionamento).

DONKEY
Ei, espera. Espera, Shrek.


HOMEM
Despacha-te, querida. Estamos atrasados. Despacha-te.




SHREK
Ei, tu! (O empregado, que tem uma cabeça gigante que se parece com Lord Farquaad, grita e começa a correr por entre as filas de cordas para chegar ao portão da frente
para se afastar do Shrek). Espera um pouco. Olha, eu não te vou comer. Eu só
- (Suspira e começa a andar a direito por entre as filas. O
 
o empregado choca contra uma parede e cai para baixo. O Shrek e o Burro olham para ele e continuam a entrar em DuLoc).

DULOC


Olham em redor, mas está tudo calmo.


SHREK
É calmo. Demasiado sossegado. Onde está toda a gente?




DONKEY
Ei, olha para isto!


O burro corre e puxa uma alavanca que está ligada a uma caixa onde está escrito "Informação". A música começa a tocar e as portas da caixa abrem-se. Lá dentro estão pequenas pessoas de madeira e começam a
para cantar.


PESSOAS DE MADEIRA
Bem-vindo a DuLoc, uma cidade tão perfeita




Aqui temos algumas regras


Deitemo-las ao chão


Não faças ondas, mantém-te na linha


E vamos dar-nos bem
 
A DuLoc é o local perfeito


Por favor, mantenha-se afastado da relva


Engraxar os sapatos, limpar o... rosto


DuLoc é, DuLoc é


DuLoc é o local perfeito.


De repente, uma câmara tira uma fotografia do Burro e do Shrek.


DONKEY
Uau! Vamos lá fazer isso outra vez! (prepara-se para correr e puxar a alavanca outra vez)



SHREK
(agarra na cauda do Burro e mantém- no imóvel) Não. Não. Não, não, não, não! Não.

Ouvem uma fanfarra de trompetes e dirigem-se para a arena.


FARQUAAD
Bravos cavaleiros. Sois os melhores e mais brilhantes de todo o país. Hoje, um de vós provará o seu valor...

Enquanto o Shrek e o Burro caminham pelo túnel para entrar na arena, o Burro está a cantarolar a música tema do DuLoc.
 
SHREK
Está bem. Estás a ir na direção certa para um rabo batido.

DONKEY
Peço desculpa por isso.


FARQUAAD
Esse campeão terá a honra -
- não, não - - o privilégio de ir em frente e salvar a adorável Princesa Fiona do fogo do dragão. Se
se, por qualquer motivo, o vencedor não for selecionado, o primeiro classificado ocupará o seu lugar
e assim por diante. Alguns de vós podem morrer, mas é um sacrifício que estou disposto a fazer. (aplausos) Que comece o torneio! (Ele repara no Shrek) Oh! O que é aquilo? É horrível!

SHREK
(vira-se para olhar para o Burro e depois para o Farquaad) Ah, isso não é muito simpático.
É apenas um burro.


FARQUAAD
De facto. Cavaleiros, novo plano! Aquele que matar o ogre será nomeado campeão! Que seja ele!
 
HOMENS
Apanhem-no!


SHREK
Oh, ei! Agora vamos lá! Espera aí. (esbarra numa mesa onde há canecas de
cerveja)


MULTIDÃO
Vai em frente! Apanhem-no!


SHREK
(segura numa caneca de cerveja) Não podemos resolver isto com uma cerveja?

MULTIDÃO
Matem a besta!


SHREK
Não? Está bem, então. (bebe a cerveja) Vamos lá!

Pega na caneca e esmaga a torneira do grande barril de cerveja que está atrás dele. A cerveja sai a correr, encharcando o
outros homens e a molhar o chão. Agora parece lama. Shrek passa pelos homens e apanha uma lança que um dos homens deixou cair.
Quando Shrek começa a lutar, o Burro salta para cima de um dos barris de cerveja maiores. Este solta-se das cordas e começa a rolar.
O burro consegue esmagar dois homens na lama. Há tanta luta a acontecer aqui que não vou entrar em pormenores. Basta
 
para dizer que o Shrek é o máximo.
 
DONKEY
Ei, Shrek, marca-me! Marca-me!


Shrek aproxima-se e bate com a cabeça de um homem contra os Burros. Shrek sobe para as cordas e interage com o público.

SHREK
Sim!


Um homem tenta esgueirar-se por trás de Shrek, mas Shrek vira-se a tempo e vê-o.

MULHER
A cadeira! Dêem-lhe a cadeira!


O Shrek esmaga uma cadeira nas costas dos homens. Finalmente todos os homens estão no chão. O Burro dá um pontapé no capacete de um deles e o som do "ding" assinala o fim do combate. O público vai ao rubro.

SHREK
Ah, sim! Ah! Ah! Obrigado! Muito obrigado! Fico cá até quinta-feira.
Tentativa
a vitela! Ha, ha! (risos)


O riso pára quando todos os guardas viram as suas armas para o Shrek.

GUARDA-CABEÇA
Devo dar a ordem, senhor?
 
FARQUAAD
Não, eu tenho uma ideia melhor. Povo de DuLoc, apresento-vos o nosso campeão!

SHREK
O quê?


FARQUAAD
Parabéns, ogro. Ganhaste a honra de embarcar numa grande e nobre missão.

SHREK
Missão? Já estou numa missão, uma missão para recuperar o meu pântano.

FARQUAAD
O teu pântano?


SHREK
Sim, o meu pântano! Onde largaste aquelas criaturas de contos de fadas!

FARQUAAD
De facto. Muito bem, ogro. Vou fazer-te um acordo. Vai nesta demanda por mim, e eu devolvo-te o teu pântano.

SHREK
Exatamente como era?
 
FARQUAAD
Até ao último cogumelo coberto de lodo.




SHREK
E os ocupantes?


FARQUAAD
É como se tivesse desaparecido.


SHREK
Que tipo de missão?


Time Lapse - O Burro e o Shrek estão agora a caminhar pelo campo, afastando-se de DuLoc. O Shrek está a mastigar uma cebola.

DONKEY
Deixa-me ver se percebi bem. Vais lutar com um dragão e salvar uma princesa só para que o Farquaad te devolva
um pântano que só não tem porque ele o encheu de aberrações no primeiro
lugar. Está correto?


SHREK
Sabes, talvez haja uma boa razão para os burros não falarem.

DONKEY
Não estou a perceber. Porque é que não puxa
um pouco daquela coisa de ogre nele? Acelerador
 
ele, sitia a sua fortaleza, tritura
os seus ossos para fazer o vosso pão, toda a viagem do ogre.

SHREK
Oh, eu sei o quê. Talvez eu pudesse ter decapitado uma aldeia inteira e colocado as suas cabeças numa lança, pegar numa faca, cortar-lhes o baço e beber os seus fluidos. Parece-te bem?



DONKEY
Não, nem por isso, não.


SHREK
Para vossa informação, os ogres são muito mais do que se pensa.

DONKEY
Exemplo?


SHREK
Exemplo? Ok, hum, os ogres são como cebolas. (ele estende a sua cebola)

DONKEY
(cheira a cebola) Cheiram mal?


SHREK
Sim - - Não!
 
DONKEY
Fazem-no chorar?


SHREK
Não!


DONKEY
Se os deixarmos ao sol, ficam castanhos e começam a nascer pequenos pêlos brancos.

SHREK
Não! Camadas! As cebolas têm camadas. Os ogres têm camadas! As cebolas têm camadas. Estão a perceber? Ambos temos camadas. (dá um suspiro e depois vai-se embora)

DONKEY
(seguindo atrás do Shrek) Oh, ambos têm camadas. Oh. {Sniffs} Tu sabes,
nem toda a gente gosta de cebolas. Bolo! Toda a gente gosta de bolos! Os bolos têm camadas.

SHREK
Não me interessa... o que toda a gente gosta. Ogres não são como bolos.

DONKEY
Sabem do que mais toda a gente gosta?
 
Parfaits. Alguma vez conheceste uma pessoa,
 
se dissermos: "Vamos comer um parfait", eles dizem: "Claro que não, não gosto de parfait"? Os parfaits são deliciosos.

SHREK
Não! Seu denso, irritante, miniatura besta de carga! Os ogres são como cebolas! E da história. Adeusinho. Vejo- vos mais tarde.



DONKEY
Os parfaits podem ser a coisa mais deliciosa de todo o planeta.

SHREK
Sabes, acho que preferia o teu cantarolar.




DONKEY
Tens um lenço de papel ou assim? Estou a fazer uma confusão. Só a palavra parfait faz-me começar a babar.

Eles partem. Há uma montagem da sua viagem. Caminhando por um campo ao pôr do sol. Dormir debaixo de uma lua brilhante.
Shrek a tentar
para apagar a fogueira no dia seguinte e tendo um pequeno problema, o Burro faz chichi na fogueira para a apagar.

REBANHO DO DRAGÃO


O Shrek e o Burro estão a caminhar para a torre de menagem que é suposto
 
casa da Princesa Fiona. Parece um vulcão gigante.




DONKEY
(Ohh! Shrek! Foste tu que fizeste isso?
É preciso avisar alguém antes de se partir para a ação. A minha boca estava aberta e tudo.

SHREK
Acredita em mim, Burro, se fosse eu, estarias morto. (É enxofre. Devemos estar a chegar perto.

DONKEY
Sim, claro, enxofre. Não fales sobre o enxofre. Eu sei o que é
Cheira-me. Não era enxofre. Também não saiu de nenhuma pedra.



Eles sobem pela lateral do vulcão/guarda e olham para baixo. Há um pequeno pedaço de rocha mesmo no centro e é aí que
o castelo está. Está rodeado de lava a ferver. Tem um aspeto muito sinistro.

SHREK
Claro que é suficientemente grande, mas olha para o local. (ri-se... e depois o riso
transforma-se num gemido)
 
DONKEY
Uh, Shrek? Uh, lembras-te quando disseste que os ogres têm camadas?

SHREK
Oh, sim.


DONKEY
Bem, tenho uma pequena confissão a fazer. Os burros não têm camadas.
Usamos o nosso medo nas nossas mangas.

SHREK
Espera um pouco. Os burros não têm mangas.




DONKEY
Sabes o que quero dizer.


SHREK
Não me podes dizer que tens medo das alturas.




DONKEY
Não, só me sinto um pouco desconfortável por estar numa ponte frágil sobre um lago de lava a ferver!

SHREK
Anda lá, Burro. Estou mesmo aqui ao lado
 
Está bem? Para apoio emocional, vamos enfrentar isto juntos um a um.
um pequeno passo de bebé de cada vez.


DONKEY
A sério?


SHREK
A sério, a sério.


DONKEY
Ok, isso faz-me sentir muito melhor.




SHREK
Continua a andar. E não olhes para baixo.




DONKEY
Ok, não olhes para baixo. Não olhes para baixo. Não olhes para baixo. Continua a andar. Não olhes para baixo. (ele passa por uma tábua podre e acaba por olhar diretamente para a lava) Shrek! Estou a olhar para baixo!
Oh, Deus, não consigo fazer isto! Deixem-me sair, por favor!

SHREK
Mas já está a meio caminho.


DONKEY
 
Mas sei que metade está segura!


SHREK
Está bem, ótimo. Não tenho tempo para isto. Volta para trás.

DONKEY
Shrek, não! Espera!


SHREK
Só, Burro - - Vamos dançar
então, eu? (salta e balança a ponte)


DONKEY
Não faças isso!


SHREK
Oh, desculpe-me. Faço o quê? Oh, isto? (volta a saltar a ponte)

DONKEY
Sim, isso!


SHREK
Sim? Sim, faz isso. Ok. (continua a
salta e balança enquanto leva o Burro a atravessar a ponte)

DONKEY
Não, Shrek! Não! Pára com isso!
 
SHREK
Disseste para o fazer! Estou a fazê-lo.


DONKEY
Eu vou morrer. Eu vou morrer. Shrek, Eu vou morrer. (pisa em terra firme) Oh!

SHREK
Já chega, Burro. Assim está bem. (caminha em direção ao castelo)

DONKEY
Fixe. Então, onde é que está esse chato cuspidor de fogo?

SHREK
Lá dentro, à espera que a resgatássemos.

DONKEY
Eu estava a falar do dragão, Shrek.




NO INTERIOR DO CASTELO


DONKEY
Tens medo?


SHREK
 
Não.


DONKEY
Mas...


SHREK
Shh.


DONKEY
Oh, ótimo. Eu também não. (vê um esqueleto e suspira) Porque não há nada de errado em ter medo. O medo é uma reação sensata a uma situação desconhecida.
Uma situação perigosa e desconhecida, devo acrescentar. Com um dragão que respira fogo, come cavaleiros e respira fogo,
não quer dizer que sejamos cobardes se tivermos um pouco de medo.
Tenho a certeza que
O Heck não é um cobarde. Eu sei disso.




SHREK
Burro, duas coisas, ok? Cala-te... Agora vai até ali e vê se encontras alguma escada.

DONKEY
Escadas? Pensei que estávamos à procura da princesa.

SHREK
 
(pondo um capacete) A princesa estará ao cimo das escadas, na sala mais alta
na torre mais alta.


DONKEY
O que te faz pensar que ela vai lá estar?




SHREK
Li-o uma vez num livro. (vai-se embora)




DONKEY
Fixe. Tu tratas do dragão. Eu trato das escadas. Eu encontro as escadas.
Também lhes dou uma tareia. Aquelas escadas não vão saber para que lado estão a ir. (vai-se embora)

SALA VAZIA


O Burro continua a falar sozinho enquanto olha para a sala.




DONKEY
Vou tomar medidas drásticas. Chutá-lo para o meio-fio. Não se metam comigo. Eu sou o mestre das escadas. Eu domino as escadas.
Quem me dera ter um degrau aqui. Eu pisava-o todo.
 
ELSEWHERE


O Shrek vê uma luz na janela da torre mais alta.


SHREK
Bem, pelo menos sabemos onde está a princesa, mas onde está o...

DONKEY
(Dragão!


O Burro suspira e sai a correr quando o dragão volta a rugir. O Shrek consegue agarrar o Burro para o tirar do caminho, no momento em que o dragão lança fogo.

SHREK
Burro, cuidado! (consegue agarrar a cauda do dragão e agarra-se) Apanhei-te!

O dragão irrita-se com isto e abana a cauda e o Shrek
voa pelo ar e despenha-se no telhado da torre mais alta. Fiona acorda com um sobressalto e olha para ele estendido no chão.

DONKEY
Oh! Aah! Aah!


O Burro fica encurralado quando o Dragão derruba toda a ponte em que se encontra, exceto uma pequena parte.
 
DONKEY
Não. Oh, não, não! (o dragão ruge) Oh, que grandes dentes tu tens. (o dragão rosna) Quero dizer dentes brancos e brilhantes.
Sei que deves estar sempre a ouvir isto da tua comida, mas tens de branquear, porque tens aí um sorriso deslumbrante. Será que detecto uma pitada de menta
frescura? E sabes que mais? Está a
- És uma rapariga dragão! Oh, claro! Quero dizer, é claro que és um dragão feminino. Cheiras a beleza feminina. (o dragão começa a esvoaçar os olhos para ele) O que é que se passa contigo? Tens alguma coisa no olho? Ohh. Oh. Oh. Meu, eu gostava muito de ficar, mas sabes, eu estou, uh... (o dragão
sopra um anel de fumo em forma de coração na direção dele, e ele tosse) Eu sou asmático e não sei se vai resultar se soprarem anéis de fumo. Shrek! (o dragão agarra-o com os dentes e leva-o) Não! Shrek! Shrek! Shrek!

O QUARTO DA FIONA


Shrek geme e levanta-se do chão. Está de costas para a Fiona Então, endireita o vestido e volta a deitar-se na cama. De seguida, estende rapidamente a mão e tira o ramo de flores
a mesa de apoio. De seguida, volta a deitar-se e parece estar a dormir.
 
Shrek vira-se e vai ter com ela. Ele olha para a Fiona para
um momento e ela franze os lábios. Shrek agarra-a pelos ombros e sacode-a para longe.

FIONA
Oh! Oh!


SHREK
Acorda!


FIONA
O quê?


SHREK
És a Princesa Fiona?


FIONA
Estou à espera de um cavaleiro tão ousado que me salve.

SHREK
Oh, isso é bom. Agora vamos lá!


FIONA
Mas espere, senhor cavaleiro. Isto é - com o nosso primeiro encontro. Não deveria ser um
momento maravilhoso e romântico?


SHREK
Sim, desculpe, senhora. Não há tempo.
 
FIONA
Ei, espera. O que é que está a fazer? Devia arrastar-me pela janela e descer por uma corda até ao seu valente corcel.



SHREK
Tiveste muito tempo para planear isto, não tiveste?

FIONA
(sorri) Mm-hmm.


Shrek parte a fechadura da porta e puxa-a para fora e para o corredor.

FIONA
Mas temos de saborear este momento! Podias recitar um poema épico para mim. A
balada? Um soneto! Um limerick? Ou algo do género!




SHREK
Não me parece.


FIONA
Posso ao menos saber o nome do meu campeão?




SHREK
 
Uh, Shrek.


FIONA
Sir Shrek. (limpa a garganta e estende um lenço) Peço-vos que
aceite este favor como prova da minha gratidão.




SHREK
Obrigado!


De repente, ouvem o rugido do dragão.


FIONA
(surpreendida) Não mataste o dragão?




SHREK
Está na minha lista de afazeres. Agora vamos lá! (começa a correr e arrasta a Fiona atrás de si).

FIONA
Mas isto não está certo! Era suposto
para atacar, com a espada desembainhada e o estandarte a voar. Foi o que todos os outros cavaleiros fizeram.



SHREK
Sim, mesmo antes de rebentarem em chamas.
 
FIONA
Não é esse o objetivo. (Shrek pára de repente e ela corre para ele.) Oh! (Shrek ignora-a e dirige-se para uma porta de madeira ao lado.) Espera. Onde é que vocês estão?
Vai? A saída é por ali.


SHREK
Bem, tenho de salvar o meu coiro.


FIONA
Que tipo de cavaleiro és tu?


SHREK
Único. (abre a porta da sala do trono)

DONKEY
(Mais devagar. Mais devagar, querida, por favor.
Acredito que é saudável conhecer alguém durante um longo período de tempo. Chama-me antiquado. (ri- se preocupado) (vemo-lo de perto e à distância quando o Shrek entra sorrateiramente no quarto) Não quero precipitar-me
uma relação física. Não estou emocionalmente preparada para um compromisso deste género
- Magnitude é mesmo a palavra que estou à procura. Magnitude- - Ei, isso
é o contacto físico indesejado. Ei, o que é que
 
está a fazer? Está bem, está bem. Vamos recuar um pouco e dar um passo de cada vez. Devíamos conhecer-nos primeiro como amigos ou amigos por correspondência.
Estou sempre em viagem, mas adoro receber cartões - - Gostaria muito de para ficar, mas - - Não faças isso! Essa é a minha cauda! Essa é a minha cauda pessoal. Tu és
vai arrancá-lo. Eu não dou permissão
- O que é que vais fazer com isso? Ei, agora. Nem pensar. Não! Não! Não, não, não! Não. Não, não, não, não. Não! Oh!

Shrek agarra uma corrente que está ligada ao candelabro e balança em direção ao dragão. Falha e volta a baloiçar. Olha para cima e vê que o candelabro está mesmo por cima da cabeça do dragão. Puxa a corrente e esta solta-se e ele cai e esbarra no Burro, mesmo quando o dragão está prestes a beijá-lo.
Em vez disso, o dragão beija o rabo do Shreks. Ela abre os olhos e ruge. O Shrek solta a corrente e o candelabro cai-lhe na cabeça, mas é demasiado grande e passa-lhe por cima da cabeça, formando uma espécie de coleira. Ela ruge novamente e o Shrek e o Burro põem-se a correr. Muito ao estilo "Matrix". Shrek agarra o Burro e depois agarra a Princesa Fiona enquanto passa por ela.

DONKEY
Olá, Princesa!


FIONA
Ele fala!
 
SHREK
Sim, o truque é fazer com que ele se cale.

Todos começam a gritar à medida que o dragão se aproxima deles. O Shrek vê um escorrega a descer e salta para lá. Mas infelizmente há uma fenda na pedra e esta atinge o Shrek mesmo na virilha. O seu
Os olhos cruzam-se e, ao chegar ao fundo do escorrega, tropeça e caminha ligeiramente.

SHREK
Oh!


Shrek aproxima-os da saída e deixa o Burro e a Fiona no chão.




SHREK
Ok, vocês dois, ouçam a saída! Eu trato do dragão.

Shrek pega numa espada e dirige-se para o interior do castelo. Atira a espada para o chão entre vários elos de corrente sobrepostos. Os elos da corrente estão ligados ao candelabro que ainda está à volta do pescoço do dragão.

SHREK
(Corre!


Todos eles saem a correr em direção à saída, com o dragão em perseguição. Conseguem chegar à ponte e atravessam-na. O dragão deita fogo e a ponte começa a arder. Todos se agarram
 
e os seus amigos e familiares tentam salvar a sua vida quando as cordas que seguram a ponte caem. São atirados para o outro lado. Enquanto estão pendurados de cabeça para baixo, olham horrorizados para o dragão que voa sobre a lava a ferver para apanhá-los. Mas, de repente, o candelabro com a corrente empurra o dragão para trás e ele não consegue chegar até
eles. O nosso grupo sobe rapidamente para um lugar seguro, enquanto o dragão parece zangado e depois dá um gemido triste ao ver o Burro afastar-se.

FIONA
(deslizando pela colina do "vulcão") Tu conseguiu! Salvaste-me! És fantástico. (atrás dela o burro cai pela colina abaixo) És - - és maravilhoso. Tu és... (vira-se e vê o Shrek a cair pela colina abaixo)
e esbarrar no Burro) um pouco pouco ortodoxo, admito. Mas a tua ação é grande, e o teu coração é puro. Eu sou
eternamente em dívida para convosco. (O burro limpa a garganta). E onde estaria um cavaleiro corajoso sem o seu nobre corcel?



DONKEY
Espero que tenhas ouvido isso. Ela chamou-me um nobre corcel. Ela acha que eu sou um corcel.
 
FIONA
A batalha está ganha. Podeis retirar o vosso elmo, bom Cavaleiro.
 
SHREK
Uh, não.


FIONA
Porque não?


SHREK
Eu tenho cabelo de capacete.


FIONA
Por favor. Eu não olharia para a cara do meu salvador.

SHREK
Não, não, não o farias - - 'st.


FIONA
Mas como é que me vais beijar?


SHREK
O quê? (para o Burro) Isso não estava na descrição do trabalho.

DONKEY
Talvez seja uma vantagem.


FIONA
Não, é o destino. Oh, deves saber como é. Uma princesa trancada num torre e assaltada por um dragão é salva por um valente cavaleiro, e depois partilham
 
o primeiro beijo do verdadeiro amor.


DONKEY
Hmm? Com o Shrek? Tu pensas- - Espera. Espera. Achas que o Shrek é
o teu verdadeiro amor?


FIONA
Bem, sim.


O Burro e o Shrek desataram a rir.


DONKEY
Pensas que o Shrek é o teu verdadeiro amor!




FIONA
Qual é a piada?


SHREK
Digamos apenas que não sou o teu tipo, está bem? És o meu salvador.
Agora - - Agora tire o seu capacete.


SHREK
Olha. Não acho que isto seja uma boa ideia.

FIONA
Basta tirar o capacete.
 
SHREK
Não o vou fazer.


FIONA
Tira-o.


SHREK
Não!


FIONA
Agora!


SHREK
Muito bem! É fácil. Como ordenar. Vossa Alteza. (tira o capacete)

FIONA
Tu - - tu és um - - um ogre.


SHREK
Oh, estava à espera do Príncipe Encantado.




FIONA
Bem, sim, de facto. Oh, não. Isto é tudo errado. Não é suposto seres um ogre.

SHREK
Princesa, fui enviado para vos salvar por Lord Farquaad, está bem? Foi ele que
 
quer casar consigo.


FIONA
Então porque é que ele não me veio salvar?




SHREK
Boa pergunta. Devias perguntar-lhe isso quando lá chegarmos.

FIONA
Mas tenho de ser salva pelo meu verdadeiro amor, não por um ogre e o seu - - seu animal de estimação.

DONKEY
Bem, lá se foi o nobre corcel.


SHREK
Não está a tornar o meu trabalho mais fácil.




FIONA
Lamento, mas o teu trabalho não é problema meu. Pode dizer ao Lorde Farquaad que se ele me quiser salvar como deve ser, estarei à espera dele aqui mesmo.

SHREK
Ei! Não sou o moço de recados de ninguém, está bem? (Sou um moço de recados.
 
(pega rapidamente nela e coloca-a ao ombro como se fosse um saco de batatas)

FIONA
Não te atreverias. Ponham-me no chão!


SHREK
Vens, Burro?


DONKEY
Estou mesmo atrás de ti.


FIONA
Ponham-me no chão, ou sofrerão as consequências! Isto não é digno! Ponham-me no chão!

MADEIRAS


Passou algum tempo e a Fiona acalmou-se. Ela fica ali pendurada enquanto o Shrek a carrega.

DONKEY
Ok, aqui vai outra pergunta. Digamos que há uma mulher que gosta de ti, certo, mas tu não gostas dela dessa maneira. Como é que a deixas ficar mal para que os sentimentos dela não fiquem feridos, mas para que não fiques queimado e comido?
 
FIONA
Diz-lhe apenas que ela não é a tua verdadeira amor. Toda a gente sabe o que acontece quando se encontra o seu... (Shrek deixa-a cair em
o chão) Ei! Quanto mais depressa chegarmos ao DuLoc, melhor.

DONKEY
Vais adorar, Princesa. É lindo!


FIONA
E o meu futuro noivo? Lord Farquaad? Como é que ele é?

SHREK
Deixe-me colocar a questão desta forma, Princesa. Homens da estatura de Farquaad estão em falta.
(ele e o Burro riem-se)


O Shrek começa então a deitar água na cara para lavar o pó e a sujidade.

DONKEY
Não sei, não sei. Há quem pense pouco dele. (voltam a rir-se) Fiona:
Parem com isso. Parem com isso, os dois. Estão apenas com ciúmes de nunca poderem estar à altura de um grande governante como Lord Farquaad.
 
SHREK
Sim, bem, talvez tenha razão, Princesa. Mas vou deixar-te fazer a "medição" quando o vires amanhã.

FIONA
(olha para o pôr do sol) Amanhã? Vai demorar assim tanto tempo? Não devíamos parar para acampar?

SHREK
Não, isso vai demorar mais tempo. Podemos continuar.

FIONA
Mas há ladrões na floresta.


DONKEY
Uau! Tempo fora, Shrek! O acampamento está a começar a soar bem.

SHREK
Ei, vamos lá. Sou mais assustador do que tudo o que vamos ver nesta floresta.



FIONA
Agora preciso de encontrar um sítio para acampar!




As orelhas do Burro e do Shrek baixam enquanto se afastam dela.
 

MONTANHA CLIFF


O Shrek encontrou uma gruta que parece estar em bom estado. Ele empurra uma pedra para fora do caminho para revelar a caverna.

SHREK
Ei! Aqui.


DONKEY
Shrek, podemos fazer melhor do que isso. Acho que isto não é adequado para uma princesa.



FIONA
Não, não, é perfeito. Só precisa de alguns toques caseiros.

SHREK
Toques caseiros? Como o quê? (ouve um barulho de rasgar e olha para a Fiona que arrancou a casca de uma árvore).



FIONA
Uma porta? Bem, meus senhores, dou-vos as boas noites. (entra na gruta e fecha a porta de casca de árvore atrás de si)
 
DONKEY
Queres que te leia uma história para dormir? Eu leio.

FIONA
(Eu disse boa noite!


Shrek olha para o Burro por um segundo e depois vai mover a pedra para a frente da entrada da gruta, com a Fiona ainda lá dentro.

DONKEY
Shrek, o que estás a fazer?


SHREK
(risos) Eu só- - Tu sabes- - Oh, vá lá. Estava só a brincar.

MAIS TARDE NESSA NOITE


O Shrek e o Burro estão sentados à volta de uma fogueira. Estão a olhar para o céu enquanto o Shrek aponta para certas constelações de estrelas
para o Burro.


SHREK
E aquele é o Throwback, o único ogre que alguma vez cuspiu em três campos de trigo.

DONKEY
Pois. Sim. Ei, podes dizer ao meu futuro
 
destas estrelas?


SHREK
As estrelas não dizem o futuro, Burro. Elas contam histórias. Olha, ali está o Bloodnut, o Flatulento. Podes adivinhar porque é que ele é famoso.

DONKEY
Eu sei que está a inventar isto.


SHREK
Não, olha. Ali está ele, e ali está o
grupo de caçadores a fugir do seu fedor.


DONKEY
Isso não é nada mais do que um monte de pequenos pontos.

SHREK
Sabes, Burro, às vezes as coisas são mais do que parecem. Hmm? Esquece.



DONKEY
(dá um grande suspiro) Ei, Shrek, o que é que
que vamos fazer quando tivermos o nosso pântano?




SHREK
 
O nosso pântano?


DONKEY
Sabes, quando acabarmos de salvar a princesa.

SHREK
Nós? Burro, não há nenhum "nós". Há
não há "nosso". Sou só eu e o meu pântano.
A primeira coisa que vou fazer é construir um muro de 3 metros à volta da minha terra.

DONKEY
Cortaste-me profundamente, Shrek. Cortaste-me bem fundo agora mesmo. Sabes o que é que eu penso?
Penso que toda esta história do muro é apenas uma forma de impedir a entrada de alguém.

SHREK
Não, achas que não?


DONKEY
Estás a esconder alguma coisa?


SHREK
Deixa lá, Burro.


DONKEY
Oh, isto é mais uma daquelas coisas da cebola, não é?
 
SHREK
Não, esta é uma daquelas coisas que se deixa cair e não se faz mais.

DONKEY
Porque é que não queres falar sobre isso?




SHREK
Porque é que quer falar sobre isso?


DONKEY
Porque está a bloquear?


SHREK
Não estou a bloquear.


DONKEY
Oh, sim, é verdade.


SHREK
Burro, estou a avisar-te.


DONKEY
Quem está a tentar manter fora?


SHREK
Todos! Está bem?


DONKEY
(pausa) Oh, agora estamos a chegar a algum lado.
 
(sorri)


Nessa altura, Fiona afasta a "porta" da entrada da gruta e espreita para fora. Nenhum dos rapazes a vê.

SHREK
Oh! Por amor de Deus! (levanta-se e vai até à beira do penhasco e senta- se)

DONKEY
Qual é o teu problema? O que é que tens contra o mundo inteiro?

SHREK
Olha, não sou eu que tenho o problema, ok? É o mundo que parece ter
um problema comigo. As pessoas olham para mim e dizem. "Aah! Socorro!
Corram! Um ogre grande, estúpido e feio!" Julgam-me antes mesmo de me conhecerem. É por isso que estou melhor sozinho.

DONKEY
Sabes que mais? Quando nos conhecemos, não pensei que fosses apenas um grande, estúpido e feio ogre.

SHREK
Sim, eu sei.
 
DONKEY
Então, há algum burro lá em cima?




SHREK
Bem, há a Gabby, a Pequena e Irritante.

DONKEY
Pronto, pronto, já estou a ver. O grande e brilhante, ali mesmo. Aquele ali?



A Fiona volta a fechar a porta.


SHREK
É a lua.


DONKEY
Oh, está bem.


DuLoc - Quarto de Farquaad


A câmara faz uma panorâmica sobre uma série de objectos do casamento. Uma música suave toca ao fundo. Farquaad está na cama, enquanto o Espelho Mágico lhe mostra a Princesa Fiona.

FARQUAAD
Outra vez, mostra-me outra vez. Espelho, espelho, mostra-ma. Mostra- me a princesa.
 
ESPELHO
Hmph.


O Mirror rebobina e começa a tocar desde o início.




FARQUAAD
Ah. Perfeito.


Farquaad olha para o seu peito nu e puxa o lençol para cima para se tapar, como se Fiona o pudesse ver, enquanto ele olha timidamente para a sua imagem no espelho.

MANHÃ


Fiona sai da gruta. Olha para o Shrek e para o Burro, que ainda estão a dormir. Ela vagueia pelo bosque e encontra um pássaro azul. Começa a cantar. O pássaro canta
com ela. Ela toca notas cada vez mais altas e o pássaro esforça- se por a acompanhar. De repente, a pressão da nota é demasiado
grande e o pássaro explode. Fiona parece um pouco envergonhada, mas olha para os ovos que o pássaro deixou para trás. Lapso de tempo, Fiona
está agora a cozinhar os ovos para o pequeno-almoço. O Shrek e o Burro ainda estão a dormir. O Shrek acorda e olha para a Fiona. O Burro está a falar
durante o sono.


DONKEY
(baixinho) Mmm, sim, tu sabes que eu gosto assim. Anda lá, querida. Eu disse
 
Agrada-me.
 
SHREK
Burro, acorda. (abana-o)


DONKEY
O quê? O quê?


SHREK
Acorda.


DONKEY
O quê? (espreguiça-se e boceja)


FIONA
Bom dia. Hm, como é que gosta dos seus ovos?

DONKEY
Oh, bom dia, Princesa!


Fiona levanta-se e põe os ovos à frente deles.


SHREK
O que é que se passa?


FIONA
Sabes, ontem começámos mal. Eu queria compensar-te. Afinal de contas, salvaste-me.
 
SHREK
Uh, obrigado.


O burro cheira os ovos e lambe os beiços.


FIONA
Bem, comam. Temos um grande dia pela frente. (vai-se embora)

MAIS TARDE


Estão de novo a caminho. Estão a caminhar pela floresta. Shrek arrota.

DONKEY
Shrek!


SHREK
O quê? É um elogio. Melhor fora do que dentro, é o que eu sempre digo. (risos)

DONKEY
Bem, isso não é maneira de se comportar em frente a uma princesa.

Fiona arrota


FIONA
Obrigado.


DONKEY
 
Ela é tão má como tu.


SHREK
(risos) Sabes, não és exatamente o que eu esperava.

FIONA
Bem, talvez não devêssemos julgar as pessoas antes de as conhecermos.

Ela sorri e continua a andar, cantando baixinho. De repente Do nada, um homem desce e atira a Fiona para uma árvore.

ROBIN HOOD
A liberdade! Ei!


SHREK
Princesa!


FIONA
(para Robin Hood) O que estás a fazer?




ROBIN HOOD
Fica quieta, mon cherie, porque eu sou o teu salvador!
E eu estou a salvar-te deste verde... (beija-lhe o braço enquanto Fiona se afasta
nojo)... besta.


SHREK
 
Ei! Essa é a minha princesa! Vai procurar a tua!

ROBIN HOOD
Por favor, monstro! Não vês que estou um pouco ocupado?

FIONA
(ficando farto) Olha, amigo, eu não sei quem tu pensas que és!

ROBIN HOOD
Oh! Claro! Oh, que malcriado. Por favor deixem-me apresentar-me. Oh, Merry Men. (risos)

De repente, um acordeão começa a tocar e os Homens Felizes saem dos arbustos. Começam a cantar a canção do Robin.

HOMENS FELIZES
Ta, dah, dah, dah, whoo.


ROBIN HOOD
Roubo aos ricos e dou aos necessitados.


HOMENS FELIZES
Ele fica com uma pequena percentagem,


ROBIN HOOD
Mas não sou ganancioso. Eu resgato muito
 
donzelas, meu, eu sou bom.


HOMENS FELIZES
Que gajo, Monsieur Hood.


ROBIN HOOD
Desembucha. Eu gosto de uma luta honesta e de uma empregada atrevida...

HOMENS FELIZES
O que ele está basicamente a dizer é que gosta de...

ROBIN HOOD
Pago. Então... Quando um ogre no mato agarra uma senhora pelo rabo. Isso é mau.



HOMENS FELIZES
Isso é mau.


ROBIN HOOD
Quando uma bela está com uma fera, fico muito zangado.

HOMENS FELIZES
Ele está zangado, está mesmo, mesmo zangado.




ROBIN HOOD
Pego na minha lâmina e atravesso-a
 
o vosso coração, mantenham os olhos em mim, rapazes, porque estou prestes a começar...

Ouve-se um grunhido quando Fiona desce do ramo da árvore e deixa Robin dos Bosques inconsciente.

FIONA
Meu, isso foi irritante!


O Shrek olha para ela com admiração.


HOMEM MERECIDO
(atira uma seta à Fiona, mas ela esquiva-se)



A seta voa em direção ao Burro, que salta para os braços do Shrek para sair do caminho. A seta acaba por fazer ricochete numa árvore.



Começa outra sequência de luta e Fiona dá um grito de karaté e depois começa a dar uma tareia nos Merry Men. Há um momento "Matrix" muito interessante aqui, quando Fiona pára no ar para arranjar o cabelo. Finalmente, todos os Merry Men estão no chão e Fiona começa a afastar-se.

FIONA
Uh, vamos?


SHREK
Segura o telefone. (larga o Burro e começa a
 
(andando atrás da Fiona) Oh! Espera aí. De onde é que aquilo veio?

FIONA
O quê?


SHREK
Isso! Ali atrás. Isso foi espetacular! Onde é que aprendeu isso?

FIONA
Bem... (risos) quando se vive sozinho, é preciso aprender estas coisas para o caso de haver um... (suspira e aponta)
tem uma flecha no seu rabo!


SHREK
O quê? (vira-se e olha) Oh, olha para isto? (ele vai tirá-lo para fora
mas vacila porque é tenro)




FIONA
Oh, não. Isto é tudo culpa minha. Peço imensa desculpa.

DONKEY
(aproximando-se) Porquê? O que é que se passa?


FIONA
 
O Shrek está magoado.


DONKEY
O Shrek está ferido. O Shrek está ferido? Oh, não, o Shrek vai morrer.

SHREK
Burro, eu estou bem.


DONKEY
Não me podes fazer isto, Shrek. Eu sou demasiado jovem para morreres.
Mantenha as pernas elevadas. Vire a cabeça e tussa.
Alguém conhece o Heimlich?


FIONA
Burro! Acalma-te. Se queres ajudar o Shrek, corre para o bosque e encontra- me uma flor azul com espinhos vermelhos.

DONKEY
Flor azul, espinhos vermelhos. Ok, estou a tratar disso. Flor azul, espinhos vermelhos. Não morras Shrek. Se vires um longo túnel, afasta-te da luz!

SHREK & FIONA
Burro!


DONKEY
Pois é. Pois é. Flor azul, espinhos vermelhos.
 
(foge)


SHREK
Para que servem as flores?


FIONA
(como se fosse óbvio) Por se ter livrado do Burro.

SHREK
Ah.


FIONA
Agora fica quieto, que eu arranco-te esta coisa. (dá um pequeno puxão na seta)

SHREK
(salta para longe) Ow! Ei! Calma com o puxão.

Enquanto continuam a conversar, Fiona continua a ir atrás da seta e Shrek continua a desviar-se das mãos dela.

FIONA
Lamento, mas tem de sair.




SHREK
Não, é tenro.
 
FIONA
Agora, esperem.


SHREK
O que está a fazer é o oposto da ajuda.


FIONA
Não se mexam.


SHREK
Olha, intervalo.


FIONA
Queres... (grunhe quando Shrek põe a mão na cara dela para a impedir de chegar à seta) Está bem. O que é que propões que façamos?

ELSEWHERE


O burro continua à procura da flor especial.


DONKEY
Flor azul, espinhos vermelhos. Flor azul, espinhos vermelhos. Flor azul, espinhos vermelhos.
Isto seria muito mais fácil se eu não fosse daltónico! Flor azul, espinhos vermelhos.



SHREK
 
(os) Ow!


DONKEY
Aguenta, Shrek! Estou a chegar! (rasga um flor de um arbusto próximo que, por acaso, é uma flor azul com espinhos vermelhos)



O CAMINHO DA FLORESTA


SHREK
Ai! Não é bom.


FIONA
Está bem. Está bem. Quase consigo ver a cabeça. (Shrek grunhe enquanto ela puxa) Está quase...

SHREK
Ai! Ohh! (ele sacode-se e consegue cair com a Fiona em cima dele)

DONKEY
Ahem.


SHREK
(atirando a Fiona de cima dele) Não aconteceu nada. Estávamos apenas, uh
- -


DONKEY
Olha, se quisesses ficar sozinho, tudo
 
só tinhas de pedir. Está bem?


SHREK
Oh, vá lá! Essa é a última coisa em que estou a pensar. A princesa aqui estava apenas-
- (Fiona puxa a seta para fora) Ugh! (vira-se para olhar para a Fiona que segura a seta com um sorriso) Ui!

DONKEY
Ei, o que é isso? (riso nervoso) Isso é... isso é sangue?

O Burro desmaia. Shrek aproxima-se e pega-lhe ao colo, enquanto continuam o seu caminho.

Há uma montagem de cenas enquanto o grupo regressa a DuLoc. Shrek rasteja até ao cimo de uma árvore para a fazer cair sobre um pequeno riacho, para que a Fiona não se molhe. Shrek levanta-se quando o Burro está prestes a atravessar a árvore e a árvore volta a ficar na posição vertical e o Burro voa.
O Shrek bate no Burro
e um monte de moscas e mosquitos. A Fiona agarra numa teia de aranha que está num ramo de uma árvore e corre pelo campo a balançá-la
para apanhar os insectos. Depois dá-o ao Shrek, que começa a comer como se fosse uma guloseima. Quando ele se vai embora, ela lambe os dedos.
Shrek apanha um sapo, fá-lo explodir como um balão e oferece-o à Fiona. A Fiona apanha uma cobra, rebenta-a e dá-lhe forma
O grupo chega ao moinho de vento que fica perto de DuLoc. O grupo chega a um moinho de vento que fica perto de DuLoc.
 
MOINHO DE VENTO
 
SHREK
Aí está, Princesa. O teu futuro espera-te.


FIONA
É o DuLoc?


DONKEY
Sim, eu sei. Sabes, o Shrek pensa
O Senhor Farquaad está a compensar alguma coisa, o que eu acho que significa que ele tem uma... (Shrek pisa o casco) Ai!

SHREK
Acho que é melhor seguirmos em frente.

FIONA
Claro. Mas, Shrek? Estou - - estou preocupado com o Burro.

SHREK
O quê?


FIONA
Quero dizer, olha para ele. Ele não parece muito bem.

DONKEY
Do que é que estás a falar? Eu estou bem.
 

FIONA
(ajoelha-se para o olhar nos olhos) É o que dizem sempre, e quando damos por isso, estamos de costas. (pausa) Morto.

SHREK
Sabes, ela tem razão. Estás com um aspeto horrível. Queres sentar-te?

FIONA
Vou fazer-te um chá.




DONKEY
Eu não queria dizer nada, mas eu Tenho uma pontada no pescoço, e quando viro a cabeça assim, olha, (vira o pescoço de uma forma muito brusca até o
a cabeça está completamente de lado) Ai! Vê?




SHREK
Quem é que tem fome? Vou procurar um jantar para nós.




FIONA
Eu vou buscar a lenha.
 
DONKEY
Ei, onde é que vais? Oh, pá, não consigo sentir os meus dedos dos pés! (olha para baixo e grita)
Eu não tenho dedos dos pés! Acho que preciso de um abraço.

PÔR DO SOL


O Shrek fez uma fogueira e está a cozinhar o resto do jantar enquanto a Fiona come.

FIONA
Mmm. Isto é bom. Isto é mesmo bom. O que é isto?

SHREK
Uh, rato de erva. Estilo churrasco.


FIONA
Não estou a brincar. Bem, isto é delicioso.




SHREK
Bem, também são óptimos em guisados. Agora, Não me quero gabar, mas faço um bom guisado de rato com erva. (risos)

Fiona olha para DuLoc e suspira.


FIONA
Acho que vou jantar de forma um pouco diferente
 
amanhã à noite.


SHREK
Talvez me possas visitar no pântano um dia destes. Eu cozinho todo o tipo de coisas
para si. Sopa de sapo do pântano, tártaro de olho de peixe
- é só dizer.


FIONA
(sorri) Gostava muito.


Sorriem um para o outro.


SHREK
Princesa?


FIONA
Sim, Shrek?


SHREK
Eu, hum, estava a pensar... vais... (suspira) Vais comer isso?

DONKEY
(Meu, isto não é romântico? Olha só para este pôr do sol.

FIONA
(salta para cima) Pôr do sol? Oh, não! Quero dizer, é tarde. É muito tarde.
 
SHREK
O quê?


DONKEY
Espera um minuto. Estou a ver o que se está a passar aqui. Tens medo do escuro, não tens?

FIONA
Sim! Sim, é isso mesmo. Estou aterrorizada. Sabes, é melhor eu entrar.

DONKEY
Não te sintas mal, Princesa. Eu também costumava ter medo do escuro, até que -
- Ei, não, espera. Eu ainda tenho medo do escuro.

Shrek suspira


FIONA
Boa noite.


SHREK
Boa noite.


Fiona entra no moinho de vento e fecha a porta. O Burro olha para o Shrek com um novo olhar.

DONKEY
Ohh! Agora estou mesmo a ver o que se está a passar
 
aqui.


SHREK
De que é que estão a falar?


DONKEY
Nem sequer quero ouvir isso. Olha, sou um animal, e tenho instintos. E Eu sei que vocês os dois estavam a curtir um com o outro. Eu sentia-o.

SHREK
Estás louco. Só a estou a trazer de volta para Farquaad.

DONKEY
Oh, vá lá, Shrek. Acorda e cheira as feromonas. Vai lá e diz-lhe como te sentes.

SHREK
Não há nada para contar. Além disso, mesmo que eu lhe dissesse isso, bem, tu
sabe - - e não estou a dizer que sei, porque não sei - - ela é uma princesa, e eu sou
- -


DONKEY
Um ogre?


SHREK
 
Sim. Um ogre.


DONKEY
Ei, onde vais?


SHREK
Para ir buscar... mover lenha. (suspiros)


O burro olha para a grande pilha de lenha que já lá está.


INTERVALO DE TEMPO


O Burro abre a porta do Moinho de Vento e entra. A Fiona não está em lado nenhum.

DONKEY
Princesa? Princesa Fiona? Princesa, onde estás? Princesa?

A Fiona olha para o Burro a partir das sombras, mas não a conseguimos ver.




DONKEY
Isto aqui é muito assustador. Não estou a jogar nenhum jogo.

De repente, Fiona cai do gradeamento. Levanta-se, mas não parece ela própria. Parece um ogre e o Burro começa a passar- se.
 
DONKEY
Aah!


FIONA
Oh, não!


DONKEY
Não, socorro!


FIONA
Shh!


DONKEY
Shrek! Shrek! Shrek!


FIONA
Não, está tudo bem. Está tudo bem.


DONKEY
O que é que fizeram com a princesa?




FIONA
Burro, eu sou a princesa.


DONKEY
Aah!


FIONA
Sou eu, neste corpo.
 
DONKEY
Oh, meu Deus! Comeste a princesa. (para o estômago) Estás a ouvir-me?

FIONA
Burro!


DONKEY
(ainda apontando para o estômago dela) Ouve, continua a respirar! Vou tirar-te daí!

FIONA
Não!


DONKEY
Shrek! Shrek! Shrek!


FIONA
Shh.


DONKEY
Shrek!


FIONA
Este sou eu.


O burro olha-a nos olhos enquanto ela lhe acaricia o focinho, e ele acalma-se.

DONKEY
 
Princesa? O que é que te aconteceu? Estás, uh, uh, uh, diferente.

FIONA
Eu sou feio, está bem?


DONKEY
Bem, sim! Foi alguma coisa que comeste? Porque eu disse ao Shrek que aqueles ratos eram uma má ideia. Tu és o que comes, disse eu. Agora - -

FIONA
Não. Eu - - eu tenho sido assim desde que me lembro.

DONKEY
O que é que quer dizer com isso? Olha, eu nunca te vi assim antes.

FIONA
Só acontece quando o sol se põe. "De noite de uma maneira, de dia de outra.
Esta será a norma... até encontrares
o primeiro beijo do verdadeiro amor... e depois tomar a verdadeira forma do amor".

DONKEY
Ah, isso é lindo. Não sabia que escrevia poesia.
 
FIONA
É um feitiço. (suspiro) Quando eu era pequena, uma bruxa lançou-me um feitiço. Todas as noites torno-me nisto. Esta coisa horrível,
besta feia! Fui colocado numa torre para esperar o dia em que o meu verdadeiro amor
salvar-me. É por isso que tenho de casar Lord Farquaad amanhã antes do sol se pôr e vê-me assim. (começa
para chorar)


DONKEY
Está bem, está bem. Acalma-te. Olha, não é assim tão mau. Não és assim tão feio. Bem, não vou mentir. Tu és feia.
Mas só ficas assim à noite. O Shrek é feio 24 horas por dia, 7 dias por semana.

FIONA
Mas Burro, eu sou uma princesa, e isto não é assim que uma princesa deve ser.



DONKEY
Princesa, que tal se não casares com o Farquaad?

FIONA
Tenho de o fazer. Só o beijo do meu verdadeiro amor pode
 
quebrar o feitiço.
 
DONKEY
Mas, sabes, tu és uma espécie de orge, e o Shrek - - bem, tu tens um
muito em comum.


FIONA
Shrek?


EXTERIOR


O Shrek caminha em direção ao moinho de vento com um girassol na mão.

SHREK
(para si próprio) Princesa, eu - - Uh, como é que está a correr, antes de mais? Bem? Hum, bem
para mim também. Eu estou bem. Vi esta flor e pensei em ti porque é bonita e - - bem, eu não gosto muito dela,
mas pensei que podias gostar porque és bonita. Mas eu gosto de ti na mesma. Eu - - uh, uh... (suspiros) Estou em sarilhos. Ok, aqui vamos nós.

Dirige-se à porta e faz uma pausa quando ouve o Burro e a Fiona a falar.

FIONA
(Não posso casar com quem eu quiser. Olha bem para mim, Burro. Quero dizer, a sério, quem é que pode amar
 
um animal tão
 
hediondo e feio? "Princesa" e "feia" não combinam. É por isso que não posso ficar aqui com o Shrek.

Shrek recua em choque.


FIONA
(os) A minha única hipótese de viver feliz para sempre é casar com o meu verdadeiro amor.



Shrek solta um suspiro profundo. Atira a flor para o chão e vai- se embora.

INTERIOR


FIONA
Não estás a ver, Burro? É assim que tem de ser. É a única maneira de quebrar o feitiço.

DONKEY
Pelo menos tens de dizer a verdade ao Shrek.




FIONA
Não! Não podes dizer uma palavra. Ninguém pode saber.

DONKEY
Qual é o objetivo de poder falar
 
se é preciso guardar segredos?


FIONA
Promete que não vais contar. Prometo!


DONKEY
Está bem, está bem. Eu não lhe vou dizer. Mas tu devias. (Só sei que antes disto acabar, vou precisar de muita terapia a sério. Olha para o meu olho a contorcer-se.

Fiona sai pela porta e vê-o afastar-se. Olha para baixo e vê o girassol. Apanha-o antes de voltar para dentro do moinho de vento.

MANHÃ


O Burro está a dormir. O Shrek não está em lado nenhum. A Fiona ainda está acordada. Ela está a colher pétalas do girassol.

FIONA
Eu digo-lhe, eu digo-lhe que não. Eu digo-lhe,
Eu digo-lhe que não. Eu digo-lhe. (ela rapidamente corre para a porta e vai lá para fora) Shrek!
Shrek, há uma coisa que eu quero... (ela olha e vê o sol nascente e, quando o sol se põe no céu, volta a transformar-se num humano).

Quando ela olha para o sol, vê o Shrek a caminhar em direção a
 
ela.


FIONA
Shrek. Estás bem?


SHREK
Perfeito! Nunca esteve melhor.


FIONA
Eu - - Eu não - - Há uma coisa que tenho de te dizer.

SHREK
Não tens de me dizer nada, Princesa. Já ouvi o suficiente ontem à noite.



FIONA
Ouviste o que eu disse?


SHREK
Cada palavra.


FIONA
Pensei que entenderias.


SHREK
Oh, eu percebo. Como disseste, "Quem poderia amar uma besta horrível e feia?"
 
FIONA
Mas pensei que isso não te importasse.


SHREK
A sério? Bem, é verdade. (Fiona olha para ele em choque. Ele passa por ela e
avista um grupo a aproximar-se). Ah, mesmo a tempo. Princesa, trouxe-vos uma pequena coisa.

Farquaad chegou com um grupo dos seus homens. Ele parece muito majestoso, sentado no seu cavalo. Nunca se adivinharia que ele só tem
com cerca de 1 metro de altura. O burro acorda com um bocejo quando os soldados passam.

DONKEY
O que é que eu perdi? O que é que eu perdi? (avista os soldados) (mufled) Quem é que disse isso? Não pode ter sido o burro.

FARQUAAD
Princesa Fiona.


SHREK
Como prometido. Agora passa-o para cá.


FARQUAAD
Muito bem, ogro. (estende uma peça de papel) A escritura do vosso pântano,
limpo, como combinado. Tomem-na e vão antes de
 
Eu mudo de ideias. (Shrek pega no jornal) Perdoe-me, Princesa, por a ter assustado, mas você assustou-me a
mim, porque eu tenho
nunca vi uma beleza tão radiante antes. Chamo-me Lord Farquaad.

FIONA
Lorde Farquaad? Oh, não, não. (Farquaad estala os dedos) Perdoe- me, meu senhor, porque eu estava apenas a dizer uma pequena... (observa Farquaad a ser levantado do seu cavalo
e pousa em frente dela. Ele aproxima- se da cintura dela) Adeus.

FARQUAAD
Oh, isso é tão querido. Não tens de para desperdiçar boas maneiras com o ogre. Não é que ele tenha sentimentos.

FIONA
Não, tens razão. Não tem.


O Burro assiste a esta troca com um ar curioso.




FARQUAAD
Princesa Fiona, linda, bela e impecável Fiona. Peço a vossa mão em casamento. Serás a noiva perfeita para o noivo perfeito?
 
FIONA
Lorde Farquaad, eu aceito. Nada faria - -


FARQUAAD
(interrompendo) Ótimo! Vou começar a planear, para amanhã casarmos!

FIONA
Não! Quero dizer, porquê esperar? Vamos casar-nos hoje, antes que o sol se ponha.



FARQUAAD
Oh, ansioso, não é? Tens razão. Quanto mais cedo, melhor. Há tanto para fazer! Há o catering, o bolo,
a banda, a lista de convidados. Capitão, junte alguns convidados! (um guarda põe a Fiona no lombo do seu cavalo)

FIONA
Adeusinho, ogre.


Todo o grupo de Farquaad começa a regressar a DuLoc. O Burro fica a vê-los partir.

DONKEY
Shrek, o que estás a fazer? Estás a deixá- la fugir.
 
SHREK
E depois? E depois?


DONKEY
Shrek, há algo sobre ela que tu não sabes. Olha, eu falei com ela a última vez
noite, ela é - -


SHREK
Sei que falaste com ela ontem à noite.
Vocês são óptimos amigos, não são? Agora, se vocês são tão bons amigos, porque é que
não a acompanham a casa?


DONKEY
Shrek, eu - - eu quero ir contigo.


SHREK
Eu disse-te, não disse? Não vens
em casa comigo. Eu vivo sozinho! O meu pântano! Eu! Mais ninguém! Percebem? Ninguém! Especialmente inúteis, patéticos, irritantes, burros falantes!

DONKEY
Mas eu pensei - -


SHREK
Sim. Sabes que mais? Pensaste mal! (pisa fora)
 
DONKEY
Shrek.


Montagem de diferentes cenas. Shrek a chegar a casa. Fiona a vestir o vestido de noiva. Burro num riacho a correr
no dragão. Shrek a limpar a sua casa. Fiona a jantar sozinha. Shrek a jantar sozinho.

CASA DO SHREK


O Shrek está a jantar quando ouve um barulho lá fora. Ele vai lá fora investigar.

SHREK
Burro? (O burro ignora-o e continua a fazer o que estava a fazer).
a fazer?


DONKEY
Eu pensava que, de todas as pessoas, tu reconhecerias uma parede quando a visses.



SHREK
Bem, sim. Mas o muro é suposto
para contornar o meu pântano, não através dele.




DONKEY
É à volta da tua metade. Esta é a tua metade, e esta é a minha metade.
 
SHREK
Oh! A tua metade. Hmm.


DONKEY
Sim, a minha metade. Eu ajudei a salvar a princesa. Eu fiz metade do trabalho. Recebo metade do bota. Agora passa-me essa pedra
grande e velha, aquela que parece a tua cabeça.



SHREK
Para trás!


DONKEY
Não, afasta-te.


SHREK
Este é o meu pântano!


DONKEY
O nosso pântano.


SHREK
(agarra o ramo da árvore com que o Burro está a trabalhar) Larga, Burro!

DONKEY
Deixa-se ir.


SHREK
 
Parvalhão teimoso!


DONKEY
Ogre malcheiroso.


SHREK
Ótimo! (deixa cair o ramo de árvore e afasta-se)

DONKEY
Ei, ei, volta aqui. Ainda não acabei contigo.

SHREK
Bem, estou farto de ti.


DONKEY
Uh-uh. Sabes, contigo é sempre, "Eu, eu, eu!" Bem, adivinha! Agora é a minha vez! Por isso cala-te e presta atenção! Tu és mau para mim. Tu
insultas-me e não aprecias nada do que eu faço! Estás sempre a empurrar-me
ou a afastar-me.


SHREK
Ah, sim? Bem, se te tratei tão mal, porque é que voltaste?

DONKEY
Porque é isso que os amigos fazem! Eles
 
perdoem-se uns aos outros!


SHREK
Pois é. Tens razão, Burro. Eu perdoo- te... por me teres apunhalado pelas costas!
(entra na casa de banho e bate com a porta)

DONKEY
Ohh! Estás tão embrulhado em camadas, rapaz cebola, que tens medo dos teus próprios sentimentos.

SHREK
(os) Vai-te embora!


DONKEY
Lá está você, a fazer de novo, tal como fez com a Fiona. Tudo o que ela sempre
era como tu, talvez até te amasse.




SHREK
(Ama-me? Ela disse que eu era feio, uma criatura hedionda. Ouvi-vos aos dois a falar.

DONKEY
Ela não estava a falar de si. Ela estava a falar de outra pessoa.
 
SHREK
(abre a porta e sai) Ela não estava a falar de mim? Bem, então quem estava
de que está a falar?


DONKEY
Uh-uh, nem pensar. Eu não estou a dizer nada. Não me queres ouvir. Não é? Não é?

SHREK
Burro!


DONKEY
Não!


SHREK
Ok, olha. Peço desculpa, está bem? (Desculpa. Acho que sou apenas um grande,
ogre estúpido e feio. Podes perdoar-me?




DONKEY
É para isso que servem os amigos, não é?




SHREK
Certo. Amigos?


DONKEY
 
Amigos.


SHREK
Então, o que é que a Fiona disse sobre mim?




DONKEY
Porque é que me estás a pedir isso? Porque não lhe vais perguntar?

SHREK
O casamento! Nunca chegaremos a tempo.

DONKEY
Ha-ha-ha! Não tenhas medo, porque onde há vontade, há um caminho e eu tenho um caminho. (assobios)

De repente, o dragão aparece no céu e voa suficientemente baixo para que eles possam subir.

SHREK
Burro?


DONKEY
Acho que é apenas o meu magnetismo animal.




Ambos se riem.
 
SHREK
Anda cá, tu. (dá ao Burro um noogie)


DONKEY
Está bem, está bem. Não fiques todo babado. Ninguém gosta de um lambe-botas. Tudo
Certo, subam e segurem-se bem. Ainda não tive oportunidade de instalar os cintos de segurança.

Eles sobem para o dragão e ela parte para DuLoc.


DULOC - IGREJA


A Fiona e o Farquaad vão casar-se. A cidade inteira está lá. O tipo do cartão do prompter mostra um cartão que diz 'Revered Silence'.



PRIEST
Povo de DuLoc, reunimo-nos aqui hoje para dar testemunho da união....

FIONA
(olhando para o sol poente) Hum-


PRIEST
...do nosso novo rei...


FIONA
Com licença. Podemos passar à frente?
 
para os "sim"?


FARQUAAD
(ri-se e depois faz sinal ao padre para que faça a vontade à Fiona) Vá lá.

PÁTIO


Alguns guardas estão a circular. De repente, o dragão aterra com um estrondo. Os guardas saem todos a correr.

DONKEY
(para o Dragão) Vai lá, diverte-te um pouco. Se precisarmos de ti, eu assobio. Que tal? (ela acena com a cabeça e vai atrás dos guardas) Shrek, espera, espera! Espera um minuto! Queres fazer isto bem, não queres?

SHREK
(à porta da Igreja) De que estão a falar?


DONKEY
Há uma fila pela qual tens de esperar. O pregador vai dizer, "Fala agora ou
para sempre se calarem". É nessa altura que se diz: "Protesto!"

SHREK
Não tenho tempo para isto!
 
DONKEY
Ei, espera. O que é que estão a fazer? Escuta para mim! Olha, tu amas esta mulher,
não amas?


SHREK
Sim.


DONKEY
Queres pegar nela?


SHREK
Sim.


DONKEY
Agradar-lhe?


SHREK
Sim!


DONKEY
(cantando ao estilo James Brown) Então tens de, tens de tentar um pouco de ternura. (normal) As miúdas adoram essa treta romântica!

SHREK
Muito bem! Pára com isso. Quando é que este tipo diz a frase?

DONKEY
 
Temos de o verificar.


DENTRO DA IGREJA


Enquanto o padre fala, vemos a sombra do Burro através de uma das janelas que o Shrek atira para cima para que ele possa ver.

PRIEST
E assim, pelo poder investido em mim...




No exterior


SHREK
O que é que vê?


DONKEY
A cidade inteira está lá dentro.


No interior


PRIEST
Declaro-vos marido e mulher...




No exterior


DONKEY
Estão no altar.


No interior
 
PRIEST
... rei e rainha.


No exterior


DONKEY
Mãe Fletcher! Ele já o disse.




SHREK
Oh, pelo amor do Pete!


Corre para dentro sem apanhar o Burro, que cai no chão com força.




DENTRO DA IGREJA


SHREK
(correndo em direção ao altar) Protesto!




FIONA
Shrek?


Toda a congregação suspira ao ver o Shrek.


FARQUAAD
Oh, agora o que é que ele quer?


SHREK
 
(para a congregação quando chega à frente da Igreja) Olá a todos. Estou a ter um bom momento, não é? Adoro o DuLoc, antes de mais. Muito limpo.

FIONA
O que é que estão a fazer aqui?


SHREK
A sério, já é suficientemente rude estar vivo quando ninguém nos quer, mas aparecer sem ser convidado num casamento...

SHREK
Fiona! Preciso de falar contigo.


FIONA
Oh, agora queres falar? É um pouco tarde para isso, por isso se me derem licença
- -


SHREK
Mas não podes casar com ele.


FIONA
E porque não?


SHREK
Porque ele está a casar contigo para poder ser rei.
 
FARQUAAD
Escandaloso! Fiona, não lhe dês ouvidos.




SHREK
Ele não é o teu verdadeiro amor.


FIONA
E o que é que tu sabes sobre o amor verdadeiro?




SHREK
Bem, eu - - Uh - - Quero dizer - -


FARQUAAD
Oh, isto é precioso. O ogee apaixonou- se pela princesa! Oh, que bom
Senhor. (risos)


O tipo do cartão do prompter levanta um cartão que diz "Rir". Toda a congregação se ri.

FARQUAAD
Um ogre e uma princesa!


FIONA
Shrek, isto é verdade?


FARQUAAD
O que é que isso interessa? É um absurdo! Fiona, meu amor, estamos a um beijo de distância de
 
o nosso "felizes para sempre". Agora beija-me! (franze os lábios e inclina- se para ela, mas ela afasta-se).

FIONA
(olhando para o pôr do sol) "De noite por um lado, de dia por outro." (para Shrek) Eu queria mostrar-te antes.

Ela recua e, à medida que o sol se põe, transforma-se no seu ogre. Dá um sorriso envergonhado a Shrek.

SHREK
Bem, isso explica muita coisa.


FARQUAAD
Ugh! É nojento! Guardas! Guardas! Ordeno-vos que tirem isso da minha vista agora! Apanhem-nos!
Apanhem-nos aos dois!


Os guardas entram em ação e separam a Fiona e o Shrek. O Shrek luta com eles.

SHREK
Não, não!


FIONA
Shrek!


FARQUAAD
 
Esta conversa fiada não altera nada. Este casamento é obrigatório, e isso faz-me rei! Vedes? Vedes?

FIONA
Não, larga-me! Shrek!


SHREK
Não!


FARQUAAD
Não fiquem aí parados, seus idiotas.




SHREK
Saiam da minha frente! Fiona! Arrgh!


FARQUAAD
Vou fazer-te arrepender do dia em que nos conhecemos.
Eu vou ver-vos desenhados e esquartejados! Implorarás para que a morte te salve!

FIONA
Não, Shrek!


FARQUAAD
(aponta um punhal à garganta de Fiona) E quanto a ti, minha mulher...

SHREK
Fiona!
 
FARQUAAD
Vou trancar-vos naquela torre para o resto dos vossos dias! Eu sou o rei!



Shrek consegue libertar uma mão e assobia.


FARQUAAD
Terei ordem! Terei perfeição!
Eu vou ter - - (O burro e o dragão aparecem e o dragão inclina-se e come Farquaad) Aaaah! Aaaah!

DONKEY
Muito bem. Ninguém se mexe. Eu tenho um dragão aqui, e não tenho medo de o usar.
(O dragão ruge.) Sou um burro à beira do abismo!

O dragão arrota e a coroa de Farquaad sai-lhe da boca e cai no chão.

DONKEY
Casamentos de celebridades. Nunca duram, pois não?

A congregação aplaude.


DONKEY
Vai em frente, Shrek.
 
SHREK
Uh, Fiona?


FIONA
Sim, Shrek?


SHREK
Eu - - eu amo-te.


FIONA
A sério?


SHREK
A sério, a sério.


FIONA
(sorri) Também te amo.


Shrek e Fiona beijam-se. Thelonius pega num dos cartões e escreve "Awwww" no verso e depois mostra-o à congregação.



CONGREGAÇÃO
Aawww!


De repente, a magia do feitiço puxa Fiona para longe. Ela é levantada e fica a pairar no ar enquanto a magia funciona à sua volta.

SUSSURROS
 
"Até encontrares o primeiro beijo do verdadeiro amor e depois tomares a verdadeira forma do amor. Toma
a verdadeira forma do amor. Toma a verdadeira forma do amor".




De repente, os olhos de Fiona abrem-se de par em par. Ela é consumida pelo feitiço e depois é lentamente baixada até ao chão.

SHREK
(aproximando-se dela) Fiona? Fiona. Estás bem?

FIONA
(levantando-se, ela continua a ser um ogre) Bem, sim. Mas eu não percebo. É suposto eu ser bonita.

SHREK
Mas tu és linda.


Sorriem um para o outro.


DONKEY
(risos) Estava à espera que isto tivesse um final feliz.

Shrek e Fiona beijam-se... e o beijo desvanece-se em...


O PÂNTANO


...o seu beijo de casamento. O Shrek e a Fiona estão agora casados. Eu sou
 
a Believer" de Smashmouth está a tocar em fundo. Shrek e a Fiona separam-se e correm por entre a multidão até à
carruagem que os espera. Esta é feita de uma cebola gigante. A Fiona atira o seu bouquet que a Cinderela e a Branca de Neve tentam apanhar. Mas acabam por entrar numa luta de gatos e o dragão apanha o bouquet
em vez disso. O homem de pão de mel foi remendado e agora tem uma perna e anda com uma bengala de rebuçado. Shrek e Fiona vão-se embora enquanto os outros convidados festejam e o
Burro começa a cantar a canção.


HOMEM DE GENGIBRE
Deus nos abençoe, a todos.


DONKEY
(quando ele acaba de cantar e a imagem fica preta) Oh, isso é engraçado. Oh. Oh. Não consigo respirar. Não consigo respirar.

O FIM
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)