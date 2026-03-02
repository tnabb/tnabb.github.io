function status_calc_max_hp(sd, vit) {
    let skill;
    let dmax = JOB_BASE_HP[sd.status.job_id][sd.status.base_level];

    if(vit > 0) {
        dmax *= (1.0 + vit * 0.01);
    }

    if(sd.status.rebirth) {
        dmax *= 1.25;
    }

    if((skill = SkillSearch(SKILL.TK_IRONSPIRIT)) > 0) {
        let max_hp_bonus = 5 * skill;
        if(n_A_JobClass2() == JOB.SOUL_LINKER) 
            max_hp_bonus = 2 * skill;
        dmax += dmax * max_hp_bonus / 100;
    }

    dmax += sd.indexed_bonus.param_equip[STAT.VIT];

    dmax += status_get_hpbonus(sd, STATUS.BONUS_FIX);

    let equip_bonus = ( dmax * status_get_hpbonus_equip(sd) / 100);

    let item_bonus = (dmax * status_get_hpbonus_item(sd) / 100);

    dmax += equip_bonus + item_bonus;

    dmax += Math.floor(dmax * status_get_hpbonus(sd, STATUS.BONUS_RATE) / 100);

    dmax = Math.floor(dmax);

    if(dmax < 1)
        dmax = 1;

    return dmax;
}

function status_get_hpbonus_equip(sd) {
    let bonus = 0;

    bonus += sd.hprate;

    return bonus -= 100;
}

function status_get_hpbonus_item(sd) {
    let bonus = 0;

    return cap_value(bonus, -100, INT_MAX);
}

function status_get_hpbonus(sd, type) {
    let bonus = 0;

    if(type == STATUS.BONUS_FIX) {
        let skill_lv;

        bonus += sd.bonus.hp;

        if((skill_lv = SkillSearch(SKILL.CR_TRUST)) > 0)
            bonus += skill_lv * 200;
        if(n_A_Buf2[4])
            bonus += n_A_Buf2[4] * 100;
    } else if (type == STATUS.BONUS_RATE) {
        if(n_A_Buf3[3]) // apple of idun
            bonus += 5 + 2 * n_A_Buf3[3] + Math.floor(n_A_Buf3[33] / 2) + Math.floor(n_A_Buf3[23] / 10);
        let deluge_eff = [5, 9, 12, 14, 15];
        if(n_A_Buf6[0] == 1 && sd.status.def_ele == ELE.WATER) // deluge
            bonus += deluge_eff[n_A_Buf6[1] - 1];
        if(n_A_Buf2[17]) // gospel +100% max hp
            bonus += 100;
        if(SkillSearch(SKILL.LK_BERSERK))
            bonus += 200;

        bonus = cap_value(bonus, -100, INT_MAX);
    }

    return Math.min(bonus, INT_MAX);
}

function status_calc_max_sp(sd, int) {
    let skill;
    let dmax = JOB_BASE_SP[sd.status.job_id][sd.status.base_level];

    if(int > 0) {
        dmax *= (1.0 + int * 0.01);
    }

    if(sd.status.rebirth) {
        dmax *= 1.25;
    }

    if((skill = SkillSearch(SKILL.TK_MENTALFORTITUDE)) > 0) {
        let max_sp_bonus = 5 * skill;
        if(n_A_JobClass2() == JOB.SOUL_LINKER)
            max_sp_bonus = 2 * skill;
        dmax += dmax * max_sp_bonus / 100;
    }

    dmax += sd.indexed_bonus.param_equip[STAT.INT];

    dmax += status_get_spbonus(sd, STATUS.BONUS_FIX);

    let equip_bonus = ( dmax * status_get_spbonus_equip(sd) / 100);

    let item_bonus = (dmax * status_get_spbonus_item(sd) / 100);

    dmax += equip_bonus + item_bonus;

    dmax += Math.floor(dmax * status_get_spbonus(sd, STATUS.BONUS_RATE) / 100);

    dmax = Math.floor(dmax);

    if(dmax < 1)
        dmax = 1;

    return dmax;
}

function status_get_spbonus_equip(sd) {
    let bonus = 0;

    bonus += sd.sprate;

    return bonus -= 100;
}

function status_get_spbonus_item(sd) {
    let bonus = 0;

    return cap_value(bonus, -100, INT_MAX);
}

