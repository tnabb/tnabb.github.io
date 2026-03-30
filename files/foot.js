var c = document.calcForm;

function StCalc(_) {
    CalculateStatusPoints(_);
}
function StatusPointCalc(_) {
    return Math.floor((_ - 2) / 10) + 2
}

function CalculateStatusPoints(_) {
    let statPoint = 0;
    for (let i = 2; i <= player.status.str; i++)
        statPoint += StatusPointCalc(i);
    for (let i = 2; i <= player.status.agi; i++)
        statPoint += StatusPointCalc(i);
    for (let i = 2; i <= player.status.vit; i++)
        statPoint += StatusPointCalc(i);
    for (let i = 2; i <= player.status.int; i++)
        statPoint += StatusPointCalc(i);
    for (let i = 2; i <= player.status.dex; i++)
        statPoint += StatusPointCalc(i);
    for (let i = 2; i <= player.status.luk; i++)
        statPoint += StatusPointCalc(i);

    let wStPoint = player.status.rebirth ? 100 : 48;

    if (1 == _ || 0 == c.BLVauto.checked) {
        for (let i = 1; i < player.status.base_level; i++)
            wStPoint += Math.floor(i / 5) + 3;
    } else {
        let i;
        for (i = 1; statPoint > wStPoint && i < 99; i++)
            wStPoint += Math.floor(i / 5) + 3;
        if (i > 99) i = 99;
        c.A_BaseLV.value = i;
    }
    return wStPoint - statPoint;
}

function PopulatePlayerData() {
    player.status.base_level = 1 * c.A_BaseLV.value;
    player.status.job_level = 1 * c.A_JobLV.value;
    n_A_JobSet();
    player.status.str = 1 * c.A_STR.value;
    player.status.agi = 1 * c.A_AGI.value;
    player.status.vit = 1 * c.A_VIT.value;
    player.status.int = 1 * c.A_INT.value;
    player.status.dex = 1 * c.A_DEX.value;
    player.status.luk = 1 * c.A_LUK.value;
    if(c.A_adopted.checked)
        player.status.adopted = true;
    else
        player.status.adopted = false;

    player.status.status_point = CalculateStatusPoints();

    player.weapontype1 = m_Item[c.A_weapon1.value][1];
    player.right_weapon.refine = 1 * c.A_Weapon_refine.value;

    if (player.dual_wield) {
        player.weapontype2 = m_Item[c.A_weapon2.value][1];
        player.left_weapon.refine = 1 * c.A_Weapon2_refine.value;
    }

    player.weapon_element = 1 * c.A_Weapon_element.value;

    player.equip[EQI.HAND_R] = 1 * c.A_weapon1.value;
    player.equip[EQI.HAND_L] = player.dual_wield ? 1 * c.A_weapon2.value : 0;
    player.equip[EQI.HEAD_TOP] = 1 * c.A_head1.value;
    player.equip[EQI.HEAD_MID] = 1 * c.A_head2.value;
    player.equip[EQI.HEAD_LOW] = 1 * c.A_head3.value;
    player.equip[EQI.SHIELD] = 1 * c.A_left.value;
    player.equip[EQI.ARMOR] = 1 * c.A_body.value;
    player.equip[EQI.GARMENT] = 1 * c.A_shoulder.value;
    player.equip[EQI.SHOES] = 1 * c.A_shoes.value;
    player.equip[EQI.ACC_L] = 1 * c.A_acces1.value;
    player.equip[EQI.ACC_R] = 1 * c.A_acces2.value;

    player.shadow[SHADOW.WEAPON] = 1 * c.A_weapon_shadow.value;
    player.shadow[SHADOW.SHIELD] = 1 * c.A_left_shadow.value;
    player.shadow[SHADOW.ARMOR] = 0;
    player.shadow[SHADOW.SHOES] = 1 * c.A_shoes_shadow.value;
    player.shadow[SHADOW.ACC_L] = 0;
    player.shadow[SHADOW.ACC_R] = 0;

    player.refine[EQI.HAND_R] = 1 * c.A_Weapon_refine.value;
    player.refine[EQI.HAND_L] = player.dual_wield ? 1 * c.A_Weapon2_refine.value : 0;
    player.refine[EQI.HEAD_TOP] = 1 * c.A_HEAD_REFINE.value;
    player.refine[EQI.HEAD_MID] = 0;
    player.refine[EQI.HEAD_LOW] = 0;
    player.refine[EQI.SHIELD] = 1 * c.A_LEFT_REFINE.value;
    player.refine[EQI.ARMOR] = 1 * c.A_BODY_REFINE.value;
    player.refine[EQI.GARMENT] = 1 * c.A_SHOULDER_REFINE.value;
    player.refine[EQI.SHOES] = 1 * c.A_SHOES_REFINE.value;
    player.refine[EQI.ACC_L] = 0;
    player.refine[EQI.ACC_R] = 0;

    player.card[0] = 1 * c.A_weapon1_card1.value;
    player.card[1] = 1 * c.A_weapon1_card2.value;
    player.card[2] = 1 * c.A_weapon1_card3.value;
    player.card[3] = 1 * c.A_weapon1_card4.value;
    if (player.dual_wield) {
        player.card[4] = 1 * c.A_weapon2_card1.value;
        player.card[5] = 1 * c.A_weapon2_card2.value;
        player.card[6] = 1 * c.A_weapon2_card3.value;
        player.card[7] = 1 * c.A_weapon2_card4.value;
    } else {
        player.card[4] = 0;
        player.card[5] = 0;
        player.card[6] = 0;
        player.card[7] = 0;
    }
    player.card[8] = 1 * c.A_head1_card.value;
    player.card[9] = 1 * c.A_head2_card.value;
    player.card[10] = 1 * c.A_left_card.value;
    player.card[11] = 1 * c.A_body_card.value;
    player.card[12] = 1 * c.A_shoulder_card.value;
    player.card[13] = 1 * c.A_shoes_card.value;
    player.card[14] = 1 * c.A_acces1_card.value;
    player.card[15] = 1 * c.A_acces2_card.value;

    player.randopt[0] = 1 * c.A_weapon1_ropt1.value;
    player.randopt[1] = 1 * c.WEAP1_ROPT1.value;
    player.randopt[2] = 1 * c.A_weapon1_ropt2.value;
    player.randopt[3] = 1 * c.WEAP1_ROPT2.value;
    player.randopt[4] = 1 * c.A_weapon1_ropt3.value;
    player.randopt[5] = 1 * c.WEAP1_ROPT3.value;
    player.randopt[6] = 1 * c.A_weapon1_ropt4.value;
    player.randopt[7] = 1 * c.WEAP1_ROPT4.value;
    if (player.dual_wield) {
        player.randopt[8] = 1 * c.A_weapon2_ropt1.value;
        player.randopt[9] = 1 * c.WEAP2_ROPT1.value;
        player.randopt[10] = 1 * c.A_weapon2_ropt2.value;
        player.randopt[11] = 1 * c.WEAP2_ROPT2.value;
        player.randopt[12] = 1 * c.A_weapon2_ropt3.value;
        player.randopt[13] = 1 * c.WEAP2_ROPT3.value;
        player.randopt[14] = 1 * c.A_weapon2_ropt4.value;
        player.randopt[15] = 1 * c.WEAP2_ROPT4.value;
    } else {
        player.randopt[8] = 0;
        player.randopt[9] = 0;
        player.randopt[10] = 0;
        player.randopt[11] = 0;
        player.randopt[12] = 0;
        player.randopt[13] = 0;
        player.randopt[14] = 0;
        player.randopt[15] = 0;
    }
    player.randopt[16] = 1 * c.A_body_ropt1.value;
    player.randopt[17] = 1 * c.BODY_ROPT1.value;
    player.randopt[18] = 1 * c.A_body_ropt2.value;
    player.randopt[19] = 1 * c.BODY_ROPT2.value;
    player.randopt[20] = 1 * c.A_shoulder_ropt1.value;
    player.randopt[21] = 1 * c.SHOULDER_ROPT1.value;
    player.randopt[22] = 1 * c.A_shoulder_ropt2.value;
    player.randopt[23] = 1 * c.SHOULDER_ROPT2.value;
    player.randopt[24] = 1 * c.A_shoes_ropt1.value;
    player.randopt[25] = 1 * c.SHOES_ROPT1.value;
    player.randopt[26] = 1 * c.A_shoes_ropt2.value;
    player.randopt[27] = 1 * c.SHOES_ROPT2.value;

    player.enchant[0] = m_HeadgearEnchant.includes(player.equip[EQI.HEAD_TOP]) ? 1 * c.A_head_enchant.value : 0;
    if (m_ArmorEnchant.includes(player.equip[EQI.ARMOR])) {
        player.enchant[1] = 1 * c.A_body_enchant1.value;
        player.enchant[2] = 1 * c.A_body_enchant2.value;
    } else {
        player.enchant[1] = 0;
        player.enchant[2] = 0;
    }
    if (m_GarmentEnchant.includes(player.equip[EQI.GARMENT])) {
        player.enchant[3] = 1 * c.A_shoulder_enchant1.value;
        player.enchant[4] = 1 * c.A_shoulder_enchant2.value;
    } else {
        player.enchant[3] = 0;
        player.enchant[4] = 0;
    }
    if (m_ShoesEnchant.includes(player.equip[EQI.SHOES])) {
        player.enchant[5] = 1 * c.A_shoes_enchant1.value;
        player.enchant[6] = 1 * c.A_shoes_enchant2.value;
    } else {
        player.enchant[5] = 0;
        player.enchant[6] = 0;
    }

    const rawActiveSkill = 1 * c.A_ActiveSkill.value;
    if (rawActiveSkill >= 5000) {
        player.active_skill = m_EnableSkill[rawActiveSkill - 5000][2];
        player.active_skill_lv = m_EnableSkill[rawActiveSkill - 5000][3];
    } else if (rawActiveSkill >= 3000) {
        player.active_skill = m_EnableSkill[rawActiveSkill - 3000][2];
        player.active_skill_lv = m_EnableSkill[rawActiveSkill - 3000][3];
    } else if (rawActiveSkill >= 2000) {
        player.active_skill = m_AutoSpellSkill[rawActiveSkill - 2000][2];
        player.active_skill_lv = m_AutoSpellSkill[rawActiveSkill - 2000][3];
    } else {
        player.active_skill = rawActiveSkill;
        player.active_skill_lv = 1 * c.A_ActiveSkillLV.value;
    }

    player.spiritball = player.spiritball || 0;

    player.passive_skills = [];
    for (let i = 0; i < JOB_AVAILABLE_BUFFS[player.status.job_id].length; i++) {
        let skillID = JOB_AVAILABLE_BUFFS[player.status.job_id][i];
        let skillLV = 1 * document.getElementById("A_skill" + i).value;
        player.passive_skills.push(new PassiveSkill(skillID, skillLV));
    }

    populateEquipCombos();
    populateCardCombos();

    StatusCalcPlayerSub();
    updatePlayerStatDisplay();
}

/**
 * Checks which set combos from w_SE are fully equipped and writes their
 * combo item IDs into player.equip[11..20] so EquipNumSearch can find them.
 * 
 * w_SE format: [comboItemId, memberItemId1, memberItemId2, ..., "NULL"]
 */
function populateEquipCombos() {
    const MAX_COMBO_SLOTS = 10; // slots 11..20

    // Clear existing combo slots
    for (let i = EQI.MAX; i < EQI.MAX + MAX_COMBO_SLOTS; i++)
        player.equip[i] = 0;

    let nextSlot = EQI.MAX;

    for (let k = 0; k <= SE_MAXnum && nextSlot < EQI.MAX + MAX_COMBO_SLOTS; k++) {
        let allPresent = true;
        for (let j = 1; w_SE[k][j] !== "NULL"; j++) {
            let found = false;
            for (let i = 0; i < EQI.MAX; i++) {
                if (player.equip[i] === w_SE[k][j]) { found = true; break; }
            }
            if (!found) { allPresent = false; break; }
        }
        if (allPresent)
            player.equip[nextSlot++] = w_SE[k][0];
    }
}

/**
 * Checks which card set combos from w_SC are fully slotted and writes their
 * combo card IDs into player.card[16..25] so CardNumSearch can find them.
 *
 * w_SC format: [comboCardId, memberCardId1, memberCardId2, ..., "NULL"]
 */
function populateCardCombos() {
    const MAX_COMBO_SLOTS = 10; // slots 16..25
    const REGULAR_SLOTS = 16;

    for (let i = REGULAR_SLOTS; i < REGULAR_SLOTS + MAX_COMBO_SLOTS; i++)
        player.card[i] = 0;

    let nextSlot = REGULAR_SLOTS;

    for (let k = 0; k <= SC_MAXnum && nextSlot < REGULAR_SLOTS + MAX_COMBO_SLOTS; k++) {
        let allPresent = true;
        for (let j = 1; w_SC[k][j] !== "NULL"; j++) {
            let found = false;
            for (let i = 0; i < REGULAR_SLOTS; i++) {
                if (player.card[i] === w_SC[k][j]) { found = true; break; }
            }
            if (!found) { allPresent = false; break; }
        }
        if (allPresent)
            player.card[nextSlot++] = w_SC[k][0];
    }
}

function StatusCalcPlayerSub() {
    let i;
    let skill;
    let refinedef = 0;
    let index = -1;

    player.base_status = new StatusData();
    player.battle_status = new StatusData();

    let base_status = player.base_status;

    player.base_status.speed = DEFAULT_WALK_SPEED;
    player.hprate = 100;
    player.sprate = 100;
    player.dsprate = 100;
    player.castrate = 100;
    player.hprecov_rate = 100;
    player.sprecov_rate = 100;
    player.matk_rate = 100;
    player.critical_rate = player.hit_rate = player.flee_rate = player.flee2_rate = 100;
    player.def_rate = player.def2_rate = player.mdef_rate = player.mdef2_rate = 100;
    player.indexed_bonus = {
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
        def_ratio_atk_class: new Array(CLASS.MAX).fill(0)
    };
    player.special_state = {
        no_weapon_damage: false,
        no_magic_damage: false,
        no_misc_damage: false,
        no_sizefix: false,
        lr_flag: LR_FLAG.NONE
    };
    base_status.aspd_rate = 1000;
    base_status.ele_lv = 1;
    base_status.race = RC.DEMIHUMAN;
    base_status.size = player.status.adopted ? SZ.SMALL : SZ.MEDIUM;
    base_status.class_ = CLASS.NORMAL;

    player.skillatk = [];
    player.skillusesprate = [];
    player.skillusesp = [];
    player.skillheal = [];
    player.skillheal2 = [];
    player.skillcastrate = [];
    player.skillfixcastrate = [];
    player.subskill = [];
    player.skillcooldown = [];
    player.skillfixcast = [];
    player.skillvarcast = [];
    player.add_def = [];
    player.add_mdef = [];
    player.add_dmg = [];
    player.add_mdmg = [];
    player.reseff = [];
    player.subele2 = [];
    player.subrace3 = [];
    player.addele2 = [];
    player.addrace3 = [];

    player.bonus = {
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

        plagiarized_skillatk: 0,
        normalatk_dmgrate: 0
    };

    pc_calc_weapontype(player);

    for (i = 0; i < EQI.MAX; i++) {
        let item = m_Item[player.equip[i]];

        // items are equipment/armors
        if (item[1] >= 50 && item[1] <= 65) {
            base_status.def += item[3]; // item defense

            refinedef += 70 * player.refine[i]; // refinement bonus for armors is 0.7 def per refine level (divided down later)
        }

        // items lower than 50 are weapons
        if (item[1] < 50) {
            let weapon_lv = item[4];
            let wd;
            let wa;

            if (i == EQI.HAND_L) {
                wd = player.left_weapon;
                wa = base_status.lhw;
            } else {
                wd = player.right_weapon;
                wa = base_status.rhw;
            }
            wa.atk += item[3]; // weapon attack
            wd.level = weapon_lv;
            wd.weight = item[6];
            if (player.refine[i] > 0) {
                // refine bonuses on weapons depending on the weapon level
                switch (weapon_lv) {
                    case 1:
                        wa.atk2 += 2 * player.refine[i];
                        break;
                    case 2:
                        wa.atk2 += 3 * player.refine[i];
                        break;
                    case 3:
                        wa.atk2 += 5 * player.refine[i];
                        break;
                    case 4:
                        wa.atk2 += 7 * player.refine[i];
                        break;
                }
            }

            let card_values = EQI.HAND_R ? [player.card[0], player.card[1], player.card[2], player.card[3]] : [player.card[4], player.card[5], player.card[6], player.card[7]];
            if (card_values[0] == 106 || card_values[1] == 106 || card_values[2] == 106) {
                let count_106 = card_values.filter(value => value == 106).length;
                wd.star += count_106 * 5; // star crumb adds 5 damage
                if (wd.star >= 15) wd.star = 40;
                if (card_values[3] == 106) // 4th slot determines if it is by a top10 ranked blacksmith
                    wd.star += 10;
            }
        }
    }

    if (!c.A_Arrow.disabled) {
        player.arrow = 1 * c.A_Arrow.value;
        if (player.weapontype1 == WEAPON.BOW || player.weapontype1 == WEAPON.INSTRUMENT || player.weapontype1 == WEAPON.WHIP) {
            player.bonus.arrow_atk = m_Arrow[player.arrow][0];
            player.bonus.arrow_ele = m_Arrow[player.arrow][1];
        } else if (player.weapontype1 >= WEAPON.REVOLVER && player.weapontype1 <= WEAPON.GRENADE) {
            player.bonus.arrow_atk = m_Bullet[player.arrow][0];
            player.bonus.arrow_ele = m_Bullet[player.arrow][1];
        }
    }

    // parse item scripts (including combos) and populate bonuses
    CalculateEquipmentBonuses();

    // remember to fill player.indexed_bonus.param_bonus before calling this function
    // param_bonus first contains bonuses from equipment, which is moved to param_equip 
    // technically i can just fill param_equip first for bonuses from equipment
    player.indexed_bonus.param_equip = player.indexed_bonus.param_bonus;
    player.indexed_bonus.param_bonus = new Array(6).fill(0);

    // parse cards, random options, arrow bonuses, scripts from statuses, and pet bonuses
    CalculateAdditionalBonuses();

    // param_bonus is later filled with bonuses from cards, scripts from statuses, random options, and pets

    base_status.def += Math.trunc((refinedef + 50) / 100);

    player.bonus.perfect_hit += player.bonus.perfect_hit_add;

    let right_weapon = m_WeaponSize[player.weapontype1];
    if (right_weapon) {
        player.right_weapon.atkmods[SZ.SMALL] = right_weapon[SZ.SMALL];
        player.right_weapon.atkmods[SZ.MEDIUM] = right_weapon[SZ.MEDIUM];
        player.right_weapon.atkmods[SZ.LARGE] = right_weapon[SZ.LARGE];
    }

    let left_weapon = m_WeaponSize[player.weapontype2];
    if (left_weapon) {
        player.left_weapon.atkmods[SZ.SMALL] = left_weapon[SZ.SMALL];
        player.left_weapon.atkmods[SZ.MEDIUM] = left_weapon[SZ.MEDIUM];
        player.left_weapon.atkmods[SZ.LARGE] = left_weapon[SZ.LARGE];
    }

    if (SkillSearch(SKILL.KN_CAVALIERMASTERY) && (player.status.weapon == WEAPON.ONEHANDSPEAR || player.status.weapon == WEAPON.TWOHANDSPEAR)) {
        player.right_weapon.atkmods[SZ.MEDIUM] = player.right_weapon.atkmods[SZ.LARGE];
        player.left_weapon.atkmods[SZ.MEDIUM] = player.left_weapon.atkmods[SZ.LARGE];
    }

    // job stats calculation
    const bonus = JOB_BONUS_STATS[player.status.job_id];

    for (let i = 0; i < bonus.length; i += 2) {
        if (bonus[i] <= player.status.job_level) {
            switch (bonus[i + 1]) {
                case STAT.STR: base_status.str += 1; break;
                case STAT.AGI: base_status.agi += 1; break;
                case STAT.VIT: base_status.vit += 1; break;
                case STAT.INT: base_status.int += 1; break;
                case STAT.DEX: base_status.dex += 1; break;
                case STAT.LUK: base_status.luk += 1; break;
            }
        } else {
            break;
        }
    }

    if (player.status.job_id == CLASS.SUPERNOVICE && player.status.job_level >= 80) {
        base_status.str += 10;
        base_status.agi += 10;
        base_status.vit += 10;
        base_status.int += 10;
        base_status.dex += 10;
        base_status.luk += 10;
    }

    // stat bonuses from passive skills
    if (SkillSearch(SKILL.BS_HILTBINDING) > 0)
        base_status.str += 1;
    if ((skill = SkillSearch(SKILL.SA_DRAGONOLOGY)) > 0)
        base_status.int += Math.trunc((skill + 1) / 2);
    if ((skill = SkillSearch(SKILL.AC_OWL)) > 0)
        base_status.dex += skill;

    // bonuses from cards, equipment, and base stat
    i = base_status.str + player.status.str + player.indexed_bonus.param_bonus[STAT.STR] + player.indexed_bonus.param_equip[STAT.STR];
    base_status.str = cap_value(i, 0, USHRT_MAX);
    i = base_status.agi + player.status.agi + player.indexed_bonus.param_bonus[STAT.AGI] + player.indexed_bonus.param_equip[STAT.AGI];
    base_status.agi = cap_value(i, 0, USHRT_MAX);
    i = base_status.vit + player.status.vit + player.indexed_bonus.param_bonus[STAT.VIT] + player.indexed_bonus.param_equip[STAT.VIT];
    base_status.vit = cap_value(i, 0, USHRT_MAX);
    i = base_status.int + player.status.int + player.indexed_bonus.param_bonus[STAT.INT] + player.indexed_bonus.param_equip[STAT.INT];
    base_status.int = cap_value(i, 0, USHRT_MAX);
    i = base_status.dex + player.status.dex + player.indexed_bonus.param_bonus[STAT.DEX] + player.indexed_bonus.param_equip[STAT.DEX];
    base_status.dex = cap_value(i, 0, USHRT_MAX);
    i = base_status.luk + player.status.luk + player.indexed_bonus.param_bonus[STAT.LUK] + player.indexed_bonus.param_equip[STAT.LUK];
    base_status.luk = cap_value(i, 0, USHRT_MAX);

    // attack calculation

    // base batk value
    if (player.status.weapon < WEAPON.MAX && player.indexed_bonus.weapon_atk[player.status.weapon])
        base_status.batk += player.indexed_bonus.weapon_atk[player.status.weapon];
    // base attack bonuses from skills
    if (SkillSearch(SKILL.BS_HILTBINDING))
        base_status.batk += 4;
    if ((skill = SkillSearch(SKILL.PR_MACEMASTERY)) > 0 && player.status.weapon == WEAPON.MACE)
        base_status.batk += skill * 3;

    // hp max calculation 
    base_status.max_hp = player.status.max_hp = status_calc_max_hp(player, base_status.vit);

    // sp max calculation
    base_status.max_sp = player.status.max_sp = status_calc_max_sp(player, base_status.int);

    // misc calculation
    status_calc_misc(player, base_status, player.status.base_level);

    if (player.matk_rate < 0)
        player.matk_rate = 0;

    if (player.matk_rate != 100) {
        base_status.matk_max = Math.trunc((base_status.matk_max * player.matk_rate) / 100);
        base_status.matk_min = Math.trunc((base_status.matk_min * player.matk_rate) / 100);
    }

    if (player.hit_rate < 0)
        player.hit_rate = 0;
    if (player.hit_rate != 100)
        base_status.hit = Math.trunc((base_status.hit * player.hit_rate) / 100);

    if (player.flee_rate < 0)
        player.flee_rate = 0;
    if (player.flee_rate != 100)
        base_status.flee = Math.trunc((base_status.flee * player.flee_rate) / 100);

    if (player.def2_rate < 0)
        player.def2_rate = 0;
    if (player.def2_rate != 100)
        base_status.def2 = Math.trunc((base_status.def2 * player.def2_rate) / 100);

    if (player.mdef2_rate < 0)
        player.mdef2_rate = 0;
    if (player.mdef2_rate != 100)
        base_status.mdef2 = Math.trunc((base_status.mdef2 * player.mdef2_rate) / 100);

    if (player.critical_rate < 0)
        player.critical_rate = 0;
    if (player.critical_rate != 100)
        base_status.cri = Math.trunc((base_status.cri * player.critical_rate) / 100);

    if (player.flee2_rate < 0)
        player.flee2_rate = 0;
    if (player.flee2_rate != 100)
        base_status.flee2 = Math.trunc((base_status.flee2 * player.flee2_rate) / 100);

    // hit calculation

    // hit from passive skills
    if ((skill = SkillSearch(SKILL.BS_WEAPONRESEARCH)) > 0)
        base_status.hit += skill * 2;
    if ((skill = SkillSearch(SKILL.AC_VULTURE)) > 0)
        base_status.hit += skill;
    if (player.status.weapon >= WEAPON.REVOLVER && player.status.weapon <= WEAPON.GRENADE) {
        if ((skill = SkillSearch(SKILL.GS_SINGLEACTION)) > 0)
            base_status.hit += skill * 2;
        if ((skill = SkillSearch(SKILL.GS_SNAKEEYE)) > 0)
            base_status.hit += skill;
    }

    // flee calculation

    // flee from passive skills
    if ((skill = SkillSearch(SKILL.TF_MISS)) > 0) {
        if (n_A_JobClass2() == JOB.ASSASSIN || n_A_JobClass2() == JOB.ROGUE)
            base_status.flee += skill * 4;
        else
            base_status.flee += skill * 3;
    }
    if ((skill = SkillSearch(SKILL.MO_DODGE)) > 0)
        base_status.flee += Math.trunc((skill * 3) / 2);

    // perfect dodge calculation

    // perfect dodge from passive skills
    if (player.status.weapon == WEAPON.BOOK && (skill = SkillSearch(SKILL.SKE_WAR_BOOK_MASTERY)) > 0)
        base_status.flee2 += skill * 10;

    // critical calculation

    // critical from passive skills
    if ((skill = SkillSearch(SKILL.PR_MACEMASTERY)) > 0 && player.status.weapon == WEAPON.MACE)
        base_status.cri += skill * 10;
    if ((skill = SkillSearch(SKILL.SG_DEVIL)) > 0)
        base_status.cri += skill * 20;
    if ((skill = SkillSearch(SKILL.MC_OVERCHARGE)) > 0)
        base_status.cri += skill * 10;

    // equipment-def calculation
    if (player.def_rate < 0)
        player.def_rate = 0;
    if (player.def_rate != 100) {
        i = Math.trunc((base_status.def * player.def_rate) / 100);
        base_status.def = cap_value(i, DEFTYPE_MIN, DEFTYPE_MAX);
    }

    if (base_status.def > 99)
        base_status.def = 99;

    // equipment-mdef calculation
    if (player.mdef_rate < 0)
        player.mdef_rate = 0;
    if (player.mdef_rate != 100) {
        i = Math.trunc((base_status.mdef * player.mdef_rate) / 100);
        base_status.mdef = cap_value(i, DEFTYPE_MIN, DEFTYPE_MAX);
    }

    if (base_status.mdef > 99)
        base_status.mdef = 99;

    // aspd calculation

    i = status_base_amotion(player, base_status);
    base_status.amotion = cap_value(i, Math.trunc(pc_maxaspd(player) / AMOTION_DIVIDER_PC), MIN_ASPD / AMOTION_DIVIDER_PC);

    if ((skill = SkillSearch(SKILL.SA_ADVANCEDBOOK)) > 0 && player.status.weapon == WEAPON.BOOK)
        base_status.aspd_rate -= 5 * skill;
    if ((skill = SkillSearch(SKILL.SG_DEVIL)) > 0)
        base_status.aspd_rate -= 5 * skill;
    if ((skill = SkillSearch(SKILL.GS_SINGLEACTION)) > 0 && player.status.weapon >= WEAPON.REVOLVER && player.status.weapon <= WEAPON.GRENADE)
        base_status.aspd_rate -= Math.trunc((skill + 1) / 2) * 10;
    if ((skill = SkillSearch(SKILL.KN_CAVALIERMASTERY)) > 0)
        base_status.aspd_rate += 500 - 100 * skill;
    base_status.adelay = AMOTION_DIVIDER_PC * base_status.amotion;

    // dmotion
    i = 800 - base_status.agi * 4;
    base_status.dmotion = cap_value(i, 400, 800);

    // misc calculations

    // skill sp cost
    if ((skill = SkillSearch(SKILL.HP_MANARECHARGE)) > 0)
        player.dsprate -= 4 * skill;

    if (sc_get(player, SC.SERVICE4U)) // service for you
        player.dsprate -= sc_get(player, SC.SERVICE4U).val6;

    if (player.dsprate < 0)
        player.dsprate = 0;
    if (player.castrate < 0)
        player.castrate = 0;
    if (player.hprecov_rate < 0)
        player.hprecov_rate = 0;
    if (player.sprecov_rate < 0)
        player.sprecov_rate = 0;

    // anti-element and anti-race
    if ((skill = SkillSearch(SKILL.CR_TRUST)) > 0)
        player.indexed_bonus.subele[ELE.HOLY] += skill * 5;
    if ((skill = SkillSearch(SKILL.BS_SKINTEMPER)) > 0) {
        player.indexed_bonus.subele[ELE.NEUTRAL] += skill;
        player.indexed_bonus.subele[ELE.FIRE] += skill * 5;
    }
    if ((skill = SkillSearch(SKILL.SA_DRAGONOLOGY)) > 0) {
        let dragon_matk = skill * 2;
        skill = skill * 4;

        player.indexed_bonus.addrace[RC.DRAGON] += skill;
        player.indexed_bonus.magic_addrace[RC.DRAGON] += dragon_matk;
        player.indexed_bonus.subrace[RC.DRAGON] += skill;
    }

    // invulnerable siegfried elemental resistance bonus
    if (sc_get(player, SC.SIEGFRIED)) {
        i = sc_get(player, SC.SIEGFRIED).val2;
        player.indexed_bonus.subele[ELE.WATER] += i;
        player.indexed_bonus.subele[ELE.EARTH] += i;
        player.indexed_bonus.subele[ELE.FIRE] += i;
        player.indexed_bonus.subele[ELE.WIND] += i;
        player.indexed_bonus.subele[ELE.POISON] += i;
        player.indexed_bonus.subele[ELE.HOLY] += i;
        player.indexed_bonus.subele[ELE.SHADOW] += i;
        player.indexed_bonus.subele[ELE.GHOST] += i;
        player.indexed_bonus.subele[ELE.UNDEAD] += i;
    }

    // providence
    if (sc_get(player, SC.PROVIDENCE)) {
        player.indexed_bonus.subele[ELE.HOLY] += sc_get(player, SC.PROVIDENCE).val2;
        player.indexed_bonus.subrace[RC.DEMON] += sc_get(player, SC.PROVIDENCE).val2;
    }

    // mindbreaker
    if (sc_get(player, SC.MINDBREAKER))
        player.matk_rate += sc_get(player, SC.MINDBREAKER).val2;

    player.battle_status = Object.assign(new StatusData(), base_status, {
        rhw: Object.assign(new WeaponATK(), base_status.rhw),
        lhw: Object.assign(new WeaponATK(), base_status.lhw)
    });

    StatusCalcBLMain(); // function to recalculate every stat after all bonuses have been applied - this uses battle_status for calculations so that all bonuses are included
}

