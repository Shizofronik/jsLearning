//1. Инкапсулировать получение координат для place +
//2. Cоздать кастомное событие draggable(чтобы лишний раз не тригеррить) - 
//3. Код-ревью +
//4. Реализовать с учетом множества дом-элементов data-js-aip +
//5. Менять родителя для вставляемого элемента +
//6. Сделать так, чтобы если мы не попали элементом в секцию, он возвращался на исходную позицию +

class AutoInsert {
    selectors = {
        insertableElement: 'data-js-dnd',
        placeElement: '[data-js-aip]', //aip - auto insert place
    }

    initialState = {
        defaultInsertableParent: null,
        currentInsertableElement: null,
        currentPlaceElement: null,
    }

    stateClasses = {
        isFull: 'is-full',
    }

    constructor() {
        this.state = {...this.initialState}
        this.bindEvents()
    }

    resetState() {
        this.state = {...this.initialState}
    }

    Fullness(currentPlaceElement) {
        if(currentPlaceElement.hasChildNodes()){
            currentPlaceElement.classList.add(this.stateClasses.isFull)
            return true
        }
        else{
            currentPlaceElement.classList.remove(this.stateClasses.isFull)
            return false
        }
    }

    setInsertableElement(currentInsertableElement, currentPlaceElement, left, top) {
        if(currentInsertableElement === currentPlaceElement){
            return
        }

        currentInsertableElement.style.left = `${left}px`
        currentInsertableElement.style.top = `${top}px`

        currentPlaceElement.appendChild(currentInsertableElement)
        currentInsertableElement.style.position = 'static'
        currentInsertableElement.style.margin = `${0}px`
    }

    ReturnElement() {
        const {state} = this

        if(!state.currentInsertableElement.hasAttribute(this.selectors.insertableElement)) {
            return
        }

        if(state.defaultInsertableParent !== null) {
        state.defaultInsertableParent.appendChild(state.currentInsertableElement)
        state.currentInsertableElement.style.position = 'static'
        state.currentInsertableElement.style.margin = `5px`
        this.resetState()
        }

    }

    onPointerUp(event, autoInsertElement) {
        const {state} = this

        state.currentInsertableElement = event.target
        state.currentPlaceElement = autoInsertElement

        if(this.Fullness(state.currentPlaceElement)){
            return
        }

        const top = state.currentPlaceElement.getBoundingClientRect().top + document.documentElement.scrollTop;
        const left = state.currentPlaceElement.getBoundingClientRect().left + document.documentElement.scrollLeft;

        const placeElementWidth = state.currentPlaceElement.offsetWidth
        const placeElementHeight = state.currentPlaceElement.offsetHeight

        const x = event.pageX
        const y = event.pageY

        if((y >= top && x >= left) && (y <= top + placeElementHeight && x <= left + placeElementWidth)) {      
            this.setInsertableElement(state.currentInsertableElement, state.currentPlaceElement, left, top)
            this.Fullness(state.currentPlaceElement)
            this.resetState()

        }
        else {
            this.ReturnElement()
        }

    }

    bindEvents() {
        document.addEventListener('pointerdown', (event) => {
            this.state.defaultInsertableParent = document.querySelector('[data-js-dnd-parent]')
        })

        document.addEventListener('pointerup', (event) => {
            const allAutoInsertElements = document.querySelectorAll(this.selectors.placeElement)
            allAutoInsertElements.forEach((autoInsertElement) => {
                this.onPointerUp(event, autoInsertElement)
            })
        })
    }
}

new AutoInsert()