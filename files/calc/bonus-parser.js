function PlayerApplyBonus(type, val) {
    let status = player.base_status;
    let bonus;

    switch(type) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            player.indexed_bonus.param_bonus[type - 1] += val;
            break;
        case 7: // all stats
            player.indexed_bonus.param_bonus[STAT.STR] += val;
            player.indexed_bonus.param_bonus[STAT.AGI] += val;
            player.indexed_bonus.param_bonus[STAT.VIT] += val;
            player.indexed_bonus.param_bonus[STAT.INT] += val;
            player.indexed_bonus.param_bonus[STAT.DEX] += val;
            player.indexed_bonus.param_bonus[STAT.LUK] += val;
            break;
        case 8: // hit
            bonus = status.hit + val;
            status.hit = cap_value(bonus, SHRT_MIN, SHRT_MAX);
            break;
        case 9: // flee
            bonus = status.flee + val;
            status.flee = cap_value(bonus, SHRT_MIN, SHRT_MAX);
            break;
        case 10: // crit
            bonus = status.cri + val * 10;
            status.cri = cap_value(bonus, SHRT_MIN, SHRT_MAX);
            break;
        case 11: // perfect dodge
            bonus = status.flee2 + val * 10;
            status.flee2 = cap_value(bonus, SHRT_MIN, SHRT_MAX);
            break;
        case 12: // aspd%
            status.aspd_rate -= 10 * val;
            break;
        case 13: // flat max hp
            player.bonus.hp += val;
            break;
        case 14: // flat max sp
            player.bonus.sp += val;
            break;
        case 15: // max hp%
            player.hprate += val;
            break;
        case 16: // max sp%
            player.sprate += val;
            break;
        case 17: // flat atk
            status.batk += val;
            break;
        case 18: // flat def
            bonus = status.def + val;
            status.def = cap_value(bonus, DEFTYPE_MIN, DEFTYPE_MAX);
            break;
        case 19: // flat mdef
            bonus = status.mdef + val;
            status.mdef = cap_value(bonus, DEFTYPE_MIN, DEFTYPE_MAX);
            break;
        case 20: // weapon element
            status.rhw.ele = status.lhw.ele = val;
            break;
        case 22: // bypass defense class
            if(val == 1)
                player.indexed_bonus.ignore_def_class[CLASS.NORMAL] = 1;
            else {
                player.indexed_bonus.ignore_def_class[CLASS.NORMAL] = 1;
                player.indexed_bonus.ignore_def_class[CLASS.BOSS] = 1;
            }
            break;
        case 23: // ice pick effect
            player.indexed_bonus.def_ratio_atk_class[CLASS.NORMAL] = 1;
            player.indexed_bonus.def_ratio_atk_class[CLASS.BOSS] = 1;
            break;
        case 24: // player defense adjustment
            //player.def_rate += val;
            //player.def2_rate += val;
            break;
        case 25: // ranged damage bonus
            player.bonus.long_attack_atk_rate += val;
            break;
        case 26: // boss damage bonus
            player.indexed_bonus.addclass[CLASS.BOSS] += val;
            break;
        case 27: // size damage bonus
        case 28:
        case 29:
            player.indexed_bonus.addsize[type - 27] += val;
            break;
        case 30: // race damage bonus
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
            player.indexed_bonus.addrace[type - 30] += val;
            break;
        case 40: // element damage bonus
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
            player.indexed_bonus.addele[type - 40] += val;
            break;
        case 50: // race resistance bonus
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
            player.indexed_bonus.subrace[type - 50] += val;
            break;
        case 60: // ele resistance bonus
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
            player.indexed_bonus.subele_script[type - 60] += val;
            break;
        case 70: // crit damage % bonus
            player.bonus.crit_atk_rate += val;
            break;
        case 71: // reflect melee damage %
            player.bonus.short_weapon_damage_return += val;
            break;
        case 72: // fixed cast time
            break;
        case 73: // cast time reduction
            player.castrate += val;
            break;
        case 74: // cast delay reduction
            player.bonus.delayrate += -val;
            break;
        case 75: // hp regen rate
            player.hprecov_rate += val;
            break;
        case 76: // sp regen rate
            player.sprecov_rate += val;
            break;
        case 77: // boss resistance
            player.indexed_bonus.subclass[CLASS.BOSS] += val;
            break;
        case 78: // ranged attack resistance
            player.bonus.long_attack_def_rate += val;
            break;
        case 79: // normal monster resistance
            player.indexed_bonus.subclass[CLASS.NORMAL] += val;
            break;
        case 80: // atk damage vs all
            player.indexed_bonus.addclass[CLASS.ALL] += val;
            break;
        case 81: // goblin race damage bonus
            player.indexed_bonus.addrace2[RC2.GOBLIN] += val;
            break;
        case 82: // kobold race damage bonus
            player.indexed_bonus.addrace2[RC2.KOBOLD] += val;
            break;
        case 83: // orc race damage bonus
            player.indexed_bonus.addrace2[RC2.ORC] += val;
            break;
        case 84: // golem race damage bonus
            player.indexed_bonus.addrace2[RC2.GOLEM] += val;
            break;
        case 85: // defense rate
            player.def_rate += val;
            break;
        case 86: // perfect hit%
            player.bonus.perfect_hit += val;
            break;
        case 87: // atk% (the one that actually increases atk) - not really used
            break;
        case 88: // flat matk
            player.bonus.ematk += val;
            break;
        case 89: // matk%
            player.matk_rate += val;
            break;
        case 91: // your heal effectiveness
            PlayerBonusItemBonus(player.skillheal, SKILL.AL_HEAL, val);
            break;
        case 92: // received heal effectiveness
            PlayerBonusItemBonus(player.skillheal2, SKILL.AL_HEAL, val);
            break;
        case 93: // more heal damage vs undead
            PlayerBonusItemBonus(player.skillatk, SKILL.AL_HEAL, val);
            break;
        case 94: // your sanctuary effectiveness
            PlayerBonusItemBonus(player.skillatk, SKILL.PR_SANCTUARY, val);
            break;
        case 95: // received sanctuary effectiveness
            PlayerBonusItemBonus(player.skillheal2, SKILL.PR_SANCTUARY, val);
            break;
        case 96: // sanctuary damage vs undead
            PlayerBonusItemBonus(player.skillatk, SKILL.PR_SANCTUARY, val);
            break;
        case 97: // your potion pitcher effectiveness
            PlayerBonusItemBonus(player.skillatk, SKILL.AM_POTIONPITCHER, val);
            break;
        case 98: // received potion pitcher effectiveness
            PlayerBonusItemBonus(player.skillheal2, SKILL.AM_POTIONPITCHER, val);
            break;
        case 99: // all outgoing heal power
            player.bonus.add_heal_rate += val;
            break;
        case 100: // all received heal power
            player.bonus.add_heal2_rate += val;
            break;
        case 110: // crit bonus vs race
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
            player.indexed_bonus.critaddrace[type - 110] += val;
            break;
        case 120: // increased exp vs race
        case 121:
        case 122:
        case 123:
        case 124:
        case 125:
        case 126:
        case 127:
        case 128:
        case 129:
            player.indexed_bonus.expaddrace[type - 120] += val;
            break;
        case 130: // chance to cause x status effect (not really relevant for calc)
        case 131:
        case 132:
        case 133:
        case 134:
        case 135:
        case 136:
        case 137:
        case 138:
        case 139:
        case 140:
        case 141:
        case 142:
        case 143:
        case 144:
        case 145:
        case 146:
        case 147:
        case 148:
        case 149:
            break;
        case 150: // status effect resistance
        case 151:
        case 152:
        case 153:
        case 154:
        case 155:
        case 156:
        case 157:
        case 158:
        case 159:
        case 160:
        case 161:
        case 162:
        case 163:
        case 164:
        case 165:
        case 166:
        case 167:
        case 168:
        case 169:
            PlayerBonusItemBonus(player.reseff, type - 150, val);
            break;
        case 170: // magic damage bonus vs race
        case 171:
        case 172:
        case 173:
        case 174:
        case 175:
        case 176:
        case 177:
        case 178:
        case 179:
            player.indexed_bonus.magic_addrace[type - 170] += val;
            break;
        case 180: // ignore defense vs race
        case 181:
        case 182:
        case 183:
        case 184:
        case 185:
        case 186:
        case 187:
        case 188:
        case 189:
            player.indexed_bonus.ignore_def_race[type - 180] = 1;
            break;
        case 190: // size resistance
        case 191:
        case 192:
            player.indexed_bonus.subsize[type - 190] += val;
            break;
        case 193: // unrefinable - not really a bonus
            break;
        case 194: // unbreakable - not really a bonus
            break;
        case 195: // two-handed staff - handed differently now
            break;
        case 196: // not relevant anymore - can replace
            break;
        case 198: // armor element
            status.def_ele = val;
            break;
        case 199: // flat aspd
            player.bonus.aspd_add -= 10 * val;
            break;
        case 200: // headgear location - not really a bonus
            break;
        case 209: // movement speed (doesn't stack with INC AGI)
            player.bonus.speed_rate = Math.min(player.bonus.speed_rate, -val);
            break;
        case 210: // movement speed (stacks with INC AGI) - not on any relevant items yet
            player.bonus.speed_add_rate -= val;
            break;
        case 220: // enable skill - not really a bonus
            break;
        case 221: // auto-cast skill - not really a bonus
            break;
        case 290: // all monsters ignore DEF%
            player.indexed_bonus.ignore_def_by_class[CLASS.ALL] += val;
            break;
        case 291: // normal monsters ignore DEF%
            player.indexed_bonus.ignore_def_by_class[CLASS.NORMAL] += val;
            break;
        case 292: // boss monsters ignore DEF%
            player.indexed_bonus.ignore_def_by_class[CLASS.BOSS] += val;
            break;
        case 295: // all monsters ignore MDEF%
            player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL] += val;
            break;
        case 296: // normal monsters ignore MDEF%
            player.indexed_bonus.ignore_mdef_by_class[CLASS.NORMAL] += val;
            break;
        case 297: // boss monsters ignore MDEF%
            player.indexed_bonus.ignore_mdef_by_class[CLASS.BOSS] += val;
            break;
        case 300: // ignore def% vs race
        case 301: 
        case 302:
        case 303:
        case 304:
        case 305:
        case 306:
        case 307:
        case 308:
        case 309:
            player.indexed_bonus.ignore_def_by_race[type - 300] += val;
            break;
        case 310: // ignore mdef% vs race
        case 311:
        case 312:
        case 313:
        case 314:
        case 315:
        case 316:
        case 317:
        case 318:
        case 319:
            player.indexed_bonus.ignore_mdef_by_race[type - 310] += val;
            break;
        case 320: // crit damage% vs race - not used yet
        case 321:
        case 322:
        case 323:
        case 324:
        case 325:
        case 326:
        case 327:
        case 328:
        case 329:
            break;
        case 330: // resistance vs monster of x element
        case 331:
        case 332:
        case 333:
        case 334:
        case 335:
        case 336:
        case 337:
        case 338:
        case 339:
            player.indexed_bonus.subdefele[type - 330] += val;
            player.indexed_bonus.magic_subdefele[type - 330] += val;
            break;
        case 340: // magic damage vs element
        case 341:
        case 342:
        case 343:
        case 344:
        case 345:
        case 346:
        case 347:
        case 348:
        case 349:
            player.indexed_bonus.magic_addele_script[type - 340] += val;
            break;
        case 350: // magic size resistance
        case 351:
        case 352:
            player.indexed_bonus.magic_subsize[type - 350] += val;
            break;
        case 353: // magic vs boss
            player.indexed_bonus.magic_addclass[CLASS.BOSS] += val;
            break;
        case 354: // magic vs all
            player.indexed_bonus.magic_addclass[CLASS.ALL] += val;
            break;
        case 355: // increased auto attack damage
            player.bonus.normalatk_dmgrate += val;
            break;
        case 356: // magic vs size
        case 357:
        case 358:
            player.indexed_bonus.magic_addsize[type - 356] += val;
            break;
        case 360: // ignore mdef% vs element
        case 361:
        case 362:
        case 363:
        case 364:
        case 365:
        case 366:
        case 367:
        case 368:
        case 369:
            player.indexed_bonus.ignore_mdef_by_ele[type - 360] += val;
            break;
        case 370: // sp cost reduction
            player.dsprate += val;
            break;
        case 371: // damage reduction vs all
            player.indexed_bonus.subclass[CLASS.ALL] += val;
            break;
        case 372: // increased double attack
            player.bonus.double_add_rate += val;
            break;
        case 373: // increased melee atk
            player.bonus.short_attack_atk_rate += val;
            break;
        case 374: // increased soft def
            bonus = status.def2 + val;
            status.def2 = cap_value(bonus, SHRT_MIN, SHRT_MAX);
            break;
        case 375: // increased dmg vs wounded morroc
            PlayerBonusItemBonus(player.add_dmg, 495, val);
            PlayerBonusItemBonus(player.add_dmg, 496, val);
            break;
        case 376:
            player.bonus.near_attack_def_rate += val;
            break;
        case 380:
        case 381:
        case 382:
        case 383:
        case 384:
        case 385:
        case 386:
        case 387:
        case 388:
        case 389:
            player.indexed_bonus.magic_atk_ele[type - 380] += val;
            break;
        default:
            // special cases for 5000 - 6999 (skill damage increase)
            // and 7000 - 8999 (skill cast time reduction) can be handled here if needed
            if(type >= 5000 && type < 7000) {
                PlayerBonusItemBonus(player.skillatk, type - 5000, val);
            } else if(type >= 7000 && type < 9000) {
                PlayerBonusItemBonus(player.skillcastrate, type - 7000, val);
            }
            break;
    }
}

