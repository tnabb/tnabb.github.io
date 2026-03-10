for (var c = document.calcForm, i = 1; i <= 22; i++)
    c.B_num.options[i - 1] = new Option(i, i - 1);
for (i = 1; i <= 20; i++)
    c.A8_Skill15.options[i] = new Option(5 * i, i);
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

function SuperNoviceFullWeapon(enabled) {
    if (enabled === 1) {
        SuperNoviceFullWeaponCHECK = 1;
        if (!JOB_BASE_ASPD[JOB.SUPERNOVICE]) {
            JOB_BASE_ASPD[JOB.SUPERNOVICE] = {};
        }
        JOB_BASE_ASPD[JOB.SUPERNOVICE][WEAPON.TWOHANDAXE] = 1.6;
    } else {
        SuperNoviceFullWeaponCHECK = 0;

        if (JOB_BASE_ASPD[JOB.SUPERNOVICE]) {
            delete JOB_BASE_ASPD[JOB.SUPERNOVICE][WEAPON.TWOHANDAXE];
        }
    }

    for (let i = 0; i < n_A_WeaponTypesArray.length; i++) {
        n_A_WeaponTypesArray[i] = null;
    }

    const jobWeapons = JOB_BASE_ASPD[JOB.SUPERNOVICE] || {};
    let j = 0;
    for (let weaponType = 0; weaponType < WEAPON.MAX; weaponType++) {
        if (jobWeapons[weaponType] !== undefined) {
            n_A_WeaponTypesArray[j] = weaponType;
            j++;
        }
    }

    const currentWeapon = n_A_Equip[0];
    const weaponData = m_Item[currentWeapon];
    if (weaponData[2] !== WEAPON.TWOHANDAXE && JobEquipItemSearch(weaponData[2])) {
        n_A_WeaponType = weaponData[1];
        ClickWeaponType(weaponData[1]);
        WeaponSet2();
        c.A_weapon1.value = currentWeapon;
    } else {
        ClickWeaponType(WEAPON.FIST);
        WeaponSet2();
    }

    if (JobEquipItemSearch(m_Item[n_A_Equip[2]][2])) {
        c.A_head1.value = n_A_Equip[2];
    }
    if (JobEquipItemSearch(m_Item[n_A_Equip[3]][2])) {
        c.A_head2.value = n_A_Equip[3];
    }
    if (JobEquipItemSearch(m_Item[n_A_Equip[4]][2])) {
        c.A_head3.value = n_A_Equip[4];
    }

    c.A_left.value = n_A_Equip[5];
    c.A_body.value = n_A_Equip[6];
    c.A_shoulder.value = n_A_Equip[7];
    c.A_shoes.value = n_A_Equip[8];
    c.A_acces1.value = n_A_Equip[9];
    c.A_acces2.value = n_A_Equip[10];
}

function PopulatePlayerData() {
    console.log("Populating player data from form inputs...");
    player.status.base_level = 1 * c.A_BaseLV.value;
    player.status.job_level = 1 * c.A_JobLV.value;
    n_A_JobSet();
    player.status.str = 1 * c.A_STR.value;
    player.status.agi = 1 * c.A_AGI.value;
    player.status.vit = 1 * c.A_VIT.value;
    player.status.int = 1 * c.A_INT.value;
    player.status.dex = 1 * c.A_DEX.value;
    player.status.luk = 1 * c.A_LUK.value;
    player.status.adopted = 1 * c.A_adopted.value;
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
        player.enchant[3] = 1 * c.A_shoulder_enchant.value;
        player.enchant[4] = 1 * c.A_shoulder_enchant2.value;
    } else {
        player.enchant[3] = 0;
        player.enchant[4] = 0;
    }
    if (m_ShoesEnchant.includes(player.equip[EQI.SHOES])) {
        player.enchant[5] = 1 * c.A_shoes_enchant.value;
        player.enchant[6] = 1 * c.A_shoes_enchant2.value;
    } else {
        player.enchant[5] = 0;
        player.enchant[6] = 0;
    }

    player.active_skill = n_A_ActiveSkill;
    player.active_skill_lv = n_A_ActiveSkillLV;
    player.tok = n_tok;

    player.spiritball = player.spiritball || 0;

    player.passive_skills = [];
    for (let i = 0; i < JOB_AVAILABLE_BUFFS[player.status.job_id].length; i++) {
        let skillID = JOB_AVAILABLE_BUFFS[player.status.job_id][i];
        let skillLV = 1 * document.getElementById("A_skill" + i).value;
        player.passive_skills.push(new PassiveSkill(skillID, skillLV));
    }

    loadPlayerStatusChanges();

    StatusCalcPlayerSub();
    updatePlayerStatDisplay();
}

