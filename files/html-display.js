// file for functions that display results of calculations/stats on the website

function updatePlayerStatDisplay() {
    if(!player) return;

    let b_status = player.base_status;
    let status = player.battle_status;

    function setVal(id, value) {
        let el = document.getElementById(id);
        if(el) el.innerHTML = value;
    }

    setVal("A_BodySIZE", getRaceName(status.race) + " & " + getSizeName(status.size));
    setVal("A_BodyELEMENT", `<b style="color: ${getEleColor(status.def_ele)}">${getEleName(status.def_ele)}</b>` + status.ele_lv);

    // stats
    setVal("A_STRp", " + " + (status.str - player.status.str));
    setVal("A_AGIp", " + " + (status.agi - player.status.agi));
    setVal("A_VITp", " + " + (status.vit - player.status.vit));
    setVal("A_INTp", " + " + (status.int - player.status.int));
    setVal("A_DEXp", " + " + (status.dex - player.status.dex));
    setVal("A_LUKp", " + " + (status.luk - player.status.luk));
    setVal("A_STPOINT", player.status.status_point);

// ------------------ main stats ------------------
    setVal("A_MaxHP", status.max_hp);
    setVal("A_MaxSP", status.max_sp);

    // hp/sp regen
    setVal("A_HPR", "ADDING LATER");
    setVal("A_SPR", "ADDING LATER");

    setVal("A_ASPD", (2000 - status.amotion) / 10);
    setVal("A_MovSPEED", Math.trunc(60000 / status.speed) + " CPM"); // is a bit fucked rn - fix later

    setVal("A_totalDEF", status.def + "+" + status.def2);
    setVal("A_MDEF", status.mdef + "+" + (status.mdef2 - Math.trunc(status.vit / 2)));
    setVal("A_RealMDEF", status.mdef + "+" + status.mdef2);
    let baseAtk = status.batk + status.rhw.atk + status.lhw.atk;
    let refineAtk = status.rhw.atk2 + status.lhw.atk2;
    setVal("A_ATK2", baseAtk + "+" + refineAtk);
    setVal("A_RealATK", (baseAtk + refineAtk) + "~" + (baseAtk + refineAtk + calcOverrefine()));
    let leftMatk = status.matk_min;
    let rightMatk = status.matk_max;
    //if(SkillSearch(SKILL.HW_MAGICPOWER)) {
        //leftMatk = Math.trunc((leftMatk * 100 + 50) / ((5 * SkillSearch(SKILL.HW_MAGICPOWER) + 100)));
        //rightMatk = Math.trunc((rightMatk * 100 + 50) / ((5 * SkillSearch(SKILL.HW_MAGICPOWER) + 100)));
    //}
    setVal("A_MATK", leftMatk + "~" + rightMatk);

    setVal("A_HIT", status.hit);
    setVal("A_PefHIT", player.bonus.perfect_hit);
    setVal("A_CRI", Math.trunc(status.cri / 10));
    setVal("A_CRITSHIELD", status.luk * 3 / 10);
    setVal("A_FLEE", status.flee);
    setVal("A_WoeFLEE", status.flee - Math.trunc((status.flee * 20) / 100));
    setVal("A_LUCKY", Math.trunc(status.flee2 / 10));
}

function updateMonsterStatDisplay() {
    if(!monster) return;

    let b_status = monster.base_status;
    let status = monster.battle_status;

    function setVal(id, value) {
        let el = document.getElementById(id);
        if(el) el.innerHTML = value;
    }

    function setValColored(id, battleVal, baseVal) {
        let el = document.getElementById(id);
        if(!el) return;
        if(battleVal > baseVal) {
            el.innerHTML = `<b style="color: red">${battleVal}</b>`;
        } else if(battleVal < baseVal) {
            el.innerHTML = `<b style="color: blue">${battleVal}</b>`;
        } else {
            el.innerHTML = battleVal;
        }
    }

    setVal("B_lv", monster.level);

    // stats
    setValColored("B_agi", status.agi, b_status.agi);
    setValColored("B_vit", status.vit, b_status.vit);
    setValColored("B_int", status.int, b_status.int);
    setValColored("B_dex", status.dex, b_status.dex);
    setValColored("B_luk", status.luk, b_status.luk);

// ------------------ main stats ------------------
    setValColored("B_6", status.max_hp, b_status.max_hp);
    setValColored("B_12", status.rhw.atk, b_status.rhw.atk);
    setValColored("B_13", status.rhw.atk2, b_status.rhw.atk2);
    setValColored("B_14", status.def, b_status.def);
    setValColored("B_23", status.def2, b_status.def2);
    setValColored("B_15", status.mdef, b_status.mdef);
    setValColored("B_25", status.mdef2, b_status.mdef2);
    setValColored("B_21", status.flee + 20, b_status.flee + 20);
    setValColored("B_22", status.hit + 75, b_status.hit + 75);

    setValColored("B_16", status.base_exp, b_status.base_exp);
    setValColored("B_17", status.job_exp, b_status.job_exp);
    setVal("B_2", `<b style="color: ${getRaceColor(status.race)}">${getRaceName(status.race)}</b>`);
    setVal("B_3", `<b style="color: ${getEleColor(status.def_ele)}">${getEleName(status.def_ele)}</b>` + status.ele_lv);
    setVal("B_4", getSizeName(status.size));
    setVal("B_type", getClassName(status.class_));

    // add display for monster "notes"
}

/**
 * Used to display results of damage calculation done by player in Combat Simulator tab
 * @param {Damage} d 
 */
