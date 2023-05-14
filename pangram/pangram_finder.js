const PangramFinder = function (phrase) {
  this.phrase = phrase
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  // this.alphabet == q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m
}
//this.phrase = 'the quick brown fox jumps over the lazy dog' = a true pangram

PangramFinder.prototype.isPangram = function () {
  let phraseNoSpaces = this.phrase.replace(/\s/g,'');
  const phraseNoSpacesSplit = phraseNoSpaces.split('');
  const answer = phraseNoSpacesSplit.every(letter => {return this.alphabet.includes(letter)});
  console.log(answer)
  return answer
}

module.exports = PangramFinder;
