class DragAndDrop {
    //selectors - объект потому что селкторов доступа может быть несколько
    selectors = {
        root: '[data-js-dnd]',
    }

    stateClasses = {
        isDragging: 'is-dragging',
    }

    initialState = {
        offsetX: null,
        offsetY: null,
        isDragging: false,
        currentDraggingElement: null,
    }

    constructor() {
        this.state = {...this.initialState}
        this.bindEvents()
    }

    resetState() {
        this.state = {...this.initialState}
    }

    onPointerDown(event) {
        const {target, x, y} = event
        //Проверяем что попали на элемент с нужным дата-атрибутом(data-js-dnd) через matches
        //В isDraggable будет true или false
        const isDraggable = target.matches(this.selectors.root)

        if(!isDraggable) {
            return
        }

        console.log('onPointerDown')

        target.classList.add(this.stateClasses.isDragging)
        //Записываем координаты верхнего левого угла event.target
        const {left, top} = target.getBoundingClientRect()

        this.state = {
            offsetX: x - left,
            offsetY: y - top,
            isDragging: true,
            currentDraggingElement: target,
        }
    }

    onPointerMove(event) {
        if(!this.state.isDragging) {
            return
        }

        console.log('onPointerMove')

        //Вычитаем из текущих координат указателя относительно всей страницы значения смещений 
        //записываем в x и y
        const x = event.pageX - this.state.offsetX
        const y = event.pageY - this.state.offsetY

        //обновляем координаты дом-элемнта, который мы перетаскиваем
        this.state.currentDraggingElement.style.left = `${x}px`
        this.state.currentDraggingElement.style.top = `${y}px`
    }

    onPointerUp() {
        if(!this.state.isDragging) {
            return
        }

        console.log('onPointerUp')

        //Убираем класс is-dragging когда отпускаем элемент
        this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging)
        this.resetState()
    }

    bindEvents() {
        document.addEventListener('pointerdown', (event) => this.onPointerDown(event))
        document.addEventListener('pointermove', (event) => this.onPointerMove(event))
        document.addEventListener('pointerup', () => this.onPointerUp())
    }
}

new DragAndDrop()