function StatusCalcBLMain() {
    let b_status = player.base_status;
    let status = player.battle_status;
    let temp;

    // str
    status.str = status_calc_str(player, b_status.str);

    // agi
    status.agi = status_calc_agi(player, b_status.agi);

    // vit
    status.vit = status_calc_vit(player, b_status.vit);

    // int
    status.int = status_calc_int(player, b_status.int);

    // dex
    status.dex = status_calc_dex(player, b_status.dex);

    // luk
    status.luk = status_calc_luk(player, b_status.luk);

    // base atk
    let lv = player.status.base_level;
    status.batk = status_base_atk(player, status, lv);
    temp = b_status.batk - status_base_atk(player, b_status, lv);
    status.batk += temp;

    status.batk = status_calc_batk(player, status.batk);

    // weapon atk
    status.rhw.atk = status_calc_watk(player, b_status.rhw.atk);

    if (player.bonus.weapon_atk_rate)
        status.rhw.atk += Math.trunc((status.rhw.atk * player.bonus.weapon_atk_rate) / 100);
    if (b_status.lhw.atk) {
        player.special_state.lr_flag = LR_FLAG.WEAPON;
        status.lhw.atk = status_calc_watk(player, b_status.lhw.atk);
        player.special_state.lr_flag = LR_FLAG.NONE;
    }

    // hit
    if (status.dex == b_status.dex)
        status.hit = status_calc_hit(player, b_status.hit);
    else
        status.hit = status_calc_hit(player, b_status.hit + (status.dex - b_status.dex));

    // flee
    if (status.agi == b_status.agi)
        status.flee = status_calc_flee(player, b_status.flee);
    else
        status.flee = status_calc_flee(player, b_status.flee + (status.agi - b_status.agi));

    // def
    status.def = status_calc_def(player, b_status.def);

    // def2
    if (status.vit == b_status.vit)
        status.def2 = status_calc_def2(player, b_status.def2);
    else
        status.def2 = status_calc_def2(player, b_status.def2 + (status.vit - b_status.vit));

    // mdef
    status.mdef = status_calc_mdef(player, b_status.mdef);

    // mdef2
    if (status.int == b_status.int && status.vit == b_status.vit)
        status.mdef2 = status_calc_mdef2(player, b_status.mdef2);
    else
        status.mdef2 = status_calc_mdef2(player, b_status.mdef2 + (status.int - b_status.int) + (Math.trunc(status.vit - b_status.vit / 2)));

    // speed
    status.speed = status_calc_speed(player, b_status.speed);

    // crit
    if (status.luk == b_status.luk)
        status.cri = status_calc_critical(player, b_status.cri);
    else
        status.cri = status_calc_critical(player, b_status.cri + Math.trunc((status.luk - b_status.luk) * 10 / 3));

    if (player.status.weapon == WEAPON.KATAR)
        status.cri *= 2;

    // flee2
    if (status.luk == b_status.luk)
        status.flee2 = status_calc_flee2(player, b_status.flee2);
    else
        status.flee2 = status_calc_flee2(player, b_status.flee2 + (status.luk - b_status.luk));

    // atk ele
    if ((1 * c.A_Weapon_element.value) > 0) {
        status.rhw.ele = 1 * c.A_Weapon_element.value;
        status.lhw.ele = 1 * c.A_Weapon_element.value;
    }

    // def ele
    status.def_ele = status_calc_element(player, b_status.def_ele);
    status.ele_lv = status_calc_element_lv(player, b_status.ele_lv);

    // maxhp
    status.max_hp = status_calc_max_hp(player, status.vit);

    // max sp
    status.max_sp = status_calc_max_sp(player, status.int);

    // matk
    let matk_min = status_base_matk_min(status);
    let matk_max = status_base_matk_max(status);

    matk_min += player.bonus.ematk;
    matk_max += player.bonus.ematk;

    matk_min += player.bonus.ematk_hidden;
    matk_max += player.bonus.ematk_hidden;

    if (player.matk_rate != 100) {
        matk_min = Math.trunc((matk_min * player.matk_rate) / 100);
        matk_max = Math.trunc((matk_max * player.matk_rate) / 100);
    }

    if (SkillSearch(SKILL.SOA_TALISMAN_OF_MAGICIAN))
        matk_min = Math.max(matk_min, matk_max);

    matk_min = status_calc_pseudobuff_matk(player, matk_min);
    matk_max = status_calc_pseudobuff_matk(player, matk_max);

    if (SkillSearch(SKILL.HW_MAGICPOWER)) {
        matk_min += Math.trunc(matk_min * (SkillSearch(SKILL.HW_MAGICPOWER) * 5) / 100);
        matk_max += Math.trunc(matk_max * (SkillSearch(SKILL.HW_MAGICPOWER) * 5) / 100);
    }

    status.matk_min = cap_value(matk_min, 0, USHRT_MAX);
    status.matk_max = cap_value(matk_max, 0, USHRT_MAX);

    // aspd
    let amotion;
    let skill_lv;

    amotion = status_base_amotion(player, status);
    status.aspd_rate = status_calc_aspd_rate(player, b_status.aspd_rate);

    if (SkillSearch(SKILL.SG_DEVIL) > 0)
        status.aspd_rate -= Math.min(status.cri / 4, 250);

    amotion = Math.trunc((amotion * status.aspd_rate) / 1000);
    if ((skill_lv = SkillSearch(SKILL.SA_FREECAST)) > 0)
        amotion += Math.trunc(((2000 - amotion) * (55 - 5 * (skill_lv + 1))) / 100);
    amotion = status_calc_fix_aspd(player, amotion);
    status.amotion = cap_value(amotion, Math.trunc(pc_maxaspd(player) / AMOTION_DIVIDER_PC), MIN_ASPD / AMOTION_DIVIDER_PC);
    status.adelay = AMOTION_DIVIDER_PC * status.amotion;

    // dspd
    let dmotion;
    if (b_status.agi != status.agi) {
        dmotion = 800 - status.agi * 4;
        status.dmotion = cap_value(dmotion, 400, 800);
    }

    // regen
    //status_calc_regen(player, status);

    // regen rate
}

function PopulateMonsterData() {
    let monsterInfo = m_Monster[c.B_Enemy.value];

    monster.mob_id = monsterInfo[0];
    monster.level = monsterInfo[5];
    monster.name = monsterInfo[1];

    monster.base_status = new StatusData();
    monster.battle_status = new StatusData();

    monster.is_custom_player = monster.mob_id == 586; // custom player

    monster.ranged = monsterInfo[20] == 1;
    setMonsterRace2();
    monster.notes = [];
    loadNotes(monster.mob_id);

    if (monster.name.includes("[MVP]"))
        monster.base_status.mode |= MD.MVP;
    if (monster.notes[7])
        monster.damagetaken = 100 - NotesCalc(monster.mob_id, 7);
    else
        monster.damagetaken = 0;
    monster.mhp_percent = 1 * c.EnemyHPPercent.value;

    StatusCalcMonsterSub();
    updateMonsterStatDisplay();
}

function setMonsterRace2() {
    monster.race2 = [];
    // orcs
    if (monster.mob_id == 49) monster.race2.push(RC2.ORC);
    if (monster.mob_id == 50) monster.race2.push(RC2.ORC);
    if (monster.mob_id == 51) monster.race2.push(RC2.ORC);
    if (monster.mob_id == 52) monster.race2.push(RC2.ORC);
    if (monster.mob_id == 55) monster.race2.push(RC2.ORC);
    if (monster.mob_id == 221) monster.race2.push(RC2.ORC);

    // golems
    if (monster.mob_id == 106) monster.race2.push(RC2.GOLEM);
    if (monster.mob_id == 152) monster.race2.push(RC2.GOLEM);
    if (monster.mob_id == 541) monster.race2.push(RC2.GOLEM);

    // goblins
    if (monster.mob_id == 108) monster.race2.push(RC2.GOBLIN);
    if (monster.mob_id == 109) monster.race2.push(RC2.GOBLIN);
    if (monster.mob_id == 110) monster.race2.push(RC2.GOBLIN);
    if (monster.mob_id == 111) monster.race2.push(RC2.GOBLIN);
    if (monster.mob_id == 112) monster.race2.push(RC2.GOBLIN);
    if (monster.mob_id == 113) monster.race2.push(RC2.GOBLIN);
    if (monster.mob_id == 115) monster.race2.push(RC2.GOBLIN);

    // kobolds
    if (monster.mob_id == 116) monster.race2.push(RC2.KOBOLD);
    if (monster.mob_id == 117) monster.race2.push(RC2.KOBOLD);
    if (monster.mob_id == 118) monster.race2.push(RC2.KOBOLD);
    if (monster.mob_id == 119) monster.race2.push(RC2.KOBOLD);
    if (monster.mob_id == 120) monster.race2.push(RC2.KOBOLD);

    if (monster.mob_id == 6) monster.race2.push(RC2.NINJA);

    // manuk
    if (monster.mob_id == 528) monster.race2.push(RC2.MANUK);
    if (monster.mob_id == 530) monster.race2.push(RC2.MANUK);
    if (monster.mob_id == 531) monster.race2.push(RC2.MANUK);
    if (monster.mob_id == 524) monster.race2.push(RC2.MANUK);
    if (monster.mob_id == 527) monster.race2.push(RC2.MANUK);
    if (monster.mob_id == 534) monster.race2.push(RC2.MANUK);

    // splendide
    if (monster.mob_id == 533) monster.race2.push(RC2.SPLENDIDE);
    if (monster.mob_id == 529) monster.race2.push(RC2.SPLENDIDE);
    if (monster.mob_id == 532) monster.race2.push(RC2.SPLENDIDE);
    if (monster.mob_id == 526) monster.race2.push(RC2.SPLENDIDE);
    if (monster.mob_id == 525) monster.race2.push(RC2.SPLENDIDE);
}

function StatusCalcMonsterSub() {
    let monsterInfo = m_Monster[monster.mob_id];
    let b_status = monster.base_status;

    b_status.max_hp = monsterInfo[6];

    b_status.str = 0;
    b_status.agi = monsterInfo[8];
    b_status.vit = monsterInfo[7];
    b_status.int = monsterInfo[9];
    b_status.dex = monsterInfo[10];
    b_status.luk = monsterInfo[11];

    b_status.rhw.atk = monsterInfo[12];
    b_status.rhw.atk2 = monsterInfo[13];
    b_status.def = monsterInfo[14];
    b_status.mdef = monsterInfo[15];

    b_status.size = monsterInfo[4];
    b_status.race = monsterInfo[2];
    b_status.def_ele = Math.trunc(monsterInfo[3] / 10);
    b_status.ele_lv = monsterInfo[3] % 10;
    b_status.class_ = monsterInfo[19] == 1 ? CLASS.BOSS : CLASS.NORMAL;

    if (monster.notes[1])
        b_status.mode |= MD.IGNOREMELEE;
    if (monster.notes[2])
        b_status.mode |= MD.IGNORERANGED;
    if (monster.notes[3])
        b_status.mode |= MD.IGNOREMAGIC;
    if (monster.notes[4])
        b_status.mode |= MD.IGNOREMISC;
    if (monster.notes[8])
        b_status.mode |= MD.IGNOREIGNOREDEF;
    if (monster.notes[9])
        b_status.mode |= MD.IGNOREIGNOREMDEF;
    if (monster.notes[10])
        b_status.mode |= MD.IGNOREPIERCEATK;

    status_calc_misc(monster, monster.base_status, monster.level);
    b_status.base_exp = monsterInfo[16];
    b_status.job_exp = monsterInfo[17];

    monster.battle_status = Object.assign(new StatusData(), b_status, {
        rhw: Object.assign(new WeaponATK(), b_status.rhw),
        lhw: Object.assign(new WeaponATK(), b_status.lhw)
    });

    updateMonsterDebuffsDisplay();
    StatusCalcBLMob();
}

function StatusCalcBLMob() {
    let b_status = monster.base_status;
    let status = monster.battle_status;
    let temp;

    // str
    // nothing yet

    // agi
    let agi = b_status.agi;

    if (manualedits_get(monster, 2))
        agi += manualedits_get(monster, 2).value;
    if (sc_get(monster, SC.INCREASEAGI)) // increase agi
        agi += (sc_get(monster, SC.INCREASEAGI).val2 * 2) - 2;
    if (sc_get(monster, SC.DECREASEAGI)) // decrease agi
        agi -= sc_get(monster, SC.DECREASEAGI).val2;
    if (sc_get(monster, SC.QUAGMIRE)) // quagmire
        agi -= sc_get(monster, SC.QUAGMIRE).val2;

    status.agi = cap_value(agi, 0, USHRT_MAX);

    // vit
    let vit = b_status.vit;
    if (manualedits_get(monster, 3)) // manual edit
        vit += manualedits_get(monster, 3).value;
    if (sc_get(monster, SC.STRIPARMOR)) // strip armor
        vit -= Math.trunc((vit * 40) / 100);

    status.vit = cap_value(vit, 0, USHRT_MAX);

    // int
    let int = b_status.int;
    if (manualedits_get(monster, 4)) // manual edit
        int += manualedits_get(monster, 4).value;
    if (sc_get(monster, SC.STRIPHELM)) // strip helm
        int -= Math.trunc((int * 40) / 100);
    if (sc_get(monster, SC.BLESSING))
        int -= Math.trunc(int / 2);

    status.int = cap_value(int, 0, USHRT_MAX);

    // dex
    let dex = b_status.dex;
    if (manualedits_get(monster, 5)) // manual edit
        dex += manualedits_get(monster, 5).value;
    if (sc_get(monster, SC.QUAGMIRE)) // quagmire
        dex -= sc_get(monster, SC.QUAGMIRE).val2;
    if (sc_get(monster, SC.BLESSING))
        dex -= Math.trunc(dex / 2);

    status.dex = cap_value(dex, 0, USHRT_MAX);

    // luk
    let luk = b_status.luk;
    if (manualedits_get(monster, 6)) // manual edit
        luk += manualedits_get(monster, 6).value;
    if (sc_get(monster, SC.CURSE)) // curse
        luk = 0;

    status.luk = cap_value(luk, 0, USHRT_MAX);

    // batk
    let lv = monster.level;
    status.batk = status_base_atk(monster, status, lv);

    temp = b_status.batk - status_base_atk(monster, b_status, lv);
    status.batk += temp;

    // no additional bonuses to monster batk

    // watk
    if (manualedits_get(monster, 17)) // manual edit
        status.rhw.atk += manualedits_get(monster, 17).value;
    if (manualedits_get(monster, 87))
        status.rhw.atk2 += manualedits_get(monster, 87).value;
    // nothing that affects watk

    // matk min and max
    let matk_min = b_status.matk_min;
    let matk_max = b_status.matk_max;
    if (manualedits_get(monster, 88)) {
        matk_min += manualedits_get(monster, 88).value;
        matk_max += manualedits_get(monster, 88).value;
    }
    status.matk_min = cap_value(matk_min, 0, USHRT_MAX);
    status.matk_max = cap_value(matk_max, 0, USHRT_MAX);

    // hit
    let hit = b_status.hit;
    if (status.dex != b_status.dex) {
        hit += status.dex - b_status.dex;
    }

    if (manualedits_get(monster, 8))
        hit += manualedits_get(monster, 8).value;
    if (sc_get(monster, SC.POWERUP)) // power up
        hit += Math.trunc((hit * 100) / 100);
    if (sc_get(monster, SC.BLIND)) // blind
        hit -= Math.trunc((hit * 25) / 100);

    status.hit = cap_value(hit, 1, SHRT_MAX);

    // flee
    let flee = b_status.flee;
    if (status.agi != b_status.agi) {
        flee += status.agi - b_status.agi;
    }

    if (manualedits_get(monster, 9)) // manual edit
        flee += manualedits_get(monster, 9).value;
    if (sc_get(monster, SC.AGIUP)) // npc agi up
        flee += Math.trunc((flee * 100) / 100);
    if (sc_get(monster, SC.SPIDERWEB)) // spider web
        flee -= Math.trunc((flee * 50) / 100);
    if (sc_get(monster, SC.BLIND)) // blind
        flee -= Math.trunc((flee * 25) / 100);

    status.flee = cap_value(flee, 1, SHRT_MAX);

    // def
    let def = b_status.def;
    if (manualedits_get(monster, 18)) // manual edit
        def += manualedits_get(monster, 18).value;
    if (sc_get(monster, SC.STONE)) // stone curse
        def = Math.trunc(def / 2);
    if (sc_get(monster, SC.FREEZE)) // frozen
        def = Math.trunc(def / 2);
    if (sc_get(monster, SC.POISON)) // poison
        def = Math.trunc((def * 75) / 100);
    if (sc_get(monster, SC.CRUCIS)) // signum crucis
        def -= Math.trunc((def * sc_get(monster, SC.CRUCIS).val2) / 100);
    if (sc_get(monster, SC.PROVOKE)) // provoke
        def -= Math.trunc((def * sc_get(monster, SC.PROVOKE).val3) / 100);
    if (sc_get(monster, SC.STRIPSHIELD)) // strip shield
        def -= Math.trunc((def * 15) / 100);
    if (sc_get(monster, SC.FLING)) // fling
        def -= Math.trunc((def * sc_get(monster, SC.FLING).val2) / 100);
    if (sc_get(monster, SC.REDUCE_DEFRATE))
        def -= Math.trunc((def * sc_get(monster, SC.REDUCE_DEFRATE).val1) / 100);

    status.def = cap_value(def, DEFTYPE_MIN, DEFTYPE_MAX);

    // def2
    let def2 = b_status.def2;
    if (status.vit != b_status.vit)
        def2 += status.vit - b_status.vit;
    if (sc_get(monster, SC.ANGELUS)) // angelus
        def2 += Math.trunc((def2 * sc_get(monster, SC.ANGELUS).val2) / 100);
    if (sc_get(monster, SC.POISON)) // poison
        def2 = Math.trunc((def2 * 75) / 100);
    if (sc_get(monster, SC.PROVOKE)) // provoke
        def2 -= Math.trunc((def2 * sc_get(monster, SC.PROVOKE).val3) / 100);
    if (sc_get(monster, SC.FLING)) // fling
        def2 -= Math.trunc((def2 * sc_get(monster, SC.FLING).val3) / 100);

    status.def2 = cap_value(def2, 1, SHRT_MAX);

    if (sc_get(monster, SC.ETERNALCHAOS))
        status.def2 = 0;

    // mdef
    let mdef = b_status.mdef;
    if (manualedits_get(monster, 19)) // manual edit
        mdef += manualedits_get(monster, 19).value;
    if (sc_get(monster, SC.STONE)) // stone curse
        mdef += Math.trunc((mdef * 25) / 100);
    if (sc_get(monster, SC.FREEZE)) // frozen
        mdef += Math.trunc((mdef * 25) / 100);

    status.mdef = cap_value(mdef, DEFTYPE_MIN, DEFTYPE_MAX);

    // mdef2
    let mdef2 = b_status.mdef2;
    if (status.int != b_status.int || status.vit != b_status.vit)
        mdef2 += (status.int - b_status.int) + Math.trunc((status.vit - b_status.vit) / 2);
    if (sc_get(monster, SC.MINDBREAKER)) // mind breaker
        mdef2 -= Math.trunc((mdef2 * sc_get(monster, SC.MINDBREAKER).val3) / 100);

    status.mdef2 = cap_value(mdef2, 1, SHRT_MAX);

    // speed - doesnt matter

    // cri - doesnt matter

    // flee2 - doesnt matter

    // atk ele - doesnt matter

    // def ele
    let def_ele = b_status.def_ele;
    if (sc_get(monster, SC.STONE)) // stone curse
        def_ele = ELE.EARTH;
    if (sc_get(monster, SC.FREEZE)) // frozen
        def_ele = ELE.WATER;
    if (sc_get(monster, SC.ELEMENTALCHANGE)) // elemental change
        def_ele = sc_get(monster, SC.ELEMENTALCHANGE).val1;
    if (manualedits_get(monster, 610))
        def_ele = Math.trunc(manualedits_get(monster, 610).value / 10);

    status.def_ele = def_ele;

    // ele lv
    let ele_lv = b_status.ele_lv;
    if (sc_get(monster, SC.STONE)) // stone curse
        ele_lv = 1;
    if (sc_get(monster, SC.FREEZE)) // frozen
        ele_lv = 1;
    if (sc_get(monster, SC.ELEMENTALCHANGE)) // elemental change
        ele_lv = sc_get(monster, SC.ELEMENTALCHANGE).val2;
    if (manualedits_get(monster, 610)) // manual edit
        ele_lv = (Math.trunc(manualedits_get(monster, 610).value) % 10);

    status.ele_lv = cap_value(ele_lv, 1, 4);

    // mode - doesnt matter

    // max hp
    let max_hp = b_status.max_hp;
    if (manualedits_get(monster, 13))
        max_hp += manualedits_get(monster, 13).value;
    if (sc_get(monster, SC.ANGELUS)) // angelus
        max_hp += sc_get(monster, SC.ANGELUS).val1 * 100;
    if (manualedits_get(monster, 15))
        max_hp += Math.trunc((max_hp * manualedits_get(monster, 15).value) / 100);
    status.max_hp = cap_value(max_hp, 1, UINT_MAX);

    // max sp - doesnt matter

    // matk
    // nothing that affects monster matk for now

    // aspd - doesnt matter (as dps from monsters isnt calced)

    // dspd - doesnt matter

    // size
    if (manualedits_get(monster, 611)) // manual edit
        status.size = manualedits_get(monster, 611).value;

    // experience
    // 3x rate
    b_status.base_exp *= 3;
    b_status.job_exp *= 3;

    let base_exp = b_status.base_exp;
    let job_exp = b_status.job_exp;

    // Party share
    const partyCount = player.exp_modifiers.party_member_count;
    if (partyCount > 1) {
        base_exp = base_exp / partyCount;
        job_exp = job_exp / partyCount;

        base_exp += base_exp * (partyCount * 50) / 100;
        job_exp += job_exp * (partyCount * 50) / 100;
    }
    // Battle manual
    if (player.exp_modifiers.battle_manual > 0) {
        base_exp += base_exp * player.exp_modifiers.battle_manual / 100;
        job_exp += job_exp * player.exp_modifiers.battle_manual / 100;
    }
    // Job manual (+50% job exp only)
    if (player.exp_modifiers.job_manual) {
        job_exp += job_exp * 50 / 100;
    }

    if (sc_get(player, SC.RICHMANKIM)) {
        base_exp += (base_exp * sc_get(player, SC.RICHMANKIM).val2) / 100;
        job_exp += (job_exp * sc_get(player, SC.RICHMANKIM).val2) / 100;
    }
    if (manualedits_get(monster, 500))
        base_exp += manualedits_get(monster, 500).value;
    if (manualedits_get(monster, 501))
        job_exp += manualedits_get(monster, 501).value;
    status.base_exp = cap_value(Math.trunc(base_exp), 0, UINT_MAX);
    status.job_exp = cap_value(Math.trunc(job_exp), 0, UINT_MAX);

    // level
    let level = monster.level;
    if (manualedits_get(monster, 499))
        level += manualedits_get(monster, 499).value;
    monster.level = level;
}

