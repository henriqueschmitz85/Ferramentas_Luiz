function calcularImpostoERol() {
    const rob = parseFloat(document.getElementById("faturamento").value);

    if (!isNaN(rob) && rob > 0) {
        const imposto = rob * 0.2625;
        const rol = rob - imposto;

        document.getElementById("imp").textContent = imposto.toFixed(2);
        document.getElementById("rol").textContent = rol.toFixed(2);

        return rob; // <-- agora retorna o ROB, porque precisamos dele
    } else {
        return 0;
    }
}

function calcularMargem(rob) {
    const cmv = parseFloat(document.getElementById("cmv").value);
    const frete = parseFloat(document.getElementById("frete").value);

    if (!isNaN(cmv) && cmv > 0 && !isNaN(frete) && frete >= 0) {

        const imposto = rob * 0.2625;
        const rol = rob - imposto;
        const margem = rol - cmv - frete;

        // Apresenta o valor da margem
        document.getElementById("margem").textContent = margem.toFixed(2);

        // 📌 Agora calcula o percentual da margem sobre o ROB
        const percentual = (margem / rob) * 100;

        // Apresenta o percentual
        document.getElementById("percentual").textContent = percentual.toFixed(2) + "%";

        return margem;
    } else {
        return 0;
    }
}

function calcularTudo() {
    const rob = calcularImpostoERol();
    calcularMargem(rob);
}




