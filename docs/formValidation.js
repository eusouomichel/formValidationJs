/**
 * It checks inputs validations on each form and output to console if it has errors or not
 * @param {NodeList} forms Forms to validate
 * @author Michel Miléski
 * @author Lucas Souza <lucasouliveira@gmail.com>
 * @version 1.1.0
 */
export default function formValidate(forms) {
    forms.forEach(formToValidate => {
        formToValidate.onsubmit = event => {
            event.preventDefault();
            
            let error = false;
            
            console.log(`================ Formulário: ${formToValidate.id}`);
            
            const types = ['input', 'select', 'textarea'];
            types.forEach(type => {
                if (document.querySelectorAll(`#${formToValidate.id} ${type}`)) {
                    const anyFields = document.querySelectorAll(`#${formToValidate.id} ${type}`);
                    anyFields.forEach(field => {
                        if (field.required) {
                            field.classList.remove("have-success");
                            field.classList.remove("have-error");

                            const dataError = document.querySelector(`[data-error-from="${field.id}"]`);
                            if (dataError) dataError.remove();

                            if (field.type == 'checkbox') {
                                const allCheckbox = document.querySelectorAll(`input[name="${field.name}"]`);
                                allCheckbox.forEach(fieldCheckbox => {
                                    if (!fieldCheckbox.checked) {
                                        error = true;
                                        field.classList.add("have-error");
                                    }
                                });
                            } else {
                                if (!field.value) {
                                    const errorMessage = field.getAttribute("data-error-message") || "Este campo nessecita ser preenchido.";
                                    error = true;
                                    field.classList.add("have-error");
                                    document.querySelector(`#${field.id}`).insertAdjacentHTML("afterend", `<div class='this-error' data-error-from='${field.id}'>${errorMessage}</div>`);
                                } else {
                                    field.classList.add("have-success");
                                }
                            }
                        }
                    });
                }
            });

            const formDataError = document.querySelector(`[data-error-from="${formToValidate.id}"]`);
            if (formDataError) formDataError.remove();

            if (error) {
                formToValidate.insertAdjacentHTML("beforebegin", `<div class='form-error' data-error-from='${formToValidate.id}'>Por favor, corrija os erros marcados de vermelho.</div>`);
            } else {
                formToValidate.submit();
            }
            error ? console.error(`Error`) : console.info(`No Errors Found`);
        };

    });

}