function status_get_spbonus(sd, type) {
    let bonus = 0;

    if(type == STATUS.BONUS_FIX) {
        let skill_lv;

        bonus += sd.bonus.sp;

        if((skill_lv = SkillSearch(SKILL.SL_KAINA)) > 0)
            bonus += 40 * skill_lv;
    } else if (type == STATUS.BONUS_RATE) {
        let skill_lv;
        if((skill_lv = SkillSearch(SKILL.HP_MEDIATIO)) > 0)
            bonus += skill_lv;
        if((skill_lv = SkillSearch(SKILL.HW_SOULDRAIN)) > 0)
            bonus += 2 * skill_lv;
        if(n_A_Buf3[6]) // service for you
            bonus += 15 + n_A_Buf3[6] + Math.floor(n_A_Buf3[36] / 2) + Math.floor(n_A_Buf3[26] / 10);
        if(n_A_Buf2[18]) // gospel +100% max sp
            bonus += 100;

        bonus = cap_value(bonus, -100, INT_MAX);
    }

    return Math.min(bonus, INT_MAX);
}

function status_calc_misc(sd, status, level) {
    let stat;

    // matk
    status.matk_min = status_base_matk_min(status);
    status.matk_max = status_base_matk_max(status);
    // hit
    stat = status.hit;
    stat += level + status.dex;
    status.hit = cap_value(stat, 1, SHRT_MAX);
    // flee
    stat = status.flee;
    stat += level + status.agi;
    status.flee = cap_value(stat, 1, SHRT_MAX);
    // def2
    stat = status.def2;
    stat += status.vit;
    status.def2 = cap_value(stat, 1, SHRT_MAX);
    // mdef2
    stat = status.mdef2;
    stat += status.int + Math.floor(status.vit / 2);
    status.mdef2 = cap_value(stat, 1, SHRT_MAX);
    // crit
    stat = status.cri;
    stat += 10 + Math.floor((status.luk * 10) / 3);
    status.cri = cap_value(stat, 1, SHRT_MAX);
    // perfect dodge
    stat = status.flee2;
    stat += status.luk + 10;
    status.flee2 = cap_value(stat, 1, SHRT_MAX);
    // base atk
    status.batk += status_base_atk(sd, status, level);
}

function status_base_matk_min(status) {
    return status.int + Math.floor(status.int / 7) * Math.floor(status.int / 7);
}

function status_base_matk_max(status) {
    return status.int + Math.floor(status.int / 5) * Math.floor(status.int / 5);
}

function status_base_atk(sd, status, level) {
    let flag = 0;
    let str;
    let dex;
    let dstr;

    if(sd.type == BL.PC) {
        switch(sd.status.weapon) {
            case WEAPON.BOW:
            case WEAPON.INSTRUMENT:
            case WEAPON.WHIP:
            case WEAPON.REVOLVER:
            case WEAPON.RIFLE:
            case WEAPON.GATLING:
            case WEAPON.SHOTGUN:
            case WEAPON.GRENADE:
                flag = 1;
        }
    }
    if(flag) {
        str = status.dex;
        dex = status.str;
    } else {
        str = status.str;
        dex = status.dex;
    }

    dstr = Math.floor(str / 10);
    str += dstr * dstr;
    str += Math.floor(dex / 5) + Math.floor(status.luk / 5);

    return cap_value(str, 0, USHRT_MAX);
}

function status_base_amotion(sd, status) {
    let job_aspd = JOB_BASE_ASPD[sd.status.job_id];
    let amotion = (sd.status.weapon < WEAPON.MAX) ? (job_aspd[sd.status.weapon] * 500) : ((job_aspd[sd.weapontype1] * 500) + Math.floor(((job_aspd[sd.weapontype2] * 500) * 7) / 10));

    amotion -= Math.floor((amotion * (4 * status.agi + status.dex)) / 1000);

    amotion += sd.bonus.aspd_add;
    return amotion;
}

