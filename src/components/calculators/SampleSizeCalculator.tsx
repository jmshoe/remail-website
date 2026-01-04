'use client'

import { useState, useMemo } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import {
  type SampleSizeInputs,
  DEFAULT_INPUTS,
  POWER_OPTIONS,
  calculateAllResults,
  generateMDESensitivityTable,
  formatNumber,
  formatCurrency,
  formatPercent,
  formatMDE,
  getSampleSizeRating,
  getSampleSizeDescription,
} from '@/lib/sample-size-calculations'
import {
  Percent,
  Target,
  DollarSign,
  Mail,
  TrendingUp,
  Calculator,
  Info,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface SliderInputProps {
  id: string
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step: number
  icon?: React.ReactNode
  suffix?: string
  prefix?: string
  formatValue?: (value: number) => string
  helpText?: string
}

function SliderInput({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
  icon,
  suffix,
  prefix,
  formatValue,
  helpText,
}: SliderInputProps) {
  const displayValue = formatValue ? formatValue(value) : value.toString()

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-slate-700">
          {icon}
          {label}
        </Label>
        <div className="flex items-center gap-1">
          {prefix && <span className="text-sm text-slate-500">{prefix}</span>}
          <Input
            id={id}
            type="number"
            value={value}
            onChange={(e) => onChange(parseFloat(e.target.value) || min)}
            min={min}
            max={max}
            step={step}
            className="h-8 w-20 text-right text-sm"
          />
          {suffix && <span className="text-sm text-slate-500">{suffix}</span>}
        </div>
      </div>
      <Slider
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{formatValue ? formatValue(min) : min}{suffix}</span>
        <span className="font-medium text-primary">{displayValue}{suffix}</span>
        <span>{formatValue ? formatValue(max) : max}{suffix}</span>
      </div>
      {helpText && (
        <p className="flex items-start gap-1 text-xs text-muted-foreground">
          <Info className="mt-0.5 h-3 w-3 flex-shrink-0" />
          {helpText}
        </p>
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
  rating?: 'easy' | 'moderate' | 'challenging' | 'difficult'
}

function ResultCard({ label, value, subValue, icon, highlight, rating }: ResultCardProps) {
  const ratingColors = {
    easy: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    moderate: 'bg-green-50 border-green-200 text-green-700',
    challenging: 'bg-amber-50 border-amber-200 text-amber-700',
    difficult: 'bg-red-50 border-red-200 text-red-700',
  }

  return (
    <div
      className={cn(
        'rounded-xl border p-4 transition-all',
        rating
          ? ratingColors[rating]
          : highlight
            ? 'border-primary/20 bg-primary/5'
            : 'border-slate-200 bg-white'
      )}
    >
      <div className="flex items-center gap-2 text-sm text-slate-500">
        {icon}
        {label}
      </div>
      <p className={cn('mt-2 text-2xl font-bold', rating ? '' : 'text-foreground')}>
        {value}
      </p>
      {subValue && <p className="mt-1 text-sm text-muted-foreground">{subValue}</p>}
    </div>
  )
}

interface SensitivityTableProps {
  data: ReturnType<typeof generateMDESensitivityTable>
}

function SensitivityTable({ data }: SensitivityTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50">
            <th className="px-4 py-3 text-left font-medium text-slate-600">
              Min. Detectable Effect
            </th>
            <th className="px-4 py-3 text-right font-medium text-slate-600">
              Sample Per Variation
            </th>
            <th className="px-4 py-3 text-right font-medium text-slate-600">Total Mail</th>
            <th className="px-4 py-3 text-right font-medium text-slate-600">Est. Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.mde}
              className={cn(
                'border-b border-slate-50 transition-colors',
                row.isSelected
                  ? 'bg-primary/5 font-semibold'
                  : 'hover:bg-slate-50'
              )}
            >
              <td className="px-4 py-3">
                <span className={cn(row.isSelected && 'text-primary')}>
                  {formatMDE(row.mde, true)} relative lift
                </span>
              </td>
              <td className="px-4 py-3 text-right font-mono">
                {formatNumber(row.sampleSizePerVariation)}
              </td>
              <td className="px-4 py-3 text-right font-mono">
                {formatNumber(row.totalMailPieces)}
              </td>
              <td className="px-4 py-3 text-right font-mono">
                {formatCurrency(row.estimatedCost)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function SampleSizeCalculator() {
  const [inputs, setInputs] = useState<SampleSizeInputs>(DEFAULT_INPUTS)

  // Calculate all results whenever inputs change
  const results = useMemo(() => calculateAllResults(inputs), [inputs])

  // Generate sensitivity table
  const sensitivityData = useMemo(
    () => generateMDESensitivityTable(inputs, inputs.mde),
    [inputs]
  )

  const updateInput = <K extends keyof SampleSizeInputs>(key: K, value: SampleSizeInputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  const rating = getSampleSizeRating(results.sampleSizePerVariation)
  const ratingDescription = getSampleSizeDescription(rating)

  const ratingBadgeVariant = rating === 'easy' || rating === 'moderate' ? 'default' : 'secondary'

  return (
    <div className="space-y-12">
      {/* Calculator Input & Results Summary */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Section */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 lg:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground">Test Parameters</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Adjust these values to calculate your required sample size
            </p>
          </div>

          <div className="space-y-8">
            <SliderInput
              id="baselineRate"
              label="Baseline Response Rate"
              value={inputs.baselineRate * 100}
              onChange={(v) => updateInput('baselineRate', v / 100)}
              min={0.1}
              max={2}
              step={0.1}
              icon={<Percent className="h-4 w-4 text-primary" />}
              suffix="%"
              formatValue={(v) => v.toFixed(1)}
              helpText="Your current/expected response rate before the test"
            />

            <SliderInput
              id="mde"
              label="Minimum Detectable Effect (Relative)"
              value={inputs.mde * 100}
              onChange={(v) => updateInput('mde', v / 100)}
              min={5}
              max={50}
              step={5}
              icon={<TrendingUp className="h-4 w-4 text-primary" />}
              suffix="%"
              formatValue={(v) => v.toFixed(0)}
              helpText="The smallest improvement you want to reliably detect"
            />

            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Target className="h-4 w-4 text-primary" />
                Statistical Significance
              </Label>
              <div className="flex gap-2">
                {[0.90, 0.95, 0.99].map((sig) => (
                  <button
                    key={sig}
                    onClick={() => updateInput('significance', sig)}
                    className={cn(
                      'flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-all',
                      inputs.significance === sig
                        ? 'border-primary bg-primary text-white'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-primary/50'
                    )}
                  >
                    {(sig * 100).toFixed(0)}%
                  </button>
                ))}
              </div>
              <p className="flex items-start gap-1 text-xs text-muted-foreground">
                <Info className="mt-0.5 h-3 w-3 flex-shrink-0" />
                95% is the industry standard for A/B testing
              </p>
            </div>

            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <TrendingUp className="h-4 w-4 text-primary" />
                Statistical Power
              </Label>
              <div className="flex gap-2">
                {POWER_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateInput('power', option.value)}
                    className={cn(
                      'flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-all',
                      inputs.power === option.value
                        ? 'border-primary bg-primary text-white'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-primary/50'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <p className="flex items-start gap-1 text-xs text-muted-foreground">
                <Info className="mt-0.5 h-3 w-3 flex-shrink-0" />
                80% is the industry standard for A/B testing
              </p>
            </div>

            <SliderInput
              id="costPerPiece"
              label="Cost Per Mail Piece"
              value={inputs.costPerPiece}
              onChange={(v) => updateInput('costPerPiece', v)}
              min={0.3}
              max={2}
              step={0.01}
              icon={<DollarSign className="h-4 w-4 text-primary" />}
              prefix="$"
              formatValue={(v) => v.toFixed(2)}
              helpText="Average cost including printing and postage"
            />
          </div>
        </div>

        {/* Results Summary */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-slate-50 p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Required Sample Size</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Based on {formatPercent(inputs.significance, 0)} significance &{' '}
                  {formatPercent(inputs.power, 0)} power
                </p>
              </div>
              <Badge variant={ratingBadgeVariant} className="capitalize">
                {rating}
              </Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ResultCard
                label="Per Variation"
                value={formatNumber(results.sampleSizePerVariation)}
                subValue="mail pieces needed"
                icon={<Mail className="h-4 w-4" />}
                rating={rating}
              />
              <ResultCard
                label="Total Mail Pieces"
                value={formatNumber(results.totalMailPieces)}
                subValue="for both variations"
                icon={<Calculator className="h-4 w-4" />}
                highlight
              />
              <ResultCard
                label="Estimated Cost"
                value={formatCurrency(results.estimatedCost)}
                subValue={`at ${formatCurrency(inputs.costPerPiece)} per piece`}
                icon={<DollarSign className="h-4 w-4" />}
              />
              <ResultCard
                label="Absolute Effect"
                value={formatPercent(results.absoluteEffect, 2)}
                subValue={`${formatPercent(inputs.baselineRate, 1)} → ${formatPercent(results.expectedVariationRate, 2)}`}
                icon={<TrendingUp className="h-4 w-4" />}
              />
            </div>

            <div className="mt-6 rounded-lg bg-white p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Interpretation: </span>
                {ratingDescription}. You need to send{' '}
                <span className="font-semibold text-primary">
                  {formatNumber(results.sampleSizePerVariation)}
                </span>{' '}
                mail pieces to each variation (control + test) to reliably detect a{' '}
                <span className="font-semibold">{formatMDE(inputs.mde, true)}</span> relative
                improvement in response rate.
              </p>
            </div>
          </div>

          {/* Test Parameters Summary */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
            <h3 className="mb-4 font-semibold text-foreground">Test Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Baseline Response Rate</span>
                <span className="font-medium">{formatPercent(inputs.baselineRate, 1)}</span>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Expected Variation Rate</span>
                <span className="font-medium">{formatPercent(results.expectedVariationRate, 2)}</span>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Minimum Detectable Effect</span>
                <span className="font-medium">{formatMDE(inputs.mde, true)} relative</span>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Statistical Significance</span>
                <span className="font-medium">{formatPercent(inputs.significance, 0)}</span>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Statistical Power</span>
                <span className="font-medium">{formatPercent(inputs.power, 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sensitivity Analysis Table */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">MDE Sensitivity Analysis</h2>
          <p className="mt-2 text-muted-foreground">
            See how different minimum detectable effect levels impact your required sample size.
            Larger effects are easier to detect but may miss smaller improvements.
          </p>
        </div>

        <SensitivityTable data={sensitivityData} />

        <div className="mx-auto max-w-2xl rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
          <p>
            <span className="font-semibold">Pro tip:</span> If your required sample size is too
            large, consider increasing the MDE. A 30% relative lift is still meaningful for
            optimizing direct mail campaigns, and it dramatically reduces the mail volume needed.
          </p>
        </div>
      </div>
    </div>
  )
}
