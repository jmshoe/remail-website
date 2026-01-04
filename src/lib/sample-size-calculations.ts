/**
 * Direct Mail Sample Size Calculator - Statistical Calculation Functions
 *
 * This module calculates the required sample size for A/B testing
 * direct mail campaigns with statistical significance.
 *
 * Formula: n = 2 × (Z_α/2 + Z_β)² × p̄(1-p̄) / (p₁ - p₂)²
 */

export interface SampleSizeInputs {
  baselineRate: number      // Baseline response rate (0-1, e.g., 0.005 for 0.5%)
  mde: number               // Minimum detectable effect as relative % (0-1, e.g., 0.20 for 20%)
  significance: number      // Statistical significance level (0.90, 0.95, or 0.99)
  power: number             // Statistical power (typically 0.80)
  costPerPiece: number      // Cost per mail piece in dollars
}

export interface SampleSizeResults {
  sampleSizePerVariation: number  // Required sample size per variation
  totalMailPieces: number         // Total mail pieces (2 variations)
  estimatedCost: number           // Total estimated cost
  expectedVariationRate: number   // Expected rate in variation (baseline + effect)
  absoluteEffect: number          // Absolute difference in rates
}

export interface MDESensitivityRow {
  mde: number                     // Minimum detectable effect (relative %)
  sampleSizePerVariation: number  // Sample size per variation
  totalMailPieces: number         // Total mail needed
  estimatedCost: number           // Estimated cost
  isSelected: boolean             // Whether this is the selected MDE
}

// Z-scores for common significance levels (two-tailed)
export const Z_SCORES_ALPHA: Record<number, number> = {
  0.90: 1.645,
  0.95: 1.96,
  0.99: 2.576,
}

// Z-scores for common power levels (one-tailed)
export const Z_SCORES_BETA: Record<number, number> = {
  0.80: 0.8416,
  0.85: 1.0364,
  0.90: 1.2816,
}

// Power options for UI
export const POWER_OPTIONS = [
  { value: 0.80, label: '80%', description: 'Industry standard' },
  { value: 0.85, label: '85%', description: 'Higher confidence' },
  { value: 0.90, label: '90%', description: 'Maximum confidence' },
]

// Default inputs based on typical direct mail campaigns
export const DEFAULT_INPUTS: SampleSizeInputs = {
  baselineRate: 0.005,      // 0.5% response rate
  mde: 0.20,                // 20% relative lift
  significance: 0.95,       // 95% confidence
  power: 0.80,              // 80% power
  costPerPiece: 0.63,       // $0.63 per piece
}

// MDE values for sensitivity table
export const MDE_SENSITIVITY_VALUES = [0.10, 0.15, 0.20, 0.25, 0.30]

/**
 * Calculate the required sample size per variation for an A/B test
 *
 * Uses the formula for comparing two proportions with separate variances
 * (matches Optimizely and other industry-standard calculators):
 *
 * n = [Z_α × √(2×p̄×(1-p̄)) + Z_β × √(p₁×(1-p₁) + p₂×(1-p₂))]² / (p₁ - p₂)²
 *
 * Where:
 * - Z_α is the z-score for the significance level (two-tailed)
 * - Z_β is the z-score for the power
 * - p̄ is the pooled proportion under H0
 * - p₁ is the baseline rate
 * - p₂ is the expected variation rate
 *
 * This formula accounts for different variances under the null hypothesis
 * (pooled) and alternative hypothesis (separate), which is more accurate.
 */
