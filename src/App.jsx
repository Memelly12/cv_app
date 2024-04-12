import { useState } from 'react'

import { GeneralInfo } from './components/formpersonalinfo'
import { Formation } from './components/affiche_formationAndForm'
import { StudyForm } from './components/formStudy'
import { Button } from './components/button'
import { DisplayExp } from './components/affiche_experience'
import { ExperienceProf } from './components/experience '
import { CVBuilder } from './components/cv_builder'




import './App.css'


function App() {
 
  // usestates
  const [generalInfo, setGeneralinfo] = useState({
    fullName: "Memel Elie",
    profession:"Géomaticien",
    telephone: "0705689162",
    email: "memelelie123@gmail.com",
    imageURL: 'https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-ic%C3%B4ne-de-visage-anonyme-de-profil-personne-silhouette-grise-avatar-par-d%C3%A9faut-masculin-photo.jpg'
    
  })
  
  const [infoUniv, setInfoUniv] = useState([{
    name: "université felix houphouet boigny de cocody",
    filiere: "informatique",
    anneeStart: "2020",
    anneeEnd: "2022",
    niveau:"Licence",
    id: crypto.randomUUID(),
  }])
  const[formData, setFormData] = useState({
    name: "",
    filiere: "",
    annee: "",
    id:""

  })

  const [formData2, setFormData2] = useState({
    id:"",
    entrepriseNom: "",
    poste: "",
    start: "",
    end: "",
    description:""
  })
  const [infoExperience, setInfoExperience] = useState([{
    id:crypto.randomUUID(),
    entrepriseNom: "MA Services",
    poste: "Informaticien",
    start: "2017",
    end: "2015",
    description:"m'a permis de m'améliorer et d'apprendre d'avantage sur les technologies informatiques"
  }])
  const [isClicked, setClicked] = useState(false)
  const [displayFormExp, setDisplayFormExp] = useState(false)


  //fonction
  const handlechangeGeneralInfo = (e) => {
    const { name, value } = e.target;
    const newGeneralInfo = { ...generalInfo, [name]: value }
    setGeneralinfo(newGeneralInfo)
    console.log(generalInfo)
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
     const imageUrl = URL.createObjectURL(file)
      
        const newGeneralInfo = { ...generalInfo, imageURL: imageUrl };
        setGeneralinfo(newGeneralInfo);
    
    }
  };

  const handleClick = () => {
    
    setClicked(true);
  };
  const handleclick2 = () => {
   setDisplayFormExp(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const id = crypto.randomUUID()
    const newFormData = { ...formData, [name]: value, id: id  }  
    setFormData(newFormData)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newInfoUniv = [...infoUniv,  formData ]
    setInfoUniv(newInfoUniv)
    e.preventDefault();
    setClicked(false)
    
    
  }
  const handleDeleteClick = (idToDelete) => {
    

    const newInfoUniv = infoUniv.filter(info => info.id !== idToDelete);
    setInfoUniv(newInfoUniv)
  }
  const handleChangeExperience = (e) => {
    const { name, value } = e.target;
    const id = crypto.randomUUID()
    const newFormData = { ...formData2, [name]: value, id: id  }  
    setFormData2(newFormData)
  }
  const handleSubmitExperience = (e) => {
    e.preventDefault();
    
    const newInfoExperience = [...infoExperience,  formData2 ]
    setInfoExperience(newInfoExperience)
    e.preventDefault();
    setDisplayFormExp(false)
    
    
  }
  const handleDeleteClickExp = (idToDelete) => {
    

    const newInfoExperience = infoUniv.filter(infoE => infoE.id !== idToDelete);
    setInfoExperience(newInfoExperience)
  }
  


  
  console.log(infoUniv)
  console.log(infoExperience)
  console.log(generalInfo)


  return (
<>
    
      <section className="app">

              <div className="set">
                <div className="setGeneralinfo">
                    <GeneralInfo 
                    generalInfo={generalInfo}
              handleChange={handlechangeGeneralInfo}
              handleFileChange={handleFileChange}
                      />
                </div>
                <div className="setFormation">
                  
                  
                    <Formation
                    infoUniv={infoUniv}
                    handleclick2={handleDeleteClick}
                    /> 
                  <Button 
                    handleclick={handleClick}
                    textBtuton="Nouvelle formation"
                  />
                  { isClicked ?
                    <StudyForm
                      formData={formData}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    /> : null }
                  
                </div>
                <div className="setExperience">

                  <DisplayExp 
                    infoExperience={infoExperience}
                    handleclick2={handleDeleteClickExp}

                  />
                  < Button 
                    handleclick={handleclick2}
                    textBtuton="nouvelle experience"

                  />
                  {displayFormExp ? 
                    <ExperienceProf 
                      handlesubmit={handleSubmitExperience}
                      handlechange2={handleChangeExperience }
                      formData2={formData2}
                
                    />: null
                    }

                </div>
              </div>
              <div className='CVbuilder'>
                <CVBuilder 
                  generalInfo={generalInfo}
            infoUniv={infoUniv}
            infoExperience={infoExperience}

                />
        </div>
        
        
        </section>

      
     
      </>   
     
      
    
  )
}

export default App
