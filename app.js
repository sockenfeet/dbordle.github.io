var allVariations =
    [{title:"Wordle", link:"",link:"https://www.nytimes.com/games/wordle/index.html", description:""},
    {title:"kanyerdle",link:"https://www.kanyerdle.com/",description:""},
    {title:"heardle",link:"https://heardle.glitch.me/",description:""},
    {title:"canuckle",link:"https://canucklegame.github.io/canuckle/",description:""},
    {title:"gordle",link:"https://gordle.herokuapp.com/",description:""},
    {title:"tirtl",link:"https://tirtl.glitch.me/",description:""},
    {title:"swordle",link:"https://wordle.starwars.guide/",description:""},
    {title:"antiwordle",link:"https://www.antiwordle.com/",description:""},
    {title:"airportle",link:"https://airportle.glitch.me/",description:""},
    {title:"jewdle",link:"https://www.jewdle.app/",description:""},
    {title:"byrdle",link:"https://www.byrdle.net/",description:""},
    {title:"chordle",link:"https://www.chordle.synthase.cc/",description:""},
    {title:"bordle",link:"https://apps.nookkin.com/bordle/",description:""},
    {title:"squarewordle",link:"https://squareword.org/",description:""},
    {title:"worduel",link:"https://www.worduel.net/",description:""},
    {title:"crosswordle 1",link:"https://crosswordle.mekoppe.com/",description:""},
    {title:"crosswordle 2",link:"https://crosswordle.vercel.app/?daily=1",description:""},
    {title:"crosswordle 3",link:"https://crosswordle.serializer.ca/",description:""},
    {title:"waffle",link:"https://wafflegame.net/",description:""},
    {title:"mahjong handle",link:"https://mahjong-handle.update.sh/",description:""},
    {title:"squirdle",link:"https://squirdle.fireblend.com/",description:""},
    {title:"wordle2",link:"https://www.wordle2.in/",description:""},
    {title:"polydle",link:"https://polydle.github.io/",description:""},
    {title:"passwordle",link:"https://rsk0315.github.io/playground/passwordle.html",description:""},
    {title:"wordle",link:"https://www.nytimes.com/games/wordle/index.html",description:""},
    {title:"dordle",link:"https://zaratustra.itch.io/dordle",description:""},
    {title:"quordle",link:"https://www.quordle.com/#/",description:""},
    {title:"octordle",link:"https://octordle.com/",description:""},
    {title:"worldle",link:"https://worldle.teuteuf.fr/",description:""},
    {title:"nerdle",link:"https://nerdlegame.com/",description:""},
    {title:"dungleon",link:"https://www.dungleon.com/",description:""},
    {title:"semantle",link:"https://semantle.novalis.org/",description:""},
    {title:"rewordle",link:"https://rewordle.glitch.me/",description:""},
    {title:"hello wordl",link:"https://hellowordl.net/",description:""},
    {title:"lewdle",link:"https://www.lewdlegame.com/",description:""},
    {title:"wordawazzle",link:"https://wordawazzle.com.au/",description:""},
    {title:"taylordle",link:"https://www.taylordle.com/",description:""},
    {title:"wordle unlimited",link:"https://www.wordleunlimited.com/",description:""},
    {title:"invisidle",link:"https://invisidle.glitch.me/",description:""},
    {title:"primel",link:"https://converged.yt/primel/",description:""},
    {title:"squabble",link:"https://squabble.me/",description:""},
    {title:"NYC subwaydle",link:"https://www.subwaydle.com/",description:""},
    {title:"letterle",link:"https://edjefferson.com/letterle/",description:""},
    {title:"queerdle",link:"https://queerdle.com/",description:""},
    {title:"gootsle",link:"https://gootsle.glitch.me/",description:""},
    {title:"absurdle",link:"https://qntm.org/files/absurdle/absurdle.html",description:""},
    {title:"globle",link:"https://globle-game.com/",description:""},
    {title:"lordle of the rings",link:"https://digitaltolkien.github.io/vue-wordle/",description:""},
    {title:"flaggle",link:"https://ducc.pythonanywhere.com/flaggle/",description:""},
    {title:"squardle",link:"https://fubargames.se/squardle/",description:""},
    {title:"hard words",link:"https://hard-words.shittywebapp.com/",description:""},
    {title:"mathler",link:"https://www.mathler.com/",description:""},
    {title:"japanese",link:"https://taximanli.github.io/kotobade-asobou/",description:""},
    {title:"japanese 4 char idioms",link:"https://motemen.github.io/kanjile/",description:""},
    {title:"spanish",link:"https://wordle.danielfrg.com/",description:""},
    {title:"arepo (latin)",link:"https://hands-up-education.org/arepo/arepo.html",description:""},
    {title:"le mot (french)",link:"https://wordle.louan.me/",description:""},
    {title:"Словко (Ukrainian)",link:"https://slovko.zaxid.net/",description:""},
    {title:"JoJodle (JJBA)",link:"https://jojo-news.com/fun/jojodle/",description:""},
    {title:"Woordle (Dutch)",link:"https://woordle.nl",description:""},
    {title:"WordleWordle",link:"https://wordle10.com",description:""},
    {title:"Jordle",link:"https://www.jellyneo.net/jordle/",description:""},
    {title:"Sedecordle",link:"http://www.sedecordle.com/",description:""},
    {title:"Heardle",link:"https://www.heardle.app/",description:""}];

function startup() {
    var variations = document.getElementById("variations");
    allVariations.forEach( variation =>
        variations.innerHTML = variations.innerHTML + 
            `<a href="${variation.link}" target="_blank" class="variation">
                <div class="test">
                    <span class="variation-title">${variation.title}</span><br>
                    <span class="variation-desc">${variation.description}</span>
                </div>
            </a>`
    )
}