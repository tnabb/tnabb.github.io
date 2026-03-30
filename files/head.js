PvP = 0,
n_itemSW = 0;
Item_or_Card = "Item",
ItemCardNumberCheck = 142;
var c = document.calcForm
    , equip_restrict = 1
    , card_restrict = 0;
var player = new PlayerData();
var monster = new MonsterData();

const v_Race = ["<b style='color:#9F9E9B'>Formless</b>", "<b style='color:purple'>Undead</b>", "<b style='color:brown'>Brute</b>", "<b style='color:#00DD00'>Plant</b>", "<b style='color:green'>Insect</b>", "<b style='color:blue'>Fish</b>", "<b style='color:#000000'>Demon</b>", "<b style='color:orange'>Demi-Human</b>", "<b style='color:#CDCD40'>Angel</b>", "<b style='color:red'>Dragon</b>"];
const v_Race_ = ["Formless", "Undead", "Brute", "Plant", "Insect", "Fish", "Demon", "Demi-Human", "Angel", "Dragon"];
const v_Element = ["<b style='color:#A89682'>Neutral</b>", "<b style='color:blue'>Water</b>", "<b style='color:brown'>Earth</b>", "<b style='color:red'>Fire</b>", "<b style='color:#00CC00'>Wind</b>", "<b style='color:#bb24bb'>Poison</b>", "<b style='color:#CDCD00'>Holy</b>", "<b style='color:#000000'>Shadow</b>", "<b style='color:#BFBEBB'>Ghost</b>", "<b style='color:purple'>Undead</b>", "<b style='color:#FF6600'>Non-Elemental</b>"];
const v_Element_ = ["Neutral ", "Water ", "Earth ", "Fire ", "Wind ", "Poison ", "Holy ", "Shadow ", "Ghost ", "Undead ", "Non-Elemental"];
const v_Size = ["Small", "Medium", "Large"];
const v_Effect = ["Poison", "Stun", "Freeze", "Curse", "Blind", "Sleep", "Silence", "Confusion", "Bleeding", "Stone", "Weapon Break", "Armor Break"];
const JobName = ["Novice", "Swordman", "Thief", "Acolyte", "Archer", "Magician", "Merchant", "Knight", "Assassin", "Priest", "Hunter", "Wizard", "Blacksmith", "Crusader", "Rogue", "Monk", "Bard", "Dancer", "Sage", "Alchemist", "Super Novice", "Lord Knight", "Assassin Cross", "High Priest", "Sniper", "High Wizard", "Whitesmith", "Paladin", "Stalker", "Champion", "Clown", "Gypsy", "Professor", "Creator", "High Novice", "High Swordman", "High Thief", "High Acolyte", "High Archer", "High Magician", "High Merchant", "Taekwon Kid", "Star Gladiator", "Soul Linker", "Ninja", "Gunslinger", "Night Watch", "High Taekwon Kid", "Soul Ascetic", "Sky Emperor"];
var All_DMGskill = [0, 6, 7, 17, 19, 40, 41, 44, 46, 47, 51, 52, 53, 54, 55, 56, 57, 65, 66, 70, 71, 72, 73, 76, 83, 84, 88, 97, 102, 104, 106, 111, 112, 113, 118, 122, 124, 125, 126, 127, 128, 130, 131, 132, 133, 158, 159, 161, 162, 167, 169, 171, 188, 189, 192, 193, 197, 199, 207, 244, 248, 259, 260, 261, 263, 264, 271, 272, 275, 277, 324, 325, 391, 326, 328, 321, 382, 339, 331, 333, 335, 337, 317, 318, 373, 374, 375, 407, 408, 409, 410, 412, 413, 414, 415, 397, 398, 399, 400, 401, 405, 434, 438, 417, 418, 419, 423, 424, 474, 489, 302, 611, 752, 461, 463, 465, 466, 469, 510, 443, 473, 847, 848, 849, 850, 853, 854, 606, 513, 514, 515, 516];

function cap_value(a, min, max){
    return a >= max ? max : a <= min ? min : a;
}

function myInnerHtml(elementId, html, mode) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (mode === 0) {
        el.innerHTML = html;
    } else {
        el.insertAdjacentHTML("beforeend", html);
    }
}

function firstLoadFunction() {
    for (i = 0; i < JobName.length; i++)
        c.A_JOB.options[i] = new Option(JobName[i], i);
    c.A_Weapon_refine.length = 0;
    player.dual_wield && (c.A_Weapon2_refine.length = 0);
    c.A_HEAD_REFINE.length = 0;
    c.A_LEFT_REFINE.length = 0;
    c.A_BODY_REFINE.length = 0;
    c.A_SHOULDER_REFINE.length = 0;
    c.A_SHOES_REFINE.length = 0;
    for (i = 0; i <= 10; i++) {
        c.A_Weapon_refine.options[i] = new Option("+" + i, i);
        player.dual_wield && (c.A_Weapon2_refine.options[i] = new Option("+" + i, i));
        c.A_HEAD_REFINE.options[i] = new Option("+" + i, i);
        c.A_LEFT_REFINE.options[i] = new Option("+" + i, i);
        c.A_BODY_REFINE.options[i] = new Option("+" + i, i);
        c.A_SHOULDER_REFINE.options[i] = new Option("+" + i, i);
        c.A_SHOES_REFINE.options[i] = new Option("+" + i, i);
    }
    firstLoad = 1;
    calc();
}

function restrictEquipslot() {
    equip_restrict = 1 * c.restrict_equipslot.checked;

    let playerWeapon = player.status.weapon;

    if((playerWeapon == WEAPON.TWOHANDSWORD || playerWeapon == WEAPON.TWOHANDSPEAR || playerWeapon == WEAPON.TWOHANDAXE || playerWeapon == WEAPON.BOW || playerWeapon == WEAPON.KATAR || (playerWeapon >= WEAPON.HUUMA && playerWeapon <= WEAPON.GRENADE) || player.dual_wield) && equip_restrict) {
        c.A_LEFT_REFINE.disabled = true;
        c.A_LEFT_REFINE.value = 0;
        c.A_left.disabled = true;
        c.A_left.value = 305;
        c.A_left_card.disabled = true;
        c.A_left_card.value = 0;
    } else {
        c.A_LEFT_REFINE.disabled = false;
        c.A_left.disabled = false;
        if(!(card_restrict && 0 != m_Item[c.A_left.value][5])) {
            c.A_left_card.disabled = false;
        }
    }
}

function restrictCardslot(e) {
    card_restrict = 1 * c.restrict_cardslot.checked;

    if(card_restrict) {
        if(0 != m_Item[c.A_weapon1.value][5]) {
            c.A_weapon1_card1.disabled = false;
            c.A_weapon1_card2.disabled = false;
            c.A_weapon1_card3.disabled = false;
            c.A_weapon1_card4.disabled = false;
        } else {
            c.A_weapon1_card1.disabled = true;
            c.A_weapon1_card1.value = 0;
            c.A_weapon1_card2.disabled = true;
            c.A_weapon1_card2.value = 0;
            c.A_weapon1_card3.disabled = true;
            c.A_weapon1_card3.value = 0;
            c.A_weapon1_card4.disabled = true;
            c.A_weapon1_card4.value = 0;
        }

        if(player.dual_wield) {
            if(0 != m_Item[c.A_weapon2.value][5]) {
                c.A_weapon2_card1.disabled = false;
                c.A_weapon2_card2.disabled = false;
                c.A_weapon2_card3.disabled = false;
                c.A_weapon2_card4.disabled = false;
            } else {
                c.A_weapon2_card1.disabled = true;
                c.A_weapon2_card1.value = 0;
                c.A_weapon2_card2.disabled = true;
                c.A_weapon2_card2.value = 0;
                c.A_weapon2_card3.disabled = true;
                c.A_weapon2_card3.value = 0;
                c.A_weapon2_card4.disabled = true;
                c.A_weapon2_card4.value = 0;
            }
        }

        if(0 != m_Item[c.A_head1.value][5]) {
            c.A_head1_card.disabled = false;
        } else {
            c.A_head1_card.disabled = true;
            c.A_head1_card.value = 0;
        }
        if(0 != m_Item[c.A_head2.value][5]) {
            c.A_head2_card.disabled = false;
        } else {
            c.A_head2_card.disabled = true;
            c.A_head2_card.value = 0;
        }

        if(0 != m_Item[c.A_left.value][5]) {
            c.A_left_card.disabled = false;
        } else {
            c.A_left_card.disabled = true;
            c.A_left_card.value = 0;
        }
        if(0 != m_Item[c.A_body.value][5]) {
            c.A_body_card.disabled = false;
        } else {
            c.A_body_card.disabled = true;
            c.A_body_card.value = 0;
        }
        if(0 != m_Item[c.A_shoulder.value][5]) {
            c.A_shoulder_card.disabled = false;
        } else {
            c.A_shoulder_card.disabled = true;
            c.A_shoulder_card.value = 0;
        }
        if(0 != m_Item[c.A_shoes.value][5]) {
            c.A_shoes_card.disabled = false;
        } else {
            c.A_shoes_card.disabled = true;
            c.A_shoes_card.value = 0;
        }
        if(0 != m_Item[c.A_acces1.value][5]) {
            c.A_acces1_card.disabled = false;
        } else {
            c.A_acces1_card.disabled = true;
            c.A_acces1_card.value = 0;
        }
        if(0 != m_Item[c.A_acces2.value][5]) {
            c.A_acces2_card.disabled = false;
        } else {
            c.A_acces2_card.disabled = true;
            c.A_acces2_card.value = 0;
        }
    }
    calc();
}

function updateStatOptions() {
    const maxStat = c.A_adopted.checked ? 80 : 99;
    const statSelects = [c.A_STR, c.A_AGI, c.A_VIT, c.A_INT, c.A_DEX, c.A_LUK];
 
    for (const sel of statSelects) {
        const current = Math.min(1 * sel.value, maxStat);
        sel.options.length = 0;
        for (let i = 1; i <= maxStat; i++) {
            sel.options[i - 1] = new Option(i, i);
        }
        sel.value = current;
    }
}

