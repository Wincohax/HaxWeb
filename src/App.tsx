import './App.css'
import miniWinco from './assets/Alfin YT 12.jpg'

function App() {

{/* TODO: Maybe using arrays that I can't modify isn't a great idea, I'll problably change it cuz, what if I wanna change data without touching these lines of code */}

  const thingsImGoodAt = [
    'Tech Support (Fr 💀).',
    ' Minecraft. ',
    'English (people say I speak english better than my native language 🪦).',
    'osu! (ig).',
    'Procrastinating (I\'m not Procrastinating doing this website lol).',
    'Video Editing (Kdenlive, Davinci Resolve).'

  ];

  const thingsIdLoveToLearn = [
    'C',
    'C# (Dropped I\'ll take it over at some point)',
    'CSS (On it)',
    'GTK',
    'HTML (On it)',
    'JS (On it)',
    'Kotlin (Dropped)',
    'React (This website is build w/ it)'

  ]

  const listItems = thingsImGoodAt.map(things => <li>{things}</li>);

  const listLearn = thingsIdLoveToLearn.map(things => <li>{things}</li>);

  return (
   <>

    {/* TODO: OMFG DUDE I CAN'T LEAVE THIS SHIT LIKE THIS, Please transfer this mf text to a json or smth, It's horrible to work like this */}

   <h1>I'm Wincohax<img className='miniWinco, character' src={miniWinco} alt="miniWinco" />
   </h1>
   <p className='center1'>I'm Wincohax, an average teenager who is trying his best to not end up on a couch.</p>
  <p className='center1'>I started using computers when I was very young and I always liked the idea of customizing my system and learning how things work.</p>
  <p className='center1'><em>I spent Most of my childhood on my PC playing w/ VMS using VirtualBox Or VMWARE.</em></p>
  <p className='center1'>Nowadays I switched to <strong><em>Linux</em></strong> for a more pleasant exprience and <strong><em>I don't regret it.</em></strong> Now I'm trying to get into Web or Software development. 
  <p className='center1'>(One great example is this website)</p>
  </p>
  <h1 className='ayo1'>Things that I'm good at</h1>
  <li className='ayo2'>{listItems}</li>
  <h1 className='ayo1'> Things That I would love to learn (Or I'm Learning)
  </h1>
    <li className='ayo2'>{listLearn}</li>
    <h1>What's Next?</h1>
    <p className='ayo3'>I'm in the process of finishing high school and also on the way to getting my english certification, my idea is to go to college or get a way of getting some kind of income.

I would like to create some projects that can be helpful for people, I also love the idea of Open Source so I'll mostly publish every software that I will make on Github.

I'm not that into commercial profit but I'm sure I'll get over it (?.</p>
  <h1>Where am I?</h1>

  <p>You can find me on almost every existing social platform.

{/* TODO: Email Working Properly */} 

if you want to contact me directly you can via Twitter DM, Discord DM (Wincohax#9423), or <a href='mailto: wincohax@gmail.com'>E-mail</a></p> 

  <a href="https://linktr.ee/Wincohax">Find me!</a>
   </>
  )
}

export default App
