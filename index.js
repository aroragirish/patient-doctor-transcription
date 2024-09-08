// Start by making sure the `assemblyai` package is installed.
// If not, you can install it by running the following command:
// npm install assemblyai

import { AssemblyAI } from "assemblyai";
import axios from 'axios'
import fs from 'fs-extra'

const client = new AssemblyAI({
  apiKey: process.env.API_KEY,
})

const baseUrl = process.env.BASE_URL

const headers = {
  authorization: process.env.API_KEY 
}
const path = './data.mp3'
const audioData = await fs.readFile(path)
const uploadResponse = await axios.post(`${baseUrl}/upload`, audioData, {
  headers
})
const uploadUrl = uploadResponse.data.upload_url

const data = {
    audio_url: uploadUrl // You can also use a URL to an audio or video file on the web
  }

  const url = `${baseUrl}/transcript`
const response = await axios.post(url, data, { headers: headers })

const transcriptId = response.data.id
const pollingEndpoint = `${baseUrl}/transcript/${transcriptId}`

// while (true) {
//   const pollingResponse = await axios.get(pollingEndpoint, {
//     headers: headers
//   })
//   const transcriptionResult = pollingResponse.data

//   if (transcriptionResult.status === 'completed') {
//     console.log(transcriptionResult.text)
//     break
//   } else if (transcriptionResult.status === 'error') {
//     throw new Error(`Transcription failed: ${transcriptionResult.error}`)
//   } else {
//     await new Promise((resolve) => setTimeout(resolve, 3000))
//   }
// }

const run = async () => {
    const transcript = await client.transcripts.transcribe({ audio: uploadUrl })
  
    const prompt = 'Provide a brief summary of the transcript.'
  
    const { response } = await client.lemur.task({
      transcript_ids: [transcript.id],
      prompt
    })
  
    console.log(response)
  }
  
  run()