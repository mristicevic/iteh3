import React,{useState} from "react";
import Mrvice from "../assets/mrvice.jpg";
import "../styles/About.css";
import  Modal  from "../helpers/Modal";

function About() {
  const [openModal, setOpenModal] = useState(false);
  return (

    

    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Mrvice})` }}
      >
        <div>
            <button 
            onClick={() => setOpenModal(true)} 
            className='modalButton'>
              Modal
            </button>
            <Modal 
            open={openModal} 
            onClose={() => setOpenModal(false)} />
          </div>
      </div>
      
      <div className="aboutBottom">
        <h1> Slatka kuća</h1>
        <p>
        Lorem ipsum dolor sit amet, et per oportere elaboraret. Usu debet vitae ex, id sed delenit pericula. Duo quas facete tincidunt ea, et vis adhuc accusam perpetua. Novum vivendo sensibus ius eu, nam tale harum prodesset in, ne vix nihil cetero torquatos. Cu eros tempor legendos mea.

Cu pro expetenda dignissim similique, qui primis gubergren at, pro alia vidisse eloquentiam ut. Partiendo repudiandae per ne, an cum illud dolore. Ea vim porro fierent legendos. Nisl perfecto incorrupte usu et. Ius laudem regione invenire ne, alii agam consul sit ne. Pri ne affert feugait docendi, ad ius brute choro ancillae.

An est iudico soleat. Oblique apeirian te sed. Vim affert probatus expetendis cu. Equidem urbanitas similique id ius, ut homero nemore similique sea, pro ne tota postea. Et eos nostro vocent habemus, mei iuvaret euripidis id. An usu reprimique intellegebat, his te magna interpretaris. Te vel modo atqui.

Sit oratio eleifend pertinacia ne, mel reque mollis eirmod te. At eam erant paulo nostrum, ferri magna veniam per eu. Voluptua definitionem mea at, at recteque electram mea. Urbanitas definiebas in qui. Ad perfecto philosophia per, vis clita congue diceret te. Cu dissentiet adversarium nam. Vim at eruditi sententiae, quo ut aperiri alterum salutatus, primis eripuit nominati ad vel.
          
        </p>
        
        

      </div>
    </div>
  );
}

export default About;
