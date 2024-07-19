import type ArmorUpgradeData from '@/interfaces/ArmorUpgradeData';
import type WeaponUpgradeData from '@/interfaces/WeaponUpgradeData';

const npcUpgradePriceWithEnrichedMaterial = 20000;

const armorUpgradeData: ArmorUpgradeData = {
  probabilities: {
    npc: [1, 1, 1, 1, 0.6, 0.4, 0.4, 0.2, 0.2, 0.1],
    npcWithEnrichedElu: [1, 1, 1, 1, 0.84, 0.64, 0.64, 0.36, 0.36, 0.19]
  },
  npcUpgradePrice: 2000
};

const weaponUpgradeData: WeaponUpgradeData = {
  lvl1: {
    probabilities: {
      npc: [1, 1, 1, 1, 1, 1, 1, 0.6, 0.4, 0.2],
      whiteSmith: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.5, 0.3],
      npcWithEnrichedOri: [1, 1, 1, 1, 1, 1, 1, 0.84, 0.64, 0.36],
      whiteSmithWithEnrichedOri: [1, 1, 1, 1, 1, 1, 1, 0.86, 0.66, 0.38]
    },
    npcUpgradePrice: 50
  },
  lvl2: {
    probabilities: {
      npc: [1, 1, 1, 1, 1, 1, 0.6, 0.4, 0.2, 0.2],
      whiteSmith: [1, 1, 1, 1, 1, 1, 0.7, 0.5, 0.3, 0.3],
      npcWithEnrichedOri: [1, 1, 1, 1, 1, 1, 0.84, 0.64, 0.36, 0.36],
      whiteSmithWithEnrichedOri: [1, 1, 1, 1, 1, 1, 0.86, 0.66, 0.38, 0.38]
    },
    npcUpgradePrice: 200
  },
  lvl3: {
    probabilities: {
      npc: [1, 1, 1, 1, 1, 0.6, 0.5, 0.2, 0.2, 0.2],
      whiteSmith: [1, 1, 1, 1, 1, 0.7, 0.6, 0.3, 0.3, 0.3],
      npcWithEnrichedOri: [1, 1, 1, 1, 1, 0.84, 0.75, 0.36, 0.36, 0.36],
      whiteSmithWithEnrichedOri: [1, 1, 1, 1, 1, 0.86, 0.77, 0.38, 0.38, 0.38]
    },
    npcUpgradePrice: 5000
  },
  lvl4: {
    probabilities: {
      npc: [1, 1, 1, 1, 0.6, 0.4, 0.4, 0.2, 0.2, 0.1],
      whiteSmith: [1, 1, 1, 1, 0.7, 0.5, 0.5, 0.3, 0.3, 0.2],
      npcWithEnrichedOri: [1, 1, 1, 1, 0.84, 0.64, 0.64, 0.36, 0.36, 0.19],
      whiteSmithWithEnrichedOri: [1, 1, 1, 1, 0.86, 0.66, 0.66, 0.38, 0.38, 0.21]
    },
    npcUpgradePrice: 20000
  }
};

export { armorUpgradeData, weaponUpgradeData, npcUpgradePriceWithEnrichedMaterial };