function status_calc_str(player, str) {
    let bonus;

    if(SkillSearch(SKILL.ST_CHASEWALK)) {
        bonus = 0;
        switch(SkillSearch(SKILL.ST_CHASEWALK)) {
            case 1: bonus = 1; break;
            case 2: bonus = 2; break;
            case 3: bonus = 4; break;
            case 4: bonus = 8; break;
            case 5: bonus = 16; break;
        }
        str += bonus;
    }
    if(SkillSearch(SKILL.NJ_NEN))
        str += SkillSearch(SKILL.NJ_NEN);
    if(n_A_Buf2[0]) // blessing
        str += n_A_Buf2[0] * 2;
    if(SkillSearch(SKILL.SN_SIGHT))
        str += 5;
    if(SkillSearch(SKILL.TK_RUN_STR) && player.weapontype1 == WEAPON.FIST)
        str += 10;
    if(n_A_Buf3[40]) // battle orders
        str += 5;
    if(n_A_Buf3[41]) // great leadership
        str += n_A_Buf3[41];
    if(n_A_Buf2[16]) // gospel +20 stats
        str += 20;
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        str += Math.max(0, max_stat - status2.str);
    }
    if(n_A_Buf3[11]) { // marionette control
        let max_stat;
        let status2 = player.base_status;
        let caster_stats = {str: n_A_Buf3[12], agi: n_A_Buf3[13], vit: n_A_Buf3[14], int: n_A_Buf3[15], dex: n_A_Buf3[16], luk: n_A_Buf3[17]};

        max_stat = 99;
        str += Math.min(caster_stats.str, max_stat - status2.str);
    }

    return cap_value(str, 0, USHRT_MAX);
}

function status_calc_agi(player, agi) {
    let bonus;

    if(SkillSearch(SKILL.GS_INCREASING))
        agi += 4;
    if(SkillSearch(SKILL.AC_CONCENTRATION) || SkillSearch(SKILL.RG_CONCENTRATION_COPIED) || TimeItemNumSearch(4) || n_A_Buf7[34]) { // improve concentration
        bonus = 0; // represents skill level
        if(SkillSearch(SKILL.AC_CONCENTRATION))
            bonus = SkillSearch(SKILL.AC_CONCENTRATION);
        else if (SkillSearch(SKILL.RG_CONCENTRATION_COPIED))
            bonus = SkillSearch(SKILL.RG_CONCENTRATION_COPIED);
        else if (TimeItemNumSearch(4) || n_A_Buf7[34])
            bonus = 1;

        agi += Math.floor(((player.base_status.agi - player.indexed_bonus.param_bonus[STAT.AGI]) * (2 + bonus)) / 100);
    }
    if(n_A_Buf6[19] == 0 && n_A_Buf6[20] == 0 && (n_A_Buf2[1] || n_A_Buf7[27])) { // increase agi
        bonus = 0; // represents skill level
        if(n_A_Buf7[26])
            bonus = 5;
        else if (n_A_Buf2[1])
            bonus = n_A_Buf2[1];
        agi += (bonus + 1) * 2;
    }
    if(SkillSearch(SKILL.SN_SIGHT))
        agi += 5;
    if(n_A_Buf3[43] > 0) // soul of cold
        agi += n_A_Buf3[43];
    if(n_A_Buf2[16]) { // gospel +20 stats
        agi += 20;
    }
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        agi += Math.max(0, max_stat - status2.agi);
    }
    if(n_A_Buf3[11]) { // marionette control
        let max_stat;
        let status2 = player.base_status;
        let caster_stats = {str: n_A_Buf3[12], agi: n_A_Buf3[13], vit: n_A_Buf3[14], int: n_A_Buf3[15], dex: n_A_Buf3[16], luk: n_A_Buf3[17]};

        max_stat = 99;
        agi += Math.min(caster_stats.agi, max_stat - status2.agi);
    }
    if(n_A_Buf6[19]) { // quagmire
        agi -= 5 * n_A_Buf6[19];
    }
    if(n_A_Buf6[20]) // decrease agi
        agi -= n_A_Buf6[20] + 2;
    return cap_value(agi, 0, USHRT_MAX);
}

function status_calc_vit(player, vit) {
    if(SkillSearch(SKILL.SN_SIGHT)) {
        vit += 5;
    }
    if(n_A_Buf3[42] > 0) // wounds of glory
        vit += n_A_Buf3[42];
    if(n_A_Buf2[16]) // gospel +20 stats
        vit += 20;
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        vit += Math.max(0, max_stat - status2.vit);
    }
    if(n_A_Buf3[11]) { // marionette control
        let max_stat;
        let status2 = player.base_status;
        let caster_stats = {str: n_A_Buf3[12], agi: n_A_Buf3[13], vit: n_A_Buf3[14], int: n_A_Buf3[15], dex: n_A_Buf3[16], luk: n_A_Buf3[17]};

        max_stat = 99;
        vit += Math.min(caster_stats.vit, max_stat - status2.vit);
    }
    return cap_value(vit, 0, USHRT_MAX);
}

