'use client'

import { useState, useMemo } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  type Assumptions,
  DEFAULT_ASSUMPTIONS,
  calculateAll,
  formatCurrency,
  formatPercent,
  formatROAS,
  formatNumber,
  getROASRating,
} from '@/lib/roas-calculations'
import {
  SensitivityTable,
  GROSS_LEADS_COLUMNS,
  NET_LEADS_COLUMNS,
  CONTRACTS_COLUMNS,
  CLOSED_DEALS_COLUMNS,
  CLOSE_RATE_COLUMNS,
} from './SensitivityTable'
import { TrendingUp, DollarSign, Target, Mail, Users, FileCheck, Percent } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InputFieldProps {
  id: string
  label: string
  value: number
  onChange: (value: number) => void
  icon?: React.ReactNode
  prefix?: string
  suffix?: string
  min?: number
  max?: number
  step?: number
  helpText?: string
  isPercentage?: boolean
}

function InputField({
  id,
  label,
  value,
  onChange,
  icon,
  prefix,
  suffix,
  min = 0,
  max,
  step = 1,
  helpText,
  isPercentage = false,
}: InputFieldProps) {
  const displayValue = isPercentage ? value * 100 : value

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = parseFloat(e.target.value) || 0
    const actualValue = isPercentage ? rawValue / 100 : rawValue
    onChange(actualValue)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-slate-700">
        {icon}
        {label}
      </Label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
            {prefix}
          </span>
        )}
        <Input
          id={id}
          type="number"
          value={displayValue}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          className={cn(
            'h-11',
            prefix && 'pl-7',
            suffix && 'pr-10'
          )}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
            {suffix}
          </span>
        )}
      </div>
      {helpText && (
        <p className="text-xs text-muted-foreground">{helpText}</p>
      )}
    </div>
  )
}

interface ResultCardProps {
  label: string
  value: string
  subValue?: string
  icon: React.ReactNode
  highlight?: boolean
  roasRating?: 'excellent' | 'good' | 'moderate' | 'low'
}

function ResultCard({ label, value, subValue, icon, highlight, roasRating }: ResultCardProps) {
  const ratingColors = {
    excellent: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    good: 'bg-green-50 border-green-200 text-green-700',
    moderate: 'bg-amber-50 border-amber-200 text-amber-700',
    low: 'bg-red-50 border-red-200 text-red-700',
  }

  return (
    <div
      className={cn(
        'rounded-xl border p-4 transition-all',
        roasRating
          ? ratingColors[roasRating]
          : highlight
            ? 'border-primary/20 bg-primary/5'
            : 'border-slate-200 bg-white'
      )}
    >
      <div className="flex items-center gap-2 text-sm text-slate-500">
        {icon}
        {label}
      </div>
      <p className={cn(
        'mt-2 text-2xl font-bold',
        roasRating ? '' : 'text-foreground'
      )}>
        {value}
      </p>
      {subValue && (
        <p className="mt-1 text-sm text-muted-foreground">{subValue}</p>
      )}
    </div>
  )
}