function updatePlayerDamageDisplay(d) {
    let sstatus = player.battle_status;
    let tstatus = monster.battle_status;
    if(d.div_ < 0)
        d.div_ *= -1;

    function setVal(id, value) {
        let el = document.getElementById(id);
        if(el) el.innerHTML = value;
    }

    setVal("BattleHIT", d.hit_rate);
    setVal("A_WeaponElement", `<b style="color: ${getEleColor(d.element)}">${getEleName(d.element)}</b>` + " (" + get_element_modifier(d.element, tstatus.ele_lv, tstatus.def_ele) + "% vs " + `<b style="color: ${getEleColor(tstatus.def_ele)}">${getEleName(tstatus.def_ele)}</b>` + tstatus.ele_lv + ")");

    // weapon/skill size modifier
    if(d.flag & BF.WEAPON) {
        setVal("nm076", "Weapon Size Modifier");
        let sizeModifierText = getWeaponTypeName(player.status.weapon);
        let sizeModifier = player.right_weapon.atkmods[tstatus.size];

        if(sc_get(player, SC.WEAPONPERFECTION)) {
            sizeModifierText = "Weapon Perfection";
            sizeModifier = 100;
        }
        if(sc_get(player, SC.HUMMING_SRS)) {
            sizeModifierText = "Humming (SR)";
            sizeModifier = 100;
        }
        if(player.special_state.no_sizefix) {
            sizeModifierText = "Equipment";
            sizeModifier = 100;
        }
        if(d.skill_id == SKILL.CR_SHIELDBOOMERANG || d.skill_id == SKILL.PA_SHIELDCHAIN) {
            sizeModifierText = "Shield";
            sizeModifier = 100;
        }

        setVal("A_WeaponSize", sizeModifier + '% <span style="font-weight:100;">(' + sizeModifierText + " vs " + getSizeName(tstatus.size) + ')</span>');
    } else {
        setVal("nm076", "");
        setVal("A_WeaponSize", "");
    }

    // ---- cast time ----
    let castTime = skill_castfix(player, d.skill_id, d.skill_lv);
    let castTimeStr = "";
    let castTimeLabelStr = "";
    let isCombo = 0;
    if(castTime > 0) {
        castTimeLabelStr = "Cast Time";
        castTimeStr = castTime / 1000 + " seconds";
    }
    setVal("bSUBname", castTimeLabelStr);
    setVal("bSUB", castTimeStr); // also used for a bunch of other things, such as "damage when missing (dont really have that in my damage calcs so might not matter)"

    // ---- delay calculation ----
    switch(d.skill_id) {
        case SKILL.HT_BEASTSTRAFE_DOUBLESTRAFE:
            isCombo = 2; // number of skills being combined for display purposes - affects how delay is calculated since the delay after the first skill is different from the delay after the second skill
            break;
        case SKILL.PR_MAGNUS_JUDEX_HOLYLIGHT:
            isCombo = 3;
            break;
    }
    let aspd = (2000 - sstatus.amotion) / 10;
    let aspdDelay = Math.floor((200 - aspd) / 50 * 1000) / 1000; // aspd-based motion delay in seconds
    let castDelay = skill_delayfix(player, d.skill_id, d.skill_lv) / 1000; // after cast delay
    let cooldown = skill_get_cooldown(d.skill_id, d.skill_lv) / 1000; // cooldown in seconds
    let pingDelay = c.Conf02.value > 0 ? c.Conf02.value / 1000 : 0; // ping delay in seconds
    let inputLimit = (d.skill_id != 0 && d.skill_id != 284) ? (1 * c.Conf01.value / 100) : 0;

    let delayUsed = 0;
    let delayType = 0; // 0 = none, 1 = aspd, 2 = cast, 3 = cooldown, 4 = input limit

    if(aspdDelay > delayUsed) {
        delayUsed = aspdDelay;
        delayType = 1;
    }
    if(castDelay > delayUsed) {
        delayUsed = castDelay;
        delayType = 2;
    }
    if(cooldown > delayUsed) {
        delayUsed = cooldown;
        delayType = 3;
    }
    if(inputLimit > delayUsed + castTime) {
        delayUsed = inputLimit - castTime;
        delayType = 4;
    }

    if(delayType == 1 && pingDelay > 0 && d.skill_id != 0) {
        delayUsed += pingDelay;
    }

    let delayLabelStr = "";
    let delayStr = "";

    switch(delayType) {
        case 1:
            if(isCombo > 0) {
                aspdDelay *= isCombo; // for combo skills, the delay is multiplied by the number of hits since each hit has its own motion delay
                pingDelay *= isCombo;
                delayUsed *= isCombo;
            }
            if(d.skill_id == 0) {
                delayLabelStr = "Time/Hit";
                delayStr = aspdDelay + " seconds";
            } else if (pingDelay > 0) {
                delayLabelStr = "Motion Delay (ASPD based) + Ping";
                delayStr = Math.round(delayUsed * 1000) / 1000 + " (" + aspdDelay + " + " + pingDelay + ") seconds";
            } else {
                delayLabelStr = "Motion Delay (ASPD based)";
                delayStr = aspdDelay + " seconds";
            }
            break;
        case 2:
            delayLabelStr = "Delay (After Cast Delay)";
            delayStr = castDelay + " seconds";
            break;
        case 3:
            delayLabelStr = "Delay (Cooldown)";
            delayStr = cooldown + " seconds";
            break;
        case 4:
            delayLabelStr = "Delay (Input Limit)";
            delayStr = inputLimit + " seconds";
            break;
        default:
            break;
    }

    if(isCombo > 0)
        delayLabelStr += " x" + isCombo;

    setVal("bSUB2name", delayLabelStr);
    setVal("bSUB2", delayStr);

    // damage display
    let damageMinText = "";
    let damageAvgText = "";
    let damageMaxText = "";

    // damage per second - should be based on delay
    let totalCycleTime = (castTime / 1000) + delayUsed;
    let damagePerSecond = "";

    let minDamage = d.damage_min;
    let avgDamage = d.getAverageDamage();
    let maxDamage = d.damage_max;

    // number of hits
    let minHits = 0;
    let avgHits = 0;
    let maxHits = 0;

    // triple attack damage (saved for expected damage calculation)
    let tripleAttackDmgMin = 0, tripleAttackDmgAvg = 0, tripleAttackDmgMax = 0;
    let hasTripleAttack = false;

    switch(d.skill_id) {
        case SKILL.NV_BASIC_ATTACK:
            if(d.damage2_min > 0 || d.damage2_max > 0) {
                minDamage += d.damage2_min;
                avgDamage += d.getAverageDamage2();
                maxDamage += d.damage2_max;
            }

            if(SkillSearch(SKILL.MO_TRIPLEATTACK)) {
                hasTripleAttack = true;
                setVal("bSUB3name", "Triple Attack damage (chance)");
                let tripleAttackDamage = battle_calc_attack(BF.WEAPON, player, monster, SKILL.MO_TRIPLEATTACK, SkillSearch(SKILL.MO_TRIPLEATTACK), 0);
                tripleAttackDmgMin = tripleAttackDamage.damage_min;
                tripleAttackDmgAvg = tripleAttackDamage.getAverageDamage();
                tripleAttackDmgMax = tripleAttackDamage.damage_max;

                setVal("bSUB3", `${tripleAttackDamage.damage_min}~${tripleAttackDamage.damage_max} (30%)`);
            }

            if(d.div_ > 1) {
                let multiHitDamageText = "";
                if(SkillSearch(SKILL.GS_CHAINACTION))
                    multiHitDamageText = "Chain Action damage (chance)";
                else
                    multiHitDamageText = "Double Attack damage (chance)";
                setVal("bSUBname", multiHitDamageText);
                let effectiveDADisplay = hasTripleAttack ? (d.multi_attack_rate * (1 - 0.30)).toFixed(1) : d.multi_attack_rate;
                setVal("bSUB", `${minDamage}~${maxDamage} (${effectiveDADisplay}%)`);

                damageMinText += Math.floor(minDamage / d.div_);
                damageAvgText += Math.floor(avgDamage / d.div_);
                damageMaxText += Math.floor(maxDamage / d.div_);

                if(d.damage2_min > 0 || d.damage2_max > 0) {
                    damageMinText = (Math.floor(d.damage_min / d.div_) + d.damage2_min);
                    damageAvgText = (Math.floor(d.getAverageDamage() / d.div_) + d.getAverageDamage2());
                    damageMaxText = (Math.floor(d.damage_max / d.div_) + d.damage2_max);
                    damageMinText += " (" + Math.floor(d.damage_min / d.div_) + " + " + Math.floor(d.damage2_min) + ")";
                    damageAvgText += " (" + Math.floor(d.getAverageDamage() / d.div_) + " + " + Math.floor(d.getAverageDamage2()) + ")";
                    damageMaxText += " (" + Math.floor(d.damage_max / d.div_) + " + " + Math.floor(d.damage2_max) + ")";
                }
            } else {
                damageMinText += minDamage;
                damageAvgText += avgDamage;
                damageMaxText += maxDamage;
            }
            break;
        case SKILL.SA_FIREBOLT_HINDSIGHT:
        case SKILL.SA_COLDBOLT_HINDSIGHT:
        case SKILL.SA_LIGHTNINGBOLT_HINDSIGHT:
        case SKILL.MG_FIREBOLT:
        case SKILL.MG_COLDBOLT:
        case SKILL.MG_LIGHTNINGBOLT:
            damageMinText += minDamage + (d.div_ > 1 ? ` (${minDamage / d.div_}` + " x " + d.div_ + " hits)" : "");
            damageAvgText += avgDamage + (d.div_ > 1 ? ` (${Math.floor(avgDamage / d.div_)}` + " x " + d.div_ + " hits)" : "");
            damageMaxText += maxDamage + (d.div_ > 1 ? ` (${maxDamage / d.div_}` + " x " + d.div_ + " hits)" : "");

            // adjust damage to consider hindsight chance (bolt only triggers X% per attack)
            if(d.skill_id == SKILL.SA_FIREBOLT_HINDSIGHT || d.skill_id == SKILL.SA_COLDBOLT_HINDSIGHT || d.skill_id == SKILL.SA_LIGHTNINGBOLT_HINDSIGHT) {
                setVal("bSUB3name", "Hindsight chance");
                setVal("bSUB3", 25 + "%");
                let hindsightChance = 25 / 100;
                minDamage = Math.floor(minDamage * hindsightChance);
                avgDamage = Math.floor(avgDamage * hindsightChance);
                maxDamage = Math.floor(maxDamage * hindsightChance);
            }
            if(SkillSearch(SKILL.PF_DOUBLECASTING)) {
                let doubleCastChance = c.SkillSubNum.value * 10; // in percentage

                minDamage = Math.floor(minDamage * (1 + doubleCastChance / 100));
                avgDamage = Math.floor(avgDamage * (1 + doubleCastChance / 100));
                maxDamage = Math.floor(maxDamage * (1 + doubleCastChance / 100));
            }
            break;
        case SKILL.ASC_BREAKER:
            let miscDamagePart = battle_calc_misc_attack(player, monster, d.skill_id, d.skill_lv, d.miscflag);
            damageMinText += minDamage + " (" + (minDamage - miscDamagePart.damage_min) + " + " + miscDamagePart.damage_min + ")";
            damageAvgText += avgDamage + " (" + (avgDamage - miscDamagePart.getAverageDamage()) + " + " + miscDamagePart.getAverageDamage() + ")";
            damageMaxText += maxDamage + " (" + (maxDamage - miscDamagePart.damage_max) + " + " + miscDamagePart.damage_max + ")";
            break;
        case SKILL.AB_DUPLELIGHT:
            let dupleLightMelee = battle_calc_attack(BF.WEAPON, player, monster, SKILL.AB_DUPLELIGHT_MELEE, player.active_skill_lv, 0);
            let dupleLightMagic = battle_calc_attack(BF.MAGIC, player, monster, SKILL.AB_DUPLELIGHT_MAGIC, player.active_skill_lv, 0);

            setVal("bSUB3name", "Duple Light chance");
            setVal("bSUB3", (10 + 2 * d.skill_lv) + "% each");

            minDamage = dupleLightMelee.damage_min + dupleLightMagic.damage_min;
            avgDamage = dupleLightMelee.getAverageDamage() + dupleLightMagic.getAverageDamage();
            maxDamage = dupleLightMelee.damage_max + dupleLightMagic.damage_max;

            damageMinText += minDamage + " (" + dupleLightMelee.damage_min + " + " + dupleLightMagic.damage_min + ")";
            damageAvgText += avgDamage + " (" + dupleLightMelee.getAverageDamage() + " + " + dupleLightMagic.getAverageDamage() + ")";
            damageMaxText += maxDamage + " (" + dupleLightMelee.damage_max + " + " + dupleLightMagic.damage_max + ")";

            // adjust damage to consider independent proc chances (each has its own chance)
            let dupleLightChance = (10 + 2 * d.skill_lv) / 100;
            minDamage = Math.floor(dupleLightMelee.damage_min * dupleLightChance + dupleLightMagic.damage_min * dupleLightChance);
            avgDamage = Math.floor(dupleLightMelee.getAverageDamage() * dupleLightChance + dupleLightMagic.getAverageDamage() * dupleLightChance);
            maxDamage = Math.floor(dupleLightMelee.damage_max * dupleLightChance + dupleLightMagic.damage_max * dupleLightChance);
            break;
        case SKILL.PR_MAGNUS_JUDEX_HOLYLIGHT:
            let magnusDamage = battle_calc_attack(BF.MAGIC, player, monster, SKILL.PR_MAGNUS, 10, 0);
            let judexDamage = battle_calc_attack(BF.MAGIC, player, monster, SKILL.AB_JUDEX, 5, 0);
            let holyLightDamage = battle_calc_attack(BF.MAGIC, player, monster, SKILL.AL_HOLYLIGHT, 1, 0);

            minDamage = magnusDamage.damage_min + judexDamage.damage_min + holyLightDamage.damage_min;
            avgDamage = magnusDamage.getAverageDamage() + judexDamage.getAverageDamage() + holyLightDamage.getAverageDamage();
            maxDamage = magnusDamage.damage_max + judexDamage.damage_max + holyLightDamage.damage_max;

            damageMinText += minDamage + " (" + magnusDamage.damage_min + " + " + judexDamage.damage_min + " + " + holyLightDamage.damage_min + ")";
            damageAvgText += avgDamage + " (" + magnusDamage.getAverageDamage() + " + " + judexDamage.getAverageDamage() + " + " + holyLightDamage.getAverageDamage() + ")";
            damageMaxText += maxDamage + " (" + magnusDamage.damage_max + " + " + judexDamage.damage_max + " + " + holyLightDamage.damage_max + ")";
            break;
        case SKILL.ALL_RESURRECTION:
        case SKILL.PR_TURNUNDEAD:
            let successChance = (d.damage2_min / 10) / 100;
            avgDamage = Math.floor(minDamage * (1 - successChance) + maxDamage * successChance);
            damageMinText += minDamage + " (damage on failure)";
            damageAvgText += avgDamage + " (considering success chance)";
            damageMaxText += maxDamage + " (" + successChance * 100 + "% success chance)";
            break;
        case SKILL.CR_GRANDCROSS:
        case SKILL.NPC_GRANDDARKNESS:
            let gcSelfDamage = battle_calc_attack(BF.MAGIC, player, player, d.skill_id, d.skill_lv, 0);
            setVal("CRIATKname", "<font color=\"#FF0000\">Health drain</font>");
            setVal("CRIATK", "<font color=\"#FF0000\">" + Math.floor((sstatus.max_hp * 20) / 100) + "</font>");
            setVal("bSUB3name", "<font color=\"#FF0000\">Damage backlash</font>");
            setVal("bSUB3", "<font color=\"#FF0000\">" + gcSelfDamage.damage_min + "~" + gcSelfDamage.damage_max + " ([" + Math.floor(gcSelfDamage.damage_min / gcSelfDamage.div_) + " ~ " + Math.floor(gcSelfDamage.damage_max / gcSelfDamage.div_) + "] x " + gcSelfDamage.div_ + " hits)</font>");

            damageMinText += minDamage + (d.div_ > 1 ? ` (${minDamage / d.div_}` + " x " + d.div_ + " hits)" : "");
            damageAvgText += avgDamage + (d.div_ > 1 ? ` (${Math.floor(avgDamage / d.div_)}` + " x " + d.div_ + " hits)" : "");
            damageMaxText += maxDamage + (d.div_ > 1 ? ` (${maxDamage / d.div_}` + " x " + d.div_ + " hits)" : "");
            break;
        case SKILL.HT_BEASTSTRAFE_DOUBLESTRAFE:
            let beastStrafeDamage = battle_calc_attack(BF.WEAPON, player, monster, SKILL.HT_POWER, 1, 0);
            let doubleStrafeDamage = battle_calc_attack(BF.WEAPON, player, monster, SKILL.AC_DOUBLE, player.active_skill_lv, 0);

            minDamage = beastStrafeDamage.damage_min + doubleStrafeDamage.damage_min;
            avgDamage = beastStrafeDamage.getAverageDamage() + doubleStrafeDamage.getAverageDamage();
            maxDamage = beastStrafeDamage.damage_max + doubleStrafeDamage.damage_max;

            damageMinText += minDamage + " ([" + Math.floor(beastStrafeDamage.damage_min / beastStrafeDamage.div_) + " + " + Math.floor(doubleStrafeDamage.damage_min / doubleStrafeDamage.div_) + "] x " + doubleStrafeDamage.div_ + " hits)";
            damageAvgText += avgDamage + " ([" + Math.floor(beastStrafeDamage.getAverageDamage() / beastStrafeDamage.div_) + " + " + Math.floor(doubleStrafeDamage.getAverageDamage() / doubleStrafeDamage.div_) + "] x " + doubleStrafeDamage.div_ + " hits)";
            damageMaxText += maxDamage + " ([" + Math.floor(beastStrafeDamage.damage_max / beastStrafeDamage.div_) + " + " + Math.floor(doubleStrafeDamage.damage_max / doubleStrafeDamage.div_) + "] x " + doubleStrafeDamage.div_ + " hits)";
            break;
        case SKILL.CR_SHIELDCHARGE:
        case SKILL.CR_SHIELDBOOMERANG:
        case SKILL.PA_SHIELDCHAIN:
            if(player.equip[EQI.SHIELD] == 305) { // no shield equipped
                damageMinText += "0 (no shield equipped)";
                damageAvgText += "0 (no shield equipped)";
                damageMaxText += "0 (no shield equipped)";
                break;
            }
        default:
            damageMinText += minDamage + (d.div_ > 1 ? ` (${Math.floor(minDamage / d.div_)}` + " x " + d.div_ + " hits)" : "");
            damageAvgText += avgDamage + (d.div_ > 1 ? ` (${Math.floor(avgDamage / d.div_)}` + " x " + d.div_ + " hits)" : "");
            damageMaxText += maxDamage + (d.div_ > 1 ? ` (${Math.floor(maxDamage / d.div_)}` + " x " + d.div_ + " hits)" : "");
            break;
    }
    setVal("strID_0", damageMinText);
    setVal("strID_1", damageAvgText);
    setVal("strID_2", damageMaxText);

    if(d.status_reflect_damage_min > 0 || d.status_reflect_damage_max > 0) {
        setVal("bREFLECT1name", '<span style="color: red">Damage reflected (Shield Reflect)</span>');
        setVal("bREFLECT1", '<b style="color: red">' + d.status_reflect_damage_min + "~" + d.status_reflect_damage_max + '</b>');
    } else {
        setVal("bREFLECT1name", "");
        setVal("bREFLECT1", "");
    }

    // --- Expected damage calculation considering TA > DA > Crit priority ---
    let canCrit = (d.crit_from_sr_buff && d.skill_id != SKILL.MO_EXTREMITYFIST && d.skill_id != SKILL.MO_EXTREMITYFIST_MAXSP && d.skill_id != SKILL.CR_GRANDCROSS && d.skill_id != SKILL.NPC_GRANDDARKNESS) || d.skill_id == 0 || skill_can_crit(d.skill_id);

    if(d.skill_id == SKILL.NV_BASIC_ATTACK) {
        let taRate = hasTripleAttack ? 0.30 : 0;
        let daRate = (d.div_ > 1 && d.multi_attack_rate > 0) ? d.multi_attack_rate / 100 : 0;
        let critRate = canCrit ? d.crit_rate / 1000 : 0;

        // Effective rates considering priority: TA > DA > Crit
        let effectiveTA = taRate;
        let effectiveDA = daRate * (1 - taRate);
        let effectiveCrit = critRate * (1 - taRate) * (1 - daRate);
        let normalRate = 1 - effectiveTA - effectiveDA - effectiveCrit;

        // Normal single-hit damage
        let normalMin = Math.floor(d.damage_min / (d.div_ > 1 ? d.div_ : 1));
        let normalAvg = Math.floor(d.getAverageDamage() / (d.div_ > 1 ? d.div_ : 1));
        let normalMax = Math.floor(d.damage_max / (d.div_ > 1 ? d.div_ : 1));
        if(d.damage2_min > 0 || d.damage2_max > 0) {
            normalMin += d.damage2_min;
            normalAvg += d.getAverageDamage2();
            normalMax += d.damage2_max;
        }

        // DA damage = full multi-hit total
        let daMin = d.damage_min + (d.damage2_min > 0 ? d.damage2_min : 0);
        let daAvg = d.getAverageDamage() + ((d.damage2_min > 0 || d.damage2_max > 0) ? d.getAverageDamage2() : 0);
        let daMax = d.damage_max + (d.damage2_max > 0 ? d.damage2_max : 0);

        // Crit damage (per-hit, crits only happen on normal single hits)
        let critDivider = d.div_ > 1 ? d.div_ : 1;
        let critMin = Math.floor(d.crit_damage_min / critDivider);
        let critAvg = Math.floor(d.getAverageCritDamage() / critDivider);
        let critMax = Math.floor(d.crit_damage_max / critDivider);
        if(d.crit_damage2_min > 0 || d.crit_damage2_max > 0) {
            critMin += d.crit_damage2_min;
            critAvg += d.getAverageCritDamage2();
            critMax += d.crit_damage2_max;
        }

        // Crit display
        if(canCrit) {
            let critAtkText = "Critical damage (Critical Rate)";
            if(d.crit_from_sr_buff && !skill_can_crit(d.skill_id))
                critAtkText = "[SR] " + critAtkText;
            let critDmgText = d.div_ > 1
                ? Math.floor(d.crit_damage_min / d.div_) + "~" + Math.floor(d.crit_damage_max / d.div_)
                : d.crit_damage_min + "~" + d.crit_damage_max;
            if(d.crit_damage2_min > 0 || d.crit_damage2_max > 0)
                critDmgText += " + " + d.crit_damage2_min + "~" + d.crit_damage2_max;
            setVal("CRIATKname", critAtkText);
            setVal("CRIATK", critDmgText);
            setVal("CRInum", " (" + (effectiveCrit * 100).toFixed(1) + "%)");
        }

        // Compute expected damage per attack
        minDamage = Math.floor(normalMin * normalRate + daMin * effectiveDA + tripleAttackDmgMin * effectiveTA + critMin * effectiveCrit);
        avgDamage = Math.floor(normalAvg * normalRate + daAvg * effectiveDA + tripleAttackDmgAvg * effectiveTA + critAvg * effectiveCrit);
        maxDamage = Math.floor(normalMax * normalRate + daMax * effectiveDA + tripleAttackDmgMax * effectiveTA + critMax * effectiveCrit);

        // Hit rate adjustment
        if(d.hit_rate < 100) {
            avgDamage = Math.floor(avgDamage * (d.hit_rate / 100));
        }
    } else {
        // Non-basic-attack skills: hit rate + crit adjustment
        if(d.hit_rate < 100) {
            avgDamage = avgDamage * (d.hit_rate / 100);
        }

        if(canCrit) {
            let effectiveCritRate = d.crit_rate / 1000;
            let critAtkText = "Critical damage (Critical Rate)";
            if(d.crit_from_sr_buff && !skill_can_crit(d.skill_id) && d.skill_id != 0)
                critAtkText = "[SR] " + critAtkText;
            let critDmgText = d.crit_damage_min + "~" + d.crit_damage_max;
            let critRateDisplay = d.crit_rate / 10;

            setVal("CRIATKname", critAtkText);
            setVal("CRIATK", critDmgText);
            setVal("CRInum", " (" + critRateDisplay.toFixed(1) + "%)");

            // adjust damage values to consider crits
            minDamage = Math.floor(minDamage * (1 - effectiveCritRate) + d.crit_damage_min * effectiveCritRate);
            avgDamage = Math.floor(avgDamage * (1 - effectiveCritRate) + d.getAverageCritDamage() * effectiveCritRate);
            maxDamage = Math.floor(maxDamage * (1 - effectiveCritRate) + d.crit_damage_max * effectiveCritRate);
        } else {
            setVal("CRInum", "");
            setVal("CRIATKname", "");
            setVal("CRIATK", "");
            setVal("bSUB3name", "");
            setVal("bSUB3", "");
        }
    }

    minHits = Math.ceil(tstatus.max_hp / maxDamage);
    avgHits = Math.ceil(tstatus.max_hp / avgDamage);
    maxHits = Math.ceil(tstatus.max_hp / minDamage);

    damagePerSecond = Math.floor(avgDamage / totalCycleTime * 100) / 100;

    setVal("AveSecondATK", damagePerSecond);

    if(d.hit_rate < 100)
        avgHits = Math.ceil(avgHits / (d.hit_rate / 100));

    setVal("MinATKnum", minHits >= 10000 ? "Over 10000 hits" : minHits);
    setVal("AveATKnum", avgHits >= 10000 ? "Over 10000 hits" : avgHits);
    setVal("MaxATKnum", d.hit_rate < 100 ? "Infinite (no 100% hit)" : maxHits >= 10000 ? "Over 10000 hits" : maxHits);

    // ave battle duration
    let battleTime = Math.floor(totalCycleTime * avgHits * 100) / 100;
    setVal("BattleTime", avgHits >= 10000 ? "Too high to calculate" : battleTime + " seconds");

    // exp per hit
    if(!monster.is_custom_player) {
        setVal("nm063", "Base Exp Per Hit");
        setVal("nm064", "Job Exp Per Hit");
        setVal("AtkBaseExp", avgHits >= 10000 ? "Immeasurable" : Math.ceil(monster.battle_status.base_exp / avgHits) + " exp");
        setVal("AtkJobExp", avgHits >= 10000 ? "Immeasurable" : Math.ceil(monster.battle_status.job_exp / avgHits) + " exp");
    } else {
        setVal("nm063", "");
        setVal("nm064", "");
        setVal("AtkBaseExp", "");
        setVal("AtkJobExp", "");
    }
}

