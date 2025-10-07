
function mostrarHistoria(personagem) {
    const nomePersonagem = document.getElementById('nomePersonagem');
    const descricaoPersonagem = document.getElementById('descricaoPersonagem');
    
    const personagensInfo = {
        meredith: {
            nome: 'Meredith Grey',
            descricao: 'Meredith Grey é uma cirurgiã geral e a protagonista da série. Ela é conhecida por sua inteligência e coragem, enfrentando muitos desafios pessoais e profissionais.'
        },
        derek: {
            nome: 'Derek Shepherd',
            descricao: 'Derek Shepherd, também conhecido como "McDreamy", é um neurocirurgião famoso e o grande amor de Meredith Grey.'
        },
        christina: {
            nome: 'Cristina Yang',
            descricao: 'Cristina Yang é uma cirurgiã cardíaca brilhante e a melhor amiga de Meredith. Ela é conhecida por sua determinação e ambição.'
        },
        alex: {
            nome: 'Alex Karev',
            descricao: 'Alex Karev é um cirurgião pediátrico que começou como um residente problemático, mas ao longo da série se torna um médico respeitado e uma pessoa mais madura.'
        },
        bailey: {
            nome: 'Miranda Bailey',
            descricao: 'Miranda Bailey é uma cirurgiã geral e uma das médicas mais respeitadas. Ela é conhecida por sua disciplina e sua habilidade de ser firme, mas justa.'
        },
        richard: {
            nome: 'Richard Weber',
            descricao: 'Richard Webber é um cirurgião geral e mentor de muitos dos médicos em Grey Sloan Memorial. Ele tem uma longa carreira e é conhecido por sua sabedoria e experiência.'
        },
        burke: {
            nome: 'Preston Burke',
            descricao: 'Preston Burke é um cirurgião cardíaco brilhante e ex-marido de Cristina Yang. Ele é um dos primeiros mentores de Cristina e também tem uma história complicada com Meredith.'
        },
        mark: {
            nome: 'Mark Sloan',
            descricao: 'Mark Sloan, conhecido como "McSteamy", é um cirurgião plástico carismático e amigo próximo de Derek Shepherd. Ele tem uma história de amores e relacionamentos complicados.'
        }
    };

    // muda o nome e descriçao conforme cada personagem
    nomePersonagem.innerText = personagensInfo[personagem].nome;
    descricaoPersonagem.innerText = personagensInfo[personagem].descricao;
}
