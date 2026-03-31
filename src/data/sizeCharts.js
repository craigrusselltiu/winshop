export const sizeCharts = {
  'adult-standard': {
    label: 'Adult Standard',
    headers: ['Size', 'Chest (cm)', 'Length (cm)', 'Sleeve (cm)'],
    rows: [
      ['XS', '86', '66', '19'],
      ['S', '91', '69', '20'],
      ['M', '96', '72', '21'],
      ['L', '101', '74', '22'],
      ['XL', '106', '76', '23'],
      ['2XL', '111', '78', '24'],
      ['3XL', '116', '80', '25'],
      ['4XL', '121', '82', '25'],
      ['5XL', '126', '84', '26'],
    ],
  },
  'adult-plus': {
    label: 'Adult Plus Size',
    headers: ['Size', 'Chest (cm)', 'Length (cm)', 'Sleeve (cm)'],
    rows: [
      ['6XL', '136', '86', '27'],
      ['7XL', '146', '88', '28'],
      ['8XL', '156', '90', '29'],
    ],
  },
  kids: {
    label: 'Kids',
    headers: ['Size', 'Chest (cm)', 'Length (cm)', 'Sleeve (cm)'],
    rows: [
      ['1', '56', '37', '10'],
      ['2', '58', '40', '11'],
      ['3-4', '62', '43', '12'],
      ['5-6', '66', '48', '14'],
      ['7-8', '72', '52', '15'],
      ['9-10', '76', '56', '17'],
      ['11-12', '82', '60', '18'],
    ],
  },
  infant: {
    label: 'Infant',
    headers: ['Size', 'Chest (cm)', 'Length (cm)'],
    rows: [
      ['000', '42', '32'],
      ['00', '44', '35'],
      ['0', '48', '38'],
      ['1', '52', '41'],
    ],
  },
}

export const sizeChartTabs = [
  { key: 'adult-standard', label: 'Adult Standard' },
  { key: 'adult-plus', label: 'Adult Plus Size' },
  { key: 'kids', label: 'Kids' },
  { key: 'infant', label: 'Infant' },
]

export const measurementGuide = [
  {
    name: 'Chest',
    instruction:
      'Measure around the fullest part of your chest, keeping the tape level under your arms and across your shoulder blades.',
  },
  {
    name: 'Length',
    instruction:
      'Measure from the highest point of the shoulder, next to the neck, down to the desired hem length.',
  },
  {
    name: 'Sleeve',
    instruction:
      'Measure from the shoulder seam to the end of the sleeve hem.',
  },
]

export const sublimationTip = {
  temperature: '180\u00B0C',
  duration: '60 seconds',
  text: 'For best sublimation results, press at 180\u00B0C for 60 seconds. Always perform a test press before your final run.',
}

export const sizeDisclaimer =
  'All measurements are approximate and may vary by 1-2 cm. We recommend measuring a garment that fits you well and comparing it to our size chart.'
