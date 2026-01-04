'use client'

import { cn } from '@/lib/utils'
import { formatCurrency, formatPercent, formatROAS, formatNumber, getROASRating } from '@/lib/roas-calculations'

interface Column {
  key: string
  header: string
  format: 'number' | 'currency' | 'percent' | 'roas'
  decimals?: number
}

interface TableRow {
  [key: string]: number | boolean
  isBaseline: boolean
}

interface SensitivityTableProps {
  title: string
  description?: string
  columns: Column[]
  data: TableRow[]
  highlightColumn?: string // Column to apply ROAS color coding
  className?: string
}

export function SensitivityTable({
  title,
  description,
  columns,
  data,
  highlightColumn,
  className,
}: SensitivityTableProps) {
  const formatValue = (value: number, format: Column['format'], decimals?: number): string => {
    switch (format) {
      case 'currency':
        return formatCurrency(value)
      case 'percent':
        return formatPercent(value, decimals ?? 2)
      case 'roas':
        return formatROAS(value)
      case 'number':
      default:
        return formatNumber(value, decimals ?? 0)
    }
  }

  const getROASColorClass = (roas: number): string => {
    const rating = getROASRating(roas)
    switch (rating) {
      case 'excellent':
        return 'bg-emerald-100 text-emerald-800'
      case 'good':
        return 'bg-green-50 text-green-700'
      case 'moderate':
        return 'bg-amber-50 text-amber-700'
      case 'low':
        return 'bg-red-50 text-red-700'
    }
  }

  return (
    <div className={cn('rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5', className)}>
      <div className="border-b border-slate-200 px-6 py-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/50">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-sm font-semibold text-slate-700"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn(
                  'transition-colors',
                  row.isBaseline
                    ? 'bg-primary/5 border-l-4 border-l-primary'
                    : 'hover:bg-slate-50'
                )}
              >
                {columns.map((column) => {
                  const value = row[column.key] as number
                  const isHighlightColumn = highlightColumn === column.key
                  const formattedValue = formatValue(value, column.format, column.decimals)

                  return (
                    <td
                      key={column.key}
                      className={cn(
                        'px-6 py-4 text-sm',
                        row.isBaseline ? 'font-semibold' : 'font-medium',
                        isHighlightColumn && column.format === 'roas'
                          ? cn('rounded', getROASColorClass(value))
                          : 'text-slate-700'
                      )}
                    >
                      {formattedValue}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Preset table configurations for common use cases
export const GROSS_LEADS_COLUMNS: Column[] = [
  { key: 'value', header: 'Gross Leads', format: 'number' },
  { key: 'rate', header: 'Response Rate', format: 'percent' },
  { key: 'cost', header: 'Cost per Lead', format: 'currency' },
]

export const NET_LEADS_COLUMNS: Column[] = [
  { key: 'value', header: 'Net Leads', format: 'number', decimals: 1 },
  { key: 'rate', header: 'Net Response Rate', format: 'percent' },
  { key: 'cost', header: 'Cost per Net Lead', format: 'currency' },
]

export const CONTRACTS_COLUMNS: Column[] = [
  { key: 'value', header: 'Contracts', format: 'number' },
  { key: 'rate', header: 'Avg. Cost / Contract', format: 'currency' },
  { key: 'cost', header: 'Gross Contract Value', format: 'currency' },
]

export const CLOSED_DEALS_COLUMNS: Column[] = [
  { key: 'value', header: 'Closed', format: 'number', decimals: 2 },
  { key: 'rate', header: 'Net Closed Revenue', format: 'currency' },
  { key: 'cost', header: 'Return on Spend (ROAS)', format: 'roas' },
]

export const CLOSE_RATE_COLUMNS: Column[] = [
  { key: 'netLeads', header: 'Net Leads', format: 'number' },
  { key: 'contractRate', header: 'Contracts / Net Leads', format: 'percent', decimals: 1 },
  { key: 'roas', header: 'ROAS', format: 'roas' },
]
