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
        if(sc_get(player, SC.ANGELUS)) // angelus
            bonus += sc_get(player, SC.ANGELUS).val1 * 100;
    } else if (type == STATUS.BONUS_RATE) {
        if(sc_get(player, SC.APPLEIDUN)) // apple of idun
            bonus += sc_get(player, SC.APPLEIDUN).val5;
        if(sc_get(player, SC.DELUGE) && player.battle_status.def_ele == ELE.WATER) // deluge
            bonus += sc_get(player, SC.DELUGE).val2;
        if(sc_get(player, SC.INCMHPRATE)) // gospel +100% max hp
            bonus += sc_get(player, SC.INCMHPRATE).val1;
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
        if(sc_get(player, SC.SERVICE4U)) // service for you
            bonus += sc_get(player, SC.SERVICE4U).val5;
        if(sc_get(player, SC.INCMSPRATE)) // gospel +100% max sp
            bonus += sc_get(player, SC.INCMSPRATE).val1;

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
    if(sc_get(player, SC.BLESSING))
        str += sc_get(player, SC.BLESSING).val1 * 2;
    if(SkillSearch(SKILL.SN_SIGHT))
        str += 5;
    if(SkillSearch(SKILL.TK_RUN_STR) && player.weapontype1 == WEAPON.FIST)
        str += 10;
    if(sc_get(player, SC.BATTLEORDERS)) // battle orders
        str += 5;
    if(sc_get(player, SC.LEADERSHIP)) // great leadership
        str += sc_get(player, SC.LEADERSHIP).val1;
    if(sc_get(player, SC.INCALLSTATUS)) // gospel +20 stats
        str += sc_get(player, SC.INCALLSTATUS).val1;
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        str += Math.max(0, max_stat - status2.str);
    }
    if(sc_get(player, SC.MARIONETTE)) { // marionette control
        str += sc_get(player, SC.MARIONETTE).val2;
    }

    return cap_value(str, 0, USHRT_MAX);
}

function status_calc_agi(player, agi) {
    let bonus;

    if(SkillSearch(SKILL.GS_INCREASING))
        agi += 4;
    if(SkillSearch(SKILL.AC_CONCENTRATION) || SkillSearch(SKILL.RG_CONCENTRATION_COPIED) || TimeItemNumSearch(4) || sc_get(player, SC.GLOOM_BOX)) { // improve concentration
        bonus = 0; // represents skill level
        if(SkillSearch(SKILL.AC_CONCENTRATION))
            bonus = SkillSearch(SKILL.AC_CONCENTRATION);
        else if (SkillSearch(SKILL.RG_CONCENTRATION_COPIED))
            bonus = SkillSearch(SKILL.RG_CONCENTRATION_COPIED);
        else if (TimeItemNumSearch(4) || sc_get(player, SC.GLOOM_BOX))
            bonus = 1;

        agi += Math.floor(((player.base_status.agi - player.indexed_bonus.param_bonus[STAT.AGI]) * (2 + bonus)) / 100);
    }
    if(!sc_get(player, SC.QUAGMIRE) && !sc_get(player, SC.DECREASEAGI) && (sc_get(player, SC.INCREASEAGI) || sc_get(player, SC.GUARANA_CANDY))) { // increase agi
        bonus = 0;
        if(sc_get(player, SC.INCREASEAGI))
            bonus = sc_get(player, SC.INCREASEAGI).val2;
        else if(sc_get(player, SC.GUARANA_CANDY))
            bonus = 7;
        
        agi += (bonus * 2) - 2;
    }
    if(SkillSearch(SKILL.SN_SIGHT))
        agi += 5;
    if(sc_get(player, SC.SOULCOLD)) // soul of cold
        agi += sc_get(player, SC.SOULCOLD).val1;
    if(sc_get(player, SC.INCALLSTATUS)) { // gospel +20 stats
        agi += sc_get(player, SC.INCALLSTATUS).val1;
    }
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        agi += Math.max(0, max_stat - status2.agi);
    }
    if(sc_get(player, SC.MARIONETTE)) { // marionette control
        agi += sc_get(player, SC.MARIONETTE).val3;
    }
    if(sc_get(player, SC.QUAGMIRE)) { // quagmire
        agi -= sc_get(player, SC.QUAGMIRE).val2;
    }
    if(sc_get(player, SC.DECREASEAGI)) // decrease agi
        agi -= sc_get(player, SC.DECREASEAGI).val2;
    if(SkillSearch(SKILL.TK_READYDOWN) && n_A_JobClass2() != JOB.SOUL_LINKER)
        agi += Math.trunc(player.battle_status.int / 2);
    return cap_value(agi, 0, USHRT_MAX);
}

