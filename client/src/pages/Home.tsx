import { Link } from 'wouter';
import { useState } from "react";
import { ChevronDown, BookOpen, Zap, Target, Award, Volume2, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [expandedStage, setExpandedStage] = useState<number | null>(0);

  // Function to speak a word
  const speak = (word: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const scrollToLearningSection = () => {
    document.getElementById("learning-stages")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const stages = [
    {
      title: "第一阶段：基础地基 (CVC & Short Vowels)",
      subtitle: "掌握短元音发音",
      description: "当单词中只有一个元音且不在末尾时，通常发短音。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">什么是短元音？</h4>
        <p class="mb-4">短元音是英语拼读的基础。当一个元音字母（a, e, i, o, u）被辅音"包围"时，它通常发短音。这种模式叫做 CVC（辅音-元音-辅音）。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">规则详解</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>a /æ/</strong> - 像"苹果"的"a"音，口腔张开，舌头平放</li>
          <li><strong>e /e/</strong> - 像"鸡蛋"的"e"音，嘴角微微上扬</li>
          <li><strong>i /ɪ/</strong> - 像"坐"的"i"音，嘴角明显上扬</li>
          <li><strong>o /ɒ/</strong> - 像"锅"的"o"音，嘴唇圆形</li>
          <li><strong>u /ʌ/</strong> - 像"太阳"的"u"音，嘴唇不完全圆形</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">使用场景</h4>
        <p class="mb-4">短元音出现在单词的中间，被辅音包围。例如：<strong>cat（猫）</strong>、<strong>bed（床）</strong>、<strong>sit（坐）</strong>。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">常见例外</h4>
        <p>当元音后面跟着 r 时，会变成"霸道 R 规则"（第六阶段）；当单词以 e 结尾时，元音会发长音（第三阶段）。</p>
      `,
      content: {
        rule: "短元音是英语拼读的基础。每个元音都有对应的短音。",
        examples: [
          { letter: "a /æ/", words: ["cat", "map", "bag", "ham", "fan", "tap"] },
          { letter: "e /e/", words: ["hen", "red", "bed", "net", "ten", "leg"] },
          { letter: "i /ɪ/", words: ["pig", "sit", "bin", "dig", "fin", "lip"] },
          { letter: "o /ɒ/", words: ["dog", "hot", "box", "pot", "log", "mop"] },
          { letter: "u /ʌ/", words: ["sun", "cup", "bus", "mug", "rug", "tub"] },
        ],
      },
    },
    {
      title: "第二阶段：辅音合体 (Blends & Digraphs)",
      subtitle: "学习辅音连缀和组合",
      description: "两个辅音在一起，要么各自保留发音，要么变出新声音。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">辅音连缀 vs 辅音组合</h4>
        <p class="mb-4"><strong>辅音连缀 (Blends)：</strong> 两个辅音各自保留发音，快速连读。例如 "bl" 在 "black" 中，你能听到 /b/ 和 /l/ 两个音。</p>
        <p class="mb-4"><strong>辅音组合 (Digraphs)：</strong> 两个辅音组合产生全新的声音。例如 "sh" 在 "ship" 中，产生 /ʃ/ 的新音，不是 /s/ 和 /h/ 的组合。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">常见连缀</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>L-Blends:</strong> bl, cl, fl, gl, pl, sl</li>
          <li><strong>R-Blends:</strong> br, cr, dr, fr, gr, pr, tr</li>
          <li><strong>S-Blends:</strong> sc, sk, sm, sn, sp, st, sw</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">常见组合</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>sh /ʃ/</strong> - 像"嘘"的声音</li>
          <li><strong>ch /tʃ/</strong> - 像"吃"的声音</li>
          <li><strong>th /θ/ 或 /ð/</strong> - 舌头在牙齿间</li>
          <li><strong>wh /w/ 或 /hw/</strong> - 像"呼"的声音</li>
          <li><strong>ph /f/</strong> - 发 /f/ 的音</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">学习技巧</h4>
        <p>先学会每个辅音的发音，再练习快速连读。对于组合，要记住新的声音，不要试图分开发音。</p>
      `,
      content: {
        rule: "辅音连缀保留各自发音；辅音组合产生全新声音。",
        examples: [
          { letter: "L-Blends", words: ["black", "clap", "flag", "glass"] },
          { letter: "R-Blends", words: ["bring", "crab", "dress", "frog"] },
          { letter: "S-Blends", words: ["stop", "skip", "smile", "swim"] },
          { letter: "sh /ʃ/", words: ["ship", "shop", "show", "shut"] },
          { letter: "ch /tʃ/", words: ["chin", "chip", "chat", "church"] },
          { letter: "th /θ/", words: ["three", "think", "thank", "thick"] },
          { letter: "th /ð/", words: ["that", "this", "them", "then"] },
        ],
      },
    },
    {
      title: "第三阶段：长元音魔法 (Magic E / CVCe)",
      subtitle: "掌握魔法E规则",
      description: "结尾不发音的 e 让前面的元音发字母本音（长音）。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">什么是魔法 E？</h4>
        <p class="mb-4">魔法 E 是英语拼读中最重要的规则之一。当一个单词以"元音+辅音+e"结尾时，中间的元音会发长音（字母本身的名字），而末尾的 e 保持沉默。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">规则模式：CVCe</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>C</strong> = 辅音</li>
          <li><strong>V</strong> = 元音</li>
          <li><strong>C</strong> = 辅音</li>
          <li><strong>e</strong> = 不发音的 e</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">长元音发音</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>a_e /eɪ/</strong> - 像字母 A 的名字</li>
          <li><strong>i_e /aɪ/</strong> - 像字母 I 的名字</li>
          <li><strong>o_e /əʊ/</strong> - 像字母 O 的名字</li>
          <li><strong>u_e /ju:/</strong> - 像字母 U 的名字</li>
          <li><strong>e_e /i:/</strong> - 像字母 E 的名字（较少见）</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">对比学习</h4>
        <p class="mb-2"><strong>短音 vs 长音：</strong></p>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>cap (短音 /æ/) vs cake (长音 /eɪ/)</li>
          <li>bit (短音 /ɪ/) vs bite (长音 /aɪ/)</li>
          <li>hop (短音 /ɒ/) vs hope (长音 /əʊ/)</li>
        </ul>
      `,
      content: {
        rule: "当单词以 元音+辅音+e 结尾时，元音发长音。",
        examples: [
          { letter: "a_e /eɪ/", words: ["cake", "game", "lake", "name", "save", "make"] },
          { letter: "i_e /aɪ/", words: ["bike", "kite", "five", "ride", "time", "fine"] },
          { letter: "o_e /əʊ/", words: ["nose", "rope", "home", "hope", "vote", "note"] },
          { letter: "u_e /ju:/", words: ["mute", "cute", "tube", "june", "flute", "use"] },
        ],
      },
    },
    {
      title: "第四阶段：元音战队 (Vowel Teams)",
      subtitle: "学习元音组合",
      description: "两个元音在一起，通常第一个发长音，第二个保持沉默。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">元音战队规则</h4>
        <p class="mb-4">当两个元音字母相邻时，通常遵循"两个元音一起走，第一个做主人"的规则。第一个元音发长音，第二个保持沉默。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">常见元音组合</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>ai / ay /eɪ/</strong> - 像字母 A 的名字。ai 通常在单词中间，ay 在末尾</li>
          <li><strong>ee / ea /i:/</strong> - 像字母 E 的名字。都发长 e 音</li>
          <li><strong>oa / ow /əʊ/</strong> - 像字母 O 的名字。oa 在中间，ow 在末尾</li>
          <li><strong>ie / igh /aɪ/</strong> - 像字母 I 的名字。ie 和 igh 都发长 i 音</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">记忆技巧</h4>
        <p class="mb-4">想象两个元音在一起散步，第一个在前面说话，第二个跟在后面保持安静。这样就能记住规则了。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">常见例外</h4>
        <p>有些元音组合不遵循这个规则，如 "oo" 有两种发音（长音和短音），需要根据上下文判断。</p>
      `,
      content: {
        rule: "When two vowels go walking, the first one does the talking!",
        examples: [
          { letter: "ai / ay /eɪ/", words: ["rain", "train", "mail", "say", "day", "play"] },
          { letter: "ee / ea /i:/", words: ["tree", "bee", "feed", "leaf", "tea", "meat"] },
          { letter: "oa / ow /əʊ/", words: ["boat", "coat", "goal", "snow", "blow", "show"] },
          { letter: "ie / igh /aɪ/", words: ["pie", "tie", "die", "high", "night", "light"] },
        ],
      },
    },
    {
      title: "第五阶段：双元音与变异元音",
      subtitle: "掌握复杂元音组合",
      description: "双元音发音时舌位移动产生滑音；变异元音有特殊发音。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">双元音 (Diphthongs)</h4>
        <p class="mb-4">双元音是两个元音的组合，但它们不是分开发音，而是融合在一起，形成一个滑音。发音时舌头会从一个位置滑向另一个位置。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">常见双元音</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>oi / oy /ɔɪ/</strong> - 从"哦"滑向"哎"，嘴唇先圆后扁</li>
          <li><strong>ou / ow /aʊ/</strong> - 从"啊"滑向"呜"，舌头从后向前</li>
          <li><strong>au / aw /ɔ:/</strong> - 像"哦"的长音，嘴唇圆形</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">变异元音</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>oo (长) /u:/</strong> - 像"呜"的长音，嘴唇圆形，舌头后缩</li>
          <li><strong>oo (短) /ʊ/</strong> - 像"呜"的短音，嘴唇不完全圆形</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">如何区分 oo 的两种发音？</h4>
        <p class="mb-2">通常在单词末尾或后面只有一个辅音时，oo 发长音：</p>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>moon, food, zoo (长音)</li>
          <li>book, foot, good (短音 - 后面有两个辅音或在末尾前)</li>
        </ul>
      `,
      content: {
        rule: "双元音和变异元音需要特别注意，但规律清晰。",
        examples: [
          { letter: "oi / oy /ɔɪ/", words: ["coin", "boil", "boy", "toy", "joy", "voice"] },
          { letter: "ou / ow /aʊ/", words: ["house", "mouth", "cow", "town", "now", "down"] },
          { letter: "au / aw /ɔ:/", words: ["autumn", "cause", "saw", "draw", "law", "paw"] },
          { letter: "oo (长) /u:/", words: ["moon", "food", "zoo", "room", "cool", "pool"] },
          { letter: "oo (短) /ʊ/", words: ["book", "foot", "good", "wood", "look", "cook"] },
        ],
      },
    },
    {
      title: "第六阶段：霸道 R 规则 (Bossy R)",
      subtitle: "掌握R控元音",
      description: "当元音字母后面跟着 r 时，发音会被 r 强行改变。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">什么是霸道 R？</h4>
        <p class="mb-4">R 是一个"霸道"的辅音。当它出现在元音后面时，会完全改变元音的发音。这些组合叫做"R 控元音"或"R 变元音"。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">R 控元音详解</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>ar /ɑ:/</strong> - 像"啊"的长音，嘴唇不圆</li>
          <li><strong>er /ɜ:/</strong> - 像"呃"的音，舌头中间位置</li>
          <li><strong>ir /ɜ:/</strong> - 和 er 发音相同</li>
          <li><strong>ur /ɜ:/</strong> - 和 er、ir 发音相同</li>
          <li><strong>or /ɔ:/</strong> - 像"哦"的长音，嘴唇圆形</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">为什么 er、ir、ur 发音相同？</h4>
        <p class="mb-4">在美式英语中，er、ir、ur 在非重读音节中都发 /ə/ 的音（弱读音）。在重读音节中，它们都发 /ɜ:/ 的音。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">学习技巧</h4>
        <p>记住：R 改变了元音的发音，所以不要试图用短元音或长元音的规则来读这些单词。把 ar、er、ir、ur、or 看作独立的"音素"。</p>
      `,
      content: {
        rule: "R 是个'霸道'的字母，它会改变元音的发音。",
        examples: [
          { letter: "ar /ɑ:/", words: ["car", "park", "star", "dark", "farm", "mark"] },
          { letter: "er /ɜ:/", words: ["her", "verb", "term", "person", "better", "letter"] },
          { letter: "ir /ɜ:/", words: ["bird", "girl", "first", "dirt", "shirt", "third"] },
          { letter: "ur /ɜ:/", words: ["nurse", "turn", "burn", "hurt", "purse", "burst"] },
          { letter: "or /ɔ:/", words: ["fork", "pork", "corn", "horn", "short", "storm"] },
        ],
      },
    },
    {
      title: "第七阶段：软硬音与静音字母",
      subtitle: "学习特殊字母规则",
      description: "某些字母有软硬音之分，某些字母则保持沉默。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">软硬音规则</h4>
        <p class="mb-4">某些辅音（如 C 和 G）有两种发音，取决于后面跟着的元音。这叫做"软音"和"硬音"。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">C 的软硬音</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>软 C /s/</strong> - 当 C 后面跟 e、i、y 时：city, ice, cycle</li>
          <li><strong>硬 C /k/</strong> - 当 C 后面跟其他字母时：cat, cup, cake</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">G 的软硬音</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>软 G /dʒ/</strong> - 当 G 后面跟 e、i、y 时：gem, giant, gym</li>
          <li><strong>硬 G /g/</strong> - 当 G 后面跟其他字母时：got, gum, game</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">静音字母</h4>
        <p class="mb-4">某些字母在特定位置不发音，需要整体记忆：</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>k 在 n 前</strong> - know, knee, knife</li>
          <li><strong>w 在 r 前</strong> - write, wrong, wrist</li>
          <li><strong>b 在 m 后</strong> - comb, lamb, thumb</li>
          <li><strong>h 在某些词中</strong> - hour, honest, ghost</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">学习技巧</h4>
        <p>对于软硬音，记住"e、i、y 通常让 C 和 G 发软音"。对于静音字母，需要通过大量阅读来积累。</p>
      `,
      content: {
        rule: "软硬音取决于后面的字母；静音字母需要整体记忆。",
        examples: [
          { letter: "Soft C (e,i,y)", words: ["city", "ice", "cycle", "cent", "circle"] },
          { letter: "Hard C", words: ["cat", "cup", "cake", "car", "call"] },
          { letter: "Soft G (e,i,y)", words: ["gem", "giant", "gym", "giraffe", "ginger"] },
          { letter: "Hard G", words: ["got", "gum", "game", "go", "good"] },
          { letter: "Silent k", words: ["know", "knee", "knife", "knot", "knight"] },
          { letter: "Silent w", words: ["write", "wrong", "wrist", "wrap", "wreck"] },
          { letter: "Silent b", words: ["comb", "lamb", "thumb", "dumb", "climb"] },
        ],
      },
    },
    {
      title: "第八阶段：结尾模式与后缀",
      subtitle: "掌握单词结尾规律",
      description: "复杂结尾和常用后缀有特定的拼读和使用规则。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">结尾模式的重要性</h4>
        <p class="mb-4">英语单词的结尾有特定的模式，掌握这些模式能帮助你快速识别和发音单词。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">常见结尾模式</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>-ck /k/</strong> - 在短元音后，用 ck 代替 k：back, duck, lock</li>
          <li><strong>-tch /tʃ/</strong> - 在短元音后，用 tch 代替 ch：catch, watch, match</li>
          <li><strong>-dge /dʒ/</strong> - 在短元音后，用 dge 代替 ge：bridge, judge, edge</li>
          <li><strong>-ng /ŋ/</strong> - 鼻音，舌头在口腔后部：sing, ring, long</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">常用后缀</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>-s / -es</strong> - 复数或第三人称单数：cats, boxes</li>
          <li><strong>-ed</strong> - 过去式，有三种发音：/d/, /t/, /ɪd/</li>
          <li><strong>-ing</strong> - 现在进行式或动名词：running, singing</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">-ed 的三种发音</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>/d/</strong> - 在元音或浊辅音后：played, moved</li>
          <li><strong>/t/</strong> - 在清辅音后：jumped, stopped</li>
          <li><strong>/ɪd/</strong> - 在 t 或 d 后：wanted, needed</li>
        </ul>
      `,
      content: {
        rule: "结尾模式和后缀遵循特定规律，掌握它们能快速识别单词。",
        examples: [
          { letter: "-ck /k/", words: ["back", "duck", "lock", "pick", "rock"] },
          { letter: "-tch /tʃ/", words: ["catch", "watch", "match", "patch", "witch"] },
          { letter: "-dge /dʒ/", words: ["bridge", "judge", "edge", "fudge", "lodge"] },
          { letter: "-ng /ŋ/", words: ["sing", "ring", "long", "song", "thing"] },
          { letter: "-s/-es", words: ["cats", "boxes", "runs", "dishes", "wishes"] },
          { letter: "-ed", words: ["played", "started", "jumped", "wanted", "needed"] },
          { letter: "-ing", words: ["running", "singing", "eating", "playing", "jumping"] },
        ],
      },
    },
    {
      title: "第九阶段：音节类型 (Syllable Types)",
      subtitle: "学习单词划分",
      description: "掌握音节类型能帮助你读出超长单词。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">什么是音节？</h4>
        <p class="mb-4">音节是单词的基本单位，每个音节必须包含一个元音发音。掌握音节类型能帮助你读出长单词。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">四种主要音节类型</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>闭音节 (Closed)</strong> - 元音被辅音"关"住，发短音：nap-kin, bas-ket</li>
          <li><strong>开音节 (Open)</strong> - 元音结尾，发长音：be, hi, go, pa-per</li>
          <li><strong>魔法 E 音节</strong> - 元音+辅音+e，发长音：cake, bike, home</li>
          <li><strong>-le 音节</strong> - 通常在末尾，发 /əl/：ap-ple, ta-ble</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">音节划分规则</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>VCCV 模式</strong> - 在两个辅音之间划分：hap-py, rab-bit</li>
          <li><strong>VCV 模式</strong> - 在元音和辅音之间划分：pa-per, mu-sic</li>
          <li><strong>-le 模式</strong> - 辅音+le 作为一个音节：ta-ble, tur-tle</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">学习技巧</h4>
        <p>先找出单词中的所有元音，然后根据规则划分。记住：每个音节都需要一个元音发音。</p>
      `,
      content: {
        rule: "每个音节必须包含一个元音发音。",
        examples: [
          { letter: "闭音节", words: ["napkin", "basket", "rabbit", "happy"] },
          { letter: "开音节", words: ["be", "hi", "go", "paper", "music"] },
          { letter: "魔法E音节", words: ["cake", "bike", "home", "excite"] },
          { letter: "-le 音节", words: ["apple", "table", "turtle", "bubble"] },
        ],
      },
    },
    {
      title: "第十阶段：特殊发音与例外",
      subtitle: "掌握弱读音和高频词",
      description: "Schwa 是英语中最常见的发音；某些高频词需要整体记忆。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">弱读音 (Schwa) /ə/</h4>
        <p class="mb-4">Schwa 是英语中最常见的发音！它出现在非重读音节中，所有元音字母都可能发这个音。Schwa 听起来像"呃"或"嗯"。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">Schwa 的特点</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>出现在非重读音节中</li>
          <li>所有元音字母都可能发 schwa 音</li>
          <li>在单词中间或末尾较常见</li>
          <li>例如：about (a 发 schwa), banana (a 和 a 发 schwa), sofa (a 发 schwa)</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">高频词与例外</h4>
        <p class="mb-4">某些常用词不遵循拼读规则，需要像"照相机"一样整体记忆。这些叫做"Sight Words"（视觉词）。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">常见高频词</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>the</strong> - 在元音前发 /ðə/, 在辅音前发 /ðɪ/</li>
          <li><strong>was</strong> - 发 /wɒz/，不遵循 a 的短音规则</li>
          <li><strong>said</strong> - 发 /sed/，不遵循 ai 的规则</li>
          <li><strong>you</strong> - 发 /ju:/，不遵循 ou 的规则</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">特殊结尾发音</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>-tion / -sion</strong> - 都发 /ʃən/：action, vision</li>
          <li><strong>-ture</strong> - 发 /tʃə/：nature, picture</li>
          <li><strong>-ous</strong> - 发 /əs/：famous, nervous</li>
        </ul>
      `,
      content: {
        rule: "弱读音 /ə/ 出现在非重读音节；高频词是拼读的例外。",
        examples: [
          { letter: "Schwa /ə/", words: ["about", "banana", "sofa", "pencil", "lemon"] },
          { letter: "-tion /ʃən/", words: ["action", "nation", "station", "motion"] },
          { letter: "-sion /ʃən/", words: ["vision", "mission", "passion", "session"] },
          { letter: "高频词", words: ["the", "was", "said", "you", "of"] },
        ],
      },
    },
    {
      title: "第十一阶段：学习路线与建议",
      subtitle: "通往阅读自由之路",
      description: "一个清晰的学习路线图和实用的学习建议。",
      detailedExplanation: `
        <h4 class="font-bold text-lg mb-3 text-blue-900">完整的学习路线</h4>
        <p class="mb-4">从基础到进阶，循序渐进地掌握拼读规律。这个路线是经过多年教学实践验证的。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">第1步：基础字母音 (Sounds)</h4>
        <p class="mb-4">建立字母与声音的直接联系。学会每个字母的发音，这是所有拼读的基础。大约需要 2-4 周。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">第2步：拼读技巧 (Blending)</h4>
        <p class="mb-4">将单个音素滑向整体单词。学会如何快速连读字母的发音，形成完整的单词。大约需要 4-6 周。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">第3步：规则内化 (Rules)</h4>
        <p class="mb-4">掌握 Magic E、Vowel Teams、Bossy R 等核心规律。这个阶段最重要，需要大量练习。大约需要 8-12 周。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">第4步：语境阅读 (Fluency)</h4>
        <p class="mb-4">在分级阅读中实现"见词能读"。通过大量阅读来巩固所学规则，最终达到流利阅读。这是一个持续的过程。</p>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">实用学习建议</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>坚持多读</strong> - 分级读物（如牛津树、RAZ）是最好的实战练习场</li>
          <li><strong>磨练耳朵</strong> - 多听母语音频，建立声音与画面的联结</li>
          <li><strong>尝试拼写</strong> - 听音能写是检验拼读掌握程度的最高标准</li>
          <li><strong>接受例外</strong> - 英语有例外，遇到 Sight Words 整体记忆即可</li>
          <li><strong>定期复习</strong> - 每周复习一次已学的规则，确保不遗忘</li>
          <li><strong>创造环境</strong> - 尽可能多地接触英语内容，让拼读规则自然内化</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 text-blue-900">成功的关键</h4>
        <p>拼读不是一蹴而就的，而是一个循序渐进的过程。坚持练习，大量阅读，你一定能掌握英语拼读的全部规律！</p>
      `,
      content: {
        rule: "从基础到进阶，循序渐进地掌握拼读规律。",
        examples: [
          { letter: "第1步：基础字母音", words: ["建立字母与声音的直接联系"] },
          { letter: "第2步：拼读技巧", words: ["将单个音素滑向整体单词"] },
          { letter: "第3步：规则内化", words: ["掌握 Magic E, Vowel Teams 等核心规律"] },
          { letter: "第4步：语境阅读", words: ["在分级阅读中实现见词能读"] },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Phonics 全能指南
            </h1>
          </div>
          <div className="text-sm text-gray-600">
            11 个核心阶段 • 解锁 98% 的单词拼读规律 • 🔊 点击单词听发音
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            终极自然拼读<br />
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              全能指南
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            从基础字母音到进阶音节划分，掌握英语拼读的全部规律。<br />
            <span className="font-semibold text-blue-600">见词能读，听音能写，让英语阅读像母语一样简单。</span>
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-medium">快速入门</span>
            </div>
            <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
              <Target className="w-5 h-5 text-red-600" />
              <span className="text-red-900 font-medium">系统完整</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-green-900 font-medium">实战应用</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
              <Volume2 className="w-5 h-5 text-purple-600" />
              <span className="text-purple-900 font-medium">音频发音</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="learning-stages" className="container mx-auto px-4 py-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">
            11 个核心学习阶段
          </h3>

          <div className="space-y-4">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() =>
                    setExpandedStage(expandedStage === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 text-white rounded-full font-bold text-sm">
                        {index + 1}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900">
                        {stage.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">{stage.subtitle}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedStage === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedStage === index && (
                  <div className="px-6 py-6 border-t border-gray-200 bg-gradient-to-b from-blue-50 to-white">
                    {/* Detailed Explanation */}
                    <div className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <div 
                        dangerouslySetInnerHTML={{ __html: stage.detailedExplanation }}
                        className="text-gray-700 space-y-3"
                      />
                    </div>

                    {/* Rule Summary */}
                    <div className="mb-6 flex items-start gap-3 bg-green-50 p-4 rounded border border-green-200">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-green-900 mb-2">核心规则：</p>
                        <p className="text-green-800">{stage.content.rule}</p>
                      </div>
                    </div>

                    {/* Examples */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stage.content.examples.map((example, exIdx) => (
                        <div
                          key={exIdx}
                          className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                        >
                          <div className="font-semibold text-blue-600 mb-3">
                            {example.letter}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {example.words.map((word, wIdx) => (
                              <button
                                key={wIdx}
                                onClick={() => speak(word)}
                                className="inline-flex items-center gap-1 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                              >
                                <Volume2 className="w-3 h-3" />
                                {word}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">
              终极学习建议
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-3">📚</div>
                <h4 className="font-bold mb-2">坚持多读</h4>
                <p className="text-white/90">
                  分级读物（如牛津树、RAZ）是最好的实战练习场。通过阅读，你会逐渐内化拼读规律。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-3">👂</div>
                <h4 className="font-bold mb-2">磨练耳朵</h4>
                <p className="text-white/90">
                  多听母语音频，建立声音与画面的联结。这是建立语感的关键。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-3">✍️</div>
                <h4 className="font-bold mb-2">尝试拼写</h4>
                <p className="text-white/90">
                  听音能写是检验拼读掌握程度的最高标准。从简单单词开始练习。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">接受例外</h4>
                <p className="text-white/90">
                  英语有例外，遇到 Sight Words 整体记忆即可。不要过度纠结。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            <Link href="/practice">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 rounded-lg font-bold"
              >
                开始练习
              </Button>
            </Link>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            准备好开启英语阅读之旅了吗？
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Phonics 是一把钥匙，为你打开英语世界的大门。<br />
            从今天开始，掌握这 11 个核心阶段，让英语不再是难题。
          </p>
          <Button
            onClick={scrollToLearningSection}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-bold"
          >
            开始学习
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>
            © 2026 终极自然拼读全能指南 • 帮助学习者掌握英语拼读规律 • 🔊 点击单词听发音
          </p>
        </div>
      </footer>
    </div>
  );
}