/**
 * Used to display results of damage calculation done by monster in Combat Simulator tab
 * @param {Damage} damage 
 */
function updateMonsterDamageDisplay(damage) {

    function setVal(id, value) {
        let el = document.getElementById(id);
        if(el) el.innerHTML = value;
    }

    // dodge ratio
    setVal("BattleFLEE", 100 - damage.hit_rate);

    // additional dodge (parrying, auto guard, etc.) - multiplicative
    let hitThroughRate = 1;
    if(sc_get(player, SC.AUTOGUARD) && damage.flag&BF.WEAPON) // auto guard
        hitThroughRate *= (1 - sc_get(player, SC.AUTOGUARD).val2 / 100);
    if(SkillSearch(SKILL.LK_PARRYING) && player.status.weapon == WEAPON.TWOHANDSWORD && damage.flag&BF.WEAPON)
        hitThroughRate *= (1 - 50 / 100);
    if(SkillSearch(SKILL.ST_REJECTSWORD) && damage.flag&BF.WEAPON)
        hitThroughRate *= (1 - (15 * SkillSearch(SKILL.ST_REJECTSWORD)) / 100);
    if(sc_get(player, SC.WHISTLE_SRS)) // a whistle SR
        hitThroughRate *= (1 - 20 / 100);
    if(SkillSearch(SKILL.TK_DODGE)) {
        if(player.equip[EQI.HAND_R] == 0 && SkillSearch(SKILL.TK_RUN_STR))
            hitThroughRate *= (1 - (4 * SkillSearch(SKILL.TK_DODGE)) / 100);
        else if (monster.ranged || 2 == c.B_AtkRange.value || damage.flag&BF.LONG) // if monster is ranged or is using a ranged attack
            hitThroughRate *= (1 - (4 * SkillSearch(SKILL.TK_DODGE)) / 100);
    }
    if(sc_get(monster, SC.DISARM) && damage.skill_id == SKILL.NV_BASIC_ATTACK) // disarm
        hitThroughRate *= (1 - 35 / 100);
    let additionalDodge = Math.round((1 - hitThroughRate) * 1000) / 10; // as percentage, 1 decimal
    setVal("BattleDODGE", additionalDodge);

    setVal("B_WeaponElement", `<b style="color: ${getEleColor(damage.element)}">${getEleName(damage.element)}</b>` + " (" + get_element_modifier(damage.element, player.battle_status.ele_lv, player.battle_status.def_ele) + "% vs " + `<b style="color: ${getEleColor(player.battle_status.def_ele)}">${getEleName(player.battle_status.def_ele)}</b>` + player.battle_status.ele_lv + ")");

    // damage display
    let damageMinText = "";
    let damageAvgText = "";
    let damageMaxText = "";

    let minDamage = damage.damage_min;
    let avgDamage = damage.getAverageDamage();
    let maxDamage = damage.damage_max;

    damageMinText += minDamage + (damage.div_ > 1 ? ` (${Math.floor(minDamage / damage.div_)}` + " x " + damage.div_ + " hits)" : "");
    damageAvgText += avgDamage + (damage.div_ > 1 ? ` (${Math.floor(avgDamage / damage.div_)}` + " x " + damage.div_ + " hits)" : "");
    damageMaxText += maxDamage + (damage.div_ > 1 ? ` (${Math.floor(maxDamage / damage.div_)}` + " x " + damage.div_ + " hits)" : "");

    setVal("B_MinAtk", damageMinText);
    setVal("B_AveAtk", damageAvgText);
    setVal("B_MaxAtk", damageMaxText);

    if(damage.status_reflect_damage_min > 0 || damage.status_reflect_damage_max > 0) {
        setVal("aREFLECT1name", '<span style="color:blue">Damage reflected (Shield Reflect)</span>');
        setVal("aREFLECT1", '<b style="color:blue">' + damage.status_reflect_damage_min + "~" + damage.status_reflect_damage_max + '</b>');
    } else {
        setVal("aREFLECT1name", "");
        setVal("aREFLECT1", "");
    }

    if(damage.item_reflect_damage_min > 0 || damage.item_reflect_damage_max > 0) {
        setVal("aREFLECT2name", '<span style="color:blue">Damage reflected (equip/cards)</span>');
        setVal("aREFLECT2", '<b style="color:blue">' + damage.item_reflect_damage_min + "~" + damage.item_reflect_damage_max + '</b>');
    } else {
        setVal("aREFLECT2name", "");
        setVal("aREFLECT2", "");
    }

    setVal("nm066", "Average Dmg Received (w/dodge)");
    setVal("B_Ave2Atk", Math.round(avgDamage * (damage.hit_rate / 100) * hitThroughRate));


}

/**
 * val displays the "type" of info to display
 * @param {*} val 
 */