function StAllCalc() {
    let previousBaseLv = player.status.base_level;
    restrictEquipslot();
    reloadEnchant();
    ClickB_Enemy(c.B_Enemy.value);
    PopulatePlayerData();

    if(player.status.job_id == JOB.SUPERNOVICE && previousBaseLv < 90 && 1 * c.A_BaseLV.value >= 90) {
        WeaponSet();
        EquipmentSet();
    } else if(player.status.job_id == JOB.SUPERNOVICE && previousBaseLv >= 90 && 1 * c.A_BaseLV.value < 90) {
        WeaponSet();
        EquipmentSet();
    }

    KakutyouKansuu();
}

function WeaponSet(jobId) {
    if (jobId === undefined) {
        jobId = player.status.job_id;
    }

    myInnerHtml("A_w1", '<select name="A_weapon1" style="width:185px;" onchange="ClickWeaponType(this[this.selectedIndex].value) | Click_Item(this[this.selectedIndex].value)| ClickActiveSkill2() |restrictCardslot(1)"><option value="0">(no weapon)</option></select>', 0);

    const levelRestrict = Number(c.restrict_lvlequip.checked);
    const jobWeapons = JOB_BASE_ASPD[jobId] || {};

    for (let weaponType = 1; weaponType < WEAPON.MAX; weaponType++) {
        if (jobWeapons[weaponType] === undefined)
            continue;

        const optGroup = document.createElement("OPTGROUP");
        optGroup.label = WeaponName[weaponType];

        const availableWeapons = [];
        n_A_JobSet();

        for (let itemId = 0; itemId <= ItemMax; itemId++) {
            const item = m_Item[itemId];

            if (item[1] !== weaponType)
                continue;

            const itemJobRestriction = item[2];
            const itemLevelRequirement = item[7];
            const itemLevel = item[4];
            const canEquip = JobEquipItemSearch(itemJobRestriction);

            if (canEquip && (!levelRestrict || itemLevelRequirement <= c.A_BaseLV.value)) {
                availableWeapons.push(itemId);
            } else if (player.status.job_id == JOB.SUPERNOVICE && player.status.base_level >= 90 && (weaponType == WEAPON.DAGGER || weaponType == WEAPON.ONEHANDSWORD || weaponType == WEAPON.ONEHANDAXE || weaponType == WEAPON.MACE || weaponType == WEAPON.ROD) && itemLevel == 4) {
                availableWeapons.push(itemId);
            }
        }

        if (availableWeapons.length > 0) {
            availableWeapons.sort((a, b) => m_Item[a][8] > m_Item[b][8] ? 1 : m_Item[a][8] < m_Item[b][8] ? -1 : 0);

            for (let i = 0; i < availableWeapons.length; i++) {
                const itemId = availableWeapons[i];
                const item = m_Item[itemId];

                let itemName = item[8];
                if (item[5]) {
                    itemName += ` [${item[5]}]`;
                }

                const option = new Option(itemName, item[0]);
                optGroup.appendChild(option);
            }

            c.A_weapon1.appendChild(optGroup);
        } else {
            const option = new Option("(Restricted by Base Lvl)", 0);
            optGroup.appendChild(option);
            c.A_weapon1.appendChild(optGroup);
        }
    }

    ClickWeaponType(WEAPON.FIST);
}

function WeaponSetLeft(jobId) {
    if (jobId === undefined) {
        jobId = player.status.job_id;
    }

    const levelRestrict = Number(c.restrict_lvlequip.checked);
    myInnerHtml("A_w2", '<select name="A_weapon2" style="width:185px;" onchange="ClickWeaponType2(this[this.selectedIndex].value) | StAllCalc()|ClickB_Item(this[this.selectedIndex].value)|restrictCardslot(1)"><option value="0">(Fist or Shield)</option></select>', 0);
    myInnerHtml("A_weapon2refine", "", 0);
    myInnerHtml("A_weapon2_cardshort", "", 0);
    myInnerHtml("nA_weapon2_c1", "", 0);
    myInnerHtml("nA_weapon2_c2", "", 0);
    myInnerHtml("nA_weapon2_c3", "", 0);
    myInnerHtml("nA_weapon2_c4", "", 0);
    player.dual_wield = false;

    const jobWeapons = JOB_BASE_ASPD[jobId] || {};

    for (let weaponType = 1; weaponType <= 6; weaponType++) {
        if (jobWeapons[weaponType] === undefined)
            continue;

        const optGroup = document.createElement("OPTGROUP");
        optGroup.label = WeaponName[weaponType];

        const availableWeapons = [];
        n_A_JobSet();
        n_A_Weapon2Type = weaponType;

        for (let itemId = 0; itemId <= ItemMax; itemId++) {
            const item = m_Item[itemId];

            if (item[1] !== n_A_Weapon2Type)
                continue;

            const itemJobRestriction = item[2];
            const itemLevelRequirement = item[7];
            const canEquip = JobEquipItemSearch(itemJobRestriction);

            if (canEquip && (!levelRestrict || itemLevelRequirement <= c.A_BaseLV.value)) {
                availableWeapons.push(itemId);
            }
        }

        if (availableWeapons.length > 0) {
            availableWeapons.sort((a, b) => m_Item[a][8] > m_Item[b][8] ? 1 : m_Item[a][8] < m_Item[b][8] ? -1 : 0);

            for (let i = 0; i < availableWeapons.length; i++) {
                const itemId = availableWeapons[i];
                const item = m_Item[itemId];

                let itemName = item[8];
                if (item[5]) {
                    itemName += ` [${item[5]}]`;
                }

                const option = new Option(itemName, item[0]);
                optGroup.appendChild(option);
            }
            c.A_weapon2.appendChild(optGroup);
        } else {
            const option = new Option("(Restricted by Base Lvl)", 0);
            optGroup.appendChild(option);
            c.A_weapon2.appendChild(optGroup);
        }
    }
}

function EquipmentSet() {
    const levelRestrict = 1 * c.restrict_lvlequip.checked;

    n_A_JobSet();

    // Slot indices: 0=head1, 1=head2, 2=head3, 3=shield, 4=armor, 5=garment, 6=shoes, 7=accessory
    const SLOT_TYPES = [50, 51, 52, 61, 60, 62, 63];
    const SLOT_SELECTS = [c.A_head1, c.A_head2, c.A_head3, c.A_left, c.A_body, c.A_shoulder, c.A_shoes];

    // Clear all dropdowns
    for (const sel of SLOT_SELECTS)
        sel.options.length = 0;
    c.A_acces1.options.length = 0;
    c.A_acces2.options.length = 0;

    const jobRestrict = 1 * c.restrict_jobequip.checked;
    const baseLevel = player.status.base_level;

    // Bucket items by slot type
    const buckets = SLOT_TYPES.map(() => []);
    const bucketL = []; // left accessory:  types 64 + 65
    const bucketR = []; // right accessory: types 64 + 66

    for (let a = 0; a <= ItemMax; a++) {
        const itemType = m_Item[a][1];

        // Skip the "no accessory" sentinel (id 326) - inserted manually below
        if (m_Item[a][0] === 326) continue;

        const isHeadgear = itemType >= 50 && itemType <= 52;
        const snLV90 = player.status.job_id == JOB.SUPERNOVICE && player.status.base_level >= 90 && isHeadgear;
        const jobOk = !jobRestrict || snLV90 || JobEquipItemSearch(m_Item[a][2]);
        const levelOk = !levelRestrict || snLV90 || m_Item[a][7] <= baseLevel;
        if (!jobOk || !levelOk) continue;

        const slotIdx = SLOT_TYPES.indexOf(itemType);

        if (slotIdx !== -1) {
            buckets[slotIdx].push(a);
        }

        if (itemType === 64 || itemType === 65) bucketL.push(a);
        if (itemType === 64 || itemType === 66) bucketR.push(a);
    }

    for (const bucket of [...buckets, bucketL, bucketR])
        bucket.sort((a, b) => m_Item[a][8] > m_Item[b][8] ? 1 : m_Item[a][8] < m_Item[b][8] ? -1 : 0);

    // Populate non-accessory dropdowns
    for (let s = 0; s < SLOT_SELECTS.length; s++) {
        const sel = SLOT_SELECTS[s];
        for (let i = 0; i < buckets[s].length; i++) {
            const o = buckets[s][i];
            sel.options[i] = new Option(m_Item[o][8] + (m_Item[o][5] ? ` [${m_Item[o][5]}]` : ""), m_Item[o][0]);
        }
    }
 
    // Populate accessory dropdowns with slot-specific "no X" sentinel first
    c.A_acces1.options[0] = new Option("(no left accessory)", 326);
    for (let i = 0; i < bucketL.length; i++) {
        const o = bucketL[i];
        c.A_acces1.options[i + 1] = new Option(m_Item[o][8] + (m_Item[o][5] ? ` [${m_Item[o][5]}]` : ""), m_Item[o][0]);
    }
 
    c.A_acces2.options[0] = new Option("(no right accessory)", 326);
    for (let i = 0; i < bucketR.length; i++) {
        const o = bucketR[i];
        c.A_acces2.options[i + 1] = new Option(m_Item[o][8] + (m_Item[o][5] ? ` [${m_Item[o][5]}]` : ""), m_Item[o][0]);
    }
}

function JobEquipItemSearch(searchId) {
    if (searchId >= 2000 && (player.status.job_id <= JOB.HIGH_MERCHANT || player.status.job_id == JOB.NIGHT_WATCH || player.status.job_id == JOB.SOUL_ASCETIC || player.status.job_id == JOB.SKY_EMPEROR)) {
        searchId -= 2000;
    }

    if (searchId >= 1000 && searchId <= 1999) {
        if (player.status.rebirth != 1)
            return 0;
        searchId -= 1000;
    }

    const equippableWeapons = JOB_EQUIPPABLE_WEAPONS[player.status.job_id] || [];
    return equippableWeapons.includes(searchId) ? 1 : 0;
}

/**
 * Function to set Job and Rebirth status
 */
function n_A_JobSet() {
    let newJob = 1 * c.A_JOB.value;

    const isRebornJob = (newJob >= JOB.LORD_KNIGHT && newJob <= JOB.HIGH_MERCHANT) || (newJob >= JOB.NIGHT_WATCH && newJob <= JOB.SKY_EMPEROR);

    if (isRebornJob) {
        if (newJob >= JOB.HIGH_NOVICE && newJob <= JOB.HIGH_MERCHANT) {
            newJob -= JOB.HIGH_NOVICE;
        } else if (newJob == JOB.HIGH_TAEKWON) {
            newJob = JOB.TAEKWON; // set to Taekwon Kid if High Taekwon is selected
        }
        player.status.rebirth = true;
    } else {
        player.status.rebirth = false;
    }

    player.status.job_id = newJob;
}
/**
 * Function to get Base Job Class
 * @returns Base Job ID
 */
function n_A_JobClass() {
    if (player.status.job_id <= JOB.MERCHANT)
        return player.status.job_id;

    const jobClassMap = {
        [JOB.SUPERNOVICE]: 0,
        [JOB.KNIGHT]: 1,
        [JOB.CRUSADER]: 1,
        [JOB.LORD_KNIGHT]: 1,
        [JOB.PALADIN]: 1,

        [JOB.ASSASSIN]: 2,
        [JOB.ROGUE]: 2,
        [JOB.ASSASSIN_CROSS]: 2,
        [JOB.STALKER]: 2,

        [JOB.PRIEST]: 3,
        [JOB.MONK]: 3,
        [JOB.HIGH_PRIEST]: 3,
        [JOB.CHAMPION]: 3,

        [JOB.HUNTER]: 4,
        [JOB.BARD]: 4,
        [JOB.DANCER]: 4,
        [JOB.SNIPER]: 4,
        [JOB.CLOWN]: 4,
        [JOB.GYPSY]: 4,

        [JOB.WIZARD]: 5,
        [JOB.SAGE]: 5,
        [JOB.HIGH_WIZARD]: 5,
        [JOB.PROFESSOR]: 5,

        [JOB.BLACKSMITH]: 6,
        [JOB.ALCHEMIST]: 6,
        [JOB.WHITESMITH]: 6,
        [JOB.CREATOR]: 6,

        [JOB.TAEKWON]: 41,
        [JOB.STAR_GLADIATOR]: 41,
        [JOB.SOUL_LINKER]: 41,
        [JOB.SOUL_ASCETIC]: 41,
        [JOB.SKY_EMPEROR]: 41,

        [JOB.NINJA]: 44,

        [JOB.GUNSLINGER]: 45,
        [JOB.NIGHT_WATCH]: 45
    };

    return jobClassMap[player.status.job_id] ?? 7;
}

/**
 * Function to get 2nd Job Class
 * @returns Second Job ID
 */
function n_A_JobClass2() {
    const jobClassMap = {
        [JOB.KNIGHT]: 7,
        [JOB.LORD_KNIGHT]: 7,

        [JOB.ASSASSIN]: 8,
        [JOB.ASSASSIN_CROSS]: 8,

        [JOB.PRIEST]: 9,
        [JOB.HIGH_PRIEST]: 9,

        [JOB.HUNTER]: 10,
        [JOB.SNIPER]: 10,

        [JOB.WIZARD]: 11,
        [JOB.HIGH_WIZARD]: 11,

        [JOB.BLACKSMITH]: 12,
        [JOB.WHITESMITH]: 12,

        [JOB.CRUSADER]: 13,
        [JOB.PALADIN]: 13,

        [JOB.ROGUE]: 14,
        [JOB.STALKER]: 14,

        [JOB.MONK]: 15,
        [JOB.CHAMPION]: 15,

        [JOB.BARD]: 16,
        [JOB.CLOWN]: 16,
        [JOB.DANCER]: 16,
        [JOB.GYPSY]: 16,

        [JOB.SAGE]: 18,
        [JOB.PROFESSOR]: 18,

        [JOB.ALCHEMIST]: 19,
        [JOB.CREATOR]: 19,

        [JOB.STAR_GLADIATOR]: 42,
        [JOB.SKY_EMPEROR]: 42,

        [JOB.SOUL_LINKER]: 43,
        [JOB.SOUL_ASCETIC]: 43,
    }

    return jobClassMap[player.status.job_id] ?? 0;
}

function EquipNumSearch(id) {
    return player.equip.filter(e => e === id).length;
}
function CardNumSearch(id) {
    return player.card.filter(c => c === id).length;
}
function TimeItemNumSearch(id) {
    return player.temp_effect.filter(e => e === id).length;
}

function ActiveSkillSetPlus() {
    // Build a list of extra skills granted by equipped items, cards, and scrolls
    // that should be appended to the active skill dropdown.
    // Each entry is { skillId, source } where source encodes the origin:
    //   >= 5000 = scroll skill (index + 5000)
    //   >= 3000 = acquired/enabled skill (index + 3000)
    //   >= 2000 = auto-cast skill (index + 2000)
    const extraSkills = [];

    // Skills granted by equipped items
    for (let slot = 0; slot <= 20; slot++) {
        const itemId = player.equip[slot];
        let bonusIndex = 0;

        while (m_Item[itemId][11 + bonusIndex] !== 0) {
            const bonusType = Math.abs(m_Item[itemId][11 + bonusIndex]);
            const bonusValue = m_Item[itemId][12 + bonusIndex];

            if (bonusType === 220 && m_EnableSkill[bonusValue][1] === 1) {
                extraSkills.push({ skillId: m_EnableSkill[bonusValue][2], source: bonusValue + 3000 });
            } else if (bonusType === 221 && m_AutoSpellSkill[bonusValue][1] === 1) {
                extraSkills.push({ skillId: m_AutoSpellSkill[bonusValue][2], source: bonusValue + 2000 });
            }
            bonusIndex += 2;
        }
    }

    // Skills granted by cards
    for (let cardSlot = 0; cardSlot <= 25; cardSlot++) {
        const cardId = player.card[cardSlot];
        let bonusIndex = 0;

        while (m_Card[cardId][4 + bonusIndex] !== 0) {
            const bonusType = m_Card[cardId][4 + bonusIndex];
            const bonusValue = m_Card[cardId][5 + bonusIndex];

            if (bonusType === 220 && m_EnableSkill[bonusValue][1] === 1) {
                extraSkills.push({ skillId: m_EnableSkill[bonusValue][2], source: bonusValue + 3000 });
            } else if (bonusType === 221 && m_AutoSpellSkill[bonusValue][1] === 1) {
                extraSkills.push({ skillId: m_AutoSpellSkill[bonusValue][2], source: bonusValue + 2000 });
            }
            bonusIndex += 2;
        }
    }

    // Priest/High Priest card 164 grants Lex Divina (skill 162)
    if (CardNumSearch(164) && (player.status.job_id === JOB.PRIEST || player.status.job_id === JOB.HIGH_PRIEST)) {
        extraSkills.push({ skillId: SKILL.CR_GRANDCROSS, source: 2095 });
    }

    // Card 277 grants Endure (skill 76) for Swordman class
    if (CardNumSearch(277) && n_A_JobClass() === JOB.SWORDMAN) {
        extraSkills.push({ skillId: SKILL.KN_BOWLINGBASH, source: 2096 });
    }

    // Scroll skills (always available)
    const scrollSkillIds = [33, 34, 35, 36, 13, 37, 38, 39, 7];
    for (const skillId of scrollSkillIds) {
        extraSkills.push({ skillId: m_EnableSkill[skillId][2], source: skillId + 5000 });
    }
    // Yggdrasil Leaf (index 40) is a special case with its own label
    extraSkills.push({ skillId: m_EnableSkill[40][2], source: 5040 });

    // Rebuild the extra portion of the dropdown unconditionally
    const baseSkillCount = c.all_dmgSkills.checked
        ? 109
        : (JOB_ACTIVE_SKILLS[player.status.job_id] || []).length;

    // Clear old extra entries
    for (let i = baseSkillCount + 20; i >= baseSkillCount; i--)
        c.A_ActiveSkill.options[i] = null;

    // Append new extra entries
    for (let i = 0; i < extraSkills.length; i++) {
        const { skillId, source } = extraSkills[i];
        const skillName = m_Skill[skillId][2];
        let label;

        if (source === 5040) {
            label = `${skillName} (Yggdrasil Leaf)`;
        } else if (source >= 5000) {
            label = `${skillName} (scroll skill)`;
        } else if (source >= 3000) {
            label = `${skillName} (acquired skill)`;
        } else {
            label = `${skillName} (auto-cast skill)`;
        }

        c.A_ActiveSkill.options[baseSkillCount + i] = new Option(label, source);
    }

    if (Number(c.A_ActiveSkill.value) === 0)
        c.A_ActiveSkillLV.style.visibility = "hidden";
}

function KakutyouKansuu() {
    displayOtherInfo(1 * c.A_Kakutyou.value);
}
function KakutyouKansuu2() {
    displayOtherInfoSelect(1 * c.A_Kakutyou.value);
}

/**
 * Applies a weapon card preset to the right-hand weapon card slots.
 * Handles three cases:
 *   - Weapon-only preset (sentinel [1] < 10000): fills all 4 weapon card slots directly
 *   - Full-set preset (sentinel [1] >= 10000): fills individual gear slots, only overwriting non-zero entries
 *   - "Remove All Cards": clears every card slot including dual-wield weapon if present
 */
