// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(num, dna) {
    return {
        specimenNumber: num, 
        dnaMakup: dna,
        mutate: function() {
            let i = Math.floor(Math.random()*15);
            let dnaBases = ['A', 'T', 'C', 'G'];
            let newDNA = this.dnaMakup;
            dnaBases = dnaBases.splice(dnaBases.findIndex(dna[i]), 1);
            newDNA[i] = Math.floor(Math.random()*3);
            this.dnaMakup = newDNA;
        },
        compareDNA: function(pAequor) {
            let same = 0;
            for (let i = 0; i < this.dnaMakup.length; i++) {
                if (this.dnaMakup[i] == pAequor.dnaMakup[i]) {
                    same++;
                }
            }
            console.log(`specimen #1 and specimen #2 have ${100 * (same/(this.dnaMakup.length))}% DNA in common`)
        },
        willLikelySurvive: function() {
            let CorG = 0;
            for (let i = 0; i < this.dnaMakup.length; i++) {
                if (this.dnaMakup[i] == "C" || this.dnaMakup[i] == "G") {
                    CorG++;
                }
            }
            if (CorG / this.dnaMakup.length >= 0.6) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

let pAequorData = []

for (let i = 0; i < 30; i++) {
    pAequorData.push(pAequorFactory(i, mockUpStrand()));
}