function ClickJob(jobId) {
    myInnerHtml("A_KakutyouSel", "", 0);
    myInnerHtml("A_KakutyouData", "", 0);
    c.A_Kakutyou.value = 0;
    n_A_JobSet();
    jobId = player.status.job_id;

    updateStatOptions();

    for(let i = 1; i <= 99; i++) {
        c.A_BaseLV.options[i - 1] = new Option(i, i);
    }

    c.A_JobLV.options.length = 0;
    let maxJobLevel;
    if(jobId == JOB.NOVICE) {
        maxJobLevel = 10;
    } else if (jobId <= JOB.ALCHEMIST || (jobId >= JOB.TAEKWON && jobId <= JOB.SOUL_LINKER)) {
        maxJobLevel = 50;
    } else if (jobId == JOB.SUPERNOVICE) {
        maxJobLevel = 99;
    } else if (jobId == JOB.NIGHT_WATCH) {
        maxJobLevel = 85;
    } else {
        maxJobLevel = 70;
    }

    for(let i = 1; i <= maxJobLevel; i++) {
        c.A_JobLV.options[i - 1] = new Option(i, i);
    }

    var sienskillTable = document.getElementById('SIENSKILL');
    if (sienskillTable) {
        var rows = sienskillTable.getElementsByTagName('tr');
        var isOpen = false;
        for (var i = 1; i < rows.length; i++) {
            if (rows[i].style.display !== 'none') { isOpen = true; break; }
        }
        if (isOpen) {
            // Spirit Spheres: disable for Gunslinger
            var spiritSphereSelect = document.querySelector('#buffcell_spiritsphere_input select');
            var spiritSphereLabel = document.getElementById('buffcell_spiritsphere_label');
            if (n_A_JobClass() === JOB.GUNSLINGER) {
                if (spiritSphereLabel) spiritSphereLabel.innerHTML = '<S># of Spirit Spheres</S>';
                if (spiritSphereSelect) { spiritSphereSelect.disabled = true; spiritSphereSelect.value = 0; }
            } else {
                if (spiritSphereLabel) spiritSphereLabel.textContent = '# of Spirit Spheres';
                if (spiritSphereSelect) spiritSphereSelect.disabled = false;
            }

            // Providence: disable for Crusader/Paladin
            var providenceSelect = document.querySelector('#buffcell_providence_input select');
            var providenceLabel = document.getElementById('buffcell_providence_label');
            if (n_A_JobClass2() == JOB.CRUSADER) {
                if (providenceLabel) providenceLabel.innerHTML = '<S>Providence</S>';
                if (providenceSelect) { providenceSelect.disabled = true; providenceSelect.value = 0; }
            } else {
                if (providenceLabel) providenceLabel.textContent = 'Providence';
                if (providenceSelect) providenceSelect.disabled = false;
            }
        }
    }

    // set aspd pots
    const jobClass2 = n_A_JobClass2();
    const jobClass1 = n_A_JobClass();
    let speedPotNames = ["(no ASPD Potion)", "Concentration Potion", "Awakening Potion (Lvl 40)", "Berserk Potion", "Poison Bottle"];
    if(jobId != JOB.ACOLYTE && jobClass2 != JOB.PRIEST && jobClass2 != JOB.BARD) {
        c.buff_aspdpot.options[2] = new Option(speedPotNames[2], 2);
    } else {
        c.buff_aspdpot.options[2] = new Option("-", 0);
    }
    if(jobClass1 == JOB.SWORDMAN || jobClass1 == JOB.MERCHANT || jobClass1 == JOB.TAEKWON || jobClass2 == JOB.ROGUE || jobClass2 == JOB.WIZARD || jobId == JOB.MAGICIAN || jobClass1 == JOB.GUNSLINGER) {
        c.buff_aspdpot.options[3] = new Option(speedPotNames[3] + " (Lvl 85)", 3);
        c.buff_aspdpot.options.length = 4;
    } else if (jobId == JOB.ASSASSIN_CROSS) {
        c.buff_aspdpot.options[3] = new Option("* Special (" + m_Skill[304][2] + " Lvl 85)", 3);
        c.buff_aspdpot.options[4] = new Option(speedPotNames[4], 4);
        c.buff_aspdpot.options.length = 5;
    } else {
        c.buff_aspdpot.options[3] = new Option("* Special (" + m_Skill[304][2] + ") (Lvl 85)", 3);
        c.buff_aspdpot.options.length = 4;
    }

    WeaponSet(jobId);

    // Reset all passive skill labels and selects
    for(let i = 0; i <= 35; i++) {
        myInnerHtml("P_Skill" + i, "", 0);
        myInnerHtml("P_Skill" + i + "s", "", 0);
    }

    const availableBuffs = JOB_AVAILABLE_BUFFS[jobId] || [];
    for (let i = 0; i <= availableBuffs.length; i++) {
        const skillId = availableBuffs[i];

        if(skillId === undefined) {
            myInnerHtml("P_Skill" + i, "", 0);
            myInnerHtml("P_Skill" + i + "s", "", 0);
            continue;
        }

        if(skillId === 385) {
            myInnerHtml("P_Skill" + i, m_Skill[skillId][2], 0);
            myInnerHtml("P_Skill" + i + "s", '<select name=A_skill' + i + ' id=A_skill' + i + ' onChange="calc() | WeaponSet(20) | restrictCardslot(1)"></select>', 0);
        } else if (skillId === 392) {
            myInnerHtml("P_Skill" + i, skillName(m_Skill[skillId][0]), 0);
            myInnerHtml("P_Skill" + i + "s", "<select name=A_skill" + i + " id=A_skill" + i + ' onChange="calc()" style="width:70px;"></select>', 0);
            if(player.status.rebirth == 0)
                myInnerHtml("P_Skill" + i, "", 0);
        } else if (skillId === 441) {
            myInnerHtml("P_Skill" + i, m_Skill[skillId][2], 0);
            myInnerHtml("P_Skill" + i + "s", "<select name=A_skill" + i + " id=A_skill" + i + ' onChange="calc() | ClickActiveSkill2() | calc()"></select>', 0);
            if(player.status.rebirth == 0)
                myInnerHtml("P_Skill" + i, "", 0);
        } else {
            myInnerHtml("P_Skill" + i, skillName(m_Skill[skillId][0]), 0);
            myInnerHtml("P_Skill" + i + "s", "<select name=A_skill" + i + " id=A_skill" + i + " onChange=calc()></select>", 0);
        }
    }

    for(let i = 0; i <= availableBuffs.length; i++) {
        const skillId = availableBuffs[i];

        if(skillId === undefined) continue;

        const skillElement = document.getElementById("A_skill" + i);
        if(!skillElement) continue;

        const toggleSkills = [12, 68, 152, 253, 258, 301, 309, 310, 322, 364, 365, 379, 383, 385, 386, 390, 420, 421, 422, 846, 858, SKILL.TK_READYDOWN, SKILL.TK_READYTURN, SKILL.SL_ASSASIN, SKILL.SL_HIGH];

        if(toggleSkills.includes(skillId) || m_Skill[skillId][1] === 1) {
            skillElement.options[0] = new Option("off", 0);
            skillElement.options[1] = new Option("on", 1);
            if(skillId == SKILL.SL_HIGH && player.status.rebirth == 0)
                skillElement.style.visibility = "hidden";
        } else if (skillId === 851) {
            skillElement.options[0] = new Option("off", 0);
            skillElement.options[1] = new Option("Revolver", 1);
            skillElement.options[2] = new Option("Shotgun", 2);
            skillElement.options[3] = new Option("Gatling Gun", 3);
            skillElement.options[4] = new Option("Rifle", 4);
            skillElement.options[5] = new Option("Grenade Launcher", 5);
        } else if (skillId === 852) {
            skillElement.options[0] = new Option("off", 0);
            skillElement.options[1] = new Option("5-9 stacks", 1);
            skillElement.options[2] = new Option("10 stacks", 2);
        } else if (skillId === 58) {
            const damageReduction = ["0", "6% Reduction", "12% Reduction", "18% Reduction", "24% Reduction", "30% Reduction"];
            for(let j = 0; j <= 5; j++) {
                skillElement.options[j] = new Option(damageReduction[j], j);
            }
        } else if (skillId === 78) {
            const pecoLevels = ["(no Peco)", "0", "1", "2", "3", "4", "5"];
            for(let j = 0; j <= 6; j++) {
                skillElement.options[j] = new Option(pecoLevels[j], j);
            }
        } else if (skillId === 367) {
            const smsBlessing = [0, 1, 2, 3, 4, 5, 6, 8, 10];
            for(let j = 0; j <= 8; j++) {
                skillElement.options[j] = new Option(10 * smsBlessing[j] + "%", smsBlessing[j]);
            }
        } else if (skillId === 336) {
            skillElement.options[0] = new Option("off", 0);
            skillElement.options[1] = new Option("20% damage reduction", 1);
            skillElement.options[2] = new Option("50% damage reduction", 2);
        } else if (skillId === 859) {
            skillElement.options[0] = new Option("off", 0);
            skillElement.options[1] = new Option("Auto-attack", 1);
            skillElement.options[2] = new Option("Skill", 2);
        }else if (skillId == SKILL.TK_MISSION_ELE_BONUS || skillId == SKILL.TK_MISSION_RACE_BONUS) {
            for(let j = 0; j <= 50; j++) {
                skillElement.options[j] = new Option(j / 10 + "%", j / 10);
            }
        } else {
            for(let j = 0; j <= 10; j++) {
                skillElement.options[j] = null;
            }

            const maxSkillLevel = m_Skill[skillId][1];
            for(let j = 0; j <= maxSkillLevel; j++) {
                skillElement.options[j] = new Option(j, j);
            }
        }
    }

    LoadPlayerSkills();
    EquipmentSet();
}

function LoadPlayerSkills() {
    for(let i = 0; i < c.A_ActiveSkill.length; i++) {
        c.A_ActiveSkill.options[i] = null;
    }

    if(c.all_dmgSkills.checked) {
        for(let i = 0; i < All_DMGskill.length; i++) {
            c.A_ActiveSkill.options[i] = new Option(skillNameInSelect(m_Skill[All_DMGskill[i]][0]), All_DMGskill[i]);
        }
    } else {
        const jobSkills = JOB_ACTIVE_SKILLS[player.status.job_id] || [];
        for(let i = 0; i < jobSkills.length; i++) {
            const skillId = jobSkills[i];
            const skillName = skillNameInSelect(m_Skill[skillId][0]);
            c.A_ActiveSkill.options[i] = new Option(skillName, skillId);
        }
    }

    ActiveSkillSetPlus();
    ClickActiveSkill();
}

function LoadEnemySkills() {
    let optionIndex = 0;
    c.B_AtkSkill.options.length = 0;
    c.B_AtkSkill.options[0] = new Option("Basic Attack", 0);
    const enemyIndex = c.B_Enemy.value;
    for (let i = 23; m_Monster[enemyIndex][i] !== 0; i += 2) {
        optionIndex++;
        const skillId = m_Monster[enemyIndex][i];
        const skillLevel = m_Monster[enemyIndex][i + 1];
        const skillName = m_Skill[skillId][2] + " Lvl " + skillLevel;
        c.B_AtkSkill.options[optionIndex] = new Option(skillName, skillId);
    }
    myInnerHtml("BBSkill", "", 0);
}

function applyLayoutWidths(dualWield) {
    var n = Math.max(document.documentElement.clientWidth, document.body.scrollWidth,
                     document.documentElement.scrollWidth, document.body.offsetWidth,
                     document.documentElement.offsetWidth);
    var narrow = dualWield && ((1262 <= n && n < 1480) || n < 1013);

    c.A_weapon1.style.width       = narrow ? "95%"   : "auto";
    c.A_cardshort.style.width     = narrow ? "95%"   : "auto";
    c.A_weapon1_card1.style.width = narrow ? "95%"   : "208px";
    c.A_weapon1_card2.style.width = narrow ? "95%"   : "208px";
    c.A_weapon1_card3.style.width = narrow ? "95%"   : "208px";
    c.A_weapon1_card4.style.width = narrow ? "95%"   : "208px";
    c.A_head1.style.width         = narrow ? "47%"   : "200px";
    c.A_head2.style.width         = narrow ? "53%"   : "200px";
    c.A_head3.style.width         = narrow ? "53%"   : "200px";
    c.A_left.style.width          = narrow ? "47%"   : "200px";
    c.A_body.style.width          = narrow ? "47%"   : "200px";
    c.A_shoulder.style.width      = narrow ? "47%"   : "200px";
    c.A_shoes.style.width         = narrow ? "47%"   : "200px";
    c.A_acces1.style.width        = narrow ? "53%"   : "200px";
    c.A_acces2.style.width        = narrow ? "53%"   : "200px";
    c.A_head1_card.style.width    = narrow ? "auto"  : "auto";  // same both ways
    c.A_head2_card.style.width    = narrow ? "auto"  : "auto";  // same both ways
    c.A_left_card.style.width     = narrow ? "37%"   : "auto";
    c.A_body_card.style.width     = narrow ? "37%"   : "200px";
    c.A_shoulder_card.style.width = narrow ? "auto"  : "200px"; // not set in narrow — verify intended
    c.A_shoes_card.style.width    = narrow ? "37%"   : "200px";
    c.A_acces1_card.style.width   = narrow ? "43%"   : "auto";
    c.A_acces2_card.style.width   = narrow ? "43%"   : "auto";
}

function applyRandOpts(weaponType, oldWeaponType, newWeapon, oldWeapon) {
    function fillSlots(dataArrays, activeSlots) {
        RandOptWeapon1Reset();

        // Re-acquire references AFTER reset recreates the DOM elements
        const slotControls = [c.A_weapon1_ropt1, c.A_weapon1_ropt2, c.A_weapon1_ropt3, c.A_weapon1_ropt4];
        const blank = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);

        for (let s = 0; s < activeSlots; s++)
            for (let i = 0; dataArrays[s][i] !== "NULL"; i++)
                slotControls[s].options[i] = new Option(m_RandomOpt[dataArrays[s][i]][1], m_RandomOpt[dataArrays[s][i]][0]);

        for (let s = activeSlots; s < 4; s++)
            slotControls[s].options[0] = blank;
    }

    if (weaponType == 0 || (m_ForgedItems.includes(newWeapon) && !m_RandomOptForgedWeapons.includes(newWeapon))) {
        RandOptWeapon1Reset();
    } else if (m_RandomOptForgedWeapons.includes(newWeapon)) {
        if (!m_RandomOptForgedWeapons.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptForged, 4);
    } else if (m_RandomOptCrimsonWeapons.includes(newWeapon)) {
        if (!m_RandomOptCrimsonWeapons.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptCrimson, 2);
    } else if (m_RandomOptMineWorkerPickaxe.includes(newWeapon)) {
        if (!m_RandomOptMineWorkerPickaxe.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptPickaxe, 3);
    } else if (m_RandomOptSpecialType.includes(weaponType) || m_RandomOptSpecialWeapons.includes(newWeapon)) {
        if (!m_RandomOptSpecialType.includes(oldWeaponType) || m_RandomOptSpecialWeapons.includes(oldWeapon) || m_RandomOptCrimsonWeapons.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptSpecial, 4);
    } else if (m_RandomOptMeleeType.includes(weaponType)) {
        if (!m_RandomOptMeleeType.includes(oldWeaponType) || m_RandomOptSpecialWeapons.includes(oldWeapon) || m_ForgedItems.includes(oldWeapon) || m_RandomOptCrimsonWeapons.includes(oldWeapon) || m_RandomOptMineWorkerPickaxe.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptMelee, 3);
    } else if (m_RandomOptRangedType.includes(weaponType)) {
        if (!m_RandomOptRangedType.includes(oldWeaponType) || m_RandomOptSpecialWeapons.includes(oldWeapon) || m_RandomOptCrimsonWeapons.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptRanged, 3);
    } else if (m_RandomOptMagicType.includes(weaponType)) {
        if (!m_RandomOptMagicType.includes(oldWeaponType) || m_RandomOptSpecialWeapons.includes(oldWeapon) || m_RandomOptCrimsonWeapons.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptMagic, 3);
    }
}

function ClickWeaponType(weaponType) {
    weaponType = m_Item[c.A_weapon1.value][1],
    c.A_Arrow.disabled = !1;
    c.A_Arrow.options.length = 0;

    if(weaponType == WEAPON.BOW || weaponType == WEAPON.INSTRUMENT || weaponType == WEAPON.WHIP) {
        for(let i = 0; i < m_Arrow.length; i++) {
            c.A_Arrow.options[i] = new Option(m_Arrow[i][2], i);
        }
    } else if (weaponType >= WEAPON.REVOLVER && weaponType <= WEAPON.GRENADE) {
        for(let i = 0; i < m_Bullet.length; i++) {
            c.A_Arrow.options[i] = new Option(m_Bullet[i][2], i);
        }
    } else {
        c.A_Arrow.value = 0;
        c.A_Arrow.disabled = true;
        c.A_Arrow.options[0] = new Option("(no arrow)", 0);
    }

    c.A_Weapon_refine.disabled = (weaponType == WEAPON.FIST);
    if(weaponType == WEAPON.FIST) c.A_Weapon_refine.value = 0;

    if(n_A_JobClass2() != JOB.ASSASSIN || weaponType == WEAPON.KATAR) {
        ["A_SobWeaponName", "A_w2", "A_weapon2refine", "A_weapon2_cardshort",
         "nA_weapon2_c1", "nA_weapon2_c2", "nA_weapon2_c3", "nA_weapon2_c4",
         "nA_weapon2_ropt1", "nA_weapon2_ropt2", "nA_weapon2_ropt3", "nA_weapon2_ropt4"
        ].forEach(id => myInnerHtml(id, "", 0));

        player.dual_wield = false;
        applyLayoutWidths(false);
    } else if(!player.dual_wield) {
        myInnerHtml("A_SobWeaponName", "Left Hand: ", 0);
        myInnerHtml("A_w2", '<select name="A_weapon2" style="width:185px;" onchange="ClickWeaponType2(this[this.selectedIndex].value) | Click_Item(this[this.selectedIndex].value)|restrictCardslot(1)"><option value="0">(Fist or Shield)</option></select>', 0);
        WeaponSetLeft(player.status.job_id);
        applyLayoutWidths(true);
    }

    var oldWeapon = player.equip[EQI.HAND_R];
    var newWeapon = player.equip[EQI.HAND_R] = parseInt(c.A_weapon1.value);

    var oldWeaponType = player.status.weapon;
    applyRandOpts(weaponType, oldWeaponType, newWeapon, oldWeapon);

    if(m_ForgedItems.includes(newWeapon) != m_ForgedItems.includes(oldWeapon))
        allCard();

    if(m_WeaponEnchant.includes(newWeapon)) {
        player.enchant[7] = 1 * c.A_weapon1_enchant1.value;
        player.enchant[8] = 1 * c.A_weapon1_enchant2.value;
        document.getElementById("nA_weapon1_enchant1").style.display = 'table-cell';
        document.getElementById("nA_weapon1_enchant2").style.display = 'table-cell';
        LoadWeaponEnchants(newWeapon, oldWeapon);
        [1, 2, 3, 4].forEach(i => {
            player.randopt[(i - 1) * 2] = 0;
            player.randopt[(i - 1) * 2 + 1] = 0;
            document.getElementById(`nA_weapon1_ropt${i}`).style.display = 'none';
        });
    } else {
        player.enchant[7] = 0; c.A_weapon1_enchant1.value = 0;
        player.enchant[8] = 0; c.A_weapon1_enchant2.value = 0;
        document.getElementById("nA_weapon1_enchant1").style.display = 'none';
        document.getElementById("nA_weapon1_enchant2").style.display = 'none';
        [1, 2, 3, 4].forEach(i =>
            document.getElementById(`nA_weapon1_ropt${i}`).style.display = 'table-cell'
        );
    }

    ActiveSkillSetPlus();
    ClickB_Item(newWeapon);
}