function Setm_CardShort() {
    const presetIndex = 1 * c.A_cardshort.value;
    if (presetIndex <= 0)
        return;

    const preset = m_CardShort[presetIndex];
    const isWeaponPreset = preset[1] < 10000;
    const isRemoveAll = preset[0] === "Remove All Cards";

    if (isWeaponPreset) {
        c.A_weapon1_card1.value = preset[1];
        c.A_weapon1_card2.value = preset[2];
        c.A_weapon1_card3.value = preset[3];
        c.A_weapon1_card4.value = preset[4];

        // Presets 16 and 17 are elemental stone presets — auto-select the correct
        // elemental stone card based on the current target monster's element.
        if (presetIndex === 16 || presetIndex === 17) {
            const monsterElement = m_Monster[1 * c.B_Enemy.value][3];
            if (monsterElement >= 10 && monsterElement <= 14)
                c.A_weapon1_card1.value = 204; // Water elemental stone
            else if ((monsterElement >= 20 && monsterElement <= 24) || (monsterElement >= 80 && monsterElement <= 94))
                c.A_weapon1_card1.value = 203; // Fire elemental stone
            else if (monsterElement >= 30 && monsterElement <= 34)
                c.A_weapon1_card1.value = 201; // Wind elemental stone
            else if (monsterElement >= 40 && monsterElement <= 44)
                c.A_weapon1_card1.value = 202; // Earth elemental stone
        }
    } else if (isRemoveAll) {
        c.A_weapon1_card1.value = 0;
        c.A_weapon1_card2.value = 0;
        c.A_weapon1_card3.value = 0;
        c.A_weapon1_card4.value = 0;
        if (player.dual_wield) {
            c.A_weapon2_card1.value = 0;
            c.A_weapon2_card2.value = 0;
            c.A_weapon2_card3.value = 0;
            c.A_weapon2_card4.value = 0;
        }
        c.A_head1_card.value = 0;
        c.A_head2_card.value = 0;
        c.A_left_card.value = 0;
        c.A_body_card.value = 0;
        c.A_shoulder_card.value = 0;
        c.A_shoes_card.value = 0;
        c.A_acces1_card.value = 0;
        c.A_acces2_card.value = 0;
    } else {
        // Full-set preset: only overwrite slots that have a non-zero value in the preset.
        // preset[2]=weapon card1, [3]=head1, [4]=shield, [5]=body,
        // [6]=garment, [7]=shoes, [8]=acc1, [9]=acc2
        if (preset[2]) c.A_weapon1_card1.value = preset[2];
        if (preset[3]) c.A_head1_card.value = preset[3];
        if (preset[4]) c.A_left_card.value = preset[4];
        if (preset[5]) c.A_body_card.value = preset[5];
        if (preset[6]) c.A_shoulder_card.value = preset[6];
        if (preset[7]) c.A_shoes_card.value = preset[7];
        if (preset[8]) c.A_acces1_card.value = preset[8];
        if (preset[9]) c.A_acces2_card.value = preset[9];
    }

    ActiveSkillSetPlus();
}

/**
 * Applies a weapon card preset to the left-hand (dual-wield) weapon card slots.
 * Only handles weapon-only presets (sentinel [1] < 10000).
 * Same elemental stone auto-select logic as Setm_CardShort.
 */
function Setm_CardShortLeft() {
    const presetIndex = 1 * c.A_cardshortLeft.value;
    if (presetIndex <= 0)
        return;

    const preset = m_CardShort[presetIndex];

    c.A_weapon2_card1.value = preset[1];
    c.A_weapon2_card2.value = preset[2];
    c.A_weapon2_card3.value = preset[3];
    c.A_weapon2_card4.value = preset[4];

    if (presetIndex === 16 || presetIndex === 17) {
        const monsterElement = m_Monster[1 * c.B_Enemy.value][3];
        if (monsterElement >= 10 && monsterElement <= 14)
            c.A_weapon2_card1.value = 204;
        else if ((monsterElement >= 20 && monsterElement <= 24) || (monsterElement >= 80 && monsterElement <= 94))
            c.A_weapon2_card1.value = 203;
        else if (monsterElement >= 30 && monsterElement <= 34)
            c.A_weapon2_card1.value = 201;
        else if (monsterElement >= 40 && monsterElement <= 44)
            c.A_weapon2_card1.value = 202;
    }
}

function calcAvgHitsToKill(monsterIndex) {
    // Temporarily populate monster data directly without DOM side effects
    const savedMonster = monster;
    monster = new MonsterData();

    const monsterInfo = m_Monster[monsterIndex];
    monster.mob_id = monsterInfo[0];
    monster.level = monsterInfo[5];
    monster.name = monsterInfo[1];
    monster.is_custom_player = monster.mob_id == 586;
    monster.ranged = monsterInfo[20] == 1;

    // Minimal status calc for the monster
    StatusCalcMonsterSub();

    // Run the damage calc — same logic as calc()
    let skill_type = BF.WEAPON;
    if (m_Skill[player.active_skill][4] < 0)
        skill_type = BF.MAGIC;
    else if (m_Skill[player.active_skill][4] == 5)
        skill_type = BF.MISC;

    const d = battle_calc_attack(skill_type, player, monster, player.active_skill, player.active_skill_lv, 0);

    // Compute avgHits the same way updatePlayerDamageDisplay does
    const avgDamage = d.getAverageDamage();
    let avgHits = avgDamage > 0 ? Math.ceil(monster.battle_status.max_hp / avgDamage) : 10000;
    if (d.hit_rate < 100)
        avgHits = Math.ceil(avgHits / (d.hit_rate / 100));
    if (avgHits > 10000) avgHits = 10000;

    // Restore the real monster
    monster = savedMonster;

    return avgHits;
}

// Maps ENEMY_SORT dropdown index → m_Monster field index used for sorting.
// Index 12 (value 60) is the special "sort by damage dealt" mode.
// Index 13 (value 100) is the default alphabetical sort (no custom sort).
const ENEMY_SORT_FIELD = [3, 2, 4, 21, 22, 16, 17, 13, 14, 15, 30, 60];

function EnemySort() {
    const sortMode = 1 * c.ENEMY_SORT.value;
    const sortField = sortMode > 0 ? ENEMY_SORT_FIELD[sortMode - 1] : null;

    // Pre-calculate hits-to-kill for all monsters before touching the dropdown.
    // Done up here so it can use the existing valid dropdown state if needed.
    const damageByMonster = {};
    if (sortField === 60) {
        for (let i = 0; i <= EnemyNum; i++)
            damageByMonster[i] = calcAvgHitsToKill(i);
    }

    // Clear and rebuild the dropdown
    c.B_Enemy.options.length = 0;

    // Value 0: default alphabetical sort using the pre-built v_MonsterSort list
    if (sortMode === 0) {
        const filtered = applyRegionFilter(v_MonsterSort.slice(0, -1)); // strip "N" sentinel
        for (const monsterId of filtered)
            c.B_Enemy.options[c.B_Enemy.options.length] = new Option(m_Monster[monsterId][1], monsterId);
        return;
    }

    // Build list of non-excluded monster array indices
    let monsterIds = [];
    for (let i = 0; i <= EnemyNum; i++) {
        if (!v_MonsterExclude.includes(m_Monster[i][0]))
            monsterIds.push(i);
    }

    // Sort
    let sortKey;
    if (sortField === 60) {
        sortKey = (id) => damageByMonster[id];
    } else if (sortField === 30) {
        sortKey = (id) => m_Monster[id][7] + m_Monster[id][14]; // DEF + MDEF
    } else {
        sortKey = (id) => m_Monster[id][sortField];
    }

    monsterIds.sort((a, b) => sortKey(a) - sortKey(b));
    monsterIds = applyRegionFilter(monsterIds);

    // Build label suffix showing the sorted field value
    const getSuffix = (id) => {
        if ([21, 22, 16, 17, 13, 14, 15].includes(sortField))
            return ` [${m_Monster[id][sortField]}]`;
        if (sortField === 2)
            return ` [${v_Race_[m_Monster[id][2]]}]`;
        if (sortField === 3)
            return ` [${v_Element_[Math.floor(m_Monster[id][3] / 10)]}${m_Monster[id][3] % 10}]`;
        if (sortField === 4)
            return ` [${v_Size[m_Monster[id][4]]}]`;
        if (sortField === 30)
            return ` [${m_Monster[id][7] + m_Monster[id][14]}]`;
        if (sortField === 60)
            return ` [${damageByMonster[id]}]`;
        return "";
    };

    for (const id of monsterIds)
        c.B_Enemy.options[c.B_Enemy.options.length] = new Option(m_Monster[id][1] + getSuffix(id), id);
}

/**
 * Filters a list of monster IDs to only those belonging to the selected region.
 * Returns the list unmodified if "All Regions" (index 0) is selected.
 * m_MonsterMap[regionIndex] is an array of valid monster IDs terminated by "N".
 */
function applyRegionFilter(monsterIds) {
    const regionIndex = 1 * c.ENEMY_SORT2.value;
    if (regionIndex === 0)
        return monsterIds;

    const regionMap = m_MonsterMap[regionIndex];
    // regionMap ends with "N" sentinel — collect valid IDs into a Set for O(1) lookup
    const regionSet = new Set();
    for (let i = 0; regionMap[i] !== "N"; i++)
        regionSet.add(regionMap[i]);

    return monsterIds.filter(id => regionSet.has(id));
}

// ─── SAVE ────────────────────────────────────────────────────────────────────

function SaveLocal() {
    if (typeof Storage === "undefined") {
        alert("Sorry, your browser does not support local storage.");
        return;
    }

    const slotNum = c.A_SaveSlotLocal.value;

    // Snapshot all passive skill levels from the DOM
    const passiveSkillLevels = {};
    const availableBuffs = JOB_AVAILABLE_BUFFS[player.status.job_id] || [];
    for (let i = 0; i < availableBuffs.length; i++) {
        const el = document.getElementById("A_skill" + i);
        if (el) passiveSkillLevels[i] = 1 * el.value;
    }

    const data = {
        version: SAVE_VERSION,
        name: c.saveDataName.value,

        // ── Player character ──────────────────────────────────────────────
        job_id: 1 * c.A_JOB.value,
        job_level: player.status.job_level,
        base_level: player.status.base_level,
        adopted: player.status.adopted,
        str: player.status.str,
        agi: player.status.agi,
        vit: player.status.vit,
        int: player.status.int,
        dex: player.status.dex,
        luk: player.status.luk,

        // ── Equipment ─────────────────────────────────────────────────────
        equip: player.equip.slice(),    // array of item IDs per slot
        refine: player.refine.slice(),   // array of refine levels per slot
        card: player.card.slice(),     // array of card IDs
        shadow: player.shadow.slice(),
        randopt: player.randopt.slice(),
        enchant: player.enchant.slice(),

        // ── Weapon specifics ──────────────────────────────────────────────
        weapon_element: player.weapon_element,
        dual_wield: player.dual_wield,
        arrow: player.arrow,

        // ── Active skill ──────────────────────────────────────────────────
        active_skill: player.active_skill,
        active_skill_lv: player.active_skill_lv,
        active_skill_raw: 1 * c.A_ActiveSkill.value, // preserves autospell/scroll offsets
        skill_sub_num: c.SkillSubNum ? 1 * c.SkillSubNum.value : 0,

        // ── Passive skill levels (job-specific, keyed by buff slot index) ─
        passive_skill_levels: passiveSkillLevels,

        // ── Status changes (buffs/debuffs on player) ──────────────────────
        player_sc: player.sc.map(sc => ({
            type: sc.type,
            val1: sc.val1, val2: sc.val2, val3: sc.val3, val4: sc.val4,
            val5: sc.val5, val6: sc.val6, val7: sc.val7, val8: sc.val8,
            val9: sc.val9, val10: sc.val10
        })),
        player_manual_edits: player.manual_edits.map(e => ({ type: e.type, value: e.value })),

        // ── Monster / target ──────────────────────────────────────────────
        monster_id: c.B_Enemy.value,
        monster_sc: monster.sc.map(sc => ({
            type: sc.type,
            val1: sc.val1, val2: sc.val2, val3: sc.val3, val4: sc.val4,
            val5: sc.val5, val6: sc.val6, val7: sc.val7, val8: sc.val8,
            val9: sc.val9, val10: sc.val10
        })),
        monster_manual_edits: monster.manual_edits.map(e => ({ type: e.type, value: e.value })),
        monster_atk_skill: 1 * c.B_AtkSkill.value,
        monster_atk_range: 1 * c.B_AtkRange.value,
        monster_atk_elem: 1 * c.B_AtkElem.value,
        b_num: 1 * c.B_num.value,
        monster_mhp_percent: 1 * c.EnemyHPPercent.value,

        // ── UI state ──────────────────────────────────────────────────────
        all_dmg_skills: c.all_dmgSkills.checked,
        restrict_jobequip: c.restrict_jobequip.checked,
        restrict_lvlequip: c.restrict_lvlequip.checked,
        restrict_equipslot: c.restrict_equipslot.checked,
        restrict_cardslot: c.restrict_cardslot.checked,
        all_card: c.all_card.checked,
        theme: c.theme.value,
        conf01: 1 * c.Conf01.value,
        pet: player.pet,
        temp_effect: player.temp_effect.slice(),
        exp_modifiers: {
            party_member_count: player.exp_modifiers.party_member_count,
            battle_manual: player.exp_modifiers.battle_manual,
            job_manual: player.exp_modifiers.job_manual ? 1 : 0,
        },
    };

    localStorage["Slot" + slotNum] = JSON.stringify(data);

    const bkcN = slotNum;
    LoadLocal3();
    c.A_SaveSlotLocal.value = bkcN;
}

// ─── LOAD ─────────────────────────────────────────────────────────────────────

function LoadLocal() {
    if (typeof Storage === "undefined") {
        alert("Sorry, your browser does not support local storage.");
        return;
    }

    myInnerHtml("bREFLECT2", "", 0);
    myInnerHtml("bREFLECT2name", "", 0);

    const slotNum = c.A_SaveSlotLocal.value;
    const raw = localStorage["Slot" + slotNum];

    if (!raw || raw === "0") {
        loadDefaultState();
        return;
    }

    let data;
    try {
        data = JSON.parse(raw);
    } catch (e) {
        alert("Save data is corrupted in slot " + slotNum);
        return;
    }

    if (data.version === SAVE_VERSION) {
        loadNewFormat(data);
    } else {
        // Legacy: old saves are plain arrays — Array.isArray check as extra safety
        loadLegacyFormat(Array.isArray(data) ? data : Object.values(data));
    }
}

function loadNewFormat(data) {
    // ── UI flags first (affects what WeaponSet/ClickJob show) ────────────
    c.all_dmgSkills.checked = data.all_dmg_skills;
    c.restrict_jobequip.checked = data.restrict_jobequip;
    c.restrict_lvlequip.checked = data.restrict_lvlequip;
    c.restrict_equipslot.checked = data.restrict_equipslot;
    c.restrict_cardslot.checked = data.restrict_cardslot;
    c.all_card.checked = data.all_card;

    // ── Job + levels ──────────────────────────────────────────────────────
    c.A_JOB.value = data.job_id;
    player.status.base_level = data.base_level;
    player.status.job_level = data.job_level;
    player.status.adopted = data.adopted;
    ClickJob(data.job_id);
    c.A_JobLV.value = data.job_level;
    c.A_BaseLV.value = data.base_level;
    c.A_adopted.checked = data.adopted;

    // ── Base stats ────────────────────────────────────────────────────────
    c.A_STR.value = data.str;
    c.A_AGI.value = data.agi;
    c.A_VIT.value = data.vit;
    c.A_INT.value = data.int;
    c.A_DEX.value = data.dex;
    c.A_LUK.value = data.luk;

    // ── Weapon ────────────────────────────────────────────────────────────
    c.A_Weapon_element.value = data.weapon_element;
    c.A_weapon1.value = data.equip[EQI.HAND_R];
    ClickWeaponType(m_Item[data.equip[EQI.HAND_R]][1]);
    c.A_Weapon_refine.value = data.refine[EQI.HAND_R];

    if (data.dual_wield) {
        c.A_weapon2.value = data.equip[EQI.HAND_L];
        ClickWeaponType2(m_Item[data.equip[EQI.HAND_L]][1]);
        c.A_Weapon2_refine.value = data.refine[EQI.HAND_L];
        c.A_weapon2_card1.value = data.card[4];
        c.A_weapon2_card2.value = data.card[5];
        c.A_weapon2_card3.value = data.card[6];
        c.A_weapon2_card4.value = data.card[7];
    }

    c.A_weapon1_card1.value = data.card[0];
    c.A_weapon1_card2.value = data.card[1];
    c.A_weapon1_card3.value = data.card[2];
    c.A_weapon1_card4.value = data.card[3];

    ClickB_Item(data.equip[EQI.HAND_R]);

    // ── Armor slots ───────────────────────────────────────────────────────
    c.A_head1.value = data.equip[EQI.HEAD_TOP];
    c.A_head1_card.value = data.card[8];
    c.A_HEAD_REFINE.value = data.refine[EQI.HEAD_TOP];

    c.A_head2.value = data.equip[EQI.HEAD_MID];
    c.A_head2_card.value = data.card[9];

    c.A_head3.value = data.equip[EQI.HEAD_LOW];

    c.A_left.value = data.equip[EQI.SHIELD];
    c.A_left_card.value = data.card[10];
    c.A_LEFT_REFINE.value = data.refine[EQI.SHIELD];

    c.A_body.value = data.equip[EQI.ARMOR];
    c.A_body_card.value = data.card[11];
    c.A_BODY_REFINE.value = data.refine[EQI.ARMOR];

    c.A_shoulder.value = data.equip[EQI.GARMENT];
    c.A_shoulder_card.value = data.card[12];
    c.A_SHOULDER_REFINE.value = data.refine[EQI.GARMENT];

    c.A_shoes.value = data.equip[EQI.SHOES];
    c.A_shoes_card.value = data.card[13];
    c.A_SHOES_REFINE.value = data.refine[EQI.SHOES];

    c.A_acces1.value = data.equip[EQI.ACC_L];
    c.A_acces1_card.value = data.card[14];

    c.A_acces2.value = data.equip[EQI.ACC_R];
    c.A_acces2_card.value = data.card[15];

    // ── Shadow, random options, enchants ──────────────────────────────────
    for (let i = 0; i < data.shadow.length; i++)
        player.shadow[i] = data.shadow[i];
    reloadShadowEquip();
    for (let i = 0; i < data.randopt.length; i++)
        player.randopt[i] = data.randopt[i];
    reloadRandOpt();
    for (let i = 0; i < data.enchant.length; i++)
        player.enchant[i] = data.enchant[i];

    // ── Arrow ─────────────────────────────────────────────────────────────
    if (!c.A_Arrow.disabled)
        c.A_Arrow.value = data.arrow;

    // ── Passive skill levels ──────────────────────────────────────────────
    const availableBuffs = JOB_AVAILABLE_BUFFS[data.job_id] || [];
    for (let i = 0; i < availableBuffs.length; i++) {
        const el = document.getElementById("A_skill" + i);
        if (el) el.value = data.passive_skill_levels[i] ?? 0;
    }

    // ── Player status changes ─────────────────────────────────────────────
    player.sc = (data.player_sc || []).map(s =>
        new StatusChange(s.type, s.val1, s.val2, s.val3, s.val4, s.val5, s.val6, s.val7, s.val8, s.val9, s.val10)
    );
    player.manual_edits = (data.player_manual_edits || []).map(e =>
        new ManualEdit(e.type, e.value)
    );

    // ── Monster ───────────────────────────────────────────────────────────
    c.B_Enemy.value = data.monster_id;
    ClickB_Enemy();
    LoadEnemySkills();
    c.B_AtkSkill.value = data.monster_atk_skill;
    c.B_AtkRange.value = data.monster_atk_range;
    c.B_AtkElem.value = data.monster_atk_elem;
    c.B_num.value = data.b_num;
    BClickAtkSkill();

    monster.sc = (data.monster_sc || []).map(s =>
        new StatusChange(s.type, s.val1, s.val2, s.val3, s.val4, s.val5, s.val6, s.val7, s.val8, s.val9, s.val10)
    );
    monster.manual_edits = (data.monster_manual_edits || []).map(e =>
        new ManualEdit(e.type, e.value)
    );

    c.EnemyHPPercent.value = data.monster_mhp_percent || 100;

    // ── Active skill ──────────────────────────────────────────────────────
    c.Conf01.value = data.conf01;
    StCalc(1);
    ActiveSkillSetPlus();
    c.A_ActiveSkill.value = data.active_skill_raw;
    ClickActiveSkill();
    c.A_ActiveSkillLV.value = data.active_skill_lv;
    if (c.SkillSubNum) c.SkillSubNum.value = data.skill_sub_num;

    player.pet = data.pet;
    player.temp_effect = data.temp_effect || [];
    player.exp_modifiers = data.exp_modifiers || {};

    // ── Finish ────────────────────────────────────────────────────────────
    c.saveDataName.value = data.name || "";
    c.theme.value = data.theme;
    refreshFields();
    StCalc(1);
    StAllCalc();
    ActiveSkillSetPlus();
    calc();
    themes();

    syncBuffDOMFromSC(player);
    syncBuffDOMFromSC(monster);
    syncAdditionalEffectsDOMFromData();
    syncManualEditsDOMFromData(player, 'ID_ARG');
    syncMonsterManualEditsDOMFromData();
}

// ─── SLOT LIST ────────────────────────────────────────────────────────────────

function LoadLocal3() {
    for (let k = 1; k <= 200; k++) {
        let slotNum = k < 9 ? "num0" + (k - 1)
            : k == 9 ? "num09"
                : "num" + k;

        const raw = localStorage["Slot" + slotNum];
        if (!raw || raw === "0") {
            c.A_SaveSlotLocal.options[k - 1] = new Option(k + ": No Data", slotNum);
            continue;
        }

        let data;
        try { data = JSON.parse(raw); } catch (e) {
            c.A_SaveSlotLocal.options[k - 1] = new Option(k + ": (corrupted)", slotNum);
            continue;
        }

        let label;
        let saveName = "";

        if (data.version === SAVE_VERSION) {
            // New format
            if (data.name) saveName = " (" + data.name + ")";
            const jobId = data.job_id;
            if (jobId >= 0 && jobId < JobName.length)
                label = k + ": " + (data.adopted ? "Baby " : "") + JobName[jobId] + saveName;
            else
                label = k + ": Unknown" + saveName;
        } else {
            // Legacy format — data is a plain array
            const sd = Array.isArray(data) ? data : Object.values(data);
            if (sd[500] != null && sd[500] !== "") saveName = " (" + sd[500] + ")";
            const jobId = sd[2];
            if (jobId >= 1 && jobId <= 48)
                label = k + ": " + (sd[5] == 0 ? "" : "Baby ") + JobName[jobId] + saveName;
            else if (jobId === 999 || jobId === 0)
                label = k + ": Novice" + saveName;
            else
                label = k + ": No Data";
        }

        c.A_SaveSlotLocal.options[k - 1] = new Option(label, slotNum);
    }
}

/**
 * Syncs buff table DOM controls from player.sc or monster.sc.
 * Pass 'player' or 'monster' as the entity argument.
 * Scopes the query to the specific table container so player and
 * monster controls never interfere with each other.
 */
