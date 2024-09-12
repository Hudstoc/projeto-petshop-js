let dadosPetshop = [
    {
        pet: {
            nome: "Rex",
            raca: "Labrador",
            cor: "Dourado",
            tamanho: "Grande",
            foto: "foto.png"
        },
        tutor: {
            nome: "João Silva",
            telefone: "(11) 98765-4321",
            endereco: "Rua dos Bobos, nº 0"
        },
        servicos: [
            {
                tipo: "Banho e Tosa",
                valor: 100.00,
                formapagamento: "Cartão",
                data: "2023-11-22",
            },
            {
                tipo: "Banho e Tosa",
                valor: 100.00,
                formapagamento: "Cartão",
                data: "2023-11-22",
            }
        ],
        clubinho: true,
        observacoes: "Alimentar com ração específica para cães sensíveis."
    },
    {
        pet: {
            nome: "Mia",
            raca: "Persa",
            cor: "Branco",
            tamanho: "Médio",
            foto: "foto.png"
        },
        tutor: {
            nome: "Ana Souza",
            telefone: "(21) 91234-5678",
            endereco: "Avenida das Flores, nº 150"
        },
        servicos: [
            {
                tipo: "Tosa Higiênica",
                valor: 50.00,
                formapagamento: "Dinheiro",
                data: "2023-12-10"
            },
            {
                tipo: "Consulta Veterinária",
                valor: 150.00,
                formapagamento: "Pix",
                data: "2023-12-05"
            }
        ],
        clubinho: false,
        observacoes: "Não gosta de outros animais."
    },
    {
        pet: {
            nome: "Thor",
            raca: "Vira-lata",
            cor: "Preto e Branco",
            tamanho: "Grande",
            foto: "foto.png"
        },
        tutor: {
            nome: "Carlos Pereira",
            telefone: "(19) 34567-8910",
            endereco: "Rua dos Pássaros, nº 200"
        },
        servicos: [
            {
                tipo: "Banho e Tosa",
                valor: 120.00,
                formapagamento: "Cartão",
                data: "2023-11-25"
            },
            {
                tipo: "Adestramento",
                valor: 200.00,
                formapagamento: "Boleto",
                data: "2023-12-15"
            },
            {
                tipo: "Hospedagem",
                valor: 50.00,
                formapagamento: "Dinheiro",
                data: "2023-12-20"
            }
        ],
        clubinho: true,
        observacoes: "Necessita de passeios longos."
    },
    {
        pet: {
            nome: "Nemo",
            raca: "Palhaço",
            cor: "Laranja e Branco",
            tamanho: "Pequeno",
            foto: "foto.png"
        },
        tutor: {
            nome: "Maria Fernandes",
            telefone: "(41) 87654-3210",
            endereco: "Rua dos Corais, nº 50"
        },
        servicos: [
            {
                tipo: "Limpeza do Aquário",
                valor: 80.00,
                formapagamento: "Pix",
                data: "2023-12-08"
            }
        ],
        clubinho: false,
        observacoes: "Alimentar com ração específica para peixes marinhos."
    },
    {
        pet: {
            nome: "Nemo",
            raca: "Palhaço",
            cor: "Laranja e Branco",
            tamanho: "Pequeno",
            foto: "foto.png"
        },
        tutor: {
            nome: "Maria Fernandes",
            telefone: "(41) 87654-3210",
            endereco: "Rua dos Corais, nº 50"
        },
        servicos: [
            {
                tipo: "Limpeza do Aquário",
                valor: 80.00,
                formapagamento: "Pix",
                data: "2023-12-08"
            }
        ],
        clubinho: false,
        observacoes: "Alimentar com ração específica para peixes marinhos."
    }
];

function adicionarPet(nomePet, raca, cor, tamanho, nomeTutor, tel, endereco, clubinho, observacoes) {
    const novoPet = {
        pet: {
            nome: nomePet,
            raca: raca,
            cor: cor,
            tamanho: tamanho,
            foto: "foto.png"
        },
        tutor: {
            nome: nomeTutor,
            telefone: tel,
            endereco: endereco
        },
        servicos: [
            {
                tipo: "",
                valor: "",
                formapagamento: "",
                data: ""
            }
        ],
        clubinho: clubinho,
        observacoes: observacoes
    };
    dadosPetshop.push(novoPet);
}