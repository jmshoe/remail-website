/**
 * Direct Mail ROAS Calculator - Pure Calculation Functions
 *
 * This module contains all the business logic for calculating
 * direct mail ROI/ROAS with sensitivity analysis.
 */

export interface Assumptions {
  mailPieces: number        // Number of mail pieces sent
  costPerPiece: number      // Cost per mail piece in dollars
  netLeadRatio: number      // Net leads / Gross leads (0-1)
  contractRate: number      // Contracts / Net leads (0-1)
  contractValue: number     // Average contract value/profit
  closeRate: number         // Contract to close rate (0-1)
}

export interface FunnelRow {
  value: number             // Primary metric (leads, contracts, etc.)
  rate: number              // Percentage rate
  cost: number              // Cost per unit OR revenue
  isBaseline: boolean       // Whether this is the expected/middle row
}

export interface SensitivityRow {
  netLeads: number
  contractRate: number
  roas: number
  isBaseline: boolean
}

export interface CalculationResults {
  // Summary metrics
  totalCost: number
  expectedGrossLeads: number
  expectedNetLeads: number
  expectedContracts: number
  expectedClosed: number
  expectedRevenue: number
  expectedROAS: number
  expectedROI: number        // Percentage

  // Sensitivity tables
  grossLeadsTable: FunnelRow[]
  netLeadsTable: FunnelRow[]
  contractsTable: FunnelRow[]
  closedDealsTable: FunnelRow[]
  closeRateSensitivity: SensitivityRow[]
}

// Default assumptions based on industry averages
export const DEFAULT_ASSUMPTIONS: Assumptions = {
  mailPieces: 25000,
  costPerPiece: 0.63,
  netLeadRatio: 0.50,     // 50%
  contractRate: 0.08,      // 8%
  contractValue: 15000,
  closeRate: 0.75,         // 75%
}

// Response rate multipliers for sensitivity analysis
// Creates 5 rows: -40%, -20%, baseline, +20%, +40%
const SENSITIVITY_MULTIPLIERS = [0.5, 0.75, 1.0, 1.25, 1.5]

// Base response rate for gross leads (0.4% = 0.004)
const BASE_RESPONSE_RATE = 0.004

/**
 * Calculate total mail campaign cost
 */
export function calculateTotalCost(mailPieces: number, costPerPiece: number): number {
  return mailPieces * costPerPiece
}

/**
 * Calculate gross leads from mail pieces and response rate
 */
export function calculateGrossLeads(mailPieces: number, responseRate: number): number {
  return mailPieces * responseRate
}

/**
 * Calculate net leads from gross leads
 */
export function calculateNetLeads(grossLeads: number, netLeadRatio: number): number {
  return grossLeads * netLeadRatio
}

/**
 * Calculate contracts from net leads
 */
export function calculateContracts(netLeads: number, contractRate: number): number {
  return netLeads * contractRate
}

/**
 * Calculate closed deals from contracts
 */
export function calculateClosedDeals(contracts: number, closeRate: number): number {
  return contracts * closeRate
}

/**
 * Calculate revenue from closed deals
 */
export function calculateRevenue(closedDeals: number, contractValue: number): number {
  return closedDeals * contractValue
}

/**
 * Calculate ROAS (Return on Ad Spend)
 */
export function calculateROAS(revenue: number, totalCost: number): number {
  if (totalCost === 0) return 0
  return revenue / totalCost
}

/**
 * Calculate ROI percentage
 */
export function calculateROI(revenue: number, totalCost: number): number {
  if (totalCost === 0) return 0
  return ((revenue - totalCost) / totalCost) * 100
}

/**
 * Generate gross leads sensitivity table
 */
export function generateGrossLeadsTable(
  mailPieces: number,
  totalCost: number
): FunnelRow[] {
  return SENSITIVITY_MULTIPLIERS.map((multiplier, index) => {
    const responseRate = BASE_RESPONSE_RATE * multiplier
    const grossLeads = calculateGrossLeads(mailPieces, responseRate)
    const costPerLead = grossLeads > 0 ? totalCost / grossLeads : 0

    return {
      value: grossLeads,
      rate: responseRate,
      cost: costPerLead,
      isBaseline: index === 2, // Middle row is baseline
    }
  })
}

/**
 * Generate net leads sensitivity table
 */
export function generateNetLeadsTable(
  grossLeadsTable: FunnelRow[],
  netLeadRatio: number,
  totalCost: number
): FunnelRow[] {
  return grossLeadsTable.map((row) => {
    const netLeads = calculateNetLeads(row.value, netLeadRatio)
    const netResponseRate = row.rate * netLeadRatio
    const costPerNetLead = netLeads > 0 ? totalCost / netLeads : 0

    return {
      value: netLeads,
      rate: netResponseRate,
      cost: costPerNetLead,
      isBaseline: row.isBaseline,
    }
  })
}