function status_calc_int(player, int) {
    if(SkillSearch(SKILL.NJ_NEN)) {
        int += SkillSearch(SKILL.NJ_NEN);
    }
    if(n_A_Buf2[0]) { // blessing
        int += 2 * n_A_Buf2[0];
    }
    if(SkillSearch(SKILL.SN_SIGHT)) {
        int += 5;
    }
    if(n_A_Buf3[40]) { // battle orders
        int += 5;
    }
    if(n_A_Buf2[16]) { // gospel +20 stats
        int += 20;
    }
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        int += Math.max(0, max_stat - status2.int);
    }
    if(n_A_Buf3[11]) { // marionette control
        let max_stat;
        let status2 = player.base_status;
        let caster_stats = {str: n_A_Buf3[12], agi: n_A_Buf3[13], vit: n_A_Buf3[14], int: n_A_Buf3[15], dex: n_A_Buf3[16], luk: n_A_Buf3[17]};

        max_stat = 99;
        int += Math.min(caster_stats.int, max_stat - status2.int);
    }
    return cap_value(int, 0, USHRT_MAX);
}

function status_calc_dex(player, dex) {
    let bonus;

    if(SkillSearch(SKILL.GS_INCREASING)) {
        dex += 4;
    }
    if(SkillSearch(SKILL.GS_DEADAIM)) {
        dex += 1;
    }
    if(SkillSearch(SKILL.AC_CONCENTRATION) || SkillSearch(SKILL.RG_CONCENTRATION_COPIED) || TimeItemNumSearch(4) || n_A_Buf7[34]) { // improve concentration
        bonus = 0; // represents skill level
        if(SkillSearch(SKILL.AC_CONCENTRATION))
            bonus = SkillSearch(SKILL.AC_CONCENTRATION);
        else if (SkillSearch(SKILL.RG_CONCENTRATION_COPIED))
            bonus = SkillSearch(SKILL.RG_CONCENTRATION_COPIED);
        else if (TimeItemNumSearch(4) || n_A_Buf7[34])
            bonus = 1;

        dex += Math.floor(((player.base_status.dex - player.indexed_bonus.param_bonus[STAT.DEX]) * (2 + bonus)) / 100);
    }
    if(n_A_Buf2[0]) { // blessing
        dex += 2 * n_A_Buf2[0];
    }
    if(SkillSearch(SKILL.SN_SIGHT)) {
        dex += 5;
    }
    if(n_A_Buf3[40]) { // battle orders
        dex += 5;
    }
    if(n_A_Buf3[44] > 0) // sharp hawk eyes
        dex += n_A_Buf3[44];
    if(n_A_Buf2[16]) { // gospel +20 stats
        dex += 20;
    }
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        dex += Math.max(0, max_stat - status2.dex);
    }
    if(n_A_Buf3[11]) { // marionette control
        let max_stat;
        let status2 = player.base_status;
        let caster_stats = {str: n_A_Buf3[12], agi: n_A_Buf3[13], vit: n_A_Buf3[14], int: n_A_Buf3[15], dex: n_A_Buf3[16], luk: n_A_Buf3[17]};

        max_stat = 99;
        dex += Math.min(caster_stats.dex, max_stat - status2.dex);
    }
    if(n_A_Buf6[19]) { // quagmire
        dex -= 5 * n_A_Buf6[19];
    }
    return cap_value(dex, 0, USHRT_MAX);
}

function status_calc_luk(player, luk) {
    if(n_A_Buf6[22]) // curse
        return 0;
    
    if(n_A_Buf2[3]) // gloria
        luk += 30;
    if(SkillSearch(SKILL.SN_SIGHT))
        luk += 5;
    if(n_A_Buf2[16]) // gospel +20 stats
        luk += 20;
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        luk += Math.max(0, max_stat - status2.luk);
    }
    if(n_A_Buf3[11]) { // marionette control
        let max_stat;
        let status2 = player.base_status;
        let caster_stats = {str: n_A_Buf3[12], agi: n_A_Buf3[13], vit: n_A_Buf3[14], int: n_A_Buf3[15], dex: n_A_Buf3[16], luk: n_A_Buf3[17]};

        max_stat = 99;
        luk += Math.min(caster_stats.luk, max_stat - status2.luk);
    }

    return cap_value(luk, 0, USHRT_MAX);
}

