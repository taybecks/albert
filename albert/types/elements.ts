export type Element = {
  id: string;
  label: string;
  value: number[];
}

export const PreBronze: Record<string, Element> = {
  '2FtUSp': {
    id: '2FtUSp',
    label: '2 Foot Upright Spin',
    value: [1.0, 1.2, 1.5, 1.9, 2.4]
  },
  USp: {
    id: 'USp',
    label: 'Upright Spin',
    value: [1.0, 1.2, 1.5, 1.9, 2.4]
  },
  LSp: {
    id: 'LSp',
    label: 'Layback Spin',
    value: [1.2, 1.5, 1.9, 2.4, 2.7]
  },
  CSp: {
    id: 'CSp',
    label: 'Camel Spin',
    value: [1.1, 1.4, 1.8, 2.2, 2.6]
  },
  SSp: {
    id: 'SSp',
    label: 'Sit Spin',
    value: [1.1, 1.3, 1.6, 2.1, 2.5]
  },
  CUSp: {
    id: 'CUSp',
    label: 'Upright Spin w/ Change of Foot',
    value: [1.5, 1.7, 2.0, 2.4, 2.9]
  },
  CLSp: {
    id: 'CLSp',
    label: 'Layback Spin w/ Change of Foot',
    value: [1.7, 2.0, 2.4, 2.9, 3.2]
  },
  CCSp: {
    id: 'CCSp',
    label: 'Camel Spin w/ Change of Foot',
    value: [1.7, 2.0, 2.3, 2.8, 3.2]
  },
  CSSp: {
    id: 'CSSp',
    label: 'Sit Spin w/ Change of Foot',
    value: [1.6, 1.9, 2.3, 2.7, 3.1]
  },
  CoSp: {
    id: 'CoSp',
    label: 'Combo Spin w/ no Change of Foot',
    value: [1.5, 1.7, 2.0, 2.5, 2.8]
  },
  CCoSp: {
    id: 'CCoSp',
    label: 'Combo Spin w/ Change of Foot',
    value: [1.7, 2.0, 2.5, 3.0, 3.5]
  },
  '1HF': {
    id: '1HF',
    label: 'Half Flip',
    value: [0.3]
  },
  '1HLz': {
    id: '1HLz',
    label: 'Half Lutz',
    value: [0.3]
  },
  '1Wz': {
    id: '1Wz',
    label: 'Waltz',
    value: [0.3]
  },
  '1T': {
    id: '1T',
    label: 'Toe Loop',
    value: [0.4]
  },
  '1S': {
    id: '1S',
    label: 'Salchow',
    value: [0.4]
  },
  '1Lo': {
    id: '1Lo',
    label: 'Loop',
    value: [0.5]
  },
  '1Eu': {
    id: '1Eu',
    label: 'Euler',
    value: [0.5]
  },
  '1F': {
    id: '1F',
    label: 'Flip',
    value: [0.5]
  },
};

export const Bronze: Record<string, Element> = {
  ...PreBronze,
  ChSq: {
    id: "ChSt1",
    label: "Choreographic Step Sequence",
    value: [2.0]
  },
  '1Lz': {
    id: '1Lz',
    label: 'Lutz',
    value: [0.6]
  }
}
export const Silver: Record<string, Element> = {
  ...Bronze,
  FUSp: {
    id: "FUSp",
    label: "Upright Spin w/ Flying Entry",
    value: [1.5, 1.7, 2.0, 2.4, 2.9]
  },
  FLSp: {
    id: "FLSp",
    label: "Layback Spin w/ Flying Entry",
    value: [1.7, 2.0, 2.4, 2.9, 3.2]
  },
  FCSp: {
    id: "FCSp",
    label: "Camel Spin w/ Flying Entry",
    value: [1.6, 1.9, 2.3, 2.8, 3.2]
  },
  FSSp: {
    id: "FSSp",
    label: "Sit Spin w/ Flying Entry",
    value: [1.7, 2.0, 2.4, 2.9, 3.3]
  },
  '1A': {
    id: '1A',
    label: 'Axel',
    value: [1.1]
  }
}

export const Levels = {
  preBronze: PreBronze,
  bronze: Bronze,
  silver: Silver
}