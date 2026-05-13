import { useState } from "react";
import { CheckCircle, XCircle, Volume2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface PracticeQuestion {
  id: number;
  type: "listening" | "spelling";
  question: string;
  audio?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export default function Practice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const practiceQuestions: PracticeQuestion[] = [
    {
      id: 1,
      type: "listening",
      question: "听这个单词，它属于哪个规则？",
      audio: "cat",
      options: ["短元音 (Short Vowel)", "长元音 (Magic E)", "元音战队 (Vowel Team)"],
      correctAnswer: "短元音 (Short Vowel)",
      explanation: "cat 是一个 CVC 单词，中间的 'a' 发短音 /æ/。",
    },
    {
      id: 2,
      type: "spelling",
      question: "根据发音 /keɪk/，选择正确的拼写",
      options: ["cak", "cake", "cak", "caik"],
      correctAnswer: "cake",
      explanation: "cake 遵循 Magic E 规则：元音+辅音+e，元音发长音。",
    },
    {
      id: 3,
      type: "listening",
      question: "听这个单词，它属于哪个规则？",
      audio: "ship",
      options: ["辅音连缀 (Blends)", "辅音组合 (Digraphs)", "短元音 (Short Vowel)"],
      correctAnswer: "辅音组合 (Digraphs)",
      explanation: "'sh' 是一个辅音组合，产生新的 /ʃ/ 音。",
    },
    {
      id: 4,
      type: "spelling",
      question: "根据发音 /bɔɪ/，选择正确的拼写",
      options: ["boi", "boy", "boye", "boiy"],
      correctAnswer: "boy",
      explanation: "boy 中的 'oy' 是一个双元音，发 /ɔɪ/ 音。",
    },
    {
      id: 5,
      type: "listening",
      question: "听这个单词，它属于哪个规则？",
      audio: "tree",
      options: ["短元音 (Short Vowel)", "元音战队 (Vowel Team)", "Magic E"],
      correctAnswer: "元音战队 (Vowel Team)",
      explanation: "'ee' 是一个元音战队，发长 e 音 /i:/。",
    },
  ];

  const speak = (word: string) => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const handleAnswer = (answer: string) => {
    if (answered) return;
    
    setSelectedAnswer(answer);
    setAnswered(true);
    setShowExplanation(true);
    
    if (answer === practiceQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < practiceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const question = practiceQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const progress = ((currentQuestion + 1) / practiceQuestions.length) * 100;

  if (currentQuestion >= practiceQuestions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
          <div className="container mx-auto px-4 py-4 flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回首页
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              拼读练习
            </h1>
          </div>
        </header>

        {/* Results */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-6xl font-bold text-blue-600 mb-4">
                {score}/{practiceQuestions.length}
              </div>
              <p className="text-2xl text-gray-700 mb-2">
                {score === practiceQuestions.length
                  ? "🎉 完美！你掌握了所有规则！"
                  : score >= 4
                  ? "👏 很好！继续加油！"
                  : "💪 不错的开始，再练习一遍吧！"}
              </p>
              <p className="text-gray-600 mb-8">
                你答对了 {score} 道题，正确率 {Math.round((score / practiceQuestions.length) * 100)}%
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleRestart}
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-3"
              >
                再练习一遍
              </Button>
              <Link href="/">
                <Button variant="outline" className="px-8 py-3">
                  返回首页
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            拼读练习
          </h1>
          <div className="text-sm text-gray-600">
            {currentQuestion + 1}/{practiceQuestions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-200 h-1">
          <div
            className="bg-gradient-to-r from-blue-600 to-red-600 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Question */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {question.question}
            </h2>

            {/* Audio Button */}
            {question.type === "listening" && question.audio && (
              <button
                onClick={() => speak(question.audio!)}
                className="mb-6 inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-200 transition-colors"
              >
                <Volume2 className="w-5 h-5" />
                点击听发音
              </button>
            )}

            {/* Options */}
            <div className="space-y-3">
              {question.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={answered}
                  className={`w-full p-4 text-left rounded-lg border-2 font-medium transition-all ${
                    selectedAnswer === option
                      ? isCorrect
                        ? "border-green-500 bg-green-50 text-green-900"
                        : "border-red-500 bg-red-50 text-red-900"
                      : answered && option === question.correctAnswer
                      ? "border-green-500 bg-green-50 text-green-900"
                      : "border-gray-200 hover:border-blue-300 text-gray-900"
                  } ${answered ? "cursor-default" : "cursor-pointer hover:bg-blue-50"}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {selectedAnswer === option && answered && (
                      isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )
                    )}
                    {answered && option === question.correctAnswer && selectedAnswer !== option && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`rounded-lg p-6 mb-8 ${
              isCorrect
                ? "bg-green-50 border-l-4 border-green-600"
                : "bg-blue-50 border-l-4 border-blue-600"
            }`}>
              <p className={`font-semibold mb-2 ${isCorrect ? "text-green-900" : "text-blue-900"}`}>
                {isCorrect ? "✓ 正确！" : "解释："}
              </p>
              <p className={isCorrect ? "text-green-800" : "text-blue-800"}>
                {question.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          {answered && (
            <div className="flex gap-4">
              {currentQuestion < practiceQuestions.length - 1 ? (
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white py-3"
                >
                  下一题
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white py-3"
                >
                  查看结果
                </Button>
              )}
            </div>
          )}

          {/* Score */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              目前得分：<span className="font-bold text-blue-600">{score}</span> / {practiceQuestions.length}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