function status_calc_batk(player, batk) {
    if(SkillSearch(SKILL.GS_MADNESSCANCEL))
        batk += 40;
    if(SkillSearch(SKILL.NW_GATLING_BERSERK))
        batk += 40;
    if(SkillSearch(SKILL.GS_GATLINGFEVER) && player.weapontype1 == WEAPON.GATLING && !(SkillSearch(SKILL.NW_GATLING_BERSERK)))
        batk += 70 + 10 * SkillSearch(SKILL.GS_GATLINGFEVER);
    if(n_A_Buf6[0] == 0 && n_A_Buf6[1] > 0 && player.status.def_ele == ELE.FIRE) // volcano
        batk += 10 * n_A_Buf6[1];
    return batk;
}

function status_calc_watk(player, watk) {

    if(n_A_Buf3[9]) { // drums
        watk += (n_A_Buf3[9] + 1) * 25;
    }
    if(n_A_Buf3[10]) { // nibelungen
        let weapon = player.special_state.lr_flag != LR_FLAG.NONE ? player.left_weapon : player.right_weapon;
        if(weapon.level == 4)
            watk += 50 + 25 * n_A_Buf3[10];
    }
    if(n_A_Buf2[2]) { // impositio manus
        watk += 5 * n_A_Buf2[2];
    }
    if(TimeItemNumSearch(29) > 0) { // windmill rush
        watk += 33;
    }
    return cap_value(watk, 0, USHRT_MAX);
}

function status_calc_hit(player, hit) {
    if(SkillSearch(SKILL.SN_SIGHT))
        hit += 3 * SkillSearch(SKILL.SN_SIGHT);
    if(n_A_Buf3[4]) // humming
        hit += 1 + 2 * n_A_Buf3[4] + n_A_Buf3[34] + Math.floor(n_A_Buf3[24] / 10);
    if(SkillSearch(SKILL.LK_CONCENTRATION))
        hit += 10 * SkillSearch(SKILL.LK_CONCENTRATION);
    if(SkillSearch(SKILL.GS_ADJUSTMENT))
        hit -= 30;
    if(SkillSearch(SKILL.GS_INCREASING))
        hit += 20;
    if(n_A_Buf2[20]) // gospel +50 hit
        hit += 50;
    if(n_A_Buf6[11]) // blind
        hit -= Math.floor((hit * 25) / 100);
    return cap_value(hit, 1, SHRT_MAX);
}

function status_calc_flee(player, flee) {
    
    if(n_A_Buf2[9]) // wind walker
        flee += Math.floor((n_A_Buf2[9] + 1) / 2);
    if(n_A_Buf2[20]) // gospel +50 flee
        flee += 50;
    if(n_A_Buf3[0]) // a whistle
        flee += n_A_Buf3[0] + Math.floor(n_A_Buf3[30] / 2) + Math.floor(n_A_Buf3[20] / 10);
    if(n_A_Buf6[0] == 2 && n_A_Buf6[1] > 0 && player.status.def_ele == ELE.WIND) // violent gale
        flee += 3 * n_A_Buf6[1];
    if(SkillSearch(SKILL.RG_CLOSECONFINE))
        flee += 10;
    if(SkillSearch(SKILL.GS_ADJUSTMENT))
        flee += 30;
    if(SkillSearch(SKILL.GS_GATLINGFEVER))
        flee -= 25 + 5 * SkillSearch(SKILL.GS_GATLINGFEVER);
    if(SkillSearch(SKILL.LK_BERSERK))
        flee -= Math.floor((flee * 50) / 100);
    if(n_A_Buf6[11]) // blind
        flee -= Math.floor((flee * 25) / 100);
    return cap_value(flee, 1, SHRT_MAX);
}

function status_calc_def(player, def) {
    
    if(SkillSearch(SKILL.LK_BERSERK) > 0)
        return 0;
    if(SkillSearch(SKILL.MO_STEELBODY) > 0)
        return 90;

    if(n_A_Buf3[9]) // drums
        def += 2 * (n_A_Buf3[9] + 1);
    if(n_A_Buf2[21]) // gospel 25% def
        def += Math.floor((def * 25) / 100);
    if(n_A_Buf6[13]) // stone curse
        def = Math.trunc(def / 2);
    if(n_A_Buf6[15]) // freeze
        def = Math.trunc(def / 2);
    if(SkillSearch(SKILL.LK_CONCENTRATION))
        def -= Math.floor((def * (5 * SkillSearch(SKILL.LK_CONCENTRATION))) / 100);

    return cap_value(def, DEFTYPE_MIN, DEFTYPE_MAX);
}

