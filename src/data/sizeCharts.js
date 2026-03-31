export const sizeCharts = {
  'adult-standard': {
    label: 'Adult Standard',
    description: 'T-shirts, pastel t-shirts, and general adult tops (XS-5XL)',
    headers: ['Size', 'Chest (cm)', 'Body Length (cm)', 'Sleeve (cm)', 'Shoulder (cm)'],
    rows: [
      ['XS', '86', '66', '19', '40'],
      ['S', '91', '69', '20', '42'],
      ['M', '96', '72', '21', '44'],
      ['L', '101', '74', '22', '47'],
      ['XL', '106', '76', '23', '50'],
      ['2XL', '111', '78', '24', '53'],
      ['3XL', '116', '80', '25', '55'],
      ['4XL', '121', '82', '25', '57'],
      ['5XL', '126', '84', '26', '59'],
    ],
  },
  'adult-hoodie': {
    label: 'Adult Hoodies',
    description: 'Hoodies and fleece tops (S-5XL)',
    headers: ['Size', 'Chest (cm)', 'Body Length (cm)', 'Sleeve (cm)', 'Shoulder (cm)'],
    rows: [
      ['S', '100', '66', '62', '44'],
      ['M', '106', '69', '63', '46'],
      ['L', '112', '72', '64', '49'],
      ['XL', '118', '74', '65', '52'],
      ['2XL', '124', '76', '66', '55'],
      ['3XL', '130', '78', '67', '57'],
      ['4XL', '136', '80', '68', '59'],
      ['5XL', '142', '82', '69', '61'],
    ],
  },
  'adult-crop': {
    label: 'Adult Crop Tops',
    description: 'Crop tops and v-neck long sleeve crop tops (XS-XL)',
    headers: ['Size', 'Chest (cm)', 'Body Length (cm)', 'Sleeve (cm)', 'Shoulder (cm)'],
    rows: [
      ['XS', '82', '42', '18', '34'],
      ['S', '86', '44', '19', '36'],
      ['M', '90', '46', '20', '38'],
      ['L', '94', '48', '21', '40'],
      ['XL', '98', '50', '22', '42'],
    ],
  },
  'adult-oversized': {
    label: 'Adult Oversized Tee',
    description: 'Relaxed fit oversized t-shirts (S-5XL)',
    headers: ['Size', 'Chest (cm)', 'Body Length (cm)', 'Sleeve (cm)', 'Shoulder (cm)'],
    rows: [
      ['S', '108', '72', '24', '54'],
      ['M', '114', '74', '25', '56'],
      ['L', '120', '76', '26', '58'],
      ['XL', '126', '78', '27', '60'],
      ['2XL', '132', '80', '28', '62'],
      ['3XL', '138', '82', '28', '64'],
      ['4XL', '144', '84', '29', '66'],
      ['5XL', '150', '86', '30', '68'],
    ],
  },
  'adult-plus': {
    label: 'Adult Plus Size',
    description: 'Extended size t-shirts (6XL-8XL)',
    headers: ['Size', 'Chest (cm)', 'Body Length (cm)', 'Sleeve (cm)', 'Shoulder (cm)'],
    rows: [
      ['6XL', '136', '86', '27', '62'],
      ['7XL', '146', '88', '28', '65'],
      ['8XL', '156', '90', '29', '68'],
    ],
  },
  kids: {
    label: 'Kids',
    description: 'T-shirts, long sleeves, and tops (Size 1-12)',
    headers: ['Size', 'Chest (cm)', 'Body Length (cm)', 'Sleeve (cm)', 'Shoulder (cm)'],
    rows: [
      ['1', '56', '37', '10', '22'],
      ['2', '58', '40', '11', '23'],
      ['3-4', '62', '43', '12', '25'],
      ['5-6', '66', '48', '14', '28'],
      ['7-8', '72', '52', '15', '30'],
      ['9-10', '76', '56', '17', '33'],
      ['11-12', '82', '60', '18', '35'],
    ],
  },
  'kids-hoodie': {
    label: 'Kids Hoodies',
    description: 'Hoodies and fleece tops (Size 1-12)',
    headers: ['Size', 'Chest (cm)', 'Body Length (cm)', 'Sleeve (cm)', 'Shoulder (cm)'],
    rows: [
      ['1', '62', '36', '30', '24'],
      ['2', '64', '39', '32', '25'],
      ['3-4', '68', '42', '36', '27'],
      ['5-6', '72', '47', '40', '30'],
      ['7-8', '78', '51', '44', '32'],
      ['9-10', '82', '55', '48', '35'],
      ['11-12', '88', '59', '52', '37'],
    ],
  },
  infant: {
    label: 'Infant',
    description: 'Onesies and t-shirts (Size 000-1)',
    headers: ['Size', 'Chest (cm)', 'Body Length (cm)', 'Age (approx.)'],
    rows: [
      ['000', '42', '32', '0-3 months'],
      ['00', '44', '35', '3-6 months'],
      ['0', '48', '38', '6-12 months'],
      ['1', '52', '41', '12-18 months'],
    ],
  },
}

// Tab ordering for the Size Guide page
export const sizeChartTabs = [
  { key: 'adult-standard', label: 'Adult Standard' },
  { key: 'adult-plus', label: 'Adult Plus Size' },
  { key: 'kids', label: 'Kids' },
  { key: 'infant', label: 'Infant' },
]

// Maps product sizeChart references to all relevant charts for that product type
export const productSizeChartMap = {
  'adult-standard': ['adult-standard'],
  'adult-hoodie': ['adult-hoodie'],
  'adult-crop': ['adult-crop'],
  'adult-oversized': ['adult-oversized'],
  'adult-plus': ['adult-plus'],
  kids: ['kids'],
  'kids-hoodie': ['kids-hoodie'],
  infant: ['infant'],
}

export const howToMeasure = [
  {
    label: 'Chest',
    instruction:
      'Measure around the fullest part of the chest, keeping the tape level under the arms and across the shoulder blades.',
  },
  {
    label: 'Body Length',
    instruction:
      'Measure from the highest point of the shoulder seam straight down to the bottom hem of the garment.',
  },
  {
    label: 'Sleeve',
    instruction:
      'For short sleeves, measure from the shoulder seam to the end of the sleeve. For long sleeves, measure from the shoulder seam to the cuff.',
  },
  {
    label: 'Shoulder',
    instruction:
      'Measure straight across from one shoulder seam to the other, following the seam line at the top of the garment.',
  },
]

export const sublimationTip = {
  temperature: '180\u00B0C',
  duration: '60 seconds',
  text: 'For best sublimation results, press at 180\u00B0C (356\u00B0F) for 60 seconds with medium-firm pressure. Always use a heat-resistant cover sheet to protect your press and garment.',
}

export const measurementDisclaimer =
  'All measurements are approximate and may vary by 1-2 cm due to the nature of garment manufacturing. We recommend measuring a garment that fits you well and comparing those measurements to the size chart above. Lay the garment flat and measure across for the most accurate results.'
