class Ads extends React.Component {

  constructor() {
    super();
    this.state = {
     infos: [
            { disciplina: 'Sistemas Operacionais', carga: 66.7, periodo: 'Noturno'},
            { disciplina: 'Inglês', carga: 33.3, periodo: 'Noturno'},
            { disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno'},
            { disciplina: 'Introdução a Banco de Dados', carga: 66.7, periodo: 'Noturno'}
         ]      
    };
  }

  render() {   
    return (
    <div>
           <h2 align="center"> Componentes curriculares </h2>
    </div>
    )
  }

  renderTableData() {
      return this.state.infos.map((infos, index) => {
         const { disciplina, carga, periodo} = infos //destructuring
         return (
            <tr key={disciplina}>
               <td>{disciplina}</td>
               <td>{carga}</td>
               <td>{periodo}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h2 align="center"> Componentes curriculares </h2>
            <table id='infos'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }

  renderTableHeader() {
      let header = Object.keys(this.state.infos[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   render() {
      return (
         <div>
            <h2 align="center"> Componentes curriculares </h2>
            <table id='infos'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}



ReactDOM.render(<Ads />, document.getElementById('ads'));