function syncBuffDOMFromSC(entity) {
    // Scope to only player buff tables, not the whole document
    const playerTableIds = ['SIENSKILL', 'SP_SIEN01', 'SP_SIEN02', 'SP_SIEN03', 'SP_SIEN04', 'SP_SIEN05', 'ID_ARG'];
    const monsterTableIds = ['EnemyDebuf', 'EnemyBuf'];

    const tableIds = (entity === monster) ? monsterTableIds : playerTableIds;

    for (const tableId of tableIds) {
        const table = document.getElementById(tableId);
        if (!table) continue;

        const controls = table.querySelectorAll('input[data-sc], select[data-sc]');

        for (const el of controls) {
            const scAttr = el.getAttribute('data-sc');
            if (!scAttr) continue;

            const scNames = scAttr.split('|');

            if (scAttr === 'SPIRITSPHERE') {
                if (el.tagName === 'SELECT')
                    el.value = player.spiritball || 0;
                continue;
            }

            if (scAttr === 'ADRENALINE|ADRENALINE2') {
                if (sc_get(entity, SC.ADRENALINE2)) el.value = 2;
                else if (sc_get(entity, SC.ADRENALINE)) el.value = 1;
                else el.value = 0;
                continue;
            }

            if (scAttr == 'ASPDPOT') {
                if (sc_get(entity, SC.ASPDPOTION3)) el.value = 4;
                else if (sc_get(entity, SC.ASPDPOTION2)) el.value = 3;
                else if (sc_get(entity, SC.ASPDPOTION1)) el.value = 2;
                else if (sc_get(entity, SC.ASPDPOTION0)) el.value = 1;
                else el.value = 0;
                continue;
            }

            if(scAttr == 'SAGEGROUND') {
                if(sc_get(player, SC.VOLCANO)) {
                    document.getElementsByName("buff_sage_ground_label")[0].value = 0;
                    document.getElementsByName("buff_sage_ground_lv")[0].value = sc_get(player, SC.VOLCANO) ? sc_get(player, SC.VOLCANO).val1 : 0;
                    continue;
                } else if(sc_get(player, SC.DELUGE)) {
                    document.getElementsByName("buff_sage_ground_label")[0].value = 1;
                    document.getElementsByName("buff_sage_ground_lv")[0].value = sc_get(player, SC.DELUGE) ? sc_get(player, SC.DELUGE).val1 : 0;
                    continue;
                } else if(sc_get(player, SC.WHIRLWIND)) {
                    document.getElementsByName("buff_sage_ground_label")[0].value = 2;
                    document.getElementsByName("buff_sage_ground_lv")[0].value = sc_get(player, SC.WHIRLWIND) ? sc_get(player, SC.WHIRLWIND).val1 : 0;
                    continue;
                }
            }

            if(scAttr == 'TALISMAN') {
                if(sc_get(player, SC.T_BLUE_DRAGON_BUFF)) {
                    document.getElementsByName("buff_talisman_label")[0].value = 0;
                    document.getElementsByName("buff_talisman_lv")[0].value = sc_get(player, SC.T_BLUE_DRAGON_BUFF) ? sc_get(player, SC.T_BLUE_DRAGON_BUFF).val1 : 0;
                    continue;
                } else if (sc_get(player, SC.T_RED_PHOENIX_BUFF)) {
                    document.getElementsByName("buff_talisman_label")[0].value = 1;
                    document.getElementsByName("buff_talisman_lv")[0].value = sc_get(player, SC.T_RED_PHOENIX_BUFF) ? sc_get(player, SC.T_RED_PHOENIX_BUFF).val1 : 0;
                    continue;
                } else if (sc_get(player, SC.T_BLACK_TORTOISE_BUFF)) {
                    document.getElementsByName("buff_talisman_label")[0].value = 2;
                    document.getElementsByName("buff_talisman_lv")[0].value = sc_get(player, SC.T_BLACK_TORTOISE_BUFF) ? sc_get(player, SC.T_BLACK_TORTOISE_BUFF).val1 : 0;
                    continue;
                }
            }

            if (scNames.length > 1) {
                el.checked = scNames.some(name => sc_get(entity, SC[name]));
                continue;
            }

            const scType = SC[scNames[0]];
            if (scType === undefined) continue;

            const activeSC = sc_get(entity, scType);
            const fixedVal = el.getAttribute('data-fixed');

            if (el.type === 'checkbox') {
                el.checked = !!activeSC;
            } else if (el.tagName === 'SELECT') {
                el.value = activeSC ? (fixedVal ? 1 : activeSC.val1) : 0;
            }
        }
    }

    // ── Song stat/lesson sub-selects ──────────────────────────────────────
    // These selects have no data-sc — they're secondary fields whose values
    // are packed into val2/val3/val4 of the song SC.
    // sc_start(player, SC.WHISTLE, level, lesson, agi, luk)
    //   val1=level, val2=lesson, val3=stat1, val4=stat2
    if (entity !== monster) {
        const songMap = [
            {
                sc: SC.WHISTLE,
                stat1: 'buff_whistle_agi',
                stat2: 'buff_whistle_luk',
                lesson: 'buff_whistle_lesson'
            },
            {
                sc: SC.ASSNCROS,
                stat1: 'buff_assncros_agi',
                stat2: null,
                lesson: 'buff_assncros_lesson'
            },
            {
                sc: SC.POEMBRAGI,
                stat1: 'buff_poembragi_dex',
                stat2: 'buff_poembragi_int',
                lesson: 'buff_poembragi_lesson'
            },
            {
                sc: SC.APPLEIDUN,
                stat1: 'buff_appleidun_vit',
                stat2: null,
                lesson: 'buff_appleidun_lesson'
            },
            {
                sc: SC.HUMMING,
                stat1: 'buff_humming_dex',
                stat2: null,
                lesson: 'buff_humming_lesson'
            },
            {
                sc: SC.FORTUNE,
                stat1: 'buff_fortunekiss_luk',
                stat2: null,
                lesson: 'buff_fortunekiss_lesson'
            },
            {
                sc: SC.SERVICE4U,
                stat1: 'buff_service4u_int',
                stat2: null,
                lesson: 'buff_service4u_lesson'
            },
        ];

        const setEl = (name, val) => {
            if (!name) return;
            const el = document.getElementsByName(name)[0];
            if (el) el.value = val;
        };

        for (const entry of songMap) {
            const activeSC = sc_get(player, entry.sc);

            // val1=level (already handled by data-sc above)
            // val2=lesson, val3=stat1, val4=stat2
            const lessonVal = activeSC ? (activeSC.val2 || 0) : 0;
            const stat1Val = activeSC ? (activeSC.val3 || 0) : 0;
            const stat2Val = activeSC ? (activeSC.val4 || 0) : 0;

            setEl(entry.lesson, lessonVal);
            setEl(entry.stat1, stat1Val);
            setEl(entry.stat2, stat2Val);
        }

        if(sc_get(player, SC.MARIONETTE)) {
            const marionetteSC = sc_get(player, SC.MARIONETTE);
            if(marionetteSC.val1 === 1)
                document.getElementsByName("buff_marionette_status_compensation")[0].checked = true;
            else
                document.getElementsByName("buff_marionette_status_compensation")[0].checked = false;
            setEl("buff_marionette_str", marionetteSC.val2 || 0);
            setEl("buff_marionette_agi", marionetteSC.val3 || 0);
            setEl("buff_marionette_vit", marionetteSC.val4 || 0);
            setEl("buff_marionette_int", marionetteSC.val5 || 0);
            setEl("buff_marionette_dex", marionetteSC.val6 || 0);
            setEl("buff_marionette_luk", marionetteSC.val7 || 0);
        }
    }

    // Update headers — only for the relevant entity
    if (entity === monster) {
        updateMonsterDebuffHeader();
        updateMonsterBuffHeader();
    } else {
        updateSupportSkillHeader();
        updateMusicDanceSkillHeader();
        updateMusicDanceStatLessonVisibility();
        updateMarionetteVisibility();
        updateGuildSkillHeader();
        updateMiscEffectHeader();
        updateFoodEffectHeader();
    }
}

/**
 * Reads player.manual_edits and pushes values back into the
 * Player Manual Edits table DOM (ID_ARG).
 * 
 * Each input/select in the table has data-type="N" matching the
 * numeric type used in manualedits_start/manualedits_get.
 * 
 * The atkmod, resmod, and skilldamage fields are compound (a type
 * select + a value input), so they need special handling.
 */
function syncManualEditsDOMFromData(entity, tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;

    // Compound field groups — each has a type-select and a value-input
    // that together encode one manual edit entry.
    const compoundFields = [
        { inputName: 'manual_atkmod', selectName: 'manual_atkmod_type', type: 500 },
        { inputName: 'manual_atkmod2', selectName: 'manual_atkmod2_type', type: 501 },
        { inputName: 'manual_atkmod3', selectName: 'manual_atkmod3_type', type: 502 },
        { inputName: 'manual_atkmod4', selectName: 'manual_atkmod4_type', type: 503 },
        { inputName: 'manual_resmod', selectName: 'manual_resmod_type', type: 505 },
        { inputName: 'manual_resmod2', selectName: 'manual_resmod2_type', type: 506 },
        { inputName: 'manual_resmod3', selectName: 'manual_resmod3_type', type: 507 },
        { inputName: 'manual_resmod4', selectName: 'manual_resmod4_type', type: 508 },
    ];

    // Skilldamage is extra-compound: the select encodes the skill ID which
    // gets packed into a type of 5000+skillId, and there's a separate value input.
    const skilldamageFields = [
        { inputName: 'manual_skilldamage', selectName: 'manual_skilldamage_skill', type: 600 },
        { inputName: 'manual_skilldamage2', selectName: 'manual_skilldamage2_skill', type: 601 },
    ];

    // First pass: simple fields with a single data-type attribute
    const simpleControls = table.querySelectorAll('[data-type]');
    for (const el of simpleControls) {
        const dataType = parseInt(el.getAttribute('data-type'), 10);
        if (!dataType) continue;

        // Skip compound field inputs/selects — handled separately below
        const isCompound = compoundFields.some(f => f.type === dataType) ||
            skilldamageFields.some(f => f.type === dataType);
        if (isCompound) continue;

        const edit = manualedits_get(entity, dataType);
        const val = edit ? edit.value : 0;

        if (el.type === 'checkbox') {
            el.checked = !!val;
        } else if (el.tagName === 'SELECT') {
            el.value = val;
        } else if (el.type === 'text' || el.type === 'number') {
            el.value = val || 0;
        }
    }

    // Second pass: compound atkmod/resmod fields
    for (const field of compoundFields) {
        const edit = manualedits_get(entity, field.type);
        const typeSelect = document.getElementsByName(field.selectName)[0];
        const valueInput = document.getElementsByName(field.inputName)[0];
        if (!typeSelect || !valueInput) continue;

        if (edit && edit.value !== 0) {
            // The edit stores the subtype in val (via the select) and
            // the numeric amount in value. But ManualEdit only has type+value,
            // so we need to find the right subtype select value from the edit.
            // The subtype IS the data stored — atkmod type selects store
            // things like BF.WEAPON, BF.MAGIC etc. We store these separately.
            // For now restore what we can: the value input.
            valueInput.value = edit.value;
            // The type select can't be restored without storing it separately —
            // leave it at its current value if it was already set.
        } else {
            typeSelect.value = 0;
            valueInput.value = 0;
        }
    }

    // Third pass: skilldamage fields (type is 5000+skillId, stored differently)
    for (const field of skilldamageFields) {
        const skillSelect = document.getElementsByName(field.selectName)[0];
        const valueInput = document.getElementsByName(field.inputName)[0];
        if (!skillSelect || !valueInput) continue;

        // Find any manual edit with type >= 5000 for this field slot
        // We can't distinguish slot 0 vs slot 1 without extra storage,
        // so just clear both and restore what matches
        let found = null;
        for (const edit of entity.manual_edits) {
            if (edit.type >= 5000) {
                const skillId = edit.type - 5000;
                // Check if this skill is in the select's options
                const option = Array.from(skillSelect.options)
                    .find(o => parseInt(o.value) === skillId);
                if (option) { found = { skillId, value: edit.value }; break; }
            }
        }

        if (found) {
            skillSelect.value = found.skillId;
            valueInput.value = found.value;
        } else {
            skillSelect.value = 0;
            valueInput.value = 0;
        }
    }

    updatePlayerManualEditsHeader();
}

/**
 * Reads player.pet, player.temp_effect, and player.exp_modifiers and
 * pushes their values back into the Additional Effects table DOM (ID_ETC).
 * Uses data-id attributes to identify each control.
 */
function syncAdditionalEffectsDOMFromData() {
    const table = document.getElementById('ID_ETC');
    if (!table) return;

    const controls = table.querySelectorAll('[data-id]');
    for (const el of controls) {
        const dataId = el.getAttribute('data-id');
        if (!dataId) continue;

        switch (dataId) {
            case 'PET':
                el.value = player.pet || 0;
                break;
            case 'TEMP_EFFECTS_1':
                el.value = player.temp_effect[0] || 0;
                break;
            case 'TEMP_EFFECTS_2':
                el.value = player.temp_effect[1] || 0;
                break;
            case 'TEMP_EFFECTS_3':
                el.value = player.temp_effect[2] || 0;
                break;
            case 'TEMP_EFFECTS_4':
                el.value = player.temp_effect[3] || 0;
                break;
            case 'EXP_PARTY_MEMBER':
                el.value = player.exp_modifiers.party_member_count || 0;
                break;
            case 'EXP_BATTLE_MANUAL':
                el.value = player.exp_modifiers.battle_manual || 0;
                break;
            case 'EXP_JOB_MANUAL':
                el.checked = !!player.exp_modifiers.job_manual;
                break;
        }
    }

    updateAdditionalEffectHeader();
}

/**
 * Reads monster.manual_edits and pushes values back into the
 * Monster Manual Edits table DOM (B_MANUAL).
 */
function syncMonsterManualEditsDOMFromData() {
    const table = document.getElementById('B_MANUAL');
    if (!table) return;

    // ── Element resistance fields (data-type 600 and 601) ─────────────────
    // Stored as type = dataType * 10 + elementIndex, value = resistance amount
    const eleresPairs = [
        { inputName: 'enemy_manual_eleres', selectName: 'enemy_manual_eleres_element', baseType: 600 },
        { inputName: 'enemy_manual_eleres2', selectName: 'enemy_manual_eleres2_element', baseType: 601 },
    ];

    for (const pair of eleresPairs) {
        const input = table.querySelector(`[name="${pair.inputName}"]`);
        const select = table.querySelector(`[name="${pair.selectName}"]`);
        if (!input || !select) continue;

        // Search manual_edits for any type in range baseType*10 + 0..9
        let found = null;
        for (const edit of monster.manual_edits) {
            const baseCheck = Math.floor(edit.type / 10);
            if (baseCheck === pair.baseType) {
                found = edit;
                break;
            }
        }

        if (found) {
            const elementIndex = found.type % 10;
            select.value = elementIndex;
            input.value = found.value;
        } else {
            select.value = 0;
            input.value = 0;
        }
    }

    // ── Element/size buff fields (data-type 610 and 611) ──────────────────
    // Type 610 stores packedVal = element * 10 + level
    // Type 611 stores size value
    const elementEdit = manualedits_get(monster, 610);
    const sizeEdit = manualedits_get(monster, 611);

    const elementCheckbox = table.querySelector('[name="enemy_manual_elementbuff"]');
    const elementSelect = table.querySelector('[name="enemy_manual_element"]');
    const eleLvSelect = table.querySelector('[name="enemy_manual_elelv"]');
    const sizeSelect = table.querySelector('[name="enemy_manual_size"]');

    if (elementEdit && elementCheckbox) {
        elementCheckbox.checked = true;
        const packedVal = elementEdit.value;
        if (elementSelect) elementSelect.value = Math.floor(packedVal / 10);
        if (eleLvSelect) eleLvSelect.value = packedVal % 10;
    } else {
        if (elementCheckbox) elementCheckbox.checked = false;
    }

    if (sizeEdit && sizeSelect) {
        sizeSelect.value = sizeEdit.value;
    } else {
        if (sizeSelect) sizeSelect.value = 0;
    }

    // ── Simple fields ─────────────────────────────────────────────────────
    // All other data-type controls map directly to manualedits_get(monster, dataType)
    const skipTypes = new Set([600, 601, 610, 611]);
    const simpleControls = table.querySelectorAll('[data-type]');

    for (const el of simpleControls) {
        const dataType = parseInt(el.getAttribute('data-type'), 10);
        if (!dataType || skipTypes.has(dataType)) continue;

        const edit = manualedits_get(monster, dataType);
        const val = edit ? edit.value : 0;

        if (el.type === 'checkbox') {
            el.checked = !!val;
        } else if (el.tagName === 'SELECT') {
            el.value = val;
        } else if (el.type === 'text' || el.type === 'number') {
            el.value = val || 0;
        }
    }

    updateEnemyManualEditsHeader();
}

/**
 * Loads a legacy (v1) save array into the current player/monster structures
 * and syncs the DOM. The legacy format used flat numeric arrays + global
 * n_A_Buf* arrays. We translate those into player.sc entries then call
 * syncBuffDOMFromSC() to reflect them in the UI.
 */