function status_calc_def2(player, def2) {
    let bonus;

    if(SkillSearch(SKILL.LK_BERSERK) > 0)
        return 0;
    
    if(n_A_Buf2[4]) // angelus
        def2 += Math.floor((def2 * (10 * n_A_Buf2[4])) / 100);
    if(SkillSearch(SKILL.LK_CONCENTRATION))
        def2 -= Math.floor((def2 * (5 * SkillSearch(SKILL.LK_CONCENTRATION))) / 100);
    if(SkillSearch(SKILL.SM_AUTOBERSERK) || n_A_Buf6[5] > 0 || n_A_Buf7[31]) { // provoke
        bonus = 1; // represents provoke level
        if(SkillSearch(SKILL.SM_AUTOBERSERK))
            bonus = 10;
        else if(n_A_Buf6[5] > 0)
            bonus = n_A_Buf6[5];
        def2 -= Math.floor((def2 * (5 + 5 * bonus)) / 100);
    }
    if(n_A_Buf6[21]) // poison
        def2 = Math.floor((def2 * 75) / 100);

    return cap_value(def2, 1, SHRT_MAX);
}

function status_calc_mdef(player, mdef) {
    let bonus;
    
    if(SkillSearch(SKILL.LK_BERSERK) > 0)
        return 0;
    if(SkillSearch(SKILL.MO_STEELBODY) > 0)
        return 90;

    if(SkillSearch(SKILL.SM_ENDURE) || SkillSearch(SKILL.RG_ENDURE_COPIED) || SkillSearch(SKILL.LK_CONCENTRATION) || CardNumSearch(95)) { // endure
        bonus = 0; // represents skill level
        if(SkillSearch(SKILL.SM_ENDURE) > 0)
            bonus = SkillSearch(SKILL.SM_ENDURE);
        else if (SkillSearch(SKILL.RG_ENDURE_COPIED) > 0)
            bonus = SkillSearch(SKILL.RG_ENDURE_COPIED);
        else if(SkillSearch(SKILL.LK_CONCENTRATION) || CardNumSearch(95))
            bonus = 1;
        mdef += bonus;
    }
    if(n_A_Buf6[13]) // stone curse
        mdef += Math.floor((mdef * 25) / 100);
    if(n_A_Buf6[15]) // freeze
        mdef += Math.floor((mdef * 25) / 100);
    return cap_value(mdef, DEFTYPE_MIN, DEFTYPE_MAX);
}

function status_calc_mdef2(player, mdef2) {

    if(SkillSearch(SKILL.LK_BERSERK))
        return 0;
    
    if(n_A_Buf6[4]) // mind breaker
        mdef2 -= Math.floor((mdef2 * (12 * n_A_Buf6[4])) / 100);

    return cap_value(mdef2, 1, SHRT_MAX);
}

function status_calc_speed(player, speed) {
    // speed calculations
    let speed_rate = 100;

    if(SkillSearch(SKILL.SA_FREECAST))
        speed_rate = 175 - 5 * SkillSearch(SKILL.SA_FREECAST);

    let val = 0;

    if(SkillSearch(SKILL.SG_FUSION))
        val = 25;
    if(SkillSearch(SKILL.KN_CAVALIERMASTERY))
        val = 25;

    speed_rate -= val;

    if(SkillSearch(SKILL.ST_CHASEWALK) && SkillSearch(SKILL.SL_ROGUE)) {
        val = 35 - 5 * SkillSearch(SKILL.ST_CHASEWALK);
        if(SkillSearch(SKILL.SL_ROGUE))
            val -= 40;
    } else {
        val = 0;

        if(n_A_Buf6[20]) // decrease agi
            val = Math.max(val, 25);
        if(n_A_Buf6[19]) // quagmire
            val = Math.max(val, 50);
        if(n_A_Buf6[22]) // curse
            val = Math.max(val, 300);
        if(SkillSearch(SKILL.ST_CHASEWALK))
            val = Math.max(val, 35 - 5 * SkillSearch(SKILL.ST_CHASEWALK));
        if(SkillSearch(SKILL.GS_GATLINGFEVER))
            val = Math.max(val, 100);
        if(player.bonus.speed_rate + player.bonus.speed_add_rate > 0)
            val = Math.max(val, player.bonus.speed_rate + player.bonus.speed_add_rate);
    }
    speed_rate += val;
    val = 0;

    if(n_A_Buf2[1] && n_A_Buf6[19] == 0 && n_A_Buf6[20] == 0) // increase agi
        val = Math.max(val, 25);
    if(n_A_Buf2[9]) // wind walker
        val = Math.max(val, 2 * n_A_Buf2[9]);
    if(SkillSearch(SKILL.TF_MISS) && n_A_JobClass2() == JOB.ASSASSIN)
        val = Math.max(val, SkillSearch(SKILL.TF_MISS));
    if(SkillSearch(SKILL.LK_BERSERK))
        val = Math.max(val, 25);
    if(TimeItemNumSearch(29) > 0)
        val = Math.max(val, 25);
    if(player.bonus.speed_rate + player.bonus.speed_add_rate < 0)
        val = Math.max(val, -(player.bonus.speed_rate + player.bonus.speed_add_rate));

    speed_rate -= val;

    if(speed_rate < 40)
        speed_rate = 40;

    if(speed_rate != 100)
        speed = Math.floor((speed * speed_rate) / 100);
    if(SkillSearch(SKILL.MO_STEELBODY))
        speed = 200;
    if(n_A_Buf2[15]) // defender
        speed = Math.max(speed, 200);

    return cap_value(speed, MIN_WALK_SPEED, MAX_WALK_SPEED);
}

