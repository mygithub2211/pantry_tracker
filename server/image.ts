"use server"

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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"

});

export async function generateImages(x: string) {
  const image = await openai.images.generate(
    { 
        model: "dall-e-3", 
        prompt: x,
        n: 1
    });
  console.log("Searching for Images")
  console.log(image.data);
  console.log(image.data[0].url);
  return(image.data[0].url as string);
}