function displayOtherInfo(val) {
    function setVal(id, value) {
        let el = document.getElementById(id);
        if(el) el.innerHTML = value;
    }

    if(val == 0) {
        setVal("A_KakutyouData", "");
        setVal("A_KakutyouSel", "");
        // reset ALL display
    } else {
        // display the info "box"
    }

    let displayData = "";

    let targetEle = 0;
    let targetRace = 0;
    let targetSize = 0;
    let targetClass = 0;
    let targetRace2 = 0;
    let cardfix = 0;

    let eleBonus = 0;
    let raceBonus = 0;
    let race2Bonus = 0;
    let sizeBonus = 0;
    let classBonus = 0;

    let meleeCardFix = 0;
    let longRangeCardFix = 0;
    let meleeCritCardFix = 0;
    let longRangeCritCardFix = 0;

    switch(val) {
        case 0:
            // display NOTHING/reset
            break;
        case 2: // heal amount display
            displayData = "<table><tbody>";
            displayData += `<tr><td></td><td class="title">Heal on yourself</td><td class="title">Heal on other player</td></tr>`;
            let healSelf = new Array(5).fill(0);
            let healOther = new Array(5).fill(0);

            for(let i = 0; i < 5; i++) {
                healSelf[i] = skill_calc_heal(player, player, SKILL.AL_HEAL, i + 1, true);
                healOther[i] = skill_calc_heal(player, player, SKILL.AL_HEAL, i + 1, true, false);
            }

            displayData += `<tr><td><b>Heal Level 1 [Vitata Card]</b></td><td class="center">${healSelf[0]}</td><td class="center">${healOther[0]}</td></tr>`;
            displayData += `<tr><td><b>Heal Level 2</b></td><td class="center">${healSelf[1]}</td><td class="center">${healOther[1]}</td></tr>`;
            displayData += `<tr><td><b>Heal Level 3</b></td><td class="center">${healSelf[2]}</td><td class="center">${healOther[2]}</td></tr>`;
            displayData += `<tr><td><b>Heal Level 4</b></td><td class="center">${healSelf[3]}</td><td class="center">${healOther[3]}</td></tr>`;
            displayData += `<tr><td><b>Heal Level 5 [Scroll]</b></td><td class="center">${healSelf[4]}</td><td class="center">${healOther[4]}</td></tr>`;

            displayData += "</tbody></table>";

            displayData += `<br><b>Outgoing Heal boost:</b> ${pc_skillheal_bonus(player, SKILL.AL_HEAL)}%`;
            displayData += `<br><b>Incoming Heal boost:</b> ${pc_skillheal2_bonus(player, SKILL.AL_HEAL)}%`;

            displayData += `<br><b>Required Int/Lvl for next bonus:</b> +${(8 - (player.status.base_level + player.battle_status.int) % 8)}`;
            setVal("A_KakutyouData", displayData);
            setVal("A_KakutyouSel", "");
            break;
        case 4: // sanctuary heal amount display
            if(n_A_JobClass2() == JOB.PRIEST || n_A_JobClass2() == JOB.ROGUE) {
                displayData = "<table><tbody>";
                displayData += `<tr><td></td><td class="title">Sanctuary on yourself<br>(per wave)</td><td class="title">Sanctuary on other player<br>(per wave)</td></tr>`;
                let sanctuaryHealSelf = new Array(10).fill(0);
                let sanctuaryHealOther = new Array(10).fill(0);

                for(let i = 0; i < 10; i++) {
                    sanctuaryHealSelf[i] = skill_calc_heal(player, player, SKILL.PR_SANCTUARY, i + 1, true);
                    sanctuaryHealOther[i] = skill_calc_heal(player, player, SKILL.PR_SANCTUARY, i + 1, true, false);

                    displayData += `<tr><td><b>Sanctuary Level ${i + 1}</b></td><td class="center">${sanctuaryHealSelf[i]}</td><td class="center">${sanctuaryHealOther[i]}</td></tr>`;
                }
                displayData += "</tbody></table>";

                displayData += `<br><b>Outgoing Heal boost:</b> ${pc_skillheal_bonus(player, SKILL.PR_SANCTUARY)}%`;
                displayData += `<br><b>Incoming Heal boost:</b> ${pc_skillheal2_bonus(player, SKILL.PR_SANCTUARY)}%`;
            } else {
                displayData += `<p class="center">Not available for this class.</p>`;
            }
            
            setVal("A_KakutyouData", displayData);
            setVal("A_KakutyouSel", "");
            break;
        case 6: // increase hp/sp recovery
            // enable increase hp recovery
            if(n_A_JobClass() == JOB.SWORDMAN || player.status.job_id == JOB.SUPERNOVICE) {
                let hpRegenSelect = 1 * c.A_KakutyouSelNum.value;
                displayData += `<br>HP regen: ${5 * hpRegenSelect + Math.floor(hpRegenSelect * player.battle_status.max_hp / 500)} / 10 seconds`;
            }
            if(n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass() == JOB.MAGICIAN || player.status.job_id == JOB.SUPERNOVICE) {
                let spRegenSelect = 1 * c.A_KakutyouSelNum2.value;
                displayData += `<br>SP regen: ${6 * spRegenSelect + Math.floor((spRegenSelect * 2) * player.battle_status.max_sp / 500)} / 10 seconds`;
            }
            setVal("A_KakutyouData", displayData);
            break;
        case 8: // spirits recovery (monk skill)
            if(n_A_JobClass2() == JOB.MONK) {
                let spiritsRecoverySelect = 1 * c.A_KakutyouSelNum.value;
                displayData += `<br>HP regen: ${spiritsRecoverySelect * 4 + Math.floor(spiritsRecoverySelect * player.battle_status.max_hp / 500)}`;
                displayData += `<br>SP regen: ${spiritsRecoverySelect * 2 + Math.floor(spiritsRecoverySelect * player.battle_status.max_sp / 500)}`;
            }
            setVal("A_KakutyouData", displayData);
            break;
        case 10: // weight limit
            let maxWeight = JOB_WEIGHT[player.status.job_id] + player.status.str * 300;
            if(n_A_Buf8[0] == 79) // wild rose pet
                maxWeight += 6000;
            if(c.A_KakutyouChk.checked) // elite gym pass
                maxWeight += 2000;
            
            if(n_A_JobClass() == JOB.MERCHANT || player.status.job_id == JOB.SUPERNOVICE)
                maxWeight += 2000 * c.A_KakutyouSelNum.value; // enlarge weight limit
            if(SkillSearch(SKILL.KN_CAVALIERMASTERY) > 0)
                maxWeight += 10000;
            if(SkillSearch(SKILL.SG_KNOWLEDGE) > 0)
                maxWeight += 2000 * SkillSearch(SKILL.SG_KNOWLEDGE);
            maxWeight += 2000 * c.A_KakutyouSelNum2.value; // enlarge weight limit R

            displayData += `<br><b><font color="red">Weight Limit:</font></b> ${maxWeight / 10}`;
            setVal("A_KakutyouData", displayData);
            break;
        case 12: // player resistance
            displayData += `<table><tbody>`;
            displayData += `<tr><td class="title" style="padding-left:20px">+% Element</td><td class="title" style="padding-left:40px">+% Monster Race</td><td class="title" style="padding-left:10px">+% Monster Element</td></tr>`;
            displayData += `</tbody></table>`;
            displayData += `<table><tbody>`;
            for(let i = 0; i < 10; i++) {
                displayData += `<tr>`;
                displayData += `<td class="right"><b>${player.indexed_bonus.subele[i] + player.indexed_bonus.subele[ELE.MAX] + player.indexed_bonus.subele_script[i] + player.indexed_bonus.subele_script[ELE.MAX]}</b> % vs</td><td class="data"><b style="color:${getEleColor(i)}">${getEleName(i)}</b></td>`;
                displayData += `<td class="right"><b>${player.indexed_bonus.subrace[i] + player.indexed_bonus.subrace[RC.ALL]}</b> % vs</td><td class="data"><b style="color:${getRaceColor(i)}">${getRaceName(i)}</b></td>`;
                displayData += `<td class="right"><b>${player.indexed_bonus.subdefele[i] + player.indexed_bonus.subdefele[ELE.MAX]}</b> % vs</td><td class="data"><b style="color:${getEleColor(i)}">${getEleName(i)}</b></td>`;
                displayData += `</tr>`;
            }
            displayData += `<tr><td colspan="6" class="center">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</td></tr>`;
            displayData += `</tbody></table>`;
            displayData += `<table><tbody>`;
            displayData += `<tr><td class="right"><b>${player.indexed_bonus.subsize[SZ.SMALL] + player.indexed_bonus.subsize[SZ.ALL]}</b> % vs</td><td class="data"><b>Small size</b></td><td class="right"><b>${player.indexed_bonus.subclass[CLASS.BOSS] + player.indexed_bonus.subclass[CLASS.ALL]}</b> % vs</td><td><b>Boss monsters</b></td></tr>`;
            displayData += `<tr><td class="right"><b>${player.indexed_bonus.subsize[SZ.MEDIUM] + player.indexed_bonus.subsize[SZ.ALL]}</b> % vs</td><td class="data"><b>Medium size</b></td><td class="right"><b>${player.indexed_bonus.subclass[CLASS.NORMAL] + player.indexed_bonus.subclass[CLASS.ALL]}</b> % vs</td><td><b>Normal monsters</b></td></tr>`;
            displayData += `<tr><td class="right"><b>${player.indexed_bonus.subsize[SZ.LARGE] + player.indexed_bonus.subsize[SZ.ALL]}</b> % vs</td><td class="data"><b>Large size</b></td><td class="right"><b>${player.bonus.long_attack_def_rate}</b> % vs</td><td><b>Long-range attacks</b></td></tr>`;
            displayData += `<tr><td class="right"><b></b>     </td><td class="data"><b></b></td><td class="right"><b>${player.bonus.near_attack_def_rate}</b> % vs</td><td><b>Melee attacks</b></td></tr>`;
            displayData += `</tbody></table>`;
            displayData += `<hr>`;
            displayData += `<table><tbody>`;

            targetEle = 1 * c.A_KakutyouTargetElement.value;
            targetRace = 1 * c.A_KakutyouTargetRace.value;
            targetSize = 1 * c.A_KakutyouTargetSize.value;
            targetClass = 1 * c.A_KakutyouTargetClass.value;
            targetRace2 = 1 * c.A_KakutyouTargetRace2.value;

            let defEleRes = player.indexed_bonus.subdefele[targetEle] + player.indexed_bonus.subdefele[ELE.MAX];
            let raceRes = player.indexed_bonus.subrace[targetRace] + player.indexed_bonus.subrace[RC.ALL];
            let race2Res = targetRace2 > 0 ? player.indexed_bonus.subrace2[targetRace2] : 0;
            let sizeRes = player.indexed_bonus.subsize[targetSize] + player.indexed_bonus.subsize[SZ.ALL];
            let classRes = player.indexed_bonus.subclass[targetClass] + player.indexed_bonus.subclass[CLASS.ALL];

            cardfix = 100;
            cardfix = Math.trunc(cardfix * (100 - defEleRes) / 100);
            cardfix = Math.trunc(cardfix * (100 - sizeRes) / 100);
            cardfix = Math.trunc(cardfix * (100 - race2Res) / 100);
            cardfix = Math.trunc(cardfix * (100 - raceRes) / 100);
            cardfix = Math.trunc(cardfix * (100 - classRes) / 100);

            let meleeCardfix = Math.trunc(cardfix * (100 - player.bonus.near_attack_def_rate) / 100);
            let longRangeCardfix = Math.trunc(cardfix * (100 - player.bonus.long_attack_def_rate) / 100);

            displayData += `<tr><td><b>Final melee based resistance modifier:</b> ${meleeCardfix}%</td></tr>`;
            displayData += `<tr><td><b>Final long-range based resistance modifier:</b> ${longRangeCardfix}%</td></tr>`;
            displayData += `</tbody></table>`;
            setVal("A_KakutyouSel", displayData);
            break;
        case 13: // status resistance
            displayData += `<table><tbody>`;
            displayData += `<tr><td colspan="8" class="center">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</td></tr>`;
            displayData += `<tr><td class="title">Status</td><td class="title">Stat Rate Res</td><td class="title">Flat Rate Res</td><td class="title">Equip Res</td><td class="title">+% Tick Res</td><td class="title">Flat Tick Res</td><td class="title">Final rate</td><td class="title">Final duration</td></tr>`;

            for(let i = 0; i < EFF.DEADLY_POISON; i++) {
                let resistance = status_get_sc_def(1 * c.A_KakutyouStatusLevel.value, player, i, 100 * c.A_KakutyouStatusRate.value, 1 * c.A_KakutyouStatusDuration.value * 1000);
                displayData += `<tr><td class="left"><b>${getStatusName(i)}</b></td>`;
                displayData += `<td class="center"><b>${resistance.sc_def / 100}</b>%</td>`;
                displayData += `<td class="center"><b>${resistance.sc_def2 / 100}</b></td>`;
                displayData += `<td class="center"><b>${resistance.reseff / 100}</b>%</td>`;
                displayData += `<td class="center"><b>${resistance.tick_def / 100}</b>%</td>`;
                displayData += `<td class="center"><b>${resistance.tick_def2}</b>ms</td>`;
                displayData += `<td class="center"><b>${resistance.rate / 100}</b>%</td>`;
                displayData += `<td class="center"><b>${Math.max(0, resistance.tick / 1000).toFixed(2)}</b>s</td></tr>`;
            }
            
            displayData += `</tbody></table>`;

            setVal("A_KakutyouData", displayData);
            break;
        case 14: // atk based bonuses
            displayData += `<table><tbody>`;
            displayData += `<tr><td class="title" colspan="2">+% Element</td><td class="title" colspan="2">+% Race</td><td class="title" colspan="2">+% ETC</td></tr>`;
            for(let i = 0; i < 10; i++) {
                displayData += `<tr>`;
                displayData += `<td class="right"><b>${player.indexed_bonus.addele[i] + player.indexed_bonus.addele[ELE.MAX]}</b> % vs</td><td class="data"><b style="color:${getEleColor(i)}">${getEleName(i)}</b></td>`;
                displayData += `<td class="right"><b>${player.indexed_bonus.addrace[i] + player.indexed_bonus.addrace[RC.ALL]}</b> % vs</td><td class="data"><b style="color:${getRaceColor(i)}">${getRaceName(i)}</b></td>`;
                switch(i) {
                    case 0: displayData += `<td class="right"><b>${player.indexed_bonus.addrace2[RC2.GOBLIN]}</b> % vs</td><td><b>${getRace2Name(RC2.GOBLIN)}</b></td>`; break;
                    case 1: displayData += `<td class="right"><b>${player.indexed_bonus.addrace2[RC2.KOBOLD]}</b> % vs</td><td><b>${getRace2Name(RC2.KOBOLD)}</b></td>`; break;
                    case 2: displayData += `<td class="right"><b>${player.indexed_bonus.addrace2[RC2.ORC]}</b> % vs</td><td><b>${getRace2Name(RC2.ORC)}</b></td>`; break;
                    case 3: displayData += `<td class="right"><b>${player.indexed_bonus.addrace2[RC2.GOLEM]}</b> % vs</td><td><b>${getRace2Name(RC2.GOLEM)}</b></td>`; break;
                    case 4: displayData += `<td class="right"><b>${player.add_dmg.find(it => it.id == 496) ? player.add_dmg.find(it => it.id == 496).val : 0}</b> % vs</td><td><b>Satan Morroc</b></td>`; break;
                    case 5: displayData += `<td class="right"><b>${player.indexed_bonus.addclass[CLASS.NORMAL] + player.indexed_bonus.addclass[CLASS.ALL]}</b> % vs</td><td><b>${getClassName(CLASS.NORMAL)}</b></td>`; break;
                    case 6: displayData += `<td class="right"><b>${player.indexed_bonus.addclass[CLASS.BOSS] + player.indexed_bonus.addclass[CLASS.ALL]}</b> % vs</td><td><b>${getClassName(CLASS.BOSS)}</b></td>`; break;
                    case 7: displayData += `<td class="right"><b>${player.bonus.short_attack_atk_rate}</b> % &nbsp;&nbsp;&nbsp;</td><td><b>Melee attacks</b></td>`; break;
                    case 8: displayData += `<td class="right"><b>${player.bonus.long_attack_atk_rate}</b> % &nbsp;&nbsp;&nbsp;</td><td><b>Long-range attacks</b></td>`; break;
                    case 9: displayData += `<td class="right"><b>${player.bonus.crit_atk_rate}</b> % &nbsp;&nbsp;&nbsp;</td><td><b>Critical damage</b></td>`; break;
                }
                displayData += `</tr>`;
            }
            displayData += `<tr><td colspan="6" class="center">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</td></tr>`;
            displayData += `</tbody></table>`;
            displayData += `<table><tbody><tr>`;
            displayData += `<td class="right"><b>${player.indexed_bonus.addsize[SZ.SMALL] + player.indexed_bonus.addsize[SZ.ALL]}</b> % vs</td><td class="data"><b>${getSizeName(SZ.SMALL)}</b></td>`;
            displayData += `<td class="right"><b>${player.indexed_bonus.addsize[SZ.MEDIUM] + player.indexed_bonus.addsize[SZ.ALL]}</b> % vs</td><td class="data"><b>${getSizeName(SZ.MEDIUM)}</b></td>`;
            displayData += `<td class="right"><b>${player.indexed_bonus.addsize[SZ.LARGE] + player.indexed_bonus.addsize[SZ.ALL]}</b> % vs</td><td><b>${getSizeName(SZ.LARGE)}</b></td>`;
            displayData += `</tr></tbody></table>`;
            displayData += `<hr>`;
            displayData += `<table><tbody>`;
            displayData += `<tr><td><b>DEF pierce on Normal targets:</b> ${player.indexed_bonus.ignore_def_by_class[CLASS.NORMAL]}%</td></tr>`;
            displayData += `<tr><td><b>DEF pierce on Boss targets:</b> ${player.indexed_bonus.ignore_def_by_class[CLASS.BOSS]}%</td></tr>`;
            displayData += `<tr><td><b>DEF pierce on All targets:</b> ${player.indexed_bonus.ignore_def_by_class[CLASS.ALL]}%</td></tr>`;
            displayData += `</tbody></table>`;
            displayData += `<hr>`;
            displayData += `<table><tbody>`;

            targetEle = 1 * c.A_KakutyouTargetElement.value;
            targetRace = 1 * c.A_KakutyouTargetRace.value;
            targetSize = 1 * c.A_KakutyouTargetSize.value;
            targetClass = 1 * c.A_KakutyouTargetClass.value;
            targetRace2 = 1 * c.A_KakutyouTargetRace2.value;

            eleBonus = player.indexed_bonus.addele[targetEle] + player.indexed_bonus.addele[ELE.MAX];
            raceBonus = player.indexed_bonus.addrace[targetRace] + player.indexed_bonus.addrace[RC.ALL];
            race2Bonus = targetRace2 > 0 ? player.indexed_bonus.addrace2[targetRace2] : 0;
            sizeBonus = player.indexed_bonus.addsize[targetSize] + player.indexed_bonus.addsize[SZ.ALL];
            classBonus = player.indexed_bonus.addclass[targetClass] + player.indexed_bonus.addclass[CLASS.ALL];

            cardfix = 100;
            cardfix = Math.trunc(cardfix * (100 + eleBonus) / 100);
            cardfix = Math.trunc(cardfix * (100 + sizeBonus) / 100);
            cardfix = Math.trunc(cardfix * (100 + raceBonus) / 100);
            cardfix = Math.trunc(cardfix * (100 + race2Bonus) / 100);
            cardfix = Math.trunc(cardfix * (100 + classBonus) / 100);

            meleeCardFix = Math.trunc(cardfix * (100 + player.bonus.short_attack_atk_rate) / 100);
            longRangeCardFix = Math.trunc(cardfix * (100 + player.bonus.long_attack_atk_rate) / 100);
            meleeCritCardFix = Math.trunc(meleeCardFix * (100 + player.bonus.crit_atk_rate) / 100);
            longRangeCritCardFix = Math.trunc(longRangeCardFix * (100 + player.bonus.crit_atk_rate) / 100);

            displayData += `<tr><td><b>Final non-critical melee ATK based damage modifier:</b> ${meleeCardFix}%</td></tr>`;
            displayData += `<tr><td><b>Final non-critical long-range ATK based damage modifier:</b> ${longRangeCardFix}%</td></tr>`;
            displayData += `<tr><td><b>Final critical melee ATK based damage modifier:</b> ${meleeCritCardFix}%</td></tr>`;
            displayData += `<tr><td><b>Final critical long-range ATK based damage modifier:</b> ${longRangeCritCardFix}%</td></tr>`;
            displayData += `</tbody></table>`;
            setVal("A_KakutyouSel", displayData);
            break;
        case 16: // matk based bonuses
            displayData += `<table><tbody>`;
            displayData += `<tr><td class="title" colspan="4">+% MATK</td><td class="title" colspan="4">+% MDEF Pierce</td></tr>`;
            for(let i = 0; i < 10; i++) {
                displayData += `<tr>`;
                displayData += `<td class="right"><b>${player.indexed_bonus.magic_addele[i] + player.indexed_bonus.magic_addele[ELE.MAX] + player.indexed_bonus.magic_addele_script[i] + player.indexed_bonus.magic_addele_script[ELE.MAX]}</b> % vs</td><td class="data"><b style="color:${getEleColor(i)}">${getEleName(i)}</b></td>`;
                displayData += `<td class="right"><b>${player.indexed_bonus.magic_addrace[i] + player.indexed_bonus.magic_addrace[RC.ALL]}</b> % vs</td><td class="data"><b style="color:${getRaceColor(i)}">${getRaceName(i)}</b></td>`;
                displayData += `<td class="right"><b>${player.indexed_bonus.ignore_mdef_by_ele[i] + player.indexed_bonus.ignore_mdef_by_ele[ELE.MAX]}</b> % vs</td><td class="data"><b style="color:${getEleColor(i)}">${getEleName(i)}</b></td>`;
                displayData += `<td class="right"><b>${player.indexed_bonus.ignore_mdef_by_race[i] + player.indexed_bonus.ignore_mdef_by_race[RC.ALL]}</b> % vs</td><td class="data"><b style="color:${getRaceColor(i)}">${getRaceName(i)}</b></td>`;
                displayData += `</tr>`;
            }
            displayData += `<tr><td colspan="6" class="center">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</td></tr>`;
            displayData += `</tbody></table>`;
            displayData += `<table><tbody><tr>`;
            displayData += `<td class="right"><b>${player.indexed_bonus.magic_addsize[SZ.SMALL] + player.indexed_bonus.magic_addsize[SZ.ALL]}</b> % vs</td><td class="data"><b>${getSizeName(SZ.SMALL)}</b></td>`;
            displayData += `<td class="right"><b>${player.indexed_bonus.magic_addsize[SZ.MEDIUM] + player.indexed_bonus.magic_addsize[SZ.ALL]}</b> % vs</td><td class="data"><b>${getSizeName(SZ.MEDIUM)}</b></td>`;
            displayData += `<td class="right"><b>${player.indexed_bonus.magic_addsize[SZ.LARGE] + player.indexed_bonus.magic_addsize[SZ.ALL]}</b> % vs</td><td><b>${getSizeName(SZ.LARGE)}</b></td>`;
            displayData += `</tr></tbody></table>`;
            displayData += `<hr>`;
            displayData += `<table><tbody>`;
            displayData += `<tr><td><b>Magic damage vs All:</b> ${player.indexed_bonus.magic_addclass[CLASS.ALL]}%</td></tr>`;
            displayData += `<tr><td><b>Magic damage vs Boss:</b> ${player.indexed_bonus.magic_addclass[CLASS.BOSS]}%</td></tr>`;
            displayData += `<tr><td><b>Magic DEF pierce on All targets:</b> ${player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL]}%</td></tr>`;
            displayData += `</tbody></table>`;
            displayData += `<hr>`;
            displayData += `<table><tbody>`;

            targetEle = 1 * c.A_KakutyouTargetElement.value;
            targetRace = 1 * c.A_KakutyouTargetRace.value;
            targetSize = 1 * c.A_KakutyouTargetSize.value;
            targetClass = 1 * c.A_KakutyouTargetClass.value;
            targetRace2 = 1 * c.A_KakutyouTargetRace2.value;

            eleBonus = player.indexed_bonus.magic_addele[targetEle] + player.indexed_bonus.magic_addele[ELE.MAX] + player.indexed_bonus.magic_addele_script[targetEle] + player.indexed_bonus.magic_addele_script[ELE.MAX];
            raceBonus = player.indexed_bonus.magic_addrace[targetRace] + player.indexed_bonus.magic_addrace[RC.ALL];
            race2Bonus = targetRace2 > 0 ? player.indexed_bonus.magic_addrace2[targetRace2] : 0;
            sizeBonus = player.indexed_bonus.magic_addsize[targetSize] + player.indexed_bonus.magic_addsize[SZ.ALL];
            classBonus = player.indexed_bonus.magic_addclass[targetClass] + player.indexed_bonus.magic_addclass[CLASS.ALL];

            cardfix = 100;
            cardfix = Math.trunc(cardfix * (100 + eleBonus) / 100);
            cardfix = Math.trunc(cardfix * (100 + sizeBonus) / 100);
            cardfix = Math.trunc(cardfix * (100 + raceBonus) / 100);
            cardfix = Math.trunc(cardfix * (100 + race2Bonus) / 100);
            cardfix = Math.trunc(cardfix * (100 + classBonus) / 100);

            let magicCardFix = cardfix;

            let mdefPierce = player.indexed_bonus.ignore_mdef_by_ele[targetEle] + player.indexed_bonus.ignore_mdef_by_ele[ELE.MAX] + 
                            player.indexed_bonus.ignore_mdef_by_race[targetRace] + player.indexed_bonus.ignore_mdef_by_race[RC.ALL] +
                            player.indexed_bonus.ignore_mdef_by_class[targetClass] + player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL];

            displayData += `<tr><td><b>Final MATK based damage modifier:</b> ${magicCardFix}%</td></tr>`;
            displayData += `<tr><td><b>Final MDEF pierce:</b> ${mdefPierce}%</td></tr>`;

            displayData += `</tbody></table>`;
            setVal("A_KakutyouSel", displayData);
            break;
        case 18: { // cast time/delay/aspd
            // Matches skill_castfix logic from battle.js

            // Step 1: DEX scaling (applied first to base time unless castnodex)
            let dexScale = Math.max((150 - player.battle_status.dex) / 150 * 100, 0);
            let dexReduction = 100 - dexScale;

            // Step 2: Skill-specific cast rate (multiplicative on time: time += time * val / 100)
            let skillCastFind = player.skillcastrate.find(it => it.id == player.active_skill);
            let skillCastRate = skillCastFind ? skillCastFind.val : 0;

            // Step 3: Memorize (50% multiplicative reduction)
            let memorize = SkillSearch(SKILL.PF_MEMORIZE) ? 50 : 100;

            // Step 4: reduce_cast_rate (gear + bragi + muspel are additive, applied once at the end)
            let gearReduction = 100 - player.castrate;
            let bragiReduction = sc_get(player, SC.POEMBRAGI) ? sc_get(player, SC.POEMBRAGI).val2 : 0;
            let muspelCast = monster.mob_id == 763 ? 50 : 0;
            let totalReduceRate = gearReduction + bragiReduction + muspelCast;

            // Final: dexScale/100 * (100 + skillCastRate)/100 * memorize/100 * (100 - totalReduceRate)/100 * 100
            let finalCastRate = Math.max(dexScale * (100 + skillCastRate) / 100 * memorize / 100 * (100 - totalReduceRate) / 100, 0);

            displayData += `<b>Cast Time:</b> ${finalCastRate.toFixed(2)}%`;
            displayData += ` (<b>Poem of Bragi:</b> ${bragiReduction}%`;
            displayData += ` | <b>Gear:</b> ${gearReduction}%`;
            displayData += ` | <b>DEX:</b> ${dexReduction.toFixed(2)}%`;
            if(muspelCast != 0) displayData += ` | <b>Muspellskoll (Solo):</b> ${muspelCast}%`;
            if(skillCastRate != 0) displayData += ` | <b>Skill:</b> ${-1 * skillCastRate}%`;
            if(memorize != 100) displayData += ` | <b>Memorize:</b> 50%`;
            displayData += `)<br>`;

            // Cast Delay - matches skill_delayfix logic from battle.js
            let delaynostatus = skill_get_delaynostatus(player.active_skill);

            // Bragi delay reduction (different formula from cast)
            let bragiDelay = 0;
            if(!delaynostatus && sc_get(player, SC.POEMBRAGI)) {
                bragiDelay = sc_get(player, SC.POEMBRAGI).val3;
            }

            // Gear delay reduction (stored as negative in bonus-parser, so negate it)
            let gearDelay = -(player.bonus.delayrate || 0);

            // Muspel solo
            let muspelDelay = monster.mob_id == 763 ? 50 : 0;

            // Total delay reduction (additive, capped at 100)
            let totalDelay = Math.min(bragiDelay + gearDelay + muspelDelay, 100);

            // Skill-specific delay modifiers
            let skillDelayFind = player.skilldelay.find(it => it.id == player.active_skill);
            let skillDelayFlat = skillDelayFind ? skillDelayFind.val : 0;
            let skillDelayMult = 100;
            if(player.active_skill == SKILL.AS_SONICBLOW && SkillSearch(SKILL.SL_ASSASSIN))
                skillDelayMult = 50;
            if(player.active_skill == SKILL.CR_SHIELDBOOMERANG && n_A_JobClass2() == JOB.CRUSADER)
                skillDelayMult = 50;

            // Final delay rate: skillMult * (100 - totalDelay) / 100
            let finalDelayRate = Math.max(skillDelayMult * (100 - totalDelay) / 100, 0);

            displayData += `<b>Cast Delay:</b> ${finalDelayRate.toFixed(2)}%`;
            displayData += ` (`;
            let delayParts = [];
            delayParts.push(`<b>Poem of Bragi:</b> ${bragiDelay}%`);
            delayParts.push(`<b>Gear:</b> ${gearDelay}%`);
            if(muspelDelay != 0) delayParts.push(`<b>Muspellskoll (Solo):</b> ${muspelDelay}%`);
            if(skillDelayMult != 100 || skillDelayFlat != 0) {
                let skillParts = [];
                if(skillDelayMult != 100) skillParts.push(`50%`);
                if(skillDelayFlat != 0) skillParts.push(`${skillDelayFlat}ms`);
                delayParts.push(`<b>Skill:</b> ${skillParts.join(`, `)}`);
            }
            displayData += delayParts.join(` | `);
            displayData += `)<br>`;

            displayData += `<b>ASPD:</b> ${(1000 - player.battle_status.aspd_rate) / 10}%`;

            setVal("A_KakutyouData", displayData);
            setVal("A_KakutyouSel", "");
            break;
        }
        case 20: // experience
            let baseExpPercent = c.A_KakutyouSelNum.value;
            let jobExpPercent = c.A_KakutyouSelNum2.value;

            let baseAtMax = player.status.base_level >= JOB_BASE_EXP[player.status.job_id].length;
            let jobAtMax = player.status.job_level >= JOB_JOB_EXP[player.status.job_id].length;

            let baseExpForNextLevel = baseAtMax ? 0 : JOB_BASE_EXP[player.status.job_id][player.status.base_level - 1] * (100 - baseExpPercent) / 100;
            let jobExpForNextLevel = jobAtMax ? 0 : JOB_JOB_EXP[player.status.job_id][player.status.job_level - 1] * (100 - jobExpPercent) / 100;

            let baseExpForMaxLevel = baseExpForNextLevel;
            if(!baseAtMax) {
                for(let i = player.status.base_level + 1; i < JOB_BASE_EXP[player.status.job_id].length; i++) {
                    baseExpForMaxLevel += JOB_BASE_EXP[player.status.job_id][i - 1];
                }
            }

            let jobExpForMaxLevel = jobExpForNextLevel;
            if(!jobAtMax) {
                for(let i = player.status.job_level + 1; i < JOB_JOB_EXP[player.status.job_id].length; i++) {
                    jobExpForMaxLevel += JOB_JOB_EXP[player.status.job_id][i - 1];
                }
            }

            let baseKillsNext = baseExpForNextLevel > 0 && monster.battle_status.base_exp > 0 ? Math.ceil(baseExpForNextLevel / monster.battle_status.base_exp) : 0;
            let baseKillsMax  = baseExpForMaxLevel > 0 && monster.battle_status.base_exp > 0 ? Math.ceil(baseExpForMaxLevel / monster.battle_status.base_exp) : 0;
            let jobKillsNext  = jobExpForNextLevel > 0 && monster.battle_status.job_exp > 0 ? Math.ceil(jobExpForNextLevel / monster.battle_status.job_exp) : 0;
            let jobKillsMax   = jobExpForMaxLevel > 0 && monster.battle_status.job_exp > 0 ? Math.ceil(jobExpForMaxLevel / monster.battle_status.job_exp) : 0;

            displayData += `Required BaseExp for Base Up: <b>${Math.ceil(baseExpForNextLevel).toLocaleString()}</b> exp<br>`;
            displayData += `(Equals <b>${baseKillsNext.toLocaleString()}</b> ${monster.name} kills)<br>`;
            displayData += `Required BaseExp for Max Base Level: <b>${Math.ceil(baseExpForMaxLevel).toLocaleString()}</b> exp<br>`;
            displayData += `(Equals <b>${baseKillsMax.toLocaleString()}</b> ${monster.name} kills)<br>`;
            displayData += `<br>`;
            displayData += `Required JobExp for Job Up: <b>${Math.ceil(jobExpForNextLevel).toLocaleString()}</b> exp<br>`;
            displayData += `(Equals <b>${jobKillsNext.toLocaleString()}</b> ${monster.name} kills)<br>`;
            displayData += `Required JobExp for Max Job Level: <b>${Math.ceil(jobExpForMaxLevel).toLocaleString()}</b> exp<br>`;
            displayData += `(Equals <b>${jobKillsMax.toLocaleString()}</b> ${monster.name} kills)`;
            setVal("A_KakutyouData", displayData);
            break;
        case 22: // potion pitcher
            if(n_A_JobClass2() == JOB.ALCHEMIST || n_A_JobClass2() == JOB.ROGUE) {
                let bonus = 100;
                let j = 0;
                let potionsMinHP = [45, 105, 175, 325, 40];
                let potionsMaxHP = [65, 145, 235, 405, 60];

                let hpPotion = 1 * c.A_KakutyouPotion.value == 4 ? 0 : 1;
                let spPotion = 1 * c.A_KakutyouPotion.value == 4 ? 1 : 0;

                let potion_min_heal = potionsMinHP[c.A_KakutyouPotion.value] || 0;
                let potion_max_heal = potionsMaxHP[c.A_KakutyouPotion.value] || 0;
                bonus += player.status.base_level;

                potion_min_heal = Math.floor((potion_min_heal * (100 + c.A_KakutyouPotionPitcher.value * 10 + c.A_KakutyouLearningPotion.value * 5) * bonus) / 10000);
                potion_max_heal = Math.floor((potion_max_heal * (100 + c.A_KakutyouPotionPitcher.value * 10 + c.A_KakutyouLearningPotion.value * 5) * bonus) / 10000);
                if(hpPotion) {
                    potion_min_heal = Math.floor(potion_min_heal * (100 + (c.A_KakutyouVIT.value * 2)) / 100);
                    potion_max_heal = Math.floor(potion_max_heal * (100 + (c.A_KakutyouVIT.value * 2)) / 100);

                    potion_min_heal = Math.floor(potion_min_heal * (100 + (c.A_KakutyouHpSpRecovery.value * 10)) / 100);
                    potion_max_heal = Math.floor(potion_max_heal * (100 + (c.A_KakutyouHpSpRecovery.value * 10)) / 100);
                }
                if(spPotion) {
                    potion_min_heal = Math.floor(potion_min_heal * (100 + (c.A_KakutyouINT.value * 2)) / 100);
                    potion_max_heal = Math.floor(potion_max_heal * (100 + (c.A_KakutyouINT.value * 2)) / 100);

                    potion_min_heal = Math.floor(potion_min_heal * (100 + (c.A_KakutyouHpSpRecovery.value * 10)) / 100);
                    potion_max_heal = Math.floor(potion_max_heal * (100 + (c.A_KakutyouHpSpRecovery.value * 10)) / 100);
                }

                if((j = pc_skillheal_bonus(player, SKILL.AM_POTIONPITCHER))) {
                    potion_min_heal += Math.floor((potion_min_heal * j) / 100);
                    potion_max_heal += Math.floor((potion_max_heal * j) / 100);
                }

                if((j = c.A_KakutyouHealReceivedBonus.value * 1)) {
                    potion_min_heal += Math.floor((potion_min_heal * j) / 100);
                    potion_max_heal += Math.floor((potion_max_heal * j) / 100);
                }

                displayData += `<b>Potion Pitcher heals:</b> ${potion_min_heal} ~ ${potion_max_heal} HP/SP`;
                setVal("A_KakutyouData", displayData);
            } else {
                setVal("A_KakutyouData", "");
            }
            break;
        case 23: // slim potion pitcher
            if(player.status.job_id == JOB.CREATOR) {
                let bonus = 0;
                let j = 0;
                let potionsMinHP = [45, 175, 325];
                let potionsMaxHP = [65, 235, 405];

                let potion_min_heal = potionsMinHP[c.A_KakutyouPotion.value] || 0;
                let potion_max_heal = potionsMaxHP[c.A_KakutyouPotion.value] || 0;

                bonus = c.A_KakutyouSlimPotionPitcher.value * 10 + c.A_KakutyouPotionPitcher.value * 10 + c.A_KakutyouLearningPotion.value * 5 + pc_skillheal_bonus(player, SKILL.CR_SLIMPITCHER);

                potion_min_heal = Math.floor((potion_min_heal * (100 + bonus)) / 100);
                potion_max_heal = Math.floor((potion_max_heal * (100 + bonus)) / 100);

                potion_min_heal = Math.floor(potion_min_heal * (100 + (c.A_KakutyouVIT.value * 2)) / 100);
                potion_max_heal = Math.floor(potion_max_heal * (100 + (c.A_KakutyouVIT.value * 2)) / 100);
                potion_min_heal = Math.floor(potion_min_heal * (100 + (c.A_KakutyouHpSpRecovery.value * 10 + c.A_KakutyouHealReceivedBonus.value * 1)) / 100);
                potion_max_heal = Math.floor(potion_max_heal * (100 + (c.A_KakutyouHpSpRecovery.value * 10 + c.A_KakutyouHealReceivedBonus.value * 1)) / 100);

                displayData += `<b>Slim Potion Pitcher heals:</b> ${potion_min_heal} ~ ${potion_max_heal} HP`;
                setVal("A_KakutyouData", displayData);
            } else {
                setVal("A_KakutyouData", "");
            }
            break;
        case 24: // forge/potion/edp creation success rate
            if(n_A_JobClass2() == JOB.BLACKSMITH) { // forging
                let weaponLv1Rate = 0;
                let weaponLv2Rate = 0;
                let weaponLv3Rate = 0;
                let ironRate = 0;
                let steelRate = 0;
                let elementalStoneRate = 0;

                // iron/steel/elemental stone rates are basically all the same
                ironRate = steelRate = elementalStoneRate = player.status.job_level*20 + player.battle_status.dex*10 + player.battle_status.luk*10;
                ironRate += 4000 + c.A_KakutyouIronTempering.value * 500;
                steelRate += 3000 + c.A_KakutyouSteelTempering.value * 500;
                elementalStoneRate += 1000 + c.A_KakutyouEnchantedStoneCraft.value * 500;

                // weapon forging
                weaponLv1Rate = 5000 + player.status.job_level*20 + player.battle_status.dex * 10 + player.battle_status.luk * 10;
                weaponLv1Rate += c.A_KakutyouSmithWeapon.value * 500;
                weaponLv1Rate += c.A_KakutyouWeaponResearch.value * 100;
                weaponLv2Rate = weaponLv3Rate = weaponLv1Rate;

                weaponLv3Rate += c.A_KakutyouOriResearch.value * 100;

                if(c.A_KakutyouElementalStone.value * 1 > 0) {
                    weaponLv1Rate -= 2000;
                    weaponLv2Rate -= 2000;
                    weaponLv3Rate -= 2000;
                }

                weaponLv1Rate -= c.A_KakutyouStarCrumb.value * 1500;
                weaponLv2Rate -= c.A_KakutyouStarCrumb.value * 1500;
                weaponLv3Rate -= c.A_KakutyouStarCrumb.value * 1500;

                weaponLv2Rate -= (2 * 1000);
                weaponLv3Rate -= (3 * 1000);

                weaponLv1Rate += c.A_KakutyouAnvil.value * 1;
                weaponLv2Rate += c.A_KakutyouAnvil.value * 1;
                weaponLv3Rate += c.A_KakutyouAnvil.value * 1;

                displayData += `<br>`;
                displayData += `<table><tbody>`;
                displayData += `<tr><td><b>Weapon Lvl 1:</b> ${(weaponLv1Rate / 100).toFixed(2)}%</td>`;
                displayData += `<td><b>Weapon Lvl 2:</b> ${(weaponLv2Rate / 100).toFixed(2)}%</td>`;
                displayData += `<td><b>Weapon Lvl 3:</b> ${(weaponLv3Rate / 100).toFixed(2)}%</td></tr>`;
                displayData += `<tr><td><b>Iron:</b> ${(ironRate / 100).toFixed(2)}%</td>`;
                displayData += `<td><b>Steel:</b> ${(steelRate / 100).toFixed(2)}%</td>`;
                displayData += `<td><b>Elemental Stone:</b> ${(elementalStoneRate / 100).toFixed(2)}%</td></tr>`;
                displayData += `</tbody></table>`;
            } else if(n_A_JobClass2() == JOB.ALCHEMIST) {
                let minRate = 0;
                let maxRate = 0;

                minRate = c.A_KakutyouLearningPotion.value * 50 + c.A_KakutyouPharmacy.value * 300 + player.status.job_level * 20 + Math.floor(player.battle_status.int / 2) * 10 + player.battle_status.dex * 10 + player.battle_status.luk * 10;
                minRate += c.A_KakutyouChangeInstruction.value * 100;
                maxRate = minRate;

                switch(c.A_KakutyouPotionToCreate.value * 1) {
                    case 0: // red potion
                    case 1: // yellow potion
                    case 2: // white potion
                        minRate += (1 + 0) * 10 + 2000;
                        maxRate += (1 + 99) * 10 + 2000;
                        break;
                    case 7: // alcohol
                        minRate += (1 + 0) * 10 + 1000;
                        maxRate += (1 + 99) * 10 + 1000;
                        break;
                    case 8: // acid bottle
                    case 9: // bottle grenade
                    case 12: // marine sphere bottle
                    case 13: // plant bottle
                        minRate += (1 + 0) * 10;
                        maxRate += (1 + 99) * 10;
                        break;
                    case 5: // slim yellow potion
                        minRate -= (1 + 49) * 10;
                        maxRate -= (1 + 0) * 10;
                        break;
                    case 6: // slim white potion
                    case 10: // glistening coat
                        minRate -= (1 + 99) * 10;
                        maxRate -= (1 + 0) * 10;
                        break;
                    case 3: // blue potion
                    case 4: // slim red potion
                    case 14: // anodyne
                    case 15: // aloevera
                    default:
                        break;
                }

                displayData += `<br><b>Success rate: </b>${(((minRate + maxRate) / 2) / 100).toFixed(2)}% [ ${(minRate / 100).toFixed(2)} % ~ ${(maxRate / 100).toFixed(2)} % ]`;
            } else if(player.status.job_id == JOB.ASSASSIN_CROSS) {
                let potionBottleRate = (2000 + 40 * player.battle_status.dex + 20 * player.battle_status.luk);
                
                    displayData += `<br><b>Success rate: </b>${(potionBottleRate / 100).toFixed(2)}%`;
            }
            setVal("A_KakutyouData", displayData);
            break;
        case 26: // steal chance (pre-renewal)
            let rate = Math.floor((player.battle_status.dex - (c.A_KakutyouEnemyDEX.value * 1)) / 2) + c.A_KakutyouStealLevel.value * 6 + 4;
            let chanceOutOf10000 = (c.A_KakutyouItemDropChance.value * 100) * rate / 100;
            setVal("A_KakutyouStealChance", (chanceOutOf10000 / 100).toFixed(2));
            break;
        case 28: // strip chance & duration
            let stripRate = 50 * (c.A_KakutyouStripLevel.value * 1 + 1) + 2 * (player.battle_status.dex - (c.A_KakutyouEnemyDEX.value * 1));
            let baseDuration = 60000 + 15000 * c.A_KakutyouStripLevel.value;
            baseDuration += Math.max(1, c.A_KakutyouStripLevel.value * 1 + 500 * (player.battle_status.dex - (c.A_KakutyouEnemyDEX.value * 1)));
            setVal("A_KakutyouStripChance", (stripRate / 10).toFixed(2));
            setVal("A_KakutyouStripDuration", (baseDuration / 1000).toFixed(2));
            break;
        case 30: // cooking
            let cookKitValue = c.A_KakutyouFoodKit.value * 1;
            let cookFoodLevel = c.A_KakutyouFoodLevel.value * 1; // 1-10
            let cookFoodStat = c.A_KakutyouFoodStat.value * 1;  // STR=0,AGI=1,VIT=2,INT=3,DEX=4,LUK=5
            let cookMastery = c.A_KakutyouFoodExp.value * 1;

            // Kit 5 (Fantastic/Legendary Cooking Kit, menuskill_val >= 15) = 100% success
            if (cookKitValue >= 4) {
                setVal("A_KakutyouFoodMinSuccessRate", "Min: 100.00%");
                setVal("A_KakutyouFoodAvgSuccessRate", "Avg: 100.00%");
                setVal("A_KakutyouFoodMaxSuccessRate", "Max: 100.00%");
                break;
            }

            let cookKitLevel = cookKitValue + 1; // 1-4 (menuskill_val - 10)

            // num = total materials - 1 (includes cooking kit as a counted material)
            // Indexed by [food_level-1][stat] where stat: STR(0),AGI(1),VIT(2),INT(3),DEX(4),LUK(5)
            const cookNumTable = [
                [3, 3, 3, 2, 3, 3], // Level 1
                [4, 4, 4, 3, 4, 4], // Level 2
                [5, 4, 4, 3, 5, 4], // Level 3
                [6, 5, 5, 5, 6, 5], // Level 4
                [5, 5, 5, 5, 6, 5], // Level 5
                [5, 4, 5, 5, 6, 5], // Level 6
                [6, 6, 6, 5, 6, 6], // Level 7
                [6, 6, 6, 6, 7, 6], // Level 8
                [7, 7, 7, 7, 7, 7], // Level 9
                [8, 8, 8, 8, 8, 8], // Level 10
            ];

            let cookNum = cookNumTable[cookFoodLevel - 1][cookFoodStat];

            // Random component 1: rnd()%(B-A) + A
            // A = 6 + cook_mastery/80 (C integer division)
            // B = 30 + 5*(cook_mastery/400) (C integer division)
            // Range: [A, B-1]
            let cookRandA = 6 + Math.trunc(cookMastery / 80);
            let cookRandB = 30 + 5 * Math.trunc(cookMastery / 400);

            // Random component 2: rnd()%4 + 1, range [1, 4]

            // Non-random base:
            // 1200 * kit_level + 20*(base_level+1) + 20*(dex+1)
            // - 400*food_level - 10*(101-luk) - 500*(num-1)
            let cookBase = 1200 * cookKitLevel
                + 20 * (player.status.base_level + 1)
                + 20 * (player.battle_status.dex + 1)
                - 400 * cookFoodLevel
                - 10 * (101 - player.battle_status.luk)
                - 500 * (cookNum - 1);

            // Min: lowest rand1 (A) + highest rand2 penalty (4)
            let cookMinPer = cookBase + 100 * cookRandA - 100 * 4;
            // Max: highest rand1 (B-1) + lowest rand2 penalty (1)
            let cookMaxPer = cookBase + 100 * (cookRandB - 1) - 100 * 1;
            // Avg: average of both random components
            let cookAvgPer = cookBase + 100 * (cookRandA + cookRandB - 1) / 2 - 100 * 2.5;

            // Minimum of 1 (0.01%), cap at 10000 (100%)
            cookMinPer = Math.min(10000, Math.max(1, cookMinPer));
            cookMaxPer = Math.min(10000, Math.max(1, cookMaxPer));
            cookAvgPer = Math.min(10000, Math.max(1, cookAvgPer));

            // For each row (min/avg/max of rand1), show the range from rand2 variance
            // rand1 ranges from cookRandA to cookRandB-1 (large variance, drives rows)
            // rand2 ranges from 1 to 4 (small variance, shown in brackets)
            // "Minimum" row: rand1 = cookRandA (worst), rand2 varies
            let minRowLow  = Math.min(10000, Math.max(1, cookBase + 100 * cookRandA - 100 * 4));
            let minRowHigh = Math.min(10000, Math.max(1, cookBase + 100 * cookRandA - 100 * 1));
            // "Average" row: rand1 = avg of (cookRandA + cookRandB-1)/2, rand2 varies
            let avgRand1 = (cookRandA + cookRandB - 1) / 2;
            let avgRowLow  = Math.min(10000, Math.max(1, cookBase + 100 * avgRand1 - 100 * 4));
            let avgRowHigh = Math.min(10000, Math.max(1, cookBase + 100 * avgRand1 - 100 * 1));
            // "Maximum" row: rand1 = cookRandB-1 (best), rand2 varies
            let maxRowLow  = Math.min(10000, Math.max(1, cookBase + 100 * (cookRandB - 1) - 100 * 4));
            let maxRowHigh = Math.min(10000, Math.max(1, cookBase + 100 * (cookRandB - 1) - 100 * 1));

            setVal("A_KakutyouFoodMinSuccessRate", "Min: " + ((minRowLow + minRowHigh) / 2 / 100).toFixed(2) + "% [" + (minRowLow / 100).toFixed(2) + "% ~ " + (minRowHigh / 100).toFixed(2) + "%]");
            setVal("A_KakutyouFoodAvgSuccessRate", "Avg: " + ((avgRowLow + avgRowHigh) / 2 / 100).toFixed(2) + "% [" + (avgRowLow / 100).toFixed(2) + "% ~ " + (avgRowHigh / 100).toFixed(2) + "%]");
            setVal("A_KakutyouFoodMaxSuccessRate", "Max: " + ((maxRowLow + maxRowHigh) / 2 / 100).toFixed(2) + "% [" + (maxRowLow / 100).toFixed(2) + "% ~ " + (maxRowHigh / 100).toFixed(2) + "%]");
            break;
        case 32: // pet capture rate
            let baseCaptureRate = m_Pets[0][1 * c.A_KakutyouPetCaptureMonster.value];
            let captureRate = baseCaptureRate + Math.floor(((100 - c.A_KakutyouPetCaptureHp.value) * baseCaptureRate) / 100);

            if(captureRate < 1) captureRate = 1;
            
            captureRate = Math.floor((captureRate * 2000) / 100);

            displayData += `<hr>`;
            displayData += `<b>Chance to capture:</b> ${(captureRate / 100).toFixed(2)}%`;
            setVal("A_KakutyouData", displayData);
            break;
        case 34: // refinement cost
            // Per-step success rates [equipType][refineLevel-5]
            // Indices: 0=Wep1, 1=Wep2, 2=Wep3, 3=Wep4, 4=Armor
            // +1 to +4 is 100% for everything
            const refineRates = [
                [1.0, 1.0, 1.0, 0.6, 0.4, 0.2],  // Weapon Lv1: +5=100%, +6=100%, +7=100%, +8=60%, +9=40%, +10=20%
                [1.0, 1.0, 0.6, 0.4, 0.2, 0.2],  // Weapon Lv2
                [1.0, 0.6, 0.5, 0.2, 0.2, 0.2],  // Weapon Lv3
                [0.6, 0.4, 0.4, 0.2, 0.2, 0.1],  // Weapon Lv4
                [0.6, 0.4, 0.4, 0.2, 0.2, 0.1],  // Armor
            ];

            let refEquipZeny = 1 * c.A_KakutyouRefineZeny.value;
            let refEquipType = 1 * c.A_KakutyouRefineType.value;
            let refOreZeny = 1 * c.A_KakutyouOreZeny.value;
            let refNpcCost = 1 * c.A_KakutyouRefineCost.value;
            let refDesired = 1 * c.A_KakutyouDesiredRefine.value;

            // Cumulative chance = product of each step's success rate
            let cumulativeChance = 1.0;
            for(let r = 1; r <= refDesired; r++) {
                if(r <= 4) continue; // +1 to +4 is 100%
                cumulativeChance *= refineRates[refEquipType][r - 5];
            }

            // Mean investment = (equipValue + (oreCost + npcCost) * desiredRefine) / cumulativeChance - equipValue
            let meanInvestment = 0;
            if(cumulativeChance > 0 && refDesired > 0) {
                meanInvestment = Math.round((refEquipZeny + (refOreZeny + refNpcCost) * refDesired) / cumulativeChance) - refEquipZeny;
            }

            displayData += `<hr><table>`;
            displayData += `<tr><td>Chance to refine up to +${refDesired} = ${(Math.round(cumulativeChance * 1e6) / 1e4).toFixed(4)} %</td></tr>`;
            displayData += `<tr><td>Mean investment = ${meanInvestment} zeny</td></tr>`;
            displayData += `</table>`;
            setVal("A_KakutyouData", displayData);
            break;
        case 36: // sp cost of skills
            let finalSPcost = Math.floor((c.A_KakutyouSkillSP.value * player.dsprate) / 100);
            displayData += `<b>SP cost modifier:</b> ${(100 - player.dsprate) * -1}%`;
            displayData += `<br><b>Final SP cost:</b> ${finalSPcost}`;
            setVal("A_KakutyouData", displayData);
            break;
        default:
            setVal("A_KakutyouData", ""); // reset ALL selection display
            setVal("A_KakutyouSel", ""); // reset ALL display
            break;
    }
}

