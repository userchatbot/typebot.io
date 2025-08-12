export const openAIVoices = [
  "alloy",
  "echo",
  "fable",
  "onyx",
  "nova",
  "shimmer",
] as const;

export const chatModels = [
  "gpt-5",
  "gpt-5-mini",
  "gpt-5-nano",
  "gpt-4.1",
  "gpt-4.1-mini",
  "gpt-4.1-nano",
  "gpt-4o",
  "gpt-4o-mini",
];

export const reasoningModels = ["o3-mini", "o1", "o1-mini"];

export const modelsWithImageUrlSupport = [
  "gpt-4-turbo*",
  "gpt-4o*",
  "gpt-4*vision-preview",
];

export const excludedModelsFromImageUrlSupport = ["gpt-4-turbo-preview"];

export const defaultOpenAIOptions = {
  model: "gpt-4o-mini",
  voiceModel: "tts-1",
} as const;

export const maxToolCalls = 10;
