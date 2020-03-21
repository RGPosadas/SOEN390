import { Building, BuildingId, CampusId } from "../types/main";

export const Buildings: Building[] = [
  {
    id: BuildingId.H,
    campusId: CampusId.SGW,
    displayName: "Henry F. Hall Building",
    address: "1455 De Maisonneuve Blvd O., Montreal, QC, H3G 1M8",
    departments: [
      {
        id: 1,
        title: "Geography, Planning and Environment",
        link:
          "http://www.concordia.ca/artsci/geography-planning-environment.html"
      },
      {
        id: 2,
        title: "Political Science, Sociology and Anthropology, Economics",
        link: "http://www.concordia.ca/artsci/academics/departments.html"
      },
      {
        id: 3,
        title: "School of Irish Studies",
        link: "http://www.concordia.ca/artsci/irish-studies.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Welcome Crew Office",
        link: "http://www.concordia.ca/students/success/mentoring.html"
      },
      {
        id: 2,
        title: "DB CLarke Theatre",
        link: "http://www.concordia.ca/arts/venues/db-clarke-theatre.html"
      },
      {
        id: 3,
        title: "Dean of Students",
        link: "http://www.concordia.ca/offices/dean-students.html"
      },
      {
        id: 4,
        title: "Aboriginal Student Resource Centre",
        link: "http://www.concordia.ca/students/aboriginal.html"
      },
      {
        id: 5,
        title: "Concordia Student Union",
        link: "https://www.csu.qc.ca/"
      },
      {
        id: 6,
        title: "IT Service Desk",
        link: "http://www.concordia.ca/it.html"
      },
      {
        id: 7,
        title: "Security Office",
        link: "http://www.concordia.ca/campus-life/security.html"
      },
      {
        id: 8,
        title: "Student Success Centre",
        link:
          "http://www.concordia.ca/students/success.html?utm_source=redirect&utm_campaign=offices-ssc"
      },
      {
        id: 9,
        title: "Mail Services",
        link: "http://www.concordia.ca/offices/facilities.html"
      },
      {
        id: 10,
        title: "Archives",
        link: "http://www.concordia.ca/offices/archives.html"
      },
      {
        id: 11,
        title: "Career and PLanning Services",
        link:
          "http://www.concordia.ca/students/success/career-planning-services.html"
      },
      {
        id: 12,
        title: "Sexual Assault Resource Centre (SARC)",
        link: "http://www.concordia.ca/conduct/sexual-assault.html"
      }
    ],
    location: {
      latitude: 45.49729998360628,
      longitude: -73.57890789359567
    },
    boundingBox: [
      { latitude: 45.49682818364492, longitude: -73.57884845912251 },
      { latitude: 45.497163503733475, longitude: -73.57954223351966 },
      { latitude: 45.497708183281496, longitude: -73.5790334123961 },
      { latitude: 45.4973720615268, longitude: -73.57833870872308 }
    ]
  },
  {
    id: BuildingId.CB,
    campusId: CampusId.SGW,
    displayName: "CB Building",
    address: "1425 René-Lévesque Blvd W, Montreal, QC H3G 1T7",
    departments: [],
    services: [],
    location: {
      latitude: 45.495178215575926,
      longitude: -73.57420033586945
    },
    boundingBox: [
      { latitude: 45.49516317440483, longitude: -73.57393479717697 },
      { latitude: 45.49524402065233, longitude: -73.57385701311554 },
      { latitude: 45.49540383266057, longitude: -73.5741909481379 },
      { latitude: 45.49506070631968, longitude: -73.57452085984673 },
      { latitude: 45.4949413166642, longitude: -73.57426873219933 },
      { latitude: 45.49500900216924, longitude: -73.57420167697396 },
      { latitude: 45.49500054148556, longitude: -73.57418558371987 },
      { latitude: 45.49505788609451, longitude: -73.57412791622605 },
      { latitude: 45.495030623910644, longitude: -73.5740648843142 },
      { latitude: 45.495105829903075, longitude: -73.57398844135727 },
      { latitude: 45.495135912271934, longitude: -73.57405147326912 },
      { latitude: 45.49519513688863, longitude: -73.57399782908882 }
    ]
  },
  {
    id: BuildingId.GM,
    campusId: CampusId.SGW,
    displayName: "Guy-De Mainsonneuve Building",
    address: "1550 De Maisonneuve W, Montreal, Quebec H3G 1N1",
    departments: [
      {
        id: 1,
        title: "Contemporary Dance",
        link: "http://www.concordia.ca/finearts/dance.html"
      },
      {
        id: 2,
        title: "Music",
        link: "http://www.concordia.ca/finearts/music.html"
      },
      {
        id: 3,
        title: "Theatre",
        link: "http://www.concordia.ca/finearts/theatre.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Access Centre for Students with Disabilities",
        link: "http://www.concordia.ca/students/accessibility.html"
      },
      {
        id: 2,
        title: "Environmental Health and Safety",
        link: "http://www.concordia.ca/campus-life/safety.html"
      },
      {
        id: 3,
        title: "Facilities Management",
        link: "http://www.concordia.ca/offices/facilities.html"
      },
      {
        id: 4,
        title: "Financial Aid & Awards Office",
        link: "http://www.concordia.ca/offices/faao.html"
      },
      {
        id: 5,
        title: "Financial Services",
        link: "http://www.concordia.ca/financial-services.html"
      },
      {
        id: 6,
        title: "Graduate Studies",
        link: "http://www.concordia.ca/sgs.html"
      },
      {
        id: 7,
        title: "Health Services",
        link: "http://www.concordia.ca/students/health.html"
      },
      {
        id: 8,
        title: "Institute for Co-operative Education",
        link: "http://www.concordia.ca/academics/co-op.html"
      },
      {
        id: 9,
        title: "International Students Office",
        link: "http://www.concordia.ca/students/international.html"
      },
      {
        id: 10,
        title: "Office of Rights & Responsibilities",
        link:
          "http://www.concordia.ca/conduct/behavioural-integrity/rights-responsibilities.html"
      },
      {
        id: 11,
        title: "Office of Sustainability",
        link: "http://www.concordia.ca/about/sustainability.html"
      },
      {
        id: 12,
        title: "Office of the Chief Communications Officer",
        link:
          "http://www.concordia.ca/about/administration-governance/office-vp-research-graduate-studies.html"
      },
      {
        id: 13,
        title: "Office of the President",
        link:
          "http://www.concordia.ca/about/administration-governance/president.html"
      },
      {
        id: 14,
        title: "Office of the Provost & VP, Academic",
        link: "http://www.concordia.ca/provost.html"
      },
      {
        id: 15,
        title:
          "Office of the VP, Institutional Relations and Secretary General",
        link:
          "http://www.concordia.ca/about/administration-governance/office-vp-advancement.html"
      },
      {
        id: 16,
        title: "Office of the VP, Research & Graduate Studies",
        link:
          "http://www.concordia.ca/about/administration-governance/office-vp-research-graduate-studies.html"
      },
      {
        id: 17,
        title: "Ombuds Office",
        link: "http://www.concordia.ca/offices/ombuds.html"
      },
      {
        id: 18,
        title: "University Communcations Services",
        link:
          "http://www.concordia.ca/about/administration-governance/office-chief-communications-officer.html"
      }
    ],
    location: {
      latitude: 45.495874126086186,
      longitude: -73.57880774403216
    },
    boundingBox: [
      { latitude: 45.4959455260391, longitude: -73.57843374911931 },
      { latitude: 45.496129141274366, longitude: -73.57880685352598 },
      { latitude: 45.49577970067112, longitude: -73.57914541643747 },
      { latitude: 45.49576301454991, longitude: -73.57910753023513 },
      { latitude: 45.49577923063962, longitude: -73.57908909004816 },
      { latitude: 45.495617958757876, longitude: -73.57874772960545 }
    ]
  },
  {
    id: BuildingId.LB,
    campusId: CampusId.SGW,
    displayName: "JW McConnell Building",
    address: "1400 De Maisonneuve Blvd. O. Montreal, QC, H3G 1M8",
    departments: [
      {
        id: 1,
        title: "English",
        link: "http://www.concordia.ca/artsci/english.html"
      },
      {
        id: 2,
        title: "History",
        link: "http://www.concordia.ca/artsci/history.html"
      },
      {
        id: 3,
        title: "Etudes francaises",
        link: "http://www.concordia.ca/artsci/francais.html"
      },
      {
        id: 4,
        title: "Mathematics and Statistics",
        link: "http://mypage.concordia.ca/mathstat/"
      },
      {
        id: 5,
        title: "Education",
        link: "http://www.concordia.ca/artsci/education.html"
      },
      {
        id: 6,
        title:
          "Centre for Interdisciplinary Studies in Society and Culture (CISSC)",
        link: "http://www.concordia.ca/artsci/cissc.html"
      },
      {
        id: 7,
        title: "Centre for the Study of Learning and Performance",
        link: "http://www.concordia.ca/research/learning-performance.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "R. Howard Webster Library",
        link: "https://library.concordia.ca/"
      },
      {
        id: 2,
        title: "Welcome Centre",
        link:
          "http://www.concordia.ca/admissions/undergraduate/welcometours.html"
      },
      {
        id: 3,
        title: "Leonard and Bina Ellen Art Gallery",
        link: "http://ellengallery.concordia.ca/"
      },
      {
        id: 4,
        title: "J.A De Seve Cinema",
        link: "http://www.concordia.ca/it/services/cinemas.html"
      },
      {
        id: 5,
        title: "Birks Student Service Centre",
        link: "http://www.concordia.ca/students/birks.html"
      },
      {
        id: 6,
        title: "Campus Stores",
        link: "https://stores.concordia.ca/"
      },
      {
        id: 7,
        title: "Instructional & Information Technology Services (IITS)",
        link: "http://www.concordia.ca/it.html"
      },
      {
        id: 8,
        title: "4TH SPACE",
        link: "http://www.concordia.ca/next-gen/4th-space.html"
      }
    ],
    location: {
      latitude: 45.49682594904578,
      longitude: -73.57795364783972
    },
    boundingBox: [
      { latitude: 45.49672776379525, longitude: -73.57857786622326 },
      { latitude: 45.496704732634115, longitude: -73.57852925118486 },
      { latitude: 45.496667365730175, longitude: -73.57856613155882 },
      { latitude: 45.49625564751439, longitude: -73.57769860505215 },
      { latitude: 45.49649527284175, longitude: -73.57746436939486 },
      { latitude: 45.49658675639552, longitude: -73.57764999039873 },
      { latitude: 45.49663507112262, longitude: -73.57760084433879 },
      { latitude: 45.496615330095416, longitude: -73.57755591733779 },
      { latitude: 45.49688977757426, longitude: -73.57729239901107 },
      { latitude: 45.497015559948174, longitude: -73.57753665173557 },
      { latitude: 45.49698312847616, longitude: -73.57756380910185 },
      { latitude: 45.49700216434244, longitude: -73.5776094066551 },
      { latitude: 45.496993938968906, longitude: -73.57761845911052 },
      { latitude: 45.49699722911846, longitude: -73.57763086432722 },
      { latitude: 45.4970397660347, longitude: -73.5775869431546 },
      { latitude: 45.49712058607023, longitude: -73.5777461957665 },
      { latitude: 45.497077109173674, longitude: -73.57779179331975 },
      { latitude: 45.49708227940097, longitude: -73.57780688074546 },
      { latitude: 45.49708768463809, longitude: -73.57779816356616 },
      { latitude: 45.49711212570382, longitude: -73.57784644332843 },
      { latitude: 45.49714079694045, longitude: -73.57781693902926 },
      { latitude: 45.49726403029928, longitude: -73.5780559473552 },
      { latitude: 45.49701657683179, longitude: -73.57829458296627 },
      { latitude: 45.497000126087705, longitude: -73.57825770259231 },
      { latitude: 45.49696355463932, longitude: -73.57829394459444 },
      { latitude: 45.49693687901673, longitude: -73.5782460001083 },
      { latitude: 45.49689575208939, longitude: -73.57828891545253 },
      { latitude: 45.49691196785291, longitude: -73.578327136931 },
      { latitude: 45.496872485985776, longitude: -73.57836938172298 },
      { latitude: 45.496889907674564, longitude: -73.57841469347477 }
    ]
  },
  {
    id: BuildingId.GN,
    campusId: CampusId.SGW,
    displayName: "Grey Nuns Building",
    address: "1190 Guy St, Montreal, Quebec H3H 2L4",
    departments: [],
    services: [
      {
        id: 1,
        title: "Residences",
        link:
          "http://www.concordia.ca/students/housing/test/benefits/grey-nuns.html"
      },
      {
        id: 2,
        title: "Grey Nuns Library (Reading Room and Group Study Rooms)",
        link: "http://www.concordia.ca/maps/buildings/gn.html"
      },
      {
        id: 3,
        title: "Daycare Centre",
        link: "http://www.concordia.ca/campus-life/daycares.html"
      },
      {
        id: 4,
        title: "Summer Accommodation",
        link:
          "http://www.concordia.ca/summer/accommodations.html/greynunsresidence/"
      }
    ],
    location: { latitude: 45.4935790877303, longitude: -73.5766034018584 },
    boundingBox: [
      { latitude: 45.492593, longitude: -73.576535 },
      { latitude: 45.492731, longitude: -73.576392 },
      { latitude: 45.492901, longitude: -73.576745 },
      { latitude: 45.492922, longitude: -73.576739 },
      { latitude: 45.492921, longitude: -73.576741 },
      { latitude: 45.492948, longitude: -73.576789 },
      { latitude: 45.492939, longitude: -73.576832 },
      { latitude: 45.493025, longitude: -73.577005 },
      { latitude: 45.493363, longitude: -73.576673 },
      { latitude: 45.493341, longitude: -73.576625 },
      { latitude: 45.493471, longitude: -73.576497 },
      { latitude: 45.493491, longitude: -73.576543 },
      { latitude: 45.493792, longitude: -73.576245 },
      { latitude: 45.493568, longitude: -73.575783 },
      { latitude: 45.493711, longitude: -73.575641 },
      { latitude: 45.493932, longitude: -73.576094 },
      { latitude: 45.494034, longitude: -73.575996 },
      { latitude: 45.49412, longitude: -73.576178 },
      { latitude: 45.49401, longitude: -73.576283 },
      { latitude: 45.49439, longitude: -73.577057 },
      { latitude: 45.494093, longitude: -73.577348 },
      { latitude: 45.494123, longitude: -73.577412 },
      { latitude: 45.493974, longitude: -73.57756 },
      { latitude: 45.493868, longitude: -73.577339 },
      { latitude: 45.494191, longitude: -73.57702 },
      { latitude: 45.493895, longitude: -73.576409 },
      { latitude: 45.49355, longitude: -73.576748 },
      { latitude: 45.493611, longitude: -73.576875 },
      { latitude: 45.493667, longitude: -73.576822 },
      { latitude: 45.493724, longitude: -73.576944 },
      { latitude: 45.493673, longitude: -73.576999 },
      { latitude: 45.493746, longitude: -73.577156 },
      { latitude: 45.493633, longitude: -73.577267 },
      { latitude: 45.493582, longitude: -73.577153 },
      { latitude: 45.493601, longitude: -73.577132 },
      { latitude: 45.493573, longitude: -73.577082 },
      { latitude: 45.493525, longitude: -73.577128 },
      { latitude: 45.493451, longitude: -73.576963 },
      { latitude: 45.493475, longitude: -73.576935 },
      { latitude: 45.493433, longitude: -73.576853 },
      { latitude: 45.493352, longitude: -73.576938 },
      { latitude: 45.493363, longitude: -73.57696 },
      { latitude: 45.493104, longitude: -73.577212 },
      { latitude: 45.493201, longitude: -73.577402 },
      { latitude: 45.493089, longitude: -73.57751 },
      { latitude: 45.492994, longitude: -73.577314 },
      { latitude: 45.492927, longitude: -73.577379 },
      { latitude: 45.49284, longitude: -73.577198 },
      { latitude: 45.492894, longitude: -73.577141 },
      { latitude: 45.49281, longitude: -73.576963 },
      { latitude: 45.49279, longitude: -73.576977 },
      { latitude: 45.49277, longitude: -73.576972 },
      { latitude: 45.492712, longitude: -73.577032 },
      { latitude: 45.492675, longitude: -73.576965 },
      { latitude: 45.492676, longitude: -73.576923 },
      { latitude: 45.492725, longitude: -73.57687 },
      { latitude: 45.492751, longitude: -73.576862 },
      { latitude: 45.492612, longitude: -73.576583 },
      { latitude: 45.49261, longitude: -73.576578 }
    ]
  },
  {
    id: BuildingId.EV,
    campusId: CampusId.SGW,
    displayName: "Engineering, CS and VA Integrated Complex",
    address: "1493-1515 Saint-Catherine St W, Montreal, Quebec H3G 2W1",
    departments: [
      {
        id: 1,
        title: "Gina Cody School of Engineering and Computer Science",
        link: "http://www.concordia.ca/ginacody.html"
      },
      {
        id: 2,
        title: "Electrical and Computer Engineering",
        link: "http://www.concordia.ca/ginacody/electrical-computer-eng.html"
      },
      {
        id: 3,
        title: "Building, Civil and Environmental Engineering",
        link:
          "http://www.concordia.ca/ginacody/building-civil-environmental-eng.html"
      },
      {
        id: 4,
        title: "Computer Science and Software Engineering",
        link:
          "http://www.concordia.ca/ginacody/computer-science-software-eng.html"
      },
      {
        id: 5,
        title: "Mechanical, Industrial and Aerospace",
        link:
          "http://www.concordia.ca/ginacody/mechanical-industrial-aerospace-eng.html"
      },
      {
        id: 6,
        title: "Design and Computation Arts",
        link: "http://www.concordia.ca/finearts/design.html"
      },
      {
        id: 7,
        title: "Faculty of Fine Arts",
        link: "http://www.concordia.ca/finearts.html"
      },
      {
        id: 8,
        title: "Studio Arts",
        link: "http://www.concordia.ca/finearts/studio-arts.html"
      },
      {
        id: 9,
        title: "Art Education",
        link: "http://www.concordia.ca/finearts/art-education.html"
      },
      {
        id: 10,
        title: "Art History",
        link: "http://www.concordia.ca/finearts/art-history.html"
      },
      {
        id: 11,
        title: "Comtemporary Dance",
        link: "http://www.concordia.ca/finearts/dance.html"
      },
      {
        id: 12,
        title: "Recreation and Athletics",
        link: "http://www.concordia.ca/campus-life/recreation.html"
      },
      {
        id: 13,
        title: "Zero Energy Building Studies, Centre",
        link: "http://www.concordia.ca/research/zero-energy-building.html"
      },
      {
        id: 14,
        title:
          "Centre for Pattern Recognition and Machine Intelligence (CENPARMI)",
        link: "http://www.concordia.ca/research/cenparmi.html"
      },
      {
        id: 15,
        title: "Center for Composites (CONCOM)",
        link: "http://www.concordia.ca/research/composites.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "LeGym",
        link:
          "http://www.concordia.ca/campus-life/recreation/facilities/le-gym.html"
      },
      {
        id: 2,
        title: "FOFA Gallery",
        link: "http://www.concordia.ca/finearts/facilities/fofa-gallery.html"
      }
    ],
    location: {
      latitude: 45.495621869806875,
      longitude: -73.57822377879872
    },
    boundingBox: [
      { latitude: 45.49559404635745, longitude: -73.57876182221953 },
      { latitude: 45.49524629133255, longitude: -73.57801957058825 },
      { latitude: 45.49526438771434, longitude: -73.57800079512515 },
      { latitude: 45.495245821296564, longitude: -73.57791429388442 },
      { latitude: 45.495233600360024, longitude: -73.57791362333217 },
      { latitude: 45.495237360648474, longitude: -73.57787674295821 },
      { latitude: 45.49535347247235, longitude: -73.5777429049435 },
      { latitude: 45.4953551175951, longitude: -73.57769630156187 },
      { latitude: 45.495830189488665, longitude: -73.5772488091822 },
      { latitude: 45.496047619396265, longitude: -73.57770755025268 },
      { latitude: 45.495665, longitude: -73.578072 },
      { latitude: 45.495863, longitude: -73.578494 }
    ]
  },
  {
    id: BuildingId.MB,
    campusId: CampusId.SGW,
    displayName: "John Molson School of Buisness",
    address: "1450 Guy St, Montreal, Quebec H3H 0A1",
    departments: [
      {
        id: 1,
        title: "Accountancy",
        link: "http://www.concordia.ca/jmsb/about/departments/accountancy.html"
      },
      {
        id: 2,
        title: "Supply Chain & Business Technology Management",
        link:
          "http://www.concordia.ca/jmsb/about/departments/supply-chain-business-technology-management.html"
      },
      {
        id: 3,
        title: "Finance",
        link: "http://www.concordia.ca/jmsb/about/departments/finance.html"
      },
      {
        id: 4,
        title: "Management",
        link: "http://www.concordia.ca/jmsb/about/departments/management.html"
      },
      {
        id: 5,
        title: "Marketing",
        link: "http://www.concordia.ca/jmsb/about/departments/marketing.html"
      },
      {
        id: 6,
        title: "Goodman Institute of Investment Management",
        link: "http://www.concordia.ca/jmsb/mba-cfa.html"
      },
      {
        id: 7,
        title: "Executive MBA Program",
        link: "http://www.concordia.ca/jmsb/emba.html"
      },
      {
        id: 8,
        title: "Music",
        link: "http://www.concordia.ca/finearts/music.html"
      },
      {
        id: 9,
        title: "Theatre",
        link: "http://www.concordia.ca/finearts/theatre.html"
      },
      {
        id: 10,
        title: "Contemporary Dance",
        link: "http://www.concordia.ca/finearts/dance.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Career Management Services",
        link: "http://www.concordia.ca/jmsb/career.html"
      },
      {
        id: 2,
        title: "John Molson Executive Centre",
        link: "http://www.concordia.ca/jmsb/executive-education.html"
      },
      {
        id: 3,
        title: "Performing Arts Facilities",
        link: "http://www.concordia.ca/finearts/facilities/performing-arts.html"
      }
    ],
    location: { latitude: 45.49529042487793, longitude: -73.5789511712376 },
    boundingBox: [
      { latitude: 45.49511782033129, longitude: -73.57929809900001 },
      { latitude: 45.49524379011677, longitude: -73.57916667075828 },
      { latitude: 45.495026633071944, longitude: -73.57869996638969 },
      { latitude: 45.49523626954047, longitude: -73.57847600193695 },
      { latitude: 45.495597256069885, longitude: -73.57931821556762 },
      { latitude: 45.495296434122736, longitude: -73.57962398739532 }
    ]
  },
  {
    id: BuildingId.FG,
    campusId: CampusId.SGW,
    displayName: "Faubourg Sainte-Catherine Building",
    address: "1616 Saint-Catherine St W, Montreal, Quebec H3H 1L7",
    departments: [
      {
        id: 1,
        title: "Education",
        link: "http://www.concordia.ca/artsci/education.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Classrooms",
        link: ""
      }
    ],
    location: {
      latitude: 45.494213251967885,
      longitude: -73.57831280549206
    },
    boundingBox: [
      { latitude: 45.49445139862351, longitude: -73.57761614190046 },
      { latitude: 45.49438676772876, longitude: -73.57769157902901 },
      { latitude: 45.49442625133874, longitude: -73.57776064591114 },
      { latitude: 45.494392408246156, longitude: -73.577802555427 },
      { latitude: 45.49437078625973, longitude: -73.57776701615755 },
      { latitude: 45.49418481876913, longitude: -73.57798681639778 },
      { latitude: 45.49420150535799, longitude: -73.57801598542082 },
      { latitude: 45.49411113211657, longitude: -73.57812461776565 },
      { latitude: 45.49410290632074, longitude: -73.57811321837734 },
      { latitude: 45.49391066810066, longitude: -73.57834082316926 },
      { latitude: 45.49392218425376, longitude: -73.5783626161175 },
      { latitude: 45.493890221047465, longitude: -73.5783988259392 },
      { latitude: 45.49388129014833, longitude: -73.57838306796124 },
      { latitude: 45.493834285392765, longitude: -73.57843939435055 },
      { latitude: 45.49384744672829, longitude: -73.57846386950781 },
      { latitude: 45.49362465556059, longitude: -73.57872709723696 },
      { latitude: 45.49382143315922, longitude: -73.57906725646923 },
      { latitude: 45.49429327301813, longitude: -73.57850923223445 },
      { latitude: 45.49429961861071, longitude: -73.57852197272727 },
      { latitude: 45.494368244973636, longitude: -73.5784411711807 },
      { latitude: 45.49436189938879, longitude: -73.57842843068788 },
      { latitude: 45.494694338167676, longitude: -73.57803821563283 }
    ]
  },
  {
    id: BuildingId.GS,
    campusId: CampusId.SGW,
    displayName: "GS Building",
    address: "1538 Sherbrooke St W, Montreal, Quebec H3G 1L5",
    departments: [],
    services: [],
    location: {
      latitude: 45.49657824810454,
      longitude: -73.58119512804483
    },
    boundingBox: [
      { latitude: 45.49657694046067, longitude: -73.58143535844584 },
      { latitude: 45.49662535300043, longitude: -73.58145279280444 },
      { latitude: 45.49678460001528, longitude: -73.58130030988744 },
      { latitude: 45.49671016803877, longitude: -73.5811287437217 },
      { latitude: 45.49665205603663, longitude: -73.58117062809069 },
      { latitude: 45.49651742476055, longitude: -73.58080300057769 },
      { latitude: 45.496475592488274, longitude: -73.58084423954129 },
      { latitude: 45.49648640307848, longitude: -73.5808730732882 },
      { latitude: 45.49641517082438, longitude: -73.58094149396186 }
    ]
  },
  {
    id: BuildingId.LD,
    campusId: CampusId.SGW,
    displayName: "LD Building",
    address: "2050 Mackay, 2070 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "CSU Daycare & Nursery",
        link: "https://www.csudaycarenursery.com/"
      }
    ],
    location: {
      latitude: 45.496860941595955,
      longitude: -73.57956955010302
    },
    boundingBox: [
      { latitude: 45.49667544908977, longitude: -73.57973289017177 },
      { latitude: 45.49669871527483, longitude: -73.57978284631467 },
      { latitude: 45.496931444925195, longitude: -73.57955278629667 },
      { latitude: 45.496889847971616, longitude: -73.57946997309334 },
      { latitude: 45.49678691300525, longitude: -73.57957223231203 },
      { latitude: 45.496801483719686, longitude: -73.57960542464859 }
    ]
  },
  {
    id: BuildingId.TD,
    campusId: CampusId.SGW,
    displayName: "Toronto-Dominion Building",
    address: "2050 Mackay, 2070 Mackay St, Montreal, QC H3G 2J1",
    location: {
      latitude: 45.49468411629242,
      longitude: -73.57875151167761
    },
    departments: [],
    services: [
      {
        id: 1,
        title: "CUSP",
        link: "http://www.concordia.ca/students/parenthood.html"
      }
    ],

    boundingBox: [
      { latitude: 45.49454232015587, longitude: -73.57861454959261 },
      { latitude: 45.49461000614049, longitude: -73.5785344185983 },
      { latitude: 45.49480086963056, longitude: -73.57886535821028 },
      { latitude: 45.49473271383509, longitude: -73.5789454892046 }
    ]
  },
  {
    id: BuildingId.VA,
    campusId: CampusId.SGW,
    displayName: "Visual Arts Building",
    address: "1395 René-Lévesque Blvd W, Montreal, QC H3G 2M5",
    departments: [
      {
        id: 1,
        title: "Studio Arts",
        link: "http://www.concordia.ca/finearts/studio-arts.html"
      },
      {
        id: 2,
        title: "Art History",
        link: "http://www.concordia.ca/finearts/art-history.html"
      },
      {
        id: 3,
        title: "Art Education",
        link: "http://www.concordia.ca/finearts/art-education.html"
      },
      {
        id: 4,
        title: "Creative Arts Therapies",
        link: "http://www.concordia.ca/finearts/creative-arts-therapies.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "VAV Art Gallery",
        link: "http://vavgallery.concordia.ca/"
      },
      {
        id: 2,
        title: "Art Supply Store",
        link:
          "http://www.concordia.ca/finearts/facilities/art-supply-store.html"
      }
    ],
    location: {
      latitude: 45.49567046189002,
      longitude: -73.57395159813642
    },
    boundingBox: [
      { latitude: 45.496192, longitude: -73.573781 },
      { latitude: 45.495667, longitude: -73.574304 },
      { latitude: 45.49541, longitude: -73.573748 },
      { latitude: 45.495665, longitude: -73.573482 },
      { latitude: 45.495813, longitude: -73.573807 },
      { latitude: 45.496079, longitude: -73.573544 }
    ]
  },
  {
    id: BuildingId.SB,
    campusId: CampusId.SGW,
    displayName: "Samuel Bronfman Building",
    address: "1590 Docteur Penfield, Montreal, QC",
    departments: [],
    services: [
      {
        id: 1,
        title: "Arts and Science Research Groups",
        link: "http://www.concordia.ca/artsci/research/centres.html"
      }
    ],
    location: {
      latitude: 45.496543304992564,
      longitude: -73.5859904898029
    },
    boundingBox: [
      { latitude: 45.496436802590246, longitude: -73.58620662612847 },
      { latitude: 45.49650134091714, longitude: -73.58620724019713 },
      { latitude: 45.49650604117184, longitude: -73.5861358263821 },
      { latitude: 45.496520376946314, longitude: -73.58613482055372 },
      { latitude: 45.49651826183226, longitude: -73.58616667178578 },
      { latitude: 45.496537062843124, longitude: -73.5862105929584 },
      { latitude: 45.49668170582831, longitude: -73.58608596656673 },
      { latitude: 45.49665232932157, longitude: -73.58601421747558 },
      { latitude: 45.496657969612045, longitude: -73.58600717667692 },
      { latitude: 45.496582295667686, longitude: -73.58582780394904 },
      { latitude: 45.49657313018306, longitude: -73.58583551529996 },
      { latitude: 45.496553998818726, longitude: -73.58579253193895 },
      { latitude: 45.4965100514593, longitude: -73.58579253193895 },
      { latitude: 45.49650981644659, longitude: -73.58577912089387 },
      { latitude: 45.4964919554778, longitude: -73.58573922303478 },
      { latitude: 45.496466339078445, longitude: -73.58573654082576 }
    ]
  },
  {
    id: BuildingId.Q,
    campusId: CampusId.SGW,
    displayName: "Q annex",
    address: "2012 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [],
    location: {
      latitude: 45.49662551352863,
      longitude: -73.57910668548298
    },
    boundingBox: [
      { latitude: 45.49655514271302, longitude: -73.57912355345123 },
      { latitude: 45.49658616435723, longitude: -73.5791832326018 },
      { latitude: 45.496682989379224, longitude: -73.57908130865924 },
      { latitude: 45.49665102773989, longitude: -73.57902162950866 }
    ]
  },
  {
    id: BuildingId.P,
    campusId: CampusId.SGW,
    displayName: "P annex",
    address: "2020 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [],
    location: {
      latitude: 45.49666311547241,
      longitude: -73.57917709346962
    },
    boundingBox: [
      { latitude: 45.49668439945111, longitude: -73.57908130865924 },
      { latitude: 45.49658804445633, longitude: -73.57918390315406 },
      { latitude: 45.49662987664503, longitude: -73.5792730866038 },
      { latitude: 45.49673093180422, longitude: -73.5791718332135 }
    ]
  },
  {
    id: BuildingId.T,
    campusId: CampusId.SGW,
    displayName: "T annex",
    address: "2030 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "Graduate Students Association",
        link: "https://gsaconcordia.ca/"
      }
    ],
    location: {
      latitude: 45.496690617889044,
      longitude: -73.57926428318024
    },
    boundingBox: [
      { latitude: 45.49671824116626, longitude: -73.57918725591533 },
      { latitude: 45.496633636840265, longitude: -73.57927107494704 },
      { latitude: 45.496667948610025, longitude: -73.57934617679946 },
      { latitude: 45.49675678309487, longitude: -73.57925967555873 }
    ]
  },
  {
    id: BuildingId.RR,
    campusId: CampusId.SGW,
    displayName: "RR annex",
    address: "2040 Mackay St, Montreal, QC H3G 2J1",
    departments: [
      {
        id: 1,
        title: "Liberal Arts College",
        link: "http://www.concordia.ca/artsci/liberal-arts-college.html"
      }
    ],
    services: [],
    location: {
      latitude: 45.49672515862477,
      longitude: -73.57935478981686
    },
    boundingBox: [
      { latitude: 45.496756323648604, longitude: -73.57925709579087 },
      { latitude: 45.496759848823714, longitude: -73.57925307247734 },
      { latitude: 45.49680614610299, longitude: -73.57933186236716 },
      { latitude: 45.49665120661304, longitude: -73.57948126357395 },
      { latitude: 45.4966126646122, longitude: -73.57940012675125 }
    ]
  },
  {
    id: BuildingId.R,
    campusId: CampusId.SGW,
    displayName: "R annex",
    address: "2050 Mackay St, Montreal, QC H3G 2J1",
    departments: [
      {
        id: 1,
        title: "Religion and Cultures",
        link: "http://www.concordia.ca/artsci/religions-cultures.html"
      }
    ],
    services: [],
    location: {
      latitude: 45.49678180245391,
      longitude: -73.57940711081028
    },
    boundingBox: [
      { latitude: 45.496713758698185, longitude: -73.57942461253974 },
      { latitude: 45.496804943225605, longitude: -73.5793280530152 },
      { latitude: 45.4968463052306, longitude: -73.57939980210635 },
      { latitude: 45.49674337018465, longitude: -73.5794903266606 }
    ]
  },
  {
    id: BuildingId.FA,
    campusId: CampusId.SGW,
    displayName: "FA annex",
    address: "2060 Mackay St, Montreal, QC H3G 2J1",
    departments: [
      {
        id: 1,
        title: "Religion and Cultures",
        link: "http://www.concordia.ca/artsci/religions-cultures.html"
      }
    ],
    services: [],
    location: {
      latitude: 45.496813771844614,
      longitude: -73.57949044115169
    },
    boundingBox: [
      { latitude: 45.49673410732826, longitude: -73.57950150438484 },
      { latitude: 45.49677476435048, longitude: -73.5795846528643 },
      { latitude: 45.49687181964071, longitude: -73.57948708839042 },
      { latitude: 45.4968323377454, longitude: -73.57940930432899 }
    ]
  },
  {
    id: BuildingId.X,
    campusId: CampusId.SGW,
    displayName: "X annex",
    address: "2080 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "Concordia International",
        link: "http://www.concordia.ca/offices/ci.html"
      }
    ],
    location: {
      latitude: 45.49689808038526,
      longitude: -73.57968767736001
    },
    boundingBox: [
      { latitude: 45.49683533238937, longitude: -73.57971349362178 },
      { latitude: 45.49692839680764, longitude: -73.57962162796302 },
      { latitude: 45.49694813772508, longitude: -73.57966454330726 },
      { latitude: 45.496856013384495, longitude: -73.5797560736899 }
    ]
  },
  {
    id: BuildingId.Z,
    campusId: CampusId.SGW,
    displayName: "Z annex",
    address: "2090 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "Multi-Faith and Spirituality Centre",
        link: "http://www.concordia.ca/students/spirituality.html"
      },

      {
        id: 2,
        title: "Sustainable Concordia",
        link: "http://sustainableconcordia.ca/"
      }
    ],
    location: { latitude: 45.4969250583817, longitude: -73.57974457604605 },
    boundingBox: [
      { latitude: 45.496851, longitude: -73.57976 },
      { latitude: 45.496889, longitude: -73.579836 },
      { latitude: 45.496985, longitude: -73.579742 },
      { latitude: 45.496948, longitude: -73.579671 }
    ]
  },
  {
    id: BuildingId.V,
    campusId: CampusId.SGW,
    displayName: "V annex",
    address: "2110 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "Centre 2110",
        link: "https://genderadvocacy.org/"
      }
    ],
    location: {
      latitude: 45.49703622353465,
      longitude: -73.57994890777009
    },
    boundingBox: [
      { latitude: 45.49698358115512, longitude: -73.58001797465222 },
      { latitude: 45.49696478029337, longitude: -73.57997841206925 },
      { latitude: 45.497068654976104, longitude: -73.57987749395507 },
      { latitude: 45.4970876908135, longitude: -73.57991638598578 }
    ]
  },
  {
    id: BuildingId.S,
    campusId: CampusId.SGW,
    displayName: "S annex",
    address: "2145 Mackay St, Montreal, QC H3G 2J1",
    departments: [
      {
        id: 1,
        title: "Department of Philosophy",
        link: "http://www.concordia.ca/artsci/philosophy.html"
      }
    ],
    services: [],
    location: { latitude: 45.4974195251975, longitude: -73.57983290157836 },
    boundingBox: [
      { latitude: 45.49736664816716, longitude: -73.57993616662543 },
      { latitude: 45.497325756563, longitude: -73.5798533534221 },
      { latitude: 45.49742563542892, longitude: -73.57975277058404 },
      { latitude: 45.49743480077479, longitude: -73.57977188132327 },
      { latitude: 45.497457831637334, longitude: -73.57975142947953 },
      { latitude: 45.497489087792864, longitude: -73.57981379083913 }
    ]
  },
  {
    id: BuildingId.MI,
    campusId: CampusId.SGW,
    displayName: "MI Annex",
    address: "2130 Bishop St, Montreal, Quebec H3G 1M8",
    departments: [],
    services: [],
    location: {
      latitude: 45.49774741303151,
      longitude: -73.57925595037777
    },
    boundingBox: [
      { latitude: 45.49764635969653, longitude: -73.57940146021683 },
      { latitude: 45.49762238887882, longitude: -73.57935351573069 },
      { latitude: 45.49769383128575, longitude: -73.5792837782963 },
      { latitude: 45.49768114086482, longitude: -73.57925896786291 },
      { latitude: 45.49777749398921, longitude: -73.57916542582352 },
      { latitude: 45.4978115700547, longitude: -73.57923348687727 }
    ]
  },
  {
    id: BuildingId.MU,
    campusId: CampusId.SGW,
    displayName: "MU Annex",
    address: "2170 Bishop St, Montreal, QC H3G 2E9 ",
    departments: [],
    services: [
      {
        id: 1,
        title: "Simone de Beauvoir Institute",
        link: "http://www.concordia.ca/artsci/sdbi.html"
      }
    ],
    location: {
      latitude: 45.49786402689169,
      longitude: -73.57957963486078
    },
    boundingBox: [
      { latitude: 45.49792714005294, longitude: -73.57946173647333 },
      { latitude: 45.497750414665965, longitude: -73.5796347389548 },
      { latitude: 45.497786135799544, longitude: -73.57970447638918 },
      { latitude: 45.49796944126014, longitude: -73.579537508878 }
    ]
  },
  {
    id: BuildingId.D,
    campusId: CampusId.SGW,
    displayName: "D annex",
    address: "2140 Bishop St, Montreal, QC H3G 2E9",
    departments: [
      {
        id: 1,
        title: "Department of Theological Studies",
        link: "http://www.concordia.ca/artsci/theology.html"
      }
    ],
    services: [],
    location: {
      latitude: 45.49778748649143,
      longitude: -73.57932072327488
    },
    boundingBox: [
      { latitude: 45.497707427688056, longitude: -73.57934124180272 },
      { latitude: 45.49774056376567, longitude: -73.57941097923711 },
      { latitude: 45.49784929339781, longitude: -73.5793110002672 },
      { latitude: 45.49781075221699, longitude: -73.57923288092964 }
    ]
  },
  {
    id: BuildingId.B,
    campusId: CampusId.SGW,
    displayName: "B annex",
    address: "2160 Bishop St, Montreal, QC H3G 2E9",
    services: [
      {
        id: 1,
        title: "Engineering and Computer Science Association",
        link: "https://ecaconcordia.ca/"
      }
    ],
    departments: [],
    location: { latitude: 45.49783475527905, longitude: -73.5794920119643 },
    boundingBox: [
      { latitude: 45.497703209954416, longitude: -73.57955668952776 },
      { latitude: 45.49773916612552, longitude: -73.5796344735892 },
      { latitude: 45.49791835672028, longitude: -73.5794601358713 },
      { latitude: 45.49788287067755, longitude: -73.57938436346663 }
    ]
  },
  {
    id: BuildingId.LS,
    campusId: CampusId.SGW,
    displayName: "Learning Square Building",
    address: "1535 Boulevard de Maisonneuve O, Montréal, QC H3G 1M9",
    services: [
      {
        id: 1,
        title: "IT Services - 1st floor",
        link:
          "http://www.concordia.ca/it/services/classroom-support/sir-george-williamscampus/SGW-LS-1.html"
      },

      {
        id: 2,
        title: "IT Services - 2nd floor",
        link:
          "http://www.concordia.ca/it/services/classroom-support/sir-george-williamscampus/SGW-LS-2.html"
      }
    ],
    departments: [],
    location: {
      latitude: 45.49609534540999,
      longitude: -73.57967431042336
    },
    boundingBox: [
      { latitude: 45.496114, longitude: -73.579481 },
      { latitude: 45.495955, longitude: -73.579624 },
      { latitude: 45.496056, longitude: -73.579864 },
      { latitude: 45.496191, longitude: -73.579744 },
      { latitude: 45.496157, longitude: -73.579667 },
      { latitude: 45.496184, longitude: -73.579642 },
      { latitude: 45.496113, longitude: -73.579483 }
    ]
  },
  {
    id: BuildingId.SP,
    campusId: CampusId.Loyola,
    displayName: "Richard J. Renaud Science Complex",
    address: "3475 Rue West Broadway, Montreal, QC H4B 2A7",
    departments: [
      {
        id: 1,
        title: "Biology",
        link: "http://www.concordia.ca/artsci/biology.html"
      },
      {
        id: 2,
        title: "Chemistry and Biochemistry",
        link: "http://www.concordia.ca/artsci/chemistry.html"
      },
      {
        id: 3,
        title: "Health, Kinesiology & Applied Physiology",
        link:
          "http://www.concordia.ca/artsci/health-kinesiology-physiology.html"
      },
      {
        id: 4,
        title: "Physics",
        link: "http://www.concordia.ca/artsci/physics.html"
      },
      {
        id: 5,
        title: "Psychology",
        link: "https://www.concordia.ca/artsci/psychology.html"
      },
      {
        id: 6,
        title: "Centre for Biological Applications of Mass Spectrometry",
        link: "http://www.concordia.ca/research/mass-spec.html"
      },
      {
        id: 7,
        title: "Centre for NanoScience Research",
        link: "http://www.concordia.ca/research/nanoscience.html"
      },
      {
        id: 8,
        title: "Center for Studies in Behavioral Neurobiology",
        link: "http://www.concordia.ca/research/neuroscience.html"
      },
      {
        id: 9,
        title: "Centre for Research in Molecular Modeling",
        link: "http://www.concordia.ca/research/molecular-modeling.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Science College",
        link: "http://www.concordia.ca/artsci/science-college.html"
      },
      {
        id: 2,
        title: "Science Technical Centre",
        link: "http://www.concordia.ca/artsci/students/technical-centre.html"
      },
      {
        id: 3,
        title: "Animal Care Facilities",
        link: ""
      },
      {
        id: 4,
        title: "Security Office",
        link: ""
      },
      {
        id: 5,
        title: "Cafe",
        link: ""
      }
    ],
    location: {
      latitude: 45.45758246587577,
      longitude: -73.64167110725224
    },
    boundingBox: [
      { latitude: 45.45698150789547, longitude: -73.64083076197447 },
      { latitude: 45.45702101772243, longitude: -73.64093536812605 },
      { latitude: 45.45699561855114, longitude: -73.64096084911169 },
      { latitude: 45.457017106984964, longitude: -73.64101283910982 },
      { latitude: 45.45704062472758, longitude: -73.64099473419897 },
      { latitude: 45.4571582132936, longitude: -73.64129547688476 },
      { latitude: 45.45714810068656, longitude: -73.64130318823568 },
      { latitude: 45.45717796814861, longitude: -73.64138231340162 },
      { latitude: 45.457167461781054, longitude: -73.64139135814725 },
      { latitude: 45.457184093157494, longitude: -73.64143316415664 },
      { latitude: 45.45720808118384, longitude: -73.6414164003503 },
      { latitude: 45.457439297925404, longitude: -73.64200335335009 },
      { latitude: 45.45763930760126, longitude: -73.64184844591702 },
      { latitude: 45.45767270242441, longitude: -73.64192622997845 },
      { latitude: 45.45832463847229, longitude: -73.64141451278216 },
      { latitude: 45.45827478198157, longitude: -73.64128308454043 },
      { latitude: 45.458208124668005, longitude: -73.64133647470348 },
      { latitude: 45.45817990396, longitude: -73.64126271395557 },
      { latitude: 45.45825612773927, longitude: -73.64120078449221 },
      { latitude: 45.458194347307135, longitude: -73.64103850023358 },
      { latitude: 45.458339448593314, longitude: -73.6409214888653 },
      { latitude: 45.458316166564465, longitude: -73.64086080388634 },
      { latitude: 45.45799822317311, longitude: -73.64111356299453 },
      { latitude: 45.4579773269101, longitude: -73.6410636201382 },
      { latitude: 45.45789266439714, longitude: -73.64113168119195 },
      { latitude: 45.45790653965101, longitude: -73.64116889684203 },
      { latitude: 45.45752432666299, longitude: -73.64147029091669 },
      { latitude: 45.45724875063997, longitude: -73.64076394112611 },
      { latitude: 45.45724592852179, longitude: -73.640766288059 },
      { latitude: 45.4572014801418, longitude: -73.64065497638488 }
    ]
  },
  {
    id: BuildingId.TA,
    campusId: CampusId.Loyola,
    displayName: "Terrebonne Building",
    address: "7079 Terrebonne, Montreal, QC H4B 1E1",
    departments: [],
    services: [],
    location: {
      latitude: 45.46000780768472,
      longitude: -73.64087629020517
    },
    boundingBox: [
      { latitude: 45.460082, longitude: -73.640892 },
      { latitude: 45.459977, longitude: -73.640967 },
      { latitude: 45.45994, longitude: -73.640865 },
      { latitude: 45.460041, longitude: -73.640774 }
    ]
  },
  {
    id: BuildingId.CJ,
    campusId: CampusId.Loyola,
    displayName: "Communications & Journalism Building",
    address: "Notre-Dame-de-Grâce, Montreal, QC H4B 1R6",
    departments: [
      {
        id: 1,
        title: "Communcation Studies",
        link: "http://www.concordia.ca/artsci/coms.html"
      },
      {
        id: 2,
        title: "Journalism",
        link: "https://www.concordia.ca/artsci/journalism.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Campus Retail Stores",
        link: "https://stores.concordia.ca/"
      }
    ],
    location: {
      latitude: 45.45753745751893,
      longitude: -73.64035934741423
    },
    boundingBox: [
      { latitude: 45.45717459096273, longitude: -73.64039358679253 },
      { latitude: 45.4574064756653, longitude: -73.6402075067537 },
      { latitude: 45.45735944047541, longitude: -73.64007607851197 },
      { latitude: 45.457310523836306, longitude: -73.64005193863083 },
      { latitude: 45.457305820311056, longitude: -73.64007607851197 },
      { latitude: 45.45720986831077, longitude: -73.64001438770462 },
      { latitude: 45.45720986831077, longitude: -73.63998622450997 },
      { latitude: 45.45722209749637, longitude: -73.63991246376206 },
      { latitude: 45.45722776405839, longitude: -73.6398788088492 },
      { latitude: 45.457259142029194, longitude: -73.63982504197308 },
      { latitude: 45.457278722377346, longitude: -73.63980158559434 },
      { latitude: 45.45732928527728, longitude: -73.63977006963842 },
      { latitude: 45.45738971207491, longitude: -73.63976202780387 },
      { latitude: 45.45742954201785, longitude: -73.6397710802593 },
      { latitude: 45.457480339958074, longitude: -73.63982036584994 },
      { latitude: 45.4574631721408, longitude: -73.63995414102456 },
      { latitude: 45.45744647466967, longitude: -73.63994645137119 },
      { latitude: 45.457435891762884, longitude: -73.64002758819389 },
      { latitude: 45.45748461055312, longitude: -73.64014947789609 },
      { latitude: 45.45762207844032, longitude: -73.64004506080833 },
      { latitude: 45.45772555532435, longitude: -73.6403142875382 },
      { latitude: 45.457754481782935, longitude: -73.64029148876158 },
      { latitude: 45.457830619270254, longitude: -73.6404852780335 },
      { latitude: 45.457649993955485, longitude: -73.64063207330305 },
      { latitude: 45.45759613889239, longitude: -73.64050232144196 },
      { latitude: 45.457333342167544, longitude: -73.64071711930137 },
      { latitude: 45.45730300443521, longitude: -73.64064000579219 },
      { latitude: 45.457278844731654, longitude: -73.64065825111975 }
    ]
  },
  {
    id: BuildingId.CC,
    campusId: CampusId.Loyola,
    displayName: "Central Building",
    address: "7141 Rue Sherbrooke O, Montréal, QC H4B 2B5",
    departments: [],
    services: [
      {
        id: 1,
        title: "Concordia Student Union",
        link: "https://www.csu.qc.ca/"
      },
      {
        id: 2,
        title: "Loyola College for Diversity and Sustainability and Loyola",
        link:
          "http://www.concordia.ca/artsci/loyola-college-diversity-sustainability.html"
      }
    ],
    location: {
      latitude: 45.458331403759495,
      longitude: -73.64041030938552
    },
    boundingBox: [
      { latitude: 45.45837846246661, longitude: -73.6407936233295 },
      { latitude: 45.45838881002474, longitude: -73.64079261750112 },
      { latitude: 45.45852647207955, longitude: -73.64068398803602 },
      { latitude: 45.45843781441095, longitude: -73.64045097848826 },
      { latitude: 45.458444164042426, longitude: -73.64044494351798 },
      { latitude: 45.458330268684186, longitude: -73.64014136652698 },
      { latitude: 45.45832086180347, longitude: -73.6401417018031 },
      { latitude: 45.45822843911688, longitude: -73.63990600268592 },
      { latitude: 45.458220443253914, longitude: -73.63990432630528 },
      { latitude: 45.458172604740845, longitude: -73.63994087140311 },
      { latitude: 45.45807972415427, longitude: -73.64001327295621 },
      { latitude: 45.45817209318592, longitude: -73.64025567759593 },
      { latitude: 45.45816621386914, longitude: -73.64026104201396 },
      { latitude: 45.45828027250493, longitude: -73.64056245525201 },
      { latitude: 45.458290384908956, longitude: -73.64056346108039 }
    ]
  },
  {
    id: BuildingId.AD,
    campusId: CampusId.Loyola,
    displayName: "Administration Building",
    address: "7141 Rue Sherbrooke O, Montréal, QC H4B 2B5",
    departments: [
      {
        id: 1,
        title: "Faculty of Arts & Science",
        link: "http://www.concordia.ca/artsci.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Welcome Crew Office",
        link:
          "http://www.concordia.ca/content/concordia/en/students/success/mentoring.html"
      },
      {
        id: 2,
        title: "Centre for Teaching & Learning",
        link: "http://www.concordia.ca/content/concordia/en/offices/ctl.html"
      },
      {
        id: 3,
        title: "Loyola International College",
        link:
          "http://www.concordia.ca/content/concordia/en/artsci/loyola-college-diversity-sustainability.html"
      },
      {
        id: 4,
        title: "Provost and VP, Academic",
        link: "http://www.concordia.ca/content/concordia/en/provost.html"
      },
      {
        id: 5,
        title: "Dean of Students",
        link:
          "http://www.concordia.ca/content/concordia/en/offices/dean-students.html"
      },
      {
        id: 6,
        title: "Concordia Multi-Faith and Spirituality Centre",
        link:
          "http://www.concordia.ca/content/concordia/en/students/spirituality"
      },
      {
        id: 7,
        title: "Advocacy & Support Services",
        link:
          "http://www.concordia.ca/content/concordia/en/offices/advocacy.html"
      },
      {
        id: 8,
        title: "Access Centre for Students with Disabilities",
        link: "http://www.concordia.ca/content/concordia/en/offices/acsd.html"
      },
      {
        id: 9,
        title: "Counselling and Development",
        link: "http://www.concordia.ca/content/concordia/en/offices/cdev.html"
      },
      {
        id: 10,
        title: "Health Services",
        link:
          "http://www.concordia.ca/content/concordia/en/students/health.html"
      }
    ],
    location: {
      latitude: 45.45810375680996,
      longitude: -73.63979876573012
    },
    boundingBox: [
      { latitude: 45.457798967810064, longitude: -73.63982640602099 },
      { latitude: 45.45782083900776, longitude: -73.63980930693852 },
      { latitude: 45.45782342592305, longitude: -73.6397965664457 },
      { latitude: 45.45784953024349, longitude: -73.63977577932583 },
      { latitude: 45.457861524116396, longitude: -73.6397791320871 },
      { latitude: 45.45787539937795, longitude: -73.63976739742266 },
      { latitude: 45.45790134433533, longitude: -73.6398090390331 },
      { latitude: 45.45790604781092, longitude: -73.63980434516732 },
      { latitude: 45.45792415618814, longitude: -73.63982882032458 },
      { latitude: 45.45802285781523, longitude: -73.63975364056668 },
      { latitude: 45.458022387468645, longitude: -73.63974291173062 },
      { latitude: 45.45800051634914, longitude: -73.63968256202779 },
      { latitude: 45.45800310325619, longitude: -73.63967987981877 },
      { latitude: 45.45798287834333, longitude: -73.63962355342946 },
      { latitude: 45.45804016157582, longitude: -73.63958072648335 },
      { latitude: 45.45806273819933, longitude: -73.63963403538752 },
      { latitude: 45.45809390818967, longitude: -73.63968929552539 },
      { latitude: 45.458106607529366, longitude: -73.63968963080151 },
      { latitude: 45.458202321048105, longitude: -73.6396151166356 },
      { latitude: 45.45819032724769, longitude: -73.63958125374678 },
      { latitude: 45.45820043966783, longitude: -73.63957387767199 },
      { latitude: 45.458183507242374, longitude: -73.63952593318585 },
      { latitude: 45.45820890587862, longitude: -73.63950682244662 },
      { latitude: 45.45821078725862, longitude: -73.63949374667767 },
      { latitude: 45.4582373617445, longitude: -73.63947396538619 },
      { latitude: 45.458247920754154, longitude: -73.63947657124241 },
      { latitude: 45.45825826833626, longitude: -73.63946785406311 },
      { latitude: 45.45827096763896, longitude: -73.63946852461537 },
      { latitude: 45.458382504321506, longitude: -73.63976605715463 },
      { latitude: 45.45831853756086, longitude: -73.6398156780214 },
      { latitude: 45.458309365850276, longitude: -73.63982204826782 },
      { latitude: 45.45829807758903, longitude: -73.63982338937232 },
      { latitude: 45.458278793470846, longitude: -73.63977276267717 },
      { latitude: 45.458165675522814, longitude: -73.6398606050224 },
      { latitude: 45.45816732173157, longitude: -73.63986898692558 },
      { latitude: 45.45815062446898, longitude: -73.63988407435129 },
      { latitude: 45.45811111543349, longitude: -73.63991357865045 },
      { latitude: 45.458102884380956, longitude: -73.63992028417299 },
      { latitude: 45.458089714694374, longitude: -73.63991994889686 },
      { latitude: 45.45797471497923, longitude: -73.64000712068984 },
      { latitude: 45.45799705645555, longitude: -73.64006814094493 },
      { latitude: 45.45793732238327, longitude: -73.64011474432657 },
      { latitude: 45.45793426512592, longitude: -73.6401164207072 },
      { latitude: 45.457923447136956, longitude: -73.64012346150587 },
      { latitude: 45.45791121810349, longitude: -73.64012413205812 }
    ]
  },
  {
    id: BuildingId.PS,
    campusId: CampusId.Loyola,
    displayName: "Physical Services building",
    address: "7141 Rue Sherbrooke O, Montréal, QC H4B 2B5",
    departments: [],
    services: [
      {
        id: 1,
        title: "Environmental Health and Safety",
        link: "http://www.concordia.ca/content/concordia/en/campus-life/safety"
      },
      {
        id: 2,
        title: "Facilities Management",
        link: "http://www.concordia.ca/content/concordia/en/offices/facilities"
      }
    ],
    location: {
      latitude: 45.45967754256575,
      longitude: -73.63982368883055
    },
    boundingBox: [
      { latitude: 45.459286134448504, longitude: -73.63945527416735 },
      { latitude: 45.45957970516812, longitude: -73.63922716977262 },
      { latitude: 45.45962720883916, longitude: -73.63934317531252 },
      { latitude: 45.45966788337612, longitude: -73.63931581811165 },
      { latitude: 45.45998667713779, longitude: -73.64013478615315 },
      { latitude: 45.45986392082716, longitude: -73.64022832819255 },
      { latitude: 45.45985286804278, longitude: -73.64020284720691 },
      { latitude: 45.45970601643625, longitude: -73.64031341350746 },
      { latitude: 45.45963837834531, longitude: -73.64013914619532 },
      { latitude: 45.45960823874637, longitude: -73.64015853764441 },
      { latitude: 45.45941306539998, longitude: -73.63965570433571 },
      { latitude: 45.45944363716442, longitude: -73.63963089390232 },
      { latitude: 45.45940443495661, longitude: -73.63952956323371 },
      { latitude: 45.4593331791535, longitude: -73.63957985465274 }
    ]
  },
  {
    id: BuildingId.RA,
    campusId: CampusId.Loyola,
    displayName: "Recreation and Athletic Complex",
    address: "7200 Sherbrooke St W, Montreal, QC, H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Ed Meagher Arena",
        link:
          "http://www.concordia.ca/content/concordia/en/campus-life/recreation/facilities/arena.html"
      },
      {
        id: 2,
        title: "Gymnasium",
        link:
          "http://www.concordia.ca/content/concordia/en/campus-life/recreation/facilities/athletic-complex.html"
      }
    ],
    location: {
      latitude: 45.456705108736394,
      longitude: -73.63754686217693
    },
    boundingBox: [
      { latitude: 45.45672955099704, longitude: -73.63710111804322 },
      { latitude: 45.457032460316356, longitude: -73.6378709120305 },
      { latitude: 45.45696661060274, longitude: -73.6379258973153 },
      { latitude: 45.45701082399037, longitude: -73.63805598445252 },
      { latitude: 45.45684714021175, longitude: -73.63818875379876 },
      { latitude: 45.456793519560236, longitude: -73.63806671328858 },
      { latitude: 45.456692863111876, longitude: -73.6381431562455 },
      { latitude: 45.45638995196833, longitude: -73.6373666567357 }
    ]
  },
  {
    id: BuildingId.PC,
    campusId: CampusId.Loyola,
    displayName: "PERFORM Centre",
    address: "7200 Sherbrooke St W Montreal, QC H4B 1R2",
    departments: [],
    services: [
      {
        id: 1,
        title: "PERFORM Centre",
        link:
          "http://www.concordia.ca/content/concordia/en/research/perform.html"
      }
    ],
    location: {
      latitude: 45.45699484824472,
      longitude: -73.63732692103771
    },
    boundingBox: [
      { latitude: 45.45668234663006, longitude: -73.63698552999276 },
      { latitude: 45.45702100318805, longitude: -73.637839813564 },
      { latitude: 45.457286530811096, longitude: -73.63762780116437 },
      { latitude: 45.45694975726986, longitude: -73.63677754090665 }
    ]
  },
  {
    id: BuildingId.GE,
    campusId: CampusId.Loyola,
    displayName: "Centre for Structural and Functional Genomics",
    address: "7141 Rue Sherbrooke Ouest, Montréal, H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Centre for Structural and Functional Genomics",
        link: "http://www.concordia.ca/content/concordia/en/research/genomics"
      }
    ],
    location: { latitude: 45.45701687615203, longitude: -73.6404512594209 },
    boundingBox: [
      { latitude: 45.45687108538196, longitude: -73.64062720780782 },
      { latitude: 45.45689366247353, longitude: -73.64060977344923 },
      { latitude: 45.45679770977193, longitude: -73.64034825807028 },
      { latitude: 45.457039950976636, longitude: -73.64016422424295 },
      { latitude: 45.457142017867206, longitude: -73.64044204482308 },
      { latitude: 45.45713072937225, longitude: -73.64045143255463 },
      { latitude: 45.457174001923924, longitude: -73.64056978502741 },
      { latitude: 45.456945143117935, longitude: -73.64074044057598 },
      { latitude: 45.45691762731151, longitude: -73.64067103841772 },
      { latitude: 45.45689246327163, longitude: -73.64068813750019 }
    ]
  },
  {
    id: BuildingId.VL,
    campusId: CampusId.Loyola,
    displayName: "Vanier Library Building",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Library",
        link: "https://library.concordia.ca/"
      }
    ],
    location: {
      latitude: 45.45898581709969,
      longitude: -73.63853424124234
    },
    boundingBox: [
      { latitude: 45.45885292987871, longitude: -73.6390181589777 },
      { latitude: 45.458836232819095, longitude: -73.63897490835734 },
      { latitude: 45.458827531532556, longitude: -73.63898127860375 },
      { latitude: 45.45863022963669, longitude: -73.63846678055002 },
      { latitude: 45.458716537234956, longitude: -73.63839804894401 },
      { latitude: 45.4587045435439, longitude: -73.63836318022682 },
      { latitude: 45.45886536382325, longitude: -73.63823565255335 },
      { latitude: 45.45885219431478, longitude: -73.63820279549292 },
      { latitude: 45.45888699943765, longitude: -73.63817530285051 },
      { latitude: 45.458868185860375, longitude: -73.63812568198374 },
      { latitude: 45.45890016893798, longitude: -73.63809885989359 },
      { latitude: 45.458881825704516, longitude: -73.63804890375069 },
      { latitude: 45.458910046061234, longitude: -73.63802576969793 },
      { latitude: 45.45890134478609, longitude: -73.6380016298168 },
      { latitude: 45.45903741041985, longitude: -73.63789356514977 },
      { latitude: 45.459047052350044, longitude: -73.63791368171738 },
      { latitude: 45.459079976001696, longitude: -73.63788719490336 },
      { latitude: 45.45907315610401, longitude: -73.63786875471638 },
      { latitude: 45.45910114119617, longitude: -73.63784562066363 },
      { latitude: 45.459211842639064, longitude: -73.63813004574473 },
      { latitude: 45.45913296257864, longitude: -73.63819521425744 },
      { latitude: 45.45931034975063, longitude: -73.63867908052914 }
    ]
  },
  {
    id: BuildingId.BH,
    campusId: CampusId.Loyola,
    displayName: "BH Annex",
    address: "3500 Avenue BelmoreMontréal, QC H4B 2B9",
    departments: [],
    services: [
      {
        id: 1,
        title: "CPE Les P'tits Profs Daycare",
        link: "https://lesptitsprofs.wordpress.com/"
      }
    ],
    location: {
      latitude: 45.45974814796602,
      longitude: -73.63912683825797
    },
    boundingBox: [
      { latitude: 45.45982068669079, longitude: -73.63916645247663 },
      { latitude: 45.459758628539575, longitude: -73.6390162122033 },
      { latitude: 45.459664091711765, longitude: -73.63909064350347 },
      { latitude: 45.45972382395475, longitude: -73.63924419996957 }
    ]
  },
  {
    id: BuildingId.BB,
    campusId: CampusId.Loyola,
    displayName: "BB Annex",
    address: "3502 Avenue BelmoreMontréal, QC H4B 2B9",
    departments: [],
    services: [
      {
        id: 1,
        title: "CPE Les P'tits Profs Daycare",
        link: "https://lesptitsprofs.wordpress.com/"
      }
    ],
    location: {
      latitude: 45.459824341726055,
      longitude: -73.63932129841155
    },
    boundingBox: [
      { latitude: 45.459847629799036, longitude: -73.63923764922974 },
      { latitude: 45.45975826677363, longitude: -73.63931878605244 },
      { latitude: 45.45981611759046, longitude: -73.63945624926446 },
      { latitude: 45.45990030688451, longitude: -73.63937578299401 }
    ]
  },

  {
    id: BuildingId.FC,
    campusId: CampusId.Loyola,
    displayName: "F.C Smith Building",
    address:
      "7141 Sherbrooke St. West F.C. Smith Building, Montréal, QC H4B 2B5",

    departments: [],
    services: [
      {
        id: 1,
        title: "F.C. Smith Auditorium",
        link: "http://www.concordia.ca/arts/venues/fc-smith-auditorium.html"
      },
      {
        id: 2,
        title: "Cazalet Theatre",
        link: "http://www.concordia.ca/arts/venues/cazalet.html"
      },
      {
        id: 3,
        title: "Concordia Multi-Faith and Spirituality Centre",
        link: "http://www.concordia.ca/students/spirituality.html"
      }
    ],
    location: {
      latitude: 45.45857915168717,
      longitude: -73.63933284169326
    },
    boundingBox: [
      { latitude: 45.45838194827393, longitude: -73.6390384691037 },
      { latitude: 45.45839251355503, longitude: -73.63907076867876 },
      { latitude: 45.45841485486578, longitude: -73.63905534597693 },
      { latitude: 45.45842708379005, longitude: -73.6390861913806 },
      { latitude: 45.45841085694768, longitude: -73.63910060825405 },
      { latitude: 45.45843061136385, longitude: -73.6391549229866 },
      { latitude: 45.45842520241727, longitude: -73.63916028740464 },
      { latitude: 45.45843155205017, longitude: -73.6391810745245 },
      { latitude: 45.45841838244038, longitude: -73.63919180336056 },
      { latitude: 45.45844284028471, longitude: -73.63925517054854 },
      { latitude: 45.45845671540321, longitude: -73.63924779447375 },
      { latitude: 45.45847247188957, longitude: -73.63928869816122 },
      { latitude: 45.458469179489796, longitude: -73.63929171564637 },
      { latitude: 45.458474588432175, longitude: -73.63930445613919 },
      { latitude: 45.45847835117441, longitude: -73.63930244448242 },
      { latitude: 45.45849645936782, longitude: -73.6393507242447 },
      { latitude: 45.45849340214078, longitude: -73.63935374172983 },
      { latitude: 45.45849740005303, longitude: -73.63936514111815 },
      { latitude: 45.458501397965016, longitude: -73.63936279418526 },
      { latitude: 45.458518095123765, longitude: -73.63940604480563 },
      { latitude: 45.458510569644375, longitude: -73.6394107386714 },
      { latitude: 45.45851409721296, longitude: -73.63942213805971 },
      { latitude: 45.458486582172135, longitude: -73.63944225462733 },
      { latitude: 45.45849951659471, longitude: -73.63947980555353 },
      { latitude: 45.45849763522433, longitude: -73.63948215248642 },
      { latitude: 45.45851154981018, longitude: -73.63951942442304 },
      { latitude: 45.45852189734389, longitude: -73.63951808331853 },
      { latitude: 45.458526835938876, longitude: -73.63951372472889 },
      { latitude: 45.458535302100664, longitude: -73.63953954099065 },
      { latitude: 45.45852989316411, longitude: -73.63956066338665 },
      { latitude: 45.45853906483884, longitude: -73.63958647964841 },
      { latitude: 45.45855717301275, longitude: -73.6395938557232 },
      { latitude: 45.45858186596782, longitude: -73.63957843302137 },
      { latitude: 45.458588921095874, longitude: -73.63959586737997 },
      { latitude: 45.45860020929888, longitude: -73.63959318517095 },
      { latitude: 45.458626709299864, longitude: -73.63966482833277 },
      { latitude: 45.45866433660923, longitude: -73.63968192741524 },
      { latitude: 45.45874717642955, longitude: -73.63962358936917 },
      { latitude: 45.45875728874981, longitude: -73.63956960991274 },
      { latitude: 45.45872977382764, longitude: -73.6394955138887 },
      { latitude: 45.45873565308567, longitude: -73.63948947891842 },
      { latitude: 45.458740826832184, longitude: -73.63948411450039 },
      { latitude: 45.45871683945788, longitude: -73.63941986960529 },
      { latitude: 45.45872554076151, longitude: -73.63941148770212 },
      { latitude: 45.45871354707237, longitude: -73.63936890763401 },
      { latitude: 45.458724129739394, longitude: -73.63935918462633 },
      { latitude: 45.458722953887595, longitude: -73.63935080272316 },
      { latitude: 45.458745364360475, longitude: -73.63933364375971 },
      { latitude: 45.45872937278005, longitude: -73.63929441645287 },
      { latitude: 45.458707031593875, longitude: -73.63931084498309 },
      { latitude: 45.45870397437825, longitude: -73.63930413946055 },
      { latitude: 45.45869809511695, longitude: -73.63930246307991 },
      { latitude: 45.458688923468074, longitude: -73.6393098391547 },
      { latitude: 45.45867951664718, longitude: -73.6392897225871 },
      { latitude: 45.45866987465414, longitude: -73.63928871675871 },
      { latitude: 45.458667522948296, longitude: -73.63929072841547 },
      { latitude: 45.45860932668896, longitude: -73.63913580321548 },
      { latitude: 45.45861920386316, longitude: -73.63912708603618 },
      { latitude: 45.45862508313269, longitude: -73.63909523480413 },
      { latitude: 45.45861285425136, longitude: -73.63906640105722 },
      { latitude: 45.45859051301906, longitude: -73.6390573486018 },
      { latitude: 45.45858204686556, longitude: -73.63905801915405 },
      { latitude: 45.45857616759153, longitude: -73.63904896669862 },
      { latitude: 45.45856887729091, longitude: -73.6390486314225 },
      { latitude: 45.45856064630518, longitude: -73.63905433111665 },
      { latitude: 45.45854042159232, longitude: -73.63900269859312 },
      { latitude: 45.458536894025386, longitude: -73.63900169276474 },
      { latitude: 45.4585220782418, longitude: -73.63901342742918 },
      { latitude: 45.45850927765965, longitude: -73.63898268782555 },
      { latitude: 45.45852973755486, longitude: -73.63896491819082 },
      { latitude: 45.45851844933774, longitude: -73.6389347433394 }
    ]
  },
  {
    id: BuildingId.RF,
    campusId: CampusId.Loyola,
    displayName: "Loyola Jesuit Hall and Conference Centre",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Loyola Jesuit Hall and Conference Centre",
        link:
          "http://www.concordia.ca/hospitality/hospitality-venues/loyola-jesuit-hall-conference-centre.html"
      },
      {
        id: 2,
        title: "Conference services",
        link: "http://www.concordia.ca/hospitality.html"
      }
    ],
    location: {
      latitude: 45.458637354307285,
      longitude: -73.6410877337058
    },
    boundingBox: [
      { latitude: 45.45851577362767, longitude: -73.64077321086462 },
      { latitude: 45.45841441473864, longitude: -73.64085300658282 },
      { latitude: 45.45847273727709, longitude: -73.64100656304892 },
      { latitude: 45.45838219621374, longitude: -73.64107831214007 },
      { latitude: 45.45842828986416, longitude: -73.64119943031822 },
      { latitude: 45.45851154054546, longitude: -73.64114075699602 },
      { latitude: 45.4585461107075, longitude: -73.64122926989351 },
      { latitude: 45.45852541564707, longitude: -73.64124603369986 },
      { latitude: 45.45853646869166, longitude: -73.6412765438274 },
      { latitude: 45.45848473101745, longitude: -73.6413164416865 },
      { latitude: 45.458508248147965, longitude: -73.64137444445645 },
      { latitude: 45.45864148218068, longitude: -73.64127095796422 },
      { latitude: 45.458646420765184, longitude: -73.64128336318092 },
      { latitude: 45.45880838047977, longitude: -73.64115888621542 },
      { latitude: 45.45880414741952, longitude: -73.6411448046181 },
      { latitude: 45.45882296101818, longitude: -73.64112804081175 },
      { latitude: 45.4587867448352, longitude: -73.6410338282201 },
      { latitude: 45.458765814692896, longitude: -73.6410475745413 },
      { latitude: 45.45873497138751, longitude: -73.64096703127777 },
      { latitude: 45.45873967479353, longitude: -73.64096133158361 },
      { latitude: 45.458728170087646, longitude: -73.64093074512922 },
      { latitude: 45.458719939125146, longitude: -73.64090157610619 },
      { latitude: 45.458706769582726, longitude: -73.64087408346379 },
      { latitude: 45.45869994963988, longitude: -73.6408543021723 },
      { latitude: 45.458703006855735, longitude: -73.64085128468716 },
      { latitude: 45.45868348770552, longitude: -73.64080501658165 },
      { latitude: 45.458591300784214, longitude: -73.6408767656728 },
      { latitude: 45.45853875633943, longitude: -73.64075525128395 },
      { latitude: 45.45849125175137, longitude: -73.64079380803854 },
      { latitude: 45.45846350152795, longitude: -73.64081358933002 },
      { latitude: 45.4584430416087, longitude: -73.64083001786024 }
    ]
  },
  {
    id: BuildingId.PY,
    campusId: CampusId.Loyola,
    displayName: "Psychology Building",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [
      {
        id: 1,
        title: "Psychology",
        link: "http://www.concordia.ca/artsci/psychology.html"
      },
      {
        id: 2,
        title: "Centre for Clinical Research in Health (CCRH)",
        link: "http://www.concordia.ca/research/clinical-research-health.html"
      }
    ],
    services: [],
    location: {
      latitude: 45.45900554313173,
      longitude: -73.64044802685575
    },
    boundingBox: [
      { latitude: 45.45884699152768, longitude: -73.64083336928228 },
      { latitude: 45.45918093171645, longitude: -73.64057855942586 },
      { latitude: 45.459198931638056, longitude: -73.64062421143421 },
      { latitude: 45.45920951421393, longitude: -73.64062287032971 },
      { latitude: 45.459240936889756, longitude: -73.64060022602146 },
      { latitude: 45.4592685719661, longitude: -73.64057846579686 },
      { latitude: 45.45928479856165, longitude: -73.64056471947566 },
      { latitude: 45.45928973708979, longitude: -73.64055868450538 },
      { latitude: 45.45924223313443, longitude: -73.64043326276477 },
      { latitude: 45.459247406834464, longitude: -73.64042789834674 },
      { latitude: 45.45922530102183, longitude: -73.6403712366813 },
      { latitude: 45.459218951478306, longitude: -73.64037157195743 },
      { latitude: 45.45912653026379, longitude: -73.64013352590736 },
      { latitude: 45.459119710371716, longitude: -73.64013319063123 },
      { latitude: 45.4590961934962, longitude: -73.64015196609434 },
      { latitude: 45.45909243079524, longitude: -73.64014559584793 },
      { latitude: 45.459055038940505, longitude: -73.64017476487096 },
      { latitude: 45.459056920292284, longitude: -73.6401814703935 },
      { latitude: 45.45902493730357, longitude: -73.64020695137914 },
      { latitude: 45.45902964068539, longitude: -73.64022170352872 },
      { latitude: 45.459001792287836, longitude: -73.64024296107387 },
      { latitude: 45.45899168001142, longitude: -73.64022016229724 },
      { latitude: 45.45898486010305, longitude: -73.64021982702111 },
      { latitude: 45.458756852066955, longitude: -73.640396832665 },
      { latitude: 45.45876390717309, longitude: -73.640417955061 },
      { latitude: 45.45873027782589, longitude: -73.64044611825565 },
      { latitude: 45.45879800684033, longitude: -73.64062475766991 },
      { latitude: 45.45879636064996, longitude: -73.64062676932667 },
      { latitude: 45.458821994180084, longitude: -73.64069428769645 },
      { latitude: 45.45880059371079, longitude: -73.64071105150279 },
      { latitude: 45.45881776112088, longitude: -73.64075597850379 },
      { latitude: 45.45883657471496, longitude: -73.64080291716155 }
    ]
  },
  {
    id: BuildingId.HA,
    campusId: CampusId.Loyola,
    displayName: "Hingston Hall, wing HA",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Student Residence",
        link:
          "http://www.concordia.ca/students/housing/residences/hingston-hall-ha.html"
      }
    ],
    location: {
      latitude: 45.45945398113829,
      longitude: -73.64120812700196
    },
    boundingBox: [
      { latitude: 45.45925878611328, longitude: -73.64114246694434 },
      { latitude: 45.4593942427911, longitude: -73.64149584798206 },
      { latitude: 45.45940905834549, longitude: -73.64148377804149 },
      { latitude: 45.45943069375127, longitude: -73.64154077498306 },
      { latitude: 45.45967478942566, longitude: -73.64135146477156 },
      { latitude: 45.45965150794816, longitude: -73.64128943868809 },
      { latitude: 45.45966232560556, longitude: -73.64128005095654 },
      { latitude: 45.45952850870548, longitude: -73.64093064507611 },
      { latitude: 45.45951439868366, longitude: -73.64094103863604 },
      { latitude: 45.45949041163848, longitude: -73.64088169476159 },
      { latitude: 45.4592511634036, longitude: -73.64106927824055 },
      { latitude: 45.45927538571867, longitude: -73.64113063377177 }
    ]
  },
  {
    id: BuildingId.HC,
    campusId: CampusId.Loyola,
    displayName: "Hingston Hall, wing HC",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Student Residence",
        link:
          "http://www.concordia.ca/students/housing/residences/hingston-hall-ha.html"
      }
    ],
    location: {
      latitude: 45.45969590594231,
      longitude: -73.64206702191026
    },
    boundingBox: [
      { latitude: 45.459523959498206, longitude: -73.64202462121388 },
      { latitude: 45.45970080481985, longitude: -73.64188246413609 },
      { latitude: 45.459717736789635, longitude: -73.64191465064427 },
      { latitude: 45.45982591314328, longitude: -73.6418301610603 },
      { latitude: 45.45989646282729, longitude: -73.64200584575077 },
      { latitude: 45.45978640528163, longitude: -73.6421010641708 },
      { latitude: 45.459796752581404, longitude: -73.64213325067898 },
      { latitude: 45.459619907560686, longitude: -73.64227406665226 }
    ]
  },
  {
    id: BuildingId.SI,
    campusId: CampusId.Loyola,
    displayName: "St. Ignatius of Loyola Church",
    address: "4455 Rue West Broadway, Montréal, QC H4B 2A7",
    departments: [],
    services: [],
    location: {
      latitude: 45.45788647989946,
      longitude: -73.64227010232766
    },
    boundingBox: [
      { latitude: 45.45763260915711, longitude: -73.64256805241634 },
      { latitude: 45.45756817119544, longitude: -73.64239840269614 },
      { latitude: 45.45758651485625, longitude: -73.64238230944206 },
      { latitude: 45.45762837600859, longitude: -73.64235213459064 },
      { latitude: 45.45762179111031, longitude: -73.64233201802303 },
      { latitude: 45.45763825335463, longitude: -73.64231659532119 },
      { latitude: 45.457634020206555, longitude: -73.64229983151485 },
      { latitude: 45.45764389755158, longitude: -73.64228977323104 },
      { latitude: 45.45765424524451, longitude: -73.64229446709682 },
      { latitude: 45.45768764005881, longitude: -73.64226965666343 },
      { latitude: 45.457678233070844, longitude: -73.64224283457328 },
      { latitude: 45.457727619740005, longitude: -73.64220126033355 },
      { latitude: 45.45772009415512, longitude: -73.64217913210918 },
      { latitude: 45.457774103050504, longitude: -73.64213408931174 },
      { latitude: 45.45776469607702, longitude: -73.64210391446032 },
      { latitude: 45.45783007451046, longitude: -73.64204959972777 },
      { latitude: 45.45782160824277, longitude: -73.64202344818987 },
      { latitude: 45.45785688434973, longitude: -73.64199394389071 },
      { latitude: 45.45788134243762, longitude: -73.64204892917552 },
      { latitude: 45.45794154691643, longitude: -73.64200601383128 },
      { latitude: 45.457972589825694, longitude: -73.64207825398802 },
      { latitude: 45.458008336184896, longitude: -73.64210105276464 },
      { latitude: 45.45805725221865, longitude: -73.6422365043199 },
      { latitude: 45.45804549356056, longitude: -73.64226265585779 },
      { latitude: 45.45809911302153, longitude: -73.64241084790586 },
      { latitude: 45.45811839720116, longitude: -73.64240078962206 },
      { latitude: 45.45816890452182, longitude: -73.64252164363852 },
      { latitude: 45.457968537049666, longitude: -73.64267855286589 },
      { latitude: 45.457961952191084, longitude: -73.6426812350749 },
      { latitude: 45.45791585815945, longitude: -73.64255584180346 },
      { latitude: 45.45793937552724, longitude: -73.6425363957881 },
      { latitude: 45.45792996858129, longitude: -73.64251225590696 },
      { latitude: 45.45792573545511, longitude: -73.64251426756373 },
      { latitude: 45.457909743642205, longitude: -73.64247805774203 },
      { latitude: 45.45785518330525, longitude: -73.64251963198176 },
      { latitude: 45.45784389495309, longitude: -73.64249415099611 },
      { latitude: 45.45779356768883, longitude: -73.64253438413134 },
      { latitude: 45.45777898688428, longitude: -73.64250353872767 },
      { latitude: 45.457738066541616, longitude: -73.64253170192232 },
      { latitude: 45.45772818921305, longitude: -73.64251158535471 },
      { latitude: 45.45766139961276, longitude: -73.6425638884305 },
      { latitude: 45.45765622576718, longitude: -73.64256590008726 },
      { latitude: 45.457654344368684, longitude: -73.64255986511698 },
      { latitude: 45.45763317863112, longitude: -73.64257662892332 },
      { latitude: 45.45763035653218, longitude: -73.64257528781881 }
    ]
  },
  {
    id: BuildingId.VE,
    campusId: CampusId.Loyola,
    displayName: "Vanier Extension",
    address: "7141 Sherbrooke W.",
    departments: [
      {
        id: 1,
        title: "Applied Human Sciences",
        link: "http://ahsc.concordia.ca"
      }
    ],
    services: [
      {
        id: 1,
        title: "Library",
        link: "http://library.concordia.ca/index.php"
      }
    ],
    location: { latitude: 45.458758, longitude: -73.63861 },
    boundingBox: []
  },
  {
    id: BuildingId.PR,
    campusId: CampusId.SGW,
    displayName: "PR Annex",
    address: "2110 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [],
    location: { latitude: 45.4970138975315, longitude: -73.57989559886592 },
    boundingBox: [
      { latitude: 45.496945274392665, longitude: -73.57993717310565 },
      { latitude: 45.496964075260934, longitude: -73.579977741517 },
      { latitude: 45.49706700990343, longitude: -73.57987615285056 },
      { latitude: 45.49704703401723, longitude: -73.57983323750632 }
    ]
  },
  {
    id: BuildingId.CI,
    campusId: CampusId.SGW,
    displayName: "CI Annex",
    address: "2149 Mackay St, Montreal, QC H3G 2J2",
    departments: [
      {
        id: 1,
        title: "School of Community & Public Affairs",
        link: "https://www.concordia.ca/artsci/scpa.html"
      }
    ],
    services: [],
    location: { latitude: 45.49748594357205, longitude: -73.5798858080879 },
    boundingBox: [
      { latitude: 45.49740575241681, longitude: -73.58001507658908 },
      { latitude: 45.49736627089587, longitude: -73.57993595142314 },
      { latitude: 45.497544460692055, longitude: -73.57975840315969 },
      { latitude: 45.49758323706336, longitude: -73.5798371930495 }
    ]
  },
  {
    id: BuildingId.M,
    campusId: CampusId.SGW,
    displayName: "M Annex",
    address: "2135 Mackay",
    departments: [],
    services: [],
    location: {
      latitude: 45.49736924285446,
      longitude: -73.57976766139312
    },
    boundingBox: [
      { latitude: 45.497325531140575, longitude: -73.57985315680547 },
      { latitude: 45.497289809714815, longitude: -73.57977973133369 },
      { latitude: 45.49738827859022, longitude: -73.57967981904788 },
      { latitude: 45.49742705506909, longitude: -73.57975425034805 }
    ]
  },
  {
    id: BuildingId.PT,
    campusId: CampusId.Loyola,
    displayName: "Oscar Peterson Concert Hall",
    address: "7141 Sherbrooke W.",
    departments: [
      {
        id: 1,
        title: "Oscar Peterson Concert Hall",
        link: "https://www.concordia.ca/arts/venues/oscar-peterson.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Concert Hall",
        link: "https://www.concordia.ca/arts/venues/oscar-peterson.html"
      }
    ],
    location: { latitude: 45.4593209473864, longitude: -73.63894675601217 },
    boundingBox: [
      { latitude: 45.459484109440204, longitude: -73.63913388373734 },
      { latitude: 45.45936041136461, longitude: -73.639230778538 },
      { latitude: 45.4593505108068, longitude: -73.63920797976138 },
      { latitude: 45.45933498973359, longitude: -73.6392207202542 },
      { latitude: 45.45931608578421, longitude: -73.63917769454538 },
      { latitude: 45.459174439992786, longitude: -73.63879926133203 },
      { latitude: 45.4593134220142, longitude: -73.63869328726027 }
    ]
  },
  {
    id: BuildingId.SC,
    campusId: CampusId.Loyola,
    displayName: "Student Centre",
    address: "7141 Sherbrooke W.",
    departments: [],
    services: [
      {
        id: 1,
        title: "Campus Centre",
        link: ""
      },
      {
        id: 2,
        title: "Food Services",
        link: "http://www.concordia.ca/students/housing/residences.html"
      },
      {
        id: 3,
        title: "Cafeteria",
        link: ""
      },
      {
        id: 4,
        title: "Cafe",
        link: ""
      }
    ],
    location: {
      latitude: 45.45917811397828,
      longitude: -73.63917007203673
    },
    boundingBox: [
      { latitude: 45.4592191196082, longitude: -73.63892663944456 },
      { latitude: 45.45915162626819, longitude: -73.63898430693838 },
      { latitude: 45.45913586997162, longitude: -73.6389507793257 },
      { latitude: 45.45907772364647, longitude: -73.63899632180677 },
      { latitude: 45.459094420634564, longitude: -73.6390415840839 },
      { latitude: 45.45899090719363, longitude: -73.63912398107705 },
      { latitude: 45.45910564781738, longitude: -73.6394173966678 },
      { latitude: 45.45921338780151, longitude: -73.63933099293675 },
      { latitude: 45.45923243643183, longitude: -73.63938128435578 },
      { latitude: 45.4593053385378, longitude: -73.63932261103358 },
      { latitude: 45.45926559514335, longitude: -73.63922068709101 },
      { latitude: 45.45931508346138, longitude: -73.63917722111121 }
    ]
  },
  {
    id: BuildingId.CL,
    campusId: CampusId.SGW,
    displayName: "CL Annex",
    address: "1665 Saint-Catherine St W, Montreal, QC H3H 1L9",
    departments: [],
    services: [
      {
        id: 1,
        title: "Concordia Continuing Education (CCE)",
        link: "https://www.concordia.ca/cce.html"
      }
    ],
    location: { latitude: 45.494229787244, longitude: -73.57929775659919 },
    boundingBox: [
      { latitude: 45.494259642546005, longitude: -73.5789361919959 },
      { latitude: 45.493989386951206, longitude: -73.57928912203849 },
      { latitude: 45.493979045928185, longitude: -73.57932499658406 },
      { latitude: 45.4939844514632, longitude: -73.57935315977872 },
      { latitude: 45.494164196622975, longitude: -73.57965755613947 },
      { latitude: 45.49447127774607, longitude: -73.5792813637081 }
    ]
  },
  {
    id: BuildingId.ER,
    campusId: CampusId.SGW,
    displayName: "ER Building",
    address: "2155 Guy St.",
    departments: [],
    services: [],
    location: {
      latitude: 45.49641541548804,
      longitude: -73.57995901192821
    },
    boundingBox: [
      { latitude: 45.49615963345298, longitude: -73.58006721968488 },
      { latitude: 45.49625880934598, longitude: -73.5803495221837 },
      { latitude: 45.496674782160476, longitude: -73.57996730739907 },
      { latitude: 45.49652070814119, longitude: -73.57963138408415 },
      { latitude: 45.49621471393958, longitude: -73.57990302081502 },
      { latitude: 45.496245265743696, longitude: -73.5799714171449 }
    ]
  },
  {
    id: BuildingId.GA,
    campusId: CampusId.SGW,
    displayName: "Grey Nuns Annex",
    address: "1211-1215 St-Mathieu St.",
    departments: [
      {
        id: 1,
        title: "Department of Education",
        link: "http://www.concordia.ca/artsci/education.html"
      }
    ],
    services: [],
    location: {
      latitude: 45.49409857637497,
      longitude: -73.57794979062419
    },
    boundingBox: [
      { latitude: 45.49384914500057, longitude: -73.57835396351433 },
      { latitude: 45.49379015399237, longitude: -73.57825304540015 },
      { latitude: 45.494074469891096, longitude: -73.57790761298128 },
      { latitude: 45.494054022897394, longitude: -73.5778703973312 },
      { latitude: 45.49428245167078, longitude: -73.57762095874678 },
      { latitude: 45.4943456725548, longitude: -73.57773662901054 },
      { latitude: 45.49412044431024, longitude: -73.57798424095054 },
      { latitude: 45.49413337055625, longitude: -73.57800972193618 }
    ]
  },
  {
    id: BuildingId.DO,
    campusId: CampusId.Loyola,
    displayName: "Stinger Dome",
    address: "7141 Sherbrooke W.",
    departments: [
      {
        id: 1,
        title: "Stingers.ca",
        link: "https://stingers.ca"
      }
    ],
    services: [],
    location: {
      latitude: 45.45767546719732,
      longitude: -73.63614320755005
    },
    boundingBox: [
      { latitude: 45.45695412200131, longitude: -73.63635852206605 },
      { latitude: 45.45736427048473, longitude: -73.63708271850007 },
      { latitude: 45.4583275432652, longitude: -73.63595619071381 },
      { latitude: 45.45791928317803, longitude: -73.63524004090684 }
    ]
  },
  {
    id: BuildingId.HB,
    campusId: CampusId.Loyola,
    displayName: "Hingston Hall, wing HB",
    address: "7141 Sherbrooke W.",
    departments: [],
    services: [
      {
        id: 1,
        title: "Student Residence",
        link:
          "http://www.concordia.ca/students/housing/residences/hingston-hall-hb.html"
      },
      {
        id: 2,
        title: "CUFA",
        link: "http://cufa.net/"
      }
    ],
    location: {
      latitude: 45.45924054914103,
      longitude: -73.64189015927725
    },
    boundingBox: [
      { latitude: 45.45896902854732, longitude: -73.64180873293778 },
      { latitude: 45.45899607301431, longitude: -73.64187712926766 },
      { latitude: 45.45896244380558, longitude: -73.64190462191006 },
      { latitude: 45.459103927688275, longitude: -73.6422704091244 },
      { latitude: 45.459139202993, longitude: -73.64224392231037 },
      { latitude: 45.45916248468205, longitude: -73.64230058397581 },
      { latitude: 45.45936027722329, longitude: -73.64214366992978 },
      { latitude: 45.45933840662269, longitude: -73.64208834936885 },
      { latitude: 45.45936168822948, longitude: -73.64206923862962 },
      { latitude: 45.459356749707645, longitude: -73.64205616286067 },
      { latitude: 45.459501385613365, longitude: -73.64194238563765 },
      { latitude: 45.459525372653886, longitude: -73.64200206478823 },
      { latitude: 45.459555474023674, longitude: -73.64197893073548 },
      { latitude: 45.45936614352995, longitude: -73.64149514807193 }
    ]
  },
  {
    id: BuildingId.HU,
    campusId: CampusId.Loyola,
    displayName: "Applied Science Hub",
    address: "7141 Sherbrooke W.",
    departments: [],
    services: [],
    location: {
      latitude: 45.458731426354824,
      longitude: -73.64224078269704
    },
    boundingBox: [
      { latitude: 45.45867598246963, longitude: -73.64129784085388 },
      { latitude: 45.459247136610294, longitude: -73.64277669887241 },
      { latitude: 45.45878824385115, longitude: -73.64316405369357 },
      { latitude: 45.45820087960469, longitude: -73.6416734954904 }
    ]
  },
  {
    id: BuildingId.JR,
    campusId: CampusId.Loyola,
    displayName: "Jesuit Residence",
    address: "7141 Sherbrooke W.",
    departments: [],
    services: [
      {
        id: 1,
        title: "Student Residence",
        link:
          "http://www.concordia.ca/students/housing/residences/jesuit-residence.html"
      }
    ],
    location: {
      latitude: 45.458517236811566,
      longitude: -73.64323517665649
    },
    boundingBox: [
      { latitude: 45.45840881417316, longitude: -73.64324139552258 },
      { latitude: 45.45844855817151, longitude: -73.64334030198 },
      { latitude: 45.45846360914586, longitude: -73.64332722621106 },
      { latitude: 45.458493603186106, longitude: -73.64340016258241 },
      { latitude: 45.45855874560338, longitude: -73.64334718895437 },
      { latitude: 45.45856462487922, longitude: -73.64336361748458 },
      { latitude: 45.4586335299463, longitude: -73.64330829692365 },
      { latitude: 45.45860460393863, longitude: -73.64323587728025 },
      { latitude: 45.458622712091504, longitude: -73.64321978402616 },
      { latitude: 45.45858138123557, longitude: -73.64311962088716 },
      { latitude: 45.45856821166078, longitude: -73.64313034972322 },
      { latitude: 45.45853834493509, longitude: -73.64305491259468 },
      { latitude: 45.45848378520636, longitude: -73.64309916904342 },
      { latitude: 45.45848872380468, longitude: -73.6431125800885 },
      { latitude: 45.4584779059221, longitude: -73.6431212972678 },
      { latitude: 45.45846732320888, longitude: -73.64309548100603 },
      { latitude: 45.45839653656496, longitude: -73.64315314849985 },
      { latitude: 45.458425697850956, longitude: -73.64322724452389 }
    ]
  },
  {
    id: BuildingId.QA,
    campusId: CampusId.Loyola,
    displayName: "Quadrangle",
    address: "7141 Sherbrooke W.",
    departments: [],
    services: [],
    location: {
      latitude: 45.45863177412241,
      longitude: -73.64004900596404
    },
    // Not a building
    boundingBox: []
  },
  {
    id: BuildingId.SH,
    campusId: CampusId.Loyola,
    displayName: "Solar House",
    address: "7141 Sherbrooke W.",
    departments: [],
    services: [],
    location: {
      latitude: 45.45929279531785,
      longitude: -73.64246625725686
    },
    boundingBox: [
      { latitude: 45.45925610910041, longitude: -73.64255745236336 },
      { latitude: 45.45932712983307, longitude: -73.64255376432597 },
      { latitude: 45.459321720972476, longitude: -73.6423693624562 },
      { latitude: 45.45925164090562, longitude: -73.64237271521746 }
    ]
  },
  {
    id: BuildingId.EN,
    campusId: CampusId.SGW,
    displayName: "EN Annex",
    address: "2070 Mackay",
    departments: [],
    services: [],
    location: {
      latitude: 45.49687775941154,
      longitude: -73.57964478141776
    },
    boundingBox: [
      { latitude: 45.4968347523502, longitude: -73.57971384829989 },
      { latitude: 45.496928286791366, longitude: -73.57962198264113 },
      { latitude: 45.49690549072327, longitude: -73.57957772619238 },
      { latitude: 45.496813836335825, longitude: -73.57967059767952 }
    ]
  },
  {
    id: BuildingId.FB,
    campusId: CampusId.SGW,
    displayName: "Faubourg Building",
    address: "1250 Guy",
    departments: [
      {
        id: 1,
        title: "Classics, Modern Languages & Linguistics",
        link: "http://www.concordia.ca/content/concordia/en/artsci/cmll"
      },
      {
        id: 2,
        title: "Concordia Continuing Education",
        link: "http://www.concordia.ca/cce.html"
      },
      {
        id: 3,
        title: "Mel Hoppenheim School of Cinema",
        link: "http://www.concordia.ca/content/concordia/en/finearts/cinema"
      },
      {
        id: 4,
        title:
          "Montreal Institute for Genocide and Human Rights Studies (MIGS)",
        link: "http://www.concordia.ca/research/migs.html"
      },
      {
        id: 5,
        title: "District 3 Innovation Center",
        link: "http://www.concordia.ca/research/d3center.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Human Resources",
        link: "http://www.concordia.ca/hr.html"
      },
      {
        id: 2,
        title:
          "Enrolment Services / Office of the Registrar / Student Recruitment",
        link: "http://www.concordia.ca/offices/registrar.html"
      },
      {
        id: 3,
        title: "Examinations Office",
        link: "http://www.concordia.ca/students/exams.html"
      },
      {
        id: 4,
        title: "Senior non-credit program",
        link: "http://www.concordia.ca/admissions/seniors.html"
      }
    ],
    location: { latitude: 45.4946720832902, longitude: -73.57763727107047 },
    boundingBox: [
      { latitude: 45.49439311036035, longitude: -73.57751801837604 },
      { latitude: 45.494654376473356, longitude: -73.57721744514097 },
      { latitude: 45.49469973540261, longitude: -73.57729791141142 },
      { latitude: 45.49469127467247, longitude: -73.5773076344191 },
      { latitude: 45.49477338072065, longitude: -73.57745170761076 },
      { latitude: 45.49476256980161, longitude: -73.57746511865584 },
      { latitude: 45.49480510750665, longitude: -73.57753904554514 },
      { latitude: 45.494798056911485, longitude: -73.57754910382894 },
      { latitude: 45.49484169103382, longitude: -73.57762446529748 },
      { latitude: 45.49483534550231, longitude: -73.57763284720065 },
      { latitude: 45.494875533856366, longitude: -73.57770325518729 },
      { latitude: 45.4948691883287, longitude: -73.57771197236659 },
      { latitude: 45.49491031673617, longitude: -73.57778439200999 },
      { latitude: 45.494693782050334, longitude: -73.57803710524378 }
    ]
  },
  {
    id: BuildingId.K,
    campusId: CampusId.SGW,
    displayName: "K Annex",
    address: "2150 Bishop",
    departments: [],
    services: [
      {
        id: 1,
        title: "Theological Studies",
        link: "http://www.concordia.ca/artsci/theology.html"
      }
    ],
    location: { latitude: 45.49782950921831, longitude: -73.5793927965218 },
    boundingBox: [
      { latitude: 45.49762585962041, longitude: -73.57963446965985 },
      { latitude: 45.4975967186144, longitude: -73.57957043191962 },
      { latitude: 45.497684376595, longitude: -73.5794866128879 },
      { latitude: 45.497695947243194, longitude: -73.57950836535979 },
      { latitude: 45.49777138468352, longitude: -73.57943762209702 },
      { latitude: 45.497753759122396, longitude: -73.57940074172306 },
      { latitude: 45.497849407101164, longitude: -73.57931323465395 },
      { latitude: 45.49788254309522, longitude: -73.5793836426406 }
    ]
  }
];

/**
 * Returns a Building object based on its id.
 *
 * @param id id of the Building
 */
export const getBuildingById = (id: BuildingId): Building => {
  return Buildings.filter(building => building.id === id)[0];
};
