class BRInput {
  constructor(name, component) {
    this.name = name
    this.component = component
    this._currentFocus = -1
    this._setBehavior()
  }
  _setBehavior() {
    this._setPasswordViewBehavior()
    this._setAutocompleteBehavior()
  }

  _setPasswordViewBehavior() {
    for (const inputPassword of this.component.querySelectorAll("input[type='password']")) {
      if (!inputPassword.disabled) {
        for (const buttonIcon of inputPassword.parentNode.querySelectorAll('button.icon')) {
          buttonIcon.addEventListener(
            'click',
            (event) => {
              this._toggleShowPassword(event)
            },
            false
          )
        }
      }
    }
  }
  _toggleShowPassword(event) {
    for (const icon of event.currentTarget.querySelectorAll('.svg-inline--fa')) {
      if (icon.classList.contains('fa-eye')) {
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
        for (const input of this.component.querySelectorAll("input[type='password']")) {
          input.setAttribute('type', 'text')
        }
      } else if (icon.classList.contains('fa-eye-slash')) {
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
        for (const input of this.component.querySelectorAll("input[type='text']")) {
          input.setAttribute('type', 'password')
        }
      }
    }
  }
  _setAutocompleteBehavior() {
    for (const inputAutocomplete of this.component.querySelectorAll('input.search-autocomplete')) {
      inputAutocomplete.addEventListener(
        'input',
        (event) => {
          this._clearSearchItems()
          this._buildSearchItems(event.currentTarget)
        },
        false
      )
      inputAutocomplete.addEventListener(
        'keydown',
        (event) => {
          this._handleArrowKeys(event)
        },
        false
      )
    }
  }
  _buildSearchItems(element) {
    const searchList = window.document.createElement('div')
    searchList.setAttribute('class', 'search-items')
    this.component.appendChild(searchList)
    if (element.value !== '') {
      for (const data of this.dataList) {
        if (data.substr(0, element.value.length).toUpperCase() === element.value.toUpperCase()) {
          const item = window.document.createElement('div')
          item.innerHTML = `<strong>${data.substr(0, element.value.length)}</strong>`
          item.innerHTML += data.substr(element.value.length)
          item.innerHTML += `<input type="hidden" value="${data}">`
          item.addEventListener(
            'click',
            (event) => {
              for (const input of event.currentTarget.querySelectorAll("input[type='hidden']")) {
                element.value = input.value
              }
              this._clearSearchItems()
            },
            false
          )
          searchList.appendChild(item)
        }
      }
    } else {
      this._clearSearchItems()
    }
  }
  _clearSearchItems() {
    for (const searchItems of this.component.querySelectorAll('.search-items')) {
      for (const item of searchItems.querySelectorAll('div')) {
        searchItems.removeChild(item)
      }
      this.component.removeChild(searchItems)
    }
  }
  _handleArrowKeys(event) {
    switch (event.keyCode) {
      case 13:
        if (this._currentFocus > -1) {
          event.preventDefault()
          for (const searchItems of this.component.querySelectorAll('.search-items')) {
            for (const itemActive of searchItems.querySelectorAll('div.is-active')) {
              itemActive.click()
            }
          }
          this._currentFocus = -1
        }
        break
      case 38:
        if (this._currentFocus > 0) {
          this._currentFocus -= 1
        }
        this._switchFocus()
        break
      case 40:
        for (const searchItems of this.component.querySelectorAll('.search-items')) {
          if (this._currentFocus < searchItems.querySelectorAll('div').length - 1) {
            this._currentFocus += 1
          }
        }
        this._switchFocus()
        break
      // skip default case
    }
  }
  _switchFocus() {
    for (const searchItems of this.component.querySelectorAll('.search-items')) {
      for (const [index, item] of searchItems.querySelectorAll('div').entries()) {
        if (index === this._currentFocus) {
          item.classList.add('is-active')
        }
        if (index !== this._currentFocus) {
          item.classList.remove('is-active')
        }
      }
    }
  }
  setAutocompleteData(dataList) {
    this.dataList = dataList
  }
}
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
export default BRInput
