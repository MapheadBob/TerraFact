"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { QUESTIONS } from "@/lib/questions";
import { cn } from "@/lib/utils";

type Screen = "lobby" | "playing" | "results";

export default function TerraFactPage() {
  const [screen, setScreen] = useState<Screen>("lobby");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finalCorrect, setFinalCorrect] = useState(0);

  function startGame() {
    setCurrent(0);
    setCorrect(0);
    setFinalCorrect(0);
    setSelected(null);
    setAnswered(false);
    setScreen("playing");
  }

  function handleAnswer(choice: string) {
    if (answered) return;
    setSelected(choice);
    setAnswered(true);
    if (choice === QUESTIONS[current].answer) setCorrect((c) => c + 1);
  }

  function nextQuestion() {
    if (current + 1 >= QUESTIONS.length) {
      finishGame();
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  function finishGame() {
    const finalCorrectCount = correct + (selected === QUESTIONS[current].answer ? 1 : 0);
    setFinalCorrect(finalCorrectCount);
    setScreen("results");
  }

  const q = QUESTIONS[current];

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col gap-6 px-4 py-10 sm:px-6">
      {screen === "lobby" && (
        <div className="flex flex-col gap-6 rounded-card border border-border bg-surface p-6 shadow-sm">
          <div>
            <h1 className="text-3xl font-bold">TerraFact</h1>
            <p className="text-sm text-ink-soft">General geography trivia</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <Stat label="Questions" value={String(QUESTIONS.length)} />
            <Stat label="Mode" value="Quick Play" />
            <Stat label="Format" value="Multiple choice" />
          </div>
          <p className="text-sm leading-relaxed text-ink-soft">
            You&apos;ll see {QUESTIONS.length} geography clues. Choose the correct answer for each one.
          </p>
          <Button onClick={startGame} size="lg" className="w-full">
            Play now
          </Button>
        </div>
      )}

      {screen === "playing" && q && (
        <>
          <div className="flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-brand transition-all duration-500"
                style={{ width: `${(current / QUESTIONS.length) * 100}%` }}
              />
            </div>
            <span className="shrink-0 font-mono text-[11px] text-ink-soft">
              {current + 1} / {QUESTIONS.length}
            </span>
          </div>

          <div className="flex flex-col gap-6 rounded-card border border-border bg-surface p-6 shadow-sm">
            <div>
              <Badge className="mb-3">Question {current + 1}</Badge>
              <p className="text-lg font-medium leading-relaxed">{q.hint}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {q.choicePool.map((choice) => {
                const isCorrect = choice === q.answer;
                const isSelected = choice === selected;
                return (
                  <button
                    key={choice}
                    type="button"
                    disabled={answered}
                    onClick={() => handleAnswer(choice)}
                    className={cn(
                      "cursor-pointer rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200 disabled:cursor-default",
                      !answered && "border-border bg-surface hover:border-brand/50 hover:bg-black/5",
                      answered && isCorrect && "border-success bg-success/10 text-success",
                      answered && isSelected && !isCorrect && "border-danger bg-danger/10 text-danger",
                      answered && !isSelected && !isCorrect && "opacity-50"
                    )}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="flex items-center justify-between border-t border-border pt-4">
                <p className={cn("text-sm font-medium", selected === q.answer ? "text-success" : "text-danger")}>
                  {selected === q.answer ? "Correct!" : `The answer was ${q.answer}.`}
                </p>
                <Button onClick={nextQuestion}>
                  {current + 1 < QUESTIONS.length ? "Next" : "See results"}
                </Button>
              </div>
            )}
          </div>
        </>
      )}

      {screen === "results" && (
        <div className="flex flex-col items-center gap-6 py-4 text-center">
          <div className="flex size-20 items-center justify-center rounded-full border-2 border-brand/30 bg-brand/10">
            <span className="text-3xl font-bold text-brand">
              {finalCorrect}/{QUESTIONS.length}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Game complete!</h2>
            <p className="mt-1 text-ink-soft">
              You got <strong className="text-ink">{finalCorrect}</strong> of {QUESTIONS.length} correct.
            </p>
          </div>
          <Button variant="outline" onClick={startGame}>
            Play again
          </Button>
        </div>
      )}
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-wide text-ink-soft">{label}</span>
      <span className="text-base font-bold">{value}</span>
    </div>
  );
}
