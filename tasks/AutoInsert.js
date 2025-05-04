//1. Инкапсулировать получение координат для place +
//2. Cоздать кастомное событие draggable(чтобы лишний раз не тригеррить) - 
//3. Код-ревью +
//4. Реализовать с учетом множества дом-элементов data-js-aip +
//5. Менять родителя для вставляемого элемента +

class AutoInsert {
    selectors = {
        insertableElement: 'data-js-dnd',
        placeElement: '[data-js-aip]', //aip - auto insert place
    }

    initialState = {
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

    }

    bindEvents() {
        document.addEventListener('pointerup', (event) => {
            const allAutoInsertElements = document.querySelectorAll(this.selectors.placeElement)
            allAutoInsertElements.forEach((autoInsertElement) => {
                this.onPointerUp(event, autoInsertElement)
            })
        })
    }
}

new AutoInsert()