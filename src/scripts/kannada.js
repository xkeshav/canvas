// Generating arrays for Hindi vowels (स्वर) and consonants (व्यंजन)
const hindiVowels = Array.from({ length: 16 }, (_, i) => ({ key: 2309 + i, value: String.fromCodePoint(2309 + i) }));
const extraHindiVowelKey = [2317, 2321];
const hindiVowelList = hindiVowels.filter((v) => !extraHindiVowelKey.includes(v.key));
// क, ख, ग, घ, ङ // च, छ, ज, झ, ञ // ट, ठ, ड, ढ, ण, // त, थ, द, ध, न, // प, फ, ब, भ, म, // य र, ल, व, // श, ष, स, ह
// 'क्ष'  = क + '् + ष
// 'त्र'  = त  + '् + र
// 'ज्ञ'  = ज  + '् + ञ
const additionalConsonants = [String.fromCharCode(2325, 2381, 2359), String.fromCharCode(2340, 2381, 2352), String.fromCharCode(2332, 2381, 2334)];
const hindiConsonants = Array.from({ length: 36 }, (_, i) => String.fromCodePoint(2325 + i)).concat(additionalConsonants);

// Generating arrays for Kannada vowels (ಸ್ವರಗಳು) and consonants (ವ್ಯಂಜನಗಳು)
const kannadaVowels = Array.from({ length: 16 }, (_, i) => ({ key: 3205 + i, value: String.fromCodePoint(3205 + i) }));
const extraKannadaVowelKey = [3213, 3217];
const kannadaVowelList = kannadaVowels.filter((v) => !extraKannadaVowelKey.includes(v.key));
const kannadaConsonants = Array.from({ length: 36 }, (_, i) => String.fromCodePoint(3221 + i));
//console.log({ kannadaVowelList, hindiVowelList });

// Combining Hindi and Kannada letters into an array of objects
const hindiKannadaPairs = [];
for (let i = 0; i < hindiVowelList.length; i++) {
  hindiKannadaPairs.push({
    hindi: hindiVowelList[i].value,
    kannada: kannadaVowelList[i].value
  });
}

for (let i = 0; i < hindiConsonants.length; i++) {
  hindiKannadaPairs.push({
    hindi: hindiConsonants[i],
    kannada: kannadaConsonants[i]
  });
}

console.log(hindiKannadaPairs);

// Define the parent container
const gridContainer = document.querySelector(".grid-container");

// Arrow function to create a block element with Kannada and Hindi characters
const createBlock = ({ kannada, hindi }) => {
  const block = document.createElement("div");
  block.classList.add("block");

  const kannadaDiv = document.createElement("div");
  kannadaDiv.classList.add("kannada");
  kannadaDiv.textContent = kannada;

  const hindiDiv = document.createElement("div");
  hindiDiv.classList.add("hindi");
  hindiDiv.textContent = hindi;

  block.appendChild(kannadaDiv);
  block.appendChild(hindiDiv);

  return block;
};

// Arrow function to append blocks to the grid container
const appendBlocksToGrid = () => {
  // Clear existing content in the grid container
  gridContainer.innerHTML = "";
  console.log({ hindiKannadaPairs });
  // Generate blocks for each pair of Kannada and Hindi characters
  for (let i = 0; i < hindiKannadaPairs.length; i++) {
    const block = createBlock(hindiKannadaPairs[i]);
    gridContainer.appendChild(block);
  }
};

// Call the function to append blocks to the grid container
appendBlocksToGrid();