function displayOtherInfoSelect(val) {
    function setVal(id, value) {
        let el = document.getElementById(id);
        if(el) el.innerHTML = value;
    }

    if(val == 0) {
        setVal("A_KakutyouSel", ""); // reset ALL selection display
        // reset ALL display
    } else {
        // display the info "box"
    }

    let selectData = "";
    switch(val) {
        case 0:
            // display NOTHING/reset
            break;
        case 6: // increase hp/sp recovery selection
            let hasHpRecovery = n_A_JobClass() == JOB.SWORDMAN || player.status.job_id == JOB.SUPERNOVICE;
            let hasSpRecovery = n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass() == JOB.MAGICIAN || player.status.job_id == JOB.SUPERNOVICE;

            if(hasHpRecovery)
                selectData += `Increase HP Recovery Lvl: <select name="A_KakutyouSelNum" onchange="StAllCalc()"></select>`;
            if(hasHpRecovery && hasSpRecovery)
                selectData += `<br>`;
            if(hasSpRecovery)
                selectData += `Increase SP Recovery Lvl: <select name="A_KakutyouSelNum2" onchange="StAllCalc()"></select>`;
            if(!hasHpRecovery && !hasSpRecovery)
                selectData += `<p class="center">Not available for this class.</p>`;
            setVal("A_KakutyouSel", selectData);

            if(hasHpRecovery) {
                for(let i = 0; i <= 10; i++)
                    c.A_KakutyouSelNum.options[i] = new Option(i, i);
                c.A_KakutyouSelNum.value = 10;
            }
            if(hasSpRecovery) {
                for(let i = 0; i <= 5; i++)
                    c.A_KakutyouSelNum2.options[i] = new Option(i, i);
                c.A_KakutyouSelNum2.value = 5;
            }
            break;
        case 8: // spirits recovery selection (monk skill)
            let hasSpiritsRecovery = n_A_JobClass2() == JOB.MONK;
            if(hasSpiritsRecovery) {
                selectData += `Spirits Recovery Lvl: <select name="A_KakutyouSelNum" onchange="StAllCalc()"></select>`;
            } else {
                selectData += `<p class="center">Not available for this class.</p>`;
            }

            setVal("A_KakutyouSel", selectData);

            if(hasSpiritsRecovery) {
                for(let i = 0; i <= 5; i++)
                    c.A_KakutyouSelNum.options[i] = new Option(i, i);
                c.A_KakutyouSelNum.value = 5;
            }
            break;
        case 10: // weight limit
            let hasEnlargeWeightLimit = n_A_JobClass() == JOB.MERCHANT || player.status.job_id == JOB.SUPERNOVICE;
            if(hasEnlargeWeightLimit) {
                selectData += `Enlarge Weight Limit Lvl: <select name="A_KakutyouSelNum" onchange="StAllCalc()"></select><br>`;
            }

            selectData += `Enlarge Weight Limit R Lvl: <select name="A_KakutyouSelNum2" onchange="StAllCalc()"></select>`;
            selectData += `<br>Elite Gym Pass: <input type="checkbox" name="A_KakutyouChk" onclick="StAllCalc()">`;

            setVal("A_KakutyouSel", selectData);

            if(hasEnlargeWeightLimit) {
                for(let i = 0; i <= 10; i++)
                    c.A_KakutyouSelNum.options[i] = new Option(i, i);
                c.A_KakutyouSelNum.value = 0;
            }

            for(let i = 0; i <= 10; i++)
                c.A_KakutyouSelNum2.options[i] = new Option(i, i);
            c.A_KakutyouSelNum2.value = 0;
            break;
        case 12: // player resistance
        case 14: // atk based bonuses
        case 16: // matk based bonuses
            selectData += `<table><tbody><tr><td>Target: `;
            selectData += `<select name="A_KakutyouTargetRace" onchange="StAllCalc()"></select>`;
            selectData += `<select name="A_KakutyouTargetSize" onchange="StAllCalc()"></select>`;
            selectData += `<select name="A_KakutyouTargetElement" onchange="StAllCalc()"></select>`;
            selectData += `<select name="A_KakutyouTargetClass" onchange="StAllCalc()"></select>`;
            selectData += `<select name="A_KakutyouTargetRace2" onchange="StAllCalc()"></select>`;
            selectData += `</td></tr></tbody></table>`;
            setVal("A_KakutyouData", selectData);

            for(let i = 0; i < RC.PLAYER_HUMAN; i++) {
                c.A_KakutyouTargetRace.options[i] = new Option(getRaceName(i), i);
            }
            for(let i = 0; i < SZ.ALL; i++) {
                c.A_KakutyouTargetSize.options[i] = new Option(getSizeName(i), i);
            }
            for(let i = 0; i < ELE.MAX; i++) {
                c.A_KakutyouTargetElement.options[i] = new Option(getEleName(i), i);
            }
            for(let i = 0; i < CLASS.GUARDIAN; i++) {
                c.A_KakutyouTargetClass.options[i] = new Option(getClassName(i), i);
            }
            for(let i = 0; i < RC2.NINJA; i++) {
                c.A_KakutyouTargetRace2.options[i] = new Option(getRace2Name(i), i);
            }
            break;
        case 13: // status resistance
            selectData += `<table><tbody>`;
            selectData += `<tr><td colspan="2">Source Level:</td><td><select name="A_KakutyouStatusLevel" onchange="StAllCalc()"></select></td>`;
            selectData += `<td>Rate to apply (%):</td><td><input type="tel" name="A_KakutyouStatusRate" value="0" size="4" onkeyup="StAllCalc()" style="text-align: center; width: 30%;"></td>`;
            selectData += `<td>Duration (secs):</td><td><input type="tel" name="A_KakutyouStatusDuration" value="0" size="4" onkeyup="StAllCalc()" style="text-align: center; width: 20%;"></td></tr>`;
            setVal("A_KakutyouSel", selectData);

            for(let i = 0; i <= 150; i++) {
                c.A_KakutyouStatusLevel.options[i] = new Option(i, i);
            }
            c.A_KakutyouStatusLevel.value = 99;
            c.A_KakutyouStatusRate.value = 100;
            c.A_KakutyouStatusDuration.value = 10;
            break;
        case 20: // experience
            selectData += `Current Base Exp `;
            selectData += `<input type="tel" name="A_KakutyouSelNum" value="0" size="4" onkeyup="StAllCalc()" style="text-align: right">%<br>`;
            selectData += `Current Job Exp `;
            selectData += `<input type="tel" name="A_KakutyouSelNum2" value="0" size="4" onkeyup="StAllCalc()" style="text-align: right">%<br>`;
            setVal("A_KakutyouSel", selectData);
            break;
        case 22: // potion pitcher
            if(n_A_JobClass2() == JOB.ALCHEMIST || n_A_JobClass2() == JOB.ROGUE) {
                selectData += `<table style="text-align: right;"><tbody>`;
                selectData += `<tr><td>Potion:</td><td colspan="2"><select style="float: left" name="A_KakutyouPotion" onchange="StAllCalc()"></select></td>`;
                selectData += `<td>Target's VIT:</td><td class="left"><select name="A_KakutyouVIT" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Potion Pitcher:</td><td class="left"><select name="A_KakutyouPotionPitcher" onchange="StAllCalc()"></select></td>`;
                selectData += `<td></td><td>Target's INT:</td><td class="left"><select name="A_KakutyouINT" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Learning Potion:</td><td class="left"><select name="A_KakutyouLearningPotion" onchange="StAllCalc()"></select></td>`;
                selectData += `<td colspan="2">Increase HP/SP Recovery:</td><td class="left"><select name="A_KakutyouHpSpRecovery" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td></td><td colspan="3">Target's Heal Received% Bonus:</td><td><input type="text" name="A_KakutyouHealReceivedBonus" value="0" size="4" onkeyup="StAllCalc()" style="float: left; text-align: left; width: 30%;"><br></td></tr>`;
                setVal("A_KakutyouSel", selectData);
                
                c.A_KakutyouPotion.options[0] = new Option("Red Potion", 0);
                c.A_KakutyouPotion.options[1] = new Option("Orange Potion", 1);
                c.A_KakutyouPotion.options[2] = new Option("Yellow Potion", 2);
                c.A_KakutyouPotion.options[3] = new Option("White Potion", 3);
                c.A_KakutyouPotion.options[4] = new Option("Blue Potion", 4);

                for(let i = 0; i <= 10; i++) {
                    c.A_KakutyouLearningPotion.options[i] = new Option(i, i);
                    c.A_KakutyouHpSpRecovery.options[i] = new Option(i, i);
                    if(i <= 5)
                        c.A_KakutyouPotionPitcher.options[i] = new Option(i, i);
                }

                for(let i = 0; i <= 200; i++) {
                    c.A_KakutyouVIT.options[i] = new Option(i, i);
                    c.A_KakutyouINT.options[i] = new Option(i, i);
                }
            } else {
                selectData += `<p class="center">Not available for this class.</p>`;
                setVal("A_KakutyouSel", selectData);
            }
            break;
        case 23: // slim potion pitcher
            if(player.status.job_id == JOB.CREATOR) {
                selectData += `<table style="text-align: right;"><tbody>`;
                selectData += `<tr><td>Slim Potion:</td><td colspan="2"><select style="float: left" name="A_KakutyouPotion" onchange="StAllCalc()"></select></td>`;
                selectData += `<td>Potion Pitcher:</td><td class="left"><select name="A_KakutyouPotionPitcher" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Slim Potion Pitcher:</td><td class="left"><select name="A_KakutyouSlimPotionPitcher" onchange="StAllCalc()"></select></td>`;
                selectData += `<td></td><td>Target's VIT:</td><td class="left"><select name="A_KakutyouVIT" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Learning Potion:</td><td class="left"><select name="A_KakutyouLearningPotion" onchange="StAllCalc()"></select></td>`;
                selectData += `<td colspan="2">Increase HP Recovery:</td><td class="left"><select name="A_KakutyouHpSpRecovery" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td></td><td colspan="3">Target's Heal Received% Bonus:</td><td><input type="text" name="A_KakutyouHealReceivedBonus" value="0" size="4" onkeyup="StAllCalc()" style="float: left; text-align: left; width: 30%;"><br></td></tr>`;
                setVal("A_KakutyouSel", selectData);
                
                c.A_KakutyouPotion.options[0] = new Option("Slim Red Potion", 0);
                c.A_KakutyouPotion.options[1] = new Option("Slim Yellow Potion", 1);
                c.A_KakutyouPotion.options[2] = new Option("Slim White Potion", 2);

                for(let i = 0; i <= 10; i++) {
                    c.A_KakutyouLearningPotion.options[i] = new Option(i, i);
                    c.A_KakutyouHpSpRecovery.options[i] = new Option(i, i);
                    c.A_KakutyouSlimPotionPitcher.options[i] = new Option(i, i);
                    if(i <= 5)
                        c.A_KakutyouPotionPitcher.options[i] = new Option(i, i);
                }

                for(let i = 0; i <= 200; i++) {
                    c.A_KakutyouVIT.options[i] = new Option(i, i);
                }
            } else {
                selectData += `<p class="center">Not available for this class.</p>`;
                setVal("A_KakutyouSel", selectData);
            }
            break;
        case 24: // forge/potion/edp creation success rate
            if(n_A_JobClass2() == JOB.BLACKSMITH) {
                selectData += `<table style="text-align: right;"><tbody>`;
                selectData += `<tr><td>Oridecon Research:</td><td class="data"><select name="A_KakutyouOriResearch" onchange="StAllCalc()"></select></td>`;
                selectData += `<td>Anvil:</td><td class="left"><select name="A_KakutyouAnvil" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Weapon Research:</td><td class="data"><select name="A_KakutyouWeaponResearch" onchange="StAllCalc()"></select></td>`;
                selectData += `<td>Star Crumb:</td><td class="left"><select name="A_KakutyouStarCrumb" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Iron Tempering:</td><td class="data"><select name="A_KakutyouIronTempering" onchange="StAllCalc()"></select></td>`;
                selectData += `<td>Elemental Stone:</td><td class="left"><select name="A_KakutyouElementalStone" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Steel Tempering:</td><td class="data"><select name="A_KakutyouSteelTempering" onchange="StAllCalc()"></select></td>`;
                selectData += `<td>Enchanted Stone Craft:</td><td class="left"><select name="A_KakutyouEnchantedStoneCraft" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Smith (weapon) Lvl:</td><td class="data"><select name="A_KakutyouSmithWeapon" onchange="StAllCalc()"></select></td>`;
                selectData += `<td></td></tr>`;
                setVal("A_KakutyouSel", selectData);

                for(let i = 0; i <= 10; i++) {
                    c.A_KakutyouWeaponResearch.options[i] = new Option(i, i);
                    if(i <= 5) {
                        c.A_KakutyouOriResearch.options[i] = new Option(i, i);
                        c.A_KakutyouIronTempering.options[i] = new Option(i, i);
                        c.A_KakutyouSteelTempering.options[i] = new Option(i, i);
                        c.A_KakutyouEnchantedStoneCraft.options[i] = new Option(i, i);
                    }

                    if(i <= 3) {
                        c.A_KakutyouSmithWeapon.options[i] = new Option(i, i);
                        c.A_KakutyouStarCrumb.options[i] = new Option(i, i);
                    }
                }

                c.A_KakutyouElementalStone.options[0] = new Option(0, 0);
                c.A_KakutyouElementalStone.options[1] = new Option(1, 1);

                c.A_KakutyouAnvil.options[0] = new Option("Anvil/No Anvil", 0);
                c.A_KakutyouAnvil.options[1] = new Option("Oridecon Anvil", 300);
                c.A_KakutyouAnvil.options[2] = new Option("Golden Anvil", 500);
                c.A_KakutyouAnvil.options[3] = new Option("Emperium Anvil", 1000);
            } else if(n_A_JobClass2() == JOB.ALCHEMIST) {
                selectData += `<table style="text-align: right;"><tbody>`;
                selectData += `<tr><td>Potion to Create:</td><td class="left"><select name="A_KakutyouPotionToCreate" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Pharmacy:</td><td class="left"><select name="A_KakutyouPharmacy" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Learning Potion:</td><td class="left"><select name="A_KakutyouLearningPotion" onchange="StAllCalc()"></select></td></tr>`;
                selectData += `<tr><td>Change Instruction Level:</td><td class="left"><select name="A_KakutyouChangeInstruction" onchange="StAllCalc()"></select></td></tr>`;
                setVal("A_KakutyouSel", selectData);

                c.A_KakutyouPotionToCreate.options[0] = new Option("Red Potion", 0);
                c.A_KakutyouPotionToCreate.options[1] = new Option("Yellow Potion", 1);
                c.A_KakutyouPotionToCreate.options[2] = new Option("White Potion", 2);
                c.A_KakutyouPotionToCreate.options[3] = new Option("Blue Potion", 3);
                c.A_KakutyouPotionToCreate.options[4] = new Option("Slim Red Potion", 4);
                c.A_KakutyouPotionToCreate.options[5] = new Option("Slim Yellow Potion", 5);
                c.A_KakutyouPotionToCreate.options[6] = new Option("Slim White Potion", 6);
                c.A_KakutyouPotionToCreate.options[7] = new Option("Alcohol", 7);
                c.A_KakutyouPotionToCreate.options[8] = new Option("Acid Bottle", 8);
                c.A_KakutyouPotionToCreate.options[9] = new Option("Bottle Grenade", 9);
                c.A_KakutyouPotionToCreate.options[10] = new Option("Glistening Coat", 10);
                c.A_KakutyouPotionToCreate.options[11] = new Option("Elemental Resist Potions", 11);
                c.A_KakutyouPotionToCreate.options[12] = new Option("Marine Sphere Bottle", 12);
                c.A_KakutyouPotionToCreate.options[13] = new Option("Plant Bottle", 13);
                c.A_KakutyouPotionToCreate.options[14] = new Option("Anodyne", 14);
                c.A_KakutyouPotionToCreate.options[15] = new Option("Aloevera", 15);
                c.A_KakutyouPotionToCreate.options[16] = new Option("Embryo", 16);

                for(let i = 0; i <= 10; i++) {
                    c.A_KakutyouPharmacy.options[i] = new Option(i, i);
                    c.A_KakutyouLearningPotion.options[i] = new Option(i, i);
                    if(i <= 5)
                        c.A_KakutyouChangeInstruction.options[i] = new Option(i, i);
                }
            } else if(player.status.job_id == JOB.ASSASSIN_CROSS) {
                selectData += `Potion to Create: <select name="A_KakutyouPotionToCreate" onchange="StAllCalc()"></select><br>`;
                setVal("A_KakutyouSel", selectData);
                c.A_KakutyouPotionToCreate.options[0] = new Option("Poison Bottle", 0);
            } else {
                selectData += `<p class="center">Not available for this class.</p>`;
                setVal("A_KakutyouSel", selectData);
            }
            break;
        case 26: // steal success rate
            selectData += `<table><tbody>`;
            selectData += `<tr><td>Enemy DEX: <select name="A_KakutyouEnemyDEX" onchange="StAllCalc()"></select></td><td></td><td></td></tr>`;
            selectData += `<tr><td>Item Drop Chance: <input type="text" name="A_KakutyouItemDropChance" value="0" size="4" onkeyup="StAllCalc()" class="center">%</td><td class="title">Skill Lvl</td><td class="title">Chance</td></tr>`;
            selectData += `<tr class="center"><td style="text-align: right;">Steal</td><td><select name="A_KakutyouStealLevel" onchange="StAllCalc()"></select></td><td><span id="A_KakutyouStealChance"></span>%</td></tr>`;
            selectData += `</tbody></table>`;
            setVal("A_KakutyouSel", selectData);

            for(let i = 0; i <= 200; i++) {
                c.A_KakutyouEnemyDEX.options[i] = new Option(i, i);

                if(i <= 10)
                    c.A_KakutyouStealLevel.options[i] = new Option(i, i);
            }
            break;
        case 28: // strip chance & duration
            selectData += `<table><tbody>`;
            selectData += `<tr><td>Enemy DEX: <select name="A_KakutyouEnemyDEX" onchange="StAllCalc()"></select></td><td class="title">Skill Lvl</td><td class="title">Chance</td><td class="title">Duration</td></tr>`;
            selectData += `<tr class="center"><td>Strip Helm, Armor, Weapon, or Shield</td><td><select name="A_KakutyouStripLevel" onchange="StAllCalc()"></select></td><td><span id="A_KakutyouStripChance"></span>%</td><td><span id="A_KakutyouStripDuration"></span>secs</td></tr>`;
            selectData += `</tbody></table>`;
            setVal("A_KakutyouSel", selectData);

            for(let i = 0; i <= 200; i++) {
                c.A_KakutyouEnemyDEX.options[i] = new Option(i, i);

                if(i >= 1 && i <= 5)
                    c.A_KakutyouStripLevel.options[i - 1] = new Option(i, i);
            }
            break;
        case 30: // cooking success rate
            selectData += `<table><tbody>`;
            selectData += `<tr><td>Level of the Food:</td><td><select name="A_KakutyouFoodLevel" onchange="StAllCalc()"></select></td><td class="title">Success Rate</td></tr>`;
            selectData += `<tr><td>Stat of the Food:</td><td><select name="A_KakutyouFoodStat" onchange="StAllCalc()"></select></td><td class="center"><span id="A_KakutyouFoodMinSuccessRate"></span></td></tr>`;
            selectData += `<tr><td>Cooking Kit Used:</td><td><select name="A_KakutyouFoodKit" onchange="StAllCalc()"></select></td><td class="center"><span id="A_KakutyouFoodAvgSuccessRate"></span></td></tr>`;
            selectData += `<tr><td>Cooking Experience:</td><td><input type="text" onkeyup="StAllCalc()" value="0" size="2" name="A_KakutyouFoodExp"></select></td><td class="center"><span id="A_KakutyouFoodMaxSuccessRate"></span></td></tr>`;
            selectData += `</tbody></table>`;
            setVal("A_KakutyouSel", selectData);

            for(let i = 1; i <= 10; i++) {
                c.A_KakutyouFoodLevel.options[i - 1] = new Option(i, i);
            }
            c.A_KakutyouFoodLevel.value = 10;
            const stats = ["STR", "AGI", "VIT", "INT", "DEX", "LUK"];
            for(let i = 0; i < stats.length; i++) {
                c.A_KakutyouFoodStat.options[i] = new Option(stats[i], i);
            }
            const kits = ["Outdoor Cooking Kit", "Home Cooking Kit", "Professional Cooking Kit", "Royal Cooking Kit", "Fantastic Cooking Kit"];
            for(let i = 0; i < kits.length; i++) {
                c.A_KakutyouFoodKit.options[i] = new Option(kits[i], i);
            }
            break;
        case 32: // pet capture success rate
            selectData += `<table style="text-align: right;"><tbody>`;
            selectData += `<tr><td>Monster to capture:</td><td class="left"><select name="A_KakutyouPetCaptureMonster" onchange="StAllCalc()"></select></td></tr>`;
            selectData += `<tr><td>Monster remaining HP:</td><td class="left"><select name="A_KakutyouPetCaptureHp" onchange="StAllCalc()"></select></td></tr>`;
            selectData += `</tbody></table>`;
            setVal("A_KakutyouSel", selectData);

            for(let i = 0; i < m_Pets[1].length; i++) {
                c.A_KakutyouPetCaptureMonster.options[i] = new Option(m_Monster[m_Pets[1][i]][1], i);
            }

            for(let i = 0; i <= 100; i++) {
                c.A_KakutyouPetCaptureHp.options[i] = new Option(i + "%", i);
            }
            c.A_KakutyouPetCaptureHp.value = 100;
            break;
        case 34: // npc refinement cost & success rate
            selectData += `<table style="text-align: right;"><tbody>`;
            selectData += `<tr><td>Equipment zeny value:</td><td class="left"><input type="text" name="A_KakutyouRefineZeny" value="0" size="9" onkeyup="StAllCalc()" class="center"></td></tr>`;
            selectData += `<tr><td>Equipment type:</td><td class="left"><select name="A_KakutyouRefineType" onchange="StAllCalc()"></select></td></tr>`;
            selectData += `<tr><td>Ore zeny value:</td><td class="left"><input type="text" name="A_KakutyouOreZeny" value="0" size="4" onkeyup="StAllCalc()" class="center"></td></tr>`;
            selectData += `<tr><td>Refining zeny cost:</td><td class="left"><input type="text" name="A_KakutyouRefineCost" value="0" size="4" onkeyup="StAllCalc()" class="center"></td></tr>`;
            selectData += `<tr><td>Desired refine:</td><td class="left"><select name="A_KakutyouDesiredRefine" onchange="StAllCalc()"></select></td></tr>`;
            selectData += `</tbody></table>`;
            setVal("A_KakutyouSel", selectData);

            c.A_KakutyouRefineType.options[0] = new Option("Weapon Lvl 1", 0);
            c.A_KakutyouRefineType.options[1] = new Option("Weapon Lvl 2", 1);
            c.A_KakutyouRefineType.options[2] = new Option("Weapon Lvl 3", 2);
            c.A_KakutyouRefineType.options[3] = new Option("Weapon Lvl 4", 3);
            c.A_KakutyouRefineType.options[4] = new Option("Armor", 4);

            for(let i = 0; i <= 10; i++) {
                c.A_KakutyouDesiredRefine.options[i] = new Option("+" + i, i);
            }
            break;
        case 36: // sp cost of skills
            selectData += `SP cost of skill: <input type="text" name="A_KakutyouSkillSP" value="0" size="2" onkeyup="StAllCalc()" class="center"><br>`;
            setVal("A_KakutyouSel", selectData);
            break;
    }
}

