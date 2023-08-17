class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }
        
        if (metodoDePagamento !== 'debito' && metodoDePagamento !== 'credito' && metodoDePagamento !== 'dinheiro') {
            return "Forma de pagamento inválida!";
        }
        
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
 
        const itensExtrasParaPrincipais = {
            chantily: 'cafe',
            queijo: 'sanduiche'
        };

        const codigosDeCombos = new Set(['combo1', 'combo2']);

        const quantidadesDeItensExtras = {};
        
        let valorTotal = 0;
       
        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');

            if (!cardapio[codigo]) {
                return "Item inválido!";
            }
            
            if (itensExtrasParaPrincipais[codigo]) {
                const idItemPrincipal = itensExtrasParaPrincipais[codigo];
                const itemPrincipal = itens.find(item => item.startsWith(idItemPrincipal));

                if (!itemPrincipal) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }   
            
            valorTotal += cardapio[codigo] * parseInt(quantidade);
        }

    if (valorTotal === 0) {
        return "Quantidade inválida!";
    }    
    
    if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03;
        } 

        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };