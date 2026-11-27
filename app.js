'use strict';
/* ================= 伴学小狐 ================= */

/* ---------- 内容库 ---------- */
const POEMS = [
  { id: 'chunxiao', title: '春晓', author: '唐 · 孟浩然',
    lines: ['春眠不觉晓', '处处闻啼鸟', '夜来风雨声', '花落知多少'],
    yi: '春天睡醒时天已经亮了,到处都能听到小鸟的啼叫。想起昨夜的阵阵风雨,不知吹落了多少花朵。',
    zhishi: '孟浩然是唐代著名的田园诗人。"春晓"就是春天的早晨。',
    quiz: { q: '《春晓》的作者是谁?', opts: ['李白', '孟浩然', '杜甫'], ans: 1 } },
  { id: 'jingyesi', title: '静夜思', author: '唐 · 李白',
    lines: ['床前明月光', '疑是地上霜', '举头望明月', '低头思故乡'],
    yi: '床前洒满明亮的月光,好像地上结了一层霜。抬头望着明月,低头想起远方的家乡。',
    zhishi: '李白被称为"诗仙"。《静夜思》是小朋友最熟悉的一首诗。',
    quiz: { q: '诗中把月光比作什么?', opts: ['霜', '雪', '银'] , ans: 0 } },
  { id: 'minnong', title: '悯农', author: '唐 · 李绅',
    lines: ['锄禾日当午', '汗滴禾下土', '谁知盘中餐', '粒粒皆辛苦'],
    yi: '中午太阳火辣辣的,农民还在田里锄草,汗水滴进泥土里。谁知道碗里的米饭,每一粒都来之不易。',
    zhishi: '这首诗告诉我们要珍惜粮食,不浪费每一粒米。',
    quiz: { q: '这首诗告诉我们要珍惜什么?', opts: ['粮食', '时间', '书本'], ans: 0 } },
  { id: 'yonge', title: '咏鹅', author: '唐 · 骆宾王',
    lines: ['鹅鹅鹅', '曲项向天歌', '白毛浮绿水', '红掌拨清波'],
    yi: '大白鹅弯着脖子朝天唱歌,雪白的羽毛浮在碧绿的水面上,红红的脚掌拨动着清清的水波。',
    zhishi: '骆宾王写这首诗的时候才七岁,和你差不多大哦!',
    quiz: { q: '骆宾王写这首诗时几岁?', opts: ['三岁', '七岁', '二十岁'], ans: 1 } },
  { id: 'dengguanquelou', title: '登鹳雀楼', author: '唐 · 王之涣',
    lines: ['白日依山尽', '黄河入海流', '欲穷千里目', '更上一层楼'],
    yi: '太阳靠着群山慢慢落下,黄河滚滚流向大海。想看得更远,就要再登上一层楼。',
    zhishi: '"更上一层楼"告诉我们:想进步,就要不断努力!',
    quiz: { q: '"更上一层楼"想告诉我们什么?', opts: ['要多运动', '要不断努力看得更远', '楼很高'], ans: 1 } },
  { id: 'lushanpubu', title: '望庐山瀑布', author: '唐 · 李白',
    lines: ['日照香炉生紫烟', '遥看瀑布挂前川', '飞流直下三千尺', '疑是银河落九天'],
    yi: '阳光照在香炉峰上,升起紫色的云雾;远远看去,瀑布像白布挂在山前。飞流直下三千尺,好像是银河从天上落下来。',
    zhishi: '李白用"银河落九天"形容瀑布,是特别有名的想象。',
    quiz: { q: '诗中的瀑布被比作什么?', opts: ['银河', '白布', '大河'], ans: 0 } },
  { id: 'jiangxue', title: '江雪', author: '唐 · 柳宗元',
    lines: ['千山鸟飞绝', '万径人踪灭', '孤舟蓑笠翁', '独钓寒江雪'],
    yi: '所有的山上都看不到飞鸟,所有的路上都没有行人。只有一位披着蓑衣的老爷爷,独自在雪中的江上钓鱼。',
    zhishi: '这首诗写的是冬天,四周安安静静,只有老爷爷一个人。',
    quiz: { q: '这首诗描写的是什么季节?', opts: ['春天', '夏天', '冬天'], ans: 2 } },
  { id: 'xiangsi', title: '相思', author: '唐 · 王维',
    lines: ['红豆生南国', '春来发几枝', '愿君多采撷', '此物最相思'],
    yi: '红豆生长在南方,春天来了长出新的枝条。希望你多采一些,因为它最能寄托思念。',
    zhishi: '红豆也叫"相思子"。王维是唐代"诗佛",他的诗又美又安静。',
    quiz: { q: '诗里最能代表思念的是什么?', opts: ['红豆', '苹果', '星星'], ans: 0 } }
];

