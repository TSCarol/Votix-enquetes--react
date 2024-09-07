import { Poll } from '../Interface'

export const polls: Poll[] = [
  {
    id: 1,
    title: 'Quantas horas você dorme em média por noite?',
    text: 'Segundo uma meta-análise, tanto a curta quanto a longa duração do sono estão associadas a um aumento no risco de mortalidade (Gangwisch et al., 2008).',
    startDate: '2024-09-03',
    endDate: '2024-09-23',
    status: 'Em andamento'
  },
  {
    id: 2,
    title: 'Qual é o seu dispositivo eletrônico favorito?',
    text: 'Dispositivos eletrônicos transformam a vida cotidiana, conectando pessoas e facilitando tarefas com inovação e eficiência. De smartphones a computadores, eles são essenciais para a modernidade e o progresso.',
    startDate: '2024-10-09',
    endDate: '2024-11-01',
    status: 'Não iniciada'
  },
  {
    id: 3,
    title: 'Qual aplicativo você considera indispensável no seu dia a dia?',
    text: 'De acordo com o portal Terra, A permanência do WhatsApp como elemento fundamental no cotidiano o colocou acima de outros favoritos do país, como o Facebook e a Shopee, além de apps de instituições financeiras como Caixa, Nubank e Banco do Brasil.',
    startDate: '2024-05-25',
    endDate: '2024-06-15',
    status: 'Finalizada'
  }
]
