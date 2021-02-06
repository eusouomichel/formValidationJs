/**
 * Script formValidationJs
 * @author Michel Miléski
 * @ano 2020
 * @version 0.1
 * 
 * TODO: criar classe de validação com funções para cada tipo de campo, e incluir validação para radioField
 * TODO: necessita criar funções de validação de CPF, CNPJ entre outros, para validar direto com base nos data-attributes
 * TODO: criar div para reportar erro geral (alerta que existe erros)
 * ! js > local dos itens de insert html
 * ! <!-- beforebegin -->
 * !    <div id="mydiv">
 * !        <!-- afterbegin -->
 * !            <p>Existing content in #mydiv</p>
 * !        <!-- beforeend -->
 * !    </div>
 * !<!-- afterend -->
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
                console.log(`================ Formulário: ${formToValidate.id}`);
                let types = ['input', 'select', 'textarea'];
                types.forEach((type) => {
                    if(document.querySelectorAll(`#${formToValidate.id} ${type}`)) {
                        let anyFields = document.querySelectorAll(`#${formToValidate.id} ${type}`);
                        anyFields.forEach((field) => {
                            if(field.required) {
                                console.log(`Campo: ${field.id} Type: ${field.type} Value: '${field.value}'`);
                                field.classList.remove("have-success");
                                field.classList.remove("have-error");
                                if(document.querySelector(`[data-error-from="${field.id}"]`)) {
                                    document.querySelector(`[data-error-from="${field.id}"]`).remove();
                                }

                                if(field.type == 'checkbox') {

                                } else {
                                    if(field.value == "") {
                                        field.classList.add("have-error");
                                        displayMsg(field.id, field.getAttribute("data-error-message"));
                                        erro = true;
                                    } else {
                                        field.classList.add("have-success");
                                    }
                                }
                            }
                        });
                    }
                });
            });
        }
    });
}

function displayMsg(idOrigem, mensagem) {
    if(!mensagem) {
        var mensagem = "Este campo nessecita ser preenchido.";
    }
    document.querySelector(`#${idOrigem}`).insertAdjacentHTML("afterend", `<div class='this-error' data-error-from='${idOrigem}'>${mensagem}</div>`);
}