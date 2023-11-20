PvP = 0,
    n_A_WeaponLV = 0,
    n_A_Weapon2LV = 0,
    n_Nitou = 0,
    n_Reborn = 0,
    n_WoE = 0,
    n_rangedAtk = 0,
    w_AG = [100, 95, 90, 86, 82, 79, 76, 74, 72, 71, 70],
    n_FeatSW = 0,
    n_itemSW = 0,
    n_SkillSW = 0,
    n_Skill3SW = 0,
    n_Skill4SW = 0,
    n_Skill5SW = 0,
    n_Skill6SW = 0,
    n_Skill7SW = 0,
    n_Skill8SW = 0,
    n_Skill9SW = 0,
    n_Skill10SW = 0,
    n_debufSW = 0,
    n_BbufSW = 0,
    wBCEDPch = 0,
    wLAch = 0,
    wCriTyuu = 0,
    wBTw1 = 0,
    n_TAKA_DMG = 0,
    TyouEnkakuSousa3dan = 0,
    not_use_card = 0;
var n_B_AtkSkill = 0
    , n_B_rangedAtk = 0
    , n_B_rangedMAtk = 0
    , BskillHitNum = 1
    , n_B_ignoreFlee = 0;
str_bSUBname = "",
    str_bSUB = "",
    SuperNoviceFullWeaponCHECK = 0,
    cast_kotei = 0,
    b = 0,
    n_PerHIT_DMG = 0,
    n_Delay = [0, 0, 0, 0, 0, 0, 0],
    wDelay = 0,
    n_tok = new Array;
for (var i = 0; i <= 450; i++)
    n_tok[i] = 0;
n_M_debuff = new Array;
for (var i = 0; i <= 4; i++)
    n_M_debuff[i] = 0;
var first_check = 0;
n_B = new Array,
    Last_DMG_A = [0, 0, 0],
    Last_DMG_B = [0, 0, 0],
    InnStr = new Array,
    SG_Special_HITnum = 0,
    SG_Special_DMG = [0, 0, 0],
    Item_or_Card = "Item",
    ItemCardNumberCheck = 142;
var c = document.calcForm
    , SRV = 0
    , equip_restrict = 1
    , card_restrict = 0
    , renewal = 0
    , thirdClass = 0;
wLeft = [0, 0, 0];
var firstLoad = 0;
n_A_WeaponTypesArray = new Array;
var n_A_WeaponType = 0;
v_Race = ["<b style='color:#9F9E9B'>Formless</b>", "<b style='color:purple'>Undead</b>", "<b style='color:brown'>Brute</b>", "<b style='color:#00DD00'>Plant</b>", "<b style='color:green'>Insect</b>", "<b style='color:blue'>Fish</b>", "<b style='color:#000000'>Demon</b>", "<b style='color:orange'>Demi-Human</b>", "<b style='color:#CDCD40'>Angel</b>", "<b style='color:red'>Dragon</b>"],
    v_Race_ = ["Formless", "Undead", "Brute", "Plant", "Insect", "Fish", "Demon", "Demi-Human", "Angel", "Dragon"],
    v_Element = ["<b style='color:#A89682'>Neutral</b>", "<b style='color:blue'>Water</b>", "<b style='color:brown'>Earth</b>", "<b style='color:red'>Fire</b>", "<b style='color:#00CC00'>Wind</b>", "<b style='color:#bb24bb'>Poison</b>", "<b style='color:#CDCD00'>Holy</b>", "<b style='color:#000000'>Shadow</b>", "<b style='color:#BFBEBB'>Ghost</b>", "<b style='color:purple'>Undead</b>"],
    v_Element_ = ["Neutral ", "Water ", "Earth ", "Fire ", "Wind ", "Poison ", "Holy ", "Shadow ", "Ghost ", "Undead "],
    v_Size = ["Small", "Medium", "Large"],
    v_Effect = ["Poison", "Stun", "Freeze", "Curse", "Blind", "Sleep", "Silence", "Chaos", "Bleeding", "Stone", "Weapon Break", "Armor Break"],
    v_EnergyCoat = ["0", "6% Reduction", "12% Reduction", "18% Reduction", "24% Reduction", "30% Reduction"],
    v_Race2 = ["(none)", "Goblin", "Golem", "Guardian", "Kobold", "Orc", "Satan Morroc"],
    v_Type = ["Normal", "Boss"],
    SubName = ["%", " seconds", "Damage", "Critical Damage", "Critical Rate", "Over 10000 hits", "Too high to calculate", "Immesurable", " x ", "Cast Time", "Off", "On"],
    JobName = ["Novice", "Swordman", "Thief", "Acolyte", "Archer", "Magician", "Merchant", "Knight", "Assassin", "Priest", "Hunter", "Wizard", "Blacksmith", "Crusader", "Rogue", "Monk", "Bard", "Dancer", "Sage", "Alchemist", "Super Novice", "Lord Knight", "Assassin Cross", "High Priest", "Sniper", "High Wizard", "Whitesmith", "Paladin", "Stalker", "Champion", "Minstrel (alt. name: Clown)", "Gypsy", "Scholar (alt. name: Professor)", "Biochemist (alt. name: Creator)", "High Novice", "High Swordman", "High Thief", "High Acolyte", "High Archer", "High Magician", "High Merchant", "Taekwon Kid", "Taekwon Master (alt. name: Star Gladiator)", "Soul Linker", "Ninja", "Gunslinger", "Rune Knight (non-trans)", "Rune Knight (trans)", "Guillotine Cross (non-trans)", "Guillotine Cross (trans)", "Arch Bishop (non-trans)", "Arch Bishop (trans)", "Ranger (non-trans)", "Ranger (trans)", "Warlock (non-trans)", "Warlock (trans)", "Mechanic (non-trans)", "Mechanic (trans)", "Royal Guard (non-trans)", "Royal Guard (trans)", "Shadow Chaser (non-trans)", "Shadow Chaser (trans)", "Sura (non-trans)", "Sura (trans)", "Maestro (non-trans)", "Maestro (trans)", "Wanderer (non-trans)", "Wanderer (trans)", "Sorcerer (non-trans)", "Sorcerer (trans)", "Geneticist (non-trans)", "Geneticist (trans)", "Kagero/Oboro", "Expanded Super Novice"];
var All_DMGskill = [0, 6, 7, 17, 19, 40, 41, 44, 46, 47, 51, 52, 53, 54, 55, 56, 57, 65, 66, 70, 71, 72, 73, 76, 83, 84, 88, 97, 102, 104, 106, 111, 112, 113, 118, 122, 124, 125, 126, 127, 128, 130, 131, 132, 133, 158, 159, 161, 162, 167, 169, 171, 188, 189, 192, 193, 197, 199, 207, 244, 248, 259, 260, 261, 263, 264, 271, 272, 275, 277, 324, 325, 391, 326, 328, 321, 382, 339, 331, 333, 335, 337, 317, 318, 373, 374, 375, 407, 408, 409, 410, 412, 413, 414, 415, 397, 398, 399, 400, 401, 405, 438, 417, 418, 419, 423, 424, 302, 611];
function servers() {
    if (SRV = 1 * c.server.value,
        0 == firstLoad)
        if (1 * c.server.value < 40) {
            for (c.A_JOB.length = new Option(JobName[i], i),
                i = 0; i <= 45; i++)
                c.A_JOB.options[i] = new Option(JobName[i], i);
            for (c.A_Weapon_refine.length = 0,
                n_Nitou && (c.A_Weapon2_refine.length = 0),
                c.A_HEAD_REFINE.length = 0,
                c.A_LEFT_REFINE.length = 0,
                c.A_BODY_REFINE.length = 0,
                c.A_SHOULDER_REFINE.length = 0,
                c.A_SHOES_REFINE.length = 0,
                i = 0; i <= 10; i++)
                c.A_Weapon_refine.options[i] = new Option("+" + i, i),
                    n_Nitou && (c.A_Weapon2_refine.options[i] = new Option("+" + i, i)),
                    c.A_HEAD_REFINE.options[i] = new Option("+" + i, i),
                    c.A_LEFT_REFINE.options[i] = new Option("+" + i, i),
                    c.A_BODY_REFINE.options[i] = new Option("+" + i, i),
                    c.A_SHOULDER_REFINE.options[i] = new Option("+" + i, i),
                    c.A_SHOES_REFINE.options[i] = new Option("+" + i, i)
        } else {
            for (renewal = 1,
                i = 0; i <= 73; i++)
                c.A_JOB.options[i] = new Option(JobName[i], i);
            for (i = 0; i <= 20; i++)
                c.A_Weapon_refine.options[i] = new Option("+" + i, i),
                    n_Nitou && (c.A_Weapon2_refine.options[i] = new Option("+" + i, i)),
                    c.A_HEAD_REFINE.options[i] = new Option("+" + i, i),
                    c.A_LEFT_REFINE.options[i] = new Option("+" + i, i),
                    c.A_BODY_REFINE.options[i] = new Option("+" + i, i),
                    c.A_SHOULDER_REFINE.options[i] = new Option("+" + i, i),
                    c.A_SHOES_REFINE.options[i] = new Option("+" + i, i)
        }
    firstLoad = 1,
        1 * c.server.value == 10 ? (c.A_JOB.options[30].innerHTML = "Clown (iRO name: Minstrel)",
            c.A_JOB.options[32].innerHTML = "Professor (iRO name: Scholar)",
            c.A_JOB.options[33].innerHTML = "Creator (iRO name: Biochemist)",
            c.A_JOB.options[42].innerHTML = "Star Gladiator (iRO name: Taekwon Master)") : (c.A_JOB.options[30].innerHTML = JobName[30],
                c.A_JOB.options[32].innerHTML = JobName[32],
                c.A_JOB.options[33].innerHTML = JobName[33],
                c.A_JOB.options[42].innerHTML = JobName[42]),
        calc()
}
function restrictEquipslot() {
    equip_restrict = 1 * c.restrict_equipslot.checked;
    (3 == n_A_WeaponType || 5 == n_A_WeaponType || 7 == n_A_WeaponType || 10 == n_A_WeaponType || 11 == n_A_WeaponType || 16 == n_A_WeaponType || 17 == n_A_WeaponType || 18 == n_A_WeaponType || 19 == n_A_WeaponType || 20 == n_A_WeaponType || 21 == n_A_WeaponType || n_Nitou) && equip_restrict ? (c.A_LEFT_REFINE.disabled = !0,
        c.A_LEFT_REFINE.value = 0,
        c.A_left.disabled = !0,
        c.A_left.value = 305,
        c.A_left_card.disabled = !0,
        c.A_left_card.value = 0) : (c.A_LEFT_REFINE.disabled = !1,
            c.A_left.disabled = !1,
            card_restrict && 0 != m_Item[c.A_left.value][5] && (c.A_left_card.disabled = !1))
}
function restrictCardslot(e) {
    (card_restrict = 1 * c.restrict_cardslot.checked) ? (0 != m_Item[c.A_weapon1.value][5] ? (c.A_weapon1_card1.disabled = !1,
        c.A_weapon1_card2.disabled = !1,
        c.A_weapon1_card3.disabled = !1,
        c.A_weapon1_card4.disabled = !1) : (c.A_weapon1_card1.disabled = !0,
            c.A_weapon1_card1.value = 0,
            c.A_weapon1_card2.disabled = !0,
            c.A_weapon1_card2.value = 0,
            c.A_weapon1_card3.disabled = !0,
            c.A_weapon1_card3.value = 0,
            c.A_weapon1_card4.disabled = !0,
            c.A_weapon1_card4.value = 0),
        n_Nitou && (0 != m_Item[c.A_weapon2.value][5] ? (c.A_weapon2_card1.disabled = !1,
            c.A_weapon2_card2.disabled = !1,
            c.A_weapon2_card3.disabled = !1,
            c.A_weapon2_card4.disabled = !1) : (c.A_weapon2_card1.disabled = !0,
                c.A_weapon2_card1.value = 0,
                c.A_weapon2_card2.disabled = !0,
                c.A_weapon2_card2.value = 0,
                c.A_weapon2_card3.disabled = !0,
                c.A_weapon2_card3.value = 0,
                c.A_weapon2_card4.disabled = !0,
                c.A_weapon2_card4.value = 0)),
        0 != m_Item[c.A_head1.value][5] ? c.A_head1_card.disabled = !1 : (c.A_head1_card.disabled = !0,
            c.A_head1_card.value = 0),
        0 != m_Item[c.A_head2.value][5] ? c.A_head2_card.disabled = !1 : (c.A_head2_card.disabled = !0,
            c.A_head2_card.value = 0),
        0 != m_Item[c.A_left.value][5] ? c.A_left_card.disabled = !1 : (c.A_left_card.disabled = !0,
            c.A_left_card.value = 0),
        0 != m_Item[c.A_body.value][5] ? c.A_body_card.disabled = !1 : (c.A_body_card.disabled = !0,
            c.A_body_card.value = 0),
        0 != m_Item[c.A_shoulder.value][5] ? c.A_shoulder_card.disabled = !1 : (c.A_shoulder_card.disabled = !0,
            c.A_shoulder_card.value = 0),
        0 != m_Item[c.A_shoes.value][5] ? c.A_shoes_card.disabled = !1 : (c.A_shoes_card.disabled = !0,
            c.A_shoes_card.value = 0),
        0 != m_Item[c.A_acces1.value][5] ? c.A_acces1_card.disabled = !1 : (c.A_acces1_card.disabled = !0,
            c.A_acces1_card.value = 0),
        0 != m_Item[c.A_acces2.value][5] ? c.A_acces2_card.disabled = !1 : (c.A_acces2_card.disabled = !0,
            c.A_acces2_card.value = 0)) : (c.A_weapon1_card1.disabled = !1,
                c.A_weapon1_card2.disabled = !1,
                c.A_weapon1_card3.disabled = !1,
                c.A_weapon1_card4.disabled = !1,
                n_Nitou && (c.A_weapon2_card1.disabled = !1,
                    c.A_weapon2_card2.disabled = !1,
                    c.A_weapon2_card3.disabled = !1,
                    c.A_weapon2_card4.disabled = !1),
                c.A_head1_card.disabled = !1,
                c.A_head2.disabled ? c.A_head2_card.disabled = !0 : c.A_head2_card.disabled = !1,
                c.A_left.disabled ? c.A_left_card.disabled = !0 : c.A_left_card.disabled = !1,
                c.A_body_card.disabled = !1,
                c.A_shoulder_card.disabled = !1,
                c.A_shoes_card.disabled = !1,
                c.A_acces1_card.disabled = !1,
                c.A_acces2_card.disabled = !1),
        calc()
}
function myInnerHtml(e, _, n) {
    if (0 == n) {
        for (wIHOB = document.getElementById(e); wIHOB.hasChildNodes();)
            wIHOB.removeChild(wIHOB.firstChild);
        wIHOB.innerHTML = _
    } else
        wIHOB = document.getElementById(e),
            wIHOB.insertAdjacentHTML("BeforeEnd", _)
}
function BattleCalc999() {
    SRV = 1 * c.server.value,
        wMod = 1,
        wCast = 0,
        wHITsuu = 1,
        n_rangedAtk = 0,
        wLAch = 0,
        w_DMG = [0, 0, 0],
        not_use_card = 0,
        cast_kotei = 0,
        str_PerHIT_DMG = 0,
        SG_Special_ch = 0;
    for (var e = 0; e <= 2; e++)
        Last_DMG_A[e] = 0,
            Last_DMG_B[e] = 0;
    if (str_bSUBname = "",
        str_bSUB = "",
        0 == n_A_ActiveSkill || 272 == n_A_ActiveSkill || 401 == n_A_ActiveSkill || 86 == n_A_ActiveSkill && 50 <= n_B[3] && n_B[3] < 60 || (myInnerHtml("CRIATK", "", 0),
            myInnerHtml("CRInum", "", 0),
            myInnerHtml("CRIATKname", "", 0),
            myInnerHtml("bSUB3name", "", 0),
            myInnerHtml("bSUB3", "", 0)),
        10 != n_A_WeaponType && 17 != n_A_WeaponType && 18 != n_A_WeaponType && 19 != n_A_WeaponType && 20 != n_A_WeaponType && 21 != n_A_WeaponType || 0 != n_A_ActiveSkill || (n_rangedAtk = 1),
        0 == n_A_ActiveSkill || 86 == n_A_ActiveSkill && 50 <= n_B[3] && n_B[3] < 60)
        if (myInnerHtml("CRIATKname", "Critical damage (Critical rate)", 0),
            myInnerHtml("bSUB3name", "", 0),
            myInnerHtml("bSUB3", "", 0),
            86 == n_A_ActiveSkill && (n_Delay[0] = 1),
            n_Nitou) {
            if (TyouEnkakuSousa3dan = 0,
                n_A_workDEX = Math.floor(n_A_DEX * (1 + .2 * (n_A_Weapon2LV - 1))),
                n_A_workDEX >= n_A_Weapon2_ATK ? w_left_Maxatk = n_A_ATK + n_A_Weapon2LV_Maxplus + Math.floor((n_A_Weapon2_ATK + wImp) * wCSize) : w_left_Maxatk = n_A_ATK + n_A_Weapon2LV_Maxplus + Math.floor((n_A_Weapon2_ATK - 1 + wImp) * wCSize),
                w_left_Maxatk = BattleCalc4(w_left_Maxatk * wMod, 2, 1),
                w_left_Maxatk < 1 && (w_left_Maxatk = 1),
                w_left_Maxatk = Math.floor(w_left_Maxatk * Math.max(0, element[n_B[3]][n_A_Weapon2_element])),
                w_left_star = 0,
                106 == n_A_card[4] && 106 == n_A_card[5] && 106 == n_A_card[6])
                w_left_star += 40;
            else
                for (e = 4; e <= 6; e++)
                    106 == m_Card[n_A_card[e]][0] && (w_left_star += 5);
            106 == n_A_card[7] && (w_left_star += 10),
                w_left_Maxatk += w_left_star,
                w_left_Maxatk = w_left_Maxatk * (3 + SkillSearch(80)) / 10,
                w_left_Maxatk = Math.floor(w_left_Maxatk),
                n_A_workDEX > n_A_Weapon2_ATK && (n_A_workDEX = n_A_Weapon2_ATK),
                w_left_Minatk = n_A_ATK + n_A_Weapon2LV_Minplus + Math.floor((n_A_workDEX + wImp) * wCSize),
                w_left_Minatk = BattleCalc4(w_left_Minatk * wMod, 0, 1),
                w_left_Minatk < 1 && (w_left_Minatk = 1),
                w_left_Minatk = Math.floor(w_left_Minatk * Math.max(0, element[n_B[3]][n_A_Weapon2_element])),
                w_left_Minatk += w_left_star,
                w_left_Minatk *= .3 + SkillSearch(80) / 10,
                w_left_Minatk = Math.floor(w_left_Minatk),
                w_left_Aveatk = (w_left_Maxatk + w_left_Minatk) / 2,
                w_left_Maxatk = tPlusDamCut(w_left_Maxatk),
                w_left_Minatk = tPlusDamCut(w_left_Minatk),
                w_left_Aveatk = tPlusDamCut(w_left_Aveatk),
                wLeft = [w_left_Minatk, w_left_Aveatk, w_left_Maxatk],
                ATKmod02(wMod, 0),
                n_Min_DMG += w_left_Minatk,
                n_Max_DMG += w_left_Maxatk,
                w_DMG[0] = BattleCalc(n_A_DMG[0], 0); // auto attack mod
                w_DMG[0] = Math.floor(w_DMG[0] * (100 + n_tok[355]) / 100); // auto attack damage mod
            var _ = w_DMG[0] + EDP_DMG(0);
            Last_DMG_A[0] = Last_DMG_B[0] = _ + w_left_Minatk,
                InnStr[0] += Last_DMG_A[0] + " (" + _ + " + " + w_left_Minatk + ")",
                w998D && (str_bSUBname += "Double Attack damage (chance)<BR>",
                    str_bSUB += 2 * _ + w_left_Minatk + "~"),
                SRV ? _ + w_left_Minatk < n_Min_DMG && w998G < 100 && (n_Min_DMG = _ + w_left_Minatk) : Last_DMG_A[0] < n_Min_DMG && (w998H > 0 ? n_Min_DMG = Last_DMG_A[0] : w998D > 0 && 2 * _ + w_left_Minatk < n_Min_DMG && (n_Min_DMG = 2 * _ + w_left_Minatk)),
                w_DMG[0] = n_Min_DMG,
                w_DMG[2] = BattleCalc(n_A_DMG[2], 2);
                w_DMG[2] = Math.floor(w_DMG[2] * (100 + n_tok[355]) / 100); // auto attack damage mod
            _ = w_DMG[2] + EDP_DMG(2);
            Last_DMG_A[2] = Last_DMG_B[2] = _ + w_left_Maxatk,
                InnStr[2] += Last_DMG_A[2] + " (" + _ + " + " + w_left_Maxatk + ")",
                w998D && (_ = 2 * (w_DMG[2] + EDP_DMG(2)) + w_left_Maxatk,
                    str_bSUB += _ + " (" + w998D + "%)<BR>"),
                _ > n_Max_DMG && w998G < 100 && (n_Max_DMG = _),
                w_DMG[2] = n_Max_DMG,
                w_DMG[1] = BattleCalc(n_A_DMG[1], 1);
                w_DMG[1] = Math.floor(w_DMG[1] * (100 + n_tok[355]) / 100); // auto attack damage mod
            _ = w_DMG[1] + EDP_DMG(1);
            Last_DMG_A[1] = Last_DMG_B[1] = _ + w_left_Aveatk,
                InnStr[1] += Last_DMG_A[1] + " (" + _ + " + " + w_left_Aveatk + ")",
                w_DMG[1] = BattleCalc3(w_DMG[1]),
                w_DMG[1] += BattleCalc3left(w_left_Aveatk),
                w_DMG[1] += EDP_DMG(1),
                EDPhyouzi(1);
            _ = BattleCalc2(0);
            var n = Math.floor(w_left_star * (.3 + SkillSearch(80) / 10));
            n_PerHIT_DMG = _ + n,
                str_PerHIT_DMG = _ + "+" + n,
                CastAndDelay(),
                BattleCalc998()
        } else {
            if (n_TAKA_DMG = 0,
                wTAKA = BattleTAKA(),
                TyouEnkakuSousa3dan = 0,
                SkillSearch(187)) {
                TyouEnkakuSousa3dan = -1,
                    wBC3_3danAtkMod = .2 * SkillSearch(187);
                var l = [0, 0, 0];
                for (e = 0; e <= 2; e++)
                    l[e] = BattleCalc(n_A_DMG[e] * (wMod + wBC3_3danAtkMod), e) + EDP_DMG(e),
                        l[e] = 3 * Math.floor(l[e] / 3),
                        5 == n_B[19] && (l[e] = 3);
                str_bSUBname += skillName(187, SRV) + " damage<BR>",
                    str_bSUB += l[0] + "~" + l[2] + " (30% chance)<BR>",
                    TyouEnkakuSousa3dan = 0,
                    n_Min_DMG > l[0] && (n_Min_DMG = l[0]),
                    n_Max_DMG < l[2] && (n_Max_DMG = l[2])
            }
            ATKmod02(wMod, 0);
            for (e = 0; e <= 2; e++) // auto attack damage
                w_DMG[e] = BattleCalc(n_A_DMG[e], e),
                w_DMG[e] = Math.floor(w_DMG[e] * (100 + n_tok[355]) / 100); // auto attack damage mod
            var i = [0, 0, 0]
                , t = 0;
            if (11 == n_A_WeaponType) {
                for (e = 0; e <= 2; e++)
                    i[e] = Math.floor((w_DMG[e] + EDP_DMG(e)) * (.01 + .02 * SkillSearch(13)));
                t = Math.floor(w_DMG[1] * (.01 + .02 * SkillSearch(13)))
            }
            Last_DMG_B[0] = w_DMG[0] + EDP_DMG(0),
                Last_DMG_A[0] = Last_DMG_B[0] + i[0],
                InnStr[0] += Last_DMG_A[0],
                11 == n_A_WeaponType && (InnStr[0] = Last_DMG_A[0] + " (" + Last_DMG_B[0] + "+" + i[0] + ")"),
                SRV ? Last_DMG_A[0] < n_Min_DMG && w998G < 100 && (n_Min_DMG = Last_DMG_A[0]) : Last_DMG_A[0] < n_Min_DMG && (w998H > 0 ? n_Min_DMG = Last_DMG_A[0] : w998D > 0 && 2 * Last_DMG_A[0] < n_Min_DMG && (n_Min_DMG = 2 * Last_DMG_A[0])),
                w998D && (17 == n_A_WeaponType && SkillSearch(427) ? CardNumSearch(43) || 570 == n_A_Equip[2] || 1442 == n_A_Equip[2] || 1443 == n_A_Equip[2] || 1321 == n_A_Equip[2] || EquipNumSearch(1578) && n_A_SHOULDER_REFINE >= 5 ? str_bSUBname += "Double Attack damage (chance)<BR>" : str_bSUBname += "Chain Action damage (chance)<BR>" : str_bSUBname += "Double Attack damage (chance)<BR>",
                    str_bSUB += 2 * Last_DMG_A[0] + "~"),
                w_DMG[0] = n_Min_DMG,
                Last_DMG_B[2] = w_DMG[2] + EDP_DMG(2),
                Last_DMG_A[2] = Last_DMG_B[2] + i[2],
                InnStr[2] += Last_DMG_A[2],
                11 == n_A_WeaponType && (InnStr[2] = Last_DMG_A[2] + " (" + Last_DMG_B[2] + "+" + i[2] + ")"),
                n_Max_DMG += n_TAKA_DMG;
            _ = Last_DMG_A[2];
            if (_ += n_TAKA_DMG,
                n_Max_DMG < _ && w998G < 100 && (n_Max_DMG = _),
                w998D) {
                _ = 2 * (w_DMG[2] + EDP_DMG(2) + i[2]);
                str_bSUB += _ + " (" + w998D + "%)<BR>",
                    _ += n_TAKA_DMG,
                    n_Max_DMG < _ && (n_Max_DMG = _)
            }

            w_DMG[2] = n_Max_DMG,
                Last_DMG_B[1] = w_DMG[1] + EDP_DMG(1),
                Last_DMG_A[1] = Last_DMG_B[1] + i[1],
                InnStr[1] += Last_DMG_A[1],
                11 == n_A_WeaponType && (InnStr[1] = Last_DMG_A[1] + " (" + Last_DMG_B[1] + "+" + i[1] + ")"),
                SkillSearch(187) && (TyouEnkakuSousa3dan = l[1]),
                w_DMG[1] += t,
                w_DMG[1] = BattleCalc3(w_DMG[1]),
                w_DMG[1] += wTAKA,
                w_DMG[1] += EDP_DMG(1),
                EDPhyouzi(1),
                CastAndDelay(),
                BattleCalc998()
        }
    else {
        if (272 == n_A_ActiveSkill || 401 == n_A_ActiveSkill) {
            for (myInnerHtml("CRIATKname", "Critical damage (Critical rate)", 0),
                myInnerHtml("bSUB3name", "", 0),
                myInnerHtml("bSUB3", "", 0),
                272 == n_A_ActiveSkill ? (n_rangedAtk = 1,
                    wMod += 1 + .5 * n_A_ActiveSkillLV,
                    wCast = 2 * n_A_CAST,
                    n_Delay[2] = 1.5) : (n_Delay[0] = 1,
                        n_rangedAtk = 0,
                        wMod += n_A_ActiveSkillLV - 1),
                e = 0; e <= 2; e++)
                n_A_CriATK[e] = n_A_DMG[e];
            ATKmod02(wMod, 1),
                wCriTyuu = 1;
            for (e = 0; e <= 2; e++)
                n_A_CriATK[e] = BattleCalc(n_A_CriATK[e], 10);
            wCriTyuu = 0;
            for (e = 0; e <= 2; e++)
                n_A_CriATK[e] += EDP_DMG(e);
            w998G >= 100 && (n_Min_DMG = n_A_CriATK[0]),
                w998G > 0 && (n_Max_DMG = n_A_CriATK[2]),
                myInnerHtml("CRIATK", n_A_CriATK[0] + "~" + n_A_CriATK[2], 0),
                ATKmod02(wMod, 0);
            for (e = 0; e <= 2; e++)
                w_DMG[e] = BattleCalc(n_A_DMG[e], e),
                    Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e] + EDP_DMG(e),
                    InnStr[e] += Last_DMG_A[e];
            return w998G >= 100 && (w_DMG[0] = n_Min_DMG),
                w998G > 0 && (w_DMG[2] = n_Max_DMG),
                w_DMG[1] = BattleCalc3(w_DMG[1]),
                EDPplus(1),
                CastAndDelay(),
                void BattleCalc998()
        }
        for (w_ActS = [6, 7, 19, 41, 44, 65, 71, 72, 73, 83, 84, 158, 161, 169, 171, 176, 188, 189, 199, 207, 248, 260, 261, 264, 288, 289, 290, 292, 302, 303, 305, 306, 307, 308, 326, 317, 318, 331, 333, 335, 337, 339, 382, 388, 398, 400, 419, 423, 428, 430, 431, 432, 434, 435, 436, 437, "NULL"],
            iw = 0; w_ActS[iw] != n_A_ActiveSkill && "NULL" != w_ActS[iw]; iw++)
            ;
        if (n_A_ActiveSkill == w_ActS[iw]) {
            if (wActiveHitNum = 1,
                6 == n_A_ActiveSkill)
                wMod += .3 * n_A_ActiveSkillLV;
            else if (7 == n_A_ActiveSkill)
                wMod += .2 * n_A_ActiveSkillLV,
                    n_A_Weapon_element = 3,
                    n_Delay[2] = 2;
            else if (19 == n_A_ActiveSkill)
                not_use_card = 1,
                    wMod += .3,
                    n_A_Weapon_element = 2;
            else if (41 == n_A_ActiveSkill)
                n_rangedAtk = 1,
                    wMod += .05 * n_A_ActiveSkillLV - .25,
                    n_Delay[2] = 1;
            else if (44 == n_A_ActiveSkill)
                n_rangedAtk = 1,
                    wCast = 1.5,
                    wMod += .5;
            else if (65 == n_A_ActiveSkill)
                wMod += .5 * n_A_ActiveSkillLV;
            else if (71 == n_A_ActiveSkill)
                wMod += .2 * n_A_ActiveSkillLV,
                    n_rangedAtk = 1;
            else if (84 == n_A_ActiveSkill)
                n_A_ActiveSkillLV >= 3 && (n_rangedAtk = 1),
                    wMod += .2 * n_A_ActiveSkillLV;
            else if (158 == n_A_ActiveSkill)
                wMod += .2 * n_A_ActiveSkillLV,
                    305 == m_Item[n_A_Equip[5]][0] && (wMod = 0);
            else if (161 == n_A_ActiveSkill)
                wMod += .35 * n_A_ActiveSkillLV,
                    n_A_Weapon_element = 6;
            else if (171 == n_A_ActiveSkill)
                //wMod += .4 * n_A_ActiveSkillLV;
                wMod += 1 + .5 * n_A_ActiveSkillLV; // changed to alfheim skill modifier
            else if (72 == n_A_ActiveSkill)
                wMod += .5 * n_A_ActiveSkillLV,
                    n_Delay[2] = 1,
                    n_rangedAtk = 1;
            else if (73 == n_A_ActiveSkill)
                //a = 1 + .2 * n_A_ActiveSkillLV,
                    //10 == n_A_ActiveSkillLV ? wMod += 4.625 : n_A_ActiveSkillLV >= 7 ? wMod += a + a / 2 + a / 4 - 1 : n_A_ActiveSkillLV >= 4 ? wMod += a + a / 2 - 1 : wMod += a - 1,
                    wMod += 3 + .45 * n_A_ActiveSkillLV, // changed to alfheims skill modifier
                    wCast = .7,
                    n_rangedAtk = 1;
            else if (83 == n_A_ActiveSkill || 388 == n_A_ActiveSkill)
                wActiveHitNum = 8,
                    wMod += .5 * n_A_ActiveSkillLV + 2,
                    388 == n_A_ActiveSkill && 0 == PvP && (wMod *= 2),
                    388 == n_A_ActiveSkill && 1 == PvP && (n_WoE ? wMod *= 1.25 : wMod *= 2),
                    EquipNumSearch(1783) && (wMod *= 1.5),
                    n_Delay[3] = 2;
            else if (169 == n_A_ActiveSkill) // backstab
                //wMod += .4 * n_A_ActiveSkillLV + 2,
                wMod += .25 + .15 * n_A_ActiveSkillLV, // alfheim skill modifier
                    n_Delay[2] = 0, // removed delay
                    w_HIT = 100,
                    w_HIT_HYOUJI = 100;
            else if (176 == n_A_ActiveSkill)
                wMod += .3 * n_A_ActiveSkillLV,
                    n_Delay[2] = 1;
            else if (188 == n_A_ActiveSkill)
                wActiveHitNum = 4,
                    wMod += 1.5 + .5 * n_A_ActiveSkillLV,
                    n_Delay[0] = 1,
                    n_Delay[1] = .1,
                    n_Delay[3] = 1 - .004 * n_A_AGI - .002 * n_A_DEX;
            else if (189 == n_A_ActiveSkill)
                wMod += 1.75 + .75 * n_A_ActiveSkillLV,
                    n_Delay[0] = 1,
                    n_Delay[1] = .1,
                    n_Delay[3] = .7 - .004 * n_A_AGI - .002 * n_A_DEX;
            else if (199 == n_A_ActiveSkill || 207 == n_A_ActiveSkill)
                wCast = 1.5,
                    wMod += .4 * n_A_ActiveSkillLV - .4,
                    n_A_Weapon_element = m_Arrow[n_A_Arrow][1],
                    1 * c.A_Weapon_element.value != 0 && (n_A_Weapon_element = 1 * c.A_Weapon_element.value),
                    n_rangedAtk = 1;
            else if (248 == n_A_ActiveSkill)
                not_use_card = 1,
                    n_A_Weapon_element = 3,
                    n_Delay[0] = 1,
                    wCast = 1,
                    wMod += .2 * n_A_ActiveSkillLV,
                    w_HIT = 100,
                    w_HIT_HYOUJI = 100;
            else if (260 == n_A_ActiveSkill)
                n_rangedAtk = 1,
                    wMod += .4 * n_A_ActiveSkillLV,
                    n_Delay[2] = .5;
            else if (261 == n_A_ActiveSkill)
                n_rangedAtk = 1,
                    wMod += .1 * n_A_ActiveSkillLV - .5,
                    n_A_ActiveSkillLV > 5 ? n_Delay[2] = 1 : n_Delay[2] = .8;
            else if (264 == n_A_ActiveSkill)
                not_use_card = 1,
                    wMod += .4 * n_A_ActiveSkillLV - .6,
                    wCast = .5,
                    n_Delay[2] = .5;
            else if (288 == n_A_ActiveSkill)
                wMod += 1 + n_A_ActiveSkillLV,
                    n_Delay[2] = .3;
            else if (289 == n_A_ActiveSkill)
                n_Delay[0] = 1,
                    wMod += n_A_ActiveSkillLV - .6,
                    n_Delay[1] = .1,
                    n_Delay[3] = .7 - .004 * n_A_AGI - .002 * n_A_DEX;
            else if (290 == n_A_ActiveSkill)
                n_Delay[0] = 1,
                    wMod += 6 + n_A_ActiveSkillLV,
                    n_A_ActiveSkillLV > 6 ? n_Delay[2] = 1 : n_Delay[2] = .8;
            else if (292 == n_A_ActiveSkill)
                wActiveHitNum = 9,
                    wMod += 1 + n_A_ActiveSkillLV,
                    n_A_Weapon_element = m_Arrow[n_A_Arrow][1],
                    1 * c.A_Weapon_element.value != 0 && (n_A_Weapon_element = 1 * c.A_Weapon_element.value),
                    n_rangedAtk = 1,
                    wCast = 1.8 + .2 * n_A_ActiveSkillLV,
                    n_Delay[2] = 0.5,
                    n_Delay[3] = 1.5;
            else if (302 == n_A_ActiveSkill)
                n_rangedAtk = 1,
                    not_use_card = 1,
                    n_A_Weapon_element = 4;
            else if (303 == n_A_ActiveSkill)
                wMod += 1 * (n_A_ActiveSkillLV - 1);
            else if (306 == n_A_ActiveSkill)
                n_rangedAtk = 1,
                    not_use_card = 1,
                    n_A_DMG[1] += Math.floor(14.5 * wCSize),
                    n_A_DMG[2] += Math.floor(29 * wCSize);
            else if (307 == n_A_ActiveSkill)
                n_rangedAtk = 1,
                    not_use_card = 1,
                    wMod += .5;
            else if (308 == n_A_ActiveSkill) {
                var a;
                a = 1 * c.SkillSubNum.value,
                    wMod += a,
                    wCast = .5 * (a + 1),
                    wCast > 1.5 && (wCast = 1.5)
            } else
                317 == n_A_ActiveSkill ? (n_Delay[0] = 1,
                    n_Delay[5] = .05,
                    1 == n_B[19] && (n_Delay[5] = .1),
                    1 == PvP && (str_bSUBname += "SP damage<BR>",
                        str_bSUB += "15<BR>")) : 318 == n_A_ActiveSkill ? (n_Delay[5] = .05,
                            1 == n_B[19] && (n_Delay[5] = .1),
                            1 == PvP && (n_Delay[0] = 1,
                                str_bSUBname += "SP damage<BR>",
                                str_bSUB += "15<BR>")) : 326 == n_A_ActiveSkill ? (not_use_card = 1,
                                    SRV ? (1 * c.SkillSubNum.value > 8e3 ? CT_WEIGHT = 8e3 : CT_WEIGHT = 1 * c.SkillSubNum.value,
                                        0 == CT_WEIGHT ? (SkillSearch(154) && (wMod += .146 + Math.floor((n_tok[22] + 5 * SkillSearch(154)) / 100 * 100 / 100)),
                                            SkillSearch(327) && (wMod += .215 + Math.floor((n_tok[22] + 10 * SkillSearch(327)) / 100 * 100 / 100))) : wMod += .02 + Math.floor((CT_WEIGHT / (16 - n_A_ActiveSkillLV) + n_tok[22] + 5 * SkillSearch(154) + 20 * SkillSearch(327)) / 100 * 100 / 100)) : (not_use_card = 1,
                                                wMod += Math.floor(100 * (1 * c.SkillSubNum.value / (16 - n_A_ActiveSkillLV) / 100 - 1)) / 100)) : 382 == n_A_ActiveSkill ? (not_use_card = 1,
                                                    wMod += 2) : 331 == n_A_ActiveSkill || 333 == n_A_ActiveSkill ? (n_Delay[0] = 1,
                                                        wMod += .6 + .2 * n_A_ActiveSkillLV) : 335 == n_A_ActiveSkill || 337 == n_A_ActiveSkill ? (n_Delay[0] = 1,
                                                            wMod += .9 + .3 * n_A_ActiveSkillLV,
                                                            337 == n_A_ActiveSkill && (wActiveHitNum = 3)) : 339 == n_A_ActiveSkill ? (n_Delay[0] = 1,
                                                                wMod += .1 * n_A_ActiveSkillLV - .7) : 305 == n_A_ActiveSkill ? (n_Delay[0] = 1,
                                                                    SkillSearch(379) && 0 == n_A_WeaponType ? wMod += .08 * n_A_BaseLV - 1 : wMod += .04 * n_A_BaseLV - 1) : 398 == n_A_ActiveSkill ? (wMod += .1 * n_A_ActiveSkillLV,
                                                                        n_Delay[2] = 3) : 400 == n_A_ActiveSkill ? (n_Delay[0] = 1,
                                                                            wMod += .1 * n_A_ActiveSkillLV,
                                                                            n_Delay[2] = 1) : 419 == n_A_ActiveSkill ? (not_use_card = 1,
                                                                                wCast = .5,
                                                                                n_Delay[2] = 1,
                                                                                n_rangedAtk = 1,
                                                                                wActiveHitNum = 5,
                                                                                2 != n_B[2] && 7 != n_B[2] || (wMod += 4)) : 423 == n_A_ActiveSkill ? (n_rangedAtk = 1,
                                                                                    n_Delay[2] = .5,
                                                                                    n_A_Weapon_element = 8,
                                                                                    not_use_card = 1) : 428 == n_A_ActiveSkill ? (n_rangedAtk = 1,
                                                                                        wActiveHitNum = 5,
                                                                                        wMod += .5 * n_A_ActiveSkillLV + 4,
                                                                                        n_Delay[2] = 1.7) : 430 == n_A_ActiveSkill ? (SRV ? (n_A_Weapon_refine > 8 && EquipNumSearch(1100) ? TCcast = 1.25 : EquipNumSearch(926) ? TCcast = .75 : TCcast = 1,
                                                                                            wCast = (1 + .2 * n_A_ActiveSkillLV) * TCcast) : (wCast = 1 + .2 * n_A_ActiveSkillLV,
                                                                                                cast_kotei = 1),
                                                                                            n_rangedAtk = 1,
                                                                                            wMod += 1 * n_A_ActiveSkillLV + 1,
                                                                                            n_Delay[2] = 1,
                                                                                            w_HIT = 5 * w_HIT + 5,
                                                                                            w_HIT > 100 && (w_HIT = 100),
                                                                                            w_HIT_HYOUJI = w_HIT) : 431 == n_A_ActiveSkill ? (wCast = 2,
                                                                                                n_Delay[2] = 1,
                                                                                                n_rangedAtk = 1) : 432 == n_A_ActiveSkill ? (wCast = 1.5,
                                                                                                    n_rangedAtk = 1,
                                                                                                    wMod += .2 * n_A_ActiveSkillLV,
                                                                                                    n_Delay[2] = .5,
                                                                                                    w_HIT = 100,
                                                                                                    w_HIT_HYOUJI = 100) : 434 == n_A_ActiveSkill ? (cast_kotei = 1,
                                                                                                        wCast = 1,
                                                                                                        n_rangedAtk = 0,
                                                                                                        wMod += .5 * n_A_ActiveSkillLV,
                                                                                                        n_Delay[3] = 1) : 435 == n_A_ActiveSkill ? (n_rangedAtk = 1,
                                                                                                            wMod += 1 * n_A_ActiveSkillLV + 2,
                                                                                                            n_Delay[2] = 1 + .2 * n_A_ActiveSkillLV) : 436 == n_A_ActiveSkill ? (n_rangedAtk = 1,
                                                                                                                wMod += .2 * n_A_ActiveSkillLV - .2,
                                                                                                                wCast = 1,
                                                                                                                n_Delay[2] = 1) : 437 == n_A_ActiveSkill && (n_rangedAtk = 1,
                                                                                                                    not_use_card = 1,
                                                                                                                    wCast = 1,
                                                                                                                    n_Delay[2] = 1);
            ATKmod02(wMod, 0),
                0 == cast_kotei && (SRV && 430 == n_A_ActiveSkill ? wCast = wCast : wCast *= n_A_CAST);
            for (e = 0; e <= 2; e++)
                w_MagiclBulet = e,
                    w_DMG[e] = BattleCalc(n_A_DMG[e], e),
                    wActiveHitNum > 1 && (w_DMG[e] = Math.floor(w_DMG[e] / wActiveHitNum) * wActiveHitNum),
                    Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e] + EDP_DMG(e),
                    InnStr[e] += Last_DMG_A[e],
                    158 == n_A_ActiveSkill && 305 == m_Item[n_A_Equip[5]][0] && (w_DMG[e] = 0,
                        InnStr[e] = w_DMG[e] + " (no shield equiped)"),
                    wActiveHitNum > 1 && (InnStr[e] += " (" + w_DMG[e] / wActiveHitNum + " x " + wActiveHitNum + " hits)");
            w_MagiclBulet = 1,
                w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0) * (100 - w_HIT)) / 100,
                EDPplus(1),
                0 == cast_kotei && CastAndDelay(),
                BattleCalc998()
        } else if (275 == n_A_ActiveSkill) {
            n_rangedAtk = 1,
                wCast = .3,
                n_Delay[2] = .3,
                wCast *= n_A_CAST;
            for (e = 0; e <= 2; e++)
                SRV ? (w_DMG[e] = BattleCalc(BK_n_A_MATK[e] * (1 + .05 * n_A_Buf2[8]), e) - 1,
                    0 == n_A_WeaponType && (w_DMG[1] = w_DMG[0],
                        w_DMG[2] = w_DMG[0])) : w_DMG[e] = BattleCalc(BK_n_A_MATK[e], e),
                    Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e] + EDP_DMG(e),
                    InnStr[e] += Last_DMG_A[e];
            n_PerHIT_DMG = BattleCalc2(0) + n_A_WeaponLV_refineATK,
                w_DMG[1] = (w_DMG[1] * w_HIT + n_PerHIT_DMG * (100 - w_HIT)) / 100,
                EDPplus(1),
                CastAndDelay(),
                BattleCalc998()
        } else if (40 == n_A_ActiveSkill || 70 == n_A_ActiveSkill || 192 == n_A_ActiveSkill || 76 == n_A_ActiveSkill || 418 == n_A_ActiveSkill || 391 == n_A_ActiveSkill || 429 == n_A_ActiveSkill || 611 == n_A_ActiveSkill) {
            if (40 == n_A_ActiveSkill)
                n_rangedAtk = 1,
                    wMod += .1 * n_A_ActiveSkillLV - .1,
                    wHITsuu = 2;
            else if (70 == n_A_ActiveSkill)
                wMod += .1 * n_A_ActiveSkillLV,
                    wHITsuu = n_B[4] + 1;
            else if (76 == n_A_ActiveSkill)
                wMod += .4 * n_A_ActiveSkillLV,
                    wCast = .7 * n_A_CAST,
                    wHITsuu = 2,
                    1 == n_A_ActiveSkillLV && (wHITsuu = 1),
                    wLAch = 1,
                    1 == n_B_debuf[6] && (wHITsuu = 3,
                        1 == n_A_ActiveSkillLV && (wHITsuu = 2));
            else if (192 == n_A_ActiveSkill)
                wMod += .5 * n_A_ActiveSkillLV,
                    (a = n_A_Buf2[12]) > n_A_ActiveSkillLV && (a = n_A_ActiveSkillLV),
                    wHITsuu = a,
                    wCast = (1 + a) * n_A_CAST,
                    n_Delay[2] = .5,
                    n_rangedAtk = 1;
            else if (418 == n_A_ActiveSkill)
                n_rangedAtk = 1,
                    n_Delay[2] = 1,
                    wMod += .5,
                    wHITsuu = 3;
            else if (391 == n_A_ActiveSkill)
                n_Delay[0] = 1,
                    n_rangedAtk = 1,
                    wMod += .08 * n_A_STR - .5,
                    wHITsuu = 2;
            else if (429 == n_A_ActiveSkill) {
                n_rangedAtk = 0,
                    wMod += .5 * n_A_ActiveSkillLV - .5,
                    n_Delay[2] = 1;
                wHITsuu = [1, 1.2, 1.6, 2, 2.4, 3, 3.6, 4, 5, 6, 7, 8, 9, 10][1 * c.SkillSubNum.value]
            } else if (611 == n_A_ActiveSkill) {
                n_rangedAtk = 1,
                wMod += 1,
                wHITsuu = c.SkillSubNum.checked ? 5 : 1;
            }
            ATKmod02(wMod, 0);
            for (e = 0; e <= 2; e++)
                w_DMG[e] = BattleCalc(n_A_DMG[e], e),
                    391 == n_A_ActiveSkill && 2 != n_B[2] && 4 != n_B[2] && (w_DMG[e] = 0),
                    w_DMG[e] += EDP_DMG(e),
                    Last_DMG_B[e] = w_DMG[e],
                    76 == n_A_ActiveSkill && (Last_DMG_B[e] = 2 * w_DMG[e]),
                    Last_DMG_A[e] = w_DMG[e] * wHITsuu,
                    0 == n_B_debuf[6] || 0 == wLAch ? InnStr[e] += Math.floor(w_DMG[e] * wHITsuu) + " (" + w_DMG[e] + SubName[8] + wHITsuu + " hits)" : (InnStr[e] += 3 * w_DMG[e] + "(" + 2 * w_DMG[e] + "+" + w_DMG[e] + ")",
                        Last_DMG_B[e] = 3 * w_DMG[e]),
                    w_DMG[e] -= EDP_DMG(e),
                    w_DMG[e] *= wHITsuu;
            _ = BattleCalc2(0);
            w_DMG[1] = (w_DMG[1] * w_HIT + _ * wHITsuu * (100 - w_HIT)) / 100,
                0 == wHITsuu && 192 == n_A_ActiveSkill && (InnStr[0] = "<B style='color:red'># of Spirit Spheres must be higher than 0<BR>Please change it at [Supportive/Party skills]</B>"),
                EDPplus(wHITsuu),
                n_PerHIT_DMG = _ * wHITsuu,
                str_PerHIT_DMG = _ * wHITsuu + " (" + wHITsuu + SubName[8] + _ + " damage)",
                CastAndDelay(),
                BattleCalc998()
        } else if (118 == n_A_ActiveSkill || 271 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
                n_A_Weapon_element = 0,
                not_use_card = 1,
                n_rangedAtk = 1,
                wBT = 80 + 2 * Math.floor(n_A_DEX / 10) + 2 * Math.floor(n_A_INT / 2) + 6 * SkillSearch(119),
                271 == n_A_ActiveSkill ? (wBT = Math.floor(wBT * (150 + 70 * n_A_ActiveSkillLV) / 100), // falcon assault
                    wBT = Math.floor(wBT * element[n_B[3]][0]),
                    wBT = tPlusDamCut(wBT),
                    wBT *= 5,
                    wBT = Math.floor(ApplyModifiers(wBT)),
                    5 == n_B[19] && (wBT = 1),
                    wCast = 1 * n_A_CAST,
                    n_Delay[2] = 3) : (wBT = Math.floor(wBT * element[n_B[3]][0]), // blitz beat
                        wBT = tPlusDamCut(wBT),
                        wBT *= n_A_ActiveSkillLV,
                        wBT = Math.floor(ApplyModifiers(wBT)),
                        wCast = 1.5 * n_A_CAST,
                        n_Delay[2] = 1);
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = wBT,
                    InnStr[e] += Last_DMG_A[e],
                    118 == n_A_ActiveSkill && (Last_DMG_B[e] = wBT / n_A_ActiveSkillLV,
                        InnStr[e] += " (" + Last_DMG_B[e] + " x " + n_A_ActiveSkillLV + " hits)"),
                    w_DMG[e] = wBT;
            w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (17 == n_A_ActiveSkill || 86 == n_A_ActiveSkill && (n_B[3] < 50 || 60 <= n_B[3])) {
            ATKmod02(wMod, 0),
                n_A_Weapon_element = 5,
                wINV = Math.floor(BattleCalc2(0) * Math.max(0, element[n_B[3]][5])),
                n_PerHIT_DMG = wINV;
            for (e = 0; e <= 2; e++)
                w_DMG[e] = BattleCalc(n_A_DMG[e], e),
                    w_DMG[e] = Math.floor(w_DMG[e] * Math.max(0, element[n_B[3]][5])),
                    Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e] + EDP_DMG(e),
                    InnStr[e] += Last_DMG_A[e];
            w_DMG[1] = (w_DMG[1] * w_HIT + wINV * (100 - w_HIT)) / 100,
                EDPplus(1),
                CastAndDelay(),
                BattleCalc998()
        } else if (159 == n_A_ActiveSkill || 384 == n_A_ActiveSkill) { // SHIELD BOOM
            n_PerHIT_DMG = 0,
            n_rangedAtk = 1,
            n_A_Weapon_element = 0,
            Shieldw = 1 * c.SkillSubNum.value,
            n_Delay[2] = .7,
            wMod2 = 1 + .3 * n_A_ActiveSkillLV,
            384 == n_A_ActiveSkill && (n_Delay[2] = .35, wMod2 *= 2),
            wSBr = 10 * n_A_LEFT_REFINE;
            // applying every modifier to shield weight except skill% dmg
            wSBr = Math.floor(wSBr * (100 + n_tok[30 + n_B[2]]) / 100),
            wSBr = Math.floor(wSBr * (100 + n_tok[40 + Math.floor(n_B[3] / 10)]) / 100),
            wSBr = Math.floor(wSBr * (100 + n_tok[27 + n_B[4]]) / 100),
            1 == n_rangedAtk && -1 != TyouEnkakuSousa3dan && (wSBr = Math.floor(wSBr * (100 + n_tok[25]) / 100)),
            _ = 0,
            1 == n_B[19] && (_ += n_tok[26]),
            _ += n_tok[80],
            wSBr = Math.floor(wSBr * (100 + _) / 100);
            _ = 0;
            // shield boom dmg is not affected by def pierce weapons on alfheim
            /* EquipNumSearch(620) || EquipNumSearch(409) || CardNumSearch(255) || (EquipNumSearch(43) || EquipNumSearch(393) || EquipNumSearch(904)) && 7 == n_B[2] || (EquipNumSearch(392) || EquipNumSearch(401)) && 3 == n_B[2] || (EquipNumSearch(467) || EquipNumSearch(405) || EquipNumSearch(471)) && 9 == n_B[2] || EquipNumSearch(394) && 6 == n_B[2] ? (M_DEF1 = n_B[14],
                M_DEF2 = n_B_DEF2[0]) : (M_DEF1 = 0,
                    M_DEF2 = 0);  */
            var o = n_A_ATK + .05 * n_A_ATK * n_A_Buf2[8];
            SkillSearch(12) ? o += .32 * o : n_A_Buf6[5] ? o += Math.floor(o * (.02 + .03 * n_A_Buf6[5])) : n_A_Buf7[31] && (o += Math.floor(.05 * o));
            for (e = 0; e <= 2; e++)
                // ice pick does not effect shield boom on alfheim
                /* n_tok[23] > 0 ? (n_A_ATK_IP = Math.round((o + Shieldw) * (n_B_DEF2[2 - e] + n_B[14]) / 100),
                    w_DMG[e] = n_A_ATK_IP * wMod) : (w_DMG[e] = (o + Shieldw) * wMod,
                        w_DMG[e] = Math.floor(w_DMG[e] * defReduction(n_B[14] - M_DEF1) - (n_B_DEF2[e] - M_DEF2))), */
                w_DMG[e] = (o + Shieldw) * wMod2,
                w_DMG[e] = Math.floor(w_DMG[e] * defReduction(n_B[14]) - n_B_DEF2[e]),
                w_DMG[e] = ApplyModifiers(w_DMG[e]) + wSBr,
                w_DMG[e] < 1 && (w_DMG[e] = 1),
                305 == m_Item[n_A_Equip[5]][0] ? (w_DMG[e] = 0, InnStr[e] += w_DMG[e] + " (no shield equiped)") 
                : (w_DMG[e] = Math.floor(w_DMG[e] * element[n_B[3]][0]),
                    Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e],
                    InnStr[e] += Last_DMG_A[e]);
            w_DMG[1] = w_DMG[1] * w_HIT / 100,
            CastAndDelay(),
            BattleCalc998()
        } else if (324 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
            n_rangedAtk = 1,
            n_A_Weapon_element = 0,
            wCast = 1 * n_A_CAST,
            n_Delay[2] = 1,
            Shieldw = 1 * c.SkillSubNum.value,
            wMod2 = 1 + .3 * n_A_ActiveSkillLV,
            wSBr = 10 * n_A_LEFT_REFINE,
            // applying every modifier to shield weight except skill% dmg
            wSBr = Math.floor(wSBr * (100 + n_tok[30 + n_B[2]]) / 100),
            wSBr = Math.floor(wSBr * (100 + n_tok[40 + Math.floor(n_B[3] / 10)]) / 100),
            wSBr = Math.floor(wSBr * (100 + n_tok[27 + n_B[4]]) / 100),
            1 == n_rangedAtk && -1 != TyouEnkakuSousa3dan && (wSBr = Math.floor(wSBr * (100 + n_tok[25]) / 100)),
            _ = 0,
            1 == n_B[19] && (_ += n_tok[26]),
            _ += n_tok[80],
            wSBr = Math.floor(wSBr * (100 + _) / 100),
            _ = 0;
            SkillSearch(12) ? n_A_ATK += .32 * n_A_ATK : n_A_Buf6[5] ? n_A_ATK += Math.floor(n_A_ATK * (.02 + .03 * n_A_Buf6[5])) : n_A_Buf7[31] && (n_A_ATK += Math.floor(.05 * n_A_ATK));
            for (e = 0; e <= 2; e++)
                w_DMG[e] = (n_A_ATK + Shieldw) * wMod2,
                w_DMG[e] = Math.floor(5 * Math.floor(w_DMG[e] * defReduction(n_B[14]) - n_B_DEF2[e])),
                w_DMG[e] = ApplyModifiers(w_DMG[e]) + (wSBr * 5),
                w_DMG[e] < 1 && (w_DMG[e] = 1),
                305 == m_Item[n_A_Equip[5]][0] ? (w_DMG[e] = 0, InnStr[e] += w_DMG[e] + " (no shield equiped)") 
                : (w_DMG[e] = Math.floor(w_DMG[e] * element[n_B[3]][0]),
                    Last_DMG_B[e] = Math.floor(w_DMG[e] / 5),
                    Last_DMG_A[e] = 5 * Last_DMG_B[e],
                    InnStr[e] += Last_DMG_A[e] + " (" + Last_DMG_B[e] + SubName[8] + "5 hits)",
                    w_DMG[e] = Last_DMG_A[e]);
            w_DMG[1] = w_DMG[1] * w_HIT / 100
            CastAndDelay(),
                BattleCalc998()
        } else if (259 == n_A_ActiveSkill) { // spiral pierce
            n_rangedAtk = 1,
                wSPP2 = n_A_WeaponLV_refineATK * Math.max(0, element[n_B[3]][n_A_Weapon_element]),
                wSPP2 = ApplyModifiers(wSPP2),
                wSPP2 = tPlusDamCut(wSPP2),
                n_PerHIT_DMG = 5 * wSPP2,
                5 == n_A_ActiveSkillLV ? wCast = 1 * n_A_CAST : wCast = (.1 + .2 * n_A_ActiveSkillLV) * n_A_CAST,
                n_Delay[2] = 1 + .2 * n_A_ActiveSkillLV,
                wSPP = 0;
                for(b = 1; b <= (n_A_STR / 10); b++){
                    wSPP += (b * 10) -  5;
                }
                spearMasteryDMG = 4 * SkillSearch(69);
                SkillSearch(78) > 0 && (spearMasteryDMG += SkillSearch(69)),
                Weaponw = 1 * c.SkillSubNum.value,
                w_DMG[2] = n_A_WeaponLV_refineATK + (wSPP / 5) + spearMasteryDMG + (.8 * Weaponw * (1 + .5 * n_A_ActiveSkillLV)),
                wSPP = 1.25 - .25 * n_B[4],
                w_DMG[2] = Math.floor(w_DMG[2] * wSPP),
                w_DMG[2] = w_DMG[2] * Math.max(0, element[n_B[3]][n_A_Weapon_element]),
                w_DMG[2] = ApplyModifiers(w_DMG[2]),
                w_DMG[0] = w_DMG[1] = w_DMG[2];
            for (e = 0; e <= 2; e++)
                Last_DMG_B[e] = w_DMG[e] + EDP_DMG(e),
                    Last_DMG_A[e] = 5 * Last_DMG_B[e],
                    InnStr[e] += Last_DMG_A[e] + " (" + Last_DMG_B[e] + SubName[8] + "5 hits)",
                    w_DMG[e] = Last_DMG_A[e];
            w_DMG[1] = w_DMG[1] * w_HIT / 100 + n_PerHIT_DMG * (100 - w_HIT) / 100,
                EDPplus(5),
                CastAndDelay(),
                BattleCalc998()
        } else if (88 == n_A_ActiveSkill) {
            if (n_PerHIT_DMG = 0,
                not_use_card = 1,
                n_Delay[0] = 1,
                wCast = 1 * n_A_CAST,
                0 == n_B[19]) {
                wMod += (400 + 50 * n_A_ActiveSkillLV + 20 * c.SkillSubNum.value) / 100,
                    ATKmod02(wMod, 0);
                for (e = 0; e <= 2; e++)
                    w_DMG[e] = BattleCalc(n_A_DMG[e], e),
                        w_DMG[e] = Math.floor(w_DMG[e])
            } else
                5 == n_B[19] ? w_DMG[0] = w_DMG[1] = w_DMG[2] = 1 : w_DMG[0] = w_DMG[1] = w_DMG[2] = 0;
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e],
                    InnStr[e] += Last_DMG_A[e];
            w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (263 == n_A_ActiveSkill) {
            not_use_card = 1,
                n_rangedAtk = 1,
                wCast = .5 * n_A_CAST,
                n_Delay[2] = .8 + .2 * n_A_ActiveSkillLV,
                w_SBr = new Array,
                a = 5 * n_A_INT * n_A_ActiveSkillLV,
                w_SBr[2] = a + 1e3 - Math.floor((n_B[14] + n_B[15] + n_B_MDEF2 + n_B_DEF2[2]) / 2),
                w_SBr[1] = a + 750 - Math.floor((n_B[14] + n_B[15] + n_B_MDEF2 + n_B_DEF2[1]) / 2),
                w_SBr[0] = a + 500 - Math.floor((n_B[14] + n_B[15] + n_B_MDEF2 + n_B_DEF2[0]) / 2);
            for (e = 0; e <= 2; e++)
                w_SBr[e] = tPlusDamCut(w_SBr[e]);
            for (e = 0; e <= 2; e++)
                w_DMG[e] = BattleCalc(n_A_DMG[e], e),
                    w_DMG[e] *= n_A_ActiveSkillLV,
                    Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e] + w_SBr[e],
                    InnStr[e] += Last_DMG_A[e] + " (" + w_DMG[e] + " + " + w_SBr[e] + ")",
                    w_DMG[e] = Last_DMG_A[e];
            _ = BattleCalc2(0) * n_A_ActiveSkillLV;
            if (n_PerHIT_DMG = _ + w_SBr[1],
                str_PerHIT_DMG = _ + w_SBr[0] + "~" + (_ + w_SBr[2]),
                5 == n_B[19])
                for (e = 0; e <= 2; e++)
                    Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e] = 1,
                        InnStr[e] += Last_DMG_A[e];
            w_DMG[1] = (w_DMG[1] * w_HIT + n_PerHIT_DMG * (100 - w_HIT)) / 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (162 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
                myInnerHtml("CRIATKname", '<Font color="#FF0000">Health drain</Font>', 0),
                myInnerHtml("CRIATK", '<Font color="#FF0000">' + Math.floor(n_A_MaxHP / 5) + "</Font>", 0),
                myInnerHtml("bSUB3name", '<Font color="#FF0000">Damage backlash</Font>', 0),
                work_A_VITDEF = [0, 0, 0],
                work_A_VITDEF[0] = n_A_VITDEF[2],
                work_A_VITDEF[1] = n_A_VITDEF[1],
                work_A_VITDEF[2] = n_A_VITDEF[0],
                n_A_softMDEF = n_A_INT + Math.floor(n_A_VIT / 2);
            for (e = 0; e <= 2; e++)
                w_DMG[e] = BK_n_A_DMG[e] * defReduction(n_A_DEF) - work_A_VITDEF[e] + n_A_WeaponLV_refineATK,
                    w_DMG[e] = Math.floor(w_DMG[e] * (wMod + .4 * n_A_ActiveSkillLV)),
                    a = BK_n_A_MATK[e] * mdefReduction(n_A_MDEF) - n_A_softMDEF,
                    a = Math.floor(a * (.4 * n_A_ActiveSkillLV + 1)),
                    w_DMG[e] += a,
                    w_DMG[e] = Math.floor(w_DMG[e] * (100 - n_tok[57]) / 100),
                    w_DMG[e] = Math.floor(w_DMG[e] * (100 - n_tok[66]) / 100),
                    w_DMG[e] = Math.floor(w_DMG[e] * (100 - n_tok[78]) / 100),
                    1 * c.A_adopted.checked ? w_DMG[e] = Math.floor(w_DMG[e] * (100 - n_tok[190]) / 100) : w_DMG[e] = Math.floor(w_DMG[e] * (100 - n_tok[191]) / 100),
                    w_DMG[e] = Math.floor(w_DMG[e] * Math.max(0, element[10 * n_A_Bodyelement + 1][6])),
                    w_DMG[e] = Math.floor(w_DMG[e] / 2),
                    EquipNumSearch(1433) && (w_DMG[e] = Math.floor(1.172 * w_DMG[e]));
            myInnerHtml("bSUB3", '<Font color="#FF0000">3(hits) x ' + w_DMG[0] + "~" + w_DMG[2] + " damage</Font>", 0),
                n_rangedAtk = 2,
                n_A_Weapon_element = 6,
                wCast = 3 * n_A_CAST,
                n_Delay[2] = 1.5,
                wLAch = 1;
            for (e = 0; e <= 2; e++)
                w_DMG[e] = BK_n_A_DMG[e] * defReduction(n_B[14]) - n_B_DEF2[e] + n_A_WeaponLV_refineATK,
                    w_DMG[e] *= wMod + .4 * n_A_ActiveSkillLV,
                    w_DMG[e] = Math.floor(w_DMG[e] * Math.max(0, element[n_B[3]][6])),
                    a = BK_n_A_MATK[e] * mdefReduction(n_B[15]) - n_B_MDEF2,
                    a *= .4 * n_A_ActiveSkillLV + 1,
                    a = Math.floor(a * Math.max(0, element[n_B[3]][6])),
                    w_DMG[e] = tPlusDamCut(Math.floor((a + w_DMG[e]) * Math.max(0, element[n_B[3]][6]))),
                    EquipNumSearch(1433) && (w_DMG[e] = Math.floor(1.1 * w_DMG[e])),
                    w_DMG[e] < 1 && (w_DMG[e] = 1),
                    60 <= n_B[3] && n_B[3] <= 69 && (w_DMG[e] = 0);
            if (0 == n_B_debuf[6])
                for (var s = 0; s <= 2; s++)
                    Last_DMG_A[s] = Last_DMG_B[s] = 3 * w_DMG[s],
                        InnStr[s] += Last_DMG_A[s] + " (" + w_DMG[s] + SubName[8] + "3 hits)",
                        w_DMG[s] = Last_DMG_A[s];
            else
                for (s = 0; s <= 2; s++)
                    Last_DMG_A[s] = Last_DMG_B[s] = 4 * w_DMG[s],
                        InnStr[s] += Last_DMG_A[s] + " (" + 2 * w_DMG[s] + " + " + w_DMG[s] + SubName[8] + "2 hits)",
                        w_DMG[s] = Last_DMG_A[s];
            w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (66 == n_A_ActiveSkill) {
            for (wCR = 100,
                n_PerHIT_DMG = Math.floor(2 * BattleCalc2(0) * element[n_B[3]][0]),
                SkillSearch(327) ? wCR += 20 * SkillSearch(327) : (SkillSearch(154) && (wCR += 5 * SkillSearch(154)),
                    0 == SkillSearch(154) && n_A_Buf2[8] && (wCR += 5 * n_A_Buf2[8])),
                CR_n_A_DMG = [0, 0, 0],
                CRmod = 1 * c.SkillSubNum.value / 8e3,
                s = 0; s <= 2; s++)
                CR_n_A_DMG[s] = Math.floor(n_A_DMG[s] * wCR / 100);
            wMod += .5,
                ATKmod02(wMod, 0);
            for (s = 0; s <= 2; s++)
                w_DMG[s] = BattleCalc(n_A_DMG[s], s),
                    w_DMG[s] += Math.floor(BattleCalc(CR_n_A_DMG[s], s) * CRmod),
                    w_DMG[s] = Math.floor(w_DMG[s] * element[n_B[3]][0]),
                    SRV && (!CardNumSearch(523) || 6 != n_A_JOB && 12 != n_A_JOB && 19 != n_A_JOB && 26 != n_A_JOB && 33 != n_A_JOB && 40 != n_A_JOB || (w_DMG[0] *= 1.5,
                        w_DMG[1] *= 1.5,
                        w_DMG[2] *= 1.5)),
                    Last_DMG_A[s] = Last_DMG_B[s] = w_DMG[s] + EDP_DMG(s),
                    InnStr[s] += Last_DMG_A[s];
            w_DMG[1] = (w_DMG[1] * w_HIT + 2 * BattleCalc2(0) * (100 - w_HIT)) / 100,
                w_DMG[1] = Math.floor(w_DMG[1] * element[n_B[3]][0]),
                EDPplus(1),
                CastAndDelay(),
                BattleCalc998()
        } else if (283 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
                w_DMG[2] = 500 + 300 * n_A_ActiveSkillLV,
                5 == n_B[19] && (w_DMG[2] = 1),
                w_DMG[0] = w_DMG[1] = w_DMG[2];
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e],
                    InnStr[e] += Last_DMG_A[e];
            wCast = (1.5 + .5 * n_A_ActiveSkillLV) * n_A_CAST,
                n_Delay[2] = 1.5 + .5 * n_A_ActiveSkillLV,
                SRV && (n_Delay[2] = (1.5 + .5 * n_A_ActiveSkillLV) / 2),
                w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (284 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
                n_A_Weapon_element = 0,
                w_DMG[2] = Math.floor(.09 * n_A_MaxHP * (.9 + .1 * n_A_ActiveSkillLV)),
                w_DMG[2] = ApplyModifiers(w_DMG[2]),
                w_DMG[2] = Math.floor(w_DMG[2] * element[n_B[3]][0]),
                w_DMG[0] = w_DMG[1] = w_DMG[2];
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e],
                    InnStr[e] += Last_DMG_A[e];
            w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (193 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
                w_HIT_HYOUJI = 100,
                n_A_Weapon_element = 0,
                ATKmod02(wMod, 0),
                wMod += .75 * n_A_ActiveSkillLV,
                work_B_DEF2 = [0, 0, 0],
                work_B_DEF2[0] = n_B_DEF2[2],
                work_B_DEF2[1] = n_B_DEF2[1],
                work_B_DEF2[2] = n_B_DEF2[0];
            for (s = 0; s <= 2; s++)
                w_DMG[s] = Math.floor(Math.floor(BK_n_A_DMG[s] * wMod) * (work_B_DEF2[s] + n_B[14]) / 50),
                    w_DMG[s] = ApplyModifiers(w_DMG[s]),
                    w_DMG[s] = Math.floor(w_DMG[s] * element[n_B[3]][0]),
                    Last_DMG_A[s] = Last_DMG_B[s] = w_DMG[s] + EDP_DMG(s),
                    InnStr[s] += Last_DMG_A[s];
            EDPplus(1),
                wCast = 1 * n_A_CAST,
                n_Delay[2] = .5,
                CastAndDelay(),
                BattleCalc998()
        } else if (197 == n_A_ActiveSkill || 321 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
                w_HIT_HYOUJI = 100,
                n_A_Weapon_element = 0,
                ATKmod02(wMod, 0),
                SRV ? 197 == n_A_ActiveSkill ? wMod += 8 + 1 * c.SkillSubNum.value / 10 : wMod += 8 + (n_A_MaxSP - 1) / 10 : 197 == n_A_ActiveSkill ? wMod += 6 + 1 * c.SkillSubNum.value / 10 : wMod += 6 + (n_A_MaxSP - 1) / 10,
                wASYU = 250 + 150 * n_A_ActiveSkillLV;
            for (s = 0; s <= 2; s++)
                w_DMG[s] = BK_n_A_DMG[s],
                1 == n_A_Buf2[19] && (w_DMG[s] *= 2),
                w_DMG[s] = Math.floor(w_DMG[s] * wMod) + wASYU,
                    w_DMG[s] = ApplyModifiers(w_DMG[s]),
                    w_DMG[s] = Math.floor(w_DMG[s] * element[n_B[3]][0]),
                    (n_A_Buf6[5] ? w_DMG[s] += Math.floor((.02 + .03 * n_A_Buf6[5]) * w_DMG[s]) : n_A_Buf7[31] && (w_DMG[s] += Math.floor(.05 * w_DMG[s])),
                        1 == n_A_Buf2[19] && (w_DMG[s] = 2 * w_DMG[s])),
                    Last_DMG_A[s] = Last_DMG_B[s] = w_DMG[s] + EDP_DMG(s),
                    InnStr[s] += Last_DMG_A[s];
            EDPplus(1),
                wCast = (4.5 - .5 * n_A_ActiveSkillLV) * n_A_CAST,
                n_Delay[2] = 3.5 - .5 * n_A_ActiveSkillLV,
                CastAndDelay(),
                BattleCalc998()
        } else if (394 == n_A_ActiveSkill) {
            n_rangedAtk = 1,
                not_use_card = 1,
                ATKmod02(wMod, 0);
            for (s = 0; s <= 2; s++)
                w_DMG[s] = BattleCalc(n_A_DMG[s], s),
                    w_DMG[s] = Math.floor(w_DMG[s] * element[n_B[3]][0]),
                    Last_DMG_A[s] = Last_DMG_B[s] = w_DMG[s],
                    InnStr[s] += Last_DMG_A[s];
            w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0) * element[n_B[3]][0] * (100 - w_HIT)) / 100,
                n_PerHIT_DMG = BattleCalc2(0) * element[n_B[3]][0],
                CastAndDelay(),
                BattleCalc998()
        } else if (395 == n_A_ActiveSkill) {
            n_rangedAtk = 1,
                n_Delay[2] = 1,
                not_use_card = 1,
                ATKmod02(wMod, 0),
                n_A_Weapon_element = m_Kunai[1 * c.SkillSubNum.value][1];
            for (s = 0; s <= 2; s++)
                w_DMG[s] = BattleCalc(n_A_DMG[s], s),
                    w_DMG[s] = Math.floor(w_DMG[s] * element[n_B[3]][0]),
                    Last_DMG_B[s] = w_DMG[s],
                    Last_DMG_A[s] = 3 * w_DMG[s],
                    InnStr[s] += Last_DMG_A[s] + " (" + Last_DMG_B[s] + SubName[8] + "3 hits)",
                    w_DMG[s] = Last_DMG_A[s];
            _ = Math.floor(BattleCalc2(0) * element[n_B[3]][0]);
            w_DMG[1] = (w_DMG[1] * w_HIT + 3 * _ * (100 - w_HIT)) / 100,
                n_PerHIT_DMG = 3 * _,
                str_PerHIT_DMG = 3 * _ + " (3" + SubName[8] + _ + " damage)",
                CastAndDelay(),
                BattleCalc998()
        } else if (396 == n_A_ActiveSkill) {
            wMod += 1.5 * n_A_ActiveSkillLV + .5,
                n_rangedAtk = 1,
                ATKmod02(wMod, 0),
                wCast = 3 * n_A_CAST,
                n_Delay[2] = 3,
                wActiveHitNum = 2 + Math.round(n_A_ActiveSkillLV / 2);
            for (s = 0; s <= 2; s++)
                w_DMG[s] = BattleCalc(n_A_DMG[s], s),
                    w_DMG[s] = Math.floor(w_DMG[s] * element[n_B[3]][0]),
                    wActiveHitNum > 1 && (w_DMG[s] = Math.floor(w_DMG[s] / wActiveHitNum) * wActiveHitNum),
                    Last_DMG_A[s] = Last_DMG_B[s] = w_DMG[s],
                    InnStr[s] += Last_DMG_A[s],
                    InnStr[s] += " (" + Last_DMG_A[s] / wActiveHitNum + " x " + wActiveHitNum + " hits)";
            w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0) * element[n_B[3]][0] * (100 - w_HIT)) / 100,
                n_PerHIT_DMG = BattleCalc2(0) * element[n_B[3]][0],
                CastAndDelay(),
                BattleCalc998()
        } else if (397 == n_A_ActiveSkill) {
            for (n_rangedAtk = 1,
                n_A_Weapon_element = 0,
                wCast = 0,
                n_Delay[2] = 5,
                w_HIT_HYOUJI = 100,
                1 == n_B[19] || 586 == n_B[0] ? (w_DMG[0] = 250 * n_A_ActiveSkillLV,
                    w_DMG[1] = 250 * n_A_ActiveSkillLV + 125 * n_A_ActiveSkillLV,
                    w_DMG[2] = 250 * n_A_ActiveSkillLV + 250 * n_A_ActiveSkillLV) : (w_DMG[0] = 500 * n_A_ActiveSkillLV,
                        w_DMG[1] = 500 * n_A_ActiveSkillLV + 250 * n_A_ActiveSkillLV,
                        w_DMG[2] = 500 * n_A_ActiveSkillLV + 500 * n_A_ActiveSkillLV),
                e = 0; e <= 2; e++)
                w_DMG[e] = w_DMG[e] * Math.max(0, element[n_B[3]][n_A_Weapon_element]),
                    w_DMG[e] = tPlusDamCut(w_DMG[e]);
            for (5 == n_B[19] && (w_DMG[0] = w_DMG[1] = w_DMG[2] = 1),
                e = 0; e <= 2; e++)
                InnStr[e] += w_DMG[e];
            EDPplus(5),
                CastAndDelay(),
                BattleCalc998()
        } else if (405 == n_A_ActiveSkill || 438 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
                n_A_Weapon_element = 0,
                n_rangedAtk = 1,
                ATKmod02(wMod, 0),
                405 == n_A_ActiveSkill ? w_1senHP = 1 * c.SkillSubNum.value : w_1senHP = n_A_MaxHP - 1,
                w_DMG[0] = SRV ? 40 * (n_A_STR - SkillSearch(404)) + n_A_ActiveSkillLV * (w_1senHP / 10 + 35) : 40 * (n_A_STR + n_A_ActiveSkillLV) + w_1senHP * (n_A_BaseLV / 100) * n_A_ActiveSkillLV / 10,
                w_DMG[0] = w_DMG[0] * defReduction(n_B[14]),
                w_DMG[0] = ApplyModifiers(w_DMG[0]),
                w_DMG[0] = Math.floor(w_DMG[0] * element[n_B[3]][0]),
                w_DMG[2] = w_DMG[1] = w_DMG[0];
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e],
                    InnStr[e] += Last_DMG_A[e];
            CastAndDelay(),
                w_HIT_HYOUJI = 100,
                BattleCalc998()
        } else if (244 == n_A_ActiveSkill) { // acid terror
            n_PerHIT_DMG = 0,
                n_rangedAtk = 1,
                wMod = (100 + 130 * n_A_ActiveSkillLV) / 100;
                wMod2 = (100 + 40 * n_A_ActiveSkillLV) / 100;
            for (s = 0; s <= 2; s++)
                w_DMG[s] = BK_n_A_DMG[s] * wMod,
                    w_DMG[s] = BattleCalc(w_DMG[s], s),
                    a = BK_n_A_MATK[s] * wMod2,
                    a = BattleCalc(a, s),
                    Last_DMG_B[s] = w_DMG[s] + a,
                    Last_DMG_A[s] = Last_DMG_B[s],
                    InnStr[s] += Last_DMG_A[s] + " (" + w_DMG[s] + " + " + a + ")";
            wCast = 1 * n_A_CAST,
                CastAndDelay(),
                BattleCalc998()
        } else if (328 == n_A_ActiveSkill) { // acid demo
            n_PerHIT_DMG = 0,
                n_rangedAtk = 1,
                n_A_Weapon_element = 0,
                wHITsuu = n_A_ActiveSkillLV,
                wAD = .7 * n_A_INT * n_A_INT * n_B[7] / (n_A_INT + n_B[7]),
                w_DMG[2] = Math.floor(wAD),
                w_DMG[2] = tPlusDamCut(Math.floor(w_DMG[2] * element[n_B[3]][0])),
                1 == PvP && (w_DMG[2] = Math.floor(w_DMG[2] / 2)),
                w_DMG[0] = w_DMG[1] = w_DMG[2];
            for (e = 0; e <= 2; e++)
                Last_DMG_B[e] = w_DMG[e],
                    Last_DMG_A[e] = w_DMG[e] * wHITsuu,
                    InnStr[e] += Last_DMG_A[e] + " (" + Last_DMG_B[e] + SubName[8] + wHITsuu + " hits)",
                    w_DMG[e] = Last_DMG_A[e];
            wCast = 1 * n_A_CAST,
                n_Delay[2] = 1,
                w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (106 == n_A_ActiveSkill || 111 == n_A_ActiveSkill || 112 == n_A_ActiveSkill || 113 == n_A_ActiveSkill) { // traps
            n_PerHIT_DMG = 0,
                n_Delay[0] = 1,
                106 == n_A_ActiveSkill ? (n_A_Weapon_element = 2,
                    w_DMG[2] = Math.floor(n_A_ActiveSkillLV * (75 + n_A_DEX) * (n_A_INT + 100) / 35 * Math.max(0, element[n_B[3]][2]))) : 112 == n_A_ActiveSkill ? (n_A_Weapon_element = 4,
                        w_DMG[2] = Math.floor(n_A_ActiveSkillLV * (75 + n_A_DEX) * (n_A_INT + 100) / 35 * Math.max(0, element[n_B[3]][4]))) : 113 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                            w_DMG[2] = Math.floor(n_A_ActiveSkillLV * (75 + n_A_DEX) * (n_A_INT + 100) / 35 * Math.max(0, element[n_B[3]][3]))) : 111 == n_A_ActiveSkill && (n_A_Weapon_element = 1,
                                w_DMG[2] = Math.floor(n_A_ActiveSkillLV * (75 + n_A_DEX) * (n_A_INT + 100) / 35 * Math.max(0, element[n_B[3]][1]))),
                w_DMG[2] = tPlusDamCut(w_DMG[2]),
                _ = 0
                n_A_Buf9[20] == n_A_ActiveSkill && (_ += n_A_Buf9[19]),
                n_A_Buf9[22] == n_A_ActiveSkill && (_ += n_A_Buf9[21]),
                w_DMG[2] = Math.floor(w_DMG[2] * (100 + StPlusCalc2(5e3 + n_A_ActiveSkill) + StPlusCard(5e3 + n_A_ActiveSkill) + _) / 100),
                w_DMG[0] = w_DMG[1] = w_DMG[2];
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e],
                    InnStr[e] += Last_DMG_A[e];
            w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (25 == n_A_ActiveSkill) { // heal
            n_PerHIT_DMG = 0,
                n_A_Weapon_element = 6,
                n_Delay[2] = 1,
                n_rangedAtk = 2,
                w_DMG[2] = HealCalc(n_A_ActiveSkillLV, 0),
                w_DMG[2] = Math.floor(Math.floor(w_DMG[2] / 2) * Math.max(0, element[n_B[3]][6])),
                n_B[3] < 90 && (w_DMG[2] = 0);
            _ = n_tok[170 + n_B[2]];
            nEle = n_tok[340 + Math.floor(n_B[3] / 10)];
            nSize = n_tok[356 + n_B[4]];
            nBoss = n_B[19] ? n_tok[353] : 0; 
            nAll = n_tok[354];
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + _) / 100),
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + nEle) / 100),
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + nSize) / 100),
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + nBoss) / 100),
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + nAll) / 100),
                wHealMOD = 100 + n_tok[93],
                w_DMG[2] = Math.floor(w_DMG[2] * wHealMOD / 100),
                w_DMG[2] = tPlusDamCut(w_DMG[2]),
                w_DMG[0] = w_DMG[1] = w_DMG[2];
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e],
                    InnStr[e] += Last_DMG_A[e];
            w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (94 == n_A_ActiveSkill) { // sanc
            n_PerHIT_DMG = 0,
                n_A_Weapon_element = 6,
                wCast = 5 * n_A_CAST,
                n_Delay[0] = 1,
                n_rangedAtk = 2,
                n_A_ActiveSkillLV <= 6 ? w_DMG[2] = 100 * n_A_ActiveSkillLV : w_DMG[2] = 777,
                w_HEAL_MOD = 100 + n_tok[94],
                w_DMG[2] = Math.floor(w_DMG[2] * w_HEAL_MOD / 100),
                w_DMG[2] = Math.floor(Math.floor(w_DMG[2] / 2) * Math.max(0, element[n_B[3]][6])),
                n_B[3] < 90 && 6 != n_B[2] && (w_DMG[2] = 0);
            _ = n_tok[170 + n_B[2]];
            nEle = n_tok[340 + Math.floor(n_B[3] / 10)];
            nSize = n_tok[356 + n_B[4]];
            nBoss = n_B[19] ? n_tok[353] : 0; 
            nAll = n_tok[354];
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + _) / 100),
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + nEle) / 100),
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + nSize) / 100),
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + nBoss) / 100),
            w_DMG[2] = Math.floor(w_DMG[2] * (100 + nAll) / 100),
                w_HEAL_MOD = 100 + n_tok[96],
                w_DMG[2] = Math.floor(w_DMG[2] * w_HEAL_MOD / 100),
                w_DMG[2] = tPlusDamCut(w_DMG[2]),
                w_DMG[0] = w_DMG[1] = w_DMG[2];
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e],
                    InnStr[e] += Last_DMG_A[e];
            w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (102 == n_A_ActiveSkill || 97 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
                102 == n_A_ActiveSkill ? (n_A_Weapon_element = 6,
                    wCast = 1 * n_A_CAST) : (n_A_Weapon_element = 0,
                        wCast = 8 - 2 * n_A_ActiveSkillLV,
                        wCast *= n_A_CAST),
                n_rangedAtk = 2,
                n_B[3] < 90 ? (a = 0,
                    w_DMG[2] = 0,
                    w_DMG[0] = 0,
                    w_DMG[1] = 0) : (1 != n_B[19] ? (a = (20 * n_A_ActiveSkillLV + n_A_BaseLV + n_A_INT + n_A_LUK) / 1e3,
                        w_DMG[2] = n_B[6]) : (a = 0,
                            w_DMG[2] = 0),
                        w_DMG[0] = n_A_BaseLV + n_A_INT + 10 * n_A_ActiveSkillLV,
                        w_DMG[0] = Math.floor(w_DMG[0] * Math.max(0, element[n_B[3]][n_A_Weapon_element])),
                        w_DMG[1] = Math.round(n_B[6] * a + w_DMG[0] * (100 - a) / 100));
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e];
            InnStr[0] += w_DMG[0] + " (damage on failure)",
                InnStr[1] += w_DMG[1] + " (considering success chance)",
                InnStr[2] += Math.floor(w_DMG[2] * Math.max(0, element[n_B[3]][n_A_Weapon_element])) + " (" + Math.floor(1e4 * a) / 100 + "% success chance)",
                n_Delay[2] = 3,
                w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else if (325 == n_A_ActiveSkill) {
            n_PerHIT_DMG = 0,
                n_A_Weapon_element = 0,
                n_Delay[6] = 9,
                n_rangedAtk = 2,
                wHITsuu = 4 + n_A_ActiveSkillLV,
                w_DMG[2] = 200 + 200 * n_A_ActiveSkillLV,
                w_DMG[2] = Math.floor(w_DMG[2]),
                5 == n_B[19] && (w_DMG[2] = 1),
                44 == n_B[0] && (w_DMG[2] = 400),
                w_DMG[0] = w_DMG[1] = w_DMG[2];
            for (e = 0; e <= 2; e++)
                Last_DMG_A[e] = Last_DMG_B[e] = w_DMG[e] * wHITsuu,
                    w_DMG[e] = Last_DMG_A[e];
            var u = Last_DMG_A[0] + " (" + w_DMG[0] / wHITsuu + " x " + wHITsuu + " hits)";
            for (e = 0; e <= 2; e++)
                InnStr[e] += u;
            wCast = 5 * n_A_CAST,
                n_Delay[2] = 2,
                w_HIT_HYOUJI = 100,
                CastAndDelay(),
                BattleCalc998()
        } else {
            if (n_PerHIT_DMG = 0,
                n_rangedAtk = 2,
                wMod = 1,
                n_bunkatuHIT = 0,
                w_HIT_HYOUJI = 100,
                51 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                    wHITsuu = n_A_ActiveSkillLV,
                    wCast = .7 * n_A_ActiveSkillLV,
                    n_Delay[2] = .8 + .2 * n_A_ActiveSkillLV) : 54 == n_A_ActiveSkill ? (n_A_Weapon_element = 1,
                        wHITsuu = n_A_ActiveSkillLV,
                        wCast = .7 * n_A_ActiveSkillLV,
                        n_Delay[2] = .8 + .2 * n_A_ActiveSkillLV) : 56 == n_A_ActiveSkill && (n_A_Weapon_element = 4,
                            wHITsuu = n_A_ActiveSkillLV,
                            wCast = .7 * n_A_ActiveSkillLV,
                            n_Delay[2] = .8 + .2 * n_A_ActiveSkillLV),
                540 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                    wHITsuu = n_A_ActiveSkillLV,
                    wCast = 0,
                    n_Delay[2] = 0,
                    w_HIT_HYOUJI = 100) : 541 == n_A_ActiveSkill ? (n_A_Weapon_element = 1,
                        wHITsuu = n_A_ActiveSkillLV,
                        wCast = 0,
                        n_Delay[2] = 0,
                        w_HIT_HYOUJI = 100) : 542 == n_A_ActiveSkill ? (n_A_Weapon_element = 4,
                            wHITsuu = n_A_ActiveSkillLV,
                            wCast = 0,
                            n_Delay[2] = 0,
                            w_HIT_HYOUJI = 100) : 52 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                                n_A_ActiveSkillLV <= 5 ? (wCast = 1.5,
                                    n_Delay[2] = 1.5) : (wCast = 1,
                                        n_Delay[2] = 1),
                                wMod = .7 + .1 * n_A_ActiveSkillLV) : 53 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                                    wHITsuu = 4 + n_A_ActiveSkillLV,
                                    wCast = 2.15 - .15 * n_A_ActiveSkillLV,
                                    n_Delay[2] = .1,
                                    wMod = .5) : 55 == n_A_ActiveSkill ? (n_A_Weapon_element = 1,
                                        wCast = .8,
                                        n_Delay[2] = 1.5,
                                        wMod = 1 + .1 * n_A_ActiveSkillLV) : 57 == n_A_ActiveSkill ? (n_A_Weapon_element = 4,
                                            wHITsuu = n_A_ActiveSkillLV,
                                            wCast = 1 * n_A_ActiveSkillLV,
                                            n_Delay[2] = 2,
                                            wMod = .8) : 46 == n_A_ActiveSkill ? (n_A_Weapon_element = 8,
                                                wCast = .5,
                                                10 == n_A_ActiveSkillLV ? n_Delay[2] = .5 : 9 == n_A_ActiveSkillLV ? n_Delay[2] = .6 : 8 == n_A_ActiveSkillLV ? n_Delay[2] = .7 : n_A_ActiveSkillLV >= 6 ? n_Delay[2] = .8 : n_A_ActiveSkillLV >= 4 ? n_Delay[2] = .9 : n_Delay[2] = 1,
                                                wMod = .7 + .1 * n_A_ActiveSkillLV) : 47 == n_A_ActiveSkill ? (n_A_Weapon_element = 8,
                                                    wHITsuu = Math.round(n_A_ActiveSkillLV / 2),
                                                    wCast = .5,
                                                    n_A_ActiveSkillLV % 2 == 0 ? n_Delay[2] = .8 + n_A_ActiveSkillLV / 2 * .2 : n_Delay[2] = 1 + (n_A_ActiveSkillLV + 1) / 2 * .2) : 122 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                                                        wHITsuu = n_A_ActiveSkillLV + 2,
                                                        wCast = 3.3 - .3 * n_A_ActiveSkillLV,
                                                        n_Delay[2] = 1,
                                                        wMod = .2) : 124 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                                                            wCast = .7,
                                                            n_Delay[2] = 2,
                                                            wMod = 1 + .2 * n_A_ActiveSkillLV) : 125 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                                                                wHITsuu = Math.round(n_A_ActiveSkillLV / 2) * (Math.floor(n_A_ActiveSkillLV / 2) + 2),
                                                                wCast = 15,
                                                                n_Delay[2] = 1 * Math.floor(n_A_ActiveSkillLV / 2) + 2) : 126 == n_A_ActiveSkill ? (n_A_Weapon_element = 4,
                                                                    wHITsuu = n_A_ActiveSkillLV + 2,
                                                                    wCast = 2 + .5 * n_A_ActiveSkillLV) : 127 == n_A_ActiveSkill ? (n_A_Weapon_element = 4,
                                                                        wHITsuu = 4,
                                                                        wCast = 15.5 - .5 * n_A_ActiveSkillLV,
                                                                        n_Delay[2] = 5,
                                                                        n_Delay[6] = 4,
                                                                        wMod = .8 + .2 * n_A_ActiveSkillLV) : 128 == n_A_ActiveSkill || 320 == n_A_ActiveSkill ? (n_A_Weapon_element = 1,
                                                                            n_A_ActiveSkillLV >= 4 ? wHITsuu = 25 : n_A_ActiveSkillLV >= 2 && (wHITsuu = 9),
                                                                            SG_Special_HITnum = wHITsuu,
                                                                            wCast = n_A_ActiveSkillLV,
                                                                            wMod = 1 + .3 * n_A_ActiveSkillLV,
                                                                            n_Delay[3] = .1 * wHITsuu,
                                                                            1965 == n_A_Equip[0] && (n_Delay[3] += 1.5)) : 130 == n_A_ActiveSkill ? (wMod = .66 + .066 * n_A_ActiveSkillLV,
                                                                                n_A_Weapon_element = 1,
                                                                                wCast = 6 - .5 * Math.floor((n_A_ActiveSkillLV - 1) / 2),
                                                                                n_Delay[2] = 1) : 131 == n_A_ActiveSkill ? (n_A_Weapon_element = 1,
                                                                                    wHITsuu = 1 * c.SkillSubNum.value,
                                                                                    SG_Special_HITnum = wHITsuu,
                                                                                    SRV ? (SGcast = 1,
                                                                                        10 == n_A_Weapon_refine && EquipNumSearch(1169) && (SGcast -= .08),
                                                                                        EquipNumSearch(1786) && (SGcast -= .04 * n_A_LEFT_REFINE),
                                                                                        wCast = (5 + n_A_ActiveSkillLV) * SGcast) : wCast = 5 + n_A_ActiveSkillLV,
                                                                                    n_Delay[2] = 5,
                                                                                    n_Delay[6] = 4.5,
                                                                                    wMod = 1 + .4 * n_A_ActiveSkillLV) : 132 == n_A_ActiveSkill || 133 == n_A_ActiveSkill || 319 == n_A_ActiveSkill ? (n_A_Weapon_element = 2,
                                                                                        wHITsuu = n_A_ActiveSkillLV,
                                                                                        132 == n_A_ActiveSkill ? (wCast = .7 * n_A_ActiveSkillLV,
                                                                                            n_Delay[2] = .8 + .2 * n_A_ActiveSkillLV) : (wCast = n_A_ActiveSkillLV,
                                                                                                n_Delay[2] = 1)) : 277 == n_A_ActiveSkill ? (wHITsuu = n_A_ActiveSkillLV,
                                                                                                    n_A_Weapon_element = 8,
                                                                                                    wCast = 1,
                                                                                                    n_Delay[2] = 1,
                                                                                                    wMod = .7 + .1 * n_A_ActiveSkillLV) : 37 == n_A_ActiveSkill || 387 == n_A_ActiveSkill ? (n_A_Weapon_element = 6,
                                                                                                        wCast = 2,
                                                                                                        wMod = 1.25,
                                                                                                        387 == n_A_ActiveSkill && (wMod *= 5)) : 104 == n_A_ActiveSkill ? (n_Delay[0] = 1,
                                                                                                            n_A_Weapon_element = 6,
                                                                                                            wHITsuu = n_A_ActiveSkillLV,
                                                                                                            wCast = 10,
                                                                                                            n_Delay[2] = 2.5/*, // make ME hit all
                                                                                                            6 != n_B[2] && n_B[3] < 90 && (n_A_MATK[2] = 0, n_A_MATK[0] = 0, n_A_MATK[1] = 0)*/) : 312 == n_A_ActiveSkill ? (n_A_Weapon_element = 7,
                                                                                                                    wHITsuu = Math.round(n_A_ActiveSkillLV / 2),
                                                                                                                    wCast = .5,
                                                                                                                    n_A_ActiveSkillLV % 2 == 0 ? n_Delay[2] = .8 + n_A_ActiveSkillLV / 2 * .2 : n_Delay[2] = 1 + (n_A_ActiveSkillLV + 1) / 2 * .2) : 373 == n_A_ActiveSkill ? (n_A_Weapon_element = 1 * c.A_Weapon_element.value,
                                                                                                                        wCast = .1,
                                                                                                                        n_Delay[2] = .5,
                                                                                                                        0 == n_B[4] ? wMod =  1 + .1 * n_A_ActiveSkillLV : wMod = .01,
                                                                                                                        1 == PvP && (wMod = 0)) : 374 == n_A_ActiveSkill ? (n_A_Weapon_element = 1 * c.A_Weapon_element.value,
                                                                                                                            wCast = .1,
                                                                                                                            n_Delay[2] = .5,
                                                                                                                            wMod = 1 + .05 * n_A_ActiveSkillLV,
                                                                                                                            1 == PvP && (wMod = 0)) : 375 == n_A_ActiveSkill ? (n_A_Weapon_element = 1 * c.A_Weapon_element.value,
                                                                                                                                n_Delay[0] = 1,
                                                                                                                                wHITsuu = n_A_ActiveSkillLV,
                                                                                                                                wCast = 2,
                                                                                                                                n_Delay[2] = .5,
                                                                                                                                wMod = .4 + n_A_BaseLV / 100,
                                                                                                                                1 == PvP && (wMod = 0)) : 407 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                                                                                                                                    wMod = .9,
                                                                                                                                    wHITsuu = n_A_ActiveSkillLV,
                                                                                                                                    wCast = .7 * n_A_ActiveSkillLV) : 408 == n_A_ActiveSkill ? (n_A_Weapon_element = 3,
                                                                                                                                        wMod = .5,
                                                                                                                                        wHITsuu = Math.round(n_A_ActiveSkillLV / 2) + 4,
                                                                                                                                        wCast = 6.5 - .5 * n_A_ActiveSkillLV,
                                                                                                                                        n_Delay[2] = 1,
                                                                                                                                        n_Delay[0] = 1) : 409 == n_A_ActiveSkill ? (n_bunkatuHIT = 1,
                                                                                                                                            n_A_Weapon_element = 3,
                                                                                                                                            wMod = 1.5 + 1.5 * n_A_ActiveSkillLV,
                                                                                                                                            wHITsuu = 3,
                                                                                                                                            wCast = 3,
                                                                                                                                            n_Delay[2] = 3) : 410 == n_A_ActiveSkill ? (n_A_Weapon_element = 1,
                                                                                                                                                wMod = 1,
                                                                                                                                                wHITsuu = n_A_ActiveSkillLV + 2,
                                                                                                                                                wCast = .7 * n_A_ActiveSkillLV) : 412 == n_A_ActiveSkill ? (n_A_Weapon_element = 1,
                                                                                                                                                    wMod = 1 + .5 * n_A_ActiveSkillLV,
                                                                                                                                                    wHITsuu = 1,
                                                                                                                                                    wCast = 3,
                                                                                                                                                    n_Delay[2] = 3) : 413 == n_A_ActiveSkill ? (n_A_Weapon_element = 4,
                                                                                                                                                        wMod = 1,
                                                                                                                                                        wHITsuu = Math.floor(n_A_ActiveSkillLV / 2) + 1,
                                                                                                                                                        wCast = Math.floor(n_A_ActiveSkillLV / 2) + 1,
                                                                                                                                                        n_Delay[2] = 1) : 414 == n_A_ActiveSkill ? (n_A_Weapon_element = 4,
                                                                                                                                                            wMod = 1.6 + .4 * n_A_ActiveSkillLV,
                                                                                                                                                            wHITsuu = 1,
                                                                                                                                                            wCast = 4) : 415 == n_A_ActiveSkill && (n_A_Weapon_element = 4,
                                                                                                                                                                wMod = 1 + 1 * n_A_ActiveSkillLV,
                                                                                                                                                                wHITsuu = 1,
                                                                                                                                                                wCast = 4),
                SRV < 50 ? wCast *= n_A_CAST : wCast = wCast * n_A_CAST * .8 + wCast * n_A_fCAST * .2,
                0 == n_bunkatuHIT)
                for (s = 0; s <= 2; s++)
                    w_DMG[s] = BattleMagicCalc(n_A_MATK[s] * wMod),
                        0 != SG_Special_HITnum && (SG_Special_DMG[s] = w_DMG[s]),
                        Last_DMG_B[s] = w_DMG[s],
                        Last_DMG_A[s] = w_DMG[s] * wHITsuu,
                        InnStr[s] += Last_DMG_A[s] + " (" + Last_DMG_B[s] + SubName[8] + wHITsuu + " hits)",
                        w_DMG[s] = Last_DMG_A[s];
            else
                for (s = 0; s <= 2; s++)
                    w_DMG[s] = Math.floor(BattleMagicCalc(n_A_MATK[s] * wMod) / wHITsuu),
                        Last_DMG_A[s] = Last_DMG_B[s] = w_DMG[s] * wHITsuu,
                        InnStr[s] += Last_DMG_A[s] + " (" + w_DMG[s] + SubName[8] + wHITsuu + " hits)",
                        w_DMG[s] *= wHITsuu;
            CastAndDelay(),
                BattleCalc998()
        }
    }
}
function ATKmod01() {
    var e = 100;
    193 != n_A_ActiveSkill && 197 != n_A_ActiveSkill && 321 != n_A_ActiveSkill && (SkillSearch(12) ? e += 32 : n_A_Buf6[5] ? e += 2 + 3 * n_A_Buf6[5] : n_A_Buf7[31] && (e += 5),
        SkillSearch(256) && (e += 5 * SkillSearch(256)),
        SkillSearch(270) && (e += 2 * SkillSearch(270)),
        n_A_Buf2[19] && (e += 100),
        n_A_Buf6[2] && (e += 10),
        StPlusCalc2(87) && (e += StPlusCalc2(87)),
        n_A_Buf6[22] && (e -= 25));
    for (var _ = 0; _ <= 2; _++)
        n_A_CriATK[_] = n_A_CriATK[_] * e / 100,
            n_A_DMG[_] = n_A_DMG[_] * e / 100
}
function ATKmod02(e, _) {
    wA02 = 100 * e,
        SkillSearch(327) ? wA02 += 20 * SkillSearch(327) : (SkillSearch(154) && (wA02 += 5 * SkillSearch(154)),
            0 == SkillSearch(154) && n_A_Buf2[8] && (wA02 += 5 * n_A_Buf2[8])),
        SkillSearch(342) && (wA02 += 2 * SkillSearch(342) * SkillSearch(380)),
        0 == _ ? (n_A_DMG[2] = Math.floor(n_A_DMG[2] * wA02 / 100),
            n_A_DMG[0] = Math.floor(n_A_DMG[0] * wA02 / 100),
            n_A_DMG[1] = Math.floor(n_A_DMG[1] * wA02 / 100)) : (n_A_CriATK[1] = Math.floor(n_A_CriATK[1] * wA02 / 100),
                n_A_CriATK[0] = Math.floor(n_A_CriATK[0] * wA02 / 100),
                n_A_CriATK[2] = Math.floor(n_A_CriATK[2] * wA02 / 100))
}
function BattleTAKA() {
    return 10 == n_A_WeaponType && SkillSearch(118) && 272 != n_A_ActiveSkill ? (wBTw1 = Math.floor((n_A_JobLV - 1) / 10 + 1),
        wBTw1 > 5 && (wBTw1 = 5),
        wBTw2 = SkillSearch(118),
        wBTw2 < wBTw1 && (wBTw1 = wBTw2),
        wBT = 80 + 2 * Math.floor(n_A_DEX / 10) + 2 * Math.floor(n_A_INT / 2) + 6 * SkillSearch(119),
        wBT = Math.floor(wBT * element[n_B[3]][0]),
        wBT = tPlusDamCut(wBT),
        wBTw3 = Math.round(100 * (1 + .3 * n_A_LUK)) / 100,
        44 == n_B[0] && (wBT = 0),
        str_bSUBname += "Falcon damage<BR>",
        n_TAKA_DMG = wBT * wBTw1,
        str_bSUB += n_TAKA_DMG + " (" + wBT + " x " + wBTw1 + " hits)",
        str_bSUB += "(" + wBTw3 + "% chance)<BR>",
        wBT = n_TAKA_DMG * wBTw3 / 100,
        wBT = wBT * (w_HIT + (100 - w_HIT) * w_Cri / 100) / 100,
        wBTw1 = 0,
        Math.round(100 * wBT) / 100) : (n_TAKA_DMG = 0,
            0)
}
function HealCalc(e, _) {
    wHeal = Math.floor((n_A_BaseLV + n_A_INT) / 8) * (8 * e + 4);
    var n = 100 + 2 * SkillSearch(269);
    wHeal = Math.floor(wHeal * n / 100);
    var l = 100 + n_tok[91] + n_tok[99];
    return 1 == _ && (l += n_tok[92] + n_tok[100]),
        EquipNumSearch(644) && (l += Math.floor(1.5 * n_A_Weapon_refine)),
        EquipNumSearch(1791) && (l += Math.floor(6 * n_A_Weapon_refine)),
        n_A_HEAD_REFINE >= 7 && (l += 1 * EquipNumSearch(565) + 3 * EquipNumSearch(1277)),
        wHeal = Math.floor(wHeal * (l / 100) * (1 - 20 * n_A_Buf6[18] / 100)),
        wHeal
}
function SanctuaryCalc(e, _) {
    wSanctuary = e < 7 ? 100 * e : 777;
    var n = 100 + 2 * SkillSearch(269);
    wSanctuary = Math.floor(wSanctuary * n / 100);
    var l = 100 + n_tok[94] + n_tok[99];
    return 1 == _ && (l += n_tok[95] + n_tok[100]),
        EquipNumSearch(644) && (l += Math.floor(1.5 * n_A_Weapon_refine)),
        EquipNumSearch(1791) && (l += Math.floor(6 * n_A_Weapon_refine)),
        n_A_HEAD_REFINE >= 7 && (l += 1 * EquipNumSearch(565) + 3 * EquipNumSearch(1277)),
        wSanctuary = Math.floor(wSanctuary * (l / 100) * (1 - 20 * n_A_Buf6[18] / 100)),
        wSanctuary
}
function BattleCalc998() {
    // melee = n_rangedAtk = 0
    // ranged = n_rangedAtk = 1
    // magic = n_rangedAtk = 2

    // schmidt / root dmg reduction
    /* if(n_M_debuff[4] > 0){
        for(var s = 0; s < 3; s++){
            matchedNums = InnStr[s].match(/(?:[0-9.]+)+/g);
            if(matchedNums[0] != 0){
                if(InnStr[s].includes("hits")){
                    w_DMG[s] = Math.floor(w_DMG[s] * (100 - n_M_debuff[4]) / 100);
                    w_DMG[s] = w_DMG[s] < 1 ? 1 : w_DMG[s];
                    InnStr[s] = Math.floor(matchedNums[0] * ((100 - n_M_debuff[4]) / 100));
                    if(matchedNums.length > 1){
                        dmgPerHit = Math.floor(matchedNums[1] * ((100 - n_M_debuff[4]) / 100));
                        fullDmg = Math.floor(dmgPerHit * matchedNums[2]); 
                        InnStr[s] = fullDmg + " (" + dmgPerHit + " x " + matchedNums[2] + " hits)";
                    }
                }else{
                    // dual dagger / katar autoattack
                    w_DMG[s] = Math.floor(w_DMG[s] * (100 - n_M_debuff[4]) / 100);
                    w_DMG[s] = w_DMG[s] < 1 ? 1 : w_DMG[s];
                    InnStr[s] = Math.floor(matchedNums[0] * ((100 - n_M_debuff[4]) / 100));
                    if(matchedNums.length > 1){
                        dmgHit1 = Math.floor(matchedNums[1] * ((100 - n_M_debuff[4]) / 100));
                        dmgHit2 = Math.floor(matchedNums[2] * ((100 - n_M_debuff[4]) / 100));
                        fullDmg = Math.floor(dmgHit1 + dmgHit2); 
                        InnStr[s] = fullDmg + " (" + dmgHit1 + "+" + dmgHit2 + ")";
                    }
                }
            }
        }
    } */
    
    // damage flag
    if(n_M_debuff[1] == 1){ // melee
        if(n_rangedAtk == 1 || n_rangedAtk == 2){
            for(var s = 0; s < 3; s++){
                w_DMG[s] = 1;
                InnStr[s] = 1;
                if(document.getElementById("CRIATK").innerHTML.length > 0){
                    n_A_CriATK[s] = 1;
                    document.getElementById("CRIATK").innerHTML = "1";
                }
            }
        }
    }else if(n_M_debuff[1] == 2){ // ranged
        if(n_rangedAtk == 0 || n_rangedAtk == 2){
            for(var s = 0; s < 3; s++){
                w_DMG[s] = 1;
                InnStr[s] = 1;
                if(document.getElementById("CRIATK").innerHTML.length > 0){
                    n_A_CriATK[s] = 1;
                    document.getElementById("CRIATK").innerHTML = "1";
                }
            }
        }
    }else if(n_M_debuff[1] == 3){ // magic
        if(n_rangedAtk == 0 || n_rangedAtk == 1){
            for(var s = 0; s < 3; s++){
                w_DMG[s] = 1;
                InnStr[s] = 1;
                if(document.getElementById("CRIATK").innerHTML.length > 0){
                    n_A_CriATK[s] = 1;
                    document.getElementById("CRIATK").innerHTML = "1";
                }
            }
        }
    }

    if (n_PerHIT_DMG > 0 && w_HIT_HYOUJI < 100 && (str_bSUBname += "Damage when missing",
        0 == str_PerHIT_DMG ? str_bSUB += n_PerHIT_DMG : str_bSUB += str_PerHIT_DMG),
        0 == n_A_ActiveSkill && (w_HIT_HYOUJI -= n_B_manual[38] * w_HIT_HYOUJI / 100),
        myInnerHtml("bSUBname", str_bSUBname, 0),
        myInnerHtml("bSUB", str_bSUB, 0),
        myInnerHtml("BattleHIT", w_HIT_HYOUJI, 0),
        44 == n_B[0] && 0 != n_A_ActiveSkill && 325 != n_A_ActiveSkill)
        for (i = 0; i <= 2; i++)
            w_DMG[i] = 0,
                myInnerHtml("ATK_0" + i, 0, 0);
    tPlusAG();
    var e = 1;
    if (540 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 542 == n_A_ActiveSkill ? (SkillSearch(441) && (e = 1 + c.SkillSubNum.value / 10),
        w_DMG[0] = Math.floor(w_DMG[0] * e / 4),
        w_DMG[1] = Math.floor(w_DMG[1] * e / 4),
        w_DMG[2] = Math.floor(w_DMG[2] * e / 4)) : 51 != n_A_ActiveSkill && 54 != n_A_ActiveSkill && 56 != n_A_ActiveSkill || (SkillSearch(441) && (e = 1 + c.SkillSubNum.value / 10),
            w_DMG[0] = Math.floor(w_DMG[0] * e),
            w_DMG[1] = Math.floor(w_DMG[1] * e),
            w_DMG[2] = Math.floor(w_DMG[2] * e)),
        o = Math.floor(n_B[6] / w_DMG[2]),
        n_B[6] % Math.floor(w_DMG[2]) != 0 && (o += 1),
        myInnerHtml("MinATKnum", o < 1e4 ? o : SubName[5], 0),
        0 != SG_Special_HITnum) {
        if (1 == o) {
            var _, n;
            if (_ = SG_Special_HITnum,
                (n = (SG_Special_DMG[2] * wHITsuu - n_B[6]) / (SG_Special_DMG[2] * wHITsuu - SG_Special_DMG[0] * wHITsuu)) > 1 && (n = 1),
                n < 0 && (n = 0),
                2 == _ && (n < .5 ? n *= 2 * n : n = 1 - 2 * (1 - n) * (1 - n)),
                3 == _ && (n < 1 / 3 ? n = 4.5 * Math.pow(n, 3) : 1 / 3 <= n && n < 2 / 3 ? n = 4.5 * (Math.pow(n, 3) - 3 * Math.pow(n - 1 / 3, 3)) : 2 / 3 <= n && (n = 1 - 4.5 * Math.pow(1 - n, 3))),
                _ >= 4) {
                var l = Math.sqrt(Math.pow(SG_Special_DMG[2] - SG_Special_DMG[0], 2) / 12 * _);
                n = (n = (SG_Special_DMG[1] * wHITsuu - n_B[6]) / l) >= 0 ? .5 + .5 * Math.sqrt(1 - Math.exp(-2 * Math.pow(n, 2) / Math.PI)) : .5 - .5 * Math.sqrt(1 - Math.exp(-2 * Math.pow(n, 2) / Math.PI))
            }
            myInnerHtml("MinATKnum", "1 (" + (n = Math.floor(1e4 * n) / 100) + "% chance)", 0)
        }
        SG_Special_HITnum = 0
    }
    if (w_HIT_HYOUJI < 100 && 0 == n_PerHIT_DMG)
        myInnerHtml("MaxATKnum", "Infinite (no 100% hit)", 0);
    else {
        var t = w_DMG[0];
        w_HIT_HYOUJI < 100 && (t = n_PerHIT_DMG),
            o = Math.floor(n_B[6] / t),
            n_B[6] % Math.floor(t) != 0 && (o += 1),
            myInnerHtml("MaxATKnum", o < 1e4 ? o : SubName[5], 0)
    }
    if (o = Math.floor(n_B[6] / w_DMG[1]),
        n_B[6] % w_DMG[1] != 0 && (o += 1),
        0 == PvP ? (myInnerHtml("nm063", "Base Exp Per Hit", 0),
            myInnerHtml("nm064", "Job Exp Per Hit", 0),
            o < 1e4 ? (myInnerHtml("AtkBaseExp", Math.round(n_B[16] / o) + " exp", 0),
                myInnerHtml("AtkJobExp", Math.round(n_B[17] / o) + " exp", 0)) : (myInnerHtml("AtkBaseExp", SubName[7], 0),
                    myInnerHtml("AtkJobExp", SubName[7], 0))) : (myInnerHtml("nm063", "", 0),
                        myInnerHtml("AtkBaseExp", "", 0),
                        myInnerHtml("nm064", "", 0),
                        myInnerHtml("AtkJobExp", "", 0)),
        o < 1e4) {
        myInnerHtml("AveATKnum", o, 0),
            n_AveATKnum = o;
        var a = (wCast + wDelay) * n_AveATKnum;
        a = Math.floor(100 * a) / 100,
            n_Delay[0] ? myInnerHtml("BattleTime", "Special", 0) : myInnerHtml("BattleTime", a + " seconds", 0)
    } else
        myInnerHtml("AveATKnum", SubName[5], 0),
            myInnerHtml("BattleTime", SubName[6], 0);
    var o = 1 / (wCast + wDelay) * w_DMG[1];
    o *= 100,
        o = Math.round(o),
        o /= 100,
        n_Delay[0] ? myInnerHtml("AveSecondATK", "Special", 0) : myInnerHtml("AveSecondATK", o, 0),
        o = BattleHiDam(),
        o = Math.round(o * (100 - n_A_LUCKY)) / 100,
        (o = Math.round(o * (100 - w_FLEE)) / 100) < 0 && (o = 0),
        n_A_Buf2[13] && (o = Math.round(o * w_AG[n_A_Buf2[13]]) / 100),
        3 == n_A_WeaponType && SkillSearch(255) && (o = Math.round(o * (80 - 3 * SkillSearch(255))) / 100),
        SkillSearch(287) && (o = Math.round(o * (100 - 7.5 * SkillSearch(287))) / 100),
        myInnerHtml("B_Ave2Atk", Math.round(100 * o * BskillHitNum) / 100, 0)
}
function BattleHiDam() {
    SRV = 1 * c.server.value;
    var e = 100
        , _ = [0, 0, 0]
        , n = Math.floor(n_B[9] / 7);
    _[0] = n_B[9] + n_B_manual[42] + n * n,
        _[0] += n_B_manual[43] * _[0] / 100,
        n = Math.floor(n_B[9] / 5),
        _[2] = n_B[9] + n_B_manual[42] + n * n,
        _[2] += n_B_manual[43] * _[2] / 100,
        _[1] = (_[2] + _[0]) / 2;
    var l = 0;
    n_B_rangedAtk = 0,
        n_B_rangedMAtk = 0;
    var t = 0;
    n_B_AtkSkill = c.B_AtkSkill.value;
    var a;
    if (a = m_Monster[n_B[0]][2 * c.B_AtkSkill.selectedIndex + 22],
        BskillHitNum = 1,
        444 == n_B_AtkSkill || 445 == n_B_AtkSkill)
        if (BskillHitNum = 3,
            n_B_rangedAtk = n_B_AtkSkill - 444,
            t = 1,
            n_B_ignoreFlee = 1,
            CardNumSearch(126))
            e = 0;
        else
            switch (a) {
                case 1:
                    e += 200;
                    break;
                case 2:
                    e += 400;
                    break;
                case 3:
                    e += 500;
                    break;
                case 4:
                    e += 700;
                    break;
                case 5:
                    e += 900;
                    break;
                case 6:
                    e += 1100;
                    break;
                case 7:
                    e += 1200;
                    break;
                case 8:
                    e += 1400;
                    break;
                case 9:
                    e += 1500;
                    break;
                case 10:
                    e += 1700
            }
    else if (446 == n_B_AtkSkill || 447 == n_B_AtkSkill)
        e += 100 * a,
            n_B_rangedAtk = n_B_AtkSkill - 446;
    else if (448 == n_B_AtkSkill || 449 == n_B_AtkSkill)
        e += 100 * a - 100,
            n_B_rangedAtk = n_B_AtkSkill - 448;
    else if (n_B_AtkSkill >= 450 && n_B_AtkSkill <= 459)
        l = n_B_AtkSkill - 450,
            e += 100 * a - 100;
    else if (463 == n_B_AtkSkill)
        l = 7;
    else if (464 == n_B_AtkSkill)
        l = 7;
    else if (470 == n_B_AtkSkill)
        BskillHitNum = 1 + a,
            e += 100 * a - 100;
    else if (471 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 7,
            BskillHitNum = Math.round(a / 2);
    else if (472 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 7,
            BskillHitNum = 2 + a;
    else if (473 == n_B_AtkSkill)
        l = 7,
            e += 35 * a;
    else if (474 == n_B_AtkSkill)
        l = 7,
            e += 40 * a;
    else if (475 == n_B_AtkSkill)
        e += 0,
            n_B_ignoreFlee = 1;
    else if (476 == n_B_AtkSkill) {
        n_B_ignoreFlee = 1;
        n = Math.floor(n_B[9] / 7);
        _[0] = n_B[9] + n * n,
            n = Math.floor(n_B[9] / 5),
            _[2] = n_B[9] + n * n,
            _[1] = (_[2] + _[0]) / 2,
            e = n_B[9]
    } else if (477 == n_B_AtkSkill)
        n_B_HIT += 20;
    else if (480 == n_B_AtkSkill)
        l = 7;
    else if (481 == n_B_AtkSkill)
        l = 7,
            n_B_ignoreFlee = 1;
    else if (482 == n_B_AtkSkill)
        a < 6 ? e = 100 * a - 100 : e += 100 * (a - 5) - 100;
    else if (483 == n_B_AtkSkill)
        t = 1;
    else if (484 == n_B_AtkSkill)
        e += 100 * a - 100,
            l = Math.floor(10 * Math.random());
    else if (485 == n_B_AtkSkill)
        n_B_rangedAtk = 1;
    else if (487 == n_B_AtkSkill)
        t = 1,
            n_B[12] = n_B[13];
    else if (n_B_AtkSkill >= 490 && n_B_AtkSkill <= 499)
        n_B_rangedAtk = 0,
            l = n_B_AtkSkill - 490,
            e += 100 * a - 100;
    else if (n_B_AtkSkill >= 500 && n_B_AtkSkill <= 509)
        n_B_rangedAtk = 1,
            l = n_B_AtkSkill - 500,
            e += 100 * a - 100;
    else if (6 == n_B_AtkSkill)
        e += 30 * a,
            n_B_HIT *= 1 + .05 * a;
    else if (7 == n_B_AtkSkill)
        e += 20 * a,
            n_B_HIT *= 1 + .1 * a,
            l = 3;
    else if (17 == n_B_AtkSkill)
        e += 20 * a,
            l = 5;
    else if (19 == n_B_AtkSkill)
        e += 30,
            l = 2;
    else if (40 == n_B_AtkSkill)
        e += 10 * a - 10,
            BskillHitNum = 2;
    else if (41 == n_B_AtkSkill)
        n_B_rangedAtk = 1,
            e += 5 * a - 25;
    else if (44 == n_B_AtkSkill)
        n_B_rangedAtk = 1,
            e += 50;
    else if (46 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 8,
            e += 10 * a - 30;
    else if (47 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 8,
            BskillHitNum = Math.round(a / 2),
            91 != n_B[3] && 92 != n_B[3] && 93 != n_B[3] && 94 != n_B[3] || (e += 5 * a);
    else if (51 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 3,
            BskillHitNum = a;
    else if (52 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 3,
            e += 10 * a - 30;
    else if (53 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 3,
            BskillHitNum = 4 + a,
            e -= 50;
    else if (54 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 1,
            BskillHitNum = a;
    else if (55 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 1,
            e += 10 * a;
    else if (56 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 4,
            BskillHitNum = a;
    else if (57 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 4,
            BskillHitNum = a,
            e -= 20;
    else if (65 == n_B_AtkSkill)
        e += 50 * a;
    else if (66 == n_B_AtkSkill)
        l = 3,
            e += 50 * a + 100 * c.BSkillSubNum.value / 8e3;
    else if (70 == n_B_AtkSkill)
        e += 10 * a,
            BskillHitNum = 2;
    else if (71 == n_B_AtkSkill)
        e += 20 * a,
            n_B_rangedAtk = 1;
    else if (76 == n_B_AtkSkill)
        e += 40 * a,
            BskillHitNum = 2;
    else if (84 == n_B_AtkSkill)
        a >= 3 && (n_B_rangedAtk = 1),
            e += 20 * a;
    else if (88 == n_B_AtkSkill)
        e += 400 + 50 * a + 30 * c.BSkillSubNum.value,
            l = 5;
    else if (104 == n_B_AtkSkill)
        139 == n_A_card[11] ? e += 30 * a : e = 0,
            n_B_rangedMAtk = 1,
            l = 6;
    else if (158 == n_B_AtkSkill)
        e += 20 * a;
    else if (161 == n_B_AtkSkill)
        e += 35 * a,
            l = 6;
    else if (162 == n_B_AtkSkill)
        e += 40 * a,
            n_B_rangedMAtk = 1,
            l = 6;
    else if (171 == n_B_AtkSkill)
        //e += 40 * a;
        e += 100 + 50*a; // changed to alfheim skill modifier
    else if (72 == n_B_AtkSkill)
        e += 50 * a,
            n_B_rangedAtk = 1;
    else if (73 == n_B_AtkSkill)
        e += 300 + 45 * a,
        n_B_rangedAtk = 1;
        /* n = 20 * a + 100, // changed to alfheims skill modifier
            e += 10 == a ? 462.5 : a >= 7 ? n + n / 2 + n / 4 - 100 : a >= 4 ? n + n / 2 - 100 : n - 100; */
    else if (83 == n_B_AtkSkill || 388 == n_B_AtkSkill)
        e += 50 * a + 200,
            388 == n_B_AtkSkill && 0 == PvP && (e *= 2),
            388 == n_B_AtkSkill && 1 == PvP && (n_WoE ? e *= 1.25 : e *= 2);
    else if (122 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 3,
            BskillHitNum = 2 + a,
            e -= 30;
    else if (124 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 3,
            e += 20 * a;
    else if (125 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 3,
            BskillHitNum = c.BSkillSubNum.value * Math.round(a / 2);
    else if (126 == n_B_AtkSkill) // JUPITEL
        n_B_rangedMAtk = 1,
            l = 4,
            BskillHitNum = 2 + a;
    else if (127 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 4,
            BskillHitNum = 4,
            e += 20 * a - 20;
    else if (128 == n_B_AtkSkill || 320 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 1,
            BskillHitNum = a >= 4 ? 25 : a >= 2 ? 9 : 1,
            e += 30 * a;
    else if (130 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 1,
            e += 7 * a - 34;
    else if (131 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 1,
            BskillHitNum = c.BSkillSubNum.value,
            e += 40 * a;
    else if (132 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 2,
            BskillHitNum = a;
    else if (133 == n_B_AtkSkill)
        n_B_rangedMAtk = 1,
            l = 2,
            BskillHitNum = a;
    else if (169 == n_B_AtkSkill)
        //e += 40 * a + 200;
        e += .25 + .15 * n_A_ActiveSkillLV; // change to alfheim skill modifier
    else if (176 == n_B_AtkSkill)
        e += 30 * a;
    else if (188 == n_B_AtkSkill)
        BskillHitNum = 4,
            e += 50 * a + 50;
    else if (189 == n_B_AtkSkill)
        e += 60 * a + 140;
    else if (199 == n_B_AtkSkill || 207 == n_B_AtkSkill)
        e += 40 * a - 40,
            n_B_rangedAtk = 1;
    else if (248 == n_B_AtkSkill)
        l = 3,
            e += .2 * a;
    else if (159 != n_B_AtkSkill && 384 != n_B_AtkSkill || 0 != PvP)
        if (259 == n_B_AtkSkill && 0 == PvP)
            BskillHitNum = 5,
                n_B_rangedAtk = 1,
                t = 1,
                e = 30 * a;
        else if (324 == n_B_AtkSkill && 0 == PvP)
            n_B_HIT += 20,
                BskillHitNum = 5,
                n_B_rangedAtk = 1,
                e += 30 * a;
        else if (260 == n_B_AtkSkill)
            n_B_rangedAtk = 1,
                e += 40 * a;
        else if (261 == n_B_AtkSkill)
            n_B_rangedAtk = 1,
                e += 10 * a - 50;
        else if (264 == n_B_AtkSkill)
            e += 40 * a - 60;
        else if (277 == n_B_AtkSkill)
            n_B_rangedMAtk = 1,
                l = 8,
                BskillHitNum = a;
        else if (288 == n_B_AtkSkill)
            e += 100 * (1 + a);
        else if (289 == n_B_AtkSkill)
            e += 100 * a - 60;
        else if (290 == n_B_AtkSkill)
            e += 100 * (3 + a);
        else if (292 == n_B_AtkSkill)
            BskillHitNum = 9,
                e += 100 * (1 + a),
                n_B_rangedAtk = 1;
        else if (302 == n_B_AtkSkill)
            n_B_rangedAtk = 1,
                l = 4;
        else if (303 == n_B_AtkSkill)
            e += 100 * (a - 1);
        else if (305 == n_B_AtkSkill)
            e += 4 * n_A_BaseLV - 100;
        else if (306 == n_B_AtkSkill)
            n_B_rangedAtk = 1;
        else if (307 == n_B_AtkSkill)
            n_B_rangedAtk = 1,
                e += 50;
        else if (308 == n_B_AtkSkill) {
            e += 100 * (n = 1 * c.SkillSubNum.value)
        } else
            326 == n_B_AtkSkill ? (not_use_card = 1,
                e += Math.floor(100 * (1 * c.BSkillSubNum.value / (16 - a) / 100 - 1))) : 382 == n_B_AtkSkill ? e += 200 : e = 100;
    else
        n_B_rangedAtk = 1,
            e += 30 * a;
    if (w_HiDam = new Array,
        0 == n_B_rangedMAtk) {
        if (159 != n_B_AtkSkill && 384 != n_B_AtkSkill || 1 != PvP)
            if (259 == n_B_AtkSkill && 1 == PvP)
                for (BskillHitNum = 5,
                    n_B_rangedAtk = 1,
                    t = 1,
                    1 == PvP && (bWeaponw = Math.floor(c.BSkillSubNum.value),
                        bSTR = Math.floor(c.BSkillSubNum2.value)),
                    bDMG = Math.floor(bSTR / 10) * Math.floor(bSTR / 10) + .8 * bWeaponw * (1 + .5 * a),
                    i = 0; i <= 6; i++)
                    w_HiDam[i] = bDMG;
            else if (324 == n_B_AtkSkill && 1 == PvP)
                for (n_B_HIT += 20,
                    BskillHitNum = 5,
                    n_B_rangedAtk = 1,
                    1 == PvP && (bShieldw = Math.floor(c.BSkillSubNum.value)),
                    i = 0; i <= 6; i++)
                    w_HiDam[i] = Math.floor(Math.floor(5 * (n_B[13] * (1 + .3 * a) + bShieldw) * defReduction(n_A_totalDEF) - n_A_VITDEF[Math.floor(i / 2)]) * (1 + .3 * a)) + 5 * n_A_LEFT_REFINE * 2;
            else
                wBHD = n_B[13],
                    w_HiDam[0] = e / 100 * n_B[12],
                    w_HiDam[1] = e / 100 * (5 * n_B[12] + wBHD) / 6,
                    w_HiDam[2] = e / 100 * (4 * n_B[12] + 2 * wBHD) / 6,
                    w_HiDam[3] = e / 100 * (n_B[12] + wBHD) / 2,
                    w_HiDam[4] = e / 100 * (2 * n_B[12] + 4 * wBHD) / 6,
                    w_HiDam[5] = e / 100 * (n_B[12] + 5 * wBHD) / 6,
                    w_HiDam[6] = e / 100 * wBHD;
        else {
            for (n_B_rangedAtk = 1,
                1 == PvP && (bShieldw = Math.floor(c.BSkillSubNum.value)),
                i = 0; i <= 6; i++)
                w_HiDam[i] = Math.floor(Math.floor(5 * (n_B[13] * (1 + .3 * a) + bShieldw) * defReduction(n_A_totalDEF) - n_A_VITDEF[Math.floor(i / 2)]) * (1 + .3 * a)) + 5 * n_A_LEFT_REFINE * 2;
            w_HiDam[i] = Math.floor(Math.floor(n_B[13] + bShieldw) * (1 + .3 * n_A_ActiveSkillLV))
        }
        0 == t && (w_HiDam[0] = w_HiDam[0] * defReduction(n_A_totalDEF) - n_A_VITDEF[2],
            w_HiDam[1] = w_HiDam[1] * defReduction(n_A_totalDEF) - n_A_VITDEF[2],
            w_HiDam[2] = w_HiDam[2] * defReduction(n_A_totalDEF) - n_A_VITDEF[2],
            w_HiDam[3] = w_HiDam[3] * defReduction(n_A_totalDEF) - n_A_VITDEF[1],
            w_HiDam[4] = w_HiDam[4] * defReduction(n_A_totalDEF) - n_A_VITDEF[0],
            w_HiDam[5] = w_HiDam[5] * defReduction(n_A_totalDEF) - n_A_VITDEF[0],
            w_HiDam[6] = w_HiDam[6] * defReduction(n_A_totalDEF) - n_A_VITDEF[0])
    } else
        wBHD = _[2],
            w_HiDam[0] = e / 100 * _[0],
            w_HiDam[1] = e / 100 * (5 * _[0] + wBHD) / 6,
            w_HiDam[2] = e / 100 * (4 * _[0] + 2 * wBHD) / 6,
            w_HiDam[3] = e / 100 * (_[0] + wBHD) / 2,
            w_HiDam[4] = e / 100 * (2 * _[0] + 4 * wBHD) / 6,
            w_HiDam[5] = e / 100 * (_[0] + 5 * wBHD) / 6,
            w_HiDam[6] = e / 100 * wBHD,
            w_HiDam[0] = w_HiDam[0] * mdefReduction(n_A_MDEF) - n_A_softMDEF,
            w_HiDam[1] = w_HiDam[1] * mdefReduction(n_A_MDEF) - n_A_softMDEF,
            w_HiDam[2] = w_HiDam[2] * mdefReduction(n_A_MDEF) - n_A_softMDEF,
            w_HiDam[3] = w_HiDam[3] * mdefReduction(n_A_MDEF) - n_A_softMDEF,
            w_HiDam[4] = w_HiDam[4] * mdefReduction(n_A_MDEF) - n_A_softMDEF,
            w_HiDam[5] = w_HiDam[5] * mdefReduction(n_A_MDEF) - n_A_softMDEF,
            w_HiDam[6] = w_HiDam[6] * mdefReduction(n_A_MDEF) - n_A_softMDEF;
    if (SkillSearch(23) && (n_B[3] >= 90 || 6 == n_B[2]))
        for (wBHD = Math.floor((3 + .04 * n_A_BaseLV) * SkillSearch(23)),
            i = 0; i <= 6; i++)
            w_HiDam[i] -= wBHD;
    if (SkillSearch(355))
        for (wBHD = Math.floor((n_A_BaseLV + n_A_LUK + n_A_DEX) / 2),
            i = 0; i <= 6; i++)
            w_HiDam[i] -= wBHD;
    if (SkillSearch(58))
        for (wBHD = 6 * SkillSearch(58),
            i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100);
    if (wBHD = n_tok[50 + n_B[2]],
        0 != wBHD)
        for (i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100);
    if (wBHD = n_tok[190 + n_B[4]], // physical dmg reduction on size
        0 != wBHD)
        for (i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100);
    if (0 == n_B[19])
        for (wBHD = n_tok[79],
            i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100);
    if ((n_B[20] || n_B_rangedAtk || n_B_rangedMAtk || 2 == c.B_AtkRange.value) && 1 != c.B_AtkRange.value) { // reduction on ranged atk and matk
        for (wBHD = n_tok[78],
            i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100);
        if (SkillSearch(421))
            for (wBHD = 20,
                i = 0; i <= 6; i++)
                w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100)
    }
    if ((wBHD = n_tok[350 + n_B[4]], 0 != wBHD) && n_B_rangedMAtk){ // magic dmg reduction on size
        for (i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100);
    }
    if ((n_B[20] || 2 == c.B_AtkRange.value) && 1 != c.B_AtkRange.value) {
        if (n_A_Buf2[15])
            for (wBHD = 5 + 15 * n_A_Buf2[15],
                i = 0; i <= 6; i++)
                w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100);
        if (n_A_Buf6[3])
            for (wBHD = 75,
                i = 0; i <= 6; i++)
                w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100)
    }
    if (1 == n_B[19])
        for (i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] * n_tok[77] / 100);
    if (TimeItemNumSearch(9))
        for (i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] / 5);
    if (wBHD = n_tok[330 + Math.floor(n_B[3] / 10)],
        0 != wBHD)
        for (i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100);
    for (wBHD = StPlusCard(3e3 + n_B[0]),
        wBHD += StPlusCalc2(3e3 + n_B[0]),
        i = 0; i <= 6; i++)
        w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD / 100);
    if (n_A_Buf7[22] && MANUKU_MONSTER())
        for (i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] / 10);
    if (n_A_Buf7[25] && SUPURE_MONSTER())
        for (i = 0; i <= 6; i++)
            w_HiDam[i] -= Math.floor(w_HiDam[i] / 10);
    for (i = 0; i <= 6; i++)
        w_HiDam[i] < 1 && (w_HiDam[i] = 1);
    var o = 1 * c.B_AtkElem.value;
    if (o < 10 && (l = o),
        n_A_ResElem = 100 * Math.max(0, element[10 * n_A_Bodyelement + 1][l]),
        wBHD = n_A_ResElem - Math.floor(n_A_ResElem * n_tok[60 + 1 * l]) / 100,
        10 == o || 10 != o || 1 == PvP || 158 == n_B_AtkSkill || 484 == n_B_AtkSkill || 10 == SRV) // removed ghostring exception in the beginning (8 != n_A_Bodyelement) &&
        for (i = 0; i <= 6; i++)
            w_HiDam[i] = Math.floor(w_HiDam[i] * wBHD / 100);
    if (SRV < 50) {
        if (n_A_Buf2[5])
            if (c.A8_Skill14.value > 0 || n_A_Buf6[2])
                for (i = 0; i <= 6; i++)
                    w_HiDam[i] = Math.floor(2 * w_HiDam[i] / 3);
            else
                for (i = 0; i <= 6; i++)
                    w_HiDam[i] = Math.floor(w_HiDam[i] / 2)
    } else if (SkillSearch(196))
        for (i = 0; i <= 6; i++)
            w_HiDam[i] = Math.floor(10 * w_HiDam[i] / 100);
    if (n_A_Buf6[16])
        for (i = 0; i <= 6; i++)
            w_HiDam[i] = Math.floor(2 * w_HiDam[i]);
    if (n_A_Buf2[21])
        for (i = 0; i <= 6; i++)
            w_HiDam[i] = Math.floor(w_HiDam[i] / 2);
    if (w_HiDam[0] = Math.floor(w_HiDam[0]),
        w_HiDam[6] = Math.floor(w_HiDam[6]),
        444 == n_B_AtkSkill || 445 == n_B_AtkSkill) {
        var A = 1 * c.BSkillSubNum.value;
        for (i = 0; i <= 6; i++)
            w_HiDam[i] = Math.floor(w_HiDam[i] / A)
    }
    /* if ((446 == n_B_AtkSkill || 447 == n_B_AtkSkill) && 7 == n_A_Bodyelement) // hells judgement doing 0 dmg to shadow ???
        for (i = 0; i <= 6; i++)
            w_HiDam[i] = 0; */
    if (488 == n_B_AtkSkill)
        for (i = 0; i <= 6; i++)
            w_HiDam[i] = Math.floor(a * n_A_MaxHP / 10);
    if (510 == n_B_AtkSkill)
        /* if (7 == n_A_Bodyelement)
            for (i = 0; i <= 6; i++)
                w_HiDam[i] = 0;
        else */
        for (i = 0; i <= 6; i++)
            w_HiDam[i] = n_A_MaxHP - 1;
    if (489 == n_B_AtkSkill)
        for (l = 3,
            wBHD = n_tok[60 + l],
            i = 0; i <= 6; i++)
            w_HiDam[i] = 1 * c.BSkillSubNum.value - Math.floor(c.BSkillSubNum.value * wBHD / 100);
    if (CardNumSearch(126) && 1 == n_B_rangedMAtk)
        for (i = 0; i <= 6; i++)
            w_HiDam[i] = 0;
    for (myInnerHtml("B_WeaponElement", v_Element[l] + " (" + 100 * element[10 * n_A_Bodyelement + 1][l] + "% vs " + v_Element[n_A_Bodyelement] + "1)", 0),
        wBHD = 0,
        i = 0; i <= 6; i++)
        w_HiDam[i] = Math.floor(w_HiDam[i]),
            w_HiDam[i] = Math.max(0, w_HiDam[i]),
            wBHD += w_HiDam[i];
    wBHD = Math.round(wBHD / 7);
    if (n_A_Buf2[14]) {
        if ((n_B[20] || n_B_rangedAtk || n_B_rangedMAtk || 2 == c.B_AtkRange.value) && 1 != c.B_AtkRange.value)
            myInnerHtml("aREFLECT1", '<B style="color:blue">(no melee dmg to reflect)</B>', 0);
        else {
            var r = 1 * (10 + 3 * n_A_Buf2[14])
                , s = new Array;
            s[0] = Math.floor(wBHD * r / 100),
                0 == s[0] && (s[0] = 1),
                s[1] = Math.floor(w_HiDam[0] * r / 100),
                0 == s[1] && (s[1] = 1),
                s[2] = Math.floor(w_HiDam[6] * r / 100),
                0 == s[2] && (s[2] = 1),
                myInnerHtml("aREFLECT1", '<B style="color:blue">' + s[1] + " ~ " + s[2] + "</B>", 0)
        }
        myInnerHtml("aREFLECT1name", '<SPAN style="color:blue">Damage reflected (Shield Reflect)</SPAN>', 0)
    } else
        myInnerHtml("aREFLECT1", "", 0),
            myInnerHtml("aREFLECT1name", "", 0);
    if (n_tok[71]) {
        if ((n_B[20] || n_B_rangedAtk || n_B_rangedMAtk || 2 == c.B_AtkRange.value) && 1 != c.B_AtkRange.value)
            myInnerHtml("aREFLECT2", '<B style="color:blue">(no melee dmg to reflect)</B>', 0);
        else {
            var u = new Array;
            n = 1 * n_tok[71];
            u[0] = Math.floor(wBHD * n / 100),
                0 == u[0] && (u[0] = 1),
                u[1] = Math.floor(w_HiDam[0] * n / 100),
                0 == u[1] && (u[1] = 1),
                u[2] = Math.floor(w_HiDam[6] * n / 100),
                0 == u[2] && (u[2] = 1),
                myInnerHtml("aREFLECT2", '<B style="color:blue">' + u[1] + " ~ " + u[2] + "</B>", 0)
        }
        myInnerHtml("aREFLECT2name", '<SPAN style="color:blue">Damage reflected (equip/cards)</SPAN>', 0)
    } else
        myInnerHtml("aREFLECT2", "", 0),
            myInnerHtml("aREFLECT2name", "", 0);
    return BskillHitNum > 1 ? (myInnerHtml("B_MinAtk", w_HiDam[0] * BskillHitNum + " (" + w_HiDam[0] + " x " + BskillHitNum + " hits)", 0),
        myInnerHtml("B_AveAtk", wBHD * BskillHitNum + " (" + wBHD + " x " + BskillHitNum + " hits)", 0),
        myInnerHtml("B_MaxAtk", w_HiDam[6] * BskillHitNum + " (" + w_HiDam[6] + " x " + BskillHitNum + " hits)", 0)) : (myInnerHtml("B_MinAtk", w_HiDam[0] + "", 0),
            myInnerHtml("B_AveAtk", wBHD + "", 0),
            myInnerHtml("B_MaxAtk", w_HiDam[6] + "", 0)),
        wBHD
}
function BattleMagicCalc(e) {
    wBMC2 = e;
    n = StPlusCalc2(5e3 + n_A_ActiveSkill) + StPlusCard(5e3 + n_A_ActiveSkill); // moved skill dmg % modifiers to before mdef reductionf
    n_A_Buf9[20] == n_A_ActiveSkill && (n += n_A_Buf9[19]), // skill dmg % on top
    n_A_Buf9[22] == n_A_ActiveSkill && (n += n_A_Buf9[21]), // skill dmg % on bottom
    46 != n_A_ActiveSkill && 47 != n_A_ActiveSkill && 277 != n_A_ActiveSkill || 5 == n_A_JobClass() && (n += 20 * CardNumSearch(474)),
    132 != n_A_ActiveSkill && 133 != n_A_ActiveSkill || EquipNumSearch(1146) && (n += 15 + n_A_HEAD_REFINE),
    131 == n_A_ActiveSkill && EquipNumSearch(1169) && (n += n_A_Weapon_refine),
    // kraken card
    (54 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 55 == n_A_ActiveSkill || 128 == n_A_ActiveSkill || 130 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 410 == n_A_ActiveSkill || 412 == n_A_ActiveSkill) && CardNumSearch(583) && (n += 10),
    (373 == n_A_ActiveSkill || 374 == n_A_ActiveSkill || 375 == n_A_ActiveSkill) && CardNumSearch(583) && n_A_Weapon_element == 1 && (n += 10),
    // sedora pet n_A_Buf8[0] = petID
    (54 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 55 == n_A_ActiveSkill || 128 == n_A_ActiveSkill || 130 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 410 == n_A_ActiveSkill || 412 == n_A_ActiveSkill) && 92 == n_A_Buf8[0] && (n += 5),
    (373 == n_A_ActiveSkill || 374 == n_A_ActiveSkill || 375 == n_A_ActiveSkill) && 92 == n_A_Buf8[0] && n_A_Weapon_element == 1 && (n += 5),
    // gloom pet - esma dmg increase
    (373 == n_A_ActiveSkill || 374 == n_A_ActiveSkill || 375 == n_A_ActiveSkill) && 94 == n_A_Buf8[0] && (n_A_Weapon_element == 3 || n_A_Weapon_element == 8) && (n += 7),
    // mavka card
    (407 == n_A_ActiveSkill || 408 == n_A_ActiveSkill || 409 == n_A_ActiveSkill) && 44 == n_A_JOB && (n += 7*CardNumSearch(597)),
    // royal clergy card
    (410 == n_A_ActiveSkill || 412 == n_A_ActiveSkill || 413 == n_A_ActiveSkill || 414 == n_A_ActiveSkill || 414 == n_A_ActiveSkill) && 44 == n_A_JOB && (n += 7*CardNumSearch(629)),
    // warden kades card - esma dmg increase
    n_A_WeaponLV >= 3 && (373 == n_A_ActiveSkill || 374 == n_A_ActiveSkill || 375 == n_A_ActiveSkill) && (n_A_Weapon_element == 0 || n_A_Weapon_element == 6 || n_A_Weapon_element == 7) && (n += 6*CardNumSearch(643)),
    // warden kades card
    n_A_WeaponLV >= 3 && (37 == n_A_ActiveSkill || 387 == n_A_ActiveSkill || 102 == n_A_ActiveSkill || 104 == n_A_ActiveSkill || 162 == n_A_ActiveSkill || 312 == n_A_ActiveSkill) && (n += 6*CardNumSearch(643)),
    // adventurers spirit
    375 == n_A_ActiveSkill && n_A_SHOULDER_REFINE >= 7 && 1835 == n_A_Equip[7] && (n += 5),
    // exquisite yellow foxtail
    (126 == n_A_ActiveSkill || 127 == n_A_ActiveSkill) && (1873 == n_A_Equip[0] || 1874 == n_A_Equip[0]) && (n += n_A_Weapon_refine),
    // royal alchemy staff + alchemy glove
    (51 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 54 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 56 == n_A_ActiveSkill || 542 == n_A_ActiveSkill || 132 == n_A_ActiveSkill) && 1983 == n_A_Equip[0] && (1982 == n_A_Equip[9] || 1982 == n_A_Equip[10]) && (n += 2 * n_A_Weapon_refine),
    // alchemy glove - fire
    (51 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 52 == n_A_ActiveSkill || 53 == n_A_ActiveSkill || 122 == n_A_ActiveSkill || 124 == n_A_ActiveSkill || 125 == n_A_ActiveSkill || 407 == n_A_ActiveSkill || 408 == n_A_ActiveSkill || 409 == n_A_ActiveSkill) && (1982 == n_A_Equip[9] || 1982 == n_A_Equip[10]) && (n += 5),
    // alchemy glove - water
    (54 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 128 == n_A_ActiveSkill || 130 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 320 == n_A_ActiveSkill || 410 == n_A_ActiveSkill || 412 == n_A_ActiveSkill) && (1982 == n_A_Equip[9] || 1982 == n_A_Equip[10]) && (n += 7),
    // alchemy glove - wind
    (56 == n_A_ActiveSkill || 542 == n_A_ActiveSkill || 57 == n_A_ActiveSkill || 126 == n_A_ActiveSkill || 127 == n_A_ActiveSkill || 413 == n_A_ActiveSkill || 414 == n_A_ActiveSkill || 415 == n_A_ActiveSkill) && (1982 == n_A_Equip[9] || 1982 == n_A_Equip[10]) && (n += 7),
    // alchemy glove - earth
    (132 == n_A_ActiveSkill || 133 == n_A_ActiveSkill || 319 == n_A_ActiveSkill) && (1982 == n_A_Equip[9] || 1982 == n_A_Equip[10]) && (n += 7),
    // alchemy glove - ghost
    (46 == n_A_ActiveSkill || 47 == n_A_ActiveSkill || 277 == n_A_ActiveSkill || 307 == n_A_ActiveSkill || 423 == n_A_ActiveSkill) && (1982 == n_A_Equip[9] || 1982 == n_A_Equip[10]) && (n += 7),
    // alchemy glove - holy
    (37 == n_A_ActiveSkill || 387 == n_A_ActiveSkill || 102 == n_A_ActiveSkill || 104 == n_A_ActiveSkill || 162 == n_A_ActiveSkill) && (1982 == n_A_Equip[9] || 1982 == n_A_Equip[10]) && (n += 7),
    // alchemy glove - shadow
    (312 == n_A_ActiveSkill) && (1982 == n_A_Equip[9] || 1982 == n_A_Equip[10]) && (n += 7),
    // alchemy glove - esma
    (373 == n_A_ActiveSkill || 374 == n_A_ActiveSkill || 375 == n_A_ActiveSkill) && (n_A_Weapon_element == 1 || n_A_Weapon_element == 2 || n_A_Weapon_element == 3 || n_A_Weapon_element == 4 || n_A_Weapon_element == 6 || n_A_Weapon_element == 7 || n_A_Weapon_element == 8) && (1982 == n_A_Equip[9] || 1982 == n_A_Equip[10]) && (n += 7),
    // spectral manteau
    (47 == n_A_ActiveSkill || 312 == n_A_ActiveSkill) && 1987 == n_A_Equip[7] && (n += 5 * n_A_SHOULDER_REFINE),
    540 == n_A_ActiveSkill && (n += 25 * CardNumSearch(493)),
    541 == n_A_ActiveSkill && (n += 25 * CardNumSearch(488)),
    542 == n_A_ActiveSkill && (n += 25 * CardNumSearch(591)),
    37 != n_A_ActiveSkill && 387 != n_A_ActiveSkill || 3 == n_A_JobClass() && EquipNumSearch(1247) && (n += 5, n_A_HEAD_REFINE >= 7 && (n += 5)),
    wBMC2 = wBMC2 * (100 + n) / 100, // applying skill modifiers
    n_A_Buf7[21] && MANUKU_MONSTER() && (wBMC2 = 110 * wBMC2 / 100),
    n_A_Buf7[24] && SUPURE_MONSTER() && (wBMC2 = 110 * wBMC2 / 100),
    131 == n_A_ActiveSkill && n_B_debuf[4] && 0 == n_B[19] && n_B[3] < 90 && (wBMC2 = 0),
    // mdef
    SRV = 1 * c.server.value,
    wBMC_MDEF = n_B[15];
    var _ = 0;
    0 == n_B[19] && CardNumSearch(424) && (_ = 1),
        0 != _ && (wBMC_MDEF = 0,
            n_B_MDEF2 = 0),
        122 == n_A_ActiveSkill ? wBMC2 = Math.floor(wBMC2 + 50) : wBMC2 = Math.floor(wBMC2 * mdefReduction(wBMC_MDEF) - n_B_MDEF2),
        wBMC2 < 1 && (wBMC2 = 1),
        //console.log("post reduction magic dmg : " + wBMC2)
        //104 == n_A_ActiveSkill && 6 != n_B[2] && n_B[3] < 90 && (wBMC2 = 0), // make magnus exorcismus hit all
        wBMC2 = SRV < 50 ? Math.floor(wBMC2 * Math.max(0, element[n_B[3]][n_A_Weapon_element])) : Math.floor(wBMC2 * Math.max(0, element_R[n_B[3]][n_A_Weapon_element])),
        SRV ? n_B[3] > 89 && n_B[3] < 95 && 47 == n_A_ActiveSkill && (wBMC2 = Math.floor(wBMC2 * (1 + .05 * n_A_ActiveSkillLV))) : 90 <= n_B[3] && 47 == n_A_ActiveSkill && (wBMC2 = Math.floor(wBMC2 * (1 + .05 * n_A_ActiveSkillLV)));
    // magic damage modifiers
    var n = n_tok[170 + n_B[2]]; // MAGIC DAMAGE RACE MODIFIER
    var nEle = n_tok[340 + Math.floor(n_B[3] / 10)]; // MAGIC DAMAGE ELEMENT MODIFIER
    var nSize = n_tok[356 + n_B[4]];
    var nBoss = n_B[19] ? n_tok[353] : 0; // MAGIC DAMAGE BOSS MODIFIER
    var nAll = n_tok[354];
    9 == n_B[2] && SkillSearch(234) && (n += 2 * SkillSearch(234)), // dragonology
    wBMC2 = wBMC2 * (100 + n) / 100,
    wBMC2 = wBMC2 * (100 + nEle) / 100,
    wBMC2 = wBMC2 * (100 + nSize) / 100,
    wBMC2 = wBMC2 * (100 + nBoss) / 100,
    wBMC2 = wBMC2 * (100 + nAll) / 100,
    wBMC2 = tPlusDamCut(wBMC2);
    return Math.floor(wBMC2);
    /* n = StPlusCalc2(5e3 + n_A_ActiveSkill) + StPlusCard(5e3 + n_A_ActiveSkill);
    return n_A_Buf9[20] == n_A_ActiveSkill && (n += n_A_Buf9[19]), // skill dmg % on top
        n_A_Buf9[22] == n_A_ActiveSkill && (n += n_A_Buf9[21]), // skill dmg % on bottom
        46 != n_A_ActiveSkill && 47 != n_A_ActiveSkill && 277 != n_A_ActiveSkill || 5 == n_A_JobClass() && (n += 20 * CardNumSearch(474)),
        132 != n_A_ActiveSkill && 133 != n_A_ActiveSkill || EquipNumSearch(1146) && (n += 15 + n_A_HEAD_REFINE),
        131 == n_A_ActiveSkill && EquipNumSearch(1169) && (n += n_A_Weapon_refine),
        // kraken card
        (54 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 55 == n_A_ActiveSkill || 128 == n_A_ActiveSkill || 130 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 410 == n_A_ActiveSkill || 412 == n_A_ActiveSkill) && CardNumSearch(583) && (n += 10),
        (373 == n_A_ActiveSkill || 374 == n_A_ActiveSkill || 375 == n_A_ActiveSkill) && CardNumSearch(583) && n_A_Weapon_element == 1 && (n += 10),
        // sedora pet n_A_Buf8[0] = petID
        (54 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 55 == n_A_ActiveSkill || 128 == n_A_ActiveSkill || 130 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 410 == n_A_ActiveSkill || 412 == n_A_ActiveSkill) && 92 == n_A_Buf8[0] && (n += 5),
        (373 == n_A_ActiveSkill || 374 == n_A_ActiveSkill || 375 == n_A_ActiveSkill) && 92 == n_A_Buf8[0] && n_A_Weapon_element == 1 && (n += 5),
        // gloom pet - esma dmg increase
        (373 == n_A_ActiveSkill || 374 == n_A_ActiveSkill || 375 == n_A_ActiveSkill) && 94 == n_A_Buf8[0] && (n_A_Weapon_element == 3 || n_A_Weapon_element == 8) && (n += 7),
        // mavka card
        (407 == n_A_ActiveSkill || 408 == n_A_ActiveSkill || 409 == n_A_ActiveSkill) && CardNumSearch(597) && 44 == n_A_JOB && (n += 7),
        // adventurers spirit
        375 == n_A_ActiveSkill && n_A_SHOULDER_REFINE >= 7 && 1835 == n_A_Equip[7] && (n += 5),
        // exquisite yellow foxtail
        (126 == n_A_ActiveSkill || 127 == n_A_ActiveSkill) && (1873 == n_A_Equip[0] || 1874 == n_A_Equip[0]) && (n += n_A_Weapon_refine),
        540 == n_A_ActiveSkill && (n += 25 * CardNumSearch(493)),
        541 == n_A_ActiveSkill && (n += 25 * CardNumSearch(488)),
        542 == n_A_ActiveSkill && (n += 25 * CardNumSearch(591)),
        37 != n_A_ActiveSkill && 387 != n_A_ActiveSkill || 3 == n_A_JobClass() && EquipNumSearch(1247) && (n += 5,
            n_A_HEAD_REFINE >= 7 && (n += 5)),
        wBMC2 = wBMC2 * (100 + n) / 100,
        n_A_Buf7[21] && MANUKU_MONSTER() && (wBMC2 = 110 * wBMC2 / 100),
        n_A_Buf7[24] && SUPURE_MONSTER() && (wBMC2 = 110 * wBMC2 / 100),
        131 == n_A_ActiveSkill && n_B_debuf[4] && 0 == n_B[19] && n_B[3] < 90 && (wBMC2 = 0),
        wBMC2 = Math.floor(wBMC2),
        wBMC2 */
}
function ClickJob(e) {
    if (SRV = 1 * c.server.value,
        myInnerHtml("A_KakutyouSel", "", 0),
        myInnerHtml("A_KakutyouData", "", 0),
        c.A_Kakutyou.value = 0,
        n_A_JobSet(),
        (e = n_A_JOB) < 46)
        for (var _ = 1; _ <= 99; _++)
            c.A_BaseLV.options[_ - 1] = new Option(_, _),
                c.A_STR.options[_ - 1] = new Option(_, _),
                c.A_AGI.options[_ - 1] = new Option(_, _),
                c.A_VIT.options[_ - 1] = new Option(_, _),
                c.A_INT.options[_ - 1] = new Option(_, _),
                c.A_DEX.options[_ - 1] = new Option(_, _),
                c.A_LUK.options[_ - 1] = new Option(_, _);
    else {
        thirdClass = 1;
        for (_ = 1; _ <= 175; _++)
            c.A_BaseLV.options[_ - 1] = new Option(_, _);
        for (_ = 1; _ <= 130; _++)
            c.A_STR.options[_ - 1] = new Option(_, _),
                c.A_AGI.options[_ - 1] = new Option(_, _),
                c.A_VIT.options[_ - 1] = new Option(_, _),
                c.A_INT.options[_ - 1] = new Option(_, _),
                c.A_DEX.options[_ - 1] = new Option(_, _),
                c.A_LUK.options[_ - 1] = new Option(_, _)
    }
    var n = c.A_JobLV.length;
    for (_ = 0; _ < n; _++)
        c.A_JobLV.options[0] = null;
    var l = 0;
    for (l = 0 == e ? 10 : e <= 19 || 41 <= e && e <= 43 ? 50 : 20 == e ? 99 : e > 45 ? 60 : 70,
        _ = 1; _ <= l; _++)
        c.A_JobLV.options[_ - 1] = new Option(_, _);
    for (n_SkillSW && (45 == n_A_JOB ? (myInnerHtml("AS12_1", "<S># of Spirit Spheres</S>", 0),
        c.A2_Skill12.disabled = !0,
        c.A2_Skill12.value = 0,
        n_A_Buf2[12] = 0) : (myInnerHtml("AS12_1", "# of Spirit Spheres", 0),
            c.A2_Skill12.disabled = !1),
        13 == n_A_JOB || 27 == n_A_JOB ? (myInnerHtml("AS11_1", "<S>" + skillName(164, SRV) + "</S>", 0),
            document.getElementById("AS11_1").style.textDecoration = "line-through",
            c.A2_Skill11.disabled = !0,
            c.A2_Skill11.value = 0,
            n_A_Buf2[11] = 0) : (myInnerHtml("AS11_1", skillName(164, SRV), 0),
                document.getElementById("AS11_1").style.textDecoration = "",
                c.A2_Skill11.disabled = !1)),
        n_Skill7SW && (3 != n_A_JOB && 9 != n_A_JobClass2() && 16 != n_A_JobClass2() ? c.A_SpeedPOT.options[2] = new Option(SpeedPotName[2], 2) : c.A_SpeedPOT.options[2] = new Option("-", 0),
            1 == n_A_JobClass() || 6 == n_A_JobClass() || 41 == n_A_JobClass() || 14 == n_A_JobClass2() || 11 == n_A_JobClass2() || 5 == n_A_JOB || 45 == n_A_JOB ? c.A_SpeedPOT.options[3] = new Option(SpeedPotName[3] + " (Lvl 85)", 3) : 22 == n_A_JOB ? c.A_SpeedPOT.options[3] = new Option("* Special (" + m_Skill[304][2] + " Lvl 85) / Poison Bottle", 3) : c.A_SpeedPOT.options[3] = new Option("* Special (" + m_Skill[304][2] + ") (Lvl 85)", 3)),
        20 != n_A_JOB && (SuperNoviceFullWeaponCHECK = 0),
        SuperNoviceFullWeaponCHECK ? (m_JobASPD[20][7] = 1.6,
            m_JobASPD_R[20][7] = 146) : (m_JobASPD[20][7] = 0,
                m_JobASPD_R[20][7] = 0),
        0 == SRV && 8 == n_A_JobClass2() && 1 == n_Nitou && (n_Nitou = 0,
            ClickWeaponType2(0)),
        WeaponSet(e),
        _ = 0; _ <= 14; _++)
        385 == m_JobBuff[e][_] ? (myInnerHtml("P_Skill" + _, m_Skill[m_JobBuff[e][_]][2], 0),
            myInnerHtml("P_Skill" + _ + "s", "<select name=A_skill" + _ + " id=A_skill" + _ + ' onChange="StAllCalc() | WeaponSet(20) | restrictCardslot(1)"></select>', 0)) : 392 == m_JobBuff[e][_] ? (myInnerHtml("P_Skill" + _, skillName(m_Skill[m_JobBuff[e][_]][0], SRV), 0),
                myInnerHtml("P_Skill" + _ + "s", "<select name=A_skill" + _ + " id=A_skill" + _ + ' onChange="StAllCalc()" style="width:70px;"></select>', 0),
                0 == n_Reborn && myInnerHtml("P_Skill" + _, "", 0)) : 441 == m_JobBuff[e][_] ? (myInnerHtml("P_Skill" + _, m_Skill[m_JobBuff[e][_]][2], 0),
                    myInnerHtml("P_Skill" + _ + "s", "<select name=A_skill" + _ + " id=A_skill" + _ + ' onChange="StAllCalc() | ClickActiveSkill2() | calc()"></select>', 0),
                    0 == n_Reborn && myInnerHtml("P_Skill" + _, "", 0)) : 999 != m_JobBuff[e][_] ? (myInnerHtml("P_Skill" + _, skillName(m_Skill[m_JobBuff[e][_]][0], SRV), 0),
                        myInnerHtml("P_Skill" + _ + "s", "<select name=A_skill" + _ + " id=A_skill" + _ + " onChange=StAllCalc()></select>", 0)) : (myInnerHtml("P_Skill" + _, "", 0),
                            myInnerHtml("P_Skill" + _ + "s", "", 0));
    for (var i = 0; i <= 14; i++) {
        l = m_JobBuff[e][i];
        if (NumSearch(l, [12, 68, 152, 253, 258, 301, 309, 310, 322, 345, 364, 365, 379, 383, 385, 386, 390, 420, 421, 422]))
            (t = document.getElementById("A_skill" + i)).options[0] = new Option("off", 0),
                t.options[1] = new Option("on", 1);
        else if (999 != l) {
            var t = document.getElementById("A_skill" + i);
            for (_ = 10; _ >= 0; _--)
                t.options[_] = null;
            for (_ = 0; _ <= m_Skill[m_JobBuff[e][i]][1]; _++)
                t.options[_] = new Option(_, _);
            if (392 == m_Skill[m_JobBuff[e][i]][0]) {
                for (n_ECname = ["off", "eAthena (max stats)", "iRO", "Original"],
                    _ = 0; _ <= 3; _++)
                    t.options[_] = new Option(n_ECname[_], _);
                0 == n_Reborn && (t.style.visibility = "hidden")
            }
        }
    }
    if (58 == m_JobBuff[e][0]) {
        for (_ = 10; _ >= 0; _--)
            c.A_skill0.options[_] = null;
        for (n_ECname = ["0", "6% Reduction", "12% Reduction", "18% Reduction", "24% Reduction", "30% Reduction"],
            _ = 0; _ <= 5; _++)
            c.A_skill0.options[_] = new Option(n_ECname[_], _)
    }
    if (78 == m_JobBuff[e][5]) {
        for (_ = 10; _ >= 0; _--)
            c.A_skill5.options[_] = null;
        for (n_ECname = ["(no Peco)", "0", "1", "2", "3", "4", "5"],
            _ = 0; _ <= 6; _++)
            c.A_skill5.options[_] = new Option(n_ECname[_], _)
    }
    if (78 == m_JobBuff[e][8]) {
        for (_ = 10; _ >= 0; _--)
            c.A_skill8.options[_] = null;
        for (n_ECname = ["(no Peco)", "0", "1", "2", "3", "4", "5"],
            _ = 0; _ <= 6; _++)
            c.A_skill8.options[_] = new Option(n_ECname[_], _)
    }
    if (367 == m_JobBuff[e][11]) {
        for (_ = 10; _ >= 0; _--)
            c.A_skill11.options[_] = null;
        for (n_ECname = [0, 1, 2, 3, 4, 5, 6, 8, 10],
            _ = 0; _ <= 8; _++)
            c.A_skill11.options[_] = new Option(10 * n_ECname[_] + "%", n_ECname[_])
    }
    Askill(),
        WeaponSet2()
}
function Askill() {
    SRV = 1 * c.server.value;
    for (var e = c.A_ActiveSkill.length, _ = 0; _ < e; _++)
        c.A_ActiveSkill.options[0] = null;
    if (c.all_dmgSkills.checked)
        for (_ = 0; _ < All_DMGskill.length; _++)
            c.A_ActiveSkill.options[_] = new Option(skillNameInSelect(m_Skill[All_DMGskill[_]][0], SRV), All_DMGskill[_]);
    else
        for (_ = 0; 999 != m_JobAtkSkill[n_A_JOB][_]; _++)
            c.A_ActiveSkill.options[_] = new Option(skillNameInSelect(m_Skill[m_JobAtkSkill[n_A_JOB][_]][0], SRV), m_JobAtkSkill[n_A_JOB][_]);
    for (_ = 0; _ < 20; _++)
        w_ASSP0bk[_] = 999;
    ActiveSkillSetPlus(),
        ClickActiveSkill()
}
function Bskill() {
    var e = 0;
    for (c.B_AtkSkill.options.length = 0,
        c.B_AtkSkill.options[0] = new Option("Basic Attack", 0),
        i = 23; 0 != m_Monster[c.B_Enemy.value][i]; i += 2)
        e++,
            c.B_AtkSkill.options[e] = new Option(m_Skill[m_Monster[c.B_Enemy.value][i]][2] + " Lvl " + m_Monster[c.B_Enemy.value][i + 1], m_Monster[c.B_Enemy.value][i]);
    myInnerHtml("BBSkill", "", 0),
        957 == n_A_Equip[7] && calc()
}
function ClickWeaponType(e) {
    n_A_JobSet(),
        e = m_Item[c.A_weapon1.value][1],
        c.A_Arrow.disabled = !1;
    for (var _ = 0; _ < 23; _++)
        c.A_Arrow.options[0] = null;
    if (10 == e || 14 == e || 15 == e)
        for (j = 23,
            _ = 0; _ <= 4; _++)
            m_Arrow[_] = m_Arrow_[_];
    else if (17 == e || 18 == e || 19 == e || 20 == e)
        for (j = 8,
            _ = 0; _ <= 8; _++)
            m_Arrow[_] = m_Bullet[_];
    else if (21 == e)
        for (j = 4,
            _ = 0; _ <= 4; _++)
            m_Arrow[_] = m_Grenade[_];
    else
        j = 1,
            m_Arrow[0] = [0, 0, "(no arrow)"],
            c.A_Arrow.value = 0,
            c.A_Arrow.disabled = !0;
    for (_ = 0; _ <= j; _++)
        c.A_Arrow.options[_] = new Option(m_Arrow[_][2], _);
    if (0 == e ? (c.A_Weapon_refine.disabled = !0,
        c.A_Weapon_refine.value = 0) : c.A_Weapon_refine.disabled = !1,
        n_A_JobSet(),
        8 != n_A_JOB && 22 != n_A_JOB || 11 == e)
        myInnerHtml("A_SobWeaponName", "", 0),
            myInnerHtml("A_w2", "", 0),
            myInnerHtml("A_weapon2refine", "", 0),
            myInnerHtml("A_weapon2_cardshort", "", 0),
            myInnerHtml("nA_weapon2_c1", "", 0),
            myInnerHtml("nA_weapon2_c2", "", 0),
            myInnerHtml("nA_weapon2_c3", "", 0),
            myInnerHtml("nA_weapon2_c4", "", 0),
            myInnerHtml("nA_weapon2_ropt1", "", 0),
            myInnerHtml("nA_weapon2_ropt2", "", 0),
            myInnerHtml("nA_weapon2_ropt3", "", 0),
            myInnerHtml("nA_weapon2_ropt4", "", 0),
            n_Nitou = 0,
            c.A_weapon1.style.width = "auto",
            c.A_cardshort.style.width = "auto",
            c.A_weapon1_card1.style.width = "208px",
            c.A_weapon1_card2.style.width = "208px",
            c.A_weapon1_card3.style.width = "208px",
            c.A_weapon1_card4.style.width = "208px",
            c.A_head1.style.width = "200px",
            c.A_head2.style.width = "200px",
            c.A_head3.style.width = "200px",
            c.A_left.style.width = "200px",
            c.A_body.style.width = "200px",
            c.A_shoulder.style.width = "200px",
            c.A_shoes.style.width = "200px",
            c.A_acces1.style.width = "200px",
            c.A_acces2.style.width = "200px",
            c.A_head1_card.style.width = "auto",
            c.A_head2_card.style.width = "auto",
            c.A_left_card.style.width = "auto",
            c.A_body_card.style.width = "200px",
            c.A_shoulder_card.style.width = "200px",
            c.A_shoes_card.style.width = "200px",
            c.A_acces1_card.style.width = "auto",
            c.A_acces2_card.style.width = "auto";
    else if (0 == n_Nitou) {
        myInnerHtml("A_SobWeaponName", "Left Hand: ", 0),
            myInnerHtml("A_w2", '<select name="A_weapon2" style="width:185px;" onchange="ClickWeaponType2(this[this.selectedIndex].value) | Click_Item(this[this.selectedIndex].value)|restrictCardslot(1)"><option value="0">(Fist or Shield)</option></select>', 0),
            WeaponSetLeft(n_A_JOB);
        var n = Math.max(document.documentElement.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth);
        1262 <= n && n < 1480 || n < 1013 ? (c.A_weapon1.style.width = "95%",
            c.A_cardshort.style.width = "95%",
            c.A_weapon1_card1.style.width = "95%",
            c.A_weapon1_card2.style.width = "95%",
            c.A_weapon1_card3.style.width = "95%",
            c.A_weapon1_card4.style.width = "95%",
            c.A_head1.style.width = "47%",
            c.A_head2.style.width = "53%",
            c.A_head3.style.width = "53%",
            c.A_left.style.width = "47%",
            c.A_body.style.width = "47%",
            c.A_shoulder.style.width = "47%",
            c.A_shoes.style.width = "47%",
            c.A_acces1.style.width = "53%",
            c.A_acces2.style.width = "53%",
            c.A_HSE_HEAD1.style.width = "43%",
            c.A_left_card.style.width = "37%",
            c.A_body_card.style.width = "37%",
            c.A_shoes_card.style.width = "37%",
            c.A_acces1_card.style.width = "43%",
            c.A_acces2_card.style.width = "43%") : (c.A_weapon1.style.width = "auto",
                c.A_cardshort.style.width = "auto",
                c.A_weapon1_card1.style.width = "208px",
                c.A_weapon1_card2.style.width = "208px",
                c.A_weapon1_card3.style.width = "208px",
                c.A_weapon1_card4.style.width = "208px",
                c.A_head1.style.width = "200px",
                c.A_head2.style.width = "200px",
                c.A_head3.style.width = "200px",
                c.A_left.style.width = "200px",
                c.A_body.style.width = "200px",
                c.A_shoulder.style.width = "200px",
                c.A_shoes.style.width = "200px",
                c.A_acces1.style.width = "200px",
                c.A_acces2.style.width = "200px",
                c.A_left_card.style.width = "auto",
                c.A_body_card.style.width = "200px",
                c.A_shoes_card.style.width = "200px",
                c.A_acces1_card.style.width = "auto",
                c.A_acces2_card.style.width = "auto")
    }

    var oldWeapon = n_A_Equip[0];
    n_A_Equip[0] = 1 * c.A_weapon1.value;
    // random options for weapons here
    if(parseInt(e) == 0 || (m_ForgedItems.includes(parseInt(n_A_Equip[0])) && !(m_RandomOptForgedWeapons.includes(parseInt(n_A_Equip[0]))))){
        RandOptWeapon1Reset();
    }else if(m_RandomOptForgedWeapons.includes(parseInt(n_A_Equip[0]))){
        if(!(m_RandomOptForgedWeapons.includes(parseInt(oldWeapon))) || parseInt(oldWeapon) == 0){
            RandOptWeapon1Reset();
            for(i = 0; "NULL" != m_RandomOptForged[0][i]; i++){
                c.A_weapon1_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptForged[0][i]][1], m_RandomOpt[m_RandomOptForged[0][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptForged[1][i]; i++){
                c.A_weapon1_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptForged[1][i]][1], m_RandomOpt[m_RandomOptForged[1][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptForged[2][i]; i++){
                c.A_weapon1_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptForged[2][i]][1], m_RandomOpt[m_RandomOptForged[2][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptForged[3][i]; i++){
                c.A_weapon1_ropt4.options[i] = new Option(m_RandomOpt[m_RandomOptForged[3][i]][1], m_RandomOpt[m_RandomOptForged[3][i]][0]);
            }
        }
    }else if(m_RandomOptSpecialType.includes(parseInt(e)) || m_RandomOptSpecialWeapons.includes(parseInt(n_A_Equip[0]))){ // special
        if(!(m_RandomOptSpecialType.includes(parseInt(n_A_WeaponType)) || m_RandomOptSpecialWeapons.includes(parseInt(oldWeapon))) || parseInt(oldWeapon) == 0){
            RandOptWeapon1Reset();
            for(i = 0; "NULL" != m_RandomOptSpecial[0][i]; i++){
                c.A_weapon1_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[0][i]][1], m_RandomOpt[m_RandomOptSpecial[0][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptSpecial[1][i]; i++){
                c.A_weapon1_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[1][i]][1], m_RandomOpt[m_RandomOptSpecial[1][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptSpecial[2][i]; i++){
                c.A_weapon1_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[2][i]][1], m_RandomOpt[m_RandomOptSpecial[2][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptSpecial[3][i]; i++){
                c.A_weapon1_ropt4.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[3][i]][1], m_RandomOpt[m_RandomOptSpecial[3][i]][0]);
            }
        }
    }else if(m_RandomOptMeleeType.includes(parseInt(e))){ // melee
        if(!(m_RandomOptMeleeType.includes(parseInt(n_A_WeaponType))) || m_RandomOptSpecialWeapons.includes(parseInt(oldWeapon)) || m_ForgedItems.includes(parseInt(oldWeapon)) || parseInt(oldWeapon) == 0){
            RandOptWeapon1Reset();
            for(i = 0; "NULL" != m_RandomOptMelee[0][i]; i++){
                c.A_weapon1_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptMelee[0][i]][1], m_RandomOpt[m_RandomOptMelee[0][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptMelee[1][i]; i++){
                c.A_weapon1_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptMelee[1][i]][1], m_RandomOpt[m_RandomOptMelee[1][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptMelee[2][i]; i++){
                c.A_weapon1_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptMelee[2][i]][1], m_RandomOpt[m_RandomOptMelee[2][i]][0]);
            }
            c.A_weapon1_ropt4.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
        }
    }else if(m_RandomOptRangedType.includes(parseInt(e))){ // ranged
        if(!(m_RandomOptRangedType.includes(parseInt(n_A_WeaponType))) || m_RandomOptSpecialWeapons.includes(parseInt(oldWeapon)) || parseInt(oldWeapon) == 0){
            RandOptWeapon1Reset();
            for(i = 0; "NULL" != m_RandomOptRanged[0][i]; i++){
                c.A_weapon1_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptRanged[0][i]][1], m_RandomOpt[m_RandomOptRanged[0][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptRanged[1][i]; i++){
                c.A_weapon1_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptRanged[1][i]][1], m_RandomOpt[m_RandomOptRanged[1][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptRanged[2][i]; i++){
                c.A_weapon1_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptRanged[2][i]][1], m_RandomOpt[m_RandomOptRanged[2][i]][0]);
            }
            c.A_weapon1_ropt4.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
        }
    }else if(m_RandomOptMagicType.includes(parseInt(e))){ // magic
        if(!(m_RandomOptMagicType.includes(parseInt(n_A_WeaponType))) || m_RandomOptSpecialWeapons.includes(parseInt(oldWeapon)) || parseInt(oldWeapon) == 0){
            RandOptWeapon1Reset();
            for(i = 0; "NULL" != m_RandomOptMagic[0][i]; i++){
                c.A_weapon1_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptMagic[0][i]][1], m_RandomOpt[m_RandomOptMagic[0][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptMagic[1][i]; i++){
                c.A_weapon1_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptMagic[1][i]][1], m_RandomOpt[m_RandomOptMagic[1][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptMagic[2][i]; i++){
                c.A_weapon1_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptMagic[2][i]][1], m_RandomOpt[m_RandomOptMagic[2][i]][0]);
            }
            c.A_weapon1_ropt4.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
        }
    }

    if(m_ForgedItems.includes(n_A_Equip[0])){
        if(!(m_ForgedItems.includes(oldWeapon))){
            allCard();
        }
    }else{
        if(m_ForgedItems.includes(oldWeapon)){
            allCard();
        }
    }

    ActiveSkillSetPlus(),
    ClickB_Item(n_A_Equip[0])
}
function ClickWeaponType2(e) {
    if (n_A_JobSet(),
        0 != e) {
        if (0 == n_Nitou) {
            for (myInnerHtml("A_weapon2refine", 'Refine (Left): <select name="A_Weapon2_refine" onChange = "StAllCalc()"></select>', 0),
                i = 0; i <= 10; i++)
                c.A_Weapon2_refine.options[i] = new Option("+" + i, i);
            for (myInnerHtml("A_weapon2_cardshort", '<select name="A_cardshortLeft" onChange="Setm_CardShortLeft()|Click_Card()|ActiveSkillSetPlus()"></select>', 0),
                c.A_cardshortLeft.options[0] = new Option("(card shortcuts)", 0),
                i = 1; i <= 50; i++)
                c.A_cardshortLeft.options[i] = new Option(m_CardShort[i + 1][0], i + 1);
            myInnerHtml("nA_weapon2_c1", '<select name="A_weapon2_card1" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
            myInnerHtml("nA_weapon2_c2", '<select name="A_weapon2_card2" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
            myInnerHtml("nA_weapon2_c3", '<select name="A_weapon2_card3" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
            myInnerHtml("nA_weapon2_c4", '<select name="A_weapon2_card4" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
            if(e == 0 || !(m_ForgedItems.includes(parseInt(e)))){
                for(i = 0; "NULL" != m_CardSort[0][i]; i++){
                    c.A_weapon2_card1.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
                    c.A_weapon2_card2.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
                    c.A_weapon2_card3.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
                    c.A_weapon2_card4.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
                }
            }else{
                c.A_weapon2_card1.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
				c.A_weapon2_card1.options[1] = new Option(m_Card[201][2], m_Card[201][0]);
				c.A_weapon2_card1.options[2] = new Option(m_Card[202][2], m_Card[202][0]);
				c.A_weapon2_card1.options[3] = new Option(m_Card[203][2], m_Card[203][0]);
				c.A_weapon2_card1.options[4] = new Option(m_Card[204][2], m_Card[204][0]);
				c.A_weapon2_card1.options[5] = new Option(m_Card[106][2], m_Card[106][0]);

				c.A_weapon2_card2.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
				c.A_weapon2_card2.options[1] = new Option(m_Card[106][2], m_Card[106][0]);
				c.A_weapon2_card3.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
				c.A_weapon2_card3.options[1] = new Option(m_Card[106][2], m_Card[106][0]);
				c.A_weapon2_card4.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
				c.A_weapon2_card4.options[1] = new Option("* Top10 ranked", 106);
            }

            RandOptWeapon2Reset();
            // add random options to 2nd weapon for assassin
            if(m_RandomOptForgedWeapons.includes(parseInt(e))){
                if(!(m_RandomOptForgedWeapons.includes(parseInt(n_A_Equip[1])))){
                    for(i = 0; "NULL" != m_RandomOptForged[0][i]; i++){
                        c.A_weapon2_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptForged[0][i]][1], m_RandomOpt[m_RandomOptForged[0][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptForged[1][i]; i++){
                        c.A_weapon2_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptForged[1][i]][1], m_RandomOpt[m_RandomOptForged[1][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptForged[2][i]; i++){
                        c.A_weapon2_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptForged[2][i]][1], m_RandomOpt[m_RandomOptForged[2][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptForged[3][i]; i++){
                        c.A_weapon2_ropt4.options[i] = new Option(m_RandomOpt[m_RandomOptForged[3][i]][1], m_RandomOpt[m_RandomOptForged[3][i]][0]);
                    }
                }
            }else if(m_RandomOptSpecialWeapons.includes(parseInt(e))){ // special weapons that assassins can use
                if(!(m_RandomOptSpecialWeapons.includes(parseInt(n_A_Equip[1])))){
                    for(i = 0; "NULL" != m_RandomOptSpecial[0][i]; i++){
                        c.A_weapon2_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[0][i]][1], m_RandomOpt[m_RandomOptSpecial[0][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptSpecial[1][i]; i++){
                        c.A_weapon2_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[1][i]][1], m_RandomOpt[m_RandomOptSpecial[1][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptSpecial[2][i]; i++){
                        c.A_weapon2_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[2][i]][1], m_RandomOpt[m_RandomOptSpecial[2][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptSpecial[3][i]; i++){
                        c.A_weapon2_ropt4.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[3][i]][1], m_RandomOpt[m_RandomOptSpecial[3][i]][0]);
                    }
                }
            }else{ // melee weapons
                if(m_RandomOptSpecialWeapons.includes(parseInt(n_A_Equip[1])) || m_RandomOptForgedWeapons.includes(parseInt(n_A_Equip[1])) || parseInt(n_A_Equip[1]) == 0){
                    for(i = 0; "NULL" != m_RandomOptMelee[0][i]; i++){
                        c.A_weapon2_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptMelee[0][i]][1], m_RandomOpt[m_RandomOptMelee[0][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptMelee[1][i]; i++){
                        c.A_weapon2_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptMelee[1][i]][1], m_RandomOpt[m_RandomOptMelee[1][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptMelee[2][i]; i++){
                        c.A_weapon2_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptMelee[2][i]][1], m_RandomOpt[m_RandomOptMelee[2][i]][0]);
                    }
                    c.A_weapon2_ropt4.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
                }
            }

            n_Nitou = 1;
        }else{
            if(m_ForgedItems.includes(parseInt(e))){
                if(!(m_ForgedItems.includes(n_A_Equip[1]))){
                    myInnerHtml("nA_weapon2_c1", '<select name="A_weapon2_card1" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
                    myInnerHtml("nA_weapon2_c2", '<select name="A_weapon2_card2" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
                    myInnerHtml("nA_weapon2_c3", '<select name="A_weapon2_card3" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
                    myInnerHtml("nA_weapon2_c4", '<select name="A_weapon2_card4" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);

                    c.A_weapon2_card1.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
                    c.A_weapon2_card1.options[1] = new Option(m_Card[201][2], m_Card[201][0]);
                    c.A_weapon2_card1.options[2] = new Option(m_Card[202][2], m_Card[202][0]);
                    c.A_weapon2_card1.options[3] = new Option(m_Card[203][2], m_Card[203][0]);
                    c.A_weapon2_card1.options[4] = new Option(m_Card[204][2], m_Card[204][0]);
                    c.A_weapon2_card1.options[5] = new Option(m_Card[106][2], m_Card[106][0]);

                    c.A_weapon2_card2.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
                    c.A_weapon2_card2.options[1] = new Option(m_Card[106][2], m_Card[106][0]);
                    c.A_weapon2_card3.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
                    c.A_weapon2_card3.options[1] = new Option(m_Card[106][2], m_Card[106][0]);
                    c.A_weapon2_card4.options[0] = new Option(m_Card[0][2], m_Card[0][0]);
                    c.A_weapon2_card4.options[1] = new Option("* Top10 ranked", 106);
                }
            }else{
                if(m_ForgedItems.includes(n_A_Equip[1])){
                    myInnerHtml("nA_weapon2_c1", '<select name="A_weapon2_card1" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
                    myInnerHtml("nA_weapon2_c2", '<select name="A_weapon2_card2" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
                    myInnerHtml("nA_weapon2_c3", '<select name="A_weapon2_card3" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);
                    myInnerHtml("nA_weapon2_c4", '<select name="A_weapon2_card4" onChange="Click_Card(this[this.selectedIndex].value)"></select>', 0);

                    for(i = 0; "NULL" != m_CardSort[0][i]; i++){
                        c.A_weapon2_card1.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
                        c.A_weapon2_card2.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
                        c.A_weapon2_card3.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
                        c.A_weapon2_card4.options[i] = new Option(m_Card[m_CardSort[0][i]][2], m_Card[m_CardSort[0][i]][0]);
                    }
                }
            }

            if(m_ForgedItems.includes(parseInt(e)) && !(m_RandomOptForgedWeapons.includes(parseInt(e)))){
                RandOptWeapon2Reset();
            }else if(m_RandomOptForgedWeapons.includes(parseInt(e))){
                if(!(m_RandomOptForgedWeapons.includes(parseInt(n_A_Equip[1])))){
                    RandOptWeapon2Reset();
                    for(i = 0; "NULL" != m_RandomOptForged[0][i]; i++){
                        c.A_weapon2_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptForged[0][i]][1], m_RandomOpt[m_RandomOptForged[0][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptForged[1][i]; i++){
                        c.A_weapon2_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptForged[1][i]][1], m_RandomOpt[m_RandomOptForged[1][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptForged[2][i]; i++){
                        c.A_weapon2_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptForged[2][i]][1], m_RandomOpt[m_RandomOptForged[2][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptForged[3][i]; i++){
                        c.A_weapon2_ropt4.options[i] = new Option(m_RandomOpt[m_RandomOptForged[3][i]][1], m_RandomOpt[m_RandomOptForged[3][i]][0]);
                    }
                }
            }else if(m_RandomOptSpecialWeapons.includes(parseInt(e))){ // special weapons that assassins can use
                if(!(m_RandomOptSpecialWeapons.includes(parseInt(n_A_Equip[1])))){
                    RandOptWeapon2Reset();
                    for(i = 0; "NULL" != m_RandomOptSpecial[0][i]; i++){
                        c.A_weapon2_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[0][i]][1], m_RandomOpt[m_RandomOptSpecial[0][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptSpecial[1][i]; i++){
                        c.A_weapon2_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[1][i]][1], m_RandomOpt[m_RandomOptSpecial[1][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptSpecial[2][i]; i++){
                        c.A_weapon2_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[2][i]][1], m_RandomOpt[m_RandomOptSpecial[2][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptSpecial[3][i]; i++){
                        c.A_weapon2_ropt4.options[i] = new Option(m_RandomOpt[m_RandomOptSpecial[3][i]][1], m_RandomOpt[m_RandomOptSpecial[3][i]][0]);
                    }
                }
            }else{ // melee weapons
                if(m_RandomOptSpecialWeapons.includes(parseInt(n_A_Equip[1])) || m_RandomOptForgedWeapons.includes(parseInt(n_A_Equip[1])) || parseInt(n_A_Equip[1]) == 0){
                    RandOptWeapon2Reset();
                    for(i = 0; "NULL" != m_RandomOptMelee[0][i]; i++){
                        c.A_weapon2_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptMelee[0][i]][1], m_RandomOpt[m_RandomOptMelee[0][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptMelee[1][i]; i++){
                        c.A_weapon2_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptMelee[1][i]][1], m_RandomOpt[m_RandomOptMelee[1][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptMelee[2][i]; i++){
                        c.A_weapon2_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptMelee[2][i]][1], m_RandomOpt[m_RandomOptMelee[2][i]][0]);
                    }
                    c.A_weapon2_ropt4.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
                }
            }
        }
        var _ = Math.max(document.documentElement.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth);
            1262 <= _ && _ < 1480 || _ < 1013 ? (c.A_weapon2.style.width = "95%",
                c.A_cardshortLeft.style.width = "95%",
                c.A_weapon2_card1.style.width = "95%",
                c.A_weapon2_card2.style.width = "95%",
                c.A_weapon2_card3.style.width = "95%",
                c.A_weapon2_card4.style.width = "95%") : (c.A_weapon2.style.width = "auto",
                    c.A_cardshortLeft.style.width = "auto",
                    c.A_weapon2_card1.style.width = "208px",
                    c.A_weapon2_card2.style.width = "208px",
                    c.A_weapon2_card3.style.width = "208px",
                    c.A_weapon2_card4.style.width = "208px");
    } else
        c.A_weapon2.value = 0,
            myInnerHtml("A_weapon2refine", "", 0),
            myInnerHtml("A_weapon2_cardshort", "", 0),
            myInnerHtml("nA_weapon2_c1", "", 0),
            myInnerHtml("nA_weapon2_c2", "", 0),
            myInnerHtml("nA_weapon2_c3", "", 0),
            myInnerHtml("nA_weapon2_c4", "", 0),
            myInnerHtml("nA_weapon2_ropt1", "", 0),
            myInnerHtml("nA_weapon2_ropt2", "", 0),
            myInnerHtml("nA_weapon2_ropt3", "", 0),
            myInnerHtml("nA_weapon2_ropt4", "", 0),
            n_Nitou = 0;
    n_Nitou && (n_A_Equip[1] = 1 * c.A_weapon2.value,
        ActiveSkillSetPlus(),
        ClickB_Item(n_A_Equip[1]))
}
function ClickActiveSkill() {
    n_A_ActiveSkill = 1 * c.A_ActiveSkill.value,
        n_A_ActiveSkill >= 5e3 ? (n_A_ActiveSkillLV = m_EnableSkill[n_A_ActiveSkill - 5e3][3],
            n_A_ActiveSkill = m_EnableSkill[n_A_ActiveSkill - 5e3][2]) : n_A_ActiveSkill >= 3e3 ? (n_A_ActiveSkillLV = m_EnableSkill[n_A_ActiveSkill - 3e3][3],
                n_A_ActiveSkill = m_EnableSkill[n_A_ActiveSkill - 3e3][2]) : n_A_ActiveSkill >= 2e3 ? (n_A_ActiveSkillLV = m_AutoSpellSkill[n_A_ActiveSkill - 2e3][3],
                    n_A_ActiveSkill = m_AutoSpellSkill[n_A_ActiveSkill - 2e3][2]) : (n_A_ActiveSkillLV = m_Skill[n_A_ActiveSkill][1],
                        14 != n_A_JobClass2() || 128 != n_A_ActiveSkill && 133 != n_A_ActiveSkill || (n_A_ActiveSkillLV = 10));
    var e = c.A_ActiveSkillLV.length;
    for (i = 0; i < e; i++)
        c.A_ActiveSkillLV.options[0] = null;
    if (n_A_ActiveSkill >= 0)
        for (i = 1; i <= n_A_ActiveSkillLV; i++)
            c.A_ActiveSkillLV.options[i - 1] = new Option("Lvl " + i, i);
    1 == m_Skill[n_A_ActiveSkill][1] ? c.A_ActiveSkillLV.style.visibility = "hidden" : (c.A_ActiveSkillLV.style.visibility = "visible",
        c.A_ActiveSkillLV.value = n_A_ActiveSkillLV),
        ClickActiveSkill2()
}
function BClickAtkSkill() {
    if (444 == (n_B_AtkSkill = 1 * c.B_AtkSkill.value) || 445 == n_B_AtkSkill)
        for (myInnerHtml("BBSkill", 'Players in Range: <select name="BSkillSubNum" onChange="calc()"></select>', 0),
            i = 1; i <= 99; i++)
            c.BSkillSubNum.options[i - 1] = new Option(i, i);
    else if (489 == n_B_AtkSkill)
        myInnerHtml("BBSkill", 'Enemy Remaining HP: <input type="text" inputmode="numeric" name="BSkillSubNum" onkeypress="return isNumeric(event)" onkeyup="calc()" value="' + n_B[6] + '" size="7" class="center">', 0);
    else if (125 == n_B_AtkSkill) {
        myInnerHtml("BBSkill", 'Meteors landing on Player: <select name="BSkillSubNum" onChange="calc()"></select>', 0);
        var e;
        e = m_Monster[n_B[0]][2 * c.B_AtkSkill.selectedIndex + 22];
        var _ = 2 + Math.floor(e / 2);
        for (i = 1; i <= _; i++)
            c.BSkillSubNum.options[i - 1] = new Option(i, i);
        c.BSkillSubNum.value = 2
    } else if (131 == n_B_AtkSkill) {
        for (myInnerHtml("BBSkill", 'Hits: <select name="BSkillSubNum" onChange="calc()"></select>', 0),
            i = 1; i <= 15; i++)
            c.BSkillSubNum.options[i - 1] = new Option(i, i);
        c.BSkillSubNum.value = 3
    } else if (PvP)
        if (66 == n_B_AtkSkill || 326 == n_B_AtkSkill)
            myInnerHtml("BBSkill", 'Cart weight: <input type="text" inputmode="numeric" maxlength="4" name="BSkillSubNum" value="8000" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0);
        else if (88 == n_B_AtkSkill) {
            for (myInnerHtml("BBSkill", 'Poison React Lvl: <select name="BSkillSubNum" onChange="calc()"></select>', 0),
                i = 0; i <= 10; i++)
                c.BSkillSubNum.options[i] = new Option(i, i);
            c.BSkillSubNum.value = 0,
                14 == n_A_JobClass2() && (c.BSkillSubNum.value = 0)
        } else if (197 == n_B_AtkSkill)
            myInnerHtml("BBSkill", 'Remaining SP: <input type="text" inputmode="numeric" maxlength="5" name="BSkillSubNum" value="0" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0),
                c.BSkillSubNum.value = 0;
        else if (394 == n_B_AtkSkill) {
            for (myInnerHtml("BBSkill", '<select name="BSkillSubNum" onChange="calc()"></select>', 0),
                i = 0; i <= 4; i++)
                c.BSkillSubNum.options[i] = new Option(m_Syuriken[i][2], i);
            c.BSkillSubNum.value = 0
        } else if (395 == n_B_AtkSkill) {
            for (myInnerHtml("BBSkill", '<select name="BSkillSubNum" onChange="calc()"></select>', 0),
                i = 0; i <= 4; i++)
                c.BSkillSubNum.options[i] = new Option(m_Kunai[i][2], i);
            c.BSkillSubNum.value = 0
        } else if (405 == n_B_AtkSkill)
            myInnerHtml("BBSkill", 'Remaining HP: <input type="text" inputmode="numeric" maxlength="5" name="BSkillSubNum" value="0" size=3 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0);
        else if (429 == n_B_AtkSkill) {
            var n = ["1", "1.2", "1.6", "2", "2.4", "3", "3.6", "4", "5", "6", "7", "8", "9", "10"];
            for (myInnerHtml("BBSkill", 'Hits (considering the success chance): <select name="BSkillSubNum" onChange="calc()"></select>', 0),
                i = 0; i <= 13; i++)
                c.BSkillSubNum.options[i] = new Option(n[i] + " hits", i);
            c.BSkillSubNum.value = 6
        } else if (308 == n_B_AtkSkill) {
            myInnerHtml("BBSkill", 'Enemy distance: <select name="BSkillSubNum" onChange="calc()"></select>', 0);
            var l = ["0~3 Cells", "4~6 Cells", "7~9 Cells", "10~12 Cells", "13+ Cells"];
            for (i = 0; i <= 4; i++)
                c.BSkillSubNum.options[i] = new Option(l[i], i);
            c.BSkillSubNum.value = 4
        } else
            myInnerHtml("BBSkill", 159 == n_B_AtkSkill || 384 == n_B_AtkSkill || 324 == n_B_AtkSkill ? 'Shield weight: <input type="text" inputmode="numeric" maxlength="5" name="BSkillSubNum" value="0" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()"><BR>Enemy STR: <input type="text" inputmode="numeric" maxlength="3" name="BSkillSubNum2" value="0" size=1 onkeypress="return isNumeric(event)" onkeyup="calc()">' : 259 == n_B_AtkSkill ? 'Weapon weight: <input type="text" inputmode="numeric" maxlength="5" name="BSkillSubNum" value="0" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()"><BR>Enemy STR: <input type="text" inputmode="numeric" maxlength="3" name="BSkillSubNum2" value="0" size=1 onkeypress="return isNumeric(event)" onkeyup="calc()">' : "", 0);
    else
        myInnerHtml("BBSkill", "", 0);
    calc(),
        957 == n_A_Equip[7] && calc()
}
function ClickActiveSkill2() {
    if (66 == n_A_ActiveSkill || 326 == n_A_ActiveSkill)
        myInnerHtml("AASkill", 'Cart weight: <input type="text" inputmode="numeric" maxlength="4" name="SkillSubNum" value="8000" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0);
    else if (131 == n_A_ActiveSkill) {
        for (myInnerHtml("AASkill", 'Hits: <select name="SkillSubNum" onChange="calc()"></select>', 0),
            i = 1; i <= 15; i++)
            c.SkillSubNum.options[i - 1] = new Option(i, i);
        c.SkillSubNum.value = 3
    } else if (88 == n_A_ActiveSkill) {
        for (myInnerHtml("AASkill", 'Poison React Lvl: <select name="SkillSubNum" onChange="calc()"></select>', 0),
            i = 0; i <= 10; i++)
            c.SkillSubNum.options[i] = new Option(i, i);
        c.SkillSubNum.value = 0,
            14 == n_A_JobClass2() && (c.SkillSubNum.value = 0)
    } else if (197 == n_A_ActiveSkill)
        myInnerHtml("AASkill", 'Remaining SP: <input type="text" inputmode="numeric" maxlength="5" name="SkillSubNum" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0),
            c.SkillSubNum.value = n_A_MaxSP - 1;
    else if (394 == n_A_ActiveSkill) {
        for (myInnerHtml("AASkill", '<select name="SkillSubNum" onChange="calc()"></select>', 0),
            i = 0; i <= 4; i++)
            c.SkillSubNum.options[i] = new Option(m_Syuriken[i][2], i);
        c.SkillSubNum.value = 0
    } else if (395 == n_A_ActiveSkill) {
        for (myInnerHtml("AASkill", '<select name="SkillSubNum" onChange="calc()"></select>', 0),
            i = 0; i <= 4; i++)
            c.SkillSubNum.options[i] = new Option(m_Kunai[i][2], i);
        c.SkillSubNum.value = 0
    } else if (405 == n_A_ActiveSkill) {
        myInnerHtml("AASkill", 'Remaining HP: <input type="text" inputmode="numeric" maxlength="5" name="SkillSubNum" size=3 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0),
            c.SkillSubNum.value = n_A_MaxHP - 1;
    } else if (429 == n_A_ActiveSkill) {
        var e = ["1", "1.2", "1.6", "2", "2.4", "3", "3.6", "4", "5", "6", "7", "8", "9", "10"];
        for (myInnerHtml("AASkill", 'Hits (considering the success chance): <select name="SkillSubNum" onChange="calc()"></select>', 0),
            i = 0; i <= 13; i++)
            c.SkillSubNum.options[i] = new Option(e[i] + " hits", i);
        c.SkillSubNum.value = 6
    } else if (611 == n_A_ActiveSkill) {
        myInnerHtml("AASkill", 'Immobilized: <input type="checkbox" name="SkillSubNum" onclick="calc()">', 0);
        c.SkillSubNum.value = 0;
    } else if (!SkillSearch(441) || 51 != n_A_ActiveSkill && 54 != n_A_ActiveSkill && 56 != n_A_ActiveSkill && 540 != n_A_ActiveSkill && 541 != n_A_ActiveSkill && 542 != n_A_ActiveSkill)
        if (308 == n_A_ActiveSkill) {
            myInnerHtml("AASkill", 'Enemy distance: <select name="SkillSubNum" onChange="calc()"></select>', 0);
            var _ = ["0~3 Cells", "4~6 Cells", "7~9 Cells", "10~12 Cells", "13+ Cells"];
            for (i = 0; i <= 4; i++)
                c.SkillSubNum.options[i] = new Option(_[i], i);
            c.SkillSubNum.value = 4
        } else
            159 == n_A_ActiveSkill || 384 == n_A_ActiveSkill || 324 == n_A_ActiveSkill ? (myInnerHtml("AASkill", 'Shield weight: <input type="text" inputmode="numeric" maxlength="4" name="SkillSubNum" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0),
                c.SkillSubNum.value = m_Item[n_A_Equip[5]][6]) : 259 == n_A_ActiveSkill ? (myInnerHtml("AASkill", 'Weapon weight: <input type="text" inputmode="numeric" maxlength="4" name="SkillSubNum" size=2 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0),
                    c.SkillSubNum.value = m_Item[n_A_Equip[0]][6]) : myInnerHtml("AASkill", "", 0), myInnerHtml("ABSkill", "", 0);
    else {
        var n = SkillSearch(441) + 3;
        myInnerHtml("AASkill", 'Double Bolt chance: <select name="SkillSubNum" onChange="calc()"></select>', 0),
            c.SkillSubNum.options[0] = new Option("Bad luck (0%)", 0),
            c.SkillSubNum.options[1] = new Option("Average chance (" + 10 * n + "%)", n),
            c.SkillSubNum.options[2] = new Option("Good luck (100%)", 10),
            c.SkillSubNum.value = n
    }
}
function SaveTheme() {
    "undefined" == typeof Storage ? alert("Sorry, your browser does not support local storage. Please let me know if you see this message at tnaab on Discord") : (SaveData = new Array,
        SaveData[0] = 1,
        SaveData[1] = c.theme.value,
        SaveData[2] = 1 * c.server.value,
        slotNum = 20,
        localStorage["Slot" + slotNum] = JSON.stringify(SaveData))
}
function LoadTheme() {
    "undefined" == typeof Storage ? alert("Sorry, your browser does not support local storage. If you see this message, please let me know at tnaab on Discord") : (slotNum = 20,
        SaveData = new Array,
        void 0 === localStorage["Slot" + slotNum] ? (c.theme.value = 0,
            c.server.value = 0) : (SaveData = JSON.parse(localStorage["Slot" + slotNum]),
                c.theme.value = SaveData[1],
                void 0 !== SaveData[2] && (c.server.value = SaveData[2]))),
        themes()
}
function themes() {
    var e = c.theme.value;
    document.body.style.backgroundColor = bBGC[e];
    for (var _ = document.querySelectorAll("h1"), n = 0; n < _.length; n++)
        _[n].style.backgroundImage = "linear-gradient(to bottom, " + hBGC1[e] + ", " + hBGC2[e] + ")";
    var l = document.querySelectorAll("h3");
    for (n = 0; n < l.length; n++)
        l[n].style.backgroundImage = "linear-gradient(to bottom, " + hBGC1[e] + ", " + hBGC2[e] + ")";
    var i = document.querySelectorAll(".links");
    for (n = 0; n < i.length; n++)
        i[n].style.backgroundImage = "linear-gradient(to bottom, " + hBGC1[e] + ", " + hBGC2[e] + ")";
    var t = document.querySelectorAll("select");
    for (n = 0; n < t.length; n++)
        t[n].style.backgroundColor = selBGC[e];
    var a = document.querySelectorAll(".subheader select");
    for (n = 0; n < a.length; n++)
        a[n].style.backgroundColor = ssBGC[e];
    var o = document.querySelectorAll(".subheader");
    for (n = 0; n < o.length; n++)
        o[n].style.backgroundColor = sBGC[e];
    var A = document.querySelectorAll(".main");
    for (n = 0; n < A.length; n++)
        A[n].style.backgroundColor = mBGC[e];
    if (5 == e || 3 == e)
        for (n = 0; n < A.length; n++)
            A[n].style.color = "#DDD";
    else
        for (n = 0; n < A.length; n++)
            A[n].style.color = "#000";
    var r = document.querySelectorAll(".tborderA");
    for (n = 0; n < r.length; n++)
        r[n].style.backgroundColor = tBGC[e];
    var s = document.querySelectorAll(".tborder");
    for (n = 0; n < s.length; n++)
        s[n].style.backgroundColor = tBGC[e];
    A2(0),
        A3(0),
        A4(0),
        A6(0),
        A7(0),
        A8(0),
        A9(0),
        A10(0),
        AI(0),
        AK(0),
        SaveTheme()
}
function addCSSRule(e, _, n, l) {
    "insertRule" in e ? e.insertRule(_ + "{" + n + "}", l) : "addRule" in e && e.addRule(_, n, l)
}
bBGC = ["#CDF", "#CCC", "#FDC", "#313", "#000", "#000"],
    hBGC1 = ["#355", "#57D", "#B44", "#622", "#444", "#444"],
    hBGC2 = ["#477", "#24A", "#A33", "#411", "#222", "#222"],
    selBGC = ["#FC8", "#FC8", "#FC8", "#FC8", "#AAA", "#AAA"],
    ssBGC = ["#DEE", "#DDE", "#FCC", "#EBE", "#AAA", "#AAA"],
    sBGC = ["#466", "#36B", "#A33", "#727", "#000", "#000"],
    saBGC = ["#A52", "#811", "#3A3", "#A11", "#A11", "#A11"],
    mBGC = ["#FFF", "#FFF", "#FFF", "#311", "#555", "#555"],
    tBGC = ["#FFF", "#FFF", "#FFF", "#522", "#555", "#555"];
var sheet = function () {
    var e = document.createElement("style");
    return e.appendChild(document.createTextNode("")),
        document.head.appendChild(e),
        e.sheet
}();
function BufSW(e) {
    if (SRV = 1 * c.server.value,
        n_SkillSW = e,
        n_SkillSW) {
        for (_ = '<TR><TD id="A2TD" ColSpan="6" class="subheader point" onclick="BufSW(0)">Supportive / Party Skills <span id="A2used"></span>',
            _ += '<div class="right">(click to hide)</div></TD></TR>',
            _ += '<TR class="center">',
            _ += '<TD ColSpan="2" class="data"><B><U>Gospel Effects</U></B></TD>',
            _ += '<TD ColSpan="2" class="data"><B><U>Acolyte Class Buffs</U></B></TD>',
            _ += '<TD ColSpan="2"><B><U>Other Party Buffs</U></B></TD>',
            _ += "</TR><TR>",
            _ += '<TD id="EN50"></TD><TD class="data"></TD>',
            _ += '<TD id="AS0_1" class="center">Blessing</TD><TD id="AS0_2" class="data"></TD>',
            _ += '<TD id="AS6_1" class="center">Andrenaline Rush</TD><TD id="AS6_2"></TD>',
            _ += "</TR><TR>",
            _ += '<TD id="EN51"></TD><TD class="data"></TD>',
            _ += '<TD id="AS1_1" class="center">Increase Agi</TD><TD id="AS1_2" class="data"></TD>',
            _ += '<TD id="AS7_1" class="center">Weapon Perfection</TD><TD id="AS7_2"></TD>',
            _ += "</TR><TR>",
            _ += '<TD id="EN52"></TD><TD class="data"></TD>',
            _ += '<TD id="AS4_1" class="center">Angelus</TD><TD id="AS4_2" class="data"></TD>',
            _ += '<TD id="AS8_1" class="center">' + skillName(154, SRV) + '</TD><TD id="AS8_2"></TD>',
            _ += "</TR><TR>",
            _ += '<TD id="EN53"></TD><TD class="data"></TD>',
            _ += '<TD id="AS2_1" class="center">Impositio Manus</TD><TD id="AS2_2" class="data"></TD>',
            _ += '<TD id="AS9_1" class="center">Wind Walker</TD><TD id="AS9_2"></TD>',
            _ += "</TR><TR>",
            _ += '<TD id="EN55"></TD><TD class="data"></TD>',
            _ += '<TD id="AS3_1" class="center">Gloria</TD><TD id="AS3_2" class="data"></TD>',
            _ += '<TD id="" class="center">' + skillName(157, SRV) + '</TD><TD id="AS13_2"></TD>',
            _ += "</TR><TR>",
            _ += '<TD id="EN54"></TD><TD class="data"></TD>',
            _ += '<TD id="AS10_1" class="center">Suffragium</TD><TD id="AS10_2" class="data"></TD>',
            _ += '<TD id="" class="center">Shield Reflect</TD><TD id="AS14_2"></TD>',
            _ += "</TR><TR>",
            _ += '<TD></TD><TD class="data"></TD>',
            _ += '<TD id="AS5_1" class="center">Assumptio</TD><TD id="AS5_2" class="data"></TD>',
            _ += '<TD id="" class="center">' + skillName(165, SRV) + '</TD><TD id="AS15_2"></TD>',
            _ += "</TR><TR>",
            _ += '<TD></TD><TD class="data"></TD>',
            _ += '<TD id="AS12_1" class="center"># of Spirit Spheres</TD><TD id="AS12_2" class="data"></TD>',
            _ += '<TD id="AS11_1" class="center">' + skillName(164, SRV) + '</TD><TD id="AS11_2"></TD>',
            myInnerHtml("SIENSKILL", _ += "</TR>", 0),
            myInnerHtml("AS0_2", '<select name="A2_Skill0" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS1_2", '<select name="A2_Skill1" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS2_2", '<select name="A2_Skill2" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS3_2", '<input type="checkbox" name="A2_Skill3" onClick="A2(1)">', 0),
            myInnerHtml("AS4_2", '<select name="A2_Skill4" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS5_2", '<input type="checkbox" name="A2_Skill5" onClick="A2(1)">', 0),
            myInnerHtml("AS6_2", '<select name="A2_Skill6" onChange="A2(1)" style="width:50px;"></select>', 0),
            myInnerHtml("AS7_2", '<input type="checkbox" name="A2_Skill7" onClick="A2(1)">', 0),
            myInnerHtml("AS8_2", '<input type="checkbox" name="A2_Skill8" onClick="A2(1)">', 0),
            myInnerHtml("AS9_2", '<select name="A2_Skill9" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS10_2", '<select name="A2_Skill10" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS11_2", '<select name="A2_Skill11" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS12_2", '<select name="A2_Skill12" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS13_2", '<select name="A2_Skill13" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS14_2", '<select name="A2_Skill14" onChange="A2(1)"></select>', 0),
            myInnerHtml("AS15_2", '<select name="A2_Skill15" onChange="A2(1)"></select>', 0),
            myInnerHtml("EN50", '<input type="checkbox" name="A5_Skill0" onClick="A2(1)">All Stats +20', 0),
            myInnerHtml("EN51", '<input type="checkbox" name="A5_Skill1" onClick="A2(1)">HP +100%', 0),
            myInnerHtml("EN52", '<input type="checkbox" name="A5_Skill2" onClick="A2(1)">SP +100%', 0),
            myInnerHtml("EN53", '<input type="checkbox" name="A5_Skill3" onClick="A2(1)">ATK +100%', 0),
            myInnerHtml("EN54", '<input type="checkbox" name="A5_Skill4" onClick="A2(1)">HIT & FLEE +50', 0),
            myInnerHtml("EN55", '<input type="checkbox" name="A5_Skill5" onClick="A2(1)">DEF +25%', 0),
            i = 0; i <= 10; i++)
            c.A2_Skill0.options[i] = new Option(i, i),
                c.A2_Skill1.options[i] = new Option(i, i),
                c.A2_Skill4.options[i] = new Option(i, i),
                c.A2_Skill9.options[i] = new Option(i, i),
                c.A2_Skill13.options[i] = new Option(i, i),
                c.A2_Skill14.options[i] = new Option(i, i);
        for (i = 0; i <= 5; i++)
            c.A2_Skill2.options[i] = new Option(i, i),
                c.A2_Skill11.options[i] = new Option(i, i),
                c.A2_Skill12.options[i] = new Option(i, i),
                c.A2_Skill15.options[i] = new Option(i, i);
        for (45 == n_A_JOB ? (myInnerHtml("AS12_1", "<S># of Spirit Spheres</S>", 0),
            c.A2_Skill12.disabled = !0,
            c.A2_Skill12.value = 0,
            n_A_Buf2[12] = 0) : (myInnerHtml("AS12_1", "# of Spirit Spheres", 0),
                c.A2_Skill12.disabled = !1),
            13 == n_A_JOB || 27 == n_A_JOB ? (myInnerHtml("AS11_1", "<S>" + skillName(164, SRV) + "</S>", 0),
                document.getElementById("AS11_1").style.textDecoration = "line-through",
                c.A2_Skill11.disabled = !0,
                c.A2_Skill11.value = 0,
                n_A_Buf2[11] = 0) : (myInnerHtml("AS11_1", skillName(164, SRV), 0),
                    document.getElementById("AS11_1").style.textDecoration = "",
                    c.A2_Skill11.disabled = !1),
            i = 0; i <= 3; i++)
            c.A2_Skill10.options[i] = new Option(i, i);
        c.A2_Skill6.options[0] = new Option("OFF", 0),
            c.A2_Skill6.options[1] = new Option("Regular AR", 1),
            c.A2_Skill6.options[2] = 10 == SRV ? new Option("Full AR", 2) : new Option("Advanced AR", 2),
            c.A2_Skill6.options[3] = new Option("AR Scroll", 3),
            c.A2_Skill0.value = n_A_Buf2[0],
            c.A2_Skill1.value = n_A_Buf2[1],
            c.A2_Skill2.value = n_A_Buf2[2],
            c.A2_Skill3.checked = n_A_Buf2[3],
            c.A2_Skill4.value = n_A_Buf2[4],
            c.A2_Skill5.checked = n_A_Buf2[5],
            c.A2_Skill6.value = n_A_Buf2[6],
            c.A2_Skill7.checked = n_A_Buf2[7],
            c.A2_Skill8.checked = n_A_Buf2[8],
            c.A2_Skill9.value = n_A_Buf2[9],
            c.A2_Skill10.value = n_A_Buf2[10],
            c.A2_Skill11.value = n_A_Buf2[11],
            c.A2_Skill12.value = n_A_Buf2[12],
            c.A2_Skill13.value = n_A_Buf2[13],
            c.A2_Skill14.value = n_A_Buf2[14],
            c.A2_Skill15.value = n_A_Buf2[15],
            c.A5_Skill0.checked = n_A_Buf2[16],
            c.A5_Skill1.checked = n_A_Buf2[17],
            c.A5_Skill2.checked = n_A_Buf2[18],
            c.A5_Skill3.checked = n_A_Buf2[19],
            c.A5_Skill4.checked = n_A_Buf2[20],
            c.A5_Skill5.checked = n_A_Buf2[21]
    } else {
        var _;
        _ = '<TR><TD id="A2TD" class="subheader point" onclick="BufSW(1)">Supportive / Party Skills <span id="A2used"></span>',
            myInnerHtml("SIENSKILL", _ += '<div class="right">(click to show)</div></TD></TR>', 0)
    }
    A2(0)
}
function A2(e) {
    1 == e && calc();
    for (var _ = 0, n = 0; n <= 21; n++)
        if (0 != n_A_Buf2[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("A2TD").style.backgroundColor = sBGC[l],
        myInnerHtml("A2used", "", 0)) : (document.getElementById("A2TD").style.backgroundColor = saBGC[l],
            myInnerHtml("A2used", " [active]", 0))
}
function Buf3SW(e) {
    if (n_Skill3SW = e,
        n_Skill3SW) {
        n = '<TR><TD id="A3TD" ColSpan="6" class="subheader point" onclick="Buf3SW(0)" style="text-align:left;">Music and Dance Skills <span id="A3used"></span>',
            n += '<div class="right">(click to hide)</div></TD></TR>',
            n += '<TR><TD id="EN0_1"></TD><TD id="EN0_2" class="data"></TD><TD id="EN0_3"></TD><TD id="EN0_4" class="data"></TD><TD id="EN0_5"></TD><TD id="EN0_6"></TD></TR>',
            n += '<TR><TD id="EN1_1"></TD><TD id="EN1_2" class="data"></TD><TD id="EN1_3"></TD><TD id="EN1_4" class="data"></TD><TD id="EN1_5"></TD><TD id="EN1_6"></TD></TR>',
            n += '<TR><TD id="EN2_1"></TD><TD id="EN2_2" class="data"></TD><TD id="EN2_3" style="line-height:165%;"></TD><TD id="EN2_4" class="data"></TD><TD id="EN2_5"></TD><TD id="EN2_6"></TD></TR>',
            n += '<TR><TD id="EN3_1"></TD><TD id="EN3_2" class="data"></TD><TD id="EN3_3"></TD><TD id="EN3_4" class="data"></TD><TD id="EN3_5"></TD><TD id="EN3_6"></TD></TR>',
            n += '<TR><TD id="EN4_1"></TD><TD id="EN4_2" class="data"></TD><TD id="EN4_3"></TD><TD id="EN4_4" class="data"></TD><TD id="EN4_5"></TD><TD id="EN4_6"></TD></TR>',
            n += '<TR><TD id="EN5_1"></TD><TD id="EN5_2" class="data"></TD><TD id="EN5_3"></TD><TD id="EN5_4" class="data"></TD><TD id="EN5_5"></TD><TD id="EN5_6"></TD></TR>',
            n += '<TR><TD id="EN6_1" class="dotB"></TD><TD id="EN6_2" class="data dotB"></TD><TD id="EN6_3" class="dotB"></TD><TD id="EN6_4" class="data dotB"></TD><TD id="EN6_5" class="dotB"></TD><TD id="EN6_6" class="dotB"></TD></TR>',
            n += '<TR><TD id="EN7_1"></TD><TD id="EN7_2" class="data"></TD><TD id="EN8_1" ColSpan="3"></TD><TD id="EN8_2" class="left"></TD></TR>',
            n += '<TR><TD id="EN9_1" class="dotB"></TD><TD id="EN9_2" class="data dotB"></TD><TD id="EN10_1" class="dotB" ColSpan="3"></TD><TD id="EN10_2" class="dotB left"></TD></TR>',
            myInnerHtml("SP_SIEN01", n += '<TR style="text-align:left;"><TD colspan=6><span id="EN11_1"></span><span id="EN11_2"></span><span id="EN11_1a"></span></TD></TR>', 0);
        var _ = [202, 203, 204, 205, 210, 212, 213, 223, 217, 219, 220];
        for (i = 0; i <= 10; i++)
            myInnerHtml("EN" + i + "_1", skillName(_[i], 1 * c.server.value), 0);
        for (myInnerHtml("EN0_2", '<select name="A3_Skill0_1" onChange="Skill3SW_2()|A3(1)"></select>', 0),
            myInnerHtml("EN1_2", '<select name="A3_Skill1_1" onChange="Skill3SW_2()|A3(1)"></select>', 0),
            myInnerHtml("EN2_2", '<select name="A3_Skill2_1" onChange="Skill3SW_2()|A3(1)"></select>', 0),
            myInnerHtml("EN3_2", '<select name="A3_Skill3_1" onChange="Skill3SW_2()|A3(1)"></select>', 0),
            myInnerHtml("EN4_2", '<select name="A3_Skill4_1" onChange="Skill3SW_2()|A3(1)"></select>', 0),
            myInnerHtml("EN5_2", '<select name="A3_Skill5_1" onChange="Skill3SW_2()|A3(1)"></select>', 0),
            myInnerHtml("EN6_2", '<select name="A3_Skill6_1" onChange="Skill3SW_2()|A3(1)"></select>', 0),
            myInnerHtml("EN7_2", '<select name="A3_Skill7" onChange="A3(1)"></select>', 0),
            myInnerHtml("EN8_2", '<select name="A3_Skill8" onChange="A3(1)"></select>', 0),
            myInnerHtml("EN9_2", '<select name="A3_Skill9" onChange="A3(1)"></select>', 0),
            myInnerHtml("EN10_2", '<select name="A3_Skill10" onChange="A3(1)"></select>', 0),
            myInnerHtml("EN11_1", '<input type="checkbox" name="A3_Skill11" onClick="Skill3SW_2()|calc()">Marionette Control', 0),
            i = 0; i <= 10; i++)
            c.A3_Skill0_1.options[i] = new Option(i, i),
                c.A3_Skill1_1.options[i] = new Option(i, i),
                c.A3_Skill2_1.options[i] = new Option(i, i),
                c.A3_Skill3_1.options[i] = new Option(i, i),
                c.A3_Skill4_1.options[i] = new Option(i, i),
                c.A3_Skill5_1.options[i] = new Option(i, i),
                c.A3_Skill6_1.options[i] = new Option(i, i);
        for (i = 0; i <= 5; i++)
            c.A3_Skill7.options[i] = new Option(i, i),
                c.A3_Skill8.options[i] = new Option(i, i),
                c.A3_Skill9.options[i] = new Option(i, i),
                c.A3_Skill10.options[i] = new Option(i, i);
        c.A3_Skill0_1.value = n_A_Buf3[0],
            c.A3_Skill1_1.value = n_A_Buf3[1],
            c.A3_Skill2_1.value = n_A_Buf3[2],
            c.A3_Skill3_1.value = n_A_Buf3[3],
            c.A3_Skill4_1.value = n_A_Buf3[4],
            c.A3_Skill5_1.value = n_A_Buf3[5],
            c.A3_Skill6_1.value = n_A_Buf3[6],
            c.A3_Skill7.value = n_A_Buf3[7],
            c.A3_Skill8.value = n_A_Buf3[8],
            c.A3_Skill9.value = n_A_Buf3[9],
            c.A3_Skill10.value = n_A_Buf3[10],
            c.A3_Skill11.checked = n_A_Buf3[11],
            Skill3SW_2()
    } else {
        var n;
        for (n = '<TR><TD id="A3TD" class="subheader point" onclick="Buf3SW(1)" style="text-align:left;">Music and Dance Skills <span id="A3used"></span>',
            myInnerHtml("SP_SIEN01", n += '<div class="right">(click to show)</div></TD></TR>', 0),
            i = 0; i <= 11; i++)
            SWs3sw[i] = 0
    }
    A3(0)
}
function Skill3SW_2() {
    if (n_A_Buf3[0] = 1 * c.A3_Skill0_1.value,
        n_A_Buf3[1] = 1 * c.A3_Skill1_1.value,
        n_A_Buf3[2] = 1 * c.A3_Skill2_1.value,
        n_A_Buf3[3] = 1 * c.A3_Skill3_1.value,
        n_A_Buf3[4] = 1 * c.A3_Skill4_1.value,
        n_A_Buf3[5] = 1 * c.A3_Skill5_1.value,
        n_A_Buf3[6] = 1 * c.A3_Skill6_1.value,
        n_A_Buf3[11] = 1 * c.A3_Skill11.checked,
        0 != n_A_Buf3[0]) {
        if (0 == SWs3sw[0]) {
            for (0 == n_A_Buf3[20] && (n_A_Buf3[20] = 100,
                n_A_Buf3[30] = 10),
                myInnerHtml("EN0_3", "Bard's AGI", 0),
                myInnerHtml("EN0_4", '<select name="A3_Skill0_2" onChange="A3(1)"></select>', 0),
                myInnerHtml("EN0_5", "Musical Lessons", 0),
                myInnerHtml("EN0_6", '<select name="A3_Skill0_3" onChange="A3(1)"></select>', 0),
                i = 1; i <= 200; i++)
                c.A3_Skill0_2.options[i - 1] = new Option(i, i);
            for (i = 0; i <= 10; i++)
                c.A3_Skill0_3.options[i] = new Option(i, i);
            SWs3sw[0] = 1,
                c.A3_Skill0_2.value = n_A_Buf3[20],
                c.A3_Skill0_3.value = n_A_Buf3[30]
        }
    } else
        SWs3sw[0] = 0,
            myInnerHtml("EN0_3", "", 0),
            myInnerHtml("EN0_4", "", 0),
            myInnerHtml("EN0_5", "", 0),
            myInnerHtml("EN0_6", "", 0);
    if (0 != n_A_Buf3[1]) {
        if (0 == SWs3sw[1]) {
            for (0 == n_A_Buf3[21] && (n_A_Buf3[21] = 100,
                n_A_Buf3[31] = 10),
                myInnerHtml("EN1_3", "Bard's AGI", 0),
                myInnerHtml("EN1_4", '<select name="A3_Skill1_2" onChange="A3(1)"></select>', 0),
                myInnerHtml("EN1_5", "Musical Lessons", 0),
                myInnerHtml("EN1_6", '<select name="A3_Skill1_3" onChange="A3(1)"></select>', 0),
                i = 1; i <= 200; i++)
                c.A3_Skill1_2.options[i - 1] = new Option(i, i);
            for (i = 0; i <= 10; i++)
                c.A3_Skill1_3.options[i] = new Option(i, i);
            SWs3sw[1] = 1,
                c.A3_Skill1_2.value = n_A_Buf3[21],
                c.A3_Skill1_3.value = n_A_Buf3[31]
        }
    } else
        SWs3sw[1] = 0,
            myInnerHtml("EN1_3", "", 0),
            myInnerHtml("EN1_4", "", 0),
            myInnerHtml("EN1_5", "", 0),
            myInnerHtml("EN1_6", "", 0);
    if (0 != n_A_Buf3[2]) {
        if (0 == SWs3sw[2]) {
            for (0 == n_A_Buf3[22] && (n_A_Buf3[22] = 100,
                n_A_Buf3[29] = 100,
                n_A_Buf3[32] = 10),
                myInnerHtml("EN2_3", "Bard's DEX<br>Bard's INT", 0),
                myInnerHtml("EN2_4", '<select name="A3_Skill2_2" onChange="A3(1)"></select><br><select name="A3_Skill2_3" onChange="A3(1)"></select>', 0),
                myInnerHtml("EN2_5", "Musical Lessons", 0),
                myInnerHtml("EN2_6", '<select name="A3_Skill2_4" onChange="A3(1)"></select>', 0),
                i = 1; i <= 200; i++)
                c.A3_Skill2_2.options[i - 1] = new Option(i, i);
            for (i = 1; i <= 150; i++)
                c.A3_Skill2_3.options[i - 1] = new Option(i, i);
            for (i = 0; i <= 10; i++)
                c.A3_Skill2_4.options[i] = new Option(i, i);
            SWs3sw[2] = 1,
                c.A3_Skill2_2.value = n_A_Buf3[22],
                c.A3_Skill2_3.value = n_A_Buf3[29],
                c.A3_Skill2_4.value = n_A_Buf3[32]
        }
    } else
        SWs3sw[2] = 0,
            myInnerHtml("EN2_3", "", 0),
            myInnerHtml("EN2_4", "", 0),
            myInnerHtml("EN2_5", "", 0),
            myInnerHtml("EN2_6", "", 0);
    if (0 != n_A_Buf3[3]) {
        if (0 == SWs3sw[3]) {
            for (0 == n_A_Buf3[23] && (n_A_Buf3[23] = 100,
                n_A_Buf3[33] = 10),
                myInnerHtml("EN3_3", "Bard's VIT", 0),
                myInnerHtml("EN3_4", '<select name="A3_Skill3_2" onChange="A3(1)"></select>', 0),
                myInnerHtml("EN3_5", "Musical Lessons", 0),
                myInnerHtml("EN3_6", '<select name="A3_Skill3_3" onChange="A3(1)"></select>', 0),
                i = 1; i <= 200; i++)
                c.A3_Skill3_2.options[i - 1] = new Option(i, i);
            for (i = 0; i <= 10; i++)
                c.A3_Skill3_3.options[i] = new Option(i, i);
            SWs3sw[3] = 1,
                c.A3_Skill3_2.value = n_A_Buf3[23],
                c.A3_Skill3_3.value = n_A_Buf3[33]
        }
    } else
        SWs3sw[3] = 0,
            myInnerHtml("EN3_3", "", 0),
            myInnerHtml("EN3_4", "", 0),
            myInnerHtml("EN3_5", "", 0),
            myInnerHtml("EN3_6", "", 0);
    if (0 != n_A_Buf3[4]) {
        if (0 == SWs3sw[4]) {
            for (0 == n_A_Buf3[24] && (n_A_Buf3[24] = 130,
                n_A_Buf3[34] = 10),
                myInnerHtml("EN4_3", "Dancer's DEX", 0),
                myInnerHtml("EN4_4", '<select name="A3_Skill4_2" onChange="A3(1)"></select>', 0),
                myInnerHtml("EN4_5", "Dancing Lessons", 0),
                myInnerHtml("EN4_6", '<select name="A3_Skill4_3" onChange="A3(1)"></select>', 0),
                i = 1; i <= 200; i++)
                c.A3_Skill4_2.options[i - 1] = new Option(i, i);
            for (i = 0; i <= 10; i++)
                c.A3_Skill4_3.options[i] = new Option(i, i);
            SWs3sw[4] = 1,
                c.A3_Skill4_2.value = n_A_Buf3[24],
                c.A3_Skill4_3.value = n_A_Buf3[34]
        }
    } else
        SWs3sw[4] = 0,
            myInnerHtml("EN4_3", "", 0),
            myInnerHtml("EN4_4", "", 0),
            myInnerHtml("EN4_5", "", 0),
            myInnerHtml("EN4_6", "", 0);
    if (0 != n_A_Buf3[5]) {
        if (0 == SWs3sw[5]) {
            for (0 == n_A_Buf3[25] && (n_A_Buf3[25] = 50,
                n_A_Buf3[35] = 10),
                myInnerHtml("EN5_3", "Dancer's LUK", 0),
                myInnerHtml("EN5_4", '<select name="A3_Skill5_2" onChange="A3(1)"></select>', 0),
                myInnerHtml("EN5_5", "Dancing Lessons", 0),
                myInnerHtml("EN5_6", '<select name="A3_Skill5_3" onChange="A3(1)"></select>', 0),
                i = 1; i <= 200; i++)
                c.A3_Skill5_2.options[i - 1] = new Option(i, i);
            for (i = 0; i <= 10; i++)
                c.A3_Skill5_3.options[i] = new Option(i, i);
            SWs3sw[5] = 1,
                c.A3_Skill5_2.value = n_A_Buf3[25],
                c.A3_Skill5_3.value = n_A_Buf3[35]
        }
    } else
        SWs3sw[5] = 0,
            myInnerHtml("EN5_3", "", 0),
            myInnerHtml("EN5_4", "", 0),
            myInnerHtml("EN5_5", "", 0),
            myInnerHtml("EN5_6", "", 0);
    if (0 != n_A_Buf3[6]) {
        if (0 == SWs3sw[6]) {
            for (0 == n_A_Buf3[26] && (n_A_Buf3[26] = 50,
                n_A_Buf3[36] = 10),
                myInnerHtml("EN6_3", "Dancer's INT", 0),
                myInnerHtml("EN6_4", '<select name="A3_Skill6_2" onChange="A3(1)"></select>', 0),
                myInnerHtml("EN6_5", "Dancing Lessons", 0),
                myInnerHtml("EN6_6", '<select name="A3_Skill6_3" onChange="A3(1)"></select>', 0),
                i = 1; i <= 200; i++)
                c.A3_Skill6_2.options[i - 1] = new Option(i, i);
            for (i = 0; i <= 10; i++)
                c.A3_Skill6_3.options[i] = new Option(i, i);
            SWs3sw[6] = 1,
                c.A3_Skill6_2.value = n_A_Buf3[26],
                c.A3_Skill6_3.value = n_A_Buf3[36]
        }
    } else
        SWs3sw[6] = 0,
            myInnerHtml("EN6_3", "", 0),
            myInnerHtml("EN6_4", "", 0),
            myInnerHtml("EN6_5", "", 0),
            myInnerHtml("EN6_6", "", 0);
    if (0 != n_A_Buf3[11]) {
        if (0 == SWs3sw[11]) {
            for (myInnerHtml("EN11_2", '<br>Controller\'s Stats: <select name="A3_Skill11_STR" onChange="A3(1)"></select><select name="A3_Skill11_AGI" onChange="A3(1)"></select><select name="A3_Skill11_VIT" onChange="A3(1)"></select><select name="A3_Skill11_INT" onChange="A3(1)"></select><select name="A3_Skill11_DEX" onChange="A3(1)"></select><select name="A3_Skill11_LUK" onChange="A3(1)"></select><BR><input type="checkbox" name="A3_Skill11a" onClick="A3(1)">Status compensation (adjustment for equipment / human calculation)', 0),
                c.A3_Skill11_STR.options[0] = new Option("STR", 0),
                c.A3_Skill11_AGI.options[0] = new Option("AGI", 0),
                c.A3_Skill11_VIT.options[0] = new Option("VIT", 0),
                c.A3_Skill11_INT.options[0] = new Option("INT", 0),
                c.A3_Skill11_DEX.options[0] = new Option("DEX", 0),
                c.A3_Skill11_LUK.options[0] = new Option("LUK", 0),
                i = 1; i <= 99; i++)
                c.A3_Skill11_STR.options[i] = new Option(i, i),
                    c.A3_Skill11_AGI.options[i] = new Option(i, i),
                    c.A3_Skill11_VIT.options[i] = new Option(i, i),
                    c.A3_Skill11_INT.options[i] = new Option(i, i),
                    c.A3_Skill11_DEX.options[i] = new Option(i, i),
                    c.A3_Skill11_LUK.options[i] = new Option(i, i);
            SWs3sw[11] = 1,
                c.A3_Skill11_STR.value = n_A_Buf3[12],
                c.A3_Skill11_AGI.value = n_A_Buf3[13],
                c.A3_Skill11_VIT.value = n_A_Buf3[14],
                c.A3_Skill11_INT.value = n_A_Buf3[15],
                c.A3_Skill11_DEX.value = n_A_Buf3[16],
                c.A3_Skill11_LUK.value = n_A_Buf3[17],
                c.A3_Skill11a.checked = n_A_Buf3[18]
        }
    } else
        SWs3sw[11] = 0,
            myInnerHtml("EN11_2", "", 0)
}
function A3(e) {
    1 == e && calc();
    for (var _ = 0, n = 0; n <= 17; n++)
        if (11 != n && 0 != n_A_Buf3[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("A3TD").style.backgroundColor = sBGC[l],
        myInnerHtml("A3used", "", 0)) : (document.getElementById("A3TD").style.backgroundColor = saBGC[l],
            myInnerHtml("A3used", " [active]", 0))
}
function Buf4SW(e) {
    if (n_Skill4SW = e,
        n_Skill4SW) {
        for (_ = '<TR><TD id="A4TD" ColSpan="2" class="subheader point" onclick="Buf4SW(0)">Guild Skills <span id="A4used"></span>',
            _ += '<div class="right">(click to hide)</div></TD></TR>',
            _ += '<TR><TD id="EN40_1" class="center"></TD><TD id="EN40_2"></TD></TR>',
            _ += '<TR><TD id="EN41_1" class="center"></TD><TD id="EN41_2"></TD></TR>',
            _ += '<TR><TD id="EN42_1" class="center"></TD><TD id="EN42_2"></TD></TR>',
            _ += '<TR><TD id="EN43_1" class="center"></TD><TD id="EN43_2"></TD></TR>',
            myInnerHtml("SP_SIEN02", _ += '<TR><TD id="EN44_1" class="center"></TD><TD id="EN44_2"></TD></TR>', 0),
            name_CS4SW_SKILL = ["Battle Orders", "Great Leadership", "Wounds of Glory", "Soul of Cold", "Sharp Hawk Eyes"],
            i = 0; i <= 4; i++)
            myInnerHtml("EN4" + i + "_1", name_CS4SW_SKILL[i], 0);
        for (myInnerHtml("EN40_2", '<input type="checkbox" name="A3_Skill40" onClick="A4(1)">', 0),
            myInnerHtml("EN41_2", '<select name="A3_Skill41" onChange="A4(1)"></select>', 0),
            myInnerHtml("EN42_2", '<select name="A3_Skill42" onChange="A4(1)"></select>', 0),
            myInnerHtml("EN43_2", '<select name="A3_Skill43" onChange="A4(1)"></select>', 0),
            myInnerHtml("EN44_2", '<select name="A3_Skill44" onChange="A4(1)"></select>', 0),
            i = 0; i <= 5; i++)
            c.A3_Skill41.options[i] = new Option(i, i),
                c.A3_Skill42.options[i] = new Option(i, i),
                c.A3_Skill43.options[i] = new Option(i, i),
                c.A3_Skill44.options[i] = new Option(i, i);
        c.A3_Skill40.checked = n_A_Buf3[40],
            c.A3_Skill41.value = n_A_Buf3[41],
            c.A3_Skill42.value = n_A_Buf3[42],
            c.A3_Skill43.value = n_A_Buf3[43],
            c.A3_Skill44.value = n_A_Buf3[44]
    } else {
        var _;
        _ = '<TR><TD id="A4TD" class="subheader point" onclick="Buf4SW(1)">Guild Skills <span id="A4used"></span>',
            myInnerHtml("SP_SIEN02", _ += '<div class="right">(click to show)</div></TD></TR>', 0)
    }
    A4(0)
}
function A4(e) {
    1 == e && calc();
    for (var _ = 0, n = 40; n <= 44; n++)
        if (0 != n_A_Buf3[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("A4TD").style.backgroundColor = sBGC[l],
        myInnerHtml("A4used", "", 0)) : (document.getElementById("A4TD").style.backgroundColor = saBGC[l],
            myInnerHtml("A4used", " [active]", 0))
}
function Buf6SW(e) {
    if (n_Skill6SW = e,
        n_Skill6SW) {
        for (_ = '<TR><TD id="A6TD" ColSpan="4" class="subheader point" onclick="Buf6SW(0)">Miscellaneous Effects on Player<span id="A6used"></span>',
            _ += '<div class="right">(click to hide)</div></TD></TR>',
            _ += '<TR><TD id="EN60_1" class="right"></TD><TD id="EN60_2" class="data"></TD><TD class="right">Poison</TD><TD id="EN62_2"></TD></TR>',
            _ += '<TR><TD class="right">Provoke (self)</TD><TD id="EN63_2" class="data"></TD><TD class="right">Stun</TD><TD id="EN75_2"></TD></TR>',
            _ += '<TR><TD class="right">Mind Breaker (self)</TD><TD id="EN61_2" class="data"></TD><TD class="right">Freeze</TD><TD id="EN78_2"></TD></TR>',
            _ += '<TR><TD class="right">AGI Down</TD><TD id="EN66_2" class="data"></TD><TD class="right">Curse</TD><TD id="EN64_2"></TD></TR>',
            _ += '<TR><TD class="right">Quagmire</TD><TD id="EN68_2" class="data"></TD><TD class="right">Blind</TD><TD id="EN74_2"></TD></TR>',
            _ += '<TR><TD class="right">' + skillName(442, 1 * c.server.value) + '</TD><TD id="EN70_2" class="data"></TD><TD class="right">Sleep</TD><TD id="EN77_2"></TD></TR>',
            _ += '<TR><TD class="right">Undead Attribute Change</TD><TD id="EN65_2" class="data"></TD><TD class="right">Stone</TD><TD id="EN76_2"></TD></TR>',
            _ += '<TR><TD class="right">Holy Armor [B.S.S.]</TD><TD id="EN67_2" class="data"></TD><TD class="right">Bleeding</TD><TD id="EN80_2"></TD></TR>',
            _ += '<TR><TD class="right">Magnum Break Bonus</TD><TD id="EN69_2" class="data"></TD><TD class="right">Lex Aeterna</TD><TD id="EN79_2"></TD></TR>',
            _ += '<TR><TD class="right">Set CRIT to 0%</TD><TD id="EN71_2" class="data"></TD><TD class="right">Critical Wounds</TD><TD id="EN81_2"></TD></TR>',
            _ += '<TR><TD id="EN72_1" class="center" colspan="3">All Stats +1 [SuperNovice wife Undying Love bonus]</TD><TD id="EN72_2"></TD></TR>',
            myInnerHtml("SP_SIEN04", _ += '<TR><TD id="EN73_1" class="center" colspan="3"></TD><TD id="EN73_2"></TD></TR>', 0),
            myInnerHtml("EN60_1", '<select name="A6_Skill0" onChange="StAllCalc()"></select>', 0),
            myInnerHtml("EN60_2", '<select name="A6_Skill1" onChange="A6(1)"></select>', 0),
            myInnerHtml("EN61_2", '<select name="A6_Skill4" onChange="A6(1)"></select>', 0),
            myInnerHtml("EN62_2", '<input type="checkbox" name="A_debuf2" onClick="A6(1)">', 0),
            myInnerHtml("EN63_2", '<select name="A6_Skill5" onChange="A6(1)"></select>', 0),
            myInnerHtml("EN64_2", '<input type="checkbox" name="A_debuf3" onClick="A6(1)">', 0),
            myInnerHtml("EN65_2", '<input type="checkbox" name="A6_Skill8" onClick="A6(1)">', 0),
            myInnerHtml("EN66_2", '<select name="A_debuf1" onChange="A6(1)"></select>', 0),
            myInnerHtml("EN67_2", '<input type="checkbox" name="A6_Skill6" onClick="A6(1)">', 0),
            myInnerHtml("EN68_2", '<select name="A_debuf0" onChange="A6(1)"></select>', 0),
            myInnerHtml("EN69_2", '<input type="checkbox" name="A6_Skill7" onClick="A6(1)">', 0),
            myInnerHtml("EN70_2", '<input type="checkbox" name="A6_Skill3" onClick="A6(1)">', 0),
            myInnerHtml("EN71_2", '<input type="checkbox" name="A6_Skill9" onClick="A6(1)">', 0),
            myInnerHtml("EN72_2", '<input type="checkbox" name="A6_Skill10" onClick="A6(1)">', 0),
            myInnerHtml("EN74_2", '<input type="checkbox" name="A6_Skill11" onClick="A6(1)">', 0),
            myInnerHtml("EN75_2", '<input type="checkbox" name="A6_Skill12" onClick="A6(1)">', 0),
            myInnerHtml("EN76_2", '<input type="checkbox" name="A6_Skill13" onClick="A6(1)">', 0),
            myInnerHtml("EN77_2", '<input type="checkbox" name="A6_Skill14" onClick="A6(1)">', 0),
            myInnerHtml("EN78_2", '<input type="checkbox" name="A6_Skill15" onClick="A6(1)">', 0),
            myInnerHtml("EN79_2", '<input type="checkbox" name="A6_Skill16" onClick="A6(1)">', 0),
            myInnerHtml("EN80_2", '<input type="checkbox" name="A6_Skill17" onClick="A6(1)">', 0),
            myInnerHtml("EN81_2", '<select name="A6_Skill18" onChange="A6(1)"></select>', 0),
            c.A6_Skill0.options[0] = new Option("Volcano", 0),
            c.A6_Skill0.options[1] = new Option("Deluge", 1),
            c.A6_Skill0.options[2] = new Option("Violent Gale", 2),
            i = 0; i <= 5; i++)
            c.A6_Skill1.options[i] = new Option(i, i);
        for (i = 0; i <= 5; i++)
            c.A6_Skill4.options[i] = new Option(i, i),
                c.A6_Skill18.options[i] = new Option(i, i);
        for (i = 0; i <= 10; i++)
            c.A6_Skill5.options[i] = new Option(i, i);
        for (c.A_debuf0.options[0] = new Option("-", 0),
            i = 1; i <= 5; i++)
            c.A_debuf0.options[i] = new Option(i, i);
        for (c.A_debuf1.options[0] = new Option("-", 0),
            i = 1; i <= 10; i++)
            c.A_debuf1.options[i] = new Option("Lvl " + i, i);
        c.A_debuf1.options[11] = new Option("Lvl 46", 46),
            c.A6_Skill0.value = n_A_Buf6[0],
            c.A6_Skill1.value = n_A_Buf6[1],
            c.A6_Skill3.checked = n_A_Buf6[3],
            c.A6_Skill4.value = n_A_Buf6[4],
            c.A6_Skill5.value = n_A_Buf6[5],
            c.A6_Skill6.checked = n_A_Buf6[6],
            c.A6_Skill7.checked = n_A_Buf6[7],
            c.A6_Skill8.checked = n_A_Buf6[8],
            c.A6_Skill9.checked = n_A_Buf6[9],
            c.A6_Skill10.checked = n_A_Buf6[10],
            c.A6_Skill11.checked = n_A_Buf6[11],
            c.A6_Skill12.checked = n_A_Buf6[12],
            c.A6_Skill13.checked = n_A_Buf6[13],
            c.A6_Skill14.checked = n_A_Buf6[14],
            c.A6_Skill15.checked = n_A_Buf6[15],
            c.A6_Skill16.checked = n_A_Buf6[16],
            c.A6_Skill17.checked = n_A_Buf6[17],
            c.A6_Skill18.value = n_A_Buf6[18],
            c.A_debuf0.value = n_A_Buf6[19],
            c.A_debuf1.value = n_A_Buf6[20],
            c.A_debuf2.checked = n_A_Buf6[21],
            c.A_debuf3.checked = n_A_Buf6[22]
    } else {
        var _;
        _ = '<TR><TD id="A6TD" class="subheader point" onclick="Buf6SW(1)">Miscellaneous Effects on Player<span id="A6used"></span>',
            myInnerHtml("SP_SIEN04", _ += '<div class="right">(click to show)</div></TD></TR>', 0)
    }
    A6(0)
}
function A6(e) {
    1 == e && calc();
    for (var _ = 0, n = 0; n < n_A_Buf6.length; n++)
        if (0 != n && 0 != n_A_Buf6[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("A6TD").style.backgroundColor = sBGC[l],
        myInnerHtml("A6used", "", 0)) : (document.getElementById("A6TD").style.backgroundColor = saBGC[l],
            myInnerHtml("A6used", " [active]", 0))
}
function Buf7SW(e) {
    if (n_Skill7SW = e,
        n_Skill7SW) {
        for (_ = '<TR><TD id="A7TD" ColSpan="3" class="subheader point" onclick="Buf7SW(0)">Food / Speed Potions / other Items <span id="A7used"></span>',
            _ += '<div class="right">(click to hide)</div></TD></TR>',
            _ += '<TR><TD colspan="3" class="dotB"><span id="EN73"></span><span id="EN74"></span><span id="EN75"></span><span id="EN76"></span><span id="EN77"></span><span id="EN78"></span></TD></TR>',
            _ += '<TR><TD id="EN722" class="data"></TD><TD class="data"><Font size="2"><B>Battle Grounds Food</B></Font></TD><TD><Font size="2"><B>Elemental Resist Potions</B></Font></TD></TR>',
            _ += '<TR><TD id="EN717" class="data"></TD><TD id="EN723" class="data"></TD><TD id="EN711"></TD></TR>',
            _ += '<TR><TD id="EN720" class="data"></TD><TD id="EN724" class="data"></TD><TD id="EN712"></TD></TR>',
            _ += '<TR><TD id="EN710" class="data"></TD><TD id="EN725" class="data"></TD><TD id="EN713"></TD></TR>',
            _ += '<TR><TD id="EN79" class="data"></TD><TD id="EN726" class="dotB data"></TD><TD id="EN714" class="dotB"></TD></TR>',
            _ += '<TR><TD id="EN70" class="data"></TD><TD colspan="2"><Font size="2"><B>New World Food</B></Font></TD></TR>',
            _ += '<TR><TD id="EN71" class="data"></TD><TD colspan="2" id="EN727"></TD></TR>',
            _ += '<TR><TD id="EN72" class="data"></TD><TD colspan="2" id="EN728"></TD></TR>',
            _ += '<TR><TD id="EN715" class="data"></TD><TD colspan="2" id="EN729"></TD></TR>',
            _ += '<TR><TD id="EN716" class="data"></TD><TD colspan="2" id="EN730"></TD></TR>',
            _ += '<TR><TD id="EN718" class="data"></TD><TD colspan="2" id="EN731"></TD></TR>',
            _ += '<TR><TD id="EN719" class="data"></TD><TD colspan="2" id="EN732"></TD></TR>',
            _ += '<TR><TD id="EN721" class="data"></TD><TD colspan="2" id="EN733"></TD></TR>',
            _ += '<TR><TD id="EN743" class="data"></TD><TD colspan="2" id="EN734"></TD></TR>',
            _ += '<TR><TD id="EN738" class="data"></TD><TD colspan="2" id="EN735" class="dotB"></TD></TR>',
            _ += '<TR><TD id="EN737" class="data"></TD><TD colspan="2"><Font size="2"><B>Stat+20 Food</B></Font></TD></TR>',
            _ += '<TR><TD id="EN742" class="data"></TD><TD colspan="2" id="EN741"></TD></TR>',
            _ += '<TR><TD id="EN746" class="data"></TD><TD colspan="2" id="EN747"></TD></TR>',
            _ += '<TR><TD id="EN744" class="data"></TD><TD colspan="2" id="EN748"></TD></TR>',
            _ += '<TR><TD id="EN745" class="data"></TD><TD colspan="2" id="EN749"></TD></TR>',
            _ += '<TR><TD id="EN739" class="data"></TD><TD colspan="2" id="EN750"></TD></TR>',
            myInnerHtml("SP_SIEN05", _ += '<TR><TD id="EN740" class="data"></TD><TD colspan="2" id="EN751"></TD></TR>', 0),
            myInnerHtml("EN70", '<input type="checkbox" name="A7_Skill0" onClick="A7(1)">Sesame Pastry (HIT +30)', 0),
            myInnerHtml("EN71", '<input type="checkbox" name="A7_Skill1" onClick="A7(1)">Honey Pastry (FLEE +30)', 0),
            myInnerHtml("EN72", '<input type="checkbox" name="A7_Skill2" onClick="A7(1)">Rainbow Cake (ATK/MATK +10)', 0),
            myInnerHtml("EN79", '<input type="checkbox" name="A7_Skill9" onClick="A7(1)">Box of Resentment (ATK +20)', 0),
            myInnerHtml("EN710", '<input type="checkbox" name="A7_Skill10" onClick="A7(1)">Box of Drowsiness (MATK +20)', 0),
            myInnerHtml("EN711", '<input type="checkbox" name="A7_Skill11" onClick="A7(1)">Coldproof Potion', 0),
            myInnerHtml("EN712", '<input type="checkbox" name="A7_Skill12" onClick="A7(1)">Earthproof Potion', 0),
            myInnerHtml("EN713", '<input type="checkbox" name="A7_Skill13" onClick="A7(1)">Fireproof Potion', 0),
            myInnerHtml("EN714", '<input type="checkbox" name="A7_Skill14" onClick="A7(1)">Thunderproof Potion', 0),
            myInnerHtml("EN715", '<input type="checkbox" name="A7_Skill26" onClick="A7(1)">Guarana Candy (ASPD +10%, AGI Lvl 5)', 0),
            myInnerHtml("EN716", '<input type="checkbox" name="A7_Skill16" onClick="A7(1)">Buche de Noel (HIT +3%, CRIT +7, MaxHP&SP +3%)', 0),
            myInnerHtml("EN717", '<input type="checkbox" name="A7_Skill31" onClick="A7(1)">Aloevera (Self Provoke Lvl 1)', 0),
            myInnerHtml("EN718", '<input type="checkbox" name="A7_Skill32" onClick="A7(1)">Small/Big Defense Potion (DEF +3)', 0),
            myInnerHtml("EN719", '<input type="checkbox" name="A7_Skill33" onClick="A7(1)">Small/Big Magic Defense Potion (MDEF +3)', 0),
            myInnerHtml("EN720", '<input type="checkbox" name="A7_Skill34" onClick="A7(1)">Box of Gloom (' + skillName(42, c.server.value) + " Lvl 1)", 0),
            myInnerHtml("EN721", '<input type="checkbox" name="A7_Skill36" onClick="A7(1)">Halo-Halo (All Stats +3)', 0),
            myInnerHtml("EN722", '<select name="A_SpeedPOT" onChange="A7(1)"><option value="0">(no Speed Potion)</option></select>', 0),
            myInnerHtml("EN723", '<input type="checkbox" name="A7_Skill27" onClick="A7(1)">Military Ration B (HIT +33)', 0),
            myInnerHtml("EN724", '<input type="checkbox" name="A7_Skill28" onClick="A7(1)">Military Ration C (FLEE +33)', 0),
            myInnerHtml("EN725", '<input type="checkbox" name="A7_Skill29" onClick="A7(1)">Tasty Pink Ration (ATK +15)', 0),
            myInnerHtml("EN726", '<input type="checkbox" name="A7_Skill30" onClick="A7(1)">Tasty White Ration (MATK +15)', 0),
            myInnerHtml("EN727", '<input type="checkbox" name="A7_Skill17" onClick="A7(1)">Rune Strawberry Cake (ATK +5, MATK +5)', 0),
            myInnerHtml("EN728", '<input type="checkbox" name="A7_Skill18" onClick="A7(1)">Schwartzwald Pine Jubilee (HIT +10, FLEE +20)', 0),
            myInnerHtml("EN729", '<input type="checkbox" name="A7_Skill19" onClick="A7(1)">Arunafeltz Desert Sandwich (CRIT +7)', 0),
            myInnerHtml("EN730", '<input type="checkbox" name="A7_Skill20" onClick="A7(1)">Manuk\'s Sturdiness (ATK based damage on Manuk maps +10%)', 0),
            myInnerHtml("EN731", '<input type="checkbox" name="A7_Skill21" onClick="A7(1)">Manuk\'s Faith (MATK based damage on Manuk maps +10%)', 0),
            myInnerHtml("EN732", '<input type="checkbox" name="A7_Skill22" onClick="A7(1)">Manuk\'s Will (Received damage on Manuk maps -10%)', 0),
            myInnerHtml("EN733", '<input type="checkbox" name="A7_Skill23" onClick="A7(1)">Pinguicula\'s Fruit Jam (ATK based dmg on Splendide maps +10%)', 0),
            myInnerHtml("EN734", '<input type="checkbox" name="A7_Skill24" onClick="A7(1)">Cornus\' Tear (MATK based damage on Splendide maps +10%)', 0),
            myInnerHtml("EN735", '<input type="checkbox" name="A7_Skill25" onClick="A7(1)">Luciola\'s Honey Jam (Received damage on Splendide maps -10%)', 0),
            myInnerHtml("EN737", '<input type="checkbox" name="A7_Skill37" onClick="A7(1)">Lucky Rice Cake (LUK +21)', 0),
            myInnerHtml("EN738", '<input type="checkbox" name="A7_Skill38" onClick="A7(1)">Distilled Fighting Spirit (ATK +30)', 0),
            myInnerHtml("EN746", "<input type=checkbox name=A7_Skill46 onClick=A7(1)>Tyr's Blessing (FLEE +30, HIT +30, ATK +20, MATK +20)", 0),
            myInnerHtml("EN742", '<select name="A7_Skill42" onChange="A7(1)" style="width:175px;"><option value="0">(none)</option></select>', 0),
            myInnerHtml("EN743", '<input type="checkbox" name="A7_Skill43" onClick="A7(1)">Luxurious Western Food (All Stats +3)', 0),
            myInnerHtml("EN744", '<input type="checkbox" name="A7_Skill44" onClick="A7(1)">Ginger Bread (ASPD +% (same as Awakening Potion))', 0),
            myInnerHtml("EN745", '<input type="checkbox" name="A7_Skill45" onClick="A7(1)">Regeneration Potion (Items/skills recover +20%)', 0),
            myInnerHtml("EN739", '<select name="A7_Skill39" onChange="A7(1)"><option value="0">(no HP Increase Potion)</option></select>', 0),
            myInnerHtml("EN740", '<select name="A7_Skill40" onChange="A7(1)"><option value="0">(no SP Increase Potion)</option></select>', 0),
            myInnerHtml("EN741", '<input type="checkbox" name="A7_Skill41" onClick="A7(1)">Savage BBQ (STR +20)', 0),
            myInnerHtml("EN747", '<input type="checkbox" name="A7_Skill47" onClick="A7(1)">Cocktail Warg Blood (AGI +20)', 0),
            myInnerHtml("EN748", '<input type="checkbox" name="A7_Skill48" onClick="A7(1)">Minor Stew (VIT +20)', 0),
            myInnerHtml("EN749", '<input type="checkbox" name="A7_Skill49" onClick="A7(1)">Siroma Iced Tea (INT +20)', 0),
            myInnerHtml("EN750", '<input type="checkbox" name="A7_Skill50" onClick="A7(1)">Drosera Herb Salad (DEX +20) (not saved via URL)', 0),
            myInnerHtml("EN751", '<input type="checkbox" name="A7_Skill51" onClick="A7(1)">Petite Tail Noodles (LUK +20) (not saved via URL)', 0),
            myInnerHtml("EN73", '<select name="A7_Skill3" onChange="A7(1)"></select> ', 0),
            myInnerHtml("EN74", '<select name="A7_Skill4" onChange="A7(1)"></select> ', 0),
            myInnerHtml("EN75", '<select name="A7_Skill5" onChange="A7(1)"></select> ', 0),
            myInnerHtml("EN76", '<select name="A7_Skill6" onChange="A7(1)"></select> ', 0),
            myInnerHtml("EN77", '<select name="A7_Skill7" onChange="A7(1)"></select> ', 0),
            myInnerHtml("EN78", '<select name="A7_Skill8" onChange="A7(1)"></select> ', 0),
            c.A7_Skill3.options[0] = new Option("STR+ food", 0),
            c.A7_Skill4.options[0] = new Option("AGI+ food", 0),
            c.A7_Skill5.options[0] = new Option("VIT+ food", 0),
            c.A7_Skill6.options[0] = new Option("INT+ food", 0),
            c.A7_Skill7.options[0] = new Option("DEX+ food", 0),
            c.A7_Skill8.options[0] = new Option("LUK+ food", 0),
            i = 1; i <= 10; i++)
            c.A7_Skill3.options[i] = new Option("+" + i, i),
                c.A7_Skill4.options[i] = new Option("+" + i, i),
                c.A7_Skill5.options[i] = new Option("+" + i, i),
                c.A7_Skill6.options[i] = new Option("+" + i, i),
                c.A7_Skill7.options[i] = new Option("+" + i, i),
                c.A7_Skill8.options[i] = new Option("+" + i, i);
        c.A7_Skill39.options[0] = new Option("(no HP Increase Potion)", 0),
            c.A7_Skill39.options[1] = new Option("Small HP Increase Potion", 1),
            c.A7_Skill39.options[2] = new Option("Medium HP Increase Potion", 2),
            c.A7_Skill39.options[3] = new Option("Large HP Increase Potion", 3),
            c.A7_Skill40.options[0] = new Option("(no SP Increase Potion)", 0),
            c.A7_Skill40.options[1] = new Option("Small SP Increase Potion", 1),
            c.A7_Skill40.options[2] = new Option("Medium SP Increase Potion", 2),
            c.A7_Skill40.options[3] = new Option("Large SP Increase Potion", 3),
            c.A7_Skill42.options[0] = new Option("(no Mega Resist Potion)", 0),
            c.A7_Skill42.options[1] = new Option("Mega Resist Potion [+10% resistance to Blind, Bleeding, Confusion, Curse, Frozen, Poison, Silence, Sleep, Stun and Stone Curse status effects]", 1),
            c.A7_Skill42.options[2] = new Option("Mega Resist Potion (iRO) [+20% resistance to Blind, Bleeding, Confusion, Curse, Frozen, Poison, Silence, Sleep, Stun and Stone Curse status effects]", 2),
            SpeedPotName = ["(no Speed Potion)", "Concentration Potion", "Awakening Potion (Lvl 40)", "Berserk Potion"],
            c.A_SpeedPOT.options[0] = new Option(SpeedPotName[0], 0),
            c.A_SpeedPOT.options[1] = new Option(SpeedPotName[1], 1),
            3 != n_A_JOB && 9 != n_A_JobClass2() && 16 != n_A_JobClass2() ? c.A_SpeedPOT.options[2] = new Option(SpeedPotName[2], 2) : c.A_SpeedPOT.options[2] = new Option("-", 0),
            1 == n_A_JobClass() || 6 == n_A_JobClass() || 41 == n_A_JobClass() || 14 == n_A_JobClass2() || 11 == n_A_JobClass2() || 5 == n_A_JOB || 45 == n_A_JOB ? c.A_SpeedPOT.options[3] = new Option(SpeedPotName[3] + " (Lvl 85)", 3) : 22 == n_A_JOB ? c.A_SpeedPOT.options[3] = new Option("* Special (" + m_Skill[304][2] + " Lvl 85) / Poison Bottle", 3) : c.A_SpeedPOT.options[3] = new Option("* Special (" + m_Skill[304][2] + ") (Lvl 85)", 3),
            c.A7_Skill0.checked = n_A_Buf7[0],
            c.A7_Skill1.checked = n_A_Buf7[1],
            c.A7_Skill2.checked = n_A_Buf7[2],
            c.A7_Skill3.value = n_A_Buf7[3],
            c.A7_Skill4.value = n_A_Buf7[4],
            c.A7_Skill5.value = n_A_Buf7[5],
            c.A7_Skill6.value = n_A_Buf7[6],
            c.A7_Skill7.value = n_A_Buf7[7],
            c.A7_Skill8.value = n_A_Buf7[8],
            c.A7_Skill9.checked = n_A_Buf7[9],
            c.A7_Skill10.checked = n_A_Buf7[10],
            c.A7_Skill11.checked = n_A_Buf7[11],
            c.A7_Skill12.checked = n_A_Buf7[12],
            c.A7_Skill13.checked = n_A_Buf7[13],
            c.A7_Skill14.checked = n_A_Buf7[14],
            c.A7_Skill16.checked = n_A_Buf7[16],
            c.A7_Skill17.checked = n_A_Buf7[17],
            c.A7_Skill18.checked = n_A_Buf7[18],
            c.A7_Skill19.checked = n_A_Buf7[19],
            c.A7_Skill20.checked = n_A_Buf7[20],
            c.A7_Skill21.checked = n_A_Buf7[21],
            c.A7_Skill22.checked = n_A_Buf7[22],
            c.A7_Skill23.checked = n_A_Buf7[23],
            c.A7_Skill24.checked = n_A_Buf7[24],
            c.A7_Skill25.checked = n_A_Buf7[25],
            c.A7_Skill26.checked = n_A_Buf7[26],
            c.A7_Skill27.checked = n_A_Buf7[27],
            c.A7_Skill28.checked = n_A_Buf7[28],
            c.A7_Skill29.checked = n_A_Buf7[29],
            c.A7_Skill30.checked = n_A_Buf7[30],
            c.A7_Skill31.checked = n_A_Buf7[31],
            c.A7_Skill32.checked = n_A_Buf7[32],
            c.A7_Skill33.checked = n_A_Buf7[33],
            c.A7_Skill34.checked = n_A_Buf7[34],
            c.A_SpeedPOT.value = n_A_Buf7[35],
            c.A7_Skill36.checked = n_A_Buf7[36],
            c.A7_Skill37.checked = n_A_Buf7[37],
            c.A7_Skill38.checked = n_A_Buf7[38],
            c.A7_Skill39.value = n_A_Buf7[39],
            c.A7_Skill40.value = n_A_Buf7[40],
            c.A7_Skill41.checked = n_A_Buf7[41],
            c.A7_Skill42.value = n_A_Buf7[42],
            c.A7_Skill43.checked = n_A_Buf7[43],
            c.A7_Skill44.checked = n_A_Buf7[44],
            c.A7_Skill45.checked = n_A_Buf7[45],
            c.A7_Skill46.checked = n_A_Buf7[46],
            c.A7_Skill47.checked = n_A_Buf7[47],
            c.A7_Skill48.checked = n_A_Buf7[48],
            c.A7_Skill49.checked = n_A_Buf7[49],
            c.A7_Skill50.checked = n_A_Buf7[50],
            c.A7_Skill51.checked = n_A_Buf7[51]
    } else {
        var _;
        _ = '<TR><TD id="A7TD" class="subheader point" onclick="Buf7SW(1)">Food / Speed Potions / other Items <span id="A7used"></span>',
            myInnerHtml("SP_SIEN05", _ += '<div class="right">(click to show)</div></TD></TR>', 0)
    }
    A7(0)
}
function A7(e) {
    1 == e && calc();
    for (var _ = 0, n = 0; n < n_A_Buf7.length; n++)
        if (0 != n_A_Buf7[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("A7TD").style.backgroundColor = sBGC[l],
        myInnerHtml("A7used", "", 0)) : (document.getElementById("A7TD").style.backgroundColor = saBGC[l],
            myInnerHtml("A7used", " [active]", 0))
}
function Buf8SW(e) {
    if (n_Skill8SW = e,
        n_Skill8SW) {
        t = '<TR><TD id="A8TD" class="subheader point" onclick="Buf8SW(0)">Additional Effects <SPAN id="A8used"></SPAN>',
            t += '<div class="right">(click to hide)</div></TD></TR>',
            t += '<TR><TD><Font size="2"><B>Pets</B></Font></TD></TR>',
            t += '<TR><TD id="EN800" class="dotB"></TD></TR>',
            t += '<TR><TD id="EN809" class="dotB"></TD></TR>',
            t += '<TR><TD><Font size="2"><B>EXP Items & Variables</B></Font></TD></TR>',
            t += '<TR><TD id="EN803"></TD></TR>',
            t += '<TR><TD id="EN804"></TD></TR>',
            t += '<TR><TD id="EN805"></TD></TR>',
            t += '<TR><TD id="EN806"></TD></TR>',
            t += '<TR><TD id="EN801"></TD></TR>',
            myInnerHtml("ID_ETC", t += '<TR><TD id="EN802"></TD></TR>', 0),
            myInnerHtml("EN800", '<select name="A8_Skill0" onChange="A8(1)" style="width:600px;"></select>', 0),
            c.A8_Skill0.options[0] = new Option(m_PET[m_PET_SORT[0]][1], m_PET[m_PET_SORT[0]][0]);
            for(i = 1; i < m_PET_SORT.length; i++){
                var n = m_PET_SORT[i];
                c.A8_Skill0.options[i] = new Option(m_PET[n][1], m_PET[n][0]);
            }
        // old methods for pets
        /* var _ = document.createElement("OPTGROUP");
        for (_.label = "CLASSIC PETS",
            c.A8_Skill0.appendChild(_),
            i = 1; i < m_PET_SORT.length; i++) {
            var n = m_PET_SORT[i];
            c.A8_Skill0.options[i] = new Option(m_PET[n][1], m_PET[n][0]),
                _.appendChild(c.A8_Skill0.options[i])
        } */
        /* var l = document.createElement("OPTGROUP");
        for (l.label = "EVOLVED PETS & OTHER NEW PETS",
            c.A8_Skill0.appendChild(l),
            j = i; j < m_PET_SORT.length; j++) {
            n = m_PET_SORT[j];
            c.A8_Skill0.options[j] = new Option(m_PET[n][1], m_PET[n][0]),
                l.appendChild(c.A8_Skill0.options[j])
        } */
        for (myInnerHtml("EN801", 'Battle Manual <select name="A8_Skill1" onChange="A8(1)"></select>', 0),
            c.A8_Skill1.options[0] = new Option("None", 0),
            c.A8_Skill1.options[1] = new Option("25", 1),
            c.A8_Skill1.options[2] = new Option("50", 2),
            c.A8_Skill1.options[3] = new Option("100", 4),
            myInnerHtml("EN802", '<input type="checkbox" name="A8_Skill2" onClick="A8(1)">Job Manual 50', 0),
            myInnerHtml("EN803", 'Server Base Experience Rate <select name="A8_Skill3" onChange="A8(1)"></select>', 0),
            c.A8_Skill3.options[0] = new Option("1x", 0),
            i = 1; i <= 199; i++)
            c.A8_Skill3.options[i] = new Option(1 + 1 * i + "x", i);
        for (myInnerHtml("EN804", 'Server Job Experience Rate <select name="A8_Skill7" onChange="A8(1)"></select>', 0),
            c.A8_Skill7.options[0] = new Option("1x", 0),
            i = 1; i <= 199; i++)
            c.A8_Skill7.options[i] = new Option(1 + 1 * i + "x", i);
        for (myInnerHtml("EN805", 'Partymember Count <select name="A8_Skill5" onChange="A8(1)"></select>', 0),
            i = 0; i <= 12; i++)
            c.A8_Skill5.options[i] = new Option(i, i);
        for (myInnerHtml("EN806", 'Exp Tap Bonus <select name="A8_Skill6" onChange="A8(1)"></select>', 0),
            c.A8_Skill6.options[0] = new Option("-", 0),
            i = 1; i <= 20; i++)
            c.A8_Skill6.options[i] = new Option("+" + 25 * i + "%", i);
        for (t = '<Font size="2"><b>Temporary Card/Item active Effects </b></Font>',
            t += '<font color="red">(Duration and Chance are ignored)</font><BR>',
            t += '<select name="A8_Skill8" onChange="A8(1)" style="width:514px;"></select><BR>',
            t += '<select name="A8_Skill9" onChange="A8(1)" style="width:514px;"></select><BR>',
            t += '<select name="A8_Skill10" onChange="A8(1)" style="width:514px;"></select><BR>',
            myInnerHtml("EN809", t += '<select name="A8_Skill11" onChange="A8(1)" style="width:514px;"></select><BR>', 0),
            i = 0; i < m_TempEffect_SORT.length; i++) {
            n = m_TempEffect_SORT[i];
            c.A8_Skill8.options[i] = new Option(m_TempEffect[n][1] + " [" + m_TempEffect[n][2] + "]", n),
                c.A8_Skill9.options[i] = new Option(m_TempEffect[n][1] + " [" + m_TempEffect[n][2] + "]", n),
                c.A8_Skill10.options[i] = new Option(m_TempEffect[n][1] + " [" + m_TempEffect[n][2] + "]", n),
                c.A8_Skill11.options[i] = new Option(m_TempEffect[n][1] + " [" + m_TempEffect[n][2] + "]", n)
        }
        c.A8_Skill0.value = n_A_Buf8[0],
            c.A8_Skill1.value = n_A_Buf8[1],
            c.A8_Skill2.checked = n_A_Buf8[2],
            c.A8_Skill3.value = n_A_Buf8[3],
            c.A8_Skill5.value = n_A_Buf8[5],
            c.A8_Skill6.value = n_A_Buf8[6],
            c.A8_Skill7.value = n_A_Buf8[7],
            c.A8_Skill8.value = n_A_Buf8[8],
            c.A8_Skill9.value = n_A_Buf8[9],
            c.A8_Skill10.value = n_A_Buf8[10],
            c.A8_Skill11.value = n_A_Buf8[11]
    } else {
        var t;
        t = '<TR><TD id="A8TD" class="subheader point" onclick="Buf8SW(1)">Additional Effects <SPAN id="A8used"></SPAN>',
            myInnerHtml("ID_ETC", t += '<div class="right">(click to show)</div></TD></TR>', 0)
    }
    A8(0)
}
function A8(e) {
    1 == e && calc();
    for (var _ = 0, n = 0; n < n_A_Buf8.length; n++)
        if (0 != n_A_Buf8[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("A8TD").style.backgroundColor = sBGC[l],
        myInnerHtml("A8used", "", 0)) : (document.getElementById("A8TD").style.backgroundColor = saBGC[l],
            myInnerHtml("A8used", " [active]", 0))
}
function Buf9SW(e) {
    if (n_Skill9SW = e,
        n_Skill9SW) {
        n = '<TR><TD id="A9TD" Colspan="4" class="subheader point" onclick="Buf9SW(0)">Additional Enchants & Manual Edits on Player <SPAN id="A9used"></SPAN>',
            n += '<div class="right">(click to hide)</div></TD></TR>',
            n += '<TR><TD class="dotB" Colspan="4"><table>',
            n += '<tr><td class="data"><Font size="2"><B>Player Stats</B></Font></td><td Colspan="3"><Font size="2"><B>Player Sub-Stats</B></Font></td></tr>',
            n += '<tr><td class="data" id="EN965"></td><TD id="EN931"></TD><TD id="EN939"></TD><TD id="EN959"></TD></tr>',
            n += '<tr><td class="data" id="EN967"></td><TD id="EN933"></TD><TD id="EN941"></TD><TD id="EN945"></TD></tr>',
            n += '<tr><td class="data" id="EN969"></td><TD id="EN935"></TD><TD id="EN951"></TD><TD id="EN947"></TD></tr>',
            n += '<tr><td class="data" id="EN971"></td><TD id="EN937"></TD><TD id="EN955"></TD><TD id="EN943"></TD></tr>',
            n += '<tr><td class="data" id="EN973"></td><TD id="EN961"></TD><TD id="EN953"></TD><TD id="EN944"></TD></tr>',
            n += '<tr><td class="data" id="EN975"></td><TD id="EN963"></TD><TD id="EN957"></TD><TD id="EN949"></TD></tr>',
            n += "</table></TD></TR>",
            n += '<TR><TD class="data"><Font size="2"><B>+% ATK based damage</B></Font></TD><TD colspan="3"><Font size="2"><B>Other</B></Font></TD></TR>',
            n += '<tr><TD id="EN900" class="data"></TD><TD id="EN915" colspan="3"></TD></tr>',
            n += '<tr><TD id="EN901" class="data"></TD><TD id="EN916" colspan="3"></TD></tr>',
            n += '<tr><TD id="EN902" class="data"></TD><TD id="EN976" colspan="3"></TD></tr>',
            n += '<tr><TD id="EN903" class="data dotB"></TD><TD id="EN977" colspan="3"></TD></tr>',
            n += '<TR><TD class="data"><Font size="2"><B>+% Resistance</B></Font></TD><TD id="EN980" colspan="3"></TD></TR>',
            n += '<tr><TD id="EN904" class="data"></TD><TD id="EN978" colspan="3"></TD></tr>',
            n += '<tr><TD id="EN905" class="data"></TD><TD id="EN979" colspan="3"></TD></tr>',
            n += '<tr><TD id="EN906" class="data"></TD><TD id="EN981" colspan="3"></TD></tr>',
            myInnerHtml("ID_ARG", n += '<tr><TD id="EN907" class="data"></TD><TD id="EN982" colspan="3"></TD></tr>', 0);
        var _ = '<optgroup label="Race"><option value="0">Formless</option><option value="1">Undead</option><option value="2">Brute</option><option value="3">Plant</option><option value="4">Insect</option><option value="5">Fish</option><option value="6">Demon</option><option value="7">Demi-Human</option><option value="8">Angel</option><option value="9">Dragon</option></optgroup><optgroup label="Element"><option value="10">Neutral </option><option value="11">Water </option><option value="12">Earth </option><option value="13">Fire </option><option value="14">Wind </option><option value="15">Poison </option><option value="16">Holy </option><option value="17">Shadow </option><option value="18">Ghost </option><option value="19">Undead </option></optgroup><optgroup label="Size"><option value="20">Small</option><option value="21">Medium</option><option value="22">Large</option></optgroup>';
        for (i = 0; i < 4; i++)
            myInnerHtml("EN90" + i, '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC' + i + '" value="0" class="center">% vs<select name="A9_Skill' + i + '" onChange="A9(1)">' + _ + '<optgroup label="Type"><option value="23">Boss</option><option value="24">Goblin</option><option value="25">Golem</option><option value="26">Guardian</option><option value="27">Kobold</option><option value="28">Orc</option><option value="29">Satan Morroc</option></optgroup></select>', 0);
        for (i = 4; i < 8; i++)
            myInnerHtml("EN90" + i, '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC' + i + '" value="0" class="center">% vs<select name="A9_Skill' + i + '" onChange="A9(1)">' + _ + '<optgroup label="Type"><option value="23">Boss</option><option value="24">Normal</option><option value="25">Guardian</option></optgroup></select>', 0);
        for (myInnerHtml("EN915", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC26" value="0" class="center">% ATK based damage on any target.', 0),
            myInnerHtml("EN916", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC39" value="0" class="center">% MATK based damage on any target.', 0),
            myInnerHtml("EN931", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC15" value="0" class="center" style="width:44px;">MaxHP', 0),
            myInnerHtml("EN933", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC16" value="0" class="center">% MaxHP', 0),
            myInnerHtml("EN935", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC17" value="0" class="center">MaxSP', 0),
            myInnerHtml("EN937", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC18" value="0" class="center">% MaxSP', 0),
            myInnerHtml("EN939", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC19" value="0" class="center">DEF', 0),
            myInnerHtml("EN941", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC20" value="0" class="center">MDEF', 0),
            myInnerHtml("EN943", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC21" value="0" class="center">HIT', 0),
            myInnerHtml("EN944", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC40" value="0" class="center">Perfect HIT', 0),
            myInnerHtml("EN945", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC22" value="0" class="center">FLEE', 0),
            myInnerHtml("EN947", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC23" value="0" class="center">Perfect Dodge', 0),
            myInnerHtml("EN949", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC24" value="0" class="center">Critical Rate', 0),
            myInnerHtml("EN951", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC25" value="0" class="center">ATK', 0),
            myInnerHtml("EN953", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC38" value="0" class="center">% ATK', 0),
            myInnerHtml("EN955", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC27" value="0" class="center">MATK', 0),
            myInnerHtml("EN957", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC28" value="0" class="center">% MATK', 0),
            myInnerHtml("EN959", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC29" value="0" class="center">% ASPD', 0),
            myInnerHtml("EN961", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC30" value="0" class="center">% HP Regen', 0),
            myInnerHtml("EN963", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC31" value="0" class="center">% SP Regen', 0),
            myInnerHtml("EN965", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC32" value="0" class="center">STR', 0),
            myInnerHtml("EN967", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC33" value="0" class="center">AGI', 0),
            myInnerHtml("EN969", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC34" value="0" class="center">VIT', 0),
            myInnerHtml("EN971", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC35" value="0" class="center">INT', 0),
            myInnerHtml("EN973", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC36" value="0" class="center">DEX', 0),
            myInnerHtml("EN975", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC37" value="0" class="center">LUK', 0),
            myInnerHtml("EN976", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC41" value="0" class="center">% Long-range ATK based damage on any target.', 0),
            myInnerHtml("EN977", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC42" value="0" class="center">% Critical damage on any target.', 0),
            myInnerHtml("EN978", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC43" value="0" class="center">% DEF ignoring on any target.', 0),
            myInnerHtml("EN979", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC44" value="0" class="center">% MDEF ignoring on any target.', 0),
            myInnerHtml("EN980", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC45" value="0" class="center">% Long-range ATK and MATK based damage resistance.', 0),
            myInnerHtml("EN981", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC47" value="0" class="center">% <select name="A9_Skill8" onChange="A9(1)" style="width:170px;"></select> skill damage.', 0),
            myInnerHtml("EN982", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC48" value="0" class="center">% <select name="A9_Skill9" onChange="A9(1)" style="width:170px;"></select> skill damage.', 0),
            c.A9_Skill8.options[0] = new Option("(no skill selected)", 0),
            i = 1; i < All_DMGskill.length; i++)
            c.A9_Skill8.options[i] = new Option(skillNameInSelect(m_Skill[All_DMGskill[i]][0], SRV), All_DMGskill[i]);
        for (c.A9_Skill9.options[0] = new Option("(no skill selected)", 0),
            i = 1; i < All_DMGskill.length; i++)
            c.A9_Skill9.options[i] = new Option(skillNameInSelect(m_Skill[All_DMGskill[i]][0], SRV), All_DMGskill[i]);
        c.A9_Skill0.value = n_A_Buf9[0],
            c.ARG_RC0.value = n_A_Buf9[1],
            c.A9_Skill1.value = n_A_Buf9[2],
            c.ARG_RC1.value = n_A_Buf9[3],
            c.A9_Skill2.value = n_A_Buf9[4],
            c.ARG_RC2.value = n_A_Buf9[5],
            c.A9_Skill3.value = n_A_Buf9[6],
            c.ARG_RC3.value = n_A_Buf9[7],
            c.A9_Skill4.value = n_A_Buf9[8],
            c.ARG_RC4.value = n_A_Buf9[9],
            c.A9_Skill5.value = n_A_Buf9[10],
            c.ARG_RC5.value = n_A_Buf9[11],
            c.A9_Skill6.value = n_A_Buf9[12],
            c.ARG_RC6.value = n_A_Buf9[13],
            c.A9_Skill7.value = n_A_Buf9[14],
            c.ARG_RC7.value = n_A_Buf9[15],
            c.ARG_RC43.value = n_A_Buf9[16],
            c.ARG_RC44.value = n_A_Buf9[17],
            c.ARG_RC45.value = n_A_Buf9[18],
            c.ARG_RC47.value = n_A_Buf9[19],
            c.A9_Skill8.value = n_A_Buf9[20],
            c.ARG_RC48.value = n_A_Buf9[21],
            c.A9_Skill9.value = n_A_Buf9[22],
            c.ARG_RC15.value = n_A_Buf9[30],
            c.ARG_RC16.value = n_A_Buf9[31],
            c.ARG_RC17.value = n_A_Buf9[32],
            c.ARG_RC18.value = n_A_Buf9[33],
            c.ARG_RC19.value = n_A_Buf9[34],
            c.ARG_RC20.value = n_A_Buf9[35],
            c.ARG_RC21.value = n_A_Buf9[36],
            c.ARG_RC22.value = n_A_Buf9[37],
            c.ARG_RC23.value = n_A_Buf9[38],
            c.ARG_RC24.value = n_A_Buf9[39],
            c.ARG_RC25.value = n_A_Buf9[40],
            c.ARG_RC26.value = n_A_Buf9[41],
            c.ARG_RC27.value = n_A_Buf9[42],
            c.ARG_RC28.value = n_A_Buf9[43],
            c.ARG_RC29.value = n_A_Buf9[44],
            c.ARG_RC30.value = n_A_Buf9[45],
            c.ARG_RC31.value = n_A_Buf9[46],
            c.ARG_RC32.value = n_A_Buf9[47],
            c.ARG_RC33.value = n_A_Buf9[48],
            c.ARG_RC34.value = n_A_Buf9[49],
            c.ARG_RC35.value = n_A_Buf9[50],
            c.ARG_RC36.value = n_A_Buf9[51],
            c.ARG_RC37.value = n_A_Buf9[52],
            c.ARG_RC38.value = n_A_Buf9[53],
            c.ARG_RC39.value = n_A_Buf9[54],
            c.ARG_RC40.value = n_A_Buf9[55],
            c.ARG_RC41.value = n_A_Buf9[56],
            c.ARG_RC42.value = n_A_Buf9[57]
    } else {
        var n;
        n = '<TR><TD id="A9TD" class="subheader point" onclick="Buf9SW(1)">Additional Enchants & Manual Edits on Player <SPAN id="A9used"></SPAN>',
            myInnerHtml("ID_ARG", n += '<div class="right">(click to show)</div></TD></TR>', 0)
    }
    A9(0)
}
function A9(e) {
    1 == e && calc();
    for (var _ = 0, n = 1; n < 14; n += 2)
        if (0 != n_A_Buf9[n]) {
            _ = 1;
            break
        }
    for (n = 15; n < n_A_Buf9.length; n++)
        if (0 != n_A_Buf9[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("A9TD").style.backgroundColor = sBGC[l],
        myInnerHtml("A9used", "", 0)) : (document.getElementById("A9TD").style.backgroundColor = saBGC[l],
            myInnerHtml("A9used", " [active]", 0))
}

function reloadRandOpt(){
    c.A_weapon1_ropt1.value = n_A_randopt[0];
    c.WEAP1_ROPT1.value = n_A_randopt[1];
    c.A_weapon1_ropt2.value = n_A_randopt[2];
    c.WEAP1_ROPT2.value = n_A_randopt[3];
    c.A_weapon1_ropt3.value = n_A_randopt[4];
    c.WEAP1_ROPT3.value = n_A_randopt[5];
    c.A_weapon1_ropt4.value = n_A_randopt[6];
    c.WEAP1_ROPT4.value = n_A_randopt[7];
    if(n_Nitou){
        c.A_weapon2_ropt1.value = n_A_randopt[8];
        c.WEAP2_ROPT1.value = n_A_randopt[9];
        c.A_weapon2_ropt2.value = n_A_randopt[10];
        c.WEAP2_ROPT2.value = n_A_randopt[11];
        c.A_weapon2_ropt3.value = n_A_randopt[12];
        c.WEAP2_ROPT3.value = n_A_randopt[13];
        c.A_weapon2_ropt4.value = n_A_randopt[14];
        c.WEAP2_ROPT4.value = n_A_randopt[15];
    }
    c.A_body_ropt1.value = n_A_randopt[16];
    c.BODY_ROPT1.value = n_A_randopt[17];
    c.A_body_ropt2.value = n_A_randopt[18];
    c.BODY_ROPT2.value = n_A_randopt[19];
    c.A_shoulder_ropt1.value = n_A_randopt[20];
    c.SHOULDER_ROPT1.value = n_A_randopt[21];
    c.A_shoulder_ropt2.value = n_A_randopt[22];
    c.SHOULDER_ROPT2.value = n_A_randopt[23];
    c.A_shoes_ropt1.value = n_A_randopt[24];
    c.SHOES_ROPT1.value = n_A_randopt[25];
    c.A_shoes_ropt2.value = n_A_randopt[26];
    c.SHOES_ROPT2.value = n_A_randopt[27];
}

function RandOptUpdate(e){
    1 == e && calc();
}
function Buf10SW(e) {
    if (n_Skill10SW = e,
        n_Skill10SW) {
        for (_ = '<TR><TD id="A10TD" Colspan="4" class="subheader point" onclick="Buf10SW(0)">Manual Edits on Enemy <SPAN id="A10used"></SPAN>',
            _ += '<div class="right">(click to hide)</div></TD></TR>',
            _ += '<TR><TD class="data"><Font size="2"><B>Enemy Stats</B></Font></td><td colspan="3"><Font size="2"><B>Enemy Sub-Stats</B></Font></td></tr>',
            _ += '<tr><td id="EN1067" class="data"></td><TD id="EN1031"></TD><TD id="EN1051"></TD><TD id="EN1043"></TD></tr>',
            _ += '<tr><td id="EN1069" class="data"></td><TD id="EN1033"></TD><TD id="EN1055"></TD><TD id="EN1044"></TD></tr>',
            _ += '<tr><td id="EN1071" class="data"></td><TD id="EN1039"></TD><TD id="EN1053"></TD><TD id="EN1049"></TD></tr>',
            _ += '<tr><td id="EN1073" class="data"></td><TD id="EN1041"></TD><TD id="EN1057"></TD><TD id="EN1045"></TD></tr>',
            _ += '<tr><td id="EN1075" class="data dotB"></td><TD class="dotB"></TD><TD id="EN1059" class="dotB"></TD><TD id="EN1047" class="dotB"></TD></tr>',
            _ += "<TR><TD colspan='4'><Font size='2'><B>Enemy's damage reductions:</B></Font></TD></TR>",
            _ += '<tr><TD id="EN1001" class="data" colspan="2"></TD><TD id="EN1003" colspan="2"></TD></tr>',
            _ += '<tr><TD id="EN1002" class="data" colspan="2"></TD><TD id="EN1004" colspan="2"></TD></tr>',
            _ += '<tr><TD id="EN1000" class="data dotB" colspan="2"></TD><TD id="EN1010" class="dotB" colspan="2"></TD></tr>',
            _ += '<TR><TD id="EN1015" colspan="4"></TD></TR>',
            _ += '<TR><TD id="EN1016" colspan="4"></TD></TR>',
            _ += '<TR><TD id="EN1100" colspan="4"></TD></TR>',
            myInnerHtml("B_MANUAL", _, 0),
            myInnerHtml("EN1000", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC0" value="0" class="center">% Racial Resistance', 0),
            myInnerHtml("EN1001", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC1" value="0" class="center">vs<select name="Bman1" onChange="A10(1)"></select>', 0),
            myInnerHtml("EN1002", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC2" value="0" class="center">vs<select name="Bman2" onChange="A10(1)"></select>', 0),
            myInnerHtml("EN1100", 'Monster element <select name="Bman3" onChange="A10(1)"></select> <select name="Bman4" onChange="A10(1)"></select> <input type="checkbox" name="B_mEle" onclick="A10(1)">', 0),
            myInnerHtml("EN1003", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC3" value="0" class="center">% Size Resistance', 0),
            myInnerHtml("EN1004", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC4" value="0" class="center">% Long-range Resistance', 0),
            myInnerHtml("EN1010", '+<input type="text" inputmode="numeric" onkeypress="return isNumeric(event)" maxlength="3" onkeyup="A10(1)" name="BRG_RC10" value="0" class="center">% Additional Reflect (equip/card)', 0),
            i = 0; i < v_Element_.length; i++)
            c.Bman1.options[i] = new Option(v_Element_[i], i),
            c.Bman2.options[i] = new Option(v_Element_[i], i),
            c.Bman3.options[i] = new Option(v_Element_[i], i);
        myInnerHtml("EN1015", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC26" value="0" class="center">% ATK based damage on any target.', 0),
            myInnerHtml("EN1016", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC39" value="0" class="center">% MATK based damage on any target.', 0),
            myInnerHtml("EN1031", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC15" value="0" class="center" style="width:44px;">MaxHP', 0),
            myInnerHtml("EN1033", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC16" value="0" class="center" disabled><S>% MaxHP</S>', 0),
            myInnerHtml("EN1039", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC19" value="0" class="center">DEF', 0),
            myInnerHtml("EN1041", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC20" value="0" class="center">MDEF', 0),
            myInnerHtml("EN1043", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC21" value="0" class="center">HIT', 0),
            myInnerHtml("EN1044", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC40" value="0" class="center" disabled><S>Perfect HIT</S>', 0),
            myInnerHtml("EN1045", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC22" value="0" class="center">FLEE', 0),
            myInnerHtml("EN1047", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC23" value="0" class="center" disabled><S>Perfect Dodge</S>', 0),
            myInnerHtml("EN1049", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC24" value="0" class="center">Critical Rate', 0),
            myInnerHtml("EN1051", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC25" value="0" class="center">ATK', 0),
            myInnerHtml("EN1055", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC38" value="0" class="center" disabled><S>Max ATK</S>', 0),
            myInnerHtml("EN1053", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC27" value="0" class="center">MATK', 0),
            myInnerHtml("EN1057", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC28" value="0" class="center" disabled><S>Max MATK</S>', 0),
            myInnerHtml("EN1059", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC29" value="0" class="center" disabled><S>% ASPD</S>', 0),
            myInnerHtml("EN1067", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC33" value="0" class="center">AGI ', 0),
            myInnerHtml("EN1069", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC34" value="0" class="center">VIT', 0),
            myInnerHtml("EN1071", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC35" value="0" class="center">INT', 0),
            myInnerHtml("EN1073", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC36" value="0" class="center">DEX', 0),
            myInnerHtml("EN1075", '+<input type="text" inputmode="numeric" maxlength="3" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC37" value="0" class="center">LUK', 0);
            for(j = 1; j < 5; j++){
                c.Bman4.options[j-1] = new Option(j, j-1);
            }
            
            c.BRG_RC0.value = n_B_manual[1],
            c.Bman1.value = n_B_manual[2],
            c.BRG_RC1.value = n_B_manual[3],
            c.Bman2.value = n_B_manual[4],
            c.BRG_RC2.value = n_B_manual[5],
            c.BRG_RC3.value = n_B_manual[7],
            c.BRG_RC4.value = n_B_manual[9],
            c.BRG_RC10.value = n_B_manual[21],
            c.BRG_RC15.value = n_B_manual[30],
            c.BRG_RC16.value = n_B_manual[31],
            c.BRG_RC19.value = n_B_manual[34],
            c.BRG_RC20.value = n_B_manual[35],
            c.BRG_RC21.value = n_B_manual[36],
            c.BRG_RC22.value = n_B_manual[37],
            c.BRG_RC23.value = n_B_manual[38],
            c.BRG_RC24.value = n_B_manual[39],
            c.BRG_RC25.value = n_B_manual[40],
            c.BRG_RC26.value = n_B_manual[41],
            c.BRG_RC27.value = n_B_manual[42],
            c.BRG_RC28.value = n_B_manual[43],
            c.BRG_RC29.value = n_B_manual[44],
            c.BRG_RC33.value = n_B_manual[48],
            c.BRG_RC34.value = n_B_manual[49],
            c.BRG_RC35.value = n_B_manual[50],
            c.BRG_RC36.value = n_B_manual[51],
            c.BRG_RC37.value = n_B_manual[52],
            c.BRG_RC38.value = n_B_manual[53],
            c.BRG_RC39.value = n_B_manual[54],
            c.BRG_RC40.value = n_B_manual[55],
            c.Bman3.value = n_B_manual[56],
            c.Bman4.value = n_B_manual[57],
            c.B_mEle.checked = n_B_manual[58]
    } else {
        var _;
        _ = '<TR><TD id="A10TD" class="subheader point" onclick="Buf10SW(1)">Manual Edits on Enemy <SPAN id="A10used"></SPAN>',
            myInnerHtml("B_MANUAL", _ += '<div class="right">(click to show)</div></TD></TR>', 0)
    }
    A10(0)
}
function maxLengthCheck(e) {
    e.value.length > e.max.length && (e.value = e.value.slice(0, e.max.length))
}
function isNumeric(e) {
    var _ = e || window.event
        , n = _.keyCode || _.which;
    n = String.fromCharCode(n);
    /[0-9]|\-/.test(n) || (_.returnValue = !1,
        _.preventDefault && _.preventDefault())
}
function A10(e) {
    1 == e && calc();
    for (var _ = 0, n = 0; n < n_B_manual.length; n++)
        if (0 != n_B_manual[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("A10TD").style.backgroundColor = sBGC[l],
        myInnerHtml("A10used", "", 0)) : (document.getElementById("A10TD").style.backgroundColor = saBGC[l],
            myInnerHtml("A10used", " [active]", 0))
}
function debufSW(e) {
    if (n_debufSW = e,
        n_debufSW) {
        n = '<TR><TD id="AITD" ColSpan="4" class="subheader point" onClick="debufSW(0)">Debuffs on Enemy <span id="AIused"></span>',
            n += '<div class="right">(hide)</div></TD></TR>',
            n += '<TR><TD id="BI18_1" class="center" style="width:90px;">Mind Breaker</TD><TD id="BI18_2" class="data"></TD><TD id="BI2_1" class="center">Poison</TD><TD id="BI2_2"></TD></TR>',
            n += '<TR><TD id="BI0_1" class="center">Provoke</TD><TD id="BI0_2" class="data"></TD><TD id="BI3_1" class="center">Blind</TD><TD id="BI3_2"></TD></TR>',
            n += '<TR><TD id="BI12_1" class="center">Signum Crucis</TD><TD id="BI12_2" class="data"></TD><TD id="BI10_1" class="center">Curse</TD><TD id="BI10_2"></TD></TR>',
            n += '<TR><TD id="BI5_1" class="center">Blessing</TD><TD id="BI5_2" class="data"></TD><TD id="BI7_1" class="center">Stun</TD><TD id="BI7_2"></TD></TR>',
            n += '<TR><TD id="BI6_1" class="center">Lex Aeterna</TD><TD id="BI6_2" class="data"></TD><TD id="BI4_1" class="center">Frozen</TD><TD id="BI4_2"></TD></TR>',
            n += '<TR><TD id="BI11_1" class="center">Decrease AGI</TD><TD id="BI11_2" class="data"></TD><TD id="BI9_1" class="center">Stone</TD><TD id="BI9_2"></TD></TR>',
            n += '<TR><TD id="BI17_1" class="center">Spider Web</TD><TD id="BI17_2" class="data"></TD><TD id="BI8_1" class="center">Sleep</TD><TD id="BI8_2"></TD></TR>',
            n += '<TR><TD id="BI1_1" class="center">Quagmire</TD><TD id="BI1_2" class="data"></TD><TD id="BI19_1" class="center">' + skillName(211, SRV) + '</TD><TD id="BI19_2"></TD></TR>',
            n += '<TR><TD id="BI24_1" class="center dotB">Flying</TD><TD id="BI24_2" class="data dotB"></TD><TD id="BI20_1" class="center dotB">' + skillName(218, SRV) + '</TD><TD id="BI20_2" class="dotB"></TD></TR>',
            n += '<TR><TD class="center" ColSpan="4"><b>Monster Exclusive Debuffs</b></TD></TR>',
            n += '<TR><TD id="BI13_1" class="center">' + skillName(172, SRV) + '</TD><TD id="BI13_2" class="data"></TD><TD id="BI14_1" class="center">' + skillName(173, SRV) + '</TD><TD id="BI14_2"></TD></TR>',
            n += '<TR><TD id="BI15_1" class="center">' + skillName(174, SRV) + '</TD><TD id="BI15_2" class="data"></TD><TD id="BI16_1" class="center">' + skillName(175, SRV) + '</TD><TD id="BI16_2"></TD></TR>',
            n += '<TR><TD id="BI21_1" class="center">Eska</TD><TD id="BI21_2" class="data"></TD><TD id="BI22_1" class="center">Eske</TD><TD id="BI22_2"></TD></TR>',
            myInnerHtml("EnemyDebuf", n += '<TR><TD id="BI23_1" class="center" colspan="4"></TD></TR>', 0),
            myInnerHtml("BI0_2", '<select name="B_debuf0" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI1_2", '<select name="B_debuf1" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI2_2", '<input type="checkbox" name="B_debuf2" onClick="AI(1)">', 0),
            myInnerHtml("BI3_2", '<input type="checkbox" name="B_debuf3" onClick="AI(1)">', 0),
            myInnerHtml("BI4_2", '<input type="checkbox" name="B_debuf4" onClick="AI(1)">', 0),
            myInnerHtml("BI5_2", '<input type="checkbox" name="B_debuf5" onClick="AI(1)">', 0),
            myInnerHtml("BI6_2", '<input type="checkbox" name="B_debuf6" onClick="AI(1)">', 0),
            myInnerHtml("BI7_2", '<input type="checkbox" name="B_debuf7" onClick="AI(1)">', 0),
            myInnerHtml("BI8_2", '<input type="checkbox" name="B_debuf8" onClick="AI(1)">', 0),
            myInnerHtml("BI9_2", '<input type="checkbox" name="B_debuf9" onClick="AI(1)">', 0),
            myInnerHtml("BI10_2", '<input type="checkbox" name="B_debuf10" onClick="AI(1)">', 0),
            myInnerHtml("BI11_2", '<select name="B_debuf11" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI12_2", '<select name="B_debuf12" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI17_2", '<input type="checkbox" name="B_debuf17" onClick="AI(1)">', 0),
            myInnerHtml("BI18_2", '<select name="B_debuf18" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI19_2", '<input type="checkbox" name="B_debuf19" onClick="AI(1)">', 0),
            myInnerHtml("BI20_2", '<input type="checkbox" name="B_debuf20" onClick="AI(1)">', 0),
            myInnerHtml("BI24_2", '<select name="B_debuf24" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI13_2", '<input type="checkbox" name="B_debuf13" onClick="AI(1)">', 0),
            myInnerHtml("BI14_2", '<input type="checkbox" name="B_debuf14" onClick="AI(1)">', 0),
            myInnerHtml("BI15_2", '<input type="checkbox" name="B_debuf15" onClick="AI(1)">', 0),
            myInnerHtml("BI16_2", '<input type="checkbox" name="B_debuf16" onClick="AI(1)">', 0),
            myInnerHtml("BI21_2", '<input type="checkbox" name="B_debuf21" onClick="AI(1)">', 0),
            myInnerHtml("BI22_2", '<input type="checkbox" name="B_debuf22" onClick="AI(1)">', 0),
            myInnerHtml("BI23_1", 'Elemental Change (Sage Skill) <select name="B_debuf23" onChange="AI(1)||debufSW(1)"></select>', 0);
        var _ = ["(none)", "Water", "Earth", "Fire", "Wind"];
        for (i = 0; i <= 4; i++)
            c.B_debuf23.options[i] = new Option(_[i], i);
        for (n_B[19] ? (myInnerHtml("BI18_1", "<S>Mind Breaker</S>", 0),
            c.B_debuf18.disabled = !0,
            c.B_debuf18.value = 0,
            n_B_debuf[18] = 0,
            myInnerHtml("BI0_1", "<S>Provoke</S>", 0),
            c.B_debuf0.disabled = !0,
            c.B_debuf0.value = 0,
            n_B_debuf[0] = 0,
            myInnerHtml("BI11_1", "<S>Decrease AGI</S>", 0),
            c.B_debuf11.disabled = !0,
            c.B_debuf11.value = 0,
            n_B_debuf[11] = 0,
            myInnerHtml("BI2_1", "<S>Poison</S>", 0),
            c.B_debuf2.disabled = !0,
            c.B_debuf2.value = 0,
            n_B_debuf[2] = 0,
            myInnerHtml("BI3_1", "<S>Blind</S>", 0),
            c.B_debuf3.disabled = !0,
            c.B_debuf3.value = 0,
            n_B_debuf[3] = 0,
            myInnerHtml("BI10_1", "<S>Curse</S>", 0),
            c.B_debuf10.disabled = !0,
            c.B_debuf10.value = 0,
            n_B_debuf[10] = 0,
            myInnerHtml("BI7_1", "<S>Stun</S>", 0),
            c.B_debuf7.disabled = !0,
            c.B_debuf7.value = 0,
            n_B_debuf[7] = 0,
            myInnerHtml("BI4_1", "<S>Frozen</S>", 0),
            c.B_debuf4.disabled = !0,
            c.B_debuf4.value = 0,
            n_B_debuf[4] = 0,
            myInnerHtml("BI9_1", "<S>Stone</S>", 0),
            c.B_debuf9.disabled = !0,
            c.B_debuf9.value = 0,
            n_B_debuf[9] = 0,
            myInnerHtml("BI8_1", "<S>Sleep</S>", 0),
            c.B_debuf8.disabled = !0,
            c.B_debuf8.value = 0,
            n_B_debuf[8] = 0) : n_B[3] < 90 || 0 != c.B_debuf23.value || 0 != n_B_debuf[23] || n_B_buf[6] < 90 && 0 != n_B_buf[6] ? (myInnerHtml("BI18_1", "Mind Breaker", 0),
                c.B_debuf18.disabled = !1,
                myInnerHtml("BI0_1", "Provoke", 0),
                c.B_debuf0.disabled = !1,
                myInnerHtml("BI11_1", "Decrease AGI", 0),
                c.B_debuf11.disabled = !1,
                myInnerHtml("BI4_1", "Frozen", 0),
                c.B_debuf4.disabled = !1,
                myInnerHtml("BI9_1", "Stone", 0),
                c.B_debuf9.disabled = !1) : (myInnerHtml("BI2_1", "Poison", 0),
                    c.B_debuf2.disabled = !1,
                    myInnerHtml("BI3_1", "Blind", 0),
                    c.B_debuf3.disabled = !1,
                    myInnerHtml("BI10_1", "Curse", 0),
                    c.B_debuf10.disabled = !1,
                    myInnerHtml("BI7_1", "Stun", 0),
                    c.B_debuf7.disabled = !1,
                    myInnerHtml("BI8_1", "Sleep", 0),
                    c.B_debuf8.disabled = !1,
                    myInnerHtml("BI18_1", "<S>Mind Breaker</S>", 0),
                    c.B_debuf18.disabled = !0,
                    c.B_debuf18.value = 0,
                    n_B_debuf[18] = 0,
                    myInnerHtml("BI0_1", "<S>Provoke</S>", 0),
                    c.B_debuf0.disabled = !0,
                    c.B_debuf0.value = 0,
                    n_B_debuf[0] = 0,
                    myInnerHtml("BI4_1", "<S>Frozen</S>", 0),
                    c.B_debuf4.disabled = !0,
                    c.B_debuf4.value = 0,
                    n_B_debuf[4] = 0,
                    myInnerHtml("BI9_1", "<S>Stone</S>", 0),
                    c.B_debuf9.disabled = !0,
                    c.B_debuf9.value = 0,
                    n_B_debuf[9] = 0),
            6 == n_B[2] || n_B[3] >= 90 && (0 == c.B_debuf23.value || 0 == n_B_debuf[23] || n_B_buf[6] >= 90) ? (myInnerHtml("BI5_1", "Blessing", 0),
                c.B_debuf5.disabled = !1,
                myInnerHtml("BI12_1", "Signum Crucis", 0),
                c.B_debuf12.disabled = !1) : (myInnerHtml("BI5_1", "<S>Blessing</S>", 0),
                    c.B_debuf5.disabled = !0,
                    c.B_debuf5.value = 0,
                    n_B_debuf[5] = 0,
                    myInnerHtml("BI12_1", "<S>Signum Crucis</S>", 0),
                    c.B_debuf12.disabled = !0,
                    c.B_debuf12.value = 0,
                    n_B_debuf[12] = 0),
            i = 0; i <= 10; i++)
            c.B_debuf0.options[i] = new Option(i, i),
                c.B_debuf11.options[i] = new Option(i, i),
                c.B_debuf12.options[i] = new Option(i, i);
        for (i = 0; i <= 5; i++)
            c.B_debuf1.options[i] = new Option(i, i),
                c.B_debuf18.options[i] = new Option(i, i),
                c.B_debuf24.options[i] = new Option(i, i);
        c.B_debuf0.value = n_B_debuf[0],
            c.B_debuf1.value = n_B_debuf[1],
            c.B_debuf2.checked = n_B_debuf[2],
            c.B_debuf3.checked = n_B_debuf[3],
            c.B_debuf4.checked = n_B_debuf[4],
            c.B_debuf5.checked = n_B_debuf[5],
            c.B_debuf6.checked = n_B_debuf[6],
            c.B_debuf7.checked = n_B_debuf[7],
            c.B_debuf8.checked = n_B_debuf[8],
            c.B_debuf9.checked = n_B_debuf[9],
            c.B_debuf10.checked = n_B_debuf[10],
            c.B_debuf11.value = n_B_debuf[11],
            c.B_debuf12.value = n_B_debuf[12],
            c.B_debuf17.checked = n_B_debuf[17],
            c.B_debuf18.value = n_B_debuf[18],
            c.B_debuf19.checked = n_B_debuf[19],
            c.B_debuf20.checked = n_B_debuf[20],
            0 == PvP && (c.B_debuf13.checked = n_B_debuf[13],
                c.B_debuf14.checked = n_B_debuf[14],
                c.B_debuf15.checked = n_B_debuf[15],
                c.B_debuf16.checked = n_B_debuf[16],
                c.B_debuf21.checked = n_B_debuf[21],
                c.B_debuf22.checked = n_B_debuf[22],
                c.B_debuf23.value = n_B_debuf[23]),
            c.B_debuf24.value = n_B_debuf[24]
    } else {
        var n;
        n = '<TR><TD id="AITD" class="subheader point" onClick="debufSW(1)">Debuffs on Enemy <span id="AIused"></span>',
            myInnerHtml("EnemyDebuf", n += '<div class="right">(show)</div></TD></TR>', 0)
    }
    AI(0)
}
function AI(e) {
    1 == e && calc();
    for (var _ = 0, n = 0; n <= 24; n++)
        if (0 != n_B_debuf[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("AITD").style.backgroundColor = sBGC[l],
        myInnerHtml("AIused", "", 0)) : (document.getElementById("AITD").style.backgroundColor = saBGC[l],
            myInnerHtml("AIused", " [active]", 0))
}
function EnemyBufSW(e) {
    if (n_BbufSW = e,
        n_BbufSW) {
        for (n = '<TR><TD id="AKTD" colspan="4" class="subheader point" onClick="EnemyBufSW(0)">Buffs on Enemy <span id="AKused"></span>',
            n += '<div class="right">(click to hide)</div></TD></TR>',
            n += '<TR><TD class="center">Increase AGI</TD><TD id="ID_Kb0" class="data"></TD><TD class="center">Assumptio</TD><TD id="ID_Kb1"></TD></TR>',
            n += '<TR><TD class="center">Angelus</TD><TD id="ID_Kb10" class="data"></TD><TD class="center">Maximize Power</TD><TD id="ID_Kb3"></TD></TR>',
            n += '<TR><TD class="center">' + skillName(157, SRV) + '</TD><TD id="ID_Kb11" class="data"></TD><TD class="center">Adrenaline Rush</TD><TD id="ID_Kb2"></TD></TR>',
            n += '<TR><TD class="center">Shield Reflect</TD><TD id="ID_Kb12" class="data"></TD><TD class="center">' + skillName(165, SRV) + '</TD><TD id="ID_Kb13"></TD></TR>',
            n += '<TR><TD class="center dotB">Energy Coat</TD><TD id="ID_Kb14" class="dotB" colspan="3"></TD></TR>',
            n += '<TR><TD class="center" colspan="4"><b>Monster Exclusive buffs</b></TD></TR>',
            n += '<TR><TD class="center">Attrib. Change</TD><TD id="ID_Kb6" class="data"></TD><TD class="center">Stone Skin</TD><TD id="ID_Kb7"></TD></TR>',
            n += '<TR><TD class="center">Keeping</TD><TD id="ID_Kb9" class="data"></TD><TD class="center">Magic Mirror</TD><TD id="ID_Kb8"></TD></TR>',
            n += '<TR><TD class="center"></TD><TD id="ID_Kb15" class="data"></TD><TD class="center">Agi Up (Flee Up)</TD><TD id="ID_Kb5"></TD></TR>',
            myInnerHtml("EnemyBuf", n += '<TR><TD class="center" colspan="2">POWER UP (ATK x3, HIT x2)</TD><TD id="ID_Kb4" colspan="2"></TD></TR>', 0),
            myInnerHtml("ID_Kb0", '<select name="B_buf0" onChange="AK(1)"></select>', 0),
            myInnerHtml("ID_Kb1", '<input type="checkbox" name="B_buf1" onClick="AK(1)">', 0),
            myInnerHtml("ID_Kb2", '<input type="checkbox" name="B_buf2" onClick="AK(1)">', 0),
            myInnerHtml("ID_Kb3", '<input type="checkbox" name="B_buf3" onClick="AK(1)">', 0),
            myInnerHtml("ID_Kb10", '<select name="B_buff10" onChange="AK(1)"></select>', 0),
            myInnerHtml("ID_Kb11", '<select name="B_buff11" onChange="AK(1)"></select>', 0),
            myInnerHtml("ID_Kb12", '<select name="B_buff12" onChange="AK(1)"></select>', 0),
            myInnerHtml("ID_Kb13", '<select name="B_buff13" onChange="AK(1)"></select>', 0),
            myInnerHtml("ID_Kb14", '<select name="B_buff14" onChange="AK(1)"></select>', 0),
            myInnerHtml("ID_Kb4", '<input type="checkbox" name="B_buf4" onClick="AK(1)">', 0),
            myInnerHtml("ID_Kb5", '<select name="B_buf5" onChange="AK(1)"></select>', 0),
            myInnerHtml("ID_Kb6", '<select name="B_buf6" onChange="AK(1)||debufSW(n_debufSW)"></select>', 0),
            myInnerHtml("ID_Kb7", '<select name="B_buf7" onChange="AK(1)"></select>', 0),
            myInnerHtml("ID_Kb8", '<select name="B_buf8" onChange="AK(1)"></select>', 0),
            myInnerHtml("ID_Kb9", '<input type="checkbox" name="B_buf9" onClick="AK(1)">', 0),
            i = 0; i <= 10; i++)
            c.B_buf0.options[i] = new Option(i, i),
                c.B_buff10.options[i] = new Option(i, i),
                c.B_buff11.options[i] = new Option(i, i),
                c.B_buff12.options[i] = new Option(i, i);
        for (i = 0; i <= 5; i++)
            c.B_buf5.options[i] = new Option(i, i),
                c.B_buf7.options[i] = new Option(i, i),
                c.B_buf8.options[i] = new Option(i, i),
                c.B_buff13.options[i] = new Option(i, i),
                c.B_buff14.options[i] = new Option(v_EnergyCoat[i], i);
        var _ = [["(none)", "Neutral 1", "Neutral 2", "Neutral 3", "Neutral 4", "Water 1", "Water 2", "Water 3", "Water 4", "Earth 1", "Earth 2", "Earth 3", "Earth 4", "Fire 1", "Fire 2", "Fire 3", "Fire 4", "Wind 1", "Wind 2", "Wind 3", "Wind 4", "Poison 1", "Poison 2", "Poison 3", "Poison 4", "Holy 1", "Holy 2", "Holy 3", "Holy 4", "Shadow 1", "Shadow 2", "Shadow 3", "Shadow 4", "Ghost 1", "Ghost 2", "Ghost 3", "Ghost 4", "Undead 1", "Undead 2", "Undead 3", "Undead 4"], [0, 1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52, 53, 54, 61, 62, 63, 64, 71, 72, 73, 74, 81, 82, 83, 84, 91, 92, 93, 94]];
        for (i = 0; i <= 40; i++)
            c.B_buf6.options[i] = new Option(_[0][i], _[1][i]);
        c.B_buf0.value = n_B_buf[0],
            c.B_buf1.checked = n_B_buf[1],
            c.B_buf2.checked = n_B_buf[2],
            c.B_buf3.checked = n_B_buf[3],
            c.B_buf4.checked = n_B_buf[4],
            c.B_buf5.value = n_B_buf[5],
            c.B_buf6.value = n_B_buf[6],
            c.B_buf7.value = n_B_buf[7],
            c.B_buf8.value = n_B_buf[8],
            c.B_buf9.checked = n_B_buf[9],
            c.B_buff10.value = n_B_buf[10],
            c.B_buff11.value = n_B_buf[11],
            c.B_buff12.value = n_B_buf[12],
            c.B_buff13.value = n_B_buf[13],
            c.B_buff14.value = n_B_buf[14]
    } else {
        var n;
        n = '<TR><TD id="AKTD" class="subheader point" onClick="EnemyBufSW(1)">Buffs on Enemy <span id="AKused"></span>',
            myInnerHtml("EnemyBuf", n += '<div class="right">(click to show)</div></TD></TR>', 0)
    }
    AK(0)
}
function AK(e) {
    1 == e && calc();
    for (var _ = 0, n = 0; n <= 14; n++)
        if (0 != n_B_buf[n]) {
            _ = 1;
            break
        }
    var l = c.theme.value;
    0 == _ ? (document.getElementById("AKTD").style.backgroundColor = sBGC[l],
        myInnerHtml("AKused", "", 0)) : (document.getElementById("AKTD").style.backgroundColor = saBGC[l],
            myInnerHtml("AKused", " [active]", 0))
}
function ClickB_Enemy() {
    for (SRV = 1 * c.server.value,
        n_B = new Array,
        n_B2 = new Array,
        i = 0; i <= 22; i++)
        n_B[i] = m_Monster[c.B_Enemy.value][i],
            n_B2[i] = n_B[i];
    586 == n_B[0] ? PvP = 1 : PvP = 0,
        n_B[6] += n_B_manual[30],
        n_B[6] += Math.floor(n_B[6] * n_B_manual[31] / 100),
        n_B[7] += n_B_manual[49],
        n_B[8] += n_B_manual[48],
        n_B[9] += n_B_manual[50],
        n_B[10] += n_B_manual[51],
        n_B[11] += n_B_manual[52],
        n_B[12] += n_B_manual[40],
        n_B[12] += Math.floor(n_B[12] * n_B_manual[53] / 100),
        n_B[13] += n_B_manual[40],
        n_B[13] += Math.floor(n_B[13] * n_B_manual[53] / 100),
        n_B[14] += n_B_manual[34],
        n_B[15] += n_B_manual[35],
        586 == n_B[0] ? (n_B[23] = Math.floor(.5 * n_B[7]) + Math.floor(.3 * n_B[7]),
            n_B[24] = Math.floor(.5 * n_B[7]) + Math.floor(n_B[7] * n_B[7] / 150) - 1,
            n_B[23] > n_B[24] && (n_B[24] = n_B[23])) : (n_B2[23] = n_B[7],
                n_B2[24] = n_B[7] + (Math.floor(n_B[7] / 20) * Math.floor(n_B[7] / 20) - 1),
                n_B2[23] > n_B2[24] && (n_B2[24] = n_B2[23])),
        myInnerHtml("B_6", n_B[6], 0),
        myInnerHtml("B_16", n_B[16], 0),
        myInnerHtml("B_12", n_B[12], 0),
        myInnerHtml("B_13", n_B[13], 0),
        myInnerHtml("B_17", n_B[17], 0),
        myInnerHtml("B_14", n_B[14], 0),
        myInnerHtml("B_23", n_B[23], 0),
        myInnerHtml("B_15", n_B[15], 0),
        myInnerHtml("B_vit", n_B[7], 0),
        myInnerHtml("B_agi", n_B[8], 0),
        myInnerHtml("B_int", n_B[9], 0),
        myInnerHtml("B_dex", n_B[10], 0),
        myInnerHtml("B_luk", n_B[11], 0),
        PvP ? (n_B[23] = Math.floor(.5 * n_B[7]) + Math.floor(.3 * n_B[7]),
            n_B[24] = Math.floor(.5 * n_B[7]) + Math.floor(n_B[7] * n_B[7] / 150) - 1,
            n_B[23] > n_B[24] && (n_B[24] = n_B[23])) : (n_B2[23] = n_B[7],
                n_B2[24] = n_B[7] + (Math.floor(n_B[7] / 20) * Math.floor(n_B[7] / 20) - 1),
                n_B2[23] > n_B2[24] && (n_B2[24] = n_B2[23])),
        n_B2[25] = Math.floor(n_B[7] / 2) + n_B[9],
        SRV < 50 ? (n_B2[26] = n_B[5] + n_B[10],
            n_B2[27] = n_B[5] + n_B[8]) : (n_B2[26] = 175 + n_B[5] + n_B[10],
                n_B2[27] = 100 + n_B[5] + n_B[8]),
        n_debufSW && (n_B_debuf[0] = 1 * c.B_debuf0.value,
            n_B_debuf[1] = 1 * c.B_debuf1.value,
            n_B_debuf[2] = c.B_debuf2.checked,
            n_B_debuf[3] = c.B_debuf3.checked,
            n_B_debuf[4] = c.B_debuf4.checked,
            n_B_debuf[5] = c.B_debuf5.checked,
            n_B_debuf[6] = c.B_debuf6.checked,
            n_B_debuf[7] = c.B_debuf7.checked,
            n_B_debuf[8] = c.B_debuf8.checked,
            n_B_debuf[9] = c.B_debuf9.checked,
            n_B_debuf[10] = c.B_debuf10.checked,
            n_B_debuf[11] = 1 * c.B_debuf11.value,
            n_B_debuf[12] = 1 * c.B_debuf12.value,
            n_B_debuf[17] = c.B_debuf17.checked,
            n_B_debuf[18] = 1 * c.B_debuf18.value,
            n_B_debuf[19] = c.B_debuf19.checked,
            n_B_debuf[20] = c.B_debuf20.checked,
            n_B_debuf[24] = 1 * c.B_debuf24.value,
            0 == PvP && (n_B_debuf[13] = c.B_debuf13.checked,
                n_B_debuf[14] = c.B_debuf14.checked,
                n_B_debuf[15] = c.B_debuf15.checked,
                n_B_debuf[16] = c.B_debuf16.checked,
                n_B_debuf[21] = c.B_debuf21.checked,
                n_B_debuf[22] = c.B_debuf22.checked,
                n_B_debuf[23] = 1 * c.B_debuf23.value),
            debufSW(n_debufSW)),
        n_BbufSW && (n_B_buf[0] = 1 * c.B_buf0.value,
            n_B_buf[1] = c.B_buf1.checked,
            n_B_buf[2] = c.B_buf2.checked,
            n_B_buf[3] = c.B_buf3.checked,
            n_B_buf[4] = c.B_buf4.checked,
            n_B_buf[5] = 1 * c.B_buf5.value,
            n_B_buf[6] = 1 * c.B_buf6.value,
            n_B_buf[7] = 1 * c.B_buf7.value,
            n_B_buf[8] = 1 * c.B_buf8.value,
            n_B_buf[9] = c.B_buf9.checked,
            n_B_buf[10] = 1 * c.B_buff10.value,
            n_B_buf[11] = 1 * c.B_buff11.value,
            n_B_buf[12] = 1 * c.B_buff12.value,
            n_B_buf[13] = 1 * c.B_buff13.value,
            n_B_buf[14] = 1 * c.B_buff14.value),
        n_B_buf[6] && (n_B[3] = n_B_buf[6]),
        n_B_debuf[23] && (n_B[3] = 10 * n_B_debuf[23] + n_B[3] % 10),
        0 == n_B[19] && n_B[3] < 90 && n_B_debuf[4] && (n_B[3] = 11),
        0 == n_B[19] && n_B[3] < 90 && n_B_debuf[9] && (n_B[3] = 21),
        n_B_buf[3] && (n_B[12] = n_B[13]),
        0 == n_B[19] && n_B_debuf[10] && (n_B[12] -= Math.floor(25 * n_B[12] / 100),
            n_B[13] -= Math.floor(25 * n_B[13] / 100));
    var e, _ = 0;
    (0 == n_B[19] && 0 != n_B_debuf[0] && n_B[3] < 90 && (_ += 2 + 3 * n_B_debuf[0]),
        0 == PvP && n_B_debuf[22] && (_ += 300),
        n_B_buf[4] && (_ += 200),
        n_B[12] += Math.floor(n_B[12] * _ / 100),
        n_B[13] += Math.floor(n_B[13] * _ / 100),
        n_B_debuf[13] && 0 == PvP && (n_B[12] -= Math.floor(25 * n_B[12] / 100),
            n_B[13] -= Math.floor(25 * n_B[13] / 100)),
        n_B_buf[0] && (n_B[8] += 2 + n_B_buf[0]),
        n_B_debuf[1]) && (PvP ? (e = 5 * n_B_debuf[1],
            l = Math.floor(n_B[8] / 4)) : (e = 10 * n_B_debuf[1],
                l = Math.floor(n_B[8] / 2)),
            n_B[8] -= l > e ? e : l);
    (0 == n_B[19] && n_B_debuf[11] && (n_B[8] -= n_B_debuf[11] + 2,
        n_B[8] < 0 && (n_B[8] = 0)),
        n_B_debuf[1]) && (PvP ? (e = 5 * n_B_debuf[1],
            l = Math.floor(n_B[10] / 4)) : (e = 10 * n_B_debuf[1],
                l = Math.floor(n_B[10] / 2)),
            n_B[10] -= l > e ? e : l);
    0 == n_B[19] && n_B_debuf[5] && (6 == n_B[2] || n_B[3] >= 90) && (n_B[10] = n_B[10] - Math.floor(n_B[10] / 2)),
        n_B_debuf[15] && 0 == PvP && (n_B[7] -= Math.floor(40 * n_B[7] / 100)),
        0 == n_B[19] && n_B_debuf[5] && (6 == n_B[2] || n_B[3] >= 90) && (n_B[9] = n_B[9] - Math.floor(n_B[9] / 2)),
        n_B_debuf[16] && 0 == PvP && (n_B[9] -= Math.floor(40 * n_B[9] / 100)),
        0 == n_B[19] && n_B_debuf[10] && (n_B[11] = 0),
        0 == PvP && (n_B[23] = n_B[7],
            n_B[24] = n_B[7] + (Math.floor(n_B[7] / 20) * Math.floor(n_B[7] / 20) - 1),
            n_B[23] > n_B[24] && (n_B[24] = n_B[23])),
        (l = n_B_buf[10]) && (n_B[23] = Math.floor(n_B[23] * (1 + .05 * l)),
            n_B[24] = Math.floor(n_B[24] * (1 + .05 * l))),
        n_B[25] = Math.floor(n_B[7] / 2) + n_B[9],
        SRV < 50 ? (n_B[26] = n_B[5] + n_B[10],
            n_B[27] = n_B[5] + n_B[8]) : (n_B[26] = 175 + n_B[5] + n_B[10],
                n_B[27] = 100 + n_B[5] + n_B[8]);
    var n = 0;
    0 == n_B[19] && 0 != n_B_debuf[0] && n_B[3] < 90 && (n += 5 + 5 * n_B_debuf[0]),
        0 == PvP && n_B_debuf[22] && (n += 50),
        0 == PvP && n_B_debuf[24] && (n += 5 * n_B_debuf[24]),
        n > 100 && (n = 100),
        0 == PvP && (n_B[14] -= Math.floor(n_B[14] * n / 100)),
        0 == n_B[19] && n_B_debuf[2] && (n_B[14] -= Math.floor(25 * n_B[14] / 100));
    var l = 0;
    l += n_tok[290],
    0 == n_B[19] && (l += n_tok[291]),
    1 == n_B[19] && (l += n_tok[292]),
    l += n_tok[300 + n_B[2]],
        /* SRV ? (0 == n_B[19] && (l += n_tok[291]),
            1 == n_B[19] && (l += n_tok[292]),
            l += n_tok[300 + n_B[2]],
            324 != n_A_ActiveSkill && 159 != n_A_ActiveSkill && 384 != n_A_ActiveSkill && 162 != n_A_ActiveSkill && 193 != n_A_ActiveSkill && 405 != n_A_ActiveSkill && 438 != n_A_ActiveSkill || (l = 0)) : (l += n_tok[300 + n_B[2]],
                324 != n_A_ActiveSkill && 159 != n_A_ActiveSkill && 384 != n_A_ActiveSkill && 162 != n_A_ActiveSkill && 193 != n_A_ActiveSkill && 405 != n_A_ActiveSkill && 438 != n_A_ActiveSkill || (l = 0)), */
        l && (l < 0 && (l = 0),
            n_B[14] -= Math.floor(n_B[14] * l / 100)),
        n_B_debuf[14] && 0 == PvP && (n_B[14] -= Math.floor(15 * n_B[14] / 100)),
        0 == n_B[19] && n_B_debuf[4] && n_B[3] < 90 && (n_B[14] -= Math.floor(50 * n_B[14] / 100)),
        0 == n_B[19] && n_B_debuf[9] && n_B[3] < 90 && (n_B[14] -= Math.floor(50 * n_B[14] / 100)),
        n_B_buf[9] && (SRV ? n_B[14] = 90 : n_B[14] *= 2),
        n_B_debuf[12] && (6 == n_B[2] || n_B[3] >= 90) && (n_B[14] -= Math.floor(n_B[14] * (10 + 4 * n_B_debuf[12]) / 100)),
        n_B_debuf[20] && 0 == PvP && (n_B[14] = 0),
        n_B[23] -= Math.floor(n_B[23] * n / 100),
        n_B[24] -= Math.floor(n_B[24] * n / 100),
        0 == n_B[19] && n_B_debuf[2] && (n_B[23] -= Math.floor(25 * n_B[23] / 100),
            n_B[24] -= Math.floor(25 * n_B[24] / 100)),
        0 == n_B[19] && n_B_debuf[4] && n_B[3] < 90 && (n_B[23] -= Math.floor(50 * n_B[23] / 100),
            n_B[24] -= Math.floor(50 * n_B[24] / 100)),
        0 == n_B[19] && n_B_debuf[9] && n_B[3] < 90 && (n_B[23] -= Math.floor(50 * n_B[23] / 100),
            n_B[24] -= Math.floor(50 * n_B[24] / 100)),
        0 == PvP && n_B_buf[8] && (n_B[23] -= Math.floor(20 * n_B[23] * n_B_buf[8] / 100),
            n_B[24] -= Math.floor(20 * n_B[24] * n_B_buf[8] / 100)),
        0 == PvP && n_B_debuf[21] && (n_B[24] += 90),
        n_B_debuf[20] && (n_B[23] = 0,
            n_B[24] = 0);
    l = 0;
    if (l += n_tok[295],
        l += n_B[3] < 5 ? n_tok[360] : n_tok[360 + Math.floor(Math.abs(n_B[3]) / (10 ** (String(n_B[3]).length - 1)))], // pierce mdef on element
        (l += n_tok[310 + n_B[2]]) && (l < 0 && (l = 0), // pierce mdef on race
            n_B[15] -= Math.floor(n_B[15] * l / 100)),
        0 == n_B[19] && n_B_debuf[4] && n_B[3] < 90 && (n_B[15] += Math.floor(25 * n_B[15] / 100)),
        0 == n_B[19] && n_B_debuf[9] && n_B[3] < 90 && (n_B[15] += Math.floor(25 * n_B[15] / 100)),
        0 == n_B[19] && n_B_debuf[18] && n_B[3] < 90 && (n_B[25] -= Math.floor(n_B[25] * (12 * n_B_debuf[18]) / 100)),
        0 == PvP && n_B_buf[7] && (n_B[25] -= Math.floor(20 * n_B[25] * n_B_buf[7] / 100)),
        0 == PvP && n_B_debuf[21] && (n_B[25] = 90),
        n_B[26] += n_B_manual[36],
        0 == n_B[19] && n_B_debuf[3] && (n_B[26] -= 25,
            n_B[26] < 1 && (n_B[26] = 1)),
        !n_B[20] && 2 != c.B_AtkRange.value || 1 == c.B_AtkRange.value || n_A_Buf6[3] && (n_B[26] -= 50,
            n_B[26] < 1 && (n_B[26] = 1)),
        n_B_buf[4] && (n_B[26] = 2 * n_B[26]),
        n_B[27] += n_B_manual[37],
        0 == n_B[19] && n_B_debuf[3] && (n_B[27] -= Math.floor(25 * n_B[27] / 100)),
        0 != n_B_buf[5] && (n_B[27] = Math.floor(n_B[27] * (1 + .2 * n_B_buf[5]))),
        n_B_debuf[17] && (n_B[27] -= 50,
            n_B[27] < 0 && (n_B[27] = 0)),
        0 == n_B[19] && n_B_debuf[4] && n_B[3] < 90 && (n_B[27] = -19),
        0 == n_B[19] && n_B_debuf[9] && n_B[3] < 90 && (n_B[27] = -19),
        0 == n_B[19] && (n_B_debuf[7] || n_B_debuf[8]) && (n_B[27] = -19),
        0 == PvP) {
        var t = 100;
        t += StPlusCard(120 + n_B[2]),
            t += StPlusCalc2(120 + n_B[2]);
        var a = 0;
        EquipNumSearch(1030) && (t += 5 * EquipNumSearch(1030)),
            3 != n_A_JobClass() || !CardNumSearch(452) || 1 != n_B[2] && 6 != n_B[2] || (t += 5),
            2 == n_B[2] && 4 == n_A_JobClass() && CardNumSearch(453) && (t += 5),
            n_A_Buf8[1] && (t += 25 * n_A_Buf8[1]),
            n_A_Buf8[2] && (a += 50),
            n_A_Buf6[2] && (t += 100),
            (3 == c.A8_Skill14.value || n_A_Buf6[2]) && (t *= 2,
                a *= 2),
            0 == t && 0 == a || (n_B[16] = Math.floor(n_B[16] * t / 100),
                n_B[17] = Math.floor(n_B[17] * (t + a) / 100)),
            n_A_Buf8[5] && (n_B[16] = Math.floor(n_B[16] / (1 + n_A_Buf8[5]) + 1),
                n_B[17] = Math.floor(n_B[17] / (1 + n_A_Buf8[5]) + 1)),
            n_A_Buf8[6] && (n_B[16] = Math.floor(n_B[16] * (100 + 25 * n_A_Buf8[6]) / 100),
                n_B[17] = Math.floor(n_B[17] * (100 + 25 * n_A_Buf8[6]) / 100)),
            SkillSearch(367) && (n_B[16] = Math.floor(n_B[16] * (100 + 10 * SkillSearch(367)) / 100),
                n_B[17] = Math.floor(n_B[17] * (100 + 10 * SkillSearch(367)) / 100)),
            n_A_Buf8[7] && (n_B[17] = Math.floor(n_B[17] * (1 + n_A_Buf8[7]))),
            n_A_Buf8[3] && (n_B[16] = Math.floor(n_B[16] * (1 + n_A_Buf8[3]))),
            0 == n_B[19] && n_A_Buf3[8] && (n_B[16] = Math.floor(n_B[16] * (125 + 11 * n_A_Buf3[8]) / 100),
                n_B[17] = Math.floor(n_B[17] * (125 + 11 * n_A_Buf3[8]) / 100))
    }
    n_B[21] = n_B[27] + 20,
        n_B[22] = n_B[26] + 75,
        myInnerHtml("B_AA", " + ", 0),
        myInnerHtml("B_AB", " + ", 0);
    var o = [6, 12, 13, 21, 22, 14, 15, 23, 25]
        , A = [16, 17]
        , r = "<B style='color:blue'>"
        , s = "<B style='color:red'>"
        , u = "</B>";
    for (i = 0; i <= 8; i++) {
        var m = n_B[o[i]];
        n_B[o[i]] < n_B2[o[i]] && (m = r + n_B[o[i]] + u),
            n_B[o[i]] > n_B2[o[i]] && (m = s + n_B[o[i]] + u),
            myInnerHtml("B_" + o[i], m, 0)
    }
    if (0 == PvP)
        for (i = 0; i <= 1; i++) {
            m = n_B[A[i]];
            n_B[A[i]] < n_B2[A[i]] && (m = s + n_B[A[i]] + u),
                n_B[A[i]] > n_B2[A[i]] && (m = r + n_B[A[i]] + u),
                myInnerHtml("B_" + A[i], m, 0)
        }
    myInnerHtml("B_2", v_Race[n_B[2]], 0);
        if(n_B_manual[58]){
            manualElement = parseInt(n_B_manual[56].toString() + (n_B_manual[57]+1).toString()),
            n_B[3] = manualElement;
            n_B2[3] = manualElement;
        }
        l = Math.floor(n_B[3] / 10),
        n_B[3] != n_B2[3] ? myInnerHtml("B_3", "<b>" + s + (v_Element[l] + n_B[3] % 10) + u + "</b>", 0) : myInnerHtml("B_3", "<b>" + (v_Element[l] + n_B[3] % 10) + "</b>", 0),
        myInnerHtml("B_4", v_Size[n_B[4]], 0),
        myInnerHtml("B_type", v_Type[n_B[19]], 0),
        n_B[27] += n_B_manual[37],
        1 == c.A8_Skill14.value ? n_WoE = 1 : n_WoE = 0,
        n_WoE && (n_B[27] = Math.floor(.8 * n_B[27])),
        n_B_DEF2 = [0, 0, 0],
        n_B_DEF2[2] = n_B[23],
        n_B_DEF2[0] = n_B[24],
        n_B_DEF2[1] = Math.floor((n_B_DEF2[2] + n_B_DEF2[0]) / 2),
        n_B_MDEF2 = n_B[25],
        n_B_HIT = n_B[26],
        n_B_FLEE = n_B[27]

        for(var i = 0; i < m_MonsterNotes.length; i++){
            if(n_B[0] == m_MonsterNotes[i][0]){
                document.getElementById("monsterNotes").hidden = false;
                loadNotes(n_B[0]);
                break
            } else {
                document.getElementById("monsterNotes").hidden = true;
                resetNotesStats();
            }
        }

        for(var i = 0; i < m_PlaceNotes.length; i++){
            if(c.ENEMY_SORT2.value == m_PlaceNotes[i][0]){
                document.getElementById("monsterNotes").hidden = false;
                loadNotes(n_B[0]);
                break
            }
        }
}
function calc() {
    SRV = 1 * c.server.value;
    for (var e = 0; e <= 2; e++)
        InnStr[e] = "";
    StAllCalc(),
        wCSize = m_WeaponSize[n_A_WeaponType][n_B[4]];
    var _ = c.A_ActiveSkill.value
        , n = WeaponNameShort[n_A_WeaponType]
        , l = 0;
    158 != _ && 159 != _ && 384 != _ && 324 != _ || (n = "Shield",
        wCSize = 1,
        l = 1),
        SkillSearch(78) && (4 != n_A_WeaponType && 5 != n_A_WeaponType || 1 != n_B[4] || (n = skillName(78, SRV),
            wCSize = 1,
            l = 1)),
        (SkillSearch(153) || n_A_Buf2[7]) && (n = "Weapon Perfection",
            wCSize = 1,
            l = 1),
        EquipNumSearch(1177) && (n = "Helm",
            wCSize = 1,
            l = 1),
        CardNumSearch(32) && (n = "Drake Card",
            wCSize = 1,
            l = 1),
        (197 == n_A_ActiveSkill || 321 == n_A_ActiveSkill) && (n = "Asura Strike", 
            wCSize = 1, 
            l = 1),
        // kagekiri
        n_A_Weapon_refine >= 7 && 1845 == n_A_Equip[0] && (n = "Kagekiri",
            wCSize = 1,
            l = 1),
        259 == _ && (n = skillName(259, SRV),
            wCSize = 1.25 - .25 * n_B[4],
            l = 1),
        l || 0 == _ ? (myInnerHtml("nm076", "Weapon/Skill Size Modifier", 0),
            myInnerHtml("A_WeaponSize", 100 * wCSize + '% <span style="font-weight:100;">(' + n + " vs " + v_Size[n_B[4]] + ")</span>", 0)) : (myInnerHtml("nm076", "", 0),
                myInnerHtml("A_WeaponSize", "", 0)),
        w_HIT = n_A_HIT + 80 - n_B_FLEE,
        w_HIT_EDP = w_HIT,
        w_HIT_EDP > 100 && (w_HIT_EDP = 100),
        w_HIT_EDP < 5 && (w_HIT_EDP = 5),
        SkillSearch(148) && (w_HIT = Math.floor(w_HIT * (100 + 2 * SkillSearch(148)) / 100)),
        70 != n_A_ActiveSkill && 6 != n_A_ActiveSkill || (w_HIT *= 1 + .05 * n_A_ActiveSkillLV),
        83 != n_A_ActiveSkill && 388 != n_A_ActiveSkill || !SkillSearch(381) || (w_HIT *= 1.5),
        7 == n_A_ActiveSkill && (w_HIT *= 1 + .1 * n_A_ActiveSkillLV),
        272 == n_A_ActiveSkill && (w_HIT *= 1 + .1 * n_A_ActiveSkillLV),
        337 == n_A_ActiveSkill && (w_HIT = 100),
        0 == SRV && 324 == n_A_ActiveSkill && (w_HIT += 20),
        384 == n_A_ActiveSkill && (w_HIT = 100),
        SkillSearch(364) && (w_HIT = 100),
        w_HIT > 100 ? w_HIT = 100 : w_HIT < 5 && (w_HIT = 5),
        n_tok[86] && (w_HIT += (100 - w_HIT) * n_tok[86] / 100),
        w_HIT = Math.floor(100 * w_HIT) / 100,
        w_HIT_HYOUJI = w_HIT,
        272 == n_A_ActiveSkill && (n_A_CRI += 20),
        401 == n_A_ActiveSkill && (n_A_CRI += 25 + 5 * n_A_ActiveSkillLV),
        w_Cri = n_A_CRI - .2 * n_B[11] + .1,
        n_B_debuf[8] && (w_Cri *= 2),
        w_Cri < 0 ? w_Cri = 0 : w_Cri > 100 && (w_Cri = 100),
        TyouEnkakuSousa3dan = 0,
        wBC3_3danHatudouRitu = 0,
        SkillSearch(187) && (wBC3_3danHatudouRitu = 30),
        wDA = 5 * SkillSearch(13),
        1 != n_A_WeaponType && (wDA = 0),
        CardNumSearch(43) && (SkillSearch(13) > 1 ? wDA = 5 * SkillSearch(13) : wDA = 5),
        0 != n_A_WeaponType && EquipNumSearch(1951) && (SkillSearch(13) > 1 ? wDA = 5 * SkillSearch(13) : wDA = 5),
        0 != n_A_WeaponType && ((EquipNumSearch(570) || EquipNumSearch(1442) || EquipNumSearch(1443)) && (SkillSearch(13) > 2 ? wDA = 5 * SkillSearch(13) : wDA = 10),
            EquipNumSearch(1578) && (wDA = 5 * SkillSearch(13),
                5 != n_A_SHOULDER_REFINE && 6 != n_A_SHOULDER_REFINE || SkillSearch(13) < 1 && (wDA = 5),
                n_A_SHOULDER_REFINE >= 7 && SkillSearch(13) < 5 && (wDA = 25)),
            EquipNumSearch(1321) && (SkillSearch(13) > 5 ? wDA = 5 * SkillSearch(13) : wDA = 25)),
        (EquipNumSearch(399) || EquipNumSearch(1571)) && (SkillSearch(13) > 5 ? wDA = 5 * SkillSearch(13) : wDA = 25),
        17 == n_A_WeaponType && (wDA = 5 * SkillSearch(427),
            CardNumSearch(43) && (wDA = 5 * SkillSearch(427) + 5 * (100 - 5 * SkillSearch(427)) / 100),
            (EquipNumSearch(570) || EquipNumSearch(1442) || EquipNumSearch(1443)) && (wDA = 5 * SkillSearch(427) + 10 * (100 - 5 * SkillSearch(427)) / 100)),
        w_HIT_DA = w_HIT,
        0 != wDA && 17 != n_A_WeaponType && (w_HIT_DA = w_HIT_DA * (100 + SkillSearch(13)) / 100,
            w_HIT_DA >= 100 && (w_HIT_DA = 100)),
        w998A = 100 - wBC3_3danHatudouRitu,
        w998B = wBC3_3danHatudouRitu * w_HIT / 100,
        w998C = wBC3_3danHatudouRitu - w998B,
        w998D = w998A * wDA / 100,
        w998E = w998D * w_HIT_DA / 100,
        w998F = w998D - w998E,
        w998G = (100 - wBC3_3danHatudouRitu - w998D) * w_Cri / 100,
        w998H = 100 - wBC3_3danHatudouRitu - w998D - w998G,
        w998I = w998H * w_HIT / 100,
        w998J = w998H - w998I,
        w998K = w998B + w998E + w998G + w998I,
        0 == SRV && (w_HIT >= 100 && (w998K = 100),
            w_Cri >= 100 && (w998K = 100)),
        w998L = 100 - w998K,
        (0 == n_A_ActiveSkill || 272 == n_A_ActiveSkill || 401 == n_A_ActiveSkill || 86 == n_A_ActiveSkill && 50 <= n_B[3] && n_B[3] < 60) && (w_HIT_HYOUJI = Math.floor(100 * w998K) / 100,
            myInnerHtml("CRInum", " (" + Math.round(100 * w998G) / 100 + "%)", 0));
    var i;
    if (i = m_Monster[n_B[0]][2 * c.B_AtkSkill.selectedIndex + 22],
        477 == n_B_AtkSkill ? n_B_HIT += 20 : 6 == n_B_AtkSkill ? n_B_HIT *= 1 + .05 * i : 7 == n_B_AtkSkill ? n_B_HIT *= 1 + .1 * i : 324 == n_B_AtkSkill && (n_B_HIT += 20),
        w_FLEE = n_A_FLEE + 20 - n_B_HIT,
        w_FLEE > 95 ? w_FLEE = 95 : w_FLEE < 5 && (w_FLEE = 5),
        444 != n_B_AtkSkill && 445 != n_B_AtkSkill && 475 != n_B_AtkSkill && 476 != n_B_AtkSkill && 481 != n_B_AtkSkill || (w_FLEE = 0,
            n_A_LUCKY = 0),
        n_A_Buf6[3] && 0 != n_B_rangedAtk && (w_FLEE = Math.max(75, w_FLEE)),
        0 != n_B_AtkSkill && (n_A_LUCKY = 0),
        n_A_Buf6[3] && 3 == Math.abs(m_Skill[c.B_AtkSkill.value][4])) {
        w_FLEE = 75;
        var t = 7500
    } else if (m_Skill[c.B_AtkSkill.value][4] < 0) {
        w_FLEE = 0;
        t = 0
    } else
        t = Math.floor(100 * (w_FLEE + (100 - w_FLEE) * n_A_LUCKY / 100));
    if (t > 1e4 && (t = 1e4),
        t <= 0 ? (t = 0,
            myInnerHtml("nm066", "", 0),
            document.getElementById("B_Ave2Atk").style.visibility = "hidden") : (myInnerHtml("nm066", "Average Dmg Received (w/dodge)", 0),
                document.getElementById("B_Ave2Atk").style.visibility = "visible"),
        myInnerHtml("BattleFLEE", t / 100, 0),
        n_A_workDEX = Math.floor(n_A_DEX * (1 + .2 * (n_A_WeaponLV - 1))),
        n_A_DMG = [0, 0, 0],
        SRV < 50)
        n_A_workDEX >= n_A_Weapon_ATK || SkillSearch(155) ? n_A_DMG[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor((n_A_Weapon_ATK + wImp) * wCSize) : n_A_DMG[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor((n_A_Weapon_ATK - 1 + wImp) * wCSize),
            10 != n_A_WeaponType && 17 != n_A_WeaponType && 18 != n_A_WeaponType && 19 != n_A_WeaponType && 20 != n_A_WeaponType && 21 != n_A_WeaponType || (n_A_DMG[2] += Math.floor((m_Arrow[n_A_Arrow][0] - 1) * wCSize)),
            10 != n_A_WeaponType && 17 != n_A_WeaponType && 18 != n_A_WeaponType && 19 != n_A_WeaponType && 20 != n_A_WeaponType && 21 != n_A_WeaponType || (w1 = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor(n_A_Weapon_ATK * n_A_Weapon_ATK / 100 * wCSize) + Math.floor(wImp * wCSize),
                u = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor(n_A_Weapon_ATK * n_A_workDEX / 100 * wCSize) + Math.floor(wImp * wCSize),
                s = Math.floor((m_Arrow[n_A_Arrow][0] - 1) * wCSize),
                w1 += s,
                u += s,
                w1 > u && (w1 = u),
                n_A_DMG[2] < w1 && (n_A_DMG[2] = w1)),
            10 == n_A_WeaponType || 17 == n_A_WeaponType || 18 == n_A_WeaponType || 19 == n_A_WeaponType || 20 == n_A_WeaponType || 21 == n_A_WeaponType ? (n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK * n_A_Weapon_ATK / 100 + wImp) * wCSize),
                s = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK * n_A_workDEX / 100 + wImp) * wCSize),
                n_A_DMG[0] > s && (n_A_DMG[0] = s)) : n_A_workDEX >= n_A_Weapon_ATK ? n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK + wImp) * wCSize) : (SkillSearch(155) && (n_A_workDEX = n_A_Weapon_ATK),
                    n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_workDEX + wImp) * wCSize));
    else {
        if (n_A_workDEX >= n_A_Weapon_ATK || SkillSearch(155) ? n_A_DMG[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor((n_A_Weapon_ATK + wImp) * wCSize) : n_A_DMG[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor((n_A_Weapon_ATK - 1 + wImp) * wCSize),
            10 == n_A_WeaponType || 17 == n_A_WeaponType || 18 == n_A_WeaponType || 19 == n_A_WeaponType || 20 == n_A_WeaponType || 21 == n_A_WeaponType) {
            if (n_A_Weapon_ATK > n_A_workDEX)
                var a = n_A_workDEX;
            else
                a = n_A_Weapon_ATK;
            s = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor(n_A_Weapon_ATK * a / 100 * wCSize) + Math.floor(wImp * wCSize),
                s += Math.floor((m_Arrow[n_A_Arrow][0] - 1) * wCSize),
                n_A_DMG[2] < s && (n_A_DMG[2] = s)
        }
        10 == n_A_WeaponType || 17 == n_A_WeaponType || 18 == n_A_WeaponType || 19 == n_A_WeaponType || 20 == n_A_WeaponType || 21 == n_A_WeaponType ? (n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK * n_A_Weapon_ATK / 100 + wImp) * wCSize),
            s = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK * n_A_workDEX / 100 + wImp) * wCSize),
            n_A_DMG[0] > s && (n_A_DMG[0] = s)) : n_A_workDEX >= n_A_Weapon_ATK ? n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK + wImp) * wCSize) : (SkillSearch(155) && (n_A_workDEX = n_A_Weapon_ATK),
                n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_workDEX + wImp) * wCSize))
    }
    if (n_A_DMG[1] = (n_A_DMG[0] + n_A_DMG[2]) / 2,
        n_rangedAtk = 0,
        n_A_CriATK = [0, 0, 0],
        n_A_CriATK[1] = n_A_ATK + (n_A_WeaponLV_Minplus + n_A_WeaponLV_Maxplus) / 2 + Math.floor((n_A_Weapon_ATK + wImp) * wCSize),
        n_A_CriATK[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK + wImp) * wCSize),
        n_A_CriATK[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor((n_A_Weapon_ATK + wImp) * wCSize),
        (10 == n_A_WeaponType || 17 == n_A_WeaponType || 18 == n_A_WeaponType || 19 == n_A_WeaponType || 20 == n_A_WeaponType || 21 == n_A_WeaponType) && (n_rangedAtk = 1,
            10 == n_A_WeaponType))
        for (e = 0; e <= 2; e++)
            n_A_CriATK[e] += Math.floor(m_Arrow[n_A_Arrow][0] * wCSize);
    BK_n_A_DMG = [0, 0, 0],
        BK_n_A_DMG[2] = n_A_DMG[2],
        BK_n_A_DMG[0] = n_A_DMG[0],
        BK_n_A_DMG[1] = n_A_DMG[1],
        ATKmod01(),
        ATKmod02(1, 1),
        n_PerHIT_DMG = BattleCalc2(0),
        wCriTyuu = 1,
        n_A_CriATK[1] = BattleCalc(n_A_CriATK[1], 10), // crit damage
        n_A_CriATK[1] = Math.floor(n_A_CriATK[1] * (100 + n_tok[355]) / 100), // auto attack damage mod
        n_A_CriATK[0] = BattleCalc(n_A_CriATK[0], 10),
        n_A_CriATK[0] = Math.floor(n_A_CriATK[0] * (100 + n_tok[355]) / 100),
        n_A_CriATK[2] = BattleCalc(n_A_CriATK[2], 10),
        n_A_CriATK[2] = Math.floor(n_A_CriATK[2] * (100 + n_tok[355]) / 100),
        wCriTyuu = 0,
        n_A_EDP_DMG = [0, 0, 0];
    for (e = 0; e <= 2; e++)
        n_A_EDP_DMG[e] = BattleCalcEDP(n_A_DMG[e], e);
    for (e = 0; e <= 2; e++)
        n_A_CriATK[e] += EDP_DMG(e);
    var o = [0, 0, 0];
    if (11 == n_A_WeaponType) {
        for (e = 0; e <= 2; e++)
            o[e] = Math.floor(n_A_CriATK[e] * (.01 + .02 * SkillSearch(13))),
                n_A_CriATK[e] += o[e];
        n_A_CriATK[0] == n_A_CriATK[2] ? myInnerHtml("CRIATK", n_A_CriATK[0] - o[0] + " + " + o[0], 0) : myInnerHtml("CRIATK", n_A_CriATK[0] - o[0] + "~" + (n_A_CriATK[2] - o[2]) + " + " + o[0] + "~" + o[2], 0)
    } else
        n_Nitou ? (n_A_CriATKleft = [0, 0, 0],
            n_A_CriATKleft[1] = n_A_ATK + (n_A_Weapon2LV_Minplus + n_A_Weapon2LV_Maxplus) / 2 + Math.floor((n_A_Weapon2_ATK + wImp) * wCSize),
            n_A_CriATKleft[0] = n_A_ATK + n_A_Weapon2LV_Minplus + Math.floor((n_A_Weapon2_ATK + wImp) * wCSize),
            n_A_CriATKleft[2] = n_A_ATK + n_A_Weapon2LV_Maxplus + Math.floor((n_A_Weapon2_ATK + wImp) * wCSize),
            n_A_CriATKleft[1] = BattleCalc(n_A_CriATKleft[1], 10),
            n_A_CriATKleft[0] = BattleCalc(n_A_CriATKleft[0], 10),
            n_A_CriATKleft[2] = BattleCalc(n_A_CriATKleft[2], 10),
            n_A_CriATK[0] == n_A_CriATK[2] && n_A_CriATKleft[0] == n_A_CriATKleft[2] ? myInnerHtml("CRIATK", n_A_CriATK[0] + " + " + wLeft[2], 0) : myInnerHtml("CRIATK", n_A_CriATK[0] + "~" + n_A_CriATK[2] + " + " + wLeft[1] + "~" + wLeft[2], 0)) : n_A_CriATK[0] == n_A_CriATK[2] ? myInnerHtml("CRIATK", n_A_CriATK[1], 0) : myInnerHtml("CRIATK", n_A_CriATK[0] + "~" + n_A_CriATK[2], 0);
    if (n_Max_DMG = 0,
        n_Min_DMG = 9999999,
        (0 == n_A_ActiveSkill || 86 == n_A_ActiveSkill && 50 <= n_B[3] && n_B[3] < 60) && w998G > 0 && (n_Min_DMG = n_A_CriATK[0],
            n_Max_DMG = n_A_CriATK[2]),
        BattleCalc999(),
        myInnerHtml("A_WeaponElement", v_Element[n_A_Weapon_element] + " (" + 100 * element[n_B[3]][n_A_Weapon_element] + "% vs " + v_Element[Math.floor(n_B[3] / 10)] + n_B[3] % 10 + ")", 0),
        0 == n_rangedAtk) {
        var A = n_B_buf[12]
            , r = n_B_manual[21];
        if (A > 0 && 326 != n_A_ActiveSkill) {
            A = 10 + 3 * A;
            var s = 0
                , u = 1;
            1 == n_B_buf[1] && (u = 1.5);
            var m = new Array;
            for (new Array,
                e = 0; e <= 2; e++)
                m[e] = Math.floor(Last_DMG_A[e] * u * A / 100),
                    1 == (s = Math.ceil(Last_DMG_A[e] * u * A / 100)) && (m[e] = 1);
            myInnerHtml("bREFLECT1", '<B style="color:red">' + m[0] + " ~ " + m[2] + "</B>", 0),
                myInnerHtml("bREFLECT1name", '<SPAN style="color:red">Damage reflected (Shield Reflect)</SPAN>', 0)
        } else
            myInnerHtml("bREFLECT1", "", 0),
                myInnerHtml("bREFLECT1name", "", 0);
        if (r) {
            s = 0,
                u = 1;
            var S = 1;
            1 == n_B_buf[1] && (u = 1.5),
                1 == n_WoE && (S = 0 != n_A_ActiveSkill ? 100 / 60 : 1.25);
            var B = new Array;
            for (new Array,
                e = 0; e <= 2; e++)
                B[e] = Math.floor(Last_DMG_B[e] * u * S * r / 100),
                    1 == (s = Math.ceil(Last_DMG_B[e] * u * A / 100)) && (B[e] = 1);
            myInnerHtml("bREFLECT2", '<B style="color:red">' + B[0] + " ~ " + B[2] + "</B>", 0),
                myInnerHtml("bREFLECT2name", '<SPAN style="color:red">Damage reflected (equip/card)</SPAN>', 0)
        } else
            myInnerHtml("bREFLECT2", "", 0),
                myInnerHtml("bREFLECT2name", "", 0)
    } else
        myInnerHtml("bREFLECT2", "", 0),
            myInnerHtml("bREFLECT2name", "", 0);
    for (e = 0; e < InnStr.length; e++)
        myInnerHtml("strID_" + e, InnStr[e], 0)
}
function BattleCalc(e, _) {
    return 10 == _ ? e += n_A_WeaponLV_refineATK : e = BattleCalc4(e, _, 0),
        e < 1 && (e = 1),
        1 == n_A_WeaponType || 2 == n_A_WeaponType ? e += 4 * SkillSearch(3) : 3 == n_A_WeaponType ? e += 4 * SkillSearch(4) : 4 == n_A_WeaponType || 5 == n_A_WeaponType ? 0 == SkillSearch(78) ? e += 4 * SkillSearch(69) : e += 5 * SkillSearch(69) : 8 == n_A_WeaponType ? e += 3 * SkillSearch(89) : 11 == n_A_WeaponType ? e += 3 * SkillSearch(81) : 14 == n_A_WeaponType ? e += 3 * SkillSearch(198) : 15 == n_A_WeaponType ? e += 3 * SkillSearch(206) : 12 == n_A_WeaponType ? e += 3 * SkillSearch(224) : 6 == n_A_WeaponType || 7 == n_A_WeaponType ? e += 3 * SkillSearch(241) : 13 != n_A_WeaponType && 0 != n_A_WeaponType || (e += 3 * SkillSearch(183)),
        0 == n_A_WeaponType && SkillSearch(329) && (e += 10 * SkillSearch(329)),
        !n_A_Buf3[10] || 4 != n_A_WeaponLV && 4 != n_A_Weapon2LV || (e += 50 + 25 * n_A_Buf3[10]),
        (6 == n_B[2] || 90 <= n_B[3] && n_B[3] <= 99) && SkillSearch(24) && (e += Math.floor((3 + .05 * n_A_BaseLV) * SkillSearch(24))),
        2 != n_B[2] && 4 != n_B[2] || (e += 4 * SkillSearch(116),
            SkillSearch(390) && (e += n_A_STR)),       
        e = BattleCalc2(e), 
        Math.floor(e)
}
function BattleCalc2(e) {
    if (w999_AB = 0,
        e > 0 && (w999_AB = 1),
        e += 2 * SkillSearch(148),
        0 == wBCEDPch && (e = Math.floor(e * Math.max(0, element[n_B[3]][n_A_Weapon_element]))),
        0 == n_A_WeaponType && SkillSearch(329) && (331 != n_A_ActiveSkill && 333 != n_A_ActiveSkill && 335 != n_A_ActiveSkill && 337 != n_A_ActiveSkill || (e += 10 * SkillSearch(329))),
        e += 3 * n_A_Buf2[12],
        e += 3 * SkillSearch(416),
        0 != n_A_WeaponType && 1 == w999_AB && (e += 20 * SkillSearch(254)),
        0 == wBCEDPch && (17 != n_A_ActiveSkill && 307 != n_A_ActiveSkill || (e += 15 * n_A_ActiveSkillLV),
            86 == n_A_ActiveSkill && (n_B[3] < 50 || 60 <= n_B[3]) && (e += 75)),
        423 == n_A_ActiveSkill && (e += Math.floor(n_A_MATK[w_MagiclBulet] * mdefReduction(n_B[15]) - n_B_MDEF2)),
        437 == n_A_ActiveSkill && (e += 50 * n_A_ActiveSkillLV),
        106 == m_Card[n_A_card[0]][0] && 106 == m_Card[n_A_card[1]][0] && 106 == m_Card[n_A_card[2]][0])
        e += 40;
    else
        for (i = 0; i <= 2; i++)
            106 == m_Card[n_A_card[i]][0] && (e += 5);
    return 106 == n_A_card[3] && (e += 10),
        394 == n_A_ActiveSkill && (e += m_Syuriken[1 * document.calcForm.SkillSubNum.value][0],
            e += 3 * SkillSearch(393),
            e += 4 * n_A_ActiveSkillLV),
        395 == n_A_ActiveSkill && (e += 3 * m_Kunai[1 * document.calcForm.SkillSubNum.value][0]),
        1 * c.server.value < 50 && (e = ApplyModifiers(e)),
        169 == n_A_ActiveSkill && 10 == n_A_WeaponType && (e = Math.floor(e / 2)),
        169 == n_A_ActiveSkill && 1 == n_A_WeaponType && (e *= 2), // backstab double damage with dagger
        n_Nitou && 0 == n_A_ActiveSkill && 0 != n_A_WeaponType && (e = Math.floor(e * (50 + 10 * SkillSearch(79)) / 100)),
        423 == n_A_ActiveSkill && (e *= Math.max(0, element[n_B[3]][8])),
        437 == n_A_ActiveSkill && (e *= element[n_B[3]][0]),
        1 == PvP && (317 != n_A_ActiveSkill && 318 != n_A_ActiveSkill || (e = 0)),
        e
}
function ApplyModifiers(e) {
    if (0 == wBCEDPch && 0 == not_use_card) {
        var _ = 0;
        _ = n_tok[30 + n_B[2]],
            e = Math.floor(e * (100 + _) / 100),
            _ = n_tok[40 + Math.floor(n_B[3] / 10)],
            e = Math.floor(e * (100 + _) / 100),
            _ = n_tok[27 + n_B[4]],
            e = Math.floor(e * (100 + _) / 100),
            1 == n_rangedAtk && -1 != TyouEnkakuSousa3dan && (_ = n_tok[25],
                e = Math.floor(e * (100 + _) / 100)),
            _ = 0,
            1 == n_B[19] && (_ += n_tok[26]),
            _ += n_tok[80],
            e = Math.floor(e * (100 + _) / 100),
            1 == wCriTyuu && (e = Math.floor(e * (100 + n_tok[70]) / 100)),
            (108 <= n_B[0] && n_B[0] <= 115 || 319 == n_B[0]) && (e = Math.floor(e * (100 + n_tok[81]) / 100)),
            116 <= n_B[0] && n_B[0] <= 120 && (e = Math.floor(e * (100 + n_tok[82]) / 100)),
            (49 <= n_B[0] && n_B[0] <= 52 || 55 == n_B[0] || 221 == n_B[0]) && (e = Math.floor(e * (100 + n_tok[83]) / 100)),
            106 != n_B[0] && 152 != n_B[0] && 308 != n_B[0] && 32 != n_B[0] && 541 != n_B[0] || (e = Math.floor(e * (100 + n_tok[84]) / 100)),
            e = Math.floor(e * (100 + StPlusCalc2(1e3 + n_B[0]) + StPlusCard(1e3 + n_B[0])) / 100),
            SkillSearch(258) && (e *= 2),
            SkillSearch(266) && (e = Math.floor(e * ((150 + 50 * SkillSearch(266)) * (1 - n_M_debuff[0] / 100)) / 100)), // added edp dmg reduction
            86 == n_A_ActiveSkill && 50 <= n_B[3] && n_B[3] < 60 && (e = Math.floor(e * (100 + 30 * n_A_ActiveSkillLV) / 100)),
            11 == n_A_WeaponType && SkillSearch(262) && (e = Math.floor(e * (110 + 2 * SkillSearch(262)) / 100)),
            _ = 0,
            0 == PvP ? SkillSearch(354) && SkillSearch(365) || SkillSearch(354) && 2 == n_B[4] && n_B[6] >= 17392 ? _ += (n_A_BaseLV + n_A_STR + n_A_LUK + n_A_DEX) / (12 - 3 * SkillSearch(354)) : SkillSearch(352) && 0 == n_B[4] ? _ += (n_A_BaseLV + n_A_LUK + n_A_DEX) / (12 - 3 * SkillSearch(352)) : SkillSearch(353) && 1 == n_B[4] && n_B[6] >= 5218 && (_ += (n_A_BaseLV + n_A_LUK + n_A_DEX) / (12 - 3 * SkillSearch(353))) : SkillSearch(354) ? _ += (n_A_BaseLV + n_A_STR + n_A_LUK + n_A_DEX) / (12 - 3 * SkillSearch(354)) : SkillSearch(352) ? _ += (n_A_BaseLV + n_A_LUK + n_A_DEX) / (12 - 3 * SkillSearch(352)) : SkillSearch(353) && (_ += (n_A_BaseLV + n_A_LUK + n_A_DEX) / (12 - 3 * SkillSearch(353))),
            e = Math.floor(e * (100 + _) / 100)
    }
    return e = Math.floor(tPlusDamCut(e)),
        _ = 0,
        n_A_Buf9[20] == n_A_ActiveSkill && (_ += n_A_Buf9[19]),
        n_A_Buf9[22] == n_A_ActiveSkill && (_ += n_A_Buf9[21]),
        6 == n_A_ActiveSkill && n_A_SHOES_REFINE >= 9 && CardNumSearch(362) && (_ += 10),
        76 == n_A_ActiveSkill && (2 != n_A_WeaponType && 3 != n_A_WeaponType || (_ += 25 * CardNumSearch(464))),
        41 == n_A_ActiveSkill && 10 == n_A_WeaponType && (_ += 50 * CardNumSearch(465)),
        40 == n_A_ActiveSkill && n_A_Weapon_refine >= 9 && EquipNumSearch(1089) && (_ += 20),
        428 == n_A_ActiveSkill && n_A_Weapon_refine >= 9 && EquipNumSearch(1099) && (_ += 2 * n_A_Weapon_refine),
        430 == n_A_ActiveSkill && n_A_Weapon_refine >= 9 && EquipNumSearch(1100) && (_ += 3 * n_A_Weapon_refine),
        436 == n_A_ActiveSkill && n_A_Weapon_refine >= 9 && EquipNumSearch(1102) && (_ += 2 * n_A_Weapon_refine),
        437 == n_A_ActiveSkill && n_A_Weapon_refine >= 9 && EquipNumSearch(1103) && (_ += 2 * n_A_Weapon_refine),
        118 == n_A_ActiveSkill && n_A_Weapon_refine >= 7 && EquipNumSearch(1844) && (_ += 30),
        // sag bow
        391 == n_A_ActiveSkill && EquipNumSearch(1912) && (SU_STR < 99 ? _ += Math.floor(SU_STR / 9) : _ += Math.floor(SU_STR / 9) - 1),
        // holy cross change
        161 == n_A_ActiveSkill && 5 == n_A_WeaponType && (_ += 60),
        // save the king - shield chain
        324 == n_A_ActiveSkill && 1956 == n_A_Equip[0] && 27 == n_A_JOB && (_ += 1 * n_A_Weapon_refine),
        // save the king - raid
        171 == n_A_ActiveSkill && 1956 == n_A_Equip[0] && 28 == n_A_JOB && (_ += 50),
        // save the king - cart revolution
        66 == n_A_ActiveSkill && 1956 == n_A_Equip[0] && 26 == n_A_JOB && (_ += 25),
        // prisoners uniform
        (331 == n_A_ActiveSkill || 333 == n_A_ActiveSkill || 335 == n_A_ActiveSkill || 337 == n_A_ActiveSkill || 339 == n_A_ActiveSkill || 305 == n_A_ActiveSkill) && 1988 == n_A_Equip[6] && 41 == n_A_JOB && (_ += 15),
        6 != n_A_ActiveSkill && 76 != n_A_ActiveSkill || 10 == n_A_ActiveSkillLV && EquipNumSearch(1159) && (_ += 50),
        65 == n_A_ActiveSkill && SU_LUK >= 90 && SU_DEX >= 90 && EquipNumSearch(1164) && (_ += 15),
        264 == n_A_ActiveSkill && EquipNumSearch(1176) && 10 == SkillSearch(81) && (_ += 20),
        -1 == TyouEnkakuSousa3dan && EquipNumSearch(639) && (_ += 15),
        83 != n_A_ActiveSkill && 388 != n_A_ActiveSkill || !SkillSearch(381) || 0 != wBCEDPch || (_ += 10),
        e = e * (100 + StPlusCalc2(5e3 + n_A_ActiveSkill) + StPlusCard(5e3 + n_A_ActiveSkill) + _) / 100,
        e = e * (100 - NotesCalc(n_B[0], 5e3 + n_A_ActiveSkill)) / 100, // skill dmg reduction 
        n_A_Buf7[20] && MANUKU_MONSTER() && (e = 110 * e / 100),
        n_A_Buf7[23] && SUPURE_MONSTER() && (e = 110 * e / 100),
        e
}

function BattleCalc3(e) {
    return wBC3_3dan = w998B * TyouEnkakuSousa3dan,
        wBC3_DA = w998E * e * 2,
        wBC3_Cri = w998G * n_A_CriATK[1],
        wBC3_Normal = w998I * e,
        wBC3_Miss = w998L * BattleCalc2(0),
        wBC3_X = (wBC3_3dan + wBC3_DA + wBC3_Cri + wBC3_Normal + wBC3_Miss) / 100,
        tPlusLucky(wBC3_X)
}
function BattleCalc3left(e) {
    for (wBC3L2 = 0,
        i = 4; i <= 7; i++)
        106 == m_Card[n_A_card[i]][0] && (wBC3L2 += 5);
    return wBC3_Normal = e * w_HIT / 100,
        wBC3_Miss = wBC3L2 * (100 - w_HIT) / 100,
        wBC3_X = wBC3_Normal + wBC3_Miss,
        wBC3_X = tPlusDamCut(wBC3_X),
        tPlusLucky(wBC3_X)
}
function SkillSearch(e) {
    if (258 == e && TimeItemNumSearch(35))
        return 1;
    for (var _ = 0; _ <= 14; _++)
        if (m_JobBuff[n_A_JOB][_] == e)
            return n_A_Buf[_];
    return 0
}
function BattleCalc4(e, _, n) {
    return n = 0 == n ? n_A_WeaponLV_refineATK : n_A_Weapon2LV_refineATK,
        275 == n_A_ActiveSkill ? Math.floor(e * defReduction(n_B[14])) - n_B_DEF2[_] + n : 432 == n_A_ActiveSkill || n_tok[180 + n_B[2]] >= 1 || n_tok[22] >= 1 && 0 == n_B[19] || n_tok[22] >= 10 || SkillSearch(364) ? e + n : (0 == n_tok[23] ? e = Math.floor(e * defReduction(n_B[14])) - n_B_DEF2[_] + n : 1 * c.server.value < 50 ? e = 0 == _ ? Math.floor(e * (n_B_DEF2[2] + n_B[14]) / 100) + n : 1 == _ ? Math.floor(e * (n_B_DEF2[1] + n_B[14]) / 100) + n : Math.floor(e * (n_B_DEF2[0] + n_B[14]) / 100) + n : e += n,
            e < 1 && (e = 1),
            e)
}
function BattleCalcEDP(e, _) {
    if (e <= 0)
        return 0;
    if (19 == n_A_ActiveSkill || 263 == n_A_ActiveSkill || 88 == n_A_ActiveSkill || 264 == n_A_ActiveSkill || 248 == n_A_ActiveSkill)
        return 0;
    wBCEDPch = 1;
    var n = 0
        , l = 0;
    return SkillSearch(266) && (n = BattleCalc(e, _),
        n = Math.floor(n * Math.max(0, element[n_B[3]][5]) / 4)),
        n_A_Buf6[7] && (l = BattleCalc(e, _),
            l = Math.floor(l * Math.max(0, element[n_B[3]][3]) / 5)),
        wBCEDPch = 0,
        n + l
}
function EDPplus(e) {
    (SkillSearch(266) || n_A_Buf6[7]) && (w_DMG[2] += EDP_DMG(2) * e,
        w_DMG[1] += EDP_DMG(1) * e,
        100 == w_HIT_EDP && (w_DMG[0] += EDP_DMG(0) * e),
        EDPhyouzi(e))
}
function EDPhyouzi(e) { }
function EDP_DMG(e) {
    if (SkillSearch(266) || n_A_Buf6[7]) {
        if (17 == n_A_ActiveSkill && 52 <= n_B[3] && n_B[3] <= 59)
            return 0;
        if ((66 == n_A_ActiveSkill || 193 == n_A_ActiveSkill || 197 == n_A_ActiveSkill || 321 == n_A_ActiveSkill) && 83 <= n_B[3] && n_B[3] <= 89)
            return 0;
        if (element[n_B[3]][n_A_Weapon_element] <= 0 && 0 == n_PerHIT_DMG)
            return 0;
        if (0 == e)
            return 100 == w_HIT_EDP ? n_A_EDP_DMG[0] : 0;
        if (1 == e) {
            var _ = 0;
            return 100 == w_HIT_HYOUJI && (_ = 1),
                n_PerHIT_DMG && (_ = 1),
                _ ? Math.floor(n_A_EDP_DMG[1] * w_HIT_EDP / 100) : Math.floor(n_A_EDP_DMG[1] * w_HIT / 100 * w_HIT_EDP / 100)
        }
        if (2 == e)
            return n_A_EDP_DMG[2]
    }
    return 0
}
function CastAndDelay() {
    0 != wCast && (str_bSUBname += SubName[9] + "<BR>",
        str_bSUB += Math.floor(100 * wCast) / 100 + SubName[1] + "<BR>");
    var e = ""
        , _ = "";
    wDelay = 0;
    var n = 0;
    var pingDelay = 0;
    c.Conf02.value > 0 && (pingDelay = (c.Conf02.value) / 1000),
    n_Delay[1] > wDelay && (wDelay = n_Delay[1],
        n = 1),
        eqDelay = (100 - AC_I - n_tok[74]) < 0 ? 0 : 100 - AC_I - n_tok[74],
        n_Delay[2] = Math.floor(n_Delay[2] * eqDelay) / 100,
        n_Delay[2] > wDelay && (wDelay = n_Delay[2],
            n = 2),
        n_Delay[3] > wDelay && (wDelay = n_Delay[3],
            n = 3),
        0 != n_A_ActiveSkill && 284 != n_A_ActiveSkill && (n_Delay[4] = 1 * document.calcForm.Conf01.value / 100),
        n_Delay[4] > wDelay + wCast && (wDelay = n_Delay[4] - wCast,
            n = 4),
        0 != n_Delay[5] && (wDelay = n_Delay[5],
            n = 5),
        n_Delay[6] > wDelay + wCast && (wDelay = n_Delay[6] - wCast,
            n = 6),
        1 == n && (0 == n_A_ActiveSkill ? SkillSearch(187) ? (e += "Attack interval (normal)<BR>Attack interval (" + skillName(187, c.server.value) + ")<BR>",
            _ += n_Delay[1] + " seconds<BR>" + sandanDelay + " seconds<BR>",
            wDelay = n_Delay[1] * w998A / 100 + sandanDelay * wBC3_3danHatudouRitu / 100) : (e += "Time/Hit<BR>",
                _ += n_Delay[1] + " seconds<BR>") : pingDelay > 0 ? (e += "Motion Delay (ASPD based) + Ping<BR>",
                    _ += Math.round((n_Delay[1]+pingDelay)*1000)/1000 + " (" + n_Delay[1] + " + " + pingDelay + ") seconds<BR>", wDelay = n_Delay[1] + pingDelay) : (e += "Motion Delay (ASPD based)<BR>",
                    _ += n_Delay[1] + " seconds<BR>")),
        2 == n && (e += "Delay (fixed skills)<BR>",
            _ += n_Delay[2] + " seconds<BR>"),
        3 == n && (188 == n_A_ActiveSkill || 189 == n_A_ActiveSkill || 289 == n_A_ActiveSkill ? (e += "Delay (+delay reception combo)<BR>",
            _ += 1.5 + " seconds<BR>") : (e += "Delay (forced motion)<BR>",
                _ += n_Delay[3] + " seconds<BR>")),
        4 == n && (e += "Delay (input limit)<BR>",
            _ += n_Delay[4] + " seconds<BR>"),
        5 == n && (e += "Damage interval<BR>",
            _ += n_Delay[5] + " seconds<BR>"),
        6 == n && (e += "Limited Skill-Duration(?)<BR>",
            _ += Math.floor(100 * wDelay) / 100 + " seconds<BR>"),
        myInnerHtml("bSUB2name", e, 0),
        myInnerHtml("bSUB2", _, 0)
}
function tPlusDamCut(e) {
    return n_WoE && (e = 10 == n_A_WeaponType || 17 == n_A_WeaponType || 18 == n_A_WeaponType || 19 == n_A_WeaponType || 20 == n_A_WeaponType || 21 == n_A_WeaponType || 0 != n_A_ActiveSkill ? Math.floor(.6 * e) : Math.floor(.8 * e),
        c.A8_Skill15.value > 0 && (e = Math.floor(e * (10 / (5 * c.A8_Skill15.value))))),
        e = Math.floor(e * (100 - n_B_manual[1]) / 100),
        e = Math.floor(e * (100 - n_B_manual[7]) / 100),
        (n_rangedAtk || 10 == n_A_WeaponType) && (w = n_B_manual[9],
            e = Math.floor(e * (100 - w) / 100)),
        1 * c.A_adopted.checked == 0 && (w = n_B_buf[14],
            e = Math.floor(e * (100 - w) / 100)),
        w = n_B_manual[2],
        n_A_Weapon_element == w && (w = n_B_manual[3],
            e = Math.floor(e * (100 - w) / 100)),
        w = n_B_manual[4],
        n_A_Weapon_element == w && (w = n_B_manual[5],
            e = Math.floor(e * (100 - w) / 100)),
        w = n_B_buf[13],
        0 == w || 1 != n_rangedAtk && 10 != n_A_WeaponType || (w = 95 - 15 * n_B_buf[13],
            e = Math.floor(e * w / 100)),
        w = n_B_buf[14],
        w > 0 && 2 != n_rangedAtk && (e -= Math.floor(e * w * 6 / 100)),
        0 == wBTw1 && (n_B_debuf[6] && 0 == wLAch && (e *= 2),
            n_B_debuf[17] && 3 == n_A_Weapon_element && (e *= 2),
            groundEleMod = [110, 114, 117, 119, 120],
            0 == n_A_Buf6[0] && n_A_Buf6[1] >= 1 && 3 == n_A_Weapon_element && (e = Math.floor(e * groundEleMod[n_A_Buf6[1] - 1] / 100)),
            1 == n_A_Buf6[0] && n_A_Buf6[1] >= 1 && 1 == n_A_Weapon_element && (e = Math.floor(e * groundEleMod[n_A_Buf6[1] - 1] / 100)),
            2 == n_A_Buf6[0] && n_A_Buf6[1] >= 1 && 4 == n_A_Weapon_element && (e = Math.floor(e * groundEleMod[n_A_Buf6[1] - 1] / 100))),
        n_B_buf[1] && 0 == PvP && (e = Math.floor(e / 2)),
        n_B_buf[1] && 1 == PvP && (e = Math.floor(2 * e / 3)),
        n_B_buf[7] && 2 != n_rangedAtk && (e -= Math.floor(20 * e * n_B_buf[7] / 100)),
        n_B_buf[8] && 2 == n_rangedAtk && (e -= Math.floor(20 * e * n_B_buf[8] / 100)),
        5 == n_B[19] && (e = 1,
            122 == n_A_ActiveSkill && (e = 0)),
        e
}
function tPlusEnemyClick() {
    if (PvP) {
        for (n_B = new Array,
            i = 0; i <= 26; i++)
            n_B[i] = m_Monster2[c.B_Enemy.value][i];
        c.B_LV.value = n_B[5],
            c.B_AGI.value = n_B[8],
            c.B_VIT.value = n_B[7],
            c.B_INT.value = n_B[9],
            c.B_LUK.value = n_B[11],
            c.B_DEF.value = n_B[14],
            c.B_MDEF.value = n_B[15]
    }
}
function tPlusTaiseiSyokia() {
    if (PvP) {
        for (i = 1; i <= 150; i++)
            c.B_AGI.options[i - 1] = new Option(i, i),
                c.B_VIT.options[i - 1] = new Option(i, i),
                c.B_INT.options[i - 1] = new Option(i, i),
                c.B_LUK.options[i - 1] = new Option(i, i);
        for (i = 0; i <= 100; i++)
            c.B_DEF.options[i] = new Option(i, i),
                c.B_MDEF.options[i] = new Option(i, i);
        for (i = 1; i <= 99; i++)
            c.B_LV.options[i - 1] = new Option(i, i);
        for (i = 0; i <= 9; i++)
            c.B_element.options[i] = new Option(v_Element[i] + "1", 10 * i + 1);
        for (i = 0; i <= 9; i++)
            c.B_TAISEI2_1.options[i] = new Option(v_Element[i], i),
                c.B_TAISEI3_1.options[i] = new Option(v_Element[i], i);
        for (i = 0; i <= 10; i++)
            c.B_TAISEI4.options[i] = new Option(i, i);
        for (i = 0; i <= 5; i++)
            c.B_TAISEI5.options[i] = new Option(i, i);
        for (i = 0; i <= 10; i++)
            c.B_TAISEI10.options[i] = new Option(i, i);
        for (i = 0; i <= 5; i++)
            c.B_TAISEI13.options[i] = new Option(v_EnergyCoat[i], i);
        for (i = 0; i <= 10; i++)
            c.B_TAISEI14.options[i] = new Option(i, i);
        for (n_B = new Array,
            i = 0; i <= 26; i++)
            n_B[i] = m_Monster2[c.B_Enemy.value][i];
        i = 1 * c.B_Enemy.value,
            c.B_LV.value = m_Monster2[i][5],
            c.B_VIT.value = m_Monster2[i][7],
            c.B_AGI.value = m_Monster2[i][8],
            c.B_INT.value = m_Monster2[i][9],
            c.B_LUK.value = m_Monster2[i][11],
            c.B_DEF.value = m_Monster2[i][14],
            c.B_MDEF.value = m_Monster2[i][15]
    }
}
function tPlusLucky(e) {
    return PvP ? (w = n_B_manual[38],
        w += n_B[11] / 10,
        w = e * (100 - w) / 100,
        w) : e
}
function tPlusAG() {
    2 != n_rangedAtk && n_B_buf[11] > 0 && (wPAG = w_AG[n_B_buf[11]],
        w_DMG[0] *= wPAG / 100,
        w_DMG[1] *= wPAG / 100,
        w_DMG[2] *= wPAG / 100)
}
function defReduction(e) {
    return 1 * c.server.value < 50 ? (100 - e) / 100 : (4e3 + e) / (4e3 + 10 * e)
}
function mdefReduction(e) {
    return 1 * c.server.value < 50 ? (100 - e) / 100 : (1e3 + e) / (1e3 + 10 * e)
}
SWs3sw = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
