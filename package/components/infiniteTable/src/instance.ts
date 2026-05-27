import type infiniteTable from './infiniteTable.vue'

export type InfiniteTableInstance = InstanceType<typeof infiniteTable>

export interface TableColumn {
  title: string
  field: string
  width?: string
  minWidth?: string
  align?: 'left' | 'center' | 'right'
}

export interface TableRow {
  [key: string]: any
  _uniqueKey?: string
}