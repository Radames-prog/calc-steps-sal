import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FaixasSalariais.css'


export default class FaixasSalariais extends Component{
    constructor(props){
        super(props)

        this.state = {
            salario:'998,00',
            amplitude:'50',
            


        }

       this.calcular = this.calcular.bind(this) 
    }
    calcular(){

        let fimAmplitude = parseFloat(this.state.salario)  / 100 * parseFloat(this.state.amplitude) + parseFloat(this.state.salario)
        let fimAmpl = `Salário Final: ${fimAmplitude}`
        this.setState({fimAmpl})
        let faixa1 = `Salário Inicial: ${this.state.salario}`
        this.setState({faixa1})

        let percentual = this.state.amplitude / 7
        let faixaTwo = parseFloat(this.state.salario)  / 100 * percentual + parseFloat(this.state.salario) 
        let faixa2 = `Faixa 2: ${faixaTwo.toFixed(2)}`
        this.setState({faixa2})

        let faixaTri = faixaTwo  / 100 * percentual + faixaTwo 
        let faixa3 = `Faixa 3: ${faixaTri.toFixed(2)}`
        this.setState({faixa3})

        let faixaFour = faixaTri  / 100 * percentual + faixaTri
        let faixa4 = `Faixa 4: ${faixaFour.toFixed(2)}`
        this.setState({faixa4})

        let faixaFive = faixaFour  / 100 * percentual + faixaFour
        let faixa5 = `Faixa 5: ${faixaFive.toFixed(2)}`
        this.setState({faixa5})

        let faixaSix = faixaFive  / 100 * percentual + faixaFive
        let faixa6 = `Faixa 6: ${faixaSix.toFixed(2)}`
        this.setState({faixa6})

        let text = `O exemplo acima mostra uma Faixa Salarial com sete níveis ou “steps” 
        de ${percentual.toFixed(2)}% cada, formando uma extensão ou amplitude de ${this.state.amplitude}% entre o início e o Salário final.`
        this.setState({text})
        


    }
    render(){
        return(
           <div className="faixas">
                <h1>Caluladora de Faixas/Steps Salariais</h1>
                <input type="text" defaultValue="" placeholder="Ex: 998,00 para o salário inicio"
                onChange={(event)=>{this.setState({salario:event.target.value})}}></input>
                <input type="text" defaultValue="" placeholder="Para aumento final de 50% informar Ex: 50"
                onChange={(event)=>{this.setState({amplitude:event.target.value})}}></input>
                <input type="button" value="Calcular"onClick={this.calcular}></input>

    <h2>{this.state.faixa1}</h2>
        <h2>{this.state.faixa2}</h2>
        <h2>{this.state.faixa3}</h2>
        <h2>{this.state.faixa4}</h2> 
        <h2>{this.state.faixa5}</h2>
        <h2>{this.state.faixa6}</h2>        
    <h2>{this.state.fimAmpl}</h2>
        <h5>{this.state.text}</h5> 
                    
            
           </div>
        )
    }
}