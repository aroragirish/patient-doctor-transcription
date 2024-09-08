# Medical Transcription Tool

This project is a Node.js application that automates the transcription and summarization of conversations between patients and doctors using the AssemblyAI API. It aims to streamline medical documentation processes and improve the efficiency of healthcare communication.

## Features

- Audio file upload and transcription
- Automated summarization of transcripts
- Utilizes AssemblyAI's advanced AI models for accurate transcription and analysis

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine
- An AssemblyAI API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/medical-transcription-tool.git
   cd medical-transcription-tool
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your AssemblyAI API key:
   ```
   API_KEY=your_assemblyai_api_key_here
   BASE_URL=https://api.assemblyai.com/v2
   ```

## Usage

1. Place your audio file (in .mp3 format) in the project directory and name it `data.mp3`.

2. Run the script:
   ```
   node index.js
   ```

3. The script will upload the audio file, transcribe it, and then generate a summary of the conversation.

## How It Works

1. The audio file is read and uploaded to AssemblyAI's servers.
2. A transcription job is initiated using the uploaded audio file.
3. The script polls the API to check the status of the transcription job.
4. Once the transcription is complete, it uses AssemblyAI's Lemur model to generate a summary of the transcript.
5. The summary is then printed to the console.

## Configuration

You can modify the following parameters in the script:
- `path`: The path to your audio file
- `prompt`: The prompt used for generating the summary

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.


## Acknowledgements

This project uses the [AssemblyAI](https://www.assemblyai.com/) API for speech recognition and natural language processing.

## Contact

If you have any questions or feedback, please open an issue in this repository.