function PlayerBonusItemBonus(bonus, id, val) {
    for(const it of bonus) {
        if(it.id === id) {
            it.val += val;
            return;
        }
    }

    let entry = new ItemBonus(id, val);
    bonus.push(entry);
}

/**
 * Parse all item scripts and apply bonuses to the player object
 * This parses equipped items, shadow equipment, and enchants
 */
function ParseItemScripts() {
    // Parse regular equipment (weapon1, weapon2, head1-3, left, body, shoulder, shoes, acces1-2)
    for (let slot = 0; slot < EQI.MAX; slot++) {
        const itemId = player.equip[slot];
        if (!itemId || !m_Item[itemId]) continue;
        
        const item = m_Item[itemId];
        
        // Parse item effects starting at index 11
        // Format: [effectId, value, effectId, value, ..., 0]
        for (let i = 11; item[i] !== 0 && item[i] !== undefined; i += 2) {
            const effectId = item[i];
            const value = item[i + 1];
            
            if (effectId && value !== undefined) {
                PlayerApplyBonus(effectId, value);
            }
        }
    }
    
    // Parse shadow equipment
    for (let slot = 0; slot < SHADOW.MAX; slot++) {
        const shadowId = player.shadow[slot];
        if (!shadowId || !m_ShadowEquips[shadowId]) continue;
        
        const shadowItem = m_ShadowEquips[shadowId];
        
        // Shadow equipment effects start at index 6
        // Format: [effectId, value, effectId, value, ..., 0]
        for (let i = 6; shadowItem[i] !== 0 && shadowItem[i] !== undefined; i += 2) {
            const effectId = shadowItem[i];
            const value = shadowItem[i + 1];
            
            if (effectId && value !== undefined) {
                PlayerApplyBonus(effectId, value);
            }
        }
    }

    // Parse item combos — player.equip[EQI.MAX..20] contains active combo item IDs
    // populated by populateEquipCombos() in PopulatePlayerData
    for (let i = EQI.MAX; i < player.equip.length; i++) {
        const comboItemId = player.equip[i];
        if (!comboItemId || !m_Item[comboItemId]) continue;
 
        for (let j = 11; m_Item[comboItemId][j] !== 0 && m_Item[comboItemId][j] !== undefined; j += 2) {
            const effectId = m_Item[comboItemId][j];
            const value = m_Item[comboItemId][j + 1];
            // Skip effect 90 (combo marker, not a real bonus)
            if (effectId && effectId !== 90 && value !== undefined) {
                PlayerApplyBonus(effectId, value);
            }
        }
    }

    if(player.arrow == 16) // added check for Holy Arrow's demon bonus
        PlayerApplyBonus(36, 5);
}

/**
 * Parse additional scripts from cards, pets, temporary effects, and random options
 * This applies bonuses that aren't part of regular equipment/enchants
 */
function ParseAdditionalScripts() {
    // Parse card effects (26 card slots: weapon1(4), weapon2(4), head1, head2, shield, body, shoulder, shoes, acces1, acces2)
    for (let slot = 0; slot < 26; slot++) {
        const cardId = player.card[slot];
        if (!cardId || !m_Card[cardId]) continue;
        
        // Card effects start at index 4
        // Format: [effectId, value, effectId, value, ..., 0]
        for (let i = 4; m_Card[cardId][i] !== 0 && m_Card[cardId][i] !== undefined; i += 2) {
            const effectId = Math.abs(m_Card[cardId][i]);
            const value = m_Card[cardId][i + 1];
            
            if (effectId && value !== undefined) {
                PlayerApplyBonus(effectId, value);
            }
        }
    }
    
    // Parse pet effects
    const petId = player.pet;
    if (petId && m_PET[petId]) {
        // Pet effects start at index 3
        // Format: [effectId, value, effectId, value, ..., 0]
        for (let i = 3; m_PET[petId][i] !== 0 && m_PET[petId][i] !== undefined; i += 2) {
            const effectId = Math.abs(m_PET[petId][i]);
            const value = m_PET[petId][i + 1];
            
            if (effectId && value !== undefined) {
                PlayerApplyBonus(effectId, value);
            }
        }
    }

    // Parse enchants
    for (let slot = 0; slot < EQI.MAX; slot++) {
        const enchantId = player.enchant[slot];
        if (!enchantId || !m_Enchant[enchantId]) continue;
        
        const enchant = m_Enchant[enchantId];
        
        // Enchant effects start at index 2
        // Format: [effectId, value, effectId, value, ..., 0]
        for (let i = 2; enchant[i] !== 0 && enchant[i] !== undefined; i += 2) {
            const effectId = enchant[i];
            const value = enchant[i + 1];
            
            if (effectId && value !== undefined) {
                PlayerApplyBonus(effectId, value);
            }
        }
    }
    
    // Parse temporary effects (up to 4 slots)
    const seenTempEffects = new Set();
    
    for (let i = 0; i <= 3; i++) {
        const tempEffectId = player.temp_effect[i];
        
        // Skip if 0, not found, or already processed (duplicate)
        if (!tempEffectId || !m_TempEffect[tempEffectId] || seenTempEffects.has(tempEffectId)) {
            continue;
        }
        
        seenTempEffects.add(tempEffectId);
        
        // Temp effect bonuses start at index 5
        // Format: [effectId, value, effectId, value, ..., 0]
        for (let j = 5; m_TempEffect[tempEffectId][j] !== 0 && m_TempEffect[tempEffectId][j] !== undefined; j += 2) {
            const effectId = Math.abs(m_TempEffect[tempEffectId][j]);
            const value = m_TempEffect[tempEffectId][j + 1];
            
            if (effectId && value !== undefined) {
                PlayerApplyBonus(effectId, value);
            }
        }
    }

    for(let i = 0; i < player.manual_edits.length; i++) {
        let type = player.manual_edits[i].type;
        let value = player.manual_edits[i].value;

        if(type == 73)
            value = -value;

        if(type && value) {
            PlayerApplyBonus(type, value);
        }
    }
    
    // Parse random options (27 slots total, paired as option_id + value)
    for (let i = 0; i <= 26; i += 2) {
        const optionId = player.randopt[i];
        const optionValue = player.randopt[i + 1];
        
        if (!optionId || !m_RandomOpt[optionId]) continue;
        
        const effectId = m_RandomOpt[optionId][2];
        
        if (!effectId) continue;
        
        // Special handling for effects 73 and 370 (subtract instead of add)
        if (effectId === 73 || effectId === 370) {
            PlayerApplyBonus(effectId, -optionValue);
        } else {
            PlayerApplyBonus(effectId, optionValue);
        }
    }
}

