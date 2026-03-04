/**
 * Damage structure - stores all damage calculation results
 * Modeled after rAthena's struct Damage
 */
class Damage {
    constructor() {
        this.basedamage_min = 0;
        this.basedamage_max = 0; 
        this.damage_min = 0;
        this.damage_max = 0;
        this.damage2_min = 0;
        this.damage2_max = 0;
        this.crit_damage_min = 0;
        this.crit_damage_max = 0;
        this.crit_damage2_min = 0;
        this.crit_damage2_max = 0;
        this.crit_basedamage_min = 0;
        this.crit_basedamage_max = 0;
        this.status_reflect_damage_min = 0;
        this.status_reflect_damage_max = 0;
        this.item_reflect_damage_min = 0;
        this.item_reflect_damage_max = 0;
        this.type = 0;         // Damage type (check clif_damage for type)
        this.div_ = 1;         // Number of hits
        this.flag = 0;         // Battle flags (e_battle_flag)
        this.miscflag = 0;     // Miscellaneous flags
        this.dmg_lv = ATK.DEF; // Attack result (ATK_LUCKY, ATK_FLEE, ATK_DEF, etc.)
        this.isspdamage = false; // Display blue damage numbers in clif_damage
        this.crit_from_sr_buff = false;
        
        // Calculator-specific fields (not in rAthena)
        // These store probabilities for DPS calculation
        this.crit_rate = 0;         // Critical hit chance (0-100)
        this.multi_attack_rate = 0; // Multi-attack proc chance (double/triple/chain) (0-100)
        this.hit_rate = 100;        // Hit chance (0-100), default to 100% for skills with perfect hit
        this.element = 0;         // Element of the attack (ELE.XXX)
        this.skill_id = 0;        // Skill ID for skill attacks, 0 for normal attacks
        this.skill_lv = 0; 
    }

    /**
     * Calculate average damage for right hand
     */
    getAverageDamage() {
        return Math.floor((this.damage_min + this.damage_max) / 2);
    }

    /**
     * Calculate average damage for left hand (if applicable)
     */
    getAverageDamage2() {
        return Math.floor((this.damage2_min + this.damage2_max) / 2);
    }

    /**
     * Calculate average critical damage for right hand
     */
    getAverageCritDamage() {
        return Math.floor((this.crit_damage_min + this.crit_damage_max) / 2);
    }

    /**
     * Calculate average critical damage for left hand (if applicable)
     */
    getAverageCritDamage2() {
        return Math.floor((this.crit_damage2_min + this.crit_damage2_max) / 2);
    }
}

class WeaponATK {
    constructor() {
        this.atk = 0;
        this.atk2 = 0;
        this.range = 0;
        this.ele = 0;
    }
}

class WeaponData {
    constructor() {
        this.refine = 0;
        this.level = 0;
        this.weight = 0;
        this.atkmods = new Array(SZ.ALL).fill(0); // Attack modifiers by size
        this.overrefine = 0;
        this.star = 0;
    }
}

/**
 * Structure for status data of an entity
 * Modeled after rAthena's status_data struct
 */
class StatusData {
    constructor() {
        this.hp = 0;
        this.sp = 0;
        this.max_hp = 0;
        this.max_sp = 0;
        this.str = 0;
        this.agi = 0;
        this.vit = 0;
        this.int = 0;
        this.dex = 0;
        this.luk = 0;
        this.batk = 0;
        this.matk_min = 0;
        this.matk_max = 0;
        this.speed = 0;
        this.amotion = 0;
        this.clientamotion = 0;
        this.adelay = 0;
        this.dmotion = 0;
        this.mode = 0;
        this.hit = 0;
        this.flee = 0;
        this.flee2 = 0;
        this.cri = 0;
        this.def2 = 0;
        this.mdef2 = 0,
        this.aspd_rate = 0;
        this.def = 0;
        this.mdef = 0;
        this.def_ele = 0;
        this.ele_lv = 0;
        this.race = 0;
        this.size = 0;
        this.class_ = 0;
        
        this.rhw = new WeaponATK();
        this.lhw = new WeaponATK();
        this.base_exp = 0;
        this.job_exp = 0;
    }
}

/**
 * 
 */
class CharStatus {
    constructor() {
        this.job_id = 0;
        this.status_point = 0;
        this.base_level = 0;
        this.job_level = 0;
        // base stats without any bonuses
        this.str = 0;
        this.agi = 0;
        this.vit = 0;
        this.int = 0;
        this.dex = 0;
        this.luk = 0;

        this.adopted = false;
        this.rebirth = false;
        this.weapon = WEAPON.FIST;
    }
}