const WORDS = [
  { zi: '日', py: 'rì', ci: '日出、日记', li: '太阳从东方升起来啦!' },
  { zi: '月', py: 'yuè', ci: '月亮、月饼', li: '晚上月亮又圆又亮。' },
  { zi: '水', py: 'shuǐ', ci: '喝水、水果', li: '多喝水身体好。' },
  { zi: '火', py: 'huǒ', ci: '火车、火山', li: '火苗一跳一跳的。' },
  { zi: '山', py: 'shān', ci: '高山、爬山', li: '远处有一座高高的山。' },
  { zi: '木', py: 'mù', ci: '木头、树木', li: '森林里有很多树木。' },
  { zi: '花', py: 'huā', ci: '花朵、花生', li: '春天花儿都开了。' },
  { zi: '鸟', py: 'niǎo', ci: '小鸟、飞鸟', li: '小鸟在天上飞来飞去。' },
  { zi: '风', py: 'fēng', ci: '大风、风筝', li: '风把风筝吹得高高的。' },
  { zi: '雨', py: 'yǔ', ci: '下雨、雨伞', li: '下雨啦,快打伞。' },
  { zi: '云', py: 'yún', ci: '白云、云朵', li: '白云像棉花糖一样。' },
  { zi: '星', py: 'xīng', ci: '星星、星空', li: '晚上星星在眨眼睛。' }
];

const IDIOMS = [
  { name: '狐假虎威', emoji: '🦊🐯',
    story: '森林里,老虎抓到一只狐狸。狐狸灵机一动说:"你不能吃我,我是老天派来管百兽的!"老虎不信,狐狸说:"你跟在我后面走一圈,看看动物们怕不怕我。"于是狐狸大摇大摆走在前面,老虎跟在后面。小动物们看见老虎,吓得全跑了。老虎以为大家真的怕狐狸,就把它放了。',
    yiyi: '狐狸借老虎的威风吓唬别人。比喻自己没本事,却借着别人的权势吓人。' },
  { name: '守株待兔', emoji: '🌳🐰',
    story: '从前有个农夫在田里干活,忽然一只兔子跑过来,一头撞在树桩上死了。农夫高兴极了,捡起兔子回家美餐一顿。从此他再也不种田了,天天守在树桩旁,等着兔子再撞上来。日子一天天过去,田地荒了,兔子却再也没有出现过。',
    yiyi: '不能只想不劳而获,要靠自己的努力,好运不会天天来。' },
  { name: '拔苗助长', emoji: '🌱',
    story: '古时候有个农夫,嫌田里的禾苗长得太慢。他想了个"好办法":把每棵禾苗都往上拔高一点。忙了一天,他累得满头大汗,回家说:"今天我帮禾苗长高了好多!"第二天儿子跑到田里一看,禾苗全都枯死了。',
    yiyi: '做事不能急于求成,要一步一步慢慢来,违反规律反而会把事情弄坏。' },
  { name: '画蛇添足', emoji: '🐍',
    story: '几个人比赛画蛇,谁先画完谁赢一壶酒。有个人最先画完,得意地拿起酒壶,又给蛇添上几只脚。还没画完,另一个人画完了,抢过酒壶说:"蛇本来没有脚,你画了脚就不是蛇啦!"',
    yiyi: '做多余的事,反而把事情弄糟。刚刚好才最好。' }
];

