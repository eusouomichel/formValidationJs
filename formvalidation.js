if(document.querySelectorAll('.formValidationJs')) {
    let formValidationJs = document.querySelectorAll('.formValidationJs');
    formValidationJs.forEach((formToValidate) => {
        if(document.querySelector(`#${formToValidate.id} button[type="submit"]`)) {
            let submitloginForm = document.querySelector(`#${formToValidate.id} button[type="submit"]`);
            submitloginForm.addEventListener("click", () => {
                event.preventDefault();
                console.log(`Formulário: ${formToValidate.id}`);
                let types = ['input', 'select', 'textarea'];
                types.forEach((type) => {
                    if(document.querySelectorAll(`#${formToValidate.id} ${type}`)) {
                        let anyFields = document.querySelectorAll(`#${formToValidate.id} ${type}`);
                        anyFields.forEach((field) => {
                            if(field.required) {
                                console.log(`Campo: ${field.id}`);
                                field.classList.remove("have-success");
                                field.classList.remove("have-error");


                            }
                        });
                    }
                });
            });
        }
    });
}