class ItemBonus {
    constructor(id, val) {
        this.id = id;
        this.val = val;
    }
}

class StatusChange {
    constructor(type, val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0, val6 = 0, val7 = 0, val8 = 0, val9 = 0, val10 = 0) {
        this.type = type; // SC enum
        this.val1 = val1; // usually skill level
        this.val2 = val2; // other values
        this.val3 = val3;
        this.val4 = val4;
        this.val5 = val5;
        this.val6 = val6;
        this.val7 = val7;
        this.val8 = val8;
        this.val9 = val9;
        this.val10 = val10;
    }
}

/**
 * Player character data structure
 * Consolidates all player-related data that was previously in global variables
 */
class PlayerData {
    constructor() {
        this.type = BL.PC; // BlockList type for player
        this.base_status = new StatusData(); // Base status data (without equipment, buffs, etc.)
        this.battle_status = new StatusData(); // Calculated battle status (with all bonuses applied)
        this.status = new CharStatus(); // Character status including job, levels, base stats, etc.
        this.sc = []; // holds status changes
        
        // Weapon info
        this.weapontype1 = WEAPON.FIST;
        this.weapontype2 = WEAPON.FIST;

        this.right_weapon = new WeaponData();
        this.left_weapon = new WeaponData();

        this.weapon_element = 0;
        
        // Equipment IDs (indices into item database)
        this.equip = new Array(11).fill(0); // [weapon, weapon2, head1, head2, head3, left, body, shoulder, shoes, acces1, acces2]
        this.shadow = new Array(6).fill(0); // Shadow equipment
        
        // Cards (4 per weapon, 1 per other slot)
        this.card = new Array(16).fill(0);
        
        // Random options
        this.randopt = new Array(28).fill(0);
        
        // Enchants
        this.enchant = new Array(3).fill(0);
        
        // Refinement levels for armor pieces
        this.refine = new Array(11).fill(0); // [head, body, shield, shoulder, shoes]

        this.arrow = 0; // arrow type for archers
        
        // Active skill
        this.active_skill = 0;
        this.active_skill_lv = 0;
        
        // Buffs/status effects (token array)
        // IDEALLY replacing this with the indexed_bonus, etc below but for now just keeping it as is for compatibility with existing code
        this.tok = new Array(451).fill(0);

        this.special_state = {
            no_weapon_damage: false,
            no_magic_damage: false,
            no_misc_damage: false,
            no_sizefix: false,
            lr_flag: 0,
        };

        this.indexed_bonus = {
            param_bonus: new Array(6).fill(0),
            param_equip: new Array(6).fill(0),
            subele: new Array(ELE.MAX + 1).fill(0),
            subele_script: new Array(ELE.MAX + 1).fill(0),
            subdefele: new Array(ELE.MAX + 1).fill(0),
            subrace: new Array(RC.MAX).fill(0),
            subclass: new Array(CLASS.MAX).fill(0),
            subrace2: new Array(RC2.MAX).fill(0),
            subsize: new Array(SZ.MAX).fill(0),
            weapon_atk: new Array(16).fill(0),
            weapon_damage_rate: new Array(16).fill(0),
            addele: new Array(ELE.MAX + 1).fill(0),
            addrace: new Array(RC.MAX).fill(0),
            addclass: new Array(CLASS.MAX).fill(0),
            addrace2: new Array(RC2.MAX).fill(0),
            addsize: new Array(SZ.MAX).fill(0),
            magic_addele: new Array(ELE.MAX + 1).fill(0),
            magic_addele_script: new Array(ELE.MAX + 1).fill(0),
            magic_addrace: new Array(RC.MAX).fill(0),
            magic_addclass: new Array(CLASS.MAX).fill(0),
            magic_addsize: new Array(SZ.MAX).fill(0),
            magic_atk_ele: new Array(ELE.MAX + 1).fill(0),
            weapon_subsize: new Array(SZ.MAX).fill(0),
            magic_subsize: new Array(SZ.MAX).fill(0),
            critaddrace: new Array(RC.MAX).fill(0),
            expaddrace: new Array(RC.MAX).fill(0),
            expaddclass: new Array(CLASS.MAX).fill(0),
            ignore_mdef_by_race: new Array(RC.MAX).fill(0),
            ignore_mdef_by_class: new Array(CLASS.MAX).fill(0),
            ignore_mdef_by_ele: new Array(ELE.MAX + 1).fill(0),
            ignore_def_by_race: new Array(RC.MAX).fill(0),
            ignore_def_by_class: new Array(CLASS.MAX).fill(0),
            magic_addrace2: new Array(RC2.MAX).fill(0),
            ignore_mdef_by_race2: new Array(RC2.MAX).fill(0),
            magic_subdefele: new Array(ELE.MAX + 1).fill(0),
            // full def/mdef ignore for specific elements/races/classes
            ignore_def_ele: new Array(ELE.MAX + 1).fill(0),
            ignore_def_race: new Array(RC.MAX).fill(0),
            ignore_def_class: new Array(CLASS.MAX).fill(0),
            ignore_mdef_ele: new Array(ELE.MAX + 1).fill(0),
            ignore_mdef_race: new Array(RC.MAX).fill(0),
            ignore_mdef_class: new Array(CLASS.MAX).fill(0),
            // ice pick effect
            def_ratio_atk_ele: new Array(ELE.MAX + 1).fill(0),
            def_ratio_atk_race: new Array(RC.MAX).fill(0),
            def_ratio_atk_class: new Array(CLASS.MAX).fill(0),
        }

        this.skillatk = [];
        this.skillusesprate = [];
        this.skillusesp = [];
        this.skillheal = [];
        this.skillheal2 = [];
        this.skillcastrate = [];
        this.skillfixcastrate = [];
        this.subskill = [];
        this.skillcooldown = [];
        this.skillfixcast = [];
        this.skillvarcast = [];
        this.skilldelay = [];
        this.add_def = [];
        this.add_mdef = [];
        this.add_mdmg = [];
        this.add_dmg = [];
        this.reseff = [];
        this.subele2 = [];
        this.subrace3 = [];
        this.addele2 = [];
        this.addrace3 = [];

        this.bonus = {
            hp: 0,
            sp: 0,
            atk_rate: 0,
            arrow_atk: 0,
            arrow_ele: 0,
            arrow_cri: 0,
            arrow_hit: 0,
            critical_def: 0,
            double_rate: 0,
            short_attack_atk_rate: 0,
            long_attack_atk_rate: 0,
            near_attack_def_rate: 0,
            long_attack_def_rate: 0,
            magic_def_rate: 0,
            misc_def_rate: 0,
            perfect_hit: 0,
            perfect_hit_add: 0,
            double_add_rate: 0,
            short_weapon_damage_return: 0,
            long_weapon_damage_return: 0,
            reduce_damage_return: 0,
            magic_damage_return: 0,
            crit_atk_rate: 0,
            crit_def_rate: 0,
            speed_rate: 0,
            speed_add_rate: 0,
            aspd_add: 0,
            add_steal_rate: 0,
            add_heal_rate: 0,
            add_heal2_rate: 0,
            fixcastrate: 0,
            varcastrate: 0,
            delayrate: 0,
            add_fixcast: 0,
            add_varcast: 0,
            ematk: 0,
            ematk_hidden: 0,
            eatk: 0,
            critical_rangeatk: 0,
            weapon_atk_rate: 0,
            weapon_matk_rate: 0,
            skill_ratio: 0,

            normalatk_dmgrate: 0,
            plagiarized_skillatk: 0
        }

        this.castrate = 0;
        this.hprate = 0;
        this.sprate = 0;
        this.dsprate = 0;
        this.hprecov_rate = 0;
        this.sprecov_rate = 0;
        this.matk_rate = 0;
        this.critical_rate = 0;
        this.hit_rate = 0;
        this.flee_rate = 0;
        this.flee2_rate = 0;
        this.def_rate = 0;
        this.def2_rate = 0;
        this.mdef_rate = 0;
        this.mdef2_rate = 0;

        this.spiritball = 0;

    }
}

/**
 * Monster/Target data structure
 * Consolidates all target-related data
 */
class MonsterData {
    constructor() {
        // Basic info
        this.mob_id = 0;
        this.level = 0;
        this.name = "";
        this.base_status = new StatusData();
        this.battle_status = new StatusData();
        this.type = BL.MOB;
        this.is_custom_player = false;
        this.sc = []; // holds status changes

        // extra properties not in rA's status_data struct but stored elsewhere still needed for calcs
        this.ranged = false; // its default attack is ranged or not
        this.race2 = new Array(RC2.MAX).fill(0); // Race2 array
        this.base_exp = 0;
        this.job_exp = 0;
        this.damagetaken = 0;
        
        // Debuffs/status effects
        this.debuff = new Array(10000).fill(0);
        this.buff = new Array(10000).fill(0);
        this.notes = new Array(10000).fill(0); // "notes" basically special properties or db entries such as "DamageTaken" or flags such as "IgnoreMelee"
    }
}