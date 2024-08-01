export interface Usage {
  opened_at: Date,
  closed_at: Date | null,
  flow_volume: number,
  total_spent: number
}

export interface Dispenser {
  dispenserId: string
  amount: number;
  usages: Array<Usage>
}