function loadLegacyFormat(sd) {
    // ── UI flags ──────────────────────────────────────────────────────────
    c.all_dmgSkills.checked = sd[428];
    c.restrict_jobequip.checked = sd[429];
    c.restrict_lvlequip.checked = sd[430];
    c.restrict_equipslot.checked = sd[431];
    c.restrict_cardslot.checked = sd[432];
    c.all_card.checked = sd[433];

    // ── Job + levels ──────────────────────────────────────────────────────
    player.status.base_level = sd[4];
    player.status.job_level = sd[3];
    c.A_JOB.value = sd[2];
    ClickJob(sd[2]);
    c.A_JobLV.value = sd[3];
    c.A_BaseLV.value = sd[4];
    c.A_adopted.checked = sd[5];

    // ── Base stats ────────────────────────────────────────────────────────
    c.A_STR.value = sd[6];
    c.A_AGI.value = sd[7];
    c.A_VIT.value = sd[8];
    c.A_DEX.value = sd[9];
    c.A_INT.value = sd[10];
    c.A_LUK.value = sd[11];

    // ── Weapon ────────────────────────────────────────────────────────────
    c.A_Weapon_element.value = sd[12];
    c.A_weapon1.value = sd[14];
    ClickWeaponType(sd[13]);
    c.A_Weapon_refine.value = sd[15];
    c.A_weapon1_card1.value = sd[16];
    c.A_weapon1_card2.value = sd[17];
    c.A_weapon1_card3.value = sd[18];
    c.A_weapon1_card4.value = sd[19];

    if (sd[20] && sd[21]) { // dual wield was saved
        c.A_weapon2.value = sd[21];
        ClickWeaponType2(sd[20]);
        c.A_Weapon2_refine.value = sd[22];
        c.A_weapon2_card1.value = sd[23];
        c.A_weapon2_card2.value = sd[24];
        c.A_weapon2_card3.value = sd[25];
        c.A_weapon2_card4.value = sd[26];
    }

    n_A_JobSet();
    if (n_A_JobClass() === JOB.THIEF || n_A_JobClass() === JOB.ARCHER ||
        n_A_JobClass() === JOB.GUNSLINGER)
        c.A_Arrow.value = sd[27];

    ClickB_Item(sd[14]);

    // ── Armor slots ───────────────────────────────────────────────────────
    c.A_head1.value = sd[28];
    c.A_head1_card.value = sd[29];
    c.A_HEAD_REFINE.value = sd[30];
    c.A_head2.value = sd[31];
    c.A_head2_card.value = sd[32];
    c.A_head3.value = sd[33];
    c.A_left.value = sd[34];
    c.A_left_card.value = sd[35];
    c.A_LEFT_REFINE.value = sd[36];
    c.A_body.value = sd[37];
    c.A_body_card.value = sd[38];
    c.A_BODY_REFINE.value = sd[39];
    c.A_shoulder.value = sd[40];
    c.A_shoulder_card.value = sd[41];
    c.A_SHOULDER_REFINE.value = sd[42];
    c.A_shoes.value = sd[43];
    c.A_shoes_card.value = sd[44];
    c.A_SHOES_REFINE.value = sd[45];
    c.A_acces1.value = sd[46];
    c.A_acces1_card.value = sd[47];
    c.A_acces2.value = sd[48];
    c.A_acces2_card.value = sd[49];

    // ── Passive skills (buff table dropdowns) ─────────────────────────────
    const availableBuffs = JOB_AVAILABLE_BUFFS[sd[2]] || [];
    for (let i = 0; i < availableBuffs.length && i <= 14; i++) {
        const el = document.getElementById("A_skill" + i);
        if (el) el.value = sd[56 + i] || 0;
    }

    // ── Random options, shadow, enchants ──────────────────────────────────
    for (let i = 0; i <= 27; i++) player.randopt[i] = sd[436 + i] || 0;
    reloadRandOpt();
    for (let i = 0; i <= 5; i++)  player.shadow[i] = sd[464 + i] || 0;
    if (player.shadow[1] === 0) player.shadow[1] = 22;
    if (player.shadow[3] === 0) player.shadow[3] = 44;
    for (let i = 0; i <= 10; i++) player.enchant[i] = sd[474 + i] || 0;

    // ── Translate old n_A_Buf* arrays → player.sc ─────────────────────────
    // Each setBuf2ToSC call writes directly into player.sc via sc_start/sc_end.
    player.sc = []; // clear first

    // Party/support skills (old n_A_Buf2, indices 0-21, saved at sd[73..94])
    if (sd[73]) sc_start(player, SC.BLESSING, sd[73] > 5 ? sd[73] / 2 : sd[73]);
    if (sd[74]) sc_start(player, SC.INCREASEAGI, sd[74] > 5 ? sd[74] / 2 : sd[74]);
    if (sd[75]) sc_start(player, SC.IMPOSITIO, sd[75]);
    if (sd[76]) sc_start(player, SC.GLORIA);
    if (sd[77]) sc_start(player, SC.ANGELUS, sd[77]);
    if (sd[78]) sc_start(player, SC.ASSUMPTIO);
    if (sd[79] == 1) sc_start(player, SC.ADRENALINE);
    else if (sd[79] == 2) sc_start(player, SC.ADRENALINE2);
    if (sd[80]) sc_start(player, SC.WEAPONPERFECTION);
    if (sd[81]) sc_start(player, SC.OVERTHRUST);
    if (sd[82]) sc_start(player, SC.WINDWALK, sd[82]);
    if (sd[83]) sc_start(player, SC.SUFFRAGIUM, sd[83]);
    if (sd[84]) sc_start(player, SC.PROVIDENCE, sd[84]);
    if (sd[85]) player.spiritball = sd[85];
    if (sd[86]) sc_start(player, SC.AUTOGUARD, sd[86]);
    if (sd[87]) sc_start(player, SC.SHIELDREFLECT, sd[87]);
    if (sd[88]) sc_start(player, SC.DEFENDER, sd[88]);
    if (sd[89]) sc_start(player, SC.INCALLSTATUS, 20);
    if (sd[90]) sc_start(player, SC.INCMHPRATE, 100);
    if (sd[91]) sc_start(player, SC.INCMSPRATE, 100);
    if (sd[92]) sc_start(player, SC.INCATKRATE, 100);
    if (sd[93]) { sc_start(player, SC.INCHIT, 50); sc_start(player, SC.INCFLEE, 50); }
    if (sd[94]) sc_start(player, SC.INCDEFRATE, 25);

    // music/dance skills
    if (sd[96]) sc_start(player, SC.WHISTLE, sd[96], sd[126], sd[116], sd[133]);
    if (sd[97]) sc_start(player, SC.ASSNCROS, sd[97], sd[127], sd[117]);
    if (sd[98]) sc_start(player, SC.POEMBRAGI, sd[98], sd[128], sd[118], sd[125]);
    if (sd[99]) sc_start(player, SC.APPLEIDUN, sd[99], sd[129], sd[119]);
    if (sd[100]) sc_start(player, SC.HUMMING, sd[100], sd[130], sd[120]);
    if (sd[101]) sc_start(player, SC.FORTUNE, sd[101], sd[131], sd[121]);
    if (sd[102]) sc_start(player, SC.SERVICE4U, sd[102], sd[132], sd[122]);
    if (sd[103]) sc_start(player, SC.SIEGFRIED, sd[103]);
    if (sd[104]) sc_start(player, SC.RICHMANKIM, sd[104]);
    if (sd[105]) sc_start(player, SC.DRUMBATTLE, sd[105]);
    if (sd[106]) sc_start(player, SC.NIBELUNGEN, sd[106]);
    if (sd[107]) sc_start(player, SC.MARIONETTE, sd[114], sd[108], sd[109], sd[110], sd[111], sd[112], sd[113]);
    if (sd[470]) sc_start(player, SC.WHISTLE_SRS);
    if (sd[471]) sc_start(player, SC.ASSNCROS_SRS);
    if (sd[472]) sc_start(player, SC.FORTUNE_SRS);
    if (sd[473]) sc_start(player, SC.HUMMING_SRS);

    if (sd[136]) sc_start(player, SC.BATTLEORDERS);
    if (sd[137]) sc_start(player, SC.LEADERSHIP, sd[137]);
    if (sd[138]) sc_start(player, SC.GLORYWOUNDS, sd[138]);
    if (sd[139]) sc_start(player, SC.SOULCOLD, sd[139]);
    if (sd[140]) sc_start(player, SC.HAWKEYES, sd[140]);

    if (sd[143] === 0 && sd[144]) sc_start(player, SC.VOLCANO, sd[144]);
    else if (sd[143] === 1 && sd[144]) sc_start(player, SC.DELUGE, sd[144]);
    else if (sd[143] === 2 && sd[144]) sc_start(player, SC.WHIRLWIND, sd[144]);
    if (sd[146]) sc_start(player, SC.FOGWALL);
    if (sd[147]) sc_start(player, SC.MINDBREAKER, sd[147]);
    if (sd[148]) sc_start(player, SC.PROVOKE, sd[148]);
    if (sd[149]) sc_start(player, SC.BENEDICTIO);
    if (sd[150]) sc_start(player, SC.WATK_ELEMENT, ELE.FIRE, 20);
    if (sd[151]) sc_start(player, SC.CHANGEUNDEAD);
    if (sd[152]) sc_start(player, SC.NOCRIT);
    if (sd[154]) sc_start(player, SC.BLIND);
    if (sd[155]) sc_start(player, SC.STUN);
    if (sd[156]) sc_start(player, SC.STONE);
    if (sd[157]) sc_start(player, SC.SLEEP);
    if (sd[158]) sc_start(player, SC.FREEZE);
    if (sd[159]) sc_start(player, SC.AETERNA);
    if (sd[160]) sc_start(player, SC.BLEEDING);
    if (sd[161]) sc_start(player, SC.CRITICALWOUND, sd[161]);
    if (sd[162]) sc_start(player, SC.QUAGMIRE, sd[162]);
    if (sd[163]) sc_start(player, SC.DECREASEAGI, sd[163]);
    if (sd[164]) sc_start(player, SC.POISON);
    if (sd[165]) sc_start(player, SC.CURSE);

    if (sd[169]) sc_start(player, SC.SESAME_PASTRY, 10);
    if (sd[170]) sc_start(player, SC.HONEY_PASTRY, 10);
    if (sd[171]) sc_start(player, SC.ORLEANS_MEAL, 7);
    if (sd[172]) sc_start(player, SC.FOOD_STR_CASH, sd[172]);
    if (sd[173]) sc_start(player, SC.FOOD_AGI_CASH, sd[173]);
    if (sd[174]) sc_start(player, SC.FOOD_VIT_CASH, sd[174]);
    if (sd[175]) sc_start(player, SC.FOOD_INT_CASH, sd[175]);
    if (sd[176]) sc_start(player, SC.FOOD_DEX_CASH, sd[176]);
    if (sd[177]) sc_start(player, SC.FOOD_LUK_CASH, sd[177]);
    if (sd[178]) sc_start(player, SC.RESENTMENT_BOX, 20);
    if (sd[179]) sc_start(player, SC.DROWSINESS_BOX, 20);
    if (sd[180]) sc_start(player, SC.ARMOR_ELEMENT_WATER);
    if (sd[181]) sc_start(player, SC.ARMOR_ELEMENT_EARTH);
    if (sd[182]) sc_start(player, SC.ARMOR_ELEMENT_FIRE);
    if (sd[183]) sc_start(player, SC.ARMOR_ELEMENT_WIND);
    // 184
    if (sd[185]) sc_start(player, SC.ORIENTAL_PASTRY, 10);
    if (sd[186]) sc_start(player, SC.RUNE_STRAWBERRY_CAKE, 5);
    if (sd[187]) sc_start(player, SC.SCHWARTZWALD_PINE_JUBILEE);
    if (sd[188]) sc_start(player, SC.ARUNAFELTZ_DESERT_SANDWICH, 7);
    if (sd[189]) sc_start(player, SC.MANU_ATK, 10);
    if (sd[190]) sc_start(player, SC.MANU_MATK, 10);
    if (sd[191]) sc_start(player, SC.MANU_DEF, 10);
    if (sd[192]) sc_start(player, SC.SPL_ATK, 10);
    if (sd[193]) sc_start(player, SC.SPL_MATK, 10);
    if (sd[194]) sc_start(player, SC.SPL_DEF, 10);
    if (sd[195]) sc_start(player, SC.GUARANA_CANDY);
    // 196
    // 197
    // 198
    // 199
    if (sd[200]) sc_start(player, SC.ALOEVERA);
    if (sd[201]) sc_start(player, SC.DEF_RATE, 3);
    if (sd[202]) sc_start(player, SC.MDEF_RATE, 3);
    if (sd[203]) sc_start(player, SC.GLOOM_BOX);
    if (sd[204] == 1) sc_start(player, SC.ASPDPOTION0);
    else if (sd[204] == 2) sc_start(player, SC.ASPDPOTION1);
    else if (sd[204] == 3) sc_start(player, SC.ASPDPOTION2);
    else if (sd[204] == 4) sc_start(player, SC.ASPDPOTION3);
    if (sd[205]) sc_start(player, SC.ABRASIVE, 20);
    if (sd[206]) sc_start(player, SC.REGENERATION_POTION, 20);
    if (sd[207]) sc_start(player, SC.CHEWY_RICE_CAKE, 10);
    // 208
    // 209
    // 210
    // 211
    if (sd[212]) sc_start(player, SC.MACARONCAKE);
    // 213
    // 214
    // 215
    // 216
    // 217
    // 218
    // 219 
    // 220

    // "additional" effects
    player.pet = sd[221];
    // 222 - battle manual
    player.exp_modifiers.job_manual = sd[223];
    // 224 - base rate
    // 225
    player.exp_modifiers.party_member_count = sd[226];
    // 227 - exp tap bonus
    // 228 - job rate
    player.temp_effect[0] = sd[229];
    player.temp_effect[1] = sd[230];
    player.temp_effect[2] = sd[231];
    player.temp_effect[3] = sd[232];

    // player manual edits
    if (sd[319]) manualedits_start(player, 290, sd[319]);
    if (sd[320]) manualedits_start(player, 295, sd[320]);
    if (sd[321]) manualedits_start(player, 78, sd[321]);
    if (sd[333]) manualedits_start(player, 13, sd[333]);
    if (sd[334]) manualedits_start(player, 15, sd[334]);
    if (sd[335]) manualedits_start(player, 14, sd[335]);
    if (sd[336]) manualedits_start(player, 16, sd[336]);
    if (sd[337]) manualedits_start(player, 18, sd[337]);
    if (sd[338]) manualedits_start(player, 19, sd[338]);
    if (sd[339]) manualedits_start(player, 8, sd[339]);
    if (sd[340]) manualedits_start(player, 9, sd[340]);
    if (sd[341]) manualedits_start(player, 11, sd[341]);
    if (sd[342]) manualedits_start(player, 10, sd[342]);
    if (sd[343]) manualedits_start(player, 17, sd[343]);
    if (sd[344]) manualedits_start(player, 80, sd[344]);
    if (sd[345]) manualedits_start(player, 88, sd[345]);
    if (sd[346]) manualedits_start(player, 89, sd[346]);
    if (sd[347]) manualedits_start(player, 12, sd[347]);
    // 348
    // 349
    if (sd[350]) manualedits_start(player, 1, sd[350]);
    if (sd[351]) manualedits_start(player, 2, sd[351]);
    if (sd[352]) manualedits_start(player, 3, sd[352]);
    if (sd[353]) manualedits_start(player, 4, sd[353]);
    if (sd[354]) manualedits_start(player, 5, sd[354]);
    if (sd[355]) manualedits_start(player, 6, sd[355]);
    // 356
    if (sd[357]) manualedits_start(player, 354, sd[357]);
    if (sd[358]) manualedits_start(player, 86, sd[358]);
    if (sd[359]) manualedits_start(player, 25, sd[359]);
    if (sd[360]) manualedits_start(player, 70, sd[360]);

    monster.sc = [];
    if (sd[253]) sc_start(monster, SC.PROVOKE, sd[253]);
    if (sd[254]) sc_start(monster, SC.QUAGMIRE, sd[254]);
    if (sd[255]) sc_start(monster, SC.POISON);
    if (sd[256]) sc_start(monster, SC.BLIND);
    if (sd[257]) sc_start(monster, SC.FREEZE);
    if (sd[258]) sc_start(monster, SC.BLESSING, sd[258]);
    if (sd[259]) sc_start(monster, SC.AETERNA);
    if (sd[260]) sc_start(monster, SC.STUN);
    if (sd[261]) sc_start(monster, SC.SLEEP);
    if (sd[262]) sc_start(monster, SC.STONE);
    if (sd[263]) sc_start(monster, SC.CURSE);
    if (sd[264]) sc_start(monster, SC.DECREASEAGI, sd[264]);
    if (sd[265]) sc_start(monster, SC.CRUCIS, sd[265]);
    if (sd[266]) sc_start(monster, SC.STRIPWEAPON);
    if (sd[267]) sc_start(monster, SC.STRIPSHIELD);
    if (sd[268]) sc_start(monster, SC.STRIPARMOR);
    if (sd[269]) sc_start(monster, SC.STRIPHELM);
    if (sd[270]) sc_start(monster, SC.SPIDERWEB);
    if (sd[271]) sc_start(monster, SC.MINDBREAKER, sd[271]);
    if (sd[272]) sc_start(monster, SC.DONTFORGETME);
    if (sd[273]) sc_start(monster, SC.ETERNALCHAOS);
    if (sd[274]) sc_start(monster, SC.SKA, sd[274]);
    // 275 - eske
    if (sd[276]) sc_start(monster, SC.ELEMENTALCHANGE, sd[276], 1);
    // 277 - flying
    if (sd[278]) sc_start(monster, SC.REDUCE_DEFRATE, sd[278]);
    if (sd[279]) sc_start(monster, SC.DISARM);
    if (sd[280]) sc_start(monster, SC.CRITIGNORELUK, sd[280]);

    // monster buffs
    if (sd[281]) sc_start(monster, SC.INCREASEAGI, sd[281]);
    if (sd[282]) sc_start(monster, SC.ASSUMPTIO);
    if (sd[283]) sc_start(monster, SC.ADRENALINE);
    if (sd[284]) sc_start(monster, SC.MAXIMIZEPOWER);
    if (sd[285]) sc_start(monster, SC.POWERUP);
    if (sd[286]) sc_start(monster, SC.AGIUP, sd[286]);
    if (sd[287]) sc_start(monster, SC.ELEMENTALCHANGE, Math.trunc(sd[287] / 10), sd[287] % 10);
    if (sd[288]) sc_start(monster, SC.ARMORCHANGE, sd[288], SKILL.NPC_STONESKIN);
    if (sd[289]) sc_start(monster, SC.ARMORCHANGE, sd[289], SKILL.NPC_ANTIMAGIC);
    if (sd[290]) sc_start(monster, SC.KEEPING);
    if (sd[291]) sc_start(monster, SC.ANGELUS, sd[291]);
    if (sd[292]) sc_start(monster, SC.AUTOGUARD, sd[292]);
    if (sd[293]) sc_start(monster, SC.SHIELDREFLECT, sd[293]);
    if (sd[294]) sc_start(monster, SC.ARMOR, sd[294]);
    if (sd[295]) sc_start(monster, SC.ENERGYCOAT, sd[295]);

    // monster manual edits
    // 364
    if (sd[365]) manualedits_start(monster, 604, sd[365]);
    if (sd[367]) manualedits_start(monster, 6000 + sd[366], sd[367]);
    if (sd[369]) manualedits_start(monster, 6010 + sd[368], sd[369]);
    if (sd[371]) manualedits_start(monster, 602, sd[371]);
    if (sd[373]) manualedits_start(monster, 78, sd[373]);
    if (sd[385]) manualedits_start(monster, 71, sd[385]);
    if (sd[394]) manualedits_start(monster, 13, sd[394]);
    if (sd[395]) manualedits_start(monster, 15, sd[395]);
    // 396
    // 397
    if (sd[398]) manualedits_start(monster, 18, sd[398]);
    if (sd[399]) manualedits_start(monster, 19, sd[399]);
    if (sd[400]) manualedits_start(monster, 8, sd[400]);
    if (sd[401]) manualedits_start(monster, 9, sd[401]);
    // 402
    // 403
    if (sd[404]) manualedits_start(monster, 17, sd[404]);
    if (sd[405]) manualedits_start(monster, 80, sd[405]);
    if (sd[406]) manualedits_start(monster, 88, sd[406]);
    // 407
    // 408
    // 409
    // 410
    // 411
    if (sd[412]) manualedits_start(monster, 2, sd[412]);
    if (sd[413]) manualedits_start(monster, 3, sd[413]);
    if (sd[414]) manualedits_start(monster, 4, sd[414]);
    if (sd[415]) manualedits_start(monster, 5, sd[415]);
    if (sd[416]) manualedits_start(monster, 6, sd[416]);
    if (sd[417]) manualedits_start(monster, 87, sd[417]);
    if (sd[418]) manualedits_start(monster, 354, sd[418]);
    // 419
    if (sd[422]) manualedits_start(monster, 610, (sd[420] * 10) + sd[421]);
    if (sd[424]) manualedits_start(monster, 611, sd[423]);

    // ── Active skill ──────────────────────────────────────────────────────
    c.Conf01.value = sd[237];
    c.B_num.value = sd[238];
    c.A8_Skill14.value = sd[239];
    StCalc(1);
    ActiveSkillSetPlus();
    c.A_ActiveSkill.value = sd[243];
    ClickActiveSkill();
    c.A_ActiveSkillLV.value = sd[244];
    const skillsToLoadSubNum = [66, 326, 159, 384, 324, 131, 88, 197, 394, 395, 405, 429];
    if (c.SkillSubNum && (skillsToLoadSubNum.includes(player.active_skill) || SkillSearch(SKILL.PF_DOUBLECASTING))) c.SkillSubNum.value = sd[245] || 0;

    // ── Monster ───────────────────────────────────────────────────────────
    c.B_Enemy.value = sd[246] || 586;
    LoadEnemySkills();
    c.B_AtkSkill.value = sd[247];
    BClickAtkSkill();
    const skillsToLoadSubNumForMonster = [444, 445, 125, 131];
    if (c.BSkillSubNum && skillsToLoadSubNumForMonster.includes(c.B_AtkSkill.value)) c.BSkillSubNum.value = sd[248] || 0;
    c.B_AtkRange.value = sd[434];
    c.B_AtkElem.value = sd[435];

    // ── UI ────────────────────────────────────────────────────────────────
    c.theme.value = sd[425];
    c.saveDataName.value = sd[500] || "";

    // ── Sync all buff table DOM controls from the SC state we just built ──

    refreshFields();
    StCalc(1);
    StAllCalc();
    ActiveSkillSetPlus();
    calc();
    themes();
    syncBuffDOMFromSC(player);
    syncBuffDOMFromSC(monster);
    syncAdditionalEffectsDOMFromData();
    syncManualEditsDOMFromData(player, 'ID_ARG');
    syncMonsterManualEditsDOMFromData();
}

function delLocal() {
    window.confirm("Do you really want to DELETE selected saved data?") && (slotNum = document.calcForm.A_SaveSlotLocal.value,
        localStorage["Slot" + slotNum] = 0,
        bkcN = slotNum,
        LoadLocal3(),
        document.calcForm.A_SaveSlotLocal.value = bkcN)
}

function StoNx(_) {
    const n_NtoS2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    _ += "";
    for (var n = 0; n <= 61; n++)
        if (_ == n_NtoS2[n])
            return n
}
function StoN2(_) {
    var n = (_ += "").length;
    if (3 == n) {
        var a = 62 * StoNx(_.charAt(0)) * 62;
        a += 62 * StoNx(_.charAt(1)),
            a += StoNx(_.charAt(2))
    } else if (2 == n) {
        a = 62 * StoNx(_.charAt(0));
        a += StoNx(_.charAt(1))
    } else
        a = StoNx(_.charAt(0));
    return a
}

// ─── URLOUT ───────────────────────────────────────────────────────────────────

