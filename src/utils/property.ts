enum TroopAffinity {
    S = 'S',
    A = 'A',
    B = 'B',
    C = 'C'
}
/** 兵种适性属性百分比 */
const troopPropertyPercent: {[key: string]: number} = {
    [TroopAffinity.S]: 0.2,
    [TroopAffinity.A]: 0,
    [TroopAffinity.B]: -0.15,
    [TroopAffinity.C]: -0.3,
}

/**
 * 计算属性
 */
export function calcProperty(singleProperty: General.Property) {
    console.log('singleProperty', singleProperty);
    
    const {baseProperty, growthProperty} = singleProperty
    // 首先计算面板属性，包含基础属性、成长属性、额外分配点数、装备
    const assignExtraPoints = Math.floor(singleProperty.targetLevel / 10) * 10 + singleProperty.advancementCount * 10
    const panelProperty = baseProperty + growthProperty * (singleProperty.targetLevel - singleProperty.currentLevel) + singleProperty.assignAttrPoints + singleProperty.equipmentProperty

    // 再计算额外属性，都是在面板属性的基础上。如：四大营、兵种适性、仙人、同阵营
    const resProperty = panelProperty * (1 + (singleProperty.sameFaction ? 0.1 : 0) + troopPropertyPercent[singleProperty.troopAffinity] + (singleProperty.immortal ? 0.3 : 0)) + (singleProperty.faction ? 20 : 0) + singleProperty.extraPoints

    return resProperty;
}