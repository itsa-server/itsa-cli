webpackJsonp([6],Array(43).concat([function(e,t,n){"use strict";var r="contact@tablet";r&&(r=null);var o=n(640),i=n(716),a=n(144),s=n(34),u=o.createClass({displayName:"Body",mixins:[a.connect(s)],render:function(){return o.createElement("div",null,o.createElement("h1",null,this.props.helloWorld," I am CONTACT tablet"),o.createElement("h2",null,"my view: ",this.props.__view),o.createElement(i,this.props))}});e.exports=u},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,4,[487,602,572,562,564],[553,574],10,[447,587],[464,620,572,563,670,580,605,606,591,607,562,561,587,575,564],[497,576,578,572,563,585,604,579,580,624,573,581,607,569,594,630,702,613,561,615,616,564],[511,596,570,572,573,581,593,562,561,564],[458,561],[460,631],23,27,28,29,[442,561],[518,570,562,574,612],[461,566,583,619,671,629,562,614],[495,628,561],52,[506,677,585],[443,576,712,564],[449,619,597,608,609,561],[452,566,583,608,609],[488,563,589,606,591,572,590,634,561,564],[524,577,612],[543,561],[436,632],[492,563,564],[500,562,561],80,[522,586,629,611],[526,561],83,84,[439,570,562,561],[451,566,561],[455,626,561],[456,578,608,609,561],[466,621,568],[467,561],[469,562,594,564],[472,618,576,582,578,600,568,674,573,562,595,561,614,575,564],[489,563,580,561],105,[502,587],[510,605,572,563,580,569,562,561,564],[527,561],109,110,111,112,[540,655,604,590,562,561,564],[541,565],[548,565],[550,564],152,[438,617,565,694,698,705,708,564],[450,561],[465,607,561,564],[474,618,644,582,568,573,561,615],[481,582,600,603,562,595],[494,664,630,632,633],[496,692],[499,587],[503,563,589,591,574],[504,570,578,562],163,164,[529,706],[534,572,580,568,561,637,564],167,168,169,[537,565,561],[538,565],172,173,[552,563,589,579,634,561,564],[554,652],[437,566,584,565,649,685,688,575],[440,566,583,584,565,569,577,614,638,575],233,[441,645,625,713,561],[444,565,697,574,635,561],[445,575],[446,566,584,592,568,575],[448,574],[453,570,562,636],[454,576,565],[457,566,574],[459,597,654,620,567,602,572,563,585,656,622,667,579,568,573,626,581,678,562,631,709,565],[462,581,699,613,616],[463,570,589,639,564],[468,601,602,572,563,585,580,605,590,573,606,591,581,569,562,594,561,616,564],[470,563,585,707],[471,588,571,567,563,587],[473,566,599,571,567,563],[475,566,599,571,567,563],[476,566,599,571,567,563],[477,588,582,598,571,567,563,568,569,562,561],[478,571,567,563,564],[479,588,598,571,567,563,569,562],[480,565,701,636],[482,588,582,598,571,567,563,569,562,561,564],[483,569,593,562,574],[484,641,642,643,646,647,565,650,651,571,567,600,666,603,657,658,660,621,659,661,662,663,665,622,563,672,673,579,568,676,681,682,683,680,696,668],[485,576,669,568,573,711],[486,562],260,[490,583],[491,648,565,570,579,568,569,562,612,703],[493,576,583,601,567,604,578,590,603,573,628,569],[498,601,625,581,653],[501,561],[505,596,570,578,623,627,593,562],[507,675],[508,563,579,624,679,594,613,561],[509,570,596,627,593,562,574],[512,576],[513,566,584,623,577,633,638,575,714],272,[514,566,597,584,684,577,687,689,592,686,690,586,691,610,561,575,564],[515,577],[516,577],[517,592],[519,586],[520,577],[521,586,610,700,611],[523,586,611],[525,592],282,283,[528,693],[530,715],[531,567,563,561],[532,565,695,635,561],[533,617],[535,639,564],[536,610],291,292,293,294,[539,704],[542,637],297,298,[544,563,561],[545,565],[546,710],[547,595],[549,565,595,615],304,[551,561],function(e,t,n){"use strict";var r=n(640),o=r.createClass({displayName:"Menu",render:function(){var e=this.props.__langprefix+"/",t=this.props.__langprefix+"/contact",n=this.props.__langprefix+"/contact/marco?a=9",o=this.props.__langprefix+"/faq",i=this.props.__langprefix+"/history",a="/en"+this.props.__uri,s="/nl"+this.props.__uri,u="/de"+this.props.__uri,c="/fr"+this.props.__uri,l="pure-menu-item",p=l+("en"===this.props.__lang?" pure-menu-selected":""),d=l+("nl"===this.props.__lang?" pure-menu-selected":""),f=l+("de"===this.props.__lang?" pure-menu-selected":""),h=l+("fr"===this.props.__lang?" pure-menu-selected":"");return r.createElement("div",{className:"pure-menu pure-menu-horizontal"},r.createElement("a",{href:"#",className:"pure-menu-heading pure-menu-a"},"MENU"),r.createElement("ul",{className:"pure-menu-list"},r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:e,className:"pure-menu-link"},"Home")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:t,className:"pure-menu-link"},"Contact")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:n,className:"pure-menu-link"},"Contact ",r.createElement("b",null,"Marco")," Asbreuk")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:o,className:"pure-menu-link"},"FAQ")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:i,className:"pure-menu-link"},"History"))),r.createElement("a",{href:"#",className:"pure-menu-heading pure-menu-a"},"LANGUAGE"),r.createElement("ul",{className:"pure-menu-list"},r.createElement("li",{className:p},r.createElement("a",{href:a,"data-setlang":"en",className:"pure-menu-link"},"EN")),r.createElement("li",{className:d},r.createElement("a",{href:s,"data-setlang":"nl",className:"pure-menu-link"},"NL")),r.createElement("li",{className:f},r.createElement("a",{href:u,"data-setlang":"de",className:"pure-menu-link"},"DE")),r.createElement("li",{className:h},r.createElement("a",{href:c,"data-setlang":"fr",className:"pure-menu-link"},"FR"))))}});e.exports=o}]));