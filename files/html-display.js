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

// ------------------ main stats ------------------
    setVal("A_MaxHP", status.max_hp);
    setVal("A_MaxSP", status.max_sp);

    // hp/sp regen
    setVal("A_HPR", "ADDING LATER");
    setVal("A_SPR", "ADDING LATER");

    setVal("A_ASPD", (2000 - status.amotion) / 10);
    setVal("A_MovSPEED", status.speed); // is a bit fucked rn - fix later

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

    setVal("B_16", monster.base_exp);
    setVal("B_17", monster.job_exp);
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

        if(n_A_Buf2[7]) {
            sizeModifierText = "Weapon Perfection";
            sizeModifier = 100;
        }
        if(n_A_Buf3[48]) {
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
                delayStr = Math.round(wDelay * 1000) / 1000 + " (" + aspdDelay + " + " + pingDelay + ") seconds";
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
                console.log(`Triple Attack damage: ${tripleAttackDamage.damage_min} ~ ${tripleAttackDamage.damage_max} (avg: ${tripleAttackDamage.getAverageDamage()})`);
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
            console.log(`Grand Cross self-damage: ${gcSelfDamage.damage_min} ~ ${gcSelfDamage.damage_max} (avg: ${gcSelfDamage.getAverageDamage()})`);
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
        console.log(`Expected damage weights - TA: ${(effectiveTA*100).toFixed(1)}%, DA: ${(effectiveDA*100).toFixed(1)}%, Crit: ${(effectiveCrit*100).toFixed(1)}%, Normal: ${(normalRate*100).toFixed(1)}%`);
        minDamage = Math.floor(normalMin * normalRate + daMin * effectiveDA + tripleAttackDmgMin * effectiveTA + critMin * effectiveCrit);
        avgDamage = Math.floor(normalAvg * normalRate + daAvg * effectiveDA + tripleAttackDmgAvg * effectiveTA + critAvg * effectiveCrit);
        maxDamage = Math.floor(normalMax * normalRate + daMax * effectiveDA + tripleAttackDmgMax * effectiveTA + critMax * effectiveCrit);
        console.log(`Expected damage: ${minDamage} ~ ${avgDamage} ~ ${maxDamage}`);

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
        setVal("AtkBaseExp", avgHits >= 10000 ? "Immeasurable" : Math.ceil(monster.base_exp / avgHits) + " exp");
        setVal("AtkJobExp", avgHits >= 10000 ? "Immeasurable" : Math.ceil(monster.job_exp / avgHits) + " exp");
    } else {
        setVal("AtkBaseExp", "");
        setVal("AtkJobExp", "");
    }
}

/**
 * Used to display results of damage calculation done by monster in Combat Simulator tab
 * @param {Damage} damage 
 */
function updateMonsterDamageDisplay(damage) {
    console.log("Monster damage display:");

    function setVal(id, value) {
        let el = document.getElementById(id);
        if(el) el.innerHTML = value;
    }

    // dodge ratio
    setVal("BattleFLEE", 100 - damage.hit_rate);

    // additional dodge (parrying, auto guard, etc.) - multiplicative
    let hitThroughRate = 1;
    let autoGuardBonus = [5, 10, 14, 18, 21, 24, 26, 28, 29, 30];
    if(n_A_Buf2[13] && damage.flag&BF.WEAPON) // auto guard
        hitThroughRate *= (1 - autoGuardBonus[n_A_Buf2[13] - 1] / 100);
    if(SkillSearch(SKILL.LK_PARRYING) && player.status.weapon == WEAPON.TWOHANDSWORD && damage.flag&BF.WEAPON)
        hitThroughRate *= (1 - 50 / 100);
    if(SkillSearch(SKILL.ST_REJECTSWORD) && damage.flag&BF.WEAPON)
        hitThroughRate *= (1 - (15 * SkillSearch(SKILL.ST_REJECTSWORD)) / 100);
    if(n_A_Buf3[45]) // a whistle SR
        hitThroughRate *= (1 - 20 / 100);
    if(SkillSearch(SKILL.TK_DODGE)) {
        if(player.equip[EQI.HAND_R] == 0 && SkillSearch(SKILL.TK_RUN_STR))
            hitThroughRate *= (1 - (4 * SkillSearch(SKILL.TK_DODGE)) / 100);
        else if (monster.ranged || 2 == c.B_AtkRange.value || damage.flag&BF.LONG) // if monster is ranged or is using a ranged attack
            hitThroughRate *= (1 - (4 * SkillSearch(SKILL.TK_DODGE)) / 100);
    }
    if(monster.debuff[26] && damage.skill_id == SKILL.NV_BASIC_ATTACK) // disarm
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

    console.log("item reflect damage: " + damage.item_reflect_damage_min + " ~ " + damage.item_reflect_damage_max);
    console.log("status reflect damage: " + damage.status_reflect_damage_min + " ~ " + damage.status_reflect_damage_max);

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
    console.log("Average damage before hit rate adjustment: " + avgDamage);
    console.log("Original hit rate: " + damage.hit_rate);
    console.log("Hit through rate after adjustments: " + hitThroughRate);
    setVal("B_Ave2Atk", Math.round(avgDamage * (damage.hit_rate / 100) * hitThroughRate));


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