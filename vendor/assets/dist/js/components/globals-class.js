import BRAccordion from './accordion'
import BRBreadcrumb from './breadcrumb'
import BRCard from './card'
import BRDatepicker from './datepicker'
import BRFooter from './footer'
import BRHeader from './header'
import BRInput from './input'
import BRList from './list'
import BRMenu from './menu'
import BRMessage from './message'
import BRModal from './modal'
import BRNotification from './notification'
import BRScrim from './scrim'
import BRSelect from './select'
import BRTable from './table'
import BRTabs from './tabs'
import BRTag from './tag'
import BRTagInput from './taginput'
import BRTooltip from './tooltip'
import BRUpload from './upload'
import BRWizard from './wizard'
// Script Templates
import BRTemplateBAse from './template-base'
export default class Globals {
  initInstanceAll() {
    this.initInstanceAccordion()
    this.initInstanceBreadcrumb()
    this.initInstanceCard()
    this.initInstanceDatepicker()
    this.initInstanceFooter()
    this.initInstanceHeader()
    this.initInstanceInput()
    this.initInstanceList()
    this.initInstanceMenu()
    this.initInstanceMessage()
    this.initInstanceModal()
    this.initInstanceNotification()
    this.initInstanceScrim()
    this.initInstanceSelect()
    this.initInstanceTable()
    this.initInstanceTabs()
    this.initInstanceTemplateBase()
    this.initInstanceTooltip()
    this.initInstanceUpload()
    this.initInstanceWizard()
  }
  initInstanceAccordion() {
    const accordionList = []
    for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
      accordionList.push(new BRAccordion('br-accordion', brAccordion))
    }
  }

  initInstanceBreadcrumb() {
    const breadcrumbList = []
    for (const brBreadcrumb of window.document.querySelectorAll('.br-breadcrumb')) {
      breadcrumbList.push(new BRBreadcrumb('br-breadcrumb', brBreadcrumb))
    }
  }

  initInstanceDatepicker() {
    const datepickerList = []
    for (const brDatepicker of window.document.querySelectorAll('.br-datepicker')) {
      datepickerList.push(new BRDatepicker('br-datepicker', brDatepicker))
    }
  }

  initInstanceFooter() {
    const footerList = []
    for (const brFooter of window.document.querySelectorAll('.br-footer')) {
      footerList.push(new BRFooter('br-footer', brFooter))
    }
  }

  initInstanceHeader() {
    const headerList = []

    for (const brHeader of window.document.querySelectorAll('.br-header')) {
      headerList.push(new BRHeader('br-header', brHeader))
    }
  }
  initInstanceInput() {
    const countries = [
      'Afeganist??o',
      '??frica do Sul',
      'Alb??nia',
      'Alemanha',
      'Andorra',
      'Angola',
      'Anguilla',
      'Ant??rtida',
      'Ant??gua e Barbuda',
      'Antilhas Holandesas',
      'Ar??bia Saudita',
      'Arg??lia',
      'Argentina',
      'Arm??nia',
      'Aruba',
      'Austr??lia',
      '??ustria',
      'Azerbaij??o',
      'Bahamas',
      'Bahrein',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'B??lgica',
      'Belize',
      'Benin',
      'Bermudas',
      'Bol??via',
      'B??snia-Herzeg??vina',
      'Botsuana',
      'Brasil',
      'Brunei',
      'Bulg??ria',
      'Burkina Fasso',
      'Burundi',
      'But??o',
      'Cabo Verde',
      'Camar??es',
      'Camboja',
      'Canad??',
      'Cazaquist??o',
      'Chade',
      'Chile',
      'China',
      'Chipre',
      'Cingapura',
      'Col??mbia',
      'Congo',
      'Cor??ia do Norte',
      'Cor??ia do Sul',
      'Costa do Marfim',
      'Costa Rica',
      'Cro??cia (Hrvatska)',
      'Cuba',
      'Dinamarca',
      'Djibuti',
      'Dominica',
      'Egito',
      'El Salvador',
      'Emirados ??rabes Unidos',
      'Equador',
      'Eritr??ia',
      'Eslov??quia',
      'Eslov??nia',
      'Espanha',
      'Estados Unidos',
      'Est??nia',
      'Eti??pia',
      'Fiji',
      'Filipinas',
      'Finl??ndia',
      'Fran??a',
      'Gab??o',
      'G??mbia',
      'Gana',
      'Ge??rgia',
      'Gibraltar',
      'Gr??-Bretanha (Reino Unido, UK)',
      'Granada',
      'Gr??cia',
      'Groel??ndia',
      'Guadalupe',
      'Guam (Territ??rio dos Estados Unidos)',
      'Guatemala',
      'Guernsey',
      'Guiana',
      'Guiana Francesa',
      'Guin??',
      'Guin?? Equatorial',
      'Guin??-Bissau',
      'Haiti',
      'Holanda',
      'Honduras',
      'Hong Kong',
      'Hungria',
      'I??men',
      'Ilha Bouvet (Territ??rio da Noruega)',
      'Ilha do Homem',
      'Ilha Natal',
      'Ilha Pitcairn',
      'Ilha Reuni??o',
      'Ilhas Aland',
      'Ilhas Cayman',
      'Ilhas Cocos',
      'Ilhas Comores',
      'Ilhas Cook',
      'Ilhas Faroes',
      'Ilhas Falkland (Malvinas)',
      'Ilhas Ge??rgia do Sul e Sandwich do Sul',
      'Ilhas Heard e McDonald (Territ??rio da Austr??lia)',
      'Ilhas Marianas do Norte',
      'Ilhas Marshall',
      'Ilhas Menores dos Estados Unidos',
      'Ilhas Norfolk',
      'Ilhas Seychelles',
      'Ilhas Solom??o',
      'Ilhas Svalbard e Jan Mayen',
      'Ilhas Tokelau',
      'Ilhas Turks e Caicos',
      'Ilhas Virgens (Estados Unidos)',
      'Ilhas Virgens (Inglaterra)',
      'Ilhas Wallis e Futuna',
      '??ndia',
      'Indon??sia',
      'Ir??',
      'Iraque',
      'Irlanda',
      'Isl??ndia',
      'Israel',
      'It??lia',
      'Jamaica',
      'Jap??o',
      'Jersey',
      'Jord??nia',
      'K??nia',
      'Kiribati',
      'Kuait',
      'Laos',
      'L??tvia',
      'Lesoto',
      'L??bano',
      'Lib??ria',
      'L??bia',
      'Liechtenstein',
      'Litu??nia',
      'Luxemburgo',
      'Macau',
      'Maced??nia (Rep??blica Yugoslava)',
      'Madagascar',
      'Mal??sia',
      'Malaui',
      'Maldivas',
      'Mali',
      'Malta',
      'Marrocos',
      'Martinica',
      'Maur??cio',
      'Maurit??nia',
      'Mayotte',
      'M??xico',
      'Micron??sia',
      'Mo??ambique',
      'Moldova',
      'M??naco',
      'Mong??lia',
      'Montenegro',
      'Montserrat',
      'Myanma',
      'Nam??bia',
      'Nauru',
      'Nepal',
      'Nicar??gua',
      'N??ger',
      'Nig??ria',
      'Niue',
      'Noruega',
      'Nova Caled??nia',
      'Nova Zel??ndia',
      'Om??',
      'Palau',
      'Panam??',
      'Papua-Nova Guin??',
      'Paquist??o',
      'Paraguai',
      'Peru',
      'Polin??sia Francesa',
      'Pol??nia',
      'Porto Rico',
      'Portugal',
      'Qatar',
      'Quirguist??o',
      'Rep??blica Centro-Africana',
      'Rep??blica Democr??tica do Congo',
      'Rep??blica Dominicana',
      'Rep??blica Tcheca',
      'Rom??nia',
      'Ruanda',
      'R??ssia (antiga URSS) - Federa????o Russa',
      'Saara Ocidental',
      'Saint Vincente e Granadinas',
      'Samoa Americana',
      'Samoa Ocidental',
      'San Marino',
      'Santa Helena',
      'Santa L??cia',
      'S??o Bartolomeu',
      'S??o Crist??v??o e N??vis',
      'S??o Martim',
      'S??o Tom?? e Pr??ncipe',
      'Senegal',
      'Serra Leoa',
      'S??rvia',
      'S??ria',
      'Som??lia',
      'Sri Lanka',
      'St. Pierre and Miquelon',
      'Suazil??ndia',
      'Sud??o',
      'Su??cia',
      'Su????a',
      'Suriname',
      'Tadjiquist??o',
      'Tail??ndia',
      'Taiwan',
      'Tanz??nia',
      'Territ??rio Brit??nico do Oceano ??ndico',
      'Territ??rios do Sul da Fran??a',
      'Territ??rios Palestinos Ocupados',
      'Timor Leste',
      'Togo',
      'Tonga',
      'Trinidad and Tobago',
      'Tun??sia',
      'Turcomenist??o',
      'Turquia',
      'Tuvalu',
      'Ucr??nia',
      'Uganda',
      'Uruguai',
      'Uzbequist??o',
      'Vanuatu',
      'Vaticano',
      'Venezuela',
      'Vietn??',
      'Z??mbia',
      'Zimb??bue',
    ]
    const inputList = []
    for (const brInput of window.document.querySelectorAll('.br-input')) {
      inputList.push(new BRInput('br-input', brInput))
    }
    for (const brInput of inputList) {
      brInput.component.querySelectorAll('input.search-autocomplete').forEach(() => {
        brInput.setAutocompleteData(countries)
      })
    }
  }

  initInstanceList() {
    const listList = []
    for (const brList of window.document.querySelectorAll('.br-list[collapsible]')) {
      listList.push(new BRList('br-list-collapsible', brList))
    }
    for (const brList of window.document.querySelectorAll('.br-list[checkable]')) {
      listList.push(new BRList('br-list-checkable', brList))
    }
  }

  initInstanceMenu() {
    const menuList = []
    for (const brMenu of window.document.querySelectorAll('.br-menu')) {
      menuList.push(new BRMenu('br-menu', brMenu))
    }
  }
  initInstanceMessage() {
    const alertList = []
    for (const brMessage of window.document.querySelectorAll('.br-message')) {
      alertList.push(new BRMessage('br-message', brMessage))
    }
  }

  initInstanceModal() {
    const modalList = []
    for (const brModal of window.document.querySelectorAll('.br-modal')) {
      modalList.push(new BRModal('br-modal', brModal))
    }
    for (const brScrim of window.document.querySelectorAll('.br-scrim')) {
      const scrim = new BRScrim('br-scrim', brScrim)
      for (const button of window.document.querySelectorAll('.br-scrim + button')) {
        button.addEventListener('click', () => {
          scrim.showScrim()
        })
      }
    }
  }

  initInstanceNotification() {
    const notificationList = []
    for (const brNotification of window.document.querySelectorAll('.br-notification')) {
      notificationList.push(new BRNotification('br-notification', brNotification))
    }
  }

  initInstanceScrim() {
    const scrimList = []
    for (const brScrim of window.document.querySelectorAll('.br-scrim')) {
      scrimList.push(new BRScrim('br-scrim', brScrim))
    }
    for (const buttonBloco1 of window.document.querySelectorAll('.bloco1 button')) {
      buttonBloco1.addEventListener('click', () => {
        for (const brScrim of scrimList) {
          brScrim.showScrim()
        }
      })
    }
  }

  initInstanceSelect() {
    const selectList = []
    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      selectList.push(new BRSelect('br-select', brSelect))
    }
  }

  initInstanceTable() {
    const tableList = []
    for (const [index, brTable] of window.document.querySelectorAll('.br-table').entries()) {
      tableList.push(new BRTable('br-table', brTable, index))
    }
  }

  initInstanceTabs() {
    const abasList = []
    for (const brTabs of window.document.querySelectorAll('.br-tabs')) {
      abasList.push(new BRTabs('br-tabs', brTabs))
    }
  }

  initInstanceTag() {
    const tagList = []
    for (const brTag of window.document.querySelectorAll('.br-tag')) {
      tagList.push(new BRTag('br-tag', brTag))
    }
  }

  initInstanceTagInput() {
    const tagInputList = []
    for (const brTag of window.document.querySelectorAll('.br-tag-input')) {
      tagInputList.push(new BRTagInput('br-tag-input', brTag))
    }
  }

  initInstanceTooltip() {
    const tooltipList = []
    for (const brTooltip of window.document.querySelectorAll('.br-tooltip')) {
      tooltipList.push(new BRTooltip('br-tooltip', brTooltip))
    }
  }

  initInstanceUpload() {
    const uploadList = []
    for (const brUpload of window.document.querySelectorAll('.br-upload')) {
      uploadList.push(new BRUpload('br-upload', brUpload))
    }
  }

  initInstanceWizard() {
    const wizardList = []
    for (const brWizard of window.document.querySelectorAll('.br-wizard')) {
      wizardList.push(new BRWizard('br-wizard', brWizard))
    }
  }

  initInstanceTemplateBase() {
    const templateBaseList = []
    for (const brTemplateBase of window.document.querySelectorAll('.template-base')) {
      templateBaseList.push(new BRTemplateBase('template-base', brTemplateBase))
    }
  }

  initInstanceBreadcrumb() {
    const breadcrumbList = []
    for (const brBreadcrumb of window.document.querySelectorAll('.br-breadcrumb')) {
      breadcrumbList.push(new BRBreadcrumb('br-breadcrumb', brBreadcrumb))
    }
  }

  initInstanceCard() {
    const listCard = []
    for (const brCard of window.document.querySelectorAll('.br-card')) {
      listCard.push(new BRCard('br-card', brCard))
    }
  }
}