const JOKES = [
  '小明问老师:"老师,我的作业你会做吗?"老师说:"当然会呀。"小明说:"太好了,那你帮我做吧!"',
  '为什么企鹅的肚子是白色的?因为它手太短,洗澡只洗得到肚子。🐧',
  '数字 0 和数字 8 谁更漂亮?当然是 8 啦,因为 8 有腰带!',
  '什么门永远关不上?球门!⚽',
  '小鱼问大鱼:"大~鱼~大~鱼~你~喜~欢~吃~什~么?"大鱼说:"我喜欢吃说话慢的小鱼。"🐟',
  '什么东西越洗越脏?水!💧'
];

const RIDDLES = [
  '什么东西天气越热,爬得越高?——温度计!🌡️',
  '什么车最长?——堵车!🚗🚙🚕',
  '什么人一年只工作一天?——圣诞老人!🎅',
  '黑鸡厉害还是白鸡厉害?——黑鸡!因为黑鸡能下白蛋,白鸡不能下黑蛋。🐔',
  '什么东西有脚却不能走路?——椅子!🪑',
  '什么河永远流不到大海?——银河!✨'
];

const PRAISES = ['你真棒!⭐', '太厉害啦!🌟', '答得又快又好!🎉', '你就是最棒的小天才!', '小狐为你鼓掌!👏', '好厉害,继续加油!'];

const STICKERS = [
  { n: 15, e: '🌟' }, { n: 30, e: '🎈' }, { n: 45, e: '🍭' },
  { n: 60, e: '🏅' }, { n: 75, e: '🚀' }, { n: 90, e: '👑' }
];
const EYE_MS = 20 * 60 * 1000;

/* ---------- 状态 ---------- */
const DEFAULT_STATE = {
  name: '', stars: 0, unlocked: 0,
  stats: { mathOk: 0, mathTotal: 0, quizOk: 0, quizTotal: 0, poems: [], chat: 0 },
  ttsRate: 1, eyeUntil: 0
};

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem('study-fox') || 'null');
    if (!s) return JSON.parse(JSON.stringify(DEFAULT_STATE));
    return {
      name: s.name || '', stars: s.stars || 0, unlocked: s.unlocked || 0,
      stats: Object.assign({}, DEFAULT_STATE.stats, s.stats || {}),
      ttsRate: s.ttsRate || 1, eyeUntil: s.eyeUntil || 0
    };
  } catch (e) { return JSON.parse(JSON.stringify(DEFAULT_STATE)); }
}

let state = loadState();
let voiceOn = true;
let chatQuiz = null;
let mathState = null;
let currentPoem = null;
let currentIdiom = null;

function save() { try { localStorage.setItem('study-fox', JSON.stringify(state)); } catch (e) {} }

/* ---------- 小工具 ---------- */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const randInt = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 1900);
}

function addStars(n) {
  state.stars += n;
  while (state.unlocked < STICKERS.length && state.stars >= STICKERS[state.unlocked].n) {
    toast(`解锁新贴纸 ${STICKERS[state.unlocked].e} !`);
    state.unlocked++;
  }
  save();
  updateStarBadge();
}
function updateStarBadge() { $('#star-count').textContent = state.stars; }

/* ---------- 语音 ---------- */
function speak(text) {
  try {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = state.ttsRate;
    const v = window.speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith('zh'));
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  } catch (e) {}
}
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

/* ---------- 页面切换 ---------- */
const MAIN_TABS = ['s-home', 's-learn', 's-chat', 's-me'];
const RENDERERS = {
  's-home': renderHome, 's-learn': renderLearn, 's-chat': renderChatEnter,
  's-me': renderMe, 's-poems': renderPoems, 's-math': renderMathMenu,
  's-words': renderWords, 's-idioms': renderIdioms
};

function show(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $('#' + id).classList.add('active');
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.go === id));
  window.scrollTo(0, 0);
  if (RENDERERS[id]) RENDERERS[id]();
}

/* ---------- 小狐狸表情 ---------- */
function foxMood(cls) {
  $$('.fox').forEach(f => { f.classList.remove('happy', 'think'); if (cls) f.classList.add(cls); });
}