function status_calc_vit(player, vit) {
    if(SkillSearch(SKILL.SN_SIGHT)) {
        vit += 5;
    }
    if(sc_get(player, SC.GLORYWOUNDS)) // wounds of glory
        vit += sc_get(player, SC.GLORYWOUNDS).val1;
    if(sc_get(player, SC.INCALLSTATUS)) // gospel +20 stats
        vit += sc_get(player, SC.INCALLSTATUS).val1;
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        vit += Math.max(0, max_stat - status2.vit);
    }
    if(sc_get(player, SC.MARIONETTE)) { // marionette control
        vit += sc_get(player, SC.MARIONETTE).val4;
    }
    return cap_value(vit, 0, USHRT_MAX);
}

function status_calc_int(player, int) {
    if(SkillSearch(SKILL.NJ_NEN)) {
        int += SkillSearch(SKILL.NJ_NEN);
    }
    if(sc_get(player, SC.BLESSING)) { // blessing
        int += 2 * sc_get(player, SC.BLESSING).val1;
    }
    if(SkillSearch(SKILL.SN_SIGHT)) {
        int += 5;
    }
    if(sc_get(player, SC.BATTLEORDERS)) // battle orders
        int += 5;
    if(sc_get(player, SC.INCALLSTATUS)) { // gospel +20 stats
        int += sc_get(player, SC.INCALLSTATUS).val1;
    }
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        int += Math.max(0, max_stat - status2.int);
    }
    if(sc_get(player, SC.MARIONETTE)) { // marionette control
        int += sc_get(player, SC.MARIONETTE).val5;
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
    if(SkillSearch(SKILL.AC_CONCENTRATION) || SkillSearch(SKILL.RG_CONCENTRATION_COPIED) || TimeItemNumSearch(4) || sc_get(player, SC.GLOOM_BOX)) { // improve concentration
        bonus = 0; // represents skill level
        if(SkillSearch(SKILL.AC_CONCENTRATION))
            bonus = SkillSearch(SKILL.AC_CONCENTRATION);
        else if (SkillSearch(SKILL.RG_CONCENTRATION_COPIED))
            bonus = SkillSearch(SKILL.RG_CONCENTRATION_COPIED);
        else if (TimeItemNumSearch(4) || sc_get(player, SC.GLOOM_BOX))
            bonus = 1;

        dex += Math.floor(((player.base_status.dex - player.indexed_bonus.param_bonus[STAT.DEX]) * (2 + bonus)) / 100);
    }
    if(sc_get(player, SC.BLESSING)) { // blessing
        dex += 2 * sc_get(player, SC.BLESSING).val1;
    }
    if(SkillSearch(SKILL.SN_SIGHT)) {
        dex += 5;
    }
    if(sc_get(player, SC.BATTLEORDERS)) // battle orders
        dex += 5;
    if(sc_get(player, SC.HAWKEYES)) // sharp hawk eyes
        dex += sc_get(player, SC.HAWKEYES).val1;
    if(sc_get(player, SC.INCALLSTATUS)) { // gospel +20 stats
        dex += sc_get(player, SC.INCALLSTATUS).val1;
    }
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        dex += Math.max(0, max_stat - status2.dex);
    }
    if(sc_get(player, SC.MARIONETTE)) { // marionette control
        dex += sc_get(player, SC.MARIONETTE).val6;
    }
    if(sc_get(player, SC.QUAGMIRE)) { // quagmire
        dex -= sc_get(player, SC.QUAGMIRE).val2;
    }
    return cap_value(dex, 0, USHRT_MAX);
}