function ClickWeaponType2(weaponType) {
    n_A_JobSet();
    const newWeapon = parseInt(weaponType);
 
    if (newWeapon == 0) {
        // Left hand cleared — tear down all weapon2 UI
        c.A_weapon2.value = 0;
        myInnerHtml("A_weapon2refine", "", 0);
        myInnerHtml("A_weapon2_cardshort", "", 0);
        myInnerHtml("nA_weapon2_c1", "", 0);
        myInnerHtml("nA_weapon2_c2", "", 0);
        myInnerHtml("nA_weapon2_c3", "", 0);
        myInnerHtml("nA_weapon2_c4", "", 0);
        myInnerHtml("nA_weapon2_ropt1", "", 0);
        myInnerHtml("nA_weapon2_ropt2", "", 0);
        myInnerHtml("nA_weapon2_ropt3", "", 0);
        myInnerHtml("nA_weapon2_ropt4", "", 0);
        player.dual_wield = false;
        return;
    }
 
    const oldWeapon = player.equip[EQI.HAND_L];
    player.equip[EQI.HAND_L] = newWeapon;
 
    if (!player.dual_wield) {
        // First time equipping a left-hand weapon — build the full UI
        myInnerHtml("A_weapon2refine", 'Refine (Left): <select name="A_Weapon2_refine" onChange="StAllCalc()"></select>', 0);
        for (let i = 0; i <= 10; i++)
            c.A_Weapon2_refine.options[i] = new Option("+" + i, i);
 
        myInnerHtml("A_weapon2_cardshort", '<select name="A_cardshortLeft" onChange="Setm_CardShortLeft()|Click_Card()|ActiveSkillSetPlus()"></select>', 0);
        c.A_cardshortLeft.options[0] = new Option("(card shortcuts)", 0);
        for (let i = 1; i <= 50; i++)
            c.A_cardshortLeft.options[i] = new Option(m_CardShort[i + 1][0], i + 1);
 
        myInnerHtml("nA_weapon2_c1", '<select name="A_weapon2_card1" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
        myInnerHtml("nA_weapon2_c2", '<select name="A_weapon2_card2" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
        myInnerHtml("nA_weapon2_c3", '<select name="A_weapon2_card3" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
        myInnerHtml("nA_weapon2_c4", '<select name="A_weapon2_card4" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
 
        populateWeapon2Cards(newWeapon);
        RandOptWeapon2Reset();
        applyRandOptsWeapon2(newWeapon, oldWeapon);
 
        player.dual_wield = true;
    } else {
        // Weapon swap while already dual-wielding — only rebuild cards/randopts if type changed
        if (m_ForgedItems.includes(newWeapon) !== m_ForgedItems.includes(oldWeapon))
            populateWeapon2Cards(newWeapon);
 
        applyRandOptsWeapon2(newWeapon, oldWeapon);
    }
 
    // Enchant vs random option visibility
    if (m_WeaponEnchant.includes(newWeapon)) {
        player.enchant[9] = 1 * c.A_weapon2_enchant1.value;
        player.enchant[10] = 1 * c.A_weapon2_enchant2.value;
        document.getElementById("nA_weapon2_enchant1").style.display = 'table-cell';
        document.getElementById("nA_weapon2_enchant2").style.display = 'table-cell';
        LoadWeaponEnchants(newWeapon, oldWeapon);
        player.randopt[8] = 0;  player.randopt[9] = 0;  document.getElementById("nA_weapon2_ropt1").style.display = 'none';
        player.randopt[10] = 0; player.randopt[11] = 0; document.getElementById("nA_weapon2_ropt2").style.display = 'none';
        player.randopt[12] = 0; player.randopt[13] = 0; document.getElementById("nA_weapon2_ropt3").style.display = 'none';
        player.randopt[14] = 0; player.randopt[15] = 0; document.getElementById("nA_weapon2_ropt4").style.display = 'none';
    } else {
        player.enchant[9] = 0;  c.A_weapon2_enchant1.value = 0; document.getElementById("nA_weapon2_enchant1").style.display = 'none';
        player.enchant[10] = 0; c.A_weapon2_enchant2.value = 0; document.getElementById("nA_weapon2_enchant2").style.display = 'none';
        document.getElementById("nA_weapon2_ropt1").style.display = 'table-cell';
        document.getElementById("nA_weapon2_ropt2").style.display = 'table-cell';
        document.getElementById("nA_weapon2_ropt3").style.display = 'table-cell';
        document.getElementById("nA_weapon2_ropt4").style.display = 'table-cell';
    }
 
    applyLayoutWidths(true);
 
    ActiveSkillSetPlus();
    ClickB_Item(player.equip[EQI.HAND_L]);
}

function populateWeapon2Cards(weaponId) {
    if (!m_ForgedItems.includes(weaponId)) {
        for (let i = 0; "NULL" != m_CardSort[0][i]; i++) {
            c.A_weapon2_card1.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
            c.A_weapon2_card2.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
            c.A_weapon2_card3.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
            c.A_weapon2_card4.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
        }
    } else {
        // Forged weapons only allow specific elemental stone + star crumb cards
        const forgedCardSlot1 = [0, 201, 202, 203, 204, 106];
        for (let i = 0; i < forgedCardSlot1.length; i++)
            c.A_weapon2_card1.options[i] = new Option(m_Card[forgedCardSlot1[i]][2], m_Card[forgedCardSlot1[i]][0]);
        c.A_weapon2_card2.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
        c.A_weapon2_card2.options[1] = new Option(m_Card[106][2], m_Card[106][0]);
        c.A_weapon2_card3.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
        c.A_weapon2_card3.options[1] = new Option(m_Card[106][2], m_Card[106][0]);
        c.A_weapon2_card4.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
        c.A_weapon2_card4.options[1] = new Option("* Top10 ranked", 106);
    }
}
 
function applyRandOptsWeapon2(newWeapon, oldWeapon) {
    function fillSlots(dataArrays, activeSlots) {
        RandOptWeapon2Reset();
        const slotControls = [c.A_weapon2_ropt1, c.A_weapon2_ropt2, c.A_weapon2_ropt3, c.A_weapon2_ropt4];
        const blank = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
 
        for (let s = 0; s < activeSlots; s++)
            for (let i = 0; dataArrays[s][i] !== "NULL"; i++)
                slotControls[s].options[i] = new Option(m_RandomOpt[dataArrays[s][i]][1], m_RandomOpt[dataArrays[s][i]][0]);
 
        for (let s = activeSlots; s < 4; s++)
            slotControls[s].options[0] = blank;
    }
 
    if (m_ForgedItems.includes(newWeapon) && !m_RandomOptForgedWeapons.includes(newWeapon)) {
        RandOptWeapon2Reset();
    } else if (m_RandomOptForgedWeapons.includes(newWeapon)) {
        if (!m_RandomOptForgedWeapons.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptForged, 4);
    } else if (m_RandomOptCrimsonWeapons.includes(newWeapon)) {
        if (!m_RandomOptCrimsonWeapons.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptCrimson, 2);
    } else if (m_RandomOptSpecialWeapons.includes(newWeapon)) {
        if (!m_RandomOptSpecialWeapons.includes(oldWeapon) || oldWeapon == 0)
            fillSlots(m_RandomOptSpecial, 4);
    } else {
        // melee weapons — only refill if the previous weapon was from a different category
        const oldWasSpecialCategory = m_RandomOptSpecialWeapons.includes(oldWeapon)
            || m_RandomOptForgedWeapons.includes(oldWeapon)
            || m_RandomOptCrimsonWeapons.includes(oldWeapon)
            || oldWeapon == 0;
        if (oldWasSpecialCategory)
            fillSlots(m_RandomOptMelee, 3);
    }
}

function ClickActiveSkill() {
    const rawValue = 1 * c.A_ActiveSkill.value;
    let skillId, skillLv;
 
    if (rawValue >= 5000) {
        skillId = m_EnableSkill[rawValue - 5000][2];
        skillLv = m_EnableSkill[rawValue - 5000][3];
    } else if (rawValue >= 3000) {
        skillId = m_EnableSkill[rawValue - 3000][2];
        skillLv = m_EnableSkill[rawValue - 3000][3];
    } else if (rawValue >= 2000) {
        skillId = m_AutoSpellSkill[rawValue - 2000][2];
        skillLv = m_AutoSpellSkill[rawValue - 2000][3];
    } else {
        skillId = rawValue;
        skillLv = m_Skill[skillId][1];
        // Sage Water Ball lv5 / Heaven's Drive lv5 cap when Rogue/Stalker
        if (n_A_JobClass2() == JOB.ROGUE && (skillId == SKILL.WZ_HEAVENDRIVE || skillId == SKILL.WZ_WATERBALL))
            skillLv = 5;
    }
 
    // Keep globals in sync for foot.js until it's migrated
    player.active_skill = skillId;
    player.active_skill_lv = skillLv;
 
    // Rebuild the level dropdown
    c.A_ActiveSkillLV.options.length = 0;
    for (let i = 1; i <= skillLv; i++)
        c.A_ActiveSkillLV.options[i - 1] = new Option("Lvl " + i, i);
 
    if (m_Skill[skillId][1] == 1) {
        c.A_ActiveSkillLV.style.visibility = "hidden";
    } else {
        c.A_ActiveSkillLV.style.visibility = "visible";
        c.A_ActiveSkillLV.value = skillLv;
    }
 
    ClickActiveSkill2();
}

function BClickAtkSkill() {
    const skillId = 1 * c.B_AtkSkill.value;
    let monsterId = c.B_Enemy.value;
 
    if (skillId == SKILL.NPC_EARTHQUAKE_MELEE || skillId == SKILL.NPC_EARTHQUAKE_RANGED) {
        myInnerHtml("BBSkill", 'Players in Range: <select name="BSkillSubNum" onChange="calc()"></select>', 0);
        for (let i = 1; i <= 99; i++)
            c.BSkillSubNum.options[i - 1] = new Option(i, i);
    } else if (skillId == SKILL.WZ_METEOR) {
        const skillLv = m_Monster[monsterId][2 * c.B_AtkSkill.selectedIndex + 22];
        const maxMeteors = 2 + Math.floor(skillLv / 2);
        myInnerHtml("BBSkill", 'Meteors landing on Player: <select name="BSkillSubNum" onChange="calc()"></select>', 0);
        for (let i = 1; i <= maxMeteors; i++)
            c.BSkillSubNum.options[i - 1] = new Option(i, i);
        c.BSkillSubNum.value = 2;
    } else if (skillId == SKILL.WZ_STORMGUST) {
        myInnerHtml("BBSkill", 'Hits: <select name="BSkillSubNum" onChange="calc()"></select>', 0);
        for (let i = 1; i <= 15; i++)
            c.BSkillSubNum.options[i - 1] = new Option(i, i);
        c.BSkillSubNum.value = 3;
    } else {
        myInnerHtml("BBSkill", "", 0);
    }
    calc();
}

function ClickActiveSkill2() {
    const skillId = player.active_skill;
    const doubleCastingLv = SkillSearch(SKILL.PF_DOUBLECASTING);
    const doubleCastingBoltSkills = [
        SKILL.MG_FIREBOLT, SKILL.MG_COLDBOLT, SKILL.MG_LIGHTNINGBOLT,
        SKILL.SA_FIREBOLT_HINDSIGHT, SKILL.SA_COLDBOLT_HINDSIGHT, SKILL.SA_LIGHTNINGBOLT_HINDSIGHT
    ];
 
    myInnerHtml("ABSkill", "", 0);
 
    if (skillId == SKILL.WS_CARTTERMINATION) {
        myInnerHtml("AASkill", 'Cart weight: <input type="text" inputmode="numeric" maxlength="4" name="SkillSubNum" value="8000" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0);
 
    } else if (skillId == SKILL.WZ_STORMGUST) {
        myInnerHtml("AASkill", 'Hits: <select name="SkillSubNum" onChange="calc()"></select>', 0);
        for (let i = 1; i <= 15; i++)
            c.SkillSubNum.options[i - 1] = new Option(i, i);
        c.SkillSubNum.value = 3;
 
    } else if (skillId == SKILL.AS_SPLASHER) {
        myInnerHtml("AASkill", 'Poison React Lvl: <select name="SkillSubNum" onChange="calc()"></select>', 0);
        for (let i = 0; i <= 10; i++)
            c.SkillSubNum.options[i] = new Option(i, i);
        c.SkillSubNum.value = 0;
 
    } else if (skillId == SKILL.MO_EXTREMITYFIST) {
        myInnerHtml("AASkill", 'Remaining SP: <input type="text" inputmode="numeric" maxlength="5" name="SkillSubNum" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0);
        c.SkillSubNum.value = player.battle_status.max_sp - 1;
 
    } else if (skillId == SKILL.NJ_SYURIKEN) {
        myInnerHtml("AASkill", '<select name="SkillSubNum" onChange="calc()"></select>', 0);
        for (let i = 0; i <= 4; i++)
            c.SkillSubNum.options[i] = new Option(m_Syuriken[i][2], i);
        c.SkillSubNum.value = 0;
 
    } else if (skillId == SKILL.NJ_KUNAI) {
        myInnerHtml("AASkill", '<select name="SkillSubNum" onChange="calc()"></select>', 0);
        for (let i = 0; i <= 4; i++)
            c.SkillSubNum.options[i] = new Option(m_Kunai[i][2], i);
        c.SkillSubNum.value = 0;
 
    } else if (skillId == SKILL.NJ_ISSEN) {
        myInnerHtml("AASkill", 'Remaining HP: <input type="text" inputmode="numeric" maxlength="5" name="SkillSubNum" size=3 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0);
        c.SkillSubNum.value = player.battle_status.max_hp - 1;
 
    } else if (skillId == SKILL.GS_DESPERADO) {
        myInnerHtml("AASkill", 'Hits (considering knockback): <select name="SkillSubNum" onChange="calc()"></select>', 0);
        ["1", "2", "3"].forEach((v, i) => c.SkillSubNum.options[i] = new Option(v + " hits", i));
        c.SkillSubNum.value = 2;
 
    } else if (skillId == SKILL.GS_TRACKING) {
        myInnerHtml("AASkill", 'Hits (considering channel time): <select name="SkillSubNum" onChange="calc()"></select>', 0);
        ["1", "2", "4"].forEach((v, i) => c.SkillSubNum.options[i] = new Option(v + " hits", i));
        c.SkillSubNum.value = 2;
 
    } else if (skillId == SKILL.RA_AIMEDBOLT) {
        myInnerHtml("AASkill", 'Immobilized: <input type="checkbox" name="SkillSubNum" onclick="calc()">', 0);
        c.SkillSubNum.value = 0;
 
    } else if (skillId == SKILL.NPC_SELFDESTRUCTION) {
        myInnerHtml("AASkill", 'Remaining HP: <input type="text" inputmode="numeric" maxlength="5" name="SkillSubNum" size=3 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0);
        c.SkillSubNum.value = player.battle_status.max_hp;
 
    } else if (skillId == SKILL.NPC_EARTHQUAKE) {
        myInnerHtml("AASkill", 'Enemies in Range: <select name="SkillSubNum" onChange="calc()"></select>', 0);
        for (let i = 1; i <= 99; i++)
            c.SkillSubNum.options[i - 1] = new Option(i, i);
 
    } else if (doubleCastingLv && doubleCastingBoltSkills.includes(skillId)) {
        const avgChance = doubleCastingLv + 3;
        myInnerHtml("AASkill", 'Double Bolt chance: <select name="SkillSubNum" onChange="calc()"></select>', 0);
        c.SkillSubNum.options[0] = new Option("Bad luck (0%)", 0);
        c.SkillSubNum.options[1] = new Option("Average chance (" + 10 * avgChance + "%)", avgChance);
        c.SkillSubNum.options[2] = new Option("Good luck (100%)", 10);
        c.SkillSubNum.value = avgChance;
 
    } else if (skillId == SKILL.KN_CHARGEATK) {
        myInnerHtml("AASkill", 'Enemy distance: <select name="SkillSubNum" onChange="calc()"></select>', 0);
        ["0~3 Cells", "4~6 Cells", "7~9 Cells", "10~12 Cells", "13+ Cells"].forEach((v, i) => c.SkillSubNum.options[i] = new Option(v, i));
        c.SkillSubNum.value = 4;
 
    } else if (skillId == SKILL.CR_SHIELDBOOMERANG || skillId == SKILL.CR_SHIELDBOOMERANG_SL || skillId == SKILL.PA_SHIELDCHAIN) {
        myInnerHtml("AASkill", 'Shield weight: <input type="text" inputmode="numeric" maxlength="4" name="SkillSubNum" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0);
        c.SkillSubNum.value = m_Item[player.equip[EQI.SHIELD]][6];
 
    } else if (skillId == SKILL.LK_SPIRALPIERCE) {
        myInnerHtml("AASkill", 'Weapon weight: <input type="text" inputmode="numeric" maxlength="4" name="SkillSubNum" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0);
        c.SkillSubNum.value = m_Item[player.equip[EQI.HAND_R]][6];
    } else if (skillId == SKILL.TK_JUMPKICK) {
        myInnerHtml("AASkill", 'Enemy distance: <select name="SkillSubNum" onChange="calc()"></select>', 0);
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((v, i) => c.SkillSubNum.options[i] = new Option(v, i));
        c.SkillSubNum.value = 9;

    } else if (skillId == SKILL.SOA_WRATH_OF_THE_FALLEN) {
        myInnerHtml("AASkill", 'Number of Fallen: <select name="SkillSubNum" onChange="calc()"></select>', 0);
        for (let i = 0; i <= 11; i++)
            c.SkillSubNum.options[i] = new Option(i, i);
        c.SkillSubNum.value = 0;
    } 
    else {
        myInnerHtml("AASkill", "", 0);
    }
}

function SaveTheme() {
    if (typeof Storage === "undefined") {
        alert("Sorry, your browser does not support local storage. Please let me know if you see this message at tnaab on Discord");
        return;
    }
    const saveData = [1, c.theme.value, 0];
    localStorage["Slot200"] = JSON.stringify(saveData);
}
 
function LoadTheme() {
    if (typeof Storage === "undefined") {
        alert("Sorry, your browser does not support local storage. If you see this message, please let me know at tnaab on Discord");
        themes();
        return;
    }
    const saved = localStorage["Slot50"];
    if (saved === undefined) {
        c.theme.value = 0;
        c.server.value = 0;
    } else {
        const saveData = JSON.parse(saved);
        c.theme.value = saveData[1];
        if (saveData[2] !== undefined)
            c.server.value = saveData[2];
    }
    themes();
    refreshTableHeaders();
}
 
function themes() {
    const e = 1 * c.theme.value;
    const gradient = `linear-gradient(to bottom, ${hBGC1[e]}, ${hBGC2[e]})`;
    const isDark = (e == 3 || e == 5);
 
    document.body.style.backgroundColor = bBGC[e];
 
    document.querySelectorAll("h1, h3, .links").forEach(el => el.style.backgroundImage = gradient);
    document.querySelectorAll("select").forEach(el => el.style.backgroundColor = selBGC[e]);
    document.querySelectorAll(".subheader select").forEach(el => el.style.backgroundColor = ssBGC[e]);
    document.querySelectorAll(".subheader").forEach(el => el.style.backgroundColor = sBGC[e]);
    document.querySelectorAll(".main").forEach(el => {
        el.style.backgroundColor = mBGC[e];
        el.style.color = isDark ? "#DDD" : "#000";
    });
    document.querySelectorAll(".tborder, .tborderA").forEach(el => el.style.backgroundColor = tBGC[e]);
 
    SaveTheme();
}
 
function addCSSRule(sheet, selector, rules, index) {
    if ("insertRule" in sheet)
        sheet.insertRule(selector + "{" + rules + "}", index);
    else if ("addRule" in sheet)
        sheet.addRule(selector, rules, index);
}
//                    0       1       2       3       4       5
//                Original    Blue    Cake  Nifel.   Dark  Darker
const bBGC  = ["#CDF",  "#CCC",  "#FDC",  "#313",  "#000",  "#000"]; // body background
const hBGC1 = ["#355",  "#57D",  "#B44",  "#622",  "#444",  "#444"]; // header gradient top
const hBGC2 = ["#477",  "#24A",  "#A33",  "#411",  "#222",  "#222"]; // header gradient bottom
const selBGC= ["#FC8",  "#FC8",  "#FC8",  "#FC8",  "#AAA",  "#AAA"]; // select elements
const ssBGC = ["#DEE",  "#DDE",  "#FCC",  "#EBE",  "#AAA",  "#AAA"]; // subheader selects
const sBGC  = ["#466",  "#36B",  "#A33",  "#727",  "#000",  "#000"]; // subheader background
const saBGC = ["#A52",  "#811",  "#3A3",  "#A11",  "#A11",  "#A11"]; // subheader active (buff on)
const mBGC  = ["#FFF",  "#FFF",  "#FFF",  "#311",  "#555",  "#555"]; // .main background
const tBGC  = ["#FFF",  "#FFF",  "#FFF",  "#522",  "#555",  "#555"]; // table border background
 
// Injected stylesheet for dynamic CSS rules
const styleEl = document.createElement("style");
document.head.appendChild(styleEl);
const sheet = styleEl.sheet;

// Maps legacy n_A_Buf2 indices to SC constants for save/load backward compatibility.
var BUF2_INDEX_MAP = [
    { sc: SC.BLESSING },       // 0
    { sc: SC.INCREASEAGI },    // 1
    { sc: SC.IMPOSITIO },      // 2
    { sc: SC.GLORIA },         // 3
    { sc: SC.ANGELUS },        // 4
    { sc: SC.ASSUMPTIO },      // 5
    { sc: SC.ADRENALINE },     // 6 (special: 1=ADRENALINE, 2=ADRENALINE2)
    { sc: SC.WEAPONPERFECTION }, // 7
    { sc: SC.OVERTHRUST },     // 8
    { sc: SC.WINDWALK },       // 9
    { sc: SC.SUFFRAGIUM },     // 10
    { sc: SC.PROVIDENCE },     // 11
    { special: "spiritball" }, // 12
    { sc: SC.AUTOGUARD },     // 13
    { sc: SC.SHIELDREFLECT }, // 14
    { sc: SC.DEFENDER },      // 15
    { sc: SC.INCALLSTATUS, fixedVal: 20 },  // 16
    { sc: SC.INCMHPRATE,  fixedVal: 100 }, // 17
    { sc: SC.INCMSPRATE,  fixedVal: 100 }, // 18
    { sc: SC.INCATKRATE,  fixedVal: 100 }, // 19
    { sc: SC.INCHIT, fixedVal: 50, also: SC.INCFLEE }, // 20
    { sc: SC.INCDEFRATE,  fixedVal: 25 },  // 21
];

// Read a value equivalent to the old n_A_Buf2[index] from player.sc.
function getBuf2FromSC(index) {
    var entry = BUF2_INDEX_MAP[index];
    if (!entry) return 0;
    if (entry.special === "spiritball") return player.spiritball || 0;
    if (index === 6) {
        if (sc_get(player, SC.ADRENALINE2)) return 2;
        if (sc_get(player, SC.ADRENALINE)) return 1;
        return 0;
    }
    var sc = sc_get(player, entry.sc);
    if (!sc) return 0;
    if (entry.fixedVal) return 1; // gospel toggles: stored as 0/1
    return sc.val1;
}

// Write a value equivalent to the old n_A_Buf2[index] = val into player.sc.
function setBuf2ToSC(index, val) {
    var entry = BUF2_INDEX_MAP[index];
    if (!entry) return;
    if (entry.special === "spiritball") { player.spiritball = val; return; }
    if (index === 6) {
        sc_end(player, SC.ADRENALINE);
        sc_end(player, SC.ADRENALINE2);
        if (val == 1) sc_start(player, SC.ADRENALINE);
        else if (val == 2) sc_start(player, SC.ADRENALINE2);
        return;
    }
    sc_end(player, entry.sc);
    if (entry.also) sc_end(player, entry.also);
    if (val) {
        if (entry.fixedVal) {
            sc_start(player, entry.sc, entry.fixedVal);
            if (entry.also) sc_start(player, entry.also, entry.fixedVal);
        } else {
            sc_start(player, entry.sc, val);
        }
    }
}

// Reset all party buff SCs (equivalent to zeroing n_A_Buf2[0..21]).
function resetBuf2SC() {
    for (var i = 0; i < BUF2_INDEX_MAP.length; i++)
        setBuf2ToSC(i, 0);
}

// Update player status changes from SIENSKILL table controls
function updateSupportSkillStatus(e, tableHeaderFunction) {
    var el = e.target || e;
    var sc = el.getAttribute('data-sc');
    if (!sc || !window.player) return;
    var fixed = el.getAttribute('data-fixed');
    // Remove all related statuses first (handles toggling off)
    if (sc.includes('|')) {
        sc.split('|').forEach(function(s) { sc_end(player, SC[s]); });
    } else {
        sc_end(player, SC[sc]);
    }
    // Special case: SPIRITBALL
    if (sc === 'SPIRITSPHERE') {
        var val = el.tagName === 'SELECT' ? parseInt(el.value, 10) : (el.checked ? 5 : 0); // default 5 if checked
        player.spiritball = val;
    }
    // Special case: Adrenaline Rush
    else if (sc === 'ADRENALINE|ADRENALINE2') {
        var val = el.tagName === 'SELECT' ? parseInt(el.value, 10) : 0;
        // Remove both first (already done above)
        if (val === 1) sc_start(player, SC['ADRENALINE']);
        else if (val === 2) sc_start(player, SC['ADRENALINE2']);
        // else neither
    }
    else if (sc === 'MARIONETTE') {
        if(document.getElementsByName("buff_marionette")[0] && document.getElementsByName("buff_marionette")[0].checked) {
            var statCom = document.getElementsByName('buff_marionette_status_compensation')[0] && document.getElementsByName('buff_marionette_status_compensation')[0].checked ? 1 : 0;
            var str = document.getElementsByName('buff_marionette_str')[0];
            var agi = document.getElementsByName('buff_marionette_agi')[0];
            var vit = document.getElementsByName('buff_marionette_vit')[0];
            var int_ = document.getElementsByName('buff_marionette_int')[0];
            var dex = document.getElementsByName('buff_marionette_dex')[0];
            var luk = document.getElementsByName('buff_marionette_luk')[0];
            sc_start(player, SC.MARIONETTE, statCom, str ? parseInt(str.value, 10) : 0, agi ? parseInt(agi.value, 10) : 0, vit ? parseInt(vit.value, 10) : 0, int_ ? parseInt(int_.value, 10) : 0, dex ? parseInt(dex.value, 10) : 0, luk ? parseInt(luk.value, 10) : 0);
        }
    }
    // Bard/Dancer songs (stat/lesson selects)
    else if (sc === 'WHISTLE' || sc === 'ASSNCROS' || sc === 'POEMBRAGI' || sc === 'APPLEIDUN' || sc === 'HUMMING' || sc === 'FORTUNE' || sc === 'SERVICE4U') {
        // Map skill to stat/lesson fields
        var skillMap = {
            'WHISTLE': ['buff_whistle', 'buff_whistle_agi', 'buff_whistle_luk', 'buff_whistle_lesson'],
            'ASSNCROS': ['buff_assncros', 'buff_assncros_agi', null, 'buff_assncros_lesson'],
            'POEMBRAGI': ['buff_poembragi', 'buff_poembragi_dex', 'buff_poembragi_int', 'buff_poembragi_lesson'],
            'APPLEIDUN': ['buff_appleidun', 'buff_appleidun_vit', null, 'buff_appleidun_lesson'],
            'HUMMING': ['buff_humming', 'buff_humming_dex', null, 'buff_humming_lesson'],
            'FORTUNE': ['buff_fortunekiss', 'buff_fortunekiss_luk', null, 'buff_fortunekiss_lesson'],
            'SERVICE4U': ['buff_service4u', 'buff_service4u_int', null, 'buff_service4u_lesson']
        };
        var level = skillMap[sc][0] ? document.getElementsByName(skillMap[sc][0])[0] : null;
        var stat1 = skillMap[sc][1] ? document.getElementsByName(skillMap[sc][1])[0] : null;
        var stat2 = skillMap[sc][2] ? document.getElementsByName(skillMap[sc][2])[0] : null;
        var lesson = skillMap[sc][3] ? document.getElementsByName(skillMap[sc][3])[0] : null;
        // Remove first, then add with stat/lesson values
        level = level ? parseInt(level.value, 10) : 0;
        if(level > 0)
            sc_start(player, SC[sc], level, lesson ? parseInt(lesson.value, 10) : 0, stat1 ? parseInt(stat1.value, 10) : 0, stat2 ? parseInt(stat2.value, 10) : 0);
    } else if (sc === 'WHISTLE_SRS' || sc === 'ASSNCROS_SRS' || sc === 'HUMMING_SRS' || sc === 'FORTUNE_SRS') {
        var value = fixed ? parseInt(fixed, 10) : 1;
        // Mutual exclusivity logic
        if (sc === 'WHISTLE_SRS' && el.checked) {
            sc_end(player, SC['ASSNCROS_SRS']);
            var other = document.querySelector('input[type="checkbox"][data-sc="ASSNCROS_SRS"]');
            if (other && other.checked) other.checked = false;
        } else if (sc === 'ASSNCROS_SRS' && el.checked) {
            sc_end(player, SC['WHISTLE_SRS']);
            var other = document.querySelector('input[type="checkbox"][data-sc="WHISTLE_SRS"]');
            if (other && other.checked) other.checked = false;
        } else if (sc === 'HUMMING_SRS' && el.checked) {
            sc_end(player, SC['FORTUNE_SRS']);
            var other = document.querySelector('input[type="checkbox"][data-sc="FORTUNE_SRS"]');
            if (other && other.checked) other.checked = false;
        } else if (sc === 'FORTUNE_SRS' && el.checked) {
            sc_end(player, SC['HUMMING_SRS']);
            var other = document.querySelector('input[type="checkbox"][data-sc="HUMMING_SRS"]');
            if (other && other.checked) other.checked = false;
        }
        // Now activate/deactivate as normal
        if (el.checked) {
            sc_start(player, SC[sc], value);
        } else {
            sc_end(player, SC[sc]);
        }
    } else if (sc === 'SAGEGROUND') {
        var label = document.getElementsByName('buff_sage_ground_label')[0] ? parseInt(document.getElementsByName('buff_sage_ground_label')[0].value, 10) : 0;
        var status;
        if(label == 0)
            status = SC.VOLCANO;
        else if (label == 1)
            status = SC.DELUGE;
        else if (label == 2)
            status = SC.WHIRLWIND;

        var level = document.getElementsByName("buff_sage_ground_lv")[0] ? parseInt(document.getElementsByName("buff_sage_ground_lv")[0].value, 10) : 0;
        sc_end(player, SC.VOLCANO);
        sc_end(player, SC.DELUGE);
        sc_end(player, SC.WHIRLWIND);
        if (level > 0) {
            sc_start(player, status, level);
        }
    } else if (sc === 'WATK_ELEMENT') {
        var value = fixed ? parseInt(fixed, 10) : 1;
        if(el.checked)
            sc_start(player, SC.WATK_ELEMENT, ELE.FIRE, 20);
        else
            sc_end(player, SC.WATK_ELEMENT);
    } else if (sc === 'ASPDPOT') {
        let label = document.getElementsByName("buff_aspdpot")[0] ? parseInt(document.getElementsByName("buff_aspdpot")[0].value, 10) : 0;
        var status;
        if(label === 1)
            status = SC.ASPDPOTION0;
        else if(label === 2)
            status = SC.ASPDPOTION1;
        else if(label === 3)
            status = SC.ASPDPOTION2;
        else if(label === 4)
            status = SC.ASPDPOTION3;
        sc_end(player, SC.ASPDPOTION0);
        sc_end(player, SC.ASPDPOTION1);
        sc_end(player, SC.ASPDPOTION2);
        sc_end(player, SC.ASPDPOTION3);
        if(label >= 0)
            sc_start(player, status);
    } else if (sc === 'TALISMAN') {
        var label = document.getElementsByName('buff_talisman_label')[0] ? parseInt(document.getElementsByName('buff_talisman_label')[0].value, 10) : 0;
        var status;
        if(label == 0)
            status = SC.T_BLUE_DRAGON_BUFF;
        else if (label == 1)
            status = SC.T_RED_PHOENIX_BUFF;
        else if (label == 2)
            status = SC.T_BLACK_TORTOISE_BUFF;

        var level = document.getElementsByName("buff_talisman_lv")[0] ? parseInt(document.getElementsByName("buff_talisman_lv")[0].value, 10) : 0;
        sc_end(player, SC.T_BLUE_DRAGON_BUFF);
        sc_end(player, SC.T_RED_PHOENIX_BUFF);
        sc_end(player, SC.T_BLACK_TORTOISE_BUFF);
        if (level > 0) {
            sc_start(player, status, level);
        }
    }
    // Normal case
    else if (el.type === 'checkbox' && el.checked) {
        var value = fixed ? parseInt(fixed, 10) : 1;
        if (sc.includes('|')) {
            sc.split('|').forEach(function(s) { sc_start(player, SC[s], value); });
        } else {
            sc_start(player, SC[sc], value);
        }
    } else if (el.tagName === 'SELECT' && el.value !== '0') {
        var value = fixed ? parseInt(fixed, 10) : parseInt(el.value, 10);
        if (sc.includes('|')) {
            sc.split('|').forEach(function(s) { sc_start(player, SC[s], value); });
        } else {
            sc_start(player, SC[sc], value);
        }
    }
    if(tableHeaderFunction == 1)
        updateSupportSkillHeader();
    else if (tableHeaderFunction == 2)
        updateMusicDanceSkillHeader();
    else if (tableHeaderFunction == 3)
        updateGuildSkillHeader();
    else if(tableHeaderFunction == 4)
        updateMiscEffectHeader();
    else if(tableHeaderFunction == 7)
        updateFoodEffectHeader();
    if (typeof calc === 'function') calc();
}
// Simple show/hide toggle for static SIENSKILL table
function SetSupportSkillsVisibility(show) {
    var table = document.getElementById('SIENSKILL');
    if (!table) return;
    // Find the header and the rest of the rows
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    // Show/hide all rows except the header
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    // Update header text
    var header = document.getElementById('A2TD');
    if (header) {
        // Always set colspan=6 for the header
        header.setAttribute('colspan', '6');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetSupportSkillsVisibility(show ? 0 : 1); };
    }
}

// Checks static SIENSKILL table controls for any active buff and updates header
function updateSupportSkillHeader() {
    var table = document.getElementById('SIENSKILL');
    if (!table) return;
    var hasActive = false;
    // Check all inputs/selects in the table for active values
    var inputs = table.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        if (el.type === 'checkbox' && el.checked) {
            hasActive = true; break;
        }
        if (el.tagName === 'SELECT' && el.value !== '0') {
            hasActive = true; break;
        }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('A2TD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    if (document.getElementById('A2used')) {
        myInnerHtml('A2used', hasActive ? ' [active]' : '', 0);
    }
}

// --- Music & Dance Skills Table: Isolated Visual Cue and Toggle Functions ---
function SetDanceSkillsVisibility(show) {
    var table = document.getElementById('SP_SIEN01');
    if (!table) return;
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    var header = document.getElementById('A3TD');
    if (header) {
        header.setAttribute('colspan', '6');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetDanceSkillsVisibility(show ? 0 : 1); };
    }
    updateMusicDanceSkillHeader();
}

function updateMusicDanceSkillHeader() {
    var table = document.getElementById('SP_SIEN01');
    if (!table) return;
    var hasActive = false;
    // Check all main skill selects, ensemble skills, and Marionette Control checkbox
    var mainSkillNames = [
        'buff_whistle', 'buff_assncros', 'buff_poembragi', 'buff_appleidun', 'buff_humming', 'buff_fortunekiss', 'buff_service4u',
        'buff_siegfried', 'buff_richmankim', 'buff_drumbattle', 'buff_nibelungen', 
        'buff_whistle_srs', 'buff_assncros_srs', 'buff_fortune_srs', 'buff_humming_srs',
        'buff_marionette'
    ];
    for (var i = 0; i < mainSkillNames.length; i++) {
        var el = document.getElementsByName(mainSkillNames[i])[0];
        if (el && el.type === 'checkbox' && el.checked) { hasActive = true; break; }
        if (el && el.tagName === 'SELECT' && el.value !== '0') { hasActive = true; break; }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('A3TD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    var used = document.getElementById('A3used');
    if (used) {
        used.innerHTML = hasActive ? ' [active]' : '';
    }
}

// Hide stat/lesson selects until skill > 1 for Music/Dance table
function updateMusicDanceStatLessonVisibility() {
    // Map: skill select name -> [stat/lesson label IDs, stat/lesson select names]
    var config = [
        { main: 'buff_whistle', stats: ['buff_whistle_agi','buff_whistle_luk'], lessons: ['buff_whistle_lesson'], statLabel: 'buffcell_whistle_stat_label', statInput: 'buffcell_whistle_stat_input', lessonLabel: 'buffcell_whistle_lesson_label', lessonInput: 'buffcell_whistle_lesson_input' },
        { main: 'buff_assncros', stats: ['buff_assncros_agi'], lessons: ['buff_assncros_lesson'], statLabel: 'buffcell_assncros_stat_label', statInput: 'buffcell_assncros_stat_input', lessonLabel: 'buffcell_assncros_lesson_label', lessonInput: 'buffcell_assncros_lesson_input' },
        { main: 'buff_poembragi', stats: ['buff_poembragi_dex','buff_poembragi_int'], lessons: ['buff_poembragi_lesson'], statLabel: 'buffcell_poembragi_stat_label', statInput: 'buffcell_poembragi_stat_input', lessonLabel: 'buffcell_poembragi_lesson_label', lessonInput: 'buffcell_poembragi_lesson_input' },
        { main: 'buff_appleidun', stats: ['buff_appleidun_vit'], lessons: ['buff_appleidun_lesson'], statLabel: 'buffcell_appleidun_stat_label', statInput: 'buffcell_appleidun_stat_input', lessonLabel: 'buffcell_appleidun_lesson_label', lessonInput: 'buffcell_appleidun_lesson_input' },
        { main: 'buff_humming', stats: ['buff_humming_dex'], lessons: ['buff_humming_lesson'], statLabel: 'buffcell_humming_stat_label', statInput: 'buffcell_humming_stat_input', lessonLabel: 'buffcell_humming_lesson_label', lessonInput: 'buffcell_humming_lesson_input' },
        { main: 'buff_fortunekiss', stats: ['buff_fortunekiss_luk'], lessons: ['buff_fortunekiss_lesson'], statLabel: 'buffcell_fortunekiss_stat_label', statInput: 'buffcell_fortunekiss_stat_input', lessonLabel: 'buffcell_fortunekiss_lesson_label', lessonInput: 'buffcell_fortunekiss_lesson_input' },
        { main: 'buff_service4u', stats: ['buff_service4u_int'], lessons: ['buff_service4u_lesson'], statLabel: 'buffcell_service4u_stat_label', statInput: 'buffcell_service4u_stat_input', lessonLabel: 'buffcell_service4u_lesson_label', lessonInput: 'buffcell_service4u_lesson_input' }
    ];
    config.forEach(function(skill) {
        var mainSel = document.getElementsByName(skill.main)[0];
        var show = mainSel && parseInt(mainSel.value, 10) > 0;
        // Stat fields
        if (skill.statLabel) {
            var statLabel = document.getElementById(skill.statLabel);
            if (statLabel) statLabel.style.display = show ? '' : 'none';
        }
        if (skill.statInput) {
            var statInput = document.getElementById(skill.statInput);
            if (statInput) statInput.style.display = show ? '' : 'none';
        }
        if (skill.stats && skill.stats.length) {
            skill.stats.forEach(function(name) {
                var el = document.getElementsByName(name)[0];
                if (el) {
                    el.style.display = show ? '' : 'none';
                    //if (!show) el.value = el.options[0].value;
                }
            });
        }
        // Lesson fields
        if (skill.lessonLabel) {
            var lessonLabel = document.getElementById(skill.lessonLabel);
            if (lessonLabel) lessonLabel.style.display = show ? '' : 'none';
        }
        if (skill.lessonInput) {
            var lessonInput = document.getElementById(skill.lessonInput);
            if (lessonInput) lessonInput.style.display = show ? '' : 'none';
        }
        if (skill.lessons) {
            skill.lessons.forEach(function(name) {
                var lessonSel = document.getElementsByName(name)[0];
                if (lessonSel) {
                    lessonSel.style.display = show ? '' : 'none';
                    //if (!show) lessonSel.value = lessonSel.options[0].value;
                }
            });
        }
    });
}

// Hide Marionette stat selects and status compensation checkbox until Marionette Control is checked
function updateMarionetteVisibility() {
    var marionetteCheckbox = document.getElementsByName('buff_marionette')[0];
    var show = marionetteCheckbox && marionetteCheckbox.checked;
    var statLabel = document.getElementById('buffcell_marionette_stat_label');
    if (statLabel) statLabel.style.display = show ? '' : 'none';
    // All stat selects
    var statNames = ['buff_marionette_str','buff_marionette_agi','buff_marionette_vit','buff_marionette_int','buff_marionette_dex','buff_marionette_luk'];
    statNames.forEach(function(name) {
        var el = document.getElementsByName(name)[0];
        if (el) el.style.display = show ? '' : 'none';
    });
    // Status compensation checkbox
    var comp = document.getElementsByName('buff_marionette_status_compensation')[0];
    if (comp) comp.style.display = show ? '' : 'none';
}

// --- Guild Skills Table ---
function SetGuildSkillsVisibility(show) {
    var table = document.getElementById('SP_SIEN02');
    if (!table) return;
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    var header = document.getElementById('A4TD');
    if (header) {
        header.setAttribute('colspan', '2');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetGuildSkillsVisibility(show ? 0 : 1); };
    }
    updateGuildSkillHeader();
}

// Checks static SP_SIEN02 table controls for any active buff and updates header
function updateGuildSkillHeader() {
    var table = document.getElementById('SP_SIEN02');
    if (!table) return;
    var hasActive = false;
    // Check all inputs/selects in the table for active values
    var inputs = table.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        if (el.type === 'checkbox' && el.checked) {
            hasActive = true; break;
        }
        if (el.tagName === 'SELECT' && el.value !== '0') {
            hasActive = true; break;
        }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('A4TD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    if (document.getElementById('A4used')) {
        myInnerHtml('A4used', hasActive ? ' [active]' : '', 0);
    }
}

// --- Miscellaneous Effects on Player Table ---
function SetMiscEffectsVisibility(show) {
    var table = document.getElementById('SP_SIEN04');
    if (!table) return;
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    var header = document.getElementById('A6TD');
    if (header) {
        header.setAttribute('colspan', '4');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetMiscEffectsVisibility(show ? 0 : 1); };
    }
    updateMiscEffectHeader();
}

// Checks static SP_SIEN04 table controls for any active buff and updates header
function updateMiscEffectHeader() {
    var table = document.getElementById('SP_SIEN04');
    if (!table) return;
    var hasActive = false;
    // Check all inputs/selects in the table for active values
    var inputs = table.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        if (el.type === 'checkbox' && el.checked) {
            hasActive = true; break;
        }
        if (el.tagName === 'SELECT' && el.value !== '0') {
            hasActive = true; break;
        }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('A6TD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    if (document.getElementById('A6used')) {
        myInnerHtml('A6used', hasActive ? ' [active]' : '', 0);
    }
}

// --- Food Effects Table ---
function SetFoodEffectsVisibility(show) {
    var table = document.getElementById('SP_SIEN05');
    if (!table) return;
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    var header = document.getElementById('A7TD');
    if (header) {
        header.setAttribute('colspan', '3');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetFoodEffectsVisibility(show ? 0 : 1); };
    }
    updateFoodEffectHeader();
}

// Checks static SP_SIEN05 table controls for any active buff and updates header
function updateFoodEffectHeader() {
    var table = document.getElementById('SP_SIEN05');
    if (!table) return;
    var hasActive = false;
    // Check all inputs/selects in the table for active values
    var inputs = table.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        if (el.type === 'checkbox' && el.checked) {
            hasActive = true; break;
        }
        if (el.tagName === 'SELECT' && el.value !== '0') {
            hasActive = true; break;
        }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('A7TD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    if (document.getElementById('A7used')) {
        myInnerHtml('A7used', hasActive ? ' [active]' : '', 0);
    }
}

// --- Additional Effects Table ---
function SetAdditionalEffectsVisibility(show) {
    var table = document.getElementById('ID_ETC');
    if (!table) return;
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    var header = document.getElementById('A8TD');
    if (header) {
        header.setAttribute('colspan', '3');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetAdditionalEffectsVisibility(show ? 0 : 1); };
    }

    updateAdditionalEffectHeader();
}

// Checks static ID_ETC table controls for any active buff and updates header
function updateAdditionalEffectHeader() {
    var table = document.getElementById('ID_ETC');
    if (!table) return;
    var hasActive = false;
    // Check all inputs/selects in the table for active values
    var inputs = table.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        if(el.disabled) continue; // Ignore disabled controls
        if (el.type === 'checkbox' && el.checked) {
            hasActive = true; break;
        }
        if (el.tagName === 'SELECT' && el.value !== '0') {
            hasActive = true; break;
        }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('A8TD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    if (document.getElementById('A8used')) {
        myInnerHtml('A8used', hasActive ? ' [active]' : '', 0);
    }
}

/**
 * Populates the pet and temporary effect selects from data arrays.
 * Called once on DOMContentLoaded since the options never change.
 */
function populateAdditionalEffectSelects() {
    const petSelect = document.getElementsByName("buff_pet")[0];
    if (petSelect) {
        for (let i = 1; i < m_PET_SORT.length; i++) {
            const id = m_PET_SORT[i];
            petSelect.options[i] = new Option(m_PET[id][1], id);
        }
    }
 
    const tempSelects = [
        document.getElementsByName("buff_temp_effects_1")[0],
        document.getElementsByName("buff_temp_effects_2")[0],
        document.getElementsByName("buff_temp_effects_3")[0],
        document.getElementsByName("buff_temp_effects_4")[0],
    ];
    const tempLabel = `${m_TempEffect[0][1]} [${m_TempEffect[0][2]}]`;
    for (const sel of tempSelects) {
        if (!sel) continue;
        for (let i = 0; i < m_TempEffect_SORT.length; i++) {
            const id = m_TempEffect_SORT[i];
            sel.options[i] = new Option(`${m_TempEffect[id][1]} [${m_TempEffect[id][2]}]`, id);
        }
    }
}

/**
 * onChange handler for the pet and temporary effect selects.
 * Writes to player.pet / player.temp_effect
 * for foot.js save/load and StPlusCard/TimeItemNumSearch.
 */
function updatePlayerAdditionalEffects(e) {
    const el = e.target || e;
    const dataId = el.getAttribute("data-id");
    const val = parseInt(el.value, 10) || 0;
 
    switch (dataId) {
        case "PET":
            player.pet = val;
            break;
        case "TEMP_EFFECTS_1":
            player.temp_effect[0] = val;
            break;
        case "TEMP_EFFECTS_2":
            player.temp_effect[1] = val;
            break;
        case "TEMP_EFFECTS_3":
            player.temp_effect[2] = val;
            break;
        case "TEMP_EFFECTS_4":
            player.temp_effect[3] = val;
            break;
        case "EXP_PARTY_MEMBER":
            player.exp_modifiers.party_member_count = val || 0;
            break;
        case "EXP_BATTLE_MANUAL":
            player.exp_modifiers.battle_manual = val;
            break;
        case "EXP_JOB_MANUAL":
            player.exp_modifiers.job_manual = el.checked;
            break;
    }
 
    updateAdditionalEffectHeader();
    calc();
}

function updatePlayerManualEdits(e, tableHeaderFunction) {
    var el = e.target || e;
    var dataType = parseInt(el.getAttribute("data-type"), 10) || 0;
    if(!dataType || !window.player) return;
    var val = parseInt(el.value, 10) || 0;
    // List of skilldamage input/select name pairs
    var skilldamageFields = [
        {input: 'manual_skilldamage', select: 'manual_skilldamage_skill', type: 600},
        {input: 'manual_skilldamage2', select: 'manual_skilldamage2_skill', type: 601}
    ];
    // If this is a skilldamage select/input, enforce unique skill selection and clear unused skill bonuses
    var changedSkillField = skilldamageFields.find(f => f.type === dataType);
    if (changedSkillField) {
        // Gather all currently selected skill ids from all skilldamage selects
        var skillSelectedIds = [];
        skilldamageFields.forEach(function(f) {
            var sel = document.getElementsByName(f.select)[0];
            if (sel) {
                var selVal = parseInt(sel.value, 10) || 0;
                if (selVal !== 0) skillSelectedIds.push(selVal);
            }
        });

        // Get all possible skill ids from the options in the selects
        var allSkillIds = new Set();
        skilldamageFields.forEach(function(f) {
            var sel = document.getElementsByName(f.select)[0];
            if (sel) {
                for (var i = 0; i < sel.options.length; i++) {
                    var optVal = parseInt(sel.options[i].value, 10);
                    if (!isNaN(optVal) && optVal !== 0) allSkillIds.add(optVal);
                }
            }
        });

        // For each possible skill id, if not currently selected, call manualedits_end for type 5000+skillid
        allSkillIds.forEach(function(skillId) {
            if (skillSelectedIds.indexOf(skillId) === -1) {
                manualedits_end(player, 5000 + skillId);
            }
        });
    }

    // List of atkmod input/select name pairs
    var atkmodFields = [
        {input: 'manual_atkmod', select: 'manual_atkmod_type', type: 500},
        {input: 'manual_atkmod2', select: 'manual_atkmod2_type', type: 501},
        {input: 'manual_atkmod3', select: 'manual_atkmod3_type', type: 502},
        {input: 'manual_atkmod4', select: 'manual_atkmod4_type', type: 503}
    ];
    // List of resmod input/select name pairs
    var resmodFields = [
        {input: 'manual_resmod', select: 'manual_resmod_type', type: 505},
        {input: 'manual_resmod2', select: 'manual_resmod2_type', type: 506},
        {input: 'manual_resmod3', select: 'manual_resmod3_type', type: 507},
        {input: 'manual_resmod4', select: 'manual_resmod4_type', type: 508}
    ];


    // If this is an atkmod select/input, enforce unique type selection and clear unused types
    var changedField = atkmodFields.find(f => f.type === dataType);
    if (changedField) {
        // Gather all currently selected type values from all atkmod selects
        var atkmodSelectedTypes = [];
        atkmodFields.forEach(function(f) {
            var sel = document.getElementsByName(f.select)[0];
            if (sel) {
                var selVal = parseInt(sel.value, 10) || 0;
                if (selVal !== 0) atkmodSelectedTypes.push(selVal);
            }
        });

        // Get all possible type values from the options in the selects
        var allTypeValues = new Set();
        atkmodFields.forEach(function(f) {
            var sel = document.getElementsByName(f.select)[0];
            if (sel) {
                for (var i = 0; i < sel.options.length; i++) {
                    var optVal = parseInt(sel.options[i].value, 10);
                    if (!isNaN(optVal) && optVal !== 0) allTypeValues.add(optVal);
                }
            }
        });

        // For each possible type value, if not currently selected, call manualedits_end
        allTypeValues.forEach(function(typeVal) {
            if (atkmodSelectedTypes.indexOf(typeVal) === -1) {
                manualedits_end(player, typeVal);
            }
        });
    }

    // If this is a resmod select/input, enforce unique type selection and clear unused types
    var changedResField = resmodFields.find(f => f.type === dataType);
    if (changedResField) {
        // Gather all currently selected type values from all resmod selects
        var resmodSelectedTypes = [];
        resmodFields.forEach(function(f) {
            var sel = document.getElementsByName(f.select)[0];
            if (sel) {
                var selVal = parseInt(sel.value, 10) || 0;
                if (selVal !== 0) resmodSelectedTypes.push(selVal);
            }
        });

        // Get all possible type values from the options in the selects
        var allResTypeValues = new Set();
        resmodFields.forEach(function(f) {
            var sel = document.getElementsByName(f.select)[0];
            if (sel) {
                for (var i = 0; i < sel.options.length; i++) {
                    var optVal = parseInt(sel.options[i].value, 10);
                    if (!isNaN(optVal) && optVal !== 0) allResTypeValues.add(optVal);
                }
            }
        });

        // For each possible type value, if not currently selected, call manualedits_end
        allResTypeValues.forEach(function(typeVal) {
            if (resmodSelectedTypes.indexOf(typeVal) === -1) {
                manualedits_end(player, typeVal);
            }
        });
    }

    // Always clear the previous effect for this type
    manualedits_end(player, dataType);

    // For atkmod, resmod, or skilldamage, get the latest value/type from the DOM
    if (dataType === 500 || dataType === 501 || dataType === 502 || dataType === 503) {
        var field = atkmodFields.find(f => f.type === dataType);
        if (field) {
            var type = parseInt(document.getElementsByName(field.select)[0].value, 10) || 0;
            var val = parseInt(document.getElementsByName(field.input)[0].value, 10) || 0;
        }
    } else if (dataType === 505 || dataType === 506 || dataType === 507 || dataType === 508) {
        var field = resmodFields.find(f => f.type === dataType);
        if (field) {
            var type = parseInt(document.getElementsByName(field.select)[0].value, 10) || 0;
            var val = parseInt(document.getElementsByName(field.input)[0].value, 10) || 0;
        }
    } else if (dataType === 600 || dataType === 601) {
        var field = skilldamageFields.find(f => f.type === dataType);
        if (field) {
            var skillId = parseInt(document.getElementsByName(field.select)[0].value, 10) || 0;
            var type = skillId ? (5000 + skillId) : 0;
            var val = parseInt(document.getElementsByName(field.input)[0].value, 10) || 0;
        }
    } else {
        var type = dataType;
        // val already set above
    }

    if(val !== 0 && type !== 0)
        manualedits_start(player, type, val);

    updatePlayerManualEditsHeader();
    if (typeof calc === 'function') calc();
}

// --- Manual Edits Table ---
function SetPlayerManualEditsVisibility(show) {
    var table = document.getElementById('ID_ARG');
    if (!table) return;
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    var header = document.getElementById('A9TD');
    if (header) {
        header.setAttribute('colspan', '4');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetPlayerManualEditsVisibility(show ? 0 : 1); };
    }
    updatePlayerManualEditsHeader();
}

// Checks static ID_ARG table controls for any active buff and updates header
function updatePlayerManualEditsHeader() {
    var table = document.getElementById('ID_ARG');
    if (!table) return;
    var hasActive = false;
    // Check all inputs/selects in the table for active values
    var inputs = table.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        if (el.type === 'checkbox' && el.checked) {
            hasActive = true; break;
        }
        if (el.tagName === 'SELECT' && el.value !== '0') {
            hasActive = true; break;
        }
        if(el.type === 'text' && el.value.trim() !== '0' && el.value.trim() !== '') {
            hasActive = true; break;
        }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('A9TD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    if (document.getElementById('A9used')) {
        myInnerHtml('A9used', hasActive ? ' [active]' : '', 0);
    }
}

function reloadRandOpt(){
    c.A_weapon1_ropt1.value = player.randopt[0];
    c.WEAP1_ROPT1.value = player.randopt[1];
    c.A_weapon1_ropt2.value = player.randopt[2];
    c.WEAP1_ROPT2.value = player.randopt[3];
    c.A_weapon1_ropt3.value = player.randopt[4];
    c.WEAP1_ROPT3.value = player.randopt[5];
    c.A_weapon1_ropt4.value = player.randopt[6];
    c.WEAP1_ROPT4.value = player.randopt[7];
    if(player.dual_wield){
        c.A_weapon2_ropt1.value = player.randopt[8];
        c.WEAP2_ROPT1.value = player.randopt[9];
        c.A_weapon2_ropt2.value = player.randopt[10];
        c.WEAP2_ROPT2.value = player.randopt[11];
        c.A_weapon2_ropt3.value = player.randopt[12];
        c.WEAP2_ROPT3.value = player.randopt[13];
        c.A_weapon2_ropt4.value = player.randopt[14];
        c.WEAP2_ROPT4.value = player.randopt[15];
    }
    c.A_body_ropt1.value = player.randopt[16];
    c.BODY_ROPT1.value = player.randopt[17];
    c.A_body_ropt2.value = player.randopt[18];
    c.BODY_ROPT2.value = player.randopt[19];
    c.A_shoulder_ropt1.value = player.randopt[20];
    c.SHOULDER_ROPT1.value = player.randopt[21];
    c.A_shoulder_ropt2.value = player.randopt[22];
    c.SHOULDER_ROPT2.value = player.randopt[23];
    c.A_shoes_ropt1.value = player.randopt[24];
    c.SHOES_ROPT1.value = player.randopt[25];
    c.A_shoes_ropt2.value = player.randopt[26];
    c.SHOES_ROPT2.value = player.randopt[27];
}

function RandOptUpdate(){
    calc();
}

function reloadShadowEquip(){
    c.A_weapon_shadow.value = player.shadow[0];
    c.A_left_shadow.value = player.shadow[1];
    c.A_shoes_shadow.value = player.shadow[3];
}

function reloadEnchant() {
    // Headgear enchant
    const hasHeadEnchant = m_HeadgearEnchant.includes(player.equip[EQI.HEAD_TOP]);
    c.A_head_enchant.style.display = hasHeadEnchant ? 'inline-block' : 'none';
    document.getElementById("A_head_enchant_row").style.display = hasHeadEnchant ? 'table-row' : 'none';
    if (!hasHeadEnchant) c.A_head_enchant.value = 0;
 
    // Armor enchant (mutually exclusive with armor randopt)
    const hasArmorEnchant = m_ArmorEnchant.includes(player.equip[EQI.ARMOR]);
    c.A_body_enchant1.style.display = hasArmorEnchant ? 'inline-block' : 'none';
    c.A_body_enchant2.style.display = hasArmorEnchant ? 'inline-block' : 'none';
    c.A_body_ropt1.style.display = hasArmorEnchant ? 'none' : 'inline-block';
    c.BODY_ROPT1.style.display = hasArmorEnchant ? 'none' : 'inline-block';
    c.A_body_ropt2.style.display = hasArmorEnchant ? 'none' : 'inline-block';
    c.BODY_ROPT2.style.display = hasArmorEnchant ? 'none' : 'inline-block';
    if (!hasArmorEnchant) { c.A_body_enchant1.value = 0; c.A_body_enchant2.value = 0; }
    if (hasArmorEnchant)  { 
        player.randopt[16] = 0; player.randopt[17] = 0; player.randopt[18] = 0; player.randopt[19] = 0; 
        c.A_body_ropt1.value = 0; c.BODY_ROPT1.value = 0; c.A_body_ropt2.value = 0; c.BODY_ROPT2.value = 0;
    }
 
    // Garment enchant (mutually exclusive with garment randopt)
    const hasGarmentEnchant = m_GarmentEnchant.includes(player.equip[EQI.GARMENT]);
    c.A_shoulder_enchant1.style.display = hasGarmentEnchant ? 'inline-block' : 'none';
    c.A_shoulder_enchant2.style.display = hasGarmentEnchant ? 'inline-block' : 'none';
    c.A_shoulder_ropt1.style.display = hasGarmentEnchant ? 'none' : 'inline-block';
    c.SHOULDER_ROPT1.style.display = hasGarmentEnchant ? 'none' : 'inline-block';
    c.A_shoulder_ropt2.style.display = hasGarmentEnchant ? 'none' : 'inline-block';
    c.SHOULDER_ROPT2.style.display = hasGarmentEnchant ? 'none' : 'inline-block';
    if (!hasGarmentEnchant) { c.A_shoulder_enchant1.value = 0; c.A_shoulder_enchant2.value = 0; }
    if (hasGarmentEnchant)  { 
        player.randopt[20] = 0; player.randopt[21] = 0; player.randopt[22] = 0; player.randopt[23] = 0; 
        c.A_shoulder_ropt1.value = 0; c.SHOULDER_ROPT1.value = 0; c.A_shoulder_ropt2.value = 0; c.SHOULDER_ROPT2.value = 0;
    }
 
    // Shoes enchant (mutually exclusive with shoes randopt)
    const hasShoesEnchant = m_ShoesEnchant.includes(player.equip[EQI.SHOES]);
    c.A_shoes_enchant1.style.display = hasShoesEnchant ? 'inline-block' : 'none';
    c.A_shoes_enchant2.style.display = hasShoesEnchant ? 'inline-block' : 'none';
    c.A_shoes_ropt1.style.display = hasShoesEnchant ? 'none' : 'inline-block';
    c.SHOES_ROPT1.style.display = hasShoesEnchant ? 'none' : 'inline-block';
    c.A_shoes_ropt2.style.display = hasShoesEnchant ? 'none' : 'inline-block';
    c.SHOES_ROPT2.style.display = hasShoesEnchant ? 'none' : 'inline-block';
    if (!hasShoesEnchant) { c.A_shoes_enchant1.value = 0; c.A_shoes_enchant2.value = 0; }
    if (hasShoesEnchant)  { 
        player.randopt[24] = 0; player.randopt[25] = 0; player.randopt[26] = 0; player.randopt[27] = 0; 
        c.A_shoes_ropt1.value = 0; c.SHOES_ROPT1.value = 0; c.A_shoes_ropt2.value = 0; c.SHOES_ROPT2.value = 0;
    }
}

function isNumeric(e) {
    var _ = e || window.event
        , n = _.keyCode || _.which;
    n = String.fromCharCode(n);
    /[0-9]|\-/.test(n) || (_.returnValue = !1,
        _.preventDefault && _.preventDefault())
}

// Update monster status changes from tables
function updateStatusMonster(e, tableHeaderFunction) {
    var el = e.target || e;
    var sc = el.getAttribute('data-sc');
    if (!sc || !window.monster) return;
    var fixed = el.getAttribute('data-fixed');
    // Remove all related statuses first (handles toggling off)
    if (sc.includes('|')) {
        sc.split('|').forEach(function(s) { sc_end(monster, SC[s]); });
    } else {
        sc_end(monster, SC[sc]);
    }
    // Special case: ELEMENTALCHANGE
    if (sc === 'ELEMENTALCHANGE') {
        var val = el.tagName === 'SELECT' ? parseInt(el.value, 10) : 0; 
        sc_start(monster, SC.ELEMENTALCHANGE, val, 1);
    } else if (sc === 'ELEMENTALCHANGE_BUFF') {
        var val = el.tagName === 'SELECT' ? parseInt(el.value, 10) : 0;
        sc_end(monster, SC.ELEMENTALCHANGE);
        if(val > 0)
            sc_start(monster, SC.ELEMENTALCHANGE, Math.trunc(val / 10), val % 10);
    } else if (sc === 'STONESKIN') {
        var val = el.tagName === 'SELECT' ? parseInt(el.value, 10) : 0;
        sc_end(monster, SC.ARMORCHANGE);
        sc_start(monster, SC.ARMORCHANGE, val, SKILL.NPC_STONESKIN);
    } else if (sc === 'ANTIMAGIC') {
        var val = el.tagName === 'SELECT' ? parseInt(el.value, 10) : 0;
        sc_end(monster, SC.ARMORCHANGE);
        sc_start(monster, SC.ARMORCHANGE, val, SKILL.NPC_ANTIMAGIC);
    }
    // Normal case
    else if (el.type === 'checkbox' && el.checked) {
        var value = fixed ? parseInt(fixed, 10) : 1;
        if (sc.includes('|')) {
            sc.split('|').forEach(function(s) { sc_start(monster, SC[s], value); });
        } else {
            sc_start(monster, SC[sc], value);
        }
    } else if (el.tagName === 'SELECT' && el.value !== '0') {
        var value = fixed ? parseInt(fixed, 10) : parseInt(el.value, 10);
        if (sc.includes('|')) {
            sc.split('|').forEach(function(s) { sc_start(monster, SC[s], value); });
        } else {
            sc_start(monster, SC[sc], value);
        }
    }
    if(tableHeaderFunction == 1)
        updateMonsterDebuffHeader();
    else if (tableHeaderFunction == 2)
        updateMonsterBuffHeader();
    if (typeof calc === 'function') calc();
}

// --- Monster Debuffs Table ---
function SetMonsterDebuffsVisibility(show) {
    var table = document.getElementById('EnemyDebuf');
    if (!table) return;
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    var header = document.getElementById('AITD');
    if (header) {
        header.setAttribute('colspan', '4');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetMonsterDebuffsVisibility(show ? 0 : 1); };
    }
    updateMonsterDebuffHeader();
}

function updateMonsterDebuffHeader() {
    var table = document.getElementById('EnemyDebuf');
    if (!table) return;
    var hasActive = false;
    // Check all inputs/selects in the table for active values
    var inputs = table.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        if (el.type === 'checkbox' && el.checked) {
            hasActive = true; break;
        }
        if (el.tagName === 'SELECT' && el.value !== '0') {
            hasActive = true; break;
        }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('AITD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    if (document.getElementById('AIused')) {
        myInnerHtml('AIused', hasActive ? ' [active]' : '', 0);
    }
}

// --- Monster Buffs Table ---
function SetMonsterBuffsVisibility(show) {
    var table = document.getElementById('EnemyBuf');
    if (!table) return;
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    var header = document.getElementById('AKTD');
    if (header) {
        header.setAttribute('colspan', '4');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetMonsterBuffsVisibility(show ? 0 : 1); };
    }
    updateMonsterBuffHeader();
}

function updateMonsterBuffHeader() {
    var table = document.getElementById('EnemyBuf');
    if (!table) return;
    var hasActive = false;
    // Check all inputs/selects in the table for active values
    var inputs = table.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        if (el.type === 'checkbox' && el.checked) {
            hasActive = true; break;
        }
        if (el.tagName === 'SELECT' && el.value !== '0') {
            hasActive = true; break;
        }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('AKTD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    if (document.getElementById('AKused')) {
        myInnerHtml('AKused', hasActive ? ' [active]' : '', 0);
    }
}

function updateEnemyManualEdits(e) {
    var el = e.target || e;
    var dataType = parseInt(el.getAttribute("data-type"), 10) || 0;
    if(!dataType || !window.player) return;
    var val = parseInt(el.value, 10) || 0;
    var type = dataType;


    // Handle element resistance fields (input+select pairs)
    // data-type 600 and 601 are for element resistance fields
    if (dataType === 600 || dataType === 601) {
        // Find the input and select elements for this resistance
        var form = el.form || document;
        var inputName = (dataType === 600) ? 'enemy_manual_eleres' : 'enemy_manual_eleres2';
        var selectName = (dataType === 600) ? 'enemy_manual_eleres_element' : 'enemy_manual_eleres2_element';
        var input = form.querySelector('[name="' + inputName + '"]');
        var select = form.querySelector('[name="' + selectName + '"]');
        var inputVal = input ? parseInt(input.value, 10) || 0 : 0;
        var selectVal = select ? parseInt(select.value, 10) || 0 : 0;

        // Clear ALL previous element resistance manual edits for this field (all elements for this dataType), except the currently selected one
        for (var i = 0; i <= 9; i++) { // 0-9 for all elements
            var combinedType = dataType * 10 + i;
            if (i !== selectVal) {
                manualedits_end(monster, combinedType);
            }
        }
        // Also clear the base type (legacy, if any)
        manualedits_end(monster, dataType);

        // Only apply if inputVal or selectVal is nonzero
        if ((inputVal !== 0 || selectVal !== 0)) {
            // Compose a unique type for this element resistance (e.g., 600 + element)
            type = dataType * 10 + selectVal;
            val = inputVal;
        } else {
            type = 0;
            val = 0;
        }
    }
    // --- Element/Size checkbox logic (added beside, not replacing above) ---
    else if (dataType === 610 || dataType === 611) {
        var form = el.form || document;
        if (el.type === 'checkbox') {
            if (el.checked) {
                if (dataType === 610) {
                    var eleSel = form.querySelector('[name="enemy_manual_element"]');
                    var eleLvSel = form.querySelector('[name="enemy_manual_elelv"]');
                    var eleVal = eleSel ? parseInt(eleSel.value, 10) || 0 : 0;
                    var eleLvVal = eleLvSel ? parseInt(eleLvSel.value, 10) || 1 : 1;
                    // Store as a packed value: (element * 10 + level)
                    var packedVal = eleVal * 10 + eleLvVal;
                    manualedits_start(monster, 610, packedVal);
                } else if (dataType === 611) {
                    var sizeSel = form.querySelector('[name="enemy_manual_size"]');
                    var sizeVal = sizeSel ? parseInt(sizeSel.value, 10) || 0 : 0;
                    manualedits_start(monster, 611, sizeVal);
                }
            } else {
                if (dataType === 610) {
                    manualedits_end(monster, 610);
                } else if (dataType === 611) {
                    manualedits_end(monster, 611);
                }
            }
            updateEnemyManualEditsHeader();
            if (typeof calc === 'function') calc();
            return;
        } else if (el.tagName === 'SELECT') {
            var cbName = (dataType === 610) ? 'enemy_manual_elementbuff' : 'enemy_manual_elementbuff';
            var cb = form.querySelector('[name="' + cbName + '"]');
            if (cb && cb.checked) {
                if (dataType === 610) {
                    var eleSel = form.querySelector('[name="enemy_manual_element"]');
                    var eleLvSel = form.querySelector('[name="enemy_manual_elelv"]');
                    var eleVal = eleSel ? parseInt(eleSel.value, 10) || 0 : 0;
                    var eleLvVal = eleLvSel ? parseInt(eleLvSel.value, 10) || 1 : 1;
                    var packedVal = eleVal * 10 + eleLvVal;
                    manualedits_start(monster, 610, packedVal);
                } else if (dataType === 611) {
                    var sizeSel = form.querySelector('[name="enemy_manual_size"]');
                    var sizeVal = sizeSel ? parseInt(sizeSel.value, 10) || 0 : 0;
                    manualedits_start(monster, 611, sizeVal);
                }
                updateEnemyManualEditsHeader();
                if (typeof calc === 'function') calc();
                return;
            }
        }
    }
    // --- End element/size checkbox logic ---
    else {
        // Always clear the previous effect for this type
        manualedits_end(monster, dataType);
        // type and val already set above
    }

    if(val !== 0 && type !== 0)
        manualedits_start(monster, type, val);

    updateEnemyManualEditsHeader();
    if (typeof calc === 'function') calc();
}

// --- Enemy Manual Edits Table ---
function SetMonsterManualEditsVisibility(show) {
    var table = document.getElementById('B_MANUAL');
    if (!table) return;
    var rows = table.getElementsByTagName('tr');
    if (rows.length < 2) return;
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = show ? '' : 'none';
    }
    var header = document.getElementById('A10TD');
    if (header) {
        header.setAttribute('colspan', '4');
        var rightDiv = header.querySelector('.right');
        if (rightDiv) {
            rightDiv.textContent = show ? '(click to hide)' : '(click to show)';
        }
        header.onclick = function() { SetMonsterManualEditsVisibility(show ? 0 : 1); };
    }
    updateEnemyManualEditsHeader();
}

// Checks static B_MANUAL table controls for any active buff and updates header
function updateEnemyManualEditsHeader() {
    var table = document.getElementById('B_MANUAL');
    if (!table) return;
    var hasActive = false;
    // Check all inputs/selects in the table for active values
    var inputs = table.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        // Element resistance select: only active if associated textbox is nonzero
        if (el.tagName === 'SELECT' && (el.name === 'enemy_manual_eleres_element' || el.name === 'enemy_manual_eleres2_element')) {
            var inputName = (el.name === 'enemy_manual_eleres_element') ? 'enemy_manual_eleres' : 'enemy_manual_eleres2';
            var input = table.querySelector('[name="' + inputName + '"]');
            if (input && input.value.trim() !== '0' && input.value.trim() !== '') {
                hasActive = true; break;
            }
            continue;
        }
        // Element/size select: only active if checkbox is checked
        if (el.tagName === 'SELECT' && (el.name === 'enemy_manual_element' || el.name === 'enemy_manual_elelv' || el.name === 'enemy_manual_size')) {
            var cbName = (el.name === 'enemy_manual_size') ? 'enemy_manual_elementbuff' : 'enemy_manual_elementbuff';
            // For element and size, both use the same checkbox name in this markup
            var cb = table.querySelector('[name="' + cbName + '"]');
            if (cb && cb.checked) {
                hasActive = true; break;
            }
            continue;
        }
        // Checkbox: active if checked
        if (el.type === 'checkbox' && el.checked) {
            hasActive = true; break;
        }
        // Text input: active if nonzero
        if(el.type === 'text' && el.value.trim() !== '0' && el.value.trim() !== '') {
            hasActive = true; break;
        }
    }
    var l = (typeof c !== 'undefined' && c.theme && c.theme.value) ? c.theme.value : 0;
    var header = document.getElementById('A10TD');
    if (header) {
        header.style.backgroundColor = hasActive ? saBGC[l] : sBGC[l];
    }
    if (document.getElementById('A10used')) {
        myInnerHtml('A10used', hasActive ? ' [active]' : '', 0);
    }
}

function ClickB_Enemy() {
    let monsterId = 1 * c.B_Enemy.value;

    for(var i = 0; i < m_MonsterNotes.length; i++){
        if(monsterId == m_MonsterNotes[i][0]){
            document.getElementById("monsterNotes").hidden = false;
            loadNotes(monsterId);
            break;
        } else {
            document.getElementById("monsterNotes").hidden = true;
            resetNotesStats();
        }
    }

    for(var i = 0; i < m_PlaceNotes.length; i++){
        if(c.ENEMY_SORT2.value == m_PlaceNotes[i][0]){
            document.getElementById("monsterNotes").hidden = false;
            loadNotes(monsterId);
            break;
        }
    }

    PopulateMonsterData();    
}

function updateMonsterDebuffsDisplay(){
    function setVal(id, value) {
        let el = document.getElementById(id);
        if(el) el.innerHTML = value;
    }

    if(monster.base_status.class_ == CLASS.BOSS) {
        setVal("debuffcell_mindbreaker_label", "<s>Mind Breaker</s>");
        c.debuff_mindbreaker.disabled = true;
        c.debuff_mindbreaker.value = 0;
        sc_end(monster, SC.MINDBREAKER);

        setVal("debuffcell_provoke_label", "<s>Provoke</s>");
        c.debuff_provoke.disabled = true;
        c.debuff_provoke.value = 0;
        sc_end(monster, SC.PROVOKE);

        setVal("debuffcell_decreaseagi_label", "<s>Decrease AGI</s>");
        c.debuff_decreaseagi.disabled = true;
        c.debuff_decreaseagi.value = 0;
        sc_end(monster, SC.DECREASEAGI);

        setVal("debuffcell_poison_label", "<s>Poison</s>");
        c.debuff_poison.disabled = true;
        c.debuff_poison.checked = false;
        sc_end(monster, SC.POISON);

        setVal("debuffcell_blind_label", "<s>Blind</s>");
        c.debuff_blind.disabled = true;
        c.debuff_blind.checked = false;
        sc_end(monster, SC.BLIND);

        setVal("debuffcell_curse_label", "<s>Curse</s>");
        c.debuff_curse.disabled = true;
        c.debuff_curse.checked = false;
        sc_end(monster, SC.CURSE);

        setVal("debuffcell_stun_label", "<s>Stun</s>");
        c.debuff_stun.disabled = true;
        c.debuff_stun.checked = false;
        sc_end(monster, SC.STUN);

        setVal("debuffcell_freeze_label", "<s>Frozen</s>");
        c.debuff_freeze.disabled = true;
        c.debuff_freeze.checked = false;
        sc_end(monster, SC.FREEZE);

        setVal("debuffcell_stone_label", "<s>Stone</s>");
        c.debuff_stone.disabled = true;
        c.debuff_stone.checked = false;
        sc_end(monster, SC.STONE);

        setVal("debuffcell_sleep_label", "<s>Sleep</s>");
        c.debuff_sleep.disabled = true;
        c.debuff_sleep.checked = false;
        sc_end(monster, SC.SLEEP);
    } else {
        setVal("debuffcell_mindbreaker_label", "Mind Breaker");
        c.debuff_mindbreaker.disabled = false;

        setVal("debuffcell_provoke_label", "Provoke");
        c.debuff_provoke.disabled = false;

        setVal("debuffcell_decreaseagi_label", "Decrease AGI");
        c.debuff_decreaseagi.disabled = false;

        setVal("debuffcell_poison_label", "Poison");
        c.debuff_poison.disabled = false;

        setVal("debuffcell_blind_label", "Blind");
        c.debuff_blind.disabled = false;

        setVal("debuffcell_curse_label", "Curse");
        c.debuff_curse.disabled = false;

        setVal("debuffcell_stun_label", "Stun");
        c.debuff_stun.disabled = false;

        setVal("debuffcell_freeze_label", "Frozen");
        c.debuff_freeze.disabled = false;

        setVal("debuffcell_stone_label", "Stone");
        c.debuff_stone.disabled = false;

        setVal("debuffcell_sleep_label", "Sleep");
        c.debuff_sleep.disabled = false;
    }

    if(monster.base_status.def_ele != ELE.UNDEAD && monster.base_status.race != RC.DEMON) {
        setVal("debuffcell_crucis_label", "<s>Signum Crucis</s>");
        c.debuff_crucis.disabled = true;
        c.debuff_crucis.value = 0;
        sc_end(monster, SC.CRUCIS);

        setVal("debuffcell_blessing_label", "<s>Blessing</s>");
        c.debuff_blessing.disabled = true;
        c.debuff_blessing.checked = false;
        sc_end(monster, SC.BLESSING);
    } else {
        setVal("debuffcell_crucis_label", "Signum Crucis");
        c.debuff_crucis.disabled = false;

        setVal("debuffcell_blessing_label", "Blessing");
        c.debuff_blessing.disabled = false;
    }

    if(monster.base_status.def_ele == ELE.UNDEAD) {
        setVal("debuffcell_mindbreaker_label", "<s>Mind Breaker</s>");
        c.debuff_mindbreaker.disabled = true;
        c.debuff_mindbreaker.value = 0;
        sc_end(monster, SC.MINDBREAKER);

        setVal("debuffcell_provoke_label", "<s>Provoke</s>");
        c.debuff_provoke.disabled = true;
        c.debuff_provoke.value = 0;
        sc_end(monster, SC.PROVOKE);

        setVal("debuffcell_freeze_label", "<s>Frozen</s>");
        c.debuff_freeze.disabled = true;
        c.debuff_freeze.checked = false;
        sc_end(monster, SC.FREEZE);

        setVal("debuffcell_stone_label", "<s>Stone</s>");
        c.debuff_stone.disabled = true;
        c.debuff_stone.checked = false;
        sc_end(monster, SC.STONE);
    } else {
        if(monster.base_status.class_ != CLASS.BOSS) {
            setVal("debuffcell_mindbreaker_label", "Mind Breaker");
            c.debuff_mindbreaker.disabled = false;

            setVal("debuffcell_provoke_label", "Provoke");
            c.debuff_provoke.disabled = false;

            setVal("debuffcell_freeze_label", "Frozen");
            c.debuff_freeze.disabled = false;

            setVal("debuffcell_stone_label", "Stone");
            c.debuff_stone.disabled = false;
        }
    }

    updateMonsterDebuffHeader();
}

function calc() {
    StAllCalc();
    let skill_type = BF.WEAPON;
    if(m_Skill[player.active_skill][4] == 1 || m_Skill[player.active_skill][4] == 2 || m_Skill[player.active_skill][4] == 3)
        skill_type = BF.WEAPON;
    else if(m_Skill[player.active_skill][4] < 0)
        skill_type = BF.MAGIC;
    else if(m_Skill[player.active_skill][4] == 5)
        skill_type = BF.MISC;
    let playerDamage = battle_calc_attack(skill_type, player, monster, player.active_skill, player.active_skill_lv, 0);
    updatePlayerDamageDisplay(playerDamage);

    let n_B_AtkSkill = 1 * c.B_AtkSkill.value;
    let monsterId = 1 * c.B_Enemy.value;
    skill_type = BF.WEAPON;
    if(m_Skill[n_B_AtkSkill][4] == 1 || m_Skill[n_B_AtkSkill][4] == 2 || m_Skill[n_B_AtkSkill][4] == 3)
        skill_type = BF.WEAPON;
    else if(m_Skill[n_B_AtkSkill][4] < 0)
        skill_type = BF.MAGIC;
    else if(m_Skill[n_B_AtkSkill][4] == 5)
        skill_type = BF.MISC;
    let monsterDamage = battle_calc_attack(skill_type, monster, player, n_B_AtkSkill, n_B_AtkSkill > 0 ? m_Monster[monsterId][2 * c.B_AtkSkill.selectedIndex + 22] : 0, 0);
    updateMonsterDamageDisplay(monsterDamage);
}

function SkillSearch(skillId) {
    return player.passive_skills.find(skill => skill.id == skillId) ? player.passive_skills.find(skill => skill.id == skillId).level : 0;
}

// On page load, hide the table rows except header
document.addEventListener('DOMContentLoaded', function() {
    SetSupportSkillsVisibility(0);
    SetDanceSkillsVisibility(0);
    updateMusicDanceStatLessonVisibility();
    updateMarionetteVisibility();
    SetGuildSkillsVisibility(0);
    SetMiscEffectsVisibility(0);
    SetFoodEffectsVisibility(0);
    SetMonsterDebuffsVisibility(0);
    SetMonsterBuffsVisibility(0);
    SetAdditionalEffectsVisibility(0);
    SetPlayerManualEditsVisibility(0);
    SetMonsterManualEditsVisibility(0);
});