/* ---------- 首页 ---------- */
function renderHome() {
  const card = $('#greeting-card');
  const chips = $('#home-chips');
  if (!state.name) {
    card.innerHTML = '我是伴学小狐 🦊 先告诉我你的名字吧!<div class="greet-input-row"><input class="greet-input" id="greet-input" maxlength="10" placeholder="我的名字"><button class="btn" id="greet-btn">开始学习</button></div>';
    chips.innerHTML = '';
    $('#greet-btn').onclick = () => {
      const v = $('#greet-input').value.trim();
      if (!v) { toast('先告诉小狐你的名字呀~'); return; }
      state.name = v; save();
      foxMood('happy');
      renderHome();
      speak(`你好呀,${v}!我是伴学小狐,很高兴认识你。`);
    };
    return;
  }
  card.innerHTML = `你好呀,${esc(state.name)}!今天想学点什么?`;
  foxMood('');
  const items = [
    { t: '😄 讲个笑话', f: () => { show('s-chat'); setTimeout(() => sendChat('讲个笑话', true), 350); } },
    { t: '📜 背首诗', f: () => show('s-poems') },
    { t: '🧮 出题考我', f: () => show('s-math') },
    { t: '📖 听故事', f: () => show('s-idioms') }
  ];
  chips.innerHTML = items.map(x => `<button class="chip" data-c="${x.t}">${x.t}</button>`).join('');
  chips.querySelectorAll('.chip').forEach((b, i) => b.onclick = items[i].f);
}

/* ---------- 学习 ---------- */
function renderLearn() {
  const rem = Math.max(0, state.eyeUntil - Date.now());
  $('#eye-countdown').textContent = fmtTime(rem);
}
function fmtTime(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}

/* ---------- 古诗 ---------- */
function renderPoems() {
  $('#poem-list').innerHTML = POEMS.map((p, i) =>
    `<div class="poem-item" data-idx="${i}"><div class="pi-title">${p.title}</div><div class="pi-sub">${p.author} · ${p.lines[0]},${p.lines[1]}…</div></div>`).join('');
  $('#poem-list').querySelectorAll('.poem-item').forEach(el =>
    el.onclick = () => openPoem(Number(el.dataset.idx)));
}

function openPoem(i) {
  currentPoem = POEMS[i];
  if (!state.stats.poems.includes(currentPoem.id)) {
    state.stats.poems.push(currentPoem.id); save();
  }
  $('#poem-title').textContent = currentPoem.title;
  $('#poem-author').textContent = currentPoem.author;
  $('#poem-lines').innerHTML = currentPoem.lines.map(l => `<div class="pline">${l}</div>`).join('');
  $$('#poem-lines .pline').forEach((el, k) => el.onclick = () => speak(currentPoem.lines[k]));
  $('#poem-yi-box').textContent = currentPoem.yi;
  $('#poem-zs-box').textContent = currentPoem.zhishi;
  $('#poem-yi-box').classList.add('hidden');
  $('#poem-zs-box').classList.add('hidden');
  $('#poem-speak').onclick = () => speak(currentPoem.title + ',' + currentPoem.lines.join(','));
  $('#poem-yi').onclick = () => $('#poem-yi-box').classList.toggle('hidden');
  $('#poem-zs').onclick = () => $('#poem-zs-box').classList.toggle('hidden');
  $('#poem-quiz').onclick = () => quizModal(currentPoem.quiz);
  show('s-poem');
}

/* ---------- 小测验弹窗 ---------- */
function quizModal(quiz) {
  $('#quiz-q').textContent = quiz.q;
  const box = $('#quiz-opts');
  box.innerHTML = quiz.opts.map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join('');
  $('#quiz-overlay').classList.remove('hidden');
  let answered = false;
  box.querySelectorAll('.opt').forEach(btn => {
    btn.onclick = () => {
      if (answered) return;
      answered = true;
      state.stats.quizTotal++;
      const i = Number(btn.dataset.i);
      if (i === quiz.ans) {
        btn.classList.add('right');
        state.stats.quizOk++;
        addStars(1);
        toast('答对啦! +1 ⭐');
        foxMood('happy');
        setTimeout(() => { $('#quiz-overlay').classList.add('hidden'); foxMood(''); }, 1000);
      } else {
        btn.classList.add('wrong');
        box.querySelectorAll('.opt')[quiz.ans].classList.add('right');
        toast('不对哦,看绿色那个~');
        setTimeout(() => $('#quiz-overlay').classList.add('hidden'), 1400);
      }
      save();
    };
  });
}
$('#quiz-overlay').onclick = e => { if (e.target.id === 'quiz-overlay') $('#quiz-overlay').classList.add('hidden'); };

