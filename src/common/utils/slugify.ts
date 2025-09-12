export function slugify(text: string): string {
  return text
    .normalize('NFKD') //separates accents from letters (á -> a + ' )
    .toLocaleLowerCase() //all lowercase
    .replace(/[\u0300-\u036f]/g, '') //remove accents (unicode markers)
    .replace(/[^a-z0-9]+/g, ' ') //replaces everything that is not a letter or number for a space
    .trim() // remove spaces start to end
    .replace(/\s+/g, '-'); //space -> hifen
}
