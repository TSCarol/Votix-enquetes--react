export interface Poll {
  id: number
  title: string
  text?: string
  startDate: string
  endDate: string
  status: 'Não iniciada' | 'Em andamento' | 'Finalizada'
}