function loadPlayerStatusChanges() {
    // Save party buff state from player.sc before clearing
    var buf2 = [];
    for (var i = 0; i <= 21; i++) buf2[i] = getBuf2FromSC(i);
    var spiritball = player.spiritball;


    // TEMPORARY: Do not reset player.sc so UI-applied statuses persist
    // player.sc = [];
    player.spiritball = spiritball;

    // Re-add party buffs from saved state
    for (var i = 0; i <= 21; i++) setBuf2ToSC(i, buf2[i]);

    /* // guild skills
    if (n_A_Buf3[40]) sc_start(player, SC.BATTLEORDERS);
    if (n_A_Buf3[41]) sc_start(player, SC.LEADERSHIP, n_A_Buf3[41]);
    if (n_A_Buf3[42]) sc_start(player, SC.GLORYWOUNDS, n_A_Buf3[42]);
    if (n_A_Buf3[43]) sc_start(player, SC.SOULCOLD, n_A_Buf3[43]);
    if (n_A_Buf3[44]) sc_start(player, SC.HAWKEYES, n_A_Buf3[44]);

    // misc effects on player
    if (n_A_Buf6[0] == 0) sc_start(player, SC.VOLCANO, n_A_Buf6[1]);
    else if (n_A_Buf6[0] == 1) sc_start(player, SC.DELUGE, n_A_Buf6[1]);
    else if (n_A_Buf6[0] == 2) sc_start(player, SC.WHIRLWIND, n_A_Buf6[1]);
    if (n_A_Buf6[3]) sc_start(player, SC.FOGWALL);
    if (n_A_Buf6[4]) sc_start(player, SC.MINDBREAKER, n_A_Buf6[4]);
    if (n_A_Buf6[5]) sc_start(player, SC.PROVOKE, n_A_Buf6[5]);
    if (n_A_Buf6[6]) sc_start(player, SC.BENEDICTIO);
    if (n_A_Buf6[7]) sc_start(player, SC.WATK_ELEMENT, ELE.FIRE, 20);
    if (n_A_Buf6[8]) sc_start(player, SC.CHANGEUNDEAD);
    if (n_A_Buf6[9]) sc_start(player, SC.NOCRIT);
    if (n_A_Buf6[11]) sc_start(player, SC.BLIND);
    if (n_A_Buf6[12]) sc_start(player, SC.STUN);
    if (n_A_Buf6[13]) sc_start(player, SC.STONE);
    if (n_A_Buf6[14]) sc_start(player, SC.SLEEP);
    if (n_A_Buf6[15]) sc_start(player, SC.FREEZE);
    if (n_A_Buf6[16]) sc_start(player, SC.AETERNA);
    if (n_A_Buf6[17]) sc_start(player, SC.BLEEDING);
    if (n_A_Buf6[18]) sc_start(player, SC.CRITICALWOUND, n_A_Buf6[18]);
    if (n_A_Buf6[19]) sc_start(player, SC.QUAGMIRE, n_A_Buf6[19]);
    if (n_A_Buf6[20]) sc_start(player, SC.DECREASEAGI, n_A_Buf6[20]);
    if (n_A_Buf6[21]) sc_start(player, SC.POISON);
    if (n_A_Buf6[22]) sc_start(player, SC.CURSE); */

    // food / speed potions / other items (all the non-used indexes are non-existent in the current version of the game)
    /* if (n_A_Buf7[0]) sc_start(player, SC.HITFOOD, 10);
    if (n_A_Buf7[1]) sc_start(player, SC.FLEEFOOD, 10);
    if (n_A_Buf7[2]) { sc_start(player, SC.FOOD_STR_CASH, 7); sc_start(player, SC.FOOD_AGI_CASH, 7); sc_start(player, SC.FOOD_VIT_CASH, 7); sc_start(player, SC.FOOD_INT_CASH, 7); sc_start(player, SC.FOOD_DEX_CASH, 7); sc_start(player, SC.FOOD_LUK_CASH, 7); }
    if (n_A_Buf7[3]) sc_start(player, SC.FOOD_STR_CASH, n_A_Buf7[3]);
    if (n_A_Buf7[4]) sc_start(player, SC.FOOD_AGI_CASH, n_A_Buf7[4]);
    if (n_A_Buf7[5]) sc_start(player, SC.FOOD_VIT_CASH, n_A_Buf7[5]);
    if (n_A_Buf7[6]) sc_start(player, SC.FOOD_INT_CASH, n_A_Buf7[6]);
    if (n_A_Buf7[7]) sc_start(player, SC.FOOD_DEX_CASH, n_A_Buf7[7]);
    if (n_A_Buf7[8]) sc_start(player, SC.FOOD_LUK_CASH, n_A_Buf7[8]);
    if (n_A_Buf7[9]) sc_start(player, SC.ATKPOTION, 20);
    if (n_A_Buf7[10]) sc_start(player, SC.MATKPOTION, 20);
    if (n_A_Buf7[11]) sc_start(player, SC.ARMOR_ELEMENT_WATER, 20, 0, 0, -15);
    if (n_A_Buf7[12]) sc_start(player, SC.ARMOR_ELEMENT_EARTH, 0, 20, -15, 0);
    if (n_A_Buf7[13]) sc_start(player, SC.ARMOR_ELEMENT_FIRE, -15, 0, 20, 0);
    if (n_A_Buf7[14]) sc_start(player, SC.ARMOR_ELEMENT_WIND, 0, -15, 0, 20);
    if (n_A_Buf7[16]) sc_start(player, SC.MATKPOTION, 10);
    if (n_A_Buf7[17]) { sc_start(player, SC.ATKPOTION, 5); sc_start(player, SC.MATKPOTION, 5); }
    if (n_A_Buf7[18]) { sc_start(player, SC.HITFOOD, 10); sc_start(player, SC.FLEEFOOD, 20); }
    if (n_A_Buf7[19]) sc_start(player, SC.INCCRI, 7);
    if (n_A_Buf7[20]) sc_start(player, SC.MANU_ATK, 10);
    if (n_A_Buf7[21]) sc_start(player, SC.MANU_MATK, 10);
    if (n_A_Buf7[22]) sc_start(player, SC.MANU_DEF, 10);
    if (n_A_Buf7[23]) sc_start(player, SC.SPL_ATK, 10);
    if (n_A_Buf7[24]) sc_start(player, SC.SPL_MATK, 10);
    if (n_A_Buf7[25]) sc_start(player, SC.SPL_DEF, 10);
    if (n_A_Buf7[26]) { sc_start(player, SC.ASPDPOTION0); sc_start(player, SC.INCREASEAGI, 5); }
    if (n_A_Buf7[31]) sc_start(player, SC.PROVOKE, 1);
    if (n_A_Buf7[32]) sc_start(player, SC.DEF_RATE, 3);
    if (n_A_Buf7[33]) sc_start(player, SC.MDEF_RATE, 3);
    if (n_A_Buf7[34]) sc_start(player, SC.CONCENTRATE, 1);
    if (n_A_Buf7[35] == 1) sc_start(player, SC.ASPDPOTION0);
    else if (n_A_Buf7[35] == 2) sc_start(player, SC.ASPDPOTION1);
    else if (n_A_Buf7[35] == 3) sc_start(player, SC.ASPDPOTION2);
    else if (n_A_Buf7[35] == 4) sc_start(player, SC.ASPDPOTION3);
    if (n_A_Buf7[36]) sc_start(player, SC.INCCRI, 20);
    if (n_A_Buf7[38]) sc_start(player, SC.ATKPOTION, 10);
    if (n_A_Buf7[43]) sc_start(player, SC.MACARONCAKE);
    if (n_A_Buf7[45]) sc_start(player, SC.INCHEALRATE, 20); */
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
    base_status.size = SZ.MEDIUM;
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
    i = base_status.luk + player.status.luk + player.indexed_bonus.param_bonus[STAT.LUK];
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
        player.dsprate -= sc_get(player, SC.SERVICE4U).val3;

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

    console.log("rhw: ", base_status.rhw);
    console.log("lhw: ", base_status.lhw);
    player.battle_status = Object.assign(new StatusData(), base_status, {
        rhw: Object.assign(new WeaponATK(), base_status.rhw),
        lhw: Object.assign(new WeaponATK(), base_status.lhw)
    });
    console.log("battle rhw: ", player.battle_status.rhw);
    console.log("battle lhw: ", player.battle_status.lhw);

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
    console.log("original speed: ", b_status.speed);
    status.speed = status_calc_speed(player, b_status.speed);
    console.log("new speed: ", status.speed);

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
    monster.notes = n_M_debuff;

    if (monster.name.includes("[MVP]"))
        monster.base_status.mode |= MD.MVP;
    if (n_M_debuff[7])
        monster.damagetaken = 100 - NotesCalc(monster.mob_id, 7);

    loadMonsterStatusChanges();

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

function loadMonsterStatusChanges() {
    //monster.sc = [];
    // debuffs
    /* if (n_B_debuf[0]) sc_start(monster, SC.PROVOKE, n_B_debuf[0]);
    if (n_B_debuf[1]) sc_start(monster, SC.QUAGMIRE, n_B_debuf[1]);
    if (n_B_debuf[2]) sc_start(monster, SC.POISON);
    if (n_B_debuf[3]) sc_start(monster, SC.BLIND);
    if (n_B_debuf[4]) sc_start(monster, SC.FREEZE);
    if (n_B_debuf[5]) sc_start(monster, SC.BLESSING);
    if (n_B_debuf[6]) sc_start(monster, SC.AETERNA);
    if (n_B_debuf[7]) sc_start(monster, SC.STUN);
    if (n_B_debuf[8]) sc_start(monster, SC.SLEEP);
    if (n_B_debuf[9]) sc_start(monster, SC.STONE);
    if (n_B_debuf[10]) sc_start(monster, SC.CURSE);
    if (n_B_debuf[11]) sc_start(monster, SC.DECREASEAGI, n_B_debuf[11]);
    if (n_B_debuf[12]) sc_start(monster, SC.CRUCIS, n_B_debuf[12]);
    if (n_B_debuf[13]) sc_start(monster, SC.STRIPWEAPON);
    if (n_B_debuf[14]) sc_start(monster, SC.STRIPSHIELD);
    if (n_B_debuf[15]) sc_start(monster, SC.STRIPARMOR);
    if (n_B_debuf[16]) sc_start(monster, SC.STRIPHELM);
    if (n_B_debuf[17]) sc_start(monster, SC.SPIDERWEB);
    if (n_B_debuf[18]) sc_start(monster, SC.MINDBREAKER, n_B_debuf[18]);
    if (n_B_debuf[19]) sc_start(monster, SC.DONTFORGETME);
    if (n_B_debuf[20]) sc_start(monster, SC.ETERNALCHAOS);
    if (n_B_debuf[21]) sc_start(monster, SC.SKA, n_B_debuf[21]);
    if (n_B_debuf[22]) sc_start(monster, SC.SKE);
    if (n_B_debuf[23]) sc_start(monster, SC.ELEMENTALCHANGE, n_B_debuf[23], 1);
    if (n_B_debuf[25]) sc_start(monster, SC.REDUCE_DEFRATE, n_B_debuf[25] == 1 ? 50 : 75);
    if (n_B_debuf[26]) sc_start(monster, SC.DISARM);
    if (n_B_debuf[27]) sc_start(monster, SC.CRITIGNORELUK, n_B_debuf[27]);
    if (n_B_debuf[28]) sc_start(monster, SC.FLING, n_B_debuf[28]);
    if (n_B_debuf[29]) sc_start(monster, SC.HOLYLIGHT);
    if (n_B_debuf[30]) sc_start(monster, SC.JUDEXMAGNUS); */

    // buffs
    /* if (n_B_buf[0]) sc_start(monster, SC.INCREASEAGI, n_B_buf[0]);
    if (n_B_buf[1]) sc_start(monster, SC.ASSUMPTIO);
    if (n_B_buf[2]) sc_start(monster, SC.ADRENALINE);
    if (n_B_buf[3]) sc_start(monster, SC.MAXIMIZEPOWER);
    if (n_B_buf[4]) sc_start(monster, SC.POWERUP);
    if (n_B_buf[5]) sc_start(monster, SC.AGIUP, n_B_buf[5]);
    if (n_B_buf[6]) sc_start(monster, SC.ELEMENTALCHANGE, Math.trunc(n_B_buf[6] / 10), n_B_buf[6] % 10);
    if (n_B_buf[7]) sc_start(monster, SC.ARMORCHANGE, n_B_buf[7], SKILL.NPC_STONESKIN);
    if (n_B_buf[8]) sc_start(monster, SC.ARMORCHANGE, n_B_buf[8], SKILL.NPC_ANTIMAGIC);
    if (n_B_buf[9]) sc_start(monster, SC.KEEPING);
    if (n_B_buf[10]) sc_start(monster, SC.ANGELUS, n_B_buf[10]);
    if (n_B_buf[11]) sc_start(monster, SC.AUTOGUARD, n_B_buf[11]);
    if (n_B_buf[12]) sc_start(monster, SC.SHIELDREFLECT, n_B_buf[12]);
    if (n_B_buf[13]) sc_start(monster, SC.ARMOR, n_B_buf[13]);
    if (n_B_buf[14]) sc_start(monster, SC.ENERGYCOAT, n_B_buf[14]); */
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

    if (n_M_debuff[1])
        b_status.mode |= MD.IGNOREMELEE;
    if (n_M_debuff[2])
        b_status.mode |= MD.IGNORERANGED;
    if (n_M_debuff[3])
        b_status.mode |= MD.IGNOREMAGIC;
    if (n_M_debuff[4])
        b_status.mode |= MD.IGNOREMISC;
    if (n_M_debuff[8])
        b_status.mode |= MD.IGNOREIGNOREDEF;
    if (n_M_debuff[9])
        b_status.mode |= MD.IGNOREIGNOREMDEF;
    if (n_M_debuff[10])
        b_status.mode |= MD.IGNOREPIERCEATK;

    status_calc_misc(monster, monster.base_status, monster.level);
    b_status.base_exp = monsterInfo[16];
    b_status.job_exp = monsterInfo[17];

    monster.battle_status = Object.assign(new StatusData(), b_status, {
        rhw: Object.assign(new WeaponATK(), b_status.rhw),
        lhw: Object.assign(new WeaponATK(), b_status.lhw)
    });

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

    if (n_B_manual[48]) // manual edit
        agi += n_B_manual[48];
    if (sc_get(monster, SC.INCREASEAGI)) // increase agi
        agi += (sc_get(monster, SC.INCREASEAGI).val2 * 2) - 2;
    if (sc_get(monster, SC.DECREASEAGI)) // decrease agi
        agi -= sc_get(monster, SC.DECREASEAGI).val2;
    if (sc_get(monster, SC.QUAGMIRE)) // quagmire
        agi -= sc_get(monster, SC.QUAGMIRE).val2;

    status.agi = cap_value(agi, 0, USHRT_MAX);

    // vit
    let vit = b_status.vit;
    if (n_B_manual[49]) // manual edit
        vit += n_B_manual[49];
    if (sc_get(monster, SC.STRIPARMOR)) // strip armor
        vit -= Math.trunc((vit * 40) / 100);

    status.vit = cap_value(vit, 0, USHRT_MAX);

    // int
    let int = b_status.int;
    if (n_B_manual[50]) // manual edit
        int += n_B_manual[50];
    if (sc_get(monster, SC.STRIPHELM)) // strip helm
        int -= Math.trunc((int * 40) / 100);

    status.int = cap_value(int, 0, USHRT_MAX);

    // dex
    let dex = b_status.dex;
    if (n_B_manual[51]) // manual edit
        dex += n_B_manual[51];
    if (sc_get(monster, SC.QUAGMIRE)) // quagmire
        dex -= sc_get(monster, SC.QUAGMIRE).val2;

    status.dex = cap_value(dex, 0, USHRT_MAX);

    // luk
    let luk = b_status.luk;
    if (n_B_manual[52]) // manual edit
        luk += n_B_manual[52];
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
    if (n_B_manual[40]) { // manual edit
        status.rhw.atk += n_B_manual[40];
        status.rhw.atk2 += n_B_manual[40];
    }
    // nothing that affects watk

    // hit
    let hit = b_status.hit;
    if (status.dex != b_status.dex) {
        hit += status.dex - b_status.dex;
    }

    if (n_B_manual[36]) // manual edit
        hit += n_B_manual[36];
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

    if (n_B_manual[37]) // manual edit
        flee += n_B_manual[37];
    if (sc_get(monster, SC.AGIUP)) // npc agi up
        flee += Math.trunc((flee * 100) / 100);
    if (sc_get(monster, SC.SPIDERWEB)) // spider web
        flee -= Math.trunc((flee * 50) / 100);
    if (sc_get(monster, SC.BLIND)) // blind
        flee -= Math.trunc((flee * 25) / 100);

    status.flee = cap_value(flee, 1, SHRT_MAX);

    // def
    let def = b_status.def;
    if (n_B_manual[34]) // manual edit
        def += n_B_manual[34];
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

    // mdef
    let mdef = b_status.mdef;
    if (n_B_manual[35]) // manual edit
        mdef += n_B_manual[35];
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
    if (n_B_manual[58]) // manual edit
        def_ele = n_B_manual[56];

    status.def_ele = def_ele;

    // ele lv
    let ele_lv = b_status.ele_lv;
    if (sc_get(monster, SC.STONE)) // stone curse
        ele_lv = 1;
    if (sc_get(monster, SC.FREEZE)) // frozen
        ele_lv = 1;
    if (sc_get(monster, SC.ELEMENTALCHANGE)) // elemental change
        ele_lv = sc_get(monster, SC.ELEMENTALCHANGE).val2;
    if (n_B_manual[58]) // manual edit
        ele_lv = n_B_manual[57] + 1;

    status.ele_lv = cap_value(ele_lv, 1, 4);

    // mode - doesnt matter

    // max hp
    let max_hp = b_status.max_hp;
    if (n_B_manual[30]) // manual edit
        max_hp += n_B_manual[30];
    if (sc_get(monster, SC.ANGELUS)) // angelus
        max_hp += sc_get(monster, SC.ANGELUS).val1 * 100;
    status.max_hp = cap_value(max_hp, 1, UINT_MAX);

    // max sp - doesnt matter

    // matk
    // nothing that affects monster matk for now

    // aspd - doesnt matter (as dps from monsters isnt calced)

    // dspd - doesnt matter

    // size
    if (n_B_manual[60]) // manual edit
        status.size = n_B_manual[59];

    // experience
    let base_exp = b_status.base_exp;
    let job_exp = b_status.job_exp;
    if (sc_get(player, SC.RICHMANKIM)) {
        base_exp += Math.trunc((base_exp * sc_get(player, SC.RICHMANKIM).val2) / 100);
        job_exp += Math.trunc((job_exp * sc_get(player, SC.RICHMANKIM).val2) / 100);
    }
    status.base_exp = cap_value(base_exp, 0, UINT_MAX);
    status.job_exp = cap_value(job_exp, 0, UINT_MAX);
}

function StAllCalc() {
    console.log("HEYOOOO");
    n_A_JobSet(),
    20 == n_A_JOB && (0 == SuperNoviceFullWeaponCHECK && 1 * c.A_skill9.value == 1 ? SuperNoviceFullWeapon(1) : 1 == SuperNoviceFullWeaponCHECK && 1 * c.A_skill9.value == 0 && SuperNoviceFullWeapon(0)),
    n_A_BaseLV = 1 * c.A_BaseLV.value,
    n_A_JobLV = 1 * c.A_JobLV.value,
    n_A_STR = 1 * c.A_STR.value,
    n_A_AGI = 1 * c.A_AGI.value,
    n_A_VIT = 1 * c.A_VIT.value,
    n_A_DEX = 1 * c.A_DEX.value,
    n_A_INT = 1 * c.A_INT.value,
    n_A_LUK = 1 * c.A_LUK.value,
    SU_STR = n_A_STR,
    SU_AGI = n_A_AGI,
    SU_VIT = n_A_VIT,
    SU_DEX = n_A_DEX,
    SU_INT = n_A_INT,
    SU_LUK = n_A_LUK,
    n_A_WeaponType = m_Item[c.A_weapon1.value][1],
    player.dual_wield && (n_A_Weapon2Type = m_Item[c.A_weapon2.value][1]),
    n_A_Arrow = 1 * c.A_Arrow.value,
    n_A_HEAD_REFINE = 1 * c.A_HEAD_REFINE.value,
    n_A_BODY_REFINE = 1 * c.A_BODY_REFINE.value,
    n_A_LEFT_REFINE = 1 * c.A_LEFT_REFINE.value,
    n_A_SHOULDER_REFINE = 1 * c.A_SHOULDER_REFINE.value,
    n_A_SHOES_REFINE = 1 * c.A_SHOES_REFINE.value,
    n_A_ActiveSkill = 1 * c.A_ActiveSkill.value,
    n_A_ActiveSkill >= 5e3 ? n_A_ActiveSkill = m_EnableSkill[n_A_ActiveSkill - 5e3][2] : n_A_ActiveSkill >= 3e3 ? n_A_ActiveSkill = m_EnableSkill[n_A_ActiveSkill - 3e3][2] : n_A_ActiveSkill >= 2e3 && (n_A_ActiveSkill = m_AutoSpellSkill[n_A_ActiveSkill - 2e3][2]),
    n_A_ActiveSkillLV = 1 * c.A_ActiveSkillLV.value,
    n_A_Equip[0] = 1 * c.A_weapon1.value,
    n_A_Equip[1] = 0,
    player.dual_wield && (n_A_Equip[1] = 1 * c.A_weapon2.value),
    n_A_Equip[2] = 1 * c.A_head1.value,
    n_A_Equip[3] = 1 * c.A_head2.value,
    n_A_Equip[4] = 1 * c.A_head3.value,
    n_A_Equip[5] = 1 * c.A_left.value,
    n_A_Equip[6] = 1 * c.A_body.value,
    n_A_Equip[7] = 1 * c.A_shoulder.value,
    n_A_Equip[8] = 1 * c.A_shoes.value,
    n_A_Equip[9] = 1 * c.A_acces1.value,
    n_A_Equip[10] = 1 * c.A_acces2.value,
    n_A_Shadow[0] = 1 * c.A_weapon_shadow.value,
    n_A_Shadow[1] = 1 * c.A_left_shadow.value,
    //n_A_Shadow[2] = 1 * c.A_armor_shadow.value,
    n_A_Shadow[3] = 1 * c.A_shoes_shadow.value,
    //n_A_Shadow[4] = 1 * c.A_acces1_shadow.value,
    //n_A_Shadow[5] = 1 * c.A_acces2_shadow.value,
    SetEquip(),
    n_A_card[0] = 1 * c.A_weapon1_card1.value,
    n_A_card[1] = 1 * c.A_weapon1_card2.value,
    n_A_card[2] = 1 * c.A_weapon1_card3.value,
    n_A_card[3] = 1 * c.A_weapon1_card4.value,
    player.dual_wield ? (n_A_card[4] = 1 * c.A_weapon2_card1.value,
        n_A_card[5] = 1 * c.A_weapon2_card2.value,
        n_A_card[6] = 1 * c.A_weapon2_card3.value,
        n_A_card[7] = 1 * c.A_weapon2_card4.value) : (n_A_card[4] = 0,
            n_A_card[5] = 0,
            n_A_card[6] = 0,
            n_A_card[7] = 0),
    n_A_card[8] = 1 * c.A_head1_card.value,
    n_A_card[9] = 1 * c.A_head2_card.value,
    n_A_card[10] = 1 * c.A_left_card.value,
    n_A_card[11] = 1 * c.A_body_card.value,
    n_A_card[12] = 1 * c.A_shoulder_card.value,
    n_A_card[13] = 1 * c.A_shoes_card.value,
    n_A_card[14] = 1 * c.A_acces1_card.value,
    n_A_card[15] = 1 * c.A_acces2_card.value,
    SetCard(),
    // random options defined
    n_A_randopt[0] = 1 * c.A_weapon1_ropt1.value,
    n_A_randopt[1] = 1 * c.WEAP1_ROPT1.value,
    n_A_randopt[2] = 1 * c.A_weapon1_ropt2.value,
    n_A_randopt[3] = 1 * c.WEAP1_ROPT2.value,
    n_A_randopt[4] = 1 * c.A_weapon1_ropt3.value,
    n_A_randopt[5] = 1 * c.WEAP1_ROPT3.value,
    n_A_randopt[6] = 1 * c.A_weapon1_ropt4.value,
    n_A_randopt[7] = 1 * c.WEAP1_ROPT4.value,
    player.dual_wield ? (n_A_randopt[8] = 1 * c.A_weapon2_ropt1.value,
        n_A_randopt[9] = 1 * c.WEAP2_ROPT1.value,
        n_A_randopt[10] = 1 * c.A_weapon2_ropt2.value,
        n_A_randopt[11] = 1 * c.WEAP2_ROPT2.value,
        n_A_randopt[12] = 1 * c.A_weapon2_ropt3.value,
        n_A_randopt[13] = 1 * c.WEAP2_ROPT3.value,
        n_A_randopt[14] = 1 * c.A_weapon2_ropt4.value,
        n_A_randopt[15] = 1 * c.WEAP2_ROPT4.value) : (n_A_randopt[8] = 0,
            n_A_randopt[9] = 0,
            n_A_randopt[10] = 0,
            n_A_randopt[11] = 0,
            n_A_randopt[12] = 0,
            n_A_randopt[13] = 0,
            n_A_randopt[14] = 0,
            n_A_randopt[15] = 0),
    n_A_randopt[16] = 1 * c.A_body_ropt1.value,
    n_A_randopt[17] = 1 * c.BODY_ROPT1.value,
    n_A_randopt[18] = 1 * c.A_body_ropt2.value,
    n_A_randopt[19] = 1 * c.BODY_ROPT2.value,
    n_A_randopt[20] = 1 * c.A_shoulder_ropt1.value,
    n_A_randopt[21] = 1 * c.SHOULDER_ROPT1.value,
    n_A_randopt[22] = 1 * c.A_shoulder_ropt2.value,
    n_A_randopt[23] = 1 * c.SHOULDER_ROPT2.value,
    n_A_randopt[24] = 1 * c.A_shoes_ropt1.value,
    n_A_randopt[25] = 1 * c.SHOES_ROPT1.value,
    n_A_randopt[26] = 1 * c.A_shoes_ropt2.value,
    n_A_randopt[27] = 1 * c.SHOES_ROPT2.value,
    // headgear enchant
    m_HeadgearEnchant.includes(n_A_Equip[2]) ? (n_A_enchant[0] = 1 * c.A_head_enchant.value, c.A_head_enchant.style.display = 'inline-block', document.getElementById("A_head_enchant_row").style.display = 'table-row') : (n_A_enchant[0] = 0, c.A_head_enchant.style.display = 'none', document.getElementById("A_head_enchant_row").style.display = 'none', c.A_head_enchant.value = 0),
    m_ArmorEnchant.includes(n_A_Equip[6]) ? (
        n_A_enchant[1] = 1 * c.A_body_enchant1.value, c.A_body_enchant1.style.display = 'inline-block',
        n_A_enchant[2] = 1 * c.A_body_enchant2.value, c.A_body_enchant2.style.display = 'inline-block',
        n_A_randopt[16] = 0, n_A_randopt[17] = 0, c.A_body_ropt1.style.display = 'none', c.BODY_ROPT1.style.display = 'none',
        n_A_randopt[18] = 0, n_A_randopt[19] = 0, c.A_body_ropt2.style.display = 'none', c.BODY_ROPT2.style.display = 'none'
    ) : (
        n_A_enchant[1] = 0, c.A_body_enchant1.style.display = 'none', c.A_body_enchant1.value = 0,
        n_A_enchant[2] = 0, c.A_body_enchant2.style.display = 'none', c.A_body_enchant2.value = 0,
        c.A_body_ropt1.style.display = 'inline-block', c.BODY_ROPT1.style.display = 'inline-block',
        c.A_body_ropt2.style.display = 'inline-block', c.BODY_ROPT2.style.display = 'inline-block'
    ),
    m_GarmentEnchant.includes(n_A_Equip[7]) ? (
        n_A_enchant[3] = 1 * c.A_shoulder_enchant1.value, c.A_shoulder_enchant1.style.display = 'inline-block',
        n_A_enchant[4] = 1 * c.A_shoulder_enchant2.value, c.A_shoulder_enchant2.style.display = 'inline-block',
        n_A_randopt[20] = 0, n_A_randopt[21] = 0, c.A_shoulder_ropt1.style.display = 'none', c.SHOULDER_ROPT1.style.display = 'none',
        n_A_randopt[22] = 0, n_A_randopt[23] = 0, c.A_shoulder_ropt2.style.display = 'none', c.SHOULDER_ROPT2.style.display = 'none'
    ) : (
        n_A_enchant[3] = 0, c.A_shoulder_enchant1.style.display = 'none', c.A_shoulder_enchant1.value = 0,
        n_A_enchant[4] = 0, c.A_shoulder_enchant2.style.display = 'none', c.A_shoulder_enchant2.value = 0,
        c.A_shoulder_ropt1.style.display = 'inline-block', c.SHOULDER_ROPT1.style.display = 'inline-block',
        c.A_shoulder_ropt2.style.display = 'inline-block', c.SHOULDER_ROPT2.style.display = 'inline-block'
    ),
    m_ShoesEnchant.includes(n_A_Equip[8]) ? (
        n_A_enchant[5] = 1 * c.A_shoes_enchant1.value, c.A_shoes_enchant1.style.display = 'inline-block',
        n_A_enchant[6] = 1 * c.A_shoes_enchant2.value, c.A_shoes_enchant2.style.display = 'inline-block',
        n_A_randopt[24] = 0, n_A_randopt[25] = 0, c.A_shoes_ropt1.style.display = 'none', c.SHOES_ROPT1.style.display = 'none',
        n_A_randopt[26] = 0, n_A_randopt[27] = 0, c.A_shoes_ropt2.style.display = 'none', c.SHOES_ROPT2.style.display = 'none'
    ) : (
        n_A_enchant[5] = 0, c.A_shoes_enchant1.style.display = 'none', c.A_shoes_enchant1.value = 0,
        n_A_enchant[6] = 0, c.A_shoes_enchant2.style.display = 'none', c.A_shoes_enchant2.value = 0,
        c.A_shoes_ropt1.style.display = 'inline-block', c.SHOES_ROPT1.style.display = 'inline-block',
        c.A_shoes_ropt2.style.display = 'inline-block', c.SHOES_ROPT2.style.display = 'inline-block'
    ),
    n_A_Weapon_element = 1 * c.A_Weapon_element.value,
    n_A_Weapon2_element = n_A_Weapon_element;
    for (n_SkillSW && (setBuf2ToSC(0, 1 * c.A2_Skill0.value),
        setBuf2ToSC(1, 1 * c.A2_Skill1.value),
        setBuf2ToSC(2, 1 * c.A2_Skill2.value),
        setBuf2ToSC(3, 1 * c.A2_Skill3.checked),
        setBuf2ToSC(4, 1 * c.A2_Skill4.value),
        setBuf2ToSC(5, 1 * c.A2_Skill5.checked),
        setBuf2ToSC(6, 1 * c.A2_Skill6.value),
        setBuf2ToSC(7, 1 * c.A2_Skill7.checked),
        setBuf2ToSC(8, 1 * c.A2_Skill8.checked),
        setBuf2ToSC(9, 1 * c.A2_Skill9.value),
        setBuf2ToSC(10, 1 * c.A2_Skill10.value),
        setBuf2ToSC(11, 1 * c.A2_Skill11.value),
        setBuf2ToSC(12, 1 * c.A2_Skill12.value),
        setBuf2ToSC(13, 1 * c.A2_Skill13.value),
        setBuf2ToSC(14, 1 * c.A2_Skill14.value),
        setBuf2ToSC(15, 1 * c.A2_Skill15.value),
        setBuf2ToSC(16, 1 * c.A5_Skill0.checked),
        setBuf2ToSC(17, 1 * c.A5_Skill1.checked),
        setBuf2ToSC(18, 1 * c.A5_Skill2.checked),
        setBuf2ToSC(19, 1 * c.A5_Skill3.checked),
        setBuf2ToSC(20, 1 * c.A5_Skill4.checked),
        setBuf2ToSC(21, 1 * c.A5_Skill5.checked)),
        n_Skill3SW && (n_A_Buf3[0] = 1 * c.A3_Skill0_1.value,
            n_A_Buf3[1] = 1 * c.A3_Skill1_1.value,
            n_A_Buf3[2] = 1 * c.A3_Skill2_1.value,
            n_A_Buf3[3] = 1 * c.A3_Skill3_1.value,
            n_A_Buf3[4] = 1 * c.A3_Skill4_1.value,
            n_A_Buf3[5] = 1 * c.A3_Skill5_1.value,
            n_A_Buf3[6] = 1 * c.A3_Skill6_1.value,
            n_A_Buf3[7] = 1 * c.A3_Skill7.value,
            n_A_Buf3[8] = 1 * c.A3_Skill8.value,
            n_A_Buf3[9] = 1 * c.A3_Skill9.value,
            n_A_Buf3[10] = 1 * c.A3_Skill10.value,
            n_A_Buf3[11] = 1 * c.A3_Skill11.checked,
            n_A_Buf3[45] = c.A3_Skill12.checked,
            n_A_Buf3[46] = c.A3_Skill13.checked,
            n_A_Buf3[47] = c.A3_Skill14.checked,
            n_A_Buf3[48] = c.A3_Skill15.checked,
            n_A_Buf3[11] && (n_A_Buf3[12] = 1 * c.A3_Skill11_STR.value,
                n_A_Buf3[13] = 1 * c.A3_Skill11_AGI.value,
                n_A_Buf3[14] = 1 * c.A3_Skill11_VIT.value,
                n_A_Buf3[15] = 1 * c.A3_Skill11_INT.value,
                n_A_Buf3[16] = 1 * c.A3_Skill11_DEX.value,
                n_A_Buf3[17] = 1 * c.A3_Skill11_LUK.value,
                n_A_Buf3[18] = 1 * c.A3_Skill11a.checked),
            n_A_Buf3[0] && (n_A_Buf3[20] = 1 * c.A3_Skill0_2.value,
                n_A_Buf3[30] = 1 * c.A3_Skill0_3.value,
                n_A_Buf3[37] = 1 * c.A3_Skill0_4.value),
            n_A_Buf3[1] && (n_A_Buf3[21] = 1 * c.A3_Skill1_2.value,
                n_A_Buf3[31] = 1 * c.A3_Skill1_3.value),
            n_A_Buf3[2] && (n_A_Buf3[22] = 1 * c.A3_Skill2_2.value,
                n_A_Buf3[29] = 1 * c.A3_Skill2_3.value,
                n_A_Buf3[32] = 1 * c.A3_Skill2_4.value),
            n_A_Buf3[3] && (n_A_Buf3[23] = 1 * c.A3_Skill3_2.value,
                n_A_Buf3[33] = 1 * c.A3_Skill3_3.value),
            n_A_Buf3[4] && (n_A_Buf3[24] = 1 * c.A3_Skill4_2.value,
                n_A_Buf3[34] = 1 * c.A3_Skill4_3.value),
            n_A_Buf3[5] && (n_A_Buf3[25] = 1 * c.A3_Skill5_2.value,
                n_A_Buf3[35] = 1 * c.A3_Skill5_3.value),
            n_A_Buf3[6] && (n_A_Buf3[26] = 1 * c.A3_Skill6_2.value,
                n_A_Buf3[36] = 1 * c.A3_Skill6_3.value)),
        n_Skill4SW && (n_A_Buf3[40] = 1 * c.A3_Skill40.checked,
            n_A_Buf3[41] = 1 * c.A3_Skill41.value,
            n_A_Buf3[42] = 1 * c.A3_Skill42.value,
            n_A_Buf3[43] = 1 * c.A3_Skill43.value,
            n_A_Buf3[44] = 1 * c.A3_Skill44.value),
        n_Skill6SW && (n_A_Buf6[0] = 1 * c.A6_Skill0.value,
            n_A_Buf6[1] = 1 * c.A6_Skill1.value,
            n_A_Buf6[3] = 1 * c.A6_Skill3.checked,
            n_A_Buf6[4] = 1 * c.A6_Skill4.value,
            n_A_Buf6[5] = 1 * c.A6_Skill5.value,
            n_A_Buf6[6] = 1 * c.A6_Skill6.checked,
            n_A_Buf6[7] = 1 * c.A6_Skill7.checked,
            n_A_Buf6[8] = 1 * c.A6_Skill8.checked,
            n_A_Buf6[9] = 1 * c.A6_Skill9.checked,
            n_A_Buf6[10] = 1 * c.A6_Skill10.checked,
            n_A_Buf6[11] = 1 * c.A6_Skill11.checked,
            n_A_Buf6[12] = 1 * c.A6_Skill12.checked,
            n_A_Buf6[13] = 1 * c.A6_Skill13.checked,
            n_A_Buf6[14] = 1 * c.A6_Skill14.checked,
            n_A_Buf6[15] = 1 * c.A6_Skill15.checked,
            n_A_Buf6[16] = 1 * c.A6_Skill16.checked,
            n_A_Buf6[17] = 1 * c.A6_Skill17.checked,
            n_A_Buf6[18] = 1 * c.A6_Skill18.value,
            n_A_Buf6[19] = 1 * c.A_debuf0.value,
            n_A_Buf6[20] = 1 * c.A_debuf1.value,
            n_A_Buf6[21] = 1 * c.A_debuf2.checked,
            n_A_Buf6[22] = 1 * c.A_debuf3.checked),
        n_Skill7SW && (n_A_Buf7[0] = 1 * c.A7_Skill0.checked,
            n_A_Buf7[1] = 1 * c.A7_Skill1.checked,
            n_A_Buf7[2] = 1 * c.A7_Skill2.checked,
            n_A_Buf7[3] = 1 * c.A7_Skill3.value,
            n_A_Buf7[4] = 1 * c.A7_Skill4.value,
            n_A_Buf7[5] = 1 * c.A7_Skill5.value,
            n_A_Buf7[6] = 1 * c.A7_Skill6.value,
            n_A_Buf7[7] = 1 * c.A7_Skill7.value,
            n_A_Buf7[8] = 1 * c.A7_Skill8.value,
            n_A_Buf7[9] = 1 * c.A7_Skill9.checked,
            n_A_Buf7[10] = 1 * c.A7_Skill10.checked,
            n_A_Buf7[11] = 1 * c.A7_Skill11.checked,
            n_A_Buf7[12] = 1 * c.A7_Skill12.checked,
            n_A_Buf7[13] = 1 * c.A7_Skill13.checked,
            n_A_Buf7[14] = 1 * c.A7_Skill14.checked,
            n_A_Buf7[16] = 1 * c.A7_Skill16.checked,
            n_A_Buf7[17] = 1 * c.A7_Skill17.checked,
            n_A_Buf7[18] = 1 * c.A7_Skill18.checked,
            n_A_Buf7[19] = 1 * c.A7_Skill19.checked,
            n_A_Buf7[20] = 1 * c.A7_Skill20.checked,
            n_A_Buf7[21] = 1 * c.A7_Skill21.checked,
            n_A_Buf7[22] = 1 * c.A7_Skill22.checked,
            n_A_Buf7[23] = 1 * c.A7_Skill23.checked,
            n_A_Buf7[24] = 1 * c.A7_Skill24.checked,
            n_A_Buf7[25] = 1 * c.A7_Skill25.checked,
            n_A_Buf7[26] = 1 * c.A7_Skill26.checked,
            n_A_Buf7[27] = 1 * c.A7_Skill27.checked,
            n_A_Buf7[28] = 1 * c.A7_Skill28.checked,
            n_A_Buf7[29] = 1 * c.A7_Skill29.checked,
            n_A_Buf7[30] = 1 * c.A7_Skill30.checked,
            n_A_Buf7[31] = 1 * c.A7_Skill31.checked,
            n_A_Buf7[32] = 1 * c.A7_Skill32.checked,
            n_A_Buf7[33] = 1 * c.A7_Skill33.checked,
            n_A_Buf7[34] = 1 * c.A7_Skill34.checked,
            n_A_Buf7[35] = 1 * c.A_SpeedPOT.value,
            n_A_Buf7[36] = 1 * c.A7_Skill36.checked,
            n_A_Buf7[37] = 1 * c.A7_Skill37.checked,
            n_A_Buf7[38] = 1 * c.A7_Skill38.checked,
            n_A_Buf7[39] = 1 * c.A7_Skill39.value,
            n_A_Buf7[40] = 1 * c.A7_Skill40.value,
            n_A_Buf7[41] = 1 * c.A7_Skill41.checked,
            n_A_Buf7[42] = 1 * c.A7_Skill42.value,
            n_A_Buf7[43] = 1 * c.A7_Skill43.checked,
            n_A_Buf7[44] = 1 * c.A7_Skill44.checked,
            n_A_Buf7[45] = 1 * c.A7_Skill45.checked,
            n_A_Buf7[46] = 1 * c.A7_Skill46.checked,
            n_A_Buf7[47] = 1 * c.A7_Skill47.checked,
            n_A_Buf7[48] = 1 * c.A7_Skill48.checked,
            n_A_Buf7[49] = 1 * c.A7_Skill49.checked,
            n_A_Buf7[50] = 1 * c.A7_Skill50.checked,
            n_A_Buf7[51] = 1 * c.A7_Skill51.checked),
        n_Skill8SW && (n_A_Buf8[0] = 1 * c.A8_Skill0.value,
            n_A_Buf8[1] = 1 * c.A8_Skill1.value,
            n_A_Buf8[2] = 1 * c.A8_Skill2.checked,
            n_A_Buf8[3] = 1 * c.A8_Skill3.value,
            n_A_Buf8[5] = 1 * c.A8_Skill5.value,
            n_A_Buf8[6] = 1 * c.A8_Skill6.value,
            n_A_Buf8[7] = 1 * c.A8_Skill7.value,
            n_A_Buf8[8] = 1 * c.A8_Skill8.value,
            n_A_Buf8[9] = 1 * c.A8_Skill9.value,
            n_A_Buf8[10] = 1 * c.A8_Skill10.value,
            n_A_Buf8[11] = 1 * c.A8_Skill11.value),
        n_Skill9SW && (n_A_Buf9[0] = 1 * c.A9_Skill0.value,
            n_A_Buf9[1] = 1 * c.ARG_RC0.value,
            n_A_Buf9[2] = 1 * c.A9_Skill1.value,
            n_A_Buf9[3] = 1 * c.ARG_RC1.value,
            n_A_Buf9[4] = 1 * c.A9_Skill2.value,
            n_A_Buf9[5] = 1 * c.ARG_RC2.value,
            n_A_Buf9[6] = 1 * c.A9_Skill3.value,
            n_A_Buf9[7] = 1 * c.ARG_RC3.value,
            n_A_Buf9[8] = 1 * c.A9_Skill4.value,
            n_A_Buf9[9] = 1 * c.ARG_RC4.value,
            n_A_Buf9[10] = 1 * c.A9_Skill5.value,
            n_A_Buf9[11] = 1 * c.ARG_RC5.value,
            n_A_Buf9[12] = 1 * c.A9_Skill6.value,
            n_A_Buf9[13] = 1 * c.ARG_RC6.value,
            n_A_Buf9[14] = 1 * c.A9_Skill7.value,
            n_A_Buf9[15] = 1 * c.ARG_RC7.value,
            n_A_Buf9[16] = 1 * c.ARG_RC43.value,
            n_A_Buf9[17] = 1 * c.ARG_RC44.value,
            n_A_Buf9[18] = 1 * c.ARG_RC45.value,
            n_A_Buf9[19] = 1 * c.ARG_RC47.value,
            n_A_Buf9[20] = 1 * c.A9_Skill8.value,
            n_A_Buf9[21] = 1 * c.ARG_RC48.value,
            n_A_Buf9[22] = 1 * c.A9_Skill9.value,
            n_A_Buf9[30] = 1 * c.ARG_RC15.value,
            n_A_Buf9[31] = 1 * c.ARG_RC16.value,
            n_A_Buf9[32] = 1 * c.ARG_RC17.value,
            n_A_Buf9[33] = 1 * c.ARG_RC18.value,
            n_A_Buf9[34] = 1 * c.ARG_RC19.value,
            n_A_Buf9[35] = 1 * c.ARG_RC20.value,
            n_A_Buf9[36] = 1 * c.ARG_RC21.value,
            n_A_Buf9[37] = 1 * c.ARG_RC22.value,
            n_A_Buf9[38] = 1 * c.ARG_RC23.value,
            n_A_Buf9[39] = 1 * c.ARG_RC24.value,
            n_A_Buf9[40] = 1 * c.ARG_RC25.value,
            n_A_Buf9[41] = 1 * c.ARG_RC26.value,
            n_A_Buf9[42] = 1 * c.ARG_RC27.value,
            n_A_Buf9[43] = 1 * c.ARG_RC28.value,
            n_A_Buf9[44] = 1 * c.ARG_RC29.value,
            n_A_Buf9[45] = 1 * c.ARG_RC30.value,
            n_A_Buf9[46] = 1 * c.ARG_RC31.value,
            n_A_Buf9[47] = 1 * c.ARG_RC32.value,
            n_A_Buf9[48] = 1 * c.ARG_RC33.value,
            n_A_Buf9[49] = 1 * c.ARG_RC34.value,
            n_A_Buf9[50] = 1 * c.ARG_RC35.value,
            n_A_Buf9[51] = 1 * c.ARG_RC36.value,
            n_A_Buf9[52] = 1 * c.ARG_RC37.value,
            n_A_Buf9[53] = 1 * c.ARG_RC38.value,
            n_A_Buf9[54] = 1 * c.ARG_RC39.value,
            n_A_Buf9[55] = 1 * c.ARG_RC40.value,
            n_A_Buf9[56] = 1 * c.ARG_RC41.value,
            n_A_Buf9[57] = 1 * c.ARG_RC42.value,
            n_A_Buf9[58] = 0,
            n_A_Buf9[59] = 0),
        n_Skill10SW && (n_B_manual[1] = 1 * c.BRG_RC0.value,
            n_B_manual[2] = 1 * c.Bman1.value,
            n_B_manual[3] = 1 * c.BRG_RC1.value,
            n_B_manual[4] = 1 * c.Bman2.value,
            n_B_manual[5] = 1 * c.BRG_RC2.value,
            n_B_manual[7] = 1 * c.BRG_RC3.value,
            n_B_manual[9] = 1 * c.BRG_RC4.value,
            n_B_manual[21] = 1 * c.BRG_RC10.value,
            n_B_manual[30] = 1 * c.BRG_RC15.value,
            n_B_manual[31] = 1 * c.BRG_RC16.value,
            n_B_manual[34] = 1 * c.BRG_RC19.value,
            n_B_manual[35] = 1 * c.BRG_RC20.value,
            n_B_manual[36] = 1 * c.BRG_RC21.value,
            n_B_manual[37] = 1 * c.BRG_RC22.value,
            n_B_manual[38] = 1 * c.BRG_RC23.value,
            n_B_manual[39] = 1 * c.BRG_RC24.value,
            n_B_manual[40] = 1 * c.BRG_RC25.value,
            n_B_manual[41] = 1 * c.BRG_RC26.value,
            n_B_manual[42] = 1 * c.BRG_RC27.value,
            n_B_manual[43] = 1 * c.BRG_RC28.value,
            n_B_manual[44] = 1 * c.BRG_RC29.value,
            n_B_manual[48] = 1 * c.BRG_RC33.value,
            n_B_manual[49] = 1 * c.BRG_RC34.value,
            n_B_manual[50] = 1 * c.BRG_RC35.value,
            n_B_manual[51] = 1 * c.BRG_RC36.value,
            n_B_manual[52] = 1 * c.BRG_RC37.value,
            n_B_manual[53] = 1 * c.BRG_RC38.value,
            n_B_manual[54] = 1 * c.BRG_RC39.value,
            n_B_manual[55] = 1 * c.BRG_RC40.value,
            n_B_manual[56] = 1 * c.Bman3.value,
            n_B_manual[57] = 1 * c.Bman4.value,
            n_B_manual[58] = 1 * c.B_mEle.checked,
            n_B_manual[59] = 1 * c.Bman5.value,
            n_B_manual[60] = 1 * c.B_mSize.checked),
        _ = 0; _ <= 22; _++)
        n_B[_] = m_Monster[c.B_Enemy.value][_];
    n_A_Bodyelement = 0;
    for (_ = 1; _ <= 210; _++)
        n_tok[_] = 0,
            n_tok[_] += StPlusCalc2(_),
            n_tok[_] += StPlusCard(_);
    for (_ = 290; _ <= 400; _++) // add more options
        n_tok[_] = 0,
            n_tok[_] += StPlusCalc2(_),
            n_tok[_] += StPlusCard(_);
    restrictEquipslot(),
    equip_restrict ? (n_tok[195] ? (c.A_LEFT_REFINE.disabled = !0,
            c.A_LEFT_REFINE.value = 0,
            c.A_left.disabled = !0,
            c.A_left.value = 305,
            c.A_left_card.disabled = !0,
            c.A_left_card.value = 0) : 9 == n_A_WeaponType && (c.A_LEFT_REFINE.disabled = !1,
                c.A_left.disabled = !1,
                card_restrict && 0 != m_Item[c.A_left.value][5] && (c.A_left_card.disabled = !1)),
            1 == n_tok[200] ? (c.A_head2.disabled = !0,
                c.A_head2.value = 243,
                c.A_head2_card.disabled = !0,
                c.A_head2_card.value = 0,
                c.A_head3.disabled = !1) : 2 == n_tok[200] ? (c.A_head2.disabled = !1,
                    c.A_head2_card.disabled = !1,
                    c.A_head3.disabled = !0,
                    c.A_head3.value = 268) : 3 == n_tok[200] ? (c.A_head3.disabled = !0,
                        c.A_head3.value = 268) : n_tok[200] >= 4 ? (c.A_head2.disabled = !0,
                            c.A_head2.value = 243,
                            c.A_head2_card.disabled = !0,
                            c.A_head2_card.value = 0,
                            c.A_head3.disabled = !0,
                            c.A_head3.value = 268) : (c.A_head2.disabled = !1,
                                c.A_head3.disabled = !1)) : (c.A_LEFT_REFINE.disabled = !1,
                                    c.A_left.disabled = !1,
                                    card_restrict = 1 * c.restrict_cardslot.checked,
                                    card_restrict || (c.A_left_card.disabled = !1,
                                        c.A_head2_card.disabled = !1),
                                    c.A_head2.disabled = !1,
                                    c.A_head3.disabled = !1),
    ClickB_Enemy(c.B_Enemy.value),
    PopulatePlayerData();
    KakutyouKansuu();
}

function StPlusCalc2(_) {
    var n = 0;
    for (a = 0; a <= 20; a++)
        for (var e = 0; 0 != m_Item[n_A_Equip[a]][e + 11]; e += 2)
            _ == Math.abs(m_Item[n_A_Equip[a]][e + 11]) && (n += m_Item[n_A_Equip[a]][e + 12]);
    for (a = 0; a <= 5; a++)
        for (var e = 0; 0 != m_ShadowEquips[n_A_Shadow[a]][e + 6]; e += 2)
            _ == Math.abs(m_ShadowEquips[n_A_Shadow[a]][e + 6]) && (n += m_ShadowEquips[n_A_Shadow[a]][e + 7]);
    for (a = 0; a <= 10; a++)
        for (var e = 0; 0 != m_Enchant[n_A_enchant[a]][e + 2]; e += 2)
            _ == Math.abs(m_Enchant[n_A_enchant[a]][e + 2]) && (n += m_Enchant[n_A_enchant[a]][e + 3]);
    return n
}
function StPlusCard(_) { // buffs / stats from cards perhaps
    for (var n = 0, a = 0; a <= 25; a++)
        for (var e = 0; 0 != m_Card[n_A_card[a]][e + 4]; e += 2)
            _ == Math.abs(m_Card[n_A_card[a]][e + 4]) && (n += m_Card[n_A_card[a]][e + 5]);
    for (e = 0; 0 != m_PET[n_A_Buf8[0]][e + 3]; e += 2)
        _ == Math.abs(m_PET[n_A_Buf8[0]][e + 3]) && (n += m_PET[n_A_Buf8[0]][e + 4]);
    var t = [0, 0, 0, 0];
    for (a = 0; a <= 3; a++)
        t[a] = n_A_Buf8[8 + a];
    for (a = 0; a <= 2; a++)
        for (e = a + 1; e <= 3; e++)
            t[a] == t[e] && (t[e] = 0);
    for (a = 0; a <= 3; a++)
        for (e = 0; 0 != m_TempEffect[t[a]][5 + e]; e += 2)
            _ == Math.abs(m_TempEffect[t[a]][5 + e]) && (n += m_TempEffect[t[a]][6 + e]);
    for (a = 0; a < 8; a += 2) // buffs from temp effects ?
        _ == n_A_Buf9[a] + 30 && n_A_Buf9[a] < 20 && (n += n_A_Buf9[a + 1]); // % atk based dmg for races and elements (_ = option id in comparison to the effects)
    for (a = 0; a < 8; a += 2)
        _ == n_A_Buf9[a] + 7 && n_A_Buf9[a] >= 20 && n_A_Buf9[a] < 23 && (n += n_A_Buf9[a + 1]); // % atk based dmg for sizes
    for (a = 0; a < 8; a += 2)
        _ == n_A_Buf9[a] + 3 && 23 == n_A_Buf9[a] || _ == n_A_Buf9[a] + 57 && 24 == n_A_Buf9[a] || _ == n_A_Buf9[a] + 59 && 25 == n_A_Buf9[a] ? n += n_A_Buf9[a + 1] : 1063 != _ && 1064 != _ && 1065 != _ && 1575 != _ && 1576 != _ || 26 != n_A_Buf9[a] ? _ == n_A_Buf9[a] + 55 && 27 == n_A_Buf9[a] || _ == n_A_Buf9[a] + 55 && 28 == n_A_Buf9[a] ? n += n_A_Buf9[a + 1] : 1495 != _ && 1496 != _ || 29 != n_A_Buf9[a] || (n += n_A_Buf9[a + 1]) : n += n_A_Buf9[a + 1]; // % atk based dmg on different types
    for (a = 8; a < 16; a += 2)
        _ == n_A_Buf9[a] + 50 && n_A_Buf9[a] < 20 && (n += n_A_Buf9[a + 1]); // ele and race reduction
    for (a = 8; a < 16; a += 2)
        _ == n_A_Buf9[a] + 170 && n_A_Buf9[a] >= 20 && n_A_Buf9[a] < 23 && (n += n_A_Buf9[a + 1]); // size reduction
    for (a = 8; a < 16; a += 2)
        _ == n_A_Buf9[a] + 54 && 23 == n_A_Buf9[a] || _ == n_A_Buf9[a] + 55 && 24 == n_A_Buf9[a] ? n += n_A_Buf9[a + 1] : 3063 != _ && 3064 != _ && 3065 != _ || 25 != n_A_Buf9[a] || (n += n_A_Buf9[a + 1]); // type reduction
    for (a = 47; a < 53; a++)
        _ == a - 46 && (n += n_A_Buf9[a]); // stats
    for (a = 0; a <= 26; a += 2) // adds effects from random options
        _ == m_RandomOpt[n_A_randopt[a]][2] && (_ == 73 || _ == 370) && (n -= n_A_randopt[a + 1]),
            _ == m_RandomOpt[n_A_randopt[a]][2] && (_ != 73 && _ != 370) && (n += n_A_randopt[a + 1]);
    return 80 == _ && (n += n_A_Buf9[41]), // atk% based dmg on any target
        290 == _ && (n += n_A_Buf9[16]), // def ignore
        295 == _ && (n += n_A_Buf9[17]), // mdef ignore
        78 == _ && (n += n_A_Buf9[18]), // long range resistance
        n
}
function sort(_) {
    for (var n = 1; "EOF" != _[n]; n++)
        for (var a = n; a > 0; a--)
            if (m_Item[_[a - 1]][8] > m_Item[_[a]][8]) {
                var e = _[a - 1];
                _[a - 1] = _[a],
                    _[a] = e
            }
    return _
}

function WeaponSet(jobId) {
    if (jobId === undefined) {
        jobId = n_A_JOB;
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
        n_A_WeaponType = weaponType;

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
            } else if (SuperNoviceFullWeaponCHECK && itemLevel == 4) {
                availableWeapons.push(itemId);
            }
        }

        if (availableWeapons.length > 0) {
            availableWeapons.push("EOF");
            const sortedWeapons = sort(availableWeapons);

            for (let i = 0; i < sortedWeapons.length - 1; i++) {
                const itemId = sortedWeapons[i];
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
        jobId = n_A_JOB;
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
            availableWeapons.push("EOF");
            const sortedWeapons = sort(availableWeapons);

            for (let i = 0; i < sortedWeapons.length - 1; i++) {
                const itemId = sortedWeapons[i];
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
function WeaponSet2(_) {
    var n = 1 * c.restrict_lvlequip.checked;
    if (!_ || 1 != n) {
        n_A_JobSet();
        for (var a = 0; a < c.A_head1.length; a++)
            c.A_head1.options[0] = null;
        for (a = 0; a < c.A_head2.length; a++)
            c.A_head2.options[0] = null;
        for (a = 0; a < c.A_head3.length; a++)
            c.A_head3.options[0] = null;
        for (a = 0; a < c.A_left.length; a++)
            c.A_left.options[0] = null;
        for (a = 0; a < c.A_body.length; a++)
            c.A_body.options[0] = null;
        for (a = 0; a < c.A_shoulder.length; a++)
            c.A_shoulder.options[0] = null;
        for (a = 0; a < c.A_shoes.length; a++)
            c.A_shoes.options[0] = null;
        for (a = 0; a < c.A_acces1.length; a++)
            c.A_acces1.options[0] = null,
                c.A_acces2.options[0] = null;
        if (0 == first_check)
            return first_check = 1,
                c.A_head1.options[0] = new Option(m_Item[142][8], m_Item[142][0]),
                c.A_head2.options[0] = new Option(m_Item[243][8], m_Item[243][0]),
                c.A_head3.options[0] = new Option(m_Item[268][8], m_Item[268][0]),
                c.A_left.options[0] = new Option(m_Item[305][8], m_Item[305][0]),
                c.A_body.options[0] = new Option(m_Item[279][8], m_Item[279][0]),
                c.A_shoulder.options[0] = new Option(m_Item[311][8], m_Item[311][0]),
                c.A_shoes.options[0] = new Option(m_Item[317][8], m_Item[317][0]),
                c.A_acces1.options[0] = new Option(m_Item[326][8], m_Item[326][0]),
                void (c.A_acces2.options[0] = new Option(m_Item[326][8], m_Item[326][0]));
        first_check = 2;
        var e = new Array
            , t = 1 * c.restrict_jobequip.checked;
        n = 1 * c.restrict_lvlequip.checked;
        for (a = 0; a <= 7; a++)
            e[a] = new Array;
        var A = new Array;
        for (a = 0; a <= 7; a++)
            A[a] = 0;
        for (a = 0; a <= ItemMax; a++)
            50 == m_Item[a][1] && (1 == JobEquipItemSearch(m_Item[a][2]) || SuperNoviceFullWeaponCHECK || 0 == t) && (m_Item[a][7] <= n_A_BaseLV || SuperNoviceFullWeaponCHECK || 0 == n) ? (e[0][A[0]] = a,
                A[0]++) : 51 == m_Item[a][1] && (1 == JobEquipItemSearch(m_Item[a][2]) || SuperNoviceFullWeaponCHECK || 0 == t) && (m_Item[a][7] <= n_A_BaseLV || SuperNoviceFullWeaponCHECK || 0 == n) ? (e[1][A[1]] = a,
                    A[1]++) : 52 == m_Item[a][1] && (1 == JobEquipItemSearch(m_Item[a][2]) || SuperNoviceFullWeaponCHECK || 0 == t) && (m_Item[a][7] <= n_A_BaseLV || SuperNoviceFullWeaponCHECK || 0 == n) ? (e[2][A[2]] = a,
                        A[2]++) : 61 != m_Item[a][1] || 1 != JobEquipItemSearch(m_Item[a][2]) && 0 != t || !(m_Item[a][7] <= n_A_BaseLV || 0 == n) ? 60 != m_Item[a][1] || 1 != JobEquipItemSearch(m_Item[a][2]) && 0 != t || !(m_Item[a][7] <= n_A_BaseLV || 0 == n) ? 62 != m_Item[a][1] || 1 != JobEquipItemSearch(m_Item[a][2]) && 0 != t || !(m_Item[a][7] <= n_A_BaseLV || 0 == n) ? 63 != m_Item[a][1] || 1 != JobEquipItemSearch(m_Item[a][2]) && 0 != t || !(m_Item[a][7] <= n_A_BaseLV || 0 == n) ? 64 != m_Item[a][1] || 1 != JobEquipItemSearch(m_Item[a][2]) && 0 != t || !(m_Item[a][7] <= n_A_BaseLV || 0 == n) || (e[7][A[7]] = a,
                            A[7]++) : (e[6][A[6]] = a,
                                A[6]++) : (e[5][A[5]] = a,
                                    A[5]++) : (e[4][A[4]] = a,
                                        A[4]++) : (e[3][A[3]] = a,
                                            A[3]++);
        for (a = 0; a <= 7; a++)
            e[a][A[a]] = "EOF";
        for (var l = 0; l <= 7; l++)
            e[l] = sort(e[l]);
        var o = 0
            , u = "";
        for (a = 0; a < A[0]; a++)
            o = e[0][a],
                //u = m_Item[o][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[o][5] ? c.A_head1.options[a] = new Option(m_Item[o][8] + u + " [" + m_Item[o][5] + "]", m_Item[o][0]) : c.A_head1.options[a] = new Option(m_Item[o][8] + u, m_Item[o][0]);
        for (a = 0; a < A[1]; a++)
            o = e[1][a],
                //u = m_Item[o][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[o][5] ? c.A_head2.options[a] = new Option(m_Item[o][8] + u + " [" + m_Item[o][5] + "]", m_Item[o][0]) : c.A_head2.options[a] = new Option(m_Item[o][8] + u, m_Item[o][0]);
        for (a = 0; a < A[2]; a++)
            o = e[2][a],
                //u = m_Item[o][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[o][5] ? c.A_head3.options[a] = new Option(m_Item[o][8] + u + " [" + m_Item[o][5] + "]", m_Item[o][0]) : c.A_head3.options[a] = new Option(m_Item[o][8] + u, m_Item[o][0]);
        for (a = 0; a < A[3]; a++)
            o = e[3][a],
                //u = m_Item[o][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[o][5] ? c.A_left.options[a] = new Option(m_Item[o][8] + u + " [" + m_Item[o][5] + "]", m_Item[o][0]) : c.A_left.options[a] = new Option(m_Item[o][8] + u, m_Item[o][0]);
        for (a = 0; a < A[4]; a++)
            o = e[4][a],
                //u = m_Item[o][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[o][5] ? c.A_body.options[a] = new Option(m_Item[o][8] + u + " [" + m_Item[o][5] + "]", m_Item[o][0]) : c.A_body.options[a] = new Option(m_Item[o][8] + u, m_Item[o][0]);
        for (a = 0; a < A[5]; a++)
            o = e[5][a],
                //u = m_Item[o][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[o][5] ? c.A_shoulder.options[a] = new Option(m_Item[o][8] + u + " [" + m_Item[o][5] + "]", m_Item[o][0]) : c.A_shoulder.options[a] = new Option(m_Item[o][8] + u, m_Item[o][0]);
        for (a = 0; a < A[6]; a++)
            o = e[6][a],
                //u = m_Item[o][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[o][5] ? c.A_shoes.options[a] = new Option(m_Item[o][8] + u + " [" + m_Item[o][5] + "]", m_Item[o][0]) : c.A_shoes.options[a] = new Option(m_Item[o][8] + u, m_Item[o][0]);
        for (a = 0; a < A[7]; a++)
            o = e[7][a],
                //u = m_Item[o][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[o][5] ? (c.A_acces1.options[a] = new Option(m_Item[o][8] + u + " [" + m_Item[o][5] + "]", m_Item[o][0]),
                    c.A_acces2.options[a] = new Option(m_Item[o][8] + u + " [" + m_Item[o][5] + "]", m_Item[o][0])) : (c.A_acces1.options[a] = new Option(m_Item[o][8] + u, m_Item[o][0]),
                        c.A_acces2.options[a] = new Option(m_Item[o][8] + u, m_Item[o][0]))
    }
}
function FirstNovis() {
    1 == first_check && (first_check = 2,
        WeaponSet2())
}

function JobEquipItemSearch(searchId) {
    if (searchId >= 2000 && (n_A_JOB <= JOB.HIGH_MERCHANT || n_A_JOB == JOB.NIGHT_WATCH || n_A_JOB == JOB.SOUL_ASCETIC)) {
        searchId -= 2000;
    }

    if (searchId >= 1000 && searchId <= 1999) {
        if (player.status.rebirth != 1)
            return 0;
        searchId -= 1000;
    }

    const equippableWeapons = JOB_EQUIPPABLE_WEAPONS[n_A_JOB] || [];
    return equippableWeapons.includes(searchId) ? 1 : 0;
}

/**
 * Function to set Job and Rebirth status
 */
function n_A_JobSet() {
    let newJob = 1 * c.A_JOB.value;

    const isRebornJob = (newJob >= JOB.LORD_KNIGHT && newJob <= JOB.HIGH_MERCHANT) || (newJob >= JOB.NIGHT_WATCH && newJob <= JOB.SOUL_ASCETIC);

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
    n_A_JOB = newJob;
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

        [JOB.SOUL_LINKER]: 43,
        [JOB.SOUL_ASCETIC]: 43
    }

    return jobClassMap[player.status.job_id] ?? 0;
}

function EquipNumSearch(_) {
    

    for (var n = 0, a = 0; a <= 20; a++)
        _ == n_A_Equip[a] && (n += 1);
    return n
}
function CardNumSearch(_) {
    for (var n = 0, a = 0; a <= 25; a++)
        _ == n_A_card[a] && (n += 1);
    return n
}
function TimeItemNumSearch(_) {
    for (var n = 0, a = 0; a <= 3; a++)
        _ == n_A_Buf8[8 + a] && (n += 1);
    return n
}
function NumSearch(_, n) {
    for (var a = n.length - 1, e = 0; e <= a; e++)
        if (_ == n[e])
            return 1;
    return 0
}

const w_ASSP0bk = new Array(20).fill(999);

function ActiveSkillSetPlus() {
    const w_ASSP0 = new Array(100).fill(999);
    const w_ASSP9 = new Array(100).fill(0);
    let skillIndex = 0;

    for (let slot = 0; slot <= 20; slot++) {
        const itemId = n_A_Equip[slot];
        let bonusIndex = 0;

        while (m_Item[itemId][11 + bonusIndex] !== 0) {
            const bonusType = Math.abs(m_Item[itemId][11 + bonusIndex]);
            const bonusValue = m_Item[itemId][12 + bonusIndex];

            if (bonusType === 220 && m_EnableSkill[bonusValue][1] === 1) {
                w_ASSP0[skillIndex] = m_EnableSkill[bonusValue][2];
                w_ASSP9[skillIndex] = bonusValue + 3000;
                skillIndex++;
            } else if (bonusType === 221 && m_AutoSpellSkill[bonusValue][1] === 1) {
                w_ASSP0[skillIndex] = m_AutoSpellSkill[bonusValue][2];
                w_ASSP9[skillIndex] = bonusValue + 2000;
                skillIndex++;
            }
            bonusIndex += 2;
        }
    }

    for (let cardSlot = 0; cardSlot <= 25; cardSlot++) {
        const cardId = n_A_card[cardSlot];
        let bonusIndex = 0;

        while (m_Card[cardId][4 + bonusIndex] !== 0) {
            const bonusType = m_Card[cardId][4 + bonusIndex];
            const bonusValue = m_Card[cardId][5 + bonusIndex];

            if (bonusType === 220 && m_EnableSkill[bonusValue][1] === 1) {
                w_ASSP0[skillIndex] = m_EnableSkill[bonusValue][2];
                w_ASSP9[skillIndex] = bonusValue + 3000;
                skillIndex++;
            } else if (bonusType === 221 && m_AutoSpellSkill[bonusValue][1] === 1) {
                w_ASSP0[skillIndex] = m_AutoSpellSkill[bonusValue][2];
                w_ASSP9[skillIndex] = bonusValue + 2000;
                skillIndex++;
            }
            bonusIndex += 2;
        }
    }

    if (CardNumSearch(164) && (n_A_JOB === JOB.PRIEST || n_A_JOB === JOB.HIGH_PRIEST)) {
        w_ASSP0[skillIndex] = 162;
        w_ASSP9[skillIndex] = 2095;
        skillIndex++;
    }

    if (CardNumSearch(277) && n_A_JobClass() === JOB.SWORDMAN) {
        w_ASSP0[skillIndex] = 76;
        w_ASSP9[skillIndex] = 2096;
        skillIndex++;
    }

    const scrollSkillIds = [33, 34, 35, 36, 13, 37, 38, 39, 7];
    for (let i = 0; i < scrollSkillIds.length; i++) {
        const skillId = scrollSkillIds[i];
        w_ASSP0[skillIndex] = m_EnableSkill[skillId][2];
        w_ASSP9[skillIndex] = skillId + 5000;
        skillIndex++;
    }

    w_ASSP0[skillIndex] = m_EnableSkill[40][2];
    w_ASSP9[skillIndex] = 5040;
    skillIndex++;

    let skillsChanged = false;
    for (let i = 0; i < 20; i++) {
        if (w_ASSP0bk[i] !== w_ASSP0[i]) {
            skillsChanged = true;
            break;
        }
    }

    if (skillsChanged) {
        let dropDownStartIndex;
        if (c.all_dmgSkills.checked) {
            dropDownStartIndex = 109;
        } else {
            const activeSkills = JOB_ACTIVE_SKILLS[n_A_JOB] || [0];
            dropDownStartIndex = activeSkills.length;
        }

        for (let i = dropDownStartIndex + 20; i >= dropDownStartIndex; i--) {
            c.A_ActiveSkill.options[i] = null;
        }

        let dropDownIndex = dropDownStartIndex;
        for (let i = 0; w_ASSP0[i] !== 999; i++, dropDownIndex++) {
            const skillId = w_ASSP0[i];
            const source = w_ASSP9[i];
            const skillName = m_Skill[skillId][2];
            let label;

            if (source === 5040) {
                label = `${skillName} (Yggdrasil Leaf)`;
            } else if (source >= 5000) {
                label = `${skillName} (scroll skill)`;
            } else if (source >= 3000) {
                label = `${skillName} (acquired skill)`;
            } else {
                label = `${skillName} (auto-casted skill)`;
            }

            c.A_ActiveSkill.options[dropDownIndex] = new Option(label, source);
        }
    }

    for (let i = 0; i < 20; i++) {
        w_ASSP0bk[i] = w_ASSP0[i];
    }

    if (Number(c.A_ActiveSkill.value) === 0)
        c.A_ActiveSkillLV.style.visibility = "hidden";
}
function KakutyouKansuu() {
    displayOtherInfo(1 * c.A_Kakutyou.value);
}
function Kanma(_) {
    var n = ""
        , a = new Array;
    _ < 0 && (_ *= -1,
        n += "-");
    for (var e = 0; 0 != Math.floor(_ / 1e3); e++) {
        var t = _ % 1e3;
        a[e] = 0 == t ? ",000" : t < 10 ? ",00" + t : t < 100 ? ",0" + t : "," + t,
            _ = Math.floor(_ / 1e3)
    }
    for (a[e] = _; e >= 0;)
        n += a[e],
            e--;
    return n
}
function KakutyouKansuu2() {
    displayOtherInfoSelect(1 * c.A_Kakutyou.value);
}
function SetEquipShort() {
    w = 1 * c.A_equipshort.value,
        w > 0 && ("Remove All Cards" != m_CardShort[w][0] ? (0 != m_CardShort[w][2] && (c.A_weapon1_card1.value = m_CardShort[w][2]),
            0 != m_CardShort[w][3] && (c.A_head1_card.value = m_CardShort[w][3]),
            0 != m_CardShort[w][4] && (c.A_left_card.value = m_CardShort[w][4]),
            0 != m_CardShort[w][5] && (c.A_body_card.value = m_CardShort[w][5]),
            0 != m_CardShort[w][6] && (c.A_shoulder_card.value = m_CardShort[w][6]),
            0 != m_CardShort[w][7] && (c.A_shoes_card.value = m_CardShort[w][7]),
            0 != m_CardShort[w][8] && (c.A_acces1_card.value = m_CardShort[w][8]),
            0 != m_CardShort[w][9] && (c.A_acces2_card.value = m_CardShort[w][9]),
            0 != m_CardShort[w][10] && (c.A_head2_card.value = m_CardShort[w][10])) : (c.A_weapon1_card1.value = 0,
                c.A_weapon1_card2.value = 0,
                c.A_weapon1_card3.value = 0,
                c.A_weapon1_card4.value = 0,
                c.A_head1_card.value = 0,
                c.A_head2_card.value = 0,
                c.A_left_card.value = 0,
                c.A_body_card.value = 0,
                c.A_shoulder_card.value = 0,
                c.A_shoes_card.value = 0,
                c.A_acces1_card.value = 0,
                c.A_acces2_card.value = 0),
            ActiveSkillSetPlus())
}
function Setm_CardShort() {
    w = 1 * c.A_cardshort.value,
        w > 0 && (m_CardShort[w][1] < 1e4 ? (c.A_weapon1_card1.value = m_CardShort[w][1],
            c.A_weapon1_card2.value = m_CardShort[w][2],
            c.A_weapon1_card3.value = m_CardShort[w][3],
            c.A_weapon1_card4.value = m_CardShort[w][4],
            16 != w && 17 != w || (w = m_Monster[1 * c.B_Enemy.value][3],
                10 <= w && w <= 14 && (c.A_weapon1_card1.value = 204),
                (20 <= w && w <= 24 || 80 <= w && w <= 94) && (c.A_weapon1_card1.value = 203),
                30 <= w && w <= 34 && (c.A_weapon1_card1.value = 201),
                40 <= w && w <= 44 && (c.A_weapon1_card1.value = 202))) : "Remove All Cards" != m_CardShort[w][0] ? (0 != m_CardShort[w][2] && (c.A_weapon1_card1.value = m_CardShort[w][2]),
                    0 != m_CardShort[w][3] && (c.A_head1_card.value = m_CardShort[w][3]),
                    0 != m_CardShort[w][4] && (c.A_left_card.value = m_CardShort[w][4]),
                    0 != m_CardShort[w][5] && (c.A_body_card.value = m_CardShort[w][5]),
                    0 != m_CardShort[w][6] && (c.A_shoulder_card.value = m_CardShort[w][6]),
                    0 != m_CardShort[w][7] && (c.A_shoes_card.value = m_CardShort[w][7]),
                    0 != m_CardShort[w][8] && (c.A_acces1_card.value = m_CardShort[w][8]),
                    0 != m_CardShort[w][9] && (c.A_acces2_card.value = m_CardShort[w][9])) : (c.A_weapon1_card1.value = 0,
                        c.A_weapon1_card2.value = 0,
                        c.A_weapon1_card3.value = 0,
                        c.A_weapon1_card4.value = 0,
                        "undefined" != typeof A_weapon2_card1 && (c.A_weapon2_card1.value = 0,
                            c.A_weapon2_card2.value = 0,
                            c.A_weapon2_card3.value = 0,
                            c.A_weapon2_card4.value = 0),
                        c.A_head1_card.value = 0,
                        c.A_head2_card.value = 0,
                        c.A_left_card.value = 0,
                        c.A_body_card.value = 0,
                        c.A_shoulder_card.value = 0,
                        c.A_shoes_card.value = 0,
                        c.A_acces1_card.value = 0,
                        c.A_acces2_card.value = 0),
            ActiveSkillSetPlus())
}
function Setm_CardShortLeft() {
    w = 1 * c.A_cardshortLeft.value,
        w > 0 && (c.A_weapon2_card1.value = m_CardShort[w][1],
            c.A_weapon2_card2.value = m_CardShort[w][2],
            c.A_weapon2_card3.value = m_CardShort[w][3],
            c.A_weapon2_card4.value = m_CardShort[w][4],
            16 != w && 17 != w || (w = m_Monster[1 * c.B_Enemy.value][3],
                10 <= w && w <= 14 && (c.A_weapon2_card1.value = 204),
                (20 <= w && w <= 24 || 80 <= w && w <= 94) && (c.A_weapon2_card1.value = 203),
                30 <= w && w <= 34 && (c.A_weapon2_card1.value = 201),
                40 <= w && w <= 44 && (c.A_weapon2_card1.value = 202)))
}
for (wESx = new Array,
    i = 0; i <= EnemyNum; i++)
    wESx[i] = new Array;
function EnemySort() {
    let hitsByMonsterID = {};
    for (var _ = c.B_Enemy.length, n = 0; n < _; n++)
        c.B_Enemy.options[0] = null;
    if (ESNum = [1, 3, 2, 4, 21, 22, 16, 17, 13, 14, 15, 30, 60, 100],
        0 != 1 * c.ENEMY_SORT.value) {
        if (60 != ESNum[1 * c.ENEMY_SORT.value]) {
            for (wES = ESNum[1 * c.ENEMY_SORT.value],
                wESx[0][0] = "S",
                wESx[0][1] = "E",
                STERTw = 0,
                ENDw = 0,
                n = 1; n <= EnemyNum; n++)
                if (e = ENDw,
                    wES != 30 ? m_Monster[n][wES] >= m_Monster[e][wES] : m_Monster[n][7] + m_Monster[n][14] >= m_Monster[e][7] + m_Monster[e][14])
                    wESx[e][1] = n,
                        wESx[n][0] = e,
                        wESx[n][1] = "E",
                        ENDw = n;
                else if (e = STERTw,
                    wES != 30 ? m_Monster[n][wES] <= m_Monster[e][wES] : m_Monster[n][7] + m_Monster[n][14] <= m_Monster[e][7] + m_Monster[e][14])
                    wESx[e][0] = n,
                        wESx[n][0] = "S",
                        wESx[n][1] = e,
                        STERTw = n;
                else {
                    for (e = STERTw,
                        jbk = STERTw; wES != 30 ? m_Monster[n][wES] > m_Monster[e][wES] : m_Monster[n][7] + m_Monster[n][14] > m_Monster[e][7] + m_Monster[e][14];)
                        jbk = e,
                            e = wESx[e][1];
                    wESx[jbk][1] = n,
                        wESx[n][0] = jbk,
                        wESx[n][1] = e,
                        wESx[e][0] = n
                }
        } else {
            for (var _ = 0; _ <= EnemyNum; _++) {
                ClickB_Enemy(_);
                calc(true);
                let averageAtkNum = document.getElementById("AveATKnum").innerText;
                if (averageAtkNum.includes("10000")) {
                    hitsByMonsterID[_] = 10000;
                } else {
                    hitsByMonsterID[_] = parseInt(averageAtkNum);
                }
            }

            for (wES = ESNum[1 * c.ENEMY_SORT.value],
                wESx[0][0] = "S",
                wESx[0][1] = "E",
                STERTw = 0,
                ENDw = 0,
                n = 1; n <= EnemyNum; n++)
                if (e = ENDw,
                    hitsByMonsterID[n] >= hitsByMonsterID[e])
                    wESx[e][1] = n,
                        wESx[n][0] = e,
                        wESx[n][1] = "E",
                        ENDw = n;
                else if (e = STERTw,
                    hitsByMonsterID[n] <= hitsByMonsterID[e])
                    wESx[e][0] = n,
                        wESx[n][0] = "S",
                        wESx[n][1] = e,
                        STERTw = n;
                else {
                    for (e = STERTw,
                        jbk = STERTw; hitsByMonsterID[n] > hitsByMonsterID[e];)
                        jbk = e,
                            e = wESx[e][1];
                    wESx[jbk][1] = n,
                        wESx[n][0] = jbk,
                        wESx[n][1] = e,
                        wESx[e][0] = n
                }
        }
        (a = new Array)[0] = n = STERTw;
        for (e = 1; "E" != wESx[n][1]; e++)
            a[e] = wESx[n][1],
                n = wESx[n][1];
        if (a = SortZ(a),
            ESwork2 = new Array,
            21 == wES || 22 == wES || 16 == wES || 17 == wES || 13 == wES || 14 == wES || 15 == wES)
            for (n = 0; n <= EnemyNum; n++)
                ESwork2[n] = " [" + m_Monster[n][wES] + "]";
        else if (2 == wES)
            for (n = 0; n <= EnemyNum; n++)
                ESwork2[n] = " [" + v_Race_[m_Monster[n][2]] + "]";
        else if (3 == wES)
            for (n = 0; n <= EnemyNum; n++)
                ESwork2[n] = " [" + v_Element_[Math.floor(m_Monster[n][3] / 10)] + m_Monster[n][3] % 10 + "]";
        else if (4 == wES)
            for (n = 0; n <= EnemyNum; n++)
                ESwork2[n] = " [" + v_Size[m_Monster[n][4]] + "]";
        else if (30 == wES)
            for (n = 0; n <= EnemyNum; n++)
                ESwork2[n] = " [" + parseInt(m_Monster[n][7] + m_Monster[n][14]) + "]";
        else if (60 == wES)
            for (n = 0; n <= EnemyNum; n++)
                ESwork2[n] = " [" + hitsByMonsterID[n] + "]";
        else
            for (n = 0; n <= EnemyNum; n++)
                ESwork2[n] = "";
        e = 0;
        for (n = 0; n <= EnemyNum; n++)
            -1 != a[n] && !v_MonsterExclude.includes(m_Monster[a[n]][0]) && (c.B_Enemy.options[e] = new Option(m_Monster[a[n]][1] + ESwork2[a[n]], a[n]),
                e++)
    } else {
        for (var a = new Array, n = 0; n <= EnemyNumSort; n++)
            a[n] = v_MonsterSort[n];
        a = SortZ(a);
        var e = 0;
        for (n = 0; n <= EnemyNumSort; n++)
            -1 != a[n] && (c.B_Enemy.options[e] = new Option(m_Monster[a[n]][1], a[n]), e++)

    }
}
function SortZ(_) {
    var n = document.calcForm.ENEMY_SORT2.value;
    if (0 != n)
        for (var a = 0; a <= EnemyNum; a++)
            if (-1 != _[a]) {
                for (var e = 0; "N" != m_MonsterMap[n][e] && _[a] != m_MonsterMap[n][e]; e++)
                    ;
                "N" == m_MonsterMap[n][e] && (_[a] = -1)
            }
    return _
}
function SaveLocal() {
    if ("undefined" == typeof Storage)
        alert("Sorry, your browser does not support local storage. Please let me know if you see this message at tnaab on Discord");
    else {
        for (SaveData = new Array,
            n = 0; n <= 414; n++)
            SaveData[n] = 0;
        SaveData[0] = 1,
            SaveData[2] = 1 * c.A_JOB.value,
            SaveData[3] = 1 * c.A_JobLV.value,
            SaveData[4] = 1 * c.A_BaseLV.value,
            SaveData[5] = 1 * c.A_adopted.checked,
            1 == SaveData[5] ? SaveData[5] = 1 : 0 == SaveData[5] && (SaveData[5] = 0),
            SaveData[6] = 1 * c.A_STR.value,
            SaveData[7] = 1 * c.A_AGI.value,
            SaveData[8] = 1 * c.A_VIT.value,
            SaveData[9] = 1 * c.A_DEX.value,
            SaveData[10] = 1 * c.A_INT.value,
            SaveData[11] = 1 * c.A_LUK.value,
            SaveData[12] = 1 * c.A_Weapon_element.value,
            SaveData[13] = m_Item[c.A_weapon1.value][1],
            SaveData[14] = 1 * c.A_weapon1.value,
            SaveData[15] = 1 * c.A_Weapon_refine.value,
            SaveData[16] = 1 * c.A_weapon1_card1.value,
            SaveData[17] = 1 * c.A_weapon1_card2.value,
            SaveData[18] = 1 * c.A_weapon1_card3.value,
            SaveData[19] = 1 * c.A_weapon1_card4.value,
            player.dual_wield ? (SaveData[20] = m_Item[c.A_weapon2.value][1],
                SaveData[21] = 1 * c.A_weapon2.value,
                SaveData[22] = 1 * c.A_Weapon2_refine.value,
                SaveData[23] = 1 * c.A_weapon2_card1.value,
                SaveData[24] = 1 * c.A_weapon2_card2.value,
                SaveData[25] = 1 * c.A_weapon2_card3.value,
                SaveData[26] = 1 * c.A_weapon2_card4.value) : (SaveData[20] = 0,
                    SaveData[21] = 0,
                    SaveData[22] = 0,
                    SaveData[23] = 0,
                    SaveData[24] = 0,
                    SaveData[25] = 0,
                    SaveData[26] = 0),
            (2 == n_A_JobClass() || 4 == n_A_JobClass() || 45 == n_A_JobClass() && 0 != n_A_WeaponType) && (SaveData[27] = 1 * c.A_Arrow.value),
            SaveData[28] = 1 * c.A_head1.value,
            SaveData[29] = 1 * c.A_head1_card.value,
            SaveData[30] = 1 * c.A_HEAD_REFINE.value,
            SaveData[31] = 1 * c.A_head2.value,
            SaveData[32] = 1 * c.A_head2_card.value,
            SaveData[33] = 1 * c.A_head3.value,
            SaveData[34] = 1 * c.A_left.value,
            SaveData[35] = 1 * c.A_left_card.value,
            SaveData[36] = 1 * c.A_LEFT_REFINE.value,
            SaveData[37] = 1 * c.A_body.value,
            SaveData[38] = 1 * c.A_body_card.value,
            SaveData[39] = 1 * c.A_BODY_REFINE.value,
            SaveData[40] = 1 * c.A_shoulder.value,
            SaveData[41] = 1 * c.A_shoulder_card.value,
            SaveData[42] = 1 * c.A_SHOULDER_REFINE.value,
            SaveData[43] = 1 * c.A_shoes.value,
            SaveData[44] = 1 * c.A_shoes_card.value,
            SaveData[45] = 1 * c.A_SHOES_REFINE.value,
            SaveData[46] = 1 * c.A_acces1.value,
            SaveData[47] = 1 * c.A_acces1_card.value,
            SaveData[48] = 1 * c.A_acces2.value,
            SaveData[49] = 1 * c.A_acces2_card.value,
            SaveData[50] = 0,
            SaveData[51] = 0
        SaveData[52] = 0,
            SaveData[53] = 0,
            SaveData[54] = 0,
            SaveData[55] = 0,
            n_A_JobSet(),
            w = n_A_JOB;

        const availableBuffs = JOB_AVAILABLE_BUFFS[w] || [];
        for (let n = 0; n < availableBuffs.length && n <= 14; n++) {
            const skillElement = document.getElementById("A_skill" + n);
            SaveData[56 + n] = 1 * skillElement.value;
        }
        for (SaveData[71] = 0,
            SaveData[72] = 0,
            n = 0; n <= 21; n++)
            SaveData[73 + n] = getBuf2FromSC(n),
                1 == SaveData[73 + n] ? SaveData[73 + n] = 1 : 0 == SaveData[73 + n] && (SaveData[73 + n] = 0);
        for (SaveData[95] = 0,
            SaveData[96] = 0,
            n = 0; n <= 37; n++)
            SaveData[96 + n] = n_A_Buf3[n],
                1 == SaveData[96 + n] ? SaveData[96 + n] = 1 : 0 == SaveData[96 + n] && (SaveData[96 + n] = 0);
        for (SaveData[134] = 0,
            SaveData[135] = 0,
            SaveData[136] = n_A_Buf3[40],
            SaveData[137] = n_A_Buf3[41],
            SaveData[138] = n_A_Buf3[42],
            SaveData[139] = n_A_Buf3[43],
            SaveData[140] = n_A_Buf3[44],
            SaveData[141] = 0,
            SaveData[142] = 0,
            n = 0; n <= 23; n++)
            SaveData[143 + n] = n_A_Buf6[n],
                1 == SaveData[143 + n] ? SaveData[143 + n] = 1 : 0 == SaveData[143 + n] && (SaveData[143 + n] = 0);
        for (SaveData[167] = 0,
            SaveData[168] = 0,
            n = 0; n <= 51; n++)
            SaveData[169 + n] = n_A_Buf7[n],
                1 == SaveData[169 + n] ? SaveData[169 + n] = 1 : 0 == SaveData[169 + n] && (SaveData[169 + n] = 0);
        for (n = 0; n <= 11; n++)
            SaveData[221 + n] = n_A_Buf8[n],
                1 == SaveData[221 + n] ? SaveData[221 + n] = 1 : 0 == SaveData[221 + n] && (SaveData[221 + n] = 0);
        for (SaveData[233] = 0,
            SaveData[234] = 0,
            SaveData[235] = 0,
            SaveData[236] = 0,
            SaveData[237] = c.Conf01.value,
            SaveData[238] = c.B_num.value,
            SaveData[239] = c.A8_Skill14.value,
            SaveData[240] = c.A8_Skill15.value,
            SaveData[241] = 0,
            SaveData[242] = 0,
            SaveData[243] = 1 * c.A_ActiveSkill.value,
            SaveData[244] = 1 * c.A_ActiveSkillLV.value,
            (326 == n_A_ActiveSkill || 159 == n_A_ActiveSkill || 384 == n_A_ActiveSkill || 324 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 88 == n_A_ActiveSkill || 197 == n_A_ActiveSkill || 394 == n_A_ActiveSkill || 395 == n_A_ActiveSkill || 405 == n_A_ActiveSkill || 429 == n_A_ActiveSkill || SkillSearch(441) && (51 == n_A_ActiveSkill || 54 == n_A_ActiveSkill || 56 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 542 == n_A_ActiveSkill)) && (SaveData[245] = 1 * c.SkillSubNum.value),
            SaveData[246] = c.B_Enemy.value,
            SaveData[247] = 1 * c.B_AtkSkill.value,
            444 != n_B_AtkSkill && 445 != n_B_AtkSkill && 125 != n_B_AtkSkill && 131 != n_B_AtkSkill || (SaveData[248] = 1 * c.BSkillSubNum.value),
            n = 0; n <= 27; n++)
            SaveData[253 + n] = n_B_debuf[n],
                1 == SaveData[253 + n] ? SaveData[253 + n] = 1 : 0 == SaveData[253 + n] && (SaveData[253 + n] = 0);
        for (n = 0; n <= 14; n++)
            SaveData[281 + n] = n_B_buf[n],
                1 == SaveData[281 + n] ? SaveData[281 + n] = 1 : 0 == SaveData[281 + n] && (SaveData[281 + n] = 0);
        for (SaveData[296] = 0,
            SaveData[297] = 0,
            SaveData[298] = 0,
            SaveData[299] = 0,
            SaveData[300] = 0,
            SaveData[301] = 0,
            SaveData[302] = 0,
            n = 0; n <= 59; n++)
            SaveData[303 + n] = n_A_Buf9[n],
                1 == SaveData[303 + n] ? SaveData[303 + n] = 1 : 0 == SaveData[303 + n] && (SaveData[303 + n] = 0);
        for (SaveData[363] = 0,
            n = 0; n <= 60; n++)
            SaveData[364 + n] = n_B_manual[n],
                1 == SaveData[364 + n] ? SaveData[364 + n] = 1 : 0 == SaveData[364 + n] && (SaveData[364 + n] = 0);
        /* SaveData[420] = 0,
            SaveData[421] = 0,
            SaveData[422] = 0, */
        SaveData[423] = 0,
            SaveData[424] = 0,
            SaveData[425] = c.theme.value,
            SaveData[426] = 0,
            SaveData[428] = c.all_dmgSkills.checked,
            SaveData[429] = c.restrict_jobequip.checked,
            SaveData[430] = c.restrict_lvlequip.checked,
            SaveData[431] = c.restrict_equipslot.checked,
            SaveData[432] = c.restrict_cardslot.checked,
            SaveData[433] = c.all_card.checked,
            SaveData[434] = c.B_AtkRange.value,
            SaveData[435] = c.B_AtkElem.value;
        for (n = 0; n <= 27; n++) // rand options save
            SaveData[436 + n] = n_A_randopt[n];
        for (n = 0; n <= 5; n++)
            SaveData[464 + n] = n_A_Shadow[n];
        for (n = 0; n <= 3; n++)
            SaveData[470 + n] = n_A_Buf3[45 + n];
        for (n = 0; n <= 10; n++)
            SaveData[474 + n] = n_A_enchant[n];
        SaveData[500] = c.saveDataName.value,
            slotNum = c.A_SaveSlotLocal.value,
            localStorage["Slot" + slotNum] = JSON.stringify(SaveData),
            bkcN = slotNum,
            LoadLocal3(),
            c.A_SaveSlotLocal.value = bkcN
    }
}
function LoadLocal() {
    if ("undefined" == typeof Storage)
        alert("Sorry, your browser does not support local storage. If you see this message, please let me know at tnaab on Discord");
    else if (myInnerHtml("bREFLECT2", "", 0),
        myInnerHtml("bREFLECT2name", "", 0),
        slotNum = c.A_SaveSlotLocal.value,
        SaveData = new Array,
        void 0 === localStorage["Slot" + slotNum]) {
        c.A_JOB.value = 0,
            ClickJob(0),
            c.A_JobLV.value = 1,
            c.A_BaseLV.value = 1,
            c.A_adopted.checked = 0,
            c.A_STR.value = 1,
            c.A_AGI.value = 1,
            c.A_VIT.value = 1,
            c.A_DEX.value = 1,
            c.A_INT.value = 1,
            c.A_LUK.value = 1,
            c.A_Weapon_element.value = 0,
            c.A_weapon1.value = 0,
            n_A_WeaponType = 0,
            ClickWeaponType(0),
            n_A_JobSet(),
            c.A_Weapon_refine.value = 0,
            c.A_weapon1_card1.value = 0,
            c.A_weapon1_card2.value = 0,
            c.A_weapon1_card3.value = 0,
            c.A_weapon1_card4.value = 0,
            c.A_head1.value = 142,
            c.A_head1_card.value = 0,
            c.A_HEAD_REFINE.value = 0,
            c.A_head2.value = 243,
            c.A_head2_card.value = 0,
            c.A_head3.value = 268,
            c.A_left.value = 305,
            c.A_left_card.value = 0,
            c.A_LEFT_REFINE.value = 0,
            c.A_body.value = 279,
            c.A_body_card.value = 0,
            c.A_BODY_REFINE.value = 0,
            c.A_shoulder.value = 311,
            c.A_shoulder_card.value = 0,
            c.A_SHOULDER_REFINE.value = 0,
            c.A_shoes.value = 317,
            c.A_shoes_card.value = 0,
            c.A_SHOES_REFINE.value = 0,
            c.A_acces1.value = 326,
            c.A_acces1_card.value = 0,
            c.A_acces2.value = 326,
            c.A_acces2_card.value = 0,
            n_itemSW = 0,
            ClickB_Item("SW"),
            w = n_A_JOB;

        const availableBuffs = JOB_AVAILABLE_BUFFS[w] || [];

        for (let n = 0; n < availableBuffs.length && n <= 14; n++) {
            const skillElement = document.getElementById("A_skill" + n);
            if (skillElement)
                skillElement.value = 0;
        }

        resetBuf2SC();
        for (n_SkillSW = 0,
            n = 0; n <= 37; n++)
            n_A_Buf3[n] = 0;
        for (n_Skill3SW = 0,
            n = 0; n <= 8; n++)
            n_A_Buf3[40 + n] = 0;
        for (n_Skill4SW = 0,
            n = 0; n <= 23; n++)
            n_A_Buf6[n] = 0;
        for (n_Skill6SW = 0,
            n = 0; n <= 60; n++)
            n_A_Buf7[n] = 0;
        for (n_Skill7SW = 0,
            n = 0; n <= 15; n++)
            n_A_Buf8[n] = 0;
        for (n_Skill8SW = 0,
            c.Conf01.value = 20,
            c.B_num.value = 1,
            c.A8_Skill14.value = 0,
            c.A8_Skill15.value = 0,
            c.A_ActiveSkill.value = 0,
            ClickActiveSkill(),
            c.A_ActiveSkillLV.value = 0,
            (326 == n_A_ActiveSkill || 159 == n_A_ActiveSkill || 384 == n_A_ActiveSkill || 324 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 88 == n_A_ActiveSkill || 197 == n_A_ActiveSkill || 394 == n_A_ActiveSkill || 395 == n_A_ActiveSkill || 405 == n_A_ActiveSkill || 429 == n_A_ActiveSkill || SkillSearch(441) && (51 == n_A_ActiveSkill || 54 == n_A_ActiveSkill || 56 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 542 == n_A_ActiveSkill)) && (c.SkillSubNum.value = 0),
            c.B_Enemy.value = 144,
            c.B_AtkRange.value = 0,
            Bskill(),
            c.B_AtkSkill.value = 0,
            n = 0; n <= 30; n++)
            n_B_debuf[n] = 0;
        for (n_debufSW = 0,
            n = 0; n <= 14; n++)
            n_B_buf[n] = 0;
        for (n_BbufSW = 0,
            n = 0; n <= 59; n++)
            n_A_Buf9[n] = 0;
        for (n_A_Buf9[2] = 10,
            n_A_Buf9[4] = 20,
            n_A_Buf9[6] = 23,
            n_A_Buf9[10] = 10,
            n_A_Buf9[12] = 20,
            n_A_Buf9[14] = 23,
            n_Skill9SW = 0,
            n = 0; n <= 60; n++)
            n_B_manual[n] = 0;
        for (n = 0; n <= 27; n++)
            n_A_randopt[n] = 0;
        for (n = 0; n <= 5; n++)
            n_A_Shadow[n] = 0;
        n_A_Shadow[1] = 22;
        n_A_Shadow[3] = 44;
        for (n = 0; n <= 10; n++)
            n_A_enchant[n] = 0;
        n_Skill10SW = 0
    } else {
        for (n = 0; n <= 336; n++)
            SaveData[n] = 0;
        SaveData = JSON.parse(localStorage["Slot" + slotNum]),
            c.all_dmgSkills.checked = SaveData[428],
            c.A_JOB.value = SaveData[2],
            ClickJob(SaveData[2]),
            c.A_JobLV.value = SaveData[3],
            c.A_BaseLV.value = SaveData[4],
            c.A_adopted.checked = SaveData[5],
            c.A_STR.value = SaveData[6],
            c.A_AGI.value = SaveData[7],
            c.A_VIT.value = SaveData[8],
            c.A_DEX.value = SaveData[9],
            c.A_INT.value = SaveData[10],
            c.A_LUK.value = SaveData[11],
            c.A_Weapon_element.value = SaveData[12],
            c.A_weapon1.value = SaveData[14],
            n_A_WeaponType = SaveData[13],
            ClickWeaponType(SaveData[13]),
            8 != SaveData[2] && 22 != SaveData[2] || 11 == SaveData[13] || (
                n_A_Equip[1] = 0,
                n_A_Weapon2Type = SaveData[20],
                ClickWeaponType2(SaveData[21])),
            n_A_JobSet(),
            (2 == n_A_JobClass() || 4 == n_A_JobClass() || 45 == n_A_JobClass() && 0 != SaveData[13]) && (c.A_Arrow.value = SaveData[27]),
            ClickB_Item(SaveData[14]),
            c.A_Weapon_refine.value = SaveData[15],
            c.A_weapon1_card1.value = SaveData[16],
            c.A_weapon1_card2.value = SaveData[17],
            c.A_weapon1_card3.value = SaveData[18],
            c.A_weapon1_card4.value = SaveData[19],
            player.dual_wield && (c.A_weapon2.value = SaveData[21],
                c.A_Weapon2_refine.value = SaveData[22],
                c.A_weapon2_card1.value = SaveData[23],
                c.A_weapon2_card2.value = SaveData[24],
                c.A_weapon2_card3.value = SaveData[25],
                c.A_weapon2_card4.value = SaveData[26]),
            c.A_head1.value = SaveData[28],
            c.A_head1_card.value = SaveData[29],
            c.A_HEAD_REFINE.value = SaveData[30],
            c.A_head2.value = SaveData[31],
            c.A_head2_card.value = SaveData[32],
            c.A_head3.value = SaveData[33],
            c.A_left.value = SaveData[34],
            c.A_left_card.value = SaveData[35],
            c.A_LEFT_REFINE.value = SaveData[36],
            c.A_body.value = SaveData[37],
            c.A_body_card.value = SaveData[38],
            c.A_BODY_REFINE.value = SaveData[39],
            c.A_shoulder.value = SaveData[40],
            c.A_shoulder_card.value = SaveData[41],
            c.A_SHOULDER_REFINE.value = SaveData[42],
            c.A_shoes.value = SaveData[43],
            c.A_shoes_card.value = SaveData[44],
            c.A_SHOES_REFINE.value = SaveData[45],
            c.A_acces1.value = SaveData[46],
            c.A_acces1_card.value = SaveData[47],
            c.A_acces2.value = SaveData[48],
            c.A_acces2_card.value = SaveData[49],
            w = n_A_JOB;

        const availableBuffs = JOB_AVAILABLE_BUFFS[w] || [];
        for (let n = 0; n < availableBuffs.length && n <= 14; n++) {
            const skillElement = document.getElementById("A_skill" + n);
            if (skillElement)
                skillElement.value = SaveData[56 + n];
        }
        c.Conf01.value = SaveData[237],
            c.B_num.value = SaveData[238],
            c.A8_Skill14.value = SaveData[239],
            c.A8_Skill15.value = SaveData[240],
            StCalc(1),
            ActiveSkillSetPlus(),
            c.A_ActiveSkill.value = SaveData[243],
            ClickActiveSkill(),
            c.A_ActiveSkillLV.value = SaveData[244],
            66 != n_A_ActiveSkill && 326 != n_A_ActiveSkill && 159 != n_A_ActiveSkill && 384 != n_A_ActiveSkill && 324 != n_A_ActiveSkill && 131 != n_A_ActiveSkill && 88 != n_A_ActiveSkill && 197 != n_A_ActiveSkill && 394 != n_A_ActiveSkill && 395 != n_A_ActiveSkill && 405 != n_A_ActiveSkill && 429 != n_A_ActiveSkill || (c.SkillSubNum.value = SaveData[245]);

        const doubleCastIndex = JOB_AVAILABLE_BUFFS[n_A_JOB].indexOf(441);
        if (doubleCastIndex !== -1) {
            const doubleCastSkillElement = document.getElementById("A_skill" + doubleCastIndex);

            if (doubleCastSkillElement) {
                const doubleCastSkillLevel = 1 * doubleCastSkillElement.value;

                const isCompatibleBoltSkill = n_A_ActiveSkill == 51 || n_A_ActiveSkill == 54 || n_A_ActiveSkill == 56 || n_A_ActiveSkill == 540 || n_A_ActiveSkill == 541 || n_A_ActiveSkill == 542;

                if (doubleCastSkillLevel > 0 && isCompatibleBoltSkill) {
                    const averageChance = doubleCastSkillLevel + 3;
                    myInnerHtml("AASkill", 'Double Bolt chance: <select name="SkillSubNum" onChange="calc()"></select>', 0);
                    c.SkillSubNum.options[0] = new Option("No chance (0%)", 0);
                    c.SkillSubNum.options[1] = new Option("Average chance (" + 10 * averageChance + "%)", averageChance);
                    c.SkillSubNum.options[2] = new Option("Max chance (100%)", 10);
                    c.SkillSubNum.value = SaveData[245];
                }
            }
        }
        for (SaveData[246] == "" && (SaveData[246] = 586),
            n_B[0] = SaveData[246],
            c.B_Enemy.value = SaveData[246],
            Bskill(),
            c.B_AtkSkill.value = SaveData[247],
            BClickAtkSkill(),
            444 != SaveData[247] && 445 != SaveData[247] && 125 != SaveData[247] && 131 != SaveData[247] || (c.BSkillSubNum.value = SaveData[248]),
            setBuf2ToSC(0, SaveData[73] > 5 ? SaveData[73] / 2 : SaveData[73]),
            setBuf2ToSC(1, SaveData[74] > 5 ? SaveData[74] / 2 : SaveData[74]),
            n = 2; n <= 21; n++)
            setBuf2ToSC(n, SaveData[73 + n]);
        for (n = 0; n <= 37; n++)
            n_A_Buf3[n] = SaveData[96 + n];
        for (Buf3SW(0),
            n = 0; n <= 4; n++)
            n_A_Buf3[40 + n] = SaveData[136 + n];
        for (n = 0; n <= 23; n++)
            n_A_Buf6[n] = SaveData[143 + n];
        for (n = 0; n <= 51; n++)
            n_A_Buf7[n] = SaveData[169 + n];
        for (n = 0; n <= 11; n++)
            n_A_Buf8[n] = SaveData[221 + n];
        for (n = 0; n <= 27; n++)
            n_B_debuf[n] = SaveData[253 + n];
        if (0 == SaveData[0]) {
            for (n = 0; n <= 9; n++)
                n_B_buf[n] = SaveData[281 + n];
            var A = 0
        } else {
            for (n = 0; n <= 14; n++)
                n_B_buf[n] = SaveData[281 + n];
            A = 10
        }
        for (n = 0; n <= 59; n++)
            n_A_Buf9[n] = SaveData[293 + n + A];
        for (n = 0; n <= 60; n++)
            n_B_manual[n] = SaveData[354 + n + A];
        c.theme.value = SaveData[425],
            c.restrict_jobequip.checked = SaveData[429],
            c.restrict_lvlequip.checked = SaveData[430],
            c.restrict_equipslot.checked = SaveData[431],
            c.restrict_cardslot.checked = SaveData[432],
            c.all_card.checked = SaveData[433],
            c.B_AtkRange.value = SaveData[434],
            c.B_AtkElem.value = SaveData[435];
        for (n = 0; n <= 27; n++) // rand options load
            n_A_randopt[n] = SaveData[436 + n];
        for (n = 0; n <= 5; n++)
            n_A_Shadow[n] = SaveData[464 + n] == null ? 0 : SaveData[464 + n];
        n_A_Shadow[1] == 0 && (n_A_Shadow[1] = 22);
        n_A_Shadow[3] == 0 && (n_A_Shadow[3] = 44);
        for (n = 0; n <= 3; n++)
            n_A_Buf3[45 + n] = SaveData[470 + n] == null ? 0 : SaveData[470 + n];
        for (n = 0; n <= 10; n++)
            n_A_enchant[n] = SaveData[474 + n] == null ? 0 : SaveData[474 + n];
    }
    c.saveDataName.value = SaveData[500],
        refreshFields(),
        StCalc(1),
        StAllCalc(),
        ActiveSkillSetPlus(),
        calc(),
        themes()
}
function LoadLocal3() {
    for (SaveData = new Array,
        k = 1; k <= 200; k++)
        slotNum = "num0" + (k - 1),
            9 == k && (slotNum = "num0" + k),
            k >= 10 && (slotNum = "num" + k),
            saveName = "",
            void 0 === localStorage["Slot" + slotNum] ? c.A_SaveSlotLocal.options[k - 1] = new Option(k + ": No Data", slotNum) : (SaveData = JSON.parse(localStorage["Slot" + slotNum]), (SaveData[500] != undefined && SaveData[500] != "") && (saveName = " (" + SaveData[500] + ") "),
                1 <= SaveData[2] && SaveData[2] <= 48 ? 0 == SaveData[5] ? c.A_SaveSlotLocal.options[k - 1] = new Option(k + ": " + JobName[SaveData[2]] + saveName, slotNum) : c.A_SaveSlotLocal.options[k - 1] = new Option(k + ": Baby " + JobName[SaveData[2]] + saveName, slotNum) : 999 == SaveData[2] || 0 == SaveData[2] ? c.A_SaveSlotLocal.options[k - 1] = new Option(k + ": Novice" + saveName, slotNum) : c.A_SaveSlotLocal.options[k - 1] = new Option(k + ": No Data", slotNum))
}
function delLocal() {
    window.confirm("Do you really want to DELETE selected saved data?") && (slotNum = document.calcForm.A_SaveSlotLocal.value,
        localStorage["Slot" + slotNum] = 0,
        bkcN = slotNum,
        LoadLocal3(),
        document.calcForm.A_SaveSlotLocal.value = bkcN)
}
function NtoS2(_, n) {
    var a = "";
    return 3 == n ? (a += n_NtoS2[Math.floor(_ / 3844)],
        a += n_NtoS2[Math.floor(_ % 3844 / 62)],
        a += n_NtoS2[_ % 62]) : 2 == n ? (a += n_NtoS2[Math.floor(_ / 62)],
            a += n_NtoS2[_ % 62]) : a += n_NtoS2[_],
        a
}
function NtoS01(_, n, a, e, t) {
    var A = 0;
    return 1 == _ && (A += 16),
        1 == n && (A += 8),
        1 == a && (A += 4),
        1 == e && (A += 2),
        1 == t && (A += 1),
        NtoS2(A, 1)
}
function NtoS05(_, n) {
    var a;
    return a = 6 * _,
        NtoS2(a += n, 1)
}
function URLOUT() {
    calc(),
        SaveData = new Array;
    for (var _ = 0; _ <= 88; _++)
        SaveData[_] = "a";
    SaveData[0] = NtoS2(7, 1),
        SaveData[1] = NtoS2(1 * c.A_JOB.value, 2),
        SaveData[2] = NtoS2(1 * c.A_BaseLV.value, 2),
        SaveData[3] = NtoS2(1 * c.A_JobLV.value, 2),
        SaveData[4] = NtoS2(1 * c.A_STR.value, 2),
        SaveData[5] = NtoS2(1 * c.A_AGI.value, 2),
        SaveData[6] = NtoS2(1 * c.A_VIT.value, 2),
        SaveData[7] = NtoS2(1 * c.A_DEX.value, 2),
        SaveData[8] = NtoS2(1 * c.A_INT.value, 2),
        SaveData[9] = NtoS2(1 * c.A_LUK.value, 2),
        SaveData[10] = NtoS2(10 * n_A_Buf7[35] + 1 * c.A_Weapon_element.value, 1),
        SaveData[11] = NtoS2(m_Item[c.A_weapon1.value][1], 1),
        player.dual_wield && (SaveData[12] = NtoS2(m_Item[c.A_weapon2.value][1], 1)),
        (2 == n_A_JobClass() || 4 == n_A_JobClass() || 45 == n_A_JobClass() && 0 != n_A_WeaponType) && (SaveData[13] = NtoS2(1 * c.A_Arrow.value, 1)),
        SaveData[14] = NtoS2(1 * c.A_weapon1.value, 2),
        SaveData[15] = NtoS2(1 * c.A_Weapon_refine.value, 1),
        SaveData[16] = NtoS2(1 * c.A_weapon1_card1.value, 2),
        SaveData[17] = NtoS2(1 * c.A_weapon1_card2.value, 2),
        SaveData[18] = NtoS2(1 * c.A_weapon1_card3.value, 2),
        SaveData[19] = NtoS2(1 * c.A_weapon1_card4.value, 2),
        player.dual_wield ? (SaveData[20] = NtoS2(1 * c.A_weapon2.value, 2),
            SaveData[21] = NtoS2(1 * c.A_Weapon2_refine.value, 1),
            SaveData[22] = NtoS2(1 * c.A_weapon2_card1.value, 2),
            SaveData[23] = NtoS2(1 * c.A_weapon2_card2.value, 2),
            SaveData[24] = NtoS2(1 * c.A_weapon2_card3.value, 2),
            SaveData[25] = NtoS2(1 * c.A_weapon2_card4.value, 2)) : (SaveData[20] = NtoS2(1 * c.A_left.value, 2),
                SaveData[21] = NtoS2(1 * c.A_LEFT_REFINE.value, 1),
                SaveData[22] = NtoS2(1 * c.A_left_card.value, 2),
                SaveData[24] = SaveData[25] = SaveData[23] = NtoS2(0, 2)),
        SaveData[26] = NtoS2(1 * c.A_head1.value, 2),
        SaveData[27] = NtoS2(1 * c.A_head1_card.value, 2),
        SaveData[28] = NtoS2(1 * c.A_head2.value, 2),
        SaveData[29] = NtoS2(1 * c.A_head2_card.value, 2),
        SaveData[30] = NtoS2(1 * c.A_head3.value, 2),
        SaveData[31] = NtoS2(1 * c.A_body.value, 2),
        SaveData[32] = NtoS2(1 * c.A_body_card.value, 2),
        SaveData[33] = NtoS2(1 * c.A_shoulder.value, 2),
        SaveData[34] = NtoS2(1 * c.A_shoulder_card.value, 2),
        SaveData[35] = NtoS2(1 * c.A_shoes.value, 2),
        SaveData[36] = NtoS2(1 * c.A_shoes_card.value, 2),
        SaveData[37] = NtoS2(1 * c.A_acces1.value, 2),
        SaveData[38] = NtoS2(1 * c.A_acces1_card.value, 2),
        SaveData[39] = NtoS2(1 * c.A_acces2.value, 2),
        SaveData[40] = NtoS2(1 * c.A_acces2_card.value, 2),
        SaveData[41] = NtoS2(1 * c.A_HEAD_REFINE.value, 1),
        SaveData[42] = NtoS2(1 * c.A_BODY_REFINE.value, 1),
        SaveData[43] = NtoS2(1 * c.A_SHOULDER_REFINE.value, 1),
        SaveData[44] = NtoS2(1 * c.A_SHOES_REFINE.value, 1),
        SaveData[45] = NtoS01(c.A_adopted.checked, 0, 0, 0, 0),
        SaveData[46] = NtoS2(0, 2),
        SaveData[47] = NtoS2(0, 2),
        SaveData[48] = NtoS2(0, 2),
        SaveData[49] = NtoS2(0, 2),
        n_A_JobSet();
    var n = n_A_JOB, a = 0;
    const availableBuffs = JOB_AVAILABLE_BUFFS[n_A_JOB] || [];

    for (let i = 0; i < availableBuffs.length && i <= 19; i++) {
        const skillElement = document.getElementById("A_skill" + i);
        if (skillElement) {
            SaveData[51 + i] = NtoS2(1 * skillElement.value, 1);
        }
    }
    _ = availableBuffs.length;
    SaveData[50] = NtoS2(_, 1);
    _++;

    var t = 51 + _ - 1;
    for (_ = 0; _ <= 21 && 0 == getBuf2FromSC(_); _++)
        ;
    22 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(getBuf2FromSC(0), 1),
        SaveData[t + 2] = NtoS2(getBuf2FromSC(1), 1),
        SaveData[t + 3] = NtoS2(getBuf2FromSC(4), 1),
        SaveData[t + 4] = NtoS2(getBuf2FromSC(9), 1),
        SaveData[t + 5] = NtoS2(getBuf2FromSC(13), 1),
        SaveData[t + 6] = NtoS2(getBuf2FromSC(14), 1),
        SaveData[t + 7] = NtoS05(getBuf2FromSC(2), getBuf2FromSC(6)),
        SaveData[t + 8] = NtoS05(getBuf2FromSC(10), getBuf2FromSC(11)),
        SaveData[t + 9] = NtoS05(getBuf2FromSC(12), getBuf2FromSC(15)),
        SaveData[t + 10] = NtoS01(getBuf2FromSC(3), getBuf2FromSC(5), getBuf2FromSC(7), getBuf2FromSC(8), getBuf2FromSC(16)),
        SaveData[t + 11] = NtoS01(getBuf2FromSC(17), getBuf2FromSC(18), getBuf2FromSC(19), getBuf2FromSC(20), getBuf2FromSC(21)),
        t += 11),
        t += 1;
    for (_ = 0; _ <= 24 && 0 == n_B_debuf[_]; _++)
        ;
    25 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(n_B_debuf[0], 1),
        SaveData[t + 2] = NtoS05(n_B_debuf[1], n_B_debuf[18]),
        SaveData[t + 3] = NtoS01(n_B_debuf[2], n_B_debuf[3], n_B_debuf[4], n_B_debuf[5], n_B_debuf[6]),
        SaveData[t + 4] = NtoS01(n_B_debuf[7], n_B_debuf[8], n_B_debuf[9], n_B_debuf[10], n_B_debuf[19]),
        SaveData[t + 5] = NtoS2(n_B_debuf[11], 1),
        SaveData[t + 6] = NtoS2(n_B_debuf[12], 1),
        SaveData[t + 7] = NtoS01(n_B_debuf[13], n_B_debuf[14], n_B_debuf[15], n_B_debuf[16], n_B_debuf[17]),
        SaveData[t + 8] = NtoS01(n_B_debuf[20], n_B_debuf[21], n_B_debuf[22], 0, 0),
        SaveData[t + 9] = NtoS05(n_B_debuf[23], n_B_debuf[24]),
        t += 9),
        t += 1;
    for (_ = 0; _ <= 19 && 0 == n_B_buf[_]; _++)
        ;
    10 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(n_B_buf[0], 1),
        SaveData[t + 2] = NtoS01(n_B_buf[1], n_B_buf[2], n_B_buf[3], n_B_buf[4], n_B_buf[9]),
        SaveData[t + 3] = NtoS2(n_B_buf[6], 2),
        SaveData[t + 4] = NtoS05(n_B_buf[7], n_B_buf[8]),
        SaveData[t + 5] = NtoS2(n_B_buf[5], 1),
        SaveData[t + 6] = NtoS2(n_B_buf[10], 1),
        SaveData[t + 7] = NtoS2(n_B_buf[11], 1),
        SaveData[t + 8] = NtoS2(n_B_buf[12], 1),
        SaveData[t + 9] = NtoS2(n_B_buf[13], 1),
        SaveData[t + 10] = NtoS2(n_B_buf[14], 1),
        t += 10),
        t += 1;
    var A = [0, 0, 0, 0, 0];
    for (_ = 0; _ <= 36 && 0 == n_A_Buf3[_]; _++)
        ;
    for (37 != _ && (A[0] = 1),
        _ = 0; _ <= 4 && 0 == n_A_Buf3[40 + _]; _++)
        ;
    for (5 != _ && (A[1] = 1),
        _ = 0; _ <= 23 && 0 == n_A_Buf6[_]; _++)
        ;
    for (24 != _ && (A[3] = 1),
        _ = 0; _ <= 60 && 0 == n_A_Buf7[_]; _++)
        ;
    61 != _ && (A[4] = 1),
        SaveData[t] = NtoS01(A[0], A[1], A[2], A[3], A[4]),
        A[0] && (SaveData[t + 1] = NtoS2(n_A_Buf3[0], 1),
            SaveData[t + 2] = NtoS2(n_A_Buf3[1], 1),
            SaveData[t + 3] = NtoS2(n_A_Buf3[2], 1),
            SaveData[t + 4] = NtoS2(n_A_Buf3[3], 1),
            SaveData[t + 5] = NtoS2(n_A_Buf3[4], 1),
            SaveData[t + 6] = NtoS2(n_A_Buf3[5], 1),
            SaveData[t + 7] = NtoS2(n_A_Buf3[6], 1),
            SaveData[t + 8] = NtoS05(n_A_Buf3[7], n_A_Buf3[8]),
            SaveData[t + 9] = NtoS05(n_A_Buf3[9], n_A_Buf3[10]),
            SaveData[t + 10] = NtoS01(n_A_Buf3[11], n_A_Buf3[18], 0, 0, 0),
            SaveData[t + 11] = NtoS2(n_A_Buf3[12], 2),
            SaveData[t + 12] = NtoS2(n_A_Buf3[13], 2),
            SaveData[t + 13] = NtoS2(n_A_Buf3[14], 2),
            SaveData[t + 14] = NtoS2(n_A_Buf3[15], 2),
            SaveData[t + 15] = NtoS2(n_A_Buf3[16], 2),
            SaveData[t + 16] = NtoS2(n_A_Buf3[17], 2),
            SaveData[t + 17] = NtoS2(n_A_Buf3[20], 2),
            SaveData[t + 18] = NtoS2(n_A_Buf3[30], 1),
            SaveData[t + 19] = NtoS2(n_A_Buf3[21], 2),
            SaveData[t + 20] = NtoS2(n_A_Buf3[31], 1),
            SaveData[t + 21] = NtoS2(n_A_Buf3[22], 2),
            SaveData[t + 22] = NtoS2(n_A_Buf3[29], 2),
            SaveData[t + 23] = NtoS2(n_A_Buf3[32], 1),
            SaveData[t + 24] = NtoS2(n_A_Buf3[23], 2),
            SaveData[t + 25] = NtoS2(n_A_Buf3[33], 1),
            SaveData[t + 26] = NtoS2(n_A_Buf3[24], 2),
            SaveData[t + 27] = NtoS2(n_A_Buf3[34], 1),
            SaveData[t + 28] = NtoS2(n_A_Buf3[25], 2),
            SaveData[t + 29] = NtoS2(n_A_Buf3[35], 1),
            SaveData[t + 30] = NtoS2(n_A_Buf3[26], 2),
            SaveData[t + 31] = NtoS2(n_A_Buf3[36], 1),
            t += 31),
        A[1] && (SaveData[t + 1] = NtoS01(n_A_Buf3[40], 0, 0, 0, 0),
            SaveData[t + 2] = NtoS05(n_A_Buf3[41], n_A_Buf3[42]),
            SaveData[t + 3] = NtoS05(n_A_Buf3[43], n_A_Buf3[44]),
            t += 3),
        A[3] && (SaveData[t + 1] = NtoS2(n_A_Buf6[5], 1),
            SaveData[t + 2] = NtoS2(n_A_Buf6[20], 1),
            SaveData[t + 3] = NtoS05(n_A_Buf6[0], n_A_Buf6[1]),
            SaveData[t + 4] = NtoS05(n_A_Buf6[2], n_A_Buf6[4]),
            SaveData[t + 5] = NtoS05(n_A_Buf6[18], n_A_Buf6[19]),
            SaveData[t + 6] = NtoS01(n_A_Buf6[3], n_A_Buf6[6], n_A_Buf6[7], n_A_Buf6[8], n_A_Buf6[9]),
            SaveData[t + 7] = NtoS01(n_A_Buf6[10], n_A_Buf6[11], n_A_Buf6[12], n_A_Buf6[13], n_A_Buf6[14]),
            SaveData[t + 8] = NtoS01(n_A_Buf6[15], n_A_Buf6[16], n_A_Buf6[17], n_A_Buf6[21], n_A_Buf6[22]),
            t += 8),
        A[4] && (SaveData[t + 1] = NtoS2(n_A_Buf7[3], 1),
            SaveData[t + 2] = NtoS2(n_A_Buf7[4], 1),
            SaveData[t + 3] = NtoS2(n_A_Buf7[5], 1),
            SaveData[t + 4] = NtoS2(n_A_Buf7[6], 1),
            SaveData[t + 5] = NtoS2(n_A_Buf7[7], 1),
            SaveData[t + 6] = NtoS2(n_A_Buf7[8], 1),
            SaveData[t + 7] = NtoS05(n_A_Buf7[35], n_A_Buf7[42]),
            SaveData[t + 8] = NtoS05(n_A_Buf7[39], n_A_Buf7[40]),
            SaveData[t + 9] = NtoS01(n_A_Buf7[0], n_A_Buf7[1], n_A_Buf7[2], n_A_Buf7[9], n_A_Buf7[10]),
            SaveData[t + 10] = NtoS01(n_A_Buf7[11], n_A_Buf7[12], n_A_Buf7[13], n_A_Buf7[14], 0),
            SaveData[t + 11] = NtoS01(n_A_Buf7[16], n_A_Buf7[17], n_A_Buf7[18], n_A_Buf7[19], n_A_Buf7[20]),
            SaveData[t + 12] = NtoS01(n_A_Buf7[21], n_A_Buf7[22], n_A_Buf7[23], n_A_Buf7[24], n_A_Buf7[25]),
            SaveData[t + 13] = NtoS01(n_A_Buf7[26], n_A_Buf7[27], n_A_Buf7[28], n_A_Buf7[29], n_A_Buf7[30]),
            SaveData[t + 14] = NtoS01(n_A_Buf7[31], n_A_Buf7[32], n_A_Buf7[33], n_A_Buf7[34], n_A_Buf7[36]),
            SaveData[t + 15] = NtoS01(n_A_Buf7[37], n_A_Buf7[38], n_A_Buf7[41], n_A_Buf7[43], n_A_Buf7[44]),
            SaveData[t + 16] = NtoS01(n_A_Buf7[45], n_A_Buf7[46], n_A_Buf7[47], n_A_Buf7[48], n_A_Buf7[49]),
            SaveData[t + 17] = NtoS01(n_A_Buf7[50], n_A_Buf7[51], n_A_Buf7[52], n_A_Buf7[53], n_A_Buf7[54]),
            SaveData[t + 18] = NtoS2(n_A_Buf7[55], 1),
            SaveData[t + 19] = NtoS01(n_A_Buf7[56], 0, 0, 0, 0),
            t += 19),
        t += 1;
    for (_ = 0; _ <= 11 && 0 == n_A_Buf8[_]; _++)
        ;
    12 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(n_A_Buf8[0], 2),
        SaveData[t + 2] = NtoS2(n_A_Buf8[3], 2),
        SaveData[t + 3] = NtoS2(n_A_Buf8[7], 2),
        SaveData[t + 4] = NtoS2(n_A_Buf8[8], 2),
        SaveData[t + 5] = NtoS2(n_A_Buf8[9], 2),
        SaveData[t + 6] = NtoS2(n_A_Buf8[10], 2),
        SaveData[t + 7] = NtoS2(n_A_Buf8[11], 2),
        SaveData[t + 8] = NtoS2(n_A_Buf8[5], 1),
        SaveData[t + 9] = NtoS2(n_A_Buf8[6], 1),
        SaveData[t + 10] = NtoS05(n_A_Buf8[1], 0),
        SaveData[t + 11] = NtoS01(n_A_Buf8[2], 0, 0, 0, 0),
        t += 11),
        t += 1;
    for (_ = 0; _ <= 59 && 0 == n_A_Buf9[_]; _++)
        ;
    if (60 == _)
        SaveData[t] = NtoS2(0, 1);
    else {
        for (SaveData[t] = NtoS2(1, 1),
            SaveData[t + 1] = NtoS2(n_A_Buf9[0], 1),
            SaveData[t + 2] = NtoS2(n_A_Buf9[1], 2),
            SaveData[t + 3] = NtoS2(n_A_Buf9[2], 1),
            SaveData[t + 4] = NtoS2(n_A_Buf9[3], 2),
            SaveData[t + 5] = NtoS2(n_A_Buf9[4], 1),
            SaveData[t + 6] = NtoS2(n_A_Buf9[5], 2),
            SaveData[t + 7] = NtoS2(n_A_Buf9[6], 1),
            SaveData[t + 8] = NtoS2(n_A_Buf9[7], 2),
            SaveData[t + 9] = NtoS2(n_A_Buf9[8], 1),
            SaveData[t + 10] = NtoS2(n_A_Buf9[9], 2),
            SaveData[t + 11] = NtoS2(n_A_Buf9[10], 1),
            SaveData[t + 12] = NtoS2(n_A_Buf9[11], 2),
            SaveData[t + 13] = NtoS2(n_A_Buf9[12], 1),
            SaveData[t + 14] = NtoS2(n_A_Buf9[13], 2),
            SaveData[t + 15] = NtoS2(n_A_Buf9[14], 1),
            SaveData[t + 16] = NtoS2(n_A_Buf9[15], 2),
            SaveData[t + 17] = NtoS2(n_A_Buf9[16], 1),
            SaveData[t + 18] = NtoS2(n_A_Buf9[17], 2),
            SaveData[t + 19] = NtoS2(n_A_Buf9[18], 1),
            SaveData[t + 20] = NtoS2(n_A_Buf9[19], 2),
            SaveData[t + 21] = NtoS2(n_A_Buf9[20], 1),
            SaveData[t + 22] = NtoS2(n_A_Buf9[21], 2),
            SaveData[t + 23] = NtoS2(n_A_Buf9[22], 1),
            SaveData[t + 24] = NtoS2(n_A_Buf9[23], 2),
            SaveData[t + 25] = NtoS2(n_A_Buf9[24], 1),
            SaveData[t + 26] = NtoS2(n_A_Buf9[25], 2),
            SaveData[t + 27] = NtoS2(n_A_Buf9[26], 1),
            SaveData[t + 28] = NtoS2(n_A_Buf9[27], 2),
            SaveData[t + 29] = NtoS2(n_A_Buf9[28], 1),
            SaveData[t + 30] = NtoS2(n_A_Buf9[29], 2),
            SaveData[t + 31] = NtoS2(n_A_Buf9[30], 3),
            _ = 31; _ <= 59; _++)
            SaveData[t + _ + 1] = NtoS2(n_A_Buf9[_], 2);
        t += 60
    }
    t += 1;
    for (_ = 0; _ <= 55 && 0 == n_B_manual[_]; _++)
        ;
    for (56 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(n_B_manual[1], 2),
        SaveData[t + 2] = NtoS2(n_B_manual[2], 1),
        SaveData[t + 3] = NtoS2(n_B_manual[3], 2),
        SaveData[t + 4] = NtoS2(n_B_manual[4], 1),
        SaveData[t + 5] = NtoS2(n_B_manual[5], 2),
        SaveData[t + 6] = NtoS2(n_B_manual[7], 2),
        SaveData[t + 7] = NtoS2(n_B_manual[9], 2),
        SaveData[t + 8] = NtoS2(n_B_manual[21], 2),
        SaveData[t + 9] = NtoS2(n_B_manual[30], 3),
        SaveData[t + 10] = NtoS2(n_B_manual[31], 2),
        SaveData[t + 11] = NtoS2(n_B_manual[34], 2),
        SaveData[t + 12] = NtoS2(n_B_manual[35], 2),
        SaveData[t + 13] = NtoS2(n_B_manual[36], 2),
        SaveData[t + 14] = NtoS2(n_B_manual[37], 2),
        SaveData[t + 15] = NtoS2(n_B_manual[38], 2),
        SaveData[t + 16] = NtoS2(n_B_manual[39], 2),
        SaveData[t + 17] = NtoS2(n_B_manual[40], 3),
        SaveData[t + 18] = NtoS2(n_B_manual[41], 2),
        SaveData[t + 19] = NtoS2(n_B_manual[42], 3),
        SaveData[t + 20] = NtoS2(n_B_manual[43], 3),
        SaveData[t + 21] = NtoS2(n_B_manual[44], 2),
        SaveData[t + 22] = NtoS2(n_B_manual[48], 2),
        SaveData[t + 23] = NtoS2(n_B_manual[49], 2),
        SaveData[t + 24] = NtoS2(n_B_manual[50], 2),
        SaveData[t + 25] = NtoS2(n_B_manual[51], 2),
        SaveData[t + 26] = NtoS2(n_B_manual[52], 2),
        SaveData[t + 27] = NtoS2(n_B_manual[53], 3),
        SaveData[t + 28] = NtoS2(n_B_manual[54], 2),
        SaveData[t + 29] = NtoS2(n_B_manual[55], 2),
        t += 29),
        SaveData[t + 1] = NtoS2(1 * c.Conf01.value, 2),
        SaveData[t + 2] = NtoS2(c.B_num.value, 1),
        SaveData[t + 3] = NtoS2(c.A8_Skill14.value, 1),
        SaveData[t + 4] = NtoS2(c.A8_Skill15.value, 2),
        SaveData[t + 5] = NtoS01(0, 0, 0, 0, 0),
        SaveData[t + 6] = NtoS2(c.A_ActiveSkill.value, 2),
        SaveData[t + 7] = NtoS2(1 * c.A_ActiveSkillLV.value, 1),
        326 == n_A_ActiveSkill || 159 == n_A_ActiveSkill || 384 == n_A_ActiveSkill || 324 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 88 == n_A_ActiveSkill || 197 == n_A_ActiveSkill || 394 == n_A_ActiveSkill || 395 == n_A_ActiveSkill || 405 == n_A_ActiveSkill || 429 == n_A_ActiveSkill || SkillSearch(441) && (51 == n_A_ActiveSkill || 54 == n_A_ActiveSkill || 56 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 542 == n_A_ActiveSkill) ? SaveData[t + 8] = NtoS2(1 * c.SkillSubNum.value, 3) : SaveData[t + 8] = NtoS2(0, 3),
        SaveData[t + 9] = NtoS2(n_B[0], 2),
        SaveData[t + 10] = NtoS2(c.B_AtkSkill.value, 2),
        444 == n_B_AtkSkill || 445 == n_B_AtkSkill || 125 == n_B_AtkSkill || 131 == n_B_AtkSkill ? SaveData[t + 11] = NtoS2(c.BSkillSubNum.value, 3) : SaveData[t + 11] = NtoS2(0, 3),
        t += 11,
        SaveData[t + 1] = NtoS2(c.B_AtkRange.value, 1),
        SaveData[t + 2] = NtoS2(c.B_AtkElem.value, 1),
        SaveData[t + 3] = NtoS2(c.theme.value, 1),
        SaveData[t + 4] = NtoS2(1 * c.server.value, 1),
        SaveData[t + 5] = NtoS01(0, c.all_dmgSkills.checked, c.restrict_jobequip.checked, c.restrict_lvlequip.checked, c.restrict_equipslot.checked),
        SaveData[t + 6] = NtoS01(c.restrict_cardslot.checked, c.all_card.checked, 0, 0, 0),
        t += 6,
        SaveData[t + 1] = NtoS2(n_A_randopt[0], 2), // save rand options to url
        SaveData[t + 2] = NtoS2(n_A_randopt[1], 2),
        SaveData[t + 3] = NtoS2(n_A_randopt[2], 2),
        SaveData[t + 4] = NtoS2(n_A_randopt[3], 2),
        SaveData[t + 5] = NtoS2(n_A_randopt[4], 2),
        SaveData[t + 6] = NtoS2(n_A_randopt[5], 2),
        SaveData[t + 7] = NtoS2(n_A_randopt[6], 2),
        SaveData[t + 8] = NtoS2(n_A_randopt[7], 2),
        SaveData[t + 9] = NtoS2(n_A_randopt[8], 2),
        SaveData[t + 10] = NtoS2(n_A_randopt[9], 2),
        SaveData[t + 11] = NtoS2(n_A_randopt[10], 2),
        SaveData[t + 12] = NtoS2(n_A_randopt[11], 2),
        SaveData[t + 13] = NtoS2(n_A_randopt[12], 2),
        SaveData[t + 14] = NtoS2(n_A_randopt[13], 2),
        SaveData[t + 15] = NtoS2(n_A_randopt[14], 2),
        SaveData[t + 16] = NtoS2(n_A_randopt[15], 2),
        SaveData[t + 17] = NtoS2(n_A_randopt[16], 2),
        SaveData[t + 18] = NtoS2(n_A_randopt[17], 2),
        SaveData[t + 19] = NtoS2(n_A_randopt[18], 2),
        SaveData[t + 20] = NtoS2(n_A_randopt[19], 2),
        SaveData[t + 21] = NtoS2(n_A_randopt[20], 2),
        SaveData[t + 22] = NtoS2(n_A_randopt[21], 2),
        SaveData[t + 23] = NtoS2(n_A_randopt[22], 2),
        SaveData[t + 24] = NtoS2(n_A_randopt[23], 2),
        SaveData[t + 25] = NtoS2(n_A_randopt[24], 2),
        SaveData[t + 26] = NtoS2(n_A_randopt[25], 2),
        SaveData[t + 27] = NtoS2(n_A_randopt[26], 2),
        SaveData[t + 28] = NtoS2(n_A_randopt[27], 2),
        t += 28,
        SaveData[t + 1] = "-",
        SaveData[t + 2] = NtoS2(n_A_Shadow[0], 2),
        SaveData[t + 3] = NtoS2(n_A_Shadow[1], 2),
        SaveData[t + 4] = NtoS2(n_A_Shadow[2], 2),
        SaveData[t + 5] = NtoS2(n_A_Shadow[3], 2),
        SaveData[t + 6] = NtoS2(n_A_Shadow[4], 2),
        SaveData[t + 7] = NtoS2(n_A_Shadow[5], 2),
        t += 7,
        SaveData[t + 1] = NtoS01(n_A_Buf3[45], n_A_Buf3[46], n_A_Buf3[47], n_A_Buf3[48], 0),
        t += 1,
        SaveData[t + 1] = NtoS2(n_A_Buf3[37], 2),
        t += 1,
        SaveData[t + 1] = "-",
        SaveData[t + 2] = NtoS2(n_A_enchant[0], 2),
        SaveData[t + 3] = NtoS2(n_A_enchant[1], 2),
        SaveData[t + 4] = NtoS2(n_A_enchant[2], 2),
        SaveData[t + 5] = NtoS2(n_A_enchant[3], 2),
        SaveData[t + 6] = NtoS2(n_A_enchant[4], 2),
        SaveData[t + 7] = NtoS2(n_A_enchant[5], 2),
        SaveData[t + 8] = NtoS2(n_A_enchant[6], 2),
        SaveData[t + 9] = NtoS2(n_A_enchant[7], 2),
        SaveData[t + 10] = NtoS2(n_A_enchant[8], 2),
        SaveData[t + 11] = NtoS2(n_A_enchant[9], 2),
        SaveData[t + 12] = NtoS2(n_A_enchant[10], 2),
        t += 12,
        wStr = "" + SaveData[0],
        _ = 1; _ <= t; _++)
        wStr += "" + SaveData[_];
    n = location.href.split("#");
    c.URL_TEXT.value = n[0] + "#" + wStr,
        window.location.replace(n[0] + "#" + wStr),
        alert("Your current character can be saved in your bookmarks/favorites by pressing Ctrl+D on your keyboard.\n\nEl personaje actual puede guardarse en marcadores/favoritos pulsando Ctrl+D en su teclado.")
}
function StoNx(_) {
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
function URLIN() {
    var _ = location.href.match(/\#/)
        , n = location.href.match(/\?/)
        , a = otherURL_TEXT.value.match(/\#/)
        , e = otherURL_TEXT.value.match(/\?/);
    if (n || e || _ || a) {
        resetBuf2SC();
        for (r = 0; r <= 48; r++)
            n_A_Buf3[r] = 0;
        for (r = 0; r <= 23; r++)
            n_A_Buf6[r] = 0;
        for (r = 0; r <= 60; r++)
            n_A_Buf7[r] = 0;
        for (r = 0; r <= 15; r++)
            n_A_Buf8[r] = 0;
        for (r = 0; r <= 55; r++)
            n_A_Buf9[r] = 0;
        for (r = 0; r <= 55; r++)
            n_B_manual[r] = 0;
        for (r = 0; r <= 3; r++)
            n_A_debuf[r] = 0;
        for (r = 0; r <= 30; r++)
            n_B_debuf[r] = 0;
        for (r = 0; r <= 14; r++)
            n_B_buf[r] = 0;
        for (r = 0; r <= 27; r++)
            n_A_randopt[r] = 0;
        for (r = 0; r <= 5; r++)
            n_A_Shadow[r] = 0;
        for (r = 0; r <= 10; r++)
            n_A_enchant[r] = 0;
        n_A_Shadow[1] = 22,
            n_A_Shadow[3] = 44,
            n_A_Buf9[2] = 10,
            n_A_Buf9[4] = 20,
            n_A_Buf9[6] = 23,
            n_A_Buf9[10] = 10,
            n_A_Buf9[12] = 20,
            n_A_Buf9[14] = 23;
        var t = new Array;
        e && (t = otherURL_TEXT.value.split("?")),
            a && (t = otherURL_TEXT.value.split("#")),
            n && (t = location.href.split("?")),
            _ && (t = location.href.split("#")),
            20 == StoN2((n = t[1].replace(/undefined/g, "a")).substr(1, 2)) && StoN2(n.substr(90, 1)) ? SuperNoviceFullWeaponCHECK = 1 : SuperNoviceFullWeaponCHECK = 0;
        var A = StoN2(n.substr(0, 1));
        A >= 6 && (
            l = n.substr(-16, 1) == "-" ? StoN2(n.substr(-74, 1)) : StoN2(n.substr(-58, 1)),
            c.all_dmgSkills.checked = Math.floor(l % 16 / 8),
            c.restrict_equipslot.checked = Math.floor(l % 2 / 1),
            l = StoN2(n.substr(S + 26, 1)),
            c.restrict_cardslot.checked = Math.floor(l / 16),
            c.all_card.checked = Math.floor(l % 16 / 8)),
            c.A_JOB.value = StoN2(n.substr(1, 2)),
            ClickJob(StoN2(n.substr(1, 2)), 2),
            c.A_BaseLV.value = StoN2(n.substr(3, 2)),
            c.A_JobLV.value = StoN2(n.substr(5, 2)),
            c.A_STR.value = StoN2(n.substr(7, 2)),
            c.A_AGI.value = StoN2(n.substr(9, 2)),
            c.A_VIT.value = StoN2(n.substr(11, 2)),
            c.A_DEX.value = StoN2(n.substr(13, 2)),
            c.A_INT.value = StoN2(n.substr(15, 2)),
            c.A_LUK.value = StoN2(n.substr(17, 2)),
            n_A_Buf7[35] = Math.floor(StoN2(n.substr(19, 1)) / 10),
            c.A_Weapon_element.value = StoN2(n.substr(19, 1)) % 10,
            c.A_weapon1.value = StoN2(n.substr(23, 2)),
            n_A_WeaponType = StoN2(n.substr(20, 1)),
            ClickWeaponType(n_A_WeaponType),
            8 != c.A_JOB.value && 22 != c.A_JOB.value || 11 == n_A_WeaponType || (n_A_Weapon2Type = StoN2(n.substr(21, 1)),
                ClickWeaponType2(StoN2(n.substr(34, 2)))),
            n_A_JobSet(),
            (2 == n_A_JobClass() || 4 == n_A_JobClass() || 45 == n_A_JobClass() && 0 != n_A_WeaponType) && (c.A_Arrow.value = StoN2(n.substr(22, 1))),
            ClickB_Item(StoN2(n.substr(23, 2))),
            c.A_Weapon_refine.value = StoN2(n.substr(25, 1)),
            c.A_weapon1_card1.value = StoN2(n.substr(26, 2)),
            c.A_weapon1_card2.value = StoN2(n.substr(28, 2)),
            c.A_weapon1_card3.value = StoN2(n.substr(30, 2)),
            c.A_weapon1_card4.value = StoN2(n.substr(32, 2)),
            player.dual_wield ? (c.A_weapon2.value = StoN2(n.substr(34, 2)),
                c.A_Weapon2_refine.value = StoN2(n.substr(36, 1)),
                c.A_weapon2_card1.value = StoN2(n.substr(37, 2)),
                c.A_weapon2_card2.value = StoN2(n.substr(39, 2)),
                c.A_weapon2_card3.value = StoN2(n.substr(41, 2)),
                c.A_weapon2_card4.value = StoN2(n.substr(43, 2))) : (c.A_left.value = StoN2(n.substr(34, 2)),
                    c.A_LEFT_REFINE.value = StoN2(n.substr(36, 1)),
                    c.A_left_card.value = StoN2(n.substr(37, 2))),
            c.A_head1.value = StoN2(n.substr(45, 2)),
            c.A_head1_card.value = StoN2(n.substr(47, 2)),
            c.A_head2.value = StoN2(n.substr(49, 2)),
            c.A_head2_card.value = StoN2(n.substr(51, 2)),
            c.A_head3.value = StoN2(n.substr(53, 2)),
            c.A_body.value = StoN2(n.substr(55, 2)),
            c.A_body_card.value = StoN2(n.substr(57, 2)),
            c.A_shoulder.value = StoN2(n.substr(59, 2)),
            c.A_shoulder_card.value = StoN2(n.substr(61, 2)),
            c.A_shoes.value = StoN2(n.substr(63, 2)),
            c.A_shoes_card.value = StoN2(n.substr(65, 2)),
            c.A_acces1.value = StoN2(n.substr(67, 2)),
            c.A_acces1_card.value = StoN2(n.substr(69, 2)),
            c.A_acces2.value = StoN2(n.substr(71, 2)),
            c.A_acces2_card.value = StoN2(n.substr(73, 2)),
            c.A_HEAD_REFINE.value = StoN2(n.substr(75, 1)),
            c.A_BODY_REFINE.value = StoN2(n.substr(76, 1)),
            c.A_SHOULDER_REFINE.value = StoN2(n.substr(77, 1)),
            c.A_SHOES_REFINE.value = StoN2(n.substr(78, 1));
        var l = StoN2(n.substr(79, 1));
        if (c.A_adopted.checked = Math.floor(l / 16),
            A < 4) {
            var o = StoN2(n.substr(57, 2));
            c.A_body_card.value = 75 == o ? 139 : 128 == o ? 131 : 129 == o ? 132 : 130 == o ? 133 : 131 == o ? 134 : 132 == o ? 128 : 133 == o ? 135 : 134 == o ? 136 : 135 == o ? 137 : 136 == o ? 138 : 137 == o ? 75 : 138 == o ? 140 : o,
                c.A_shoulder.value = StoN2(n.substr(59, 2)),
                o = StoN2(n.substr(61, 2)),
                c.A_shoulder_card.value = 139 == o ? 141 : o,
                c.A_shoes.value = StoN2(n.substr(63, 2)),
                o = StoN2(n.substr(65, 2)),
                c.A_shoes_card.value = 140 == o ? 129 : o,
                c.A_acces1.value = StoN2(n.substr(67, 2)),
                o = StoN2(n.substr(69, 2)),
                c.A_acces1_card.value = 75 == o ? 139 : 141 == o ? 142 : 142 == o ? 143 : 143 == o ? 144 : 144 == o ? 145 : 145 == o ? 146 : 146 == o ? 147 : 147 == o ? 148 : 148 == o ? 149 : 149 == o ? 150 : 150 == o ? 151 : 151 == o ? 152 : 152 == o ? 130 : o,
                c.A_acces2.value = StoN2(n.substr(71, 2)),
                o = StoN2(n.substr(73, 2)),
                c.A_acces2_card.value = 75 == o ? 139 : 141 == o ? 142 : 142 == o ? 143 : 143 == o ? 144 : 144 == o ? 145 : 145 == o ? 146 : 146 == o ? 147 : 147 == o ? 148 : 148 == o ? 149 : 149 == o ? 150 : 150 == o ? 151 : 151 == o ? 152 : 152 == o ? 130 : o;
            var u = StoN2(n.substr(80, 1));
            if (12 == c.A_JOB.value || 26 == c.A_JOB.value) {
                for (var r = 0; r < 4; r++) {
                    document.getElementById("A_skill" + r).value = StoN2(n.substr(81 + r, 1))
                }
                if (StoN2(n.substr(85, 1)) > 0)
                    document.getElementById("A_skill4").value = 1;
                setBuf2ToSC(7, StoN2(n.substr(86, 1)));
                for (r = 5; r < u - 1; r++) {
                    document.getElementById("A_skill" + r).value = StoN2(n.substr(82 + r, 1))
                }
            } else if (13 == c.A_JOB.value || 27 == c.A_JOB.value) {
                for (r = 0; r < 8; r++) {
                    document.getElementById("A_skill" + r).value = StoN2(n.substr(81 + r, 1))
                }
                setBuf2ToSC(13, StoN2(n.substr(89, 1))),
                    document.getElementById("A_skill8").value = StoN2(n.substr(90, 1)),
                    setBuf2ToSC(15, StoN2(n.substr(91, 1))),
                    document.getElementById("A_skill9").value = StoN2(n.substr(92, 1)),
                    setBuf2ToSC(14, StoN2(n.substr(93, 1))),
                    r += 12
            } else if (15 == c.A_JOB.value || 29 == c.A_JOB.value) {
                for (r = 0; r < 3; r++) {
                    document.getElementById("A_skill" + r).value = StoN2(n.substr(81 + r, 1))
                }
                setBuf2ToSC(12, StoN2(n.substr(84, 1)));
                for (r = 3; r < u - 1; r++) {
                    document.getElementById("A_skill" + r).value = StoN2(n.substr(82 + r, 1))
                }
            } else
                for (r = 0; r < u; r++) {
                    document.getElementById("A_skill" + r).value = StoN2(n.substr(81 + r, 1))
                }
            var S = 81 + u;
            if (1 == StoN2(n.substr(S, 1))) {
                setBuf2ToSC(0, StoN2(n.substr(S + 1, 1)) > 5 ? StoN2(n.substr(S + 1, 1)) / 2 : StoN2(n.substr(S + 1, 1))),
                    setBuf2ToSC(1, StoN2(n.substr(S + 2, 1)) > 5 ? StoN2(n.substr(S + 2, 1)) / 2 : StoN2(n.substr(S + 2, 1))),
                    setBuf2ToSC(4, StoN2(n.substr(S + 3, 1))),
                    setBuf2ToSC(9, StoN2(n.substr(S + 4, 1))),
                    setBuf2ToSC(2, Math.floor(StoN2(n.substr(S + 5, 1)) / 6)),
                    setBuf2ToSC(6, StoN2(n.substr(S + 5, 1)) % 6),
                    setBuf2ToSC(8, Math.min(StoN2(n.substr(S + 6, 1)) / 6, 1)),
                    setBuf2ToSC(12, StoN2(n.substr(S + 6, 1)) % 6),
                    setBuf2ToSC(10, Math.floor(StoN2(n.substr(S + 7, 1)) / 6)),
                    setBuf2ToSC(11, StoN2(n.substr(S + 7, 1)) % 6);
                l = StoN2(n.substr(S + 8, 1));
                setBuf2ToSC(3, Math.floor(l / 16)),
                    setBuf2ToSC(5, Math.floor(l % 16 / 8)),
                    setBuf2ToSC(7, Math.floor(l % 8 / 4)),
                    n_A_Buf6[7] = Math.floor(l % 4 / 2),
                    n_A_Buf7[31] = Math.floor(l % 2 / 1),
                    S += 8,
                    12 != c.A_JOB.value && 26 != c.A_JOB.value || StoN2(n.substr(86, 1)) > 0 && (setBuf2ToSC(7, 1)),
                    15 != c.A_JOB.value && 29 != c.A_JOB.value || StoN2(n.substr(84, 1)) > getBuf2FromSC(12) && (setBuf2ToSC(12, StoN2(n.substr(84, 1))))
            }
            var i = S;
            if (S += 8,
                S += 1,
                1 == StoN2(n.substr(S, 1))) {
                n_B_debuf[0] = StoN2(n.substr(S + 1, 1)),
                    n_B_debuf[1] = Math.floor(StoN2(n.substr(S + 2, 1)) / 6),
                    n_B_debuf[18] = StoN2(n.substr(S + 2, 1)) % 6;
                l = StoN2(n.substr(S + 3, 1));
                n_B_debuf[2] = Math.floor(l / 16),
                    n_B_debuf[3] = Math.floor(l % 16 / 8),
                    n_B_debuf[4] = Math.floor(l % 8 / 4),
                    n_B_debuf[5] = Math.floor(l % 4 / 2),
                    n_B_debuf[6] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 4, 1)),
                    n_B_debuf[7] = Math.floor(l / 16),
                    n_B_debuf[8] = Math.floor(l % 16 / 8),
                    n_B_debuf[9] = Math.floor(l % 8 / 4),
                    n_B_debuf[10] = Math.floor(l % 4 / 2),
                    n_B_debuf[19] = Math.floor(l % 2 / 1),
                    n_B_debuf[11] = StoN2(n.substr(S + 5, 1)),
                    n_B_debuf[12] = StoN2(n.substr(S + 6, 1)),
                    l = StoN2(n.substr(S + 7, 1)),
                    n_B_debuf[13] = Math.floor(l / 16),
                    n_B_debuf[14] = Math.floor(l % 16 / 8),
                    n_B_debuf[15] = Math.floor(l % 8 / 4),
                    n_B_debuf[16] = Math.floor(l % 4 / 2),
                    n_B_debuf[17] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 8, 1)),
                    n_B_debuf[20] = Math.floor(l / 16),
                    n_B_debuf[21] = Math.floor(l % 16 / 8),
                    n_B_debuf[22] = Math.floor(l % 8 / 4),
                    n_B_debuf[23] = Math.floor(StoN2(n.substr(S + 9, 1)) / 6),
                    n_B_debuf[24] = StoN2(n.substr(S + 9, 1)) % 6,
                    S += 9
            }
            if (S += 1,
                1 == StoN2(n.substr(S, 1))) {
                n_B_buf[0] = StoN2(n.substr(S + 1, 1));
                l = StoN2(n.substr(S + 2, 1));
                n_B_buf[1] = Math.floor(l / 16),
                    n_B_buf[2] = Math.floor(l % 16 / 8),
                    n_B_buf[3] = Math.floor(l % 8 / 4),
                    n_B_buf[4] = Math.floor(l % 4 / 2),
                    n_B_buf[6] = StoN2(n.substr(S + 3, 2)),
                    n_B_buf[7] = Math.floor(StoN2(n.substr(S + 5, 1)) / 6),
                    n_B_buf[8] = StoN2(n.substr(S + 5, 1)) % 6,
                    l = StoN2(n.substr(S + 6, 1)),
                    n_B_buf[9] = Math.floor(l / 16),
                    S += 6
            }
            var s = [0, 0, 0, 0, 0];
            if (l = StoN2(n.substr(S + 1, 1)),
                s[0] = Math.floor(l / 16),
                s[1] = Math.floor(l % 16 / 8),
                s[2] = Math.floor(l % 8 / 4),
                s[3] = Math.floor(l % 4 / 2),
                s[4] = Math.floor(l % 2 / 1),
                S += 1,
                Buf3SW(0),
                s[0] && (n_A_Buf3[0] = StoN2(n.substr(S + 1, 1)),
                    n_A_Buf3[1] = StoN2(n.substr(S + 2, 1)),
                    n_A_Buf3[2] = StoN2(n.substr(S + 3, 1)),
                    n_A_Buf3[3] = StoN2(n.substr(S + 4, 1)),
                    n_A_Buf3[4] = StoN2(n.substr(S + 5, 1)),
                    n_A_Buf3[5] = StoN2(n.substr(S + 6, 1)),
                    n_A_Buf3[6] = StoN2(n.substr(S + 7, 1)),
                    n_A_Buf3[7] = Math.floor(StoN2(n.substr(S + 8, 1)) / 6),
                    n_A_Buf3[8] = StoN2(n.substr(S + 8, 1)) % 6,
                    n_A_Buf3[9] = Math.floor(StoN2(n.substr(S + 9, 1)) / 6),
                    n_A_Buf3[10] = StoN2(n.substr(S + 9, 1)) % 6,
                    n_A_Buf3[11] = Math.floor(StoN2(n.substr(S + 10, 1)) / 16),
                    n_A_Buf3[18] = Math.floor(StoN2(n.substr(S + 10, 1)) % 16 / 8),
                    n_A_Buf3[12] = StoN2(n.substr(S + 11, 2)),
                    n_A_Buf3[13] = StoN2(n.substr(S + 13, 2)),
                    n_A_Buf3[14] = StoN2(n.substr(S + 15, 2)),
                    n_A_Buf3[15] = StoN2(n.substr(S + 17, 2)),
                    n_A_Buf3[16] = StoN2(n.substr(S + 19, 2)),
                    n_A_Buf3[17] = StoN2(n.substr(S + 21, 2)),
                    n_A_Buf3[20] = StoN2(n.substr(S + 23, 2)),
                    n_A_Buf3[30] = StoN2(n.substr(S + 25, 1)),
                    n_A_Buf3[21] = StoN2(n.substr(S + 26, 2)),
                    n_A_Buf3[31] = StoN2(n.substr(S + 28, 1)),
                    n_A_Buf3[22] = StoN2(n.substr(S + 29, 2)),
                    n_A_Buf3[29] = StoN2(n.substr(S + 31, 2)),
                    n_A_Buf3[32] = StoN2(n.substr(S + 33, 1)),
                    n_A_Buf3[23] = StoN2(n.substr(S + 34, 2)),
                    n_A_Buf3[33] = StoN2(n.substr(S + 36, 1)),
                    n_A_Buf3[24] = StoN2(n.substr(S + 37, 2)),
                    n_A_Buf3[34] = StoN2(n.substr(S + 39, 1)),
                    n_A_Buf3[25] = StoN2(n.substr(S + 40, 2)),
                    n_A_Buf3[35] = StoN2(n.substr(S + 42, 1)),
                    n_A_Buf3[26] = StoN2(n.substr(S + 43, 2)),
                    n_A_Buf3[36] = StoN2(n.substr(S + 45, 1)),
                    S += 45),
                s[1]) {
                l = StoN2(n.substr(S + 1, 1));
                n_A_Buf3[40] = Math.floor(l / 16),
                    n_A_Buf3[41] = Math.floor(StoN2(n.substr(S + 2, 1)) / 6),
                    n_A_Buf3[42] = StoN2(n.substr(S + 2, 1)) % 6,
                    n_A_Buf3[43] = Math.floor(StoN2(n.substr(S + 3, 1)) / 6),
                    n_A_Buf3[44] = StoN2(n.substr(S + 3, 1)) % 6,
                    S += 3
            }
            for (s[2] && (l = StoN2(n.substr(S + 1, 1)),
                setBuf2ToSC(16, Math.floor(l / 16)),
                setBuf2ToSC(17, Math.floor(l % 16 / 8)),
                setBuf2ToSC(18, Math.floor(l % 8 / 4)),
                setBuf2ToSC(19, Math.floor(l % 4 / 2)),
                setBuf2ToSC(20, Math.floor(l % 2 / 1)),
                l = StoN2(n.substr(S + 2, 1)),
                setBuf2ToSC(21, Math.floor(l / 16)),
                S += 2),
                s[3] && (n_A_Buf6[0] = Math.floor(StoN2(n.substr(S + 1, 1)) / 6),
                    n_A_Buf6[1] = StoN2(n.substr(S + 1, 1)) % 6,
                    n_A_Buf6[2] = Math.floor(StoN2(n.substr(S + 2, 1)) / 6),
                    n_A_Buf6[4] = StoN2(n.substr(S + 2, 1)) % 6,
                    n_A_Buf6[5] = Math.floor(StoN2(n.substr(S + 3, 1)) / 6),
                    n_A_Buf7[34] = StoN2(n.substr(S + 4, 1)),
                    l = StoN2(n.substr(S + 5, 1)),
                    n_A_Buf6[6] = Math.floor(l / 16),
                    S += 5),
                s[4] && (n_A_Buf7[3] = StoN2(n.substr(S + 1, 2)),
                    n_A_Buf7[4] = StoN2(n.substr(S + 3, 2)),
                    n_A_Buf7[5] = StoN2(n.substr(S + 5, 2)),
                    n_A_Buf7[6] = StoN2(n.substr(S + 7, 2)),
                    n_A_Buf7[7] = StoN2(n.substr(S + 9, 2)),
                    n_A_Buf7[8] = StoN2(n.substr(S + 11, 2)),
                    l = StoN2(n.substr(S + 13, 1)),
                    n_A_Buf7[0] = Math.floor(l / 16),
                    n_A_Buf7[1] = Math.floor(l % 16 / 8),
                    n_A_Buf7[2] = Math.floor(l % 8 / 4),
                    n_A_Buf7[9] = Math.floor(l % 4 / 2),
                    n_A_Buf7[10] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 14, 1)),
                    n_A_Buf7[11] = Math.floor(l / 16),
                    n_A_Buf7[12] = Math.floor(l % 16 / 8),
                    n_A_Buf7[13] = Math.floor(l % 8 / 4),
                    n_A_Buf7[14] = Math.floor(l % 4 / 2),
                    S += 14),
                r = 0; r <= 55; r++)
                n_A_Buf9[r] = 0;
            for (n_A_Buf9[2] = 10,
                n_A_Buf9[4] = 20,
                n_A_Buf9[6] = 23,
                n_A_Buf9[10] = 10,
                n_A_Buf9[12] = 20,
                n_A_Buf9[14] = 23,
                n_Skill9SW = 0,
                r = 0; r <= 55; r++)
                n_B_manual[r] = 0;
            n_Skill10SW = 0,
                c.Conf01.value = StoN2(n.substr(S + 1, 2)),
                S += 2,
                A >= 1 && (S += 2),
                A >= 2 && (S += 2),
                StCalc(1),
                ActiveSkillSetPlus(),
                S = i,
                c.A_ActiveSkill.value = StoN2(n.substr(S + 1, 2)),
                ClickActiveSkill(),
                c.A_ActiveSkillLV.value = StoN2(n.substr(S + 3, 1)),
                66 != n_A_ActiveSkill && 326 != n_A_ActiveSkill && 159 != n_A_ActiveSkill && 384 != n_A_ActiveSkill && 324 != n_A_ActiveSkill && 131 != n_A_ActiveSkill && 88 != n_A_ActiveSkill && 197 != n_A_ActiveSkill && 394 != n_A_ActiveSkill && 395 != n_A_ActiveSkill && 405 != n_A_ActiveSkill && 429 != n_A_ActiveSkill || (c.SkillSubNum.value = StoN2(n.substr(S + 4, 3))),
                c.B_Enemy.value = StoN2(n.substr(S + 7, 2))
        } else if (A >= 4) {
            for (u = StoN2(n.substr(88, 1)),
                r = 0; r < u; r++) {
                document.getElementById("A_skill" + r).value = StoN2(n.substr(89 + r, 1))
            }
            BufSW(0);
            S = 89 + r;
            if (1 == StoN2(n.substr(S, 1))) {
                setBuf2ToSC(0, StoN2(n.substr(S + 1, 1)) > 5 ? StoN2(n.substr(S + 1, 1)) / 2 : StoN2(n.substr(S + 1, 1))),
                    setBuf2ToSC(1, StoN2(n.substr(S + 2, 1)) > 5 ? StoN2(n.substr(S + 2, 1)) / 2 : StoN2(n.substr(S + 2, 1))),
                    setBuf2ToSC(4, StoN2(n.substr(S + 3, 1))),
                    setBuf2ToSC(9, StoN2(n.substr(S + 4, 1))),
                    setBuf2ToSC(13, StoN2(n.substr(S + 5, 1))),
                    setBuf2ToSC(14, StoN2(n.substr(S + 6, 1))),
                    setBuf2ToSC(2, Math.floor(StoN2(n.substr(S + 7, 1)) / 6)),
                    setBuf2ToSC(6, StoN2(n.substr(S + 7, 1)) % 6),
                    setBuf2ToSC(10, Math.floor(StoN2(n.substr(S + 8, 1)) / 6)),
                    setBuf2ToSC(11, StoN2(n.substr(S + 8, 1)) % 6),
                    setBuf2ToSC(12, Math.floor(StoN2(n.substr(S + 9, 1)) / 6)),
                    setBuf2ToSC(15, StoN2(n.substr(S + 9, 1)) % 6);
                l = StoN2(n.substr(S + 10, 1));
                setBuf2ToSC(3, Math.floor(l / 16)),
                    setBuf2ToSC(5, Math.floor(l % 16 / 8)),
                    setBuf2ToSC(7, Math.floor(l % 8 / 4)),
                    setBuf2ToSC(8, Math.floor(l % 4 / 2)),
                    setBuf2ToSC(16, Math.floor(l % 2 / 1));
                l = StoN2(n.substr(S + 11, 1));
                setBuf2ToSC(17, Math.floor(l / 16)),
                    setBuf2ToSC(18, Math.floor(l % 16 / 8)),
                    setBuf2ToSC(19, Math.floor(l % 8 / 4)),
                    setBuf2ToSC(20, Math.floor(l % 4 / 2)),
                    setBuf2ToSC(21, Math.floor(l % 2 / 1)),
                    S += 11
            }
            if (debufSW(0),
                S += 1,
                1 == StoN2(n.substr(S, 1))) {
                n_B_debuf[0] = StoN2(n.substr(S + 1, 1)),
                    n_B_debuf[1] = Math.floor(StoN2(n.substr(S + 2, 1)) / 6),
                    n_B_debuf[18] = StoN2(n.substr(S + 2, 1)) % 6;
                l = StoN2(n.substr(S + 3, 1));
                n_B_debuf[2] = Math.floor(l / 16),
                    n_B_debuf[3] = Math.floor(l % 16 / 8),
                    n_B_debuf[4] = Math.floor(l % 8 / 4),
                    n_B_debuf[5] = Math.floor(l % 4 / 2),
                    n_B_debuf[6] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 4, 1)),
                    n_B_debuf[7] = Math.floor(l / 16),
                    n_B_debuf[8] = Math.floor(l % 16 / 8),
                    n_B_debuf[9] = Math.floor(l % 8 / 4),
                    n_B_debuf[10] = Math.floor(l % 4 / 2),
                    n_B_debuf[19] = Math.floor(l % 2 / 1),
                    n_B_debuf[11] = StoN2(n.substr(S + 5, 1)),
                    n_B_debuf[12] = StoN2(n.substr(S + 6, 1)),
                    l = StoN2(n.substr(S + 7, 1)),
                    n_B_debuf[13] = Math.floor(l / 16),
                    n_B_debuf[14] = Math.floor(l % 16 / 8),
                    n_B_debuf[15] = Math.floor(l % 8 / 4),
                    n_B_debuf[16] = Math.floor(l % 4 / 2),
                    n_B_debuf[17] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 8, 1)),
                    n_B_debuf[20] = Math.floor(l / 16),
                    n_B_debuf[21] = Math.floor(l % 16 / 8),
                    n_B_debuf[22] = Math.floor(l % 8 / 4),
                    n_B_debuf[23] = Math.floor(StoN2(n.substr(S + 9, 1)) / 6),
                    n_B_debuf[24] = StoN2(n.substr(S + 9, 1)) % 6,
                    S += 9
            }
            if (EnemyBufSW(0),
                S += 1,
                1 == StoN2(n.substr(S, 1))) {
                n_B_buf[0] = StoN2(n.substr(S + 1, 1));
                l = StoN2(n.substr(S + 2, 1));
                n_B_buf[1] = Math.floor(l / 16),
                    n_B_buf[2] = Math.floor(l % 16 / 8),
                    n_B_buf[3] = Math.floor(l % 8 / 4),
                    n_B_buf[4] = Math.floor(l % 4 / 2),
                    n_B_buf[9] = Math.floor(l % 2 / 1),
                    n_B_buf[6] = StoN2(n.substr(S + 3, 2)),
                    n_B_buf[7] = Math.floor(StoN2(n.substr(S + 5, 1)) / 6),
                    n_B_buf[8] = StoN2(n.substr(S + 5, 1)) % 6,
                    n_B_buf[5] = StoN2(n.substr(S + 6, 1)),
                    A >= 5 && (n_B_buf[10] = StoN2(n.substr(S + 7, 1)),
                        n_B_buf[11] = StoN2(n.substr(S + 8, 1)),
                        n_B_buf[12] = StoN2(n.substr(S + 9, 1)),
                        n_B_buf[13] = StoN2(n.substr(S + 10, 1)),
                        n_B_buf[14] = StoN2(n.substr(S + 11, 1)),
                        S += 5),
                    S += 6
            }
            s = [0, 0, 0, 0, 0];
            if (l = StoN2(n.substr(S + 1, 1)),
                s[0] = Math.floor(l / 16),
                s[1] = Math.floor(l % 16 / 8),
                s[2] = Math.floor(l % 8 / 4),
                s[3] = Math.floor(l % 4 / 2),
                s[4] = Math.floor(l % 2 / 1),
                S += 1,
                Buf3SW(0),
                s[0] && (n_A_Buf3[0] = StoN2(n.substr(S + 1, 1)),
                    n_A_Buf3[1] = StoN2(n.substr(S + 2, 1)),
                    n_A_Buf3[2] = StoN2(n.substr(S + 3, 1)),
                    n_A_Buf3[3] = StoN2(n.substr(S + 4, 1)),
                    n_A_Buf3[4] = StoN2(n.substr(S + 5, 1)),
                    n_A_Buf3[5] = StoN2(n.substr(S + 6, 1)),
                    n_A_Buf3[6] = StoN2(n.substr(S + 7, 1)),
                    n_A_Buf3[7] = Math.floor(StoN2(n.substr(S + 8, 1)) / 6),
                    n_A_Buf3[8] = StoN2(n.substr(S + 8, 1)) % 6,
                    n_A_Buf3[9] = Math.floor(StoN2(n.substr(S + 9, 1)) / 6),
                    n_A_Buf3[10] = StoN2(n.substr(S + 9, 1)) % 6,
                    n_A_Buf3[11] = Math.floor(StoN2(n.substr(S + 10, 1)) / 16),
                    n_A_Buf3[18] = Math.floor(StoN2(n.substr(S + 10, 1)) % 16 / 8),
                    n_A_Buf3[12] = StoN2(n.substr(S + 11, 2)),
                    n_A_Buf3[13] = StoN2(n.substr(S + 13, 2)),
                    n_A_Buf3[14] = StoN2(n.substr(S + 15, 2)),
                    n_A_Buf3[15] = StoN2(n.substr(S + 17, 2)),
                    n_A_Buf3[16] = StoN2(n.substr(S + 19, 2)),
                    n_A_Buf3[17] = StoN2(n.substr(S + 21, 2)),
                    n_A_Buf3[20] = StoN2(n.substr(S + 23, 2)),
                    n_A_Buf3[30] = StoN2(n.substr(S + 25, 1)),
                    n_A_Buf3[21] = StoN2(n.substr(S + 26, 2)),
                    n_A_Buf3[31] = StoN2(n.substr(S + 28, 1)),
                    n_A_Buf3[22] = StoN2(n.substr(S + 29, 2)),
                    n_A_Buf3[29] = StoN2(n.substr(S + 31, 2)),
                    n_A_Buf3[32] = StoN2(n.substr(S + 33, 1)),
                    n_A_Buf3[23] = StoN2(n.substr(S + 34, 2)),
                    n_A_Buf3[33] = StoN2(n.substr(S + 36, 1)),
                    n_A_Buf3[24] = StoN2(n.substr(S + 37, 2)),
                    n_A_Buf3[34] = StoN2(n.substr(S + 39, 1)),
                    n_A_Buf3[25] = StoN2(n.substr(S + 40, 2)),
                    n_A_Buf3[35] = StoN2(n.substr(S + 42, 1)),
                    n_A_Buf3[26] = StoN2(n.substr(S + 43, 2)),
                    n_A_Buf3[36] = StoN2(n.substr(S + 45, 1)),
                    S += 45),
                Buf4SW(0),
                s[1]) {
                l = StoN2(n.substr(S + 1, 1));
                n_A_Buf3[40] = Math.floor(l / 16),
                    n_A_Buf3[41] = Math.floor(StoN2(n.substr(S + 2, 1)) / 6),
                    n_A_Buf3[42] = StoN2(n.substr(S + 2, 1)) % 6,
                    n_A_Buf3[43] = Math.floor(StoN2(n.substr(S + 3, 1)) / 6),
                    n_A_Buf3[44] = StoN2(n.substr(S + 3, 1)) % 6,
                    S += 3
            }
            if (Buf6SW(0),
                s[3] && (n_A_Buf6[5] = StoN2(n.substr(S + 1, 1)),
                    n_A_Buf6[20] = StoN2(n.substr(S + 2, 1)),
                    n_A_Buf6[0] = Math.floor(StoN2(n.substr(S + 3, 1)) / 6),
                    n_A_Buf6[1] = StoN2(n.substr(S + 3, 1)) % 6,
                    n_A_Buf6[2] = Math.floor(StoN2(n.substr(S + 4, 1)) / 6),
                    n_A_Buf6[4] = StoN2(n.substr(S + 4, 1)) % 6,
                    n_A_Buf6[18] = Math.floor(StoN2(n.substr(S + 5, 1)) / 6),
                    n_A_Buf6[19] = StoN2(n.substr(S + 5, 1)) % 6,
                    l = StoN2(n.substr(S + 6, 1)),
                    n_A_Buf6[3] = Math.floor(l / 16),
                    n_A_Buf6[6] = Math.floor(l % 16 / 8),
                    n_A_Buf6[7] = Math.floor(l % 8 / 4),
                    n_A_Buf6[8] = Math.floor(l % 4 / 2),
                    n_A_Buf6[9] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 7, 1)),
                    n_A_Buf6[10] = Math.floor(l / 16),
                    n_A_Buf6[11] = Math.floor(l % 16 / 8),
                    n_A_Buf6[12] = Math.floor(l % 8 / 4),
                    n_A_Buf6[13] = Math.floor(l % 4 / 2),
                    n_A_Buf6[14] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 8, 1)),
                    n_A_Buf6[15] = Math.floor(l / 16),
                    n_A_Buf6[16] = Math.floor(l % 16 / 8),
                    n_A_Buf6[17] = Math.floor(l % 8 / 4),
                    n_A_Buf6[21] = Math.floor(l % 4 / 2),
                    n_A_Buf6[22] = Math.floor(l % 2 / 1),
                    S += 8),
                Buf7SW(0),
                s[4] && (n_A_Buf7[3] = StoN2(n.substr(S + 1, 1)),
                    n_A_Buf7[4] = StoN2(n.substr(S + 2, 1)),
                    n_A_Buf7[5] = StoN2(n.substr(S + 3, 1)),
                    n_A_Buf7[6] = StoN2(n.substr(S + 4, 1)),
                    n_A_Buf7[7] = StoN2(n.substr(S + 5, 1)),
                    n_A_Buf7[8] = StoN2(n.substr(S + 6, 1)),
                    n_A_Buf7[35] = Math.floor(StoN2(n.substr(S + 7, 1)) / 6),
                    n_A_Buf7[42] = StoN2(n.substr(S + 7, 1)) % 6,
                    n_A_Buf7[39] = Math.floor(StoN2(n.substr(S + 8, 1)) / 6),
                    n_A_Buf7[40] = StoN2(n.substr(S + 8, 1)) % 6,
                    l = StoN2(n.substr(S + 9, 1)),
                    n_A_Buf7[0] = Math.floor(l / 16),
                    n_A_Buf7[1] = Math.floor(l % 16 / 8),
                    n_A_Buf7[2] = Math.floor(l % 8 / 4),
                    n_A_Buf7[9] = Math.floor(l % 4 / 2),
                    n_A_Buf7[10] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 10, 1)),
                    n_A_Buf7[11] = Math.floor(l / 16),
                    n_A_Buf7[12] = Math.floor(l % 16 / 8),
                    n_A_Buf7[13] = Math.floor(l % 8 / 4),
                    n_A_Buf7[14] = Math.floor(l % 4 / 2),
                    l = StoN2(n.substr(S + 11, 1)),
                    n_A_Buf7[16] = Math.floor(l / 16),
                    n_A_Buf7[17] = Math.floor(l % 16 / 8),
                    n_A_Buf7[18] = Math.floor(l % 8 / 4),
                    n_A_Buf7[19] = Math.floor(l % 4 / 2),
                    n_A_Buf7[20] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 12, 1)),
                    n_A_Buf7[21] = Math.floor(l / 16),
                    n_A_Buf7[22] = Math.floor(l % 16 / 8),
                    n_A_Buf7[23] = Math.floor(l % 8 / 4),
                    n_A_Buf7[24] = Math.floor(l % 4 / 2),
                    n_A_Buf7[25] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 13, 1)),
                    n_A_Buf7[26] = Math.floor(l / 16),
                    n_A_Buf7[27] = Math.floor(l % 16 / 8),
                    n_A_Buf7[28] = Math.floor(l % 8 / 4),
                    n_A_Buf7[29] = Math.floor(l % 4 / 2),
                    n_A_Buf7[30] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 14, 1)),
                    n_A_Buf7[31] = Math.floor(l / 16),
                    n_A_Buf7[32] = Math.floor(l % 16 / 8),
                    n_A_Buf7[33] = Math.floor(l % 8 / 4),
                    n_A_Buf7[34] = Math.floor(l % 4 / 2),
                    n_A_Buf7[36] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 15, 1)),
                    n_A_Buf7[37] = Math.floor(l / 16),
                    n_A_Buf7[38] = Math.floor(l % 16 / 8),
                    n_A_Buf7[41] = Math.floor(l % 8 / 4),
                    n_A_Buf7[43] = Math.floor(l % 4 / 2),
                    n_A_Buf7[44] = Math.floor(l % 2 / 1),
                    l = StoN2(n.substr(S + 16, 1)),
                    n_A_Buf7[45] = Math.floor(l / 16),
                    n_A_Buf7[46] = Math.floor(l % 16 / 8),
                    n_A_Buf7[47] = Math.floor(l % 8 / 4),
                    n_A_Buf7[48] = Math.floor(l % 4 / 2),
                    n_A_Buf7[49] = Math.floor(l % 2 / 1),
                    A >= 6 && (l = StoN2(n.substr(S + 17, 1)),
                        n_A_Buf7[50] = Math.floor(l / 16),
                        n_A_Buf7[51] = Math.floor(l % 16 / 8),
                        n_A_Buf7[52] = Math.floor(l % 8 / 4),
                        n_A_Buf7[53] = Math.floor(l % 4 / 2),
                        n_A_Buf7[54] = Math.floor(l % 2 / 1),
                        n_A_Buf7[55] = StoN2(n.substr(S + 18, 1)),
                        l = StoN2(n.substr(S + 19, 1)),
                        n_A_Buf7[56] = Math.floor(l / 16),
                        n_A_Buf7[57] = Math.floor(l % 16 / 8),
                        n_A_Buf7[58] = Math.floor(l % 8 / 4),
                        n_A_Buf7[59] = Math.floor(l % 4 / 2),
                        n_A_Buf7[60] = Math.floor(l % 2 / 1),
                        S += 3),
                    S += 16),
                Buf8SW(0),
                S += 1,
                1 == StoN2(n.substr(S, 1))) {
                n_A_Buf8[0] = StoN2(n.substr(S + 1, 2)),
                    n_A_Buf8[3] = StoN2(n.substr(S + 3, 2)),
                    n_A_Buf8[7] = StoN2(n.substr(S + 5, 2)),
                    n_A_Buf8[8] = StoN2(n.substr(S + 7, 2)),
                    n_A_Buf8[9] = StoN2(n.substr(S + 9, 2)),
                    n_A_Buf8[10] = StoN2(n.substr(S + 11, 2)),
                    n_A_Buf8[11] = StoN2(n.substr(S + 13, 2)),
                    n_A_Buf8[5] = StoN2(n.substr(S + 15, 1)),
                    n_A_Buf8[6] = StoN2(n.substr(S + 16, 1)),
                    n_A_Buf8[1] = Math.floor(StoN2(n.substr(S + 17, 1)) / 6);
                l = StoN2(n.substr(S + 18, 1));
                n_A_Buf8[2] = Math.floor(l / 16),
                    S += 18
            }
            if (A >= 6) {
                if (Buf9SW(0),
                    S += 1,
                    1 == StoN2(n.substr(S, 1)))
                    if (n_A_Buf9[0] = StoN2(n.substr(S + 1, 1)),
                        n_A_Buf9[1] = StoN2(n.substr(S + 2, 2)),
                        n_A_Buf9[2] = StoN2(n.substr(S + 4, 1)),
                        n_A_Buf9[3] = StoN2(n.substr(S + 5, 2)),
                        n_A_Buf9[4] = StoN2(n.substr(S + 7, 1)),
                        n_A_Buf9[5] = StoN2(n.substr(S + 8, 2)),
                        n_A_Buf9[6] = StoN2(n.substr(S + 10, 1)),
                        n_A_Buf9[7] = StoN2(n.substr(S + 11, 2)),
                        n_A_Buf9[8] = StoN2(n.substr(S + 13, 1)),
                        n_A_Buf9[9] = StoN2(n.substr(S + 14, 2)),
                        n_A_Buf9[10] = StoN2(n.substr(S + 16, 1)),
                        n_A_Buf9[11] = StoN2(n.substr(S + 17, 2)),
                        n_A_Buf9[12] = StoN2(n.substr(S + 19, 1)),
                        n_A_Buf9[13] = StoN2(n.substr(S + 20, 2)),
                        n_A_Buf9[14] = StoN2(n.substr(S + 22, 1)),
                        n_A_Buf9[15] = StoN2(n.substr(S + 23, 2)),
                        n_A_Buf9[16] = StoN2(n.substr(S + 25, 1)),
                        n_A_Buf9[17] = StoN2(n.substr(S + 26, 2)),
                        n_A_Buf9[18] = StoN2(n.substr(S + 28, 1)),
                        n_A_Buf9[19] = StoN2(n.substr(S + 29, 2)),
                        n_A_Buf9[20] = StoN2(n.substr(S + 31, 1)),
                        n_A_Buf9[21] = StoN2(n.substr(S + 32, 2)),
                        n_A_Buf9[22] = StoN2(n.substr(S + 34, 1)),
                        n_A_Buf9[23] = StoN2(n.substr(S + 35, 2)),
                        n_A_Buf9[24] = StoN2(n.substr(S + 37, 1)),
                        n_A_Buf9[25] = StoN2(n.substr(S + 38, 2)),
                        n_A_Buf9[26] = StoN2(n.substr(S + 40, 1)),
                        n_A_Buf9[27] = StoN2(n.substr(S + 41, 2)),
                        n_A_Buf9[28] = StoN2(n.substr(S + 43, 1)),
                        n_A_Buf9[29] = StoN2(n.substr(S + 44, 2)),
                        n_A_Buf9[30] = StoN2(n.substr(S + 46, 3)),
                        A >= 7) {
                        for (r = 31; r <= 59; r++)
                            n_A_Buf9[r] = StoN2(n.substr(S - 13 + 2 * r, 2));
                        S += 106
                    } else {
                        for (r = 31; r <= 55; r++)
                            n_A_Buf9[r] = StoN2(n.substr(S - 13 + 2 * r, 2));
                        S += 98
                    }
                Buf10SW(0),
                    S += 1,
                    1 == StoN2(n.substr(S, 1)) && (n_B_manual[1] = StoN2(n.substr(S + 1, 2)),
                        n_B_manual[2] = StoN2(n.substr(S + 3, 1)),
                        n_B_manual[3] = StoN2(n.substr(S + 4, 2)),
                        n_B_manual[4] = StoN2(n.substr(S + 6, 1)),
                        n_B_manual[5] = StoN2(n.substr(S + 7, 2)),
                        n_B_manual[7] = StoN2(n.substr(S + 9, 2)),
                        n_B_manual[9] = StoN2(n.substr(S + 11, 2)),
                        n_B_manual[21] = StoN2(n.substr(S + 13, 2)),
                        n_B_manual[30] = StoN2(n.substr(S + 15, 3)),
                        n_B_manual[31] = StoN2(n.substr(S + 18, 2)),
                        n_B_manual[34] = StoN2(n.substr(S + 20, 2)),
                        n_B_manual[35] = StoN2(n.substr(S + 22, 2)),
                        n_B_manual[36] = StoN2(n.substr(S + 24, 2)),
                        n_B_manual[37] = StoN2(n.substr(S + 26, 2)),
                        n_B_manual[38] = StoN2(n.substr(S + 28, 2)),
                        n_B_manual[39] = StoN2(n.substr(S + 30, 2)),
                        n_B_manual[40] = StoN2(n.substr(S + 32, 3)),
                        n_B_manual[41] = StoN2(n.substr(S + 35, 2)),
                        n_B_manual[42] = StoN2(n.substr(S + 37, 3)),
                        n_B_manual[43] = StoN2(n.substr(S + 40, 3)),
                        n_B_manual[44] = StoN2(n.substr(S + 43, 2)),
                        n_B_manual[48] = StoN2(n.substr(S + 45, 2)),
                        n_B_manual[49] = StoN2(n.substr(S + 47, 2)),
                        n_B_manual[50] = StoN2(n.substr(S + 49, 2)),
                        n_B_manual[51] = StoN2(n.substr(S + 51, 2)),
                        n_B_manual[52] = StoN2(n.substr(S + 53, 2)),
                        n_B_manual[53] = StoN2(n.substr(S + 55, 3)),
                        n_B_manual[54] = StoN2(n.substr(S + 58, 2)),
                        n_B_manual[55] = StoN2(n.substr(S + 60, 2)),
                        S += 61)
            }
            c.Conf01.value = StoN2(n.substr(S + 1, 2)),
                c.B_num.value = StoN2(n.substr(S + 3, 1)),
                c.A8_Skill14.value = StoN2(n.substr(S + 4, 1)),
                c.A8_Skill15.value = StoN2(n.substr(S + 5, 2));
            l = StoN2(n.substr(S + 7, 1));
            StCalc(1),
                ActiveSkillSetPlus(),
                c.A_ActiveSkill.value = StoN2(n.substr(S + 8, 2)),
                ClickActiveSkill(),
                c.A_ActiveSkillLV.value = StoN2(n.substr(S + 10, 1)),
                66 != n_A_ActiveSkill && 326 != n_A_ActiveSkill && 159 != n_A_ActiveSkill && 384 != n_A_ActiveSkill && 324 != n_A_ActiveSkill && 131 != n_A_ActiveSkill && 88 != n_A_ActiveSkill && 197 != n_A_ActiveSkill && 394 != n_A_ActiveSkill && 395 != n_A_ActiveSkill && 405 != n_A_ActiveSkill && 429 != n_A_ActiveSkill || (c.SkillSubNum.value = StoN2(n.substr(S + 11, 3)));

            const doubleCastIndex = JOB_AVAILABLE_BUFFS[n_A_JOB].indexOf(441);
            if (doubleCastIndex !== -1) {
                const doubleCastSkillElement = document.getElementById("A_skill" + doubleCastIndex);

                if (doubleCastSkillElement) {
                    const doubleCastSkillLevel = 1 * doubleCastSkillElement.value;

                    const isCompatibleBoltSkill = n_A_ActiveSkill == 51 || n_A_ActiveSkill == 54 || n_A_ActiveSkill == 56 || n_A_ActiveSkill == 540 || n_A_ActiveSkill == 541 || n_A_ActiveSkill == 542;

                    if (doubleCastSkillLevel > 0 && isCompatibleBoltSkill) {
                        const averageChance = doubleCastSkillLevel + 3;
                        myInnerHtml("AASkill", 'Double Bolt chance: <select name="SkillSubNum" onChange="calc()"></select>', 0);
                        c.SkillSubNum.options[0] = new Option("No chance (0%)", 0);
                        c.SkillSubNum.options[1] = new Option("Average chance (" + 10 * averageChance + "%)", averageChance);
                        c.SkillSubNum.options[2] = new Option("Max chance (100%)", 10);
                        c.SkillSubNum.value = StoN2(n.substr(S + 11, 3));
                    }
                }
            }
            n_B[0] = StoN2(n.substr(S + 14, 2)),
                c.B_Enemy.value = StoN2(n.substr(S + 14, 2)),
                calc(),
                Bskill(),
                c.B_AtkSkill.value = StoN2(n.substr(S + 16, 2)),
                BClickAtkSkill(),
                n_B_AtkSkill = 1 * c.B_AtkSkill.value,
                444 != n_B_AtkSkill && 445 != n_B_AtkSkill && 125 != n_B_AtkSkill && 131 != n_B_AtkSkill || (c.BSkillSubNum.value = StoN2(n.substr(S + 18, 3))),
                A >= 6 && (c.B_AtkRange.value = StoN2(n.substr(S + 21, 1)),
                    c.B_AtkElem.value = StoN2(n.substr(S + 22, 1)),
                    c.theme.value = StoN2(n.substr(S + 23, 1)),
                    c.server.value = StoN2(n.substr(S + 24, 1)))
        }
        if (n.substr(-23, 1) != "-") {
            if (n.substr(-16, 1) != "-") {
                for (x = -56, g = 0; x < 0, g <= 27; x += 2, g++) { // load rand options from url
                    n_A_randopt[g] = StoN2(n.substr(x, 2));
                }
                for (g = 0; g <= 5; g++)
                    n_A_Shadow[g] = 0;
                n_A_Shadow[1] = 22;
                n_A_Shadow[3] = 44;
                for (g = 0; g <= 3; g++)
                    n_A_Buf3[45 + g] = 0;
                n_A_Buf3[37] = 0;

            } else {
                for (x = -72, g = 0; x < 0, g <= 27; x += 2, g++) { // load rand options from url
                    n_A_randopt[g] = StoN2(n.substr(x, 2));
                }
                for (x = -15, g = 0; x < 0, g <= 5; x += 2, g++) {
                    n_A_Shadow[g] = StoN2(n.substr(x, 2));
                }
                l = StoN2(n.substr(-3, 1));
                n_A_Buf3[45] = Math.floor(l / 16),
                    n_A_Buf3[46] = Math.floor(l % 16 / 8),
                    n_A_Buf3[47] = Math.floor(l % 8 / 4),
                    n_A_Buf3[48] = Math.floor(l % 4 / 2),
                    n_A_Buf3[37] = StoN2(n.substr(-2, 2))
            }

            for (g = 0; g <= 10; g++)
                n_A_enchant[g] = 0;
        } else {
            for (x = -95, g = 0; x < 0, g <= 27; x += 2, g++) { // load rand options from url
                n_A_randopt[g] = StoN2(n.substr(x, 2));
            }
            for (x = -38, g = 0; x < 0, g <= 5; x += 2, g++) {
                n_A_Shadow[g] = StoN2(n.substr(x, 2));
            }
            l = StoN2(n.substr(-26, 1));
            n_A_Buf3[45] = Math.floor(l / 16),
                n_A_Buf3[46] = Math.floor(l % 16 / 8),
                n_A_Buf3[47] = Math.floor(l % 8 / 4),
                n_A_Buf3[48] = Math.floor(l % 4 / 2),
                n_A_Buf3[37] = StoN2(n.substr(-25, 2));

            for (x = -22, g = 0; x < 0, g <= 10; x += 2, g++) {
                n_A_enchant[g] = StoN2(n.substr(x, 2));
            }
        }
        refreshFields(),
            calc(),
            themes()
    }
}
for (n_NtoS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    n_NtoS2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    EnName = ["Neutral", "Water", "Earth", "Fire", "Wind", "Poison", "Holy", "Shadow", "Ghost", "Undead"],
    i = 0; i <= 9; i++)
    document.calcForm.A_Weapon_element.options[i] = new Option(v_Element_[i], i),
        document.calcForm.B_AtkElem.options[i] = new Option(v_Element_[i], i);
