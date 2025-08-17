import Link from "next/link";

export default function Terms() {


  return <main className="w-full flex flex-col gap-[1rem] p-[1rem] text-[75%]">
    <h2 className="font-black">1. Termos</h2>
    <p className="font-light">Ao acessar ao site <Link className="underline!" href="https://pocoesdevolupia.club">Poções de Volúpia</Link>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
    <h2 className="font-black">2. Uso de Licença</h2>
    <p className="font-light">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Poções de Volúpia , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:&nbsp;</p>
    <ol className="list-decimal list-inside px-[1rem] flex flex-col gap-2">
      <li>modificar ou copiar os materiais;&nbsp;</li>
      <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);&nbsp;</li>
      <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Poções de Volúpia;&nbsp;</li>
      <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou&nbsp;</li>
      <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
    </ol>
    <p className="font-light">Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Poções de Volúpia a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>
    <h2 className="font-black">3. Isenção de responsabilidade</h2>
    <ol className="list-decimal list-inside px-[1rem] flex flex-col gap-2">
      <li>Os materiais no site da Poções de Volúpia são fornecidos 'como estão'. Poções de Volúpia não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
      <li>Além disso, o Poções de Volúpia não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
    </ol>
    <h2 className="font-black">4. Limitações</h2>
    <p className="font-light">Em nenhum caso o Poções de Volúpia ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Poções de Volúpia, mesmo que Poções de Volúpia ou um representante autorizado da Poções de Volúpia tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
    <h2 className="font-black">5. Precisão dos materiais</h2>
    <p className="font-light">Os materiais exibidos no site da Poções de Volúpia podem incluir erros técnicos, tipográficos ou fotográficos. Poções de Volúpia não garante que qualquer material em seu site seja preciso, completo ou atual. Poções de Volúpia pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Poções de Volúpia não se compromete a atualizar os materiais.</p>
    <h2 className="font-black">6. Links</h2>
    <p className="font-light">O Poções de Volúpia não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Poções de Volúpia do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>
    <h3>Modificações</h3>
    <p className="font-light">O Poções de Volúpia pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
    <h3>Lei aplicável</h3>
    <p className="font-light">Estes termos e condições são regidos e interpretados de acordo com as leis do Poções de Volúpia e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
  </main>
}