/* ---------- 口算 ---------- */
function makeQuestion(level) {
  if (level === 1) {
    if (Math.random() < 0.5) { const a = randInt(2, 9), b = randInt(1, 10 - a); return { a, b, op: '+', ans: a + b }; }
    const a = randInt(2, 10), b = randInt(1, a - 1); return { a, b, op: '−', ans: a - b };
  }
  if (level === 2) {
    if (Math.random() < 0.5) { const a = randInt(11, 89), b = randInt(2, 9); return { a, b, op: '+', ans: a + b }; }
    const a = randInt(11, 99), b = randInt(2, 9); return { a, b, op: '−', ans: a - b };
  }
  const a = randInt(2, 9), b = randInt(2, 9); return { a, b, op: '×', ans: a * b };
}

function renderMathMenu() {
  mathState = null;
  const levels = [
    { lv: 1, name: '10 以内加减', desc: '入门 · 数字 1~10' },
    { lv: 2, name: '100 以内加减', desc: '进阶 · 两位数加减' },
    { lv: 3, name: '乘法表', desc: '挑战 · 九九乘法' }
  ];
  $('#math-body').innerHTML = `<div class="math-levels">` +
    levels.map(x => `<button class="level-btn" data-lv="${x.lv}"><div class="lv-name">${x.name}</div><div class="lv-desc">${x.desc}</div></button>`).join('') +
    `</div>`;
  $('#math-body').querySelectorAll('.level-btn').forEach(b =>
    b.onclick = () => startMath(Number(b.dataset.lv)));
}

function startMath(level) {
  mathState = { level, idx: 0, ok: 0, total: 10, q: null, waiting: false };
  nextMath();
}

function nextMath() {
  if (mathState.idx >= mathState.total) { endMath(); return; }
  mathState.idx++;
  mathState.q = makeQuestion(mathState.level);
  mathState.waiting = false;
  const pct = Math.round((mathState.idx - 1) / mathState.total * 100);
  $('#math-body').innerHTML = `
    <div class="math-progress">第 ${mathState.idx} / ${mathState.total} 题</div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="math-q">${mathState.q.a} ${mathState.q.op} ${mathState.q.b} = ?</div>
    <div class="math-input-row"><input class="math-input" id="math-input" type="number" inputmode="numeric" placeholder="?"><button class="btn" id="math-submit">提交</button></div>
    <div class="math-feedback" id="math-feedback"></div>`;
  const inp = $('#math-input');
  inp.focus();
  const go = () => {
    if (mathState.waiting) return;
    const v = parseInt(inp.value, 10);
    if (isNaN(v)) { toast('填一个数字哦~'); return; }
    mathState.waiting = true;
    state.stats.mathTotal++;
    const fb = $('#math-feedback');
    if (v === mathState.q.ans) {
      mathState.ok++;
      state.stats.mathOk++;
      addStars(1);
      fb.textContent = '✓ 答对啦! +1 ⭐';
      fb.className = 'math-feedback ok';
      foxMood('happy');
      setTimeout(() => { foxMood(''); nextMath(); }, 900);
    } else {
      fb.textContent = `✗ 正确答案是 ${mathState.q.ans}`;
      fb.className = 'math-feedback no';
      setTimeout(nextMath, 1600);
    }
    save();
  };
  $('#math-submit').onclick = go;
  inp.onkeydown = e => { if (e.key === 'Enter') go(); };
}

function endMath() {
  const all = mathState.ok === mathState.total;
  $('#math-body').innerHTML = `
    <div class="card math-end">
      <div class="me-emoji">${all ? '🏆' : (mathState.ok >= 8 ? '🎉' : '🦊')}</div>
      <div class="me-score">答对 ${mathState.ok} / ${mathState.total} 题</div>
      <div class="muted">${all ? '全对!你太厉害了!' : mathState.ok >= 8 ? '非常棒,离全对不远啦!' : '没关系,多练几次就会啦!'}</div>
      <button class="btn" id="math-again">再来一轮</button>
      <button class="btn" id="math-back" style="margin-left:8px">换难度</button>
    </div>`;
  if (all) confettiBurst();
  $('#math-again').onclick = () => startMath(mathState.level);
  $('#math-back').onclick = renderMathMenu;
}

