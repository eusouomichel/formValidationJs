/**
 * Script formValidationJs
 * @author Michel Miléski
 * @ano 2020
 * @version 0.1
 * 
 * TODO: necessita criar funções de validação de CPF, CNPJ, EMAIL, NUMEROS entre outros, para validar direto com base nos data-attributes
 */
if(document.querySelectorAll('.formValidationJs')) {
    let formValidationJs = document.querySelectorAll('.formValidationJs');
    formValidationJs.forEach((formToValidate) => {
        if(document.querySelector(`#${formToValidate.id} button[type="submit"]`)) {
            let submitloginForm = document.querySelector(`#${formToValidate.id} button[type="submit"]`);
            submitloginForm.addEventListener("click", () => {
                let erro = false;
                event.preventDefault();
                console.log(`================ Formulário: ${formToValidate.id}`);
                let types = ['input', 'select', 'textarea'];
                types.forEach((type) => {
                    if(document.querySelectorAll(`#${formToValidate.id} ${type}`)) {
                        let anyFields = document.querySelectorAll(`#${formToValidate.id} ${type}`);
                        anyFields.forEach((field) => {
                            if(field.required) {
                                field.classList.remove("have-success");
                                field.classList.remove("have-error");
                                if(document.querySelector(`[data-error-from="${field.id}"]`)) {
                                    document.querySelector(`[data-error-from="${field.id}"]`).remove();
                                }

                                if(field.type == 'checkbox') {
                                    let allCheckbox = document.querySelectorAll(`input[name="${field.name}"]`);
                                    let erroCheck = true;
                                    allCheckbox.forEach((fieldCheckbox) => {
                                        if(fieldCheckbox.checked == true) {
                                            erroCheck = false;
                                        }
                                    });
                                    if(erroCheck == true) {
                                        erro = true;
                                        field.classList.add("have-error");
                                    }
                                } else {
                                    if(field.value == "") {
                                        let mensagem = field.getAttribute("data-error-message");
                                        if(field.getAttribute("data-error-message") == null) {
                                            mensagem = "Este campo nessecita ser preenchido.";
                                        }
                                        erro = true;
                                        field.classList.add("have-error");
                                        document.querySelector(`#${field.id}`).insertAdjacentHTML("afterend", `<div class='this-error' data-error-from='${field.id}'>${mensagem}</div>`);
                                    } else {
                                        field.classList.add("have-success");
                                    }
                                }
                            }
                        });
                    }
                });

                if(document.querySelector(`[data-error-from="${formToValidate.id}"]`)) {
                    document.querySelector(`[data-error-from="${formToValidate.id}"]`).remove();
                }
                if(erro == true) {
                    document.querySelector(`#${formToValidate.id}`).insertAdjacentHTML("beforebegin", `<div class='form-error' data-error-from='${formToValidate.id}'>Por favor, corrija os erros marcados de vermelho.</div>`);
                }
                console.log(`Status erro: ${erro}`);
            });
        }
    });
}