export function ROASCalculator() {
  const [assumptions, setAssumptions] = useState<Assumptions>(DEFAULT_ASSUMPTIONS)

  // Calculate all results whenever assumptions change
  const results = useMemo(() => calculateAll(assumptions), [assumptions])

  const updateAssumption = <K extends keyof Assumptions>(
    key: K,
    value: Assumptions[K]
  ) => {
    setAssumptions((prev) => ({ ...prev, [key]: value }))
  }

  // Transform table data to match expected format
  const grossLeadsData = results.grossLeadsTable.map((row) => ({
    value: row.value,
    rate: row.rate,
    cost: row.cost,
    isBaseline: row.isBaseline,
  }))

  const netLeadsData = results.netLeadsTable.map((row) => ({
    value: row.value,
    rate: row.rate,
    cost: row.cost,
    isBaseline: row.isBaseline,
  }))

  const contractsData = results.contractsTable.map((row) => ({
    value: row.value,
    rate: row.rate,
    cost: row.cost,
    isBaseline: row.isBaseline,
  }))

  const closedDealsData = results.closedDealsTable.map((row) => ({
    value: row.value,
    rate: row.rate,
    cost: row.cost,
    isBaseline: row.isBaseline,
  }))

  const closeRateData = results.closeRateSensitivity.map((row) => ({
    netLeads: row.netLeads,
    contractRate: row.contractRate,
    roas: row.roas,
    isBaseline: row.isBaseline,
  }))

  const roasRating = getROASRating(results.expectedROAS)

  return (
    <div className="space-y-12">
      {/* Calculator Input & Results Summary */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Section */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 lg:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground">Input Assumptions</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Adjust these values to match your campaign parameters
            </p>
          </div>

          <div className="space-y-6">
            <InputField
              id="mailPieces"
              label="Number of Mail Pieces"
              value={assumptions.mailPieces}
              onChange={(v) => updateAssumption('mailPieces', v)}
              icon={<Mail className="h-4 w-4 text-primary" />}
              min={1000}
              step={1000}
              helpText="Monthly mail volume you plan to send"
            />

            <InputField
              id="costPerPiece"
              label="Avg. Cost per Piece"
              value={assumptions.costPerPiece}
              onChange={(v) => updateAssumption('costPerPiece', v)}
              icon={<DollarSign className="h-4 w-4 text-primary" />}
              prefix="$"
              min={0.1}
              step={0.01}
              helpText="Cost per mail piece including printing & postage"
            />

            <InputField
              id="netLeadRatio"
              label="Net Lead / Gross Lead Ratio"
              value={assumptions.netLeadRatio}
              onChange={(v) => updateAssumption('netLeadRatio', v)}
              icon={<Users className="h-4 w-4 text-primary" />}
              suffix="%"
              min={10}
              max={100}
              step={5}
              isPercentage
              helpText="% of leads that are qualified or workable"
            />

            <InputField
              id="contractRate"
              label="Contracts / Net Leads"
              value={assumptions.contractRate}
              onChange={(v) => updateAssumption('contractRate', v)}
              icon={<FileCheck className="h-4 w-4 text-primary" />}
              suffix="%"
              min={1}
              max={50}
              step={1}
              isPercentage
              helpText="% of net leads that become contracts"
            />

            <InputField
              id="contractValue"
              label="Average Contract Value"
              value={assumptions.contractValue}
              onChange={(v) => updateAssumption('contractValue', v)}
              icon={<Target className="h-4 w-4 text-primary" />}
              prefix="$"
              min={1000}
              step={1000}
              helpText="Avg. profit per closed deal (assignment fee, flip profit, etc.)"
            />

            <InputField
              id="closeRate"
              label="Avg. Contract to Close Rate"
              value={assumptions.closeRate}
              onChange={(v) => updateAssumption('closeRate', v)}
              icon={<Percent className="h-4 w-4 text-primary" />}
              suffix="%"
              min={25}
              max={100}
              step={5}
              isPercentage
              helpText="% of contracts that close (1 - fallout rate)"
            />
          </div>
        </div>

        {/* Results Summary */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-slate-50 p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Results Summary</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Based on a {formatPercent(0.004)} baseline response rate
                </p>
              </div>
              <Badge variant={roasRating === 'excellent' || roasRating === 'good' ? 'default' : 'secondary'}>
                {roasRating === 'excellent' && 'Excellent'}
                {roasRating === 'good' && 'Good'}
                {roasRating === 'moderate' && 'Moderate'}
                {roasRating === 'low' && 'Needs Work'}
              </Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ResultCard
                label="Total Campaign Cost"
                value={formatCurrency(results.totalCost)}
                icon={<DollarSign className="h-4 w-4" />}
              />
              <ResultCard
                label="Expected ROAS"
                value={formatROAS(results.expectedROAS)}
                subValue={`${results.expectedROI.toFixed(0)}% ROI`}
                icon={<TrendingUp className="h-4 w-4" />}
                roasRating={roasRating}
              />
              <ResultCard
                label="Expected Revenue"
                value={formatCurrency(results.expectedRevenue)}
                subValue={`${formatNumber(results.expectedClosed, 1)} closed deals`}
                icon={<Target className="h-4 w-4" />}
                highlight
              />
              <ResultCard
                label="Net Profit"
                value={formatCurrency(results.expectedRevenue - results.totalCost)}
                icon={<DollarSign className="h-4 w-4" />}
              />
            </div>
          </div>

          {/* Funnel Summary */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
            <h3 className="mb-4 font-semibold text-foreground">Expected Funnel (Baseline)</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Mail Pieces</span>
                <span className="font-medium">{formatNumber(assumptions.mailPieces)}</span>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Gross Leads ({formatPercent(0.004)} response)</span>
                <span className="font-medium">{formatNumber(results.expectedGrossLeads)}</span>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Net Leads ({formatPercent(assumptions.netLeadRatio, 0)} qualified)</span>
                <span className="font-medium">{formatNumber(results.expectedNetLeads, 1)}</span>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Contracts ({formatPercent(assumptions.contractRate, 0)} conversion)</span>
                <span className="font-medium">{formatNumber(results.expectedContracts, 1)}</span>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Closed Deals ({formatPercent(assumptions.closeRate, 0)} close rate)</span>
                <span className="font-medium">{formatNumber(results.expectedClosed, 2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sensitivity Analysis Tables */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">Funnel Sensitivity Analysis</h2>
          <p className="mt-2 text-muted-foreground">
            See how different response rates affect your results. The highlighted row shows your expected baseline.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <SensitivityTable
            title="Gross Leads"
            description="Raw responses before qualification"
            columns={GROSS_LEADS_COLUMNS}
            data={grossLeadsData}
          />
          <SensitivityTable
            title="Net Leads"
            description="Qualified, workable leads"
            columns={NET_LEADS_COLUMNS}
            data={netLeadsData}
          />
          <SensitivityTable
            title="Contracts"
            description="Deals under contract"
            columns={CONTRACTS_COLUMNS}
            data={contractsData}
          />
          <SensitivityTable
            title="Closed Deals & ROAS"
            description="Final results after fallout"
            columns={CLOSED_DEALS_COLUMNS}
            data={closedDealsData}
            highlightColumn="cost"
          />
        </div>

        {/* Close Rate Sensitivity */}
        <div className="mx-auto max-w-2xl">
          <SensitivityTable
            title="Close Rate Sensitivity"
            description="How your ROAS changes based on contract-to-close conversion rate"
            columns={CLOSE_RATE_COLUMNS}
            data={closeRateData}
            highlightColumn="roas"
          />
        </div>
      </div>
    </div>
  )
}