function CalculateEquipmentBonuses() {
    ParseItemScripts();

    let status = player.base_status;
    let bonus;

    // stat calculations
    if(player.equip[EQI.ARMOR] == 1825) { // witch's robe
        bonus = 0; // represents the type of bonus witchs robe gives
        if(n_A_JobClass() == JOB.MAGICIAN || n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass2() == JOB.SOUL_LINKER || player.status.job_id == JOB.NINJA || player.status.job_id == JOB.SUPERNOVICE)
            bonus = STAT.INT;
        else if(n_A_JobClass() == JOB.SWORDMAN || n_A_JobClass() == JOB.THIEF || n_A_JobClass() == JOB.MERCHANT || player.status.job_id == JOB.TAEKWON || player.status.job_id == JOB.STAR_GLADIATOR)
            bonus = STAT.STR;
        else if(n_A_JobClass() == JOB.ARCHER || n_A_JobClass() == JOB.GUNSLINGER)
            bonus = STAT.DEX;
        PlayerApplyBonus(bonus + 1, 2); // 2 of relevant stat
    }
    if(player.equip[EQI.HAND_R] == 1839 && player.refine[EQI.HAND_R] >= 7) // cursed jackknife
        PlayerApplyBonus(STAT.INT + 1, 3);
    if(player.equip[EQI.HAND_R] == 649) // berserk guitar
        PlayerApplyBonus(STAT.DEX + 1, player.status.dex);
    if(player.equip[EQI.HAND_R] == 1671) // kronos
        PlayerApplyBonus(STAT.INT + 1, Math.floor(player.refine[EQI.HAND_R] / 2));
    if(player.equip[EQI.HEAD_TOP] == 672 && n_A_JobClass() == JOB.TAEKWON) // magistrate hat
        PlayerApplyBonus(STAT.AGI + 1, 1);
    if(player.equip[EQI.HEAD_TOP] == 673 && n_A_JobClass() == JOB.TAEKWON) // ayam
        PlayerApplyBonus(STAT.INT + 1, 1);
    if(player.equip[EQI.HEAD_TOP] == 675 && n_A_JobClass() == JOB.TAEKWON) // bride mask
        PlayerApplyBonus(STAT.LUK + 1, 2);
    if(player.equip[EQI.HEAD_TOP] == 676 && n_A_JobClass() == JOB.TAEKWON) // mythical lion mask
        PlayerApplyBonus(STAT.DEX + 1, 2);
    if(player.equip[EQI.HEAD_MID] == 678 && n_A_JobClass() == JOB.TAEKWON) // hahoe mask
        PlayerApplyBonus(STAT.LUK + 1, 1);
    if(player.equip[EQI.HAND_R] == 1171 && SkillSearch(SKILL.SA_DRAGONOLOGY) >= 5) // staff of bordeaux
        PlayerApplyBonus(STAT.INT + 1, 3);
    if(player.equip[EQI.HAND_R] == 1168 && player.refine[EQI.HAND_R] >= 6) // dead tree cane staff
        PlayerApplyBonus(STAT.INT + 1, player.refine[EQI.HAND_R] - 5);
    if(player.equip[EQI.SHOES] == 717 && player.refine[EQI.SHOES] >= 9) // black leather boots
        PlayerApplyBonus(STAT.AGI + 1, 2);
    if(player.equip[EQI.HAND_R] == 1851 && player.refine[EQI.HAND_R] > 4) // dagger of evil spirits
        PlayerApplyBonus(STAT.DEX + 1, player.refine[EQI.HAND_R] - 4);
    if(player.equip[EQI.HAND_R] == 1905) { // brute arc wand
        if(player.status.dex < 50) {
            PlayerApplyBonus(STAT.DEX + 1, Math.floor(player.status.int / 2) - player.status.dex);
        } else {
            PlayerApplyBonus(STAT.INT + 1, 4);
            PlayerApplyBonus(STAT.DEX + 1, 3);
        }
    }
    if(player.equip[EQI.HEAD_MID] == 1670) { // sigruns wings
        bonus = 0; // represents the type of bonus sigrun's wings gives
        if(n_A_JobClass() == JOB.SWORDMAN || n_A_JobClass() == JOB.THIEF || n_A_JobClass() == JOB.MERCHANT || player.status.job_id == JOB.TAEKWON || player.status.job_id == JOB.STAR_GLADIATOR)
            bonus = STAT.STR;
        else if (n_A_JobClass() == JOB.MAGICIAN || n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass2() == JOB.SOUL_LINKER || player.status.job_id == JOB.NINJA)
            bonus = STAT.INT;
        else if(n_A_JobClass() == JOB.ARCHER || n_A_JobClass() == JOB.GUNSLINGER)
            bonus = STAT.DEX;
        PlayerApplyBonus(bonus + 1, 1); // 1 of relevant stat
    }
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.STALKER) { // save the king
        PlayerApplyBonus(STAT.VIT + 1, 3);
        PlayerApplyBonus(STAT.DEX + 1, 3);
    } 
    if(player.equip[EQI.GARMENT] == 1975 && (n_A_JobClass() == JOB.MAGICIAN || n_A_JobClass2() == JOB.PRIEST || n_A_JobClass2() == JOB.SOUL_LINKER)) // kings manteau
        PlayerApplyBonus(STAT.DEX + 1, -1);
    if(player.equip[EQI.HAND_R] == 2175 && n_A_JobClass2() == JOB.ALCHEMIST) // bandits saber
        PlayerApplyBonus(STAT.DEX + 1, 2);
    if(player.equip[EQI.HAND_R] == 1847) // hellfire whip
        PlayerApplyBonus(STAT.AGI + 1, Math.floor(player.status.vit / 20));
    if(player.equip[EQI.HAND_R] == 1846) // purifying trumpet
        PlayerApplyBonus(STAT.INT + 1, Math.floor(player.status.vit / 20));
    if(player.equip[EQI.HAND_R] == 1912) // sagittarius bow
        PlayerApplyBonus(STAT.STR + 1, player.refine[EQI.HAND_R]);
    if(player.equip[EQI.SHOES] == 1945 && player.status.vit >= 90) // vit temporal boots
        PlayerApplyBonus(STAT.VIT + 1, 1);
    if(player.equip[EQI.GARMENT] == 2008 && player.refine[EQI.GARMENT] >= 9) // ferlock's cloak
        PlayerApplyBonus(STAT.VIT + 1, 1);
    if(player.equip[EQI.HEAD_TOP] == 2086 && player.refine[EQI.HEAD_TOP] >= 5) // hat of fortune
        PlayerApplyBonus(STAT.LUK + 1, player.refine[EQI.HEAD_TOP] - 4);
    if(player.equip[EQI.HAND_R] == 2091) { // soul stick
        PlayerApplyBonus(STAT.INT + 1, player.refine[EQI.HAND_R]);
        PlayerApplyBonus(STAT.LUK + 1, player.refine[EQI.HAND_R]);
    }
    if(player.equip[EQI.SHOES] == 2170 && player.refine[EQI.SHOES] >= 9) // vigilante shoes
        PlayerApplyBonus(STAT.DEX + 1, 1);

    // flat atk calculations
    if(EquipNumSearch(1120) > 0 && n_A_JobClass() == JOB.ARCHER) // archer figure
        status.batk += 10 * EquipNumSearch(1120);
    if(EquipNumSearch(1122) > 0 && n_A_JobClass() == JOB.MERCHANT) // merchant figure
        status.batk += 5 * EquipNumSearch(1122);
    if(player.equip[EQI.HEAD_TOP] == 676 && n_A_JobClass() == JOB.TAEKWON) // mythical lion mask
        status.batk += player.refine[EQI.HEAD_TOP] * 2;
    if(player.equip[EQI.HAND_R] == 1165) // veteran axe
        status.batk += 20 * SkillSearch(SKILL.BS_VETERANAXE_MASTERY) + Math.floor(player.status.luk / 2) + Math.floor(player.status.dex / 3);
    if(EquipNumSearch(442) > 0 && player.status.agi >= 90) // rogue's treasure
        status.batk += 10 * EquipNumSearch(442);
    if(player.equip[EQI.HAND_R] == 621 && player.status.str >= 95) // doom slayer
        status.batk += 340;
    if(player.equip[EQI.HAND_R] == 1160 && player.status.str >= 95) // krasnaya
        status.batk += 20;
    if(player.equip[EQI.HAND_R] == 1164 && player.status.luk >= 90) // vecer axe
        status.batk += 20;
    if(EquipNumSearch(2079) > 0) { // paradise taekwon ring
        let bonus = 0;
        if(player.status.base_level >= 60)
            bonus = 10;
        else if(player.status.base_level >= 40)
            bonus = 25;
        else if (player.status.base_level >= 20)
            bonus = 50;
        else if (player.status.base_level >= 1)
            bonus = 75;
        status.batk += bonus * EquipNumSearch(2079);
    }
    if(player.equip[EQI.ARMOR] == 1875 && player.status.str < 80 && player.status.dex < 80) // white eco shirt
        status.batk += 20;
    if(player.equip[EQI.HEAD_TOP] == 953) // gigantic majestic goat
        status.batk += Math.floor((2 * player.status.job_level) / 7);
    if(player.equip[EQI.SHIELD] == 1830 && player.refine[EQI.SHIELD] >= 7) // cursed knight shield
        status.batk += 10;
    if(player.equip[EQI.SHOES] == 1943 && player.status.str >= 90) // str temporal boots
        status.batk += 12;
    if(player.equip[EQI.SHOES] == 1947 && player.status.dex >= 90) // dex temporal boots
        status.batk += 12;
    if(player.equip[EQI.HAND_R] == 1949 && player.refine[EQI.HAND_R] >= 9) // deaths dance
        status.batk += 10;
    if(EquipNumSearch(1956) > 0 && player.status.job_id == JOB.ASSASSIN_CROSS) // save the king
        status.batk += 60 * EquipNumSearch(1956);
    if(EquipNumSearch(2105) > 0) // crimson dagger
        status.batk += (player.refine[EQI.HAND_R] ** 2) * EquipNumSearch(2105);
    if(player.equip[EQI.HAND_R] >= 2106 && player.equip[EQI.HAND_R] <= 2111) // crimson weapons
        status.batk += player.refine[EQI.HAND_R] ** 2;
    if(player.equip[EQI.HAND_R] >= 2113 && player.equip[EQI.HAND_R] <= 2119) // crimson weapons
        status.batk += player.refine[EQI.HAND_R] ** 2;
    if(player.equip[EQI.HAND_R] >= 2121 && player.equip[EQI.HAND_R] <= 2123) // crimson weapons
        status.batk += player.refine[EQI.HAND_R] ** 2;
    if(EquipNumSearch(2124) > 0) // crimson axe
        status.batk += (player.refine[EQI.HAND_R] ** 2) * EquipNumSearch(2124);
    if(player.equip[EQI.HAND_R] == 2175 && player.status.job_id == JOB.ASSASSIN_CROSS) // bandit's saber
        status.batk += 4 * player.refine[EQI.HAND_R];
    if(player.equip[EQI.HAND_L] == 2175 && player.status.job_id == JOB.ASSASSIN_CROSS) // bandit's saber
        status.batk += 4 * player.refine[EQI.HAND_L];
    if(player.equip[EQI.HAND_R] == 2178 && player.status.job_id == JOB.WHITESMITH) // mine worker's pickaxe
        status.batk += 50;

    // max hp calculations

    if(EquipNumSearch(1116) > 0 && n_A_JobClass() == JOB.NOVICE) // novice figure
        status.max_hp += 30 * EquipNumSearch(1116);
    if(EquipNumSearch(1117) > 0 && n_A_JobClass() == JOB.SWORDMAN) // swordsman figure
        status.max_hp += 150 * EquipNumSearch(1117);
    if(player.equip[EQI.ARMOR] == 1864) // elegant suit
        status.max_hp += (25 * Math.floor(player.status.job_level / 9)) - (15 * Math.floor(player.status.vit / 10));
    if(player.equip[EQI.SHOES] == 836) // diabolus boots
        status.max_hp += 10 * player.status.base_level;
    if(player.equip[EQI.ARMOR] == 859) // brynhild
        status.max_hp += 20 * player.status.base_level;
    if(player.equip[EQI.ARMOR] == 986) // chameleon armor
        status.max_hp += 7 * player.status.base_level;
    if(CardNumSearch(225) > 0 && player.refine[EQI.ARMOR] >= 9) // apocalypse card
        status.max_hp += 800;
    if(player.equip[EQI.HAND_R] == 1168 && player.refine[EQI.HAND_R] >= 6) // dead tree cane staff
        status.max_hp -= 200 * (player.refine[EQI.HAND_R] - 5);
    if(player.equip[EQI.SHIELD] == 1960) // imperial guard
        status.max_hp += 30 * player.refine[EQI.SHIELD];
    if(player.equip[EQI.HEAD_TOP] == 955) // mandragora cap
        status.max_hp += 50 * player.refine[EQI.HEAD_TOP];
    if(player.equip[EQI.HEAD_MID] == 1670 && n_A_JobClass() == JOB.NOVICE) // sigruns wings
        status.max_hp += 80;
    if(EquipNumSearch(2085)) // survivor's shoes combo
        status.max_hp += 50 * player.refine[EQI.SHOES];
    if(EquipNumSearch(2087)) // time guardian ring
        status.max_hp += 5 * Math.floor(player.status.base_level / 2) * EquipNumSearch(2087);
    if(player.equip[EQI.HAND_R] == 2099) // guardian staff
        status.max_hp += 80 * player.refine[EQI.HAND_R];
    if(player.equip[EQI.HAND_R] == 2174) // elemental origin
        status.max_hp += 50 * player.refine[EQI.HAND_R];
    if(player.equip[EQI.SHOES] == 536 && (n_A_JobClass() == JOB.MAGICIAN || n_A_JobClass() == JOB.ARCHER || n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass() == JOB.GUNSLINGER)) // valkyrie shoes
        status.max_hp += 5 * player.status.base_level;

    // max hp % calculations

    if(player.equip[EQI.SHOES] == 715) // variant shoes
        player.hprate -= player.refine[EQI.SHOES];
    if(player.equip[EQI.HAND_R] == 1845 && player.refine[EQI.HAND_R] >= 7) // kagekiri
        player.hprate += 10;
    if(player.equip[EQI.SHOES] == 1945 && player.status.vit >= 90) // vit temporal boots
        player.hprate += 12;
    
    // flat max sp calculations

    if(EquipNumSearch(1118) > 0 && n_A_JobClass() == JOB.ACOLYTE) // acolyte figure
        status.max_sp += 50 * EquipNumSearch(1118);
    if(EquipNumSearch(1116) > 0 && n_A_JobClass() == JOB.NOVICE) // novice figure
        status.max_sp += 30 * EquipNumSearch(1116);
    if(player.equip[EQI.ARMOR] == 859) // brynhild
        status.max_sp += 5 * player.status.base_level;
    if(player.equip[EQI.ARMOR] == 986) // chameleon armor
        status.max_sp += Math.floor(player.status.base_level / 2);
    if(player.equip[EQI.HAND_R] == 1671) // kronos
        status.max_sp += 50 * Math.floor(player.refine[EQI.HAND_R] / 2);
    if(player.equip[EQI.GARMENT] == 1193) // nydhorgg's shadow garb
        status.max_sp += Math.floor(player.status.base_level / 3) + 10 * player.refine[EQI.GARMENT];
    if(player.equip[EQI.HAND_R] == 642 && player.refine[EQI.HAND_R] >= 9) // lich's bone wand
        status.max_sp += 300;
    if(player.equip[EQI.HAND_R] == 1168 && player.refine[EQI.HAND_R] >= 6) // dead tree cane staff
        status.max_sp -= 100 * (player.refine[EQI.HAND_R] - 5);
    if(player.equip[EQI.SHOES] == 1866) // elegant shoes
        status.max_sp += (10 * Math.flooor(player.status.base_level / 10)) - (5 * Math.floor(player.status.int / 10));
    if(player.equip[EQI.SHIELD] == 1960 && player.status.job_id == JOB.SUPERNOVICE) // imperial guard
        status.max_sp += 150;
    if(player.equip[EQI.HEAD_MID] == 1670 && n_A_JobClass() == JOB.NOVICE) // sigruns wings
        status.max_sp += 30;
    if(player.equip[EQI.SHOES] == 536 && (n_A_JobClass() == JOB.SWORDMAN || n_A_JobClass() == JOB.THIEF || n_A_JobClass() == JOB.MERCHANT)) // valkyrie shoes
        status.max_sp += 2 * player.status.job_level;

    // max sp % calculations

    if(player.equip[EQI.SHOES] == 715) // variant shoes
        player.sprate -= player.refine[EQI.SHOES];


    // flat def calculations

    if(player.equip[EQI.HAND_R] == 521) { // luna bow
        bonus = 0;
        if(player.refine[EQI.HAND_R] >= 6)
            bonus += 3;
        if(player.refine[EQI.HAND_R] >= 9)
            bonus += 2;
        status.def += bonus;
    }
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.WHITESMITH) // save the king
        status.def += 5;
    if(EquipNumSearch(1117) && n_A_JobClass() == JOB.SWORDMAN) // swordsman figure
        status.def += 2 * EquipNumSearch(1117);
    if(player.equip[EQI.HAND_R] == 658) // gate keeper-dd
        status.def += player.refine[EQI.HAND_R];
    if(player.equip[EQI.SHOES] == 715) // variant shoes
        status.def += Math.floor(player.refine[EQI.SHOES] / 2);
    if(player.equip[EQI.HAND_R] == 942) // cardo
        status.def += Math.floor(player.refine[EQI.HAND_R] / 2);
    if(EquipNumSearch(764)) // friggs circlet + valk shield combo
        status.def -= player.refine[EQI.HEAD_TOP] + player.refine[EQI.SHIELD];
    if(EquipNumSearch(742) && n_A_JobClass() == JOB.SWORDMAN) // odin blessing + magnis cap + stone buckler combo
        status.def += 6;
    if(player.equip[EQI.ARMOR] == 986 && (n_A_JobClass() == JOB.SWORDMAN || n_A_JobClass() == JOB.MERCHANT || n_A_JobClass() == JOB.THIEF)) // chameleon armor
        status.def += 3;
    if(TimeItemNumSearch(8)) // ulfhedinn temp effect
        status.def += 20;
    if(TimeItemNumSearch(19)) // mithril magic cape
        status.def -= 20;

    // flat mdef calculations

    if(player.equip[EQI.GARMENT] == 1865) // elegant manteau
        status.mdef += Math.floor(player.status.job_level / 9);
    if(player.equip[EQI.SHOES] == 1943 && player.status.str >= 90) // str temporal boots
        status.mdef += 3;
    if(player.equip[EQI.SHOES] == 1944 && player.status.agi >= 90) // agi temporal boots
        status.mdef += 3;
    if(player.equip[EQI.SHOES] == 1945 && player.status.vit >= 90) // vit temporal boots
        status.mdef += 5;
    if(player.equip[EQI.SHOES] == 1946 && player.status.int >= 90) // int temporal boots
        status.mdef += 3;
    if(player.equip[EQI.SHOES] == 1947 && player.status.dex >= 90) // dex temporal boots
        status.mdef += 3;
    if(EquipNumSearch(764)) // friggs circlet + valk shield combo
        status.mdef += player.refine[EQI.HEAD_TOP] + player.refine[EQI.SHIELD];
    if(player.equip[EQI.HAND_R] == 1169) // la'cryma stick
        status.mdef += player.refine[EQI.HAND_R];
    if(player.equip[EQI.HEAD_TOP] == 809) // leaf cat hat
        status.mdef += player.refine[EQI.HEAD_TOP];
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.WHITESMITH) // save the king
        status.mdef += 5;
    if(player.equip[EQI.ARMOR] == 986 && (n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass() == JOB.ARCHER || n_A_JobClass() == JOB.MAGICIAN || n_A_JobClass() == JOB.GUNSLINGER || n_A_JobClass2() == JOB.SOUL_LINKER)) // chameleon armor
        status.mdef += 5;
    if(TimeItemNumSearch(8)) // ulfhedinn temp effect
        status.mdef -= 20;
    if(TimeItemNumSearch(19)) // mithril magic cape
        status.mdef += 20;

    // flat hit calculations

    if(EquipNumSearch(1005) > 0 && EquipNumSearch(442)) // rogues treasure + black cat combo
        status.hit += Math.floor(player.refine[EQI.HAND_R] / 2);
    if(player.equip[EQI.HAND_R] == 1176 && SkillSearch(SKILL.AS_KATAR) == 10) // chakram
        status.hit += 10;

    // flat flee calculations

    if(player.equip[EQI.HAND_R] == 483) // bloody roar
        status.flee -= player.status.agi + player.status.base_level;
    if(EquipNumSearch(442) && player.status.str >= 90) // rogues treasure
        status.flee += 10 * EquipNumSearch(442);
    if(TimeItemNumSearch(1)) // isilla temp effect
        status.flee += 30 * TimeItemNumSearch(1);

    // flat perfect dodge calculations

    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.STALKER) // save the king
        status.flee2 += 10;
    if(player.equip[EQI.SHIELD] == 2089 && player.refine[EQI.SHIELD] >= 4) // time keeper shield
        status.flee2 += player.refine[EQI.SHIELD] - 4;
    if(player.equip[EQI.HAND_R] == 2174) // elemental origin
        status.flee2 += player.refine[EQI.HAND_R] * 2;
    if(player.equip[EQI.GARMENT] == 535 && (n_A_JobClass() == JOB.MAGICIAN || n_A_JobClass() == JOB.ARCHER || n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass() == JOB.GUNSLINGER || n_A_JobClass2() == JOB.SOUL_LINKER))
        status.flee2 += player.refine[EQI.GARMENT] * 2;
    if(player.equip[EQI.HEAD_MID] == 678 && n_A_JobClass() == JOB.TAEKWON) // hahoe mask
        status.flee2 += 2;

    // flat crit calculations

    if(player.equip[EQI.ARMOR] == 689) // sniping suit
        status.cri += Math.floor(player.status.luk / 10) * 10;
    if(player.equip[EQI.HAND_R] == 623) // heart breaker
        status.cri += player.refine[EQI.HAND_R] * 10;
    if(player.equip[EQI.HAND_R] == 1161) // veteran hammer
        status.cri += (2 * SkillSearch(SKILL.PR_MACEMASTERY)) * 10;
    if(player.equip[EQI.HEAD_TOP] == 1823) { // mercury riser
        bonus = 0;
        if(player.refine[EQI.HEAD_TOP] >= 5)
            bonus += 10;
        if(player.refine[EQI.HEAD_TOP] >= 7)
            bonus += 10;
        status.cri += bonus;
    }
    if(EquipNumSearch(442) > 0 && player.status.agi >= 90) // rogue's treasure
        status.cri += (10 * EquipNumSearch(442)) * 10;
    if(player.equip[EQI.HAND_R] == 1164 && player.status.luk >= 90) // vecer axe
        status.cri += 50;
    if(player.equip[EQI.HEAD_TOP] == 675 && n_A_JobClass() == JOB.TAEKWON) // bride mask
        status.cri += 50;
    if(player.equip[EQI.SHOES] == 1948) // luk temporal boots
        status.cri += Math.floor(player.status.luk / 10) * 10;
    if(player.equip[EQI.HEAD_TOP] == 1898) { // ascendant crown
        bonus = 0;
        if(player.refine[EQI.HEAD_TOP] >= 5)
            bonus += 10;
        if(player.refine[EQI.HEAD_TOP] >= 7)
            bonus += 20;
        if(player.refine[EQI.HEAD_TOP] >= 9)
            bonus += 20;
        status.cri += bonus;
    }
    if(player.equip[EQI.HAND_R] == 2147) // claw sword
        status.cri += player.refine[EQI.HAND_R] * 2 * 10;
    if(player.equip[EQI.HAND_R] == 2152) // calf kingcobra
        status.cri += (player.refine[EQI.HAND_R] * 4 + Math.floor(player.status.luk / 10) * 4) * 10;
    if(player.equip[EQI.HAND_R] == 2207) // encyclopedia
        status.cri += Math.floor((player.status.luk * 2) / 10) * 10;

    // flat matk calculations

    if(EquipNumSearch(1493) > 0) // skull cap + weapon combo
        player.bonus.ematk += 10 * player.refine[EQI.HAND_R];
    if(player.equip[EQI.HAND_R] == 1872) // large foxtail staff
        player.bonus.ematk -= 10 * Math.floor(player.status.base_level / 20);
    if(player.equip[EQI.ARMOR] == 1875 && player.status.int < 80) // white eco shirt
        player.bonus.ematk += 20;
    if(EquipNumSearch(1970) > 0 && player.status.str >= 90) // bishop's necklace
        player.bonus.ematk += 50 * EquipNumSearch(1970);

    // matk% calculations
    if(player.equip[EQI.HAND_R] == 646) // staff of destruction
        player.matk_rate += Math.floor(player.refine[EQI.HAND_R] / 2);
    if(player.equip[EQI.HAND_R] == 1173) // dea staff
        player.matk_rate += Math.floor(player.refine[EQI.HAND_R] / 2);
    if(EquipNumSearch(737) > 0) // survivors rod combo
        player.matk_rate += player.refine[EQI.HAND_R];
    if(EquipNumSearch(1042) > 0) // gentleman set
        player.matk_rate += player.refine[EQI.HAND_R];
    if(player.equip[EQI.ARMOR] == 1825 && (n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass() == JOB.MAGICIAN || n_A_JobClass2() == JOB.SOUL_LINKER || player.status.job_id == JOB.NINJA || player.status.job_id == JOB.SUPERNOVICE)) // witchs robe
        player.matk_rate += 3;
    if(player.equip[EQI.HAND_R] == 1842) // tome of evil
        player.matk_rate += Math.floor(player.status.int / 15);
    if(player.equip[EQI.HAND_R] == 1905 && player.status.dex >= 50) // brute arc wand
        player.matk_rate += 5;
    if(player.equip[EQI.HAND_R] == 484 && player.status.int >= 70) // sages diary
        player.matk_rate += 5;
    if(player.equip[EQI.HEAD_TOP] == 1492) { // skull cap
        bonus = 0;
        if(player.refine[EQI.HEAD_TOP] >= 5)
            bonus += 3;
        if(player.refine[EQI.HEAD_TOP] >= 7)
            bonus += 3;
        player.matk_rate += bonus;
    }
    if(player.equip[EQI.HEAD_TOP] == 565 && player.refine[EQI.HEAD_TOP] >= 7) // dress hat
        player.matk_rate += 1;
    if(player.equip[EQI.HEAD_TOP] == 1832 && player.refine[EQI.HEAD_TOP] >= 7) // drooping neko crew
        player.matk_rate += 4;
    if(player.equip[EQI.HAND_R] == 642 && player.refine[EQI.HAND_R] >= 9) // lich's bone wand
        player.matk_rate += 3;
    if(player.equip[EQI.HAND_R] == 1950) { // save the queen
        bonus = 0;
        if(n_A_JobClass2() == JOB.PRIEST)
            bonus -= 5;
        if(player.refine[EQI.HAND_R] >= 9)
            bonus += 10;
        player.matk_rate += bonus;
    }
    if(player.equip[EQI.HAND_R] == 2163 && player.refine[EQI.HAND_R] >= 9) // iron staff
        player.matk_rate += 5;
    if(player.equip[EQI.HEAD_TOP] == 1962 && player.refine[EQI.HEAD_TOP] >= 9) // spell circuit
        player.matk_rate += 2;
    if(player.equip[EQI.HEAD_TOP] == 1972 && player.refine[EQI.HEAD_TOP] >= 9) // duke's silk hat
        player.matk_rate += 2;
    if(player.equip[EQI.HEAD_TOP] == 1898) { // ascendant crown
        bonus = 0;
        if(player.refine[EQI.HEAD_TOP] >= 5)
            bonus += 1;
        if(player.refine[EQI.HEAD_TOP] >= 7)
            bonus += 1;
        if(player.refine[EQI.HEAD_TOP] >= 9)
            bonus += 1;
        player.matk_rate += bonus;
    }
    if(EquipNumSearch(2085) > 0 && player.refine[EQI.SHOES] >= 9) // survivors rod + shoes combo
        player.matk_rate += 5;

    // speed calculation

    if(EquipNumSearch(763) > 0) // eagle wing + wing staff
        player.bonus.speed_rate = Math.min(player.bonus.speed_rate, -25);

    // aspd% calculations

    if(player.equip[EQI.HAND_R] == 624) // hurricane fury
        status.aspd_rate -= (player.refine[EQI.HAND_R]) * 10;
    if(player.equip[EQI.HAND_R] == 641) // ledger of death
        status.aspd_rate -= (player.refine[EQI.HAND_R]) * 10;
    if(player.equip[EQI.HAND_R] == 654) // wasteland's outlaw
        status.aspd_rate -= (Math.floor(player.status.agi / 14)) * 10;
    if(player.equip[EQI.HAND_R] == 484 && player.status.str >= 50) // sages diary
        status.aspd_rate -= 5 * 10;
    if(player.equip[EQI.HAND_R] == 944 && player.status.str >= 77) // lunakaligo
        status.aspd_rate -= 4 * 10;
    if(player.equip[EQI.HAND_R] == 621 && player.status.str >= 95) // doom slayer
        status.aspd_rate -= (-40) * 10;
    if(player.equip[EQI.HAND_R] == 1167 && player.status.str >= 95) // giant axe
        status.aspd_rate -= 3 * 10;
    if(EquipNumSearch(855) > 0 && player.status.job_id == JOB.LORD_KNIGHT) // tournament shield system set
        status.aspd_rate -= (-5) * 10;
    if(EquipNumSearch(1121) > 0 && n_A_JobClass() == JOB.THIEF) // thief figure
        status.aspd_rate -= (3 * EquipNumSearch(1121)) * 10;
    if(EquipNumSearch(1004) > 0) // cold heart set
        status.aspd_rate -= (Math.floor(player.refine[EQI.HAND_R] / 2)) * 10;
    if(player.equip[EQI.HAND_R] == 1842) // tome of evil
        status.aspd_rate -= (Math.floor(player.status.agi / 10)) * 10;
    if(player.equip[EQI.HEAD_TOP] == 1823) { // mercury riser
        bonus = 0;
        if(player.refine[EQI.HEAD_TOP] >= 5)
            bonus += 1;
        if(player.refine[EQI.HEAD_TOP] >= 7)
            bonus += 1;
        status.aspd_rate -= bonus * 10;
    }
    if((player.equip[EQI.HAND_R] == 1849 || player.equip[EQI.HAND_R] == 2102) && player.refine[EQI.HAND_R] >= 7) // undead shot
        status.aspd_rate -= 5 * 10;
    if(player.equip[EQI.SHOES] == 1944 && player.status.agi >= 90) // agi temporal boots
        status.aspd_rate -= 5 * 10;
    if(EquipNumSearch(1956) > 0 && player.status.job_id == JOB.ASSASSIN_CROSS) // save the king
        status.aspd_rate -= (7 * EquipNumSearch(1956)) * 10;
    if(player.equip[EQI.HAND_R] == 1949 && player.refine[EQI.HAND_R] >= 9) // deaths dance
        status.aspd_rate -= 2 * 10;
    if(player.equip[EQI.HEAD_TOP] == 1962 && player.refine[EQI.HEAD_TOP] >= 9) // spell circuit
        status.aspd_rate -= 2 * 10;
    if(player.equip[EQI.HEAD_TOP] == 1898) { // ascendant crown
        bonus = 0;
        if(player.refine[EQI.HEAD_TOP] >= 5)
            bonus += 1;
        if(player.refine[EQI.HEAD_TOP] >= 7)
            bonus += 2;
        if(player.refine[EQI.HEAD_TOP] >= 9)
            bonus += 2;
        status.aspd_rate -= bonus * 10;
    }
    if(player.equip[EQI.HAND_R] == 1966) // repentance
        status.aspd_rate -= (player.refine[EQI.HAND_R]) * 10;
    if(player.equip[EQI.HAND_R] == 2154 && player.refine[EQI.HAND_R] >= 7) // calf diamondback
        status.aspd_rate -= 5 * 10;
    
    // cast time calculations

    if(EquipNumSearch(750) > 0) // spiritual ring + staff combo
        player.castrate += -(player.refine[EQI.HAND_R]);
    if(EquipNumSearch(1006) > 0) // black cat set
        player.castrate += -(Math.floor(player.refine[EQI.HAND_R] / 2));
    if(EquipNumSearch(1493) > 0 && player.refine[EQI.HAND_R] == 10) // skull cap + weapon combo
        player.castrate += -10;

    // skill specific cast time calculations
    if(player.equip[EQI.HAND_R] == 1169 && player.refine[EQI.HAND_R] == 10) // la'cryma stick
        PlayerBonusItemBonus(player.skillcastrate, SKILL.WZ_STORMGUST, -8);
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.LORD_KNIGHT) // save the king
        PlayerBonusItemBonus(player.skillcastrate, SKILL.KN_BOWLINGBASH, -10 * player.refine[EQI.HAND_R]);
    
    // after cast delay calculations
    if(player.equip[EQI.HAND_R] == 936) // thorn staff of darkness
        player.bonus.delayrate += -(Math.floor(3 * player.refine[EQI.HAND_R] / 2));
    if(player.equip[EQI.HAND_R] == 934 && player.refine[EQI.HAND_R] >= 9) // tae goo lynn
        player.bonus.delayrate += -20;
    if(player.equip[EQI.HAND_R] == 1839 && player.refine[EQI.HAND_R] >= 7) // cursed jackknife
        player.bonus.delayrate += -10;
    if(player.equip[EQI.HAND_R] == 1843 && player.refine[EQI.HAND_R] >= 7) // demon slayer
        player.bonus.delayrate += -5;
    if(EquipNumSearch(1119) > 0 && n_A_JobClass() == JOB.MAGICIAN) // magician figure
        player.bonus.delayrate += -(5 * EquipNumSearch(1119));
    if(player.equip[EQI.HAND_R] == 2155 && player.refine[EQI.HAND_R] >= 7) // calf python
        player.bonus.delayrate += -10;
    if(TimeItemNumSearch(33) > 0) // rata temp effect
        player.bonus.delayrate += -20 * TimeItemNumSearch(33);

    // skill specific after cast delay calculations
    if(EquipNumSearch(1838) > 0) // evil jester hat + clown nose combo
        PlayerBonusItemBonus(player.skilldelay, SKILL.ASC_BREAKER, -750);
    if(player.equip[EQI.HAND_R] == 2091) // soul stick
        PlayerBonusItemBonus(player.skilldelay, SKILL.PR_TURNUNDEAD, -1500);
    if(EquipNumSearch(2145) > 0) // ring of archbishop
        PlayerBonusItemBonus(player.skilldelay, SKILL.AL_HEAL, -500);

    // % hp regen calculations

    if(player.equip[EQI.HEAD_TOP] == 672 && n_A_JobClass() == JOB.TAEKWON) // magistrate hat
        player.hprecov_rate += 3;

    // % sp regen calculations
    
    if(player.equip[EQI.HEAD_TOP] == 672 && n_A_JobClass() == JOB.TAEKWON) // magistrate hat
        player.sprecov_rate += 3;

    // crit damage calculations

    if(player.equip[EQI.HEAD_TOP] == 1823) { // mercury riser
        bonus = 0;
        if(player.refine[EQI.HEAD_TOP] >= 5)
            bonus += 1;
        if(player.refine[EQI.HEAD_TOP] >= 7)
            bonus += 1;
        player.bonus.crit_atk_rate += bonus;
    }
    if(player.equip[EQI.HEAD_TOP] == 1833 && player.refine[EQI.HEAD_TOP] >= 7) // evil marching hat
        player.bonus.crit_atk_rate += 10;
    if(player.equip[EQI.SHOES] == 1948) // luk temporal boots
        player.bonus.crit_atk_rate += Math.floor(player.status.luk / 10);
    if(player.equip[EQI.HAND_R] == 1951 && player.refine[EQI.HAND_R] >= 9) // kingdom keyblade
        player.bonus.crit_atk_rate += 10;
    if(player.equip[EQI.HAND_R] == 2147 && player.refine[EQI.HAND_R] >= 9) // claw sword
        player.bonus.crit_atk_rate += 5;
    if(player.equip[EQI.HAND_R] == 2152 && player.refine[EQI.HAND_R] >= 9) // calf kingcobra
        player.bonus.crit_atk_rate += 5;
    if(player.equip[EQI.HAND_R] == 1966 && player.status.luk >= 40) // repentance
        player.bonus.crit_atk_rate += 10;

    // long range atk calculations

    if(player.equip[EQI.HAND_R] == 626 && player.arrow == 2) // burning bow + fire arrow combo
        player.bonus.long_attack_atk_rate += 25;
    if(player.equip[EQI.HAND_R] == 627 && player.arrow == 5) // frozen bow + crystal arrow combo
        player.bonus.long_attack_atk_rate += 25;
    if(player.equip[EQI.HAND_R] == 628 && player.arrow == 4) // earth bow + stone arrow combo
        player.bonus.long_attack_atk_rate += 25;
    if(player.equip[EQI.HAND_R] == 629 && player.arrow == 6) // gust bow + wind arrow combo
        player.bonus.long_attack_atk_rate += 25;
    if(player.equip[EQI.HAND_R] == 630 && player.arrow == 10) // orc archer bow + steel arrow combo
        player.bonus.long_attack_atk_rate += 25;
    if(player.equip[EQI.HAND_R] == 1846 && (player.arrow == 1 || player.arrow == 16)) // purifying trumpet + silver/holy arrow combo
        player.bonus.long_attack_atk_rate += 15;
    if(player.equip[EQI.HAND_R] == 1847 && (player.arrow == 2 || player.arrow == 7)) // hellfire whip + fire/shadow arrow combo
        player.bonus.long_attack_atk_rate += 15;
    if(player.equip[EQI.HAND_R] == 2151) { // calf deathadder
        bonus = Math.floor(player.refine[EQI.HAND_R] / 2);

        if(player.refine[EQI.HAND_R] >= 9)
            bonus += 5;
        player.bonus.long_attack_atk_rate += bonus;
    }
    if(player.equip[EQI.HAND_R] == 2153) { // calf anaconda
        bonus = player.refine[EQI.HAND_R];

        if(player.refine[EQI.HAND_R] >= 9)
            bonus += 5;
        player.bonus.long_attack_atk_rate += bonus;
    }
    if(player.equip[EQI.HAND_R] == 2154) { // calf diamondback
        bonus = player.refine[EQI.HAND_R];

        if(player.refine[EQI.HAND_R] >= 9)
            bonus += 5;
        player.bonus.long_attack_atk_rate += bonus;
    }
    if(player.equip[EQI.HAND_R] == 2155) { // calf python
        bonus = player.refine[EQI.HAND_R];

        if(player.refine[EQI.HAND_R] >= 9)
            bonus += 5;
        player.bonus.long_attack_atk_rate += bonus;
    }
    if(player.equip[EQI.HAND_R] == 2162) // metal stick
        player.bonus.long_attack_atk_rate += player.refine[EQI.HAND_R] * 2;
    if(player.equip[EQI.HAND_R] == 2124) // crimson axe
        player.bonus.long_attack_atk_rate += player.refine[EQI.HAND_R];
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.CREATOR) // save the king
        player.bonus.long_attack_atk_rate += 10;
    if(player.equip[EQI.HAND_R] == 1953 && player.status.int >= 90) // royal guards bow
        player.bonus.long_attack_atk_rate += 20;
    if(player.equip[EQI.SHOES] == 1947 && player.status.dex >= 90) // dex temporal boots
        player.bonus.long_attack_atk_rate += 5;
    if((player.equip[EQI.GARMENT] == 796 || player.equip[EQI.GARMENT] == 1836) && player.refine[EQI.GARMENT] >= 7) // skeleton manteau
        player.bonus.long_attack_atk_rate += 5;
    if(player.equip[EQI.ARMOR] == 1825 && (n_A_JobClass() == JOB.ARCHER || n_A_JobClass() == JOB.GUNSLINGER)) // witchs robe
        player.bonus.long_attack_atk_rate += 3;

    // outgoing healing calculations
    if(player.equip[EQI.HAND_R] == 1161) // veteran hammer
        player.bonus.add_heal_rate += SkillSearch(SKILL.AL_DP);
    if(EquipNumSearch(1118) > 0 && n_A_JobClass() == JOB.ACOLYTE) // acolyte figure
        player.bonus.add_heal_rate += 5 * EquipNumSearch(1118);
    if(player.equip[EQI.HEAD_TOP] == 1768 && player.refine[EQI.HEAD_TOP] >= 7) // benevolent guardian
        player.bonus.add_heal_rate += 3;
    if(EquipNumSearch(1769) > 0) // benevolent healing set
        player.bonus.add_heal_rate += player.refine[EQI.HAND_R];
    if(player.equip[EQI.HAND_R] == 644) // healing staff
        player.bonus.add_heal_rate += Math.floor((player.refine[EQI.HAND_R] * 3) / 2);
    if(player.equip[EQI.SHIELD] == 1914 && player.card[10] == 513) // rhyncho card + rose of eden combo
        player.bonus.add_heal_rate += 5;
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.CREATOR) // save the king
        player.bonus.add_heal_rate += 10;
    if(player.equip[EQI.HAND_R] == 2148) // rubber hammer
        player.bonus.add_heal_rate += Math.floor(player.status.vit / 3);
    if(player.equip[EQI.HEAD_TOP] == 565 && player.refine[EQI.HEAD_TOP] >= 7) // dress hat
        player.bonus.add_heal_rate += 1;

    // received healing calculations

    if(player.equip[EQI.SHOES] == 1945 && player.status.vit >= 90) // vit temporal boots
        player.bonus.add_heal2_rate += 15;
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.WHITESMITH) // save the king
        player.bonus.add_heal2_rate += 20;
        
    // misc calculations

    if(player.equip[EQI.GARMENT] == 2098) // angry bear bag
        player.indexed_bonus.subclass[CLASS.ALL] -= player.refine[EQI.GARMENT];
    
    // size damage reduction calculations

    if(EquipNumSearch(2185)) { // metal stick + falcon muffler combo
        player.indexed_bonus.subsize[SZ.ALL] += player.refine[EQI.GARMENT];
        player.indexed_bonus.subele[ELE.NEUTRAL] += player.refine[EQI.GARMENT] * 2;
    }
    if(EquipNumSearch(2186))  // mine worker's pickaxe + kings manteau combo
        player.indexed_bonus.subsize[SZ.ALL] += player.refine[EQI.GARMENT];
    if(player.equip[EQI.HAND_R] == 624) // hurricane fury
        player.indexed_bonus.subsize[SZ.MEDIUM] += player.refine[EQI.HAND_R];

    // elemental reduction calculations
    if(EquipNumSearch(737)) // survivior rod combo
        player.indexed_bonus.subele[ELE.NEUTRAL] += player.refine[EQI.GARMENT] * 3;

    // atk% calculations
    if(player.equip[EQI.ARMOR] == 1825 && (n_A_JobClass() == JOB.SWORDMAN || n_A_JobClass() == JOB.THIEF || n_A_JobClass() == JOB.MERCHANT || player.status.job_id == JOB.TAEKWON || player.status.job_id == JOB.STAR_GLADIATOR))
        player.indexed_bonus.addclass[CLASS.ALL] += 3;
    if(player.equip[EQI.HEAD_TOP] == 1973 && player.refine[EQI.HEAD_TOP] >= 9) // khalitzburg knight helm
        player.indexed_bonus.addclass[CLASS.ALL] += 2;
    if(player.equip[EQI.HEAD_TOP == 565] && player.refine[EQI.HEAD_TOP] >= 7) // dress hat
        player.indexed_bonus.addclass[CLASS.ALL] += 1;
    if(player.equip[EQI.GARMENT] == 2098) // angry bear bag
        player.indexed_bonus.addclass[CLASS.ALL] += Math.floor(player.refine[EQI.GARMENT] / 2);
    if(EquipNumSearch(2105) > 0) { // crimson dagger
        if(player.equip[EQI.HAND_R] == 2105)
            player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 6;
        if(player.equip[EQI.HAND_L] == 2105)
            player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_L] * 6;
    }
    if((player.equip[EQI.HAND_R] >= 2106 && player.equip[EQI.HAND_R] <= 2107)) // crimson bow + katar
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 6;
    if(player.equip[EQI.HAND_R] == 2108)
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 7; // crimson bible
    if((player.equip[EQI.HAND_R] >= 2109 && player.equip[EQI.HAND_R] <= 2111))
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 6; // crimson huuma + mace + knuckle
    if((player.equip[EQI.HAND_R] >= 2113 && player.equip[EQI.HAND_R] <= 2114)) // crimson revolver + shotgun
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 6;
    if(player.equip[EQI.HAND_R] == 2115) // crimson launcher
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 5;
    if(player.equip[EQI.HAND_R] == 2116) // crimson rifle
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 6;
    if(player.equip[EQI.HAND_R] == 2117) // crimson gatling
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 5;
    if(player.equip[EQI.HAND_R] == 2118) // crimson violin
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 6;
    if(player.equip[EQI.HAND_R] == 2119) // crimson staff
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 6;
    if(player.equip[EQI.HAND_R] == 2121) // crimson saber
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 6;
    if(player.equip[EQI.HAND_R] == 2122) // crimson two handed sword
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 7;
    if(player.equip[EQI.HAND_R] == 2123) // crimson spear
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 6;
    if(player.equip[EQI.HAND_R] == 2124) // crimson axe
        player.indexed_bonus.addclass[CLASS.ALL] += player.refine[EQI.HAND_R] * 5;
    if(EquipNumSearch(1956) > 0 && player.status.job_id == JOB.ASSASSIN_CROSS) // save the king
        player.indexed_bonus.addclass[CLASS.ALL] += -30 * EquipNumSearch(1956);
    if(EquipNumSearch(2175) > 0 && player.status.job_id == JOB.ASSASSIN_CROSS) // bandits saber
        player.indexed_bonus.addclass[CLASS.ALL] += -30 * EquipNumSearch(2175);

    // magic subsize calculations

    if(player.equip[EQI.ARMOR] == 2007) // ferlocks armor
        player.indexed_bonus.magic_subsize[SZ.MEDIUM] += player.refine[EQI.ARMOR];

    // boss damage calculations
    if(player.equip[EQI.HAND_R] == 2177) // platinum dagger
        player.indexed_bonus.addclass[CLASS.BOSS] += player.refine[EQI.HAND_R] * 3;

    // status resistance calculations
    if(player.equip[EQI.ARMOR] == 534) { // valkyrie armor
        if(n_A_JobClass() == JOB.MAGICIAN || n_A_JobClass() == JOB.ARCHER || n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass() == JOB.GUNSLINGER || n_A_JobClass2() == JOB.SOUL_LINKER)
            PlayerBonusItemBonus(player.reseff, EFF.SILENCE, 50);
        else if(n_A_JobClass() == JOB.SWORDMAN || n_A_JobClass() == JOB.THIEF)
            PlayerBonusItemBonus(player.reseff, EFF.STUN, 50);
    }
    if(player.equip[EQI.HEAD_TOP] == 828) { // dark bacilicum
        PlayerBonusItemBonus(player.reseff, EFF.STONE, player.refine[EQI.HEAD_TOP] * 2);
        PlayerBonusItemBonus(player.reseff, EFF.FREEZE, player.refine[EQI.HEAD_TOP] * 2);
        PlayerBonusItemBonus(player.reseff, EFF.STUN, player.refine[EQI.HEAD_TOP] * 2);
    }
    if(player.equip[EQI.HEAD_TOP] == 2080 && CardNumSearch(74) > 0) // pink poo poo hat + steel chonchon card
        PlayerBonusItemBonus(player.reseff, EFF.FREEZE, 100);

    // def pierce calculations
    if(player.equip[EQI.SHOES] == 1943 && player.status.str >= 90) // str temporal boots
        player.indexed_bonus.ignore_def_by_class[CLASS.ALL] += 10;
    if(player.equip[EQI.HAND_R] == 2097) // bolt shooter
        player.indexed_bonus.ignore_def_by_class[CLASS.ALL] += player.refine[EQI.HAND_R] * 2;
    if(player.equip[EQI.HAND_R] == 2124) // crimson axe
        player.indexed_bonus.ignore_def_by_class[CLASS.ALL] += Math.floor(player.refine[EQI.HAND_R] / 2);
    
    // magic def pierce calculations
    if(player.equip[EQI.HAND_R] == 645) // piercing staff
        player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL] += 10 + player.refine[EQI.HAND_R];
    if(player.equip[EQI.HEAD_TOP] == 1832 && player.refine[EQI.HEAD_TOP] >= 7) // drooping neko crew
        player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL] += 12;
    if(player.equip[EQI.SHOES] == 1946 && player.status.int >= 90) // int temporal boots
        player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL] += 10;
    if(player.equip[EQI.HAND_R] == 2120) // crimson staff
        player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL] += player.refine[EQI.HAND_R] * 2;
    if(player.equip[EQI.HAND_R] == 1905 && player.status.dex >= 50) // brute arc wand
        player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL] += 15;
    if(player.equip[EQI.HAND_R] == 936) // thorn staff of darkness
        player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL] += player.refine[EQI.HAND_R];

    // magic damage vs all
    if(player.equip[EQI.SHOES] == 1946 && player.status.int >= 90) // int temporal boots
        player.indexed_bonus.magic_addclass[CLASS.ALL] += 5;
    if(player.equip[EQI.HAND_R] == 2120) // crimson staff
        player.indexed_bonus.magic_addclass[CLASS.ALL] += player.refine[EQI.HAND_R];
    
    // reflect damage back calculations
    if(player.equip[EQI.GARMENT] == 535 && (n_A_JobClass() == JOB.SWORDMAN || n_A_JobClass() == JOB.THIEF || n_A_JobClass() == JOB.MERCHANT)) // valkyrie manteau
        player.bonus.short_weapon_damage_return += 5 + player.refine[EQI.GARMENT] * 2;
    if(TimeItemNumSearch(28) > 0) // shield of naga temp effect
        player.bonus.short_weapon_damage_return += 3 * player.refine[EQI.SHIELD];

    // auto attack bonus calculations
    if(player.equip[EQI.SHOES] == 1944 && player.status.agi >= 90) // agi temporal boots
        player.bonus.normalatk_dmgrate += 10;
    if(player.equip[EQI.HAND_R] == 2158) // death fire
        player.bonus.normalatk_dmgrate += 200;
    
    // skill specific damage bonus calculations
    if(player.equip[EQI.HAND_R] == 1169) // la'cryma stick
        PlayerBonusItemBonus(player.skillatk, SKILL.WZ_STORMGUST, player.refine[EQI.HAND_R]);
    if(player.equip[EQI.GARMENT] == 1835 && player.refine[EQI.GARMENT] >= 7) // adventurers spirit
        PlayerBonusItemBonus(player.skillatk, SKILL.SL_SMA, 5);
    if((player.equip[EQI.HAND_R] == 1873 || player.equip[EQI.HAND_R] == 1874)) { // exquisite yellow foxtail
        PlayerBonusItemBonus(player.skillatk, SKILL.WZ_JUPITEL, player.refine[EQI.HAND_R]);
        PlayerBonusItemBonus(player.skillatk, SKILL.WZ_VERMILION, player.refine[EQI.HAND_R]);
    }
    if(EquipNumSearch(1984) > 0) { // royal alchemy staff + alchemy glove
        PlayerBonusItemBonus(player.skillatk, SKILL.MG_FIREBOLT, 2 * player.refine[EQI.HAND_R]);
        PlayerBonusItemBonus(player.skillatk, SKILL.SA_FIREBOLT_HINDSIGHT, 2 * player.refine[EQI.HAND_R]);
        PlayerBonusItemBonus(player.skillatk, SKILL.MG_COLDBOLT, 2 * player.refine[EQI.HAND_R]);
        PlayerBonusItemBonus(player.skillatk, SKILL.SA_COLDBOLT_HINDSIGHT, 2 * player.refine[EQI.HAND_R]);
        PlayerBonusItemBonus(player.skillatk, SKILL.MG_LIGHTNINGBOLT, 2 * player.refine[EQI.HAND_R]);
        PlayerBonusItemBonus(player.skillatk, SKILL.SA_LIGHTNINGBOLT_HINDSIGHT, 2 * player.refine[EQI.HAND_R]);
    }
    if(player.equip[EQI.GARMENT] == 1987) { // spectral manteau
        PlayerBonusItemBonus(player.skillatk, SKILL.MG_SOULSTRIKE, 5 * player.refine[EQI.GARMENT]);
        PlayerBonusItemBonus(player.skillatk, SKILL.NPC_DARKSTRIKE2, 5 * player.refine[EQI.GARMENT]);
    }
    if(player.equip[EQI.HAND_R] == 2142) // flaming wand
        PlayerBonusItemBonus(player.skillatk, SKILL.MG_FIREBALL, 5 * player.refine[EQI.HAND_R]);
    if(player.equip[EQI.HAND_R] == 1844 && player.refine[EQI.HAND_R] >= 7) // bloody bow
        PlayerBonusItemBonus(player.skillatk, SKILL.HT_BLITZBEAT, 30);
    if(player.equip[EQI.HAND_R] == 1912) { // sagittarius bow
        bonus = Math.floor(player.status.str / 9);
        if(bonus > 10)
            bonus = 10;
        PlayerBonusItemBonus(player.skillatk, SKILL.HT_POWER, bonus);
    }
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.PALADIN) // save the king
        PlayerBonusItemBonus(player.skillatk, SKILL.PA_SHIELDCHAIN, player.refine[EQI.HAND_R]);
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.STALKER) // save the king
        PlayerBonusItemBonus(player.skillatk, SKILL.RG_RAID, 50);
    if(player.equip[EQI.HAND_R] == 1956 && player.status.job_id == JOB.WHITESMITH) // save the king
        PlayerBonusItemBonus(player.skillatk, SKILL.MC_CARTREVOLUTION, 25);
    if(player.equip[EQI.ARMOR] == 1988 && player.status.job_id == JOB.TAEKWON) { // prisoners uniform
        PlayerBonusItemBonus(player.skillatk, SKILL.TK_STORMKICK, 15);
        PlayerBonusItemBonus(player.skillatk, SKILL.TK_DOWNKICK, 15);
        PlayerBonusItemBonus(player.skillatk, SKILL.TK_TURNKICK, 15);
        PlayerBonusItemBonus(player.skillatk, SKILL.TK_COUNTER, 15);
    }
    if(player.equip[EQI.HAND_R] == 2178 && player.status.job_id == JOB.WHITESMITH) // mine worker's pickaxe
        PlayerBonusItemBonus(player.skillatk, SKILL.WS_CARTTERMINATION, 10);
    if(player.equip[EQI.HAND_R] == 1164 && player.status.luk >= 90 && player.status.dex >= 90) // vecer axe
        PlayerBonusItemBonus(player.skillatk, SKILL.MC_MAMMONITE, 15);
    if(player.equip[EQI.HAND_R] == 2175 && n_A_JobClass2() == JOB.ALCHEMIST) // bandits saber
        PlayerBonusItemBonus(player.skillatk, SKILL.CR_ACIDDEMONSTRATION, Math.floor(player.refine[EQI.HAND_R] / 2));

    // magic atk ele bonus calculations
    if(player.equip[EQI.HAND_R] == 2142) // flaming wand
        player.indexed_bonus.magic_atk_ele[ELE.FIRE] += player.refine[EQI.HAND_R] * 2;

    // no size penalty
    if(player.equip[EQI.HAND_R] == 1845) // kagekiri
        player.special_state.no_sizefix = true;
    if(player.equip[EQI.HAND_R] == 2177 && player.refine[EQI.HAND_R] >= 9) // platinum dagger
        player.special_state.no_sizefix = true;
}