function calcOverrefine() {
    let overrefine = 0;
    let wlv = player.right_weapon.level;
    let wref = player.right_weapon.refine;
    switch (wlv) {
        case 1: overrefine = wref >= 8 ? 3 * (wref - 7) : 0; break;
        case 2: overrefine = wref >= 7 ? 5 * (wref - 6) : 0; break;
        case 3: overrefine = wref >= 6 ? 8 * (wref - 5) : 0; break;
        case 4: overrefine = wref >= 5 ? 13 * (wref - 4) : 0; break;
    }
    return overrefine;
}

function getEleName(ele) {
    const names = {
        [ELE.NEUTRAL]: "Neutral",
        [ELE.WATER]: "Water",
        [ELE.EARTH]: "Earth",
        [ELE.FIRE]: "Fire",
        [ELE.WIND]: "Wind",
        [ELE.POISON]: "Poison",
        [ELE.HOLY]: "Holy",
        [ELE.SHADOW]: "Shadow",
        [ELE.GHOST]: "Ghost",
        [ELE.UNDEAD]: "Undead",
    }

    return names[ele] || "Unknown";
}

function getRaceName(race) {
    const names = {
        [RC.FORMLESS]: "Formless",
        [RC.UNDEAD]: "Undead",
        [RC.BRUTE]: "Brute",
        [RC.PLANT]: "Plant",
        [RC.INSECT]: "Insect",
        [RC.FISH]: "Fish",
        [RC.DEMON]: "Demon",
        [RC.DEMIHUMAN]: "Demi-Human",
        [RC.ANGEL]: "Angel",
        [RC.DRAGON]: "Dragon",
    }

    return names[race] || "Unknown";
}

