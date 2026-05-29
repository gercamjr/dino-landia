"use client";

import { motion } from "framer-motion";

interface SizeComparisonProps {
  lengthMeters: number;
  heightMeters: number;
}

const REFERENCES = {
  child: { label: "6-year-old child", height: 1.2, length: 0.8 },
  giraffe: { label: "Giraffe", height: 5.5, length: 4.5 },
  schoolBus: { label: "School bus", height: 3.2, length: 12 },
  tRex: { label: "T. rex (for reference)", height: 3.7, length: 12.3 },
};

export function SizeComparison({ lengthMeters, heightMeters }: SizeComparisonProps) {
  const maxLength = Math.max(lengthMeters, REFERENCES.schoolBus.length, REFERENCES.tRex.length);
  const maxHeight = Math.max(heightMeters, REFERENCES.giraffe.height, REFERENCES.schoolBus.height);

  const getLengthPercent = (value: number) => (value / maxLength) * 100;
  const getHeightPercent = (value: number) => (value / maxHeight) * 100;

  return (
    <div className="space-y-8">
      {/* Length Comparison */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-[#2C2522]">How long is it?</h3>
        <div className="space-y-4">
          {/* This dinosaur */}
          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium">This dinosaur</span>
              <span className="text-[#6B5F52]">{lengthMeters} m</span>
            </div>
            <div className="h-6 bg-[#EDE6D9] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#C17E4A] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${getLengthPercent(lengthMeters)}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* School Bus */}
          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium flex items-center gap-2">
                🚌 {REFERENCES.schoolBus.label}
              </span>
              <span className="text-[#6B5F52]">{REFERENCES.schoolBus.length} m</span>
            </div>
            <div className="h-6 bg-[#EDE6D9] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#7BA3C9] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${getLengthPercent(REFERENCES.schoolBus.length)}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Height Comparison */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-[#2C2522]">How tall is it?</h3>
        <div className="space-y-4">
          {/* This dinosaur */}
          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium">This dinosaur</span>
              <span className="text-[#6B5F52]">{heightMeters} m</span>
            </div>
            <div className="h-6 bg-[#EDE6D9] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#C17E4A] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${getHeightPercent(heightMeters)}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Giraffe */}
          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium flex items-center gap-2">
                🦒 {REFERENCES.giraffe.label}
              </span>
              <span className="text-[#6B5F52]">{REFERENCES.giraffe.height} m</span>
            </div>
            <div className="h-6 bg-[#EDE6D9] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#7BA3C9] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${getHeightPercent(REFERENCES.giraffe.height)}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              />
            </div>
          </div>

          {/* Child */}
          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium flex items-center gap-2">
                👧 {REFERENCES.child.label}
              </span>
              <span className="text-[#6B5F52]">{REFERENCES.child.height} m</span>
            </div>
            <div className="h-6 bg-[#EDE6D9] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#A8C5A2] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${getHeightPercent(REFERENCES.child.height)}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-[#6B5F52] italic">
        These comparisons help you imagine just how big these dinosaurs really were!
      </p>
    </div>
  );
}
