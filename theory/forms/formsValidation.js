class FormsValidation {

    selectors = {
        form: '[data-js-regForm]',
        fieldError: '[data-js-regForm-field-errors]',
    }

    errorMessages = {
        tooShort: (fieldElement) =>  `Минимальная длина - ${fieldElement.minLength}.`,
        tooLong: (fieldElement) => `Максимальная длина - ${fieldElement.maxLength}.`,
        valueMissing: () => 'Это поле обязательно для заполнения.',
        patternMismatch: (fieldElement) => fieldElement.title || 'Данные не соответсвуют формату.',
    }

    constructor(){
        this.bindEvents()
    }

    managerErrors(fieldElement, errorMessages) {
        const fieldErrorsElement = fieldElement.parentElement.querySelector(this.selectors.fieldError)

        fieldErrorsElement.innerHTML = errorMessages.join(' ')


    }

    validateField(fieldElement) {
        const errors = fieldElement.validity
        const errorMessages = []

        //entries - превращает объект в массив массивов ключ-значение
        //Не забываем деструктурировать параметры для ключ-значения в forEach
        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
            if(errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldElement))
            }
        })

        this.managerErrors(fieldElement, errorMessages)

        const isFieldValid = errorMessages.length === 0
        fieldElement.ariaInvalid = !isFieldValid

        return isFieldValid
    }

    onBlur(event) {
        const {target} = event
        //closest() позволяет получить ближайший родительский элемент, 
        //который соответствует заданному CSS-селектору
        const isFormField = target.closest(this.selectors.form)
        const isRequired = target.required

        if(isFormField && isRequired) {
            this.validateField(target)
        }

    }

    onChange(event) {
        const {target} = event
        const isRequired = target.required

        if(isRequired) {
            this.validateField(target)
        }
    }

    onSubmit(event) {
        //matches потому что event.target будет не кнопка, а сама форма
        const isFormElement = event.target.matches(this.selectors.form)

        if(!isFormElement) {
            return
        }

        const requiredElements = [...event.target.elements].filter((element) => element.required)
        let isFormValid = true
        let firstInvalideFieldElement = null

        requiredElements.forEach((element) => {
                const isFieldValid = this.validateField(element)

                if(!isFieldValid) {
                    isFormValid = false

                    if(!firstInvalideFieldElement) {
                        firstInvalideFieldElement = element
                    }

                }
        })

        if(!isFormValid) {
            event.preventDefault()
            firstInvalideFieldElement.focus()

        }

    }

    bindEvents() {
        //capture: true - отлавливает событие на этапе погружения
        document.addEventListener('blur', (event) => {
            this.onBlur(event)
        }, {capture: true})

        document.addEventListener('change', (event) => this.onChange(event))
        document.addEventListener('submit', (event) => this.onSubmit(event))
    }

}

new FormsValidation()