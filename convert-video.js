const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const path = require('path');

// Set the ffmpeg path
ffmpeg.setFfmpegPath(ffmpegStatic);

const videos = [
  { input: 'agentic.mov', output: 'agentic.mp4' },
  { input: 'gen_ai.mov', output: 'gen_ai.mp4' },
];

let completed = 0;

function convertVideo(videoInfo) {
  const inputPath = path.join(__dirname, 'public', 'hero', videoInfo.input);
  const outputPath = path.join(__dirname, 'public', 'hero', videoInfo.output);

  console.log(`\nStarting conversion: ${videoInfo.input} -> ${videoInfo.output}`);

  ffmpeg(inputPath)
    .outputOptions([
      '-c:v libx264',
      '-crf 23',
      '-c:a aac',
      '-q:a 100'
    ])
    .output(outputPath)
    .on('start', (commandLine) => {
      console.log('FFmpeg started...');
    })
    .on('progress', (progress) => {
      if (!isNaN(progress.percent)) {
        console.log(`${videoInfo.input}: ${Math.round(progress.percent)}% done`);
      }
    })
    .on('end', () => {
      console.log(`✅ ${videoInfo.output} completed!`);
      completed++;
      if (completed === videos.length) {
        console.log('\n✅ All videos converted successfully!');
        process.exit(0);
      }
    })
    .on('error', (err) => {
      console.error(`❌ Error converting ${videoInfo.input}:`, err.message);
      process.exit(1);
    })
    .run();
}

// Convert all videos
videos.forEach(convertVideo);
