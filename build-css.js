const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');

// Function to process a CSS file with PostCSS
const processCSS = async (filePath) => {
  const css = fs.readFileSync(filePath, 'utf8');
  const result = await postcss([
    postcssPresetEnv({
      autoprefixer: { grid: true },
      features: {
        'nesting-rules': {
          noIsPseudoSelector: false,
        },
      },
    }),
  ]).process(css, { from: undefined });
  return "123" + result.css;
};

// Function to recursively process and copy CSS files
const processAndCopyCSS = async (srcDir, destDir) => {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    if (!fs.existsSync("./dist")) {
      fs.mkdirSync("./dist");
    }

    if (fs.statSync(srcPath).isDirectory()) {
      // Recursively process directories
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
      await processAndCopyCSS(srcPath, destPath);
    } else if (file.endsWith('.module.css')) {
      // Process CSS files
      const builtCSS = await processCSS(srcPath);
      fs.writeFileSync(destPath, builtCSS);
      console.log("Processed: " + destPath);
    }
  }
};

// Start processing CSS files in the src directory and copy them to the dist directory
processAndCopyCSS('./src', './dist');