export function calculateSampleSize(
  baselineRate: number,
  mde: number,
  significance: number,
  power: number
): number {
  // Get Z-scores
  const zAlpha = Z_SCORES_ALPHA[significance] || 1.96
  const zBeta = Z_SCORES_BETA[power] || 0.84

  // Calculate expected variation rate (baseline + relative lift)
  const p1 = baselineRate
  const p2 = baselineRate * (1 + mde)

  // Calculate absolute effect
  const absoluteEffect = p2 - p1

  // If effect is zero, return infinity (can't detect no difference)
  if (absoluteEffect === 0) {
    return Infinity
  }

  // Pooled proportion under null hypothesis
  const pBar = (p1 + p2) / 2

  // Variance under null hypothesis (pooled)
  const varianceNull = 2 * pBar * (1 - pBar)

  // Variance under alternative hypothesis (separate)
  const varianceAlt = p1 * (1 - p1) + p2 * (1 - p2)

  // Calculate sample size using the separate variance formula
  const numerator = Math.pow(
    zAlpha * Math.sqrt(varianceNull) + zBeta * Math.sqrt(varianceAlt),
    2
  )
  const denominator = Math.pow(absoluteEffect, 2)

  const sampleSize = Math.ceil(numerator / denominator)

  return sampleSize
}

/**
 * Calculate all results from inputs
 */
export function calculateAllResults(inputs: SampleSizeInputs): SampleSizeResults {
  const { baselineRate, mde, significance, power, costPerPiece } = inputs

  const sampleSizePerVariation = calculateSampleSize(baselineRate, mde, significance, power)
  const totalMailPieces = sampleSizePerVariation * 2
  const estimatedCost = totalMailPieces * costPerPiece
  const expectedVariationRate = baselineRate * (1 + mde)
  const absoluteEffect = expectedVariationRate - baselineRate

  return {
    sampleSizePerVariation,
    totalMailPieces,
    estimatedCost,
    expectedVariationRate,
    absoluteEffect,
  }
}

/**
 * Generate MDE sensitivity table
 */
export function generateMDESensitivityTable(
  inputs: SampleSizeInputs,
  selectedMDE: number
): MDESensitivityRow[] {
  return MDE_SENSITIVITY_VALUES.map((mde) => {
    const sampleSizePerVariation = calculateSampleSize(
      inputs.baselineRate,
      mde,
      inputs.significance,
      inputs.power
    )
    const totalMailPieces = sampleSizePerVariation * 2
    const estimatedCost = totalMailPieces * inputs.costPerPiece

    return {
      mde,
      sampleSizePerVariation,
      totalMailPieces,
      estimatedCost,
      isSelected: Math.abs(mde - selectedMDE) < 0.001,
    }
  })
}

/**
 * Format number with commas
 */
export function formatNumber(value: number, decimals: number = 0): string {
  if (!isFinite(value)) return '—'
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

/**
 * Format number as currency
 */
export function formatCurrency(value: number): string {
  if (!isFinite(value)) return '—'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Format number as percentage
 */
export function formatPercent(value: number, decimals: number = 1): string {
  return `${(value * 100).toFixed(decimals)}%`
}

/**
 * Format MDE for display (e.g., "20%" or "+20%")
 */
export function formatMDE(value: number, showPlus: boolean = false): string {
  const percent = (value * 100).toFixed(0)
  return showPlus ? `+${percent}%` : `${percent}%`
}

/**
 * Get a rating based on sample size relative to typical direct mail volumes
 */
export function getSampleSizeRating(
  sampleSize: number
): 'easy' | 'moderate' | 'challenging' | 'difficult' {
  if (sampleSize <= 5000) return 'easy'
  if (sampleSize <= 15000) return 'moderate'
  if (sampleSize <= 30000) return 'challenging'
  return 'difficult'
}

/**
 * Get description for sample size rating
 */
export function getSampleSizeDescription(rating: 'easy' | 'moderate' | 'challenging' | 'difficult'): string {
  switch (rating) {
    case 'easy':
      return 'Achievable in 1-2 mailings'
    case 'moderate':
      return 'Typical for monthly campaigns'
    case 'challenging':
      return 'May require 2-3 months of mailings'
    case 'difficult':
      return 'Consider increasing MDE or combining with other data'
  }
}