function URLOUT() {
    calc();

    const passiveSkillLevels = {};
    const availableBuffs = JOB_AVAILABLE_BUFFS[player.status.job_id] || [];
    for (let i = 0; i < availableBuffs.length; i++) {
        const el = document.getElementById("A_skill" + i);
        if (el) passiveSkillLevels[i] = 1 * el.value;
    }

    const data = {
        v: URL_DATA_VERSION,

        job_id: player.status.job_id,
        job_level: player.status.job_level,
        base_level: player.status.base_level,
        adopted: player.status.adopted ? 1 : 0,
        str: player.status.str,
        agi: player.status.agi,
        vit: player.status.vit,
        int: player.status.int,
        dex: player.status.dex,
        luk: player.status.luk,

        equip: player.equip.slice(),
        refine: player.refine.slice(),
        card: player.card.slice(),
        shadow: player.shadow.slice(),
        randopt: player.randopt.slice(),
        enchant: player.enchant.slice(),

        weapon_element: player.weapon_element,
        dual_wield: player.dual_wield ? 1 : 0,
        arrow: player.arrow,

        active_skill_raw: 1 * c.A_ActiveSkill.value,
        active_skill_lv: player.active_skill_lv,
        skill_sub_num: c.SkillSubNum ? 1 * c.SkillSubNum.value : 0,

        passive_skill_levels: passiveSkillLevels,

        // Strip zero vals from SCs to reduce payload size
        player_sc: player.sc.map(sc => {
            const e = { type: sc.type, val1: sc.val1 };
            for (let i = 2; i <= 10; i++)
                if (sc['val' + i]) e['val' + i] = sc['val' + i];
            return e;
        }),

        player_manual_edits: player.manual_edits.map(e => ({ type: e.type, value: e.value })),

        pet: player.pet,
        temp_effect: player.temp_effect.slice(),
        exp_modifiers: {
            party_member_count: player.exp_modifiers.party_member_count,
            battle_manual: player.exp_modifiers.battle_manual,
            job_manual: player.exp_modifiers.job_manual ? 1 : 0,
        },

        monster_id: c.B_Enemy.value,
        monster_sc: monster.sc.map(sc => {
            const e = { type: sc.type, val1: sc.val1 };
            for (let i = 2; i <= 10; i++)
                if (sc['val' + i]) e['val' + i] = sc['val' + i];
            return e;
        }),
        monster_manual_edits: monster.manual_edits.map(e => ({ type: e.type, value: e.value })),
        monster_atk_skill: 1 * c.B_AtkSkill.value,
        monster_atk_range: 1 * c.B_AtkRange.value,
        monster_atk_elem: 1 * c.B_AtkElem.value,
        b_num: 1 * c.B_num.value,
        monster_mhp_percent: 1 * c.EnemyHPPercent.value,

        all_dmg_skills: c.all_dmgSkills.checked ? 1 : 0,
        restrict_jobequip: c.restrict_jobequip.checked ? 1 : 0,
        restrict_lvlequip: c.restrict_lvlequip.checked ? 1 : 0,
        restrict_equipslot: c.restrict_equipslot.checked ? 1 : 0,
        restrict_cardslot: c.restrict_cardslot.checked ? 1 : 0,
        all_card: c.all_card.checked ? 1 : 0,
        theme: 1 * c.theme.value,
        conf01: 1 * c.Conf01.value,
    };

    const compressed = LZString.compressToEncodedURIComponent(JSON.stringify(data));
    const base = location.href.split(/[?#]/)[0];
    const newURL = base + "?d=" + compressed;

    c.URL_TEXT.value = newURL;
    //window.location.replace(newURL);
    window.history.replaceState(null, '', newURL);
    alert("Your current character can be saved in your bookmarks/favorites by pressing Ctrl+D on your keyboard.\n\nEl personaje actual puede guardarse en marcadores/favoritos pulsando Ctrl+D en su teclado.");
}

// ─── URLIN ────────────────────────────────────────────────────────────────────

function URLIN() {
    const otherVal = (typeof otherURL_TEXT !== 'undefined' && otherURL_TEXT.value) || '';
    const urlToParse = (otherVal && (otherVal.includes('?') || otherVal.includes('#')))
        ? otherVal : location.href;

    const hasQuery = urlToParse.includes('?');
    const hasFragment = urlToParse.includes('#');

    if (!hasQuery && !hasFragment) return;

    // ── New format: ?d=<lzstring> ─────────────────────────────────────────
    if (hasQuery) {
        const params = new URLSearchParams(urlToParse.split('?')[1]);
        const compressed = params.get('d');
        if (compressed) {
            let data;
            try {
                const json = LZString.decompressFromEncodedURIComponent(compressed);
                if (!json) throw new Error('Decompression returned null');
                data = JSON.parse(json);
            } catch (e) {
                alert("Failed to load URL data — the link may be corrupted.");
                return;
            }
            if (data.v === URL_DATA_VERSION) {
                loadNewFormat(data);
                return;
            }
        }
    }

    // ── Legacy format: #<positional base-62> ─────────────────────────────
    // Decode the positional string into the DOM and global arrays exactly
    // as before, then translate everything into player/monster objects by
    // synthesizing a flat sd[] array and passing it to loadLegacyFormat.
    legacyURLinDecode(urlToParse);
}

/**
 * Decodes a legacy #-format URL string directly into player/monster objects.
 * No global n_A_Buf* arrays are used — everything goes straight to
 * player.sc, monster.sc, player.manual_edits, monster.manual_edits, etc.
 */
function legacyURLinDecode(urlToParse) {
    const otherVal = (typeof otherURL_TEXT !== 'undefined' && otherURL_TEXT.value) || '';

    let t = [];
    if (otherVal.includes('?')) t = otherVal.split('?');
    else if (otherVal.includes('#')) t = otherVal.split('#');
    else if (urlToParse.includes('?')) t = urlToParse.split('?');
    else if (urlToParse.includes('#')) t = urlToParse.split('#');
    else return;

    const n = t[1].replace(/undefined/g, 'a');
    const A = StoN2(n.substr(0, 1)); // version byte

    // ── Reset ─────────────────────────────────────────────────────────────
    player.sc = [];
    monster.sc = [];
    player.manual_edits = [];
    monster.manual_edits = [];
    player.pet = 0;
    player.temp_effect = [0, 0, 0, 0];
    player.spiritball = 0;

    // ── UI flags ──────────────────────────────────────────────────────────
    if (A >= 6) {
        const uiFlagOffset = n.substr(-16, 1) === '-' ? -74 : -58;
        const l1 = StoN2(n.substr(uiFlagOffset, 1));
        c.all_dmgSkills.checked = Math.floor(l1 % 16 / 8);
        c.restrict_equipslot.checked = Math.floor(l1 % 2 / 1);
        const l2 = StoN2(n.substr(uiFlagOffset + 1, 1));
        c.restrict_cardslot.checked = Math.floor(l2 / 16);
        c.all_card.checked = Math.floor(l2 % 16 / 8);
    }

    // ── Job/stats/equipment (fixed positions, same in all versions) ───────
    c.A_JOB.value = StoN2(n.substr(1, 2));
    ClickJob(StoN2(n.substr(1, 2)));
    c.A_BaseLV.value = StoN2(n.substr(3, 2));
    c.A_JobLV.value = StoN2(n.substr(5, 2));
    c.A_STR.value = StoN2(n.substr(7, 2));
    c.A_AGI.value = StoN2(n.substr(9, 2));
    c.A_VIT.value = StoN2(n.substr(11, 2));
    c.A_DEX.value = StoN2(n.substr(13, 2));
    c.A_INT.value = StoN2(n.substr(15, 2));
    c.A_LUK.value = StoN2(n.substr(17, 2));

    // ASPD pot (packed with weapon element in older versions)
    const elemPot = StoN2(n.substr(19, 1));
    const aspdPotLegacy = Math.floor(elemPot / 10);
    c.A_Weapon_element.value = elemPot % 10;

    // Weapon
    c.A_weapon1.value = StoN2(n.substr(23, 2));
    const weapType1 = StoN2(n.substr(20, 1));
    ClickWeaponType(weapType1);

    // Dual wield (Assassin/AssassinCross only)
    const jobVal = 1 * c.A_JOB.value;
    if ((jobVal === 8 || jobVal === 22) && weapType1 !== 11) {
        ClickWeaponType2(StoN2(n.substr(34, 2)));
    }

    n_A_JobSet();
    if (n_A_JobClass() === JOB.THIEF || n_A_JobClass() === JOB.ARCHER ||
        n_A_JobClass() === JOB.GUNSLINGER)
        c.A_Arrow.value = StoN2(n.substr(22, 1));

    ClickB_Item(StoN2(n.substr(23, 2)));
    c.A_Weapon_refine.value = StoN2(n.substr(25, 1));
    c.A_weapon1_card1.value = StoN2(n.substr(26, 2));
    c.A_weapon1_card2.value = StoN2(n.substr(28, 2));
    c.A_weapon1_card3.value = StoN2(n.substr(30, 2));
    c.A_weapon1_card4.value = StoN2(n.substr(32, 2));

    if (player.dual_wield) {
        c.A_weapon2.value = StoN2(n.substr(34, 2));
        c.A_Weapon2_refine.value = StoN2(n.substr(36, 1));
        c.A_weapon2_card1.value = StoN2(n.substr(37, 2));
        c.A_weapon2_card2.value = StoN2(n.substr(39, 2));
        c.A_weapon2_card3.value = StoN2(n.substr(41, 2));
        c.A_weapon2_card4.value = StoN2(n.substr(43, 2));
    } else {
        c.A_left.value = StoN2(n.substr(34, 2));
        c.A_LEFT_REFINE.value = StoN2(n.substr(36, 1));
        c.A_left_card.value = StoN2(n.substr(37, 2));
    }

    c.A_head1.value = StoN2(n.substr(45, 2));
    c.A_head1_card.value = StoN2(n.substr(47, 2));
    c.A_head2.value = StoN2(n.substr(49, 2));
    c.A_head2_card.value = StoN2(n.substr(51, 2));
    c.A_head3.value = StoN2(n.substr(53, 2));
    c.A_body.value = StoN2(n.substr(55, 2));
    c.A_body_card.value = StoN2(n.substr(57, 2));
    c.A_shoulder.value = StoN2(n.substr(59, 2));
    c.A_shoulder_card.value = StoN2(n.substr(61, 2));
    c.A_shoes.value = StoN2(n.substr(63, 2));
    c.A_shoes_card.value = StoN2(n.substr(65, 2));
    c.A_acces1.value = StoN2(n.substr(67, 2));
    c.A_acces1_card.value = StoN2(n.substr(69, 2));
    c.A_acces2.value = StoN2(n.substr(71, 2));
    c.A_acces2_card.value = StoN2(n.substr(73, 2));
    c.A_HEAD_REFINE.value = StoN2(n.substr(75, 1));
    c.A_BODY_REFINE.value = StoN2(n.substr(76, 1));
    c.A_SHOULDER_REFINE.value = StoN2(n.substr(77, 1));
    c.A_SHOES_REFINE.value = StoN2(n.substr(78, 1));

    var l = StoN2(n.substr(79, 1));
    c.A_adopted.checked = Math.floor(l / 16);

    // Old card ID remapping (versions < 4)
    if (A < 4) {
        const remapBody = { 75: 139, 128: 131, 129: 132, 130: 133, 131: 134, 132: 128, 133: 135, 134: 136, 135: 137, 136: 138, 137: 75, 138: 140 };
        const remapShoes = { 140: 129 };
        const remapAcc = { 75: 139, 141: 142, 142: 143, 143: 144, 144: 145, 145: 146, 146: 147, 147: 148, 148: 149, 149: 150, 150: 151, 151: 152, 152: 130 };
        let o = StoN2(n.substr(57, 2));
        c.A_body_card.value = remapBody[o] ?? o;
        o = StoN2(n.substr(61, 2));
        c.A_shoulder_card.value = o === 139 ? 141 : o;
        o = StoN2(n.substr(65, 2));
        c.A_shoes_card.value = remapShoes[o] ?? o;
        o = StoN2(n.substr(69, 2));
        c.A_acces1_card.value = remapAcc[o] ?? o;
        o = StoN2(n.substr(73, 2));
        c.A_acces2_card.value = remapAcc[o] ?? o;
    }

    // ── Variable-position section — S tracks current position ─────────────
    let S, u, i_var, s;

    if (A < 4) {
        // VERY VERY old format that is VERY likely not used anymore
    } else {
        // A >= 4: modern legacy format
        u = StoN2(n.substr(88, 1));
        for (var r = 0; r < u; r++)
            document.getElementById("A_skill" + r).value = StoN2(n.substr(89 + r, 1));

        SetSupportSkillsVisibility(0);
        S = 89 + r;

        // Party buffs (BUF2)
        if (1 === StoN2(n.substr(S, 1))) {
            if(StoN2(n.substr(S + 1, 1))) sc_start(player, SC.BLESSING, StoN2(n.substr(S + 1, 1)) > 5 ? StoN2(n.substr(S + 1, 1)) / 2 : StoN2(n.substr(S + 1, 1)));
            if(StoN2(n.substr(S + 2, 1))) sc_start(player, SC.INCREASEAGI, StoN2(n.substr(S + 2, 1)) > 5 ? StoN2(n.substr(S + 2, 1)) / 2 : StoN2(n.substr(S + 2, 1)));
            if(StoN2(n.substr(S + 3, 1))) sc_start(player, SC.ANGELUS, StoN2(n.substr(S + 3, 1)));
            if(StoN2(n.substr(S + 4, 1))) sc_start(player, SC.WINDWALK, StoN2(n.substr(S + 4, 1)));
            if(StoN2(n.substr(S + 5, 1))) sc_start(player, SC.AUTOGUARD, StoN2(n.substr(S + 5, 1)));
            if(StoN2(n.substr(S + 6, 1))) sc_start(player, SC.SHIELDREFLECT, StoN2(n.substr(S + 6, 1)));
            if(Math.floor(StoN2(n.substr(S + 7, 1)) / 6)) sc_start(player, SC.IMPOSITIO, Math.floor(StoN2(n.substr(S + 7, 1)) / 6));
            if((StoN2(n.substr(S + 7, 1)) % 6) == 1) sc_start(player, SC.ADRENALINE);
            else if((StoN2(n.substr(S + 7, 1)) % 6) == 2) sc_start(player, SC.ADRENALINE2);
            if(Math.floor(StoN2(n.substr(S + 8, 1)) / 6)) sc_start(player, SC.SUFFRAGIUM, Math.floor(StoN2(n.substr(S + 8, 1)) / 6));
            if(StoN2(n.substr(S + 8, 1)) % 6) sc_start(player, SC.PROVIDENCE, StoN2(n.substr(S + 8, 1)) % 6);
            if(Math.floor(StoN2(n.substr(S + 9, 1)) / 6)) player.spiritball = Math.floor(StoN2(n.substr(S + 9, 1)) / 6);
            if(StoN2(n.substr(S + 9, 1)) % 6) sc_start(player, SC.DEFENDER, StoN2(n.substr(S + 9, 1)) % 6);
            l = StoN2(n.substr(S + 10, 1));
            if(Math.floor(l / 16)) sc_start(player, SC.GLORIA);
            if(Math.floor(l % 16 / 8)) sc_start(player, SC.ASSUMPTIO);
            if(Math.floor(l % 8 / 4)) sc_start(player, SC.WEAPONPERFECTION);
            if(Math.floor(l % 4 / 2)) sc_start(player, SC.OVERTHRUST);
            if(Math.floor(l % 2 / 1)) sc_start(player, SC.INCALLSTATUS, 20);
            l = StoN2(n.substr(S + 11, 1));
            if(Math.floor(l / 16)) sc_start(player, SC.INCMHPRATE, 100);
            if(Math.floor(l % 16 / 8)) sc_start(player, SC.INCMSPRATE, 100);
            if(Math.floor(l % 8 / 4)) sc_start(player, SC.INCATKRATE, 100);
            if(Math.floor(l % 4 / 2)) { sc_start(player, SC.INCHIT, 50); sc_start(player, SC.INCFLEE, 50); }
            if(Math.floor(l % 2 / 1)) sc_start(player, SC.INCDEFRATE, 25);
            S += 11;
        }

        SetMonsterDebuffsVisibility(0);
        S += 1;
        if (1 === StoN2(n.substr(S, 1))) {
            _decodeLegacyMonsterDebuf(n, S);
            S += 9;
        }

        SetMonsterBuffsVisibility(0);
        S += 1;
        if (1 === StoN2(n.substr(S, 1))) {
            _decodeLegacyMonsterBuf(n, S, A);
            S += (A >= 5 ? 11 : 6);
        }

        // Dance/guild/misc/food (flags byte)
        s = [0, 0, 0, 0, 0];
        l = StoN2(n.substr(S + 1, 1));
        s[0] = Math.floor(l / 16); s[1] = Math.floor(l % 16 / 8); s[2] = Math.floor(l % 8 / 4); s[3] = Math.floor(l % 4 / 2); s[4] = Math.floor(l % 2 / 1);
        S += 1;
        SetDanceSkillsVisibility(0);
        if (s[0]) S = _decodeLegacyBuf3Dance(n, S);
        SetGuildSkillsVisibility(0);
        if (s[1]) S = _decodeLegacyBuf3Guild(n, S);
        SetMiscEffectsVisibility(0);
        if (s[3]) S = _decodeLegacyBuf6Misc(n, S);
        SetFoodEffectsVisibility(0);
        if (s[4]) S = _decodeLegacyBuf7Food(n, S, A);

        SetAdditionalEffectsVisibility(0);
        S += 1;
        if (1 === StoN2(n.substr(S, 1))) {
            player.pet = StoN2(n.substr(S + 1, 2));

            player.temp_effect[0] = StoN2(n.substr(S + 7, 2)); 
            player.temp_effect[1] = StoN2(n.substr(S + 9, 2)); 
            player.temp_effect[2] = StoN2(n.substr(S + 11, 2)); 
            player.temp_effect[3] = StoN2(n.substr(S + 13, 2)); 
            player.exp_modifiers.party_member_count = StoN2(n.substr(S + 15, 1)); 
            l = StoN2(n.substr(S + 18, 1)); 
            if(Math.floor(l / 16)) player.exp_modifiers.job_manual = true;
            S += 18;
        }

        if (A >= 6) {
            SetPlayerManualEditsVisibility(0);
            S += 1;
            if (1 === StoN2(n.substr(S, 1))) {
                if(StoN2(n.substr(S + 25, 1))) manualedits_start(player, 290, StoN2(n.substr(S + 25, 1))); 
                if(StoN2(n.substr(S + 26, 2))) manualedits_start(player, 295, StoN2(n.substr(S + 26, 2)));
                if(StoN2(n.substr(S + 28, 1))) manualedits_start(player, 78, StoN2(n.substr(S + 28, 1)));
                if(StoN2(n.substr(S + 46, 3))) manualedits_start(player, 13, StoN2(n.substr(S + 46, 3)));

                if(A >= 7) {
                    if(StoN2(n.substr(S + 49, 2))) manualedits_start(player, 15, StoN2(n.substr(S + 49, 2)));
                    if(StoN2(n.substr(S + 51, 2))) manualedits_start(player, 14, StoN2(n.substr(S + 51, 2)));
                    if(StoN2(n.substr(S + 53, 2))) manualedits_start(player, 16, StoN2(n.substr(S + 53, 2)));
                    if(StoN2(n.substr(S + 55, 2))) manualedits_start(player, 18, StoN2(n.substr(S + 55, 2)));
                    if(StoN2(n.substr(S + 57, 2))) manualedits_start(player, 19, StoN2(n.substr(S + 57, 2)));
                    if(StoN2(n.substr(S + 59, 2))) manualedits_start(player, 8, StoN2(n.substr(S + 59, 2)));
                    if(StoN2(n.substr(S + 61, 2))) manualedits_start(player, 9, StoN2(n.substr(S + 61, 2)));
                    if(StoN2(n.substr(S + 63, 2))) manualedits_start(player, 11, StoN2(n.substr(S + 63, 2)));
                    if(StoN2(n.substr(S + 65, 2))) manualedits_start(player, 10, StoN2(n.substr(S + 65, 2)));
                    if(StoN2(n.substr(S + 67, 2))) manualedits_start(player, 17, StoN2(n.substr(S + 67, 2)));
                    if(StoN2(n.substr(S + 69, 2))) manualedits_start(player, 80, StoN2(n.substr(S + 69, 2)));
                    if(StoN2(n.substr(S + 71, 2))) manualedits_start(player, 88, StoN2(n.substr(S + 71, 2)));
                    if(StoN2(n.substr(S + 73, 2))) manualedits_start(player, 89, StoN2(n.substr(S + 73, 2)));
                    if(StoN2(n.substr(S + 75, 2))) manualedits_start(player, 12, StoN2(n.substr(S + 75, 2)));
                    // S + 77
                    // S + 79
                    if(StoN2(n.substr(S + 81, 2))) manualedits_start(player, 1, StoN2(n.substr(S + 81, 2)));
                    if(StoN2(n.substr(S + 83, 2))) manualedits_start(player, 2, StoN2(n.substr(S + 83, 2)));
                    if(StoN2(n.substr(S + 85, 2))) manualedits_start(player, 3, StoN2(n.substr(S + 85, 2)));
                    if(StoN2(n.substr(S + 87, 2))) manualedits_start(player, 4, StoN2(n.substr(S + 87, 2)));
                    if(StoN2(n.substr(S + 89, 2))) manualedits_start(player, 5, StoN2(n.substr(S + 89, 2)));
                    if(StoN2(n.substr(S + 91, 2))) manualedits_start(player, 6, StoN2(n.substr(S + 91, 2)));
                    // S + 93
                    if(StoN2(n.substr(S + 95, 2))) manualedits_start(player, 354, StoN2(n.substr(S + 95, 2)));
                    if(StoN2(n.substr(S + 97, 2))) manualedits_start(player, 86, StoN2(n.substr(S + 97, 2)));
                    if(StoN2(n.substr(S + 99, 2))) manualedits_start(player, 25, StoN2(n.substr(S + 99, 2)));
                    if(StoN2(n.substr(S + 101, 2))) manualedits_start(player, 70, StoN2(n.substr(S + 101, 2)));
                    S += 106;
                } else {
                    if(StoN2(n.substr(S + 49, 2))) manualedits_start(player, 15, StoN2(n.substr(S + 49, 2)));
                    if(StoN2(n.substr(S + 51, 2))) manualedits_start(player, 14, StoN2(n.substr(S + 51, 2)));
                    if(StoN2(n.substr(S + 53, 2))) manualedits_start(player, 16, StoN2(n.substr(S + 53, 2)));
                    if(StoN2(n.substr(S + 55, 2))) manualedits_start(player, 18, StoN2(n.substr(S + 55, 2)));
                    if(StoN2(n.substr(S + 57, 2))) manualedits_start(player, 19, StoN2(n.substr(S + 57, 2)));
                    if(StoN2(n.substr(S + 59, 2))) manualedits_start(player, 8, StoN2(n.substr(S + 59, 2)));
                    if(StoN2(n.substr(S + 61, 2))) manualedits_start(player, 9, StoN2(n.substr(S + 61, 2)));
                    if(StoN2(n.substr(S + 63, 2))) manualedits_start(player, 11, StoN2(n.substr(S + 63, 2)));
                    if(StoN2(n.substr(S + 65, 2))) manualedits_start(player, 10, StoN2(n.substr(S + 65, 2)));
                    if(StoN2(n.substr(S + 67, 2))) manualedits_start(player, 17, StoN2(n.substr(S + 67, 2)));
                    if(StoN2(n.substr(S + 69, 2))) manualedits_start(player, 80, StoN2(n.substr(S + 69, 2)));
                    if(StoN2(n.substr(S + 71, 2))) manualedits_start(player, 88, StoN2(n.substr(S + 71, 2)));
                    if(StoN2(n.substr(S + 73, 2))) manualedits_start(player, 89, StoN2(n.substr(S + 73, 2)));
                    if(StoN2(n.substr(S + 75, 2))) manualedits_start(player, 12, StoN2(n.substr(S + 75, 2)));
                    // S + 77
                    // S + 79
                    if(StoN2(n.substr(S + 81, 2))) manualedits_start(player, 1, StoN2(n.substr(S + 81, 2)));
                    if(StoN2(n.substr(S + 83, 2))) manualedits_start(player, 2, StoN2(n.substr(S + 83, 2)));
                    if(StoN2(n.substr(S + 85, 2))) manualedits_start(player, 3, StoN2(n.substr(S + 85, 2)));
                    if(StoN2(n.substr(S + 87, 2))) manualedits_start(player, 4, StoN2(n.substr(S + 87, 2)));
                    if(StoN2(n.substr(S + 89, 2))) manualedits_start(player, 5, StoN2(n.substr(S + 89, 2)));
                    if(StoN2(n.substr(S + 91, 2))) manualedits_start(player, 6, StoN2(n.substr(S + 91, 2)));
                    // S + 93
                    if(StoN2(n.substr(S + 95, 2))) manualedits_start(player, 354, StoN2(n.substr(S + 95, 2)));
                    if(StoN2(n.substr(S + 97, 2))) manualedits_start(player, 86, StoN2(n.substr(S + 97, 2)));
                    S += 98;
                }
            }

            // Monster manual edits (n_B_manual)
            SetMonsterManualEditsVisibility(0);
            S += 1;
            if (1 === StoN2(n.substr(S, 1))) {
                if(StoN2(n.substr(S + 1, 2))) manualedits_start(monster, 604, StoN2(n.substr(S + 1, 2)));
                if(StoN2(n.substr(S + 9, 2))) manualedits_start(monster, 602, StoN2(n.substr(S + 9, 2)));
                if(StoN2(n.substr(S + 11, 2))) manualedits_start(monster, 78, StoN2(n.substr(S + 11, 2)));
                if(StoN2(n.substr(S + 13, 2))) manualedits_start(monster, 71, StoN2(n.substr(S + 13, 2)));

                if(StoN2(n.substr(S + 15, 3))) manualedits_start(monster, 13, StoN2(n.substr(S + 15, 3)));
                if(StoN2(n.substr(S + 18, 2))) manualedits_start(monster, 15, StoN2(n.substr(S + 18, 2)));
                if(StoN2(n.substr(S + 20, 2))) manualedits_start(monster, 18, StoN2(n.substr(S + 20, 2)));
                if(StoN2(n.substr(S + 22, 2))) manualedits_start(monster, 19, StoN2(n.substr(S + 22, 2)));
                if(StoN2(n.substr(S + 24, 2))) manualedits_start(monster, 8, StoN2(n.substr(S + 24, 2)));
                if(StoN2(n.substr(S + 26, 2))) manualedits_start(monster, 9, StoN2(n.substr(S + 26, 2)));
                //if(StoN2(n.substr(S + 28, 2))) manualedits_start(monster, 17, StoN2(n.substr(S + 28, 2)));
                //if(StoN2(n.substr(S + 30, 2))) manualedits_start(monster, 80, StoN2(n.substr(S + 30, 2)));
                if(StoN2(n.substr(S + 32, 3))) manualedits_start(monster, 17, StoN2(n.substr(S + 32, 3)));
                if(StoN2(n.substr(S + 35, 2))) manualedits_start(monster, 80, StoN2(n.substr(S + 35, 2)));
                if(StoN2(n.substr(S + 37, 3))) manualedits_start(monster, 88, StoN2(n.substr(S + 37, 3)));
                //if(StoN2(n.substr(S + 40, 3))) manualedits_start(monster, 4, StoN2(n.substr(S + 40, 3)));
                //if(StoN2(n.substr(S + 43, 2))) manualedits_start(monster, 88, StoN2(n.substr(S + 43, 2)));
                if(StoN2(n.substr(S + 45, 2))) manualedits_start(monster, 2, StoN2(n.substr(S + 45, 2)));
                if(StoN2(n.substr(S + 47, 2))) manualedits_start(monster, 3, StoN2(n.substr(S + 47, 2)));
                if(StoN2(n.substr(S + 49, 2))) manualedits_start(monster, 4, StoN2(n.substr(S + 49, 2)));
                if(StoN2(n.substr(S + 51, 2))) manualedits_start(monster, 5, StoN2(n.substr(S + 51, 2)));
                if(StoN2(n.substr(S + 53, 2))) manualedits_start(monster, 6, StoN2(n.substr(S + 53, 2)));
                if(StoN2(n.substr(S + 55, 3))) manualedits_start(monster, 87, StoN2(n.substr(S + 55, 3)));
                if(StoN2(n.substr(S + 58, 2))) manualedits_start(monster, 354, StoN2(n.substr(S + 58, 2)));
                //if(StoN2(n.substr(S + 60, 2))) manualedits_start(monster, 602, StoN2(n.substr(S + 60, 2)));
                S += 61;
            }
        }

        // Active skill / enemy
        c.Conf01.value = StoN2(n.substr(S + 1, 2));
        c.B_num.value = StoN2(n.substr(S + 3, 1));
        c.A8_Skill14.value = StoN2(n.substr(S + 4, 1));
        l = StoN2(n.substr(S + 7, 1));
        StCalc(1);
        ActiveSkillSetPlus();
        c.A_ActiveSkill.value = StoN2(n.substr(S + 8, 2));
        ClickActiveSkill();
        c.A_ActiveSkillLV.value = StoN2(n.substr(S + 10, 1));
        const skillsToLoadSubNum = [66, 326, 159, 384, 324, 131, 88, 197, 394, 395, 405, 429];
        if (c.SkillSubNum && (skillsToLoadSubNum.includes(player.active_skill) || SkillSearch(SKILL.PF_DOUBLECASTING))) c.SkillSubNum.value = StoN2(n.substr(S + 11, 3));

        // Double cast special case
        const doubleCastIndex = JOB_AVAILABLE_BUFFS[player.status.job_id].indexOf(441);
        if (doubleCastIndex !== -1) {
            const dcEl = document.getElementById("A_skill" + doubleCastIndex);
            if (dcEl && 1 * dcEl.value > 0) {
                const isCompatibleBolt = [51, 54, 56, 540, 541, 542].includes(player.active_skill);
                if (isCompatibleBolt) {
                    const avg = 1 * dcEl.value + 3;
                    myInnerHtml("AASkill", 'Double Bolt chance: <select name="SkillSubNum" onChange="calc()"></select>', 0);
                    c.SkillSubNum.options[0] = new Option("No chance (0%)", 0);
                    c.SkillSubNum.options[1] = new Option("Average chance (" + 10 * avg + "%)", avg);
                    c.SkillSubNum.options[2] = new Option("Max chance (100%)", 10);
                    c.SkillSubNum.value = StoN2(n.substr(S + 11, 3));
                }
            }
        }

        c.B_Enemy.value = StoN2(n.substr(S + 14, 2));
        calc();
        LoadEnemySkills();
        c.B_AtkSkill.value = StoN2(n.substr(S + 16, 2));
        BClickAtkSkill();
        const skillsToLoadSubNumForMonster = [444, 445, 125, 131];
        if (c.BSkillSubNum && skillsToLoadSubNumForMonster.includes(c.B_AtkSkill.value)) c.BSkillSubNum.value = StoN2(n.substr(S + 18, 3));
        if (A >= 6) {
            c.B_AtkRange.value = StoN2(n.substr(S + 21, 1));
            c.B_AtkElem.value = StoN2(n.substr(S + 22, 1));
            c.theme.value = StoN2(n.substr(S + 23, 1));
        }
    }

    // ── Tail section: randopt, shadow, enchants (detected by sentinel '-') ─
    if (n.substr(-23, 1) !== '-') {
        if (n.substr(-16, 1) !== '-') {
            // No shadow/enchant section
            for (let g = 0, x = -56; g <= 27; g++, x += 2)
                player.randopt[g] = StoN2(n.substr(x, 2));
            player.shadow = [0, 22, 0, 44, 0, 0];
        } else {
            // Shadow section, no enchant
            for (let g = 0, x = -72; g <= 27; g++, x += 2)
                player.randopt[g] = StoN2(n.substr(x, 2));
            for (let g = 0, x = -15; g <= 5; g++, x += 2)
                player.shadow[g] = StoN2(n.substr(x, 2));

            l = StoN2(n.substr(-3, 1));
            if (Math.floor(l / 16)) sc_start(player, SC.WHISTLE_SRS);     
            if (Math.floor(l % 16 / 8)) sc_start(player, SC.ASSNCROS_SRS);   
            if (Math.floor(l % 8 / 4)) sc_start(player, SC.FORTUNE_SRS);    
            if (Math.floor(l % 4 / 2)) sc_start(player, SC.HUMMING_SRS);    
        }
        for (let g = 0; g <= 10; g++) player.enchant[g] = 0;
    } else {
        // Full tail: randopt + shadow + enchant
        for (let g = 0, x = -95; g <= 27; g++, x += 2)
            player.randopt[g] = StoN2(n.substr(x, 2));
        for (let g = 0, x = -38; g <= 5; g++, x += 2)
            player.shadow[g] = StoN2(n.substr(x, 2));
        l = StoN2(n.substr(-26, 1));
        if (Math.floor(l / 16)) sc_start(player, SC.WHISTLE_SRS);     
        if (Math.floor(l % 16 / 8)) sc_start(player, SC.ASSNCROS_SRS);    
        if (Math.floor(l % 8 / 4)) sc_start(player, SC.FORTUNE_SRS);    
        if (Math.floor(l % 4 / 2)) sc_start(player, SC.HUMMING_SRS);   
        for (let g = 0, x = -22; g <= 10; g++, x += 2)
            player.enchant[g] = StoN2(n.substr(x, 2));
    }

    // Apply randopt/shadow to DOM
    reloadRandOpt();
    reloadShadowEquip();
    reloadEnchant();

    // ── Final sync: DOM → player object → SC → display ────────────────────
    PopulatePlayerData();
    calc();
    themes();
    syncBuffDOMFromSC(player);
    syncBuffDOMFromSC(monster);
    syncAdditionalEffectsDOMFromData();
    syncManualEditsDOMFromData(player, 'ID_ARG');
    syncMonsterManualEditsDOMFromData();
}

// ── Helper decoders ───────────────────────────────────────────────────────────

function _decodeLegacyMonsterDebuf(n, S) {
    if(StoN2(n.substr(S + 1, 1))) sc_start(monster, SC.PROVOKE, StoN2(n.substr(S + 1, 1)));
    if(Math.floor(StoN2(n.substr(S + 2, 1)) / 6)) sc_start(monster, SC.QUAGMIRE, Math.floor(StoN2(n.substr(S + 2, 1)) / 6));
    if(StoN2(n.substr(S + 2, 1)) % 6) sc_start(monster, SC.MINDBREAKER, StoN2(n.substr(S + 2, 1)) % 6);
    let l = StoN2(n.substr(S + 3, 1));
    if(Math.floor(l / 16)) sc_start(monster, SC.POISON);
    if(Math.floor(l % 16 / 8)) sc_start(monster, SC.BLIND);
    if(Math.floor(l % 8 / 4)) sc_start(monster, SC.FREEZE);
    if(Math.floor(l % 4 / 2)) sc_start(monster, SC.BLESSING);
    if(Math.floor(l % 2 / 1)) sc_start(monster, SC.AETERNA);
    l = StoN2(n.substr(S + 4, 1));
    if(Math.floor(l / 16)) sc_start(monster, SC.STUN);
    if(Math.floor(l % 16 / 8)) sc_start(monster, SC.SLEEP);
    if(Math.floor(l % 8 / 4)) sc_start(monster, SC.STONE);
    if(Math.floor(l % 4 / 2)) sc_start(monster, SC.CURSE);
    if(Math.floor(l % 2 / 1)) sc_start(monster, SC.DONTFORGETME);
    if(StoN2(n.substr(S + 5, 1))) sc_start(monster, SC.DECREASEAGI, StoN2(n.substr(S + 5, 1)));
    if(StoN2(n.substr(S + 6, 1))) sc_start(monster, SC.CRUCIS, StoN2(n.substr(S + 6, 1)));
    l = StoN2(n.substr(S + 7, 1));
    if(Math.floor(l / 16)) sc_start(monster, SC.STRIPWEAPON);
    if(Math.floor(l % 16 / 8)) sc_start(monster, SC.STRIPSHIELD);
    if(Math.floor(l % 8 / 4)) sc_start(monster, SC.STRIPARMOR);
    if(Math.floor(l % 4 / 2)) sc_start(monster, SC.STRIPHELM);
    if(Math.floor(l % 2 / 1)) sc_start(monster, SC.SPIDERWEB);
    l = StoN2(n.substr(S + 8, 1));
    if(Math.floor(l / 16)) sc_start(monster, SC.ETERNALCHAOS);
    if(Math.floor(l % 16 / 8)) sc_start(monster, SC.SKA, Math.floor(l % 16 / 8));
    //if(Math.floor(l % 8 / 4)) sc_start(monster, SC.SKE);
    if(Math.floor(StoN2(n.substr(S + 9, 1)) / 6)) sc_start(monster, SC.ELEMENTALCHANGE, Math.floor(StoN2(n.substr(S + 9, 1)) / 6), 1);
    //if(StoN2(n.substr(S + 9, 1)) % 6) sc_start(monster, SC.REDUCE_DEFRATE, StoN2(n.substr(S + 9, 1)) % 6 === 1 ? 50 : 75);
}

function _decodeLegacyMonsterBuf(n, S, A) {
    if(StoN2(n.substr(S + 1, 1))) sc_start(monster, SC.INCREASEAGI, StoN2(n.substr(S + 1, 1)));
    let l = StoN2(n.substr(S + 2, 1));
    if(Math.floor(l / 16)) sc_start(monster, SC.ASSUMPTIO);
    if(Math.floor(l % 16 / 8)) sc_start(monster, SC.ADRENALINE);
    if(Math.floor(l % 8 / 4)) sc_start(monster, SC.MAXIMIZEPOWER);
    if(Math.floor(l % 4 / 2)) sc_start(monster, SC.POWERUP);
    if(Math.floor(l % 2 / 1)) sc_start(monster, SC.KEEPING);
    if(StoN2(n.substr(S + 3, 1))) sc_start(monster, SC.ELEMENTALCHANGE, StoN2(n.substr(S + 3, 1)) > 9 ? Math.floor(StoN2(n.substr(S + 3, 1)) / 10) : 0, StoN2(n.substr(S + 3, 1)) % 10);
    if(Math.floor(StoN2(n.substr(S + 5, 1)) / 6)) sc_start(monster, SC.ARMORCHANGE, Math.floor(StoN2(n.substr(S + 5, 1)) / 6), SKILL.NPC_STONESKIN);
    if(StoN2(n.substr(S + 5, 1)) % 6) sc_start(monster, SC.ARMORCHANGE, StoN2(n.substr(S + 5, 1)) % 6, SKILL.NPC_ANTIMAGIC);
    if(StoN2(n.substr(S + 6, 1))) sc_start(monster, SC.AGIUP, StoN2(n.substr(S + 6, 1)));
    if(A >= 5) {
        if(StoN2(n.substr(S + 7, 1))) sc_start(monster, SC.ANGELUS, StoN2(n.substr(S + 7, 1)));
        if(StoN2(n.substr(S + 8, 1))) sc_start(monster, SC.AUTOGUARD, StoN2(n.substr(S + 8, 1)));
        if(StoN2(n.substr(S + 9, 1))) sc_start(monster, SC.SHIELDREFLECT, StoN2(n.substr(S + 9, 1)));
        if(StoN2(n.substr(S + 10, 1))) sc_start(monster, SC.ARMOR, StoN2(n.substr(S + 10, 1)));
        if(StoN2(n.substr(S + 11, 1))) sc_start(monster, SC.ENERGYCOAT, StoN2(n.substr(S + 11, 1)));
    }
}

function _decodeLegacyBuf3Dance(n, S) {
    if(StoN2(n.substr(S + 1, 1))) sc_start(player, SC.WHISTLE, StoN2(n.substr(S + 1, 1)), StoN2(n.substr(S + 25, 1)), StoN2(n.substr(S + 23, 2)), 60); // luk stored elsewhere where its REALLY annoying to pull from so just default to 60
    if(StoN2(n.substr(S + 2, 1))) sc_start(player, SC.ASSNCROS, StoN2(n.substr(S + 2, 1)), StoN2(n.substr(S + 28, 1)), StoN2(n.substr(S + 26, 2)));
    if(StoN2(n.substr(S + 3, 1))) sc_start(player, SC.POEMBRAGI, StoN2(n.substr(S + 3, 1)), StoN2(n.substr(S + 33, 1)), StoN2(n.substr(S + 29, 2)), StoN2(n.substr(S + 31, 2)));
    if(StoN2(n.substr(S + 4, 1))) sc_start(player, SC.APPLEIDUN, StoN2(n.substr(S + 4, 1)), StoN2(n.substr(S + 36, 1)), StoN2(n.substr(S + 34, 2)));
    if(StoN2(n.substr(S + 5, 1))) sc_start(player, SC.HUMMING, StoN2(n.substr(S + 5, 1)), StoN2(n.substr(S + 39, 1)), StoN2(n.substr(S + 37, 2)));
    if(StoN2(n.substr(S + 6, 1))) sc_start(player, SC.FORTUNE, StoN2(n.substr(S + 6, 1)), StoN2(n.substr(S + 42, 1)), StoN2(n.substr(S + 40, 2)));
    if(StoN2(n.substr(S + 7, 1))) sc_start(player, SC.SERVICE4U, StoN2(n.substr(S + 7, 1)), StoN2(n.substr(S + 45, 1)), StoN2(n.substr(S + 43, 2)));
    if(Math.floor(StoN2(n.substr(S + 8, 1)) / 6)) sc_start(player, SC.SIEGFRIED, Math.floor(StoN2(n.substr(S + 8, 1)) / 6));
    if(StoN2(n.substr(S + 8, 1)) % 6) sc_start(player, SC.RICHMANKIM, StoN2(n.substr(S + 8, 1)) % 6);
    if(Math.floor(StoN2(n.substr(S + 9, 1)) / 6)) sc_start(player, SC.DRUMBATTLE, Math.floor(StoN2(n.substr(S + 9, 1)) / 6));
    if(StoN2(n.substr(S + 9, 1)) % 6) sc_start(player, SC.NIBELUNGEN, StoN2(n.substr(S + 9, 1)) % 6);
    if(Math.floor(StoN2(n.substr(S + 10, 1)) / 16)) sc_start(player, SC.MARIONETTE, Math.floor(StoN2(n.substr(S + 10, 1)) % 16 / 8), StoN2(n.substr(S + 11, 2)), StoN2(n.substr(S + 13, 2)), StoN2(n.substr(S + 15, 2)), StoN2(n.substr(S + 17, 2)), StoN2(n.substr(S + 19, 2)), StoN2(n.substr(S + 21, 2)));
    S += 45;
    return S;
}

function _decodeLegacyBuf3Guild(n, S) {
    l = StoN2(n.substr(S + 1, 1));
    if (Math.floor(l / 16)) sc_start(player, SC.BATTLEORDERS);
    if(Math.floor(StoN2(n.substr(S + 2, 1)) / 6)) sc_start(player, SC.LEADERSHIP, Math.floor(StoN2(n.substr(S + 2, 1)) / 6));
    if(StoN2(n.substr(S + 2, 1)) % 6) sc_start(player, SC.GLORYWOUNDS, StoN2(n.substr(S + 2, 1)) % 6);
    if(Math.floor(StoN2(n.substr(S + 3, 1)) / 6)) sc_start(player, SC.SOULCOLD, Math.floor(StoN2(n.substr(S + 3, 1)) / 6));
    if(StoN2(n.substr(S + 3, 1)) % 6) sc_start(player, SC.HAWKEYES, StoN2(n.substr(S + 3, 1)) % 6);
    
    S += 3;
    return S;
}

function _decodeLegacyBuf6Misc(n, S) {
    if(StoN2(n.substr(S + 1, 1))) sc_start(player, SC.PROVOKE, StoN2(n.substr(S + 1, 1)));
    if(StoN2(n.substr(S + 2, 1))) sc_start(player, SC.DECREASEAGI, StoN2(n.substr(S + 2, 1)));
    if(Math.floor(StoN2(n.substr(S + 3, 1)) / 6) == 0) sc_start(player, SC.VOLCANO, StoN2(n.substr(S + 3, 1)) % 6);
    else if(Math.floor(StoN2(n.substr(S + 3, 1)) / 6) == 1) sc_start(player, SC.DELUGE, StoN2(n.substr(S + 3, 1)) % 6);
    else if(Math.floor(StoN2(n.substr(S + 3, 1)) / 6) == 2) sc_start(player, SC.WHIRLWIND, StoN2(n.substr(S + 3, 1)) % 6);
    //if(Math.floor(StoN2(n.substr(S + 4, 1)) / 6)) 
    if(StoN2(n.substr(S + 4, 1)) % 6) sc_start(player, SC.MINDBREAKER, StoN2(n.substr(S + 4, 1)) % 6);
    if(Math.floor(StoN2(n.substr(S + 5, 1)) / 6)) sc_start(player, SC.CRITICALWOUND, Math.floor(StoN2(n.substr(S + 5, 1)) / 6));
    if(StoN2(n.substr(S + 5, 1)) % 6) sc_start(player, SC.QUAGMIRE, StoN2(n.substr(S + 5, 1)) % 6);
    let l = StoN2(n.substr(S + 6, 1));
    if(Math.floor(l / 16)) sc_start(player, SC.FOGWALL);
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.BENEDICTIO);
    if(Math.floor(l % 8 / 4)) sc_start(player, SC.WATK_ELEMENT, ELE.FIRE, 20);
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.CHANGEUNDEAD);
    if(Math.floor(l % 2 / 1)) sc_start(player, SC.NOCRIT);
    l = StoN2(n.substr(S + 7, 1));
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.BLIND);
    if(Math.floor(l % 8 / 4)) sc_start(player, SC.STUN);
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.STONE);
    if(Math.floor(l % 2 / 1)) sc_start(player, SC.SLEEP);
    l = StoN2(n.substr(S + 8, 1));
    if(Math.floor(l / 16)) sc_start(player, SC.FREEZE);
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.AETERNA);
    if(Math.floor(l % 8 / 4)) sc_start(player, SC.BLEEDING);
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.POISON);
    if(Math.floor(l % 2 / 1)) sc_start(player, SC.CURSE);

    S += 8;
    return S;
}

