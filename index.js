const express = require( 'express')
const app = express()
const port = 3000

const series = [ 
  { name: 'LOSING ALICE', seasons: ['SEASON 1'], year: '2021', tMeterScore: 77, img: 'https://resizing.flixster.com/zwW0p99NO4s0BgkmFFB0xGZouN0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19146763_b_v10_ad.jpg' },
  { name: 'BIG SHOT', seasons: ['SEASON 1'], year: '2021', tMeterScore: 78, img: 'https://resizing.flixster.com/s-xXaA9xOHMqIDWtMqSFa6zSkeI=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19575268_b_v13_aa.jpg' },
  { name: 'COLIN IN BLACK AND WHITE', seasons: ['LIMITED SERIES'], year: '2021', tMeterScore: 79, img: 'https://resizing.flixster.com/R4z1d1___njsJ3Zbc9AAltCoECU=/fit-in/180x240/v2/https://resizing.flixster.com/EQ4epfmXo9ETcO-x_r6FBuVsLkQ=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vYzAwMjc2YmUtOGE0ZC00MDBhLWJkZWMtN2ZmNjNkOTRlMmYyLmpwZw==' },
  { name: 'THE IRREGULARS', seasons: ['SEASON 1'], year: '2021', tMeterScore: 80, img: 'https://resizing.flixster.com/n1kIADoR2PCdY5169La9tE0ARDo=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19599047_b_v13_aa.jpg' },
  { name: 'SCENES FROM A MARRIAGE', seasons: ['LIMITED SERIES'], year: '2021', tMeterScore: 82, img: 'https://resizing.flixster.com/6sqfIik7P5PWbhNLWGREp1ZoKDA=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p20512528_b_v13_ab.jpg' },
  { name: 'KEVIN CAN F... HIMSELF', seasons: ['SEASON 1'], year: '2021', tMeterScore: 81, img: 'https://resizing.flixster.com/DOMeG-0GH1zOq1K2o8s0CsNePYI=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19868034_b_v13_aa.jpg' },
  { name: 'THE INVESTIGATION', seasons: ['SEASON 1'], year: '2021', tMeterScore: 84, img: 'https://resizing.flixster.com/-j3IGZxleFVNIT8PsPc8PRg01Ps=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p18778433_b_v13_ab.jpg' },
  { name: 'EXTERMINATE ALL THE BRUTES', seasons: ['SEASON 1'], year: '2021', tMeterScore: 85, img: 'https://resizing.flixster.com/kYuqtp24r-FsLGR_KEOVPJrLkgM=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19480826_b_v13_aa.jpg' },
  { name: 'SUPERMAN & LOIS', seasons: ['SEASON 1'], year: '2021', tMeterScore: 88, img: 'https://resizing.flixster.com/VTbaPM5RkpSoZaiDWOAc6qHTs8s=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19035038_b_v13_ab.jpg' },
  { name: 'THE FALCON AND THE WINTER SOLDIER', seasons: ['SEASON 1'], year: '2021', tMeterScore: 87, img: 'https://resizing.flixster.com/99Wxvp1ldooptw7M7hG7l-cLW80=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19222939_b_v13_ab.jpg' },
  { name: 'WANDAVISION', seasons: ['SEASON 1'], year: '2021', tMeterScore: 91, img: 'https://resizing.flixster.com/-P1sjI_UmYFqa7Usxi1tNYSFM_8=/fit-in/180x240/v2/https://resizing.flixster.com/bdd7eRYrdd-CnHeU7q1yysuwjWg=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vUlRUVjgzNDc3NC53ZWJw' },
  { name: 'LOKI', seasons: ['SEASON 1'], year: '2021', tMeterScore: 92, img: 'https://resizing.flixster.com/k-H_Osxqm-J3hqAOO6Tq-tjRYL0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19575003_b_v13_aa.jpg' },
  { name: 'WHAT IF...?', seasons: ['SEASON 1'], year: '2021', tMeterScore: 94, img: 'https://resizing.flixster.com/mw49JCg4ErAzDMmpn7V0-XKO07E=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p20342398_b_v13_aa.jpg' },
  { name: 'THE WITCHER', seasons: ['SEASON 1', 'SEASON 2'], year: '2021', tMeterScore: 95, img: 'https://resizing.flixster.com/Xf-Rdfse_8HrmtzzFc6z0gy5uRQ=/fit-in/180x240/v2/https://resizing.flixster.com/IfomupSdCO8TeDf8kmqq3Py4tys=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vZTk1NGUyZTItMWEzZC00MzY2LTkxODktZjAyY2NkNzY2ZmU3LmpwZw==' },
  { name: 'STAR WARS: VISIONS', seasons: ['SEASON 1'], year: '2021', tMeterScore: 96, img: 'https://resizing.flixster.com/78JoO-nRRU8CeZwWlzcwWvU0c3Q=/fit-in/180x240/v2/https://resizing.flixster.com/gyY4ATL8b79LSqF3JmkkWbb1BIU=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vYjU3NDUyYzAtNmNhOS00YmEyLWE5MGMtZDc5NWY3ZTBjZTc2LmpwZw==' },
  { name: 'INVINCIBLE', seasons: ['SEASON 1'], year: '2021', tMeterScore: 98, img: 'https://resizing.flixster.com/jZcr_M3hsVVZ2aC86ZhLCphixeY=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19396843_b_v10_ae.jpg' },
]

app.get('/series', (req, res) => res.send(series))

app.listen(port, () => console.log('Listeing on port ' + port))