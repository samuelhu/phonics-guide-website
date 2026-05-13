import { useState } from "react";
import { ChevronDown, BookOpen, Zap, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [expandedStage, setExpandedStage] = useState<number | null>(0);

  const stages = [
    {
      title: "第一阶段：基础地基 (CVC & Short Vowels)",
      subtitle: "掌握短元音发音",
      description: "当单词中只有一个元音且不在末尾时，通常发短音。",
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
      title: "第九阶段：音节类型",
      subtitle: "学习单词划分",
      description: "掌握音节类型能帮助你读出超长单词。",
      content: {
        rule: "每个音节必须包含一个元音发音。",
        examples: [
          { letter: "闭音节", words: ["nap-kin", "bas-ket", "rab-bit", "hap-py"] },
          { letter: "开音节", words: ["be", "hi", "go", "pa-per", "mu-sic"] },
          { letter: "魔法E音节", words: ["cake", "bike", "home", "ex-cite"] },
          { letter: "-le 音节", words: ["ap-ple", "ta-ble", "tur-tle", "bub-ble"] },
        ],
      },
    },
    {
      title: "第十阶段：特殊发音与例外",
      subtitle: "掌握弱读音和高频词",
      description: "Schwa 是英语中最常见的发音；某些高频词需要整体记忆。",
      content: {
        rule: "弱读音 /ə/ 出现在非重读音节；高频词是拼读的例外。",
        examples: [
          { letter: "Schwa /ə/", words: ["about", "banana", "sofa", "pencil", "lemon"] },
          { letter: "-tion /ʃən/", words: ["action", "nation", "station", "motion"] },
          { letter: "-sion /ʃən/", words: ["vision", "mission", "passion", "session"] },
          { letter: "高频词", words: ["the", "was", "said", "you", "of", "are"] },
        ],
      },
    },
    {
      title: "第十一阶段：学习路线与建议",
      subtitle: "通往阅读自由之路",
      description: "一个清晰的学习路线图和实用的学习建议。",
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
            12 个核心阶段 • 解锁 98% 的单词拼读规律
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
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="container mx-auto px-4 py-16">
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
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {stage.content.rule}
                    </p>

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
                              <span
                                key={wIdx}
                                className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                              >
                                {word}
                              </span>
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
            © 2026 终极自然拼读全能指南 • 帮助学习者掌握英语拼读规律
          </p>
        </div>
      </footer>
    </div>
  );
}