function _decodeLegacyBuf7Food(n, S, A) {
    if(StoN2(n.substr(S + 1, 1))) sc_start(player, SC.FOOD_STR_CASH, StoN2(n.substr(S + 1, 1)));
    if(StoN2(n.substr(S + 2, 1))) sc_start(player, SC.FOOD_AGI_CASH, StoN2(n.substr(S + 2, 1)));
    if(StoN2(n.substr(S + 3, 1))) sc_start(player, SC.FOOD_VIT_CASH, StoN2(n.substr(S + 3, 1)));
    if(StoN2(n.substr(S + 4, 1))) sc_start(player, SC.FOOD_INT_CASH, StoN2(n.substr(S + 4, 1)));
    if(StoN2(n.substr(S + 5, 1))) sc_start(player, SC.FOOD_DEX_CASH, StoN2(n.substr(S + 5, 1)));
    if(StoN2(n.substr(S + 6, 1))) sc_start(player, SC.FOOD_LUK_CASH, StoN2(n.substr(S + 6, 1)));
    if(Math.floor(StoN2(n.substr(S + 7, 1)) / 6) == 1) sc_start(player, SC.ASPDPOTION0);
    else if(Math.floor(StoN2(n.substr(S + 7, 1)) / 6) == 2) sc_start(player, SC.ASPDPOTION1);
    else if(Math.floor(StoN2(n.substr(S + 7, 1)) / 6) == 3) sc_start(player, SC.ASPDPOTION2);
    else if(Math.floor(StoN2(n.substr(S + 7, 1)) / 6) == 4) sc_start(player, SC.ASPDPOTION3);
    let l = StoN2(n.substr(S + 9, 1));
    if(Math.floor(l / 16)) sc_start(player, SC.SESAME_PASTRY, 10);
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.HONEY_PASTRY, 10);
    if(Math.floor(l % 8 / 4)) sc_start(player, SC.ORLEANS_MEAL, 7);
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.RESENTMENT_BOX, 20);
    if(Math.floor(l % 2 / 1)) sc_start(player, SC.DROWSINESS_BOX, 20);
    l = StoN2(n.substr(S + 10, 1));
    if(Math.floor(l / 16)) sc_start(player, SC.ARMOR_ELEMENT_WATER);
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.ARMOR_ELEMENT_EARTH);
    if(Math.floor(l % 8 / 4)) sc_start(player, SC.ARMOR_ELEMENT_FIRE);
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.ARMOR_ELEMENT_WIND);
    l = StoN2(n.substr(S + 11, 1));
    if(Math.floor(l / 16)) sc_start(player, SC.ORIENTAL_PASTRY, 10);
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.RUNE_STRAWBERRY_CAKE, 5);
    if(Math.floor(l % 8 / 4)) sc_start(player, SC.SCHWARTZWALD_PINE_JUBILEE);
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.ARUNAFELTZ_DESERT_SANDWICH, 7);
    if(Math.floor(l % 2 / 1)) sc_start(player, SC.MANU_ATK, 10);
    l = StoN2(n.substr(S + 12, 1));
    if(Math.floor(l / 16)) sc_start(player, SC.MANU_MATK, 10);
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.MANU_DEF, 10);
    if(Math.floor(l % 8 / 4)) sc_start(player, SC.SPL_ATK, 10);
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.SPL_MATK, 10);
    if(Math.floor(l % 2 / 1)) sc_start(player, SC.SPL_DEF, 10);
    l = StoN2(n.substr(S + 13, 1));
    if(Math.floor(l / 16)) sc_start(player, SC.GUARANA_CANDY);
    //if(Math.floor(l % 16 / 8))
    //if(Math.floor(l % 8 / 4)) 
    //if(Math.floor(l % 4 / 2)) 
    //if(Math.floor(l % 2 / 1)) 
    l = StoN2(n.substr(S + 14, 1));
    if(Math.floor(l / 16)) sc_start(player, SC.ALOEVERA);
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.DEF_RATE, 3);
    if(Math.floor(l % 8 / 4)) sc_start(player, SC.MDEF_RATE, 3);
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.GLOOM_BOX);
    if(Math.floor(l % 2 / 1)) sc_start(player, SC.ABRASIVE, 20);
    l = StoN2(n.substr(S + 15, 1));
    if(Math.floor(l / 16)) sc_start(player, SC.REGENERATION_POTION, 20);
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.CHEWY_RICE_CAKE, 10);
    //if(Math.floor(l % 8 / 4)) 
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.MACARONCAKE);
    //if(Math.floor(l % 2 / 1)) 
    l = StoN2(n.substr(S + 16, 1));
    /* if(Math.floor(l / 16)) sc_start(player, SC.SUPER_NUTS);
    if(Math.floor(l % 16 / 8)) sc_start(player, SC.SUPER_CANDY);
    if(Math.floor(l % 8 / 4)) sc_start(player, SC.SUPER_PASTRY);
    if(Math.floor(l % 4 / 2)) sc_start(player, SC.SUPER_JUICE);
    if(Math.floor(l % 2 / 1)) sc_start(player, SC.SUPER_SWEETS); */
    if(A >= 6) {
        l = StoN2(n.substr(S + 17, 1));
        /* if(Math.floor(l / 16)) sc_start(player, SC.INCHEALRATE, 20);
        if(Math.floor(l % 16 / 8)) sc_start(player, SC.INCHEALRATE, 40);
        if(Math.floor(l % 8 / 4)) sc_start(player, SC.INCHEALRATE, 60);
        if(Math.floor(l % 4 / 2)) sc_start(player, SC.INCHEALRATE, 80);
        if(Math.floor(l % 2 / 1)) sc_start(player, SC.INCHEALRATE, 100); */
        l = StoN2(n.substr(S + 19, 1));
        S += 3;
    }

    S += 16;
    return S;
}

for (i = 0; i <= 9; i++)
    document.calcForm.A_Weapon_element.options[i] = new Option(v_Element_[i], i),
        document.calcForm.B_AtkElem.options[i] = new Option(v_Element_[i], i);
for (document.calcForm.A_Weapon_element.options[0] = new Option("(unchanged)", 0),
    document.calcForm.A_Weapon_element.value = 0,
    document.calcForm.B_AtkElem.options[i] = new Option("(unchanged)", 10),
    m_CardShort = [["(card shortcuts)", 0, 0, 0, 0], ["Remove All Cards", 1e4, 0], ["Remove Weapon's Cards", 0, 0, 0, 0], ["+40% [2 Race Card]", 1, 1, 0, 0], ["+60% [3 Race Card]", 1, 1, 1, 0], ["+80% [4 Race Card]", 1, 1, 1, 1], ["+61% [2 Race + 1 Size Cards]", 1, 1, 3, 0], ["+68% [2 Race + 1 Element Cards]", 1, 1, 2, 0], ["+84% [3 Race + 1 Size Cards]", 1, 1, 1, 3], ["+96% [2 Race + 2 Element Cards]", 1, 1, 2, 2], ["+110% [2 AK + 2 Race Cards]", 31, 31, 1, 1], ["+110% [3 AK + 1 Race Cards]", 31, 31, 31, 1], ["+110% [3 AK + 1 Element Cards]", 31, 31, 31, 2], ["2 Size Cards", 3, 3, 0, 0], ["3 Size Cards", 3, 3, 3, 0], ["4 Size Cards", 3, 3, 3, 3], ["1 Elemental Stone + 1 Star Crumb", 0, 106, 0, 0], ["1 Elemental Stone + 2 Star Crumbs", 0, 106, 106, 0], ["3 Star Crumbs", 106, 106, 106, 0], ["+40 ATK [2 Andre Cards]", 11, 11, 0, 0], ["+60 ATK [3 Andre Cards]", 11, 11, 11, 0], ["+80 ATK [4 Andre Cards]", 11, 11, 11, 11], ["+60 ATK [2 Zipper Bear Cards]", 326, 326, 0, 0], ["+90 ATK [3 Zipper Bear Cards]", 326, 326, 326, 0], ["+120 ATK [4 Zipper Bear Cards]", 326, 326, 326, 326], ["+18 CRIT [2 Soldier Skeleton Cards]", 41, 41, 0, 0], ["+27 CRIT [3 Soldier Skeleton Cards]", 41, 41, 41, 0], ["+36 CRIT [4 Soldier Skeleton Cards]", 41, 41, 41, 41], ["+40 HIT [2 Mummy Cards]", 40, 40, 0, 0], ["+60 HIT [3 Mummy Cards]", 40, 40, 40, 0], ["+80 HIT [4 Mummy Cards]", 40, 40, 40, 40], ["+60% [2 Orc Lady Cards]", 252, 252, 0, 0], ["+92% [2 Orc Lady + 1 Hydra Cards]", 252, 252, 13, 0], ["+128% [3 Orc Lady + 1 Hydra Cards]", 252, 252, 252, 13], ["+20% [2 Archer Skeleton Cards]", 107, 107, 0, 0], ["+30% [3 Archer Skeleton Cards]", 107, 107, 107, 0], ["+40% [4 Archer Skeleton Cards]", 107, 107, 107, 107], ["2 Fabre Cards", 4, 4, 0, 0], ["3 Fabre Cards", 4, 4, 4, 0], ["4 Fabre Cards", 4, 4, 4, 4], ["2 Drops Cards", 5, 5, 0, 0], ["3 Drops Cards", 5, 5, 5, 0], ["4 Drops Cards", 5, 5, 5, 5], ["+50% [2 Abysmal Knight Cards]", 31, 31, 0, 0], ["+75% [3 Abysmal Knight Cards]", 31, 31, 31, 0], ["+100% [4 Abysmal Knight Cards]", 31, 31, 31, 31], ["2 Crit Dmg +10%, CRIT +7 Cards", 156, 156, 0, 0], ["3 Crit Dmg +10%, CRIT +7 Cards", 156, 156, 156, 0], ["4 Crit Dmg +10%, CRIT +7 Cards", 156, 156, 156, 156], ["2 Cecil Damon Cards", 160, 160, 0, 0], ["3 Cecil Damon Cards", 160, 160, 160, 0], ["4 Cecil Damon Cards", 160, 160, 160, 160], ["Swordman Set", 1e4, 223, 347, 0, 317, 0, 362, 354, 0], ["Thief Set", 1e4, 233, 0, 0, 0, 295, 391, 395, 260], ["Acolyte Set", 1e4, 253, 383, 307, 301, 0, 0, 270, 0], ["Archer Set", 1e4, 279, 0, 0, 224, 340, 351, 230, 0], ["Magician Set", 1e4, 0, 337, 358, 220, 346, 379, 350, 0], ["Merchant Set", 1e4, 326, 376, 0, 281, 0, 388, 216, 0], ["Crusader Set", 1e4, 0, 347, 0, 190, 0, 362, 354, 0], ["Rogue Set", 1e4, 0, 113, 0, 0, 295, 391, 260, 413], ["Monk Set", 1e4, 253, 383, 0, 181, 0, 0, 270, 0], ["Bard/Dancer Set", 1e4, 279, 0, 0, 224, 340, 408, 230, 0], ["Sage Set", 1e4, 0, 337, 0, 193, 346, 379, 350, 0], ["Alchemist Set", 1e4, 326, 175, 0, 281, 0, 388, 104, 0], ["Test (for now)", 0, 0, 0, 0]],
    i = 0; i <= 63; i++)
    document.calcForm.A_cardshort.options[i] = new Option(m_CardShort[i][0], i);

for (i = 0; i < m_TempEffect.length; i++)
    if (1 == m_TempEffect[i][3]) {
        var str = "<B>(Special Effect: [" + m_TempEffect[i][2] + "] can be activated under 'Additional Effects' at 'BUFF, ITEMS AND OTHER STUFF')</B>";
        0 == m_Item[m_TempEffect[i][4]][10] ? m_Item[m_TempEffect[i][4]][10] = str : m_Item[m_TempEffect[i][4]][10] += "<BR>" + str
    }
for (i = 0; i < m_TempEffect.length; i++)
    if (2 == m_TempEffect[i][3]) {
        str = "<B>(Special Effect: [" + m_TempEffect[i][2] + "] can be activated under 'Additional Effects' at 'BUFF, ITEMS AND OTHER STUFF')</B>";
        0 == m_Card[m_TempEffect[i][4]][3] ? m_Card[m_TempEffect[i][4]][3] = str : m_Card[m_TempEffect[i][4]][3] += "<BR>" + str
    }
function refreshFields() {
    ClickB_Item("SW");
    SetMonsterDebuffsVisibility(0);
    SetMonsterBuffsVisibility(0);
    SetSupportSkillsVisibility(0);
    SetDanceSkillsVisibility(0);
    SetGuildSkillsVisibility(0);
    SetMiscEffectsVisibility(0);
    SetFoodEffectsVisibility(0);
    SetAdditionalEffectsVisibility(0);
    SetPlayerManualEditsVisibility(0);
    SetMonsterManualEditsVisibility(0);
    reloadRandOpt();
    reloadShadowEquip();
    reloadEnchant();
}

function refreshTableHeaders() {
    updateSupportSkillHeader();
    updateMusicDanceSkillHeader();
    updateMusicDanceStatLessonVisibility();
    updateMarionetteVisibility();
    updateGuildSkillHeader();
    updateMiscEffectHeader();
    updateFoodEffectHeader();
    updateAdditionalEffectHeader();
    updatePlayerManualEditsHeader();
    updateMonsterDebuffHeader();
    updateMonsterBuffHeader();
    updateEnemyManualEditsHeader();
}

document.calcForm.B_AtkRange.value = 0,
document.calcForm.B_AtkElem.value = 10,
document.calcForm.theme.value = 0,
document.calcForm.server.value = 0,
document.calcForm.all_dmgSkills.checked = !1,
document.calcForm.restrict_jobequip.checked = !0,
document.calcForm.restrict_lvlequip.checked = !1,
document.calcForm.restrict_equipslot.checked = !1,
document.calcForm.restrict_cardslot.checked = !1,
document.calcForm.all_card.checked = !1,
document.calcForm.increase_aspdcap.checked = !1,
document.calcForm.A_JOB.value = 0,
populateAdditionalEffectSelects();
ClickB_Item("SW");
ClickJob(0),
allCard(),
EnemySort(),
StCalc(),
firstLoadFunction(),
LoadEnemySkills(),
LoadLocal3(),
URLIN(),
restrictCardslot(0);