/* ---------- 识字卡 ---------- */
function renderWords() {
  $('#word-grid').innerHTML = WORDS.map((w, i) => `
    <div class="word-card" data-idx="${i}">
      <div class="wc-inner">
        <div class="wc-face wc-front"><div class="wc-zi">${w.zi}</div><div class="wc-py" style="visibility:hidden">·</div></div>
        <div class="wc-face wc-back">
          <div class="wc-zi" style="font-size:26px">${w.zi}</div>
          <div class="wc-py">${w.py}</div>
          <div class="wc-ci">${w.ci}</div>
          <div class="wc-li">${w.li}</div>
          <button class="wc-speak" title="朗读">🔊</button>
        </div>
      </div>
    </div>`).join('');
  $$('#word-grid .word-card').forEach(card => {
    const w = WORDS[Number(card.dataset.idx)];
    card.onclick = () => {
      const flipped = card.classList.contains('flipped');
      if (!flipped) card.classList.add('flipped');
    };
    card.querySelector('.wc-speak').onclick = e => { e.stopPropagation(); speak(`${w.zi},${w.py}。${w.ci}。${w.li}`); };
  });
}

/* ---------- 成语 ---------- */
function renderIdioms() {
  $('#idiom-list').innerHTML = IDIOMS.map((d, i) => `
    <div class="idiom-item" data-idx="${i}">
      <div class="ii-emoji">${d.emoji}</div>
      <div><div class="ii-name">${d.name}</div><div class="ii-sub">${d.story.slice(0, 18)}…</div></div>
    </div>`).join('');
  $('#idiom-list').querySelectorAll('.idiom-item').forEach(el =>
    el.onclick = () => openIdiom(Number(el.dataset.idx)));
}

function openIdiom(i) {
  currentIdiom = IDIOMS[i];
  $('#idiom-name').textContent = currentIdiom.name;
  $('#idiom-emoji').textContent = currentIdiom.emoji;
  $('#idiom-story').innerHTML = currentIdiom.story.split('。').filter(Boolean).map(s => `<p>${s}。</p>`).join('');
  $('#idiom-yiyi').innerHTML = `<b>寓意:</b>${currentIdiom.yiyi}`;
  $('#idiom-speak').onclick = () => speak(currentIdiom.name + ',' + currentIdiom.story + currentIdiom.yiyi);
  show('s-idiom');
}

/* ---------- 聊天 ---------- */
const CHAT_CHIPS = ['😄 讲个笑话', '📜 背首诗', '🧮 考考我', '💭 脑筋急转弯'];

function renderChatEnter() {
  $('#chat-chips').innerHTML = CHAT_CHIPS.map(c => `<button class="chip" data-msg="${c}">${c}</button>`).join('');
  $('#chat-chips').querySelectorAll('.chip').forEach(b =>
    b.onclick = () => sendChat(b.dataset.msg, true));
  const log = $('#chat-log');
  if (!log.dataset.started) {
    log.dataset.started = '1';
    addMsg('fox', `你好呀${state.name ? ',' + state.name : ''}!我是伴学小狐 🦊 我会背古诗、讲成语故事,还会出题考你。快和我聊聊吧!`);
    if (voiceOn) speak('你好呀!我是伴学小狐,快和我聊聊吧!');
  }
}