function getSizeName(size) {
    const names = {
        [SZ.SMALL]: "Small",
        [SZ.MEDIUM]: "Medium",
        [SZ.LARGE]: "Large",
    }

    return names[size] || "Unknown";
}

function getClassName(class_) {
    const names = {
        [CLASS.NORMAL]: "Normal",
        [CLASS.BOSS]: "Boss",
    }

    return names[class_] || "Unknown";
}

function getRace2Name(race2) {
    const names = {
        [RC2.NONE]: "None",
        [RC2.GOBLIN]: "Goblin",
        [RC2.KOBOLD]: "Kobold",
        [RC2.ORC]: "Orc",
        [RC2.GOLEM]: "Golem",
        [RC2.GUARDIAN]: "Guardian",
    }

    return names[race2] || "Unknown";
}

function getStatusName(status) {
    const names = {
        [EFF.STONE]: "Stone",
        [EFF.FREEZE]: "Freeze",
        [EFF.STUN]: "Stun",
        [EFF.SLEEP]: "Sleep",
        [EFF.POISON]: "Poison",
        [EFF.CURSE]: "Curse",
        [EFF.SILENCE]: "Silence",
        [EFF.CONFUSION]: "Confusion",
        [EFF.BLIND]: "Blind",
        [EFF.BLEEDING]: "Bleeding",
    };

    return names[status] || "Unknown";
}