for (document.calcForm.A_Weapon_element.options[0] = new Option("(unchanged)", 0),
    document.calcForm.A_Weapon_element.value = 0,
    document.calcForm.B_AtkElem.options[i] = new Option("(unchanged)", 10),
    m_CardShort = [["(card shortcuts)", 0, 0, 0, 0], ["Remove All Cards", 1e4, 0], ["Remove Weapon's Cards", 0, 0, 0, 0], ["+40% [2 Race Card]", 1, 1, 0, 0], ["+60% [3 Race Card]", 1, 1, 1, 0], ["+80% [4 Race Card]", 1, 1, 1, 1], ["+61% [2 Race + 1 Size Cards]", 1, 1, 3, 0], ["+68% [2 Race + 1 Element Cards]", 1, 1, 2, 0], ["+84% [3 Race + 1 Size Cards]", 1, 1, 1, 3], ["+96% [2 Race + 2 Element Cards]", 1, 1, 2, 2], ["+110% [2 AK + 2 Race Cards]", 31, 31, 1, 1], ["+110% [3 AK + 1 Race Cards]", 31, 31, 31, 1], ["+110% [3 AK + 1 Element Cards]", 31, 31, 31, 2], ["2 Size Cards", 3, 3, 0, 0], ["3 Size Cards", 3, 3, 3, 0], ["4 Size Cards", 3, 3, 3, 3], ["1 Elemental Stone + 1 Star Crumb", 0, 106, 0, 0], ["1 Elemental Stone + 2 Star Crumbs", 0, 106, 106, 0], ["3 Star Crumbs", 106, 106, 106, 0], ["+40 ATK [2 Andre Cards]", 11, 11, 0, 0], ["+60 ATK [3 Andre Cards]", 11, 11, 11, 0], ["+80 ATK [4 Andre Cards]", 11, 11, 11, 11], ["+60 ATK [2 Zipper Bear Cards]", 326, 326, 0, 0], ["+90 ATK [3 Zipper Bear Cards]", 326, 326, 326, 0], ["+120 ATK [4 Zipper Bear Cards]", 326, 326, 326, 326], ["+18 CRIT [2 Soldier Skeleton Cards]", 41, 41, 0, 0], ["+27 CRIT [3 Soldier Skeleton Cards]", 41, 41, 41, 0], ["+36 CRIT [4 Soldier Skeleton Cards]", 41, 41, 41, 41], ["+40 HIT [2 Mummy Cards]", 40, 40, 0, 0], ["+60 HIT [3 Mummy Cards]", 40, 40, 40, 0], ["+80 HIT [4 Mummy Cards]", 40, 40, 40, 40], ["+60% [2 Orc Lady Cards]", 252, 252, 0, 0], ["+92% [2 Orc Lady + 1 Hydra Cards]", 252, 252, 13, 0], ["+128% [3 Orc Lady + 1 Hydra Cards]", 252, 252, 252, 13], ["+20% [2 Archer Skeleton Cards]", 107, 107, 0, 0], ["+30% [3 Archer Skeleton Cards]", 107, 107, 107, 0], ["+40% [4 Archer Skeleton Cards]", 107, 107, 107, 107], ["2 Fabre Cards", 4, 4, 0, 0], ["3 Fabre Cards", 4, 4, 4, 0], ["4 Fabre Cards", 4, 4, 4, 4], ["2 Drops Cards", 5, 5, 0, 0], ["3 Drops Cards", 5, 5, 5, 0], ["4 Drops Cards", 5, 5, 5, 5], ["+50% [2 Abysmal Knight Cards]", 31, 31, 0, 0], ["+75% [3 Abysmal Knight Cards]", 31, 31, 31, 0], ["+100% [4 Abysmal Knight Cards]", 31, 31, 31, 31], ["2 Crit Dmg +10%, CRIT +7 Cards", 156, 156, 0, 0], ["3 Crit Dmg +10%, CRIT +7 Cards", 156, 156, 156, 0], ["4 Crit Dmg +10%, CRIT +7 Cards", 156, 156, 156, 156], ["2 Cecil Damon Cards", 160, 160, 0, 0], ["3 Cecil Damon Cards", 160, 160, 160, 0], ["4 Cecil Damon Cards", 160, 160, 160, 160], ["Swordman Set", 1e4, 223, 347, 0, 317, 0, 362, 354, 0], ["Thief Set", 1e4, 233, 0, 0, 0, 295, 391, 395, 260], ["Acolyte Set", 1e4, 253, 383, 307, 301, 0, 0, 270, 0], ["Archer Set", 1e4, 279, 0, 0, 224, 340, 351, 230, 0], ["Magician Set", 1e4, 0, 337, 358, 220, 346, 379, 350, 0], ["Merchant Set", 1e4, 326, 376, 0, 281, 0, 388, 216, 0], ["Crusader Set", 1e4, 0, 347, 0, 190, 0, 362, 354, 0], ["Rogue Set", 1e4, 0, 113, 0, 0, 295, 391, 260, 413], ["Monk Set", 1e4, 253, 383, 0, 181, 0, 0, 270, 0], ["Bard/Dancer Set", 1e4, 279, 0, 0, 224, 340, 408, 230, 0], ["Sage Set", 1e4, 0, 337, 0, 193, 346, 379, 350, 0], ["Alchemist Set", 1e4, 326, 175, 0, 281, 0, 388, 104, 0], ["Test (for now)", 0, 0, 0, 0]],
    i = 0; i <= 63; i++)
    document.calcForm.A_cardshort.options[i] = new Option(m_CardShort[i][0], i);