function status_calc_luk(player, luk) {
    if(sc_get(player, SC.CURSE)) // curse
        return 0;
    
    if(sc_get(player, SC.GLORIA)) // gloria
        luk += 30;
    if(SkillSearch(SKILL.SN_SIGHT))
        luk += 5;
    if(sc_get(player, SC.INCALLSTATUS)) // gospel +20 stats
        luk += sc_get(player, SC.INCALLSTATUS).val1;
    if(SkillSearch(SKILL.SL_HIGH)) {
        let max_stat;
        let status2 = player.base_status;

        max_stat = ((player.status.base_level - 10) < 50) ? player.status.base_level - 10 : 50;
        luk += Math.max(0, max_stat - status2.luk);
    }
    if(sc_get(player, SC.MARIONETTE)) { // marionette control
        luk += sc_get(player, SC.MARIONETTE).val7;
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
    if(sc_get(player, SC.VOLCANO) && player.battle_status.def_ele == ELE.FIRE) // volcano
        batk += sc_get(player, SC.VOLCANO).val2;
    return batk;
}

function status_calc_watk(player, watk) {

    if(sc_get(player, SC.DRUMBATTLE)) { // drums
        watk += sc_get(player, SC.DRUMBATTLE).val2;
    }
    if(sc_get(player, SC.NIBELUNGEN)) { // nibelungen
        let weapon = player.special_state.lr_flag != LR_FLAG.NONE ? player.left_weapon : player.right_weapon;
        if(weapon.level == 4)
            watk += sc_get(player, SC.NIBELUNGEN).val2;
    }
    if(sc_get(player, SC.IMPOSITIO)) { // impositio manus
        watk += sc_get(player, SC.IMPOSITIO).val2;
    }
    if(TimeItemNumSearch(29) > 0) { // windmill rush
        watk += 33;
    }
    return cap_value(watk, 0, USHRT_MAX);
}

function status_calc_hit(player, hit) {
    if(SkillSearch(SKILL.SN_SIGHT))
        hit += 3 * SkillSearch(SKILL.SN_SIGHT);
    if(sc_get(player, SC.HUMMING)) // humming
        hit += sc_get(player, SC.HUMMING).val5;
    if(SkillSearch(SKILL.LK_CONCENTRATION))
        hit += 10 * SkillSearch(SKILL.LK_CONCENTRATION);
    if(SkillSearch(SKILL.GS_ADJUSTMENT))
        hit -= 30;
    if(SkillSearch(SKILL.GS_INCREASING))
        hit += 20;
    if(sc_get(player, SC.INCHIT)) // gospel +50 hit
        hit += sc_get(player, SC.INCHIT).val1;
    if(sc_get(player, SC.BLIND)) // blind
        hit -= Math.floor((hit * 25) / 100);
    return cap_value(hit, 1, SHRT_MAX);
}

function status_calc_flee(player, flee) {
    
    if(sc_get(player, SC.WINDWALK)) // wind walker
        flee += sc_get(player, SC.WINDWALK).val2;
    if(sc_get(player, SC.INCFLEE)) // gospel +50 flee
        flee += sc_get(player, SC.INCFLEE).val1;
    if(sc_get(player, SC.WHISTLE)) // a whistle
        flee += sc_get(player, SC.WHISTLE).val5;
    if(sc_get(player, SC.WHIRLWIND) && player.battle_status.def_ele == ELE.WIND) // violent gale
        flee += sc_get(player, SC.WHIRLWIND).val2;
    if(SkillSearch(SKILL.RG_CLOSECONFINE))
        flee += 10;
    if(SkillSearch(SKILL.GS_ADJUSTMENT))
        flee += 30;
    if(SkillSearch(SKILL.GS_GATLINGFEVER))
        flee -= 25 + 5 * SkillSearch(SKILL.GS_GATLINGFEVER);
    if(SkillSearch(SKILL.LK_BERSERK))
        flee -= Math.floor((flee * 50) / 100);
    if(sc_get(player, SC.BLIND)) // blind
        flee -= Math.floor((flee * 25) / 100);
    return cap_value(flee, 1, SHRT_MAX);
}

function status_calc_def(player, def) {
    
    if(SkillSearch(SKILL.LK_BERSERK) > 0)
        return 0;
    if(SkillSearch(SKILL.MO_STEELBODY) > 0)
        return 90;

    if(sc_get(player, SC.DRUMBATTLE)) // drums
        def += sc_get(player, SC.DRUMBATTLE).val3;
    if(sc_get(player, SC.INCDEFRATE)) // gospel 25% def
        def += Math.floor((def * sc_get(player, SC.INCDEFRATE).val1) / 100);
    if(sc_get(player, SC.STONE)) // stone curse
        def = Math.trunc(def / 2);
    if(sc_get(player, SC.FREEZE)) // freeze
        def = Math.trunc(def / 2);
    if(SkillSearch(SKILL.LK_CONCENTRATION))
        def -= Math.floor((def * (5 * SkillSearch(SKILL.LK_CONCENTRATION))) / 100);

    return cap_value(def, DEFTYPE_MIN, DEFTYPE_MAX);
}

function status_calc_def2(player, def2) {
    let bonus;

    if(SkillSearch(SKILL.LK_BERSERK) > 0)
        return 0;
    
    if(sc_get(player, SC.ANGELUS)) // angelus
        def2 += Math.floor((def2 * sc_get(player, SC.ANGELUS).val2) / 100);
    if(SkillSearch(SKILL.LK_CONCENTRATION))
        def2 -= Math.floor((def2 * (5 * SkillSearch(SKILL.LK_CONCENTRATION))) / 100);
    if(SkillSearch(SKILL.SM_AUTOBERSERK) || sc_get(player, SC.PROVOKE) || sc_get(player, SC.ALOEVERA)) { // provoke
        bonus = 1; // represents provoke level
        if(SkillSearch(SKILL.SM_AUTOBERSERK))
            bonus = 10;
        else if(sc_get(player, SC.PROVOKE))
            bonus = sc_get(player, SC.PROVOKE).val1;
        def2 -= Math.floor((def2 * (5 + 5 * bonus)) / 100);
    }
    if(sc_get(player, SC.POISON)) // poison
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
    if(sc_get(player, SC.STONE)) // stone curse
        mdef += Math.floor((mdef * 25) / 100);
    if(sc_get(player, SC.FREEZE)) // freeze
        mdef += Math.floor((mdef * 25) / 100);
    return cap_value(mdef, DEFTYPE_MIN, DEFTYPE_MAX);
}

function status_calc_mdef2(player, mdef2) {

    if(SkillSearch(SKILL.LK_BERSERK))
        return 0;
    
    if(sc_get(player, SC.MINDBREAKER)) // mind breaker
        mdef2 -= Math.floor((mdef2 * sc_get(player, SC.MINDBREAKER).val3) / 100);

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

        if(sc_get(player, SC.DECREASEAGI)) // decrease agi
            val = Math.max(val, 25);
        if(sc_get(player, SC.QUAGMIRE)) // quagmire
            val = Math.max(val, 50);
        if(sc_get(player, SC.CURSE)) // curse
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

    if((sc_get(player, SC.INCREASEAGI) || sc_get(player, SC.GUARANA_CANDY)) && !sc_get(player, SC.QUAGMIRE) && !sc_get(player, SC.DECREASEAGI)) // increase agi
        val = Math.max(val, 25);
    if(sc_get(player, SC.WINDWALK)) // wind walker
        val = Math.max(val, 2 * sc_get(player, SC.WINDWALK).val1);
    if(SkillSearch(SKILL.TF_MISS) && n_A_JobClass2() == JOB.ASSASSIN)
        val = Math.max(val, SkillSearch(SKILL.TF_MISS));
    if(SkillSearch(SKILL.LK_BERSERK))
        val = Math.max(val, 25);
    if(TimeItemNumSearch(29) > 0)
        val = Math.max(val, 25);
    if(sc_get(player, SC.T_BLUE_DRAGON_BUFF))
        val = Math.max(val, sc_get(player, SC.T_BLUE_DRAGON_BUFF).val3);
    if(player.bonus.speed_rate + player.bonus.speed_add_rate < 0)
        val = Math.max(val, -(player.bonus.speed_rate + player.bonus.speed_add_rate));

    speed_rate -= val;

    if(speed_rate < 40)
        speed_rate = 40;

    if(speed_rate != 100)
        speed = Math.floor((speed * speed_rate) / 100);
    if(SkillSearch(SKILL.MO_STEELBODY))
        speed = 200;
    if(sc_get(player, SC.DEFENDER)) // defender
        speed = Math.max(speed, 200);

    return cap_value(speed, MIN_WALK_SPEED, MAX_WALK_SPEED);
}

function status_calc_critical(player, critical) {
    let bonus;

    if(sc_get(player, SC.NOCRIT)) // set crit to 0%
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
    if(sc_get(player, SC.ADRENALINE2) && (player.weapontype1 == WEAPON.BOW || (player.weapontype1 >= WEAPON.REVOLVER && player.weapontype1 <= WEAPON.GRENADE))) // full adrenaline rush
        critical += 100;
    if(sc_get(player, SC.FORTUNE)) // fortunes kiss
        critical += sc_get(player, SC.FORTUNE).val5;
    return cap_value(critical, 10, SHRT_MAX);
}

function status_calc_flee2(player, flee2) {
    
    if(sc_get(player, SC.WHISTLE)) // a whistle
        flee2 += sc_get(player, SC.WHISTLE).val6 * 10;
    
    return cap_value(flee2, 10, SHRT_MAX);
}

function status_calc_element(player, element) {
    // bss
    if(sc_get(player, SC.BENEDICTIO))
        element = ELE.HOLY;
    // undead armor
    if(sc_get(player, SC.CHANGEUNDEAD))
        element = ELE.UNDEAD;
    // stone curse
    if(sc_get(player, SC.STONE))
        element = ELE.EARTH;
    // freeze 
    if(sc_get(player, SC.FREEZE))
        element = ELE.WATER;
    return cap_value(element, 0, UCHAR_MAX);
}

function status_calc_element_lv(player, lv) {
    // bss
    if(sc_get(player, SC.BENEDICTIO))
        return 1;
    // undead armor
    if(sc_get(player, SC.CHANGEUNDEAD))
        return 1;
    // stone curse
    if(sc_get(player, SC.STONE))
        return 1;
    // freeze 
    if(sc_get(player, SC.FREEZE))
        return 1;
    return cap_value(lv, 1, 4);
}

function status_calc_pseudobuff_matk(player, matk) {
    if(sc_get(player, SC.IMPOSITIO)) { // impositio manus
        matk += sc_get(player, SC.IMPOSITIO).val2;
    }
    if(TimeItemNumSearch(30) > 0) { // moonlight serenade
        matk += 33;
    }
    return cap_value(matk, 0, USHRT_MAX);
}

function status_calc_aspd_rate(player, aspd_rate) {
    let bonus;
    let max = 0;
    if((!sc_get(player, SC.QUAGMIRE) && !sc_get(player, SC.DECREASEAGI)) && SkillSearch(SKILL.KN_TWOHANDQUICKEN) && (player.status.weapon == WEAPON.TWOHANDSWORD))
        max = Math.max(max, 300);
    if((!sc_get(player, SC.QUAGMIRE) && !sc_get(player, SC.DECREASEAGI)) && SkillSearch(SKILL.KN_ONEHAND) && (player.status.weapon == WEAPON.ONEHANDSWORD))
        max = Math.max(max, 300);
    if((!sc_get(player, SC.QUAGMIRE) && !sc_get(player, SC.DECREASEAGI)) && (SkillSearch(SKILL.BS_ADRENALINE2) || sc_get(player, SC.ADRENALINE2))) {
        bonus = 0;
        if(SkillSearch(SKILL.BS_ADRENALINE2) && (player.weapontype1 == WEAPON.ONEHANDAXE || player.weapontype1 == WEAPON.TWOHANDAXE))
            bonus = 400;
        else if(SkillSearch(SKILL.BS_ADRENALINE2))
            bonus = 300;
        else if(sc_get(player, SC.ADRENALINE2))
            bonus = 250;

        if(player.weapontype1 == WEAPON.BOW || (player.weapontype1 >= WEAPON.REVOLVER && player.weapontype1 <= WEAPON.GRENADE))
            bonus = 0;
        max = Math.max(max, bonus);
    }
    if((!sc_get(player, SC.QUAGMIRE) && !sc_get(player, SC.DECREASEAGI)) && (SkillSearch(SKILL.BS_ADRENALINE) || sc_get(player, SC.ADRENALINE) || (TimeItemNumSearch(5) && n_A_JobClass2() == JOB.ALCHEMIST))) {
        bonus = 0;
        if(SkillSearch(SKILL.BS_ADRENALINE) && (player.weapontype1 == WEAPON.ONEHANDAXE || player.weapontype1 == WEAPON.TWOHANDAXE))
            bonus = 400;
        else if(SkillSearch(SKILL.BS_ADRENALINE))
            bonus = 300;
        else if(sc_get(player, SC.ADRENALINE))
            bonus = 250;
        else if(TimeItemNumSearch(5) && n_A_JobClass2() == JOB.ALCHEMIST)
            bonus = 250;

        if(player.weapontype1 != WEAPON.MACE && player.weapontype1 != WEAPON.ONEHANDAXE && player.weapontype1 != WEAPON.TWOHANDAXE)
            bonus = 0;
        max = Math.max(max, bonus);
    }
    if((!sc_get(player, SC.QUAGMIRE) && !sc_get(player, SC.DECREASEAGI)) && SkillSearch(SKILL.CR_SPEARQUICKEN))
        max = Math.max(max, 200 + 10 * SkillSearch(SKILL.CR_SPEARQUICKEN));
    if(SkillSearch(SKILL.GS_GATLINGFEVER) && player.weapontype1 == WEAPON.GATLING)
        max = Math.max(max, 100 + 20 * SkillSearch(SKILL.GS_GATLINGFEVER));
    if(sc_get(player, SC.ASSNCROS)) { // sinx song
        switch(player.status.weapon) {
            case WEAPON.BOW:
            case WEAPON.REVOLVER:
            case WEAPON.RIFLE:
            case WEAPON.GATLING:
            case WEAPON.SHOTGUN:
            case WEAPON.GRENADE:
                break;
            default:
                max = Math.max(max, sc_get(player, SC.ASSNCROS).val5);
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

    if(sc_get(player, bonus = SC.ASPDPOTION3) || sc_get(player, bonus = SC.ASPDPOTION2) || sc_get(player, bonus = SC.ASPDPOTION1) || sc_get(player, bonus = SC.ASPDPOTION0) || sc_get(player, bonus = SC.GUARANA_CANDY)) { // aspd pot
        aspd_rate -= sc_get(player, bonus).val2;
    }

    if(SkillSearch(SKILL.MO_STEELBODY))
        aspd_rate += 250;
    if(sc_get(player, SC.DEFENDER)) // defender
        aspd_rate += sc_get(player, SC.DEFENDER).val4;

    return cap_value(aspd_rate, 0, SHRT_MAX);
}

function status_calc_fix_aspd(player, aspd) {
    return cap_value(aspd, 1, MIN_ASPD);
}

/**
 * 
 * @param {int} src_level
 * @param {PlayerData|MonsterData} player 
 * @param {EFF} type 
 * @param {*} rate 
 * @param {*} tick 
 * @param {*} flag 
 */
function status_get_sc_def(src_level, player, type, rate, tick) {
    let sc_def = 0;
    let tick_def = -1;
    let sc_def2 = 0;
    let tick_def2 = 0;

    let status = status_get_status_data(player);

    switch(type) {
        case EFF.POISON:
            sc_def = status.vit * 100;
            sc_def2 = status.luk * 10 + player.status.base_level * 10 - src_level * 10;
            tick_def = status.vit * 75;
            tick_def2 = status.luk * 100;
            break;
        case EFF.STUN:
            sc_def = status.vit * 100;
            sc_def2 = status.luk * 10 + player.status.base_level * 10 - src_level * 10;
            tick_def2 = status.luk * 10;
            break;
        case EFF.SILENCE:
            sc_def = status.vit * 100;
            sc_def2 = status.luk * 10 + player.status.base_level * 10 - src_level * 10;
            tick_def2 = status.luk * 10;
            break;
        case EFF.BLEEDING:
            sc_def = status.vit * 100;
            sc_def2 = status.luk * 10 + player.status.base_level * 10 - src_level * 10;
            tick_def2 = status.luk * 10;
            break;
        case EFF.SLEEP:
            sc_def = status.int * 100;
            sc_def2 = status.luk * 10 + player.status.base_level * 10 - src_level * 10;
            tick_def2 = status.luk * 10;
            break;
        case EFF.STONE:
            sc_def = status.mdef * 100;
            sc_def2 = status.luk * 10 + player.status.base_level * 10 - src_level * 10;
            tick_def = 0;
            break;
        case EFF.FREEZE:
            sc_def = status.mdef * 100;
            sc_def2 = status.luk * 10 + player.status.base_level * 10 - src_level * 10;
            break;
        case EFF.CURSE:
            if(status.luk == 0)
                return {sc_def: 10000, sc_def2: 0, tick_def: 10000, tick_def2: 0, rate: 0, tick: 0};
            sc_def = status.luk * 100;
            sc_def2 = status.luk * 10 - src_level * 10;
            tick_def = status.vit * 100;
            tick_def2 = status.luk * 10;
            break;
        case EFF.BLIND:
            sc_def = (status.vit + status.int) * 50;
            sc_def2 = status.luk * 10 + player.status.base_level * 10 - src_level * 10;
            tick_def2 = status.luk * 10;
            break;
        case EFF.CONFUSION:
            sc_def = (status.str + status.int) * 50;
            sc_def2 = src_level * 10 - player.status.base_level * 10 - status.luk * 10;
            tick_def2 = status.luk * 10;
            break;
        case EFF.FEAR:
            sc_def = status.int * 20 + player.status.base_level * 20 + status.luk * 10;
            tick_def2 = -4000;
            break;
    }

    if(sc_get(player, SC.SIEGFRIED)) // siegfried
        sc_def += sc_get(player, SC.SIEGFRIED).val3 * 100;
    
    if(tick_def == -1)
        tick_def = sc_def;

    if(type == EFF.FREEZE && player.card[EQI.ARMOR] == 138) { // ghostring card sets freeze resistance to 0
        sc_def = 0;
        sc_def2 = 0;
        tick_def = 0;
        tick_def2 = 0;
    }

    rate -= Math.floor((rate * sc_def) / 10000);
    rate -= sc_def2;

    let reseff_total = 0;
    for(const it of player.reseff) {
        if(type == EFF.FREEZE && player.card[EQI.ARMOR] == 138) // ghostring card sets freeze resistance to 0
            break;

        if(it.id == type) {
            reseff_total += it.val * 100;
            rate -= Math.floor((rate * (it.val * 100)) / 10000);
        }
    }

    if(rate > 0 && rate%10 != 0) rate += (10 - rate%10); // round up to nearest 10

    if(rate <= 0)
        return {sc_def: sc_def, sc_def2: sc_def2, tick_def: tick_def, tick_def2: tick_def2, reseff: reseff_total, rate: 0, tick: 0};

    tick -= Math.floor((tick * tick_def) / 10000);
    tick -= tick_def2;
    return {sc_def: sc_def, sc_def2: sc_def2, tick_def: tick_def, tick_def2: tick_def2, reseff: reseff_total, rate: rate, tick: tick};
}

/**
 * 
 * @param {PlayerData|MonsterData} bl 
 * @param {*} type 
 * @param {*} val1 
 * @param {*} val2 
 * @param {*} val3 
 * @param {*} val4 
 * @param {*} val5 
 * @param {*} val6 
 * @param {*} val7 
 * @param {*} val8 
 * @param {*} val9 
 * @param {*} val10 
 */
function sc_start(bl, type, val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0, val6 = 0, val7 = 0, val8 = 0, val9 = 0, val10 = 0) {
    let sd = is_player_object(bl) ? bl : null;
    let status = status_get_status_data(bl);
    let songLessonsLv = 0;
    switch(type) {
        case SC.DECREASEAGI:
        case SC.INCREASEAGI:
            val2 = 2 + val1;
            break;
        case SC.IMPOSITIO:
            val2 = 5 * val1;
            break;
        case SC.ANGELUS:
            val2 = 10 * val1;
            break;
        case SC.WINDWALK:
            val2 = Math.trunc((val1 + 1) / 2);
            break;
        case SC.SUFFRAGIUM:
            val2 = 15 * val1;
            break;
        case SC.PROVIDENCE:
            val2 = 5 * val1;
            break;
        case SC.AUTOGUARD:
            let autoGuardBonus = [5, 10, 14, 18, 21, 24, 26, 28, 29, 30];
            val2 = autoGuardBonus[val1 - 1];
            break;
        case SC.SHIELDREFLECT:
            val2 = 10 + val1 * 3;
            break;
        case SC.DEFENDER:
            val2 = 5 + 15 * val1;
            val3 = 0;
            val4 = 250 - 50 * val1;
            break;
        case SC.WHISTLE:
            songLessonsLv = val2;
            val5 = val1 + Math.floor(val3 / 10);
            val6 = Math.floor((val1 + 1) / 2) + Math.floor(val4 / 30);

            if(songLessonsLv) {
                val5 += Math.floor(songLessonsLv / 2);
                val6 += Math.floor(songLessonsLv / 5);
            }
            break;
        case SC.ASSNCROS:
            songLessonsLv = val2;
            val5 = Math.floor(songLessonsLv / 2);
            val5 += 5 + val1 + Math.floor(val3 / 10);
            val5 *= 10;
            break;
        case SC.POEMBRAGI:
            songLessonsLv = val2;
            val5 = 3 * val1 + Math.floor(val3 / 10);
            val6 = (val1 < 10 ? 3 * val1 : 50) + Math.floor(val4 / 5);
            if(songLessonsLv) {
                val5 += songLessonsLv;
                val6 += 2 * songLessonsLv;
            }
            break;
        case SC.APPLEIDUN:
            songLessonsLv = val2;
            val5 = (5 + 2 * val1) + Math.floor(val3 / 10);
            if(songLessonsLv)
                val5 += Math.floor(songLessonsLv / 2);
            break;
        case SC.SERVICE4U:
            songLessonsLv = val2;
            val5 = 15 + val1 + Math.floor(val3 / 10);
            val6 = 20 + 3 * val1 + Math.floor(val3 / 10);
            if(songLessonsLv) {
                val5 += Math.floor(songLessonsLv / 2);
                val6 += Math.floor(songLessonsLv / 2);
            }
            break;
        case SC.FORTUNE:
            songLessonsLv = val2;
            val5 = 10 + val1 + Math.floor(val3 / 10);
            val5 *= 10;
            if(songLessonsLv)
                val5 += 5 * songLessonsLv;
            break;
        case SC.HUMMING:
            songLessonsLv = val2;
            val5 = 1 + 2 * val1 + Math.floor(val3 / 10);
            if(songLessonsLv)
                val5 += songLessonsLv;
            break;
        case SC.SIEGFRIED:
            val2 = 55 + val1 * 5;
            val3 = val1 * 10;
            break;
        case SC.DRUMBATTLE:
            val2 = (val1 + 1) * 25;
            val3 = (val1 + 1) * 2;
            break;
        case SC.NIBELUNGEN:
            val2 = (val1 + 2) * 25;
            break;
        case SC.RICHMANKIM:
            val2 = 6 * val1;
            break;
        case SC.MARIONETTE:
            let max_stat = 99;
            let status2 = player.battle_status;
            let caster_stats = {str: Math.floor(val2 / 2), agi: Math.floor(val3 / 2), vit: Math.floor(val4 / 2), int: Math.floor(val5 / 2), dex: Math.floor(val6 / 2), luk: Math.floor(val7 / 2)};

            val2 = cap_value(Math.min(caster_stats.str, max_stat - status2.str), 0, 0xFF);
            val3 = cap_value(Math.min(caster_stats.agi, max_stat - status2.agi), 0, 0xFF);
            val4 = cap_value(Math.min(caster_stats.vit, max_stat - status2.vit), 0, 0xFF);
            val5 = cap_value(Math.min(caster_stats.int, max_stat - status2.int), 0, 0xFF);
            val6 = cap_value(Math.min(caster_stats.dex, max_stat - status2.dex), 0, 0xFF);
            val7 = cap_value(Math.min(caster_stats.luk, max_stat - status2.luk), 0, 0xFF);
            break;
        case SC.VOLCANO:
            {
                let enchant_eff = [10, 14, 17, 19, 20];
                let i = Math.max((val1 - 1) % 5, 0);
                val2 = val1 * 10;
                val3 = enchant_eff[i];
            }
            break;
        case SC.WHIRLWIND:
            {
                let enchant_eff = [10, 14, 17, 19, 20];
                let i = Math.max((val1 - 1) % 5, 0);
                val2 = val1 * 3;
                val3 = enchant_eff[i];
            }
            break;
        case SC.DELUGE:
            {
                let deluge_eff = [5, 9, 12, 14, 15];
                let enchant_eff = [10, 14, 17, 19, 20];
                let i = Math.max((val1 - 1) % 5, 0);
                val2 = deluge_eff[i];
                val3 = enchant_eff[i];
            }
            break;
        case SC.MINDBREAKER:
            val2 = 20 * val1;
            val3 = 12 * val1;
            break;
        case SC.CRITICALWOUND:
            val2 = 20 * val1;
            break;
        case SC.QUAGMIRE:
            val2 = (sd ? 5 : 10) * val1;
            break;
        case SC.ASPDPOTION0:
        case SC.ASPDPOTION1:
        case SC.ASPDPOTION2:
        case SC.ASPDPOTION3:
            val2 = 50 * (2 + type - SC.ASPDPOTION0);
            break;
        case SC.GUARANA_CANDY:
            val2 = 100;
            break;
        case SC.PROVOKE:
            val2 = 2 + 3 * val1;
            val3 = 5 + 5 * val1;
            break;
        case SC.SKA:
            val3 = 20 + 10 * val1;
            val4 = 70 + 10 * val1;
            break;
        case SC.CRUCIS:
            val2 = 10 + 4 * val1;
            break;
        case SC.FLING:
            val2 = 2 * val1;
            val3 = 5 * val1;
            break;
        case SC.ARMORCHANGE:
            if(val2 == SKILL.NPC_ANTIMAGIC) {
                val2 = -20;
                val3 = 20;
            } else {
                val2 = 20;
                val3 = -20;
            }

            val1 = Math.trunc(1 + ((val1 - 1) % 5));
            val2 *= val1;
            val3 *= val1;
            break;
        case SC.SCHWARTZWALD_PINE_JUBILEE:
            val1 = 10; // hit
            val2 = 20; // flee
            break;
        case SC.ARMOR_ELEMENT_WATER:
            val1 = 20;
            val2 = 0;
            val3 = 0;
            val4 = -15;
            break;
        case SC.ARMOR_ELEMENT_EARTH:
            val1 = 0;
            val2 = 20;
            val3 = -15;
            val4 = 0;
            break;
        case SC.ARMOR_ELEMENT_FIRE:
            val1 = -15;
            val2 = 0;
            val3 = 20;
            val4 = 0;
            break;
        case SC.ARMOR_ELEMENT_WIND:
            val1 = 0;
            val2 = -15;
            val3 = 0;
            val4 = 20;
            break;
        case SC.KAUPE:
            val2 = val1 == 3 ? 100 : val1 * 20;
            break;
        case SC.T_BLUE_DRAGON_BUFF:
            val2 = 3 * val1;
            val3 = 50;
            break;
        case SC.T_WHITE_TIGER_BUFF:
            val2 = val1;
            val3 = 100;
            break;
        case SC.T_RED_PHOENIX_BUFF:
            val2 = 2 * val1;
            val3 = 3 * val1;
            break;
        case SC.T_BLACK_TORTOISE_BUFF:
            val2 = 3 * val1;
            val4 = 4 * val1;
            break;
    }

    let existing = bl.sc.find(sc => sc.type == type);
    if(existing && existing.val1 >= val1)
        return;

    bl.sc = bl.sc.filter(sc => sc.type != type);
    bl.sc.push(new StatusChange(type, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10));
}

function sc_end(bl, type) {
    bl.sc = bl.sc.filter(sc => sc.type != type);
}

function sc_get(bl, type) {
    return bl.sc.find(sc => sc.type == type) || null;
}

function manualedits_start(bl, type, val = 0) {
    bl.manual_edits = bl.manual_edits.filter(edit => edit.type != type);
    bl.manual_edits.push(new ManualEdit(type, val));
}

function manualedits_end(bl, type) {
    bl.manual_edits = bl.manual_edits.filter(edit => edit.type != type);
}

function manualedits_get(bl, type) {
    return bl.manual_edits.find(edit => edit.type == type) || null;
}