function addMsg(who, text) {
  const log = $('#chat-log');
  const div = document.createElement('div');
  div.className = 'msg ' + who;
  div.textContent = text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function genQuiz() {
  const r = Math.random();
  let a, b, op, ans;
  if (r < 0.34) { a = randInt(3, 15); b = randInt(2, 12); op = '+'; ans = a + b; }
  else if (r < 0.67) { a = randInt(5, 20); b = randInt(2, a - 1); op = '−'; ans = a - b; }
  else { a = randInt(2, 9); b = randInt(2, 9); op = '×'; ans = a * b; }
  return { text: `口算题:${a} ${op} ${b} = ?(直接发数字答案,不想玩了就说"不玩了")`, ans };
}

function botReply(text) {
  const t = text.trim();
  const name = state.name || '小朋友';
  if (chatQuiz && /^\d+$/.test(t)) {
    const ans = parseInt(t, 10);
    const was = chatQuiz;
    chatQuiz = null;
    if (ans === was.ans) { addStars(1); const q2 = genQuiz(); chatQuiz = q2; return `${pick(PRAISES)} +1 ⭐ ${q2.text}`; }
    const q3 = genQuiz(); chatQuiz = q3; return `不对哦,答案是 ${was.ans}。${q3.text}`;
  }
  if (chatQuiz && /(不玩了|算了|不要)/.test(t)) { chatQuiz = null; return '好呀,那聊点别的~ 你可以让我讲笑话、背古诗哦!'; }
  if (/(你好|您好|嗨|hello|hi|在吗|哈喽)/i.test(t)) return `你好呀,${name}!我是伴学小狐。我可以:背古诗 📜、讲成语故事 📖、出题考你 🧮、讲笑话 😄`;
  if (/(你是谁|介绍一下|认识你)/.test(t)) return `我是伴学小狐 🦊,一只爱学习的小狐狸,专门陪小朋友学习、聊天、做游戏!`;
  if (/笑话/.test(t)) return pick(JOKES);
  if (/(急转弯|脑筋)/.test(t)) return pick(RIDDLES);
  if (/(古诗|背诗|诗)/.test(t)) { const p = pick(POEMS); return `来听《${p.title}》(${p.author}):${p.lines.slice(0, 2).join(',')}……想听完整版,去「学习 → 古诗」点开就能听啦!`; }
  if (/(成语|故事)/.test(t)) { const d = pick(IDIOMS); return `给你讲《${d.name}》${d.emoji}:${d.story.slice(0, 40)}……想听完整故事,去「学习 → 成语故事」哦!`; }
  if (/(考考我|出题|算数|口算)/.test(t)) { const q = genQuiz(); chatQuiz = q; return q.text; }
  if (/(真棒|厉害|夸|表扬)/.test(t)) return pick(PRAISES);
  if (/(谢谢|谢啦)/.test(t)) return '不客气!能帮到你,小狐也开心!';
  if (/(再见|拜拜|晚安)/.test(t)) return `再见,${name}!记得做眼保健操,保护好小眼睛哦 👋`;
  if (/(无聊|不开心|难过|伤心|累)/.test(t)) return `抱抱你 🤗 要不要听个笑话开心一下?或者我们来做几道口算题,把坏心情赶跑!`;
  if (/(谁做的|作者|claude|木木|谁开发的)/i.test(t)) return '我是木木和他的 AI 助手一起做的 🛠️ 纯网页小项目,免费给大家用!';
  if (/(你几岁|多大)/.test(t)) return '我刚刚出生没几天,还是只小狐狸宝宝呢 🍼';
  return `小狐没太听懂 😅 你可以试试:讲个笑话、背首诗、考考我、脑筋急转弯~`;
}

function sendChat(text, fromUser) {
  if (!text || !text.trim()) return;
  const msg = text.trim();
  if (fromUser) {
    addMsg('user', msg);
    state.stats.chat++;
    save();
  }
  foxMood('think');
  setTimeout(() => {
    const reply = botReply(msg);
    addMsg('fox', reply);
    foxMood('');
    if (voiceOn) speak(reply);
  }, 500 + Math.random() * 500);
}

function initChatInput() {
  const inp = $('#chat-input');
  $('#chat-send').onclick = () => { sendChat(inp.value, true); inp.value = ''; };
  inp.onkeydown = e => { if (e.key === 'Enter') { sendChat(inp.value, true); inp.value = ''; } };
  $('#voice-toggle').onclick = function () {
    voiceOn = !voiceOn;
    this.textContent = voiceOn ? '🔊' : '🔇';
    if (voiceOn) speak('朗读开啦');
  };
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const mic = $('#mic-btn');
  if (!SR) { mic.style.display = 'none'; return; }
  const rec = new SR();
  rec.lang = 'zh-CN';
  rec.interimResults = false;
  rec.onresult = e => {
    const t = e.results[0][0].transcript;
    inp.value = t;
    sendChat(t, true);
    inp.value = '';
  };
  rec.onend = () => mic.textContent = '🎤';
  mic.onclick = () => {
    if (mic.textContent === '🔴') { rec.stop(); return; }
    try { rec.start(); mic.textContent = '🔴'; } catch (e) {}
  };
}

/* ---------- 我的 ---------- */
function renderMe() {
  $('#name-input').value = state.name;
  $('#name-input').onchange = e => { state.name = e.target.value.trim(); save(); };
  $('#stats-grid').innerHTML = `
    <div class="stat"><b>${state.stats.mathOk}</b><span>答对算术题</span></div>
    <div class="stat"><b>${state.stats.quizOk}</b><span>答对测验题</span></div>
    <div class="stat"><b>${state.stats.poems.length}</b><span>学过的古诗</span></div>
    <div class="stat"><b>${state.stats.chat}</b><span>聊天次数</span></div>`;
  $('#sticker-grid').innerHTML = STICKERS.map((s, i) =>
    `<div class="sticker ${i < state.unlocked ? '' : 'locked'}"><span class="e">${i < state.unlocked ? s.e : '🔒'}</span><span class="s-n">${s.n} 颗⭐</span></div>`).join('');
  const rate = $('#tts-rate');
  rate.value = state.ttsRate;
  $('#tts-rate-val').textContent = state.ttsRate.toFixed(1) + 'x';
  rate.oninput = e => { state.ttsRate = parseFloat(e.target.value); $('#tts-rate-val').textContent = state.ttsRate.toFixed(1) + 'x'; save(); };
  rate.onchange = () => speak('这样说话,听得清吗?');
  $('#eye-countdown-me').textContent = fmtTime(Math.max(0, state.eyeUntil - Date.now()));
  $('#eye-reset').onclick = resetEye;
  $('#clear-data').onclick = () => {
    if (confirm('确定要清空星星和学习记录吗?')) {
      localStorage.removeItem('study-fox');
      state = loadState();
      location.reload();
    }
  };
}

/* ---------- 护眼 ---------- */
function resetEye() {
  state.eyeUntil = Date.now() + EYE_MS;
  save();
  $('#eye-overlay').classList.add('hidden');
  toast('护眼计时已重新开始,20 分钟后提醒你~');
}
$('#eye-done').onclick = resetEye;

function eyeTick() {
  if (!state.eyeUntil) { resetEye(); return; }
  const rem = state.eyeUntil - Date.now();
  if (rem <= 0) {
    state.eyeUntil = 0; save();
    $('#eye-overlay').classList.remove('hidden');
    $('#eye-countdown').textContent = '00:00';
    $('#eye-countdown-me').textContent = '00:00';
    return;
  }
  const t = fmtTime(rem);
  const a = $('#eye-countdown'), b = $('#eye-countdown-me');
  if (a) a.textContent = t;
  if (b) b.textContent = t;
}
setInterval(eyeTick, 1000);

/* ---------- 彩纸 ---------- */
function confettiBurst(n) {
  const layer = $('#confetti');
  const emojis = ['⭐', '🎉', '🎊', '✨', '🦊', '🌟'];
  for (let i = 0; i < (n || 26); i++) {
    const s = document.createElement('span');
    s.textContent = pick(emojis);
    s.style.left = Math.random() * 100 + '%';
    s.style.fontSize = (16 + Math.random() * 18) + 'px';
    s.style.animationDuration = (1.4 + Math.random() * 1.4) + 's';
    s.style.animationDelay = (Math.random() * 0.5) + 's';
    layer.appendChild(s);
    setTimeout(() => s.remove(), 3200);
  }
}

/* ---------- 全局事件 ---------- */
document.addEventListener('click', e => {
  const go = e.target.closest('[data-go]');
  if (go) { show(go.dataset.go); return; }
  const back = e.target.closest('[data-back]');
  if (back) { show(back.dataset.back); return; }
});

/* ---------- 启动 ---------- */
function init() {
  updateStarBadge();
  initChatInput();
  if (!state.eyeUntil) state.eyeUntil = Date.now() + EYE_MS, save();
  show('s-home');
}
init();