function CalculateAdditionalBonuses() {
    ParseAdditionalScripts();

    let status = player.base_status;
    let bonus;

    // stat calculations
    if(CardNumSearch(466) > 0 && player.weapontype1 == WEAPON.ROD) // necromancer card
        PlayerApplyBonus(STAT.INT + 1, CardNumSearch(466));
    if(CardNumSearch(513) > 0 && n_A_JobClass2() == JOB.PRIEST) // rhyncho card
        PlayerApplyBonus(STAT.INT + 1, 1);
    if(CardNumSearch(662) > 0 && player.refine[EQI.SHOES] >= 9) // abandoned teddy bear card
        PlayerApplyBonus(STAT.DEX + 1, -3);
    if(CardNumSearch(383) > 0 && n_A_JobClass() == JOB.ACOLYTE) // rideword card
        PlayerApplyBonus(STAT.INT + 1, CardNumSearch(383));
    if(player.card[8] == 540 && n_A_JobClass() == JOB.ARCHER) // dolomedes card on top headgear
        PlayerApplyBonus(STAT.DEX + 1, Math.floor(player.refine[EQI.HEAD_TOP] / 3));
    if(player.card[8] == 180) // seyren windsor card on top headgear
        PlayerApplyBonus(STAT.STR + 1, player.refine[EQI.HEAD_TOP]);
    if(player.card[8] == 582) // king dramoh card on top headgear
        PlayerApplyBonus(STAT.STR + 1, Math.floor(player.refine[EQI.HEAD_TOP] / 3));
    if(CardNumSearch(173) > 0) // despero card
        PlayerApplyBonus(STAT.INT + 1, player.refine[EQI.SHIELD]);
    if(CardNumSearch(198) > 0) // dimik card
        PlayerApplyBonus(STAT.VIT + 1, player.refine[EQI.ARMOR]);
    if(CardNumSearch(402) > 0) // chung e card
        PlayerApplyBonus(STAT.LUK + 1, player.refine[EQI.GARMENT]);
    if(CardNumSearch(406) > 0) // odium card
        PlayerApplyBonus(STAT.AGI + 1, player.refine[EQI.SHOES]);
    if(CardNumSearch(185) > 0) // obsidian card
        PlayerApplyBonus(STAT.VIT + 1, Math.floor(player.status.dex / 18));
    if(CardNumSearch(187) > 0) // egnigem cenia card
        PlayerApplyBonus(STAT.STR + 1, Math.floor(player.status.int / 18));
    if(CardNumSearch(189) > 0) // venatu card
        PlayerApplyBonus(STAT.LUK + 1, Math.floor(player.status.agi / 18));
    if(CardNumSearch(191) > 0) // ancient mimic card
        PlayerApplyBonus(STAT.AGI + 1, Math.floor(player.status.luk / 18));
    if(CardNumSearch(196) > 0) // mistress of shelter card
        PlayerApplyBonus(STAT.INT + 1, Math.floor(player.status.str / 18));
    if(CardNumSearch(197) > 0) // observation card
        PlayerApplyBonus(STAT.DEX + 1, Math.floor(player.status.vit / 18));
    if(player.card[8] == 676) // shotgun buffalo bandit card
        PlayerApplyBonus(STAT.LUK + 1, Math.floor(player.refine[EQI.HEAD_TOP] / 2));
    if(CardNumSearch(405) > 0) { // aliot card
        bonus = 0; // represents the type of bonus aliot card gives
        if(n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass() == JOB.MAGICIAN  || n_A_JobClass() == JOB.ARCHER)
            bonus = STAT.INT;
        else if(n_A_JobClass() == JOB.SWORDMAN || n_A_JobClass() == JOB.THIEF || n_A_JobClass() == JOB.MERCHANT)
            bonus = STAT.STR;
        PlayerApplyBonus(bonus + 1, 2);
    }

    // flat atk calculations

    if(CardNumSearch(492) > 0) // ifrit card
        status.batk += Math.floor(player.status.job_level / 10) * CardNumSearch(492);
    if(CardNumSearch(267) > 0 && player.status.str >= 80) // giant whisper card
        status.batk += 20;

    // atk% calculations - this is the atk% that increases atk so not used 

    // flat max hp calculations
    if(CardNumSearch(474) > 0 && n_A_JobClass() == JOB.MAGICIAN) // banshee card
        status.max_hp -= 100 * CardNumSearch(474);
    if(CardNumSearch(477) > 0 && n_A_JobClass() == JOB.SWORDMAN) // echio card
        status.max_hp += 500 * CardNumSearch(477);
    if(CardNumSearch(186) > 0) // remover card
        status.max_hp -= 40 * player.refine[EQI.ARMOR];

    // max hp % calculations

    if(CardNumSearch(267) > 0 && player.status.vit >= 80) // giant whisper card
        player.hprate += 3;
    if(CardNumSearch(530) > 0) { // hardrock mammoth card
        bonus = 0;
        if(player.refine[EQI.ARMOR] >= 7)
            bonus += 10;
        if(player.refine[EQI.ARMOR] >= 9)
            bonus += 3;
        player.hprate += bonus;
    }
    if(CardNumSearch(304) > 0 && player.refine[EQI.SHOES] >= 9) // firelock soldier card
        player.hprate += 10;
    if(CardNumSearch(651) > 0 && player.refine[EQI.SHOES] >= 9) // time keeper card
        player.hprate += 10;
    if(CardNumSearch(407) > 0 && player.refine[EQI.SHOES] <= 4) // gold acidus card
        player.hprate += 4;
    if(CardNumSearch(405) > 0 && (n_A_JobClass() == JOB.SWORDMAN || n_A_JobClass() == JOB.THIEF || n_A_JobClass() == JOB.MERCHANT))
        player.hprate += 5;

    // flat max sp calculations

    if(player.card[9] == 179) // blue acidus card on mid headgear
        status.max_sp += 40;
    if(player.card[8] == 179 && player.refine[EQI.HEAD_TOP] <= 4) // blue acidus card on top headgear
        status.max_sp += 40;
    if(player.card[8] == 298 && player.refine[EQI.HEAD_TOP] >= 9) // carat card on top headgear
        status.max_sp += 150;
    if(CardNumSearch(474) > 0 && n_A_JobClass() == JOB.MAGICIAN) // banshee card
        status.max_sp += 100 * CardNumSearch(474);
    if(CardNumSearch(476) > 0 && n_A_JobClass() == JOB.MAGICIAN) // agav card
        status.max_sp += 100;

    // max sp % calculations

    if(CardNumSearch(304) > 0 && player.refine[EQI.SHOES] >= 9) // firelock soldier card
        player.sprate += 10;
    if(CardNumSearch(651) > 0 && player.refine[EQI.SHOES] >= 9) // time keeper card
        player.sprate += 10;
    if(CardNumSearch(407) > 0 && player.refine[EQI.SHOES] <= 4) // gold acidus card
        player.sprate += 4;
    if(CardNumSearch(405) > 0 && (n_A_JobClass() == JOB.ACOLYTE || n_A_JobClass() == JOB.MAGICIAN  || n_A_JobClass() == JOB.ARCHER || n_A_JobClass() == JOB.GUNSLINGER)) // aliot card
        player.sprate += 5;
    if(CardNumSearch(662) > 0) // abandoned teddy bear card
        player.sprate += player.refine[EQI.SHOES];

    // flat def calculations

    if(CardNumSearch(222) > 0 && player.refine[EQI.SHIELD] <= 5) // arclouze card
        status.def += 2;
    if(CardNumSearch(283) > 0 && player.refine[EQI.ARMOR] <= 5) // goat card
        status.def += 2;
    if(CardNumSearch(392) > 0) // tao gunka card
        status.def -= 50;

    // flat mdef calculations

    if(CardNumSearch(383) > 0 && n_A_JobClass() == JOB.ACOLYTE) // rideword card
        status.mdef += CardNumSearch(383);
    if(player.card[9] == 213 && player.refine[EQI.HEAD_TOP] <= 5) // gibbet card top headgear
        status.mdef += 5;
    if(player.card[10] == 213) // gibbet card mid headgear
        status.mdef += 5;
    if(CardNumSearch(199) && n_A_JobClass() == JOB.MAGICIAN) // frus card
        status.mdef += 3;
    if(CardNumSearch(222) && player.refine[EQI.SHIELD] <= 5) // arclouze card
        status.mdef += 3;
    if(CardNumSearch(283) && player.refine[EQI.ARMOR] <= 5) // goat card
        status.mdef += 5;
    if(CardNumSearch(310) && player.refine[EQI.SHIELD] >= 9) // sting card
        status.mdef += 5;
    if(CardNumSearch(381) && player.refine[EQI.SHOES] <= 5) // megalith card
        status.mdef += 7;
    if(CardNumSearch(258) > 0) { // kapha card
        bonus = 0;
        if(player.equip[EQI.GARMENT] == 1865)
            bonus = 1;
        else if(player.refine[EQI.GARMENT] <= 5)
            bonus = 8;
        status.mdef += bonus;
    }
    if(CardNumSearch(392) > 0) // tao gunka card
        status.mdef -= 50;

    // flat hit calculations

    if(CardNumSearch(492) > 0) // ifrit card
        status.hit += Math.floor(player.status.job_level / 10) * CardNumSearch(492);
    if(CardNumSearch(465) > 0 && player.weapontype1 == WEAPON.BOW) // bow guardian card
        status.hit += 5 * CardNumSearch(465);

    // flat flee calculations

    if(CardNumSearch(295) > 0 && n_A_JobClass() == JOB.THIEF) // wanderer card
        status.flee += 20;
    if(CardNumSearch(271) > 0 && player.refine[EQI.GARMENT] >= 9) // nine tails card
        status.flee += 20;
    if(CardNumSearch(401) > 0) { // kavach icarus card
        if(player.refine[EQI.GARMENT] <= 4)
            status.flee += 20;
        else
            status.flee += 10;
    }
    if(CardNumSearch(403) > 0 && player.refine[EQI.GARMENT] >= 9) // orc baby card
        status.flee += 5;
    if(CardNumSearch(595) > 0) // baba yaga card
        status.flee += player.refine[EQI.SHOES] * 2;

    // perfect dodge calculations

    if(CardNumSearch(354) > 0 && n_A_JobClass() == JOB.SWORDMAN) // heater card
        status.flee2 += 3 * CardNumSearch(354);
    if(CardNumSearch(391) > 0 && n_A_JobClass() == JOB.THIEF) // wild rose card
        status.flee2 += 5;
    if(CardNumSearch(401) > 0 && player.refine[EQI.GARMENT] <= 4) // kavach icarus card
        status.flee2 += 1;

    // flat crit calculations

    if(CardNumSearch(492) > 0) // ifrit card
        status.cri += (Math.floor(player.status.job_level / 10) * CardNumSearch(492) * 10);
    if(CardNumSearch(328) > 0 && n_A_JobClass() == JOB.THIEF) // mobster card
        status.cri += (4 * CardNumSearch(328)) * 10;
    if(CardNumSearch(465) > 0 && player.weapontype1 == WEAPON.BOW) // bow guardian card
        status.cri += (5 * CardNumSearch(465)) * 10;
    if(CardNumSearch(402) > 0) // chung e card
        status.cri += player.refine[EQI.GARMENT] * 10;
    if(CardNumSearch(532) > 0 && player.refine[EQI.HAND_R] >= 7) // tendrillion card
        status.cri += (5 * CardNumSearch(532)) * 10;
    if(CardNumSearch(267) > 0 && player.status.luk >= 80) // giant whisper card
        status.cri += 30;
    if(CardNumSearch(464) > 0 && player.weapontype1 == WEAPON.ONEHANDSWORD || player.weapontype1 == WEAPON.TWOHANDSWORD) // sword guardian card
        status.cri += 5 * CardNumSearch(464) * 10;
    if(CardNumSearch(253) > 0 && n_A_JobClass() == JOB.ACOLYTE) { // fur seal card
        player.indexed_bonus.critaddrace[RC.UNDEAD] += 90;
        player.indexed_bonus.critaddrace[RC.DEMON] += 90;
    }
    if(CardNumSearch(462) > 0) // drosera card
        player.bonus.critical_rangeatk += (15 * CardNumSearch(462)) * 10;

    // flat matk calculations

    // matk% calculations

    // speed calculations

    if(CardNumSearch(451) > 0) // thief card set
        player.bonus.speed_rate = Math.min(player.bonus.speed_rate, -25);

    // aspd % calculations

    if(CardNumSearch(528) > 0 && (player.weapontype1 == WEAPON.BOW || (player.weapontype1 >= WEAPON.HUUMA && player.weapontype1 <= WEAPON.GRENADE))) // beholder master card
        status.aspd_rate -= (5 * CardNumSearch(528)) * 10;
    if(CardNumSearch(525) > 0 && player.weapontype1 == WEAPON.TWOHANDSWORD) // fanat card
        status.aspd_rate -= (5 * CardNumSearch(525)) * 10;

    // cast time calculations

    if(CardNumSearch(454) > 0 && n_A_JobClass() == JOB.MAGICIAN) // mage card set
        player.castrate += -15;
    if(CardNumSearch(460) > 0 && n_A_JobClass2() == JOB.SAGE) // sage card set
        player.castrate += -20;
    if(player.card[8] == 177) // kathryne keyron card
        player.castrate += -(player.refine[EQI.HEAD_TOP]);
    if(TimeItemNumSearch(1) > 0) // isilla temp effect
        player.castrate += (-50 * TimeItemNumSearch(1));

    // % hp regen calculations

    if(CardNumSearch(221) > 0 && player.status.luk >= 77) // arch angeling ard
        player.hprecov_rate += 100 * CardNumSearch(221);
    if(CardNumSearch(407) && player.refine[EQI.SHOES] <= 4) // gold acidus card
        player.hprecov_rate += 5;

    // % sp regen calculations
    
    if(CardNumSearch(221) > 0 && player.status.luk >= 77) // arch angeling ard
        player.sprecov_rate += 100 * CardNumSearch(221);
    if(CardNumSearch(407) && player.refine[EQI.SHOES] <= 4) // gold acidus card
        player.sprecov_rate += 5;
    if(player.card[8] == 179 && player.refine[EQI.HEAD_TOP] <= 4) // blue acidus card on top headgear
        player.sprecov_rate += 5;
    if(player.card[9] == 179) // blue acidus card on mid headgear
        player.sprecov_rate += 5;

    // misc calculations

    // long range attack calculations

    if(player.card[8] == 578 && player.refine[EQI.HEAD_TOP] >= 9) // disguiser card on top headgear
        player.bonus.long_attack_atk_rate += 5;

    // crit damage calculations

    if(CardNumSearch(532) > 0 && player.refine[EQI.HAND_R] >= 9) // tendrillion card
        player.bonus.crit_atk_rate += 10 * CardNumSearch(532);
    if(CardNumSearch(680) > 0 && player.status.luk >= 40) // elite revolver buffalo bandit card
        player.bonus.crit_atk_rate += 5;

    if(sc_get(player, SC.ASSNCROS_SRS)) // severe rainstorm buff for sinx song
        player.bonus.crit_atk_rate += 10;

    // elemental reduction calculations
    if(CardNumSearch(403) > 0 && player.refine[EQI.GARMENT] >= 9) // orc baby card
        player.indexed_bonus.subele[ELE.NEUTRAL] += 5;

    // atk% calculations
    if(CardNumSearch(479) && n_A_JobClass2() == JOB.STALKER) // byorgue card
        player.indexed_bonus.addclass[CLASS.ALL] += 10;

    // magic damage race% cards
    if(CardNumSearch(606) > 0 && player.refine[EQI.SHOES] >= 9) // piranha card
        player.indexed_bonus.magic_addrace[RC.FISH] += 5;
    if(CardNumSearch(520) > 0) { // cobalt mineral card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.FORMLESS] += bonus * CardNumSearch(520);
    }
    if(CardNumSearch(522) > 0) { // ancient tree card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.UNDEAD] += bonus * CardNumSearch(522);
    }
    if(CardNumSearch(521) > 0) { // bradium golem card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.BRUTE] += bonus * CardNumSearch(521);
    }
    if(CardNumSearch(516) > 0) { // nepenthes card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.PLANT] += bonus * CardNumSearch(516);
    }
    if(CardNumSearch(515) > 0) { // pinguicula card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.INSECT] += bonus * CardNumSearch(515);
    }
    if(CardNumSearch(517) > 0) { // naga card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.FISH] += bonus * CardNumSearch(517);
    }
    if(CardNumSearch(518) > 0) { // hell apocalypse card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.DEMON] += bonus * CardNumSearch(518);
    }
    if(CardNumSearch(514) > 0) { // zakudam card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.DEMIHUMAN] += bonus * CardNumSearch(514);
    }
    if(CardNumSearch(659) > 0) { // creepy demon card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.ANGEL] += bonus * CardNumSearch(659);
    }
    if(CardNumSearch(519) > 0) { // draco egg card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addrace[RC.DRAGON] += bonus * CardNumSearch(519);
    }
    if(CardNumSearch(646) > 0) { // big ben card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 2;
        else if(player.right_weapon.level >= 3)
            bonus = 5;
        player.indexed_bonus.magic_addrace[RC.FORMLESS] += bonus * CardNumSearch(646);
        player.indexed_bonus.magic_addrace[RC.DEMON] += bonus * CardNumSearch(646);
    }

    // magic damage ele% cards
    if(player.card[8] == 598 && player.refine[EQI.HEAD_TOP] >= 9) // uzhas card
        player.indexed_bonus.magic_addele_script[ELE.EARTH] += 5;
    if(player.card[8] == 602 && player.refine[EQI.HEAD_TOP] >= 9) // curupira card
        player.indexed_bonus.magic_addele_script[ELE.WATER] += 5;
    if(player.card[8] == 603 && player.refine[EQI.HEAD_TOP] >= 9) // headless mule card
        player.indexed_bonus.magic_addele_script[ELE.FIRE] += 5;
    if(player.card[8] == 605 && player.refine[EQI.HEAD_TOP] >= 9) // jaguar card
        player.indexed_bonus.magic_addele_script[ELE.WIND] += 5;
    if(player.card[8] == 607 && player.refine[EQI.HEAD_TOP] >= 9) // toucan card
        player.indexed_bonus.magic_addele_script[ELE.POISON] += 5;
    if(CardNumSearch(626) > 0) { // corrupted duke card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addele_script[ELE.NEUTRAL] += bonus * CardNumSearch(626);
    }
    if(CardNumSearch(579) > 0) { // sropho card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addele_script[ELE.WATER] += bonus * CardNumSearch(579);
    }
    if(CardNumSearch(636) > 0) { // roaming spellbook card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addele_script[ELE.EARTH] += bonus * CardNumSearch(636);
    }
    if(CardNumSearch(588) > 0) { // fruit pom spider card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addele_script[ELE.FIRE] += bonus * CardNumSearch(588);
    }
    if(CardNumSearch(589) > 0) { // jungle mandragora card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addele_script[ELE.WIND] += bonus * CardNumSearch(589);
    }
    if(CardNumSearch(675) > 0) { // tumblering card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addele_script[ELE.POISON] += bonus * CardNumSearch(675);
    }
    if(CardNumSearch(668) > 0) { // rigid explosion card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addele_script[ELE.SHADOW] += bonus * CardNumSearch(668);
    }
    if(CardNumSearch(576) > 0) { // pierrotzoist card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addele_script[ELE.GHOST] += bonus * CardNumSearch(576);
    }
    if(CardNumSearch(645) > 0) { // zombie guard card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 3;
        else if(player.right_weapon.level >= 3)
            bonus = 8;
        player.indexed_bonus.magic_addele_script[ELE.UNDEAD] += bonus * CardNumSearch(645);
    }

    // subrace calculations

    if(CardNumSearch(452) > 0 && n_A_JobClass() == JOB.ACOLYTE) { // acolyte card set
        player.indexed_bonus.subrace[RC.UNDEAD] += 30;
        player.indexed_bonus.subrace[RC.DEMON] += 30;
    }

    // def pierce calculations

    if(CardNumSearch(617) > 0) { // gigantes card
        bonus = 0;
        if(player.right_weapon.level <= 2)
            bonus = 1;
        else if(player.right_weapon.level == 3)
            bonus = 2;
        else if(player.right_weapon.level >= 4)
            bonus = 3;

        if(player.weapontype1 == WEAPON.AXE || player.weapontype1 == WEAPON.TWOHANDAXE)
            bonus *= 2;

        player.indexed_bonus.ignore_def_by_class[CLASS.ALL] += bonus * CardNumSearch(617);
    }
    if(CardNumSearch(681) > 0 && player.status.str >= 70) // elite scimitar buffalo bandit card
        player.indexed_bonus.ignore_def_by_class[CLASS.ALL] += 10;

    // mdef pierce calculations
    if(player.card[8] == 630 && player.refine[EQI.HEAD_TOP] >= 9) // royal druid card on top headgear
        player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL] += 5;
    if(CardNumSearch(466) > 0 && player.weapontype1 == WEAPON.ROD) // necromancer card
        player.indexed_bonus.ignore_mdef_by_class[CLASS.ALL] += 2 * CardNumSearch(466);
    if(CardNumSearch(425) > 0) // vesper card
        player.indexed_bonus.ignore_mdef_by_class[CLASS.BOSS] += 30 * CardNumSearch(425);

    // status resistance calculations

    if(CardNumSearch(176) > 0) { // gemini-s58 card
        if(player.status.agi >= 90) {
            PlayerBonusItemBonus(player.reseff, EFF.SILENCE, 30 * CardNumSearch(176));
            PlayerBonusItemBonus(player.reseff, EFF.STUN, 30 * CardNumSearch(176));
        }
        if(player.status.vit >= 80) {
            PlayerBonusItemBonus(player.reseff, EFF.STONE, 50 * CardNumSearch(176));
            PlayerBonusItemBonus(player.reseff, EFF.SLEEP, 50 * CardNumSearch(176));
        }
    }

    // magic atk ele bonus calculations
    if(CardNumSearch(597) > 0 && player.status.job_id == JOB.NINJA) { // mavka card
        player.indexed_bonus.magic_atk_ele[ELE.FIRE] += 7 * CardNumSearch(597);
        player.indexed_bonus.magic_atk_ele[ELE.EARTH] += 7 * CardNumSearch(597);
    }
    if(CardNumSearch(629) > 0 && player.status.job_id == JOB.NINJA) { // royal clergy card
        player.indexed_bonus.magic_atk_ele[ELE.WATER] += 7 * CardNumSearch(629);
        player.indexed_bonus.magic_atk_ele[ELE.WIND] += 7 * CardNumSearch(629);
    }
    if(CardNumSearch(652) > 0) // arc elder card
        player.indexed_bonus.magic_atk_ele[ELE.EARTH] += player.refine[EQI.GARMENT];
    if(CardNumSearch(643) > 0 && player.right_weapon.level >= 3) { // warden kades card
        player.indexed_bonus.magic_atk_ele[ELE.NEUTRAL] += 6 * CardNumSearch(643);
        player.indexed_bonus.magic_atk_ele[ELE.HOLY] += 6 * CardNumSearch(643);
        player.indexed_bonus.magic_atk_ele[ELE.SHADOW] += 6 * CardNumSearch(643);
    }

    // skill specific damage bonus calculations
    if(CardNumSearch(474) > 0 && n_A_JobClass() == JOB.MAGICIAN) { // banshee card
        PlayerBonusItemBonus(player.skillatk, SKILL.MG_SOULSTRIKE, 20 * CardNumSearch(474));
        PlayerBonusItemBonus(player.skillatk, SKILL.MG_NAPALMBEAT, 20 * CardNumSearch(474));
        PlayerBonusItemBonus(player.skillatk, SKILL.HW_NAPALMVULCAN, 20 * CardNumSearch(474));
    }
    if(CardNumSearch(493) > 0) // imp card
        PlayerBonusItemBonus(player.skillatk, SKILL.SA_FIREBOLT_HINDSIGHT, 25 * CardNumSearch(493));
    if(CardNumSearch(488) > 0) // siroma card
        PlayerBonusItemBonus(player.skillatk, SKILL.SA_COLDBOLT_HINDSIGHT, 25 * CardNumSearch(488));
    if(CardNumSearch(591) > 0) // eggring card
        PlayerBonusItemBonus(player.skillatk, SKILL.SA_LIGHTNINGBOLT_HINDSIGHT, 25 * CardNumSearch(591));
    if(CardNumSearch(362) > 0 && player.refine[EQI.SHOES] >= 9) // freezer card
        PlayerBonusItemBonus(player.skillatk, SKILL.SM_BASH, 10);
    if(CardNumSearch(464) > 0 && (player.weapontype1 == WEAPON.ONEHANDSWORD || player.weapontype1 == WEAPON.TWOHANDSWORD)) // sword guardian card
        PlayerBonusItemBonus(player.skillatk, SKILL.KN_BOWLINGBASH, 25 * CardNumSearch(464));
    if(CardNumSearch(465) > 0 && player.weapontype1 == WEAPON.BOW) // bow guardian card
        PlayerBonusItemBonus(player.skillatk, SKILL.AC_SHOWER, 50 * CardNumSearch(465));
    if(CardNumSearch(523) && n_A_JobClass() == JOB.MERCHANT) // heavy metaling card
        PlayerBonusItemBonus(player.skillatk, SKILL.MC_CARTREVOLUTION, 50);

    // bonuses from "statuses" which have a script

    // stats
    if(sc_get(player, SC.FOOD_STR_CASH) || sc_get(player, SC.ORLEANS_MEAL)) { // str food
        bonus = 0;
        const strFoods = [SC.FOOD_STR_CASH, SC.ORLEANS_MEAL];
        for(const sc of strFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        status.str += bonus;
    }
    if(sc_get(player, SC.FOOD_AGI_CASH) || sc_get(player, SC.ORLEANS_MEAL)) { // agi food
        bonus = 0;
        const agiFoods = [SC.FOOD_AGI_CASH, SC.ORLEANS_MEAL];
        for(const sc of agiFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        status.agi += bonus;
    }
    if(sc_get(player, SC.FOOD_VIT_CASH) || sc_get(player, SC.ORLEANS_MEAL)) { // vit food
        bonus = 0;
        const vitFoods = [SC.FOOD_VIT_CASH, SC.ORLEANS_MEAL];
        for(const sc of vitFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        status.vit += bonus;
    }
    if(sc_get(player, SC.FOOD_INT_CASH) || sc_get(player, SC.ORLEANS_MEAL)) { // int food
        bonus = 0;
        const intFoods = [SC.FOOD_INT_CASH, SC.ORLEANS_MEAL];
        for(const sc of intFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        status.int += bonus;
    }
    if(sc_get(player, SC.FOOD_DEX_CASH) || sc_get(player, SC.ORLEANS_MEAL)) { // dex food
        bonus = 0;
        const dexFoods = [SC.FOOD_DEX_CASH, SC.ORLEANS_MEAL];
        for(const sc of dexFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        status.dex += bonus;
    }
    if(sc_get(player, SC.FOOD_LUK_CASH) || sc_get(player, SC.ORLEANS_MEAL)) { // luk food
        bonus = 0;
        const lukFoods = [SC.FOOD_LUK_CASH, SC.ORLEANS_MEAL];
        for(const sc of lukFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        status.luk += bonus;
    }

    // flat atk from foods
    if(sc_get(player, SC.ATKPOTION) || sc_get(player, SC.RESENTMENT_BOX) || sc_get(player, SC.CHEWY_RICE_CAKE) || sc_get(player, SC.RUNE_STRAWBERRY_CAKE)) {
        bonus = 0;
        const atkFoods = [SC.ATKPOTION, SC.RESENTMENT_BOX, SC.CHEWY_RICE_CAKE, SC.RUNE_STRAWBERRY_CAKE];
        for(const sc of atkFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        status.batk += bonus;
    }

    // flat matk from foods
    if(sc_get(player, SC.MATKPOTION) || sc_get(player, SC.DROWSINESS_BOX) || sc_get(player, SC.ORIENTAL_PASTRY) || sc_get(player, SC.RUNE_STRAWBERRY_CAKE)) { // flat matk food
        bonus = 0;
        const matkFoods = [SC.MATKPOTION, SC.DROWSINESS_BOX, SC.ORIENTAL_PASTRY, SC.RUNE_STRAWBERRY_CAKE];
        for(const sc of matkFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        player.bonus.ematk += bonus;
    }

    // flat hit from foods
    if(sc_get(player, SC.HITFOOD) || sc_get(player, SC.SESAME_PASTRY) || sc_get(player, SC.SCHWARTZWALD_PINE_JUBILEE)) {
        bonus = 0;
        const hitFoods = [SC.HITFOOD, SC.SESAME_PASTRY, SC.SCHWARTZWALD_PINE_JUBILEE];
        for(const sc of hitFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        status.hit += bonus;
    } 

    // flee food
    if(sc_get(player, SC.FLEEFOOD) || sc_get(player, SC.HONEY_PASTRY) || sc_get(player, SC.SCHWARTZWALD_PINE_JUBILEE)) {
        bonus = 0;
        const fleeFoods = [SC.FLEEFOOD, SC.HONEY_PASTRY, SC.SCHWARTZWALD_PINE_JUBILEE];
        for(const sc of fleeFoods) {
            const effect = sc_get(player, sc);
            let val1 = effect ? effect.val1 : 0;
            if(sc == SC.SCHWARTZWALD_PINE_JUBILEE)
                val1 = effect ? effect.val2 : 0;
            if(effect && val1 > bonus) bonus = val1;
        }
        status.flee += bonus;
    } 

    if(sc_get(player, SC.INCCRI) || sc_get(player, SC.ARUNAFELTZ_DESERT_SANDWICH) || sc_get(player, SC.ABRASIVE)) { // crit food
        bonus = 0;
        const criFoods = [SC.INCCRI, SC.ARUNAFELTZ_DESERT_SANDWICH, SC.ABRASIVE];
        for(const sc of criFoods) {
            const effect = sc_get(player, sc);
            if(effect && effect.val1 > bonus) bonus = effect.val1;
        }
        status.cri += bonus * 10;
    }

    if(sc_get(player, SC.ARMOR_ELEMENT_WATER)) { // coldproof potion
        player.indexed_bonus.subele[ELE.WATER] += sc_get(player, SC.ARMOR_ELEMENT_WATER).val1;
        player.indexed_bonus.subele[ELE.WIND] += sc_get(player, SC.ARMOR_ELEMENT_WATER).val4;
    }
    if(sc_get(player, SC.ARMOR_ELEMENT_EARTH)) { // earthproof potion
        player.indexed_bonus.subele[ELE.EARTH] += sc_get(player, SC.ARMOR_ELEMENT_EARTH).val2;
        player.indexed_bonus.subele[ELE.FIRE] += sc_get(player, SC.ARMOR_ELEMENT_EARTH).val3;
    }
    if(sc_get(player, SC.ARMOR_ELEMENT_FIRE)) { // fireproof potion
        player.indexed_bonus.subele[ELE.FIRE] += sc_get(player, SC.ARMOR_ELEMENT_FIRE).val3;
        player.indexed_bonus.subele[ELE.WATER] += sc_get(player, SC.ARMOR_ELEMENT_FIRE).val1;
    }
    if(sc_get(player, SC.ARMOR_ELEMENT_WIND)) { // thunderproof potion
        player.indexed_bonus.subele[ELE.WIND] += sc_get(player, SC.ARMOR_ELEMENT_WIND).val4;
        player.indexed_bonus.subele[ELE.EARTH] += sc_get(player, SC.ARMOR_ELEMENT_WIND).val2;
    }

    if(sc_get(player, SC.MANU_ATK)) {
        player.indexed_bonus.addrace2[RC2.MANUK] += sc_get(player, SC.MANU_ATK).val1;
    }

    if(sc_get(player, SC.MANU_DEF)) {
        player.indexed_bonus.subrace2[RC2.MANUK] += sc_get(player, SC.MANU_DEF).val1;
    }

    if(sc_get(player, SC.MANU_MATK)) {
        player.indexed_bonus.magic_addrace2[RC2.MANUK] += sc_get(player, SC.MANU_MATK).val1;
    }

    if(sc_get(player, SC.SPL_ATK)) {
        player.indexed_bonus.addrace2[RC2.SPLENDIDE] += sc_get(player, SC.SPL_ATK).val1;
    }

    if(sc_get(player, SC.SPL_DEF)) {
        player.indexed_bonus.subrace2[RC2.SPLENDIDE] += sc_get(player, SC.SPL_DEF).val1;
    }

    if(sc_get(player, SC.SPL_MATK)) {
        player.indexed_bonus.magic_addrace2[RC2.SPLENDIDE] += sc_get(player, SC.SPL_MATK).val1;
    }

    if(sc_get(player, SC.MACARONCAKE)) {
        player.indexed_bonus.addclass[CLASS.ALL] += 3;
        player.matk_rate += 3;
        player.indexed_bonus.subrace[RC.ALL] -= 10;
    }
}