function getEleColor(ele) {
    const colors = {
        [ELE.NEUTRAL]: "#A89682",
        [ELE.WATER]: "#0000ff",
        [ELE.EARTH]: "#a52a2a",
        [ELE.FIRE]: "#ff0000",
        [ELE.WIND]: "#00CC00",
        [ELE.POISON]: "#bb24bb",
        [ELE.HOLY]: "#CDCD00",
        [ELE.SHADOW]: "#000000",
        [ELE.GHOST]: "#BFBEBB",
        [ELE.UNDEAD]: "#800080"
    };

    return colors[ele] || "#000000";
}

function getRaceColor(race) {
    const colors = {
        [RC.FORMLESS]: "#9F9E9B",
        [RC.UNDEAD]: "#800080",
        [RC.BRUTE]: "#a52a2a",
        [RC.PLANT]: "#00DD00",
        [RC.INSECT]: "#008000",
        [RC.FISH]: "#0000ff",
        [RC.DEMON]: "#000000",
        [RC.DEMIHUMAN]: "#ffa500",
        [RC.ANGEL]: "#CDCD40",
        [RC.DRAGON]: "#FF0000"
    };

    return colors[race] || "#000000";
}

function getWeaponTypeName(type) {
    const names = {
        [WEAPON.FIST]: "Fist",
        [WEAPON.DAGGER]: "Dagger",
        [WEAPON.ONEHANDSWORD]: "One-handed Sword",
        [WEAPON.TWOHANDSWORD]: "Two-handed Sword",
        [WEAPON.ONEHANDSPEAR]: "One-handed Spear",
        [WEAPON.TWOHANDSPEAR]: "Two-handed Spear",
        [WEAPON.ONEHANDAXE]: "One-handed Axe",
        [WEAPON.TWOHANDAXE]: "Two-handed Axe",
        [WEAPON.MACE]: "Mace",
        [WEAPON.ROD]: "Rod",
        [WEAPON.BOW]: "Bow",
        [WEAPON.KATAR]: "Katar",
        [WEAPON.BOOK]: "Book",
        [WEAPON.KNUCKLE]: "Knuckle",
        [WEAPON.INSTRUMENT]: "Instrument",
        [WEAPON.WHIP]: "Whip",
        [WEAPON.HUUMA]: "Huuma",
        [WEAPON.REVOLVER]: "Revolver",
        [WEAPON.RIFLE]: "Rifle",
        [WEAPON.SHOTGUN]: "Shotgun",
        [WEAPON.GATLING]: "Gatling",
        [WEAPON.GRENADE]: "Grenade",
        [WEAPON.TWOHANDSTAFF]: "Two-handed Staff",
    }

    return names[type] || "Unknown";
}