function status_calc_critical(player, critical) {
    let bonus;

    if(n_A_Buf6[9]) // set crit to 0%
        return 0;

    if(SkillSearch(SKILL.SN_SIGHT))
        critical += 10 * SkillSearch(SKILL.SN_SIGHT);
    if(SkillSearch(SKILL.SUNO_EXPLOSIONSPIRITS))
        critical += 500;
    if(SkillSearch(SKILL.MO_EXPLOSIONSPIRITS) || TimeItemNumSearch(20)) {
        bonus = 0;
        if(SkillSearch(SKILL.MO_EXPLOSIONSPIRITS))
            bonus = SkillSearch(SKILL.MO_EXPLOSIONSPIRITS);
        else
            bonus = 1;
        critical += 75 + 25 * bonus;
    }
    if(SkillSearch(SKILL.GS_DEADAIM))
        critical += 10 * SkillSearch(SKILL.GS_DEADAIM);
    if(n_A_Buf2[6] == 2 && (player.weapontype1 == WEAPON.BOW || (player.weapontype1 >= WEAPON.REVOLVER && player.weapontype1 <= WEAPON.GRENADE))) // full adrenaline rush
        critical += 100;
    if(n_A_Buf3[5]) // fortunes kiss
        critical += (10 + n_A_Buf3[5] + Math.floor(n_A_Buf3[35] / 2) + Math.floor(n_A_Buf3[25] / 10)) * 10;
    return cap_value(critical, 10, SHRT_MAX);
}

function status_calc_flee2(player, flee2) {
    
    if(n_A_Buf3[0]) // a whistle
        flee2 += Math.floor((n_A_Buf3[0] + 1) / 2) + Math.floor(n_A_Buf3[30] / 5) + Math.floor(n_A_Buf3[37] / 30);
    
    return cap_value(flee2, 10, SHRT_MAX);
}

function status_calc_element(player, element) {
    // bss
    if(n_A_Buf6[6])
        element = ELE.HOLY;
    // undead armor
    if(n_A_Buf6[8])
        element = ELE.UNDEAD;
    // stone curse
    if(n_A_Buf6[13])
        element = ELE.EARTH;
    // freeze 
    if(n_A_Buf6[15])
        element = ELE.WATER;
    return cap_value(element, 0, UCHAR_MAX);
}

function status_calc_element_lv(player, lv) {
    // bss
    if(n_A_Buf6[6])
        return 1;
    // undead armor
    if(n_A_Buf6[8])
        return 1;
    // stone curse
    if(n_A_Buf6[13])
        return 1;
    // freeze 
    if(n_A_Buf6[15])
        return 1;
    return cap_value(lv, 1, 4);
}

function status_calc_pseudobuff_matk(player, matk) {
    if(n_A_Buf2[2]) { // impositio manus
        matk += 5 * n_A_Buf2[2];
    }
    if(TimeItemNumSearch(30) > 0) { // moonlight serenade
        matk += 33;
    }
    return cap_value(matk, 0, USHRT_MAX);
}

