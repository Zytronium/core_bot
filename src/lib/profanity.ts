import { Filter } from 'bad-words';

const filter = new Filter({
  placeHolder: '*',
});

// Custom profanity filters
filter.addWords(
  // 'customword'
  // I'd add a few words here but don't want them on my GitHub. Might come back and add env variables here.
);

// Custom profanity exceptions
filter.removeWords(
  'god'
);

export function containsProfanity(text: string): boolean {
  return filter.isProfane(normalize(text));
}

export function cleanProfanity(text: string): string {
  return filter.clean(normalize(text));
}


// Normalize input to defeat simple bypasses
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // accents
    .replace(/[^a-z0-9\s]/g, '')     // punctuation
    .replace(/\s+/g, ' ')
    .trim();
}