for (n_A_Buf3 = new Array,
    i = 0; i <= 48; i++)
    n_A_Buf3[i] = 0;
for (n_A_Buf6 = new Array,
    i = 0; i <= 23; i++)
    n_A_Buf6[i] = 0;
for (n_A_Buf7 = new Array,
    i = 0; i <= 60; i++)
    n_A_Buf7[i] = 0;
for (n_A_Buf8 = new Array,
    i = 0; i <= 15; i++)
    n_A_Buf8[i] = 0;
for (n_A_Buf9 = new Array,
    i = 0; i <= 59; i++)
    n_A_Buf9[i] = 0;
for (n_A_Buf9[2] = 10,
    n_A_Buf9[4] = 20,
    n_A_Buf9[6] = 23,
    n_A_Buf9[10] = 10,
    n_A_Buf9[12] = 20,
    n_A_Buf9[14] = 23,
    n_B_manual = new Array,
    i = 0; i <= 60; i++)
    n_B_manual[i] = 0;
for (n_A_debuf = new Array,
    i = 0; i <= 3; i++)
    n_A_debuf[i] = 0;
for (n_B_debuf = new Array,
    i = 0; i <= 30; i++)
    n_B_debuf[i] = 0;
for (n_B_buf = new Array,
    i = 0; i <= 14; i++)
    n_B_buf[i] = 0;
