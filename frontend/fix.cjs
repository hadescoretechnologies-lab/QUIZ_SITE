const fs = require('fs');

const path = 'c:\\Users\\SHAMA\\OneDrive\\Pictures\\QUIZ\\frontend\\src\\services\\questionBank.ts';
let content = fs.readFileSync(path, 'utf8');

const shuffleIndex = content.indexOf('function shuffle<T>');

if (shuffleIndex > -1) {
  let newContent = content.substring(0, content.indexOf('  } else {\r\n    templates = ['));
  if (newContent.length === content.length) {
    newContent = content.substring(0, content.indexOf('  } else {\n    templates = ['));
  }
  
  let endContent = content.substring(shuffleIndex);
  endContent = endContent.replace('    });\r\n  let rawList', '    });\r\n  }\r\n\r\n  let rawList');
  endContent = endContent.replace('    });\n  let rawList', '    });\n  }\n\n  let rawList');

  fs.writeFileSync(path, newContent + '\n\n' + endContent);
  console.log('Fixed syntax error');
} else {
  console.log('Could not find shuffle function');
}
