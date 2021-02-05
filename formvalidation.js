/**
 * Script formValidationJs
 * @author Michel Miléski
 * @ano 2020
 * @version 0.1
 * 
 * TODO: criar classe de validação com funções para cada tipo de campo, e incluir validação para radioField
 * TODO: necessita criar funções de validação de CPF, CNPJ entre outros, para validar direto com base nos data-attributes
 * TODO: criar div para reportar erro geral (alerta que existe erros) e informar o erro abaixo de cada campo
 * 
 */
if(document.querySelectorAll('.formValidationJs')) {
    let erro;
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
                                console.log(`Campo: ${field.id} Type: ${field.type} Value: '${field.value}'`);
                                field.classList.remove("have-success");
                                field.classList.remove("have-error");
                                if(field.value == "") {
                                    field.classList.add("have-error");
                                    erro = true;
                                } else {
                                    field.classList.add("have-success");
                                }
                            }
                        });
                    }
                });
            });
        }
    });
}