for (n_A_Equip = new Array,
    i = 0; i <= 20; i++)
    n_A_Equip[i] = 0;
for (n_A_card = new Array,
    i = 0; i <= 25; i++)
    n_A_card[i] = 0;
for (n_A_randopt = new Array,
    i = 0; i <= 27; i++)
    n_A_randopt[i] = 0;
for (n_A_Shadow = new Array,
    i = 0; i <= 5; i++)
    n_A_Shadow[i] = 0;
n_A_Shadow[1] = 22;
n_A_Shadow[3] = 44;
for (n_A_enchant = new Array,
    i = 0; i <= 10; i++)
    n_A_enchant[i] = 0;

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
    ClickB_Item("SW"),
        debufSW(n_debufSW),
        EnemyBufSW(n_BbufSW),
        BufSW(n_SkillSW),
        Buf3SW(n_Skill3SW),
        Buf4SW(n_Skill4SW),
        Buf6SW(n_Skill6SW),
        Buf7SW(n_Skill7SW),
        Buf8SW(n_Skill8SW),
        Buf9SW(n_Skill9SW),
        Buf10SW(n_Skill10SW),
        reloadRandOpt()
    reloadShadowEquip()
    reloadEnchant()
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
ClickJob(0),
allCard(),
EnemySort(),
StCalc(),
firstLoadFunction(),
Bskill(),
LoadLocal3(),
URLIN(),
refreshFields(),
restrictCardslot(0);