function status_calc_aspd_rate(player, aspd_rate) {
    let bonus;
    let max = 0;
    if((n_A_Buf6[19] == 0 && n_A_Buf6[20] == 0) && SkillSearch(SKILL.KN_TWOHANDQUICKEN))
        max = Math.max(max, 300);
    if((n_A_Buf6[19] == 0 && n_A_Buf6[20] == 0) && SkillSearch(SKILL.KN_ONEHAND))
        max = Math.max(max, 300);
    if((n_A_Buf6[19] == 0 && n_A_Buf6[20] == 0) && (SkillSearch(SKILL.BS_ADRENALINE2) || n_A_Buf2[6] == 2)) {
        bonus = 0;
        if(SkillSearch(SKILL.BS_ADRENALINE2) && (player.weapontype1 == WEAPON.ONEHANDAXE || player.weapontype1 == WEAPON.TWOHANDAXE))
            bonus = 400;
        else if(SkillSearch(SKILL.BS_ADRENALINE2))
            bonus = 300;
        else if(n_A_Buf2[6] == 2)
            bonus = 250;

        if(player.weapontype1 == WEAPON.BOW || (player.weapontype1 >= WEAPON.REVOLVER && player.weapontype1 <= WEAPON.GRENADE))
            bonus = 0;
        max = Math.max(max, bonus);
    }
    if((n_A_Buf6[19] == 0 && n_A_Buf6[20] == 0) && (SkillSearch(SKILL.BS_ADRENALINE) || n_A_Buf2[6] == 1 || (TimeItemNumSearch(5) && n_A_JobClass2() == JOB.ALCHEMIST))) {
        bonus = 0;
        if(SkillSearch(SKILL.BS_ADRENALINE) && (player.weapontype1 == WEAPON.ONEHANDAXE || player.weapontype1 == WEAPON.TWOHANDAXE))
            bonus = 400;
        else if(SkillSearch(SKILL.BS_ADRENALINE))
            bonus = 300;
        else if(n_A_Buf2[6] == 1)
            bonus = 250;
        else if(TimeItemNumSearch(5) && n_A_JobClass2() == JOB.ALCHEMIST)
            bonus = 250;

        if(player.weapontype1 != WEAPON.MACE && player.weapontype1 != WEAPON.ONEHANDAXE && player.weapontype1 != WEAPON.TWOHANDAXE)
            bonus = 0;
        max = Math.max(max, bonus);
    }
    if((n_A_Buf6[19] == 0 && n_A_Buf6[20] == 0) && SkillSearch(SKILL.CR_SPEARQUICKEN))
        max = Math.max(max, 200 + 10 * SkillSearch(SKILL.CR_SPEARQUICKEN));
    if(SkillSearch(SKILL.GS_GATLINGFEVER) && player.weapontype1 == WEAPON.GATLING)
        max = Math.max(max, 100 + 20 * SkillSearch(SKILL.GS_GATLINGFEVER));
    if(n_A_Buf3[1]) { // sinx song
        switch(player.status.weapon) {
            case WEAPON.BOW:
            case WEAPON.REVOLVER:
            case WEAPON.RIFLE:
            case WEAPON.GATLING:
            case WEAPON.SHOTGUN:
            case WEAPON.GRENADE:
                break;
            default:
                max = Math.max(max, (5 + n_A_Buf3[1] + Math.floor(n_A_Buf3[31] / 2) + Math.floor(n_A_Buf3[21] / 10)) * 10);
        }
    }

    aspd_rate -= max;

    if(SkillSearch(SKILL.LK_BERSERK))
        aspd_rate -= 300;
    else if(SkillSearch(SKILL.GS_MADNESSCANCEL))
        aspd_rate -= 200;
    else if(SkillSearch(SKILL.NW_GATLING_BERSERK)) {
        if(SkillSearch(SKILL.GS_WEAPON_MASTERY_STACKS_CONSUMED) == 2)
            aspd_rate -= 200;
        else
            aspd_rate -= 100;
    }

    if(n_A_Buf7[35] || n_A_Buf7[26]) { // aspd pot
        bonus = 0;
        switch(n_A_Buf7[35]) {
            case 1: bonus = 10; break;
            case 2: bonus = 15; break;
            case 3: bonus = 20; break;
            case 4: bonus = 25; break;
        }
        if(n_A_Buf7[26] && bonus < 10) // guirana candy
            bonus = 10;
        aspd_rate -= bonus * 10;
    }

    if(SkillSearch(SKILL.MO_STEELBODY))
        aspd_rate += 250;
    if(n_A_Buf2[15]) // defender
        aspd_rate += 250 - 50 * n_A_Buf2[15];

    return cap_value(aspd_rate, 0, SHRT_MAX);
}

function status_calc_fix_aspd(player, aspd) {
    return cap_value(aspd, 1, MIN_ASPD);
}