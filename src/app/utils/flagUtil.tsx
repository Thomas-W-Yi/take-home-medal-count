export function getFlagBackgroundPosition(code: string): string {
  const countryCodes = [
    'AUT',
    'BLR',
    'CAN',
    'CHN',
    'FRA',
    'GER',
    'ITA',
    'NED',
    'NOR',
    'RUS',
    'SUI',
    'SWE',
    'USA',
  ];

  const index = countryCodes.indexOf(code);
  if (index === -1) {
    console.warn(`Country code "${code}" not found in the flag sprite.`);
    return '0px 0px'; // Default position
  }

  return `0px ${-index * 17}px`;
}
