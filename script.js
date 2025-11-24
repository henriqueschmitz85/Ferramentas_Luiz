function calcularMargem() {
    const custoGerencial = parseFloat(document.getElementById("custoGerencial").value);
    const valorVenda = parseFloat(document.getElementById("novoValorVenda").value);

    if (custoGerencial > 0 && valorVenda > 0) {
        const valorMkp = ((valorVenda / custoGerencial) - 1)*100;

        document.getElementById("resultado").textContent =valorMkp.toFixed(2) + "%";

        return valorMkp;
    } else {
        return 0;
    }

}