/**
 * Generate contracts sensitivity table
 */
export function generateContractsTable(
  netLeadsTable: FunnelRow[],
  contractRate: number,
  contractValue: number,
  totalCost: number
): FunnelRow[] {
  return netLeadsTable.map((row) => {
    const contracts = calculateContracts(row.value, contractRate)
    const costPerContract = contracts > 0 ? totalCost / contracts : 0
    const grossContractValue = contracts * contractValue

    return {
      value: contracts,
      rate: costPerContract,  // Using rate field for cost/contract
      cost: grossContractValue, // Using cost field for gross value
      isBaseline: row.isBaseline,
    }
  })
}

/**
 * Generate closed deals / ROAS sensitivity table
 */
export function generateClosedDealsTable(
  contractsTable: FunnelRow[],
  closeRate: number,
  contractValue: number,
  totalCost: number
): FunnelRow[] {
  return contractsTable.map((row) => {
    const closedDeals = calculateClosedDeals(row.value, closeRate)
    const netRevenue = calculateRevenue(closedDeals, contractValue)
    const roas = calculateROAS(netRevenue, totalCost)

    return {
      value: closedDeals,
      rate: netRevenue,  // Using rate field for net revenue
      cost: roas,        // Using cost field for ROAS
      isBaseline: row.isBaseline,
    }
  })
}

/**
 * Generate close rate sensitivity table
 * Shows how different contract rates affect ROAS
 */
export function generateCloseRateSensitivity(
  expectedNetLeads: number,
  contractValue: number,
  closeRate: number,
  totalCost: number
): SensitivityRow[] {
  // Contract rates from 4% to 12% (matching spreadsheet)
  const contractRates = [0.04, 0.06, 0.08, 0.10, 0.12]

  return contractRates.map((rate, index) => {
    const contracts = calculateContracts(expectedNetLeads, rate)
    const closedDeals = calculateClosedDeals(contracts, closeRate)
    const revenue = calculateRevenue(closedDeals, contractValue)
    const roas = calculateROAS(revenue, totalCost)

    return {
      netLeads: expectedNetLeads,
      contractRate: rate,
      roas,
      isBaseline: index === 2, // 8% is baseline
    }
  })
}

/**
 * Main calculation function - computes all results from assumptions
 */
export function calculateAll(assumptions: Assumptions): CalculationResults {
  const {
    mailPieces,
    costPerPiece,
    netLeadRatio,
    contractRate,
    contractValue,
    closeRate,
  } = assumptions

  // Calculate base metrics
  const totalCost = calculateTotalCost(mailPieces, costPerPiece)
  const expectedGrossLeads = calculateGrossLeads(mailPieces, BASE_RESPONSE_RATE)
  const expectedNetLeads = calculateNetLeads(expectedGrossLeads, netLeadRatio)
  const expectedContracts = calculateContracts(expectedNetLeads, contractRate)
  const expectedClosed = calculateClosedDeals(expectedContracts, closeRate)
  const expectedRevenue = calculateRevenue(expectedClosed, contractValue)
  const expectedROAS = calculateROAS(expectedRevenue, totalCost)
  const expectedROI = calculateROI(expectedRevenue, totalCost)

  // Generate sensitivity tables
  const grossLeadsTable = generateGrossLeadsTable(mailPieces, totalCost)
  const netLeadsTable = generateNetLeadsTable(grossLeadsTable, netLeadRatio, totalCost)
  const contractsTable = generateContractsTable(netLeadsTable, contractRate, contractValue, totalCost)
  const closedDealsTable = generateClosedDealsTable(contractsTable, closeRate, contractValue, totalCost)
  const closeRateSensitivity = generateCloseRateSensitivity(
    expectedNetLeads,
    contractValue,
    closeRate,
    totalCost
  )

  return {
    totalCost,
    expectedGrossLeads,
    expectedNetLeads,
    expectedContracts,
    expectedClosed,
    expectedRevenue,
    expectedROAS,
    expectedROI,
    grossLeadsTable,
    netLeadsTable,
    contractsTable,
    closedDealsTable,
    closeRateSensitivity,
  }
}

/**
 * Format number as currency
 */
export function formatCurrency(value: number): string {
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
export function formatPercent(value: number, decimals: number = 2): string {
  return `${(value * 100).toFixed(decimals)}%`
}

/**
 * Format ROAS value
 */
export function formatROAS(value: number): string {
  return `${value.toFixed(1)}x`
}

/**
 * Format number with commas
 */
export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

/**
 * Get ROAS rating for color coding
 */
export function getROASRating(roas: number): 'excellent' | 'good' | 'moderate' | 'low' {
  if (roas >= 3) return 'excellent'
  if (roas >= 2.5) return 'good'
  if (roas >= 2) return 'moderate'
  return 'low'
}
