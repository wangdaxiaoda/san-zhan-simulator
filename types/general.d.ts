/** 武将 */
declare namespace General {
    enum TroopAffinity {
        S = 'S',
    A = 'A',
    B = 'B',
    C = 'C'
    }
    /** 属性 */
    interface Property {
        /** 基础属性 */
        baseProperty: number;
        /** 成长属性 */
        growthProperty: number;
        /** 装备属性 */
        equipmentProperty: number;
        /** 当前等级 */
        currentLevel: number;
        /** 目标等级 */
        targetLevel: number
        /** 进阶数 */
        advancementCount: number;
        /** 可分配属性点 */
        assignAttrPoints: number;
        /** 额外属性点 */
        extraPoints: number;
        /** 四大营 */
        faction: boolean; 
        /** 同阵营 */
        sameFaction: boolean;
        /** 仙人 */
        immortal: boolean; 
        /** 兵种适性 */
        troopAffinity: TroopAffinity;
    }
}
