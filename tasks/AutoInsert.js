//1. Инкапсулировать получение координат для place(вынести в отдельный метод)
//2. Cоздать кастомное событие draggable(чтобы лишний раз не тригеррить)
//3. Код-ревью
//4. Реализовать с учетом множества дом-элементов data-js-aip
//5. Менять родителя для вставляемого элемента

class AutoInsert {
    selectors = {
        insertableElement: 'data-js-dnd',
        placeElement: '[data-js-aip]', //aip - auto insert place
    }

    initialState = {
        isFull: false,
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

    onPointerUp(event) {
        if(event.target.attributes[1].name !== this.selectors.insertableElement){
            return
        }

        this.state.currentInsertableElement = event.target
        this.state.currentPlaceElement = document.querySelector(this.selectors.placeElement)

        const top = this.state.currentPlaceElement.getBoundingClientRect().top + document.documentElement.scrollTop + 5;
        const left = this.state.currentPlaceElement.getBoundingClientRect().left + document.documentElement.scrollLeft + 5;

        const placeElementWidth = this.state.currentPlaceElement.offsetWidth
        const placeElementHeight = this.state.currentPlaceElement.offsetHeight

        const x = event.pageX
        const y = event.pageY

        if((y >= top && x >= left) && (y <= top + placeElementHeight && x <= left + placeElementWidth)) {

            this.state.currentInsertableElement.style.left = `${left}px`
            this.state.currentInsertableElement.style.top = `${top}px`

            this.state.isFull = true

            this.state.currentPlaceElement.classList.add(this.stateClasses.isFull)

        }

    }

    bindEvents() {
        document.addEventListener('pointerup', (event) => {this.onPointerUp(event)})
    }
}

new AutoInsert()
