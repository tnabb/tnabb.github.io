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

// --- Music & Dance Skills Table: Isolated Visual Cue and Toggle Functions ---
function Buf3SW(show) {
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
        header.onclick = function() { Buf3SW(show ? 0 : 1); };
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
PvP = 0,
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
n_BbufSW = 0;
var n_B_AtkSkill = 0;
SuperNoviceFullWeaponCHECK = 0,
b = 0,
n_tok = new Array;
for (var i = 0; i <= 450; i++)
    n_tok[i] = 0;
n_M_debuff = new Array;
for (var i = 0; i <= 9999; i++)
    n_M_debuff[i] = 0;
var first_check = 0;
n_B = new Array,
    Item_or_Card = "Item",
    ItemCardNumberCheck = 142;
var c = document.calcForm
    , equip_restrict = 1
    , card_restrict = 0;
n_A_WeaponTypesArray = new Array;
var n_A_WeaponType = 0;
var player = new PlayerData();
var monster = new MonsterData();

v_Race = ["<b style='color:#9F9E9B'>Formless</b>", "<b style='color:purple'>Undead</b>", "<b style='color:brown'>Brute</b>", "<b style='color:#00DD00'>Plant</b>", "<b style='color:green'>Insect</b>", "<b style='color:blue'>Fish</b>", "<b style='color:#000000'>Demon</b>", "<b style='color:orange'>Demi-Human</b>", "<b style='color:#CDCD40'>Angel</b>", "<b style='color:red'>Dragon</b>"],
v_Race_ = ["Formless", "Undead", "Brute", "Plant", "Insect", "Fish", "Demon", "Demi-Human", "Angel", "Dragon"],
v_Element = ["<b style='color:#A89682'>Neutral</b>", "<b style='color:blue'>Water</b>", "<b style='color:brown'>Earth</b>", "<b style='color:red'>Fire</b>", "<b style='color:#00CC00'>Wind</b>", "<b style='color:#bb24bb'>Poison</b>", "<b style='color:#CDCD00'>Holy</b>", "<b style='color:#000000'>Shadow</b>", "<b style='color:#BFBEBB'>Ghost</b>", "<b style='color:purple'>Undead</b>", "<b style='color:#FF6600'>Non-Elemental</b>"],
v_Element_ = ["Neutral ", "Water ", "Earth ", "Fire ", "Wind ", "Poison ", "Holy ", "Shadow ", "Ghost ", "Undead ", "Non-Elemental"],
v_Size = ["Small", "Medium", "Large"],
v_Effect = ["Poison", "Stun", "Freeze", "Curse", "Blind", "Sleep", "Silence", "Confusion", "Bleeding", "Stone", "Weapon Break", "Armor Break"],
v_EnergyCoat = ["0", "6% Reduction", "12% Reduction", "18% Reduction", "24% Reduction", "30% Reduction"],
v_Race2 = ["(none)", "Goblin", "Golem", "Guardian", "Kobold", "Orc", "Satan Morroc"],
v_Type = ["Normal", "Boss"],
JobName = ["Novice", "Swordman", "Thief", "Acolyte", "Archer", "Magician", "Merchant", "Knight", "Assassin", "Priest", "Hunter", "Wizard", "Blacksmith", "Crusader", "Rogue", "Monk", "Bard", "Dancer", "Sage", "Alchemist", "Super Novice", "Lord Knight", "Assassin Cross", "High Priest", "Sniper", "High Wizard", "Whitesmith", "Paladin", "Stalker", "Champion", "Clown", "Gypsy", "Professor", "Creator", "High Novice", "High Swordman", "High Thief", "High Acolyte", "High Archer", "High Magician", "High Merchant", "Taekwon Kid", "Star Gladiator", "Soul Linker", "Ninja", "Gunslinger", "Night Watch", "High Taekwon Kid", "Soul Ascetic"];
var All_DMGskill = [0, 6, 7, 17, 19, 40, 41, 44, 46, 47, 51, 52, 53, 54, 55, 56, 57, 65, 66, 70, 71, 72, 73, 76, 83, 84, 88, 97, 102, 104, 106, 111, 112, 113, 118, 122, 124, 125, 126, 127, 128, 130, 131, 132, 133, 158, 159, 161, 162, 167, 169, 171, 188, 189, 192, 193, 197, 199, 207, 244, 248, 259, 260, 261, 263, 264, 271, 272, 275, 277, 324, 325, 391, 326, 328, 321, 382, 339, 331, 333, 335, 337, 317, 318, 373, 374, 375, 407, 408, 409, 410, 412, 413, 414, 415, 397, 398, 399, 400, 401, 405, 434, 438, 417, 418, 419, 423, 424, 474, 489, 302, 611, 752, 461, 463, 465, 466, 469, 510, 443, 473, 847, 848, 849, 850, 853, 854, 606, 513, 514, 515, 516];

function cap_value(a, min, max){
    return a >= max ? max : a <= min ? min : a;
}

function firstLoadFunction() {
    for (c.A_JOB.length = new Option(JobName[i], i),
        i = 0; i <= 48; i++)
        c.A_JOB.options[i] = new Option(JobName[i], i);
    for (c.A_Weapon_refine.length = 0,
        player.dual_wield && (c.A_Weapon2_refine.length = 0),
        c.A_HEAD_REFINE.length = 0,
        c.A_LEFT_REFINE.length = 0,
        c.A_BODY_REFINE.length = 0,
        c.A_SHOULDER_REFINE.length = 0,
        c.A_SHOES_REFINE.length = 0,
        i = 0; i <= 10; i++)
        c.A_Weapon_refine.options[i] = new Option("+" + i, i),
        player.dual_wield && (c.A_Weapon2_refine.options[i] = new Option("+" + i, i)),
        c.A_HEAD_REFINE.options[i] = new Option("+" + i, i),
        c.A_LEFT_REFINE.options[i] = new Option("+" + i, i),
        c.A_BODY_REFINE.options[i] = new Option("+" + i, i),
        c.A_SHOULDER_REFINE.options[i] = new Option("+" + i, i),
        c.A_SHOES_REFINE.options[i] = new Option("+" + i, i)
    firstLoad = 1,
    calc()
}
function restrictEquipslot() {
    equip_restrict = 1 * c.restrict_equipslot.checked;
    (3 == n_A_WeaponType || 5 == n_A_WeaponType || 7 == n_A_WeaponType || 10 == n_A_WeaponType || 11 == n_A_WeaponType || 16 == n_A_WeaponType || 17 == n_A_WeaponType || 18 == n_A_WeaponType || 19 == n_A_WeaponType || 20 == n_A_WeaponType || 21 == n_A_WeaponType || player.dual_wield) && equip_restrict ? (c.A_LEFT_REFINE.disabled = !0,
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
        player.dual_wield && (0 != m_Item[c.A_weapon2.value][5] ? (c.A_weapon2_card1.disabled = !1,
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
                player.dual_wield && (c.A_weapon2_card1.disabled = !1,
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

function ClickJob(jobId) {
    myInnerHtml("A_KakutyouSel", "", 0);
    myInnerHtml("A_KakutyouData", "", 0);
    c.A_Kakutyou.value = 0;
    n_A_JobSet();
    jobId = n_A_JOB;

    for(let i = 1; i <= 99; i++) {
        c.A_BaseLV.options[i - 1] = new Option(i, i);
        c.A_STR.options[i - 1] = new Option(i, i);
        c.A_AGI.options[i - 1] = new Option(i, i);
        c.A_VIT.options[i - 1] = new Option(i, i);
        c.A_INT.options[i - 1] = new Option(i, i);
        c.A_DEX.options[i - 1] = new Option(i, i);
        c.A_LUK.options[i - 1] = new Option(i, i);
    }

    const jobLvCount = c.A_JobLV.length;
    for(let i = 0; i < jobLvCount; i++) {
        c.A_JobLV.options[0] = null;
    }

    let maxJobLevel;
    if(jobId === JOB.NOVICE) {
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

    // aspd pot
    if(n_Skill7SW) {
        const jobClass2 = n_A_JobClass2();

        if(jobId != JOB.ACOLYTE && jobClass2 != JOB.PRIEST && jobClass2 != JOB.BARD) {
            c.A_SpeedPOT.options[2] = new Option(SpeedPotName[2], 2);
        } else {
            c.A_SpeedPOT.options[2] = new Option("-", 0);
        }

        // berserk pots
        const jobClass1 = n_A_JobClass();
        if(jobClass1 == JOB.SWORDMAN || jobClass1 == JOB.MERCHANT || jobClass1 == JOB.TAEKWON || jobClass2 == JOB.ROGUE || jobClass2 == JOB.WIZARD || jobId == JOB.MAGICIAN || jobClass1 == JOB.GUNSLINGER) {
            c.A_SpeedPOT.options[3] = new Option(SpeedPotName[3] + " (Lvl 85)", 3);
            c.A_SpeedPOT.options.length = 4;
        } else if (jobId == JOB.ASSASSIN_CROSS) {
            c.A_SpeedPOT.options[3] = new Option("* Special (" + m_Skill[304][2] + " Lvl 85)", 3);
            c.A_SpeedPOT.options[4] = new Option("Poison Bottle", 4);
            c.A_SpeedPOT.options.length = 5;
        } else {
            c.A_SpeedPOT.options[3] = new Option("* Special (" + m_Skill[304][2] + ") (Lvl 85)", 3);
            c.A_SpeedPOT.options.length = 4;
        }
    }

    if(jobId != JOB.SUPERNOVICE)
        SuperNoviceFullWeaponCHECK = 0;

    if(SuperNoviceFullWeaponCHECK) {
        JOB_BASE_ASPD[JOB.SUPERNOVICE][WEAPON.TWOHANDAXE] = 1.6;
    } else {
        delete JOB_BASE_ASPD[JOB.SUPERNOVICE][WEAPON.TWOHANDAXE];
    }

    WeaponSet(jobId);

    const availableBuffs = JOB_AVAILABLE_BUFFS[jobId] || [];

    for (let i = 0; i <= 14; i++) {
        const skillId = availableBuffs[i];

        if(skillId === undefined) {
            myInnerHtml("P_Skill" + i, "", 0);
            myInnerHtml("P_Skill" + i + "s", "", 0);
            continue;
        }

        if(skillId === 385) {
            myInnerHtml("P_Skill" + i, m_Skill[skillId][2], 0);
            myInnerHtml("P_Skill" + i + "s", '<select name=A_skill' + i + ' id=A_skill' + i + ' onChange="StAllCalc() | WeaponSet(20) | restrictCardslot(1)"></select>', 0);
        } else if (skillId === 392) {
            myInnerHtml("P_Skill" + i, skillName(m_Skill[skillId][0]), 0);
            myInnerHtml("P_Skill" + i + "s", "<select name=A_skill" + i + " id=A_skill" + i + ' onChange="StAllCalc()" style="width:70px;"></select>', 0);
            if(player.status.rebirth == 0)
                myInnerHtml("P_Skill" + i, "", 0);
        } else if (skillId === 441) {
            myInnerHtml("P_Skill" + i, m_Skill[skillId][2], 0);
            myInnerHtml("P_Skill" + i + "s", "<select name=A_skill" + i + " id=A_skill" + i + ' onChange="StAllCalc() | ClickActiveSkill2() | calc()"></select>', 0);
            if(player.status.rebirth == 0)
                myInnerHtml("P_Skill" + i, "", 0);
        } else {
            myInnerHtml("P_Skill" + i, skillName(m_Skill[skillId][0]), 0);
            myInnerHtml("P_Skill" + i + "s", "<select name=A_skill" + i + " id=A_skill" + i + " onChange=StAllCalc()></select>", 0);
        }
    }

    for(let i = 0; i <= 14; i++) {
        const skillId = availableBuffs[i];

        if(skillId === undefined) continue;

        const skillElement = document.getElementById("A_skill" + i);
        if(!skillElement) continue;

        const toggleSkills = [12, 68, 152, 253, 258, 301, 309, 310, 322, 345, 364, 365, 379, 383, 385, 386, 390, 420, 421, 422, 846, 858];

        if(NumSearch(skillId, toggleSkills)) {
            skillElement.options[0] = new Option("off", 0);
            skillElement.options[1] = new Option("on", 1);
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
        } else {
            for(let j = 0; j <= 10; j++) {
                skillElement.options[j] = null;
            }

            const maxSkillLevel = m_Skill[skillId][1];
            for(let j = 0; j <= maxSkillLevel; j++) {
                skillElement.options[j] = new Option(j, j);
            }

            if(skillId === 392) {
                const ecNames = ["off", "eAthena (max stats)", "iRO", "Original"];
                for(let j = 0; j <= 3; j++) {
                    skillElement.options[j] = new Option(ecNames[j], j);
                }
                if(player.status.rebirth == 0) 
                    skillElement.style.visibility = "hidden";
            }
        }
    }

    Askill();
    WeaponSet2();
}

function Askill() {
    
    for(let i = 0; i < c.A_ActiveSkill.length; i++) {
        c.A_ActiveSkill.options[i] = null;
    }

    if(c.all_dmgSkills.checked) {
        for(let i = 0; i < All_DMGskill.length; i++) {
            c.A_ActiveSkill.options[i] = new Option(skillNameInSelect(m_Skill[All_DMGskill[i]][0]), All_DMGskill[i]);
        }
    } else {
        const jobSkills = JOB_ACTIVE_SKILLS[n_A_JOB] || [];
        for(let i = 0; i < jobSkills.length; i++) {
            const skillId = jobSkills[i];
            const skillName = skillNameInSelect(m_Skill[skillId][0]);
            c.A_ActiveSkill.options[i] = new Option(skillName, skillId);
        }
    }

    for(let i = 0; i < 20; i++) {
        w_ASSP0bk[i] = 999;
    }
    ActiveSkillSetPlus();
    ClickActiveSkill();
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
    else if (17 == e || 18 == e || 19 == e || 20 == e || 21 == e)
        for (j = 8,
            _ = 0; _ <= 8; _++)
            m_Arrow[_] = m_Bullet[_];
    /* else if (21 == e)
        for (j = 4,
            _ = 0; _ <= 4; _++)
            m_Arrow[_] = m_Grenade[_]; */
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
            player.dual_wield = false,
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
    else if (!player.dual_wield) {
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
    }else if(m_RandomOptForgedWeapons.includes(parseInt(n_A_Equip[0]))){ // forged
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
    }else if(m_RandomOptCrimsonWeapons.includes(parseInt(n_A_Equip[0]))){ // crimson
        if(!(m_RandomOptCrimsonWeapons.includes(parseInt(oldWeapon))) || parseInt(oldWeapon) == 0){
            RandOptWeapon1Reset();
            for(i = 0; "NULL" != m_RandomOptCrimson[0][i]; i++){
                c.A_weapon1_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptCrimson[0][i]][1], m_RandomOpt[m_RandomOptCrimson[0][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptCrimson[1][i]; i++){
                c.A_weapon1_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptCrimson[1][i]][1], m_RandomOpt[m_RandomOptCrimson[1][i]][0]);
            }
            c.A_weapon1_ropt3.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
            c.A_weapon1_ropt4.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
        }
    }else if(m_RandomOptMineWorkerPickaxe.includes(parseInt(n_A_Equip[0]))){ // mineworker pickaxe
        if(!(m_RandomOptMineWorkerPickaxe.includes(parseInt(oldWeapon))) || parseInt(oldWeapon) == 0){
            RandOptWeapon1Reset();
            for(i = 0; "NULL" != m_RandomOptPickaxe[0][i]; i++){
                c.A_weapon1_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptPickaxe[0][i]][1], m_RandomOpt[m_RandomOptPickaxe[0][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptPickaxe[1][i]; i++){
                c.A_weapon1_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptPickaxe[1][i]][1], m_RandomOpt[m_RandomOptPickaxe[1][i]][0]);
            }
            for(i = 0; "NULL" != m_RandomOptPickaxe[2][i]; i++){
                c.A_weapon1_ropt3.options[i] = new Option(m_RandomOpt[m_RandomOptPickaxe[2][i]][1], m_RandomOpt[m_RandomOptPickaxe[2][i]][0]);
            }
            c.A_weapon1_ropt4.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
        }
    }else if(m_RandomOptSpecialType.includes(parseInt(e)) || m_RandomOptSpecialWeapons.includes(parseInt(n_A_Equip[0]))){ // special
        if(!(m_RandomOptSpecialType.includes(parseInt(n_A_WeaponType))) || m_RandomOptSpecialWeapons.includes(parseInt(oldWeapon)) || m_RandomOptCrimsonWeapons.includes(parseInt(oldWeapon)) || parseInt(oldWeapon) == 0){
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
        if(!(m_RandomOptMeleeType.includes(parseInt(n_A_WeaponType))) || m_RandomOptSpecialWeapons.includes(parseInt(oldWeapon)) || m_ForgedItems.includes(parseInt(oldWeapon)) || m_RandomOptCrimsonWeapons.includes(parseInt(oldWeapon)) || m_RandomOptMineWorkerPickaxe.includes(parseInt(oldWeapon)) || parseInt(oldWeapon) == 0){
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
        if(!(m_RandomOptRangedType.includes(parseInt(n_A_WeaponType))) || m_RandomOptSpecialWeapons.includes(parseInt(oldWeapon)) || m_RandomOptCrimsonWeapons.includes(parseInt(oldWeapon)) || parseInt(oldWeapon) == 0){
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
        if(!(m_RandomOptMagicType.includes(parseInt(n_A_WeaponType))) || m_RandomOptSpecialWeapons.includes(parseInt(oldWeapon)) || m_RandomOptCrimsonWeapons.includes(parseInt(oldWeapon)) || parseInt(oldWeapon) == 0){
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

    m_WeaponEnchant.includes(n_A_Equip[0]) ? (
        n_A_enchant[7] = 1 * c.A_weapon1_enchant1.value, document.getElementById("nA_weapon1_enchant1").style.display = 'table-cell',
        n_A_enchant[8] = 1 * c.A_weapon1_enchant2.value, document.getElementById("nA_weapon1_enchant2").style.display = 'table-cell',
        LoadWeaponEnchants(n_A_Equip[0], parseInt(oldWeapon)),
        n_A_randopt[0] = 0, n_A_randopt[1] = 0, document.getElementById("nA_weapon1_ropt1").style.display = 'none',
        n_A_randopt[2] = 0, n_A_randopt[3] = 0, document.getElementById("nA_weapon1_ropt2").style.display = 'none', 
        n_A_randopt[4] = 0, n_A_randopt[5] = 0, document.getElementById("nA_weapon1_ropt3").style.display = 'none', 
        n_A_randopt[6] = 0, n_A_randopt[7] = 0, document.getElementById("nA_weapon1_ropt4").style.display = 'none'
    ) : (
        n_A_enchant[7] = 0, document.getElementById("nA_weapon1_enchant1").style.display = 'none', c.A_weapon1_enchant1.value = 0,
        n_A_enchant[8] = 0, document.getElementById("nA_weapon1_enchant2").style.display = 'none', c.A_weapon1_enchant2.value = 0,
        document.getElementById("nA_weapon1_ropt1").style.display = 'table-cell',
        document.getElementById("nA_weapon1_ropt2").style.display = 'table-cell',
        document.getElementById("nA_weapon1_ropt3").style.display = 'table-cell',
        document.getElementById("nA_weapon1_ropt4").style.display = 'table-cell'
    ),

    ActiveSkillSetPlus(),
    ClickB_Item(n_A_Equip[0])
}
function ClickWeaponType2(e) {
    if (n_A_JobSet(),
        0 != e) {
        if (!player.dual_wield) {
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
            if(m_ForgedItems.includes(parseInt(e)) && !(m_RandomOptForgedWeapons.includes(parseInt(e)))){
                RandOptWeapon2Reset();
            }else if(m_RandomOptForgedWeapons.includes(parseInt(e))){
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
            }else if(m_RandomOptCrimsonWeapons.includes(parseInt(e))){ // crimson
                if(!(m_RandomOptCrimsonWeapons.includes(parseInt(n_A_Equip[1])))){
                    for(i = 0; "NULL" != m_RandomOptCrimson[0][i]; i++){
                        c.A_weapon2_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptCrimson[0][i]][1], m_RandomOpt[m_RandomOptCrimson[0][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptCrimson[1][i]; i++){
                        c.A_weapon2_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptCrimson[1][i]][1], m_RandomOpt[m_RandomOptCrimson[1][i]][0]);
                    }
                    c.A_weapon2_ropt3.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
                    c.A_weapon2_ropt4.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
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
                if(m_RandomOptSpecialWeapons.includes(parseInt(n_A_Equip[1])) || m_RandomOptForgedWeapons.includes(parseInt(n_A_Equip[1])) || m_RandomOptCrimsonWeapons.includes(parseInt(n_A_Equip[1])) || parseInt(n_A_Equip[1]) == 0){
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

            player.dual_wield = true;
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
            }else if(m_RandomOptCrimsonWeapons.includes(parseInt(e))){ // crimson
                if(!(m_RandomOptCrimsonWeapons.includes(parseInt(n_A_Equip[1])))){
                    RandOptWeapon2Reset();
                    for(i = 0; "NULL" != m_RandomOptCrimson[0][i]; i++){
                        c.A_weapon2_ropt1.options[i] = new Option(m_RandomOpt[m_RandomOptCrimson[0][i]][1], m_RandomOpt[m_RandomOptCrimson[0][i]][0]);
                    }
                    for(i = 0; "NULL" != m_RandomOptCrimson[1][i]; i++){
                        c.A_weapon2_ropt2.options[i] = new Option(m_RandomOpt[m_RandomOptCrimson[1][i]][1], m_RandomOpt[m_RandomOptCrimson[1][i]][0]);
                    }
                    c.A_weapon2_ropt3.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
                    c.A_weapon2_ropt4.options[0] = new Option(m_RandomOpt[0][1], m_RandomOpt[0][0]);
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

        m_WeaponEnchant.includes(parseInt(e)) ? (
            n_A_enchant[9] = 1 * c.A_weapon2_enchant1.value, document.getElementById("nA_weapon2_enchant1").style.display = 'table-cell',
            n_A_enchant[10] = 1 * c.A_weapon2_enchant2.value, document.getElementById("nA_weapon2_enchant2").style.display = 'table-cell',
            LoadWeaponEnchants(parseInt(e), parseInt(n_A_Equip[1])),
            n_A_randopt[8] = 0, n_A_randopt[9] = 0, document.getElementById("nA_weapon2_ropt1").style.display = 'none',
            n_A_randopt[10] = 0, n_A_randopt[11] = 0, document.getElementById("nA_weapon2_ropt2").style.display = 'none', 
            n_A_randopt[12] = 0, n_A_randopt[13] = 0, document.getElementById("nA_weapon2_ropt3").style.display = 'none', 
            n_A_randopt[14] = 0, n_A_randopt[15] = 0, document.getElementById("nA_weapon2_ropt4").style.display = 'none'
        ) : (
            n_A_enchant[9] = 0, document.getElementById("nA_weapon2_enchant1").style.display = 'none', c.A_weapon2_enchant1.value = 0,
            n_A_enchant[10] = 0, document.getElementById("nA_weapon2_enchant2").style.display = 'none', c.A_weapon2_enchant2.value = 0,
            document.getElementById("nA_weapon2_ropt1").style.display = 'table-cell',
            document.getElementById("nA_weapon2_ropt2").style.display = 'table-cell',
            document.getElementById("nA_weapon2_ropt3").style.display = 'table-cell',
            document.getElementById("nA_weapon2_ropt4").style.display = 'table-cell'
        );


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
            player.dual_wield = false;
    player.dual_wield && (n_A_Equip[1] = 1 * c.A_weapon2.value,
        ActiveSkillSetPlus(),
        ClickB_Item(n_A_Equip[1]))
}
function ClickActiveSkill() {
    n_A_ActiveSkill = 1 * c.A_ActiveSkill.value,
        n_A_ActiveSkill >= 5e3 ? (n_A_ActiveSkillLV = m_EnableSkill[n_A_ActiveSkill - 5e3][3],
            n_A_ActiveSkill = m_EnableSkill[n_A_ActiveSkill - 5e3][2]) : n_A_ActiveSkill >= 3e3 ? (n_A_ActiveSkillLV = m_EnableSkill[n_A_ActiveSkill - 3e3][3],
                n_A_ActiveSkill = m_EnableSkill[n_A_ActiveSkill - 3e3][2]) : n_A_ActiveSkill >= 2e3 ? (n_A_ActiveSkillLV = m_AutoSpellSkill[n_A_ActiveSkill - 2e3][3],
                    n_A_ActiveSkill = m_AutoSpellSkill[n_A_ActiveSkill - 2e3][2]) : (n_A_ActiveSkillLV = m_Skill[n_A_ActiveSkill][1],
                        14 != n_A_JobClass2() || 128 != n_A_ActiveSkill && 133 != n_A_ActiveSkill || (n_A_ActiveSkillLV = 5));
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
            var n = ["1", "2", "3"];
            for (myInnerHtml("BBSkill", 'Hits (considering knockback): <select name="BSkillSubNum" onChange="calc()"></select>', 0),
                i = 0; i <= 2; i++)
                c.BSkillSubNum.options[i] = new Option(n[i] + " hits", i);
            c.BSkillSubNum.value = 2
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
    if (326 == n_A_ActiveSkill)
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
        var e = ["1", "2", "3"];
        for (myInnerHtml("AASkill", 'Hits (considering knockback): <select name="SkillSubNum" onChange="calc()"></select>', 0),
            i = 0; i <= 2; i++)
            c.SkillSubNum.options[i] = new Option(e[i] + " hits", i);
        c.SkillSubNum.value = 2
    } else if (430 == n_A_ActiveSkill) {
        var e = ["1", "2", "4"];
        for (myInnerHtml("AASkill", 'Hits (considering channel time): <select name="SkillSubNum" onChange="calc()"></select>', 0),
            i = 0; i <= 2; i++)
            c.SkillSubNum.options[i] = new Option(e[i] + " hits", i);
        c.SkillSubNum.value = 2
    } else if (611 == n_A_ActiveSkill) {
        myInnerHtml("AASkill", 'Immobilized: <input type="checkbox" name="SkillSubNum" onclick="calc()">', 0);
        c.SkillSubNum.value = 0;
    } else if (489 == n_A_ActiveSkill) {
        myInnerHtml("AASkill", 'Remaining HP: <input type="text" inputmode="numeric" maxlength="5" name="SkillSubNum" size=3 onkeypress="return isNumeric(event)" onkeyup="calc()">', 0),
            c.SkillSubNum.value = n_A_MaxHP;
    } else if (443 == n_A_ActiveSkill) {
        for (myInnerHtml("AASkill", 'Enemies in Range: <select name="SkillSubNum" onChange="calc()"></select>', 0),
            i = 1; i <= 99; i++)
            c.SkillSubNum.options[i - 1] = new Option(i, i);
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
        SaveData[2] = 0,
        slotNum = 200,
        localStorage["Slot" + slotNum] = JSON.stringify(SaveData))
}
function LoadTheme() {
    "undefined" == typeof Storage ? alert("Sorry, your browser does not support local storage. If you see this message, please let me know at tnaab on Discord") : (slotNum = 50,
        SaveData = new Array,
        void 0 === localStorage["Slot" + slotNum] ? (c.theme.value = 0, c.server.value = 0) : (SaveData = JSON.parse(localStorage["Slot" + slotNum]),
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
        console.log("Updating " + sc + " with value " + level + ", lesson " + (lesson ? lesson.value : "N/A") + ", stat1 " + (stat1 ? stat1.value : "N/A") + ", stat2 " + (stat2 ? stat2.value : "N/A"));
        if(level > 0)
            sc_start(player, SC[sc], level, lesson ? parseInt(lesson.value, 10) : 0, stat1 ? parseInt(stat1.value, 10) : 0, stat2 ? parseInt(stat2.value, 10) : 0);
    } else if (sc === 'WHISTLE_SRS' || sc === 'ASSNCROS_SRS' || sc === 'HUMMING_SRS' || sc === 'FORTUNE_SRS') {
        console.log("Updating " + sc + " with value " + (el.checked ? "active" : "inactive") + " and fixed " + fixed);
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
    if (typeof calc === 'function') calc();
}
// Simple show/hide toggle for static SIENSKILL table
function BufSW(show) {
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
        header.onclick = function() { BufSW(show ? 0 : 1); };
    }
}

// On page load, hide the table rows except header
document.addEventListener('DOMContentLoaded', function() {
    BufSW(0);
    Buf3SW(0);
    updateMusicDanceStatLessonVisibility();
    updateMarionetteVisibility();
    Buf4SW(0);
});

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

// --- Guild Skills Table ---
function Buf4SW(show) {
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
        header.onclick = function() { Buf4SW(show ? 0 : 1); };
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
            _ += '<TR><TD class="right">' + skillName(442) + '</TD><TD id="EN70_2" class="data"></TD><TD class="right">Sleep</TD><TD id="EN77_2"></TD></TR>',
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
            myInnerHtml("EN70", '<input type="checkbox" name="A7_Skill0" onClick="A7(1)">Sesame Pastry (HIT +10)', 0),
            myInnerHtml("EN71", '<input type="checkbox" name="A7_Skill1" onClick="A7(1)">Honey Pastry (FLEE +10)', 0),
            myInnerHtml("EN72", '<input type="checkbox" name="A7_Skill2" onClick="A7(1)">Orlean\'s Full Course Meal (All Stats +7)', 0),
            myInnerHtml("EN79", '<input type="checkbox" name="A7_Skill9" onClick="A7(1)">Box of Resentment (ATK +20)', 0),
            myInnerHtml("EN710", '<input type="checkbox" name="A7_Skill10" onClick="A7(1)">Box of Drowsiness (MATK +20)', 0),
            myInnerHtml("EN711", '<input type="checkbox" name="A7_Skill11" onClick="A7(1)">Coldproof Potion', 0),
            myInnerHtml("EN712", '<input type="checkbox" name="A7_Skill12" onClick="A7(1)">Earthproof Potion', 0),
            myInnerHtml("EN713", '<input type="checkbox" name="A7_Skill13" onClick="A7(1)">Fireproof Potion', 0),
            myInnerHtml("EN714", '<input type="checkbox" name="A7_Skill14" onClick="A7(1)">Thunderproof Potion', 0),
            myInnerHtml("EN715", '<input type="checkbox" name="A7_Skill26" onClick="A7(1)">Guarana Candy (Concentration Potion, AGI Lvl 5)', 0),
            myInnerHtml("EN716", '<input type="checkbox" name="A7_Skill16" onClick="A7(1)">Oriental Pastry (MATK +10)', 0),
            myInnerHtml("EN717", '<input type="checkbox" name="A7_Skill31" onClick="A7(1)">Aloevera (Self Provoke Lvl 1)', 0),
            myInnerHtml("EN718", '<input type="checkbox" name="A7_Skill32" onClick="A7(1)">Small/Big Defense Potion (Physical DMG reduction +3%)', 0),
            myInnerHtml("EN719", '<input type="checkbox" name="A7_Skill33" onClick="A7(1)">Small/Big Magic Defense Potion (Magical DMG reduction +3%)', 0),
            myInnerHtml("EN720", '<input type="checkbox" name="A7_Skill34" onClick="A7(1)">Box of Gloom (' + skillName(42) + " Lvl 1)", 0),
            myInnerHtml("EN721", '<input type="checkbox" name="A7_Skill36" onClick="A7(1)">Abrasive (CRIT +20)', 0),
            myInnerHtml("EN722", '<select name="A_SpeedPOT" onChange="A7(1)"><option value="0">(no Speed Potion)</option></select>', 0),
            myInnerHtml("EN723", '<input type="checkbox" name="A7_Skill27" onClick="A7(1)"><strike>Military Ration B (HIT +33)</strike>', 0),
            myInnerHtml("EN724", '<input type="checkbox" name="A7_Skill28" onClick="A7(1)"><strike>Military Ration C (FLEE +33)</strike>', 0),
            myInnerHtml("EN725", '<input type="checkbox" name="A7_Skill29" onClick="A7(1)"><strike>Tasty Pink Ration (ATK +15)</strike>', 0),
            myInnerHtml("EN726", '<input type="checkbox" name="A7_Skill30" onClick="A7(1)"><strike>Tasty White Ration (MATK +15)</strike>', 0),
            myInnerHtml("EN727", '<input type="checkbox" name="A7_Skill17" onClick="A7(1)">Rune Strawberry Cake (ATK +5, MATK +5)', 0),
            myInnerHtml("EN728", '<input type="checkbox" name="A7_Skill18" onClick="A7(1)">Schwartzwald Pine Jubilee (HIT +10, FLEE +20)', 0),
            myInnerHtml("EN729", '<input type="checkbox" name="A7_Skill19" onClick="A7(1)">Arunafeltz Desert Sandwich (CRIT +7)', 0),
            myInnerHtml("EN730", '<input type="checkbox" name="A7_Skill20" onClick="A7(1)">Manuk\'s Sturdiness (ATK based damage on Manuk maps +10%)', 0),
            myInnerHtml("EN731", '<input type="checkbox" name="A7_Skill21" onClick="A7(1)">Manuk\'s Faith (MATK based damage on Manuk maps +10%)', 0),
            myInnerHtml("EN732", '<input type="checkbox" name="A7_Skill22" onClick="A7(1)">Manuk\'s Will (Received damage on Manuk maps -10%)', 0),
            myInnerHtml("EN733", '<input type="checkbox" name="A7_Skill23" onClick="A7(1)">Pinguicula\'s Fruit Jam (ATK based dmg on Splendide maps +10%)', 0),
            myInnerHtml("EN734", '<input type="checkbox" name="A7_Skill24" onClick="A7(1)">Cornus\' Tear (MATK based damage on Splendide maps +10%)', 0),
            myInnerHtml("EN735", '<input type="checkbox" name="A7_Skill25" onClick="A7(1)">Luciola\'s Honey Jam (Received damage on Splendide maps -10%)', 0),
            myInnerHtml("EN745", '<input type="checkbox" name="A7_Skill37" onClick="A7(1)"><strike>Lucky Rice Cake (LUK +21)</strike>', 0),
            myInnerHtml("EN738", '<input type="checkbox" name="A7_Skill38" onClick="A7(1)">Chewy Ricecake (ATK +10)', 0),
            myInnerHtml("EN746", "<input type=checkbox name=A7_Skill46 onClick=A7(1)><strike>Tyr's Blessing (FLEE +30, HIT +30, ATK +20, MATK +20)</strike>", 0),
            myInnerHtml("EN742", '<select name="A7_Skill42" onChange="A7(1)" style="width:175px;" disabled><option value="0">(none)</option></select>', 0),
            myInnerHtml("EN743", '<input type="checkbox" name="A7_Skill43" onClick="A7(1)">Sweets Macaron Cake (ATK/MATK +3%, Damage taken +10%)', 0),
            myInnerHtml("EN744", '<input type="checkbox" name="A7_Skill44" onClick="A7(1)"><strike>Ginger Bread (ASPD +% (same as Awakening Potion))</strike>', 0),
            myInnerHtml("EN737", '<input type="checkbox" name="A7_Skill45" onClick="A7(1)">Regeneration Potion (Items/skills recover +20%)', 0),
            myInnerHtml("EN739", '<select name="A7_Skill39" onChange="A7(1)" disabled><option value="0"><strike>(no HP Increase Potion)</strike></option></select>', 0),
            myInnerHtml("EN740", '<select name="A7_Skill40" onChange="A7(1)" disabled><option value="0"><strike>(no SP Increase Potion)</strike></option></select>', 0),
            myInnerHtml("EN741", '<input type="checkbox" name="A7_Skill41" onClick="A7(1)"><strike>Savage BBQ (STR +20)</strike>', 0),
            myInnerHtml("EN747", '<input type="checkbox" name="A7_Skill47" onClick="A7(1)"><strike>Cocktail Warg Blood (AGI +20)</strike>', 0),
            myInnerHtml("EN748", '<input type="checkbox" name="A7_Skill48" onClick="A7(1)"><strike>Minor Stew (VIT +20)</strike>', 0),
            myInnerHtml("EN749", '<input type="checkbox" name="A7_Skill49" onClick="A7(1)"><strike>Siroma Iced Tea (INT +20)</strike>', 0),
            myInnerHtml("EN750", '<input type="checkbox" name="A7_Skill50" onClick="A7(1)"><strike>Drosera Herb Salad (DEX +20) (not saved via URL)</strike>', 0),
            myInnerHtml("EN751", '<input type="checkbox" name="A7_Skill51" onClick="A7(1)"><strike>Petite Tail Noodles (LUK +20) (not saved via URL)</strike>', 0),
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
            SpeedPotName = ["(no Speed Potion)", "Concentration Potion", "Awakening Potion (Lvl 40)", "Berserk Potion"],
            c.A_SpeedPOT.options[0] = new Option(SpeedPotName[0], 0),
            c.A_SpeedPOT.options[1] = new Option(SpeedPotName[1], 1),
            3 != n_A_JOB && 9 != n_A_JobClass2() && 16 != n_A_JobClass2() ? c.A_SpeedPOT.options[2] = new Option(SpeedPotName[2], 2) : c.A_SpeedPOT.options[2] = new Option("-", 0),
            1 == n_A_JobClass() || 6 == n_A_JobClass() || 41 == n_A_JobClass() || 14 == n_A_JobClass2() || 11 == n_A_JobClass2() || 5 == n_A_JOB || 45 == n_A_JobClass() ? (c.A_SpeedPOT.options[3] = new Option(SpeedPotName[3] + " (Lvl 85)", 3), c.A_SpeedPOT.options.length = 4) : 22 == n_A_JOB ? (c.A_SpeedPOT.options[3] = new Option("* Special (" + m_Skill[304][2] + " Lvl 85)", 3), c.A_SpeedPOT.options[4] = new Option("Poison Bottle", 4), c.A_SpeedPOT.options.length = 5) : (c.A_SpeedPOT.options[3] = new Option("* Special (" + m_Skill[304][2] + ") (Lvl 85)", 3), c.A_SpeedPOT.options.length = 4),
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
            myInnerHtml("EN90" + i, '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC' + i + '" value="0" class="center">% vs<select name="A9_Skill' + i + '" onChange="A9(1)">' + _ + '<optgroup label="Type"><option value="23">Boss</option><option value="24">Goblin</option><option value="25">Golem</option><option value="26">Guardian</option><option value="27">Kobold</option><option value="28">Orc</option><option value="29">Satan Morroc</option></optgroup></select>', 0);
        for (i = 4; i < 8; i++)
            myInnerHtml("EN90" + i, '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC' + i + '" value="0" class="center">% vs<select name="A9_Skill' + i + '" onChange="A9(1)">' + _ + '<optgroup label="Type"><option value="23">Boss</option><option value="24">Normal</option><option value="25">Guardian</option></optgroup></select>', 0);
        for (myInnerHtml("EN915", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC26" value="0" class="center">% ATK based damage on any target.', 0),
            myInnerHtml("EN916", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC39" value="0" class="center">% MATK based damage on any target.', 0),
            myInnerHtml("EN931", '+<input type="text" inputmode="numeric" maxlength="7" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC15" value="0" class="center" style="width:44px;">MaxHP', 0),
            myInnerHtml("EN933", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC16" value="0" class="center">% MaxHP', 0),
            myInnerHtml("EN935", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC17" value="0" class="center">MaxSP', 0),
            myInnerHtml("EN937", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC18" value="0" class="center">% MaxSP', 0),
            myInnerHtml("EN939", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC19" value="0" class="center">DEF', 0),
            myInnerHtml("EN941", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC20" value="0" class="center">MDEF', 0),
            myInnerHtml("EN943", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC21" value="0" class="center">HIT', 0),
            myInnerHtml("EN944", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC40" value="0" class="center">Perfect HIT', 0),
            myInnerHtml("EN945", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC22" value="0" class="center">FLEE', 0),
            myInnerHtml("EN947", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC23" value="0" class="center">Perfect Dodge', 0),
            myInnerHtml("EN949", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC24" value="0" class="center">Critical Rate', 0),
            myInnerHtml("EN951", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC25" value="0" class="center">ATK', 0),
            myInnerHtml("EN953", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC38" value="0" class="center">% ATK', 0),
            myInnerHtml("EN955", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC27" value="0" class="center">MATK', 0),
            myInnerHtml("EN957", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC28" value="0" class="center">% MATK', 0),
            myInnerHtml("EN959", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC29" value="0" class="center">% ASPD', 0),
            myInnerHtml("EN961", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC30" value="0" class="center">% HP Regen', 0),
            myInnerHtml("EN963", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC31" value="0" class="center">% SP Regen', 0),
            myInnerHtml("EN965", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC32" value="0" class="center">STR', 0),
            myInnerHtml("EN967", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC33" value="0" class="center">AGI', 0),
            myInnerHtml("EN969", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC34" value="0" class="center">VIT', 0),
            myInnerHtml("EN971", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC35" value="0" class="center">INT', 0),
            myInnerHtml("EN973", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC36" value="0" class="center">DEX', 0),
            myInnerHtml("EN975", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC37" value="0" class="center">LUK', 0),
            myInnerHtml("EN976", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC41" value="0" class="center">% Long-range ATK based damage on any target.', 0),
            myInnerHtml("EN977", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC42" value="0" class="center">% Critical damage on any target.', 0),
            myInnerHtml("EN978", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC43" value="0" class="center">% DEF ignoring on any target.', 0),
            myInnerHtml("EN979", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC44" value="0" class="center">% MDEF ignoring on any target.', 0),
            myInnerHtml("EN980", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC45" value="0" class="center">% Long-range ATK and MATK based damage resistance.', 0),
            myInnerHtml("EN981", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC47" value="0" class="center">% <select name="A9_Skill8" onChange="A9(1)" style="width:170px;"></select> skill damage.', 0),
            myInnerHtml("EN982", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A9(1)" name="ARG_RC48" value="0" class="center">% <select name="A9_Skill9" onChange="A9(1)" style="width:170px;"></select> skill damage.', 0),
            c.A9_Skill8.options[0] = new Option("(no skill selected)", 0),
            i = 1; i < All_DMGskill.length; i++)
            c.A9_Skill8.options[i] = new Option(skillNameInSelect(m_Skill[All_DMGskill[i]][0]), All_DMGskill[i]);
        for (c.A9_Skill9.options[0] = new Option("(no skill selected)", 0),
            i = 1; i < All_DMGskill.length; i++)
            c.A9_Skill9.options[i] = new Option(skillNameInSelect(m_Skill[All_DMGskill[i]][0]), All_DMGskill[i]);
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
    if(player.dual_wield){
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

function reloadShadowEquip(){
    c.A_weapon_shadow.value = n_A_Shadow[0];
    c.A_left_shadow.value = n_A_Shadow[1];
    c.A_shoes_shadow.value = n_A_Shadow[3];
}

function reloadEnchant(){
    c.A_head_enchant.value = n_A_enchant[0];
    c.A_body_enchant1.value = n_A_enchant[1];
    c.A_body_enchant2.value = n_A_enchant[2];
    c.A_shoulder_enchant1.value = n_A_enchant[3];
    c.A_shoulder_enchant2.value = n_A_enchant[4];
    c.A_shoes_enchant1.value = n_A_enchant[5];
    c.A_shoes_enchant2.value = n_A_enchant[6];
    c.A_weapon1_enchant1.value = n_A_enchant[7];
    c.A_weapon1_enchant2.value = n_A_enchant[8];
    c.A_weapon2_enchant1.value = n_A_enchant[9];
    c.A_weapon2_enchant2.value = n_A_enchant[10];
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
            _ += '<TR><TD id="EN1101" colspan="4"></TD></TR>',
            myInnerHtml("B_MANUAL", _, 0),
            myInnerHtml("EN1000", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC0" value="0" class="center">% Racial Resistance', 0),
            myInnerHtml("EN1001", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC1" value="0" class="center">vs<select name="Bman1" onChange="A10(1)"></select>', 0),
            myInnerHtml("EN1002", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC2" value="0" class="center">vs<select name="Bman2" onChange="A10(1)"></select>', 0),
            myInnerHtml("EN1100", 'Monster element <select name="Bman3" onChange="A10(1)"></select> <select name="Bman4" onChange="A10(1)"></select> <input type="checkbox" name="B_mEle" onclick="A10(1)">', 0),
            myInnerHtml("EN1101", 'Monster size <select name="Bman5" onChange="A10(1)"></select> <input type="checkbox" name="B_mSize" onclick="A10(1)">', 0),
            myInnerHtml("EN1003", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC3" value="0" class="center">% Size Resistance', 0),
            myInnerHtml("EN1004", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC4" value="0" class="center">% Long-range Resistance', 0),
            myInnerHtml("EN1010", '+<input type="text" inputmode="numeric" onkeypress="return isNumeric(event)" maxlength="5" onkeyup="A10(1)" name="BRG_RC10" value="0" class="center">% Additional Reflect (equip/card)', 0),
            i = 0; i < v_Element_.length - 1; i++)
            c.Bman1.options[i] = new Option(v_Element_[i], i),
            c.Bman2.options[i] = new Option(v_Element_[i], i),
            c.Bman3.options[i] = new Option(v_Element_[i], i);
        myInnerHtml("EN1015", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC26" value="0" class="center">% ATK based damage on any target.', 0),
            myInnerHtml("EN1016", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC39" value="0" class="center">% MATK based damage on any target.', 0),
            myInnerHtml("EN1031", '+<input type="text" inputmode="numeric" maxlength="9" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC15" value="0" class="center" style="width:44px;">MaxHP', 0),
            myInnerHtml("EN1033", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC16" value="0" class="center" disabled><S>% MaxHP</S>', 0),
            myInnerHtml("EN1039", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC19" value="0" class="center">DEF', 0),
            myInnerHtml("EN1041", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC20" value="0" class="center">MDEF', 0),
            myInnerHtml("EN1043", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC21" value="0" class="center">HIT', 0),
            myInnerHtml("EN1044", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC40" value="0" class="center" disabled><S>Perfect HIT</S>', 0),
            myInnerHtml("EN1045", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC22" value="0" class="center">FLEE', 0),
            myInnerHtml("EN1047", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC23" value="0" class="center" disabled><S>Perfect Dodge</S>', 0),
            myInnerHtml("EN1049", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC24" value="0" class="center">Critical Rate', 0),
            myInnerHtml("EN1051", '+<input type="text" inputmode="numeric" maxlength="9" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC25" value="0" class="center">ATK', 0),
            myInnerHtml("EN1055", '+<input type="text" inputmode="numeric" maxlength="9" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC38" value="0" class="center" disabled><S>Max ATK</S>', 0),
            myInnerHtml("EN1053", '+<input type="text" inputmode="numeric" maxlength="9" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC27" value="0" class="center">MATK', 0),
            myInnerHtml("EN1057", '+<input type="text" inputmode="numeric" maxlength="9" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC28" value="0" class="center" disabled><S>Max MATK</S>', 0),
            myInnerHtml("EN1059", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC29" value="0" class="center" disabled><S>% ASPD</S>', 0),
            myInnerHtml("EN1067", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC33" value="0" class="center">AGI ', 0),
            myInnerHtml("EN1069", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC34" value="0" class="center">VIT', 0),
            myInnerHtml("EN1071", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC35" value="0" class="center">INT', 0),
            myInnerHtml("EN1073", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC36" value="0" class="center">DEX', 0),
            myInnerHtml("EN1075", '+<input type="text" inputmode="numeric" maxlength="5" onkeypress="return isNumeric(event)" onkeyup="A10(1)" name="BRG_RC37" value="0" class="center">LUK', 0);
            for(j = 1; j < 5; j++){
                c.Bman4.options[j-1] = new Option(j, j-1);
            }
            for(j = 0; j < v_Size.length; j++){
                c.Bman5.options[j] = new Option(v_Size[j], j);
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
            c.B_mEle.checked = n_B_manual[58],
            c.Bman5.value = n_B_manual[59],
            c.B_mSize.checked = n_B_manual[60]
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
            n += '<TR><TD id="BI1_1" class="center">Quagmire</TD><TD id="BI1_2" class="data"></TD><TD id="BI19_1" class="center">' + skillName(211) + '</TD><TD id="BI19_2"></TD></TR>',
            n += '<TR><TD id="BI24_1" class="center">Flying</TD><TD id="BI24_2" class="data"></TD><TD id="BI20_1" class="center">' + skillName(218) + '</TD><TD id="BI20_2"></TD></TR>',
            n += '<TR><TD id="BI25_1" class="center">Mass Spiral (IA)</TD><TD id="BI25_2" class="data"></TD><TD id="BI26_1" class="center">Disarm</TD><TD id="BI26_2"></TD></TR>',
            n += '<TR><TD id="BI27_1" class="center">Piercing Shot</TD><TD id="BI27_2" class="data"></TD><TD id="BI28_1" class="center">Fling</TD><TD id="BI28_2"></TD></TR>',
            n += '<TR><TD id="BI29_1" class="center dotB">Holy Light</TD><TD id="BI29_2" class="data dotB"></TD><TD id="BI30_1" class="center dotB">ME Combo</TD><TD id="BI30_2" class="dotB"></TD></TR>',
            n += '<TR><TD class="center" ColSpan="4"><b>Monster Exclusive Debuffs</b></TD></TR>',
            n += '<TR><TD id="BI13_1" class="center">' + skillName(172) + '</TD><TD id="BI13_2" class="data"></TD><TD id="BI14_1" class="center">' + skillName(173) + '</TD><TD id="BI14_2"></TD></TR>',
            n += '<TR><TD id="BI15_1" class="center">' + skillName(174) + '</TD><TD id="BI15_2" class="data"></TD><TD id="BI16_1" class="center">' + skillName(175) + '</TD><TD id="BI16_2"></TD></TR>',
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
            myInnerHtml("BI21_2", '<select name="B_debuf21" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI22_2", '<input type="checkbox" name="B_debuf22" onClick="AI(1)">', 0),
            myInnerHtml("BI23_1", 'Elemental Change (Sage Skill) <select name="B_debuf23" onChange="AI(1)||debufSW(1)"></select>', 0),
            myInnerHtml("BI25_2", '<select name="B_debuf25" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI26_2", '<input type="checkbox" name="B_debuf26" onClick="AI(1)">', 0),
            myInnerHtml("BI27_2", '<select name="B_debuf27" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI28_2", '<select name="B_debuf28" onChange="AI(1)"></select>', 0),
            myInnerHtml("BI29_2", '<input type="checkbox" name="B_debuf29" onClick="AI(1)">', 0),
            myInnerHtml("BI30_2", '<input type="checkbox" name="B_debuf30" onClick="AI(1)">', 0);
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
                c.B_debuf24.options[i] = new Option(i, i),
                c.B_debuf27.options[i] = new Option(i, i),
                c.B_debuf28.options[i] = new Option(i, i);
        c.B_debuf25.options[0] = new Option("0", 0),
        c.B_debuf25.options[1] = new Option("50%", 1),
        c.B_debuf25.options[2] = new Option("75%", 2),
        c.B_debuf21.options[0] = new Option(0, 0),
        c.B_debuf21.options[1] = new Option(1, 1),
        c.B_debuf21.options[2] = new Option(2, 2),
        c.B_debuf21.options[3] = new Option(3, 3),
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
                c.B_debuf21.value = n_B_debuf[21],
                c.B_debuf22.checked = n_B_debuf[22],
                c.B_debuf23.value = n_B_debuf[23]),
            c.B_debuf24.value = n_B_debuf[24],
            c.B_debuf25.value = n_B_debuf[25],
            c.B_debuf26.checked = n_B_debuf[26],
            c.B_debuf27.value = n_B_debuf[27],
            c.B_debuf28.value = n_B_debuf[28],
            c.B_debuf29.checked = n_B_debuf[29],
            c.B_debuf30.checked = n_B_debuf[30]
    } else {
        var n;
        n = '<TR><TD id="AITD" class="subheader point" onClick="debufSW(1)">Debuffs on Enemy <span id="AIused"></span>',
            myInnerHtml("EnemyDebuf", n += '<div class="right">(show)</div></TD></TR>', 0)
    }
    AI(0)
}
function AI(e) {
    1 == e && calc();
    for (var _ = 0, n = 0; n <= 30; n++)
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
            n += '<TR><TD class="center">' + skillName(157) + '</TD><TD id="ID_Kb11" class="data"></TD><TD class="center">Adrenaline Rush</TD><TD id="ID_Kb2"></TD></TR>',
            n += '<TR><TD class="center">Shield Reflect</TD><TD id="ID_Kb12" class="data"></TD><TD class="center">' + skillName(165) + '</TD><TD id="ID_Kb13"></TD></TR>',
            n += '<TR><TD class="center dotB">Energy Coat</TD><TD id="ID_Kb14" class="dotB" colspan="3"></TD></TR>',
            n += '<TR><TD class="center" colspan="4"><b>Monster Exclusive buffs</b></TD></TR>',
            n += '<TR><TD class="center">Attrib. Change</TD><TD id="ID_Kb6" class="data"></TD><TD class="center">Stone Skin</TD><TD id="ID_Kb7"></TD></TR>',
            n += '<TR><TD class="center">Keeping</TD><TD id="ID_Kb9" class="data"></TD><TD class="center">Anti Magic</TD><TD id="ID_Kb8"></TD></TR>',
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
function ClickB_Enemy(enemyID) {
    for (n_B = new Array,
        n_B2 = new Array,
        i = 0; i <= 22; i++)
        n_B[i] = m_Monster[enemyID][i],
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
        myInnerHtml("B_lv", n_B[5], 0),
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
        (n_B2[26] = n_B[5] + n_B[10],
            n_B2[27] = n_B[5] + n_B[8])
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
            n_B_debuf[25] = 1 * c.B_debuf25.value,
            n_B_debuf[26] = c.B_debuf26.checked,
            n_B_debuf[27] = 1 * c.B_debuf27.value,
            n_B_debuf[28] = 1 * c.B_debuf28.value,
            n_B_debuf[29] = 1 * c.B_debuf29.checked,
            n_B_debuf[30] = 1 * c.B_debuf30.checked,
            0 == PvP && (n_B_debuf[13] = c.B_debuf13.checked,
                n_B_debuf[14] = c.B_debuf14.checked,
                n_B_debuf[15] = c.B_debuf15.checked,
                n_B_debuf[16] = c.B_debuf16.checked,
                n_B_debuf[21] = 1 * c.B_debuf21.value,
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
        (n_B[26] = n_B[5] + n_B[10], n_B[27] = n_B[5] + n_B[8]);
    var n = 0;
    0 == n_B[19] && 0 != n_B_debuf[0] && n_B[3] < 90 && (n += 5 + 5 * n_B_debuf[0]),
        0 == PvP && n_B_debuf[22] && (n += 50),
        0 == PvP && n_B_debuf[24] && (n += 5 * n_B_debuf[24]),
        n > 100 && (n = 100),
        0 == PvP && (n_B[14] -= Math.floor(n_B[14] * n / 100)),
        0 == n_B[19] && n_B_debuf[2] && (n_B[14] -= Math.floor(25 * n_B[14] / 100));
    var mSpiralDebuf = 0;
    n_B_debuf[25] == 1 && (mSpiralDebuf = 50),
    n_B_debuf[25] == 2 && (mSpiralDebuf = 75),
    mSpiralDebuf && (n_B[14] -= Math.floor(n_B[14] * mSpiralDebuf / 100));
    mSpiralDebuf && (n_B[23] -= Math.floor(n_B[23] * mSpiralDebuf / 100));
    var flingDebuf = 2 * n_B_debuf[28];
    flingDebuf && (n_B[14] -= Math.floor(n_B[14] * flingDebuf / 100));
    flingDebuf && (n_B[23] -= Math.floor(n_B[23] * flingDebuf / 100));
    var l = 0;
    l += n_tok[290],
    0 == n_B[19] && (l += n_tok[291]),
    1 == n_B[19] && (l += n_tok[292]),
    l += n_tok[300 + n_B[2]],
    n_M_debuff[8] == 1 && (l = 0),
    l && (l < 0 && (l = 0), n_B[14] -= Math.floor(n_B[14] * l / 100)),
    l && (l < 0 && (l = 0), n_B[23] -= Math.floor(n_B[23] * l / 100)),
    l && (l < 0 && (l = 0), n_B[24] -= Math.floor(n_B[24] * l / 100)),
    n_B_debuf[14] && 0 == PvP && (n_B[14] -= Math.floor(15 * n_B[14] / 100)),
    0 == n_B[19] && n_B_debuf[4] && n_B[3] < 90 && (n_B[14] -= Math.floor(50 * n_B[14] / 100)),
    0 == n_B[19] && n_B_debuf[9] && n_B[3] < 90 && (n_B[14] -= Math.floor(50 * n_B[14] / 100)),
    n_B_buf[9] && (n_B[14] = 90),
    n_B_debuf[12] && (6 == n_B[2] || n_B[3] >= 90) && (n_B[14] -= Math.floor(n_B[14] * (10 + 4 * n_B_debuf[12]) / 100)),
    n_B_debuf[20] && 0 == PvP && (n_B[14] = 0),
    n_B[23] -= Math.floor(n_B[23] * n / 100),
    n_B[24] -= Math.floor(n_B[24] * n / 100),
    0 == n_B[19] && n_B_debuf[2] && (n_B[23] -= Math.floor(25 * n_B[23] / 100), n_B[24] -= Math.floor(25 * n_B[24] / 100)),
    0 == n_B[19] && n_B_debuf[4] && n_B[3] < 90 && (n_B[23] -= Math.floor(50 * n_B[23] / 100), n_B[24] -= Math.floor(50 * n_B[24] / 100)),
    0 == n_B[19] && n_B_debuf[9] && n_B[3] < 90 && (n_B[23] -= Math.floor(50 * n_B[23] / 100), n_B[24] -= Math.floor(50 * n_B[24] / 100)),
    0 == PvP && n_B_debuf[21] && (n_B[24] += 90),
    n_B_debuf[20] && (n_B[23] = 0, n_B[24] = 0);
    n_B[14] < 0 && (n_B[14] = 0),
    n_B[23] < 0 && (n_B[23] = 0),
    n_B[24] < 0 && (n_B[24] = 0),
    l = 0;
    if (l += n_tok[295],
        l += n_B[3] < 5 ? n_tok[360] : n_tok[360 + Math.floor(Math.abs(n_B[3]) / (10 ** (String(n_B[3]).length - 1)))], // pierce mdef on element
        l += n_tok[310 + n_B[2]], // pierce mdef on race
        n_M_debuff[9] == 1 && (l = 0),
        l < 0 && (l = 0),
        n_B[15] -= Math.floor(n_B[15] * l / 100),
        0 == n_B[19] && n_B_debuf[4] && n_B[3] < 90 && (n_B[15] += Math.floor(25 * n_B[15] / 100)),
        0 == n_B[19] && n_B_debuf[9] && n_B[3] < 90 && (n_B[15] += Math.floor(25 * n_B[15] / 100)),
        0 == n_B[19] && n_B_debuf[18] && n_B[3] < 90 && (n_B[25] -= Math.floor(n_B[25] * (12 * n_B_debuf[18]) / 100)),
        0 == PvP && n_B_debuf[21] && (n_B[25] = 90),
        n_B[15] < 0 && (n_B[15] = 0),
        n_B[25] < 0 && (n_B[25] = 0),
        n_B[26] += n_B_manual[36],
        0 == n_B[19] && n_B_debuf[3] && (n_B[26] -= 25, n_B[26] < 1 && (n_B[26] = 1)),
        !n_B[20] && 2 != c.B_AtkRange.value || 1 == c.B_AtkRange.value || n_A_Buf6[3] && (n_B[26] -= 50, n_B[26] < 1 && (n_B[26] = 1)),
        n_B_buf[4] && (n_B[26] = 2 * n_B[26]),
        n_B[27] += n_B_manual[37],
        0 == n_B[19] && n_B_debuf[3] && (n_B[27] -= Math.floor(25 * n_B[27] / 100)),
        0 != n_B_buf[5] && (n_B[27] = Math.floor(n_B[27] * (1 + .2 * n_B_buf[5]))),
        n_B_debuf[17] && (n_B[27] -= 50, n_B[27] < 0 && (n_B[27] = 0)),
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
    if(n_B_manual[60]){
        n_B[4] = n_B_manual[59];
    }
    l = Math.floor(n_B[3] / 10),
    n_B[3] != n_B2[3] ? myInnerHtml("B_3", "<b>" + s + (v_Element[l] + n_B[3] % 10) + u + "</b>", 0) : myInnerHtml("B_3", "<b>" + (v_Element[l] + n_B[3] % 10) + "</b>", 0),
    myInnerHtml("B_4", v_Size[n_B[4]], 0),
    myInnerHtml("B_type", v_Type[n_B[19]], 0),
    n_B[27] += n_B_manual[37],
    n_B_DEF2 = [0, 0, 0],
    n_B_DEF2[2] = cap_value(n_B[23], 1, 32767),
    n_B_DEF2[0] = cap_value(n_B[24], 1, 32767),
    n_B_DEF2[1] = Math.floor((n_B_DEF2[2] + n_B_DEF2[0]) / 2),
    n_B_MDEF2 = cap_value(n_B[25], 1, 32767),
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

    console.log("MOSNTEDATA");
    PopulateMonsterData();
}
function calc(sortingParameter = false) {
    StAllCalc();
    let skill_type = BF.WEAPON;
    if(m_Skill[n_A_ActiveSkill][4] == 1 || m_Skill[n_A_ActiveSkill][4] == 2 || m_Skill[n_A_ActiveSkill][4] == 3)
        skill_type = BF.WEAPON;
    else if(m_Skill[n_A_ActiveSkill][4] < 0)
        skill_type = BF.MAGIC;
    else if(m_Skill[n_A_ActiveSkill][4] == 5)
        skill_type = BF.MISC;
    let playerDamage = battle_calc_attack(skill_type, player, monster, n_A_ActiveSkill, n_A_ActiveSkillLV, 0);
    updatePlayerDamageDisplay(playerDamage);

    let n_B_AtkSkill = 1 * c.B_AtkSkill.value;
    skill_type = BF.WEAPON;
    if(m_Skill[n_B_AtkSkill][4] == 1 || m_Skill[n_B_AtkSkill][4] == 2 || m_Skill[n_B_AtkSkill][4] == 3)
        skill_type = BF.WEAPON;
    else if(m_Skill[n_B_AtkSkill][4] < 0)
        skill_type = BF.MAGIC;
    else if(m_Skill[n_B_AtkSkill][4] == 5)
        skill_type = BF.MISC;
    let monsterDamage = battle_calc_attack(skill_type, monster, player, n_B_AtkSkill, n_B_AtkSkill > 0 ? m_Monster[n_B[0]][2 * c.B_AtkSkill.selectedIndex + 22] : 0, 0);
    updateMonsterDamageDisplay(monsterDamage);

    console.log("calc called with sortingParameter =", sortingParameter);
}
function SkillSearch(skillId) {
    return player.passive_skills.find(skill => skill.id == skillId) ? player.passive_skills.find(skill => skill.id == skillId).level : 0;
}
SWs3sw = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
